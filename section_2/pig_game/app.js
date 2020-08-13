let $ = function(id){
  return document.getElementById(id);
}

let getRandomNumber = function(max){
  if(!isNaN(max)){
    return Math.floor(Math.random() * max) + 1;
  }
}

let changePlayer = function(){
  if($('current').firstChild.nodeValue === $('player1').value){
    $('current').firstChild.nodeValue = $('player2').value;
  }else{
    $('current').firstChild.nodeValue = $('player1').value;
  }
  $('die').value = '0';
  $('total').value = '0';
  $('roll').focus();
}

let newGame = function(){
  $('score1').value = '0';
  $('score2').value = '0';

  if($('player1').value === '' || $('player2').value === ''){
    $('turn').removeAttribute('class');
    alert('please enter two player names.');
  }else{
    $('turn').setAttribute('class', 'open');
    changePlayer();
  }
}

let rollDice = function(){
  let total = parseInt($('total').value);
  let die = getRandomNumber(6);
  if(die === 1){
    total = 0;
    changePlayer();
  }else{
    total += die;
  }
  $('die').value = die;
  $('total').value = total;
}
 
let holdTurn = function(){
  let score;
  let total = parseInt($('total').value);
  if($('current').firstChild.nodeValue === $('player1').value){
    score = $('score1');
  }else{
    score = $('score2');
  }

  score.value = parseInt(score.value) + total;
  if(score.value >= 100){
    alert($('current').firstChild.nodeValue + ' WINS!');
    newGame();
  }else{
    changePlayer();
  }
}

window.onload = function(){
  $('new_game').onclick = newGame;
  $('roll').onclick = rollDice;
  $('hold').onclick = holdTurn;
}
