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
	$('.numberTotal').html(myTotal);
	
	// The counters for wins and losses.
	$('.winCount').html(winCounter);
	$('.loseCount').html(loseCounter);

	

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)	};

	var compNumber = randomNumber(19, 120);
	$('.compNumber').html(compNumber);

	$(".blueGem").click(function() {
		myTotal += bluGem;
		$('.numberTotal').html(+myTotal);
		winLose()

	});


	$(".redGem").click(function() {
		myTotal += redGem;
		$('.numberTotal').html(myTotal);
		winLose()

	});


	$(".greenGem").click(function() {
		myTotal += grnGem;
		$('.numberTotal').html(myTotal);
		winLose()

	});


	$(".yellowGem").click(function() {
		myTotal += yelGem;
		$('.numberTotal').html(myTotal);
		winLose()
	});


	var winLose = function() {

		if (myTotal == compNumber) {
			winCounter++;
			alert("Congratulations, We have a winner!")
			$('.wins').html(winCounter);
			restart();
		}

		if (myTotal > compNumber) {
			loseCounter++;
			alert("Sorry, You lose this round.");
			$('.losses').html(loseCounter);;
			restart();


		}
	}

	var restart = function () {

		myNumber = 0;
		$(".numberTotal").html(myTotal);
		compNumber = randomNumber(19, 120);
		$('.compNumber').html(compNumber);


		bluGem = Math.floor((Math.random() * 12) + 1);
		redGem = Math.floor((Math.random() * 12) + 1);
		grnGem = Math.floor((Math.random() * 12) + 1);
		yelGem = Math.floor((Math.random() * 12) + 1);



	}

});