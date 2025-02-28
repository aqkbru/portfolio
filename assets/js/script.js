function SendMail() {
    var params = {
      from_name: document.getElementById("nome").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("testo").value
    };

    // Mostra feedback visivo durante l'invio
    const button = document.querySelector('.contacts button');
    const originalText = button.innerHTML;
    const originalBg = window.getComputedStyle(button).background;
    button.innerHTML = "Invio in corso... <i class='fas fa-spinner fa-spin'></i>";
    button.disabled = true;
    
    const serviceID = "service_kyotvvj";
    const templateID = "template_uiiep7i";
  
    emailjs.send(serviceID, templateID, params)
      .then(
        res => {
          document.getElementById("nome").value = "";
          document.getElementById("email").value = "";
          document.getElementById("testo").value = "";
          
          // Feedback positivo
          button.innerHTML = "Inviato! <i class='fas fa-check'></i>";
          button.style.background = "linear-gradient(135deg, #28a745, #218838)";
          button.style.borderColor = "rgba(255, 255, 255, 0.4)";
          
          // Ripristina il bottone dopo 2 secondi
          setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = originalBg;
            button.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }, 2000);
      })
      .catch(err => {
          console.error("Email error:", err);
          
          // Feedback negativo in caso di errore
          button.innerHTML = "Errore <i class='fas fa-times'></i>";
          button.style.background = "linear-gradient(135deg, #dc3545, #c82333)";
          
          // Ripristina il bottone dopo 2 secondi
          setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = originalBg;
            button.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }, 2000);
      });
}

function togglemenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Animazione smooth per le sezioni
document.addEventListener('DOMContentLoaded', function() {
  // Aggiungi animazione di fade-in agli elementi principali
  const sections = document.querySelectorAll('.section');
  
  // Observer per l'animazione delle sezioni
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // Prepara le sezioni per l'animazione
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
  });
  
  // Animazione navbar durante lo scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.padding = '10px 0';
      header.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '20px 0';
      header.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
    }
  });
});