let nome = 'FERNANDO'
let tipoDeJogo = 'DO'
let etapaDoJogo = 'FI'
let categoria = 1
let quantiaDeIngressos = 1


let dados = (nome, tipoDeJogo, etapaDoJogo, categoria, quantiaDeIngressos)
let valorTotal
switch (dados) {
    case 'FERNANDO', 'DO', 'FI', 1, 1:
        valorTotal = 1980.00
        break;
    case 'FERNANDO', 'DO', 'DT', 1, 1:
        valorTotal = 660.00
        break;
    case 'FERNANDO', 'DO', 'SF', 1, 1:
        valorTotal = 1320.00
        break;
    case 'FERNANDO', 'DO', 'FI', 2, 1:
        valorTotal = 1320.00
        break;
    case 'FERNANDO', 'DO', 'DT', 2, 1:
        valorTotal = 440.00
        break;
    case 'FERNANDO', 'DO', 'SF', 2, 1:
        valorTotal = 880.00
        break;
    case 'FERNANDO', 'DO', 'FI', 3, 1:
        valorTotal = 880.00
        break;
    case 'FERNANDO', 'DO', 'DT', 3, 1:
        valorTotal = 330.00
        break;
    case 'FERNANDO', 'DO', 'SF', 3, 1:
        valorTotal = 550.00
        break;
    case 'FERNANDO', 'DO', 'FI', 4, 1:
        valorTotal = 330.00
        break;
    case 'FERNANDO', 'DO', 'DT', 4, 1:
        valorTotal = 170.00
        break;
    case 'FERNANDO', 'DO', 'SF', 4, 1:
        valorTotal = 220.00
        break;
    case 'FERNANDO', 'IN', 'FI', 1, 1:
        valorTotal = 1980.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'DT', 1, 1:
        valorTotal = 660.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'SF', 1, 1:
        valorTotal = 1320.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'FI', 2, 1:
        valorTotal = 1320.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'DT', 2, 1:
        valorTotal = 440.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'SF', 2, 1:
        valorTotal = 880.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'FI', 3, 1:
        valorTotal = 880.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'DT', 3, 1:
        valorTotal = 330.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'SF', 3, 1:
        valorTotal = 550.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'FI', 4, 1:
        valorTotal = 330.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'DT', 4, 1:
        valorTotal = 170.00 * 4.10
        break;
    case 'FERNANDO', 'IN', 'SF', 4, 1:
        valorTotal = 220.00 * 4.10
        break;
    case 'FERNANDO', 'DO', 'FI', 1, 2:
        valorTotal = 1980.00 * 2
        break;
    case 'FERNANDO', 'DO', 'DT', 1, 2:
        valorTotal = 660.00 * 2
        break;
    case 'FERNANDO', 'DO', 'SF', 1, 2:
        valorTotal = 1320.00 * 2
        break;
    case 'FERNANDO', 'DO', 'FI', 2, 2:
        valorTotal = 1320.00 * 2
        break;
    case 'FERNANDO', 'DO', 'DT', 2, 2:
        valorTotal = 440.00 * 2
        break;
    case 'FERNANDO', 'DO', 'SF', 2, 2:
        valorTotal = 880.00 * 2
        break;
    case 'FERNANDO', 'DO', 'FI', 3, 2:
        valorTotal = 880.00 * 2
        break;
    case 'FERNANDO', 'DO', 'DT', 3, 2:
        valorTotal = 330.00 * 2
        break;
    case 'FERNANDO', 'DO', 'SF', 3, 2:
        valorTotal = 550.00 * 2
        break;
    case 'FERNANDO', 'DO', 'FI', 4, 2:
        valorTotal = 330.00 * 2
        break;
    case 'FERNANDO', 'DO', 'DT', 4, 2:
        valorTotal = 170.00 * 2
        break;
    case 'FERNANDO', 'DO', 'SF', 4, 2:
        valorTotal = 220.00 * 2
        break;
    case 'FERNANDO', 'IN', 'FI', 1, 2:
        valorTotal = 1980.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'DT', 1, 2:
        valorTotal = 660.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'SF', 1, 2:
        valorTotal = 1320.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'FI', 2, 2:
        valorTotal = 1320.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'DT', 2, 2:
        valorTotal = 440.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'SF', 2, 2:
        valorTotal = 880.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'FI', 3, 2:
        valorTotal = 880.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'DT', 3, 2:
        valorTotal = 330.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'SF', 3, 2:
        valorTotal = 550.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'FI', 4, 2:
        valorTotal = 330.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'DT', 4, 2:
        valorTotal = 170.00 * 4.10 * 2
        break;
    case 'FERNANDO', 'IN', 'SF', 4, 2:
        valorTotal = 220.00 * 4.10 * 2
        break;


}
console.log(`nome: ${nome} \ntipo de jogo:  ${tipoDeJogo} \nEtapa Do Jogo: ${etapaDoJogo} \nCategoria Do Jogo: ${categoria} \nquantia de ingressos: ${quantiaDeIngressos}  \nTotal a pagar: R$${valorTotal}`)
console.log
    (`
 PUBLICO               JOGO                      CATEGORIA 1    CATEGORIA 2   CATEGORIA 3   CATEGORIA 4                                 

    DO            SF - SEMIFINAIS                  1320.OO   -     880.00    -   550.00   -   220.00
    IN 4.10X      DT - DECISÃO DO 3° LUGAR         660.00    -     330.00    -   330.00   -   170.00
                  FI - FINAL                       1980.00   -     1320.00   -   880.00   -   330.00


    
    
                                                                     `)