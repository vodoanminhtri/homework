<!DOCTYPE html>
<html lang="en">
<head>
    <title>Deck of Card</title>
</head>
<body>

    <script>
        //constructor function
        function Card(Suite, Rank, isVisible){
            this.Suite = Suite;
            this.Rank = Rank;
            this.Display = isVisible;
            this.hide = function(){
                this.Display = false;
            }
            this.show = function(){
                this.Display = true;
            }       
        }

        var Suite = ["Heart", "Spades", "Club", "Diamond"];
        var Rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        var Deck = [];

        for (var SuiteCount = 0; SuiteCount < 4; SuiteCount++){
            for (var RankCount = 0; RankCount < Rank.length; RankCount++){
        Deck.push("<br>" + Rank[RankCount] + " of " + Suite[SuiteCount]);       
        }
        }
        var DeckObject = new Card(Suite[SuiteCount],Rank[RankCount],true);
        
        document.write(DeckObject);
        document.write(Deck);

    
    </script>

</body>
</html>
