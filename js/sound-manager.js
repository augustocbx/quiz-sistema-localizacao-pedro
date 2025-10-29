// Sistema de Gerenciamento de Sons
// Usa Web Audio API para sons sintetizados (não precisa de arquivos)

class SoundManager {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.masterVolume = 0.3;

        // Inicializa AudioContext apenas quando necessário
        this.initAudioContext();

        // Carrega preferência salva
        const savedPreference = localStorage.getItem('soundEnabled');
        if (savedPreference !== null) {
            this.enabled = savedPreference === 'true';
        }
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API não suportada');
            this.enabled = false;
        }
    }

    // Toggle sons on/off
    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('soundEnabled', this.enabled.toString());
        return this.enabled;
    }

    // Som de clique nos botões
    playClick() {
        if (!this.enabled) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.frequency.value = 800;
        gain.gain.value = this.masterVolume * 0.1;

        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);
        osc.stop(this.audioContext.currentTime + 0.05);
    }

    // Som de acerto
    playCorrect(combo = 1) {
        if (!this.enabled) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        // Frequência aumenta com combo
        const baseFreq = 523.25; // C5
        osc.frequency.value = baseFreq;

        gain.gain.value = this.masterVolume * 0.3;

        osc.start();

        // Arpejo ascendente
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, this.audioContext.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);

        osc.stop(this.audioContext.currentTime + 0.2);

        // Som extra para combos altos
        if (combo >= 5) {
            setTimeout(() => this.playSparkle(), 100);
        }
    }

    // Som de erro
    playWrong() {
        if (!this.enabled) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.type = 'sawtooth';
        osc.frequency.value = 200;

        gain.gain.value = this.masterVolume * 0.2;

        osc.start();

        // Desce a frequência
        osc.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);

        osc.stop(this.audioContext.currentTime + 0.2);
    }

    // Som de conquista desbloqueada
    playAchievement() {
        if (!this.enabled) return;

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C (acorde)

        notes.forEach((freq, index) => {
            setTimeout(() => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();

                osc.connect(gain);
                gain.connect(this.audioContext.destination);

                osc.frequency.value = freq;
                gain.gain.value = this.masterVolume * 0.2;

                osc.start();
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                osc.stop(this.audioContext.currentTime + 0.3);
            }, index * 80);
        });
    }

    // Som de combo
    playCombo(count) {
        if (!this.enabled) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.type = 'sine';
        osc.frequency.value = 1000 + (count * 50);

        gain.gain.value = this.masterVolume * 0.15;

        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        osc.stop(this.audioContext.currentTime + 0.15);
    }

    // Som de "sparkle" para efeitos especiais
    playSparkle() {
        if (!this.enabled) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.type = 'sine';
        osc.frequency.value = 2000;

        gain.gain.value = this.masterVolume * 0.1;

        osc.start();
        osc.frequency.exponentialRampToValueAtTime(4000, this.audioContext.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        osc.stop(this.audioContext.currentTime + 0.1);
    }

    // Som de vitória perfeita (10/10)
    playPerfect() {
        if (!this.enabled) return;

        // Fanfarra de vitória
        const melody = [
            { freq: 523.25, time: 0 },    // C
            { freq: 659.25, time: 0.15 },  // E
            { freq: 783.99, time: 0.3 },   // G
            { freq: 1046.50, time: 0.45 }, // C oitava acima
            { freq: 783.99, time: 0.6 },   // G
            { freq: 1046.50, time: 0.75 }  // C
        ];

        melody.forEach(note => {
            setTimeout(() => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();

                osc.connect(gain);
                gain.connect(this.audioContext.destination);

                osc.frequency.value = note.freq;
                gain.gain.value = this.masterVolume * 0.25;

                osc.start();
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
                osc.stop(this.audioContext.currentTime + 0.2);
            }, note.time * 1000);
        });
    }

    // Som de início de quiz
    playStart() {
        if (!this.enabled) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.frequency.value = 440;
        gain.gain.value = this.masterVolume * 0.2;

        osc.start();
        osc.frequency.exponentialRampToValueAtTime(880, this.audioContext.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        osc.stop(this.audioContext.currentTime + 0.3);
    }
}

// Instância global
const soundManager = new SoundManager();
