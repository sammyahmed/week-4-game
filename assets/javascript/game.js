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

window.onload = function() {
	var gem1= Math.floor(Math.random()* (max 12 min 1));
	var gem2= Math.floor(Math.random()* (max 12 min 1));
	var gem3= Math.floor(Math.random()* (max 12 min 1));
	var gem4= Math.floor(Math.random()* (max 12 min 1));
	var goal= Math.floor(Math.random()* (max 120 min 19));
};