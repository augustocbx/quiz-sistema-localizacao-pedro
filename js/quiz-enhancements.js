// Funções auxiliares para Power-Ups, Timer e Avatares

// Exibir seleção de avatar
function displayAvatarSelection() {
    const wrapper = document.getElementById('avatar-selector-wrapper');
    wrapper.innerHTML = '';
    wrapper.appendChild(avatarSystem.createAvatarSelector());
}

// Inicializar Power-Ups no quiz
function initializePowerUps() {
    console.log('[Init] initializePowerUps INÍCIO');
    powerUpSystem.reset();
    removedAnswerIndices = [];

    const wrapper = document.getElementById('powerups-wrapper');
    if (!wrapper) {
        console.error('[PowerUps] Wrapper não encontrado!');
        return;
    }

    console.log('[Init] Criando UI dos power-ups...');
    wrapper.innerHTML = '';
    const powerUpsUI = powerUpSystem.createPowerUpUI();
    wrapper.appendChild(powerUpsUI);

    // Event listeners para power-ups
    const fiftyFiftyBtn = document.getElementById('powerup-fiftyFifty');
    const hintBtn = document.getElementById('powerup-hint');
    const skipBtn = document.getElementById('powerup-skip');

    console.log('[Init] Botões encontrados:', {
        fiftyFifty: fiftyFiftyBtn ? 'SIM' : 'NÃO',
        hint: hintBtn ? 'SIM' : 'NÃO',
        skip: skipBtn ? 'SIM' : 'NÃO'
    });

    if (fiftyFiftyBtn) {
        fiftyFiftyBtn.addEventListener('click', () => {
            console.log('[Click] 50:50 clicado!');
            usePowerUp('fiftyFifty');
        });
        console.log('[Init] 50:50 após event listener - disabled:', fiftyFiftyBtn.disabled, 'style:', fiftyFiftyBtn.style.background);
    }
    if (hintBtn) {
        hintBtn.addEventListener('click', () => {
            console.log('[Click] Dica clicado!');
            usePowerUp('hint');
        });
        console.log('[Init] Dica após event listener - disabled:', hintBtn.disabled, 'style:', hintBtn.style.background);
    }
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            console.log('[Click] Pular clicado!');
            usePowerUp('skip');
        });
        console.log('[Init] Pular após event listener - disabled:', skipBtn.disabled, 'style:', skipBtn.style.background);
    }

    // Aguardar um momento antes de atualizar UI (garante DOM pronto)
    console.log('[Init] Agendando updateUI...');
    setTimeout(() => {
        console.log('[Init] Executando updateUI agora...');
        powerUpSystem.updateUI();
    }, 50);
}

// Usar power-up
function usePowerUp(powerUpId) {
    console.log(`[UsePowerUp] Tentando usar ${powerUpId}`);
    console.log(`[UsePowerUp] Disponível?`, powerUpSystem.isAvailable(powerUpId));

    if (!powerUpSystem.isAvailable(powerUpId)) {
        console.log(`[UsePowerUp] ${powerUpId} NÃO DISPONÍVEL! Abortando.`);
        return;
    }

    console.log(`[UsePowerUp] ${powerUpId} disponível, aplicando...`);

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
