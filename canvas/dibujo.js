function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xf, yi, xi, yf;
var retroxf, retroyf;
var colorcito = "#aaf";

dibujarLinea("white", 1, 1, 1, 299);
dibujarLinea("white", 1, 299, 299, 299);
dibujarLinea("white", 1, 1, 299, 1);
dibujarLinea("white", 299, 1, 299, 299);

for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = l * 10;
  yf = (l + 1) * 10;
  retroxf = 300 - xf;
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito, xi, 0, 300, yf);
  dibujarLinea(colorcito, 300, yi, retroxf, 300);
  dibujarLinea(colorcito, retroxf, 0, 0, yf);
  console.log("linea " + 1);
}
