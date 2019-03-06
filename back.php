<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  //test that the connection and info sent correctly
  echo "<script>console.log('Curled to back')</script>";
  //print_r($_POST);

  $usr = $_POST['username'];
  $pw = $_POST['password'];

  //echo "<script>console.log('username=" . $usr . " password=" . $pw . "')</script>";

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

  //insert one teacher + student into database for testing (comment out after you do it once)
  $hashedPass = password_hash($pw, PASSWORD_DEFAULT);
  $insertEntry = mysqli_query($conn, "INSERT INTO `student_logins`(`ucid`, `Password`) VALUES ([$usr],[$hashedPass])");
  //$insertEntry = mysqli_query($conn, "INSERT INTO `teacher_logins`(`ucid`, `Password`) VALUES ([$usr],[$hashedPass])");
  if ($insertEntry) {
    echo "<script>console.log('inserted an entry to the DB')</script>";
  }
  else
    echo "<script>console.log('insertion failed')</script>";
  //mysqli_query($conn, "INSERT INTO `teacher_logins`(`ucid`, `Password`) VALUES ([$usr],[$hashedPass])");
  /*
  $student_login_query = "SELECT `ucid` FROM `student_logins` WHERE `ucid` = '$username'";
  $teacher_login_query = "SELECT `ucid` FROM `teacher_logins` WHERE `ucid` = '$username'";
  //$passVerify = password_verify();
  if ($res_login_query = mysqli_query($conn, $student_login_query)) {
    echo "<script>console.log('student tried to log in')</script>";
  }
  else if ($res_login_query = mysqli_query($conn, $teacher_login_query)) {
    echo "<script>console.log('teacher tried to log in')</script>";
  }
  else {
    echo "<script>console.log('someone not in the DB tried to log in')</script>";
  }
*/
?>
