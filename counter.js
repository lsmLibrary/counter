(function () {
    var process = document.getElementById("process");
    var result = document.getElementById("result");
    var clearLast = document.getElementById("clearLast");
    var clear = document.getElementById("clear");
    var number = document.querySelectorAll("#number .num");
    var operation = document.querySelectorAll("#number .operation");
    var dot = document.querySelector("#number .dot");
    var equal = document.querySelector("#number .equal");
    var nLength = number.length;
    var lastString;
    var operaFu = [];
    var zeroClick = false;
    var zeroNum = 0;
    var dotClick = false;
    //添加点击事件数字的
    var proHtml;
    for (var i = 0; i < nLength; i++) {
        number[i].index = i;
        number[i].onclick = function () {
            proHtml = process.innerHTML;
            if (!zeroClick && this.index == nLength-1) {
                console.log(12);
                zeroNum++;
                if (zeroNum <= 1) {
                    proHtml += this.innerText;
                }
            }else {
                proHtml += this.innerText;
                zeroClick = true;
            }
            process.innerHTML = proHtml;

        }
    }
    //清空
    clear.onclick = function () {
        result.innerHTML = process.innerHTML = "";
    };
    clearLast.onclick = function () {
        proHtml = process.innerHTML;
        proHtml = proHtml.slice(0, proHtml.length - 1);
        process.innerHTML = proHtml
    };
    //运算符的点击
    Array.prototype.forEach.call(operation, function (e) {
        operaFu.push(e.innerHTML);
        e.onclick = function () {
            dotClick = false;
            proHtml = process.innerHTML;
            lastString = proHtml[proHtml.length - 1];
            zeroNum =0;
            zeroClick = false;
            if (proHtml === "") {
                if ( e.innerHTML == "-") {
                    proHtml += e.innerHTML;
                }
            }else{
            // 判前面一位是否存在 运算符
            if (operaFu.indexOf(lastString) != -1) {
                proHtml = proHtml.slice(0, proHtml.length - 1);
                console.log(32);
            }
            proHtml += e.innerHTML;
            }
            process.innerHTML = proHtml;

        }
    });
    // 点的判断
    dot.onclick = function () {
        if (!dotClick) {
            proHtml = process.innerHTML;
            proHtml += dot.innerHTML;
            dotClick = true;
            zeroClick = true;
        }
        process.innerHTML = proHtml;
    };
    //等号的运算
    console.log(operaFu);
    equal.onclick = function () {
        proHtml = process.innerHTML;
        result.innerHTML = process.innerHTML;
        proHtml.replace(operaFu[1],"/");
        proHtml.replace(operaFu[2],"*");
        console.log(proHtml.indexOf("×"||"&time;"));
        if (eval(proHtml)) {

        }
        process.innerHTML = eval(proHtml);
    };
}());
