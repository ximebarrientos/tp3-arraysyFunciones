/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
 cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

const mostrarLista = (titulo) => {
  document.writeln(`<h2>${titulo}</h2>`);
  document.writeln("<ul>");
  for (let i = 0; i < ciudades.length; i++) {
    if (ciudades[0] !== null) {
      if (ciudades[i] !== null) {
        document.writeln(`<li> ${ciudades[i]} </li>`);
      } else {
        document.writeln("");
      }
    } else {
      document.writeln("No ingreso ninguna ciudad");
    }
  }
  document.writeln("</ul>");
};


const ciudades = [];

do {
  const ciudad = prompt("Ingresa una ciudad");
  ciudades.push(ciudad);
} while (confirm(`¿Queres agregar otra ciudad?`));

mostrarLista("Lista de ciudades")


document.writeln(`El arreglo de ciudades tiene ${ciudades.length} elementos`);

document.writeln(`<ul>
    <li>Elemento en 1er posición: ${ciudades[0]}</li>
    <li>Elemento en 3er posición: ${ciudades[2]}</li>
    <li>Elemento en la última posición: ${ciudades[ciudades.length - 1]}</li>
    </ul>`);

ciudades.push("Paris");
mostrarLista("Lista de ciudades sumado Paris");

document.writeln(`El elemento que ocupa la 2da posición es  ${ciudades[1]}`);

ciudades[1]="Barcelona"
mostrarLista("Lista de ciudades sustituido el segundo elemento")