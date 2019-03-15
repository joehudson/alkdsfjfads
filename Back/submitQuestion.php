<?php

function loop($array) {
  for ($i = 1; $i < $length; $i+=6) {
    foreach ($getData as $item) {
      $id = $items[$i];
      }
    }
    return $id;
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

$getData = file_get_contents('php://input');

$getData = json_decode($getData, true);

$dbhost = "sql1.njit.edu";
$dbuser = "hy276";
$dbpass = "HY9Co7Qkq";
$dbname = "hy276";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
  die("Cannot connect to DB: " . mysqli_connect_error());
}

$id;
$itWorked = false;
$length = count($getData);

for ($i = 1; $i < $length; $i+=6) {
  foreach ($getData as $item) {
    $GLOBALS['id'] = $item[$i];

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

$query_json = json_encode($query_json, true);

echo $query_json;

mysqli_close($conn);

?>
