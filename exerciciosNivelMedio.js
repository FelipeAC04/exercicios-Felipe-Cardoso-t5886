// 1. 
// Crie um array 'time' com os nomes ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]. Verifique se "Roberto Carlos" está no array.
// Se sim, converta todos os nomes para maiúsculas e adicione "PERNA DE FUGUETE" ao final do nome de Roberto Carlos. Depois imprima todo o Array na tela.
/*
let time = ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]

if (time.includes("Roberto Carlos")) {
    time[time.indexOf('Roberto Carlos')] = time[time.indexOf('Roberto Carlos')].toUpperCase() + ' PERNA DE FUGUETE'
    console.log(time)

}



// 2. Pokemon
// Crie um array 'pokemons' com os nomes ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]. Adicione "Squirtle" ao início, remova o último Pokémon, 
//e verifique se "Pikachu" está no array. Se não estiver, adicione "Pikachu" ao final.

let picomons = ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]
picomons.unshift('Squirtle')
picomons.pop()

if (!picomons.includes('Pikachu')) {
    picomons.push('Pikachu')
}

console.log(picomons)

// 3. 
// Crie um array 'agentes' com os nomes ["Sage", "Jett", "Phoenix"]. Verifique se "Jett" está no array, 
//descubra seu índice (pesquise como fazer isso se necessário) e substitua por "Raze". Retorne o array modificado.

let agentes = ["Sage", "Jett", "Phoenix"]

if (agentes.includes('Jett')) {
    console.log((agentes.indexOf('Jett')))
    agentes.splice(1, 1, 'Raze')
    console.log(agentes)
}



// 4.
// Crie um array 'grifinoria' com os nomes ["Hermione", "Ron", "Neville"]. Remova o primeiro nome, adicione "Harry" ao início,
//e verifique se "Ron" está no array. Se sim, retorne todos os nomes em maiúsculas.

let grifinoria = ["Hermione", "Ron", "Neville"]
grifinoria.splice(0, 1, "Harry")

if (grifinoria.includes('Ron'))
     {console.log(grifinoria[1].toUpperCase()) }




/* 5.
Você foi contratado pelo governo imperial para criar um sistema que gerencie a produção e distribuição de especiarias em Arrakis. 
O sistema deve permitir que o usuário insira o nome do líder da operação, o tipo de operação (CO para coleta, EX para extração, TR para transporte), 
e a quantidade de especiaria coletada em toneladas. Dependendo do tipo de operação e da quantidade de especiaria, o sistema deve calcular o valor total de lucro esperado, 
considerando os seguintes fatores:

    - Operações de coleta (CO) têm um lucro de 1000 solaris por tonelada.
    - Operações de extração (EX) têm um lucro de 2000 solaris por tonelada, mas se a quantidade for superior a 50 toneladas, o lucro por tonelada aumenta para 2500 solaris.
    - Operações de transporte (TR) têm um lucro de 1500 solaris por tonelada, mas se a quantidade for inferior a 20 toneladas, há uma taxa adicional de 500 solaris por tonelada.



O sistema deve imprimir o nome do líder, o tipo de operação, a quantidade de especiaria e o lucro total esperado.


const ask = require("readline-sync")

let nomeLiderdaoperacao = ask.question('qual o nome do lider da operacao? ')
let tipoDeOperacao = ask.question('qual eh o tipo de operacao, CO, EX ou TR? ') //CO, EX, TR//
let quantiaDeEspeciarias = Number(ask.question('quantas toneladas de especiarias sao? '))
let operacaoCO = 1000
let operacaoEX = 2000
let operacaoTR = 1500


if (tipoDeOperacao.toUpperCase() === 'CO') 
    {console.log(`\nlider da operaçao: ${nomeLiderdaoperacao.toUpperCase()} \ntipo de operacao: ${tipoDeOperacao.toUpperCase()} \ntotal de especiarias: ${Number(quantiaDeEspeciarias)} toneladas \nvalor esperado: ${Number(operacaoCO * quantiaDeEspeciarias )}`)

} else if (tipoDeOperacao.toUpperCase() === 'EX') 
    {if (quantiaDeEspeciarias > 50) {console.log(`\nlider da operaçao: ${nomeLiderdaoperacao.toUpperCase()} \ntipo de operacao: ${tipoDeOperacao.toUpperCase()} \ntotal de especiarias:${Number(quantiaDeEspeciarias)} toneladas \nvalor esperado: ${Number((operacaoEX + 500) * quantiaDeEspeciarias)} solaris`)
}

} else if (tipoDeOperacao.toUpperCase() === 'TR') 
    {if (quantiaDeEspeciarias < 20) {console.log(`\nlider da operaçao: ${nomeLiderdaoperacao.toUpperCase()} \ntipo de operacao: ${tipoDeOperacao.toUpperCase()} \ntotal de especiarias: ${Number(quantiaDeEspeciarias)} toneladas \nvalor esperado: ${Number((operacaoTR + 500) * quantiaDeEspeciarias)} solaris`)
}}
*/

// 6.
// Crie uma string //string? é variavel sooooooooooor// 'nome' com o valor "  Alvo Dumbledore  ". Remova os espaços, transforme o nome para maiúsculas e retorne a quantidade de caracteres do nome.

let nome = "  Alvo Dumbledore  "
console.log(nome.trim().toUpperCase(),"quantos digitos possui?", nome.trim().toUpperCase().length)



//7.
// Crie um array 'naves' com os nomes ["X-Wing", "TIE Fighter", "Millennium Falcon"]. Remova a última nave, adicione "Star Destroyer" ao início do array, e verifique se "TIE Fighter" está no array.

let naves = ["X-Wing", "TIE Fighter", "Millennium Falcon"]
naves.pop(), naves.unshift("Star Destroyer")

console.log("TIE Fighter esta no array?",naves.includes("TIE Fighter"))

/*8.
Você foi contratado pela WOOHP para criar um sistema de planejamento de missões. Para cada missão, os detalhes incluem o nome da espiã, o tipo de missão (RE para resgate, IN para infiltração, DE para desativação) e o nível de risco da missão (AL para alto, ME para médio, BA para baixo). Dependendo da combinação do tipo de missão e do nível de risco, o sistema deve determinar o tempo estimado de conclusão e a quantidade de gadgets necessários:
    - Missões de resgate (RE) com alto risco (AL) levam 5 horas e requerem 4 gadgets, missões de risco médio (ME) levam 3 horas e requerem 3 gadgets, e de baixo risco (BA) levam 2 horas com 2 gadgets.
    - Missões de infiltração (IN) sempre levam 4 horas, mas o número de gadgets depende do risco: 5 gadgets para AL, 3 para ME e 2 para BA.
    - Missões de desativação (DE) têm um tempo fixo de 6 horas, independentemente do risco, mas o número de gadgets é 3 para AL, 2 para ME e 1 para BA.
O sistema deve imprimir o nome da espiã, o tipo de missão, o nível de risco, o tempo estimado de conclusão e a quantidade de gadgets necessários.
*/

const ask = require('readline-sync')

let nomeEspia= ask.question('qual é seu nome? ')
let missao = ask.question('qual é o tipo de missao? RE, IN ou DE? ')
let risco = ask.question('qual o risco da missao escolhida? ')

if (missao.toUpperCase() === 'RE') {}





/*9.
Descrição do problema: Você foi contratado para desenvolver um sistema que organize e distribua missões ninjas em Konoha. Cada missão tem um líder ninja, um tipo de missão (A para missões de rank A, B para missões de rank B, C para missões de rank C), e uma região de destino (NV para nas vilas, FL para florestas, MO para montanhas). Dependendo da combinação de tipo de missão e região, o sistema deve determinar a dificuldade da missão e o pagamento total:
    - Missões de rank A nas vilas (NV) têm uma dificuldade "Alta" e um pagamento de 5000 ryous, nas florestas (FL) a dificuldade é "Muito Alta" e o pagamento é de 7000 ryous, e nas montanhas (MO) a dificuldade é "Extrema" com um pagamento de 10000 ryous.
    - Missões de rank B nas vilas têm uma dificuldade "Média" e um pagamento de 3000 ryous, nas florestas a dificuldade é "Alta" e o pagamento é de 5000 ryous, e nas montanhas a dificuldade é "Muito Alta" com um pagamento de 7000 ryous.
    - Missões de rank C nas vilas têm uma dificuldade "Baixa" e um pagamento de 1000 ryous, nas florestas a dificuldade é "Média" e o pagamento é de 3000 ryous, e nas montanhas a dificuldade é "Alta" com um pagamento de 5000 ryous.
O sistema deve imprimir o nome do líder ninja, o tipo de missão, a região, a dificuldade e o pagamento total.
*/





