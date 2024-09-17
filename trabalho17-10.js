const ask = require("readline-sync")

let numero1 = Number(ask.question("diga o primeiro numero: "))
let numero2 = Number(ask.question("diga o segundo numero: "))
let tipoDeOperaçao = Number(ask.question("diga o tipo de opereacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n ").toString())
let fecharPrograma = Number(ask.question("digite 1 para continuar o codigo e digite 2 para reiniciar"))
let soma

if (tipoDeOperaçao === 1) {
    if (fecharPrograma === 2) {
        while (fecharPrograma === 2) {
            console.clear()
                , numero1 = Number(ask.question("diga o primeiro numero: "))
                , numero2 = Number(ask.question("diga o segundo numero: "))
                , tipoDeOperaçao = Number(ask.question("diga o tipo de opereacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n ").toString())
                , fecharPrograma = Number(ask.question("digite 1 para continuar e 2 para voltar"))
        }
    }
    while (soma !== numero1 + numero2) {
        soma = numero1 + numero2
        console.log(soma)
    }

} else if (tipoDeOperaçao === 2) {
    if (fecharPrograma === 2) {
        while (fecharPrograma === 2) {
            console.clear()
                , numero1 = Number(ask.question("diga o primeiro numero: "))
                , numero2 = Number(ask.question("diga o segundo numero: "))
                , tipoDeOperaçao = Number(ask.question("diga o tipo de opereacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n ").toString())
                , fecharPrograma = Number(ask.question("digite 1 para continuar e 2 para voltar"))
        }
    }
    while (soma !== numero1 - numero2) {
        soma = numero1 + numero2
        console.log(soma)
    }

} else if (tipoDeOperaçao === 3) {
    if (fecharPrograma === 2) {
        while (fecharPrograma === 2) {
            console.clear() 
                , numero1 = Number(ask.question("diga o primeiro numero: "))
                , numero2 = Number(ask.question("diga o segundo numero: "))
                , tipoDeOperaçao = Number(ask.question("diga o tipo de opereacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n ").toString())
                , fecharPrograma = Number(ask.question("digite 1 para continuar e 2 para voltar"))
        }
    }
    while (soma !== numero1 * numero2) {
        soma = numero1 + numero2
        console.log(soma)
    }

} else if (tipoDeOperaçao === 4) {
    if (fecharPrograma === 2) {
        while (fecharPrograma === 2) {
            console.clear()
                , numero1 = Number(ask.question("diga o primeiro numero: "))
                , numero2 = Number(ask.question("diga o segundo numero: "))
                , tipoDeOperaçao = Number(ask.question("diga o tipo de opereacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n ").toString())
                , fecharPrograma = Number(ask.question("digite 1 para continuar e 2 para voltar"))
        }
    }
    while (soma !== numero1 / numero2) {
        soma = numero1 + numero2
        console.log(soma)
    }

} else if (tipoDeOperaçao === 5) {
    if (fecharPrograma === 2) {
        while (fecharPrograma === 2) {
            console.clear()
                , numero1 = Number(ask.question("diga o primeiro numero: "))
                , numero2 = Number(ask.question("diga o segundo numero: "))
                , tipoDeOperaçao = Number(ask.question("diga o tipo de opereacao: \n1 para adicao, \n2 para subtracao, \n3 para multiplicacao, \n4 para divisao e \n5 para MOD: \n ").toString())
                , fecharPrograma = Number(ask.question("digite 1 para continuar e 2 para voltar"))
        }
    }
    while (soma !== numero1 % numero2) {
        soma = numero1 + numero2
        console.log(soma)
    }

} else (console.log("erro"))

// faça uma calculadora que tenha input de 2 numeros, operaçoes de soma,
// subtraçao, divisao, multiplicaçao e MOD, o programa só encerra se o usuario solicitar, possibilidade de reinserir os numeros sem reiniciar a execução do codigo