// script.js
const obras = [
    {
        id: 1,
        titulo: "Twilight Sentinel",
        imagem: "https://i.imgur.com/ci7dXQj.jpg",
        dimensoes: "133 × 88 × 8 cm",
        tecnica: "Madeira recuperada entalhada, pintura e moldura rústica",
        ano: "2025",
        descricao: "Uma celebração da quietude ao entardecer. Esculpida em madeira nobremente recuperada, esta peça transforma o que a natureza já havia marcado em uma obra de profunda serenidade e presença.",
        preco: "R$ 330",
        status: "disponivel"
    },
    {
        id: 2,
        titulo: "Campo Carmim",
        imagem: "https://i.imgur.com/2sAFKEH.jpg",
        dimensoes: "52.5 × 35 × 3 cm",
        tecnica: "Madeira recuperada entalhada, pintura acrílica texturizada e moldura rústica",
        ano: "2026",
        descricao: "A força serena de um campo ao crepúsculo. Criada com madeira de raízes profundas e história, esta obra revela como o que já cumpriu seu ciclo pode renascer com ainda mais alma e beleza.",
        preco: "R$ 330",
        status: "disponivel"
    },
    {
        id: 3,
        titulo: "Robalo Brasil",
        imagem: "https://i.imgur.com/9KJ6AMw.jpg",
        dimensoes: "34.5 × 66.5 × 2 cm",
        tecnica: "Madeira recuperada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "A essência selvagem e fluida do Brasil. Cada detalhe preserva a memória da madeira que um dia viveu, agora elevada a uma forma única de arte rústica contemporânea.",
        preco: "R$ 480",
        status: "disponivel"
    },
    {
        id: 4,
        titulo: "Pirarucu Native River",
        imagem: "https://i.imgur.com/j8bYzjg.jpg",
        dimensoes: "33 × 59.5 × 1.5 cm",
        tecnica: "Madeira recuperada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Inspirada nos grandes rios brasileiros. Uma peça que honra a madeira que carregou histórias, transformando-a em uma obra de presença marcante e profunda conexão com a natureza.",
        preco: "R$ 480",
        status: "disponivel"
    },
    {
        id: 5,
        titulo: "Guardiã do Silêncio",
        imagem: "https://i.imgur.com/Nqv9ybj.jpg",
        dimensoes: "56 × 30 × 3 cm",
        tecnica: "Madeira recuperada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Silenciosa guardiã da memória da floresta. Esculpida com reverência à madeira que já viveu, esta obra transmite força, quietude e a nobreza do que é autêntico e rústico.",
        preco: "R$ 600",
        status: "disponivel"
    },
    {
        id: 6,
        titulo: "Portas para o Céu",
        imagem: "https://i.imgur.com/vsWQIGh.jpg",
        dimensoes: "59 × 33 × 3.5 cm",
        tecnica: "Madeira recuperada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Portas que se abrem para o infinito. Feita com madeira que carrega o tempo, esta peça celebra a transformação elegante do que era simples em algo transcendental e cheio de presença.",
        preco: "R$ 330",
        status: "disponivel"
    },
    {
        id: 7,
        titulo: "Fruto de Canes",
        imagem: "https://i.imgur.com/MUMEQZL.jpg",
        dimensoes: "66 × 39 x 4 cm",
        tecnica: "Madeira recuperada entalhada e pintura",
        ano: "2026",
        descricao: "Peça única que transforma madeira com história em uma obra de forte presença. Cada marca natural revela a beleza autêntica do material e o cuidado artesanal.",
        preco: "R$ 0",
        status: "vendida"
    },
    {
        id: 8,
        titulo: "Pirarara",
        imagem: "https://i.imgur.com/CQUa762.jpg",
        dimensoes: "41 × 109 x 4,5 cm",
        tecnica: "Madeira recuperada entalhada e pintura",
        ano: "2026",
        descricao: "Esculpida com dedicação em madeira de caráter marcante, esta obra celebra a força e a rusticidade genuína da matéria transformada pela mão do artista.",
        preco: "R$ 0",
        status: "vendida"
    },
    {
        id: 9,
        titulo: "Leão de Mamede",
        imagem: "https://i.imgur.com/PxcznOa.jpg",
        dimensoes: "76 × 53 x 4 cm",
        tecnica: "Madeira entalhada, pintura e textura acrílica",
        ano: "2026",
        descricao: "Obra que une entalhe manual, pintura e textura acrílica sobre madeira nobremente recuperada. Uma composição poderosa que respeita a essência rústica do material.",
        preco: "R$ 0",
        status: "vendida"
    }
];

let currentFilter = 'todos';
let displayedCount = 8;

const galleryGrid = document.getElementById('gallery-grid');
const loadMoreBtn = document.getElementById('load-more');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const themeToggle = document.getElementById('theme-toggle');

// Render single card
function createArtCard(obra) {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.innerHTML = `
        <div class="art-image">
            <img src="${obra.imagem}" alt="${obra.titulo}" loading="lazy">
            ${obra.status === 'vendida' ? '<div class="sold-badge">VENDIDA</div>' : ''}
        </div>
        <div class="art-info">
            <div class="art-title">${obra.titulo}</div>
            <div class="art-meta">
                ${obra.dimensoes} • ${obra.tecnica}<br>
                ${obra.ano}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showLightbox(obra));
    return card;
}

// Render gallery
function renderGallery(filteredObras) {
    galleryGrid.innerHTML = '';
    
    const toShow = filteredObras.slice(0, displayedCount);
    
    toShow.forEach(obra => {
        galleryGrid.appendChild(createArtCard(obra));
    });
    
    loadMoreBtn.style.display = filteredObras.length > displayedCount ? 'block' : 'none';
}

// Filter obras
function filterObras() {
    let filtered = obras;
    
    if (currentFilter === 'disponivel') {
        filtered = obras.filter(o => o.status === 'disponivel');
    } else if (currentFilter === 'vendida') {
        filtered = obras.filter(o => o.status === 'vendida');
    }
    
    return filtered;
}

// Update counters
function updateCounters() {
    const total = obras.length;
    const disponiveis = obras.filter(o => o.status === 'disponivel').length;
    const vendidas = obras.filter(o => o.status === 'vendida').length;
    
    document.getElementById('total-obras').textContent = total;
    document.getElementById('disponiveis').textContent = disponiveis;
    document.getElementById('vendidas').textContent = vendidas;
}

// Show lightbox
function showLightbox(obra) {
    document.getElementById('lightbox-image').src = obra.imagem;
    document.getElementById('lightbox-title').textContent = obra.titulo;
    document.getElementById('lightbox-tecnica').textContent = obra.tecnica;
    document.getElementById('lightbox-dimensoes').textContent = obra.dimensoes;
    document.getElementById('lightbox-ano').textContent = obra.ano;
    document.getElementById('lightbox-descricao').textContent = obra.descricao || 'Obra única e original.';
    
    const precoEl = document.getElementById('lightbox-preco');
    precoEl.textContent = obra.preco;
    
    const statusEl = document.getElementById('lightbox-status');
    if (obra.status === 'vendida') {
        statusEl.innerHTML = `<span style="background:#9c7c5e;color:white;padding:6px 22px;border-radius:30px;">VENDIDA</span>`;
        document.getElementById('lightbox-whatsapp').style.display = 'none';
    } else {
        statusEl.innerHTML = `<span style="background:#4ade80;color:#111;padding:6px 22px;border-radius:30px;">DISPONÍVEL</span>`;
        document.getElementById('lightbox-whatsapp').style.display = 'block';
    }
    
    lightbox.style.display = 'flex';
}

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

// WhatsApp button
document.getElementById('lightbox-whatsapp').addEventListener('click', () => {
    const numero = '64993113063';
    const mensagem = encodeURIComponent("Olá! Tenho interesse na obra que vi no site.");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentFilter = btn.dataset.filter;
        displayedCount = 8;
        renderGallery(filterObras());
    });
});

// Load more
loadMoreBtn.addEventListener('click', () => {
    displayedCount += 8;
    renderGallery(filterObras());
});

// Theme toggle
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = !document.documentElement.hasAttribute('data-theme');
    setTheme(isDark);
});

// Initialize
function init() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    }
    
    updateCounters();
    renderGallery(filterObras());
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
}

init();