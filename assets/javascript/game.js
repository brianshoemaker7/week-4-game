$(document).ready(function () {
	
	
	// This is the players number.
	var myTotal = 0;

	// This determines the value of the gems.
	bluGem = Math.floor((Math.random() * 12) + 1);
	redGem = Math.floor((Math.random() * 12) + 1);
	grnGem = Math.floor((Math.random() * 12) + 1);
	yelGem = Math.floor((Math.random() * 12) + 1);

	// This is keeping track of the wins vs. losses count.
	var winCounter = 0;
	var loseCounter = 0;
	

	// These are the variables I need for the random number generator
	var minNumber = 19;
	var maxNumber = 120;


	// This is where you keep the total score each round.
	$('.numberTotal').html('Your Total: ' + myTotal);
	
	// The counters for wins and losses.
	$('.winCount').html('Won: ' + winCounter);
	$('.loseCount').html('Lost: ' + loseCounter);

	
	// Math for the random number to use
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)	};

	
	// Sets sounds for the clicks and win
	var audio = new Audio('assets/audio/gemclick.mp3');
	var applause = new Audio('assets/audio/applause.mp3');
	
	// Generates the random number
	var compNumber = randomNumber(19, 120);
	$('.compNumber').html('No. to Match: ' + compNumber);


	// Adds the gem number to the total
	$(".blueGem").click(function() {
		myTotal += bluGem;
		$('.numberTotal').html('Your Total: ' + myTotal);
		audio.play();
		winLose()

	});


	$(".redGem").click(function() {
		myTotal += redGem;
		$('.numberTotal').html('Your Total: ' + myTotal);
		audio.play();
		winLose()

	});


	$(".greenGem").click(function() {
		myTotal += grnGem;
		$('.numberTotal').html('Your Total: ' + myTotal);
		audio.play();
		winLose()

	});


	$(".yellowGem").click(function() {
		myTotal += yelGem;
		$('.numberTotal').html('Your Total: ' + myTotal);
		audio.play();
		winLose()
	});

	// Check to see if the player won or lost
	var winLose = function() {

		if (myTotal == compNumber) {
			alert("Congratulations, We have a winner!");
			applause.play();
			winCounter++;
			$('.winCount').html('Won: ' + winCounter);
			restart();
		}

		if (myTotal > compNumber) {
			alert("Sorry, You lose this round.");
			loseCounter++;
			$('.loseCount').html('Lost: ' + loseCounter);;
			restart();


		}
	}

	// Resets the game to play again
	var restart = function() {

		myTotal = 0;
		$(".numberTotal").html('Your Total: ' + myTotal);
		compNumber = randomNumber(19, 120);
		$('.compNumber').html('No. to Match: ' + compNumber);


		bluGem = Math.floor((Math.random() * 12) + 1);
		redGem = Math.floor((Math.random() * 12) + 1);
		grnGem = Math.floor((Math.random() * 12) + 1);
		yelGem = Math.floor((Math.random() * 12) + 1);



	}

});