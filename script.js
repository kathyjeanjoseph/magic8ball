$(document).ready(function() {

var magic8Ball = {};
magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];

$("#answer").hide();



magic8Ball.askQuestion = function(question) {

     var randomNumber = Math.random();
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
     var answer = this.listOfAnswers[randomIndex];
     $("#answer").text(answer);
     console.log(question);
     console.log(answer);

};


	var onClick = function(){
	    $("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
		var question = prompt ("Ask a Yes or No Question!");

		setTimeout(
    function() {
		magic8Ball.askQuestion (question);
		$("#8ball").effect( "shake" );
		$("#answer").fadeIn(4000);
		}, 3000);

	};



	$("#questionButton").click( onClick );



/*
magic8Ball.askQuestion("Will today be a great day?");
*/
});
