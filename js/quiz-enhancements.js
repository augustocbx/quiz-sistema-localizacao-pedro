// Funções auxiliares para Power-Ups, Timer e Avatares

// Exibir seleção de avatar
function displayAvatarSelection() {
    const wrapper = document.getElementById('avatar-selector-wrapper');
    wrapper.innerHTML = '';
    wrapper.appendChild(avatarSystem.createAvatarSelector());
}

// Inicializar Power-Ups no quiz
function initializePowerUps() {
    powerUpSystem.reset();
    removedAnswerIndices = [];

    const wrapper = document.getElementById('powerups-wrapper');
    if (!wrapper) {
        console.error('[PowerUps] Wrapper não encontrado!');
        return;
    }

    wrapper.innerHTML = '';
    const powerUpsUI = powerUpSystem.createPowerUpUI();
    wrapper.appendChild(powerUpsUI);

    // Event listeners para power-ups
    const fiftyFiftyBtn = document.getElementById('powerup-fiftyFifty');
    const hintBtn = document.getElementById('powerup-hint');
    const skipBtn = document.getElementById('powerup-skip');

    if (fiftyFiftyBtn) fiftyFiftyBtn.addEventListener('click', () => usePowerUp('fiftyFifty'));
    if (hintBtn) hintBtn.addEventListener('click', () => usePowerUp('hint'));
    if (skipBtn) skipBtn.addEventListener('click', () => usePowerUp('skip'));

    // Aguardar um momento antes de atualizar UI (garante DOM pronto)
    setTimeout(() => {
        powerUpSystem.updateUI();
    }, 50);
}

// Usar power-up
function usePowerUp(powerUpId) {
    if (!powerUpSystem.isAvailable(powerUpId)) {
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];

    if (powerUpId === 'fiftyFifty') {
        const result = powerUpSystem.applyFiftyFifty(question);
        if (result) {
            removedAnswerIndices = result.removedIndices;

            // Esconder botões
            result.removedIndices.forEach(index => {
                const buttons = document.querySelectorAll('.answer-btn');
                if (buttons[index]) {
                    buttons[index].style.opacity = '0.3';
                    buttons[index].style.pointerEvents = 'none';
                }
            });

            powerUpSystem.showPowerUpEffect(powerUpId, result.message);
            powerUpSystem.updateUI();
        }
    } else if (powerUpId === 'hint') {
        const result = powerUpSystem.applyHint(question);
        if (result) {
            powerUpSystem.showPowerUpEffect(powerUpId, result.hint);
            powerUpSystem.updateUI();
        }
    } else if (powerUpId === 'skip') {
        const result = powerUpSystem.applySkip();
        if (result) {
            powerUpSystem.showPowerUpEffect(powerUpId, result.message);
            powerUpSystem.updateUI();

            // Pular para próxima pergunta
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < selectedQuestions.length) {
                    displayQuestion();
                } else {
                    finishQuiz();
                }
            }, 1500);
        }
    }
}

// Inicializar timer
function startTimer() {
    stopTimer();
    timeRemaining = TIME_PER_QUESTION;
    updateTimerUI();

    timerInterval = setInterval(() => {
        timeRemaining -= 0.1;

        if (timeRemaining <= 0) {
            timeRemaining = 0;
            stopTimer();
            handleTimeOut();
        }

        updateTimerUI();
    }, 100);
}

// Parar timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Atualizar UI do timer
function updateTimerUI() {
    const timerText = document.getElementById('timer-text');
    const timerBar = document.getElementById('timer-bar');

    timerText.textContent = Math.ceil(timeRemaining) + 's';

    const percentage = (timeRemaining / TIME_PER_QUESTION) * 100;
    timerBar.style.width = percentage + '%';

    // Mudar cores baseado no tempo restante
    timerBar.classList.remove('warning', 'danger');
    timerText.classList.remove('danger');

    if (timeRemaining <= 3) {
        timerBar.classList.add('danger');
        timerText.classList.add('danger');
    } else if (timeRemaining <= 5) {
        timerBar.classList.add('warning');
    }
}

// Tempo esgotado
function handleTimeOut() {
    // Conta como erro
    currentCombo = 0;

    // Sons e efeitos
    if (soundManager) soundManager.playWrong();
    if (visualEffects) {
        visualEffects.shakeElement(document.querySelector('.quiz-content'));
        visualEffects.hideCombo();
        visualEffects.screenFlash('rgba(239, 68, 68, 0.2)');
    }

    // Desabilitar botões
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // Mostrar animação de consolo
    showAnimation(false);

    // Próxima pergunta
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion();
        } else {
            finishQuiz();
        }
    }, 2500);
}
