<?php
// Establish connection to MySQL
$servername = "localhost:3306";
$username = "root";
$password = "root";
$dbname = "data";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$username = $_POST['email'];
$password = $_POST['password'];
$sql = "INSERT INTO user (username, password) VALUES ('$username', '$password')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>