// 助動詞の完全データリスト（修正決定版）
const verbData = [
  // --- る・らる・す・さす・しむ ---
  { basic: "る", connection: "未然形", conjugation: ["れ", "れ", "る", "るる", "るれ", "れよ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "らる", connection: "未然形", conjugation: ["られ", "られ", "らる", "らるる", "らるれ", "られよ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "す", connection: "未然形", conjugation: ["せ", "せ", "す", "する", "すれ", "せよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "さす", connection: "未然形", conjugation: ["させ", "させ", "さす", "さする", "さすれ", "させよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "しむ", connection: "未然形", conjugation: ["しめ", "しめ", "しむ", "しむる", "しむれ", "しめよ"], type: "下二段型", meaning: "使役・尊敬" },

  // --- ず（2行に分割） ---
  { basic: "ず", connection: "未然形", conjugation: ["○", "ず", "ず", "ぬ", "ね", "○"], type: "特殊型", meaning: "打消" },
  { basic: "ず", connection: "未然形", conjugation: ["ざら", "ざり", "○", "ざる", "ざれ", "ざれ"], type: "特殊型", meaning: "打消" },

  // --- む・むず・まし・じ ---
  { basic: "む", connection: "未然形", conjugation: ["○", "○", "む", "む", "め", "○"], type: "四段型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "むず", connection: "未然形", conjugation: ["○", "○", "むず", "むずる", "むずれ", "○"], type: "サ変型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "まし", connection: "未然形", conjugation: ["ませ/ましか", "○", "まし", "まし", "ましか", "○"], type: "特殊型", meaning: "反実仮想・ためらいの意志・推量" },
  { basic: "じ", connection: "未然形", conjugation: ["○", "○", "じ", "じ", "じ", "○"], type: "無変化型", meaning: "打消推量・打消意志" },

  // --- まほし（2行に分割） ---
  { basic: "まほし", connection: "未然形", conjugation: ["○", "まほしく", "まほし", "まほしき", "まほしけれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "まほし", connection: "未然形", conjugation: ["まほしから", "まほしかり", "○", "まほしかる", "○", "○"], type: "形容詞型", meaning: "希望" },

  // --- き・けり・つ・ぬ・たり ---
  { basic: "き", connection: "連用形", conjugation: ["せ", "○", "き", "し", "しか", "○"], type: "特殊型", meaning: "過去" },
  { basic: "けり", connection: "連用形", conjugation: ["けら", "○", "けり", "ける", "けれ", "○"], type: "ラ変型", meaning: "過去・詠嘆" },
  { basic: "つ", connection: "連用形", conjugation: ["て", "て", "つ", "つる", "つれ", "てよ"], type: "下二段型", meaning: "完了・強意・並列" },
  { basic: "ぬ", connection: "連用形", conjugation: ["な", "に", "ぬ", "ぬる", "ぬれ", "ね"], type: "ナ変型", meaning: "完了・強意・並列" },
  { basic: "たり", connection: "連用形", conjugation: ["たら", "たり", "たり", "たる", "たれ", "たれ"], type: "ラ変型", meaning: "完了・存続" },

  // --- たし（2行に分割） ---
  { basic: "たし", connection: "連用形", conjugation: ["○", "たく", "たし", "たき", "たけれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "たし", connection: "連用形", conjugation: ["たから", "たかり", "○", "たかる", "○", "○"], type: "形容詞型", meaning: "希望" },

  // --- けむ・らむ・めり・らし ---
  { basic: "けむ", connection: "連用形", conjugation: ["○", "○", "けむ", "けむ", "けめ", "○"], type: "四段型", meaning: "過去推量・過去の原因推量・過去の伝聞婉曲" },
  { basic: "らむ", connection: "終止形", conjugation: ["○", "○", "らむ", "らむ", "らめ", "○"], type: "四段型", meaning: "現在推量・現在の原因推量・伝聞婉曲" },
  { basic: "めり", connection: "終止形", conjugation: ["○", "めり", "めり", "める", "めれ", "○"], type: "ラ変型", meaning: "推定・婉曲" },
  { basic: "らし", connection: "終止形", conjugation: ["○", "○", "らし", "らし", "らし", "○"], type: "無変化型", meaning: "推定" },

  // --- べし（2行に分割） ---
  { basic: "べし", connection: "終止形", conjugation: ["○", "べく", "べし", "べき", "べけれ", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },
  { basic: "べし", connection: "終止形", conjugation: ["べから", "べかり", "○", "べかる", "○", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },

  // --- まじ（2行に分割） ---
  { basic: "まじ", connection: "終止形", conjugation: ["○", "まじく", "まじ", "まじき", "まじけれ", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },
  { basic: "まじ", connection: "終止形", conjugation: ["まじから", "まじかり", "○", "まじかる", "○", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },

  // --- なり（伝聞）・なり（断定）・たり（断定）・ごとし・り ---
  { basic: "なり", connection: "終止形", conjugation: ["○", "なり", "なり", "なる", "なれ", "○"], type: "ラ変型", meaning: "伝聞・推定" },
  { basic: "なり", connection: "体言・連体形", conjugation: ["なら", "なり/に", "なり", "なる", "なれ", "なれ"], type: "形容動詞型", meaning: "断定・存在" },
  { basic: "たり", connection: "体言", conjugation: ["たら", "たり/と", "たり", "たる", "たれ", "たれ"], type: "形容動詞型", meaning: "断定" },
  { basic: "ごとし", connection: "体言・連体形", conjugation: ["○", "ごとく", "ごとし", "ごとき", "○", "○"], type: "形容詞型", meaning: "比況・例示" },
  { basic: "り", connection: "サ変の未然・四段の已然", conjugation: ["ら", "り", "り", "る", "れ", "れ"], type: "ラ変型", meaning: "完了・存続" }
];

// テーブルを生成する関数（修正：「型」が違えば名前が同じでも結合しない）
function renderTable() {
  const tbody = document.querySelector("#verb-table tbody");
  
  let prevConnect = null, cellConnect = null;
  let prevBasic = null, cellBasic = null;
  let prevType = null, cellType = null;
  let prevMeaning = null, cellMeaning = null;

  verbData.forEach((verb) => {
    const tr = document.createElement("tr");

    // 1. 接続
    if (verb.connection !== prevConnect) {
      const td = document.createElement("td");
      td.textContent = verb.connection;
      td.rowSpan = 1;
      td.style.verticalAlign = "middle";
      td.style.backgroundColor = "#fff5f5";
      tr.appendChild(td);
      cellConnect = td;
      prevConnect = verb.connection;
    } else {
      if (cellConnect) cellConnect.rowSpan++;
    }

    // 2. 基本形
    // 「基本形」「接続」「活用の型」のいずれかが変わったら新しいセルにする
    // これで「なり（ラ変）」と「なり（形容動詞型）」は確実に区切られます
    if (verb.basic !== prevBasic || verb.connection !== prevConnect || verb.type !== prevType) { 
      const td = document.createElement("td");
      td.textContent = verb.basic;
      td.rowSpan = 1;
      td.style.fontWeight = "bold";
      td.style.verticalAlign = "middle";
      tr.appendChild(td);
      cellBasic = td;
      prevBasic = verb.basic;
    } else {
      if (cellBasic) cellBasic.rowSpan++;
    }

    // 3. 活用形
    verb.conjugation.forEach(form => {
      const td = document.createElement("td");
      td.textContent = form;
      td.classList.add("conjugation-cell"); 
      // td.classList.add("hidden"); 
      td.addEventListener("click", () => {
        td.classList.toggle("hidden"); 
      });
      tr.appendChild(td);
    });

    // 4. 活用の型
    if (verb.type !== prevType || verb.basic !== prevBasic || verb.connection !== prevConnect) {
      const td = document.createElement("td");
      td.textContent = verb.type;
      td.rowSpan = 1;
      td.style.verticalAlign = "middle";
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
      tr.appendChild(td);
      cellMeaning = td;
      prevMeaning = verb.meaning;
    } else {
      if (cellMeaning) cellMeaning.rowSpan++;
    }

    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", renderTable);