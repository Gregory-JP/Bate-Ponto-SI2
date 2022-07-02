//criando uma classe de notificação, sendo necessarios uma mensagem, uma flags indicando se é mensagem de sucesso
// ou se a mensagem é de erro, e por ultimo um direcionamento.
//o campo de sucess e redirect são opcionais
class Notification{
    constructor(msg,sucess,redirect){
        this.sucess = sucess;
        this.msg = msg;
        this.redirect = redirect;
    }
    //ativa a notificação
    activate(){
        //coleta os elementos html
        const div = document.getElementById('notification');
        const message = document.getElementById('message_notification');
        //define o icone
        let icon = this.sucess ? '✔️' : '❌'
        //mostra a notificação na tela
        div.style.display='block';
        message.innerHTML = icon + this.msg;
        //seta um tempo para tirar a notificação da tela e depois redireciona
        //se for o caso
        setTimeout(() => {
            div.style.display='none';
            if(this.redirect){
                window.location.assign(this.redirect)
            }
        }, 2000);
    }
}
//exporta o modulo
export default Notification;