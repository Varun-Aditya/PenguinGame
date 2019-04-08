
var beasts = ['penguin1', 'penguin2', 'penguin3', 'penguin4', 'penguin5', 'penguin6', 'penguin7', 'penguin8', 'yeti']
var score = 0;
var lives = 3;
var min = 0, sec = 30;
var touched = [false, false, false, false, false, false, false, false, false];
var counter = 0;

//================== INITIAL SETTINGS =================================

function initialSettings(greet = true, time1 = 3500, time2 = 3900) {


		localStorage.setItem('score', 0);
		score + Number(localStorage.getItem('score'))
	

		localStorage.setItem('lives', 3);
		lives + Number(localStorage.getItem('lives'))
	

	if (greet) {
		setTimeout(function () { $('#display').text('hello') }, 500);
		setTimeout(function () { $('#display').text('Let`s play !!!') }, 1500);
		setTimeout(function () { $('#display').text('') }, 2500);
		setTimeout(function () { $(`#display`).remove(); }, 2600);
	} else {
		min = 0; sec = 30;
		$(`#display`).remove();
		$("#buttons_container").toggle();
	}

	setTimeout(function () { $(document).ready(function () { mixSquares() }) }, time1);
	setTimeout(function () { timer() }, time2);

}

//====================== RESET GAME ===================================

function resetGame(text, option) {
	let tempLives = Number(lives);

	if (option === 'win') { tempLives += 1 } else { tempLives -= 1 }

	localStorage.setItem('score', score);
	localStorage.setItem('lives', tempLives);
	$("#score").text("Score: " + score);
	$("#lives").text("Lives: " + lives);
	lives = tempLives;
	counter = 0;
	$('#display_left').text(text)
	setTimeout(function () {
		$('#display_left').text('')
		for (var i = 0; i < beasts.length; i++) {
			$(`.${beasts[i]}`).remove();
			touched[i] = false
		}
		mixSquares()

	}, 2000);
}

//====================== ALREADY FOUND ME ==============================

function alreadyFoundMe() {

	$('#display_left').text('You already found me !!');
	setTimeout(function () { $('#display_left').text('') }, 1000);
}

//======================= GAME OVER ===================================

function gameOver(message) {
	sec = undefined;
	counter = 0;
	for (var i = 0; i < beasts.length; i++) {
		$(`.${beasts[i]}`).remove();
		touched[i] = false
	}
	localStorage.removeItem('score');
	score = 0;
	$('#gameholder').append(`<div id=display></div>`);
	setTimeout(function () { $('#display').text(message) }, 1000);
	setTimeout(function () {
		$('#display').text('')
		$("#buttons_container").removeAttr("style").show();
	}, 4000);
}

//==================== SHUFFLE ARRAY ==================================
function shuffleArray(array) {

	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

}

var render = function (array) {
	shuffleArray(array)
	for (var i = 0; i < array.length; i++) {
		$('#gameholder').append(`<div class='${beasts[i]}'></div>`)
	}
}

//================== RENDER SQUARES =============================



function mixSquares() {
	render(beasts)

	$("#score").html("Score: " + score);//changed
	$("#lives").html("Lives: " + lives);//changed



	$(".penguin1").mousedown(function () {

			if (touched[0] === false) {
				  touched[0] = true;
					score = Number(score) + 1;
					$("#score").html("Score: " + score);
					counter += 1;
					if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
			} else {
				 alreadyFoundMe();
			}
	});

	$(".penguin2").mousedown(function () {

		if (touched[1] === false) {
			touched[1] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
		} else {
			alreadyFoundMe();
		}
	});

	$(".penguin3").mousedown(function () {
		 
		if (touched[2] === false) {
			touched[2] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
		} else {
			alreadyFoundMe();
		}
	});

	$(".penguin4").mousedown(function () {

		if (touched[3] === false) {
			touched[3] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
	} else {
		 alreadyFoundMe();
	}
	});

	$(".penguin5").mousedown(function () {

		if (touched[4] === false) {
			touched[4] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
		} else {
			alreadyFoundMe();
		}
	});

	$(".penguin6").mousedown(function () {
		
		if (touched[5] === false) {
			touched[5] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
		} else {
			alreadyFoundMe();
		}
	});

	$(".penguin7").mousedown(function () {

		if (touched[6] === false) {
			touched[6] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
		} else {
			alreadyFoundMe();
		}
	});

	$(".penguin8").mousedown(function () {
		
		if (touched[7] === false) {
			touched[7] = true;
			score = Number(score) + 1;
			$("#score").html("Score: " + score);
			counter += 1;
			if( counter === 8 ){ resetGame(`You win !!!`, 'win') }
		} else {
			alreadyFoundMe();
		}
	});

	$(".yeti").mousedown(function () {

		if (lives === 0) {
			gameOver('Game Over');
		} else {
			resetGame(`Yarrrrrr !!!!!`, 'lose')
		}

	});

}

//================================== TIMER =================================

function timer() {
	var x = setInterval(function () {


		if (sec > 0) { sec = sec - 1 }

		if (sec === 0 && min === 1) { sec = 60; min = 0; }

		if (sec === 0 && min === 0) {
			clearInterval(x);
			gameOver(`Time over!! you have ${score} score`);
		}

		if (sec < 10) {
			document.getElementById("timer").innerHTML = `0${min} : 0${sec}`
		} else {
			document.getElementById("timer").innerHTML = `0${min} : ${sec}`
		}

		if (sec === undefined) {
			clearInterval(x);
			document.getElementById("timer").innerHTML = `00 : 00`
		}

	}, 1000)
}

