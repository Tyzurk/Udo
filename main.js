var pillar = document.getElementById('pillar');
var gap = document.getElementById('gap');
var character = document.getElementById('character');
var jumping = 0;
var counter = 0;

//Random gaps

gap.addEventListener('animationiteration', () => {
  var random = -((Math.random() * 400) + 120); //increase gap by adding more
  gap.style.top = random + 'px';
  counter++;
});

//Gravity

setInterval(function() {

  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  if (jumping == 0) {
    character.style.top = (characterTop + 4) + 'px';
  }
  var pillarLeft = parseInt(window.getComputedStyle(pillar).getPropertyValue('left'));
  var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue('top'));
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  var invTop = -(600 - characterTop);



  if (characterTop > 572 || (((invTop > (gapTop + 90) || (invTop < gapTop)) && (pillarLeft > -50) && (pillarLeft < 20)))) {
    alert('GAME OVER \nPoints: ' + (counter - 1));
    character.style.top = 250 + 'px';
    counter = 0;
  }

}, 15)

//Japak

function jump() {
  jumping = 1;
  let jumpcount = 0;
  var jumpInterval = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (characterTop > 52) {
      character.style.top = (characterTop - 3) + 'px';//increase jump height by subtracting more
    }
    if (jumpcount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpcount = 0;
    }
    jumpcount++;
  }, 10)
}