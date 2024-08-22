var puntaje = localStorage.getItem('puntaje_apr');
var est_apren = '';

if (puntaje <= 19) {
    est_apren = "tu aprendizaje es multimodal";
    function continuar(){
        window.location.href = '../sec1/tipos de aprendizaje/mutimodal.html';
    }
} else if (puntaje >= 8) {
  est_apren = "tu aprendizaje es auditivo";
      function continuar(){
        window.location.href = '../sec1/tipos de aprendizaje/auditivo.html';
    }
} else if (puntaje >= 6) {
  est_apren = "tu aprendizaje es verbal";
      function continuar(){
        window.location.href = '../sec1/tipos de aprendizaje/verbal.html';
    }
} else if (puntaje >=3){
    est_apren = "tu aprendizaje es visual";
    function continuar(){
      window.location.href = '../sec1/tipos de aprendizaje/visual.html';
  }

} else {
  est_apren = "tu aprendizaje es kinestesico";
  function continuar(){
    window.location.href = '../sec1/tipos de aprendizaje/kinestetico.html';
}
}
document.getElementById('resultado').innerHTML = `${est_apren}`;
