function loadNavbar() {
    fetch('../../includes/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navbar');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Appelle la fonction pour charger la navbar
document.addEventListener("DOMContentLoaded", loadNavbar);
