

// Sélection des éléments HTML nécessaires
const openBtn = document.querySelector('.openbtn'); // Bouton pour ouvrir la barre latérale
const closeBtn = document.querySelector('.closebtn'); // Bouton pour fermer la barre latérale
const sidebar = document.getElementById('mysidbar'); // Barre latérale
const menuLinks = document.querySelectorAll('.menu-link a'); // Liens de menu dans la barre de navigation
const decoButtons = document.querySelectorAll('.deco .orange_link'); // Boutons "Order the deco" dans la section decoration

// Fonction pour ouvrir la barre latérale
function openNav() {
    sidebar.style.width = '250px'; // Ajuste la largeur de la barre latérale
    document.getElementById('main').style.marginLeft = '250px'; // Pousse le contenu principal
}

// Fonction pour fermer la barre latérale
function closeNav() {
    sidebar.style.width = '0'; // Réinitialise la largeur de la barre latérale
    document.getElementById('main').style.marginLeft = '0'; // Réinitialise le décalage du contenu principal
}

// Événements pour ouvrir et fermer la barre latérale
openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

// Ajouter une classe active au lien de menu actuellement cliqué
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuLinks.forEach(link => link.classList.remove('active')); // Retire la classe active des autres liens
        this.classList.add('active'); // Ajoute la classe active au lien actuel
    });
});

// Action sur les boutons "Order the deco"
decoButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! Our team will contact you soon.'); // Affiche un message de confirmation
    });
});

// Détection de défilement (scroll) pour ajouter une classe au header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
