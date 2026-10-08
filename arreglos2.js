//Funcion
function eliminarIzquierdo(indice){
    edadesIzq.splice(indice,1);
    pintarArregloIzquierda();
    }

//Funcion
function eliminarDerecho(indice){
    edadesDer.splice(indice,1);
    pintarArregloDerecha();
}

//Funcion
function pintarArreglos(){
    pintarArregloDerecha();
    pintarArregloIzquierda();
}

//Funcion
function moverHaciaDerecha(indice){
    let edad=edadesIzq[indice];
    edadesDer.push(edad);
    edadesIzq.splice(indice,1);
    pintarArreglos();
}

//Funcion
function moverHaciaIzquierda(indice){
    let edad=edadesDer[indice];
    edadesIzq.push(edad);
    edadesDer.splice(indice,1);
    pintarArreglos();
}