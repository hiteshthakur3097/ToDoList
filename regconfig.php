<?php 

define('DB_SERVER','localhost:8080');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'rahulthakur');
define('DB_NAME', 'database');

$link=mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);

if($link===false)
{
    die("ERROR: Could not connect" . mysqli_connect_error());
}

?>