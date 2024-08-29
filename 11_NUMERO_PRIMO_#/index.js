function numPrimo(n) {
  if (n <= 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

for (let i = 2; i <= 50; i++) {
  if (numPrimo(i)) {
    console.log(i);
  }
}
