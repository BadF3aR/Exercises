// Instrukcje skoku

var box = document.getElementById("result");
var box1 = document.getElementById("result1");

// Continue 


loop1:
for (j = 0; j < 3; j++) 
{
    loop2:
    for (var i = 0; i <= 10; i++) //petla w petli "label"
    {
        //box.innerHTML += " - <br>"
        if(i > 5)
        {
            continue loop1;         //przenosi do koknretnego obiegu/petli
        }
        if (i % 2 == 1)
        {
            continue;
        }
        box.innerHTML += j + " - " + i + "<br>";
    }
}
// Break
top:
for (var j = 0; j < 3; j++)
{
    inner:
    for (var i = 0; i <= 10;  i++)
    {
        if( i == 5)
        {
            break top;          //konczy pętle zewnetrzna 
        }
        box1.innerHTML += j + " - " + i + "<br>";
    }
}

//------------

skip:
{
    alert("Warning!")
    break skip;
    alert("Skip!")
}