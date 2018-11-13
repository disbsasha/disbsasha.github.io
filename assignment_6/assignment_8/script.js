function squareNumber(number){
    var number = document.getElementById("square-input").value;
    var result = number*number;
    document.getElementById("solution").innerHTML = result;
}
var button1 = document.getElementById('square-button')
button1.addEventListener('click', squareNumber())

function halfNumber(number){
    var number = document.getElementById("half-input").value;
    var result = number/2;
    document.getElementById("solution").innerHTML = result;
}
var button2 = document.getElementById('half-button')
button2.addEventListener('click', halfNumber())

function percentOf(number1,number2){
    var number1 = document.getElementById("percent1-input").value;
    var number2 = document.getElementById("percent2-input").value;
    var result = (number1/number2) * 100
    document.getElementById('solution').innerHTML = result;
}

var button3 = document.getElementById('percent-button')
button3.addEventListener('click', percentOf())

function areaCircle(number) {
    var number = document.getElementById("area-input").value;
    var math = number*number*Math.PI;
    var result = Math.round(math*100)/100
    document.getElementById('solution').innerHTML = result;    
}

var button4 = document.getElementById('area-button')
button4.addEventListener('click', areaCircle())
