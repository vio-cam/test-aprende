var preguntas = [
    "¿Como puedes contribuir a cuidar el medio ambiente en tu escuela?",
    "Calcular el área de un rectanguloa con base de 8cm y altua de 5cm",
    "¿Que significa la 'eucarestía'?",
    "¿Cual es lo esencial para la resolucion de conflictos?",
    "¿Cuantos son los reinos princiapeles?",
    "¿Cual es un tipo de texto?",
    "¿Elije un verbo en ingles?",
    "En que se basa la tecnica Da Vinci "
];

var opciones = [
    ["Usar contenedores de reciclaje","Mantener las ventas abiertas", "Utilicar mas productos de un solo uso"],
    ["13cm²","40cm²","25cm²"],
    ["un ritual de purificación","la celebracion de la última cena","una ceremonía de confirmación"],
    ["Dejarse mandar por sus emociones","Culparle al otro"," Manejar nuestras emociones"],
    ["3","4","5"],
    ["literario","persuasivo","todas las anteriores"],
    ["quiclly","Run","beautiful"], 
    ["en combinar cosas ya hechas","en hacer un bosquejo","hacer la mona lisa"]
];  

var puntajePorOpcion = [
    [4,0,0],
    [0,2,0],
    [0,2,0],
    [0,0,2],
    [0,0,4],
    [0,0,2],
    [0,2,0],
    [2,0,0]
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
        window.location.href = '../sec2/results1.html';
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






