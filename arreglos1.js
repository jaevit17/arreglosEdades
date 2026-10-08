//Arreglos
let edadesIzq=[12,15];
let edadesDer=[20,25];
//Funcion
function agregarEdad(){
    let cmpEdad=document.getElementById("edad");
    edad=parseInt(cmpEdad.value);
    edadesIzq.push(edad);
    pintarArregloIzquierda();
}
//Funcion
function pintarArregloIzquierda(){
    let contenidoTabla="";
    for (let i=0;i<edadesIzq.length;i++){
        contenidoTabla+="<tr>"+
                        "<td>"+edadesIzq[i]+"</td>"+
                        "<td>"+
                        "<button class='btn-eliminar' onclick='eliminarIzquierdo("+i+")'>Eliminar</button>"+
                        "</td>"+
                        "<td>"+
                        "<button class='btn-mover'>➜</button"+
                        "</td>"+
                        "</tr>";
    }
    let cmpTablaIzq=document.getElementById("tablaIzquierda");
    cmpTablaIzq.innerHTML=contenidoTabla;
}
//Funcion
function pintarArregloDerecha(){
    let contenidoTabla="";
    for(let i=0;i<edadesDer.length;i++){
        contenidoTabla+="<tr>"+
                        "<td>"+
                        "<button class='btn-mover'>⬅</button>"+
                        "</td>"+
                        "<td>"+edadesDer[i]+"</td>"+
                        "<td>"+
                        "<button class='btn-eliminar'>Eliminar</button>"+
                        "</td>"+
                        "</tr>";
    }
}
