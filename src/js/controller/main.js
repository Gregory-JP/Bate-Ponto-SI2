import Stopwatch from '../models/stopwatch.js'
import Point from '../models/point.js';

let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

let play = document.getElementById("start");
let stop = document.getElementById("pause");

let register = document.getElementById("register");

const stopwatch = new Stopwatch(hour,minute,second);


play.addEventListener('click', () => {
    stopwatch.start()
})

stop.addEventListener('click', () => {
    stopwatch.stop()
})

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
            alert("User not found");
        }else if (email && date && sessionStorage.getItem(email)) {
            localStorage.setItem(point._id.toString(), JSON.stringify(point));
            alert("Point registered successfully.");
            window.location.assign("/src/view/main.html");
            reset();
        } else {
            alert("Inform all data");
        }
    }
    catch{
        alert('Start the stopwatch')
    }
})
