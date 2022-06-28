//importa o modulo de permissao e o de notificação
import Permission from '../models/permission.js';
import Notification from '../models//notification.js';

//botão que irá acionar o evento de login da linha 6
let loginButthon = document.getElementById('login');

loginButthon.addEventListener('click', () => {
    // a linha 8 muda o comportamento padrao
    event.preventDefault();

    //coleto os dados do usuario
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //coleto o usuario do localStorage
    let user = localStorage.getItem(email);
    //verifico se existe um usuario com esse email
    if (user) {
        //se existe então eu tranformo os dados em json e descriptografo a senha dele
        user = JSON.parse(user);
        user.password =  window.atob(user.password)
        //verifico se os dados informados batem com os armazenados
        if(email == user.email && password == user.password){
            //verifico se esse user já tem uma sessao em aberto
            if(!sessionStorage.getItem(email)){
                //crio uma permissão para acessar o sistema e cadastro ela no sessionStorage para liberar o acesso a esse usuario
                const permission = new Permission(user.email,true);
                sessionStorage.setItem(user.email,JSON.stringify(permission.value()))
            }
            //criando notificação
            const notification = new Notification('Logado com sucesso!',true,"/src/view/main.html")
            notification.activate()
            
        }
        else{
            //aviso que os dados estao errados
            const notification = new Notification('Email ou senha incorretos!',false,"/src/view/login.html")
            notification.activate()
        }
    }
    else{
        //aviso que o usuario não existe e recarrego a pagina
        const notification = new Notification('Usuario não encontrado!',false,"/src/view/login.html")
        notification.activate()

    }
})

