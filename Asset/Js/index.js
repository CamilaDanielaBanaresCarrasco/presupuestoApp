// Objeto presupuestoObj
var presupuestoObj = {
  presupuesto: 0,
  nombreDelGasto: "",
  gasto: 0,
  saldo: 0,
  botedeBasura: " ",
  
//aqui

  calcularSaldo: function () {
    // Calcular el saldo
    this.saldo = this.presupuesto - this.gasto;
    // 10000  = 10000 - 0 comienza en 0 
     // 10000  = 10000 - x = x

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
      alert("Se ah gastado todo el saldo disponible.");
      botonAñadirGasto.classList.add("disabled");
      botonCalcular.classList.add("disabled");
      var tabla = document.getElementById("laTabla").getElementsByTagName('tbody')[0];
      tabla.deleteRow(fila.rowIndex);
    } else {
      botonAñadirGasto.classList.remove("disabled"); 
    }
  }



};


var presupuestoObj = new Proxy(presupuestoObj, {
  get(target, prop){
      if(prop in target){
          return target[prop];
      }else{
          return `La propiedad ${prop} no existe`
      }
  }
});


presupuestoObj = new Proxy(presupuestoObj, {
  set(target, prop, value) {
    if (prop === "presupuesto" && value < 0) {
      alert("El presupuesto debe ser un valor positivo");
      location.reload();
      return false;
    }
    if (prop === "gasto" && value < 0) {
      alert("El gasto debe ser un valor positivo");
      prop.gasto = 0;
      var tabla = document.getElementById("laTabla").getElementsByTagName('tbody')[0];
      tabla.deleteRow(fila.rowIndex);
      return false;
    }

    target[prop] = value;
    return true;
  }
});

// Modificar el valor de alguna propiedad del objeto presupuestoObj
presupuestoObj.presupuesto = 5000
console.log(presupuestoObj.presupuesto);




// Función para eliminar una fila de la tabla
function eliminarFila(fila) {
  var tabla = document.getElementById("laTabla").getElementsByTagName('tbody')[0];
  tabla.deleteRow(fila.rowIndex);
}


// Función para agregar una nueva fila a la tabla con el nombre del gasto y el valor actualizado
// Función para agregar una nueva fila a la tabla con el nombre del gasto y el valor actualizado
function actualizarTabla(presupuestoObj) {
  // Seleccionar la tabla por su id
  var tabla = document.getElementById("laTabla").getElementsByTagName('tbody')[0];

  // Crear una fila nueva
  var fila = tabla.insertRow();

  // Crear celdas para el nombre del gasto, el valor y la papelera

  
  var gasto = fila.insertCell(0);
  var valor = fila.insertCell(1);
  var bote = fila.insertCell(2);



  // Agregar el ícono de la papelera a la celda de la papelera
  var papelera = document.createElement('div');
  papelera.setAttribute('class', 'text-primary me-2 btn');

  var iconoPapelera = document.createElement('i');
  iconoPapelera.setAttribute('class', 'bi bi-trash-fill');

  papelera.appendChild(iconoPapelera);
  bote.appendChild(papelera);

  // Agregar un evento 'click' al ícono de la papelera para eliminar la fila correspondiente
  papelera.addEventListener('click', function() {
    tabla.removeChild(fila);
  var inputCantidadGasto = document.getElementById("input-CantidadGasto").value;

   // si se elimina la fila, que me reste los valores de esta en los campos superiores PENDIENTE  
   gastoParseado = parseInt(presupuestoObj.gasto)
   inputCantidadGastoParseado = parseInt(inputCantidadGasto)
   saldoParseado = parseInt(presupuestoObj.saldo)
   presupuestoObj.gasto =  gastoParseado - inputCantidadGastoParseado;
   presupuestoObj.saldo = saldoParseado + inputCantidadGastoParseado;
   document.getElementById("imprimeSaldo").innerHTML = "$" + presupuestoObj.saldo;

   console.log("aqui va el valor luego de la resta " + presupuestoObj.gasto )
   document.getElementById("imprimeCantidadGasto").innerHTML = "$" + presupuestoObj.gasto;

  });

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
  alert("Su gasto es mayor al saldo disponible");
  botonAñadirGasto.classList.add("disabled");
  botonCalcular.classList.add("disabled");
  presupuestoObj.saldo = 0;
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


const inputPresupuesto = document.getElementById('input-Presupuesto');
const btnAñadirGasto = document.getElementById('btnAñadirGasto');
const alertaAnadirGastos = document.getElementById('alertaAnadirGastos');

inputPresupuesto.addEventListener('input', function() {
  if (inputPresupuesto.value === '' || inputPresupuesto.value === '0') {
    btnAñadirGasto.disabled = true;
    alertaAnadirGastos.style.display = 'block';
  } else {
    btnAñadirGasto.disabled = false;
    alertaAnadirGastos.style.display = 'none';
  }
});

if (inputPresupuesto.value === '' || inputPresupuesto.value === '0') {
  btnAñadirGasto.disabled = true;
  alertaAnadirGastos.style.display = 'block';
} else {
  btnAñadirGasto.disabled = false;
  alertaAnadirGastos.style.display = 'none';
}