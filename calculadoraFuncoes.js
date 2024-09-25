const ask = require("readline-sync")



////////////////////////////VARIAVEIS-AUXILIARES///////////////////////////////////////////////////////////////////////////////////////

let resultadoFinal
let fazerMaiscalculosOuSair = true


///////////////////////////////////FUNÇÕES-PARA-AS-OPERAÇÕES///////////////////////////////////////////////////////////////////////////

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
function fazerMaiscalculosOuFecharPrograma() {
    return fazerMaiscalculosOuSair = false
}


///////////////////////////////////CÓDIGO-DA-CALCULADORA///////////////////////////////////////////////////////////////////////////////

function calculadoraFuncionando() {

    console.clear()

    while (fazerMaiscalculosOuSair) {
        let num1 = Number(ask.question("Digite o seu primeiro numero --> "))
        let num2 = Number(ask.question("Digite o seu segundo numero --> "))
        let tipoDeOperaçao = Number(ask.question(
            "______________________________________\n" +
            "|-----ESCOLHA O TIPO DE OPERACAO-----|\n" +
            "|____________________________________|\n" +
            "|Digite 1 para adicao (+)            |\n" +
            "|____________________________________|\n" +
            "|Digite 2 para subtracao (-)         |\n" +
            "|____________________________________|\n" +
            "|Digite 3 para multiplicacao (x)     |\n" +
            "|____________________________________|\n" +
            "|Digite 4 para divisao (/)           |\n" +
            "|____________________________________|\n" +
            "|Digite 5 para MOD (%)               |\n" +
            "|____________________________________|\n" +
            "|Digite 6 para reinserir os numeros  |\n" +
            "|____________________________________|\n" +
            "|Digite 0 para fechar o programa     |\n" +
            "|____________________________________|\n\n" +
            " ------------->  "))

        console.clear()

        switch (tipoDeOperaçao) {
            case 1:
                console.log(realizaAOperacaoDeSoma(num1, num2))
                ask.question("pressione enter para continuar:")
                console.clear()
                break;
            case 2:
                console.log(realizaAOperacaoDeSubtracao(num1, num2))
                ask.question("pressione enter para continuar:")
                console.clear()
                break;
            case 3:
                console.log(realizaAOperacaoDeMultiplicacao(num1, num2))
                ask.question("pressione enter para continuar:")
                console.clear()
                break;
            case 4:
                console.log(realizaAOperacaoDeDivisao(num1, num2))
                ask.question("pressione enter para continuar:")
                console.clear()
                break;
            case 5:
                console.log(realizaAOperacaoDeMOD(num1, num2))
                ask.question("pressione enter para continuar:")
                console.clear()
                break;
            case 6:
                calculadoraFuncionando()
                break;
            case 0:
                fazerMaiscalculosOuFecharPrograma()
            default:
                console.log("tipo de operação invalido!")
                calculadoraFuncionando()
                break;
        }

    }

}

calculadoraFuncionando()

console.log("programa terminando...")