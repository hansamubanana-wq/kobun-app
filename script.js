// 助動詞の完全データリスト
const verbData = [
  // --- る・らる・す・さす・しむ ---
  { basic: "る", connection: "未然形", conjugation: ["れ", "れ", "る", "るる", "るれ", "れよ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "らる", connection: "未然形", conjugation: ["られ", "られ", "らる", "らるる", "らるれ", "られよ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "す", connection: "未然形", conjugation: ["せ", "せ", "す", "する", "すれ", "せよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "さす", connection: "未然形", conjugation: ["させ", "させ", "さす", "さする", "さすれ", "させよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "しむ", connection: "未然形", conjugation: ["しめ", "しめ", "しむ", "しむる", "しむれ", "しめよ"], type: "下二段型", meaning: "使役・尊敬" },

  // --- ず ---
  { basic: "ず", connection: "未然形", conjugation: ["○", "ず", "ず", "ぬ", "ね", "○"], type: "特殊型", meaning: "打消" },
  { basic: "ず", connection: "未然形", conjugation: ["ざら", "ざり", "○", "ざる", "ざれ", "ざれ"], type: "特殊型", meaning: "打消" },

  // --- む・むず・まし・じ ---
  { basic: "む", connection: "未然形", conjugation: ["○", "○", "む", "む", "め", "○"], type: "四段型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "むず", connection: "未然形", conjugation: ["○", "○", "むず", "むずる", "むずれ", "○"], type: "サ変型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "まし", connection: "未然形", conjugation: ["ませ/ましか", "○", "まし", "まし", "ましか", "○"], type: "特殊型", meaning: "反実仮想・ためらいの意志・推量" },
  { basic: "じ", connection: "未然形", conjugation: ["○", "○", "じ", "じ", "じ", "○"], type: "無変化型", meaning: "打消推量・打消意志" },

  // --- まほし ---
  { basic: "まほし", connection: "未然形", conjugation: ["○", "まほしく", "まほし", "まほしき", "まほしけれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "まほし", connection: "未然形", conjugation: ["まほしから", "まほしかり", "○", "まほしかる", "○", "○"], type: "形容詞型", meaning: "希望" },

  // --- き・けり・つ・ぬ・たり ---
  { basic: "き", connection: "連用形", conjugation: ["せ", "○", "き", "し", "しか", "○"], type: "特殊型", meaning: "体験過去" },
  { basic: "けり", connection: "連用形", conjugation: ["けら", "○", "けり", "ける", "けれ", "○"], type: "ラ変型", meaning: "伝聞過去・詠嘆" },
  { basic: "つ", connection: "連用形", conjugation: ["て", "て", "つ", "つる", "つれ", "てよ"], type: "下二段型", meaning: "完了・強意" },
  { basic: "ぬ", connection: "連用形", conjugation: ["な", "に", "ぬ", "ぬる", "ぬれ", "ね"], type: "ナ変型", meaning: "完了・強意" },
  { basic: "たり", connection: "連用形", conjugation: ["たら", "たり", "たり", "たる", "たれ", "たれ"], type: "ラ変型", meaning: "完了・存続" },

  // --- たし ---
  { basic: "たし", connection: "連用形", conjugation: ["○", "たく", "たし", "たき", "たけれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "たし", connection: "連用形", conjugation: ["たから", "たかり", "○", "たかる", "○", "○"], type: "形容詞型", meaning: "希望" },

  // --- けむ・らむ・めり・らし ---
  { basic: "けむ", connection: "連用形", conjugation: ["○", "○", "けむ", "けむ", "けめ", "○"], type: "四段型", meaning: "過去推量・過去の原因推量・過去の伝聞婉曲" },
  { basic: "らむ", connection: "終止形", conjugation: ["○", "○", "らむ", "らむ", "らめ", "○"], type: "四段型", meaning: "現在推量・現在の原因推量・現在の伝聞・現在の婉曲" },
  { basic: "めり", connection: "終止形", conjugation: ["○", "めり", "めり", "める", "めれ", "○"], type: "ラ変型", meaning: "推定・婉曲" },
  { basic: "らし", connection: "終止形", conjugation: ["○", "○", "らし", "らし", "らし", "○"], type: "無変化型", meaning: "推定" },

  // --- べし ---
  { basic: "べし", connection: "終止形", conjugation: ["○", "べく", "べし", "べき", "べけれ", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },
  { basic: "べし", connection: "終止形", conjugation: ["べから", "べかり", "○", "べかる", "○", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },

  // --- まじ ---
  { basic: "まじ", connection: "終止形", conjugation: ["○", "まじく", "まじ", "まじき", "まじけれ", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },
  { basic: "まじ", connection: "終止形", conjugation: ["まじから", "まじかり", "○", "まじかる", "○", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },

  // --- なり・たり・ごとし・り ---
  { basic: "なり", connection: "終止形", conjugation: ["○", "なり", "なり", "なる", "なれ", "○"], type: "ラ変型", meaning: "伝聞・推定" },
  { basic: "なり", connection: "体言・連体形", conjugation: ["なら", "なり/に", "なり", "なる", "なれ", "なれ"], type: "形容動詞型", meaning: "断定・存在" },
  { basic: "たり", connection: "体言", conjugation: ["たら", "たり/と", "たり", "たる", "たれ", "たれ"], type: "形容動詞型", meaning: "断定" },
  { basic: "ごとし", connection: "体言・連体形", conjugation: ["○", "ごとく", "ごとし", "ごとき", "○", "○"], type: "形容詞型", meaning: "比況" },
  { basic: "り", connection: "サ変の未然・四段の已然", conjugation: ["ら", "り", "り", "る", "れ", "れ"], type: "ラ変型", meaning: "完了・存続" }
];

let isTestMode = false;

function renderTable() {
  const tbody = document.querySelector("#verb-table tbody");
  tbody.innerHTML = "";

  let prevConnect = null, cellConnect = null;
  let prevBasic = null, cellBasic = null;
  let prevType = null, cellType = null;
  let prevMeaning = null, cellMeaning = null;

  verbData.forEach((verb, rowIndex) => { // rowIndexを追加
    const tr = document.createElement("tr");

    // 1. 接続
    if (verb.connection !== prevConnect) {
      const td = document.createElement("td");
      td.textContent = verb.connection;
      td.rowSpan = 1;
      td.style.verticalAlign = "middle";
      td.style.backgroundColor = "#fff5f5";
      td.style.fontWeight = "bold";
      tr.appendChild(td);
      cellConnect = td;
      prevConnect = verb.connection;
    } else {
      if (cellConnect) cellConnect.rowSpan++;
    }

    // 2. 基本形
    if (verb.basic !== prevBasic || verb.connection !== prevConnect || verb.type !== prevType) { 
      const td = document.createElement("td");
      td.textContent = verb.basic;
      td.rowSpan = 1;
      td.style.fontWeight = "bold";
      td.style.verticalAlign = "middle";
      td.style.color = "#b71c1c";
      tr.appendChild(td);
      cellBasic = td;
      prevBasic = verb.basic;
    } else {
      if (cellBasic) cellBasic.rowSpan++;
    }

    // 3. 活用形（矢印キー対応ロジック追加）
    verb.conjugation.forEach((form, colIndex) => { // colIndexを追加
      const td = document.createElement("td");
      td.classList.add("conjugation-cell"); 
      
      if (isTestMode) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("test-input");
        input.dataset.answer = form;
        
        // --- 矢印キー移動用の座標データをセット ---
        input.dataset.row = rowIndex;
        input.dataset.col = colIndex;

        // キー操作イベント
        input.addEventListener("keydown", (e) => {
          handleArrowKey(e, rowIndex, colIndex);
        });

        td.appendChild(input);
        td.style.cursor = "default";
      } else {
        td.textContent = form;
        td.addEventListener("click", () => {
          td.classList.toggle("hidden"); 
        });
      }
      
      tr.appendChild(td);
    });

    // 4. 型
    if (verb.type !== prevType || verb.basic !== prevBasic || verb.connection !== prevConnect) {
      const td = document.createElement("td");
      td.textContent = verb.type;
      td.rowSpan = 1;
      td.style.verticalAlign = "middle";
      td.style.fontSize = "0.85rem";
      tr.appendChild(td);
      cellType = td;
      prevType = verb.type;
    } else {
      if (cellType) cellType.rowSpan++;
    }

    // 5. 意味
    if (verb.meaning !== prevMeaning || verb.basic !== prevBasic || verb.connection !== prevConnect) {
      const td = document.createElement("td");
      td.textContent = verb.meaning;
      td.rowSpan = 1;
      td.style.verticalAlign = "middle";
      td.style.fontSize = "0.85rem";
      tr.appendChild(td);
      cellMeaning = td;
      prevMeaning = verb.meaning;
    } else {
      if (cellMeaning) cellMeaning.rowSpan++;
    }

    tbody.appendChild(tr);
  });
}

// 矢印キーで移動する関数
function handleArrowKey(e, currentRow, currentCol) {
  let targetRow = currentRow;
  let targetCol = currentCol;

  // 矢印キーまたはEnterキーの判定
  switch(e.key) {
    case "ArrowUp":
      targetRow--;
      break;
    case "ArrowDown":
    case "Enter": // Enterでも下に移動するように
      targetRow++;
      break;
    case "ArrowLeft":
      targetCol--;
      break;
    case "ArrowRight":
      targetCol++;
      break;
    default:
      return; // 他のキーなら何もしない
  }

  // 移動先のinput要素を探す
  const targetInput = document.querySelector(`input[data-row="${targetRow}"][data-col="${targetCol}"]`);
  
  // 見つかったらフォーカスを移す
  if (targetInput) {
    e.preventDefault(); // 本来のスクロールなどを防ぐ
    targetInput.focus();
    // 入力済みの文字があれば全選択（上書きしやすくする）
    targetInput.select();
  }
}

function checkAnswers() {
  const inputs = document.querySelectorAll(".test-input");
  
  inputs.forEach(input => {
    const userVal = input.value.trim();
    const correctRaw = input.dataset.answer;
    const correctOptions = correctRaw.split("/").map(s => s.replace(/[()]/g, ""));

    let isCorrect = false;
    if (correctRaw === "○") {
        if (userVal === "" || userVal === "○" || userVal === "まる") isCorrect = true;
    } else {
        if (correctOptions.includes(userVal)) isCorrect = true;
        if (userVal === "") isCorrect = false; 
    }

    input.classList.remove("correct", "incorrect");
    if (userVal !== "") { 
        if (isCorrect) input.classList.add("correct");
        else input.classList.add("incorrect");
    }
  });
}

function setupControls() {
  const viewControls = document.getElementById("mode-view-controls");
  const testControls = document.getElementById("mode-test-controls");
  const instruction = document.getElementById("instruction-text");

  document.getElementById("btn-hide-all").addEventListener("click", () => {
    document.querySelectorAll(".conjugation-cell").forEach(c => c.classList.add("hidden"));
  });

  document.getElementById("btn-show-all").addEventListener("click", () => {
    document.querySelectorAll(".conjugation-cell").forEach(c => c.classList.remove("hidden"));
  });

  document.getElementById("btn-random").addEventListener("click", () => {
    document.querySelectorAll(".conjugation-cell").forEach(c => {
      if (Math.random() > 0.5) c.classList.add("hidden");
      else c.classList.remove("hidden");
    });
  });

  document.getElementById("btn-start-test").addEventListener("click", () => {
    isTestMode = true;
    renderTable();
    viewControls.style.display = "none";
    testControls.style.display = "flex";
    instruction.textContent = "答えを入力して「答え合わせ」を押してください（矢印キーで移動可能）";
    instruction.style.color = "#d32f2f";
    instruction.style.fontWeight = "bold";
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
    viewControls.style.display = "flex";
    testControls.style.display = "none";
    instruction.textContent = "マスをタップして答え合わせができます";
    instruction.style.color = "#888";
    instruction.style.fontWeight = "normal";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable();
  setupControls();
});