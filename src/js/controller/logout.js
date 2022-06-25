let logoutButthon = document.getElementById('logout');

logoutButthon.addEventListener('click',() => {
    sessionStorage.clear()
    window.location.assign("/src/view/login.html");
})