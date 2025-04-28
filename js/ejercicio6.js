/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función
 para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

const largo=Number(prompt("Ingrese el largo de un rectangulo"))
const ancho=Number(prompt("Ingrese el ancho de un rectangulo"))

const perimetro=(largo,ancho)=>{
    if(!isNaN(largo) && !isNaN(ancho)){
        return `El perimetro del rectangulo es: ${2*(largo+ancho)}`
    }else{return "No ingresó un número válido"}
    }
const resultado=perimetro(largo,ancho)
document.writeln(resultado)