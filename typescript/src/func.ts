/**
 * Typed parameters
 * Typed return values
 * Optional parameters
 * Default value
 * Rest parameters
 */

/**
 * This function takes two numbers and returns a string
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of the two numbers as a string
 *
 * @example
 * add(10, 5.55482) // 15.55
 */

function add(a: number, b: number): number {
  return parseFloat((a + b).toFixed(2));
}

// console.log(add(10, 5.55482));

function greet(
  name: string,
  message: string = 'Welcome to typescript world',
  ...rest: string[]
) {
  console.log(`Hello ${name}! ${message}`);
}

// greet('Rimon');
// greet('Imam', 'How is it going?');

enum EmployeeRole {
  DEVELOPER = 'DEVELOPER',
  MANAGER = 'MANAGER',
  HR = 'HR',
}

const employess: {
  id: number;
  name: string;
  role: EmployeeRole;
}[] = [];

employess.push({ id: 1, name: 'Imam', role: EmployeeRole.DEVELOPER });
employess.push({ id: 2, name: 'Hassan', role: EmployeeRole.MANAGER });
employess.push({ id: 3, name: 'Rimon', role: EmployeeRole.HR });

// console.log('Employess: ', employess);

function findById(id: number): {
  id: number;
  name: string;
  role: EmployeeRole;
} {
  const user = employess.find((item) => item.id === id);

  if (!user) throw new Error('User not found!');
  return user;
}

console.log(findById(2));
