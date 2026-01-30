{
  type Name = string; // type alias
  type ID = string | number; // type alias for union type

  function getUserInfo(id: ID, name: Name) {
    return `User ID: ${id}, Name: ${name}`;
  }

  getUserInfo(123, 'Alice');
  getUserInfo('456', 'Bob');
  // getUserInfo(789, 42); // This will cause a TypeScript error

  type User = {
    id: ID;
    firstName: string;
    lastName?: string;
    skills: string[];
  };

  //   return type for User type alias
  function createUser(firstName: string, lastName?: string): User {
    return {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      skills: [],
    };
  }

  function createUser2(firstName: string, lastName?: string) {
    const user: User = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      skills: [],
    };

    return user;
  }

  function createUser3(firstName: string, lastName?: string) {
    const user = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
    } as User;

    return user;
  }
  // type annotation examples: Powerful ways to use type aliases
  // satisfies operator satisfies User type
  // as operator type casting as a User (dangerous if the structure doesn't match)
}

{
  type User = {
    id: string | number;
    firstName: string;
    lastName?: string;
    skills: string[];
    address: {
      street: string;
      city: string;
      country: string;
      position?: {
        lat: number;
        lng: number;
      };
    };
  };
  type Address = User['address']; // type alias for nested object type
  type Position = User['address']['position']; // type alias for deeply nested object type
  type Skill = User['skills'][number]; // type alias for array element type

  function printAddress(address: Address) {
    console.log(
      `Address: ${address.street}, ${address.city}, ${address.country}`,
    );
  }

  // as parameter type example
  // const user = JSON.parse(UserData) as User;
}

{
    // function type define
    type Func = () => void; // basic signature
    
}

