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
    display(){
      let s = this._secondVal < 10 ? "0" + this._.toString() : this._secondVal.toString();
      let m = this._minuteVal < 10 ? "0" + this._minuteVal.toString() : this._minuteVal.toString();
      let h = this._hourVal < 10 ? "0" + this._hourVal.toString() : this._hourVal.toString();
      return h + ":" + m + ":" + s
    }
    _formt(){
      second.innerHTML = this._secondVal < 10 ? "0" + this._secondVal.toString() : this._secondVal;
      minute.innerHTML = this._minuteVal < 10 ? "0" + this._minuteVal.toString() : this._minuteVal;
      hour.innerHTML = this._hourVal < 10 ? "0" + this._hourVal.toString() : this._hourVal;
    }
    start(){
        if(!this._timerInterval){
            let t = this
            t._timerInterval = setInterval(function () {
                t._secondVal += 1; 
                if (t._secondVal == 60) {
                    t._minuteVal += 1;
                    t._secondVal = 0;
                }
                if (t._minuteVal == 60) {
                    t._hourVal += 1;
                    t._minuteVal = 0;
                }
                t._formt()
            }, 1000);
        }
    }
    stop(){
      clearInterval(this._timerInterval);
      this._timerInterval = null
    }
    reset(){
      this.stop()
      this._hourVal=0;
      this._minuteVal=0;
      this._secondVal=0;
      second.innerHTML = "00";
      minute.innerHTML = "00";
      hour.innerHTML = "00";
    }
}

export default Stopwatch;