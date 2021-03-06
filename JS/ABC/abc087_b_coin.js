const main = stdin => {
  const stdinArray = stdin.split('\n');
  const coin500 = parseInt(stdinArray[0], 10);
  const coin100 = parseInt(stdinArray[1], 10);
  const coin50 = parseInt(stdinArray[2], 10);
  const coinSum = parseInt(stdinArray[3], 10);

  let count = 0;

  for(let num500 = 0; num500 <= coin500; num500++) {
    for(let num100 = 0; num100 <= coin100; num100++) {
      for(let num50 = 0; num50 <= coin50; num50++) {
        let sum = (500 * num500) + (100 * num100) + (50 * num50);
        if(sum === coinSum) count++;
      }
    }
  }

  console.log('\n' + count);
};

main(require('fs').readFileSync("/dev/stdin", "utf-8"));





// function getExcel(url) {
//     let req = new XMLHttpRequest();
//     req.open("GET", url, true);
//     req.responseType = "arraybuffer";
//     req.send();

//     let jsonList = [];
//     req.onload = function() {
//         let uint8 = new Uint8Array(req.response);
//         let workbook = XLSX.read(uint8, {type: "array"});
//         sheet_name_list = workbook.SheetNames; // グローバル変数
//         for(let t = 0; t < sheet_name_list.length; t++) {
//             let sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[t]]);
//             jsonList.push(sheet);
//         }
//     };

//     return jsonList;
// }
// let jsonArray = getExcel('./inasa-syakaishigen20201228.xlsx');



// function getCsv(url) {
//     //CSVファイルを文字列で取得。
//     var txt = new XMLHttpRequest();
//     txt.open('get', url, false);
//     txt.send();

//     //改行ごとに配列化
//     var arr = txt.responseText.split('\n');

//     //1次元配列を2次元配列に変換
//     var res = [];
//     for(var i = 0; i < arr.length; i++){
//         //空白行が出てきた時点で終了
//         if(arr[i] == '') break;

//         //","ごとに配列化
//         res[i] = arr[i].split(',');
//     }

//     return res;
// }
// let yakkyokuCsv = getCsv('./csv/20201112薬局.csv');
// let yakkyokuArray = [];
// for(let x = 3; x < yakkyokuCsv.length; x++) {
//     yakkyokuArray.push({
//         lat: yakkyokuCsv[x][9],
//         lng: yakkyokuCsv[x][10],
//         content: `<b>${yakkyokuCsv[x][0]}</b><p>${yakkyokuCsv[x][2]}</p><a href="./syousai.html" style="color: #5341d3">詳細ページ</a>`,
//         dekirukotoArray: yakkyokuCsv[x][11].split('、')
//     })
// }