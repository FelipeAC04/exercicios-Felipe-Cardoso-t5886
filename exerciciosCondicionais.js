/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/




//1. Leia o código abaixo:

let numero = 5

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
    a) Explique o que o código faz. Qual o teste que ele realiza? 

   declara uma nova variavel chamada numero que recebe 5. Se o resto da divisao da variavel numero 
   por 2 ter o mesmo valor e tipo que 0 o codigo ira imprimir no console a string "passou no teste", 
   senão tiver o mesmo tipo ou e/ou valor ira imprimir no console a string "Não passou no teste".



    b) Para que tipos de números ele imprime no console "Passou no teste"? 

    5 % 2 (resto = 1) ==== 0 number retorna FALSE, para retornar TRUE o resto da divisao deveria ser number 0



    c) Para que tipos de números a mensagem é "Não passou no teste"? 

    5 % 2 (resto = 1) ==== 0 number retorna FALSE, para retornar FALSE o resto da divisao deve ser qualquer numero exeto number  0



*/
//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = "uva"
let preco
switch (fruta.toUpperCase()) {
  case "LARANJA":
    preco = 3.5
    break;
  case "MAÇÃ":
    preco = 2.25
    break;
  case "UVA":
    preco = 0.30
    break;
  case "PÊRA":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log(`O preço da fruta ${fruta} é R$ ${preco}`)

/*
   a) Para que serve o código acima?

    ele serve para armazenar os nome e valores dos produtos e permitir a busca deles pelo usuario



    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    O preço da fruta maçã é R$ 2.25

    
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
 
    // O preço da fruta pêra é R$ 5 //*/



//3. Leia o código abaixo:

const num1 = 5
if(num1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

//console.log(mensagem)

/*
    a) O que a primeira linha está fazendo?

     declara uma constante que recebe o valor number 5


    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    se o usuario digitar o numero 10, a mensagem impressa seria "esse número passou no teste".
    se o número digitado fosse -10 nada seria impresso no terminal.


    c) Haverá algum erro no console? Justifique.

     //sim havera um erro, o comando console.log(mensagem) nao consegue encontrar a variavel mensagem porque ela esta incluida dentro do if.
     //para consertar o codigo seria necessario retira-la do if.



█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Faça um programa que declare uma variável com a sua idade e imprima no console um teste dizendo se você pode ou não dirigir (apenas maiores de idade).
*/

let idade = 16

console.log(`eu posso dirigir?`)

if(idade >= 18) {console.log(`Pode dirigir, você é maior de idade!`)

} else {console.log(`Não pode dirigir, você é menor de idade!`)}

/*
2. Agora pesquise no Google o horário atual no Vietnã. Declare uma variável do tipo string que contenha os valores "manhã", "tarde", "noite" ou "madrugada"
com base no fuso horário do Vietnã. Utilize o bloco if/else para escrever uma mensagem, sendo ela "Bom dia, Vietnã!", "Boa tarde, Vietnã", "Boa noite, Vietã" ou "Boa madrugada, Vietnã",
 dependendo de qual for o seu fuso horário atual.
*/

let horasVietna = "madrugada"
 
 if (horasVietna === "manhã", horasVietna === "tarde", horasVietna === "noite", horasVietna === "madrugada") {console.log(`Boa ${horasVietna}, Vietnã`)} //opção 1//



if (horasVietna === "manhã") {console.log(`boa ${horasVietna}, Vietnã`)
} else if (horasVietna === "tarde") {console.log(`boa ${horasVietna}, Vietnã `)
} else if (horasVietna === "noite") {console.log(`boa ${horasVietna}, Vietnã`)
} else if (horasVietna === "madrugada") {console.log(`boa ${horasVietna}, Vietnã`)} //opção 2//


/*
3. Agora repita o exercício anterior, porém utilizando o bloco Switch/Case e utilizando o fuso horário do Havaí.
*/

let havai = ("manhã")
let saudaçao

switch (havai.toUpperCase()) {
  case "MANHÃ":
   saudaçao = "Boa manhã"
    break;
  case "TARDE":
   saudaçao = "Boa tarde"
    break;
  case "NOITE":
   saudaçao = "Boa noite"
    break;
     case "MADRUGADA":
      saudaçao = "Boa madrugada"
  default:
    saudaçao = "tudo bem"
  break;
}
console.log(`${saudaçao} Havaí`)

