// Data
const donuts = [
    // --- Mini Donuts com Cobertura ---
    { 
        id: 1, 
        name: "Colorido (14und)", 
        category: "mini-cobertura", 
        price: 35.00, // <-- PREÇO (AJUSTE AQUI)
        image: "🍩",   // <-- EMOJI (AJUSTE AQUI)
        description: "Cobertura sortida com chocolate ao leite, chocolate meio amargo e chocolate branco." 
    },
    { 
        id: 2, 
        name: "Premium (14und)", 
        category: "mini-cobertura", 
        price: 40.00, // <-- PREÇO (AJUSTE AQUI)
        image: "🥜",   // <-- EMOJI (AJUSTE AQUI)
        description: "Cobertura com chocolate premium e granulado de amendoim." 
    },
    { 
        id: 3, 
        name: "Juju (14und)", 
        category: "mini-cobertura", 
        price: 35.00, // <-- PREÇO (AJUSTE AQUI)
        image: "🍬",   // <-- EMOJI (AJUSTE AQUI)
        description: "Cobertura de chocolate branco colorido de lilas,verde e azul com confeito colorido." 
    },
    { 
        id: 4, 
        name: "Chocolate ao Leite (14und)", 
        category: "mini-cobertura", 
        price: 35.00, // <-- PREÇO (AJUSTE AQUI)
        image: "🍫",   // <-- EMOJI (AJUSTE AQUI)
        description: "Cobertura com chocolate ao leite e confeito colorido." 
    },
    { 
        id: 5, 
        name: "Red (14und)", 
        category: "mini-cobertura", 
        price: 35.00, // <-- PREÇO (AJUSTE AQUI)
        image: "❤️",   // <-- EMOJI (AJUSTE AQUI)
        description: "Cobertura de chocolate branco colorido de vermelho com confeito colorido." 
    },

    // --- Categoria mini-recheado ---
    { 
    id: 6, 
    name: "Doce de Leite (12und)", 
    category: "mini-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheados com doce de leite e passados no açúcar gelado." 
    },
    { 
    id: 7, 
    name: "Geleia de Morango(12und)", 
    category: "mini-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheados com geleia de Morango e passados no açúcar gelado." 
    },
    { 
    id: 8, 
    name: "Nutella (12und)", 
    category: "mini-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheados com Nutella e passados no açúcar gelado." 
    },
    { 
    id: 9, 
    name: "Misto (24und)", 
    category: "mini-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Geleia de morango, Nutella e  Doce de Leite passados no açúcar gelado." 
    },
    { 
    id: 9, 
    name: "Nutella (24und)", 
    category: "mini-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheados com Nutella e passados no açúcar gelado." 
    },

    // --- Categoria donuts recheado grande---
    { 
    id: 10, 
    name: "Nutella", 
    category: "grande-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheado com Nutella coberto de açúcar gelado." 
    },
    { 
    id: 11, 
    name: "Geleira de Morango", 
    category: "grande-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheado com Geleia de Morango coberto de açúcar gelado." 
    },
    { 
    id: 12, 
    name: "Doce de Leite", 
    category: "grande-recheado", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Recheado com Doce de Leite coberto de açúcar gelado." 
    },

    // --- Categoria donuts grande-cobertura---
    { 
    id: 13, 
    name: "Pink", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate branco colorido de rosa e confeitos coloridos." 
    },
    { 
    id: 14, 
    name: "Blue", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate branco colorido de azul e confeitos coloridos." 
    },
    { 
    id: 15, 
    name: "Chocolate ao Leite ", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate ao leite.e confeito colorido." 
    },
    { 
    id: 16, 
    name: " Chocolate Branco", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate branco." 
    },
    { 
    id: 17, 
    name: " Chocolate Branco com Coco", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Donuts com cobertura de chocolate branco e flocos de coco." 
    },
    { 
    id: 18, 
    name: "Meio Amargo", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate meio amargo, polvilhado com cacau 100%." 
    },
    { 
    id: 19, 
    name: "Doce de Leite com Coco", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Donuts com cobertura de doce de leite e coco." 
    },
    { 
    id: 20, 
    name: "Churros", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Donuts com cobertura de doce de leite, açúcar e canela." 
    },
    { 
    id: 21, 
    name: "Açucar com Canela", 
    category: "grande-cobertura", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Polvilhado no açúcar e canela." 
    },

// --- Categoria pipoca---
    
    {
    id: 22, 
    name: "Chocolate", 
    category: "pipoca", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate ao leite e cacau 30%." 
    },

    { 
    id: 23, 
    name: "Nesquik", 
    category: "pipoca", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate branco e Nesquik morango." 
    },

    { 
    id: 24, 
    name: "Ninho", 
    category: "pipoca", // <-- categoria correspondente
    price: 15.00, 
    image: "🍓",
    description: "Cobertura de chocolate branco e leite Ninho." 
    },


    // --- Adicione aqui os produtos das outras categorias quando tiver ---
    // Exemplo:
    // { 
    //     id: 6, 
    //     name: "Nome do Produto", 
    //     category: "mini-recheado", // <-- categoria correspondente
    //     price: 15.00, 
    //     image: "🍓",
    //     description: "Descrição do produto." 
    // }
];

// Variáveis globais
let selectedCategory = 'todos';
let favorites = []; // Será preenchida pelo localStorage

// Função para carregar favoritos do localStorage
function loadFavorites() {
    const savedFavorites = localStorage.getItem('eliDonutsFavorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

// Função para salvar favoritos no localStorage
function saveFavorites() {
    localStorage.setItem('eliDonutsFavorites', JSON.stringify(favorites));
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadFavorites(); // Carrega os favoritos salvos
    renderMenu();
    setupCategoryButtons();
});

// Render menu
function renderMenu() {
    const menuGrid = document.getElementById('menu-grid');
    let filteredDonuts;
    
    if (selectedCategory === 'favoritos') {
        filteredDonuts = donuts.filter(donut => favorites.includes(donut.id));
    } else if (selectedCategory === 'todos') {
        filteredDonuts = donuts;
    } else {
        filteredDonuts = donuts.filter(donut => donut.category === selectedCategory);
    }

    if (filteredDonuts.length === 0) {
        if (selectedCategory === 'favoritos') {
            menuGrid.innerHTML = `<p style="text-align: center; color: #6b7280;">Você ainda não marcou nenhum item como favorito. Clique na estrela ★ para adicionar!</p>`;
        } else {
            menuGrid.innerHTML = `<p style="text-align: center; color: #6b7280;">Nenhum produto encontrado nesta categoria ainda.</p>`;
        }
        return;
    }

    menuGrid.innerHTML = filteredDonuts.map(donut => {
        const isFavorite = favorites.includes(donut.id);
        
        return `
        <div class="donut-card">
            <div class="card-content">
                <div class="donut-details">
                    <div class="donut-emoji">${donut.image}</div>
                    <h3 class="donut-name">${donut.name}</h3>
                    <p class="donut-description">${donut.description}</p>
                </div>

                <div class="card-footer">
                    <span class="price">R$ ${donut.price.toFixed(2).replace('.', ',')}</span>
                    <span class="favorite-star ${isFavorite ? 'favorited' : ''}" onclick="toggleFavorite(${donut.id})">★</span>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Setup category buttons
function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedCategory = this.dataset.category;
            renderMenu();
        });
    });
}

// Função para favoritar/desfavoritar
function toggleFavorite(donutId) {
    const index = favorites.indexOf(donutId);

    if (index === -1) {
        // Se não está na lista, adiciona
        favorites.push(donutId);
    } else {
        // Se já está na lista, remove
        favorites.splice(index, 1);
    }
    
    saveFavorites(); // Salva a lista atualizada no localStorage
    renderMenu(); // Re-renderiza o menu para mostrar a mudança
}