/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
 sólo por minúsculas o por una mezcla de ambas.
 */

 //pedir una cadena de texto al usuario
 //3 if por ser 3 casos distintos

 const texto=prompt("Ingrese una cadena de texto")

 const cadena = (texto)=>{
    if(texto== texto.toUpperCase()){
        respuesta="La cadena esta escrita por todas letras MAYUSCULAS"
        document.writeln(respuesta)
    }
    else if(texto== texto.toLowerCase()){
        respuesta="La cadena esta escrita por todas letras minúsculas"
        document.writeln(respuesta)
    }
    else{
        respuesta="La cadena esta escrita por una mezcla de mayusculas y minusculas"
        document.writeln(respuesta)
    }
    return respuesta
 }

 cadena(texto)