var result = document.getElementById("result");

var tab = new Array("Poniedziałek", "Wtorek", "Środa");

result.innerHTML += tab[0] + "<br>";
tab[3] = "Czwartek";
result.innerHTML += tab[3] + "<br>";



console.log(tab) + "<br>";