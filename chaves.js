
/*Enunciado: Mistério na Vila: Quem é o Ladrão?

Na vila, um valioso objeto desapareceu misteriosamente! Para resolver esse crime, você deve criar um programa em JavaScript que simule uma investigação para determinar quem é o ladrão. Cada vez que o programa é executado, um morador diferente é escolhido aleatoriamente como o ladrão.

O programa deve seguir as etapas a seguir:

Banco de Dados Fake:

Crie um "banco de dados" fake utilizando um array para armazenar informações sobre os moradores da vila, incluindo suspeitos.

Cada objeto no array representará um morador e terá a propriedade nome.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Cadastro de Moradores:

Permita que o usuário cadastre novos moradores na vila. Solicite o nome de cada morador e adicione-o ao banco de dados.
//////////////////////////////////////////////////////////////////////////////////////////////////////
Escolha Aleatória do Ladrão:

Utilize um método para escolher aleatoriamente um dos moradores do banco de dados como o ladrão.

Apresentação do Ladrão:

Após a escolha aleatória, apresente o morador selecionado como o ladrão principal do roubo.

Menu de Interatividade:

Crie um menu interativo para permitir que o usuário escolha entre diferentes opções ------>

Investigar o ladrão: Execute a lógica para determinar quem é o ladrão.

Cadastrar novo morador: Permita ao usuário cadastrar novos moradores na vila.

Visualizar todos os moradores da vila.

Adicionar um novo objeto roubado.

Visualizar todos os objetos roubados.

Sair do programa.

Implementação da Lógica de Investigação:

Analise os dados dos moradores e dos objetos roubados para determinar quem foi o ladrão.*/




const ask = require("readline-sync")

////////////////////////////////////////////////////////////////////////

function cadastrarMorador() {
    console.clear()

    let nomeMorador = ask.question("digite o nome do novo morador suspeito: ")
    let novoPersonagem = {
        nome: nomeMorador,
        ehLadrão: false,
        objetoRoubado: null
    }

    personagens.push(novoPersonagem)
    console.clear()

    ask.question("morador cadastrado! aperte enter para continuar: ")
}

/////////////////////////////////////////////////////////////////////

function vizualizarMoradores() {
    console.log(personagens)

    ask.question("tecle enter para voltar")
}

////////////////////////////////////////////////////////////////////////

function cadastrarObjetoRoubado() {
    console.clear()

    let nomeObjeto = ask.question("digite o nome do objeto roubado: ")
    let novoObjeto = {
        nome: nomeObjeto

    }

    objetosRoubados.push(novoObjeto.nome)
    console.clear()

    ask.question("objeto cadastrado! aperte enter para continuar: ")

}


///////////////////////////////////////////////////////////////////

function vizualizarObjetosRoubados() {
    console.log(objetosRoubados)

    ask.question("tecle enter para voltar")
}

////////////////////////////////////////////////////////////////



function descobrirLadrao() {
    if (personagens.length >= 1) {
        numeroMaximoSorteioLadrao = personagens.length - 1
        return Math.floor(Math.random() * (numeroMaximoSorteioLadrao + 1))
    }
}

function descobrirObjetoRoubado() {
    if (objetosRoubados.length >= 1) {
        numeroMaximoSorteioObjetos = objetosRoubados.length - 1
        return Math.floor(Math.random() * (numeroMaximoSorteioObjetos + 1))
    }
}

function investigar() {
    for (let suspeito of personagens) {
        if (suspeito.ehLadrão) {
            culpado = suspeito
            return
        }
    }
}

function investigarObjetoRoubado() {
    const index = descobrirObjetoRoubado()
    return objetosRoubados[index]
}



//////////////////////////////////////////////////////////////////


let personagens = []
let objetosRoubados = []

let culpado = null
let numeroMaximoSorteioLadrao
let numeroMaximoSorteioObjetos

let continuarOuSair

function MenuPrincipal() {

    while (continuarOuSair !== 0) {
        let escolherAção = Number(ask.question(
            "___________________________________________________\n" +
            "|         ESCOLHA OQUE VOCE DESEJA FAZER          |\n" +
            "|_________________________________________________|\n" +
            "|Digite 1 para adicionar mais moradores           |\n" +
            "|_________________________________________________|\n" +
            "|Digite 2 para vizualizar os moradores cadastrados|\n" +
            "|_________________________________________________|\n" +
            "|Digite 3 para cadastrar mais objetos roubados    |\n" +
            "|_________________________________________________|\n" +
            "|Digite 4 para vizualizar os objetos roubados     |\n" +
            "|_________________________________________________|\n" +
            "|Digite 5 para escolher quem eh o ladrao          |\n" +
            "|_________________________________________________|\n" +
            "|Digite 6 para investigar quem eh o ladrao        |\n" +
            "|_________________________________________________|\n" +
            "|Digite 7 para outra rodada                       |\n" +
            "|_________________________________________________|\n" +
            "|Digite 0 para fechar o programa                  |\n" +
            "|_________________________________________________|\n\n" +
            " ------------->  "))

        switch (escolherAção) {
            case 1:
                cadastrarMorador()
                break;
            case 2:
                vizualizarMoradores()
                break;
            case 3:
                cadastrarObjetoRoubado()
                break;
            case 4:
                vizualizarObjetosRoubados()
                break;
            case 5:
                descobrirLadrao()
                descobrirObjetoRoubado()
                break;
            case 6:
                investigar()
                console.log(investigarObjetoRoubado())
                break;
            case 7:
                MenuPrincipal()
                break;
            case 0:
                continuarOuSair = 0
                break;
            default:
                console.log("erro")
        }

        console.clear()

    }
}


///////////////////////////////////////////////////////////////////////////////////////

MenuPrincipal()
console.clear()
console.log("programa fechando...")

