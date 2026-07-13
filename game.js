const menu = document.getElementById("menu");
const creator = document.getElementById("creator");
const game = document.getElementById("game");

const playBtn = document.getElementById("playBtn");
const startGame = document.getElementById("startGame");
const huntBtn = document.getElementById("huntBtn");

let jugador = {
    nombre: "",
    vida: 100,
    ataque: 20,
    defensa: 10
};

let titan = null;

playBtn.onclick = function () {

    menu.style.display = "none";
    creator.style.display = "block";

};

startGame.onclick = function () {

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

function actualizarJugador(){

    document.getElementById("name").innerText = jugador.nombre;
    document.getElementById("life").innerText = jugador.vida;
    document.getElementById("attack").innerText = jugador.ataque;
    document.getElementById("defense").innerText = jugador.defensa;

}

huntBtn.onclick = function(){

    titan = {

        nombre:"Titán Base",
        vida:100,
        ataque:10

    };

    combatir();

};

function combatir(){

    while(jugador.vida>0 && titan.vida>0){

        titan.vida -= jugador.ataque;

        if(titan.vida<=0){

            alert("🏆 Has derrotado al Titán.");

            return;

        }

        jugador.vida -= titan.ataque;

    }

    actualizarJugador();

    if(jugador.vida<=0){

        alert("💀 Has muerto.");

        location.reload();

    }

}