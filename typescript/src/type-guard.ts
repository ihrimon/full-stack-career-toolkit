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


    async function fetchUser(url: string): Promise<User | null> {
        const response = await fetch(url);
        const data: unknown = await response.json();

        if (isUser(data)) {
            return data;
        } else {
            console.log('Invalid user format', data);
            return null;
        }
    }
}

{
    function isMouseEvent(event: Event): event is MouseEvent {
        return 'clientX' in event && 'clientY' in event;
    }

    document.addEventListener('click', (event) => {
        if (isMouseEvent(event)) {
            console.log(`Mouse clicked at: (${event.clientX}, ${event.clientY})`)
        } else {
            console.log('Non-mouse event triggered')
        }
    })
}

{
    type Cat = { meow: () => void, type: 'cat' };
    type Dog = { bark: () => void, type: 'dog' }; // simplify

    type Animal = Cat | Dog;

    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).meow !== undefined;
    }

    function makeSound(animal: Animal) {

        if (isCat(animal)) {
            animal.meow();
        } else {
            animal.bark();
        }
    }
}

{
    // handle any types of  error like axios error, zod error, unknown error, validation error etc
    function isError(error: unknown): error is Error {
        return error instanceof Error;
    }

    try {
        throw new Error('Something went wrong!')
    } catch (error: unknown) {
        if (isError(error)) {
            console.log(`Error:, ${error.message}`);
        } else {
            console.log('Unknown error occurred.')
        }
    }
}