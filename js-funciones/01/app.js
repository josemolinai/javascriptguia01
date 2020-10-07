///

function escribir(id,texto) {
    document.getElementById(id).innerHTML = texto;
}

function escribeResultado(id,texto,callback){
    callback(id,texto);
}

function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function multiplicacion(a,b){
    return a * b;
}

function division(a,b){
    return a / b;
}


escribeResultado("suma","La suma de 1 y 2 es " + suma(1,2),escribir);
escribeResultado("resta","La resta de 5 y 2 es " + resta(5,2),escribir);
escribeResultado("multiplicacion","La multiplicacion de 6 y 5 es " + multiplicacion(6,5),escribir);
escribeResultado("division","La divisioón de 10 en 2 es " + division(10,2),escribir);