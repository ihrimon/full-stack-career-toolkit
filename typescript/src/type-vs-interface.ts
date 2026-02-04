// type vs interface
// type is more flexible than interface

{// interface 
interface User {
    id: number;
    name: string;
}

interface Admin extends User {
    role: string;
}

interface Admin {
    status: string;
}

const admin: Admin = {
    id: 1,
    name: 'John',
    role: 'admin',
    status: 'active',
}

console.log(admin);
}


// type
{
    type User = {
        id: number;
        name: string;
    }

    type Admin = User & {
        role: string;
    }


}

{
    type AddFunc = (a: number, b: number) => number;

    interface IAddFunc {
        (a: number, b: number): number;
    }
}

{
    // problem with interface 
    type ID = number | string;

    interface IID {
        id: string | number;
    }
}
