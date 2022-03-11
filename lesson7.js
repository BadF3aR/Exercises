var result = document.getElementById("result");

// 1 sposob

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

tab.forEach(x => console.log(x));

//inny sposob 

var tab2 = new Array(3);
tab2[0] = 10;
tab2[1] = true;
tab2[2] = "JS";

console.log(tab2);

// 3 sposob

var tab3 = ["wiosna", "lato", "jesien", "zima"];

console.log(tab3);

//łaczenie tablic

var tab4 = tab.concat(tab2).concat(tab3);

console.log(tab4);