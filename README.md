# presupuestoApp

Puedes ver como funciona aqui -> https://camiladanielabanarescarrasco.github.io/presupuestoApp/ 

Este código es un script de JavaScript que maneja la lógica detrás de una aplicación de presupuesto. En particular, se define un objeto llamado presupuestoObj con propiedades como presupuesto, gasto, saldo, y nombreDelGasto. Además, se definen dos funciones que actualizan una tabla HTML y verifican si el gasto supera el saldo disponible.

En la primera parte del código, se define una función llamada calcularSaldo, que es una propiedad del objeto presupuestoObj. Esta función calcula el saldo disponible restando el gasto del presupuesto. Luego, verifica si el saldo es menor que cero, y si lo es, lo establece en cero. Después de actualizar el saldo en el objeto presupuestoObj, se actualiza el valor de un elemento HTML con el saldo actualizado y se verifica si el gasto es mayor o igual al presupuesto. Si lo es, se deshabilitan los botones para agregar gastos y calcular el saldo, y se elimina la fila correspondiente de la tabla HTML.

Luego, se utiliza un objeto de JavaScript llamado Proxy para interceptar las operaciones de acceso y asignación de propiedades en el objeto presupuestoObj. Esto se hace para garantizar que las propiedades presupuesto y gasto siempre tengan valores positivos. Si se intenta asignar un valor negativo a alguna de estas propiedades, se muestra un mensaje de alerta y se devuelve false para evitar que se realice la asignación.

Finalmente, se definen dos funciones adicionales que manejan la actualización de la tabla HTML y la eliminación de filas correspondientes. La función actualizarTabla toma como entrada un objeto presupuestoObj y agrega una nueva fila a la tabla HTML con el nombre del gasto y el valor actualizado. La función eliminarFila toma como entrada una fila HTML y la elimina de la tabla. Si se elimina una fila, se actualiza el saldo y el gasto correspondiente en el objeto presupuestoObj.
