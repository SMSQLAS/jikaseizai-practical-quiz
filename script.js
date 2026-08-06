const QUIZ_NAME = "自家製剤加算クイズ 実践編";

// Apps Scriptをデプロイした後、ウェブアプリURLを下の "" の中に入れてください。
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxCGQdVIRdGYjocIAdfrMA_gUYtxovXCQBj4IDBKXuUZTP7BKx5z0YVRRHIheUsRTI/exec";

const questions = [
  {
    text: `
<strong>問題1</strong><br><br>
<table class="prescription-table">
<tr><td>Rp1)</td></tr>
<tr><td>○○錠</td><td>1錠</td></tr>
<tr><td colspan="2">1日1回　朝食後　14日分</td></tr>
</table>
<br>処方箋に「服用困難のため粉砕」と医師の指示があり、粉砕して調剤した。<br><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
算定できます。<br><br>医師の指示に基づき、薬学的に問題なく加工でき、薬価基準上の代替製剤がないなど、その他の算定要件も満たしている前提です。
`
  },
  {
    text: `
<strong>問題2</strong><br><br>次のいずれかの依頼だけで、医師への確認を行わずに錠剤を粉砕した。<br><br>・患者本人の希望<br>・家族の希望<br>・介護施設職員からの依頼<br><br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br><br>患者、家族、介護施設からの希望だけでは、処方医の指示に基づく調剤とはいえません。必要な場合は疑義照会を行います。
`
  },
  {
    text: `
<strong>問題3</strong><br><br>患者から錠剤の粉砕を希望されたため、薬剤師が疑義照会を行った。<br><br>処方医から粉砕の了承を得たうえで、薬学的に問題がないことを確認し、粉砕して調剤した。<br><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
算定できます。<br><br>疑義照会によって処方医の了承を得て、その他の算定要件を満たしていれば算定できます。疑義照会内容と医師の回答を記録します。
`
  },
  {
    text: `
<strong>問題4</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題4の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題5</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題5の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題6</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題6の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題7</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題7の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題8</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題8の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題9</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題9の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題10</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題10の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題11</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題11の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題12</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題12の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題13</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題13の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題14</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題14の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題15</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題15の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題16</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題16の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題17</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題17の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題18</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題18の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題19</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題19の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題20</strong><br><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題20の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  }
];

let current = 0;
let score = 0;
let answered = false;
const answerLog = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const trueButton = document.getElementById("trueButton");
const falseButton = document.getElementById("falseButton");
const nextButton = document.getElementById("nextButton");
const questionText = document.getElementById("questionText");
const feedback = document.getElementById("feedback");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const scoreText = document.getElementById("scoreText");
const resultForm = document.getElementById("resultForm");
const sendButton = document.getElementById("sendButton");
const sendStatus = document.getElementById("sendStatus");
const formError = document.getElementById("formError");
const retryButton = document.getElementById("retryButton");

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((item) => {
    item.classList.toggle("active", item === screen);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  current = 0;
  score = 0;
  answered = false;
  answerLog.length = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const question = questions[current];

  questionText.innerHTML = question.text;
  progressText.textContent = `問題${current + 1} / ${questions.length}`;
  scoreText.textContent = `正解 ${score}`;
  progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;

  feedback.className = "feedback hidden";
  feedback.innerHTML = "";
  nextButton.classList.add("hidden");

  trueButton.disabled = false;
  falseButton.disabled = false;
}

function answerQuestion(selectedAnswer) {
  if (answered) return;
  answered = true;

  const question = questions[current];
  const isCorrect = selectedAnswer === question.answer;

  if (isCorrect) score += 1;

  answerLog.push({
    number: current + 1,
    selected: selectedAnswer,
    correct: question.answer,
    isCorrect
  });

  trueButton.disabled = true;
  falseButton.disabled = true;
  scoreText.textContent = `正解 ${score}`;

  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.innerHTML = `
    <div class="feedback-title">${isCorrect ? "⭕ 正解！" : "❌ 不正解"}</div>
    <div>${question.explanation}</div>
  `;

  nextButton.textContent =
    current === questions.length - 1 ? "結果を見る" : "次の問題へ";
  nextButton.classList.remove("hidden");
}

function goNext() {
  if (!answered) return;

  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResult();
  }
}

function showResult() {
  showScreen(resultScreen);

  document.getElementById("resultScore").textContent =
    `${score} / ${questions.length}点`;

  resultForm.reset();
  formError.classList.add("hidden");
  sendStatus.classList.add("hidden");
  sendStatus.textContent = "";

  sendButton.disabled = false;
  sendButton.textContent = "結果を送信する";

  // 結果を送信するまでは再挑戦できない
  retryButton.disabled = true;
}

function buildPayload() {
  const difficulty =
    document.querySelector('input[name="difficulty"]:checked')?.value || "";

  const wrongNumbers = answerLog
    .filter((item) => !item.isCorrect)
    .map((item) => `問題${item.number}`);

  return {
    quizName: QUIZ_NAME,
    storeName: document.getElementById("storeName").value.trim(),
    userName: document.getElementById("userName").value.trim(),
    difficulty,
    score,
    total: questions.length,
    scoreDisplay: `${score}/${questions.length}`,
    wrongAnswers: wrongNumbers.length ? wrongNumbers.join("、") : "なし",
    answerDetail: answerLog
      .map((item) =>
        `問題${item.number}:${item.selected ? "算定できる" : "算定できない"}`
      )
      .join("｜")
  };
}

async function submitResult(event) {
  event.preventDefault();

  const payload = buildPayload();

  if (!payload.storeName || !payload.userName || !payload.difficulty) {
    formError.textContent = "店舗名・名前・難易度をすべて入力してください。";
    formError.classList.remove("hidden");
    return;
  }

  formError.classList.add("hidden");

  if (!WEB_APP_URL) {
    sendStatus.innerHTML =
      "Apps ScriptのURLがまだ設定されていません。<br>script.js上部のWEB_APP_URLにURLを入れてください。";
    sendStatus.classList.remove("hidden");
    return;
  }

  sendButton.disabled = true;
  sendButton.textContent = "送信中…";
  retryButton.disabled = true;
  sendStatus.textContent = "送信中です…";
  sendStatus.classList.remove("hidden");

  try {
    const sendData = {
  timestamp: new Date().toISOString(),
  quizTitle: QUIZ_NAME,
  storeName: payload.storeName,
  name: payload.userName,
  difficulty: payload.difficulty,
  score: payload.scoreDisplay,
  answers: payload.wrongAnswers
};

await fetch(WEB_APP_URL, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  },
  body: JSON.stringify(sendData)
});

    sendStatus.textContent = "✅ 結果を送信しました！";
    sendButton.textContent = "送信済み";
    retryButton.disabled = false;
  } catch (error) {
    console.error(error);
    sendStatus.textContent =
      "送信できませんでした。通信状況とApps ScriptのURLを確認してください。";
    sendButton.disabled = false;
    sendButton.textContent = "結果を送信する";
    retryButton.disabled = true;
  }
}

startButton.addEventListener("click", startQuiz);
trueButton.addEventListener("click", () => answerQuestion(true));
falseButton.addEventListener("click", () => answerQuestion(false));
nextButton.addEventListener("click", goNext);
resultForm.addEventListener("submit", submitResult);
retryButton.addEventListener("click", startQuiz);
