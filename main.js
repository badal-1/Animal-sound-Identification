
function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AN2uVOctT/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var lion = 0;
var elephant = 0;
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("what_is_played").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("count_recognised").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+' Detected Lion - '+lion+' Detected Elephant - '+elephant;
    document.getElementById("what_is_played").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("count_recognised").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    image = document.getElementById('holder');

    if (results[0].label == "dog") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "cat") {
      image.src = 'meow.gif';
      cat = cat + 1;
    } else if(results[0].label == "lion"){
        image.src = 'roar.gif';
      lion = lion + 1;
    }
    else if(results[0].label == "elephant"){
        image.src = 'Elephant.png';
      elephant = elephant + 1;
    }
    else {
      image.src = 'listen.gif';
  }
}
}
