let input=document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let AdivinhaaPalavrasecreta = "anime"

function adivinha(){
    let digitado = input.value
    if(digitado == AdivinhaaPalavrasecreta){
        div_resultado.innerText="acertou"
    }
    
    
}
