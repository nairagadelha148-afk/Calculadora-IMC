function calcularIMC() {
    let Peso = document.getElementById("Peso").value;
    let Altura = document.getElementById("Altura").value;

    let imc = Peso / (Altura * Altura);


    document.getElementById("Valor do IMC").textContent = "IMC é:" + imc;

    let resultado = "";
    if (imc < 18.5) {
        resultado = "Abaixo do peso";

    }
    else if (imc < 25) {
        resultado = "Peso normal";
    }
    else if (imc < 30) {
        resultado = "Sobrepeso";
    }
    else if (imc < 35) {
        resultado = "Obesidade Grau I";
    }
    else if (imc < 40) {
        resultado = "Obesidade Grau II";
    }
    else {
        resultado = "Obesidade grau III";
    }
    document.getElementById("resultado").textContent = resultado;

    imc.toFixed(2)



}