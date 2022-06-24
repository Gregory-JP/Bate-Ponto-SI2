function login() {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = localStorage.getItem(email);
    
    if (user) {

        user = JSON.parse(user);
        user.password =  window.atob(user.password)
        if(email == user.email && password == user.password){

            const permission = {
                user: user.email,
                authenticat: true
            }
            if(!sessionStorage.getItem(email)){
                sessionStorage.setItem(user.email,JSON.stringify(permission))
            }
            window.location.assign("/src/page/main.html")
        }
        else{
            alert('Incorrect email or password')
        }
    }
    else{
        alert('User not found')
        window.location.assign("/src/page/login.html");
    }
}
