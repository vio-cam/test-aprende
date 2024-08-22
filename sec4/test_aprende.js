var preguntas = [
    "¿Te gusta leer?",
    "¿Te gusta releer el material?",
    "¿Te guta hacer resumenes",
    "¿Te gusta crear mapas conceptuales?",
    "¿te gusta estudiar con un grupo o en soledad?",
    "¿Te gusta escuchar y hablar?",
    "¿Te gusta trabajar con imagenes?",
    "¿Te gusta practicar lo aprendido?",
    "¿Te gusta escuchar audios en las clases?",

];

var opciones = [
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["en grupo","en soledad"],
    ["si","no"],
    ["si","no"], 
    ["si","no"]
    ["si","no"]
];  

var puntajePorOpcion = [
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [4,2],
    [2,0],
    [2,0],
    [2,0],
    [2,0]
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
            window.location.href = '../conocimiento_prev/results.html';
        }
    }
    
    function siguientePregunta() {
        document.getElementById("pregunta").innerHTML = preguntas[i];
        document.getElementById("op1").innerHTML = opciones[i][0];
        document.getElementById("op2").innerHTML = opciones[i][1];
    }
    
    siguientePregunta();
    document.getElementById("op1").addEventListener("click", function() {
        actualizarPuntaje(1);
    })
    document.getElementById("op2").addEventListener("click", function() {
        actualizarPuntaje(2);
    })


