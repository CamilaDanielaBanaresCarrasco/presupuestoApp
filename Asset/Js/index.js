// Objeto presupuestoObj
var presupuestoObj = {
  presupuesto: 0,
  nombreDelGasto: "",
  gasto: 0,
  saldo: 0,
  


  calcularSaldo: function () {
    // Calcular el saldo
    this.saldo = this.presupuesto - this.gasto;
    // 1000 = 1000 - 50
    // 950

    // Verificar si el saldo es menor que cero
    if (this.saldo < 0) {
      this.saldo = 0;
    }

    // Imprimir el saldo actualizado por consola
    console.log("El saldo actualizado es: 950 ??---" + this.saldo);
    // perfecto saldo = 950

    // Actualizar el saldo en el HTML
    document.getElementById("imprimeSaldo").innerHTML = "$" + this.saldo;

    // Deshabilitar los botones si el gasto es mayor o igual al saldo
    if (this.gasto >= this.presupuesto) { 
      alert("No queda dinero disponible.");
      botonAñadirGasto.classList.add("disabled");
      botonCalcular.classList.add("disabled");
    } else {
      botonAñadirGasto.classList.remove("disabled"); 
    }
  }



};

// Función para agregar una nueva fila a la tabla con el nombre del gasto y el valor actualizado
function actualizarTabla(presupuestoObj) {
  // Seleccionar la tabla por su id
  var tabla = document.getElementById("laTabla").getElementsByTagName('tbody')[0];

  // Crear una fila nueva
  var fila = tabla.insertRow();

  // Crear celdas para el nombre del gasto y el valor
  var gasto = fila.insertCell(0);
  var valor = fila.insertCell(1);

  // Asignar el nombre del gasto y el valor a las celdas
  gasto.innerHTML = presupuestoObj.nombreDelGasto;
  valor.innerHTML = "$" +  document.getElementById("input-CantidadGasto").value;
}

// Obtener el botón CALCULAR
var botonCalcular = document.getElementById("btncalcular");

// Agregar un evento 'click' al botón CALCULAR
botonCalcular.addEventListener('click', function () {
  // Obtener el valor del input de presupuesto
  var inputPresupuesto = document.getElementById("input-Presupuesto").value;
  if (!inputPresupuesto) {
    alert("Ingrese el presupuesto antes de continuar.");
    location.reload(); // recarga la página
    return;
  }

  // Asignar el valor de inputPresupuesto a presupuestoObj.presupuesto
  presupuestoObj.presupuesto = inputPresupuesto;
  presupuestoObj.saldo = inputPresupuesto;

  // Imprimir el objeto presupuestoObj por consola
  console.log("El objeto presupuestoObj es: ");
  console.log(presupuestoObj);

  // Actualizar el presupuesto en el HTML
  document.getElementById("imprimePresupuesto").innerHTML = "$" + inputPresupuesto;
  document.getElementById("imprimeSaldo").innerHTML = "$" + presupuestoObj.saldo;
});

// Obtener el botón AÑADIR GASTO
var botonAñadirGasto = document.getElementById("btnAñadirGasto");

// Agregar un evento 'click' al botón AÑADIR GASTO
botonAñadirGasto.addEventListener('click', function () {
  var inputNombreGasto = document.getElementById("input-NombreGasto").value;

  var inputCantidadGasto = document.getElementById("input-CantidadGasto").value;

  if (!inputNombreGasto && !inputCantidadGasto) {
    alert("Ingrese los datos antes de continuar.");
    location.reload(); // recarga la página
    return;
  }

  // Verificar que el gasto no supere el saldo
if (parseInt(inputCantidadGasto) > (presupuestoObj.saldo)) {
  inputCantidadGasto = presupuestoObj.saldo - presupuestoObj.gasto;
  alert("Su saldo seria " + inputCantidadGasto);
  botonAñadirGasto.classList.add("disabled");
  botonCalcular.classList.add("disabled");
  alert("El gasto no puede ser mayor que el saldo disponible.");
  }
  
  // Asignar el valor del inputNombreGasto a presupuestoObj.nombreDelGasto
  presupuestoObj.nombreDelGasto = inputNombreGasto;
  // Añadir el valor del gasto al total de gastos en presupuestoObj.gasto
  presupuestoObj.gasto += parseInt(inputCantidadGasto);
  
  // Calcular y actualizar el saldo
  presupuestoObj.calcularSaldo();
  
  // Imprimir el objeto presupuestoObj actualizado por consola
  console.log("El objeto presupuestoObj Actualizado es: ");
  console.log(presupuestoObj);
  
  // Actualizar el gasto en el HTML
  document.getElementById("imprimeCantidadGasto").innerHTML = "$" + presupuestoObj.gasto;
  
  // Agregar una nueva fila a la tabla con el nombre del gasto y el valor actualizado
  actualizarTabla(presupuestoObj);
  });


  var botonRecargar = document.getElementById("botonRecargar");
botonRecargar.addEventListener("click", function() {
  location.reload();
});