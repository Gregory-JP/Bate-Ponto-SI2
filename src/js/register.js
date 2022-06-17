function register() {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    var user = {
        email: email,
        password: password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);

    window.location.assign("/src/page/login.html")
}
function deleteUser() {
    const username = document.getElementById('email').value;
    localStorage.removeItem(username)
}
function deleteAll() {
    localStorage.clear()
}