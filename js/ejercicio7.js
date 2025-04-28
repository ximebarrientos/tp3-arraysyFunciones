/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número 
elegido por el usuario.
 */

//pedir al usuario un numero
//repetir el paso de escribir la tabla

const numero=Number(prompt("Ingrese un número"))

const tabla=(numero)=>{
    if(!isNaN(numero)){
        for(let i=1; i<11; i++){
            const resultado=i*numero
            document.writeln(`<br>${i} x ${numero}= ${i*numero}`)
        }
    }else{
        document.writeln("No ingreso un valor válido")
    }
}

tabla(numero)