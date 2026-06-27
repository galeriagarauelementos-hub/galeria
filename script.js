const obras = [
    { id: 1, titulo: "Twilight Sentinel", imagem: "https://i.imgur.com/N4st6S2.jpg", tecnica: "Escultura", dimensoes: "52.5 × 34.5 × 3 cm", ano: "2026", preco: "$250", status: "disponivel", descricao: "Crepúsculo Sentinel..." },
    { id: 2, titulo: "Campo Carmim", imagem: "https://i.imgur.com/2sAFKEH.jpg", tecnica: "Escultura", dimensoes: "52.5 × 35 × 3 cm", ano: "2026", preco: "$250", status: "disponivel", descricao: "Campo Carmim..." },
    { id: 3, titulo: "Robalo Brasil", imagem: "https://i.imgur.com/9KJ6AMw.jpg", tecnica: "Escultura", dimensoes: "34.5 × 66.5 × 2 cm", ano: "2026", preco: "$400", status: "disponivel", descricao: "Robalo Brasil..." },
    { id: 4, titulo: "Pirarucu Native River", imagem: "https://i.imgur.com/j8bYzjg.jpg", tecnica: "Escultura", dimensoes: "33 × 59.5 × 1.5 cm", ano: "2026", preco: "R$550", status: "disponivel", descricao: "Pirarucu..." },
    { id: 5, titulo: "Guardiã do Silêncio", imagem: "https://i.imgur.com/Nqv9ybj.jpg", tecnica: "Escultura", dimensoes: "56 × 30 × 3 cm", ano: "2026", preco: "R$600", status: "disponivel", descricao: "Guardiã..." },
    { id: 6, titulo: "Portas para o Céu", imagem: "https://i.imgur.com/vsWQIGh.jpg", tecnica: "Escultura", dimensoes: "59 × 33 × 3.5 cm", ano: "2026", preco: "$350", status: "disponivel", descricao: "Portas..." },
    { id: 7, titulo: "Fruto de Canes", imagem: "https://i.imgur.com/MUMEQZL.jpg", tecnica: "Escultura", dimensoes: "66 × 39 × 4 cm", ano: "2026", preco: "R$550", status: "vendida", descricao: "Fruto..." },
    { id: 8, titulo: "Pirarara", imagem: "https://i.imgur.com/CQUa762.jpg", tecnica: "Escultura", dimensoes: "41 × 109 × 4.5 cm", ano: "2026", preco: "R$600", status: "vendida", descricao: "Pirarara..." },
    { id: 9, titulo: "Mamede Leão", imagem: "https://i.imgur.com/PxcznOa.jpg", tecnica: "Escultura", dimensoes: "Variadas", ano: "2026", preco: "Consultar", status: "disponivel", descricao: "Mamede Leão..." }
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        obras.forEach(obra => {
            const card = document.createElement('div');
            card.className = 'art-card';
            card.innerHTML = `
                <div class="art-image">
                    <img src="${obra.imagem}" alt="${obra.titulo}">
                </div>
                <div class="art-info">
                    <h3 class="art-title">${obra.titulo}</h3>
                    <p>${obra.dimensoes} • ${obra.ano}</p>
                </div>
            `;
            galleryGrid.appendChild(card);
        });
    }
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => document.documentElement.toggleAttribute('data-theme'));
    }
});