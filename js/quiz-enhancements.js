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
    if (!wrapper) return;

    wrapper.innerHTML = '';
    const powerUpsUI = powerUpSystem.createPowerUpUI();
    wrapper.appendChild(powerUpsUI);

    // Event listeners para power-ups
    const fiftyFiftyBtn = document.getElementById('powerup-fiftyFifty');
    const swapQuestionBtn = document.getElementById('powerup-swapQuestion');
    const doubleTimeBtn = document.getElementById('powerup-doubleTime');

    if (fiftyFiftyBtn) {
        fiftyFiftyBtn.addEventListener('click', () => usePowerUp('fiftyFifty'));
    }
    if (swapQuestionBtn) {
        swapQuestionBtn.addEventListener('click', () => usePowerUp('swapQuestion'));
    }
    if (doubleTimeBtn) {
        doubleTimeBtn.addEventListener('click', () => usePowerUp('doubleTime'));
    }

    // Atualizar UI imediatamente para garantir que os botões estejam habilitados
    powerUpSystem.updateUI();
}

// Usar power-up
function usePowerUp(powerUpId) {
    if (!powerUpSystem.isAvailable(powerUpId)) return;

    const question = selectedQuestions[currentQuestionIndex];

    if (powerUpId === 'fiftyFifty') {
        const result = powerUpSystem.applyFiftyFifty(question);
        if (result) {
            // Incrementar contadores para conquistas
            powerUpsUsed++;
            powerUpsUsedTypes.add('fiftyFifty');

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
    } else if (powerUpId === 'swapQuestion') {
        const result = powerUpSystem.applySwapQuestion();
        if (result) {
            // Incrementar contadores para conquistas
            powerUpsUsed++;
            powerUpsUsedTypes.add('swapQuestion');

            // Parar o timer imediatamente para evitar timeout durante a troca
            stopTimer();

            powerUpSystem.showPowerUpEffect(powerUpId, result.message);
            powerUpSystem.updateUI();

            // Trocar a pergunta atual por uma nova do banco
            // Pegar perguntas que ainda não foram usadas
            const usedQuestions = selectedQuestions.map(q => q.question);
            const availableQuestions = QUESTION_BANK.filter(q => !usedQuestions.includes(q.question));

            if (availableQuestions.length > 0) {
                // Selecionar uma pergunta aleatória
                const randomIndex = Math.floor(Math.random() * availableQuestions.length);
                const originalQuestion = availableQuestions[randomIndex];

                // Criar uma cópia da pergunta para não modificar o banco original
                const newQuestion = { ...originalQuestion };

                // Embaralhar respostas da nova pergunta (mesmo processo do startQuiz)
                const answers = [...newQuestion.answers];
                const correctAnswer = answers[newQuestion.correctIndex];

                // Usar a função shuffleArray existente
                shuffleArray(answers);

                // Atualizar índice da resposta correta
                newQuestion.shuffledAnswers = answers;
                newQuestion.shuffledCorrectIndex = answers.indexOf(correctAnswer);

                // Substituir a pergunta atual
                selectedQuestions[currentQuestionIndex] = newQuestion;

                // Mostrar a nova pergunta após um delay
                setTimeout(() => {
                    removedAnswerIndices = []; // Limpar respostas removidas do 50:50
                    displayQuestion();
                }, 1500);
            }
        }
    } else if (powerUpId === 'doubleTime') {
        const result = powerUpSystem.applyDoubleTime();
        if (result) {
            // Incrementar contadores para conquistas
            powerUpsUsed++;
            powerUpsUsedTypes.add('doubleTime');

            // Restaurar o tempo para 20 segundos
            timeRemaining = TIME_PER_QUESTION;

            powerUpSystem.showPowerUpEffect(powerUpId, result.message);
            powerUpSystem.updateUI();

            // Atualizar UI do timer imediatamente
            updateTimerUI();
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

    // Calcular percentual - pode ultrapassar 100% quando tempo é dobrado (feedback visual)
    const percentage = Math.min((timeRemaining / TIME_PER_QUESTION) * 100, 100);
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
