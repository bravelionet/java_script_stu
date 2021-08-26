function  asyncFunction(){
    for (let i = 0; i < 10000; i++) {
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function (){
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xmlHttpRequest.open("get","http://localhost:8080/pay/test1/aaa",true)
        xmlHttpRequest.send();
    }
}