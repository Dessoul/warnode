var gameContent = {};


/**
*	Important data.
*/
gameContent.map = null;
gameContent.players = null;
gameContent.myArmy = null;


/**
*	Main variable used during the game.
*  	It contains all the terrain's elements, units and buildings.
*/
gameContent.gameElements = {};


/**
*	Contains the current selected elements ids.
*/
gameContent.selected = [];


/**
*	Contains the building that the user wants to construct.
*/
gameContent.building = null;


/**
*	Contains the coordinates of the selection rectangle.
*/
gameContent.selectionRectangle = [];


/**
*	Initializes the game content by retrieving all the game elements from the engine.
*/
gameContent.init = function (data) {
	//add new elements
	for (var i in data) {
		var element = data[i];
		gameSurface.addElement(element);
		//center camera
		if (element.f == gameData.FAMILIES.building
			&& element.o == this.myArmy) {
			gameSurface.centerCameraOnElement(element);
		}
	}
}


/**
*	Updates the game content with the changes the engine sent us.	
*/
gameContent.update = function (data) {
	//add new elements
	for (var i in data.added) {
		var element = data.added[i];
		if (this.gameElements[element.id] == null) {
			gameSurface.addElement(element);
		}
	}
	//remove some elements
	for (var i in data.removed) {
		var element = data.removed[i];
		if (this.gameElements[element.id] != null) {
			var index = this.selected.indexOf(element.id);
			if (index >= 0) {
				this.selected.splice(index, 1);
			}
			gameSurface.removeElement(element);
		}
	}
	//update some modified elements
	for (var i in data.modified) {
		var element = data.modified[i];
		if (this.gameElements[element.id] != null) {
			gameSurface.updateElement(element);
		}
	}

	//update players
	this.players = data.players;

	this.nnn++;
	if (this.nnn == 20) {
		this.players[this.myArmy].s = gameData.PLAYER_STATUSES.victory;
	}

	//check for victory / defeat
	if (this.players[this.myArmy].s == gameData.PLAYER_STATUSES.victory
		|| this.players[this.myArmy].s == gameData.PLAYER_STATUSES.defeat) {
		gameManager.endGame(this.players[this.myArmy].s);
	}
}

gameContent.nnn = 0;

