const ask = require("readline-sync")

let numero1ASerCalculado = Number(ask.question("diga o primeiro numero para calcular: "))
let numero2ASerCalculado = Number(ask.question("diga o segundo numero para calcular: "))
let tipoDaOperaçao = Number(ask.question("diga o tipo da operacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n "))
let ReinserirOsNumeros = Number(ask.question("digite true para continuar e false para digitar os numeros novamente "))
let somaFinal
let pararExecuçaoDacalculadora = Number(ask.question("digite false para para-la e true para continuar "))

while (pararExecuçaoDacalculadora !== false) {
    let numero1ASerCalculado = Number(ask.question("diga o primeiro numero para calcular: "))
    let numero2ASerCalculado = Number(ask.question("diga o segundo numero para calcular: "))
    let tipoDaOperaçao = Number(ask.question("diga o tipo da operacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n "))
    let ReinserirOsNumeros = Number(ask.question("digite true para continuar e false para digitar os numeros novamente"))
    somaFinal = numero1ASerCalculado
    console.log()
    {
        while (ReinserirOsNumeros !== false) {
            let numero1ASerCalculado = Number(ask.question("diga o primeiro numero para calcular: "))
            let numero2ASerCalculado = Number(ask.question("diga o segundo numero para calcular: "))
            let tipoDaOperaçao = Number(ask.question("diga o tipo da operacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n "))
        }
    }

}














