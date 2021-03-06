var utils = {};


/**
*	Reads a cookie.
*/
utils.readCookie = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


/**
*	Creates a cookie.
*/
utils.createCookie = function (name, value) {
	document.cookie = name + "=" + value +"; path=/";
}


/**
*	Is there something under any part of this element ?
*/
utils.canBeBuiltHere = function (building) {
	var point1 = tools.getPartPosition(building, 0, 0);
	var point2 = {
		x : point1.x + building.shape[0].length - 1,
		y : point1.y + building.shape.length - 1
	};

	for (var i = point1.x; i <= point2.x; i++) {
		for (var j = point1.y; j <= point2.y; j++) {
			if (i == 0 || j == 0 || gameContent.grid[i] == null || gameContent.grid[i][j] == null 
				|| i == gameContent.grid[0].length - 1 || j == gameContent.grid.length - 1
				|| gameContent.grid[i][j] > 0 || gameSurface.fogOfWarMatrix[i] != null && !gameSurface.fogOfWarMatrix[i][j]) {
				building.canBeBuiltHere = false;
				building.shape[i - point1.x][j - point1.y] = userInput.CANNOT_BE_BUILT_HERE;
			}
		}
	}
}


/**
*	Returns the game element from a chosen id.
*/
utils.getElementFromId = function (id) {
	return gameContent.gameElements[Object.keys(gameData.FAMILIES)[('' + id)[1]]][id];
}

utils.copyValuesToObject = function (src, dst) {
    if(src == null || typeof(src) != 'object')
        return src;

	for (var attr in src) {
		console.log(attr);
		if (dst[attr] == undefined)
			dst[attr] = {};
		dst[attr] = utils.copyValuesToObject(src[attr], dst[attr]);
	}
	return dst;
};