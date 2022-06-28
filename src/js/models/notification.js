class Notification{
    constructor(msg,sucess,redirect){
        this.sucess = sucess;
        this.msg = msg;
        this.redirect = redirect;
    }
    activate(){
        const div = document.getElementById('notification');
        const message = document.getElementById('message_notification');
        let icon = this.sucess ? '✔️' : '❌'
        div.style.display='block';
        message.innerHTML = icon + this.msg;
        setTimeout(() => {
            div.style.display='none';
            if(this.redirect){
                window.location.assign(this.redirect)
            }
        }, 1500);
    }
}

export default Notification;