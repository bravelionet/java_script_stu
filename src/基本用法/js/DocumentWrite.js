
function documentWrite(){

    // document.write() 会重写整个页面
    // 请使用 document.write() 仅仅向文档输出写内容。
    // 如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。
    document.getElementById("wirteId").innerHTML(document.write(" documentWrite... "))

};