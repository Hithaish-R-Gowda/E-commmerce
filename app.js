const translations = {
  en: {
    searchLabel: "Search products",
    searchPlaceholder: "Search phones, bags, audio...",
    language: "Language",
    cart: "Cart",
    eyebrow: "Shop smarter, faster, clearer",
    heroTitle: "Find the right product without digging through endless pages.",
    heroText: "Search, compare, sort, check price history, and see a better-value recommendation before you buy.",
    all: "All",
    electronics: "Electronics",
    home: "Home",
    fashion: "Fashion",
    fitness: "Fitness",
    sortBy: "Sort by",
    recommended: "Recommended",
    priceLow: "Price: Low to High",
    priceHigh: "Price: High to Low",
    rating: "Highest Rated",
    discount: "Biggest Discount",
    budget: "Budget",
    anyPrice: "Any price",
    dealsOnly: "Deals only",
    assistantTitle: "Quick shopper",
    quickAudio: "Best headphones under Rs. 10,000",
    quickHome: "Comfortable office chair",
    quickFitness: "Fitness tracker with battery life",
    tipTitle: "Tip",
    tipText: "Open any product to see price history, future prediction, and a better-value alternative.",
    productsTitle: "Products",
    clearFilters: "Clear filters",
    yourCart: "Your cart",
    total: "Total",
    checkout: "Checkout",
    addToCart: "Add to cart",
    details: "Details",
    betterPick: "Better value pick",
    predicted: "Predicted next month",
    history: "Price history",
    noResults: "No products match your search yet. Try another category or budget."
  },
  hi: {
    searchLabel: "Product khojen",
    searchPlaceholder: "Phones, bags, audio khojen...",
    language: "Bhasha",
    cart: "Cart",
    eyebrow: "Smart, fast, clear shopping",
    heroTitle: "Bina endless pages ke sahi product dhoondhiye.",
    heroText: "Search, compare, sort, price history dekhiye, aur kharidne se pehle better-value recommendation paaiye.",
    all: "Sab",
    electronics: "Electronics",
    home: "Home",
    fashion: "Fashion",
    fitness: "Fitness",
    sortBy: "Sort",
    recommended: "Recommended",
    priceLow: "Price: Low to High",
    priceHigh: "Price: High to Low",
    rating: "Highest Rated",
    discount: "Biggest Discount",
    budget: "Budget",
    anyPrice: "Any price",
    dealsOnly: "Deals only",
    assistantTitle: "Quick shopper",
    quickAudio: "Best headphones under Rs. 10,000",
    quickHome: "Comfortable office chair",
    quickFitness: "Fitness tracker with battery life",
    tipTitle: "Tip",
    tipText: "Product open karke price history, future prediction, aur better alternative dekhiye.",
    productsTitle: "Products",
    clearFilters: "Clear filters",
    yourCart: "Aapka cart",
    total: "Total",
    checkout: "Checkout",
    addToCart: "Cart me add karein",
    details: "Details",
    betterPick: "Better value pick",
    predicted: "Next month prediction",
    history: "Price history",
    noResults: "Is search se products nahi mile. Category ya budget badal kar dekhiye."
  },
  es: {
    searchLabel: "Buscar productos",
    searchPlaceholder: "Busca telefonos, bolsos, audio...",
    language: "Idioma",
    cart: "Carrito",
    eyebrow: "Compra mas inteligente y clara",
    heroTitle: "Encuentra el producto correcto sin revisar paginas infinitas.",
    heroText: "Busca, compara, ordena, revisa historial de precios y mira una mejor recomendacion antes de comprar.",
    all: "Todo",
    electronics: "Electronica",
    home: "Hogar",
    fashion: "Moda",
    fitness: "Fitness",
    sortBy: "Ordenar",
    recommended: "Recomendado",
    priceLow: "Precio: bajo a alto",
    priceHigh: "Precio: alto a bajo",
    rating: "Mejor valorado",
    discount: "Mayor descuento",
    budget: "Presupuesto",
    anyPrice: "Cualquier precio",
    dealsOnly: "Solo ofertas",
    assistantTitle: "Compra rapida",
    quickAudio: "Mejores audifonos bajo Rs. 10,000",
    quickHome: "Silla de oficina comoda",
    quickFitness: "Pulsera fitness con bateria",
    tipTitle: "Consejo",
    tipText: "Abre un producto para ver historial, prediccion y una alternativa de mejor valor.",
    productsTitle: "Productos",
    clearFilters: "Limpiar filtros",
    yourCart: "Tu carrito",
    total: "Total",
    checkout: "Pagar",
    addToCart: "Anadir al carrito",
    details: "Detalles",
    betterPick: "Mejor valor",
    predicted: "Prediccion proximo mes",
    history: "Historial de precios",
    noResults: "No hay productos para esta busqueda. Prueba otra categoria o presupuesto."
  },
  fr: {
    searchLabel: "Rechercher des produits",
    searchPlaceholder: "Chercher telephones, sacs, audio...",
    language: "Langue",
    cart: "Panier",
    eyebrow: "Acheter plus vite et plus clairement",
    heroTitle: "Trouvez le bon produit sans parcourir trop de pages.",
    heroText: "Recherchez, comparez, triez, consultez l'historique des prix et voyez une meilleure option avant d'acheter.",
    all: "Tout",
    electronics: "Electronique",
    home: "Maison",
    fashion: "Mode",
    fitness: "Fitness",
    sortBy: "Trier",
    recommended: "Recommande",
    priceLow: "Prix: bas a eleve",
    priceHigh: "Prix: eleve a bas",
    rating: "Mieux note",
    discount: "Meilleure remise",
    budget: "Budget",
    anyPrice: "Tout prix",
    dealsOnly: "Offres seulement",
    assistantTitle: "Achat rapide",
    quickAudio: "Meilleurs casques sous Rs. 10,000",
    quickHome: "Chaise de bureau confortable",
    quickFitness: "Bracelet fitness avec batterie",
    tipTitle: "Astuce",
    tipText: "Ouvrez un produit pour voir l'historique, la prediction et une meilleure alternative.",
    productsTitle: "Produits",
    clearFilters: "Effacer filtres",
    yourCart: "Votre panier",
    total: "Total",
    checkout: "Commander",
    addToCart: "Ajouter au panier",
    details: "Details",
    betterPick: "Meilleur choix",
    predicted: "Prediction mois prochain",
    history: "Historique des prix",
    noResults: "Aucun produit ne correspond. Essayez une autre categorie ou budget."
  }
};

const products = [
  {
    id: 1,
    name: "AeroSound Pro ANC Headphones",
    category: "Electronics",
    price: 7999,
    oldPrice: 11999,
    rating: 4.7,
    reviews: 2840,
    score: 94,
    tags: ["headphones", "audio", "wireless", "noise cancelling"],
    why: "Strong noise cancellation, balanced sound, and 38 hour battery life.",
    history: [10999, 9999, 9499, 8999, 8499, 7999],
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#edf7ff", "linear-gradient(145deg,#111827,#2563eb)", "48%", "1.2", "999px"]
  },
  {
    id: 2,
    name: "PixelMate X2 5G Phone",
    category: "Electronics",
    price: 39999,
    oldPrice: 45999,
    rating: 4.5,
    reviews: 4132,
    score: 88,
    tags: ["phone", "mobile", "camera", "5g"],
    why: "Bright display, reliable camera, and all-day battery for daily use.",
    history: [45999, 44999, 42999, 41999, 40999, 39999],
    photo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#f0fdf4", "linear-gradient(160deg,#0f172a,#0f766e)", "38%", "0.72", "18px"]
  },
  {
    id: 3,
    name: "DeskEase Ergonomic Chair",
    category: "Home",
    price: 9499,
    oldPrice: 12999,
    rating: 4.8,
    reviews: 1920,
    score: 96,
    tags: ["chair", "office", "ergonomic", "comfort"],
    why: "Adjustable lumbar support and breathable mesh for long work sessions.",
    history: [12499, 11999, 10999, 10999, 9999, 9499],
    photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#fff7ed", "linear-gradient(145deg,#78350f,#d97706)", "50%", "0.9", "16px"]
  },
  {
    id: 4,
    name: "FreshBrew Smart Coffee Maker",
    category: "Home",
    price: 6499,
    oldPrice: 7999,
    rating: 4.4,
    reviews: 980,
    score: 84,
    tags: ["coffee", "kitchen", "smart", "home"],
    why: "Programmable brewing, reusable filter, and compact counter footprint.",
    history: [7599, 7299, 6999, 6999, 6699, 6499],
    photo: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#f8fafc", "linear-gradient(145deg,#475569,#94a3b8)", "42%", "0.86", "12px"]
  },
  {
    id: 5,
    name: "MoveLite Running Shoes",
    category: "Fashion",
    price: 3299,
    oldPrice: 5499,
    rating: 4.6,
    reviews: 2215,
    score: 90,
    tags: ["shoes", "running", "fashion", "sports"],
    why: "Light foam sole, grippy tread, and breathable upper for daily runs.",
    history: [4999, 4599, 4299, 3999, 3499, 3299],
    photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#fdf2f8", "linear-gradient(145deg,#be123c,#fb7185)", "58%", "1.8", "999px"]
  },
  {
    id: 6,
    name: "UrbanPack Anti-Theft Backpack",
    category: "Fashion",
    price: 1899,
    oldPrice: 2799,
    rating: 4.3,
    reviews: 1588,
    score: 82,
    tags: ["bag", "backpack", "travel", "laptop"],
    why: "Hidden zippers, USB pass-through, and padded laptop storage.",
    history: [2499, 2399, 2199, 2099, 1999, 1899],
    photo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#eef2ff", "linear-gradient(145deg,#312e81,#6366f1)", "42%", "0.82", "20px"]
  },
  {
    id: 7,
    name: "FitPulse Tracker 12-Day Battery",
    category: "Fitness",
    price: 2499,
    oldPrice: 3999,
    rating: 4.5,
    reviews: 3198,
    score: 91,
    tags: ["fitness", "tracker", "watch", "battery"],
    why: "Accurate activity tracking, sleep insights, and long battery life.",
    history: [3799, 3499, 3299, 2999, 2699, 2499],
    photo: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#ecfdf5", "linear-gradient(145deg,#064e3b,#10b981)", "32%", "0.55", "18px"]
  },
  {
    id: 8,
    name: "HydroSteel Insulated Bottle",
    category: "Fitness",
    price: 899,
    oldPrice: 1299,
    rating: 4.7,
    reviews: 1740,
    score: 89,
    tags: ["bottle", "fitness", "travel", "steel"],
    why: "Keeps drinks cold for 24 hours and has a leak-proof lid.",
    history: [1199, 1099, 1099, 999, 949, 899],
    photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526401485004-2aa07159c8f2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#eff6ff", "linear-gradient(145deg,#075985,#38bdf8)", "24%", "0.42", "18px"]
  },
  {
    id: 9,
    name: "ViewSharp 27 Inch 4K Monitor",
    category: "Electronics",
    price: 26999,
    oldPrice: 32999,
    rating: 4.6,
    reviews: 1210,
    score: 87,
    tags: ["monitor", "display", "4k", "office"],
    why: "Color accurate 4K panel with USB-C charging for clean desks.",
    history: [31999, 30999, 29999, 28999, 27999, 26999],
    photo: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#f1f5f9", "linear-gradient(145deg,#020617,#64748b)", "58%", "1.55", "8px"]
  },
  {
    id: 10,
    name: "SleepCloud Cotton Comforter",
    category: "Home",
    price: 2199,
    oldPrice: 3499,
    rating: 4.4,
    reviews: 845,
    score: 83,
    tags: ["comforter", "bed", "cotton", "home"],
    why: "Soft cotton shell with medium warmth for year-round use.",
    history: [3299, 3099, 2899, 2599, 2399, 2199],
    photo: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#fff1f2", "linear-gradient(145deg,#9f1239,#fda4af)", "58%", "1.45", "22px"]
  },
  {
    id: 11,
    name: "DailyFlex Stretch Chinos",
    category: "Fashion",
    price: 1499,
    oldPrice: 2499,
    rating: 4.2,
    reviews: 670,
    score: 78,
    tags: ["pants", "fashion", "chinos", "office"],
    why: "Comfort stretch fabric with a neat office-ready fit.",
    history: [2299, 2099, 1999, 1799, 1599, 1499],
    photo: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#f5f5f4", "linear-gradient(145deg,#44403c,#a8a29e)", "34%", "0.56", "16px"]
  },
  {
    id: 12,
    name: "CoreMat Non-Slip Yoga Mat",
    category: "Fitness",
    price: 1299,
    oldPrice: 1899,
    rating: 4.6,
    reviews: 1112,
    score: 86,
    tags: ["yoga", "mat", "fitness", "non slip"],
    why: "Cushioned grip surface with carry strap for easy classes.",
    history: [1799, 1699, 1599, 1499, 1399, 1299],
    photo: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80"
    ],
    art: ["#fefce8", "linear-gradient(145deg,#854d0e,#facc15)", "58%", "2.3", "999px"]
  }
];

const state = {
  query: "",
  category: "all",
  sort: "recommended",
  budget: "all",
  dealsOnly: false,
  lang: "en",
  cart: []
};

const els = {
  grid: document.querySelector("#productGrid"),
  search: document.querySelector("#searchInput"),
  summary: document.querySelector("#resultSummary"),
  sort: document.querySelector("#sortSelect"),
  budget: document.querySelector("#budgetSelect"),
  deals: document.querySelector("#dealToggle"),
  clear: document.querySelector("#clearFilters"),
  tabs: document.querySelector("#categoryTabs"),
  language: document.querySelector("#languageSelect"),
  cartToggle: document.querySelector("#cartToggle"),
  cartPanel: document.querySelector("#cartPanel"),
  cartClose: document.querySelector("#cartClose"),
  cartItems: document.querySelector("#cartItems"),
  cartCount: document.querySelector("#cartCount"),
  cartTotal: document.querySelector("#cartTotal"),
  overlay: document.querySelector("#overlay"),
  dialog: document.querySelector("#productDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  dialogClose: document.querySelector("#dialogClose")
};

function t(key) {
  return translations[state.lang][key] || translations.en[key] || key;
}

function formatPrice(value) {
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

function discount(product) {
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
}

function prediction(product) {
  const values = product.history;
  const trend = values[values.length - 1] - values[values.length - 3];
  const predicted = Math.max(Math.round(product.price + trend / 2), Math.round(product.price * 0.85));
  return predicted;
}

function filteredProducts() {
  const query = state.query.trim().toLowerCase();
  let list = products.filter((product) => {
    const haystack = [product.name, product.category, product.why, ...product.tags].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesDeal = !state.dealsOnly || discount(product) >= 25;
    const matchesBudget =
      state.budget === "all" ||
      (state.budget === "under2000" && product.price <= 2000) ||
      (state.budget === "under10000" && product.price <= 10000) ||
      (state.budget === "under50000" && product.price <= 50000);
    return matchesQuery && matchesCategory && matchesDeal && matchesBudget;
  });

  list = list.sort((a, b) => {
    if (state.sort === "priceLow") return a.price - b.price;
    if (state.sort === "priceHigh") return b.price - a.price;
    if (state.sort === "rating") return b.rating - a.rating;
    if (state.sort === "discount") return discount(b) - discount(a);
    return b.score - a.score;
  });

  return list;
}

function productStyle(product) {
  const [artBg, shapeBg, width, ratio, radius] = product.art;
  return `--art-bg:${artBg};--shape-bg:${shapeBg};--shape-w:${width};--shape-ratio:${ratio};--shape-radius:${radius};`;
}

function productImages(product) {
  return [product.photo, ...(product.gallery || [])];
}

function renderProducts() {
  const list = filteredProducts();
  els.summary.textContent = list.length === 1 ? "Showing 1 product" : `Showing ${list.length} products`;

  if (!list.length) {
    els.grid.innerHTML = `<div class="empty">${t("noResults")}</div>`;
    return;
  }

  els.grid.innerHTML = list
    .map(
      (product) => `
      <article class="product-card">
        <div class="product-art" style="${productStyle(product)}">
          <img class="product-photo" src="${product.photo}" alt="${product.name}" loading="lazy" />
          <span class="badge">${discount(product)}% off</span>
          <div class="card-photo-strip">
            ${productImages(product)
              .slice(0, 4)
              .map((src) => `<span style="background-image:url('${src}');"></span>`)
              .join("")}
          </div>
        </div>
        <div class="card-body">
          <h3>${product.name}</h3>
          <div class="meta">
            <span>${product.category}</span>
            <span>★ ${product.rating}</span>
            <span>${product.reviews.toLocaleString("en-IN")} reviews</span>
          </div>
          <div class="price-row">
            <span class="price">${formatPrice(product.price)}</span>
            <span class="old-price">${formatPrice(product.oldPrice)}</span>
          </div>
          <p class="why">${product.why}</p>
          <div class="card-actions">
            <button class="add-cart" type="button" data-add="${product.id}">${t("addToCart")}</button>
            <button class="details" type="button" data-details="${product.id}" aria-label="${product.name} details">i</button>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function findBetterProduct(product) {
  const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id);
  const ranked = sameCategory
    .map((item) => ({
      ...item,
      value: item.score + item.rating * 8 + discount(item) * 0.8 - item.price / 2500
    }))
    .sort((a, b) => b.value - a.value);
  return ranked[0] || products.find((item) => item.id !== product.id);
}

function drawChart(canvas, product, better) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width = canvas.offsetWidth * devicePixelRatio;
  const height = canvas.height = canvas.offsetHeight * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.clearRect(0, 0, width, height);

  const values = [...product.history, prediction(product), prediction(product) - 200];
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pad = 24;
  const chartWidth = canvas.offsetWidth - pad * 2;
  const chartHeight = canvas.offsetHeight - pad * 2;

  ctx.strokeStyle = "#dde3ea";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = pad + (chartHeight / 3) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + chartWidth, y);
    ctx.stroke();
  }

  function plot(points, color, dashed = false) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.setLineDash(dashed ? [6, 6] : []);
    ctx.beginPath();
    points.forEach((value, index) => {
      const x = pad + (chartWidth / (values.length - 1)) * index;
      const y = pad + chartHeight - ((value - min) / (max - min || 1)) * chartHeight;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);
  }

  plot(product.history, "#0f766e");
  plot([product.history.at(-1), prediction(product), prediction(product) - 200], "#d97706", true);

  ctx.fillStyle = "#18212f";
  ctx.font = "12px system-ui";
  ctx.fillText(`${t("predicted")}: ${formatPrice(prediction(product))}`, pad, 18);
  ctx.fillStyle = "#667085";
  ctx.fillText(`Alternative: ${better.name}`, pad, canvas.offsetHeight - 8);
}

function openDetails(id) {
  const product = products.find((item) => item.id === id);
  const better = findBetterProduct(product);
  const images = productImages(product);
  els.dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-gallery" style="${productStyle(product)}">
        <div class="product-art dialog-art">
          <img class="product-photo" id="detailMainPhoto" src="${images[0]}" alt="${product.name}" />
          <span class="badge">${discount(product)}% off</span>
        </div>
        <div class="detail-thumbs" aria-label="${product.name} photos">
          ${images
            .map(
              (src, index) => `
                <button class="${index === 0 ? "active" : ""}" type="button" data-photo="${src}" aria-label="View product photo ${index + 1}">
                  <img src="${src}" alt="" />
                </button>`
            )
            .join("")}
        </div>
      </div>
      <div class="dialog-info">
        <h2>${product.name}</h2>
        <div class="price-row">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <p>${product.why}</p>
        <div class="score-list">
          <div><span>Rating</span><strong>${product.rating}/5</strong></div>
          <div><span>Value score</span><strong>${product.score}</strong></div>
          <div><span>${t("predicted")}</span><strong>${formatPrice(prediction(product))}</strong></div>
        </div>
        <h3>${t("history")}</h3>
        <canvas class="history" id="historyChart" aria-label="Price history chart"></canvas>
        <div class="recommendation">
          <h3>${t("betterPick")}: ${better.name}</h3>
          <p>${better.why}</p>
          <p><strong>${formatPrice(better.price)}</strong> · ★ ${better.rating} · ${discount(better)}% off</p>
          <button type="button" data-details="${better.id}">${t("details")}</button>
        </div>
      </div>
    </div>`;
  if (!els.dialog.open) {
    els.dialog.showModal();
  }
  requestAnimationFrame(() => drawChart(document.querySelector("#historyChart"), product, better));
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  renderCart();
}

function renderCart() {
  els.cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (!state.cart.length) {
    els.cartItems.innerHTML = `<div class="empty">Your cart is empty.</div>`;
    els.cartTotal.textContent = formatPrice(0);
    return;
  }

  els.cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return `
        <div class="cart-item">
          <span class="cart-thumb" style="background-image:url('${product.photo}');"></span>
          <div>
            <h3>${product.name}</h3>
            <span>${formatPrice(product.price)}</span>
          </div>
          <div class="qty">
            <button type="button" data-dec="${product.id}" aria-label="Decrease ${product.name}">-</button>
            <strong>${item.qty}</strong>
            <button type="button" data-inc="${product.id}" aria-label="Increase ${product.name}">+</button>
          </div>
        </div>`;
    })
    .join("");

  const total = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
  els.cartTotal.textContent = formatPrice(total);
}

function toggleCart(open) {
  els.cartPanel.hidden = !open;
  els.overlay.hidden = !open;
  els.cartToggle.setAttribute("aria-expanded", String(open));
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  renderProducts();
  renderCart();
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = els.search.value;
  renderProducts();
});

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  renderProducts();
});

els.tabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  els.tabs.querySelectorAll("button").forEach((node) => node.classList.toggle("active", node === button));
  renderProducts();
});

els.sort.addEventListener("change", () => {
  state.sort = els.sort.value;
  renderProducts();
});

els.budget.addEventListener("change", () => {
  state.budget = els.budget.value;
  renderProducts();
});

els.deals.addEventListener("change", () => {
  state.dealsOnly = els.deals.checked;
  renderProducts();
});

els.clear.addEventListener("click", () => {
  state.query = "";
  state.category = "all";
  state.sort = "recommended";
  state.budget = "all";
  state.dealsOnly = false;
  els.search.value = "";
  els.sort.value = "recommended";
  els.budget.value = "all";
  els.deals.checked = false;
  els.tabs.querySelectorAll("button").forEach((node) => node.classList.toggle("active", node.dataset.category === "all"));
  renderProducts();
});

document.querySelectorAll(".assist-panel button[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    els.search.value = button.dataset.query;
    state.query = button.dataset.query;
    renderProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

els.grid.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  const details = event.target.closest("[data-details]");
  if (add) addToCart(Number(add.dataset.add));
  if (details) openDetails(Number(details.dataset.details));
});

els.dialogContent.addEventListener("click", (event) => {
  const details = event.target.closest("[data-details]");
  const photo = event.target.closest("[data-photo]");
  if (photo) {
    const mainPhoto = document.querySelector("#detailMainPhoto");
    if (mainPhoto) mainPhoto.src = photo.dataset.photo;
    els.dialogContent.querySelectorAll("[data-photo]").forEach((button) => button.classList.toggle("active", button === photo));
  }
  if (details) openDetails(Number(details.dataset.details));
});

els.dialogClose.addEventListener("click", () => els.dialog.close());
els.language.addEventListener("change", () => {
  state.lang = els.language.value;
  applyLanguage();
});

els.cartToggle.addEventListener("click", () => toggleCart(els.cartPanel.hidden));
els.cartClose.addEventListener("click", () => toggleCart(false));
els.overlay.addEventListener("click", () => toggleCart(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.cartPanel.hidden) {
    toggleCart(false);
  }
});

els.cartItems.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  if (inc) addToCart(Number(inc.dataset.inc));
  if (dec) {
    const item = state.cart.find((entry) => entry.id === Number(dec.dataset.dec));
    if (item) item.qty -= 1;
    state.cart = state.cart.filter((entry) => entry.qty > 0);
    renderCart();
  }
});

applyLanguage();
