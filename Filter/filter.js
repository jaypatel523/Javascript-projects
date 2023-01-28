let all = document.getElementById("all");
let iceCreame = document.getElementById("ice-creame");
let cake = document.getElementById("cake");
let sweet = document.getElementById("sweet");


let icePart = document.querySelector(".ice");
let cakePart = document.querySelector(".cake");
let sweetPart = document.querySelector(".sweet");


function allShow()
{
    icePart.style.display = "none";
    cakePart.style.display = "none";
    sweetPart.style.display = "none";
}

all.addEventListener("click", function(){
    sweetPart.style.display = "flex";
    cakePart.style.display = "flex";
    icePart.style.display = "flex";
})

iceCreame.addEventListener("click", function(){
    allShow();
    icePart.style.display = "flex";
})

cake.addEventListener("click", function(){
    allShow();
    cakePart.style.display = "flex";
})

sweet.addEventListener("click", function(){
    allShow();
    sweetPart.style.display = "flex";
})