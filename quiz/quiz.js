/* Quiz logic – IDATx1005 */

let activeTopic = 'all';
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let answered = [];
let score = 0;

// Topic filter buttons
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTopic = btn.dataset.topic;
      updateStartCard();
    });
  });

  // Check URL param ?topic=xxx
  const params = new URLSearchParams(window.location.search);
  const topicParam = params.get('topic');
  if (topicParam) {
    const matchBtn = document.querySelector(`[data-topic="${topicParam}"]`);
    if (matchBtn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      matchBtn.classList.add('active');
      activeTopic = topicParam;
      updateStartCard();
    }
  }
});

function getFilteredQuestions() {
  if (activeTopic === 'all') return allQuestions;
  return allQuestions.filter(q => q.topic === activeTopic);
}

function updateStartCard() {
  const filtered = getFilteredQuestions();
  const titleEl = document.getElementById('startTitle');
  const descEl = document.getElementById('startDesc');
  const btnsEl = document.getElementById('quizModeBtns');
  const topicNames = {
    all: 'Alle spørsmål',
    mmi: 'MMI & Interaksjonsdesign',
    personvern: 'Personvern & Etikk',
    metodikk: 'Utviklingsmetodikk',
    scrum: 'Scrum',
    kanban: 'Kanban',
    testing: 'Testing',
    arkitektur: 'Programvarearkitektur',
    uml: 'UML-diagrammer',
    baerekraft: 'Bærekraft & Systemutvikling'
  };
  if (titleEl) titleEl.textContent = topicNames[activeTopic] || 'Quiz';
  if (descEl) descEl.textContent = `${filtered.length} spørsmål` + (activeTopic !== 'all' ? ` om ${(topicNames[activeTopic] || activeTopic).toLowerCase()}.` : ' fra alle temaer i IDATx1005.');
  if (btnsEl) {
    if (activeTopic === 'all') {
      btnsEl.innerHTML = `
        <button class="btn btn-primary" onclick="startQuiz('all')">Alle spørsmål</button>
        <button class="btn btn-ghost" onclick="startQuiz('random20')">20 tilfeldige</button>
        <button class="btn btn-ghost" onclick="startQuiz('random10')">10 tilfeldige</button>`;
    } else {
      btnsEl.innerHTML = `<button class="btn btn-primary" onclick="startQuiz('all')">Start quiz</button>`;
    }
  }
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleOptions(question) {
  const indices = question.options.map((_, i) => i);
  const shuffled = shuffleArray(indices);
  return {
    ...question,
    options: shuffled.map(i => question.options[i]),
    correct: shuffled.indexOf(question.correct)
  };
}

function startQuiz(mode) {
  let pool = getFilteredQuestions();
  let selected;

  if (mode === 'all') {
    selected = shuffleArray(pool);
  } else if (mode === 'random20') {
    selected = shuffleArray(pool).slice(0, Math.min(20, pool.length));
  } else if (mode === 'random10') {
    selected = shuffleArray(pool).slice(0, Math.min(10, pool.length));
  }

  currentQuestions = selected.map(shuffleOptions);
  userAnswers = new Array(currentQuestions.length).fill(null);
  answered = new Array(currentQuestions.length).fill(false);
  currentIndex = 0;
  score = 0;

  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  document.getElementById('resultsScreen').classList.add('hidden');

  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentIndex];
  const isAnswered = answered[currentIndex];

  document.getElementById('questionNumber').textContent =
    `Spørsmål ${currentIndex + 1} av ${currentQuestions.length}`;
  document.getElementById('questionText').textContent = q.question;

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  q.options.forEach((option, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    if (userAnswers[currentIndex] === i) div.classList.add('selected');

    if (isAnswered) {
      div.classList.add('disabled');
      if (i === q.correct) div.classList.add('correct');
      if (userAnswers[currentIndex] === i && i !== q.correct) div.classList.add('incorrect');
    } else {
      div.addEventListener('click', () => selectOption(i));
    }

    div.innerHTML = `<span class="option-label">${String.fromCharCode(65 + i)})</span><span>${option}</span>`;
    container.appendChild(div);
  });

  // Feedback
  const fb = document.getElementById('feedback');
  if (isAnswered) {
    if (userAnswers[currentIndex] === q.correct) {
      fb.textContent = '✓ Riktig!';
      fb.className = 'feedback correct';
    } else {
      fb.textContent = `✗ Feil. Riktig svar: ${String.fromCharCode(65 + q.correct)}) ${q.options[q.correct]}`;
      fb.className = 'feedback incorrect';
    }
    fb.classList.remove('hidden');
  } else {
    fb.classList.add('hidden');
  }

  updateProgress();
  updateButtons();
}

function selectOption(index) {
  if (answered[currentIndex]) return;
  userAnswers[currentIndex] = index;

  document.querySelectorAll('.option').forEach((opt, i) => {
    opt.classList.remove('selected');
    if (i === index) opt.classList.add('selected');
  });

  updateButtons();
}

function checkAnswer() {
  const q = currentQuestions[currentIndex];
  const userAnswer = userAnswers[currentIndex];
  if (userAnswer === null) return;

  answered[currentIndex] = true;

  const options = document.querySelectorAll('.option');
  options.forEach(opt => {
    opt.classList.add('disabled');
    opt.onclick = null;
  });
  options[q.correct].classList.add('correct');

  const fb = document.getElementById('feedback');
  if (userAnswer === q.correct) {
    fb.textContent = '✓ Riktig!';
    fb.className = 'feedback correct';
    score++;
  } else {
    options[userAnswer].classList.add('incorrect');
    fb.textContent = `✗ Feil. Riktig svar: ${String.fromCharCode(65 + q.correct)}) ${q.options[q.correct]}`;
    fb.className = 'feedback incorrect';
  }
  fb.classList.remove('hidden');
  updateProgress();
  updateButtons();
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function updateButtons() {
  const isAnswered = answered[currentIndex];
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('checkBtn').disabled = userAnswers[currentIndex] === null || isAnswered;
  document.getElementById('nextBtn').disabled = !isAnswered;
}

function updateProgress() {
  const total = currentQuestions.length;
  const pct = ((currentIndex + 1) / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `Spørsmål ${currentIndex + 1} av ${total}`;
  document.getElementById('scoreLabel').textContent = `${score} riktige`;
}

function showResults() {
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultsScreen').classList.remove('hidden');

  const total = currentQuestions.length;
  const pct = Math.round((score / total) * 100);

  document.getElementById('finalScore').textContent = `${score}/${total}`;
  document.getElementById('resultsPct').textContent = `${pct}% riktig`;

  const icon = document.getElementById('resultIcon');
  if (pct >= 90) icon.textContent = '🏆';
  else if (pct >= 70) icon.textContent = '🎉';
  else if (pct >= 50) icon.textContent = '👍';
  else icon.textContent = '📚';
}

function resetQuiz() {
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultsScreen').classList.add('hidden');
  document.getElementById('startScreen').classList.remove('hidden');
}
