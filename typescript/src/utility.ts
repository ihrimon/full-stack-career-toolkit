type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
};

type AllOptional = {
  test1?: string;
  test2?: string;
};

type NewUser = Omit<User, 'id' | 'role'>;
type PickUser = Pick<User, 'name' | 'email'>; // alternative
type UpdateUser = Partial<Omit<User, 'id'>>;
type AllRequired = Required<AllOptional>;
type ReadOnlyUser = Readonly<NewUser>;

function createUser(input: PickUser): User {
  return {
    id: crypto.randomUUID(),
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...input,
  };
}

function updatedUser(id: string, input: UpdateUser): User {
  return {
    ...user,
    ...input,
  };
}

const user = createUser({ name: 'Rimon', email: 'ihrimon@gmail.com' });
console.log('create user', user);

const updateUser = updatedUser(user.id, { role: 'admin' });
console.log('updateUser', updateUser);

type Roles = 'admin' | 'user' | 'viewer' | 'guest';
type ActiveRoles = Exclude<Roles, 'guest'>;
type ViewerRoles = Extract<Roles, 'viewer' | 'guest'>; // alternative

// non nullable utility type
type UserInput = string | null | undefined;
type ValidInput = NonNullable<UserInput>;

// return type
function fetchData() {
  return {
    id: 1,
    data: 'Mock data',
  };
}

type FetchData = typeof fetchData;
type FetchDataResult = ReturnType<FetchData>;

// promise
function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: crypto.randomUUID(),
          name: 'Rimon',
          role: 'user',
          email: 'example@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      1000,
    );
  });
}

type processUserReturnType = Awaited<ReturnType<typeof fetchUser>>;

function processUser(user: processUserReturnType) {
  console.log(user.email, user.name, user.role);
}
