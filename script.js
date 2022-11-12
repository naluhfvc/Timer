const relogio = document.querySelector(".time");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const resetar = document.querySelector(".resetar");

var timer;

var tempo = {
    hora: 00,
    minuto: 00,
    segundos: 00
}

iniciar.addEventListener('click', (event) => {
    clearInterval(timer)
    relogio.style.color = "white";
    timer = setInterval(()=>{
        tempo.segundos += 1;

        if(tempo.segundos === 60){
            tempo.segundos = 0
            tempo.minuto += 1;
        }

        if(tempo.minuto === 60){
            tempo.minuto = 0
            tempo.hora += 1;
        }

        console.log(tempo)

        relogio.innerHTML = tempo.hora + " : " + tempo.minuto + " : " + tempo.segundos
    }, 1000);
})


pausar.addEventListener('click', (event) => {
        clearInterval(timer)
        relogio.style.color="red"
})


resetar.addEventListener('click', (event) => {
        clearInterval(timer)
        relogio.style.color = "white";
        relogio.innerHTML = "00 : 00: 00"
        tempo = {
            hora: 0,
            minuto: 0,
            segundos: 0
        }
})