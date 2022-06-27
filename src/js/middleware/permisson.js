//esse é um middleware que verifica se existe uma sessão no sessionStorage
if(sessionStorage.length < 2){
    //se não tiver ele redireciona o usuario para a tela de login, impedindo o de acessar
    window.location.assign("/src/view/login.html");
}





