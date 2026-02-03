// Generic in typescript: tumi ja diba tai tomake return dibe. ei concept implement korar jonnoi generic esece. generic type 2-3 ta use kora uchit er ceye besi nah. tobe 2ta perfect.

function functionName<T>(value: T): T {
  console.log(value, typeof value);
  return value;
}

functionName(123);
functionName('123');
functionName(true);

{
  // merge objects
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const merged = mergeObjects({ a: 1 }, { b: 2 });
  const merged2 = mergeObjects({ name: 'Rimon', id: 1 }, { age: 25 });

  console.log(merged);
  console.log(merged2);
}

{
  const arr = [1, 2, 3, 4, 5];
  const mappedArr = arr.map((item) => item.toString());
  console.log(mappedArr);
}

{
  // simple generic type
  type MysteryBox<T> = {
    value: T;
  };

  const numberBox: MysteryBox<number> = { value: 1234 };

  type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
  };

  type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
  };

  async function fetchUser(): Promise<ApiResponse<User>> {
    const response = await fetch('https://api.example.users');
    const data = await response.json();

    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  }

  const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await fetch(url);
    const data = await response.json();

    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  };

  async function main() {
    const user = await fetchData<User>('https://api.example/users');
    console.log(user.data.id);

    const product = await fetchData<Product>('https://api.example/products');

    console.log(product.data.name);
  }

  
}
