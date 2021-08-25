function appNumToString() {
    var num = 1;
    num = num.toString();
    alert(num)
};

// toFixed 保留几位小数, 并进行四舍五入, 例如 toFixed(2), 保留两位小数, 并查看第三位是否可以进行四舍五入

function appNumtoFixed() {
    var x = 9.656;
    var b = x.toFixed(0);           // 返回 10
    console.log(b);
    var c = x.toFixed(2);   // 返回 9.66
    console.log(c);
    var d = x.toFixed(4);
    console.log(d);
    var e = x.toFixed(6); // 返回 9.6560
    console.log(e);
};

// toFixed 保留几位数字, 并进行四舍五入, 例如 toFixed(2), 保留两位小数, 并查看第三位是否可以进行四舍五入

function appNumtoPrecision() {
    var x = 9.656;
    var b = x.toPrecision();  // 返回 9.656
    console.log(b);
    var c = x.toPrecision(2);  // 返回 9.7
    console.log(c);
    var d = x.toPrecision(4);  // 返回 9.656
    console.log(d);
    var e = x.toPrecision(6); // 返回 9.65600
    console.log(e);
};

// 数字进行相加
function appNumValueOf() {
    var x = 123;
    x.valueOf();            // 从变量 x 返回 123
    (123).valueOf();        // 从文本 123 返回 123
    (100 + 23).valueOf();   // 从表达式 100 + 23 返回 123
    console.log(x);
};

// 将变量转换为数值
// parseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字：parseFloat() 解析一段字符串并返回数值, 允许空格, 只返回首个数字

function appDateToNum(date) {
    var i = "10"
    alert(Number(i))
    document.getElementById("appDateToNumId").innerText=Number(date);
};