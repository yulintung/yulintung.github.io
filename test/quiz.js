// 獲取 HTML 元素
const quizContainer = document.getElementById('choices-container');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const scoreContainer = document.getElementById('score-button');

// 儲存目前題號和總題數
let currentQuestion = 0;
let totalQuestions = 0;

// 儲存目前得分和總分
let currentScore = 0;
let totalScore = 0;

// 儲存單字資料
let wordData = [];

// 載入單字資料
function loadWords(callback) {
    // 使用 XMLHttpRequest 讀取 JSON 檔案
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', 'https://yulintung.github.io/word_choice/words_1_10.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            wordData = json;
            totalQuestions = wordData.length;
            callback();
        }
    };
    xhr.send(null);
}

// 顯示問題
function showQuestion() {
    // 隨機選擇一個單字
    const word = wordData[currentQuestion];
    const kor = word.kor;
    const correctAnswer = word.cht;

    // 隨機選擇其他三個選項
    const choices = [];
    choices.push(correctAnswer);
    while (choices.length < 4) {
        const index = Math.floor(Math.random() * wordData.length);
        const choice = wordData[index].cht;
        if (choice !== correctAnswer && !choices.includes(choice)) {
            choices.push(choice);
        }
    }

    // 洗牌選項
    choices.sort(() => Math.random() - 0.5);

    // 產生 HTML
    const questionHTML = `
<div class="question">${kor}</div>
<div class="choices">
    <div class="choice">${choices[0]}</div>
    <div class="choice">${choices[1]}</div>
    <div class="choice">${choices[2]}</div>
    <div class="choice">${choices[3]}</div>
</div>
`;
    quizContainer.innerHTML = questionHTML;

    // 啟用提交按鈕
    submitButton.disabled = false;
}

// 顯示結果
function showResult() {
    // 隱藏提交按鈕和選項
    submitButton.classList.add('hidden');
    document.querySelectorAll('.choice').forEach(choice => {
        choice.classList.add('disabled');
    });

    // 顯示得分和重新開始按鈕
    scoreContainer.innerHTML = `得分: ${currentScore} / ${totalScore}`;
    restartButton.classList.remove('hidden');
}

// 重新開始測驗
function restartQuiz() {
    // 重置題號、得分和按鈕狀態
    currentQuestion = 0;
    currentScore = 0;
    submitButton.disabled = true;
    submitButton.classList.remove('hidden');
    document.querySelectorAll('.choice').forEach(choice => {
        choice.classList.remove('disabled');
    });

    // 重新顯示第一個問題
    showQuestion();

    // 隱藏得分和重新開始按鈕
    scoreContainer.innerHTML = '';
    restartButton.classList.add('hidden');

}

// 初始化測驗
function initQuiz() {
    // 載入單字資料，並顯示第一個問題
    loadWords(showQuestion);
    // 為提交和重新開始按鈕加上事件監聽器
    console.log(submitButton);
    submitButton.addEventListener('click', checkAnswer);
    restartButton.addEventListener('click', restartQuiz);

}

// 檢查答案
function checkAnswer(event) {
    // 禁止再次點擊
    event.target.disabled = true;
    // 判斷答案是否正確
    const selectedChoice = event.target.closest('.choice');
    const answer = selectedChoice.textContent;
    const word = wordData[currentQuestion];
    const correctAnswer = word.cht;
    if (answer === correctAnswer) {
        currentScore++;
    }
    totalScore++;

    // 標記正確答案和所選答案
    document.querySelectorAll('.choice').forEach(choice => {
        if (choice.textContent === correctAnswer) {
            choice.classList.add('correct');
        }
        if (choice !== selectedChoice && choice.textContent === answer) {
            choice.classList.add('incorrect');
        }
        choice.classList.add('disabled');
    });

    // 顯示下一個問題或顯示結果
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        setTimeout(showQuestion, 1000);
    } else {
        setTimeout(showResult, 1000);
    }

}

// 啟動測驗
initQuiz();