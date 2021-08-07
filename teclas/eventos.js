var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      document.write("Flecha para arriba");
      break;
    case teclas.RIGHT:
      document.write("Flecha para la derecha");
      break;
    case teclas.DOWN:
      document.write("Flecha para abajo");
      break;
    case teclas.LEFT:
      document.write("Flecha para la izquierda");
      break;
    default:
      document.write("Usted apretó otra tecla");
      break;
  }
}
