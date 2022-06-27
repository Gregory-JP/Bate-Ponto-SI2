//importa o modulo de permissao
import Permission from '../models/permission.js';
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
            //redireciono ele para a pagina do sistema
            window.location.assign("/src/view/main.html")
        }
        else{
            //aviso que os dados estao errados
            alert('Email ou senha incorretos!')
        }
    }
    else{
        //aviso que o usuario não existe e recarrego a pagina
        alert('Usuario não encontrado')
        window.location.assign("/src/view/login.html");
    }
})

