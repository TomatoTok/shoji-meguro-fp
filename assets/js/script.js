var vmArr = [false, false, false, false];
var posPanel = [0, 0, 0, 0,0];

function verMas(idPanel, idBtn, pos) {
    if (!vmArr[pos]) {
        document.getElementById(idPanel).style.display = 'inline';
        document.getElementById(idBtn).innerHTML = "ver menos";
        vmArr[pos] = true;
    } else {
        document.getElementById(idPanel).style.display = 'none';
        document.getElementById(idBtn).innerHTML = "ver más";
        vmArr[pos] = false;
    }
}

/*Botones izquierda derecha */
/*obtengo por parametro el numero de juego al que voy a modificar
 y en el arreglo tengo la posicion que voy a mostrar de informacion*/
function sigDer(numPersona) {
    if (posPanel[numPersona] == 2) {
    } else {
        var aux = "p" + numPersona + "-" + posPanel[numPersona];
        var aux2 = "p" + numPersona + "-" + (posPanel[numPersona] += 1);
        document.getElementById(aux).style.display = 'none';
        document.getElementById(aux2).style.display = 'inline';
    }
}

function sigIzq(numPersona) {
    if (posPanel[numPersona] == 0) {
    } else {
        var aux = "p" + numPersona + "-" + posPanel[numPersona];
        var aux2 = "p" + numPersona + "-" + (posPanel[numPersona] -= 1);
        document.getElementById(aux).style.display = 'none';
        document.getElementById(aux2).style.display = 'inline';

    }
}