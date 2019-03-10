<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

  $topic = $_POST['topic'];
  $question_text = $_POST['question_text'];
  $difficulty = $_POST['difficulty'];
  $paramters = $_POST['parameters'];
  $input1 = $_POST['input1'];
  $output1 = $_POST['output1'];
  $input2 = $_POST['input2'];
  $output2 = $_POST['output2'];

  $postData = [
    "topic" => "$topic",
    "question_text" => "$question_text",
    "difficulty" => "$difficulty",
    "parameters" => "$paramters",
    "input1" => "$input1",
    "output1" => "$output1",
    "input2" => "$input2",
    "output2" => "$output2",
  ];

  var_dump($postData);
  /*
  /*$postData = [
    "topic" => "$_POST['topic']",
    "question_text" => "$_POST['question_text']",
    "difficulty" => "$_POST['difficulty']",
    "parameters" => "$paramters",
    "input1" => "$input1",
    "output1" => "$output1",
    "input2" => "$input2",
    "output2" => "$output2"
  ];*/

$url = 'https://web.njit.edu/~jmd35/beta/createQuestion.php';
//$url = 'https://web.njit.edu/~hy276/beta/back/createQuestion.php';

$postData = json_encode($postData);

$opts = [
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => 1,
  CURLOPT_FOLLOWLOCATION => 1,
  CURLOPT_POST => 1,
  CURLOPT_POSTFIELDS => $postData
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
