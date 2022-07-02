//cria um perfil de admin pro sistema funcionar

//importa o modulo user
import User from '../models/user.js';

//verifica se o user admin já foi criado
if(!localStorage.getItem('admin@admin.com')){
    //cria o user admin
    let password = window.btoa('@Admin');
    const user = new User('admin@admin.com',password,true);
    localStorage.setItem('admin@admin.com', JSON.stringify(user.value()));
}
