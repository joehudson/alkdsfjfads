<?php
 
 //mysql credentials
  $dbhost = "sql1.njit.edu";
  $dbuser = "hy276";
  $dbpass = "HY9Co7Qkq";
  $dbname = "hy276";
  //login to
  $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
  
  if (!$conn) {
    die("Cannot connect to DB: " . mysqli_connect_error());
  }
  
  $getdata = file_get_contents('php://input');
  $array  = json_decode($getdata,true);
  
  /*$array = ["question_text" => "Hello",
            "topic" => "Loop",
            "difficulty" => "Hard",
            "input1" => "1",
            "output1" => "2",
            "input2" => "3",
            "output2" => "4"
               ];
  */
  
  
  $question_text    = $array['question_text'];
  $topic            = $array['topic'];
  $difficulty       = $array['difficulty'];
  $input1           = $array['input1'];
  $output1          = $array['output1'];
  $input2           = $array['input2'];
  $output2          = $array['output2'];
  
  

  $query = "INSERT INTO `question_bank` (`question_text`, `topic`, `difficulty`, `input1`, `output1`, `input2`, `output2`) VALUES ('$question_text', '$topic', '$difficulty', '$input1', '$output1', '$input2', '$output2')";
  

  
  if ($result = mysqli_query($conn, $query)) { //checks if the query worked
      echo "<script>console.log('query worked')</script>";
  }
  
  else {
      echo "<script>console.log('Something went wrong')</script>";
    }
  
  mysqli_close($conn);
  

?>
