const menuHigh = document.getElementById('high');
const menuMid = document.getElementById('low');
const menuLow = document.getElementById('mid');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav__listbar');

// Adiciona um evento de clique ao botão de menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna a classe 'active'
    menuLow.classList.toggle('active');  
    menuMid.classList.toggle('active');  
    menuHigh.classList.toggle('active');   
});

// Manipulador de rolagem
window.addEventListener('scroll', function() {
    var cabeca = document.querySelector('.cabeca');
    if (window.scrollY > 100) { // Quando o scroll ultrapassar 100px
        cabeca.classList.add('scrolled');
    } else {
        cabeca.classList.remove('scrolled');
    }
});

// Manipulador de carregamento da página
window.onload = function() {
    if (window.location.hash) {
        window.location.hash = "cabecalho";
    }
};
// Alternar entre as abas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remover a classe 'active' de todos os botões e conteúdos
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Adicionar a classe 'active' ao botão clicado e ao conteúdo correspondente
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Mostrar/ocultar mais projetos
document.querySelectorAll('.toggle-more').forEach(button => {
    button.addEventListener('click', () => {
        const moreProjects = button.previousElementSibling; // Encontra o elemento .more-projects
        if (moreProjects.classList.contains('hidden')) {
            moreProjects.classList.remove('hidden');
            button.textContent = 'Ocultar projetos ↑';
        } else {
            moreProjects.classList.add('hidden');
            button.textContent = 'Ver mais projetos ↓';
        }
    });
});