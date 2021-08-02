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
var linea = 15;
var l = 0;
var xf, yi, xi, yf;
var retroxf, retroyf;
var colorcito = "#aaf";

dibujarLinea("white", 1, 1, 1, 299);
dibujarLinea("white", 1, 299, 299, 299);
dibujarLinea("white", 1, 1, 299, 1);
dibujarLinea("white", 299, 1, 299, 299);

while (l < lineas) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = l * 10;
  yf = (l + 1) * 10;
  retroxf = 300 - xf;
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito, xi, 0, 300, yf);
  dibujarLinea(colorcito, 300, yi, retroxf, 300);
  dibujarLinea(colorcito, retroxf, 0, 0, yf);

  // dibujarLinea("green", 150, 150, xf, 300);
  // dibujarLinea("green", 150,150, 300,yf);
  // dibujarLinea("green", 150, 150,xi,0 );
  // dibujarLinea("green", 150, 150, 0, yf);
  console.log("linea " + 1);
  l++;
}

for (l=0; l < linea; l++) {
  yi = 10 * l;
  xf = 10 * (l + (32/2));
  xi = l * 10;
  yf = (l + (32/2)) * 10;
  retroxf = 300 - (l*10);
  retroyf = 150 - (l*10);
  yff= 160+(l*10);
  dibujarLinea("yellow", 150, yi, retroyf, 150); //superior-izquierda
  dibujarLinea("red", 150, yi, xf, 150); //superior-derecha
  dibujarLinea("blue", xi, 150, 150, yff); //inferior-izquierda
  dibujarLinea("green", retroxf, 150, 150, yf); //inferior-derecha
  console.log("linea" + 1)
} 

dibujarLinea("blue", 0,150,300,150)
dibujarLinea("blue", 150,0,150, 300)