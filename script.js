// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-contato");
    const tabela = document.querySelector("#tabela-contatos tbody");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nome = form.nome.value.trim();
      const telefone = form.telefone.value.trim();
  
      if (!nome || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      // Adicionar o contato na tabela
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
      tabela.appendChild(novaLinha);
  
      // Limpar os campos do formulário
      form.reset();
    });
  });
  