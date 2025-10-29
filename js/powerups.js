// Sistema de Power-Ups (Ajudas)

class PowerUpSystem {
    constructor() {
        this.powerUps = {
            fiftyFifty: {
                id: 'fiftyFifty',
                name: '50:50',
                icon: '✂️',
                description: 'Elimina 2 respostas erradas',
                available: 1,
                used: 0
            },
            hint: {
                id: 'hint',
                name: 'Dica',
                icon: '💡',
                description: 'Mostra uma dica sobre a resposta',
                available: 1,
                used: 0
            },
            skip: {
                id: 'skip',
                name: 'Pular',
                icon: '⏭️',
                description: 'Pula para próxima pergunta',
                available: 1,
                used: 0
            }
        };
    }

    reset() {
        console.log('[PowerUps] RESET chamado');
        this.powerUps.fiftyFifty.used = 0;
        this.powerUps.hint.used = 0;
        this.powerUps.skip.used = 0;
        console.log('[PowerUps] Estado após reset:', {
            fiftyFifty: `used=${this.powerUps.fiftyFifty.used}, available=${this.powerUps.fiftyFifty.available}`,
            hint: `used=${this.powerUps.hint.used}, available=${this.powerUps.hint.available}`,
            skip: `used=${this.powerUps.skip.used}, available=${this.powerUps.skip.available}`
        });
    }

    isAvailable(powerUpId) {
        const powerUp = this.powerUps[powerUpId];
        return powerUp && powerUp.used < powerUp.available;
    }

    use(powerUpId) {
        if (this.isAvailable(powerUpId)) {
            this.powerUps[powerUpId].used++;
            return true;
        }
        return false;
    }

    getRemaining(powerUpId) {
        const powerUp = this.powerUps[powerUpId];
        return powerUp ? powerUp.available - powerUp.used : 0;
    }

    // 50:50 - Elimina 2 respostas erradas
    applyFiftyFifty(question) {
        if (!this.use('fiftyFifty')) return null;

        const wrongAnswers = [];
        question.shuffledAnswers.forEach((answer, index) => {
            if (index !== question.shuffledCorrectIndex) {
                wrongAnswers.push(index);
            }
        });

        // Embaralhar e pegar 2
        for (let i = wrongAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wrongAnswers[i], wrongAnswers[j]] = [wrongAnswers[j], wrongAnswers[i]];
        }

        const toRemove = wrongAnswers.slice(0, 2);

        // Som e efeito visual
        if (soundManager) soundManager.playSparkle();

        return {
            success: true,
            removedIndices: toRemove,
            message: '2 respostas erradas eliminadas!'
        };
    }

    // Dica - Mostra categoria/tema
    applyHint(question) {
        if (!this.use('hint')) return null;

        const questionText = question.question.toLowerCase();
        let hint = 'Pense bem sobre o tema da pergunta...';

        // Gerar dica baseada no conteúdo
        if (questionText.includes('bússola') || questionText.includes('magnético')) {
            hint = '💡 Dica: Esta pergunta é sobre navegação magnética e bússolas.';
        } else if (questionText.includes('gps') || questionText.includes('satélite')) {
            hint = '💡 Dica: Esta pergunta é sobre tecnologia moderna de posicionamento.';
        } else if (questionText.includes('estrela') || questionText.includes('polar') || questionText.includes('constelação')) {
            hint = '💡 Dica: Esta pergunta é sobre navegação celeste e astronomia.';
        } else if (questionText.includes('norte') || questionText.includes('sul') || questionText.includes('direção')) {
            hint = '💡 Dica: Pense nos pontos cardeais e orientação.';
        } else if (questionText.includes('longitude') || questionText.includes('latitude')) {
            hint = '💡 Dica: Esta pergunta envolve coordenadas geográficas.';
        }

        // Som
        if (soundManager) soundManager.playSparkle();

        return {
            success: true,
            hint: hint
        };
    }

    // Pular - Vai para próxima pergunta
    applySkip() {
        if (!this.use('skip')) return null;

        // Som
        if (soundManager) soundManager.playClick();

        return {
            success: true,
            message: 'Pergunta pulada! Não conta como erro.'
        };
    }

    // Criar UI dos power-ups
    createPowerUpUI() {
        const container = document.createElement('div');
        container.className = 'powerups-container';
        container.id = 'powerups-container';

        Object.values(this.powerUps).forEach(powerUp => {
            const button = document.createElement('button');
            button.className = 'powerup-btn';
            button.id = `powerup-${powerUp.id}`;
            button.title = powerUp.description;
            button.disabled = false; // Iniciar como habilitado

            // Aplicar estilos inline imediatamente
            button.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
            button.style.border = '3px solid #fbbf24';
            button.style.cursor = 'pointer';
            button.style.opacity = '1';

            button.innerHTML = `
                <div class="powerup-icon">${powerUp.icon}</div>
                <div class="powerup-name">${powerUp.name}</div>
                <div class="powerup-count">${this.getRemaining(powerUp.id)}</div>
            `;

            console.log(`[CreateUI] Criando botão ${powerUp.id} - disabled=${button.disabled}`);

            // Event listener será adicionado no quiz-enhancements.js
            container.appendChild(button);
        });

        return container;
    }

    updateUI() {
        console.log('[PowerUps] updateUI chamado');
        Object.values(this.powerUps).forEach(powerUp => {
            const button = document.getElementById(`powerup-${powerUp.id}`);
            console.log(`[PowerUps] Botão ${powerUp.id}:`, button ? 'ENCONTRADO' : 'NÃO ENCONTRADO');

            if (button) {
                const countElement = button.querySelector('.powerup-count');
                const remaining = this.getRemaining(powerUp.id);

                console.log(`[PowerUps] ${powerUp.id} - remaining=${remaining}, used=${powerUp.used}, available=${powerUp.available}`);

                countElement.textContent = remaining;

                if (remaining === 0) {
                    console.log(`[PowerUps] ${powerUp.id} - DESABILITANDO (remaining=0)`);
                    button.classList.add('powerup-used');
                    button.disabled = true;
                    button.style.cursor = 'not-allowed';
                    button.style.opacity = '0.4';
                } else {
                    console.log(`[PowerUps] ${powerUp.id} - HABILITANDO (remaining=${remaining})`);
                    button.classList.remove('powerup-used');
                    button.disabled = false;

                    // Forçar estilos inline para garantir que apareçam habilitados
                    button.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
                    button.style.border = '3px solid #fbbf24';
                    button.style.cursor = 'pointer';
                    button.style.opacity = '1';

                    // DEBUG: Verificar estado após mudança
                    console.log(`[PowerUps] ${powerUp.id} - disabled=${button.disabled}, classList=${button.className}`);
                }
            }
        });
    }

    showPowerUpEffect(powerUpId, message) {
        const popup = document.createElement('div');
        popup.className = 'powerup-effect-popup';

        const powerUp = this.powerUps[powerUpId];
        popup.innerHTML = `
            <div class="powerup-effect-icon">${powerUp.icon}</div>
            <div class="powerup-effect-message">${message}</div>
        `;

        document.body.appendChild(popup);

        setTimeout(() => popup.classList.add('show'), 100);

        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 2000);
    }
}

// Instância global
const powerUpSystem = new PowerUpSystem();
