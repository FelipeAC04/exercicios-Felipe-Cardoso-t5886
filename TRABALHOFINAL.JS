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
    let dataDaUltimaDoacao = ask.question('Digite o ultimo dia (espaço) mes (espaço) ano, em que o paciente fez a doacao --> ')

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
        doadores.forEach(doador => {
            console.log(`Nome: ${doador.nome}`)
            console.log(`Idade: ${doador.idade}`)
            console.log(`Peso: ${doador.peso}`)
            console.log(`Tipo Sanguineo: ${doador.tipoSanguineo}`)
            console.log(`Ultima doaçao: ${doador.dataDaUltimaDoacao}`)
            console.log('_____________________')
        })
        ask.question('Tecle enter para continuar ')
    } console.clear()
}




// a função abaixo filtra os doadores contidos dentro do array de objetos pelo tipo sanguineo escolhido pelo usuario //

function buscarDoadorPorTipoSanguineo() {
    let tipoSanguineoProcurado = ask.question("por qual tipo sanguineo voce deseja procurar? ")
    let tipoSanguineoEncontrado = doadores.filter(doadores => doadores.tipoSanguineo === tipoSanguineoProcurado)

    if (tipoSanguineoEncontrado) {
        console.log(tipoSanguineoEncontrado)
    } else {
        console.log("Nâo foram encontrados doadores com o tipo sanguineo escolhido!")
    }
    ask.question("digite enter para voltar ")
    console.clear()
}




// a função abaixo busca os ultimos doadores de acordo com a data escolhida pelo usuario //









function buscarDoadorPorDataDaUltimaDoação() {
let dataProcurada = ask.question("por qual data de doacao voce deseja procurar? ")
let [dia, mes, ano] = new Date(ano, mes -1, dia)
}
    


   
    
   /*  let dataEncontrada = doadores.filter(doadores => doadores.dataDaUltimaDoacao >= dataProcurada)

    if (dataEncontrada.toString()) {
        console.log(dataEncontrada)
    } else {
        console.log("Nâo foram encontrados doadores com a data escolhida!")

    }
    ask.question("digite enter para voltar ")
    console.clear()
}
*/



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
