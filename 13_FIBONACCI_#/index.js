function fibonacci(n) {
  let a = 0;
  let b = 1;

  let sequencia = [];

  while (a <= n) {
    sequencia.push(a);
    const temp = a;
    a = b;
    b = temp + a;
  }
  return sequencia;
}

console.log(fibonacci(63)); // [0, 1, 1, 2, 3, 5]
