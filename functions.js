var behaviourList=["hi1", "hi2", "hi3", "hi4", "hi5", "hi6", "hi7", "hi8"];

function playBehaviour(behaviour){
	socket.emit("play_behaviour",behaviour);
	console.log(behaviour);
}