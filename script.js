/* 18) Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

/* const vocalesConsonantes = (string = undefined) =>{
    if(typeof string !== "string") return console.warn("Lo que has introducido no es un texto")

    if(string === undefined) return console.warn("No has introducido nada")

    let vocales = 0,
        consonantes = 0

    string = string.toLowerCase()

    for(let position of string){
        if(position === "a" || position === "e" || position === "i" || position === "o" || position === "u")
            vocales++
            else consonantes++
    }
    console.info(`La cadena de texto "${string}" tiene ${vocales} vocales y ${consonantes} consonantes`)
}

vocalesConsonantes()
vocalesConsonantes(2)
vocalesConsonantes("Supercalifragilisticoespialidos") */



/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/


/* const validarNombre = (nombre = undefined) =>{

    let espacios = 0,
        caracteresRaros = 0

    if(nombre === undefined) return console.info("No has introducido un nombre")

    if(typeof nombre !== "string") return console.info("Lo que has introducido NO es un texto")

    nombre = nombre.split("")
    //console.info(nombre)

    for(caracteres of nombre){ //Reviso que existan espacios, para saber si hay apellido/os o lo ha dejado todo junto
        if(caracteres === " ") espacios++ //si encuentra espacios, incrementa la variable
        if(/[0-9\_\-\%\/\=\.\*\+\?\¿\^\$\@\"\!\¡\\]/.test(caracteres)) caracteresRaros++
    }
    //console.info(caracteresRaros, espacios)
    //si ha encontrado caracteres raros o si no hay espacios
    if(caracteresRaros > 0 || espacios === 0) return console.info("No puedes poner un nombre sin apellidos (revisa que no hayas dejado sin espacios) ni con carácteres especiales ni numéricos")

    for(i = 0; i<=nombre.length; i++){

        //Reviso que comience por mayúsculas
        if(!/[A-Z]/.test(nombre[0])) return console.info(`El nombre ${nombre.join("")} debe de comenzar por mayúscula`)
        if(nombre[i] === (" ")){
            //después del espacio, incremento y reviso si lo que viene está con mayúsculas
            i++
            if(!/[A-Z]/.test(nombre[i])) return console.info(`Su nombre ${nombre.join("")} deben de comenzar por mayúscula todos los datos`)
        }
    }
    console.info(`Su nombre: ${nombre.join("")} es correcto`)

}

validarNombre("José Vicente Ruiz García")
validarNombre()
validarNombre(2)
validarNombre([])
validarNombre("josé Vicente")
validarNombre("José Vicente ruiz García")
validarNombre("JoséVicente")
validarNombre("José Vicente Rui5z García")
validarNombre("Jo%é Vicente Ruiz García") */

/*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* const verificarEmail = (mail = undefined) =>{

    if(mail === undefined) return console.info("No has introducido nada")

    if(typeof mail !== "string") return console.info("Lo que has introducido no es un texto")

//    return (!/@./g.test(mail))
//        ? console.info("No es un mail válido")
//        : console.info("Mail CORRECTO")
    
    mail = mail.split("")
    
    let arroba = 0, 
        punto = 0

    for(let i = 0; i <= mail.length; i++){
        if(mail[i] !== "@") i++
        if(mail[i] === "@") {
            arroba++
            i++
            if(mail[i] === ".") return console.info("No puede estar la @ y el . juntos")
            for(i=i; i <= mail.length; i++) if(mail[i] === ".") punto++            
        }
    }
    if(arroba > 0 && punto > 0) return console.info("Mail CORRECTO")
        else return console.info("Mail no válido")
}

verificarEmail()
verificarEmail(false)
verificarEmail("Jose")
verificarEmail("jose@.com")
verificarEmail("jose@gmail.com")
verificarEmail("jose.com") */