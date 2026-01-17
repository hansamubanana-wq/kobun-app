// ==========================================
// 1. データ定義
// ==========================================

// --- 古文助動詞データ ---
const verbData = [
  // ... (省略なしで前回のデータをそのまま使いますが、長いのでここには主要部分だけ書きます。実際は前回のverbDataをそのまま残してください) ...
  // ★前回の verbData の中身をここにそのまま置いてください！
  // もし消してしまった場合は、前回のコードから `const verbData = [...]` の部分だけコピーしてきてください。
  // ここでは容量省略のため中略しますが、あなたは前回のデータをそのまま使ってください。
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

// --- 理科：元素データ（原子番号1〜20） ---
const scienceData = [
    { num: 1, symbol: "H", name: "水素", note: "すい" },
    { num: 2, symbol: "He", name: "ヘリウム", note: "へー" },
    { num: 3, symbol: "Li", name: "リチウム", note: "り" },
    { num: 4, symbol: "Be", name: "ベリリウム", note: "べ" },
    { num: 5, symbol: "B", name: "ホウ素", note: "ぼ" },
    { num: 6, symbol: "C", name: "炭素", note: "く" },
    { num: 7, symbol: "N", name: "窒素", note: "の" },
    { num: 8, symbol: "O", name: "酸素", note: "ふ" },
    { num: 9, symbol: "F", name: "フッ素", note: "ね" },
    { num: 10, symbol: "Ne", name: "ネオン", note: "の" },
    { num: 11, symbol: "Na", name: "ナトリウム", note: "な" },
    { num: 12, symbol: "Mg", name: "マグネシウム", note: "ま" },
    { num: 13, symbol: "Al", name: "アルミニウム", note: "ある" },
    { num: 14, symbol: "Si", name: "ケイ素", note: "しっ" },
    { num: 15, symbol: "P", name: "リン", note: "ぷ" },
    { num: 16, symbol: "S", name: "硫黄", note: "す" },
    { num: 17, symbol: "Cl", name: "塩素", note: "くら" },
    { num: 18, symbol: "Ar", name: "アルゴン", note: "ー" },
    { num: 19, symbol: "K", name: "カリウム", note: "く" },
    { num: 20, symbol: "Ca", name: "カルシウム", note: "か" }
];


// ==========================================
// 2. 状態管理
// ==========================================
let currentSubject = ""; // "kobun" または "science"
let isTestMode = false;

// ==========================================
// 3. レンダリング関数
// ==========================================

// メインの描画関数
function renderTable() {
    const tableHead = document.querySelector("#app-table thead");
    const tableBody = document.querySelector("#app-table tbody");
    
    tableHead.innerHTML = ""; // クリア
    tableBody.innerHTML = ""; // クリア

    if (currentSubject === "kobun") {
        renderKobun(tableHead, tableBody);
    } else if (currentSubject === "science") {
        renderScience(tableHead, tableBody);
    }
}

// --- 古文の描画 ---
function renderKobun(thead, tbody) {
    // ヘッダー作成
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

    // データ描画ロジック（前回のlogicを流用）
    let prevConnect = null, cellConnect = null;
    let prevBasic = null, cellBasic = null;
    let prevType = null, cellType = null;
    let prevMeaning = null, cellMeaning = null;

    verbData.forEach((verb, rowIndex) => {
        const tr = document.createElement("tr");

        // 1. 接続
        if (verb.connection !== prevConnect) {
            const td = createTd(verb.connection, { rowspan: 1, bgColor: "#fff5f5", bold: true });
            tr.appendChild(td);
            cellConnect = td;
            prevConnect = verb.connection;
        } else if (cellConnect) {
            cellConnect.rowSpan++;
        }

        // 2. 基本形
        if (verb.basic !== prevBasic || verb.connection !== prevConnect || verb.type !== prevType) { 
            const td = createTd(verb.basic, { rowspan: 1, color: "#b71c1c", bold: true });
            tr.appendChild(td);
            cellBasic = td;
            prevBasic = verb.basic;
        } else if (cellBasic) {
            cellBasic.rowSpan++;
        }

        // 3. 活用形（暗記対象）
        verb.conjugation.forEach((form, colIndex) => {
            const td = createMemoryCell(form, rowIndex, colIndex);
            tr.appendChild(td);
        });

        // 4. 型
        if (verb.type !== prevType || verb.basic !== prevBasic || verb.connection !== prevConnect) {
            const td = createTd(verb.type, { rowspan: 1, fontSize: "0.85rem" });
            tr.appendChild(td);
            cellType = td;
            prevType = verb.type;
        } else if (cellType) {
            cellType.rowSpan++;
        }

        // 5. 意味
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
    // ヘッダー作成
    thead.innerHTML = `
        <tr>
            <th>番号</th>
            <th>記号</th>
            <th>元素名</th>
            <th>覚え方など</th>
        </tr>
    `;

    scienceData.forEach((elem, rowIndex) => {
        const tr = document.createElement("tr");

        // 番号
        tr.appendChild(createTd(elem.num));

        // 記号（暗記対象：colIndex=0とする）
        tr.appendChild(createMemoryCell(elem.symbol, rowIndex, 0));

        // 元素名（暗記対象：colIndex=1とする）
        tr.appendChild(createMemoryCell(elem.name, rowIndex, 1));

        // 備考
        tr.appendChild(createTd(elem.note, { fontSize: "0.85rem", color: "#666" }));

        tbody.appendChild(tr);
    });
}

// ==========================================
// 4. ヘルパー関数 (セル作成の簡略化)
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

// 暗記用セル（隠す・入力テスト）を作る関数
function createMemoryCell(answerText, row, col) {
    const td = document.createElement("td");
    td.classList.add("memory-cell"); // class名変更: conjugation-cell -> memory-cell

    if (isTestMode) {
        // テストモード：入力欄
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
        // 通常モード：クリックで隠す
        td.textContent = answerText;
        td.addEventListener("click", () => {
            td.classList.toggle("hidden");
        });
    }
    return td;
}

// ==========================================
// 5. 機能ロジック (矢印移動・答え合わせ)
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

    // 移動先のinputを探す
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
        const userVal = input.value.trim().toLowerCase(); // 大文字小文字を区別しない(元素記号のため)
        const correctRaw = input.dataset.answer;
        const correctOptions = correctRaw.split("/").map(s => s.replace(/[()]/g, "").toLowerCase());

        let isCorrect = false;
        if (correctRaw === "○") {
            if (userVal === "" || userVal === "○" || userVal === "まる") isCorrect = true;
        } else {
            // 完全一致または選択肢に含まれるか
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

    // メニュー：古文を選ぶ
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

    // メニュー：理科を選ぶ
    document.getElementById("btn-select-science").addEventListener("click", () => {
        currentSubject = "science";
        subjectTitle.textContent = "❖ 元素周期表 (1-20) ❖";
        subjectTitle.style.color = "#2e7d32"; // 緑系
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
        isTestMode = false; // モードリセット
    });

    // --- コントロールボタン ---
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

    // ショートカットキー
    document.addEventListener("keydown", (e) => {
        if (isTestMode && (e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            checkAnswers();
        }
    });
});
