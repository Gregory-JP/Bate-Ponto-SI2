function openMenu() {
    document.getElementById("sidenav").style.width = "50%";
};

function closeMenu() {
    document.getElementById('sidenav').style.width = '0%';
};

let timer = 0;
let timerInterval;
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');

function iniciar() {

    pausar();

    timerInterval = setInterval(function() {
    timer += 1/60;

    secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    minuteVal = Math.floor(timer / 60);
    /*hourVal = Math.floor()*/

    console.log(timer)
    second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    /*hour.innerHTML = hourVal < 10 ? "0" + hourVal.toString() : hourVal;*/

})

}

function pausar() {
  clearInterval(timerInterval);
}

function resetar() {
    pausar()
    timer = 0
    second.innerHTML = '00';
    minute.innerHTML = '00';
}