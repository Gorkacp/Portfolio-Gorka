//Animacion para menu amburguesa
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.nav-links');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');  // Animación de la hamburguesa a la X
    navbar.classList.toggle('open');    // Mostrar el menú
    header.classList.toggle('open');   // Cambiar el fondo del header
});



//Animacion para "about.css"
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en la vista, eliminamos la clase 'visible' antes de agregarla de nuevo
                entry.target.classList.remove('visible');
                // Añadimos la clase 'visible' con un pequeño retraso para reiniciar la animación
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 10); // El retraso es muy pequeño para que la animación se reinicie de inmediato
            } else {
                // Si el elemento ya no está en la vista, eliminamos la clase 'visible' para reiniciar la animación
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Detecta cuando el 50% del elemento es visible
    });

    // Seleccionamos los elementos a los que se les aplicará la animación
    const aboutText = document.querySelector('.about-text');
    const aboutImg = document.querySelector('.about-img');

    // Iniciamos la observación para los elementos
    observer.observe(aboutText);
    observer.observe(aboutImg);
});


//Animacion para "projects.css"
// Crear un observador de intersección
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activar la animación al entrar en el viewport
        entry.target.classList.add('show');
      } else {
        // Opcionalmente, hacer que la animación vuelva a su estado original al salir
        entry.target.classList.remove('show');
      }
    });
  }, {
    root: null,  // Observar la intersección con la ventana del navegador
    threshold: 0.25  // Se activa cuando el 25% de la sección es visible
  });
  
  // Observar la sección de proyectos
  const projectsSection = document.querySelector('.projects');
  observer.observe(projectsSection);
  
  // Observar las tarjetas de proyectos
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => observer.observe(card));





  
//Animacion para "services.css"
// Crear un observador de intersección para servicios
const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activar la animación al entrar en el viewport
        entry.target.classList.add('show');
      } else {
        // Opcionalmente, hacer que la animación vuelva a su estado original al salir
        entry.target.classList.remove('show');
      }
    });
  }, {
    root: null, 
    threshold: 0.25  // Se activa cuando el 25% de la sección es visible
  });
  
  // Observar la sección de "Servicios"
  const servicesSection = document.querySelector('.services');
  servicesObserver.observe(servicesSection);
  
  // Observar las tarjetas de servicios
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => servicesObserver.observe(card));



// Animación para "contact.css"
// Crear un observador de intersección para la sección de contacto
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activar la animación al entrar en el viewport
        entry.target.classList.add('show');
      } else {
        // Opcionalmente, hacer que la animación vuelva a su estado original al salir
        entry.target.classList.remove('show');
      }
    });
  }, {
    root: null,  // Observar la intersección con la ventana del navegador
    threshold: 0.25  // Se activa cuando el 25% de la sección es visible
  });
  
  // Observar la sección de contacto
  const contactSection = document.querySelector('.contact');
  contactObserver.observe(contactSection);
  



