// const var 区别 : const 定义变量不进行初始化会错误, const 定义后不允许修改
// var let 区别 : 均可以未局部变量, 但 var 存在自动提升未全局变量


// <<< 数组及对象,循环操作, 中间操作 >>>
function arrayFor() {
    const array = ["a", "b", "c"];
    array.forEach((e) => {
        console.log(e);
    });
}

function arrayForTo() {
    const array = ["a", "b", "c"];
    for (const e in array) {
        console.log(e)
        console.log(array[e])
    }
}

function arrayForTh() {
    const array = ["a", "b", "c"];
    for (const e of array) {
        console.log(e)
    }
}

function objFor() {
    const obj = {"a": "1", "b": "2", "c": "c"};
    for (const e in obj) {
        console.log(obj[e]);
    }
}

// map() : 中间操作数据及对象
function arrayMap() {
    const array = [2, 3, 5];
    let arrayMap = array.map((value, index, array) => {
        console.log(value);
        console.log(index);
        console.log(array);
        return value * 2;
    });
    console.log(arrayMap);
}

// fifler : true 保留, false 删除元素, filter可以理解为 for 循环
function arrayFilter() {
    let array = [2, 3, 5];
    array = array.filter((value, index, array) => {
        console.log(value);
        console.log(index);
        console.log(array);
        return value == 2 ? true : false;
    })
    console.log(array);
}

// reduce 聚合函数, 左 -> 聚合
// reduceRight 聚合函数 右 -> 聚合
// reduce(total, value, index, array) : total 聚合总数; value 元素; index 索引; array 数组本身;
// reduceRight(total, value, index, array) : total 聚合总数; value 元素; index 索引; array 数组本身;
function arrayReduce() {
    let array = [2, 3, 5];
    let reduceResult = array.reduce((total, value, index, array) => {
        console.log(value);
        console.log(index);
        console.log(array);
        return total += value;
    });
    console.log(reduceResult);
    let reduceRightResult = array.reduceRight((total, value, index, array) => {
        console.log(value);
        console.log(index);
        console.log(array);
        return total += value;
    });
    console.log(reduceRightResult);

}


// <<<<< 数据方法 >>>>>
// join 将数组转换为字符串表达 9,8,7,6,5.5
function arrayJoin() {
    const array = [9, 8, 7, 6, 5.5]
    console.log(array.join());
    console.log(array.join().length);
}

// push 方法 添加 数组元素至尾部, 返回数组被添加元素后长度
function arrayPush() {
    const array = [9, 8];
    console.log(array.push(7));
    console.log(array);
}

// pop 在数组中弹出尾部一个元素, pop(index) 弹出指定索引位置元素
function arrayPop() {
    const array = [9, 8, 10];
    console.log(array.pop());
    console.log(array.pop(1));
    console.log(array);
}

// shift 方法位移出首个元素,返回被移除的元素, 和 pop 相反
function arrayShift() {
    const array = ["a", "b", "c"];
    console.log(array);
    console.log(array.shift());
    console.log(array);
}

// unshift 向数组中首不添加元素,并返回元素数组元素个数
function arrayUnshift() {
    const array = ["a", "b", "c"];
    console.log(array);
    console.log(array.unshift("z"));
    console.log(array);
}

// delele 只能根据 索引进行删除元素, 删除元素后 delete array[index] 所在位置元素进行 emptiy, 输出时提示 unfriend
// 不建议使用, delete 会产生空洞, 使用 pop 或者 shift 进行代替
function arrayDelete() {
    const array = ["a", "b", "c"];
    console.log(array);
    console.log(delete array["b"]);
    console.log(delete array[2]);
    console.log(array[1]);
    console.log(array);
}

// splice(start, count, items...) : start 开始批量添加时的索引位置 index; count 代表start开始拼接元素向后删除(覆盖几个元素); itmes, 将添加的元素
function arraySplice() {
    const array = ["a", "b", "c"];
    array.splice(1, 0, "d", "z");
    console.log(array);
}

// concat 拼接数组, 元素最加至尾部
function arrayConcat() {
    let array = ["a", "b", "c"];
    const arrayTo = ["z", "y", "u"];
    array = array.concat(arrayTo)
    console.log(array);
}

// slice(start, end) : 将进行截取数组片段, 包左不包右 [ start,end }
function arraySlice() {
    let array = ["a", "b", "c"];
    let message = array.slice(1, 3);
    console.log(message);
    console.log(array.toString());
}

// sort 按照 自付进行自然排序, sort 返回排序好的数组
// sort 排序数字, 先比较第一个数组, 相同再比较第二个, 依次类推
function arraySort() {
    let array = ["z", "b", "c"];
    let arrayNum = [1, 2, 11];
    var message = array.sort();
    var messageNum = arrayNum.sort();
    console.log(message);
    console.log(array);
    array = message;
    console.log(array);
    console.log(messageNum);
}

// indexOf(e) : 校验 目标 e 元素是否在 array源中存在, 存在及返回在数据所在的索引位置
// Array.lastIndexOf() 与 Array.indexOf() 类似，但是从数组结尾开始搜索。
function arrayIndexOf() {
    let array = ["z", "b", "c"];
    console.log(array.indexOf("c"));
}

// find() 方法返回通过测试函数的第一个数组元素的值
// findIndex() 方法返回通过测试函数的第一个数组元素的索引
function arrayFind() {
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.find(myFunction);
    console.log(first);

    function myFunction(value, index, array) {
        return value > 18;
    }

}