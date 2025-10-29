// Estado do jogo
let currentQuestionIndex = 0;
let selectedQuestions = [];
let correctAnswers = 0;
let startTime = null;
let quizFinished = false;
let currentCombo = 0;
let maxCombo = 0;
let categoryStats = {
    compass: { correct: 0, total: 0 },
    gps: { correct: 0, total: 0 },
    stars: { correct: 0, total: 0 }
};

// Timer
let timerInterval = null;
let timeRemaining = 10;
const TIME_PER_QUESTION = 10; // segundos

// Power-ups
let removedAnswerIndices = [];

// Elementos do DOM
const screens = {
    start: document.getElementById('start-screen'),
    avatar: document.getElementById('avatar-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    tempRanking: document.getElementById('temp-ranking-screen'),
    permanentRanking: document.getElementById('permanent-ranking-screen'),
    achievements: document.getElementById('achievements-screen')
};

// Botões
const startBtn = document.getElementById('start-btn');
const viewPermanentRankingBtn = document.getElementById('view-permanent-ranking-btn');
const viewAchievementsBtn = document.getElementById('view-achievements-btn');
const confirmAvatarBtn = document.getElementById('confirm-avatar-btn');
const backFromAvatarBtn = document.getElementById('back-from-avatar-btn');
const quitBtn = document.getElementById('quit-btn');
const saveScoreBtn = document.getElementById('save-score-btn');
const randomNameBtn = document.getElementById('random-name-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const viewPermanentFromTempBtn = document.getElementById('view-permanent-from-temp-btn');
const backToStartFromTempBtn = document.getElementById('back-to-start-from-temp-btn');
const backToStartFromPermanentBtn = document.getElementById('back-to-start-from-permanent-btn');
const backToStartFromAchievementsBtn = document.getElementById('back-to-start-from-achievements-btn');
const soundToggleBtn = document.getElementById('sound-toggle-btn');

// Event Listeners
startBtn.addEventListener('click', () => showScreen('avatar'));
confirmAvatarBtn.addEventListener('click', startQuiz);
backFromAvatarBtn.addEventListener('click', () => showScreen('start'));
viewPermanentRankingBtn.addEventListener('click', () => showScreen('permanentRanking'));
viewAchievementsBtn.addEventListener('click', () => showScreen('achievements'));
quitBtn.addEventListener('click', quitQuiz);
saveScoreBtn.addEventListener('click', saveScore);
randomNameBtn.addEventListener('click', generateRandomName);
playAgainBtn.addEventListener('click', startQuiz);
viewPermanentFromTempBtn.addEventListener('click', () => showScreen('permanentRanking'));
backToStartFromTempBtn.addEventListener('click', () => showScreen('start'));
backToStartFromPermanentBtn.addEventListener('click', () => showScreen('start'));
backToStartFromAchievementsBtn.addEventListener('click', () => showScreen('start'));
soundToggleBtn.addEventListener('click', toggleSound);

// Adicionar sons aos cliques dos botões
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (soundManager) soundManager.playClick();
    });
});

// Event listeners para o modal de conquista
const achievementModalCloseBtn = document.getElementById('achievement-modal-close');
const achievementModal = document.getElementById('achievement-modal');

if (achievementModalCloseBtn) {
    achievementModalCloseBtn.addEventListener('click', closeAchievementModal);
}

// Fechar modal ao clicar fora do conteúdo
if (achievementModal) {
    achievementModal.addEventListener('click', (e) => {
        if (e.target === achievementModal) {
            closeAchievementModal();
        }
    });
}

// Parar timer quando o app é minimizado ou a página é ocultada
document.addEventListener('visibilitychange', () => {
    if (document.hidden && screens.quiz.classList.contains('active')) {
        if (typeof stopTimer === 'function') {
            stopTimer();
        }
    }
});

// Parar timer antes de sair da página
window.addEventListener('beforeunload', () => {
    if (typeof stopTimer === 'function') {
        stopTimer();
    }
});

// Inicialização
function init() {
    showScreen('start');
    loadRankings();
}

// Mostrar tela específica
function showScreen(screenName) {
    // Se está saindo da tela do quiz, parar o timer
    if (screens.quiz.classList.contains('active') && screenName !== 'quiz') {
        if (typeof stopTimer === 'function') {
            stopTimer();
        }
    }

    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');

    if (screenName === 'start') {
        updateHomeTempRanking();
    } else if (screenName === 'avatar') {
        displayAvatarSelection();
    } else if (screenName === 'tempRanking') {
        displayTempRanking();
    } else if (screenName === 'permanentRanking') {
        displayPermanentRanking();
    } else if (screenName === 'achievements') {
        displayAchievements();
    }
}

// Iniciar Quiz
function startQuiz() {
    // Parar qualquer timer anterior
    if (typeof stopTimer === 'function') {
        stopTimer();
    }

    // Reset do estado
    currentQuestionIndex = 0;
    correctAnswers = 0;
    quizFinished = false;
    currentCombo = 0;
    maxCombo = 0;
    categoryStats = {
        compass: { correct: 0, total: 0 },
        gps: { correct: 0, total: 0 },
        stars: { correct: 0, total: 0 }
    };

    // Tocar som de início
    if (soundManager) soundManager.playStart();

    // Mostrar avatar do jogador no header
    const avatarDisplay = document.querySelector('#player-avatar-display .player-avatar-icon');
    if (avatarDisplay && avatarSystem) {
        avatarDisplay.textContent = avatarSystem.getAvatarEmoji();
    }

    // Inicializar power-ups
    if (powerUpSystem) initializePowerUps();

    // Selecionar 15 perguntas aleatórias do banco de 60
    selectedQuestions = selectRandomQuestions(QUESTION_BANK, 15);

    // Embaralhar as respostas de cada pergunta
    selectedQuestions.forEach(question => {
        const answers = [...question.answers];
        const correctAnswer = answers[question.correctIndex];

        // Embaralhar respostas
        shuffleArray(answers);

        // Atualizar índice da resposta correta
        question.shuffledAnswers = answers;
        question.shuffledCorrectIndex = answers.indexOf(correctAnswer);
    });

    // Iniciar cronômetro
    startTime = Date.now();

    // Mostrar tela do quiz
    showScreen('quiz');
    displayQuestion();
}

// Selecionar perguntas aleatórias
function selectRandomQuestions(bank, count) {
    const shuffled = [...bank];
    shuffleArray(shuffled);
    return shuffled.slice(0, count);
}

// Embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Exibir pergunta atual
function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];

    // Resetar índices removidos
    removedAnswerIndices = [];

    // Iniciar timer
    startTimer();

    // Atualizar contador de perguntas
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('total-count').textContent = selectedQuestions.length;

    // Atualizar texto da pergunta
    document.getElementById('question-text').textContent = question.question;

    // Atualizar classe de fundo
    const quizContent = document.querySelector('.quiz-content');
    // Remover todas as classes de fundo anteriores
    quizContent.className = 'quiz-content';
    // Adicionar nova classe de fundo
    if (question.backgroundClass) {
        quizContent.classList.add(question.backgroundClass);
    }

    // Criar botões de resposta
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

// Selecionar resposta
function selectAnswer(selectedIndex) {
    const question = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.shuffledCorrectIndex;

    // Parar timer
    stopTimer();

    // Desabilitar todos os botões
    const buttons = document.querySelectorAll('.answer-btn');
    const selectedButton = buttons[selectedIndex];

    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === selectedIndex) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });

    // Tracking de categoria
    trackQuestionCategory(question, isCorrect);

    // Atualizar contagem de acertos e combo
    if (isCorrect) {
        correctAnswers++;
        currentCombo++;
        if (currentCombo > maxCombo) {
            maxCombo = currentCombo;
        }

        document.getElementById('correct-count').textContent = correctAnswers;

        // Sons e efeitos de acerto
        if (soundManager) soundManager.playCorrect(currentCombo);
        if (visualEffects) {
            visualEffects.correctButtonEffect(selectedButton);
            visualEffects.showCombo(currentCombo);
            visualEffects.screenFlash('rgba(34, 197, 94, 0.2)');
        }

        // Verificar conquistas durante o quiz
        checkQuizAchievements();
    } else {
        currentCombo = 0;

        // Sons e efeitos de erro
        if (soundManager) soundManager.playWrong();
        if (visualEffects) {
            visualEffects.shakeElement(document.querySelector('.quiz-content'));
            visualEffects.hideCombo();
            visualEffects.screenFlash('rgba(239, 68, 68, 0.2)');
        }
    }

    // Mostrar animação
    showAnimation(isCorrect);

    // Aguardar e mostrar próxima pergunta
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion();
        } else {
            finishQuiz();
        }
    }, 2500);
}

// Mostrar animação
function showAnimation(isCorrect) {
    const container = document.getElementById('animation-container');
    const element = document.getElementById('animation-element');

    let animation;
    if (isCorrect) {
        animation = getCelebrationAnimation(correctAnswers, selectedQuestions.length);
    } else {
        animation = getConsolationAnimation();
    }

    element.innerHTML = animation.svg +
        `<div class="animation-message">${animation.message}</div>`;

    container.classList.remove('hidden');

    setTimeout(() => {
        container.classList.add('hidden');
    }, 2000);
}

// Desistir do quiz
function quitQuiz() {
    // Parar o timer antes do confirm para evitar que continue tocando
    const wasTimerRunning = timerInterval !== null;
    stopTimer();

    if (confirm('Tem certeza que deseja desistir? Você ainda poderá salvar seu resultado.')) {
        finishQuiz();
    } else {
        // Se cancelar, reiniciar o timer apenas se estava rodando
        if (wasTimerRunning && !quizFinished) {
            startTimer();
        }
    }
}

// Finalizar quiz
function finishQuiz() {
    // Parar timer
    stopTimer();

    quizFinished = true;
    const endTime = Date.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(1);

    // Verificar conquistas finais
    const finalStats = {
        currentScore: correctAnswers,
        maxCombo: maxCombo,
        compassCorrect: categoryStats.compass.correct,
        compassTotal: categoryStats.compass.total,
        gpsCorrect: categoryStats.gps.correct,
        gpsTotal: categoryStats.gps.total,
        starsCorrect: categoryStats.stars.correct,
        starsTotal: categoryStats.stars.total,
        quizCompleted: true,
        totalTime: parseFloat(totalTime),
        quizzesCompleted: achievementSystem.stats.quizzesCompleted + 1
    };

    // Atualizar estatísticas de conquistas
    achievementSystem.updateQuizStats({
        maxCombo: maxCombo,
        categoryStats: categoryStats
    });

    // Verificar conquistas finais
    const newAchievements = achievementSystem.checkAchievements(finalStats);

    // Efeitos especiais para vitória perfeita
    if (correctAnswers === 15) {
        if (soundManager) soundManager.playPerfect();
        if (visualEffects) {
            setTimeout(() => visualEffects.perfectVictory(), 500);
        }
    }

    // Mostrar conquistas desbloqueadas
    newAchievements.forEach((achievement, index) => {
        setTimeout(() => {
            achievementSystem.showAchievementPopup(achievement);
        }, index * 1000);
    });

    // Atualizar tela de resultado
    document.getElementById('final-score').textContent = correctAnswers;
    document.getElementById('final-time').textContent = totalTime;

    // Limpar input de nome
    document.getElementById('player-name-input').value = '';

    // Ocultar combo
    if (visualEffects) visualEffects.hideCombo();

    // Mostrar tela de resultado
    showScreen('result');
}

// Gerar nome aleatório
function generateRandomName() {
    const randomData = getRandomName();
    document.getElementById('player-name-input').value = randomData.name;
}

// Salvar pontuação
function saveScore() {
    const nameInput = document.getElementById('player-name-input');
    let playerName = nameInput.value.trim();

    // Se não digitou nome, gerar aleatório
    if (!playerName) {
        const randomData = getRandomName();
        playerName = randomData.name;
    }

    const endTime = Date.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(1);

    const scoreData = {
        name: playerName,
        avatar: avatarSystem ? avatarSystem.getAvatarEmoji() : null,
        score: correctAnswers,
        time: parseFloat(totalTime),
        timestamp: Date.now()
    };

    // Salvar nos rankings
    saveToRankings(scoreData);

    // Atualizar conquistas com nome e avatar do jogador
    if (achievementSystem) {
        achievementSystem.updateRecentUnlocksWithPlayerInfo(playerName, scoreData.avatar);
    }

    // Mostrar apenas ranking temporário
    showScreen('tempRanking');
}

// Sistema de Rankings
function loadRankings() {
    const general = localStorage.getItem('generalRanking');
    const temp = localStorage.getItem('tempRanking');
    const tempCount = localStorage.getItem('tempRankingCount');

    if (!general) {
        localStorage.setItem('generalRanking', JSON.stringify([]));
    }
    if (!temp) {
        localStorage.setItem('tempRanking', JSON.stringify([]));
    }
    if (!tempCount) {
        localStorage.setItem('tempRankingCount', '0');
    }
}

function saveToRankings(scoreData) {
    // Ranking Geral
    let generalRanking = JSON.parse(localStorage.getItem('generalRanking')) || [];
    generalRanking.push(scoreData);
    generalRanking.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time - b.time;
    });
    generalRanking = generalRanking.slice(0, 10);
    localStorage.setItem('generalRanking', JSON.stringify(generalRanking));

    // Ranking Temporário
    let tempRanking = JSON.parse(localStorage.getItem('tempRanking')) || [];
    let tempCount = parseInt(localStorage.getItem('tempRankingCount')) || 0;

    tempRanking.push(scoreData);
    tempRanking.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time - b.time;
    });
    tempRanking = tempRanking.slice(0, 3);

    tempCount++;

    // Reiniciar ranking temporário a cada 5 usuários
    if (tempCount >= 5) {
        tempRanking = [];
        tempCount = 0;
    }

    localStorage.setItem('tempRanking', JSON.stringify(tempRanking));
    localStorage.setItem('tempRankingCount', tempCount.toString());
}

// Atualizar ranking temporário na tela inicial
function updateHomeTempRanking() {
    const tempRanking = JSON.parse(localStorage.getItem('tempRanking')) || [];
    displayRankingList('home-temp-ranking-list', tempRanking);
}

// Exibir tela de ranking temporário
function displayTempRanking() {
    const tempRanking = JSON.parse(localStorage.getItem('tempRanking')) || [];
    displayRankingList('temp-ranking-list', tempRanking);
}

// Exibir tela de ranking permanente
function displayPermanentRanking() {
    const permanentRanking = JSON.parse(localStorage.getItem('generalRanking')) || [];
    displayRankingList('permanent-ranking-list', permanentRanking);
}

function displayRankingList(elementId, ranking) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';

    if (ranking.length === 0) {
        container.innerHTML = '<div class="empty-ranking">Nenhum resultado ainda</div>';
        return;
    }

    ranking.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = `ranking-item ${index === 0 ? 'top-1' : ''} ${index === 1 ? 'top-2' : ''} ${index === 2 ? 'top-3' : ''}`;

        // Usar avatar se disponível, senão usar ícone do nome
        const icon = player.avatar || getIconForName(player.name);

        item.innerHTML = `
            <div class="ranking-position">#${index + 1}</div>
            <div class="ranking-player">
                <div class="ranking-icon">${icon}</div>
                <div class="ranking-name">${player.name}</div>
            </div>
            <div class="ranking-stats">
                <div class="ranking-score">${player.score}/15</div>
                <div class="ranking-time">${player.time}s</div>
            </div>
        `;

        container.appendChild(item);
    });
}

// Tracking de categoria de pergunta
function trackQuestionCategory(question, isCorrect) {
    const questionText = question.question.toLowerCase();

    if (questionText.includes('bússola') || questionText.includes('norte magnético')) {
        categoryStats.compass.total++;
        if (isCorrect) categoryStats.compass.correct++;
    } else if (questionText.includes('gps') || questionText.includes('satélite') || questionText.includes('sistema de posicionamento')) {
        categoryStats.gps.total++;
        if (isCorrect) categoryStats.gps.correct++;
    } else if (questionText.includes('estrela') || questionText.includes('polar') || questionText.includes('constelação')) {
        categoryStats.stars.total++;
        if (isCorrect) categoryStats.stars.correct++;
    }
}

// Verificar conquistas durante o quiz
function checkQuizAchievements() {
    const currentStats = {
        currentScore: correctAnswers,
        maxCombo: maxCombo,
        currentCombo: currentCombo,
        compassCorrect: categoryStats.compass.correct,
        compassTotal: categoryStats.compass.total,
        gpsCorrect: categoryStats.gps.correct,
        gpsTotal: categoryStats.gps.total,
        starsCorrect: categoryStats.stars.correct,
        starsTotal: categoryStats.stars.total,
        quizCompleted: false,
        quizzesCompleted: achievementSystem.stats.quizzesCompleted
    };

    const newAchievements = achievementSystem.checkAchievements(currentStats);
    newAchievements.forEach(achievement => {
        achievementSystem.showAchievementPopup(achievement);
    });
}

// Toggle de som
function toggleSound() {
    const isEnabled = soundManager.toggle();
    soundToggleBtn.textContent = isEnabled ? '🔊' : '🔇';
    soundToggleBtn.classList.toggle('sound-off', !isEnabled);

    // Feedback sonoro
    if (isEnabled) {
        soundManager.playClick();
    }
}

// Exibir tela de conquistas
function displayAchievements() {
    const progress = achievementSystem.getProgress();
    const unlocked = achievementSystem.getUnlockedAchievements();
    const locked = achievementSystem.getLockedAchievements();

    // Atualizar estatísticas
    document.getElementById('achievements-progress').textContent = progress.percentage;
    document.getElementById('achievements-unlocked').textContent = progress.unlocked;
    document.getElementById('achievements-total').textContent = progress.total;
    document.getElementById('quizzes-completed').textContent = achievementSystem.stats.quizzesCompleted;
    document.getElementById('max-combo').textContent = achievementSystem.stats.maxCombo;

    // Atualizar barra de progresso
    const progressBar = document.getElementById('achievements-progress-bar');
    if (visualEffects) {
        visualEffects.animateProgress(progressBar, 0, progress.percentage);
    } else {
        progressBar.style.width = progress.percentage + '%';
    }

    // Criar galeria de conquistas
    const gallery = document.getElementById('achievements-gallery');
    gallery.innerHTML = '';

    const allAchievements = [...unlocked, ...locked];

    allAchievements.forEach(achievement => {
        const isUnlocked = achievementSystem.isUnlocked(achievement.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

        card.innerHTML = `
            <div class="achievement-card-icon">${achievement.icon}</div>
            <div class="achievement-card-name">${achievement.name}</div>
            <div class="achievement-card-desc">${achievement.description}</div>
        `;

        // Adicionar evento de clique apenas para conquistas desbloqueadas
        if (isUnlocked) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => showAchievementDetails(achievement));
        }

        gallery.appendChild(card);
    });
}

// Mostrar modal com detalhes da conquista
function showAchievementDetails(achievement) {
    const modal = document.getElementById('achievement-modal');
    const details = achievementSystem.getAchievementDetails(achievement.id);

    // Preencher modal com informações
    document.getElementById('achievement-modal-icon').textContent = achievement.icon;
    document.getElementById('achievement-modal-title').textContent = achievement.name;
    document.getElementById('achievement-modal-desc').textContent = achievement.description;

    if (details) {
        document.getElementById('achievement-modal-avatar').textContent = details.playerAvatar || '👤';
        document.getElementById('achievement-modal-name').textContent = details.playerName || 'Jogador';

        // Formatar data
        if (details.unlockedAt) {
            const date = new Date(details.unlockedAt);
            const dateStr = date.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            document.getElementById('achievement-modal-date').textContent = `Desbloqueado em ${dateStr}`;
        } else {
            document.getElementById('achievement-modal-date').textContent = '';
        }
    }

    // Mostrar modal
    modal.classList.add('show');

    // Som de feedback
    if (soundManager) soundManager.playClick();
}

// Fechar modal
function closeAchievementModal() {
    const modal = document.getElementById('achievement-modal');
    modal.classList.remove('show');
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);
