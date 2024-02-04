document.addEventListener('DOMContentLoaded', function () {
const themeToggleBtn = document.getElementById('themeToggleBtn');
const table = document.getElementsByClassName('table');
const body = document.body;

// on regarde si l'utilisateur avait le thème sombre à la dernière visite sur la page ou avant de la rafraîchir
// Si ce n'est pas le cas, on regarde la préférence sélectionnée dans le système de l'utilisateur
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.classList.add(userPrefersDark ? 'dark-theme' : 'light-theme');
}

// écouteurs d'évènements
themeToggleBtn.addEventListener('click', function(){
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    themeToggleBtn.classList.remove('btn-primary');
    
    /*
        L'idée est la suivante: Lorsque qu'un utilisateur clique sur le bouton, on applique aux éléments de la page souhaités une classe, qui varie selon l'élément et si c'est pour 
        le thème clair ou sombre. Le style de ces classes sont pré-définis dans le fichier style.css, ou alors directement grâce aux classes bootstrap.

        On change aussi la couleur du bouton : fond noir & texte blanc si le thème est clair, ou fond blanc et texte noir si thème blanc.
    */
    setTimeout(function(){
    // setTimeout pour ajouter un effet de transition
        themeToggleBtn.classList.toggle(
            'btn-dark',
            body.classList.contains('light-theme'));

        themeToggleBtn.classList.toggle(
            'btn-light', 
            body.classList.contains('dark-theme'));

        // on change de le texte du bouton pour indiquer quel thème s'appliquerai si l'utilisateur clique sur le bouton.
        themeToggleBtn.innerText = body.classList.contains('dark-theme') ? 'Mode clair' : 'Mode sombre';              
    }, 200);

    // changer le texte en blanc de tous les tableaux quand le thème est sombre
    for (var i = 0; i < table.length; i++){
            table[i].classList.toggle('text-light');
        }

    // on enregistre le choix de l'utilisateur (pour que le thème reste le même quand il revient)
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);     
});
});
