const businesses = [
  {
    name: "Lanche da Praça",
    city: "Mirandiba",
    type: "Lanches",
    address: "Praça Nossa Senhora da Conceição, Centro",
    phone: "5587991112233",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Point do Açaí",
    city: "Mirandiba",
    type: "Lanches",
    address: "Rua João Rodrigues, 120 - Centro",
    phone: "5587992223344",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Restaurante Sabor da Terra",
    city: "Mirandiba",
    type: "Restaurantes",
    address: "Rua Coronel Manoel Pereira, 85",
    phone: "5587993334455",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Cantinho do Sertão",
    city: "Mirandiba",
    type: "Restaurantes",
    address: "Av. Francisco Pires, 240 - Centro",
    phone: "5587994445566",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mercadinho São José",
    city: "Mirandiba",
    type: "Comércio",
    address: "Rua da Matriz, 310 - Centro",
    phone: "5587995556677",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d4b2d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Casa do Agricultor",
    city: "Mirandiba",
    type: "Culturas",
    address: "Av. Principal, 512 - Centro",
    phone: "5587996667788",
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Pizzaria Bella Massa",
    city: "Mirandiba",
    type: "Pizzarias",
    address: "Rua José Alves, 45 - Centro",
    phone: "5587997778899",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Conserta Tech",
    city: "Mirandiba",
    type: "Serviços",
    address: "Rua da Estação, 70 - Centro",
    phone: "5587998889900",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Farmácia Vida",
    city: "Mirandiba",
    type: "Outros",
    address: "Praça da Igreja, 18 - Centro",
    phone: "5587991234567",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Lanches da Penha",
    city: "Carnaubeira da Penha",
    type: "Lanches",
    address: "Rua Principal, 105 - Centro",
    phone: "5587981112233",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Burguer do Sertão",
    city: "Carnaubeira da Penha",
    type: "Lanches",
    address: "Rua Antônio Alves, 44",
    phone: "5587982223344",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Restaurante Dona Maria",
    city: "Carnaubeira da Penha",
    type: "Restaurantes",
    address: "Av. Central, 180 - Centro",
    phone: "5587983334455",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Tempero da Roça",
    city: "Carnaubeira da Penha",
    type: "Restaurantes",
    address: "Rua do Comércio, 92",
    phone: "5587984445566",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Comercial Penha",
    city: "Carnaubeira da Penha",
    type: "Comércio",
    address: "Rua Coronel João, 260 - Centro",
    phone: "5587985556677",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sertão Agro",
    city: "Carnaubeira da Penha",
    type: "Culturas",
    address: "Rodovia PE-425, Km 1",
    phone: "5587986667788",
    image: "https://images.unsplash.com/photo-1523742814872-9f3b8a7b3b4c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Pizzaria Sabor & Lenha",
    city: "Carnaubeira da Penha",
    type: "Pizzarias",
    address: "Rua José Pereira, 30 - Centro",
    phone: "5587987778899",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Oficina do Zé",
    city: "Carnaubeira da Penha",
    type: "Serviços",
    address: "Rua do Campo, 150",
    phone: "5587988889900",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Beleza & Cia",
    city: "Carnaubeira da Penha",
    type: "Outros",
    address: "Av. Central, 66 - Centro",
    phone: "5587989990011",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
  }
];

const cityFilter = document.querySelector("#cityFilter");
const typeFilter = document.querySelector("#typeFilter");
const searchFilter = document.querySelector("#searchFilter");
const clearFilters = document.querySelector("#clearFilters");
const cards = document.querySelector("#cards");
const emptyState = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
const resultsTitle = document.querySelector("#resultsTitle");
const categoryButtons = document.querySelectorAll(".category-grid button");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

const fallbackImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80";

// Cor do selo de categoria, seguindo a paleta da logo
const typeColors = {
  Lanches: "",
  Pizzarias: "",
  Restaurantes: "t-wine",
  Culturas: "t-wine",
  Comércio: "t-blue",
  Serviços: "t-blue",
  Outros: "t-blue"
};

function normalize(text) {
  return text.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function render() {
  const city = cityFilter.value;
  const type = typeFilter.value;
  const search = normalize(searchFilter.value.trim());

  const filtered = businesses.filter(item => {
    const cityOk = city === "all" || item.city === city;
    const typeOk = type === "all" || item.type === type;
    const searchOk = !search ||
      normalize(item.name).includes(search) ||
      normalize(item.address).includes(search) ||
      normalize(item.type).includes(search);
    return cityOk && typeOk && searchOk;
  });

  cards.innerHTML = filtered.map(item => {
    const message = encodeURIComponent(
      `Olá! Vi o ${item.name} no ConectAe e gostaria de mais informações.`
    );
    const mapQuery = encodeURIComponent(`${item.name}, ${item.address}, ${item.city} - PE`);
    return `
      <article class="card">
        <div class="card-image">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy"
               onerror="this.onerror=null;this.src='${fallbackImage}'">
          <span class="badge">${escapeHTML(item.city)} - PE</span>
        </div>
        <div class="card-body">
          <div class="type ${typeColors[item.type] || ""}">${escapeHTML(item.type)}</div>
          <h3>${escapeHTML(item.name)}</h3>
          <div class="info"><span class="icon">📍</span><span>${escapeHTML(item.address)}</span></div>
          <div class="card-footer">
            <a class="btn whatsapp" href="https://wa.me/${encodeURIComponent(item.phone)}?text=${message}" target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a class="btn map" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener"
               aria-label="Ver ${escapeHTML(item.name)} no mapa" title="Ver no mapa">
              Mapa
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyState.classList.toggle("hidden", filtered.length !== 0);
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "resultado" : "resultados"}`;

  if (city !== "all" && type !== "all") {
    resultsTitle.textContent = `${type} em ${city}`;
  } else if (city !== "all") {
    resultsTitle.textContent = `Pontos em ${city}`;
  } else if (type !== "all") {
    resultsTitle.textContent = type;
  } else {
    resultsTitle.textContent = "Todos os pontos";
  }

  categoryButtons.forEach(button => {
    const active = button.dataset.type === type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active);
  });
}

[cityFilter, typeFilter].forEach(el => el.addEventListener("change", render));
searchFilter.addEventListener("input", render);

clearFilters.addEventListener("click", () => {
  cityFilter.value = "all";
  typeFilter.value = "all";
  searchFilter.value = "";
  render();
});

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Clicar de novo na categoria ativa remove o filtro
    typeFilter.value = typeFilter.value === button.dataset.type ? "all" : button.dataset.type;
    document.querySelector("#explorar").scrollIntoView({ behavior: "smooth", block: "start" });
    render();
  });
});

function setMenu(open) {
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

menuToggle.addEventListener("click", () => setMenu(!mainNav.classList.contains("open")));
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));

document.querySelector("#statTotal").textContent = businesses.length;

render();
