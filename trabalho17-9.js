const ask = require("readline-sync")

let resultadoFinal
let fazerMaiscalculosOuExit = true  // condição para que o while seja executado (sera alterada para false caso o usuario deseje sair)//

while (fazerMaiscalculosOuExit) {   //while para os calculos //
    let numero1 = Number(ask.question("Diga o seu primeiro numero: "))
    let numero2 = Number(ask.question("Diga o seu segundo numero: "))
    let tipoDeOperaçao = Number(ask.question(
        "______________________________________\n" +
        "|Diga o tipo de operacao:            |\n" +
        "|Digite 1 para adicao (+)            |\n" +
        "|Digite 2 para subtracao (-)         |\n" +
        "|Digite 3 para multiplicacao (x)     |\n" +
        "|Digite 4 para divisao (/)           |\n" +
        "|Digite 5 para MOD (%)               |\n" +
        "|Digite 0 para reinserir os numeros  |\n" +
        "|____________________________________|\n\n" +
        " ------------->  "))


    // repete os inputs inicias se o usuario pedir//

    if (tipoDeOperaçao === 0) {
        console.clear()
        let numero1 = Number(ask.question("Diga o seu primeiro numero: "))
        let numero2 = Number(ask.question("Diga o seu segundo numero: "))
        let tipoDeOperaçao = Number(ask.question(
            "______________________________________\n" +
            "|Diga o tipo de operacao:            |\n" +
            "|Digite 1 para adicao (+)            |\n" +
            "|Digite 2 para subtracao (-)         |\n" +
            "|Digite 3 para multiplicacao (x)     |\n" +
            "|Digite 4 para divisao (/)           |\n" +
            "|Digite 5 para MOD (%)               |\n" +
            "|Digite 0 para reinserir os numeros  |\n" +
            "|____________________________________|\n\n" +
            " ------------->  "))

        switch (tipoDeOperaçao) {  // switch case para re-verificar o tipo de operaçao//
            case 1:
                resultadoFinal = numero1 + numero2
                break;
            case 2:
                resultadoFinal = numero1 - numero2
                break;
            case 3:
                resultadoFinal = numero1 * numero2
                break;
            case 4:
                resultadoFinal = numero1 / numero2
                break;
            case 5:
                resultadoFinal = numero1 % numero2
                break;
            default:
                console.log("tipo de operacao invalido!")
                break;
        }

    } else if (tipoDeOperaçao === 1) {
        resultadoFinal = numero1 + numero2

    } else if (tipoDeOperaçao === 2) {
        resultadoFinal = numero1 - numero2

    } else if (tipoDeOperaçao === 3) {
        resultadoFinal = numero1 * numero2

    } else if (tipoDeOperaçao === 4) {
        resultadoFinal = numero1 / numero2

    } else if (tipoDeOperaçao === 5) {
        resultadoFinal = numero1 % numero2

    } else { console.log("Tipo de operaçao invalido!") }


    console.log(resultadoFinal) //imprime o resultado e pedir input do usuario para repetir o codigo ou para terminar o codigo//


    // pede input do usuario para repetir os inputs dos numeros e refazer o calculo ou para fechar o programa//

    let resposta = Number(ask.question("Voce deseja fazer outro calculo? digite 1 para continuar ou 2 para parar: "))
    fazerMaiscalculosOuExit = resposta === 1
    console.clear()
}

console.log("Programa terminando...") //console.log para caso o usuario decida fechar o programa //
