<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Predefined demo</title>
</head>
<body> 
  <h2>Find Larger Number</h2>
  <script>
    var a = parseInt(prompt("Enter first number: "));
    var b = parseInt(prompt("Enter second number: "));
    var c = parseInt(prompt("Enter third number: "));
    if(a === b && b === c) {
        document.write("Equal numbers");
        alert("Equal numbers");
    } else {
        var largest = Math.max(a, b, c);
        document.write(largest + " Largest number");
        alert(largest + " largest number");
    }
  </script>  
</body>
</html>