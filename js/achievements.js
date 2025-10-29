// Sistema de Conquistas/Badges

class AchievementSystem {
    constructor() {
        this.achievements = [
            {
                id: 'first_star',
                name: 'Primeira Estrela',
                description: 'Complete seu primeiro quiz',
                icon: '🌟',
                condition: (stats) => stats.quizzesCompleted >= 1
            },
            {
                id: 'explorer',
                name: 'Explorador',
                description: 'Acerte 10 ou mais perguntas',
                icon: '⭐',
                condition: (stats) => stats.currentScore >= 10
            },
            {
                id: 'navigator',
                name: 'Navegador Expert',
                description: 'Acerte 13 ou mais perguntas',
                icon: '🎯',
                condition: (stats) => stats.currentScore >= 13
            },
            {
                id: 'combo_master',
                name: 'Combo Master',
                description: 'Acerte 5 perguntas seguidas',
                icon: '🔥',
                condition: (stats) => stats.maxCombo >= 5
            },
            {
                id: 'speedster',
                name: 'Velocista',
                description: 'Complete em menos de 120 segundos',
                icon: '⚡',
                condition: (stats) => stats.totalTime < 120 && stats.quizCompleted
            },
            {
                id: 'perfection',
                name: 'Perfeição',
                description: 'Acerte todas as 15 perguntas',
                icon: '💎',
                condition: (stats) => stats.currentScore === 15 && stats.quizCompleted
            },
            {
                id: 'compass_expert',
                name: 'Mestre da Bússola',
                description: 'Acerte todas as perguntas sobre bússola',
                icon: '🧭',
                condition: (stats) => stats.compassCorrect >= 3 && stats.compassTotal === stats.compassCorrect
            },
            {
                id: 'gps_guru',
                name: 'Guru do GPS',
                description: 'Acerte todas as perguntas sobre GPS',
                icon: '🛰️',
                condition: (stats) => stats.gpsCorrect >= 3 && stats.gpsTotal === stats.gpsCorrect
            },
            {
                id: 'star_navigator',
                name: 'Navegador Estelar',
                description: 'Acerte todas sobre estrelas e orientação',
                icon: '✨',
                condition: (stats) => stats.starsCorrect >= 3 && stats.starsTotal === stats.starsCorrect
            },
            {
                id: 'persistent',
                name: 'Persistente',
                description: 'Complete 5 quizzes',
                icon: '🎓',
                condition: (stats) => stats.quizzesCompleted >= 5
            },
            {
                id: 'dedicated',
                name: 'Dedicado',
                description: 'Complete 10 quizzes',
                icon: '🏆',
                condition: (stats) => stats.quizzesCompleted >= 10
            },
            {
                id: 'flawless_fast',
                name: 'Flash Perfeito',
                description: '15/15 em menos de 120 segundos',
                icon: '⚡💎',
                condition: (stats) => stats.currentScore === 15 && stats.totalTime < 120 && stats.quizCompleted
            },
            {
                id: 'strategist',
                name: 'Estrategista',
                description: 'Complete um quiz sem usar nenhum power-up',
                icon: '🎮',
                condition: (stats) => stats.quizCompleted && stats.powerUpsUsed === 0
            },
            {
                id: 'clutch',
                name: 'Contra o Relógio',
                description: 'Acerte uma pergunta com menos de 1 segundo',
                icon: '⏱️',
                condition: (stats) => stats.lastSecondAnswer === true
            },
            {
                id: 'resilient',
                name: 'Resiliente',
                description: 'Erre 3 ou mais perguntas mas complete com 10+ acertos',
                icon: '🌊',
                condition: (stats) => stats.currentScore >= 10 && (15 - stats.currentScore) >= 3 && stats.quizCompleted
            },
            {
                id: 'power_master',
                name: 'Mestre das Ajudas',
                description: 'Use todos os 3 power-ups em um único quiz',
                icon: '🎪',
                condition: (stats) => stats.quizCompleted && stats.allPowerUpsUsed === true
            }
        ];

        this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('achievements');
        if (saved) {
            this.unlockedAchievements = JSON.parse(saved);
        } else {
            this.unlockedAchievements = [];
        }

        // Carregar detalhes das conquistas (quem desbloqueou)
        const savedDetails = localStorage.getItem('achievementDetails');
        if (savedDetails) {
            this.achievementDetails = JSON.parse(savedDetails);
        } else {
            this.achievementDetails = {};
        }

        const savedStats = localStorage.getItem('achievementStats');
        if (savedStats) {
            this.stats = JSON.parse(savedStats);
        } else {
            this.stats = {
                quizzesCompleted: 0,
                maxCombo: 0,
                compassCorrect: 0,
                compassTotal: 0,
                gpsCorrect: 0,
                gpsTotal: 0,
                starsCorrect: 0,
                starsTotal: 0
            };
        }
    }

    saveProgress() {
        localStorage.setItem('achievements', JSON.stringify(this.unlockedAchievements));
        localStorage.setItem('achievementDetails', JSON.stringify(this.achievementDetails));
        localStorage.setItem('achievementStats', JSON.stringify(this.stats));
    }

    isUnlocked(achievementId) {
        return this.unlockedAchievements.includes(achievementId);
    }

    getAchievementDetails(achievementId) {
        return this.achievementDetails[achievementId] || null;
    }

    updateRecentUnlocksWithPlayerInfo(playerName, playerAvatar) {
        // Atualiza conquistas que foram desbloqueadas recentemente mas ainda não têm nome
        this.unlockedAchievements.forEach(achievementId => {
            if (!this.achievementDetails[achievementId] || !this.achievementDetails[achievementId].playerName || this.achievementDetails[achievementId].playerName === 'Jogador') {
                this.achievementDetails[achievementId] = {
                    playerName: playerName,
                    playerAvatar: playerAvatar,
                    unlockedAt: this.achievementDetails[achievementId]?.unlockedAt || new Date().toISOString()
                };
            }
        });
        this.saveProgress();
    }

    checkAchievements(currentStats) {
        const newlyUnlocked = [];

        this.achievements.forEach(achievement => {
            if (!this.isUnlocked(achievement.id) && achievement.condition(currentStats)) {
                this.unlockedAchievements.push(achievement.id);

                // Salvar detalhes do jogador que desbloqueou
                this.achievementDetails[achievement.id] = {
                    playerName: currentStats.playerName || 'Jogador',
                    playerAvatar: currentStats.playerAvatar || '👤',
                    unlockedAt: new Date().toISOString()
                };

                newlyUnlocked.push(achievement);
            }
        });

        if (newlyUnlocked.length > 0) {
            this.saveProgress();
        }

        return newlyUnlocked;
    }

    updateQuizStats(quizData) {
        // Atualiza estatísticas após quiz completado
        this.stats.quizzesCompleted++;

        // Atualiza categorias (simplificado - verifica palavras-chave nas perguntas)
        if (quizData.categoryStats) {
            this.stats.compassCorrect += quizData.categoryStats.compass?.correct || 0;
            this.stats.compassTotal += quizData.categoryStats.compass?.total || 0;
            this.stats.gpsCorrect += quizData.categoryStats.gps?.correct || 0;
            this.stats.gpsTotal += quizData.categoryStats.gps?.total || 0;
            this.stats.starsCorrect += quizData.categoryStats.stars?.correct || 0;
            this.stats.starsTotal += quizData.categoryStats.stars?.total || 0;
        }

        if (quizData.maxCombo > this.stats.maxCombo) {
            this.stats.maxCombo = quizData.maxCombo;
        }

        this.saveProgress();
    }

    getUnlockedAchievements() {
        return this.achievements.filter(a => this.isUnlocked(a.id));
    }

    getLockedAchievements() {
        return this.achievements.filter(a => !this.isUnlocked(a.id));
    }

    getProgress() {
        return {
            unlocked: this.unlockedAchievements.length,
            total: this.achievements.length,
            percentage: Math.round((this.unlockedAchievements.length / this.achievements.length) * 100)
        };
    }

    // Retorna as conquistas ADQUIRIDAS por um jogador com base nas estatísticas da rodada
    getAcquiredAchievements(currentStats) {
        const acquired = [];

        this.achievements.forEach(achievement => {
            if (achievement.condition(currentStats)) {
                acquired.push({
                    id: achievement.id,
                    name: achievement.name,
                    icon: achievement.icon,
                    description: achievement.description
                });
            }
        });

        return acquired;
    }

    showAchievementPopup(achievement) {
        // Criar popup de conquista
        const popup = document.createElement('div');
        popup.className = 'achievement-popup';
        popup.innerHTML = `
            <div class="achievement-popup-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-title">Conquista Desbloqueada!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        // Tocar som de conquista
        if (window.soundManager) {
            soundManager.playAchievement();
        }

        // Animação de entrada
        setTimeout(() => popup.classList.add('show'), 100);

        // Remover após 4 segundos
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 4000);
    }

    reset() {
        if (confirm('Tem certeza que deseja resetar todas as conquistas?')) {
            this.unlockedAchievements = [];
            this.stats = {
                quizzesCompleted: 0,
                maxCombo: 0,
                compassCorrect: 0,
                compassTotal: 0,
                gpsCorrect: 0,
                gpsTotal: 0,
                starsCorrect: 0,
                starsTotal: 0
            };
            this.saveProgress();
            alert('Conquistas resetadas!');
        }
    }
}

// Instância global
const achievementSystem = new AchievementSystem();
