function faixaEtaria(idade) {
  if (idade < 0 || typeof idade !== "number") return "Idade inválida";
  if (idade >= 0 && idade <= 12) return "Criança";
  if (idade >= 13 && idade <= 17) return "Adolescente";
  if (idade >= 18 && idade <= 59) return "Adulto";
  if (idade >= 60) return "Idoso";
}

console.log(faixaEtaria(-5));
