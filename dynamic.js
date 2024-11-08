document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.progress_bar');

    // Only proceed if the element exists
    if (progressBar) {
        progressBar.style.display = "none";

        window.addEventListener('scroll', handleScroll);

        function handleScroll() {
            progressBar.style.display = "block";
            const height = document.body.scrollHeight; // taille du site
            const windowHeight = window.innerHeight; // taille de l'affichage
            const position = window.pageYOffset; // la position en pixels du document

            const trackLength = height - windowHeight; // taille du site - la partie affichée sur l'écran en ce moment
            
            const percentage = 
                  Math.floor((position / trackLength) * 100); // pourcentage du site déjà parcouru
            
            progressBar.style.right = (100 - percentage) + '%';
        }
    } else {
        console.error('Progress bar element not found');
    }
});
