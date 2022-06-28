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
    //foi criado uma tratação de erro, pra evitar que o user cadastre um time zerdado
    try{
        //coleto os dados do usuario
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;

        //formato o display e armazeno na variavel time
        let time = stopwatch.display();

        //instancio e crio um ponto um ponto
        const point = new Point();
        point.create(email,date,time)

        //verifico se o usuario existe no localStorage
        if (!localStorage.getItem(email)) {
            alert("Usuario não encontrado");
        //verifico se os dados informados estão corretos
        }else if (email && date && sessionStorage.getItem(email)) {
            //registro o ponto em localStorage
            localStorage.setItem(point._id.toString(), JSON.stringify(point));
            //aviso o usuario
            alert("Ponto registrado com sucesso.");
            //reseto o cronometro
            stopwatch.reset();
            //regarrego a pagina
            window.location.assign("/src/view/main.html");
        } else {
            //aviso o usuario para informar todos os dados
            alert("Informe todos os dados");
        }
    }
    catch(err){
        //aviso o usuario do erro gerado
        alert(err)
    }
})
