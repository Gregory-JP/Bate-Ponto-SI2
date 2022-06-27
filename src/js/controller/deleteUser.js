//coleto o botao que irá acionar o evento
const deleteButthon = document.getElementById('delete');

deleteButthon.addEventListener('click', () => {
    //coleto os dados do usuario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //coleto os dados do usuario no localStorage
    let user = localStorage.getItem(email);
    //verifico se existe um usuario em localStorage
    if (user) {
      //transformo os dados do user me json e descriptografo a senha dele
      user = JSON.parse(user);
      user.password = window.atob(user.password);
      //verifico se os dados estão corretos
      if (email == user.email && password == user.password) {
        //removo o usuario do localStorage e aviso ele, apos redireciono para a tela de login
        localStorage.removeItem(email);
        alert("Usuario deletado com sucesso");
        window.location.assign("/src/view/login.html");
      } else {
        //aviso que os dados do usuario estão errados
        alert("Email ou senha incorretos");
      }
    } else {
      //aviso que o usuario não existe e recarrego a pagina
      alert("Usuario não encontrado");
      window.location.assign("/src/view/delete.html");
    }
  });