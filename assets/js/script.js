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

// Initialize EmailJS when the document is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your public key
    emailjs.init("oI0hL79lsbaGORo46"); // Replace with your actual EmailJS public key
});
