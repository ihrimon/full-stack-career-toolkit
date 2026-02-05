type UserRoles = 'admin' | 'editor' | 'viewer';

const userPermissions: Record<UserRoles, string[]> = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['read', 'update'],
  viewer: ['read'],
};

