var imagenes = [];
imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokachu"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokachu", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (gatito in coleccion) {
  coleccion[gatito].mostrar();
}
