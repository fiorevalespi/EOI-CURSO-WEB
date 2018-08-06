$(document).ready(function() {

    window.onscroll = function() {

            myFunction()
        
        };
        
        var navbar = document.getElementById("navegacion");
        var parrafo = document.getElementById("parrafoJapon");
    
        var sticky = navbar.offsetTop;
        
        function myFunction() {


          if (window.pageYOffset >= sticky) {
    
            navbar.classList.add("sticky");
            parrafo.classList.add("parrafoJaponSticky");

    
          } else {
    
            navbar.classList.remove("sticky");
            parrafo.classList.remove("parrafoJaponSticky");
    
          }
    }

});

