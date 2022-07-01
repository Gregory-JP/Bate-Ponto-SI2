//mostra todos os registros de todos os usuarios

//indentifica o botão que irá acionar o evento
let buttonRegisters = document.getElementById('historic');

let lista = []

buttonRegisters.addEventListener ('click', () => {
    //filtra somente os registros, e ignora os cadastro de user

    //vai percorrer todos os elementos do localStorage e ignorar aqueles que tem @
    for(let i=0; i < localStorage.length; i++){
        if(!localStorage.key(i).includes('@')){
            //printa no console a resposta
            lista.push(localStorage.getItem(localStorage.key(i)))
            console.log(lista[1])

            let user = lista.slice(1, 3)
        
            document.getElementById('user').innerHTML = user;
            console.log(user)

        }
        
    }

})
