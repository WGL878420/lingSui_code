/**
 * 随机循环 | 提示的信息每隔500ms随机展示
 */

let tipList= ['提示1','提示2','提示3','提示4','提示5','提示6','提示7','提示8','提示9'];

function randomTip(tipList) {
    let tipArray = tipList;

    let timer = setInterval(function() {
        let randomIndex = Math.floor(Math.random() * tipArray.length);
        let tip = tipArray.splice(randomIndex, 1)[0];
        console.log(tip);

        if (tipArray.length === 0) {
            clearInterval(timer);
            console.log('提示结束！');
        }
    }, 500);

}

randomTip(tipList);
