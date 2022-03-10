// Funkcje

var result = document.getElementById("result");

add(5);
add(10, 4);
add(5, 10, 15);

function add(a, b) 
{
    if (typeof(b) === "undefined")
    {
        b = 0;
    }
    if (arguments.length < 3)
        result.innerHTML += a + "+" + b + "=" + (a + b) + "<br>"; 
    else
        result.innerHTML += a + "+" + b + "+" + arguments[2] + "=" + (a + b + arguments[2]) + "<br>"; 

}


//hello();

function hello()
{
    alert("Siemano!!");
}

