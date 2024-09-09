/*
Um dia Felipe quis se inscrever em um sorteio da escola, mas o sorteio era online e tinha algumas regras para se inscrever,
durante a inscrição o site verificou se as credenciais de Felipe se encaixavam nos requisitos do sorteio:
*/

//Requisitos do site da escola//

const idadeNecessaria = 15
const escolaQueEstuda = "Escola Estadual de Ensino Médio Emilio Sander"
const cursandoMinimo = "Ensino Médio"
const todasNotasMinimo = 6

//Credenciais do Felipe(eu)//

let idade = 16
let escola = "Escola Estadual de Ensino Médio Emilio Sander"
let cursando = "Ensino Médio"
let notaMaisBaixa = 7

//verificação que o site faz//

if (idade >= idadeNecessaria, escola === escolaQueEstuda, cursando === cursandoMinimo, notaMaisBaixa >= todasNotasMinimo) 
    { console.log( `
                              INSCRIÇÃO DO SORTEIO
       \n----------------------------------------------------------------------
     
        Requisitos:                                                                           
                                                                                                    
        1.idade minima necessaria = 15 anos                                                   
                                                                                                    
        2.Estar Estudando na Escola Estadual de Ensino Médio Emilio Sander                    
                                                                                                    
        3.Estar cursando o Ensino Médio                                                      
                                                                                                  
        4.Não ter notas abaixo de 6                      

       \n----------------------------------------------------------------------     

        Credenciais:`,       
             
        "\n\nidade:", idade,
            
        "\n\nestuda na escola:", escola,
        
        "\n\ncursa:", cursando,
                     
        "\n\nNota mais baixa:", notaMaisBaixa,
          
      `\n----------------------------------------------------------------------

        As credenciais cumprem os requisitos = Sim                                            
                                                                                                  
        Inscrito no sorteio!  

        \n----------------------------------------------------------------------  `)

} else
 {  console.log(`
                              INSCRIÇÃO DO SORTEIO
      '\n----------------------------------------------------------------------'

        Requisitos:                                                                           
                                                                                                    
        1.idade minima necessaria = 15 anos                                                   
                                                                                                    
        2.Estar Estudando na Escola Estadual de Ensino Médio Emilio Sander                    
                                                                                                    
        3.Estar cursando o Ensino Médio                                                     
                                                                                                  
        4.Não ter notas abaixo de 6      

       \n----------------------------------------------------------------------  

        Credenciais:`,       
             
        "\n\nidade:", idade,
            
        "\n\nestuda em:", escola,
        
        "\n\ncursa:", cursando,
                     
        "\n\nNota mais baixa:", notaMaisBaixa,
          
      `\n----------------------------------------------------------------------

        As credenciais cumprem os requisitos = Não                                            
                                                                                                  
        Não pode participar do sorteio!
            
        '\n--------------------------------------------------------------------'
    `)}