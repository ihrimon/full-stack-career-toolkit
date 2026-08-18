# 04. Modules & Package Management - Deep Dive

[<- Back to Node.js Roadmap](../README.md)

> The checklist version of this topic lives in [`NodeJS/README.md § 04`](../README.md#04-modules--package-management). A Node application is not one giant script: modules define boundaries, `package.json` describes the project, and the package manager makes those decisions reproducible.

## In This Deep Dive

- [Why Modules Exist](#why-modules-exist)
- [CommonJS](#commonjs)
- [ES Modules](#es-modules)
- [CJS vs ESM](#cjs-vs-esm)
- [How Node Resolves an Import](#how-node-resolves-an-import)
- [The `node_modules` Tree](#the-node_modules-tree)
- [`package.json` Deep Dive](#packagejson-deep-dive)
- [npm and SemVer](#npm-and-semver)
- [Creating and Publishing a Package](#creating-and-publishing-a-package)

## Why Modules Exist

Modules give each file a private scope and an explicit public API. That prevents unrelated files from sharing mutable variables accidentally and makes dependencies visible at the top of a file.

```
private implementation -> export -> import -> consumer
```

Treat the exported value as a contract. A small, stable export is easier to test and replace than a module that exposes its entire internal state.

## CommonJS

CommonJS (CJS) is Node's original module system. Each file is wrapped, evaluated the first time it is required, and then cached. `module.exports` is the value a module gives to its consumer.

```js
// math.js
const secret = 42;

function add(left, right) {
  return left + right;
}

module.exports = { add };
```

```js
// index.js
const { add } = require('./math');

console.log(add(2, 3)); // 5
```

The `exports` variable initially points at `module.exports`, so adding properties is fine. Reassigning `exports` is not:

```js
exports.add = add; // works: adds to module.exports
exports = { add }; // does not work: breaks the reference
module.exports = { add }; // works: replaces the exported value
```

**The bug this explains - shared mutable module state:**

```js
// counter.js
let count = 0;
module.exports = { next: () => ++count };
```

Every `require('./counter')` receives the same cached object and the same `count`. This is useful for intentional singletons such as configuration, but surprising when a module is expected to create fresh state. Export a factory function when each consumer needs isolation.

```js
module.exports = function createCounter() {
  let count = 0;
  return { next: () => ++count };
};
```

## ES Modules

ES Modules (ESM) use standard JavaScript `import` and `export` syntax. Enable ESM with `"type": "module"` in the nearest `package.json`, or use `.mjs` for an individual file. Use `.cjs` to force CommonJS inside an ESM package.

```json
{
  "type": "module"
}
```

```js
// math.js
export function add(left, right) {
  return left + right;
}

export default function multiply(left, right) {
  return left * right;
}
```

```js
// index.js
import multiply, { add } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

Unlike CJS, ESM imports are statically declared and linked before the module body runs. That enables reliable tooling, tree-shaking, live bindings, and top-level `await`. In Node, relative ESM imports should include their file extension.

```js
// ESM equivalent of __dirname and __filename
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, 'config.json');
```

ESM can load a CommonJS module, but the reverse direction is more constrained. A CJS module can use `import()` to load ESM asynchronously:

```js
// CommonJS file
async function loadFormatter() {
  const { formatPrice } = await import('./format-price.mjs');
  return formatPrice(1299);
}
```

## CJS vs ESM

| Concern            | CommonJS                                       | ES Modules                                 |
| ------------------ | ---------------------------------------------- | ------------------------------------------ |
| Syntax             | `require`, `module.exports`                    | `import`, `export`                         |
| Enable             | Default in many older Node projects, or `.cjs` | `"type": "module"`, or `.mjs`              |
| Relative extension | Often optional                                 | Include it in Node imports                 |
| File metadata      | `__dirname`, `__filename`                      | `import.meta.url`                          |
| Loading model      | Runtime, synchronous `require()`               | Static linking, supports top-level `await` |
| Interop            | Can consume CJS; use `import()` for ESM        | Can import CJS with interop rules          |
| Best fit           | Existing CJS codebases and older packages      | New code and standard JavaScript tooling   |

Pick one convention for a project. Mixing is possible, but it adds interop rules, duplicate dependency graphs, and confusing default-export behavior. When migrating, change the package boundary deliberately and test every import of the public API.

## How Node Resolves an Import

When Node sees `require('./utils')` or `import './utils.js'`, it resolves the specifier relative to the importing file. The broad resolution categories are:

```
./ or ../  -> file or directory relative to the importer
/absolute  -> exact absolute path
package   -> package exports, then package resolution rules
node:     -> a built-in Node module, e.g. node:fs
```

For a relative CJS request such as `require('./utils')`, Node historically tries a file and then directory forms such as `utils.js`, `utils.json`, `utils.node`, and `utils/package.json`'s `main` entry. Modern packages should prefer explicit extensions and the `exports` field; ESM does not use the old extension guessing behavior for relative imports.

For a package request such as `require('express')`, Node walks upward from the importing file looking for `node_modules/express`, then continues through parent directories. This is why a dependency installed at a workspace root can be available to a nested package, while a package cannot reliably import a dependency installed only inside a sibling package.

Use the `node:` prefix for built-ins:

```js
import fs from 'node:fs/promises';
import path from 'node:path';
```

It makes the dependency unambiguous and prevents a third-party package from being mistaken for a core module.

## The `node_modules` Tree

`npm install` builds a dependency tree from `package.json` and the lockfile. Direct dependencies are listed in your manifest; transitive dependencies are packages required by those dependencies.

```
my-app/
├── package.json
├── package-lock.json
└── node_modules/
    ├── express/             # direct dependency
    ├── accepts/             # transitive dependency
    └── ...
```

npm may flatten compatible versions to the nearest common `node_modules` directory. If two packages require incompatible versions, one version can be nested under the package that needs it. Do not import a transitive dependency directly: it is not part of your application's declared contract and can disappear after an unrelated upgrade.

`package-lock.json` records the resolved versions, integrity hashes, and dependency relationships. Commit it for applications so local, CI, and production installs use the same graph. `node_modules` is generated output and normally belongs in `.gitignore`.

## `package.json` Deep Dive

```json
{
  "name": "orders-api",
  "version": "1.2.0",
  "private": true,
  "type": "module",
  "main": "./src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "test": "node --test"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "eslint": "^9.0.0"
  },
  "engines": {
    "node": ">=20"
  }
}
```

| Field             | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| `name`            | Package identifier; required for published packages          |
| `version`         | Package version, normally following SemVer                   |
| `private`         | Prevents accidental publishing of an application             |
| `type`            | Determines whether `.js` files are CJS or ESM                |
| `main`            | Legacy/default entry point for consumers                     |
| `exports`         | Modern, controlled public entry points and import conditions |
| `scripts`         | Named commands run with `npm run <name>`                     |
| `dependencies`    | Required at runtime in production                            |
| `devDependencies` | Tools needed to develop, test, or build                      |
| `engines`         | Documents supported Node and package-manager versions        |

`main` is useful for compatibility, but new libraries should usually define an explicit `exports` map:

```json
{
  "exports": {
    ".": "./src/index.js",
    "./package.json": "./package.json"
  }
}
```

This prevents consumers from reaching into private paths such as `your-package/src/internal/database.js`. A package can expose different files for `import` and `require`, but dual-publishing requires careful testing because the two entry points can accidentally create two copies of singleton state.

## npm and SemVer

```text
npm install express              # add a runtime dependency
npm install -D eslint             # add a development dependency
npm install express@5             # install a chosen major line
npm uninstall express
npm ci                            # exact clean install from lockfile
npm outdated
npm audit
npm run test
npx create-something              # run a package binary without global install
```

Semantic Versioning uses `MAJOR.MINOR.PATCH`:

- **MAJOR**: breaking public API change
- **MINOR**: backward-compatible feature
- **PATCH**: backward-compatible bug fix

Common ranges are easy to misread. `^1.4.2` allows `1.x.x` but not `2.0.0`; `~1.4.2` allows `1.4.x`; `1.4.2` requests exactly that version. The lockfile still matters because ranges also apply to transitive dependencies.

Use `npm install` when intentionally changing dependencies and updating the lockfile. Use `npm ci` in CI and deployment: it removes the existing `node_modules`, installs the lockfile's exact graph, and fails if the manifest and lockfile disagree.

Local package binaries are available through npm scripts and `npx`/`npm exec`; global installs are best reserved for tools you invoke directly from a shell. For reproducible project commands, keep the tool local and invoke it from a script.

Yarn and pnpm solve the same dependency-management problem with different lockfiles and installation strategies. Pick one package manager per repository and commit only its lockfile (`package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`).

## Creating and Publishing a Package

Create a package skeleton with:

```bash
mkdir string-tools
cd string-tools
npm init -y
```

Then define a small public API, add tests, set `name` and `version`, and use `npm pack --dry-run` to inspect exactly what will be published. Use the `files` field or `.npmignore` to exclude tests, local configuration, and build artifacts that consumers do not need.

Before publishing, verify the package from a clean temporary project. A published package is a public contract: avoid committing secrets, do not rely on undeclared dependencies, and document supported Node versions. Set `"private": true` for applications that should never be published.

```bash
npm login
npm pack --dry-run
npm publish
```

For scoped packages, `npm publish --access public` is commonly needed for a first public release. Publishing is generally permanent, so choose the package name and public API carefully. Release a new version for every published change; never overwrite an existing version.

> **Practical rule:** applications optimize for reproducible installs (`package-lock.json`, `npm ci`, `private: true`); libraries optimize for a stable public contract (`exports`, SemVer, tests, and a deliberate package surface).

---

**[Interview Q&A for this topic ->](./interview-qa.md)**
