function whatever(){
    var a = document.getElementsByTagName("p").length;
    alert("there are " + a + " paragraph tags on this page")
}

function whatever2(){
    var a = document.getElementById("one")
    var b = a.getElementsByTagName("p").length
    alert("there are " + b + " paragraph tags in this div")

}

function whatever3(){
    var a = document.getElementById("two")
    var b = a.getElementsByTagName("p").length
    alert("there are " + b + " paragraph tags in this div")

}