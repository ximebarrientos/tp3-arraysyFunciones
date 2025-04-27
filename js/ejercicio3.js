/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números 
aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en 
un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

/*function getRandomArbitrary(min,max){
    return Math.random()*(max-min)+min
}*/

function numeroAleatorio(){
    return Math.floor(Math.random()*(6)+1)
}


const apariciones=[0,0,0,0,0,0,0,0,0,0,0,0,0]

//guardar en una variable dado1, dado2 el valor obtenido de los dados

for(let indiceApariciones=0;indiceApariciones<5; indiceApariciones++){
    const dado1=numeroAleatorio()
    const dado2=numeroAleatorio()
    console.log("dado1: "+dado1+"dado2: "+dado2)
    const suma=dado1+dado2
    console.log("suma: "+suma)
    
    apariciones[suma]=apariciones[suma]+1
    console.log(apariciones)
}

//sumar los dados

//anotar cuantas veces salio cada suma (del 2 al 12)