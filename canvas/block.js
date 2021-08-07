function dibujoPorClick() {
  if (opcion.value == 1) {
    valor = parseInt(texto.value);
    lineas = valor;
    l = 0;
    xf, yi, xi, yf;
    retroxf, retroyf;
    colorcito = color.value;
    espacio = ancho / lineas;

    while (l < lineas) {
      yi = espacio * l;
      xf = espacio * (l + 1);
      xi = l * espacio;
      yf = (l + 1) * espacio;
      retroxf = 300 - xf;
      dibujarLinea(colorcito, 0, yi, xf, 300);
    }
  }
  if (opcion == 2) {
    valor = parseInt(texto.value);
    lineas = valor;
    l = 0;
    xf, yi, xi, yf;
    retroxf, retroyf;
    colorcito = color.value;
    espacio = ancho / lineas;

    while (l < lineas) {
      yi = espacio * l;
      xf = espacio * (l + 1);
      xi = l * espacio;
      yf = (l + 1) * espacio;
      retroxf = 300 - xf;
      dibujarLinea(colorcito, xi, 0, 300, yf);
    }
  }
  if (opcion == 3) {
    valor = parseInt(texto.value);
    lineas = valor;
    l = 0;
    xf, yi, xi, yf;
    retroxf, retroyf;
    colorcito = color.value;
    espacio = ancho / lineas;

    while (l < lineas) {
      yi = espacio * l;
      xf = espacio * (l + 1);
      xi = l * espacio;
      yf = (l + 1) * espacio;
      retroxf = 300 - xf;
      dibujarLinea(colorcito, 300, yi, retroxf, 300);
    }
  } else {
    valor = parseInt(texto.value);
    lineas = valor;
    l = 0;
    xf, yi, xi, yf;
    retroxf, retroyf;
    colorcito = color.value;
    espacio = ancho / lineas;

    while (l < lineas) {
      yi = espacio * l;
      xf = espacio * (l + 1);
      xi = l * espacio;
      yf = (l + 1) * espacio;
      retroxf = 300 - xf;
      dibujarLinea(colorcito, retroxf, 0, 0, yf);
    }
  }
}
