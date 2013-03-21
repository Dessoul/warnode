gameData.ELEMENTS[gameData.FAMILIES.terrain].push(
[
	{
		name : 'tree',
		t : 0,
		c: '#0f0',
		shape : [[1]],
		canMoveIn : false,
		resourceType : gameData.RESOURCES.wood.id,
		ra : 75
	},
	{
		name : 'stone',
		t : 1,
		c : '#000',
		shape : [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
		canMoveIn : false,
		resourceType : gameData.RESOURCES.stone.id,
		ra : 500
	},
	{	
		name : 'gold',
		t : 2,
		c : '#fc1',
		shape : [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
		canMoveIn : false,
		resourceType : gameData.RESOURCES.gold.id,
		ra : 3000
	}
]);