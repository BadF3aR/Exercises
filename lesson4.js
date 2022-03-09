// Instrukcje skoku

var box = document.getElementById("result");
var box1 = document.getElementById("result1");

// Continue 
for (j = 0; j < 3; j++)
{
    for (var i = 0; i <= 10; i++)
    {
        if (i % 2 == 1)
        {
            continue;
        }
        box.innerHTML += j + " - " + i + "<br>";
    }
}
// Break

for (var i = 0; i <= 10;  i++)
{
    if( i == 5)
    {
        break;
    }
    box1.innerHTML += i + "<br>";
}