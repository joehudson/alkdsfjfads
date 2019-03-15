<?php
//front
error_reporting(E_ALL);
ini_set('display_errors', 1);

//needs to be directed to mid
//$url = 'http://web.njit.edu/~hy276/beta/back/submitQuestion.php';
//$url = 'http://web.njit.edu/~hy276/beta/back/test.php';
$url = 'http://web.njit.edu/~jmd35/beta/mid/submitQuestion.php';

$getData = $_POST;

$send = json_encode($getData, true);

//var_dump($send);

$opts = [
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => 1,
  CURLOPT_FOLLOWLOCATION => 1,
  CURLOPT_POST => 1,
  CURLOPT_POSTFIELDS => $send,
];

$ch = curl_init();

curl_setopt_array($ch, $opts);

$result = curl_exec($ch);

if ($result === false) {
  die('request failed');
}

curl_close($ch);

echo $result;
 ?>
