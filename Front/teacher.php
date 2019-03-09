<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$postData = file_get_contents('php://input');

//echo "<script>console.log($postData)</script>";

//$url = 'https://web.njit.edu/~jmd35/beta/login.php';
$url = 'https://web.njit.edu/~hy276/beta/teacher_back.php';
$postData = json_encode($postData);

$opts = [
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => 1,
  CURLOPT_FOLLOWLOCATION => 1,
  CURLOPT_POST => 1,
  CURLOPT_POSTFIELDS => $postData,
];

$ch = curl_init();

curl_setopt_array($ch, $opts);

$result = curl_exec($ch);

if ($result === false) {
  die('request failed');
}

curl_close($ch);

echo $result;

//handle create a question form
/*$createQuestionForm = [
  "questionTopic" => $postData['question-topic'],
  "question" => $postData['question'],
  "questionDifficulty" => $postData['question-difficulty'],
  "functionParams" => $postData['function-params'],
  ""
]; */

//echo "<script>console.log($createQuestionForm)</script>";










 ?>
