<!-- 
    COMP 333: Software Engineering
    Nathan Hausspiegel
-->

<!DOCTYPE HTML>

<html lang="en">

<head>

    <meta charset="utf-8">

    <title>music-db</title>
    <h1>music-db</h1>

</head>
 
<body>
    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "music-db";

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        if(isset($_REQUEST["submit"])) {
            // Variables for the output and the web form below.
            $ratings_out = "";
            $s_user = $_REQUEST['username'];

            // Check that the user entered data in the form.
            if(!empty($s_user)){
                // If so, prepare SQL query with the data.
                $sql_query = "SELECT * FROM ratings WHERE username = ('$s_user')";
                // Send the query and obtain the result.
                // mysqli_query performs a query against the database.
                $result = mysqli_query($conn, $sql_query);
                $curr = '';
                while ($row =  mysqli_fetch_array($result)) {
                    $curr .= $row['song'] . " -> " . $row['rating'] . '<br>';
                }
                $ratings_out = $curr;
            }
            else {
                $ratings_out = "Please enter a username.";
            }
        }

        $conn->close();
    ?>

    <h2>Retrieve songs by username</h2>

    <form method="GET" action="">
    Username: <input type="text" name="username" placeholder="Enter Username" /><br>
    <input type="submit" name="submit" value="Retrieve"/>
    </form>

    <!-- 
        Make sure that there is a value available for $ratings_out.
        If so, print to the screen.
    -->
    <p><?php 
        if(!empty($ratings_out)){
        echo $ratings_out;
        }
    ?></p>
    </form>

    <br>
    <a href="index.html">Home</a>
</body>

</html>