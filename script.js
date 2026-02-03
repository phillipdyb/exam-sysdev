const allQuestions = [
    {
        question: "Spørsmål kommer :)",
        options: ["1", "2", "3", "4"],
        correct: 0
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let answeredQuestions = []; // Track which questions have been checked
let score = 0;

function startQuiz(mode) {
    if (mode === 'all') {
        currentQuestions = [...allQuestions];
    } else if (mode === 'random20') {
        currentQuestions = getRandomQuestions(20);
    } else if (mode === 'random10') {
        currentQuestions = getRandomQuestions(10);
    }

    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredQuestions = new Array(currentQuestions.length).fill(false);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    
    showQuestion();
}

function getRandomQuestions(count) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const isAnswered = answeredQuestions[currentQuestionIndex];
    
    document.getElementById('questionNumber').textContent = 
        `Spørsmål ${currentQuestionIndex + 1} av ${currentQuestions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        // If this question has been answered, show the results and disable clicking
        if (isAnswered) {
            optionDiv.classList.add('disabled');
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            }
            if (userAnswers[currentQuestionIndex] === index && index !== question.correct) {
                optionDiv.classList.add('incorrect');
            }
        } else {
            optionDiv.onclick = () => selectOption(index);
        }
        
        optionDiv.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)})</span>
            <span>${option}</span>
        `;
        optionsContainer.appendChild(optionDiv);
    });

    // Show feedback if question was already answered
    const feedback = document.getElementById('feedback');
    if (isAnswered) {
        const userAnswer = userAnswers[currentQuestionIndex];
        if (userAnswer === question.correct) {
            feedback.textContent = '✓ Riktig!';
            feedback.className = 'feedback correct';
        } else {
            feedback.textContent = `✗ Feil. Riktig svar er: ${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}`;
            feedback.className = 'feedback incorrect';
        }
        feedback.classList.remove('hidden');
    } else {
        feedback.classList.add('hidden');
    }

    updateProgress();
    updateButtons();
}

function selectOption(index) {
    // Don't allow changing answer after checking
    if (answeredQuestions[currentQuestionIndex]) {
        return;
    }
    
    userAnswers[currentQuestionIndex] = index;
    
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
        }
    });
    
    updateButtons();
}

function checkAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    if (userAnswer === null) return;
    
    // Mark this question as answered
    answeredQuestions[currentQuestionIndex] = true;
    
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    
    // Disable all options
    options.forEach(opt => {
        opt.classList.add('disabled');
        opt.onclick = null;
    });
    
    options[question.correct].classList.add('correct');
    
    if (userAnswer === question.correct) {
        feedback.textContent = '✓ Riktig!';
        feedback.className = 'feedback correct';
        score++;
    } else {
        options[userAnswer].classList.add('incorrect');
        feedback.textContent = `✗ Feil. Riktig svar er: ${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}`;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function updateButtons() {
    const isAnswered = answeredQuestions[currentQuestionIndex];
    
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('checkBtn').disabled = userAnswers[currentQuestionIndex] === null || isAnswered;
    document.getElementById('nextBtn').disabled = !isAnswered;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

function showResults() {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    
    document.getElementById('finalScore').textContent = `${score}/${currentQuestions.length}`;
    document.getElementById('scoreDetails').textContent = `${percentage}% riktig`;
    
    const emoji = document.getElementById('resultEmoji');
    if (percentage >= 90) {
        emoji.textContent = '🏆';
    } else if (percentage >= 70) {
        emoji.textContent = '🎉';
    } else if (percentage >= 50) {
        emoji.textContent = '👍';
    } else {
        emoji.textContent = '📚';
    }
}
