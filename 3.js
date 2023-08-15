<!DOCTYPE html>
<html>
<body>

<script>

  /* *************POKER DICE ***************

  Creates 5 dice with A, K, Q, J, 10, 9.
  Dice all roll.
  Roll gives results of each of the 5 dice.

  *************POKER DICE *************** */

  function Dice(sides) {
    this.sides = sides;
    this.values = [];
    for(i = 0; i < this.sides; i++){
      this.values[i]=i;
    }

    var pokerSide = ["A", "K", "Q", "J", "10", "9"];
    this.poker = function() {
      for(i = 0; i < this.sides; i++){
        this.values[i] = pokerSide[i];
      }
      
    this.roll = function() {
      var showing = Math.ceil(Math.random()*this.sides);
      return this.values[showing];
    }
    }
  } //curly bracket missing


  var myDice = []; //myDice was spelled as myDie
  for (c = 0; c < 5; c++){
    myDice[c] = new Dice(5); 
    myDice[c].poker();
  }

  var output = "";
  for(k = 0; k < 5; k++){
    output += myDice[k].roll();
    output += " ";
  }

  alert(output);

</script>

</body>
</html>
