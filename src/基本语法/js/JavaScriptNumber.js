function numOper() {
    console.log(oper(3, 3));
    console.log(numOper(3, 4));
};

function oper(a, b) {
    return a * b;
}
function numOper(a, b) {
    var num = 10;
    num = num * (a + b);
    console.log(num);
    return num;
}