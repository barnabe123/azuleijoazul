<?php


$tName = filter_input(INPUT_POST, "tName");
$tPhone = filter_input(INPUT_POST, "tPhone");
$tOrigin = filter_input(INPUT_POST, "tOrigin");
$tDestination = filter_input(INPUT_POST, "tDestination");
$tDateFrom = filter_input(INPUT_POST, "tDateFrom");
$tDateTo = filter_input(INPUT_POST, "tDateTo");
$tNum = filter_input(INPUT_POST, "tNum");

if (!empty($tName) || !empty($tPhone) || !empty($tOrigin) || !empty($tDestination) || !empty($tDateFrom) || !empty($tDateTo) || !empty($tNum)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "form";
    // Create connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
    } else {
        $sql = "INSERT INTO form (tName, tPhone, tOrigin, tDestination, tDateFrom, tDateTo, tNum)
            values ('$tName', '$tPhone', '$tOrigin', '$tDestination', '$tDateFrom', '$tDateTo', '$tNum')";
        if ($conn->query($sql)) {
            include 'submitted.html';
             //echo "New record is inserted sucessfully";
        } else {
            echo "Error: " . $sql . "
            " . $conn->error;
        }
        $conn->close();
    }
} else {
    echo "Password should not be empty";
    die();
}


?>
