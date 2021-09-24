<?php
$host = "localhost";
$user ="root";
$pass ="";
$database = "db1";



$connection = mysqli_connect($host,$user,$pass,$database);

if($connection){
    echo "successfully connected<br>";
}else{
    die("couldn't connect");
}

$query = "CREATE DATABASE mydemodb";

$execute = mysqli_query($connection, $query);

if($execute){
echo "query executed";
}else{
echo "fail";
}

?>
