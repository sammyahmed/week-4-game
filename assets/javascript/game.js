// 1. create var/function that initializes the game
// 2. a random # should appear between 19-120, which will be the 
// goal of the game.
// 3. when the player clicks on a crystal, a random value between 
// 1-12 will be assigned to each crystal. The value of the crystal
// will be displayed in the "your score div." The score will increase
// upon each click, which will be the only indication of the value assigned 
// to that crystal.
// 4. The player must reach the goal # via his clicks of 
// strategic gems. If he matches the goal # the player wins.
// If the player goes over he loses.
// The wins and losses will increment upon each game completion
// and the game will restart with new values.

// window.onload = function() {

 window.onload = function(){
 	 var goal = Math.floor(Math.random() * 121 + 19);
 	 var score = 0;
	 var gem1 = Math.floor(Math.random() * 12 + 1);
	 var valAvail = [1-12];
	 // find the index of gem 1 in the array above
	 // delete used value from the array
	 // 
	 // var gem2 = valAvail[Math.floor(Math.random() * valAvail.length)];
	 var gem2 = Math.floor(Math.random() * 12 + 1);
	 var gem3 = Math.floor(Math.random() * 12 + 1);
	 var gem4 = Math.floor(Math.random() * 12 + 1);
	 document.querySelector("#goal").innerHTML = goal;
	 document.querySelector("#score").innerHTML = score;
	 console.log(gem1);
	 console.log(gem2);
	 console.log(gem3);
	 console.log(gem4);
	 console.log(goal);
}
	 var wins = 0;
	 var losses = 0;
	 var results = "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

	 document.querySelector("#progress").innerHTML = results;

	$("#gempic1").on("click",function(gem1){
		event.preventDefault();

		// if (gem1<score){

		// 	}; else if (gem1>Goal){

		// 		}; else (gem1===Goal){
					
		// };
		console.log(gem1);

	});
	$("#gempic2").on("click",function(){
		event.preventDefault();
		console.log(gem2);
	});
	$("#gempic3").on("click",function(){
		event.preventDefault();
		console.log(gem3);
	});
	$("#gempic4").on("click",function(){
		event.preventDefault();
		console.log(gem4);
	});

	

// steps left
// adding the value of the gems1 to the score variable 
// with the necessary conditions
// reseting the onload function at the end of a game

	


	

	