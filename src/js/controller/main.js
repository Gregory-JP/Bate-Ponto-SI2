// importo o relogio e o ponto e a notificação
import Stopwatch from '../models/stopwatch.js'
import Point from '../models/point.js';
import Notification from '../models/notification.js'

//coleto os atributos html referente ao display do cronometro para serem atualizados na tela
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

//atributos html que irão acionar os botões
let play = document.getElementById("start");
let stop = document.getElementById("pause");
let register = document.getElementById("register");

//crio uma instancia do relogio
const stopwatch = new Stopwatch(hour,minute,second);

// executa o codigo de start do relogio
play.addEventListener('click', () => {
    stopwatch.start()
})
// executa o codigo de parar do relogio
stop.addEventListener('click', () => {
    stopwatch.stop()
})
//verificar erro no codigo abaixo
register.addEventListener('click', () => {
    event.preventDefault();
    //foi criado uma tratação de erro, pra evitar que o user cadastre um time zerdado
    try{
        let email;
        for(let i=0; i < 2; i++){
            if(sessionStorage.key(i) != 'IsThisFirstTime_Log_From_LiveServer'){
                email = sessionStorage.key(i)
            }
        }
        //coleto os dados do usuario
        //let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;

        //formato o display e armazeno na variavel time
        let time = stopwatch.display();

        //instancio e crio um ponto um ponto
        const point = new Point();
        point.create(email,date,time)

        //verifico se o usuario existe no localStorage
        if (!email) {
            //cria uma notificação informando que o usuario n foi encontrado
            const notification = new Notification('Usuario não encontrado.')
            notification.activate();
        //verifico se os dados informados estão corretos
        }else if (email && date && sessionStorage.getItem(email)) {
            //registro o ponto em localStorage
            localStorage.setItem(point._id.toString(), JSON.stringify(point));
            
            //reseto o cronometro
            stopwatch.reset();

            //cria uma notificação e define o redirecionamento
            const notification = new Notification("Ponto registrado com sucesso!",true);
            notification.activate("/src/view/main.html");
            
        } else {
            //cria uma notificação de aviso para informar todos os dados
            const notification = new Notification("Informe a data");
            notification.activate()
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
