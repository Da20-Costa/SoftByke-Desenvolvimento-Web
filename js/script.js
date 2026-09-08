/* Objetivo: capturar o nome do usuário com prompt e exibir uma
   saudação personalizada na home, sem precisar do document.write
   (que apagaria a página se usado depois do carregamento) */
function exibirSaudacao() {
  var nomeVisitante;
  var caixaSaudacao = document.getElementById("saudacao");

  nomeVisitante = window.prompt(
    "Bem-vindo(a) à SoftByke! Qual o seu nome?"
  );

  if (nomeVisitante === null || nomeVisitante === "") {
    caixaSaudacao.innerHTML = "Olá, ciclista! Fique à vontade para pedalar pelo site.";
  } else {
    caixaSaudacao.innerHTML = "Olá, " + nomeVisitante + "! Bem-vindo(a) à SoftByke.";
  }
}

/* Objetivo: validar o e-mail do formulário de newsletter (evento onsubmit) */
function validarNewsletter() {
  var campoEmail = document.getElementById("emailNewsletter");
  var email = campoEmail.value;

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    window.alert("Digite um e-mail válido para receber nossas novidades.");
    return false;
  }

  window.alert("Obrigado! O e-mail " + email + " foi cadastrado com sucesso.");
  return false; /* impede o envio real, pois é apenas um protótipo */
}

/* Executa ao carregar qualquer página */
window.onload = function () {
  /* a saudação só existe na home */
  var caixaSaudacao = document.getElementById("saudacao");
  if (caixaSaudacao !== null) {
    exibirSaudacao();
  }
};
