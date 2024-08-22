var preguntas = [
    "¿Cual es la mejor estrategia para administrar un presupuesto mensual?",
    "Calcular el valor de 'x' en la ecucacion cuadratica: x² - 5x + 6 = 0",
    "¿Que festividad cristiana celebra la llegada de Jesús al mudno?",
    "¿Cuando fue aprobado la CPP?",
    "¿Que es la mitosis y cual es su proposito?",
    "¿Cual NO es una figura literaria?",
    "¿Cuando se usa does?",
    "¿Que se necesita para elaborar un storyboard?'"
];

var opciones = [
    ["Ahorrar solo cuando sobra dinero","Registrar todos los ingresos y gastos", "Gastar"],
    ["(x-3)(x-2)","(x-6)(x+1)","(x+5)(x-1)"],
    ["pentecostés","Navidad","Cuaresma"],
    ["1993","1990","1985"],
    ["la division celular para producir gametos","la division celular que produce celulas hijas identicas","el proceso por el cual las celulas se especializan"],
    ["Simil","Metafora","expresivo"],
    ["he,she and it","i,you,they","my,your,our"], 
    ["guión","personajes","Todas las anteriores"]
];  

var puntajePorOpcion = [
    [0,4,0],
    [2,0,0],
    [0,2,0],
    [2,0,0],
    [0,4,0],
    [0,0,2],
    [2,0,0],
    [0,0,2]
];

var puntaje = 0;
var i = 0;


function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    puntaje = puntaje + puntajePorOpcion[i][indice];
    i = i + 1;
    if (i < preguntas.length) {
        siguientePregunta();
    } else {
        //mostrarResultado();
        localStorage.setItem("puntaje", puntaje);
        window.location.href = '../sec4/results1.html';
    }
}
    
    function siguientePregunta() {
        document.getElementById("pregunta").innerHTML = preguntas[i];
        document.getElementById("op1").innerHTML = opciones[i][0];
        document.getElementById("op2").innerHTML = opciones[i][1];
        document.getElementById("op3").innerHTML = opciones[i][2];
    }
    
    siguientePregunta();
    document.getElementById("op1").addEventListener("click", function() {
        actualizarPuntaje(1);
    })
    document.getElementById("op2").addEventListener("click", function() {
        actualizarPuntaje(2);
    })
    document.getElementById("op3").addEventListener("click", function() {
        actualizarPuntaje(3);
    })






