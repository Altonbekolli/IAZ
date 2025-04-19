  function updateProgressBar() {
    const total = questions[selectedLevel].length;
    const current = currentQuestion + 1;
    const percent = (current / total) * 100;
  
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-label").innerText = `Frage ${current} von ${total}`;
  }
  
  
  let currentQuestion = 0;
  let selectedLevel = 'easy';
  let score=0;
  
  function startQuiz(level) {
    // Reset Variablen
    score = 0;
    selectedLevel = level;
    currentQuestion = 0;
  
    // Zeige das Quiz
    document.getElementById("quiz-box").style.display = "block";
  
    // Blende Ergebnis aus & leere Inhalt
    const result = document.getElementById("quiz-result");
    result.style.display = "none";
    result.innerHTML = "";
  
    // Setze alle Inhalte zurück
    document.getElementById("question").style.display = "block";
    document.getElementById("answers").style.display = "block";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("explanation").style.display = "none";
    document.getElementById("answers").innerHTML = "";
  
    // Lade erste Frage & Progressbar
    loadQuestion();
    updateProgressBar();
  }
  
  
  function loadQuestion() {
    const q = questions[selectedLevel][currentQuestion];
    document.getElementById("question").innerText = q.question;
  
    const answers = document.getElementById("answers");
    answers.innerHTML = "";
  
    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.onclick = () => checkAnswer(btn, q.correct, q.explanation);
      answers.appendChild(btn);
    });
  
    document.getElementById("explanation").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    updateProgressBar();
  }
  
  function checkAnswer(button, correctAnswer, explanationText) {
    const allButtons = document.querySelectorAll("#answers button");
    allButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.innerText === correctAnswer) {
        btn.classList.add("correct");
      } else if (btn === button) {
        btn.classList.add("wrong");
      }
    });

    if(button.innerText === correctAnswer){
        score++;
    }
  
    const explanation = document.getElementById("explanation");
    explanation.innerText = explanationText;
    explanation.style.display = "block";
  
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    const total = questions[selectedLevel].length;
  
    if (currentQuestion >= total) {
      // Alles ausblenden
      document.getElementById("quiz-box").style.display = "none";
  
      // Bewertungstext
      let message = `Du hast ${score} von ${total} Fragen richtig beantwortet.`;
  
      if (score === total) {
        message += " 💯 Perfekt!";
      } else if (score >= total / 2) {
        message += " 👍 Guter Job, du kannst noch mehr lernen!";
      } else {
        message += " 📘 Mach dir nichts draus – Übung macht den Imam!";
      }
  
      // Ergebnisbereich anzeigen
      const result = document.getElementById("quiz-result");
      result.innerHTML = `
        <div class="quiz-end">
          <h2>Quiz abgeschlossen!</h2>
          <p>${message}</p>
          <button class="restart-btn" id="restart-btn">🔁 Nochmal spielen</button>
        </div>
      `;
      result.style.display = "block";
  
      // Klicklistener
      document.getElementById("restart-btn").addEventListener("click", () => {
        result.style.display = "none";
        document.getElementById("quiz-box").style.display = "block";
        startQuiz(selectedLevel);
      });
  
    } else {
      loadQuestion();
    }
  }
  
  
  