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
    { name: "Caçador de Cometas", icon: "☄️" }
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
