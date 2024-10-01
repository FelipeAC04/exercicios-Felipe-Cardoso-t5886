const ask = require("readline-sync")

// Nomes: Kalan e Felipe



let doadores = []  // array onde os objetos ficaram armazenados durantre a execução do codigo

let sairDoProgramaOuFicar = true // variavel que mantem o main menu funcionando




// a função abaixo permite que o usuario cadastre novos doadores no sistema //

function cadastrarNovoDoador() {
    console.clear()
    let nome = ask.question('Digite o nome do doador --> ')
    let idade = ask.question('Digite a idade do doador --> ')
    let peso = ask.question('Digite o peso do doador --> ')
    let tipoSanguineo = ask.question('Digite o tipo sanguineo do doador --> ')
    let dataDaUltimaDoacao = ask.question('Digite o ultimo  dia / mes / ano, em que o paciente fez a doacao --> ')

    let doador = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        dataDaUltimaDoacao: dataDaUltimaDoacao
    }

    doadores.push(doador)
    console.log('Doador cadastrado!')
    console.clear()
}




// a função abaixo imprime o array de objetos que contem todos doadores //

function listarDoadores() {

    console.clear()
    if (doadores.length > 0) {
        console.log(
`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`)
        
doadores.forEach(doador => {
console.log(
`${doador.nome.padEnd(17)} | ` +
`${String(doador.idade).padEnd(5)} | ` +
`${String(doador.peso).padEnd(5)} | ` +
`${doador.tipoSanguineo.padEnd(16)} | ` +
`${doador.dataDaUltimaDoacao}`
)
})
console.log(`-----------------------------------------------------------------`)

    } else {
        console.log('Nenhum doador cadastrado.')
    

        }
        ask.question('Tecle enter para voltar ')
     console.clear()
}




// a função abaixo filtra os doadores contidos dentro do array de objetos pelo tipo sanguineo escolhido pelo usuario //

function buscarDoadorPorTipoSanguineo() {
    let tipoSanguineoProcurado = ask.question("Por qual tipo sanguineo voce deseja procurar? ")
    let tipoSanguineoEncontrado = doadores.filter(doador => doador.tipoSanguineo === tipoSanguineoProcurado)

    if (tipoSanguineoEncontrado.length > 0) { 
        console.log(
`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`)

tipoSanguineoEncontrado.forEach(doador => {
console.log(
`${doador.nome.padEnd(17)} | ` +
`${String(doador.idade).padEnd(5)} | ` +
`${String(doador.peso).padEnd(5)} | ` +
`${doador.tipoSanguineo.padEnd(16)} | ` +
`${doador.dataDaUltimaDoacao}`
)
})

console.log(`-----------------------------------------------------------------`)
    } else {
        console.log("Não foram encontrados doadores com o tipo sanguíneo escolhido!")
    }
    ask.question("Digite enter para voltar ")
    console.clear()
}




// a função abaixo converte o objeto data para Date e a inverte pra facilitar a verificação

function converteAData(data) {
    let [dia, mes, ano] = data.split('/')
    return new Date(ano, mes - 1, dia)
}




// a função abaixo busca os ultimos doadores de acordo com a data escolhida pelo usuario //

function buscarDoadorPorDataDaUltimaDoação() {
console.clear();
let dataProcurada = ask.question("Por qual data de doacao voce deseja procurar (dd/mm/aaaa) --> ")
let dataFormatada = converteAData(dataProcurada)

let doadoresEncontrados = doadores.filter(doador => {
    let dataDoacao = converteAData(doador.dataDaUltimaDoacao)
    return dataDoacao <= dataFormatada
})

if (doadoresEncontrados.length > 0) {
    console.log(
`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`)
                
doadores.forEach(doador => {
console.log(
`${doador.nome.padEnd(17)} | ` +
`${String(doador.idade).padEnd(5)} | ` +
`${String(doador.peso).padEnd(5)} | ` +
`${doador.tipoSanguineo.padEnd(16)} | ` +
`${doador.dataDaUltimaDoacao}`
)
})
        console.log(`-----------------------------------------------------------------`)
        

} else {
    console.log("Não foram encontrados doadores com a data escolhida!")
}

ask.question("Digite enter para voltar ")
console.clear()
}




// a função abaixo termina o programa caso o usuario escolha sair //

function sairDoPrograma() {
    sairDoProgramaOuFicar = false
    console.log("programa terminando...")
}




/* o loop abaixo pede um input do usuario. Para determinar a ação que o usuario
 deseja fazer ele compara o input do usuario com as opoções disponiveis no sistema
  e prossegue o codigo de acordo com a escolha do usuario */

while (sairDoProgramaOuFicar) {
    let escolherAção = Number(ask.question(
        "_________________________________________________________\n" +
        "| ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====  |\n" +
        "|________________________________________________________|\n" +
        "|Digite [1] para cadastrar um novo doador                |\n" +
        "|________________________________________________________|\n" +
        "|Digite [2] para ver a lista de doadores                 |\n" +
        "|________________________________________________________|\n" +
        "|Digite [3] para buscar doador por tipo sanguineo        |\n" +
        "|________________________________________________________|\n" +
        "|Digite [4] para buscar doador por data de ultima doacao |\n" +
        "|________________________________________________________|\n" +
        "|Digite [0] para fechar o programa                       |\n" +
        "|________________________________________________________|\n\n" +
        "escolha uma opcao ------>  "))
    console.clear()

    switch (escolherAção) {
        case 1:
            cadastrarNovoDoador()
            break;
        case 2:
            listarDoadores()
            break;
        case 3:
            buscarDoadorPorTipoSanguineo()
            break;
        case 4:
            buscarDoadorPorDataDaUltimaDoação()
            break;
        case 0:
            sairDoPrograma()
            break;
        default:
            break;
    }
}

