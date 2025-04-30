//lista de palavras
let palavras = [
    {palavra:"jogo de futebol",dicas:[" bola", " pessoas"," narrador"]},
    {palavra:"cristiano ronaldo",dicas:["  estangeiro", " coroa portuguesa"," eu sou melhor"]},
    {palavra:"formula 1",dicas:["carros"," velocidade"," pilotos"]},
    {palavra:"anime",dicas:["animação ","história ","poderes além dos seus limites "]},
]


//elementos 
let input = document.getElementById("txt_input")
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
function mostrar_dica(){
    paragrafo_dica.textContent="Dica: "+ dicas[0]

}
