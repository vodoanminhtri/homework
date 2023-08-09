<!DOCTYPE html>
<html lang="en">
<head>

    <title>Grocery List</title>
</head>
<body>
    <h2>Grocery List</h2><br>
    <p>Enter your items below:</p>
    <input type="text" id="Items"><br>
    <input type="button" value="Submit" onclick="itemsAdd()">
    <p id="result1"></p>
    <p id="result2"></p>

    <script>
        var groceryItems = [];
        
        function itemsAdd(){
            var addedItems = document.getElementById("Items").value;

            groceryItems.push(addedItems);
            groceryItems.sort();

            if (addedItems == "done"){
            document.write("Your added items include: " + groceryItems + "<br>");
            document.write("You have a total of " + groceryItems.length + " in your list.");
            }
        }

    </script>
</body>
</html>
