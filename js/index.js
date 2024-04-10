
    function openModal(modalId) {
      document.getElementById("modal-" + modalId).style.display = "block";
    }

    function closeModal(modalId) {
      document.getElementById("modal-" + modalId).style.display = "none";
    }
  

    document.addEventListener('DOMContentLoaded', function() {
        // Obtenemos el elemento del enlace por su ID
        var emailLink = document.getElementById('emailLink');
      
        // Agregamos un evento de clic al enlace
        emailLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace
          
          // Definimos la dirección de correo electrónico a la que se enviará el mensaje
          var emailAddress = 'moisesmfv@hotmail.com';
      
          // Abrimos un cliente de correo electrónico predeterminado con la dirección de correo electrónico predefinida
          window.location.href = 'mailto:' + emailAddress;
        });
      });

      const GGilbertObras = () => {
        window.location.href = 'https://www.controldeobras.gilbert.mx';
      };
      const GGilbertPWeb = () => { window.location.href = 'https://www.gilbert.mx'; };

      const KIFTienda = () => { window.location.location = 'https://www.facebook.com/DeporteModaComodidad';};
      
      const APPrendiendoEspanol = () => { window.location.href = 'https://moises85-sys.github.io/ApprendiendoEspanol/';};

      function closeModal(modalId) 
      {
        var modal = document.getElementById(modalId);
        modal.style.display = "none";
    }
    
    document.querySelector('.close').addEventListener('click', function() 
    {
        document.querySelector('.modal').style.display = 'none';
      });