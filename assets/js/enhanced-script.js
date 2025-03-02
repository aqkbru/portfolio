// EmailJS function for sending emails
function SendMail() {
    // Get the status message element
    const statusMessage = document.getElementById("status-message");
    
    // Get form data
    var params = {
        from_name: document.getElementById("nome").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("testo").value
    };

    // Show loading message
    statusMessage.style.display = "block";
    statusMessage.style.backgroundColor = "#f8f9fa";
    statusMessage.style.color = "#212529";
    statusMessage.innerHTML = "Invio in corso... <i class='fas fa-spinner fa-spin'></i>";

    // EmailJS service and template IDs
    const serviceID = "service_o3vc9xo";
    const templateID = "template_3e217h7";

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            // Success
            console.log("SUCCESS!", response.status, response.text);
            // Clear form fields
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("testo").value = "";
            
            // Show success message
            statusMessage.style.backgroundColor = "#d4edda";
            statusMessage.style.color = "#155724";
            statusMessage.innerHTML = "Messaggio inviato con successo! <i class='fas fa-check-circle'></i>";
            
            // Hide message after 5 seconds
            setTimeout(function() {
                statusMessage.style.display = "none";
            }, 5000);
        })
        .catch(function(error) {
            // Error
            console.log("FAILED...", error);
            
            // Show error message
            statusMessage.style.backgroundColor = "#f8d7da";
            statusMessage.style.color = "#721c24";
            statusMessage.innerHTML = "Errore nell'invio del messaggio. Riprova più tardi. <i class='fas fa-exclamation-circle'></i>";
        });
    
    // Prevent form submission
    return false;
}

// Hamburger menu toggle function
function togglemenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
    
    // If menu is open and click is outside menu and hamburger
    if (menu && menu.style.display === "block" && 
        !menu.contains(event.target) && 
        hamburger && !hamburger.contains(event.target)) {
        menu.style.display = "none";
    }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === "#") return; // Skip if just "#"
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Add offset for fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navbar links based on scroll position
function highlightNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navlinks a');
    
    let currentSection = "";
    const headerHeight = document.querySelector('header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = "#" + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active-link');
        }
    });
}

// Responsive image loading based on screen size
function loadAppropriateImages() {
    if (window.innerWidth <= 768) {
        // On mobile, optimize image display
        document.querySelectorAll('.project-image').forEach(img => {
            img.style.backgroundSize = 'cover';
        });
    } else {
        // On desktop, restore original settings
        document.querySelectorAll('.project-image').forEach(img => {
            img.style.backgroundSize = 'contain';
        });
    }
}

// Initialize EmailJS when the document is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your public key
    emailjs.init("oI0hL79lsbaGORo46");
    
    // Initial calls to responsive functions
    loadAppropriateImages();
    
    // Add scroll event listener for navbar highlight
    window.addEventListener('scroll', highlightNavLink);
    
    // Add click event listeners to dropdown menu links
    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.addEventListener("click", function() {
            const menu = document.getElementById("menu");
            if (menu) menu.style.display = "none";
        });
    });
});

// Handle window resize events
window.addEventListener('resize', function() {
    loadAppropriateImages();
    
    // Hide mobile menu when screen size changes to desktop
    if (window.innerWidth > 992) {
        const menu = document.getElementById("menu");
        if (menu) menu.style.display = "none";
    }
});
