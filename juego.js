const menu = document.getElementById("menu");
const creator = document.getElementById("creator");
const game = document.getElementById("game");

const playBtn = document.getElementById("playBtn");
const startGame = document.getElementById("startGame");
const huntBtn = document.getElementById("huntBtn");
const attackBtn = document.getElementById("attackBtn");
const healBtn = document.getElementById("healBtn");

const enemyName = document.getElementById("enemyName");
const enemyLife = document.getElementById("enemyLife");
const battleLog = document.getElementById("battleLog");

let jugador = {
    nombre: "",
    vida: 100,
    vidaMax: 100,
    ataque: 20,
    defensa: 10
};

let titan = null;

playBtn.onclick = () => {
    menu.style.display = "none";
    creator.style.display = "block";
};

startGame.onclick = () => {

    const nombre = document.getElementById("playerName").value.trim();

    if (nombre === "") {
        alert("Escribe un nombre para tu cazador.");
        return;
    }

    jugador.nombre = nombre;

    creator.style.display = "none";
    game.style.display = "block";

    actualizarJugador();
};

function actualizarJugador() {

    document.getElementById("name").textContent = jugador.nombre;
    document.getElementById("life").textContent = jugador.vida;
    document.getElementById("attack").textContent = jugador.ataque;
    document.getElementById("defense").textContent = jugador.defensa;

}

function actualizarTitan(){

    if(!titan){

        enemyName.textContent="Sin enemigo";
        enemyLife.textContent="0";
        return;

    }

    enemyName.textContent=titan.nombre;
    enemyLife.textContent=titan.vida;

}

huntBtn.onclick=()=>{

    titan={

        nombre:"Titán Base",
        vida:100,
        ataque:10

    };

    actualizarTitan();

    battleLog.textContent="¡Ha aparecido un Titán Base!";

    huntBtn.disabled=true;
    attackBtn.disabled=false;
    healBtn.disabled=false;

};

attackBtn.onclick=()=>{

    if(!titan) return;

    titan.vida-=jugador.ataque;

    if(titan.vida<0) titan.vida=0;

    battleLog.textContent=
    jugador.nombre+" golpea al Titán.";

    actualizarTitan();

    if(titan.vida<=0){

        battleLog.textContent="🏆 Has derrotado al Titán.";

        titan=null;

        actualizarTitan();

        huntBtn.disabled=false;
        attackBtn.disabled=true;
        healBtn.disabled=true;

        return;

    }

    turnoTitan();

};

healBtn.onclick=()=>{

    if(!titan) return;

    jugador.vida+=20;

    if(jugador.vida>jugador.vidaMax)
        jugador.vida=jugador.vidaMax;

    actualizarJugador();

    battleLog.textContent=
    jugador.nombre+" recupera 20 de vida.";

    turnoTitan();

};

function turnoTitan(){

    jugador.vida-=titan.ataque;

    if(jugador.vida<0)
        jugador.vida=0;

    actualizarJugador();

    if(jugador.vida<=0){

        battleLog.textContent="💀 Has muerto.";

        attackBtn.disabled=true;
        healBtn.disabled=true;
        huntBtn.disabled=true;

    }

}
