const appIfNum = 10;

// if else if, 当有一个匹配成功, 下面 if 则进行短路不执行
function appIf(){
    if( appIfNum == 10){
        console.log(1)
    }else if(appIfNum == 1){
        console.log(2)
    }else if(appIfNum == 10){
        console.log(3)
    }
}

// do while 先执行 do 代码块, 在进行判断 while 条件是否成立
function appDoWhile(){
    do{
        console.log(1)
    }while (false)
}