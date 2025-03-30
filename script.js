
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

// Lista de categorias e suas respectivas imagens
const imageCategories = {
    "FLL_2019": [
        { thumbnail: "20190217_145102_thumb.jpg",  fullRes:"20190217_145102.jpg"},
        { thumbnail: "20190217_145114_thumb.jpg",  fullRes:"20190217_145114.jpg"},
        { thumbnail: "20190217_155647_thumb.jpg",  fullRes:"20190217_155647.jpg"},
        { thumbnail: "20190217_151646_thumb.jpg",  fullRes:"20190217_151646.jpg"}
    ],
    "FLL_2020/Regional": [
        { thumbnail: "IMG-20191017-WA0006_thumb.jpg",   fullRes:"IMG-20191017-WA0006.jpg"},
        { thumbnail: "IMG-20191017-WA0007_thumb.jpg",   fullRes:"IMG-20191017-WA0007.jpg"},
        { thumbnail: "IMG-20191022-WA0007_thumb.jpg",   fullRes:"IMG-20191022-WA0007.jpg"},
        { thumbnail: "IMG-20191122-WA0003_thumb.jpg",   fullRes:"IMG-20191122-WA0003.jpg"},
        { thumbnail: "IMG-20200213-WA0000_thumb.jpg",   fullRes:"IMG-20200213-WA0000.jpg"},
        { thumbnail: "IMG-20191204-WA0002_thumb.jpg",   fullRes:"IMG-20191204-WA0002.jpg"},
        { thumbnail: "IMG-20191204-WA0005_thumb.jpg",   fullRes:"IMG-20191204-WA0005.jpg"},
        { thumbnail: "IMG-20200221-WA0024_thumb.jpg",   fullRes:"IMG-20200221-WA0024.jpg"},
        { thumbnail: "20200216_140652_thumb.jpg",  fullRes:"20200216_140652.jpg"},
        { thumbnail: "20200216_155105_thumb.jpg",   fullRes:"20200216_155105.jpg"},
        { thumbnail: "20200216_163142_thumb.jpg",   fullRes:"20200216_163142.jpg"},
        { thumbnail: "20200216_162849_thumb.jpg",   fullRes:"20200216_162849.jpg"},
        { thumbnail: "20200216_135914_thumb.jpg",  fullRes:"20200216_135914.jpg"},
        { thumbnail: "Capa_FLL_thumb.jpg",   fullRes:"Capa_FLL.jpg"},
        { thumbnail: "IMG-20200217-WA0007_thumb.jpg",   fullRes:"IMG-20200217-WA0007.jpg"}
    ],
    "FLL_2020/Nacional": [
        { thumbnail:"49627012063_4222296939_o_thumb.jpg",   fullRes:"49627012063_4222296939_o.jpg"},
        { thumbnail:"IMG-20200307-WA0003_thumb.jpg",   fullRes:"IMG-20200307-WA0003.jpg"},
        { thumbnail:"49628143047_e01fd89f84_o_thumb.jpg",   fullRes:"49628143047_e01fd89f84_o.jpg"},
        { thumbnail:"49627013243_1cd6ae0df7_o_thumb.jpg",   fullRes:"49627013243_1cd6ae0df7_o.jpg"},
        { thumbnail:"49630471977_efd145b73d_o_thumb.jpg",   fullRes:"49630471977_efd145b73d_o.jpg"},
        { thumbnail:"49630472337_923d241ab2_o_thumb.jpg",   fullRes:"49630472337_923d241ab2_o.jpg"},
        { thumbnail:"49633789173_109281a40c_o_thumb.jpg",   fullRes:"49633789173_109281a40c_o.jpg"},
        { thumbnail:"49634311641_4f86401c4e_o_thumb.jpg",   fullRes:"49634311641_4f86401c4e_o.jpg"},
        { thumbnail:"49634728787_6a9a936625_o_thumb.jpg",   fullRes:"49634728787_6a9a936625_o.jpg"},
        { thumbnail:"IMG-20200307-WA0014_thumb.jpg",   fullRes:"IMG-20200307-WA0014.jpg"},
        { thumbnail:"IMG-20200310-WA0021_thumb.jpg",   fullRes:"IMG-20200310-WA0021.jpg"},
        { thumbnail:"IMG-20200310-WA0024_thumb.jpg",   fullRes:"IMG-20200310-WA0024.jpg"},
        { thumbnail:"IMG-20200310-WA0010_thumb.jpg",   fullRes:"IMG-20200310-WA0010.jpg"},
        { thumbnail:"IMG-20200310-WA0033_thumb.jpg",   fullRes:"IMG-20200310-WA0033.jpg"},
        { thumbnail:"IMG-20200310-WA0039_thumb.jpg",   fullRes:"IMG-20200310-WA0039.jpg"}
    ]
};

// Função para carregar imagens dinamicamente
function loadImages() {
    const containers = document.querySelectorAll('.image-container1');

    containers.forEach(container => {
        const category = container.getAttribute('data-category');
        const subcategory= container.getAttribute('data-subcategory');
    
        // Determina a chave correta no objeto imageCategories
        let key = category;
        if (subcategory) {
            key += `/${subcategory}`;
        }
        const images = imageCategories[key];

        if (images) {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `sesi-imagens/${key}/${image.fullRes}`;
                imgElement.alt = image.fullRes;
                imgElement.setAttribute('data-full-res', `sesi-imagens/${key}/${image.fullRes}`);
                imgElement.classList.add('thumbnail');
                container.appendChild(imgElement);
            });
        } else {
            console.warn(`Imagens não encontradas para a categoria/subcategoria: ${key}`);
        }
    });
}

// Função para abrir o modal ao clicar em uma imagem
document.addEventListener('DOMContentLoaded', () => {
    loadImages();

    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');

    // Adiciona evento de clique a todas as miniaturas
    document.body.addEventListener('click', event => {
        if (event.target.classList.contains('thumbnail')) {
            modalImage.src = event.target.getAttribute('data-full-res');
            modal.style.display = 'block';
        }
    });

    // Fecha o modal ao clicar no botão 'X'
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});