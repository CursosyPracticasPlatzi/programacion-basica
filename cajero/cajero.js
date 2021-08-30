class Billete {
  constructor(v, c) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.valor];
  }
  mostrar() {
    document.body.appendChild(this.imagen);
  }
}

var imagenes = [];
imagenes[200] = "img/200.jpg";
imagenes[100] = "img/100.jpg";
imagenes[50] = "img/50.jpg";
imagenes[20] = "img/20.jpg";
imagenes[10] = "img/10.jpg";
imagenes[5] = "img/5soles.jpg";
imagenes[2] = "img/2soles.png";
imagenes[1] = "img/1sol.png";

var entregado = [];
var caja = [];
caja.push(new Billete(200, 20));
caja.push(new Billete(100, 20));
caja.push(new Billete(50, 30));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 20));
caja.push(new Billete(5, 20));
caja.push(new Billete(2, 20));
caja.push(new Billete(1, 20));

var cajaInicial = 1000000;
var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var resultadoimg = document.getElementById("resultadoImg");
var cajaChica = document.getElementById("cajaInicial");

function entregarDinero() {
  let t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (let bi of caja) {
    if (dinero <= cajaInicial) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - bi.valor * papeles;
      cajaInicial = cajaInicial - bi.valor * papeles;
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "No tenemos el dinero :(";
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML =
          resultado.innerHTML +
          e.cantidad +
          " billetes de $" +
          e.valor +
          "<br>";
        for (let dd = 0; dd < e.cantidad; dd++) {
          resultadoimg.appendChild(e.imagen);
          resultadoimg.innerHTML = resultadoimg.innerHTML + "<br>";
        }
      }
    }
  }
  cajaChica.innerHTML = "Saldo: $ " + cajaInicial;
}
