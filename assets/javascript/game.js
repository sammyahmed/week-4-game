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
 var gem1 = 0;
 var gem2 = 0;
 var gem3 = 0;
 var gem4 = 0;


}


	$("#gempic1").on("click",function(){
		gem1Value = Math.floor(Math.random() * 12 + 1);
		console.log(gem1Value);
	});
	$("#gempic2").on("click",function(){
		gem2Value = Math.floor(Math.random() * 12 + 1);
		console.log(gem2Value);
	});
	$("#gempic3").on("click",function(){
		gem3Value = Math.floor(Math.random() * 12 + 1);
		console.log(gem3Value);
	});
	$("#gempic4").on("click",function(){
		gem4Value = Math.floor(Math.random() * 12 + 1);
		console.log(gem4Value);
	});
}
	// var gem1Click = document.getElementById('gem1');
	// var gem2Click;
	// var gem3Click;
	// var gem4Click;
	
	// // if (gem1Click<gamegoal){

	// }; else if (gem1Click>gameGoal){

	// }; else (gem1Click===gameGoal){

	// };

	// var gem1Value = document.getElementById("gem1");
	// $("#gem1").on("click",function(){
	// 	if statement here
	// });

	// var totalScore = when any variation of gems are clicked until they =>
	// var gem1Add = $("#gem1").on("click", function(){
	// 	math(+ gem1Value);
	// });
	
	// console.log(gem1);


	

// $("#gem1").click("click", gem1Value);
// console.log(gem1Value);