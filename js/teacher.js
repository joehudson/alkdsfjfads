function SwapDivs(div1, div2) {
  d1 = document.getElementById(div1);
  d2 = document.getElementById(div2);
  if (d2.style.display == "none") {
    d1.style.display = "none";
    d2.style.display = "block";
  }
  else {
    d1.style.display = "block";
    d2.style.display = "none";
  }
}

function submitQuestion() {
  const form = {
    topic: document.getElementById('topic'),
    question_text: document.getElementById('question_text'),
    difficulty: document.getElementById('difficulty'),
    parameters: document.getElementById('parameters'),
    input1: document.getElementById('input1'),
    output1: document.getElementById('output1'),
    input2: document.getElementById('input2'),
    output2: document.getElementById('output2'),
    submit: document.getElementById('submit-question')
  };

    form.submit.addEventListener('click', () => {
      const request = new XMLHttpRequest();

      request.onload = function() {

        let responseObj = null;

        try {
          responseObj = JSON.parse(request.responseText);
        } catch (e) {
          console.error('could not parse json');
          console.log("response text" + request.responseText);
        }
        if (responseObj) {
          handleResponse(responseObj);
        }
      };

    const requestData = `topic=${form.topic.value}&question_text=${form.question_text.value}&difficulty=${form.difficulty.value}&parameters=${form.parameters.value}&input1=${form.input1.value}&output1=${form.output1.value}&input2=${form.input2.value}&output2=${form.output2.value}`;

    request.open("post", "createQuestion.php");
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // didnt include 'application/... in the options'
    request.send(requestData);

    function handleResponse(responseObj) {
      if (responseObj.msg == 'question added') {
        console.log('question added');
        alert('question was added!');
      }
      if (responseObj.msg == 'not added') {
        console.log('not added');
      }
    };
  });
}

function showQuestions() {
  const request = new XMLHttpRequest();

  request.onload = function () {
    document.getElementById('question-table').innerHTML = this.responseText;
    console.log('loaded showQuestions function');
  };
  request.open("get", "getQuestionBank.php");
  request.send();
}

function showQuestionTblChecks() {
  const request = new XMLHttpRequest();

  request.onload = function () {
    document.getElementById('create-exam').innerHTML = this.responseText;
    console.log('loaded addQuestionBank function');
  };
  request.open("get", "showQuestionTblChecks.php");
  request.send();
}

function handleCheck() {
  //if a box is checked, loop through the row and put it into some post data to send

  const form = {
    submit: document.getElementById('submit-exam')
  };
  var table = document.getElementById('addQuestionTbl');
  var rowCount = table.rows.length;

  form.submit.addEventListener('click', () =>{
    console.log('submit button clicked');
    for (var i = 1; i < rowCount; i++) { //loops through the entire row length
      var row = table.rows[i]; //get the i row
      console.log('row');
      console.log(row);
      var chkbox = row.cells[0].childNodes[1]; //get check boxes
      console.log('chkbox');
      console.log(chkbox);
      if (chkbox.checked) { //get data if box was checked
        console.log('this row was checked');
        for (var j = 1; j < rowCount; j++) { //loop through row cells
          data = row.cells[j].childNodes[j];
          console.log(data);
        }
      }
    }
  });

}
