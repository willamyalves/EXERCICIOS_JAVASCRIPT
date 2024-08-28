function calc(n1, operator, n2) {
  switch (operator) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;
    case "*":
      return n1 * n2;
      break;
    case "/":
      return n1 / n2;
      break;
    default:
      return "Undefined";
  }
}

console.log(calc(10, "-", 10));
