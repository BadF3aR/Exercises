// DOM

console.log(document);

var placeholder = document.getElementById("placeholder");
//placeholder.innerText = "<b>JavaScript</b>"; 
placeholder.innerHTML = "<b>JavaScript</b>"; 

var goods = document.getElementsByClassName("good");
console.log(goods);

for ( var i = 0; i < goods.length; i++)
{
    goods[i].innerText += " - OK ";
}
//----------------------------------------------- dodawanie
var li = document.getElementsByTagName("li");
console.log(li);

var newLi = document.createElement("li");
var text = document.createTextNode("Tekst 5");
newLi.appendChild(text);

var list = document.getElementById("list");
list.appendChild(newLi);
//-------------------------------------------------
var newLi2 = document.createElement("li");
var text2 = document.createTextNode("Tekst 3.5");
newLi2.appendChild(text2);

list.insertBefore(newLi2, document.getElementById("li4"));

//-------------------------------------------------- modyfikacja 

var firstLi = list.firstElementChild;

var newLi3 = document.createElement("li");
var text3 = document.createTextNode("Nagłówek");
newLi3.appendChild(text3);
newLi3.classList.add("good");

list.replaceChild(newLi3, firstLi);