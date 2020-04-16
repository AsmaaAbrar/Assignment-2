var index = 1;
function changeImgFun(){
  var images = [ 'img1.jpg', 'img2.jpg','img3.jpg','img4.jpg' ];
  var img = document.getElementById("img");
  img.src = images[index];
  index++;
  if( index==images.length ){
    index = 0;
  }
}

function displayAlertFun(){
  var correctAnswer = document.getElementById('correctAnswer');
  var wrongAnswer1  = document.getElementById('wrongAnswer1');
  var wrongAnswer3  = document.getElementById('wrongAnswer2');
  var wrongAnswer3  = document.getElementById('wrongAnswer3');

  if(correctAnswer.checked){
    alert("Correct Answerr");
  }
  else if (wrongAnswer1.checked || wrongAnswer2.checked || wrongAnswer3.checked) {
    alert("Wrong Answerr");
  }
  else {
    alert("Choose answer please");
  }
}

// // another answer using querySelector
// function displayAlertFun(){
//   var correctAnswer = 'Baghdad'
//   var answer = document.querySelector('input[name="choice"]:checked').value;
//   (answer === correctAnswer)
//     ? alert("Correct Answerr")
//     : alert("Wrong Answerr");
// }
