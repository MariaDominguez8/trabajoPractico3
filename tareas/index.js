const fs = require('fs');/* requerimos el modulo nativo FS que me permite leer y escribir archivos*/
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'))  // Para leer el archivo primero necesitamos parsearlo osea, pasarlo a un formato tipo JS (en este caso, array de objetos literales). Lo hacemos en una constante para no andar citandolo cada vez que lo necesitemos
module.exports = {
    mostrarMensaje : function(mensaje){
        console.log('***************************************');
        console.log(mensaje);
        console.log('*************************************');
    }, 
 agregarTarea : function(titulo,estado ='pendiente')//al agregar aca estado='pendiente', si no viene nada como parametro estado, se pone automaticamente que esta pendiente 
  {
    let nuevaTarea = {
        titulo,
        estado 
    } //creamos el objeto tareas. si el nombre de la propiedad  coincide con el parametro podemos poner solo titulo, estado. Sino seria titulo : titulo, estado : estado.
    tareas.push(nuevaTarea) // a "tareas" con push le agregamos "nuevaTarea" para poder ir añadiendo tareas 
    this.guardarCambios(tareas)
    this.mostrarMensaje('LA TAREA HA SIDO AGREGADA CON ÉXITO') 
    this.listarTareas()

}, // agregamos las tareas aca en vez de codearlas en "tareas.json"
listarTareas : function(){
            tareas.forEach(tarea => {
            console.log(tarea)
        });
},
filtrarTareas : function(filtro){
    let filtroTareas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));// filtramos las tareas por lo que entre por consola y las guardamos dentro de una variable para que se ejecute bien 
    return console.log(filtroTareas)
},
 borrarTarea : function(){
     tareas.pop()//propiedad que elimina el ultimo
     this.guardarCambios(tareas)
     this.mostrarMensaje('LA TAREA HA SIDO ELIMINADA CON ÉXITO') 
     this.listarTareas() 

 },
 guardarCambios : function(tareas){
    fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8') // para guardar las tareas en el JSON hay que usar stringify,para convertir en JSON 
 }
}//exportamos el modulo JSON 