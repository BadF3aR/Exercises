var input = document.getElementById("input")
var button = document.getElementById("button")
var answer = document.getElementById("answer")
var list = document.getElementById("list")
var i = 0;

var los = Math.floor(Math.random() * 10) + 1;
//alert(los);


button.addEventListener("click", sprawdz);

function sprawdz()
{
    answer.innerHTML = input.value;
}