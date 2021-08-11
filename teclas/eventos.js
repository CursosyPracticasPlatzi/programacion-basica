var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
var cuadrado = document.getElementById("cuadradito");
var papel = cuadrado.getContext("2d");
var size = document.getElementById("size");
var color = document.getElementById("color");
var x;
var y;
var estado;

console.log(size.value);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  papel.beginPath();
  papel.lineWidth = size.value;
  papel.strokeStyle = color;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

document.addEventListener("keydown", dibujarTeclado);
// cuadrado.addEventListener("mousedown", pulsarMouse);
// cuadrado.addEventListener("mouseup", levantarMouse);
// cuadrado.addEventListener("mousemove", moverMouse);

// function pulsarMouse(evento) {
//   estado = 1;
//   x = evento.layerX;
//   y = evento.layerY;
// }

// function levantarMouse(evento) {
//   estado = 0;
// }

// function moverMouse(evento) {
//   if (estado == 1) {
//     dibujarLinea(color.value, x, y, evento.layerX, evento.layerY);
//     x = evento.layerX;
//     y = evento.layerY;
//   } else {
//     x = evento.layerX;
//     y = evento.layerY;
//   }
// }

x = 150;
y = 150;

function dibujarTeclado(evento) {
  colorcito = "red";
  movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(color.value, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(color.value, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(color.value, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      console.log(x);
      break;
    case teclas.LEFT:
      dibujarLinea(color.value, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
  }
  console.log(evento);
}
