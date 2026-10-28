
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzl72oXxG9ZNu50zXWLvfJyRmihCc6Ie3dRUsFUkMg_zLwzX_p_3sX7WvD03pf2PVKk/exec";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
const botao = document.getElementById("botao");

form.addEventListener("submit", function(evento) {
  evento.preventDefault();

const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzl72oXxG9ZNu50zXWLvfJyRmihCc6Ie3dRUsFUkMg_zLwzX_p_3sX7WvD03pf2PVKk/exec";
  if (URL_PLANILHA === "") {
    aviso.textContent = "Configure a URL do Google Apps Script.";
    return;
  }

  aviso.textContent = "Enviando candidatura...";
  botao.disabled = true;

  fetch(URL_PLANILHA, {
    method: "POST",
    mode: "no-cors",
    body: new FormData(form)
  })
    .then(function() {
      aviso.textContent =
        "Solicitação enviada! Confira a planilha para confirmar o cadastro.";

      form.reset();
    })
    .catch(function() {
      aviso.textContent =
        "Não foi possível enviar. Verifique sua conexão e tente novamente.";
    })
    .finally(function() {
      botao.disabled = false;
    });
});
