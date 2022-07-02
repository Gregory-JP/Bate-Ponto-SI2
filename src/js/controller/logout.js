//coleto o botão que irá acionar o evento, como tem o modo responsivo eu pego os 2
let logoutButthonMenu = document.getElementsByClassName('logout').item(0);
let logoutButthonMenuResponsive = document.getElementsByClassName('logout').item(1);


logoutButthonMenu.addEventListener('click',() => {
    //limpo a sessao do usuario, fazendo com que seja necessario logar novamente e o redireciono para login
    sessionStorage.clear()
    window.location.assign("/src/view/login.html");
})

logoutButthonMenuResponsive.addEventListener('click',() => {
    //limpo a sessao do usuario, fazendo com que seja necessario logar novamente e o redireciono para login
    sessionStorage.clear()
    window.location.assign("/src/view/login.html");
})

