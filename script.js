const corpo = document.querySelector("main")
const display_conteudo = document.querySelector(".display-trecho_conteudo")
const display_codigo = document.querySelector(".display-trecho_codigo")
const corpo_usuario = document.querySelector(".corpo-usuario")
const checkbox = document.getElementById("editar-conteudo")

corpo.addEventListener('click', (e)=> {
    localClicado(e.target)
    editarConteudo(e.target)
})

checkbox.addEventListener('blur', (e) => {
    editarConteudo()
})  

function editarConteudo(localClick) {
    if(checkbox.checked == true){
        display_conteudo.contentEditable = "true"
    }else {
        display_conteudo.contentEditable = "false"
    }
}

function atualizarConteudo() {
    let conteudoAtualizado = document.querySelector(conteudo_class)
}

function localClicado(localClick) {
    if(localClick != corpo){
        let texto = localClick
        let textoCodigo = `${localClick.nodeName}`
        display_conteudo.innerHTML = `<p> ${texto.innerHTML} </p>`;
        display_codigo.innerText = `<${textoCodigo}> ${texto.innerHTML} <${textoCodigo}>`;
    }

    if (localClick == corpo_usuario) {
        display_conteudo.innerHTML = "";
        display_codigo.innerText = "";
    }
}