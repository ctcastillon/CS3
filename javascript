<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p id="demo"></p>

<script>
    var age = 15;
    var maxAge = 90;
    var numPerDay = 200;
    var totalRequired = (numPerDay * 365) * (maxAge - age);

document.getElementById("demo").innerHTML =
"You will need " + totalRequired + " to last you until the ripe old age of " +maxAge;  
</script>

</body>
</html>
