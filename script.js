const obras = [
    { id: 1, titulo: "Twilight Sentinel", imagem: "https://i.imgur.com/N4st6S2.jpg", dimensoes: "133 × 88 × 8 cm", tecnica: "Madeira recuperada entalhada, pintura e moldura rústica", ano: "2025", descricao: "Uma celebração da quietude ao entardecer.", preco: "R$ 1.250", status: "disponivel" },
    { id: 2, titulo: "Campo Carmim", imagem: "https://i.imgur.com/2sAFKEH.jpg", dimensoes: "52.5 × 35 × 3 cm", tecnica: "Madeira recuperada entalhada, pintura acrílica texturizada", ano: "2026", descricao: "A força serena de um campo ao crepúsculo.", preco: "R$ 1.250", status: "disponivel" },
    { id: 3, titulo: "Robalo Brasil", imagem: "https://i.imgur.com/9KJ6AMw.jpg", dimensoes: "34.5 × 66.5 × 2 cm", tecnica: "Madeira recuperada entalhada, pintura e moldura rústica", ano: "2026", descricao: "A essência selvagem do Brasil.", preco: "R$ 2.000", status: "disponivel" },
    { id: 4, titulo: "Pirarucu Native River", imagem: "https://i.imgur.com/j8bYzjg.jpg", dimensoes: "33 × 59.5 × 1.5 cm", tecnica: "Madeira recuperada entalhada, pintura e moldura rústica", ano: "2026", descricao: "Inspirada nos grandes rios brasileiros.", preco: "R$ 550", status: "disponivel" },
    { id: 5, titulo: "Guardiã do Silêncio", imagem: "https://i.imgur.com/Nqv9ybj.jpg", dimensoes: "56 × 30 × 3 cm", tecnica: "Madeira recuperada entalhada, pintura e moldura rústica", ano: "2026", descricao: "Silenciosa guardiã da memória da floresta.", preco: "R$ 600", status: "disponivel" },
    { id: 6, titulo: "Portas para o Céu", imagem: "https://i.imgur.com/vsWQIGh.jpg", dimensoes: "59 × 33 × 3.5 cm", tecnica: "Madeira recuperada entalhada, pintura e moldura rústica", ano: "2026", descricao: "Portas que se abrem para o infinito.", preco: "R$ 1.750", status: "disponivel" },
    { id: 7, titulo: "Fruto de Canes", imagem: "https://i.imgur.com/MUMEQZL.jpg", dimensoes: "66 × 39 × 4 cm", tecnica: "Madeira recuperada entalhada e pintura", ano: "2026", descricao: "Peça única com forte presença.", preco: "R$ 0", status: "vendida" },
    { id: 8, titulo: "Pirarara", imagem: "https://i.imgur.com/CQUa762.jpg", dimensoes: "41 × 109 × 4.5 cm", tecnica: "Madeira recuperada entalhada e pintura", ano: "2026", descricao: "Esculpida com dedicação.", preco: "R$ 0", status: "vendida" },
    { id: 9, titulo: "Mamede Leão", imagem: "https://i.imgur.com/PxcznOa.jpg", dimensoes: "76 × 53 × 4 cm", tecnica: "Madeira entalhada, pintura e textura acrílica", ano: "2026", descricao: "Obra poderosa com textura marcante.", preco: "R$ 0", status: "vendida" }
];

let currentFilter = 'todos';
let displayedCount = 8;

const galleryGrid = document.getElementById('gallery-grid');
const loadMoreBtn = document.getElementById('load-more');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const themeToggle = document.getElementById('theme-toggle');

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

function renderGallery(filteredObras) {
    galleryGrid.innerHTML = '';
    const toShow = filteredObras.slice(0, displayedCount);
    toShow.forEach(obra => galleryGrid.appendChild(createArtCard(obra)));
    loadMoreBtn.style.display = filteredObras.length > displayedCount ? 'block' : 'none';
}

function filterObras() {
    let filtered = obras;
    if (currentFilter === 'disponivel') filtered = obras.filter(o => o.status === 'disponivel');
    if (currentFilter === 'vendida') filtered = obras.filter(o => o.status === 'vendida');
    return filtered;
}

function updateCounters() {
    document.getElementById('total-obras').textContent = obras.length;
    document.getElementById('disponiveis').textContent = obras.filter(o => o.status === 'disponivel').length;
    document.getElementById('vendidas').textContent = obras.filter(o => o.status === 'vendida').length;
}

function showLightbox(obra) {
    document.getElementById('lightbox-image').src = obra.imagem;
    document.getElementById('lightbox-title').textContent = obra.titulo;
    document.getElementById('lightbox-tecnica').textContent = obra.tecnica;
    document.getElementById('lightbox-dimensoes').textContent = obra.dimensoes;
    document.getElementById('lightbox-ano').textContent = obra.ano;
    document.getElementById('lightbox-descricao').textContent = obra.descricao;
    document.getElementById('lightbox-preco').textContent = obra.preco;
    
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

lightboxClose.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.style.display = 'none'; });

document.getElementById('lightbox-whatsapp').addEventListener('click', () => {
    window.open('https://wa.me/64993113063', '_blank');
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayedCount = 8;
        renderGallery(filterObras());
    });
});

loadMoreBtn.addEventListener('click', () => {
    displayedCount += 8;
    renderGallery(filterObras());
});

function setTheme(isDark) {
    if (isDark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
}

themeToggle.addEventListener('click', () => setTheme(!document.documentElement.hasAttribute('data-theme')));

function init() {
    updateCounters();
    renderGallery(filterObras());
}

init();