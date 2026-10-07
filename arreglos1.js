//Arreglos
let edadesIzq=[];
let edadesDer=[];
//Funcion
function agregarEdad(){
    let cmpEdad=document.getElementById("edad");
    edad=parseInt(cmpEdad.value);
    edadesIzq.push(edad);
    pintarArregloIzquierda(edad);
}
