const ask = require("readline-sync")

let numero1 = Number(ask.question("diga o primeiro numero: "))
let numero2 = Number(ask.question("diga o segundo numero: "))
let tipoDeOperaçao = Number(ask.question(
     "Diga o tipo de operacao: \n" +
        "1 para adicao, \n" +
        "2 para subtracao, \n" +
        "3 para multiplicacao, \n" +
        "4 para divisao e \n" +
        "5 para MOD: \n\n------> "))

let soma

if (tipoDeOperaçao === 1) 
 {soma = numero1 + numero2
    console.log(soma)

}else if (tipoDeOperaçao === 2)
 {soma = numero1 - numero2
    console.log(soma)

} else if (tipoDeOperaçao === 3)
 {soma = numero1 * numero2
    console.log(soma)

} else if (tipoDeOperaçao === 4)
 {soma = numero1 / numero2
    console.log(soma)

} else if (tipoDeOperaçao === 5)
 {soma = numero1 % numero2
    console.log(soma)

} else {console.log("Tipo de operaçao invalido")}

let continuar 
let resposta = ask.question("Voce deseja fazer outro calculo? Digite 'true' para continuar ou 'false' para parar: ").toLowerCase()
continuar = resposta === 'true'
console.clear()

while (continuar) {
    let numero1 = Number(ask.question("Diga o primeiro numero: "))
    let numero2 = Number(ask.question("Diga o segundo numero: "))
    let tipoDeOperaçao = Number(ask.question(
        "Diga o tipo de operacao: \n" +
        "1 para adicao, \n" +
        "2 para subtracao, \n" +
        "3 para multiplicacao, \n" +
        "4 para divisao  \n" +
        "5 para MOD: \n\n------> "))

        if (tipoDeOperaçao === 1) 
            {soma = numero1 + numero2
           
           }else if (tipoDeOperaçao === 2)
            {soma = numero1 - numero2
           
           } else if (tipoDeOperaçao === 3)
            {soma = numero1 * numero2
           
           } else if (tipoDeOperaçao === 4)
            {soma = numero1 / numero2
           
           } else if (tipoDeOperaçao === 5)
            {soma = numero1 % numero2
           
           } else {console.log("Tipo de operaçao invalido")}

           console.log(soma)
           let resposta = ask.question("Voce deseja fazer outro calculo? Digite 'true' para continuar ou 'false' para parar: ").toLowerCase()
        continuar = resposta === 'true'
        console.clear()
}

console.log("Programa terminando")
