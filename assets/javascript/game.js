//start jquery docment
$(document).ready(function() {

//setting target score 
	var computerGuess = Math.floor((Math.random() * 101) + 19);
	$('#randomNum').html(computerGuess);

//variables
	var wins = 0;
	var losses = 0;
	var total = 0;
	var numberCreator = [];

//random number for crystals
function crystalNumbers () {
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		numberCreator.push(num);
	}}
	crystalNumbers();

//creating click events
  $('.red').on ('click', function(){
			total = total + numberCreator[0];
			$('#total').text(total);
			})

	$('.blue').on ('click', function(){
			total = total + numberCreator[1];
			$('#total').text(total);
			})

	$('.yellow').on ('click', function(){
			total = total + numberCreator[2];
			$('#total').text(total);
			})

	$('.green').on ('click', function(){
			total = total + numberCreator[3];
			$('#total').text(total);
			})

//defining win or loss but can't get it figured out
function scoreGame() {
	if (computerGuess == total) {
			wins++;
			$('#wins').html(wins);
			gameReset();

	} else if (computerGuess < total) {	
			losses++;
			$('#losses').html(losses);
			gameReset();
		}};
	scoreGame();

//reset game
	function gameReset() {
		fourCrystalNumbers();
		var computerGuess = Math.floor((Math.random() * 101) + 19);
		$('#randomNum').html(computerGuess);

	}

});