// Animações de comemoração (5 animações) - Versão otimizada e suave
const CELEBRATION_ANIMATIONS = [
    {
        name: "star",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate">
            <defs>
                <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
                </linearGradient>
            </defs>
            <path d="M100,20 L110,70 L160,80 L120,110 L130,160 L100,135 L70,160 L80,110 L40,80 L90,70 Z"
                  fill="url(#starGrad)" stroke="#FF8C00" stroke-width="3"/>
            <circle cx="100" cy="100" r="5" fill="#FFF" class="anim-pulse"/>
        </svg>`,
        message: "Brilhou como uma estrela!"
    },
    {
        name: "compass",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate-slow">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#4169E1" stroke-width="4"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="#1E90FF" stroke-width="2"/>
            <path d="M100,30 L110,100 L100,105 L90,100 Z" fill="#DC143C"/>
            <path d="M100,170 L110,100 L100,95 L90,100 Z" fill="#FFFFFF" stroke="#000" stroke-width="1"/>
            <circle cx="100" cy="100" r="8" fill="#FFD700" stroke="#000" stroke-width="2"/>
            <text x="100" y="25" text-anchor="middle" fill="#FFD700" font-size="20" font-weight="bold">N</text>
            <text x="100" y="185" text-anchor="middle" fill="#CBD5E1" font-size="20" font-weight="bold">S</text>
            <text x="180" y="105" text-anchor="middle" fill="#CBD5E1" font-size="20" font-weight="bold">L</text>
            <text x="20" y="105" text-anchor="middle" fill="#CBD5E1" font-size="20" font-weight="bold">O</text>
        </svg>`,
        message: "Na direção certa!"
    },
    {
        name: "constellation",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate-slow">
            <circle cx="50" cy="50" r="6" fill="#FFD700" opacity="1">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </circle>
            <circle cx="100" cy="40" r="6" fill="#FFD700" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </circle>
            <circle cx="150" cy="50" r="6" fill="#FFD700" opacity="1">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </circle>
            <circle cx="80" cy="100" r="6" fill="#FFD700" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </circle>
            <circle cx="120" cy="100" r="6" fill="#FFD700" opacity="1">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </circle>
            <circle cx="100" cy="150" r="6" fill="#FFD700" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
            </circle>
            <line x1="50" y1="50" x2="100" y2="40" stroke="#ADD8E6" stroke-width="2" opacity="0.7"/>
            <line x1="100" y1="40" x2="150" y2="50" stroke="#ADD8E6" stroke-width="2" opacity="0.7"/>
            <line x1="50" y1="50" x2="80" y2="100" stroke="#ADD8E6" stroke-width="2" opacity="0.7"/>
            <line x1="150" y1="50" x2="120" y2="100" stroke="#ADD8E6" stroke-width="2" opacity="0.7"/>
            <line x1="80" y1="100" x2="100" y2="150" stroke="#ADD8E6" stroke-width="2" opacity="0.7"/>
            <line x1="120" y1="100" x2="100" y2="150" stroke="#ADD8E6" stroke-width="2" opacity="0.7"/>
        </svg>`,
        message: "Constelação perfeita!"
    },
    {
        name: "super-star",
        rarity: "rare",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="superGlow">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF4500;stop-opacity:0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#superGlow)" opacity="0.3" class="anim-pulse"/>
            <g class="anim-rotate-fast">
                <path d="M100,10 L115,75 L180,85 L130,125 L145,190 L100,155 L55,190 L70,125 L20,85 L85,75 Z"
                      fill="#FFD700" stroke="#FFA500" stroke-width="4"/>
            </g>
            <g class="anim-rotate-reverse">
                <path d="M100,40 L108,70 L140,75 L115,95 L122,127 L100,110 L78,127 L85,95 L60,75 L92,70 Z"
                      fill="#FFF" opacity="0.8"/>
            </g>
        </svg>`,
        message: "Extraordinário! Quase perfeito!"
    },
    {
        name: "legendary-star",
        rarity: "legendary",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="legendGlow">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#FF69B4;stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#legendGlow)" class="anim-glow"/>
            <g class="anim-rotate-fast">
                <path d="M100,10 L115,75 L180,85 L130,125 L145,190 L100,155 L55,190 L70,125 L20,85 L85,75 Z"
                      fill="#FFD700" stroke="#FF1493" stroke-width="5"/>
            </g>
            <g class="anim-rotate-reverse">
                <path d="M100,30 L110,80 L160,88 L125,118 L135,168 L100,140 L65,168 L75,118 L40,88 L90,80 Z"
                      fill="#FFF"/>
            </g>
            <g class="anim-rotate">
                <path d="M100,50 L105,85 L140,90 L115,110 L120,145 L100,125 L80,145 L85,110 L60,90 L95,85 Z"
                      fill="#FF69B4"/>
            </g>
        </svg>`,
        message: "PERFEITO! Navegador Mestre!"
    }
];

// Animações de consolo (5 animações) - Versão otimizada e suave
const CONSOLATION_ANIMATIONS = [
    {
        name: "thinking-star",
        frequency: 0.50, // 50%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-wobble">
            <circle cx="100" cy="100" r="60" fill="#87CEEB" stroke="#4682B4" stroke-width="3"/>
            <circle cx="80" cy="90" r="8" fill="#000"/>
            <circle cx="120" cy="90" r="8" fill="#000"/>
            <path d="M75,130 Q100,140 125,130" stroke="#000" stroke-width="3" fill="none"/>
            <text x="100" y="50" text-anchor="middle" fill="#FFD700" font-size="40" font-weight="bold">?</text>
        </svg>`,
        message: "Ops! Revise as estrelas..."
    },
    {
        name: "cloudy-night",
        frequency: 0.30, // 30%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-wobble">
            <circle cx="80" cy="80" r="30" fill="#FFD700" opacity="0.7"/>
            <ellipse cx="120" cy="100" rx="50" ry="35" fill="#A9A9A9" opacity="0.8" class="anim-pulse"/>
            <ellipse cx="90" cy="110" rx="45" ry="30" fill="#B0C4DE" opacity="0.7" class="anim-pulse"/>
            <text x="100" y="160" text-anchor="middle" fill="#4682B4" font-size="18">Nublado...</text>
        </svg>`,
        message: "Céu nublado! Tente de novo..."
    },
    {
        name: "lost-compass",
        frequency: 0.15, // 15%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate">
            <circle cx="100" cy="100" r="70" fill="none" stroke="#CD5C5C" stroke-width="4" stroke-dasharray="10,5"/>
            <path d="M100,40 L108,100 L100,102 L92,100 Z" fill="#8B0000" opacity="0.7"/>
            <path d="M100,160 L108,100 L100,98 L92,100 Z" fill="#D3D3D3" opacity="0.7"/>
            <line x1="95" y1="70" x2="105" y2="60" stroke="#000" stroke-width="3"/>
            <circle cx="100" cy="100" r="6" fill="#CD5C5C"/>
            <text x="100" y="25" text-anchor="middle" fill="#CD5C5C" font-size="20" font-weight="bold">?</text>
        </svg>`,
        message: "Bússola perdida! Continue tentando..."
    },
    {
        name: "meteor",
        frequency: 0.03, // 3%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate">
            <defs>
                <linearGradient id="meteorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFA500;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF4500;stop-opacity:0" />
                </linearGradient>
            </defs>
            <ellipse cx="130" cy="100" rx="25" ry="15" fill="url(#meteorGrad)" transform="rotate(-30 130 100)" class="anim-pulse"/>
            <circle cx="150" cy="90" r="12" fill="#FFD700" class="anim-pulse"/>
            <path d="M155,92 Q180,85 190,80" stroke="#FFA500" stroke-width="3" fill="none" opacity="0.6"/>
            <path d="M153,95 Q175,100 185,105" stroke="#FF6347" stroke-width="2" fill="none" opacity="0.5"/>
        </svg>`,
        message: "Passou rápido como um meteoro!"
    },
    {
        name: "black-hole",
        frequency: 0.02, // 2%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="blackHole">
                    <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#4B0082;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:0.3" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#blackHole)" class="anim-pulse"/>
            <circle cx="100" cy="100" r="20" fill="#000"/>
            <g class="anim-rotate">
                <ellipse cx="100" cy="100" rx="60" ry="15" fill="none" stroke="#9370DB" stroke-width="3" opacity="0.7"/>
            </g>
            <g class="anim-rotate-reverse">
                <ellipse cx="100" cy="100" rx="45" ry="12" fill="none" stroke="#BA55D3" stroke-width="2" opacity="0.6"/>
            </g>
        </svg>`,
        message: "Buraco negro! Não desista!"
    }
];

// Função para selecionar animação de comemoração baseada nos acertos
function getCelebrationAnimation(correctAnswers, totalQuestions) {
    if (correctAnswers === totalQuestions) {
        // 10/10 - Lendária
        return CELEBRATION_ANIMATIONS[4];
    } else if (correctAnswers === totalQuestions - 1) {
        // 9/10 - Rara
        return CELEBRATION_ANIMATIONS[3];
    } else {
        // Escolhe aleatoriamente entre as 3 comuns
        const commonAnimations = CELEBRATION_ANIMATIONS.slice(0, 3);
        return commonAnimations[Math.floor(Math.random() * commonAnimations.length)];
    }
}

// Função para selecionar animação de consolo baseada nas frequências
function getConsolationAnimation() {
    const rand = Math.random();
    let cumulative = 0;

    for (const animation of CONSOLATION_ANIMATIONS) {
        cumulative += animation.frequency;
        if (rand <= cumulative) {
            return animation;
        }
    }

    // Fallback para a primeira animação
    return CONSOLATION_ANIMATIONS[0];
}
