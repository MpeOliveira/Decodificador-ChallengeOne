
function criptografarMensagem() {
    let campoTexto = document.getElementById('input').value;
    let textoCriptografado = campoTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');    

    mostrarTextoCriptografado(textoCriptografado);

    document.getElementById("btn_copiar").style.display = "block";
}

function descriptografarMensagem() {
    let campoTexto = document.getElementById('input').value;
    let textoDescriptografado = campoTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarTextoCriptografado(textoDescriptografado);

    document.getElementById("btn_copiar").style.display = "block";
}

function mostrarTextoCriptografado(campoTexto) {
    // Oculta a imagem 
    let ocultarImagem = document.getElementById("imagem-substituir");
    ocultarImagem.style.display = "none";

    // Ocultar o paragrafo
    let ocultarParagrafo = document.querySelector(".conteudo__paragrafo");
    ocultarParagrafo.style.display = "none";

    let ocultarMensagemAviso = document.querySelector(".conteudo__mensagem");
    ocultarMensagemAviso.style.display = "none";

    // Mostra o texto criptografado/descriptografado
    let mostrarTexto = document.getElementById("resultado");
    mostrarTexto.innerText = campoTexto;
    mostrarTexto.style.display = "block";

}

function copiarTexto() {
    let botaoCopia = document.getElementById("btn_copiar");
    if (resultado.value !== "") {
      resultado.select();
      resultado.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(resultado.value);
      alert("Mensagem copiada!");
      location.reload();
    }

    botaoCopia.onclick = copiarTexto;
}


function filtrarTexto(campo) {
    campo.value = campo.value.replace(/[^a-z0-9,. ]/g, '');
}

document.getElementById("ano").textContent = new Date().getFullYear();

