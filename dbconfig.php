<?php
$servername = 'localhost';
$dbname = 'esewa';
$username = 'root'; // Your database user
$password = ''; // Your Database password

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	echo "Failed to connect to MySQL" . $conn->connect_error;
	exit;
}
