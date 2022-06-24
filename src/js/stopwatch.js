let timerInterval;
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');

let minuteVal,hourVal,secondVal = 0

function start() {

    stop();

    timerInterval = setInterval(function() {
    secondVal += 1;

    minuteVal = minuteVal ? minuteVal : 0
    hourVal = hourVal ? hourVal : 0

    
    if(secondVal == 60){
        minuteVal += 1
        secondVal = 0
    }
    if(minuteVal == 60){
        hourVal += 1
        minuteVal = 0
    }

    second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    hour.innerHTML = hourVal < 10 ? "0" + hourVal.toString() : hourVal;

},0.5)}

function stop() {
  clearInterval(timerInterval);
}

function reset(){
    stop();

    minuteVal= 0
    hourVal= 0
    secondVal = 0

    second.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';
}

function register() {
    
    //let email = document.getElementById('email').value;
    let id = Math.round(Math.random() * (9999 - 1000) + 1000);

    _second = secondVal < 10 ? "0" + secondVal.toString() : secondVal.toString();
    _minute= minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal.toString();
    _hour = hourVal < 10 ? "0" + hourVal.toString() : hourVal.toString();

    const Register = {
        id: id,
        user: 'email',
        date: '',
        time: _hour+':'+_minute+':'+_second
    }

    localStorage.setItem(id.toString(), JSON.stringify(Register));
    window.location.assign("/src/page/main.html");
    reset();
}


