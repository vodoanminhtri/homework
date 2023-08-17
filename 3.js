<!DOCTYPE html>
<html lang="en">
<head>
    <title>Quarterly Branch Banking Employee Survey</title>
</head>
<body>
    <h1>Q3 Branch Banking Employee Survey</h1>
    <form id="Survey">
        Full Name:
        <input type="text" id="fullName" placeholder="Enter your Full Name"><br>
        Email:
        <input type="text" id="eMail" placeholder="Enter your Email"><br>
        Employee ID:
        <input type="number" id="eppID" placeholder="Enter your Employee ID"><br>
        Application for recommendation:
        <select id="appName">
            <option value=""></option>
            <option value="TellerView">TellerView</option>
            <option value="CRV">CRV</option>
            <option value="SVP">SVP</option>
        </select><br>
        Please provide the feature/process you would like to make recommendation on:<br>
        <input type="text" id="appRec" placeholder="Your recommendation(s)"><br>
        <input type="button" id="btn" value="Submit" onclick="return(Submission())">

        <script>
            var full = document.getElementById("fullName").value;
            var email = document.getElementById("eMail").value;
            var eID = document.getElementById("eppID").value;
            var app = document.getElementById("appName").value;
            var rec = document.getElementById("appRec").value;

            function Submission(){
                if (!full){
                    alert("Please provide your Full Name");
                }else{
                    document.write("Full Name: " + full)
                }
            }

            
        </script>
    </form>
    
</body>
</html>
