AOS.init({ duration: 1000, once: true });

// Cambiar color del navbar al hacer scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Simulación de envío de formulario
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto 🐾");
  this.reset();
});
