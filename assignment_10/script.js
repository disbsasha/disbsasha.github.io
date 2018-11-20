var empty = document.getElementById("location");
var justinBaby = document.getElementById("justin_baby");
var justinClick = function(e) {
var myLove = document.getElementById("my_love"); 
    myLove.style.top = e.clientY - 10 + "px";
    myLove.style.left = e.clientX - 48 + "px";
    empty.textContent = e.clientY + "px" + e.clientX + "px";
};
justinBaby.addEventListener("click", justinClick);