/* alert("uwaga"); */

//Instrukcje warunkowe

// document.getElementById("A").innerHTML = "Hello World";

var A = document.getElementById("A");

var x = 5, y = 10;
var age = 19;
var num = 0;


age >= 18 ?   alert("Pelnoletni") : alert("niepelnoletni");    // instrukcja warunkowa troj argumentowa 


/* if (age >= 18)
{
    A.innerHTML = "Pełnoletni";
}
else
{
    A.innerHTML = "Niepełnoletni";
} */

/* if (num > 0)
{
    A.innerHTML = "Dodatnia";
}
else                                //zagniezdzenie instrukcji warunkowej 
{
    if (num == 0)
    {
        A.innerHTML = "Rowna 0";
    }
    else
    {
        A.innerHTML = "Ujemna";
    }
} */

if (num > 0)
{
    A.innerHTML = "Dodatnia";
}
else if (num == 0)
{
   A.innerHTML = "Rowna 0";
}
else
{
    A.innerHTML = "ujemna";
}

