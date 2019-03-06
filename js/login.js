function logger(){
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('button pressed');
    }
  }
  ajax.open("POST", "login.php", true);
  ajax.send();

}
