//coleto o botão que ira acionar o evento
const deleteAllButthon = document.getElementById('deleteAll');

deleteAllButthon.addEventListener('click', () => {
  //limpo o localStorage e o sessionStorage
    localStorage.clear();
    sessionStorage.clear();
    //aviso o usuario que os dados foram apagados e redireciono ele para login
    alert('Os dados foram apagados com sucesso!')
    window.location.assign("/src/view/login.html");
  });
  