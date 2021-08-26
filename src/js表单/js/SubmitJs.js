function submitFunction(){
    console.log("提交");

    let fanme = document.forms["submitName"]["fname"].value;
    let age = document.forms["submitName"]["age"].value;
    console.log(fanme);
    if("" == fanme){
        console.log("请填写姓名");
        return false;
    }
    if("" == age){
        console.log("请填写性别");
        return false;
    }
    console.log("提交成功")
    return true;
}


// checkValidity 返回 true，如果 input 元素包含有效数据
// validationMessage 获取 input 元素的 validationMessage 属性
function appDemo() {
    let inpObj = document.getElementById("appDemoId");
    if (inpObj.checkValidity() == false) {
        document.getElementById("appDemo").innerHTML = inpObj.validationMessage;
    }
    console.log(document.cookie);
   //  window.open("/src/事件/html/EventStudy.html")
}



