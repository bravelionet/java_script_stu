function appLength(){
   var a =  document.getElementById("appStr");
   a = a.innerHTML;
 //  console.log(a.length);
  // console.log(a.indexOf("b"));
 //  console.log(a.indexOf("长"));
  // console.log(a.indexOf("长",8));
 //  console.log(a.lastIndexOf("1"));
   console.log(a.search("长"));
}