var imagenes = [];
imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokachu"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokachu = new Pakiman("Pokachu", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokachu);
coleccion.push(tocinauro);

for (gatito in coleccion) {
  coleccion[gatito].mostrar();
}
