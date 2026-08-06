const QUIZ_NAME = "自家製剤加算クイズ 実践編";

// Apps Scriptをデプロイした後、ウェブアプリURLを下の "" の中に入れてください。
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxCGQdVIRdGYjocIAdfrMA_gUYtxovXCQBj4IDBKXuUZTP7BKx5z0YVRRHIheUsRTI/exec";

const questions = [

  {
    text: `
<strong>問題1</strong><br>患者から錠剤の粉砕を希望されたため、薬剤師が疑義照会を行った。<br>処方医から粉砕の了承を得たうえで、薬学的に問題がないことを確認し、粉砕して調剤した。<br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
算定できます。<br><br>疑義照会によって処方医の了承を得て、その他の算定要件を満たしていれば算定できます。疑義照会内容と医師の回答を記録します。
`
  },
  {
    text: `
<strong>問題2</strong><br>次のいずれかの依頼だけで、医師への確認を行わずに錠剤を粉砕した。<br>・患者本人の希望<br>・家族の希望<br>・介護施設職員からの依頼<br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br><br>患者、家族、介護施設からの希望だけでは、処方医の指示に基づく調剤とはいえません。必要な場合は疑義照会を行います。
`
  },
  {
    text: `
<strong>問題3</strong><br>ドライシロップを水に溶かして交付した場合、自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br><br>※調整料は水剤扱いとなります。
`
  },
  {
    text: `
<strong>問題4</strong><br>散剤が供給不足により手に入らない為、錠剤を粉砕した。<br>この場合、自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
算定できます。<br><br>供給上の問題により当該医薬品が入手困難であり、調剤を行う際に必要な数量を確保できない場合は算定可能です。
`
  },
  {
    text: `
<strong>問題5</strong><br>割線のない配合錠を半錠にした。<br><br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
 算定できません。<br><br>配合錠の半錠は含量の均一性に保証がないため、依然として自家製剤加算を算定できません。
`
  },
  {
    text: `
<strong>問題6</strong>ビソプロロール錠2.5mg　0.5錠　朝食後　7日分<br>アジルサルタン錠10mg　0.5錠　朝食後　14日分<br><br>2剤とも自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
2剤とも算定できます。<br><br>自家製剤加算は「1調剤につき」算定することができます。<br>ここでいう「1調剤」とは、内服薬の場合、必ずしも薬剤調整料の「1剤」と全く同じ区分になるわけではありません。<br>服用時点は同一で調剤日数のみ異なるような場合には、薬剤調整料は1剤となりますが、調剤行為については「それぞれ1調剤」として取り扱います。<br>したがってこのケースは2調剤行為として取り扱うので、自家製剤加算もそれそれ算定できます。
`
  },
  {
    text: `
<strong>問題7</strong><br>ベストロン点眼液を、粉末を溶解し、使えるようにしてお渡しした。<br><br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br><br>液剤を調剤する時に用時溶解して使用するとされている医薬品を交付する時に溶解した場合は算定対象となりません。
`
  },
  {
    text: `
<strong>問題8</strong>
<table class="prescription-table">
<tr><td>タケプロン錠15㎎</td><td>1錠</td></tr>
<tr><td colspan="2">1日1回　朝食後　14日分</td></tr>
</table>
処方箋に「服用困難のため粉砕」と医師の指示があり、粉砕して調剤した。<br><br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br>タケプロン（一般名：ランソプラゾール）は胃酸で効き目が失われるのを防ぐため腸溶性コーティングが施されており、原則として粉砕は不可です。
<br>粉砕すると薬が胃で壊れて効果がなくなります。代替としてOD錠（口腔内崩壊錠）や、カプセルの脱カプセルが検討されます。
<br>OD錠も原則として、腸溶性細粒を含む口腔内崩壊錠のため不可であるが、乳鉢などで軽く粉砕するなど腸溶性細粒をすりつぶさなければ粉砕可能です。
<br>『タケキャブ錠の粉砕後の安定性』
<br>温度40℃,60%RH,暗所の条件下で観察した結果、三ヶ月後まで外観、含量について特に問題となる変化なし。
`
  },
  {
    text: `
<strong>問題9</strong><br>「センノシド錠　1錠　分1夕食後　医師の指示により粉砕」<br><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
算定できます。<br><br>センノシド錠の有効成分はセンノシドA・Bのカルシウム塩として12mgでセンノシドは20mgです。<br>センノシドで調べると出てくるアローゼン顆粒は一般名「センナ・センナ実配合顆粒」でセンナ577.9mg＋センナ実385.3mg。<br>有効成分が同一ではないため自家製剤加算を算定できます。
`
  },
  {
    text: `
<strong>問題10</strong><br>「グリメピリド錠3mg　0.5錠　分1朝食後」を調剤。<br><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
算定できます。<br><br>既存の規格の組み合わせ（1mg＋0.5mg）で対応可能な場合でも、1.5㎎の規格が無ければ自家製剤加算を算定できます。
`
  },
    {
    text: `
<strong>問題11</strong><br>「カロナール錠200mg　1.5錠　分1朝食後」を調剤。<br><br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br><br>アセトアミノフェン錠に100㎎の規格はありませんが、300㎎の規格はありますので自家製剤加算を算定できません。
`
  },
  {
    text: `
<strong>問題12</strong><br><table style="border-collapse:separate; border-spacing:20px 6px;">
      <tr><td>Aシロップ</td><td>5ml</td></tr>
    <tr><td>Bシロップ</td><td>6ml</td></tr>
<tr><td>Cドライシロップ</td><td>0.6ｇ</td></tr>
<tr><td>Dドライシロップ</td><td>1.2ｇ</td><td>1日3回</td><td>毎食後</td><td>4日分</td></tr>
</table>
<br>上記を混合した。<br>自家製剤加算を算定できるか？
`,
    answer: false,
    explanation: `
算定できません。<br><br>自家製剤加算と計量混合調剤加算については、技術的により難易度の高い製剤行為は自家製剤加算、それ以外の製剤行為は計量混合調剤加算と整理されています。
<br>ドライシロップと液剤のように混合が容易なものについては、計量混合加算として算定します。
`
  },
  {
    text: `
<strong>問題13</strong><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題13の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題14</strong><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題14の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題15</strong><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題15の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題16</strong><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題16の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題17</strong><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題17の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題18</strong><br>この問題は、あとから処方箋形式の実践問題へ差し替えてください。<br><br><table class="prescription-table"><tr><td>Rp1)</td><td>薬剤A</td></tr><tr><td>Rp2)</td><td>薬剤B</td></tr></table><br>自家製剤加算を算定できるか？
`,
    answer: true,
    explanation: `
問題18の解説をここへ入力してください。<br><br><strong>根拠：</strong><br>通知・疑義解釈・審査情報提供事例・添付文書などを記載してください。
`
  },
  {
    text: `
<strong>問題19</strong><br> <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>Rp1)</td></tr>
    <tr><td>セレコキシブ錠100㎎</td><td>2錠</td></tr>
<tr><td>レバミピド錠100㎎</td><td>2錠</td></tr>
<tr><td>エブランチルCp15㎎</td><td>2cp</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
<tr><td>Rp2)</td></tr>
<tr><td>マグミット錠330㎎</td><td>3錠</td><td>1日3回</td><td>毎食後</td><td>14日分</td></tr>
<tr><td>Rp3)</td></tr>
<tr><td>ミルタザピン錠15㎎</td><td>0.5錠</td></tr>
<tr><td>フルニトラゼパム錠1㎎</td><td>1錠</td><td>1日1回</td><td>就寝前</td><td>14日分</td></tr>
</table>
<br>
  Drより一包化の指示あり。ミルタザピンの自家製剤加算は算定可能？
`,
    answer: true,
    explanation: `
算定できます。<br><br>一包化と自家製剤加算（あるいは計量混合調剤加算）は、同一の「剤」に対して同時に算定することはできません。<br>
      しかし、一包化の対象外となる別の「剤」に対して自家製剤加算の要件を満たす処方がある場合は、それぞれの条件を満たせば併せて算定することが可能です。<br>
      この問題においては「朝夕食後」「毎食後」は一包化対象、「就寝前」は一包化対象外となるので、自家製剤加算が算定できます。
`
  },
  {
    text: `
<strong>問題20</strong><br><table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>Rp1)</td></tr>
    <tr><td>セレコキシブ錠100㎎</td><td>2錠</td></tr>
<tr><td>レバミピド錠100㎎</td><td>2錠</td></tr>
<tr><td>エブランチルCp15㎎</td><td>2cp</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
<tr><td>Rp2)</td></tr>
<tr><td>マグミット錠330㎎</td><td>3錠</td><td>1日3回</td><td>毎食後</td><td>14日分</td></tr>
<tr><td>Rp3)</td></tr>
<tr><td>ミルタザピン錠15㎎</td><td>0.5錠</td></tr>
<tr><td>ゾルピデム錠10㎎</td><td>1錠</td></tr>
<tr><td>フルニトラゼパム錠1㎎</td><td>1錠</td><td>1日1回</td><td>就寝前</td><td>14日分</td></tr>
</table>
<br>
  Drより一包化の指示あり。ミルタザピンの自家製剤加算は算定可能？
`,
    answer: false,
    explanation: `
算定できません。<br><br>一包化と自家製剤加算（あるいは計量混合調剤加算）は、同一の「剤」に対して同時に算定することはできません。<br>
      しかし、一包化の対象外となる別の「剤」に対して自家製剤加算の要件を満たす処方がある場合は、それぞれの条件を満たせば併せて算定することが可能です。<br>
      この問題においては「朝夕食後」「毎食後」「就寝前」すべてにおいて一包化対象となるので、自家製剤加算は算定できません。
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
