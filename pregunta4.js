let accion = "acendente";

let numeros = new Array(1, 4,3, 5, 8, 10);


function ordenar(listado, accion) {
  if (accion === "acendente") {

{
      
    
    for (let i = 0; i < listado.length - 1; i++) {
      {

        if (listado[i] > listado[i + 1]) {
          let orden = listado[i];
          listado[i] = listado[i + 1];
          listado[i + 1] = orden;
          ordenado = false;
        }
      }
    }
}
  } else if (accion === "decendente") {
    for (let i = 0; i < listado.length - 1; i++) {
      if (listado[i] < listado[i + 1]) {
        let orden = listado[i];
        listado[i] = listado[i + 1];
        listado[i + 1] = orden;
      }
    }
  }

  return listado;
}
console.log(numeros);
console.log(ordenar(numeros, accion));
