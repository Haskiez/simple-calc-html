function multiplyStuff(){
   var valueA =  $.trim(document.getElementById("a").value);
   var valueB = $.trim(document.getElementById("b").value);

   if(!isNaN(valueA) && !isNaN(valueB))
   {
        if(valueA === "" || valueB === "")
        {
            window.alert("You have to submit a value");
        }
        else{
            document.getElementById("answer").value = multiply(valueA, valueB);
        }
   }
   else{
        window.alert("You need to enter a valid number");
   }
}
function modStuff(){
    var valueA =  $.trim(document.getElementById("a").value);
    var valueB = $.trim(document.getElementById("b").value);
 
    if(!isNaN(valueA) && !isNaN(valueB))
    {
        if(valueA === "" || valueB === "")
        {
            window.alert("You have to submit a value");
        }
        else if(valueB === "0")
        {
            window.alert("Mod zero is undefined");
        }
        else{
            document.getElementById("answer").value = valueA % valueB;
        }
    }
    else{
        window.alert("You need to enter a valid number");
    }
 }
function addStuff(){
    var valueA =  $.trim(document.getElementById("a").value);
    var valueB = $.trim(document.getElementById("b").value);
    console.log(!isNaN(valueA));
    if(!isNaN(valueA) && !isNaN(valueB))
    {
        if(valueA === "" || valueB === "")
        {
            window.alert("You have to submit a value");
        }
        else{
            document.getElementById("answer").value = add(parseFloat(valueA), parseFloat(valueB));
        }
    }
    else{
        window.alert("You need to enter a valid number");
    }
 }
 function subtractStuff(){
    var valueA =  $.trim(document.getElementById("a").value);
    var valueB = $.trim(document.getElementById("b").value);
 
    if(!isNaN(valueA) && !isNaN(valueB))
    {
        if(valueA === "" || valueB === "")
        {
            window.alert("You have to submit a value");
        }
        else{
            document.getElementById("answer").value = subtract(valueA, valueB);
        }
    }
    else{
        window.alert("You need to enter a valid number");
    }
 }
 function divideStuff(){
    var valueA =  $.trim(document.getElementById("a").value);
    var valueB = $.trim(document.getElementById("b").value);
 
    if(!isNaN(valueA) && !isNaN(valueB))
    {
        if(valueA === "" || valueB === "")
        {
            window.alert("You have to submit a value");
        }
        else if(valueB === "0")
        {
            window.alert("Dividing by zero is undefined");
        }
        else{
            document.getElementById("answer").value = valueA / valueB;
        }
    }
    else{
        window.alert("You need to enter a valid number");
    }
 }
