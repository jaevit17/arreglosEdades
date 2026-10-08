//Arreglos
let edadesIzq=[12,15];
let edadesDer=[20,25];
//Funcion recupera valor y integra en arreglo
function agregarEdad(){
    let cmpEdad=document.getElementById("edad");
    edad=parseInt(cmpEdad.value);
    edadesIzq.push(edad);
    pintarArregloIzquierda();
}
//Funcion con posicion de indice crea una FILA izquierda con el valor mostrado del indice 
function pintarArregloIzquierda(){
    let contenidoTabla="";
    for (let i=0;i<edadesIzq.length;i++){
        contenidoTabla+="<tr>"+
                        "<td>"+edadesIzq[i]+"</td>"+
                        "<td>"+
                        "<button class='btn-eliminar' onclick='eliminarIzquierdo("+i+")'>Eliminar</button>"+
                        "</td>"+
                        "<td>"+
                        "<button class='btn-mover' onclick='moverHaciaDerecha("+i+")'>➜</button"+
                        "</td>"+
                        "</tr>";
    }
    let cmpTablaIzq=document.getElementById("tablaIzquierda");
    cmpTablaIzq.innerHTML=contenidoTabla;
}
//Funcion con posicion de indice crea una FILA derecha con el valor mostrado del indice 
function pintarArregloDerecha(){
    let contenidoTabla="";
    for(let i=0;i<edadesDer.length;i++){
        contenidoTabla+="<tr>"+
                        "<td>"+
                        "<button class='btn-mover' onclick='moverHaciaIzquierda("+i+")'>⬅</button>"+
                        "</td>"+
                        "<td>"+edadesDer[i]+"</td>"+
                        "<td>"+
                        "<button class='btn-eliminar' onclick='eliminarDerecho("+i+")'>Eliminar</button>"+
                        "</td>"+
                        "</tr>";
    }
    let cmpTablaDer=document.getElementById("tablaDerecha");
    cmpTablaDer.innerHTML=contenidoTabla;
}

