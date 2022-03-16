//Math i Date

var math = document.getElementById("math");
var date = document.getElementById("date");

//Math

//var liczba = prompt("Podaj liczbę:" , "0");
var liczba = 3;


math.innerHTML += "Liczba:" + liczba + "<br>";
math.innerHTML += "Abs: " + Math.abs(liczba) + "<br>";
math.innerHTML += "Round: " + Math.round(liczba) + "<br>";
math.innerHTML += "Ceil: " + Math.ceil(liczba) + "<br>";
math.innerHTML += "Floor: " + Math.floor(liczba) + "<br>";
math.innerHTML += "Power: " + Math.pow(liczba, 3) + "<br>";
math.innerHTML += "Sqrt: " + Math.sqrt(liczba) + "<br>";
math.innerHTML += "PI: " + Math.PI + "<br>";
math.innerHTML += "PI: " + (Math.round(Math.PI * 1000) / 1000) + "<br>"; // Zaokrglanie
math.innerHTML += "Random: " + (Math.floor(Math.random() * 10) + 1) + "<br>"; // losowanie od 1-10 domyslnie jest 0-1

//Date

date.innerHTML += "Current: " + Date() + "<br>";
var date1 = new Date(1111111111111); // 1.1.1970
date.innerHTML += "Date1: " + date1 + '<br>';

var date2 = new Date(1999, 3, 6, 1, 2, 3,);
date.innerHTML += "Date 2: " + date2.getDate() + "." +date2.getMonth() + "." + date2.getFullYear() + "<br>";

// watch


setInterval(setTime, 1000);

function setTime()
{
    var time = new Date();
    date.innerHTML = "Czas: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}