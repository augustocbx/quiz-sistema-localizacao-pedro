// Sistema de nomes aleatórios com ícones temáticos
const RANDOM_NAMES = [
    { name: "Navegador Estelar", icon: "⭐" },
    { name: "Capitão Polaris", icon: "🧭" },
    { name: "Explorador Lunar", icon: "🌙" },
    { name: "Mestre das Constelações", icon: "✨" },
    { name: "Viajante Cósmico", icon: "🌌" },
    { name: "Guardião do Norte", icon: "🔭" },
    { name: "Navegador GPS", icon: "📡" },
    { name: "Astro Aventureiro", icon: "🚀" },
    { name: "Caçador de Estrelas", icon: "🌟" },
    { name: "Piloto Celestial", icon: "🛸" },
    { name: "Observador Noturno", icon: "🌃" },
    { name: "Mestre dos Ventos", icon: "🌬️" },
    { name: "Descobridor de Rotas", icon: "🗺️" },
    { name: "Sábio das Marés", icon: "🌊" },
    { name: "Explorador Magnético", icon: "🧲" },
    { name: "Guardião dos Mares", icon: "⚓" },
    { name: "Viajante do Horizonte", icon: "🌅" },
    { name: "Mestre do Astrolábio", icon: "⚙️" },
    { name: "Navegador da Aurora", icon: "🌈" },
    { name: "Caçador de Cometas", icon: "☄️" },
    { name: "Capitã das Estrelas", icon: "💫" },
    { name: "Guardião do Cruzeiro", icon: "✝️" },
    { name: "Piloto Solar", icon: "☀️" },
    { name: "Explorador do Equador", icon: "🌍" },
    { name: "Mestre da Latitude", icon: "📐" },
    { name: "Navegadora Espacial", icon: "🛰️" },
    { name: "Viajante das Galáxias", icon: "🌠" },
    { name: "Capitão Meridiano", icon: "🗺️" },
    { name: "Descobridor de Mundos", icon: "🌏" },
    { name: "Guardião da Bússola", icon: "🧭" },
    { name: "Sábia Astronômica", icon: "📚" },
    { name: "Explorador do Zênite", icon: "⬆️" },
    { name: "Mestre dos Satélites", icon: "🛰️" },
    { name: "Navegador Magnético", icon: "🧲" },
    { name: "Caçadora de Planetas", icon: "🪐" },
    { name: "Piloto da Via Láctea", icon: "🌌" },
    { name: "Observador Sideral", icon: "🔭" },
    { name: "Capitã do Hemisfério Sul", icon: "🗺️" },
    { name: "Viajante da Magnetosfera", icon: "🌐" },
    { name: "Mestre do Gnômon", icon: "📏" },
    { name: "Guardião das Coordenadas", icon: "📍" },
    { name: "Explorador de Greenwich", icon: "🕰️" },
    { name: "Navegadora da Eclíptica", icon: "🌑" },
    { name: "Sábio do Astrolábio", icon: "⚙️" },
    { name: "Capitão Celeste", icon: "🌟" },
    { name: "Descobridora de Rotas", icon: "🧭" },
    { name: "Piloto do Horizonte", icon: "🌅" },
    { name: "Viajante Polar", icon: "🧊" },
    { name: "Mestre das Órbitas", icon: "🔄" },
    { name: "Guardião do Firmamento", icon: "🌌" },
    { name: "Explorador Náutico", icon: "⛵" },
    { name: "Navegadora das Correntes", icon: "🌊" },
    { name: "Caçador do Zênite", icon: "📐" },
    { name: "Capitã da Rosa dos Ventos", icon: "🧭" },
    { name: "Sábia das Estrelas Fixas", icon: "⭐" },
    { name: "Piloto do Meridiano", icon: "🌍" },
    { name: "Viajante do Trópico", icon: "🌴" },
    { name: "Mestre da Declinação", icon: "📊" },
    { name: "Guardião do Sol Nascente", icon: "🌄" },
    { name: "Explorador da Ionosfera", icon: "⚡" },
    { name: "Navegador do Equinócio", icon: "⚖️" },
    { name: "Caçadora de Meteoros", icon: "☄️" },
    { name: "Capitão das Marés", icon: "🌊" },
    { name: "Descobridor Cartográfico", icon: "🗾" },
    { name: "Piloto do Solstício", icon: "☀️" },
    { name: "Viajante da Rota Celeste", icon: "🛤️" },
    { name: "Mestre da Azimute", icon: "🧭" },
    { name: "Guardião do Arco Celeste", icon: "🌈" },
    { name: "Exploradora da Magnetita", icon: "🧲" },
    { name: "Navegador do Almanaque", icon: "📖" },
    { name: "Sábio dos Paralelos", icon: "🗺️" }
];

// Função para gerar um nome aleatório
function getRandomName() {
    return RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
}

// Função para obter ícone baseado no nome
function getIconForName(name) {
    const found = RANDOM_NAMES.find(item => item.name === name);
    if (found) return found.icon;

    // Se não encontrou, retorna um ícone padrão baseado na primeira letra
    const firstChar = name.charAt(0).toUpperCase();
    return firstChar;
}
