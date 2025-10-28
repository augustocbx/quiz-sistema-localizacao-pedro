// Sistema de Efeitos Visuais

class VisualEffects {
    constructor() {
        this.comboCounter = null;
        this.comboTimeout = null;
    }

    // Criar partículas/confetes
    createConfetti(x, y, count = 20) {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle confetti';

            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = color;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            const angle = (Math.random() * 360) * (Math.PI / 180);
            const velocity = Math.random() * 200 + 100;
            const destX = x + Math.cos(angle) * velocity;
            const destY = y + Math.sin(angle) * velocity;

            particle.style.setProperty('--dest-x', destX + 'px');
            particle.style.setProperty('--dest-y', destY + 'px');

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 2000);
        }
    }

    // Criar estrelas sparkle
    createSparkles(x, y, count = 10) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle sparkle';

            particle.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
            particle.style.top = (y + (Math.random() - 0.5) * 100) + 'px';

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 1000);
        }
    }

    // Mostrar contador de combo
    showCombo(comboCount) {
        if (!this.comboCounter) {
            this.comboCounter = document.createElement('div');
            this.comboCounter.className = 'combo-counter';
            document.body.appendChild(this.comboCounter);
        }

        if (comboCount >= 3) {
            this.comboCounter.innerHTML = `
                <span class="combo-number">${comboCount}x</span>
                COMBO! 🔥
            `;

            this.comboCounter.classList.remove('hide');
            this.comboCounter.classList.add('show');

            // Tocar som de combo
            if (window.soundManager) {
                soundManager.playCombo(comboCount);
            }

            // Ocultar após 2 segundos
            clearTimeout(this.comboTimeout);
            this.comboTimeout = setTimeout(() => {
                if (this.comboCounter) {
                    this.comboCounter.classList.remove('show');
                    this.comboCounter.classList.add('hide');
                }
            }, 2000);
        }
    }

    // Ocultar combo
    hideCombo() {
        if (this.comboCounter) {
            this.comboCounter.classList.remove('show');
            this.comboCounter.classList.add('hide');
        }
    }

    // Efeito de shake (erro)
    shakeElement(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }

    // Efeito de acerto em botão
    correctButtonEffect(button) {
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Sparkles ao redor do botão
        this.createSparkles(x, y, 8);
    }

    // Efeito de vitória perfeita
    perfectVictory() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Explosão de confetes
        this.createConfetti(centerX, centerY, 50);

        // Sparkles extras
        setTimeout(() => this.createSparkles(centerX, centerY, 20), 200);
        setTimeout(() => this.createSparkles(centerX, centerY, 20), 400);
    }

    // Animação de progresso suave
    animateProgress(element, fromPercent, toPercent, duration = 500) {
        const start = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentPercent = fromPercent + (toPercent - fromPercent) * easeOutCubic;

            element.style.width = currentPercent + '%';

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    // Flash na tela para feedback
    screenFlash(color = 'rgba(34, 197, 94, 0.3)') {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${color};
            pointer-events: none;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.3s ease-out;
        `;

        document.body.appendChild(flash);

        setTimeout(() => {
            flash.style.opacity = '0';
            setTimeout(() => flash.remove(), 300);
        }, 50);
    }

    // Efeito de pulse em elemento
    pulse(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'correctPulse 0.5s ease-out';
        }, 10);
    }
}

// Instância global
const visualEffects = new VisualEffects();
