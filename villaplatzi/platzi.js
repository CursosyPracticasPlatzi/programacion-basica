function aleatorio(min, maxi) {
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.webp",
  cargaOK: false,
};
var vaca = {
  url: "vaca.webp",
  cargaOK: false,
};
var cerdo = {
  url: "cerdo.webp",
  cargaOK: false,
};
var pollo = {
  url: "pollo.webp",
  cargaOK: false,
};

cantidadCerdo = aleatorio(0, 20);
cantidadPollo = aleatorio(0, 20);
cantidadVaca = aleatorio(0, 20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (cerdo.cargaOK) {
    console.log(cantidadCerdo);
    for (c = 0; c < cantidadCerdo; c++) {
      x = aleatorio(0, 5);
      y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOK) {
    console.log(cantidadPollo);
    for (p = 0; p < cantidadPollo; p++) {
      x = aleatorio(0, 5);
      y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if (vaca.cargaOK) {
    dibujarTeclado();
  }

  // if (vaca.cargaOK) {
  //   console.log(cantidadVaca);
  //   for (v = 0; v < cantidadVaca; v++) {
  //     x = aleatorio(0, 5);
  //     y = aleatorio(0, 5);
  //     x = x * 80;
  //     y = y * 80;
  //     papel.drawImage(vaca.imagen, x, y);
  //   }
  // }
}

document.addEventListener("keydown", dibujarTeclado);
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  papel.beginPath();
  papel.lineWidth = 5;
  papel.strokeStyle = color;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

let x = 150;
let y = 150;
function dibujarTeclado(evento) {
  colorcito = "red";
  movimiento = 10;
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
  console.log(evento);
}
// ****código separado en cerdos, vacas y pollos****
// cerdo.imagen = new Image();
// cerdo.imagen.src = cerdo.url;
// cerdo.imagen.addEventListener("load", cargarCerdos);
// function cargarCerdos() {
//   cerdo.cargaOK = true;
//   dibujarCerdos();
// }
// function dibujarCerdos() {
//   if (cerdo.cargaOK) {
//     console.log(cantidad);
//     for (c = 0; c < cantidad; c++) {
//       x = aleatorio(0, 5);
//       y = aleatorio(0, 5);
//       x = x * 80;
//       y = y * 80;
//       papel.drawImage(cerdo.imagen, x, y);
//     }
//   }
// }

// vaca.imagen = new Image();
// vaca.imagen.src = vaca.url;
// vaca.imagen.addEventListener("load", cargarVacas);
// function cargarVacas() {
//   vaca.cargaOK = true;
//   dibujarVacas();
// }
// function dibujarVacas() {
//   if (vaca.cargaOK) {
//     console.log(cantidad);
//     for (v = 0; v < cantidad; v++) {
//       x = aleatorio(0, 5);
//       y = aleatorio(0, 5);
//       x = x * 80;
//       y = y * 80;
//       papel.drawImage(vaca.imagen, x, y);
//     }
//   }
// }

// pollo.imagen = new Image();
// pollo.imagen.src = pollo.url;
// pollo.imagen.addEventListener("load", cargarPollos);
// function cargarPollos() {
//   pollo.cargaOK = true;
//   dibujarPollos();
// }
// function dibujarPollos() {
//   if (pollo.cargaOK) {
//     console.log(cantidad);
//     for (p = 0; p < cantidad; p++) {
//       x = aleatorio(0, 5);
//       y = aleatorio(0, 5);
//       x = x * 80;
//       y = y * 80;
//       papel.drawImage(pollo.imagen, x, y);
//     }
//   }
// }
