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
        
        setTimeout(function(){
            themeToggleBtn.classList.toggle(
                'btn-dark',
                body.classList.contains('light-theme'));

            themeToggleBtn.classList.toggle(
                'btn-light', 
                body.classList.contains('dark-theme'));

            themeToggleBtn.innerText = body.classList.contains('dark-theme') ? 'Mode clair' : 'Mode sombre';    

            
        }, 200);

        for (var i = 0; i < table.length; i++){
                table[i].classList.toggle('text-light');
            }

        // on enregistre le choix de l'utilisateur (pour que le thème reste le même quand il revient)
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', currentTheme);

        
    });
});
