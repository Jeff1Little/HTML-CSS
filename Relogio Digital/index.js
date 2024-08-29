const Horas = document.getElementById('Horas')
const minutos = document.getElementById('minutos')
const Segundos = document.getElementById('Segundos')

const Relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) hr = '0' + min;
    if (s < 10) hr = '0' + s;



    Horas.textContent = hr;
    minutos.textContent = min;
    Segundos.textContent = s;
})