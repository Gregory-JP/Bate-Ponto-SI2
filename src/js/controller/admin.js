//importo o modulo de notificação
import Notification from '../models/notification.js';

//coleto o botão que ira acionar o evento
const deleteAllButthon = document.getElementById('deleteAll');

deleteAllButthon.addEventListener('click', () => {
    //limpo o localStorage e o sessionStorage
    localStorage.clear();
    sessionStorage.clear();
    //aviso o usuario que os dados foram apagados e redireciono ele para login
    const notification = new Notification('Os dados foram apagados com sucesso!',true,'/src/view/login.html')
    notification.activate()
  });
  