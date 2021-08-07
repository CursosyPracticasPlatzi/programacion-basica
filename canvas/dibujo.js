var d = document.getElementById("dibujito");
var actualizar = document.getElementById("actualizar");
var texto = document.getElementById("texto_lineas");
var color = document.getElementById("color_lineas");
var color_texto = document.getElementById("color_texto");
var opcion = document.getElementById("opcion");
var boton = document.getElementById("botoncito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var linea = 15;
actualizar.addEventListener("click", actualizarxClick);
boton.addEventListener("click", dibujoPorClick);

//Esta función es para actualizar con un botón
function actualizarxClick() {
  location.reload();
}

//Esta función define los valores que se va a usar en los próximos ciclos
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("white", 0, 150, 300, 150);
dibujarLinea("white", 150, 0, 150, 300);
dibujarLinea("white", 1, 1, 1, 299);
dibujarLinea("white", 1, 299, 299, 299);
dibujarLinea("white", 1, 1, 299, 1);
dibujarLinea("white", 299, 1, 299, 299);

//Este ciclo es para el rombo que está en el centro
// for (l = 0; l < linea; l++) {
//   yi = 10 * l;
//   xf = 10 * (l + 32 / 2);
//   xi = l * 10;
//   yf = (l + 32 / 2) * 10;
//   retroxf = 300 - l * 10;
//   retroyf = 150 - l * 10;
//   yff = 160 + l * 10;
//   dibujarLinea("pink", 150, yi, retroyf, 150); //superior-izquierda
//   dibujarLinea("violet", 150, yi, xf, 150); //superior-derecha
//   dibujarLinea("fuchsia", xi, 150, 150, yff); //inferior-izquierda
//   dibujarLinea("brown", retroxf, 150, 150, yf); //inferior-derecha
//   console.log("linea" + 1);
// }

//Esta función es para dibujar las lineas según lo que se pida

function dibujoPorClick() {
  var valor = parseInt(texto.value);
  var lineas = valor;
  var l = 0;
  var xf, yi, xi, yf;
  var retroxf;
  var colorcito = color.value;
  var espacio = ancho / lineas;

  while (l < lineas) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = l * espacio;
    yf = (l + 1) * espacio;
    retroxf = 300 - xf;
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, xi, 0, 300, yf);
    dibujarLinea(colorcito, 300, yi, retroxf, 300);
    dibujarLinea(colorcito, retroxf, 0, 0, yf);
    l++;
  }
}
// if (opcion.value == 1) {
//   while (l < lineas) {
//     yi = espacio * l;
//     xf = espacio * (l + 1);
//     xi = l * espacio;
//     yf = (l + 1) * espacio;
//     retroxf = 300 - xf;
//     // dibujarLinea(colorcito, 0, yi, xf, 300);
//     dibujarLinea(colorcito, xi, 0, 300, yf);
//     // dibujarLinea(colorcito, 300, yi, retroxf, 300);
//     // dibujarLinea(colorcito, retroxf, 0, 0, yf);
//     l++;
//   }
// }
// if (opcion.value == 2) {
//   while (l < lineas) {
//     yi = espacio * l;
//     xf = espacio * (l + 1);
//     xi = l * espacio;
//     yf = (l + 1) * espacio;
//     retroxf = 300 - xf;
//     // dibujarLinea(colorcito, 0, yi, xf, 300);
//     //dibujarLinea(colorcito, xi, 0, 300, yf);
//     dibujarLinea(colorcito, 300, yi, retroxf, 300);
//     // dibujarLinea(colorcito, retroxf, 0, 0, yf);
//     l++;
//   }
// }
// if (opcion.value == 3) {
//   while (l < lineas) {
//     yi = espacio * l;
//     xf = espacio * (l + 1);
//     xi = l * espacio;
//     yf = (l + 1) * espacio;
//     retroxf = 300 - xf;
//     dibujarLinea(colorcito, 0, yi, xf, 300);
//     //dibujarLinea(colorcito, xi, 0, 300, yf);
//     //dibujarLinea(colorcito, 300, yi, retroxf, 300);
//     //dibujarLinea(colorcito, retroxf, 0, 0, yf);
//     l++;
//   }
// }
// if (opcion.value == 4) {
//   while (l < lineas) {
//     yi = espacio * l;
//     xf = espacio * (l + 1);
//     xi = l * espacio;
//     yf = (l + 1) * espacio;
//     retroxf = 300 - xf;
//     //dibujarLinea(colorcito, 0, yi, xf, 300);
//     //dibujarLinea(colorcito, xi, 0, 300, yf);
//     //dibujarLinea(colorcito, 300, yi, retroxf, 300);
//     dibujarLinea(colorcito, retroxf, 0, 0, yf);
//     l++;
//   }
// }
// if (opcion.value == "todo") {
//   while (l < lineas) {
//     yi = espacio * l;
//     xf = espacio * (l + 1);
//     xi = l * espacio;
//     yf = (l + 1) * espacio;
//     retroxf = 300 - xf;
//     dibujarLinea(colorcito, 0, yi, xf, 300);
//     dibujarLinea(colorcito, xi, 0, 300, yf);
//     dibujarLinea(colorcito, 300, yi, retroxf, 300);
//     dibujarLinea(colorcito, retroxf, 0, 0, yf);
//     l++;
//   }
// }
