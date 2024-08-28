function imc(peso, altura) {
  if (altura.toString().includes(",")) {
    altura = parseFloat(altura.replace(",", "."));
  }

  let imc = peso / (altura * altura);

  imc = imc.toFixed(2);

  imc = imc.replace(".", ",");

  return console.log(imc);
}

imc(65, 1.9);
