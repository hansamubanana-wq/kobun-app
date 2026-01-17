// ==========================================
// 1. データ定義
// ==========================================

// --- 古文助動詞データ ---
// （※中身はあなたの手元のものをそのまま使ってください。ここでは省略表示します）
const verbData = [
  { basic: "る", connection: "未然形", conjugation: ["れ", "れ", "る", "るる", "るれ", "れよ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "らる", connection: "未然形", conjugation: ["られ", "られ", "らる", "らるる", "らるれ", "られよ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "す", connection: "未然形", conjugation: ["せ", "せ", "す", "する", "すれ", "せよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "さす", connection: "未然形", conjugation: ["させ", "させ", "さす", "さする", "さすれ", "させよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "しむ", connection: "未然形", conjugation: ["しめ", "しめ", "しむ", "しむる", "しむれ", "しめよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "ず", connection: "未然形", conjugation: ["○", "ず", "ず", "ぬ", "ね", "○"], type: "特殊型", meaning: "打消" },
  { basic: "ず", connection: "未然形", conjugation: ["ざら", "ざり", "○", "ざる", "ざれ", "ざれ"], type: "特殊型", meaning: "打消" },
  { basic: "む", connection: "未然形", conjugation: ["○", "○", "む", "む", "め", "○"], type: "四段型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "むず", connection: "未然形", conjugation: ["○", "○", "むず", "むずる", "むずれ", "○"], type: "サ変型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "まし", connection: "未然形", conjugation: ["ませ/ましか", "○", "まし", "まし", "ましか", "○"], type: "特殊型", meaning: "反実仮想・ためらいの意志・推量" },
  { basic: "じ", connection: "未然形", conjugation: ["○", "○", "じ", "じ", "じ", "○"], type: "無変化型", meaning: "打消推量・打消意志" },
  { basic: "まほし", connection: "未然形", conjugation: ["○", "まほしく", "まほし", "まほしき", "まほしけれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "まほし", connection: "未然形", conjugation: ["まほしから", "まほしかり", "○", "まほしかる", "○", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "き", connection: "連用形", conjugation: ["せ", "○", "き", "し", "しか", "○"], type: "特殊型", meaning: "体験過去" },
  { basic: "けり", connection: "連用形", conjugation: ["けら", "○", "けり", "ける", "けれ", "○"], type: "ラ変型", meaning: "伝聞過去・詠嘆" },
  { basic: "つ", connection: "連用形", conjugation: ["て", "て", "つ", "つる", "つれ", "てよ"], type: "下二段型", meaning: "完了・強意" },
  { basic: "ぬ", connection: "連用形", conjugation: ["な", "に", "ぬ", "ぬる", "ぬれ", "ね"], type: "ナ変型", meaning: "完了・強意" },
  { basic: "たり", connection: "連用形", conjugation: ["たら", "たり", "たり", "たる", "たれ", "たれ"], type: "ラ変型", meaning: "完了・存続" },
  { basic: "たし", connection: "連用形", conjugation: ["○", "たく", "たし", "たき", "たけれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "たし", connection: "連用形", conjugation: ["たから", "たかり", "○", "たかる", "○", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "けむ", connection: "連用形", conjugation: ["○", "○", "けむ", "けむ", "けめ", "○"], type: "四段型", meaning: "過去推量・過去の原因推量・過去の伝聞婉曲" },
  { basic: "らむ", connection: "終止形", conjugation: ["○", "○", "らむ", "らむ", "らめ", "○"], type: "四段型", meaning: "現在推量・現在の原因推量・現在の伝聞・現在の婉曲" },
  { basic: "めり", connection: "終止形", conjugation: ["○", "めり", "めり", "める", "めれ", "○"], type: "ラ変型", meaning: "推定・婉曲" },
  { basic: "らし", connection: "終止形", conjugation: ["○", "○", "らし", "らし", "らし", "○"], type: "無変化型", meaning: "推定" },
  { basic: "べし", connection: "終止形", conjugation: ["○", "べく", "べし", "べき", "べけれ", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },
  { basic: "べし", connection: "終止形", conjugation: ["べから", "べかり", "○", "べかる", "○", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },
  { basic: "まじ", connection: "終止形", conjugation: ["○", "まじく", "まじ", "まじき", "まじけれ", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },
  { basic: "まじ", connection: "終止形", conjugation: ["まじから", "まじかり", "○", "まじかる", "○", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },
  { basic: "なり", connection: "終止形", conjugation: ["○", "なり", "なり", "なる", "なれ", "○"], type: "ラ変型", meaning: "伝聞・推定" },
  { basic: "なり", connection: "体言・連体形", conjugation: ["なら", "なり/に", "なり", "なる", "なれ", "なれ"], type: "形容動詞型", meaning: "断定・存在" },
  { basic: "たり", connection: "体言", conjugation: ["たら", "たり/と", "たり", "たる", "たれ", "たれ"], type: "形容動詞型", meaning: "断定" },
  { basic: "ごとし", connection: "体言・連体形", conjugation: ["○", "ごとく", "ごとし", "ごとき", "○", "○"], type: "形容詞型", meaning: "比況" },
  { basic: "り", connection: "サ変の未然・四段の已然", conjugation: ["ら", "り", "り", "る", "れ", "れ"], type: "ラ変型", meaning: "完了・存続" }
];

// --- 理科：元素データ ---
const scienceData = [
    { num: 1, symbol: "H", name: "水素", note: "すい" },
    { num: 2, symbol: "He", name: "ヘリウム", note: "へい" },
    { num: 3, symbol: "Li", name: "リチウム", note: "りー" },
    { num: 4, symbol: "Be", name: "ベリリウム", note: "べ" },
    { num: 5, symbol: "B", name: "ホウ素", note: "ぼ" },
    { num: 6, symbol: "C", name: "炭素", note: "く" },
    { num: 7, symbol: "N", name: "窒素", note: "の" },
    { num: 8, symbol: "O", name: "酸素", note: "の" },
    { num: 9, symbol: "F", name: "フッ素", note: "ふ" },
    { num: 10, symbol: "Ne", name: "ネオン", note: "ね" },
    { num: 11, symbol: "Na", name: "ナトリウム", note: "なな" },
    { num: 12, symbol: "Mg", name: "マグネシウム", note: "まが" },
    { num: 13, symbol: "Al", name: "アルミニウム", note: "り" },
    { num: 14, symbol: "Si", name: "ケイ素", note: "しっ" },
    { num: 15, symbol: "P", name: "リン", note: "ぷ" },
    { num: 16, symbol: "S", name: "硫黄", note: "す" },
    { num: 17, symbol: "Cl", name: "塩素", note: "く" },
    { num: 18, symbol: "Ar", name: "アルゴン", note: "らー" },
    { num: 19, symbol: "K", name: "カリウム", note: "く" },
    { num: 20, symbol: "Ca", name: "カルシウム", note: "か" }
];

// --- 英語：不規則動詞データ（新規追加） ---
const englishData = [
    // A-A-A型
    { type: "A-A-A型", base: "cut", past: "cut", participle: "cut", meaning: "切る" },
    { type: "A-A-A型", base: "put", past: "put", participle: "put", meaning: "置く" },
    { type: "A-A-A型", base: "read", past: "read", participle: "read", meaning: "読む(発音注意)" },
    { type: "A-A-A型", base: "set", past: "set", participle: "set", meaning: "置く・設置する" },
    
    // A-B-B型
    { type: "A-B-B型", base: "bring", past: "brought", participle: "brought", meaning: "持ってくる" },
    { type: "A-B-B型", base: "buy", past: "bought", participle: "bought", meaning: "買う" },
    { type: "A-B-B型", base: "catch", past: "caught", participle: "caught", meaning: "捕まえる" },
    { type: "A-B-B型", base: "teach", past: "taught", participle: "taught", meaning: "教える" },
    { type: "A-B-B型", base: "think", past: "thought", participle: "thought", meaning: "思う" },
    { type: "A-B-B型", base: "feel", past: "felt", participle: "felt", meaning: "感じる" },
    { type: "A-B-B型", base: "find", past: "found", participle: "found", meaning: "見つける" },
    { type: "A-B-B型", base: "have", past: "had", participle: "had", meaning: "持っている" },
    { type: "A-B-B型", base: "hear", past: "heard", participle: "heard", meaning: "聞く" },
    { type: "A-B-B型", base: "hold", past: "held", participle: "held", meaning: "握る・開催する" },
    { type: "A-B-B型", base: "keep", past: "kept", participle: "kept", meaning: "保つ" },
    { type: "A-B-B型", base: "make", past: "made", participle: "made", meaning: "作る" },
    { type: "A-B-B型", base: "meet", past: "met", participle: "met", meaning: "会う" },
    { type: "A-B-B型", base: "say", past: "said", participle: "said", meaning: "言う" },
    { type: "A-B-B型", base: "sell", past: "sold", participle: "sold", meaning: "売る" },
    { type: "A-B-B型", base: "send", past: "sent", participle: "sent", meaning: "送る" },
    { type: "A-B-B型", base: "stand", past: "stood", participle: "stood", meaning: "立つ" },
    { type: "A-B-B型", base: "tell", past: "told", participle: "told", meaning: "話す" },

    // A-B-C型
    { type: "A-B-C型", base: "be", past: "was/were", participle: "been", meaning: "〜である" },
    { type: "A-B-C型", base: "begin", past: "began", participle: "begun", meaning: "始める" },
    { type: "A-B-C型", base: "break", past: "broke", participle: "broken", meaning: "壊す" },
    { type: "A-B-C型", base: "choose", past: "chose", participle: "chosen", meaning: "選ぶ" },
    { type: "A-B-C型", base: "do", past: "did", participle: "done", meaning: "する" },
    { type: "A-B-C型", base: "draw", past: "drew", participle: "drawn", meaning: "描く" },
    { type: "A-B-C型", base: "drink", past: "drank", participle: "drunk", meaning: "飲む" },
    { type: "A-B-C型", base: "drive", past: "drove", participle: "driven", meaning: "運転する" },
    { type: "A-B-C型", base: "eat", past: "ate", participle: "eaten", meaning: "食べる" },
    { type: "A-B-C型", base: "give", past: "gave", participle: "given", meaning: "与える" },
    { type: "A-B-C型", base: "go", past: "went", participle: "gone", meaning: "行く" },
    { type: "A-B-C型", base: "know", past: "knew", participle: "known", meaning: "知っている" },
    { type: "A-B-C型", base: "see", past: "saw", participle: "seen", meaning: "見る" },
    { type: "A-B-C型", base: "speak", past: "spoke", participle: "spoken", meaning: "話す" },
    { type: "A-B-C型", base: "take", past: "took", participle: "taken", meaning: "取る" },
    { type: "A-B-C型", base: "write", past: "wrote", participle: "written", meaning: "書く" },

    // A-B-A型
    { type: "A-B-A型", base: "become", past: "became", participle: "become", meaning: "〜になる" },
    { type: "A-B-A型", base: "come", past: "came", participle: "come", meaning: "来る" },
    { type: "A-B-A型", base: "run", past: "ran", participle: "run", meaning: "走る" }
];


// ==========================================
// 2. 状態管理
// ==========================================
let currentSubject = ""; // "kobun", "science", "english"
let isTestMode = false;

// ==========================================
// 3. レンダリング関数
// ==========================================

function renderTable() {
    const tableHead = document.querySelector("#app-table thead");
    const tableBody = document.querySelector("#app-table tbody");
    
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";

    if (currentSubject === "kobun") {
        renderKobun(tableHead, tableBody);
    } else if (currentSubject === "science") {
        renderScience(tableHead, tableBody);
    } else if (currentSubject === "english") {
        renderEnglish(tableHead, tableBody);
    }
}

// --- 古文の描画 ---
function renderKobun(thead, tbody) {
    thead.innerHTML = `
        <tr>
            <th rowspan="2">接続</th>
            <th rowspan="2">基本形</th>
            <th colspan="6">活用形</th>
            <th rowspan="2">活用の型</th>
            <th rowspan="2">おもな意味</th>
        </tr>
        <tr class="subheader">
            <th>未然形</th>
            <th>連用形</th>
            <th>終止形</th>
            <th>連体形</th>
            <th>已然形</th>
            <th>命令形</th>
        </tr>
    `;

    let prevConnect = null, cellConnect = null;
    let prevBasic = null, cellBasic = null;
    let prevType = null, cellType = null;
    let prevMeaning = null, cellMeaning = null;

    verbData.forEach((verb, rowIndex) => {
        const tr = document.createElement("tr");

        if (verb.connection !== prevConnect) {
            const td = createTd(verb.connection, { rowspan: 1, bgColor: "#fff5f5", bold: true });
            tr.appendChild(td);
            cellConnect = td;
            prevConnect = verb.connection;
        } else if (cellConnect) {
            cellConnect.rowSpan++;
        }

        if (verb.basic !== prevBasic || verb.connection !== prevConnect || verb.type !== prevType) { 
            const td = createTd(verb.basic, { rowspan: 1, color: "#b71c1c", bold: true });
            tr.appendChild(td);
            cellBasic = td;
            prevBasic = verb.basic;
        } else if (cellBasic) {
            cellBasic.rowSpan++;
        }

        verb.conjugation.forEach((form, colIndex) => {
            const td = createMemoryCell(form, rowIndex, colIndex);
            tr.appendChild(td);
        });

        if (verb.type !== prevType || verb.basic !== prevBasic || verb.connection !== prevConnect) {
            const td = createTd(verb.type, { rowspan: 1, fontSize: "0.85rem" });
            tr.appendChild(td);
            cellType = td;
            prevType = verb.type;
        } else if (cellType) {
            cellType.rowSpan++;
        }

        if (verb.meaning !== prevMeaning || verb.basic !== prevBasic || verb.connection !== prevConnect) {
            const td = createTd(verb.meaning, { rowspan: 1, fontSize: "0.85rem" });
            tr.appendChild(td);
            cellMeaning = td;
            prevMeaning = verb.meaning;
        } else if (cellMeaning) {
            cellMeaning.rowSpan++;
        }

        tbody.appendChild(tr);
    });
}

// --- 理科の描画 ---
function renderScience(thead, tbody) {
    thead.innerHTML = `
        <tr>
            <th>番号</th>
            <th>記号</th>
            <th>元素名</th>
            <th>覚え方</th>
        </tr>
    `;

    scienceData.forEach((elem, rowIndex) => {
        const tr = document.createElement("tr");
        tr.appendChild(createTd(elem.num));
        tr.appendChild(createMemoryCell(elem.symbol, rowIndex, 0));
        tr.appendChild(createMemoryCell(elem.name, rowIndex, 1));
        tr.appendChild(createTd(elem.note, { fontSize: "0.85rem", color: "#666" }));
        tbody.appendChild(tr);
    });
}

// --- 英語の描画（新規） ---
function renderEnglish(thead, tbody) {
    thead.innerHTML = `
        <tr>
            <th>変化の型</th>
            <th>原形</th>
            <th>過去形</th>
            <th>過去分詞</th>
            <th>意味</th>
        </tr>
    `;

    let prevType = null, cellType = null;

    englishData.forEach((word, rowIndex) => {
        const tr = document.createElement("tr");

        // 型（A-B-Bなど）を結合表示
        if (word.type !== prevType) {
            const td = createTd(word.type, { rowspan: 1, bgColor: "#e3f2fd", bold: true });
            tr.appendChild(td);
            cellType = td;
            prevType = word.type;
        } else if (cellType) {
            cellType.rowSpan++;
        }

        // 原形
        tr.appendChild(createTd(word.base, { bold: true }));

        // 過去形・過去分詞（暗記対象）
        tr.appendChild(createMemoryCell(word.past, rowIndex, 0));
        tr.appendChild(createMemoryCell(word.participle, rowIndex, 1));

        // 意味
        tr.appendChild(createTd(word.meaning, { fontSize: "0.9rem" }));

        tbody.appendChild(tr);
    });
}

// ==========================================
// 4. ヘルパー関数
// ==========================================

function createTd(text, options = {}) {
    const td = document.createElement("td");
    td.textContent = text;
    if (options.rowspan) td.rowSpan = options.rowspan;
    if (options.bgColor) td.style.backgroundColor = options.bgColor;
    if (options.color) td.style.color = options.color;
    if (options.bold) td.style.fontWeight = "bold";
    if (options.fontSize) td.style.fontSize = options.fontSize;
    td.style.verticalAlign = "middle";
    return td;
}

function createMemoryCell(answerText, row, col) {
    const td = document.createElement("td");
    td.classList.add("memory-cell");

    if (isTestMode) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("test-input");
        input.dataset.answer = answerText;
        input.dataset.row = row;
        input.dataset.col = col;

        input.addEventListener("keydown", (e) => handleArrowKey(e, row, col));
        td.appendChild(input);
        td.style.cursor = "default";
    } else {
        td.textContent = answerText;
        td.addEventListener("click", () => {
            td.classList.toggle("hidden");
        });
    }
    return td;
}

// ==========================================
// 5. 機能ロジック
// ==========================================

function handleArrowKey(e, currentRow, currentCol) {
    let targetRow = currentRow;
    let targetCol = currentCol;

    switch(e.key) {
        case "ArrowUp": targetRow--; break;
        case "ArrowDown": case "Enter": targetRow++; break;
        case "ArrowLeft": targetCol--; break;
        case "ArrowRight": targetCol++; break;
        default: return; 
    }

    const targetInput = document.querySelector(`input[data-row="${targetRow}"][data-col="${targetCol}"]`);
    if (targetInput) {
        e.preventDefault();
        targetInput.focus();
        targetInput.select();
    }
}

function checkAnswers() {
    const inputs = document.querySelectorAll(".test-input");
    inputs.forEach(input => {
        const userVal = input.value.trim().toLowerCase();
        const correctRaw = input.dataset.answer;
        const correctOptions = correctRaw.split("/").map(s => s.replace(/[()]/g, "").toLowerCase());

        let isCorrect = false;
        if (correctRaw === "○") {
            if (userVal === "" || userVal === "○" || userVal === "まる") isCorrect = true;
        } else {
            if (correctOptions.includes(userVal)) isCorrect = true;
            if (input.value.trim() === "") isCorrect = false; 
        }

        input.classList.remove("correct", "incorrect");
        if (input.value.trim() !== "") { 
            if (isCorrect) input.classList.add("correct");
            else input.classList.add("incorrect");
        }
    });
}

// ==========================================
// 6. 画面遷移とイベント設定
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const menuScreen = document.getElementById("menu-screen");
    const gameScreen = document.getElementById("game-screen");
    const subjectTitle = document.getElementById("subject-title");

    // メニュー：古文
    document.getElementById("btn-select-kobun").addEventListener("click", () => {
        currentSubject = "kobun";
        subjectTitle.textContent = "❖ 古文助動詞一覧 ❖";
        subjectTitle.style.color = "#b71c1c";
        menuScreen.style.display = "none";
        gameScreen.style.display = "block";
        isTestMode = false;
        renderTable();
        updateControlsUI();
    });

    // メニュー：理科
    document.getElementById("btn-select-science").addEventListener("click", () => {
        currentSubject = "science";
        subjectTitle.textContent = "❖ 元素周期表 (1-20) ❖";
        subjectTitle.style.color = "#2e7d32";
        menuScreen.style.display = "none";
        gameScreen.style.display = "block";
        isTestMode = false;
        renderTable();
        updateControlsUI();
    });

    // メニュー：英語（新規）
    document.getElementById("btn-select-english").addEventListener("click", () => {
        currentSubject = "english";
        subjectTitle.textContent = "❖ 英語 不規則動詞 ❖";
        subjectTitle.style.color = "#1565c0"; // 青系
        menuScreen.style.display = "none";
        gameScreen.style.display = "block";
        isTestMode = false;
        renderTable();
        updateControlsUI();
    });

    // 戻るボタン
    document.getElementById("btn-back-menu").addEventListener("click", () => {
        gameScreen.style.display = "none";
        menuScreen.style.display = "block";
        isTestMode = false; 
    });

    const viewControls = document.getElementById("mode-view-controls");
    const testControls = document.getElementById("mode-test-controls");
    const instruction = document.getElementById("instruction-text");

    function updateControlsUI() {
        if (isTestMode) {
            viewControls.style.display = "none";
            testControls.style.display = "flex";
            instruction.textContent = "答えを入力して「Ctrl + Enter」で答え合わせ";
            instruction.style.color = "#d32f2f";
            instruction.style.fontWeight = "bold";
        } else {
            viewControls.style.display = "flex";
            testControls.style.display = "none";
            instruction.textContent = "マスをタップして答え合わせができます";
            instruction.style.color = "#888";
            instruction.style.fontWeight = "normal";
        }
    }

    document.getElementById("btn-hide-all").addEventListener("click", () => {
        document.querySelectorAll(".memory-cell").forEach(c => c.classList.add("hidden"));
    });

    document.getElementById("btn-show-all").addEventListener("click", () => {
        document.querySelectorAll(".memory-cell").forEach(c => c.classList.remove("hidden"));
    });

    document.getElementById("btn-random").addEventListener("click", () => {
        document.querySelectorAll(".memory-cell").forEach(c => {
            if (Math.random() > 0.5) c.classList.add("hidden");
            else c.classList.remove("hidden");
        });
    });

    document.getElementById("btn-start-test").addEventListener("click", () => {
        isTestMode = true;
        renderTable();
        updateControlsUI();
    });

    document.getElementById("btn-check").addEventListener("click", checkAnswers);

    document.getElementById("btn-retry").addEventListener("click", () => {
        document.querySelectorAll(".test-input").forEach(input => {
            input.value = "";
            input.classList.remove("correct", "incorrect");
        });
    });

    document.getElementById("btn-end-test").addEventListener("click", () => {
        isTestMode = false;
        renderTable();
        updateControlsUI();
    });

    document.addEventListener("keydown", (e) => {
        if (isTestMode && (e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            checkAnswers();
        }
    });
});
