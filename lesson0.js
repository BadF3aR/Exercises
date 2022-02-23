// Operatory porównania 

var x = 5 == 5;
console.log(x);
console.log(typeof(x));

console.log("-----");

console.log(5 == 5);
console.log(5 == 5);

console.log(5 == "5");
console.log(5 === "5"); // 3*= sprawdz rowniez typ danych 

console.log("-----");
console.log(5 != 5);
console.log(5 != 0);

console.log(5 != "5");
console.log(5 !== "5");

console.log("----");

console.log(5 > 5);
console.log(5 >= 5);

console.log(5 < 5);
console.log(5 <= 5);

// Operatory logiczne

console.log(5 >= 5 || 5 == 1);  //  || znaczy or  

console.log(true && false);     // and wymaga 2x true

console.log(!5 > 0);            // not operator negacji zaprzeczenia

console.log(true || true && false); //kolejnosc wykonywania działan

console.log((true || true) && !false); // możliwość przeciązania 
