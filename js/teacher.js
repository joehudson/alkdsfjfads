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

function display(div) {
  d1 = document.getElementById(div)
  if (d1.style.display == "block") {
    d1.style.display = "none";
  }
  else {
    d1.style.display = "block";
  }
}

function showDivOnly(div1, div2, div3, div4) {

}

function submitQuestion() {
  const form = {
    topic: document.getElementById('topic'),
    question_name: document.getElementById('question_name'),
    question_text: document.getElementById('question_text'),
    difficulty: document.getElementById('difficulty'),
    input1: document.getElementById('input1'),
    output1: document.getElementById('output1'),
    input2: document.getElementById('input2'),
    output2: document.getElementById('output2'),
    submit: document.getElementById('submit-question')
  };

  //  form.submit.addEventListener('click', () => {
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

    const requestData = `topic=${form.topic.value}&question_name=${form.question_name.value}&question_text=${form.question_text.value}&difficulty=${form.difficulty.value}&input1=${form.input1.value}&output1=${form.output1.value}&input2=${form.input2.value}&output2=${form.output2.value}`;

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
//  });
}

function showQuestions() {
  const request = new XMLHttpRequest();

  request.onload = function () {
    document.getElementById('question-table').innerHTML += this.responseText;
  };
  request.open("get", "getQuestionBank.php");
  request.send();
}

function showQuestionTblChecks() {
  const request = new XMLHttpRequest();

  request.onload = function () {
    document.getElementById('create-exam').innerHTML += this.responseText;
  };
  request.open("get", "showQuestionTblChecks.php");
  request.send();
}

function handleCheck() {
  //if a box is checked, loop through the row and put it into some post data to send
  var table = document.getElementById('addQuestionTbl');
  var rowCount = table.rows.length;
  var chkCount = 0;
  var dataObj = {};
  var dataArr = [];

  for (var i = 1; i < rowCount; i++) { //loops through the entire row length
    var row = table.rows[i];
    var chkbox = row.cells[0].childNodes[1];
    if (chkbox.checked) { //get data if box was checked
      chkCount++;
      for (var j = 1; j < row.cells.length; j+=5) {
        var dataCell = row.cells[j].innerHTML;
        dataArr.push(dataCell);
      }
    }
    if (i <= chkCount) {
      dataObj[i] = dataArr;
      dataArr = [];
    }
  }

  var postData = dataObj;


  postData = JSON.stringify(postData);
  //console.log(postData);
  dataArr = [];

  const request = new XMLHttpRequest();

  request.onload = function() {
    let responseObj = null;

    try {
      responseObj = JSON.parse(request.responseText);
    } catch (e) {
      console.error('could not parse json');
      console.log("response: " + request.responseText);
    }
    if (responseObj) {
      console.log('handling response');
      handleResponse(responseObj);
    }
  };

  request.open('POST', 'submitQuestion.php');
  request.setRequestHeader('Content-type', 'application/json');
  console.log('original postdata ' + postData);
  request.send(postData);

  function handleResponse(responseObj) {
   if (responseObj.msg == 'question insert ok') {
      console.log('question added');
      alert('question was added!');
    }
    if (responseObj.msg == 'question insert failed') {
      console.log('not added' + request.responseText);
    }
    else {
      console.error('json couldnt be handled: ' + responseObj);
    }
  };
}

function addQuestionToExam() {
  const form = {
    qid: document.getElementById('qid'),
    qname: document.getElementById('qname'),
    qtext: document.getElementById('qtext'),
    top: document.getElementById('top'),
    diff: document.getElementById('diff')
  }
  var table = document.getElementsByTagName('table');
  var rowCount = table.rows.length;
  var chkCount = 0;
  var dataObj = {};
  var dataArr = [];
  var requestData = "";
  var tblElements = table.getElementsByTagName('td')['qid'];

  for (var i = 1; i < rowCount; i++) { //loops through the entire row length
    var row = table.rows[i];
    var chkbox = row.cells[0].childNodes[1];
    if (chkbox.checked) { //get data if box was checked
      chkCount++;
      for (var j = 1; j < row.cells.length; j+=5) {
        var dataCell = tblElements[j];
        console.log(dataCell);
      }
    }
    if (i <= chkCount) {
      if (i >= 2) {
        requestData += `&qid=${form.qid.innerHTML}`;
      }
      else {
        requestData += `qid=${form.qid.innerHTML}`;
      }
    }
  }
  console.log(requestData);
  const request = new XMLHttpRequest();

  request.onload = function() {
    let responseObj = null;

    try {
      responseObj = JSON.parse(request.responseText);
    } catch (e) {
      console.error('could not parse json');
      console.log("response: " + request.responseText);
    }
    if (responseObj) {
      console.log('handling response');
      handleResponse(responseObj);
    }
  };

  request.open('POST', 'test.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');console.log('original postdata ' + request);
  request.send(requestData);

  function handleResponse(responseObj) {
    if (responseObj.msg == 'question insert ok') {
       console.log('question added');
       alert('question was added!');
     }
     if (responseObj.msg == 'question insert failed') {
       console.log('not added' + request.responseText);
     }
     else {
       console.error('json couldnt be handled: ' + responseObj);
     }
  };
}
