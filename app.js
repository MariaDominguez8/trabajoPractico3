const moduloTareas = require('./tareas');
const process = require ('process') ; // con este modulo podemos ingresar los comandos desde la consola

const comando =  process.argv[2] ; // la propiedad argv es un array que contiene los comandos que se ingresan por consola. Ej node[0] app.js[1] listar[2]

switch (comando) {
    case 'agregar' : 
    let titulo = process.argv[3] ;
    if (!titulo){
        console.log('Debes agregar un título') 
        break;
    }
    let estado = process.argv[4]  ;
    moduloTareas.agregarTarea(titulo,estado) 
        break;
        case 'listar': 
        moduloTareas.listarTareas()
        break;
        case 'filtrar': 
        moduloTareas.filtrarTareas(process.argv[3])
        break;  
        case 'borrar' :
            moduloTareas.borrarTarea() 
            break;
        case undefined :
            console.log('ATENCIÓN!!!!- Tienes que pasar una acción')
            break;
    default: 
    console.log('No entiendo que quieres hacer')
        break;
}




