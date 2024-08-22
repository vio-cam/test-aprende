var preguntas = [
    "¿Cual NO es una manera de calcular el Producto Bruto Interno(PBI)?",
    "¿Cuales son los valores de un triangulo rectangulo notable cuando sus angulos son de 53° y 37°",
    "Los pilares del magisterios de la iglesia Son: ",
    "¿Que articulo nos explica los derechos humanos?",
    "¿Como se define la veolocidad?",
    "¿Cuales son los dos grandes tipos de texto?",
    "¿Como se dice esto en ingles: 'ella esta vistiendo un pantalon blanco y un polo rojo'?",
    "¿Cual es un elemento del lienzo de la propuesta de valor?"
];

var opciones = [
    ["enfoque de produccion","enfoque de ingreso","enfoque de la renta nacional"],
    ["CO = 3k,H = 5k,CA = 4k","CO = K,H =√2k,CA = k","CO =k, H = 2k, CA = √3k"],
    ["la biblia, la iglesia y las chanclas de Jesús","La sagrada tradición y escritura, el magisterio","Jesús, María Y Dios"],
    ["art. 5","art. 2","art. 6"],
    ["la rapidez con la que un bojeto cambia su posicion en un intervalo de tiempo","la rapidez con la que un objeto cambia su aceleracion","la cantidad de movimiento que tiene un objeto"],
    ["Continuos y descontinuos","ensayo y novela","ninguna de las anteriores"],
    ["she is wearing white pants and a red shirt","his clothes is a pants white and a red polo","a pants white and a red shirt"], 
    ["perfil del cliente","arbol de problemas","herramienta de negocio"]
];  

var puntajePorOpcion = [
    [0,0,4],
    [2,0,0],
    [0,2,0],
    [0,2,0],
    [4,0,0],
    [2,0,0],
    [2,0,0],
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
        window.location.href = '../sec5/results1.html';
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






