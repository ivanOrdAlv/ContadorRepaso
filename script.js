
//const monthsElement = document.getElementById('meses');
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');
const veranoImg = document.getElementById('verano-img');
const inviernoImg = document.getElementById('invierno-img');
const otonhoImg = document.getElementById('otonho-img');
const primaveraImg = document.getElementById('primavera-img');
const body = document.getElementsByTagName('body')[0];
const contador = document.getElementById('contador');
const h1 = document.getElementById('cum');
const felicidades = document.getElementById('felicidades');

//DECLARAMOS LAS FECHAS
let currentDate = new Date();
let goalDate = new Date(2024, 4, 31, 23, 59); // Año, mes (enero==0), día, hora, minutos¡
let dosMesesDate = new Date(2024, 3, 17, 23, 59);
let unMesDate = new Date(2024, 4, 1, 23, 59);
let unSemanaDate = new Date(2024, 4, 24, 23, 59);
let months, days, hours, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    
    secondsElement.innerHTML = 0;

    clearInterval(countdownInterval);
  }
  
  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

  
  if (goalDate >= unMesDate && goalDate <= dosMesesDate
){
    body.className = "mostrarVerde";
} else if(goalDate >= dosMesesDate) {
    body.className = "mostrarVerde";
} else if(goalDate >= unSemanaDate && goalDate <= unMesDate) {
    body.className = "mostrarAmarillo";
} else if(goalDate<=unSemanaDate) {
    body.className = "mostrarRojo";
}

};


