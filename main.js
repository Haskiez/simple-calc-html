document.onreadystatechange = function() {
    if (document.readyState = "interactive") {
        
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function multiplyStuff(){
   var valueA =  document.getElementById("a").value;
   var valueB = document.getElementById("b").value;

   if(valueA === "" || valueB === "" || valueA === " " || valueB === " ")
   {
       window.alert("You have to submit a value");
   }
   else{
       document.getElementById("answer").value = valueA * valueB;
   }
}
function addStuff(){
    var valueA =  document.getElementById("a").value;
    var valueB = document.getElementById("b").value;
 
    if(valueA === "" || valueB === "" || valueA === " " || valueB === " ")
    {
        window.alert("You have to submit a value");
    }
    else{
        document.getElementById("answer").value = parseFloat(valueA) + parseFloat(valueB);
    }
 }
 function subtractStuff(){
    var valueA =  document.getElementById("a").value;
    var valueB = document.getElementById("b").value;
 
    if(valueA === "" || valueB === "" || valueA === " " || valueB === " ")
    {
        window.alert("You have to submit a value");
    }
    else{
        document.getElementById("answer").value = valueA - valueB;
    }
 }
 function divideStuff(){
    var valueA =  document.getElementById("a").value;
    var valueB = document.getElementById("b").value;
 
    if(valueA === "" || valueB === "" || valueA === " " || valueB === " ")
    {
        window.alert("You have to submit a value");
    }
    else{
        document.getElementById("answer").value = valueA / valueB;
    }
 }