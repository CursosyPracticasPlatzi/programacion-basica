var jugador;
var pc;

if (jugador == "tijera" && pc == "papel") {
  console.log("Ganaste");
} else if (jugador == "papel" && pc == "piedra") {
  console.log("Ganaste");
} else if (jugador == "piedra" && pc == "tijera") {
  console.log("Ganaste");
} else if (jugador == pc) {
  console.log("Empate");
} else {
  console.log("Perdiste");
}
