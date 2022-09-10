let accion = "decendente";

let numeros = new Array(10, 5, 8, 3, 2, 20, 11);

function ordenar(listado, accion) {
  if (accion === "acendente") {
    for (let i = 0; i < listado.lnegth; i++) {
      for (let j = 0; j < listado.length - i - 1; j++) {
        if (listado[j] > listado[j + 1]) {
          let orden = listado[j];
          listado[j] = listado[j + 1];
          listado[j + 1] = orden;
        }
      }
    }
    return listado;
  } else if (accion === "decendente") {
    for (let i = 0; i < listado.length; i++) {
      for (let j = 0; j < listado.length - i - 1; j++) {
        if (listado[j] < listado[j + 1]) {
          let orden = listado[j];
          listado[j] = listado[j + 1];
          listado[j + 1] = orden;
        }
      }
    }
  }

  return listado;
}
console.log(numeros);
console.log(ordenar(numeros, accion));
