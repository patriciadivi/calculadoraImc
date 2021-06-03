let botaoCalcular = document.getElementById('btnCalcular')

function calculandoIMC() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value/100
    let resultado = document.getElementById("resultado")

    if (altura !== "" && peso !== ""){
    // toFixed: determina quantos casas será mostradas
        let imc = (peso / (altura * altura)).toFixed(1)
        let mensagem = ""
         
        if (imc < 18.5 ) {
            mensagem = "Você está abaixo do peso!"
        } else if (imc < 25){
            mensagem = "Você está com o peso ideal!"
        } else if (imc < 30) {
            mensagem = "Você está levemente acima do peso!"
        } else if (imc < 35){
            mensagem = "Cuidado! Obesidade grau I."
        } else if (imc < 40) {
            mensagem = "Cuidado! Obesidade grau II."
        } else {
            mensagem = "Cuidado! Obesidade grau III."
        }

        // textContent é uma função para escrever na detela do HTML | usando um id ou class
        resultado.textContent = ` Seu IMC é ${imc}. ${mensagem}`

        } else {
            alert("Preencha todos os campos!")

        }

}

botaoCalcular.addEventListener('click', calculandoIMC)
