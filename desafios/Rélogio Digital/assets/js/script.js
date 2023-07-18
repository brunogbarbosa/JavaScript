const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

var relogio = setInterval(function time() {
    let dateToday = new Date();  
    let hr = dateToday.getHours();
    let minutes = dateToday.getMinutes(); 
    let sg = dateToday.getSeconds();
    if (hr < 10) hr = '0' + hr;

    if (minutes < 10) minutes = '0' + minutes;

    if (sg < 10) sg = '0' + sg;
 

    horas.textContent = hr;
    minutos.textContent = minutes;
    segundos.textContent = sg;
})