var links = [];
var currentIndex = window.location.href;


links[0]=""
links[1]=""
links[2]=""
links[3]=""
links[4]=""

function randomNum(){
  links.filter(links => links != window.location.href);        
  //returns array without the currentIndex 
  var filterArr = links.filter(links => links != window.location.href);

 window.location=filterArr[Math.floor(Math.random()*filterArr.length)];
    //runs random function from the filtered array 
  }

  

