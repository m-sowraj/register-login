<?php

$servername = "localhost:3306";
$username_db = "root";
$password_db = "root";
$dbname = "data";

$conn = new mysqli($servername, $username_db, $password_db, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$username = $_POST['email'];
$password = $_POST['password'];
$stmt = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$stmt->store_result();
$response = array();
if ($stmt->num_rows > 0) {
    $response['status'] = "logined";
} else {
    $response['status'] = "failed";
}
$stmt->close();
$conn->close();
header('Content-Type: application/json');
echo json_encode($response);
?>
