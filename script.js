// 助動詞の完全データリスト
const verbData = [
  // --- 画像1枚目 ---
  { basic: "る", connection: "未然形", conjugation: ["れ", "れ", "る", "るる", "るれ", "れ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "らる", connection: "未然形", conjugation: ["られ", "られ", "らる", "らるる", "らるれ", "られ"], type: "下二段型", meaning: "受身・可能・自発・尊敬" },
  { basic: "す", connection: "未然形", conjugation: ["せ", "せ", "す", "する", "すれ", "せよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "さす", connection: "未然形", conjugation: ["させ", "させ", "さす", "さする", "さすれ", "させよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "しむ", connection: "未然形", conjugation: ["しめ", "しめ", "しむ", "しむる", "しむれ", "しめよ"], type: "下二段型", meaning: "使役・尊敬" },
  { basic: "ず", connection: "未然形", conjugation: ["(ず)/ざら", "ず/ざり", "ず", "ぬ/ざる", "ね/ざれ", "ざれ"], type: "特殊型", meaning: "打消" },
  { basic: "む", connection: "未然形", conjugation: ["○", "○", "む", "む", "め", "○"], type: "四段型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "むず", connection: "未然形", conjugation: ["○", "○", "むず", "むずる", "むずれ", "○"], type: "サ変型", meaning: "推量・意志・勧誘・仮定・婉曲" },
  { basic: "まし", connection: "未然形", conjugation: ["ましか", "○", "まし", "まし", "ましか", "○"], type: "特殊型", meaning: "反実仮想・ためらいの意志・推量" },
  { basic: "じ", connection: "未然形", conjugation: ["○", "○", "じ", "じ", "じ", "○"], type: "無変化型", meaning: "打消推量・打消意志" },
  { basic: "まほし", connection: "未然形", conjugation: ["まほしく/ざら", "まほしく/ざり", "まほし", "まほしき/ざる", "まほしけれ/ざれ", "○"], type: "形容詞型", meaning: "希望" },
  { basic: "き", connection: "連用形", conjugation: ["(せ)", "○", "き", "し", "しか", "○"], type: "特殊型", meaning: "過去" },
  { basic: "けり", connection: "連用形", conjugation: ["(けら)", "○", "けり", "ける", "けれ", "○"], type: "ラ変型", meaning: "過去・詠嘆" },
  { basic: "つ", connection: "連用形", conjugation: ["て", "て", "つ", "つる", "つれ", "てよ"], type: "下二段型", meaning: "完了・強意・並列" },
  { basic: "ぬ", connection: "連用形", conjugation: ["な", "に", "ぬ", "ぬる", "ぬれ", "ね"], type: "ナ変型", meaning: "完了・強意・並列" },
  { basic: "たり", connection: "連用形", conjugation: ["たら", "たり", "たり", "たる", "たれ", "たれ"], type: "ラ変型", meaning: "完了・存続" },
  { basic: "けむ", connection: "連用形", conjugation: ["○", "○", "けむ", "けむ", "けめ", "○"], type: "四段型", meaning: "過去推量・過去の原因推量・過去の伝聞婉曲" },
  { basic: "たし", connection: "連用形", conjugation: ["たく/から", "たく/かり", "たし", "たき/かる", "たけれ", "○"], type: "形容詞型", meaning: "希望" },

  // --- 画像2枚目 ---
  { basic: "り", connection: "サ変の未然・四段の已然", conjugation: ["ら", "り", "り", "る", "れ", "れ"], type: "ラ変型", meaning: "完了・存続" },
  { basic: "らむ", connection: "終止形", conjugation: ["○", "○", "らむ", "らむ", "らめ", "○"], type: "四段型", meaning: "現在推量・現在の原因推量・伝聞婉曲" },
  { basic: "らし", connection: "終止形", conjugation: ["○", "○", "らし", "らし", "らし", "○"], type: "無変化型", meaning: "推定" },
  { basic: "めり", connection: "終止形", conjugation: ["○", "(めり)", "めり", "める", "めれ", "○"], type: "ラ変型", meaning: "推定・婉曲" },
  { basic: "べし", connection: "終止形", conjugation: ["べく/べから", "べく/べかり", "べし", "べき/べかる", "べけれ", "○"], type: "形容詞型", meaning: "推量・意志・可能・当然・命令・適当" },
  { basic: "まじ", connection: "終止形", conjugation: ["まじく/まじから", "まじく/まじかり", "まじ", "まじき/まじかる", "まじけれ", "○"], type: "形容詞型", meaning: "打消推量・打消意志・不可能・打消当然・禁止・不適当" },
  { basic: "なり（伝聞）", connection: "終止形", conjugation: ["○", "(なり)", "なり", "なる", "なれ", "○"], type: "ラ変型", meaning: "伝聞・推定" },
  { basic: "なり（断定）", connection: "体言・連体形", conjugation: ["なら", "なり/に", "なり", "なる", "なれ", "なれ"], type: "形容動詞型", meaning: "断定・存在" },
  { basic: "たり（断定）", connection: "体言", conjugation: ["たら", "たり/と", "たり", "たる", "たれ", "たれ"], type: "形容動詞型", meaning: "断定" },
  { basic: "ごとし", connection: "体言・連体形", conjugation: ["(ごとく)", "ごとく", "ごとし", "ごとき", "○", "○"], type: "形容詞型", meaning: "比況・例示" }
];

// テーブルを生成する関数
function renderTable() {
  const tbody = document.querySelector("#verb-table tbody");
  
  verbData.forEach(verb => {
    const tr = document.createElement("tr");

    // 基本データ（表示しっぱなし）
    const basicInfo = [
      verb.basic, 
      verb.connection
    ];

    basicInfo.forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });

    // 活用形（6つ）: ここをクリック可能にする
    verb.conjugation.forEach(form => {
      const td = document.createElement("td");
      td.textContent = form;
      td.classList.add("conjugation-cell"); 
      
      // 最初は全て「隠す」状態にするなら、次の行のコメントアウト(//)を外してください
      // td.classList.add("hidden"); 

      // クリックイベントを追加
      td.addEventListener("click", () => {
        td.classList.toggle("hidden"); // hiddenクラスをつけたり外したりする
      });

      tr.appendChild(td);
    });

    // その他の情報
    const otherInfo = [verb.type, verb.meaning];
    otherInfo.forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

// ページ読み込み完了時に実行
document.addEventListener("DOMContentLoaded", renderTable);