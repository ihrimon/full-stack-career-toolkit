type CustomUser = {
    id: number;
    firstName: string;
    lastName?: string;
    age: number;
    score?: number;
}

type CustomUserKeys = keyof CustomUser; // 'id' | 'firstName' | 'lastName' | 'age' | 'score'
type FilterCriteria = {
    [K in CustomUserKeys]?: CustomUser[K];
};

type FieldsToAggregate = 'score' | 'age';

type TransformedUser = {
    id: number;
    fullName: string;
    score: number;
    age: number;
}

function processUsers(
    users: CustomUser[],
    criteria: FilterCriteria = {},
    fieldsToAggregate: FieldsToAggregate[] = []) {

    const filteredUsers = users.filter((user) => {
        return Object.keys(criteria).every((key, value) => user[key as CustomUserKeys] === value);
    });

    const aggregatedData = fieldsToAggregate.reduce((acc, field) => {
        acc[field] = filteredUsers.reduce((sum, user) => {
            if (user[field] && typeof user[field] === 'number') {
                return sum + user[field];
            }
            return sum;
        }, 0);
        return acc;
    }, {} as Record<FieldsToAggregate, number>);

    const transformedUsers = filteredUsers.map((user) => {
        return {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName ?? ''}`.trim(),
            ...aggregatedData,
        };
    });

    return transformedUsers;
}

const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25, score: 85 },
    { id: 2, firstName: 'Jane', age: 30 },
    { id: 3, firstName: 'Jim', lastName: 'Beam', age: 35, score: 95 },
];

console.log(processUsers(users, { age: 25 }, ['score', 'age']));
console.log(processUsers(users, { lastName: 'Doe' }, ['score', 'age']));
console.log(processUsers(users, { score: 95 }, ['score', 'age']));
console.log(processUsers(users, { score: 95, age: 30 }, ['score', 'age']));
console.log(processUsers(users, { score: 95, age: 30 }, ['score', 'age']));