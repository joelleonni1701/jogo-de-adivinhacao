//lista de palavras
let palavras = [
    {palavra:"video games",dicas:["bola 1", "pessoas 2","narrador 3"]},
    {palavra:"melhoer do mundo",dicas:["estangeiro 1", "coroa portuguesa 2","eu sou melhor 3"]},
    {palavra:"formula 1 ",dicas:["carros 1","velocidade 2","pilotos 3"]},
    {palavra:"anime",dicas:["animação 1","história 2","poderes além dos seus limites 3 "]},
]


//elementos 
let input=document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let paragrafo_dica = document.getElementById("paragrafo_dicas")
let paragrafo_tentativas = document.getElementById("paragrafo_tentativas")

//seleciona as palavras e dicas
let AdivinhaaPalavrasecreta = palavras[Math.floor(Math.random() * palavras.length)]
let palavra_selecionada = AdivinhaaPalavrasecreta.palavra.toLowerCase()
let dicas = AdivinhaaPalavrasecreta.dicas
let tentativas = dicas.length

//funçao de adivinha
function adivinha(){
    let digitado = input.value.trim().toLowerCase()
    if(digitado == palavra_selecionada){
        div_resultado.innerHTML = "Acertou"

    } else {
        tentativas --
        div_resultado.innerHTML = "Errou!"
        if(tentativas > 0) {
            paragrafo_dica.textContent = "Dicas: " + dicas[dicas.length - tentativas]
            paragrafo_tentativas.textContent = "Tentativas: " + tentativas
        } 
    }
}
