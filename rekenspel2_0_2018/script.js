const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let counter = 0;
let numSums = 10;

function init(){
  //
    for(i=0; i<numSums; i++)
  {
      assignments.push(makeSum());
  }
  myAssignment.innerHTML = assignments[counter].numA + " X " + assignments[counter].numB;
  }


function inputHandler(evt){
  //
  if(evt.keyCode == 13){
    //  alert(myInput.value)
    assignments[counter].myans = myInput.value;
    counter++;
    myInput.value = '';


    if(counter >= numSums){
        evaluate();
    } else{
        myAssignment.innerHTML = assignments[counter].numA + " X " + assignments[counter].numB;
    };

    console.log(assignments,myInput.value);
  }
}

function makeSum(){
  //
  let mySum = {};
  mySum.numA = getNumber();
  mySum.numB = getNumber();
  mySum.ans = mySum.numA * mySum.numB;
  return mySum;
}


function evaluate()
{
    myAssignment.style.display = "none";
    myInput.style.display = "none";
    feedback.style.display = "block";

    let myTable = document.createElement('table');
    myTable.setAttribute('border', '1');

    for (let  i=0; i< assignments.length; i++)
    {
        let row = myTable.insertRow();
        if(assignments[i].ans == assignments[i].myans)
        {
            row.className = "good";
        }
        else
        {
            row.className = "wrong";
        }
        let cell1 = row.insertCell();
        cell1.innerHTML = assignments[i].numA + " X " + assignments[i].numB + " = " + assignments[i].ans;
        let cell2 = row.insertCell();
        cell2.innerHTML = assignments[i].myans;
    }
    feedback.appendChild(myTable);
}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

myInput.addEventListener('keydown',inputHandler,false);
feedback.style.display = "none";
myInput.focus();

init();
