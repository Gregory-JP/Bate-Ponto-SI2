import User from '../models/user.js';

//botão html que ira assionar o evento da linha 8
const registerButthon = document.getElementById('register');


registerButthon.addEventListener('click', ()=> {
  //diz que a função não deve ter o comportamento padrao
  event.preventDefault();
  //coleto os dados do usuario
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  //criptografo a senha 
  password = window.btoa(password);
  //crio uma instancia do usuario
  const user = new User(email,password)
  //cadastro o usuario em localStorage
  localStorage.setItem(email, JSON.stringify(user.value()));
  //aviso que o cadastro foi um sucesso e redireciono para fazer o login
  alert('Usuario cadastrado com sucesso')
  window.location.assign("/src/view/login.html");
})
