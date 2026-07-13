const menu = document.getElementById("menu");
const creator = document.getElementById("creator");
const game = document.getElementById("game");

const playBtn = document.getElementById("playBtn");
const startGame = document.getElementById("startGame");
const huntBtn = document.getElementById("huntBtn");

playBtn.onclick = function () {
    menu.style.display = "none";
    creator.style.display = "block";
};

startGame.onclick = function () {
    const nombre = document.getElementById("playerName").value;

    if (nombre === "") {
        alert("Escribe un nombre para tu cazador.");
        return;
    }

    creator.style.display = "none";
    game.style.display = "block";

    document.getElementById("name").innerText = nombre;
};

huntBtn.onclick = function () {
    alert("¡Has encontrado un Titán! ⚔️\n\nEl combate llegará en la siguiente versión.");
};