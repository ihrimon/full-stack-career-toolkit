// throw an error
function throwError(message: string): never {
  throw Error(message);
}

// infinite loop
function intiniteLoop(): never {
  while (true) {
    console.log('This runs forever!');
  }
}

// exhaustive checks
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'triangle'; base: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      const _exhaustiveCheck: never = shape; // ensures all cases are hanled
      throw new Error(`Unhandled shape kind: ${_exhaustiveCheck}`);
  }
}
