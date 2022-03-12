//Obiekty , funckje na rzecz obiektow to metody

var result = document.getElementById("result");

// 1 sposob deklaracji
var adam = {name: "Adam", age: 25,
    show/* : function */()          // dwa sposoby zapisu
    {
        return "Imie: " + this.name + ", Wiek: " + this.age + "<br>";
    }
};

console.log(adam);

result.innerHTML += adam.name + "&nbsp";    // 1 sposb &nbsp non-breaking space
result.innerHTML += "lat: " + adam["age"];  // 2 sposob

result.innerHTML += adam.show();

//2 sposob deklaracji

function Person(name, age)
{
    this.name = name;
    this.age = age;
    this.show = function()
    {
        return "Imie: " + this.name + ", Wiek: " + this.age + "<br>";
    }
}

var bartek = new Person("Bartek", 19);
console.log(bartek);

result.innerHTML += "<br>" + bartek.name;

var ola = new Person("Ola", 22);
console.log(ola);

result.innerHTML += bartek.show();
result.innerHTML += ola.show();

//------------------


