function login() {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let user = localStorage.getItem(email);
    
    if (user) {

        user = JSON.parse(user);

        if(email == user.email && password == user.password){
            window.location.assign("/src/page/main.html")
        }
        else{
            alert('Email ou Senha incorretos')
        }
    }
    else{
        alert('Usuario não encontrado')
        window.location.assign("/src/page/login.html");
    }
}
