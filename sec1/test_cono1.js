var preguntas = [
    "¿Cual es un prócer de la independencia?",
    "Marca un numero primo",
    "¿Cual NO es un mandamiento?",
    "¿Que significa ser responsable?",
    "¿Que es una celula?",
    "¿Para que sirve el Por qué?",
    "¿Como se dice una manzana en ingles?",
    "En que consite la segunda fase de Desing Thinking"
];

var opciones = [
    ["Simon Bolivar","Micaela Bastidas", "Todas las anteriores"],
    ["15","16","17"],
    ["NO matara","NO cometeras actos impuros","Unción de los enfermos"],
    ["Hacer todo por sí mismo","Cumplir con las obligaciones y deberes"," Delegar tareas a otros"],
    ["un tipo de tejido","la unidad basica y estructural de los seres vivos","la unidad mas grande del cuerpo"],
    ["De pregunta","De causa","De razón"],
    ["an apple","a apple","one apple"], 
    ["Entrevistar e identificar el problema","Definir el desafio o problema","Prototipar"]
];  

var puntajePorOpcion = [
    [0,0,4],
    [0,0,2],
    [0,0,2],
    [0,2,0],
    [0,4,0],
    [2,0,0],
    [2,0,0],
    [0,2,0]
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
            window.location.href = '../sec1/results1.html';
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






