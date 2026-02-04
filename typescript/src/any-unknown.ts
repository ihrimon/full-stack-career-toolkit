{
    let data: any;

    data = 'Hello';
    data = 123;
    data = true;

    // console.log(data.toUpperCase()); // no compile time error but runtime error if 'data is not  a string'

}

{
    let data: unknown;
    data = 'Hello';
    data = 123;
    data = true;

    if (typeof data === 'string') {
        // console.log(data.toUpperCase()); // safe usage of unknown type
    }

    // console.log(data.toUpperCase()); // unsafe usage of unknown type // error: Property 'toUpperCase' does not exist on type 'unknown'.
}

{
    function processAsString(input: unknown) {
        const str = input as string; // type assertion
        // console.log(str.toUpperCase()); // Risky: if input is not a string, it will throw an error at runtime   
    }

    // processAsString('Hello');
    // processAsString(123); // error: Argument of type 'number' is not assignable to parameter of type 'string'.
}

{
    function processData(input: unknown) {
        if (typeof input === 'string') {
            console.log(input.toUpperCase());
        } else if (typeof input === 'number') {
            console.log(input.toFixed(2))
        } else if (Array.isArray(input)) {
            console.log(input.length)
        } else {
            console.log('Unknown type')
        }
    }

    // processData('Hello');
    // processData(123);
    // processData([1, 2, 3, 4]);
    // processData({})

}

{
    type User = {
        id: number;
        name: string;
    }

    function isUser(input: unknown): input is User {
        return (
            typeof input === 'object' && input !== null && 'id' in input && typeof (input as any).id === 'number' && 'name' in input && typeof (input as any).name === 'string'
        )
    }

    function processUser(input: unknown) {
        if (isUser(input)) {
            console.log(`User Id: ${input.id}, Name: ${input.name}`)
        } else {
            console.log('Input is not a valid user.')
        }
    }

    // processUser({ id: 1, name: 'Alice' }) // valid user
    // processUser({ id: '1', name: 'Bob' });
}

{
    type APIResponse = {
        status: string;
        data: unknown;
    }

    function handleAPIResponse(response: APIResponse) {
        if (typeof response.data === 'string') {
            console.log('Data is a string:', response.data.toUpperCase())
        } else if (typeof response.data === 'object' && response.data !== null) {
            console.log('Data is an object:', response.data);
        } else {
            console.log('Unexpected data type:', typeof response.data)
        }
    }

    const response1: APIResponse = { status: 'success', data: 'hello' }
    const response2: APIResponse = { status: 'success', data: { id: 1 } }

    console.log(response1);
    console.log(response2);
}