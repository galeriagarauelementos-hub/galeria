// script.js
const obras = [
    {
        id: 1,
        titulo: "Twilight Sentinel",
        imagem: "https://i.imgur.com/ci7dXQj.jpg",   // Foto principal (a mais bonita)
        dimensoes: "133 × 88 × 8 cm",
        tecnica: "Madeira entalhada, pintura e moldura rústica",
        ano: "2025",
        descricao: "Twilight Sentinel captura a poesia silenciosa do campo ao entardecer. Um pássaro solitário repousa sobre uma cerca desgastada, silhuetado contra um céu em chamas de ouro, âmbar e carmim. Emoldurado por árvores escuras, evoca paz, solidão e conexão com a natureza.",
        preco: "R$ 330",
        status: "disponivel"
    },
    {
            {
        id: 2,
        titulo: "Campo Carmim",
        imagem: "https://i.imgur.com/2sAFKEH.jpg",
        dimensoes: "52.5 × 35 × 3 cm",
        tecnica: "Madeira entalhada, pintura acrílica texturizada e moldura rústica",
        ano: "2026",
        descricao: "Campo Carmim captura um momento de quieta reflexão onde natureza e emoção se encontram. Contra um céu cinza suave, uma árvore solitária estende seus galhos escuros em direção a uma lua carmim luminosa, enquanto delicadas flores emergem como símbolos de resiliência, esperança e renovação.",
        preco: "R$ 330",
        status: "disponivel"
    },
    },
    {
            {
        id: 3,
        titulo: "Robalo Brasil",
        imagem: "https://i.imgur.com/9KJ6AMw.jpg",
        dimensoes: "34.5 × 66.5 × 2 cm",
        tecnica: "Madeira reutilizada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Obra criada exclusivamente com madeira reutilizada, selecionada com cuidado de materiais previamente usados. Cada peça carrega sua própria história e caráter, transformada através do trabalho manual em uma obra única que celebra a sustentabilidade e o valor artístico atemporal.",
        preco: "R$ 520",
        status: "disponivel"
    },
    },
    {
            {
        id: 4,
        titulo: "Pirarucu Native River",
        imagem: "https://i.imgur.com/j8bYzjg.jpg",
        dimensoes: "33 × 59.5 × 1.5 cm",
        tecnica: "Madeira reutilizada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Obra criada exclusivamente com madeira reutilizada. Cada peça carrega sua própria história e caráter, transformada através do trabalho manual em uma arte única que celebra sustentabilidade e valor artístico atemporal.",
        preco: "R$ 550",
        status: "disponivel"
    },
    },
    {
            {
        id: 5,
        titulo: "Guardiã do Silêncio",
        imagem: "https://i.imgur.com/Nqv9ybj.jpg",
        dimensoes: "56 × 30 × 3 cm",
        tecnica: "Madeira reutilizada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Trabalho com materiais rústicos e reutilizados, principalmente madeira reciclada. Cada peça é inteiramente feita à mão, com ferramentas simples e técnicas tradicionais. Busco preservar a essência bruta, as texturas e a história presente em cada pedaço de madeira recuperada.",
        preco: "R$ 600",
        status: "disponivel"
    },
    },
    {
            {
        id: 6,
        titulo: "Portas para o Céu",
        imagem: "https://i.imgur.com/vsWQIGh.jpg",
        dimensoes: "59 × 33 × 3.5 cm",
        tecnica: "Madeira reutilizada entalhada, pintura e moldura rústica",
        ano: "2026",
        descricao: "Trabalho com materiais rústicos e reutilizados, principalmente madeira reciclada. Cada peça é feita à mão com ferramentas simples e técnicas tradicionais. Busco preservar a essência bruta, as texturas e a história de cada pedaço de madeira recuperada.",
        preco: "R$ 400",
        status: "disponivel"
    },
    },
    {
            {
        id: 7,
        titulo: "Fruto de Canes",
        imagem: "https://i.imgur.com/MUMEQZL.jpg",
        dimensoes: "?? × ?? cm",
        tecnica: "Madeira reutilizada entalhada e pintura",
        ano: "2026",
        descricao: "Peça única criada com madeira recuperada, transformada manualmente em uma composição que celebra a força bruta e a poesia silenciosa da matéria. Cada detalhe preserva a história do material original, resultando em uma obra cheia de textura, profundidade e autenticidade.",
        preco: "-----",
        status: "vendida"
    },
    },
    {
            {
            {
        id: 16,
        titulo: "Pirarara",
        imagem: "https://i.imgur.com/CQUa762.jpg",
        dimensoes: "?? × ?? cm",
        tecnica: "Madeira reutilizada entalhada e pintura",
        ano: "2026",
        descricao: "Peça única esculpida em madeira recuperada, com forte presença e textura marcante. Uma obra que transmite força, rusticidade e a beleza encontrada no material reutilizado.",
        preco: "-----",
        status: "vendida"
    },
    },
    {
            {
        id: 17,
        titulo: "Mamede Leão",
        imagem: "https://i.imgur.com/PxcznOa.jpg",
        dimensoes: "?? × ?? cm",
        tecnica: "Madeira entalhada, pintura e textura acrílica",
        ano: "2026",
        descricao: "Peça única que une entalhe manual, pintura e textura acrílica sobre madeira recuperada. Uma composição forte e expressiva que destaca a potência da matéria bruta transformada pela mão do artista.",
        preco: "-----",
        status: "vendida"
    },
    },
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
    const numero = '64993113063'; // Configure aqui
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
    // Theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    }
    
    updateCounters();
    renderGallery(filterObras());
    
    // Keyboard escape for lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
}

init();