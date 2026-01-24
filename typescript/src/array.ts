const numbers: number[] = [1.1111, 2.2222, 3.3333, 4.4444, 5.5555];

numbers.forEach((n) => {
  console.log(n.toFixed(2));
});

const testsSring: string[] = numbers.map((n) => n.toFixed(3));
console.log(testsSring);
