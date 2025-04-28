/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado 
una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
const numero = parseInt(prompt("Ingrese un número entero"));

const paroImpar = (numero) => {
  if (!isNaN(numero)) {
    if (numero % 2 == 0) {
      const respuesta = `El número ${numero} es un número par`;
      document.writeln(respuesta);
    } else {
      const respuesta = `El número ${numero} es un número impar`;
      document.writeln(respuesta);
    }
  }else {
    document.writeln("El valor ingresado no es válido");
  }
  return respuesta;
};

paroImpar(numero)