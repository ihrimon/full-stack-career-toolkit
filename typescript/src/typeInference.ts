// System automatically infers the types based on the assigned values
{
  const age2 = 30;
  const userName = 'Imam';
  const isAdmin = true;

  const numbers2 = [1, 2, 3, 4, 5];
  const names2 = ['Imam', 'Hassan', 'Rimon'];
  const flags2 = [true, false, true];
}

// function with inferred return type
{
  function multiply(x = 2, y = 3) {
    return x * y;
  }

  multiply(5, 10);
}

// Object type inference
{
  const user = {
    id: 1,
    name: 'Imam',
    isAdmin: true,
    age: 30,
  };

  user.name = 'Rimon';
  user.age = 24;


// real example of type inference in functions

  function printUserInfo(inputUser: typeof user) {
    console.log(
      `User Info: ID=${inputUser.id}, Name=${inputUser.name}, Age=${inputUser.age}, IsAdmin=${inputUser.isAdmin}`,
    );
  }
}

// another example of type inference in callback function
{
  const numbs = [1, 2, 3, 4, 5];
  const squaredNumbers = numbs.map((num) => num * num);
}

// without inference
{
  function validateForm(formData: {
    email: string;
    age: number;
    isAdmin: boolean;
  }): boolean {
    const email: string = formData.email;
    const age: number = formData.age;
    const isAdmin: boolean = formData.isAdmin;

    if (email.includes('@') && age > 18) {
      return true;
    }
    return false;
  }
}

// with inference
{
  function validateForm(formData: {
    email: string;
    age: number;
    isAdmin: boolean;
  }) {
    // TypeScript infers the types of `email`, `age`, and `isAdmin`
    const { email, age, isAdmin } = formData;

    return email.includes('@') && age > 18;
  }
}

/**
 * Why Type Inference Matters?
 * - Readability: Reduces clutter by eliminating unnecessary type annotations.
 * - Developer Efficiency: Saves time by not requiring explicit tpes for obvious cases.
 * - Maintainability: Easier to maintain code as types are inferred automatically.
 * - Error Reduction: Minimizes the risk of type mismatches by leveraging TypeScript's inference capabilities.
 * - Scalability: In large codebases, type inference helps manage complexity by reducing boilerplate code.
 * - Flexibility: Allows developers to write more generic and reusable code without being bogged down by explicit types.
 * - Fewer Bugs: By relying on TypeScript's inference, developers can avoid certain types of bugs that arise from incorrect type annotations.
 *
 * Best Practices for using type inference:
 * - Trust TypeScript: Use inference where possible, but provide explicit types when clarity is needed:
 *  - Public APIs
 * - function parameters
 * - Complex Return Types
 * - Complex Data Structures
 * - Function Signatures
 * - Use Type Inference with Generics: Leverage generics to create flexible and reusable components while still benefiting from type inference.
 * Combine with explicit types: use type inference for local variables but provide types for more complex structures.
 * - Avoid any: Relying on inference discourages the use of the any type, improving type safety.
 *
 */
