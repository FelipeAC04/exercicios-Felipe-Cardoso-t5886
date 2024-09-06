/*
▄▄▄ .▐▄• ▄ ▄▄▄ .▄▄▄   ▄▄· ▪   ▄▄· ▪        .▄▄ ·     ·▄▄▄▄  ▄▄▄ .
▀▄.▀· █▌█▌▪▀▄.▀·▀▄ █·▐█ ▌▪██ ▐█ ▌▪██ ▪     ▐█ ▀.     ██▪ ██ ▀▄.▀·
▐▀▀▪▄ ·██· ▐▀▀▪▄▐▀▀▄ ██ ▄▄▐█·██ ▄▄▐█· ▄█▀▄ ▄▀▀▀█▄    ▐█· ▐█▌▐▀▀▪▄
▐█▄▄▌▪▐█·█▌▐█▄▄▌▐█•█▌▐███▌▐█▌▐███▌▐█▌▐█▌.▐▌▐█▄▪▐█    ██. ██ ▐█▄▄▌
 ▀▀▀ •▀▀ ▀▀ ▀▀▀ .▀  ▀·▀▀▀ ▀▀▀·▀▀▀ ▀▀▀ ▀█▄▀▪ ▀▀▀▀     ▀▀▀▀▀•  ▀▀▀ 

  ██████ ▄▄▄█████▓ ██▀███   ██▓ ███▄    █   ▄████   ██████ 
▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▓██▒ ██ ▀█   █  ██▒ ▀█▒▒██    ▒ 
░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██▒▓██  ▀█ ██▒▒██░▄▄▄░░ ▓██▄   
  ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ░██░▓██▒  ▐▌██▒░▓█  ██▓  ▒   ██▒
▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░██░▒██░   ▓██░░▒▓███▀▒▒██████▒▒
▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░▓  ░ ▒░   ▒ ▒  ░▒   ▒ ▒ ▒▓▒ ▒ ░
░ ░▒  ░ ░    ░      ░▒ ░ ▒░ ▒ ░░ ░░   ░ ▒░  ░   ░ ░ ░▒  ░ ░
░  ░  ░    ░        ░░   ░  ▒ ░   ░   ░ ░ ░ ░   ░ ░  ░  ░  
      ░              ░      ░           ░       ░       ░  
                                                           
*/

// 1. Crie uma variável chamada `fruta1` que contenha a string "MORANGO" e a converta para letras minúsculas.

let fruta1 =  "MORANGO"
console.log(fruta1.toLowerCase())

// 2. Crie uma constante chamada `animal1` que contenha a string "elefante" e a converta para letras maiúsculas.

let animal1 = "elefante"
console.log(animal1.toUpperCase())

// 3. Crie uma variável chamada `fruta2` com a string "   banana   ", remova os espaços em branco no início e no fim da string.

let fruta2 = "  banana  "
console.log(fruta2.trim())

// 4. Crie uma constante chamada `animal2` com a string "gato, macaco, leão, jabuti, tiramissu", e verifique se a palavra "leão" está incluída nesta string.

const animal2 = "gato, macaco, leão, jabuti, tiramissu"
console.log(animal2.includes("leão"))

// 5. Crie uma variável chamada `fruta3` que contenha a string "abacaxi", substitua todas as letras "a" por "o".

let fruta3 = "abacaxi"

console.log(fruta3.replaceAll("a" , "o"))

// 6. Crie uma constante chamada `animal3` que contenha a string "cachorro", e verifique se a palavra "carro" está incluída nela.

const animal3 = "cachorro"

console.log(animal3.includes("carro"))


// 7. Crie uma variável chamada `fruta4` com a string "laranja", e descubra quantos caracteres existem nesta string.

let fruta4 = "laranja"

console.log(fruta4.length)

// 8. Crie uma constante chamada `animal4` com a string "papagaio", e converta toda a string para letras minúsculas e depois para letras maiúsculas. Imprima a constante no console em cada uma destas etapas.

const animal4 = "papagaio"
console.log (animal4)

 let animal41 = animal4.toLowerCase()
console.log (animal41)

 let animal42 = animal4.toUpperCase()
console.log (animal42)

// 9. Crie uma variável chamada `fruta5` com a string "melancia" e substitua todas as letras "i" por "a".

let fruta5 = "melancia" 

console.log(fruta5.replace("i" , "a"))


// 10. Crie uma constante chamada `animal5` que contenha a string "tigre siberiano de bengala dentes de sabre bionico
// decepticom ultrawide ergonomico antiderrapante", e verifique se a palavra "sabre" está incluída nesta string.

const animal5 = "tigre siberiano de bengala dentes de sabre bionico decepticom ultrawide ergonomico antiderrapante"

console.log(animal5.includes("sabre"))


/*
▄▄▄ .▐▄• ▄ ▄▄▄ .▄▄▄   ▄▄· ▪   ▄▄· ▪        .▄▄ ·     ·▄▄▄▄  ▄▄▄ .
▀▄.▀· █▌█▌▪▀▄.▀·▀▄ █·▐█ ▌▪██ ▐█ ▌▪██ ▪     ▐█ ▀.     ██▪ ██ ▀▄.▀·
▐▀▀▪▄ ·██· ▐▀▀▪▄▐▀▀▄ ██ ▄▄▐█·██ ▄▄▐█· ▄█▀▄ ▄▀▀▀█▄    ▐█· ▐█▌▐▀▀▪▄
▐█▄▄▌▪▐█·█▌▐█▄▄▌▐█•█▌▐███▌▐█▌▐███▌▐█▌▐█▌.▐▌▐█▄▪▐█    ██. ██ ▐█▄▄▌
 ▀▀▀ •▀▀ ▀▀ ▀▀▀ .▀  ▀·▀▀▀ ▀▀▀·▀▀▀ ▀▀▀ ▀█▄▀▪ ▀▀▀▀     ▀▀▀▀▀•  ▀▀▀ 

   ▄████████    ▄████████    ▄████████    ▄████████ ▄██   ▄      ▄████████ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███   ██▄   ███    ███ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███▄▄▄███   ███    █▀  
  ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄▄██▀   ███    ███ ▀▀▀▀▀▀███   ███        
▀███████████ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀▀▀   ▀███████████ ▄██   ███ ▀███████████ 
  ███    ███ ▀███████████ ▀███████████   ███    ███ ███   ███          ███ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███   ███    ▄█    ███ 
  ███    █▀    ███    ███   ███    ███   ███    █▀   ▀█████▀   ▄████████▀  
               ███    ███   ███    ███                                     
*/

// 11. Crie um array chamado `frutas` contendo as frutas "maçã", "banana", "morango". Adicione a fruta "laranja" ao final do array.

let frutas = ["maçã","banana","morango"]
frutas.push("laranja")
let indice = 3

console.log(frutas[indice])

// 12. Crie um array chamado `animais` contendo os animais "cachorro", "golfinho do irrawady", "leão". Remova o último animal do array.

let animais = ["cachorro", "golfinho do irrawady", "leão"]
animais.pop()

console.log(animais)

// 13. Crie um array chamado `frutas2` contendo as frutas "abacaxi", "butia", "pera". Adicione "melancia" ao início do array.

let frutas2 = ["abacaxi", "butia", "pera"]
frutas2.unshift("melancia")

console.log(frutas2)

// 14. Crie um array chamado `animais2` contendo os animais "cavalo", "vaca", "ovelha". Remova o primeiro animal do array.

let animais2 = ["cavalo", "vaca", "ovelha"]
animais2.shift()

console.log(animais2)

// 15. Crie um array chamado `frutas3` contendo as frutas "goiaba", "kiwi", "laranja". Use o método `splice` para substituir "kiwi" por "ameixa".

let frutas3 = ["goiaba" , "kiwi", "laranja"]
frutas3.splice(1, 1, "ameixa")

console.log(frutas3)

// 16. Crie um array chamado `animais3` contendo os animais "canguru", "panda", "urso". Use o método `splice` para remover o segundo elemento.

let animais3 = ["canguru", "panda", "urso"]
animais3.splice(1, 1)

console.log(animais3)

// 17. Crie um array chamado `frutas4` contendo as frutas "limão", "manga", "jabuticaba". Adicione "abacate" ao final do array e remova "limão".

let frutas4 = ["limão", "manga", "jabuticaba"]

frutas4.splice(0,1, ), frutas4.push("abacate")

console.log(frutas4)

// 18. Crie um array chamado `animais4` contendo os animais "tartaruga", "jacaré", "tamburutaca". Remova o último animal e adicione "capivara" ao final do array.

let animais4 = [ "tartaruga", "jacaré", "tamburutaca"]
animais4.splice(3, 1, "capivara" )

console.log(animais4)

// 19. Crie um array chamado `frutas5` contendo as frutas "mamão", "caju", "figo". Use `push` para adicionar "graviola" ao array.

let frutas5 = ["mamão", "caju", "figo"]
frutas5.push("graviola")

console.log(frutas5)

// 20. Crie um array chamado `animais5` contendo os animais "lhama", "pinguim", "foca". Use `pop` para remover o último animal do array.

let animais5 = ["lhama", "pinguim", "foca"]
animais5.pop()

console.log(animais5)
