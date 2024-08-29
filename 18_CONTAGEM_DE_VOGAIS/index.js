const contarVogais = (str) => {
  let counter = 0;

  let string = str.toLowerCase().split("");

  string.forEach((letra) => {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      counter = counter + 1;
    }
  });
  return counter;
};

console.log(contarVogais("Willamy"));
