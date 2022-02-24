//Instrukcje wyboru (switch)

var box = document.getElementById("a");

var color = "yellow";

switch (color)
{
    case "red":     // if (color == "red")
        box.style.backgroundColor = "red";
        box.style.color = "white";
        break;
    case "blue":    // else if (==)
        box.style.backgroundColor = "blue";
        box.style.color = "white";
        break;
    case "green":   // else if (==)
        box.style.backgroundColor = "green";
        box.style.color = "white";
        break;
    default:        // else  (==)
        box.style.backgroundColor = "grey";
        box.style.color = "white";
        break;
}