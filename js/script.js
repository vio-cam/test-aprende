function next_user() {
    var nombre = document.getElementById("user").value;
    localStorage.setItem("name", nombre);
    window.location.href = '../conoc.html';
}

//nombre del usuario//

function agregar_nombre() {
    var anterior = document.getElementById("hola");
    var actual = localStorage.getItem("name");
    var mensaje = '<span> ahora elija una opcion para comenzar</span>';
    actual = actual + mensaje; 
    anterior.innerHTML = anterior.innerHTML + actual;
}
agregar_nombre(); 

//conocimiento enlace//

function next_pag1() {
    window.location.href = '../conocimiento_prev/previo.html';
    
}
function next_pag2() {
    window.location.href = '../0cono.html';
    
}

//nivel secundario//

function sec1(){
    window.location.href = '../sec1/sec1.html';
}

function sec2(){
    window.location.href = '../sec2/sec2.html';
}

function sec3(){
    window.location.href = '../sec3/sec3.html';
}

function sec4(){
    window.location.href = '../sec4/sec4.html';
}

function sec5(){
    window.location.href = '../sec5/sec5.html';
}

//comenzar desde 0//

function s01(){
    window.location.href = '../sec1/tes0.html';
}

function s02(){
    window.location.href = '../sec2/tes0.html';
}

function s03(){
    window.location.href = '../sec3/tes0.html';
}

function s04(){
    window.location.href = '../sec4/tes0.html';
}

function s05(){
    window.location.href = '../sec5/tes0.html';
}
