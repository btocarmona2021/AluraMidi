function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')
       
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
   

}


















 /* ´´´´´*/


















/* function playSonido (IdElementoAudio){
    document.querySelector(IdElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador=0


while(contador < 9){
    listaDeTeclas[contador].onclick = function (){
        playSonido('#sonido_tecla_tom');
    };
    contador=contador + 1;
    console.log('vuelta ' + contador)
}

 */




/* function playSonidoTim(){
    document.querySelector('#sonido_tecla_tim').play();

}

function playSonidoPuff(){
    document.querySelector('#sonido_tecla_puff').play();
}

function playSonidoSplash(){
    document.querySelector('#sonido_tecla_splash').play();
}

function playSonidoClap(){
    document.querySelector('#sonido_tecla_clap').play();
}

function playSonidoToim(){
    document.querySelector('#sonido_tecla_toim').play();
}

function playSonidoPsh(){
    document.querySelector('#sonido_tecla_psh').play();
}

function playSonidoTic(){
    document.querySelector('#sonido_tecla_tic').play();
}

function playSonidoTom(){
    document.querySelector('#sonido_tecla_tom').play();
}

document.querySelector('.tecla_pom').onclick = playSonidoPom;

document.querySelector('.tecla_tim').onclick = playSonidoTim;

document.querySelector('.tecla_puff').onclick = playSonidoPuff;

document.querySelector('.tecla_splash').onclick = playSonidoSplash;

document.querySelector('.tecla_clap').onclick = playSonidoClap;

document.querySelector('.tecla_toim').onclick = playSonidoToim;

document.querySelector('.tecla_psh').onclick = playSonidoPsh;

document.querySelector('.tecla_tic').onclick = playSonidoTic;

document.querySelector('.tecla_tom').onclick = playSonidoTom;


 */