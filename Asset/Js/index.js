






var btncalcular = document.getElementById("btncalcular");
var btnAñadirGasto = document.getElementById("btnAñadirGasto")

btncalcular.addEventListener('click', capturandoPresupuesto);
btnAñadirGasto.addEventListener('click', capturandoNombreyCantidadGasto);



function capturandoPresupuesto() {
  var inputPresupuesto = document.getElementById("input-Presupuesto").value;
  document.getElementById("imprimePresupuesto").innerHTML = "$"+inputPresupuesto;

  if (inputPresupuesto.trim() === "") {
    alert("Por favor, rellene su presupuesto");
    return null;
  }else{
    return inputPresupuesto;
  }


  
}

var totalGastos = 0; // Variable para almacenar el total de gastos


function capturandoNombreyCantidadGasto() {
  var inputNombreGasto = document.getElementById("input-NombreGasto").value;
  var inputCantidadGasto = document.getElementById("input-CantidadGasto").value;
  document.getElementById("imprimeCantidadGasto").innerHTML = "$" + inputCantidadGasto;

  if (inputNombreGasto.trim() === "" || inputCantidadGasto.trim() === "") {
    alert("Por favor, rellene todos los campos obligatorios.");
    return;
  }

  // Convertir inputCantidadGasto a un número
  inputCantidadGasto = Number(inputCantidadGasto);
  console.log(inputCantidadGasto)
  


  // Obtener el presupuesto actual y actualizar el HTML
  var presupuesto = capturandoPresupuesto();
  document.getElementById("imprimePresupuesto").innerHTML = "$" + presupuesto;

  // Calcular el nuevo saldo y actualizar el HTML
  var saldo = capturarSaldo(presupuesto, inputCantidadGasto);
  if (saldo !== null) {
    document.getElementById("imprimeSaldo").innerHTML = "$" + saldo;
  } else {
    // Mostrar un mensaje de alerta y retornar sin agregar datos a la tabla
    alert("Su gasto no puede ser mayor a su saldo");
    return;
  }

  // Crear una nueva fila en la tabla
  var fila = document.createElement("tr");

  // Crear dos celdas para el nombre y la cantidad del gasto
  var columnaNombre = document.createElement("td");
  var columnaCantidad = document.createElement("td");


  // Asignar el texto a las celdas
  columnaNombre.innerText = inputNombreGasto;
  columnaCantidad.innerText = "$" + inputCantidadGasto;

  // Agregar las celdas a la fila y la fila al cuerpo de la tabla
  fila.appendChild(columnaNombre);
  fila.appendChild(columnaCantidad);
  
  // Agregar la fila al cuerpo de la tabla
  var tabla = document.querySelector("table");
  var cuerpoTabla = tabla.querySelector("tbody");
  cuerpoTabla.appendChild(fila);
  

   // Actualizar el total de gastos y el elemento HTML correspondiente
   totalGastos += inputCantidadGasto;
   document.getElementById("imprimeCantidadGasto").innerHTML = "$" + totalGastos;

   
  // Retornar la cantidad del gasto
  return inputCantidadGasto;
}


function capturarSaldo(presupuesto, gastos) {
  if (gastos > presupuesto) {
    return null;
  } else{
    var saldo = presupuesto - gastos;
    return saldo;
  }
 
}

