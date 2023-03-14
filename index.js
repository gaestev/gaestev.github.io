//Menú 
function abrirMenu() {
    document.getElementById("menuDesplegable").classList.toggle("mostrar");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.navegación')) {
      var dropdowns = document.getElementsByClassName("contenido");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mostrar')) {
          openDropdown.classList.remove('mostrar');
        }
      }
    }
  }
//Portada
  window.onscroll = function() {seccionvariable()};

function seccionvariable() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("acercaDeMí").style.fontSize = "1em";
    document.getElementById("acercaDeMí").style.width = "60%";
  } else {
    document.getElementById("acercaDeMí").style.fontSize = "2em";
    document.getElementById("acercaDeMí").style.width = "90%";
  }
}