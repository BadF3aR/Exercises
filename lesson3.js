// Pętle 

var box = document.getElementById("result");
var box1 = document.getElementById("result1");

//While

var i = 10;

while(i < 10)
{
    box.innerHTML += i + "<br>";
    i++;
}

// Do while zawsze wykona sie przynajmniej raz 

var j = 10;

do
{
    box1.innerHTML += j + "<br>";
    j++;
} while( j < 10);