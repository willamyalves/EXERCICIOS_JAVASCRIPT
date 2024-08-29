const fatorial = (n) => {
  sequence = [];
  let value = 1;

  for (let i = 1; i <= n; i++) {
    sequence.push(i);
  }
  sequence.forEach((fator) => {
    value = value * fator;
  });
  return value;
};

console.log(fatorial(2));
