function enviarMensagem() {
  
  let inputMensagem = document.querySelector("#inputMensagem");
  let mensagem = inputMensagem.value;
  if (mensagem === "") {
    alert("Por favor, digite uma mensagem antes de enviar.");
    return; // Sai da função se a mensagem estiver vazia
  }


  let areaDeMensagens = document.querySelector(".areaDeMensagens");

  let novaMensagem = document.createElement("div");
  novaMensagem.className = "mensagem";

  novaMensagem.innerHTML = `
    <div class="texto">
      ${mensagem}
    </div>
    <div class="btnMensagem">
      <button class="editar" onclick="editarMensagem(this)">Editar</button>
      <button class="excluir" onclick="excluirMensagem(this)">Excluir</button>
    </div>
  `;

  areaDeMensagens.appendChild(novaMensagem);

  inputMensagem.value = "";
}

function excluirMensagem(botaoExcluir) {
  let mensagemParaExcluir = botaoExcluir.closest(".mensagem");
  mensagemParaExcluir.remove();
}

function editarMensagem(botaoEditar) {
  let mensagemParaEditar = botaoEditar.closest(".mensagem");
  let textoMensagem = mensagemParaEditar.querySelector(".texto");
  let novoTexto = prompt("Digite o novo texto:");
  
  if (novoTexto !== null) {
    textoMensagem.textContent = novoTexto;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let enviar = document.querySelector("#Enviar");
  enviar.addEventListener("click", enviarMensagem);
});