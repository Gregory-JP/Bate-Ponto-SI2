// importo o relogio e o ponto
import Stopwatch from '../models/stopwatch.js'
import Point from '../models/point.js';

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
    try{
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        const point = new Point();
    
        stopwatch._formt();
        let time = stopwatch.display();
        point.create(email,date,time);
    
        if (!localStorage.getItem(email)) {
            alert("Usuario não encontrado");
        }else if (email && date && sessionStorage.getItem(email)) {
            localStorage.setItem(point._id.toString(), JSON.stringify(point));
            alert("Ponto registrado com sucesso.");
            window.location.assign("/src/view/main.html");
            reset();
        } else {
            alert("Informe todos os dados");
        }
    }
    catch(err){
        console.log(err)
        alert('Start the stopwatch')
    }
})
