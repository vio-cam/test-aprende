var preguntas = [
    "¿Que accion es mas efectiva para reducir la basura en casa?",
    "¿Como se calcula la moda?",
    "¿Cual es el significado principal de la parabola del buen samaritano?",
    "¿Que es un estereotipo?",
    "¿Que es una sustancia pura?",
    "¿Como identificar la idea principal?",
    "¿Este es la forma correcta del presente continuo: Personal pronouns + verb to be + verb+ -ing",
    "Como comenzamos nuestra pregunta retadora"
];

var opciones = [
    ["Tirar todo en la misma bolsa","Separar los reciclables de los desechables", "Usar mas productos desechables"],
    ["los numeros del medio","el que se repite mas", "multiplicando por la frecuencia entre dos"],
    ["la importancia de la riqueza","la obligacion de seguir las leyes","la enseñanza sobre la ayuda a los necesitados"],
    ["imagen mental repetitiva que se tiene de algo","Darle lo que a cada uno le corresponde","Las 'mujeres' deben de usar rosa, los hombres no" ],
    ["una mezcla que se puede separar en sus componenetes","un material que contiene solo un tipo de molecula o atomo","una sustancia con propiedades que cambien con el tiempo"],
    ["son las mas relevantes","detalles o ejemplos","se encuentra siempre al ultimo"],
    ["verdadero","falso"], 
    ["Como podriamos...","De que manera...","Como ayudamos..."]
];  

var puntajePorOpcion = [
    [0,4,0],
    [0,2,],
    [0,0,2],
    [2,0,0],
    [0,4,0],
    [2,0,0],
    [2,0],
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
        window.location.href = '../sec3/results1.html';
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






s