// 学习 js 外部引入 <script src="file url"/>
function appOn(){
    alert("引入外部 js 文件");
    // inner Text <p> 不解析
  /*  document.getElementById("app").innerText="<p> 点击事件 修改文本 </p> "*/
    document.getElementById("app").innerHTML="<p> 点击事件 修改文本 </p> "
};
