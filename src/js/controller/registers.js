//mostra todos os registros de todos os usuarios

//indentifica o botão que irá acionar o evento
let buttonRegisters = document.getElementById('teste');

buttonRegisters.addEventListener ('click', () => {
    //filtra somente os registros, e ignora os cadastro de user

    //vai percorrer todos os elementos do localStorage e ignorar aqueles que tem @
    for(let i=0; i < localStorage.length; i++){
        if(!localStorage.key(i).includes('@')){
            //printa no console a resposta
            console.log(localStorage.key(i))
        }
        
    }
    
})