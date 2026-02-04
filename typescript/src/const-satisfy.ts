// const type is uses for readonly and fixed

const OrderStatus = {
    pending: 'pending',
    shipped: 'shipped',
    delivered: 'delivered'
} as const;

function generateColorForOrder(status: keyof typeof OrderStatus) {
    switch (status) {
        case OrderStatus.pending:
            return 'red';

        case OrderStatus.delivered:
            return 'green';
        case OrderStatus.shipped:
            return 'blue';

        default:
            return 'gray'
    }
}

generateColorForOrder(OrderStatus.delivered);

const COLORS = ['red', 'green', 'blue'] as const;
type Color = (typeof COLORS)[number];


{
    type Action = { type: 'ADD'; payload: number } | { type: 'DELETE'; id: string };

    const action = {
        type: 'ADD',
        payload: 1
    } satisfies Action;

    const action2 = {
        type: 'DELETE',
        id: '1'
    } satisfies Action;

    // TypeScript ensures 'action' matches the 'Action' type while still allowing type inference
}

{
    type RolePermissions = {
        admin: string[];
        user: string[];
        guest: string[]
    }

    const permissions = {
        admin: ['read', 'write', 'delete'],
        user: ['read', 'write'],
        guest: ['read'],
        // extraRole: ['unknown'] // allowed but not part of 'RolePermission'
    } satisfies RolePermissions;

    // type of permissions is validated against role permissions.
    // but 'extraRole' can still exist as an excess property.
}