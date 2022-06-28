//crio uma classe pro relogio, onde no construtor teremos
// second, minute e hour que serão os atributos html a serem atualizados na tela
// timerInterval que será o responsavel por instanciar um intervalo de tempo
// houtVal, minuteVal e secondVal são as variaveis que irão calculando o tempo
// display é a variavel para guardar o valor do display do cronometro
class Stopwatch {
    constructor(hour,minute,second){
      this._second = second; 
      this._minute = minute; 
      this._hour = hour;     
      this._timerInterval;
      this._hourVal = 0;
      this._minuteVal = 0;
      this._secondVal = 0;
      this._display;
    }
    //metodo para formatar o display que irá no localStorage e retornar os dados organizados
    display(){
      //verifico se o dado é menor que 10, caso sim eu coloco um 0 na frente, se não eu uso o proprio valor. Faço isso pros 3 valores do cronometro
      let s = this._secondVal < 10 ? "0" + this._secondVal.toString() : this._secondVal.toString();
      let m = this._minuteVal < 10 ? "0" + this._minuteVal.toString() : this._minuteVal.toString();
      let h = this._hourVal < 10 ? "0" + this._hourVal.toString() : this._hourVal.toString();
      return h + ":" + m + ":" + s
    }
    //metodo para formatar os dados que serão mostrado na tela do usuario. Ele usa a mesma logica do metodo display, 
    //agora em vez de retornar ele atualiza a tela do usuario.
    _formt(){
      second.innerHTML = this._secondVal < 10 ? "0" + this._secondVal.toString() : this._secondVal;
      minute.innerHTML = this._minuteVal < 10 ? "0" + this._minuteVal.toString() : this._minuteVal;
      hour.innerHTML = this._hourVal < 10 ? "0" + this._hourVal.toString() : this._hourVal;
    }
    //metodo para dar start ao cronometro
    start(){
        //verifico se já existe um intervalo, serve para saber se o usuario clicou pela primeira vez ou
        //se deu pause e agora deu start novamente
        if(!this._timerInterval){
            //instancio uma variavel de apoio e crio um intervalo
            let t = this
            t._timerInterval = setInterval(function () {
                // o intervalo está setado para rodar a cada 1 segundo, então eu vou incrmentado minha variavel em 1 em 1
                t._secondVal += 1; 
                //toda vez que o segundo for 60, eu zero ele e incremento 1 no minuto
                if (t._secondVal == 60) {
                    t._minuteVal += 1;
                    t._secondVal = 0;
                }
                //faço o mesmo com o minuto, só que agora é a hora que é incrementada
                if (t._minuteVal == 60) {
                    t._hourVal += 1;
                    t._minuteVal = 0;
                }
                //formato e atualizo a tela do usuario
                t._formt()
            }, 1000);
        }
    }
    stop(){
      //limpo o intervalo e limpo a variavel
      clearInterval(this._timerInterval);
      this._timerInterval = null
    }
    reset(){
      //limpo o intervalo e seto todas minhas variaveis pra 0, incluindo as da tela do usuario
      this.stop()
      //variaveis internas
      this._hourVal=0;
      this._minuteVal=0;
      this._secondVal=0;
      //tela do usuario
      second.innerHTML = "00";
      minute.innerHTML = "00";
      hour.innerHTML = "00";
    }
}
//retorno o modulo do cronometro

export default Stopwatch;