const ask = require("readline-sync")

////////////////////////////VARIAVEIS-DE-SUPORTE///////////////////////////////////////////////////////////////////////////////////////

let resultadoFinal
let fazerMaiscalculosOuExit = true
let resposta


///////////////////////////////////OPERAÇÕES//////////////////////////////////////////////////////////////////////////////////////////

function realizaAOperacaoDeSoma(num1, num2) {
    return console.log(`Seus numeros são: ${num1} e ${num2}\nresultado da soma entre eles:`), resultadoFinal = num1 + num2
}
function realizaAOperacaoDeSubtracao(num1, num2) {
    return console.log(`Seus numeros são: ${num1} e ${num2}\nresultado da subtraçao entre eles:`), resultadoFinal = num1 - num2
}
function realizaAOperacaoDeMultiplicacao(num1, num2) {
    return console.log(`Seus numeros são: ${num1} e ${num2}\nresultado da multiplicação entre eles:`), resultadoFinal = num1 * num2
}
function realizaAOperacaoDeDivisao(num1, num2) {
    return console.log(`Seus numeros são: ${num1} e ${num2}\nresultado da divisão entre eles:`), resultadoFinal = num1 / num2
}
function realizaAOperacaoDeMOD(num1, num2) {
    return console.log(`Seus numeros são: ${num1} e ${num2}\nresultado do MOD entre eles:`), resultadoFinal = num1 % num2
}


///////////////////////////////////CALCULADORA//////////////////////////////////////////////////////////////////////////////////////////

function calculadoraFuncionando() {
    console.clear()

    while (fazerMaiscalculosOuExit) {
        let num1 = Number(ask.question("Diga o seu primeiro numero: "))
        let num2 = Number(ask.question("Diga o seu segundo numero: "))
        let tipoDeOperaçao = Number(ask.question(
            "______________________________________\n" +
            "|Diga o tipo de operacao:            |\n" +
            "|Digite 1 para adicao (+)            |\n" +
            "|Digite 2 para subtracao (-)         |\n" +
            "|Digite 3 para multiplicacao (x)     |\n" +
            "|Digite 4 para divisao (/)           |\n" +
            "|Digite 5 para MOD (%)               |\n" +
            "|Digite 6 para reinserir os numeros  |\n" +
            "|____________________________________|\n\n" +
            " ------------->  "))
        console.clear()

        switch (tipoDeOperaçao) {
            case 1:
                console.log(realizaAOperacaoDeSoma(num1, num2))
                break;
            case 2:
                console.log(realizaAOperacaoDeSubtracao(num1, num2))
                break;
            case 3:
                console.log(realizaAOperacaoDeMultiplicacao(num1, num2))
                break;
            case 4:
                console.log(realizaAOperacaoDeDivisao(num1, num2))
                break;
            case 5:
                console.log(realizaAOperacaoDeMOD(num1, num2))
                break;
            case 6:
                calculadoraFuncionando()
                break;
            default:
                break;
        }

        resposta = Number(ask.question("Voce deseja fazer outro calculo? digite 1 para continuar ou 2 para parar: "))
        fazerMaiscalculosOuExit = resposta === 1
        console.clear()


    }

}

///////////////////////EXECUÇÃO DO CODIGO////////////////////////////////////////////////////////////////////////////////////////////////////

calculadoraFuncionando()

console.log("programa terminando...")