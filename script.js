// Mensagem de boas-vindas dinâmica
const hora = new Date().getHours();
let mensagem = "";
if (hora < 12) mensagem = "Bom dia! Bem-vindo ao Minimercado!";
else if (hora < 18) mensagem = "Boa tarde! Confira nossas promoções!";
else mensagem = "Boa noite! Aproveite nossas ofertas de hoje!";
document.getElementById("welcome").innerText = mensagem;

// Validação simples do CPF (11 dígitos numéricos)
document.getElementById("formCadastro").addEventListener("submit", function(event) {
  const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
  if (cpf.length !== 11) {
    alert("CPF inválido. Digite os 11 números.");
    event.preventDefault();
  }
});

// Simulação de adicionar ao carrinho
const botoes = document.querySelectorAll(".btn-add");
botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Produto adicionado ao carrinho!");
  });
});
