# 04. Modules & Package Management - Interview Q&A

[<- Back to Deep Dive](./README.md) · [<- Back to Node.js Roadmap](../README.md)

> Quick-fire Q&A for this topic - CommonJS, ESM, module resolution, `node_modules`, `package.json`, npm, SemVer, and publishing. Use the [deep dive](./README.md) for the full explanations and examples.

**Q1. Why do Node.js applications need modules?**

Modules give each file private scope and an explicit public API. They make dependencies visible, prevent accidental global state, and let a large application be tested and changed in smaller units.

**Q2. What is the difference between `exports` and `module.exports`?**

`exports` starts as a reference to `module.exports`, so `exports.parse = parse` works. Reassigning `exports = { parse }` only changes the local variable and leaves the real export unchanged. Assign `module.exports` when replacing the complete exported value.

**Q3. Why can two `require()` calls share state?**

CommonJS evaluates a module once and caches its exported value. Later calls return the cached value. This is useful for intentional singletons, but a module should export a factory function when each consumer needs independent state.

**Q4. How do you enable ES Modules in Node.js?**

Set `"type": "module"` in the nearest `package.json`, or use the `.mjs` extension. Use `.cjs` to force CommonJS inside an ESM package.

**Q5. What are the main differences between CommonJS and ESM?**

CJS uses runtime `require()` and `module.exports`; ESM uses statically declared `import`/`export`. ESM supports top-level `await`, normally requires extensions for relative Node imports, and uses `import.meta.url` instead of CommonJS's `__dirname` and `__filename`.

**Q6. Can CommonJS and ESM work together?**

Yes, with interop rules. ESM can import CommonJS with Node's interop behavior. CommonJS can load ESM through asynchronous `import()`, but synchronous `require()` cannot generally load an ES Module.

**Q7. How does Node resolve a package import?**

For a package specifier such as `express`, Node looks for the package in `node_modules`, walking upward from the importing file through parent directories. A package's `exports` or entry metadata then determines the public file. Relative specifiers are resolved from the importing file instead.

**Q8. Why should an application not import a transitive dependency directly?**

Only direct dependencies are part of the application's declared contract. A transitive package can be removed, relocated, or receive an incompatible version when another dependency changes. Declare it directly if your code imports it.

**Q9. What is the purpose of `package-lock.json`?**

It records the exact resolved dependency graph, versions, and integrity information. Committing it makes application installs reproducible across developer machines, CI, and production.

**Q10. What is the difference between `npm install` and `npm ci`?**

`npm install` can resolve dependencies from version ranges and update the lockfile. `npm ci` installs the exact lockfile graph in a clean `node_modules` directory and fails when the manifest and lockfile disagree, so it is appropriate for CI and deployments.

**Q11. What is the difference between `dependencies` and `devDependencies`?**

`dependencies` are needed when the application runs in production. `devDependencies` are tools used to develop, test, lint, or build it. A production install may omit dev dependencies, so runtime imports must be listed under `dependencies`.

**Q12. What does the `type` field in `package.json` control?**

It controls how `.js` files in that package scope are interpreted: `"commonjs"` treats them as CJS and `"module"` treats them as ESM. The `.cjs` and `.mjs` extensions override the package default.

**Q13. What is SemVer?**

Semantic Versioning uses `MAJOR.MINOR.PATCH`: major versions can break the public API, minor versions add backward-compatible features, and patch versions fix backward-compatible bugs. Ranges such as `^1.4.2` and `~1.4.2` determine which releases npm may select.

**Q14. What is the difference between `main` and `exports`?**

`main` is a traditional default entry point. `exports` is a modern, controlled package map that can expose multiple public subpaths and prevent consumers from importing private internal files. New libraries should generally define `exports` deliberately.

**Q15. Why should an application usually set `private: true`?**

It prevents accidentally publishing the application to npm. Libraries intended for publication omit `private` or set it to false, then use `files`, tests, and `npm pack --dry-run` to verify the package contents before release.
