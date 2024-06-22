const corpo = document.querySelector("main")
const display_conteudo = document.querySelector(".display-trecho_conteudo")
const display_codigo = document.querySelector(".display-trecho_codigo")

corpo.addEventListener('click', (e)=> {
    if(e.target != corpo || e.target){
        let texto = e.target
        let textoCodigo = `${e.target}`
        display_conteudo.innerHTML = `<p> ${texto.innerHTML} </p>`;
        display_codigo.innerHTML = `<code> ${textoCodigo} </code>`;
        console.log(textoCodigo)
        
    }
    
})