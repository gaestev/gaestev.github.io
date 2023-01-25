
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