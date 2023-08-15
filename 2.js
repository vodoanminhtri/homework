
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
  var output = "";
  var KingCo = ["Seattle", "Bellevue", "Kirkland", "Mercer Island"];

  //1) define a new array called PierceCo with elements "Tacoma", "Sumner", "Puyallup".
  var PierceCo = ["Tacoma", "Sumner", "Puyallup"];
  //2) Combine PierceCo with KingCo to make a new array called Metro.
  var Metro = KingCo.concat(PierceCo);
  output+=Metro.toString() + "<br>";

  //3)Put "Everett" on the ride hand end of Metro.
  Metro.push("Everett");
  output+=Metro.toString() + "<br>";

  //4) Put Federal Way on the left hand end of Metro.
  Metro.unshift("Federal Way");
  output+=Metro.toString() + "<br>";

  //5) Alphabetize Metro.
  Metro.sort();
  output+=Metro.toString() + "<br>";

  //6) Remove the last element on the right hand side of Metro.
  Metro.pop();
  output+=Metro.toString() + "<br>";

  //7) Replace Kirkland and Mercer Island with Tukwila.
  Metro.splice(3, 2, "Tukwila");
  output+=Metro.toString() + "<br>";

  //8) Place Metro into reverse alphabetical order.
  Metro.reverse();
  output+=Metro.toString() + "<br>";

  //9) Sort Metro at random.
  Metro.sort(function(){return 0.5 - Math.random()});
  output+=Metro.toString() + "<br>";

  //10 Test code
  document.getElementById("demo").innerHTML = output.toString();  //Finish This!

/* Sample Output (last line may vary)
Seattle,Bellevue,Kirkland,Mercer Island,Tacoma,Sumner,Puyallup
Seattle,Bellevue,Kirkland,Mercer Island,Tacoma,Sumner,Puyallup,Everett
Federal Way,Seattle,Bellevue,Kirkland,Mercer Island,Tacoma,Sumner,Puyallup,Everett
Bellevue,Everett,Federal Way,Kirkland,Mercer Island,Puyallup,Seattle,Sumner,Tacoma
Bellevue,Everett,Federal Way,Kirkland,Mercer Island,Puyallup,Seattle,Sumner
Bellevue,Everett,Federal Way,Tukwila,Puyallup,Seattle,Sumner
Tukwila,Sumner,Seattle,Puyallup,Federal Way,Everett,Bellevue
Seattle,Federal Way,Sumner,Puyallup,Everett,Tukwila,Bellevue
*/

</script>

</body>
</html>
