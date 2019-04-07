var x = document.querySelector('.dropDownList');
x.style.display = 'none';
function Display(){
    var x = document.querySelector('.dropDownList');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    } 
}
var modal = document.getElementById('myModel');
var subModel = document.getElementById('subModel');
var bigModel = document.getElementById('bigModel');
var btn = document.getElementById("ShowchoseYouLocation");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  subModel.style.display ="block";
  bigModel.style.display = "none";
  setTimeout(function(){
    subModel.style.display = "none";
    bigModel.style.display = "block";
  },2000);
  
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  var i = 1;
  var t  ;
  $('.slidericon').css('background-image', 'url(' + 'slider/img'+i+'.jpg' + ')');
function slideShow(){
 
 t = setInterval(slider,1000);
  function slider(){
    i++;
    if(i>3)
    i=1
    $('.slidericon').css('background-image', 'url(' + 'slider/img'+i+'.jpg' + ')');
  }
}
  $("#arowRight").mouseover(function(){
   
    clearInterval(t);

  });
  $('#arowRight').click(function(){
    i++;
    if(i>3)
    i=1
    $('.slidericon').css('background-image', 'url(' + 'slider/img'+i+'.jpg' + ')');
  });
  $("#arowRight").mouseout(function(){
    slideShow();
  });
  
  $("#arowLeft").mouseover(function(){
   
    clearInterval(t);

  });
  $('#arowLeft').click(function(){
    i--;
    if(i<1)
    i=3
    $('.slidericon').css('background-image', 'url(' + 'slider/img'+i+'.jpg' + ')');
  });
  $("#arowLeft").mouseout(function(){
    slideShow();
  });

  function goSign(){
  
    location.href="signin.html";
  }
//$('.slidericon').css('background-image', 'url(' + 'slider/img1.jpg' + ')');
