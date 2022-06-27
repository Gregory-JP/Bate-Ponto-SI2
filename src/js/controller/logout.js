//coleto o botão que irá acionar o evento
let logoutButthon = document.getElementById('logout');


logoutButthon.addEventListener('click',() => {
    //limpo a sessao do usuario, fazendo com que seja necessario logar novamente e o redireciono para login
    sessionStorage.clear()
    window.location.assign("/src/view/login.html");
})