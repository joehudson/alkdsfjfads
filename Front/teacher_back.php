<?php 

$postData = file_get_contents('php://input');

//$postData = json_decode($postData, true);

echo $postData;

