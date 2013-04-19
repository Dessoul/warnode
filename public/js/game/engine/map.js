var mapLogic = {};


/**
*	Returns the nearest resource element.
*/
mapLogic.getNearestResource = function (element, resourceType) {
	var min = -1;
	var closestTerrain = null;
	for (var i in gameLogic.gameElements) {
		var terrain = gameLogic.gameElements[i];
		if (terrain.f == gameData.FAMILIES.terrain 
			&& gameData.ELEMENTS[terrain.f][terrain.r][terrain.t].resourceType == resourceType) {
			var distance = tools.getElementsDistance(element, terrain);
			if(distance < 2) {
				return terrain;
			} else if (distance < min || min == -1) {
				min = distance;
				closestTerrain = terrain;
			}
		}
	}
	
	return closestTerrain;
}


/**
*	Returns the nearest friend building.
*/
mapLogic.getNearestBuilding = function (element, buildingType) {
	var min = -1;
	var closestBuilding = null;
	for (var i in gameLogic.gameElements) {
		var building = gameLogic.gameElements[i];
		if (building.f == gameData.FAMILIES.building
		&& rank.isAlly(element.o, building) && building.t == buildingType) {
			var distance = tools.getElementsDistance(element, building);
			if(distance < 2) {
				return building;
			} else if (distance < min || min == -1) {
				min = distance;
				closestBuilding = building;
			}
		}
	}
	return closestBuilding;
}


/**
*	Returns the nearest enemy unit/building.
*/
mapLogic.getNearestEnemy = function (unit) {
	var min = -1;
	var closestEnemy = null;
	for (var i in gameLogic.gameElements) {
		var enemy = gameLogic.gameElements[i];
		if (enemy.f != gameData.FAMILIES.terrain 
			&& rank.isEnemy(unit.o, enemy)) {
			var distance = tools.getElementsDistance(unit, enemy);
			if(distance < 5) {
				return enemy;
			} else if (distance < min || min == -1) {
				min = distance;
				closestEnemy = enemy;
			}
		}
	}
	return closestEnemy;
}