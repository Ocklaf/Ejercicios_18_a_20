/* 18) Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

/* const contarLetras = (cadena = "") =>{
    if(!cadena) return console.warn("No has introducido una cadena de texto")

    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" introducido, NO es una cadena de texto`)

    let vocales = 0,
        consonantes = 0

    cadena = cadena.toLowerCase()

    for(let letra of cadena){
        if(/[aeiouáéíóúü]/.test(letra)) vocales++
        if(/[cdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
    }
    console.info({
        cadena,
        vocales,
        consonantes})
}

contarLetras()
contarLetras(2)
contarLetras("Hola Mundo")
contarLetras("süpercalifragilísticoespialidoso") */




/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/


/* const validarNombre = (nombre = "") =>{
    if(!nombre) return console.warn("No has introducido un nombre")

    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" NO es un texto`)

    //^ = nada delante de lo que se va a valorar, [] = lo que está dentro es lo que se valora, \s = los espacios, + = valora de uno en uno los carácteres, $ = nada detrás de lo que se va a valorar
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)

    return (expReg)
        ? console.info(`${nombre} es un nombre válido`)
        : console.warn(`${nombre} NO es un nombre válido`)
}

validarNombre()
validarNombre(3)
validarNombre("José Vicente García Ruiz")
validarNombre("JOsé Vic3nte") */




/*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* const validarEmail = (email = "") =>{
    if(!email) return console.warn("No has introducido un nombre")

    if(typeof email !== "string") return console.error(`El valor "${email}" NO es un texto`)

    //^ = nada delante de lo que se va a valorar, [] = lo que está dentro es lo que se valora, \s = los espacios, + = valora de uno en uno los carácteres, $ = nada detrás de lo que se va a valorar
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email) //{x,y} mínimo de carácters, máximo de carácteres
    //validación real de Jon MirCha para los e-mail en sus trabajos

    return (expReg)
        ? console.info(`${email} es un nombre válido`)
        : console.warn(`${email} NO es un nombre válido`)
}

validarEmail()
validarEmail(false)
validarEmail(3)
validarEmail("pepitogrillo@animal.com")
validarEmail("pepito.com")
validarEmail("pepito@grillocom") */


//Ejercicio adicional, uniendo ambas validaciones y pasándoselas a la función
//Se la pasamos como una expresión regular o como un constructor,
//es indiferente porque valoramos que se trate de una Regular Expresion

const validarPatron = (cadena = "", patron = "") =>{
    if(!cadena) return console.warn("No has introducido un texto")
    if(patron === undefined) return console.warn("No has introducido un patrón para evaluar")
    if(typeof cadena !== "string") return console.error(`"${cadena}" NO es un texto`)
    if(!patron instanceof RegExp) return console.error(`"${patron}" NO es una Expresión Regular válida`)

    let expReg = patron.test(cadena)

    return (expReg)
        ? console.info(`"${cadena}" cumple con el patrón`)
        : console.warn(`"${cadena}" NO cumple con el patrón`)
}

validarPatron()
validarPatron(2)
//validarPatron("hola")
validarPatron("", new RegExp("/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/", "g"))
validarPatron("José Vicente", new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "g"))
validarPatron("Jo3e Vicen=te", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g)
validarPatron("jose@gmail.com", new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/, "i"))
validarPatron("josegmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)
validarPatron("jose@gmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)
