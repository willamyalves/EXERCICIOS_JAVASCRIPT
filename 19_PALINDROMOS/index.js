const palindromo = (string) => {
  const stringLowerCase = string.toLowerCase();

  const stringReverse = stringLowerCase.split("").reverse().join("");

  if (stringLowerCase === stringReverse) return true;

  return false;
};

console.log(palindromo("Roma é amor"));
