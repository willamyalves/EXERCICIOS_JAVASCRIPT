const string = (str) => {
  const string = str.toString();

  return string.split("").reverse().join("");
};

console.log(string("Willamy"));
