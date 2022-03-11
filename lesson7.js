var result = document.getElementById("result");

var tab = new Array("Poniedziałek", "Wtorek", "Środa");

result.innerHTML += tab[0] + "<br>";
tab[3] = "Czwartek";
tab[4] = "Piątek";
tab[5] = "Sobota";
result.innerHTML += tab[3] + "<br>";
tab[6] = "Niedziela";

result.innerHTML += "Długość = " + tab.length + "<br>";


console.log(tab);


result.innerHTML += "----------<br>"

for (var i = 0; i < tab.length; i++)
{
    result.innerHTML += tab[i] + "<br>";
}