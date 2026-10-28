alert("Bem-vindo à Vinheria Agnello!");

var totalCadastros = 0;
var estoqueBaixo = 0;
var menorAno = 9999;
var vinhoAntigo = "";
var continuar = "s";

while (continuar === "s") {
  var nome = prompt("Nome do vinho:");
  var tipo = prompt("Tipo do vinho (Tinto, Branco ou Rosé):");
  var ano = Number(prompt("Ano do vinho:"));
  var quantidade = Number(prompt("Quantidade em estoque:"));

  // validação
  if (
    nome === null ||
    nome.trim() === "" ||
    tipo === null ||
    tipo.trim() === "" ||
    !Number.isInteger(ano) ||
    ano <= 0 ||
    !Number.isInteger(quantidade) ||
    quantidade < 0
  ) {
    alert("Dados inválidos. Tente novamente.");
    continue;
  }

  totalCadastros++;

 // verificação
  if (quantidade < 5) {
    estoqueBaixo++;
    alert("Atenção: estoque baixo!");
  }

  // Classificão
  var idade = new Date().getFullYear() - ano;
  var classificacao;

  if (idade <= 3) {
    classificacao = "Jovem";
  } else if (idade <= 9) {
    classificacao = "Amadurecido";
  } else {
    classificacao = "Antigo";
  }
}
