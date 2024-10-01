// Nomes: Felipe e Kalan //
const ask = require("readline-sync")


let doadores = []  //"banco de dados" falso (array) onde os objetos ficaram armazenados durantre a execução do codigo //

let sairDoProgramaOuFicar = true // variavel que mantem o main menu funcionando //



// abaixo a função para cadastrar novos doadores no sistema //

function cadastrarNovoDoador() {
    console.clear()
    let nome = ask.question('Digite o nome do doador --> ')
    let idade = ask.question('Digite a idade do doador --> ')
    let peso = ask.question('Digite o peso do doador (somente o numero) --> ')
    let tipoSanguineo = ask.question('Digite o tipo sanguineo do doador (A +-, B +-, AB +-, O +-) --> ')
    let dataDaUltimaDoacao = ask.question('Digite o ultimo  dia / mes / ano, em que o paciente fez a doacao --> ')

    let doador = { // cria uma nova varivel auxiliar com os dados que o usuario deu //
        nome: nome,
        idade: idade,
        peso: peso + 'kg',
        tipoSanguineo: tipoSanguineo.toUpperCase(),
        dataDaUltimaDoacao: dataDaUltimaDoacao
    }

    doadores.push(doador) // armazena no bancos de dados falso os dados cedidos pelo usuario//
    console.clear()
    console.log(`Doador ${nome} cadastrado!`)
    ask.question('tecle enter para continuar ')
    console.clear()
}



// a função abaixo permite que o usuario veja todos os doadores cadastrados no sistema //

function listarDoadores() {

    console.clear()
    if (doadores.length > 0) { // se a quantia de doadores encontrados pela logica da função for maior que 0, o menu com as informaçoes sera impresso //
        console.log(
            `--------------------
LISTAGEM DE DOADORES:
--------------------
NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`) // menu com os dados de cada doador //

        doadores.forEach(doador => {
            console.log(
                `${doador.nome.padEnd(20)} | ` +
                `${String(doador.idade).padEnd(5)} | ` +
                `${String(doador.peso).padEnd(5)} | ` +
                `${doador.tipoSanguineo.padEnd(5)} | ` +
                `${doador.dataDaUltimaDoacao}`
            )
        })
        console.log(`-----------------------------------------------------------------`) // utilizo o padEnd para que os dados dos doadores se encaixem no menu //

    } else {
        console.log('Nenhum doador cadastrado.')
    }
    ask.question('Tecle enter para voltar ')
    console.clear()
}



// a função abaixo filtra os doadores contidos dentro do array de objetos pelo tipo sanguineo escolhido pelo usuario //

function buscarDoadorPorTipoSanguineo() {
    let tipoSanguineoProcurado = ask.question("Por qual tipo sanguineo voce deseja procurar? ")
    let tipoSanguineoEncontrado = doadores.filter(doador => doador.tipoSanguineo === tipoSanguineoProcurado.toUpperCase())

    if (tipoSanguineoEncontrado.length > 0) { // se a quantia de doadores encontrados pela logica da função for maior que 0, o menu com as informaçoes sera impresso //
        console.log(
            `--------------------
LISTAGEM DE DOADORES:
--------------------
NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`) // menu com os dados de cada doador //

        tipoSanguineoEncontrado.forEach(doador => {
            console.log(
                `${doador.nome.padEnd(20)} | ` +
                `${String(doador.idade).padEnd(5)} | ` +
                `${String(doador.peso).padEnd(5)} | ` +
                `${doador.tipoSanguineo.padEnd(5)} | ` +
                `${doador.dataDaUltimaDoacao}`
            )
        })
        console.log(`-----------------------------------------------------------------`) // utilizo o padEnd para que os dados dos doadores se encaixem no menu //

    } else {
        console.log("Não foram encontrados doadores com o tipo sanguíneo escolhido!")
    }
    ask.question("Digite enter para voltar ")
    console.clear()
}



// a função abaixo transforma o dado da data de doação em um objeto Date e o inverte para facilitar a verificação //

function converteAData(data) {
    let [dia, mes, ano] = data.split('/') // retira as / dos dados da data//
    return new Date(ano, mes - 1, dia) // agora inverte a data, e diminui o mês em 1 por que em JS os meses começam em 0 //
}



// a função abaixo busca os ultimos doadores de acordo com a data escolhida pelo usuario //

function buscarDoadorPorDataDaUltimaDoação() {
    console.clear()
    let dataProcurada = ask.question("Por qual data de doacao voce deseja procurar (dd/mm/aaaa) --> ")
    let dataFormatada = converteAData(dataProcurada)

    let doadoresEncontrados = doadores.filter(doador => {  //filtra os dados da data de doação dos doadores pela data escolhida pelo usuario //
        let dataDoacao = converteAData(doador.dataDaUltimaDoacao)
        return dataDoacao <= dataFormatada  // retorna doadores da data escolhida pelo usuario e anteriores //
    })

    if (doadoresEncontrados.length > 0) { // se a quantia de doadores encontrados pela logica da função for maior que 0, o menu com as informaçoes sera impresso //
        console.log(
            `--------------------
LISTAGEM DE DOADORES:
--------------------
NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`) // menu com os dados de cada doador //

        doadoresEncontrados.forEach(doador => {
            console.log(
                `${doador.nome.padEnd(20)} | ` +
                `${String(doador.idade).padEnd(5)} | ` +
                `${String(doador.peso).padEnd(5)} | ` +
                `${doador.tipoSanguineo.padEnd(5)} | ` +
                `${doador.dataDaUltimaDoacao}`
            )
        })
        console.log(`-----------------------------------------------------------------`) // utilizo o padEnd para que os dados dos doadores se encaixem no menu //

    } else {
        console.log("Não foram encontrados doadores com a data escolhida!")
    }
    ask.question("Digite enter para voltar ")
    console.clear()
}



// a função abaixo termina o programa caso o usuario escolha sair //

function sairDoPrograma() {
    sairDoProgramaOuFicar = false // agora a variavel que mantem o main menu funcionando recebe false, portanto o programa termina //
    console.log("programa terminando...")
}



// o loop abaixo repete a varivel que pede um input do usuario e prossegue o codigo de acordo com a escolha do usuario//

while (sairDoProgramaOuFicar) {
    let escolherAção = Number(ask.question(
        "                                                          \n" +
        "   ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====  \n" +
        "|========================================================|\n" +
        "| 1. Cadastrar doador                                    |\n" +
        "|--------------------------------------------------------|\n" +
        "| 2. Listar doadores                                     |\n" +
        "|--------------------------------------------------------|\n" +
        "| 3. Buscar doador por tipo sanguineo                    |\n" +
        "|--------------------------------------------------------|\n" +
        "| 4. Buscar doador por data da ultima doacao             |\n" +
        "|--------------------------------------------------------|\n" +
        "| 5. Sair                                                |\n" +
        "|________________________________________________________|\n\n" +
        "escolha uma opcao ------>  "))
    console.clear()

    switch (escolherAção) { // compara o input do usuario com as opções disponiveis no sistema //
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
        case 5:
            sairDoPrograma()
            break;
        default:
            console.log('ação escolhida inexistente!') // se nenhuma opcão for encontrada com o input do usuario,  o sistema ira avisar o usuario e retornar para o main menu //
            ask.question('tecle enter para voltar ')
            break;
    }
}

