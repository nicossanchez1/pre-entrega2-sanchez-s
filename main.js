/* 
-------------------------------------------------
AGREGAR PRODUCTOS, Ponerles un IVA y un DESCUENTO al precio,
BUSQUEDA Y FILTRADO(ESTE ÚLTIMO POR CONSOLA, ORDENANDO DE MAYOR A MENOR)
-------------------------------------------------
*/

const suma = (a, b) => a + b;
const resta = (a, b) => a - (a * b) / 100;
const iva = (x) => x * 1.21;

let productos = [];

function agregarP() {
  let tipo = prompt(
    "Ingrese el tipo de producto QUE DESEA AGREGAR"
  ).toLowerCase();
  let marca = prompt("Ingrese la marca del producto").toLowerCase();
  let precio = parseInt(prompt("Ingrese el precio del producto"));
  let descuento = parseInt(
    prompt("Ingrese el descuento a aplicar en el producto")
  );
  let precioTotal = iva(resta(precio, descuento));
  let breveDescripcion = prompt("ingrese una breve descripción del producto");

  if (
    productos.some((item) => item.tipo === tipo) &&
    productos.some((item) => item.marca === marca)
  ) {
    alert("el producto ingresado ya se encuentra en el stock");
  } else {
    alert("El PRODUCTO SE HA AGREGADO AL STOCK EXITOSAMENTE");
    let objeto = {
      id: productos.length + 1,
      tipo,
      marca,
      precio,
      descuento,
      precioTotal,
      breveDescripcion,
    };
    productos.push(objeto);

    console.log(productos);
  }
}

function filtrar() {
  let tipo = prompt(
    "Ingrese el tipo de producto QUE DESEA FILTRAR"
  ).toLowerCase();
  let busqueda = productos.filter((item) => item.tipo === tipo);
  let mensaje = "";

  busqueda.forEach((item) => {
    mensaje += `
    ID: ${item.id}
    Tipo: ${item.tipo}
    Marca: ${item.marca}
    Precio: $${item.precio}
    Descuento: %${item.descuento}
    Precio Total (INCLUYE IVA: 21%): $${item.precioTotal}
    Breve descripción: ${item.breveDescripcion}

  `;
  });

  alert(mensaje);
}

// FUNCION AGREGAR A STOCK
alert("AGREGADO DE PRODUCTOS AL STOCK");

let procesoAgregado = prompt(`
desea AGREGAR algun producto al stock?
SI: para iniciar o continuar el proceso de stock.
NO: para finalizar`).toLowerCase();
while (procesoAgregado != "no" && procesoAgregado != "si") {
  alert("por favor ingresa si o no");
  procesoAgregado = prompt(`
desea AGREGAR algun producto al stock?
SI: para iniciar o continuar el proceso de stock.
NO: para finalizar`).toLowerCase();
}

if (procesoAgregado == "si") {
  agregarP();
  procesoAgregado = prompt(`
desea AGREGAR o continuar agregando algun producto al stock?
SI: para iniciar o continuar el proceso de stock.
NO: para finalizar`).toLowerCase();
} else if (procesoAgregado == "no") {
  alert("HA FINALIZADO EL PROCESO DE AGREGADO DE STOCK");
}

// PROCESO DE FILTRADO

let decisionFiltrar = prompt(`
DESEA FILTRAR ALGUN PRODUCTO?
SI: PARA INICIAR EL PROCESO DE FILTRADO.
NO: PARA FINALIZAR`).toLowerCase();

while (decisionFiltrar != "no" && decisionFiltrar != "si") {
  alert("por favor ingresa si o no");
  decisionFiltrar = prompt(`
  DESEA FILTRAR ALGUN PRODUCTO?
  SI: PARA INICIAR EL PROCESO DE FILTRADO.
  NO: PARA FINALIZAR`).toLowerCase();
}

if (decisionFiltrar == "si") {
  let productosTotal = productos.map(
    (item) => `
  DISPONIMOS DE LOS SIGUIENTES PRODUCTOS:
  TIPO: ${item.tipo}
  MARCA: ${item.marca}
  Preecio: $${item.precio}
    `
  );
  alert(productosTotal);
  filtrar();
} else if (decisionFiltrar == "no") {
  alert("EL PROCESO DE COMPRA HA FINALIZADO");
}
