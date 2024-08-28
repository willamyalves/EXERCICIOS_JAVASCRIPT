function sumUntil(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma = soma + i;
  }
  return soma;
}

console.log(sumUntil(1234));
