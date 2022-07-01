import User from '../models/user.js';
import Notification from '../models/notification.js';
import Validation from '../models/validation.js';

//botão html que ira assionar o evento da linha 8
const registerButthon = document.getElementById('register');


registerButthon.addEventListener('click', ()=> {
  try{
      //diz que a função não deve ter o comportamento padrao
      event.preventDefault();
      //coleto os dados do usuario
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      //valida os dados do usuario
      const validation = new Validation(email,password)
      if(validation.valid()){
          //criptografo a senha 
          password = window.btoa(password);
          //crio uma instancia do usuario
          const user = new User(email,password)
          //cadastro o usuario em localStorage
          //cria o usuario no localStorage
          localStorage.setItem(email, JSON.stringify(user.value()));
          //cria uma notificação, passando o caminho como parametro para ser redirecionado.
          const notification = new Notification('Usuario cadastrado com sucesso!',true,"/src/view/login.html")
          notification.activate();
      }
      else{
          const notification = new Notification('Informe um email valido e a senha deve ter entre 6 e 20 caracteres e conter caracteres especiais.')
          notification.activate();
      }
  }
  catch(err){
      //formata a mensagem do erro
      const msg = err.toString().replace('Error:','');
      //aviso o usuario do erro gerado
      const notification = new Notification(msg);
      notification.activate()
  }
})
