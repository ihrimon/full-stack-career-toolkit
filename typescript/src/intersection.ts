{
  type ID = number | string;

  type Person = {
    id: ID;
    name: string;
    age: number;
  };

  type Employee = Person & {
    role: 'employee';
    department: string;
    salary: number;
  };

  type Customer = Person & {
    role: 'customer';
    balance: number;
  };

  const user: Customer = {
    id: 'C123',
    name: 'Alice',
    age: 30,
    role: 'customer',
    balance: 2500,
    // salary: 50000, // Error: Property 'salary' does not exist on type 'Customer'.
  };
}


{
    type BaseProps = {
        id: number;
        className?: string;
    }

    type ButtonProps = BaseProps & {
        label: string;
        onClick: () => void;
    }

    type InputProps = BaseProps & {
        placeholder?: string;
        value: string;
        onChange: (newValue: string) => void;
    }

    // union type joined with intersection type
    type ComponentProps = ButtonProps | InputProps;

}