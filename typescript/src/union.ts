type ID = number | string;

type Admin = {
  id: ID;
  role: 'admin';
  fullControl: boolean;
};

type Manager = {
  id: ID;
  role: 'manager';
};

type User = Admin | Manager;

function getUserRole(user: User) {
  if (user.role === 'admin') {
    return user.fullControl ? 'Admin with full control' : '';
  } else if (user.role === 'manager') {
    return 'Manager';
  }
}

{
  function formatValue(value: string | number): string {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else {
      return value.toFixed(2);
    }
  }

  console.log(formatValue('user'));
  console.log(formatValue(123.45645));
}

{
  type ErrorResponse = {
    error: true;
    message: string;
  };

  type SuccessResponse = {
    error: false;
    data: string;
  };

  type APIResponse = ErrorResponse | SuccessResponse;

  function handleResponse(response: APIResponse) {
    if (response.error) {
      console.error('Error:', response.message);
    } else {
      console.log('Data:', response.data);
    }
  }

  console.log(handleResponse({error: true, message: 'Something went wrong'}))
}
