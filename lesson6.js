// Funkcje 2

var result = document.getElementById("result");

//return - zwraca wartosci z funkcji

function add(a, b)
{
   return a + b;
}

add(5, 5);

var sum = add(5, 5);
result.innerHTML += "Suma = " + sum + "<br>";
//alert(add(20, 20));

// rekurencja

function silnia(n)
{
    if (n == 1)
        return 1;
    else 
        return n * silnia(n - 1);
}

result.innerHTML += "Silnia = " + silnia(5);