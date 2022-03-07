// Pętle 

var box = document.getElementById("result");
var box1 = document.getElementById("result1");
var box2 = document.getElementById("result2")

//While

var i = 0;

while(i <= 5)
{
    box.innerHTML += i + "<br>";
    i++;
}

// Do while zawsze wykona sie przynajmniej raz 

var j = 0;

do
{
    box1.innerHTML += j + "<br>";
    j++;
} while( j <= 4);

// For
 for(var k = 0; k  <= 5; k++ )
 {
     box2.innerHTML += k + "<br>";
 }

