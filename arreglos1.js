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
//Funcion
function pintarArregloIzquierda(){
    let contenidoTabla="";
    //muestra los mismos valores del HTML sin ser borrados
    contenidoTabla+="<tr>"+
                    "<td>12</td>"+
                    "<td>"+
                    "<button class='btn-eliminar'>Eliminar</button"+
                    "</td>"+
                    "<td>"+
                        "<button class='btn-mover'>➜</button"+
                    "</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>15</td>"+
                    "<td>"+
                    "<button class='btn-eliminar'>Eliminar</button"+
                    "</td>"+
                    "<td>"+
                        "<button class='btn-mover'>➜</button"+
                    "</td>"+
                    "</tr>";
    for (let i=0;i<edadesIzq.length;i++){
        contenidoTabla+="<tr>"+
                        "<td>"+edadesIzq[i]+"</td>"+
                        "<td>"+
                        "<button class='btn-eliminar'>Eliminar</button"+
                        "</td>"+
                        "<td>"+
                        "<button class='btn-mover'>➜</button"+
                        "</td>"+
                        "</tr>";
    }
    let cmpTablaIzq=document.getElementById("tablaIzquierda");
    cmpTablaIzq.innerHTML=contenidoTabla;

}