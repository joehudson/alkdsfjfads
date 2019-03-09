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

function viewQuestionBank() {

}

function submitQuestion() {
  const form = {
    questionTopic: document.getElementById('question-topic'),
    question: document.getElementById('question'),
    questionDifficulty: document.getElementById('question-difficulty'),
    functionParams: document.getElementById('function-params'),
    input1: document.getElementById('input1'),
    output1: document.getElementById('ouput1'),
    input2: document.getElementById('input2'),
    output2: document.getElementById('ouput2'),
  };
  const request = new XMLHttpRequest();

  request.onload = function() {
    console.log(request.responseText);
    console.log(form);
    let responseObj = null;

    try {
      responseObj = JSON.parse(request.responseText);
    } catch (e) {
      console.error('could not parse json');
    }
    if (responseObj) {
      handleResponse(responseObj);
    }
  };
  request.open("POST", "teacher.php");
  request.setRequestHeader('Content-type', 'x-www-form-urlencoded')
  request.send();

  function handleResponse(responseObj) {
    console.log("response handled" + responseObj);
  };
}
