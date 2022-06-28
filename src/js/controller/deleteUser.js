//importar a notificação
import Notification from '../models/notification.js'
//coleto o botao que irá acionar o evento
const deleteButthon = document.getElementById('delete');

deleteButthon.addEventListener('click', () => {
    //diz que a função não deve ter o comportamento padrao
    event.preventDefault();
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
        //localStorage.removeItem(email);
        const notification = new Notification("Usuario deletado com sucesso!",true,"/src/view/login.html");
        notification.activate()
      } else {
        //aviso que os dados do usuario estão errados
        const notification = new Notification("Email ou senha incorretos.")
        notification.activate()
      }
    } else {
      //aviso que o usuario não existe e recarrego a pagina
      const notification = new Notification("Usuario não encontrado.",false,"/src/view/delete.html")
      notification.activate();
    }
  });