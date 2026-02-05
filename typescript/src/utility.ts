type User = {
  readonly id: string;
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
console.log(user);

const updateUser = updatedUser(user.id, { role: 'admin' });
console.log(updateUser);
