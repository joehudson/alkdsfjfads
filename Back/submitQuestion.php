<?php
//back
error_reporting(E_ALL);

$getData = array();

$array = file_get_contents("php://input");

var_dump($array); //array is just NULL here, so I cant do anything with the input

$getData = json_decode($array, true);


if (!isset($test)) {
  $test = new stdClass();
}

$test->response = $getData;
$test->msg = "question insert failed";
$test = json_encode($test);

echo $test;

/*
$dbhost = "sql1.njit.edu";
$dbuser = "hy276";
$dbpass = "HY9Co7Qkq";
$dbname = "hy276";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
  die("Cannot connect to DB: " . mysqli_connect_error());
}

$itWorked = false;
$length = count($getData);

for ($i = 1; $i < $length; $i+=6) {
  foreach ($getData as $item) {
    $id = $items[i];

    $query = "INSERT INTO `exams` (`question_id`) VALUES ('$id')";

    if ($response = mysqli_query($conn, $query)) {
        $GLOBALS['itWorked'] = true;
    }
    else {
      die("query failed");
    }
  }
}

if (!isset($query_json)) {
  $query_json = new stdClass();
}
if ($itWorked) {
  $query_json->msg = "question insert ok";
}
if ($itWorked === false) {
  $query_json->response = $getData;
  $query_json->msg = "question insert failed";
}

$query_json = json_encode($query_json);

echo $query_json;

mysqli_close($conn);

?>
