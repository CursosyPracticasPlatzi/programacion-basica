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

// document.addEventListener("keydown", dibujarTeclado);
cuadrado.addEventListener("mousedown", pulsarMouse);
cuadrado.addEventListener("mouseup", levantarMouse);
cuadrado.addEventListener("mousemove", moverMouse);

function pulsarMouse(evento) {
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function levantarMouse(evento) {
  estado = 0;
}

function moverMouse(evento) {
  if (estado == 1) {
    dibujarLinea(color.value, x, y, evento.layerX, evento.layerY);
    x = evento.layerX;
    y = evento.layerY;
  } else {
    x = evento.layerX;
    y = evento.layerY;
  }
}

function dibujarTeclado(evento) {
  colorcito = "red";
  movimiento = 1;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
  }
}
