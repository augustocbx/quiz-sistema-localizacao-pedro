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
            swapQuestion: {
                id: 'swapQuestion',
                name: 'Trocar',
                icon: '🔄',
                description: 'Troca por outra pergunta',
                available: 1,
                used: 0
            },
            doubleTime: {
                id: 'doubleTime',
                name: '+Tempo',
                icon: '⏰',
                description: 'Restaura os 20 segundos',
                available: 1,
                used: 0
            }
        };
    }

    reset() {
        this.powerUps.fiftyFifty.used = 0;
        this.powerUps.swapQuestion.used = 0;
        this.powerUps.doubleTime.used = 0;
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

    // Trocar Pergunta - Substitui a pergunta atual por outra do banco
    applySwapQuestion() {
        if (!this.use('swapQuestion')) return null;

        // Som
        if (soundManager) soundManager.playSparkle();

        return {
            success: true,
            message: '🔄 Pergunta trocada! Boa sorte com a nova!'
        };
    }

    // Restaurar Tempo - Volta o tempo para 20 segundos
    applyDoubleTime() {
        if (!this.use('doubleTime')) return null;

        // Som
        if (soundManager) soundManager.playSparkle();

        return {
            success: true,
            message: '⏰ Tempo restaurado para 20 segundos!'
        };
    }

    // Criar UI dos power-ups
    createPowerUpUI() {
        const container = document.createElement('div');
        container.className = 'powerups-container';
        container.id = 'powerups-container';

        Object.values(this.powerUps).forEach(powerUp => {
            const button = document.createElement('button');
            button.className = 'powerup-btn'; // NÃO adicionar 'powerup-used'
            button.id = `powerup-${powerUp.id}`;
            button.title = powerUp.description;

            // Garantir que está 100% habilitado
            button.disabled = false;
            button.removeAttribute('disabled');

            // Aplicar estilos inline forçados
            button.style.cssText = `
                background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
                border: 3px solid #fbbf24 !important;
                border-radius: 12px !important;
                padding: 12px 16px !important;
                cursor: pointer !important;
                opacity: 1 !important;
                pointer-events: auto !important;
                position: relative !important;
                min-width: 80px !important;
                color: white !important;
                box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
                z-index: 101 !important;
            `;

            button.innerHTML = `
                <div class="powerup-icon">${powerUp.icon}</div>
                <div class="powerup-name">${powerUp.name}</div>
                <div class="powerup-count">${this.getRemaining(powerUp.id)}</div>
            `;

            container.appendChild(button);
        });

        return container;
    }

    updateUI() {
        Object.values(this.powerUps).forEach(powerUp => {
            const button = document.getElementById(`powerup-${powerUp.id}`);

            if (!button) return;

            const countElement = button.querySelector('.powerup-count');
            const remaining = this.getRemaining(powerUp.id);

            // Atualizar contador
            if (countElement) {
                countElement.textContent = remaining;
            }

            if (remaining === 0) {
                // DESABILITAR
                button.className = 'powerup-btn powerup-used';
                button.disabled = true;
                button.setAttribute('disabled', 'true');

                // Sobrescrever estilos inline para mostrar como desabilitado
                button.style.cssText = `
                    background: linear-gradient(135deg, #4b5563 0%, #374151 100%) !important;
                    border: 2px solid rgba(255, 255, 255, 0.2) !important;
                    border-radius: 12px !important;
                    padding: 12px 16px !important;
                    cursor: not-allowed !important;
                    opacity: 0.4 !important;
                    pointer-events: none !important;
                    position: relative !important;
                    min-width: 80px !important;
                    color: white !important;
                    box-shadow: none !important;
                    z-index: 101 !important;
                `;
            } else {
                // HABILITAR
                button.className = 'powerup-btn'; // Remove 'powerup-used'
                button.disabled = false;
                button.removeAttribute('disabled');

                // Reforçar estilos inline (caso tenham sido alterados)
                button.style.cssText = `
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
                    border: 3px solid #fbbf24 !important;
                    border-radius: 12px !important;
                    padding: 12px 16px !important;
                    cursor: pointer !important;
                    opacity: 1 !important;
                    pointer-events: auto !important;
                    position: relative !important;
                    min-width: 80px !important;
                    color: white !important;
                    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
                    z-index: 101 !important;
                `;
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
