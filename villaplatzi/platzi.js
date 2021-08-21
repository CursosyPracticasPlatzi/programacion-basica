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
  cerdo.x = [];
  cerdo.y = [];
  for (l = 0; l < cantidadCerdo; l++) {
    cerdo.x[l] = aleatorio(0, 7) * 60;
    cerdo.y[l] = aleatorio(0, 7) * 60;
  }
  dibujar();
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
function cargarPollo() {
  pollo.cargaOK = true;
  pollo.x = [];
  pollo.y = [];
  for (let e = 0; e < cantidadPollo; e++) {
    pollo.x[e] = aleatorio(0, 7) * 60;
    pollo.y[e] = aleatorio(0, 7) * 60;
  }
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
  if (pollo.cargaOK) {
    console.log(cantidadPollo);
    for (p = 0; p < cantidadPollo; p++) {
      papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
    }
  }
  if (cerdo.cargaOK) {
    console.log(cantidadCerdo);
    for (c = 0; c < cantidadCerdo; c++) {
      papel.drawImage(cerdo.imagen, cerdo.x[c], cerdo.y[c]);
    }
  }
  if (vaca.cargaOK) {
    papel.drawImage(vaca.imagen, x, y);
  }
}

///////Mover la vaca////////////
document.addEventListener("keydown", moverVaca);
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
var movimiento = 20;
var x = 420;
var y = 420;
function moverVaca(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      y = y - movimiento;
      if (y < -40) {
        y = 500;
      }
      dibujar();
      break;
    case teclas.DOWN:
      y = y + movimiento;
      if (y > 500) {
        y = 0;
      }
      dibujar();
      break;
    case teclas.LEFT:
      x = x - movimiento;
      if (x < -40) {
        x = 500;
      }
      dibujar();
      break;
    case teclas.RIGHT:
      x = x + movimiento;
      if (x > 500) {
        x = 0;
      }
      dibujar();
      break;
    default:
  }
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
