// script.js
const obras = [
    {
        id: 1,
        titulo: "Memória da Floresta",
        imagem: "https://picsum.photos/id/1015/800/800",
        dimensoes: "120 × 160 cm",
        tecnica: "Óleo sobre tela",
        ano: "2025",
        descricao: "Uma exploração das camadas de memória que a mata guarda. Tons terrosos e verdes profundos dialogam com a luz que atravessa a copa.",
        preco: "R$ 18.500",
        status: "disponivel"
    },
    {
        id: 2,
        titulo: "Horizonte Quebrado",
        imagem: "https://picsum.photos/id/133/800/800",
        dimensoes: "100 × 140 cm",
        tecnica: "Acrílico e pigmentos",
        ano: "2024",
        descricao: "A linha do horizonte se fragmenta em camadas de cor, representando as múltiplas realidades que coexistem em nosso tempo.",
        preco: "R$ 14.200",
        status: "vendida"
    },
    {
        id: 3,
        titulo: "Sombra da Manhã",
        imagem: "https://picsum.photos/id/201/800/800",
        dimensoes: "80 × 120 cm",
        tecnica: "Óleo sobre linho",
        ano: "2025",
        descricao: "O momento silencioso em que a luz toca o rosto da cidade. Uma meditação sobre o tempo e a passagem.",
        preco: "R$ 9.800",
        status: "disponivel"
    },
    {
        id: 4,
        titulo: "Raízes Invisíveis",
        imagem: "https://picsum.photos/id/251/800/800",
        dimensoes: "150 × 110 cm",
        tecnica: "Mista sobre madeira",
        ano: "2023",
        descricao: "O que nos sustenta quando tudo parece flutuar? Uma reflexão sobre ancestralidade e pertencimento.",
        preco: "R$ 22.000",
        status: "disponivel"
    },
    {
        id: 5,
        titulo: "Luz Dourada",
        imagem: "https://picsum.photos/id/1016/800/800",
        dimensoes: "90 × 130 cm",
        tecnica: "Óleo sobre tela",
        ano: "2024",
        descricao: "",
        preco: "R$ 12.900",
        status: "vendida"
    },
    {
        id: 6,
        titulo: "Eco do Silêncio",
        imagem: "https://picsum.photos/id/870/800/800",
        dimensoes: "110 × 150 cm",
        tecnica: "Acrílico e folha de ouro",
        ano: "2025",
        descricao: "O vazio não é ausência. É presença plena. Uma das peças mais contemplativas da série.",
        preco: "R$ 16.700",
        status: "disponivel"
    },
    {
        id: 7,
        titulo: "Porta para o Mar",
        imagem: "https://picsum.photos/id/133/800/800",
        dimensoes: "70 × 100 cm",
        tecnica: "Óleo sobre tela",
        ano: "2024",
        descricao: "",
        preco: "R$ 8.400",
        status: "vendida"
    },
    {
        id: 8,
        titulo: "Vestígios",
        imagem: "https://picsum.photos/id/201/800/800",
        dimensoes: "130 × 90 cm",
        tecnica: "Mista",
        ano: "2025",
        descricao: "Marcas do tempo sobre a superfície da memória.",
        preco: "R$ 15.300",
        status: "disponivel"
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
    const numero = '+5564993113063'; // Configure aqui
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