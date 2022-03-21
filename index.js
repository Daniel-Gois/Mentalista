var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado")

    var chute = parseInt(document.getElementById("valor").value)
    console.log(chute)
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou";
        } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML ="Você deve digiatr um número de 0 à 10";
    }
    
    else {
        elementoResultado.innerHTML ="Errou";
    }

}
