gameData.RACES={human:{id:0,name:"The Human Alliance",image:"human.png"}};gameData.RESOURCES={wood:{id:0,image:"wood.png"},gold:{id:1,image:"gold.png"}};gameData.ELEMENTS[gameData.FAMILIES.unit].push([{name:"Builder",r:0,t:0,shape:[[1]],speed:1,isBuilder:!0,buttons:[{buttonId:1E3,image:"build.png",isEnabled:!0,name:"Build"}],timeConstruction:5,l:20,attackSpeed:1,attack:5,defense:0,weaponType:0,armorType:0,gatheringSpeed:2,maxGathering:20,pop:1,needs:[{t:gameData.RESOURCES.gold.id,value:20}],g:"dwarf.js",image:"builder.png",height:5,range:1,buttonId:101},{name:"Footman",r:0,t:1,shape:[[1]],speed:1,isBuilder:!1,buttons:[],timeConstruction:10,l:50,attackSpeed:2,
attack:10,defense:2,weaponType:0,armorType:0,pop:1,needs:[{t:gameData.RESOURCES.gold.id,value:50}],g:"dwarf.js",image:"swordsman.png",height:5,range:1,buttonId:102},{name:"Knight",r:0,t:2,shape:[[1,1],[1,1]],speed:2,isBuilder:!1,buttons:[],timeConstruction:20,l:120,attackSpeed:3,attack:20,defense:5,weaponType:0,armorType:0,pop:2,needs:[{t:gameData.RESOURCES.gold.id,value:100}],g:"dwarf.js",image:"knight.png",height:5,range:1,buttonId:103},{name:"Bowman",r:0,t:3,shape:[[1]],speed:1,isBuilder:!1,buttons:[],
timeConstruction:10,l:40,attackSpeed:1,attack:15,defense:1,weaponType:0,armorType:0,pop:1,needs:[{t:gameData.RESOURCES.gold.id,value:60}],g:"dwarf.js",image:"bowman.png",height:5,range:10,buttonId:104}]);gameData.ELEMENTS[gameData.FAMILIES.building].push([{name:"Town Hall",r:0,t:0,shape:[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]],timeConstruction:60,buttons:[gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][0]],needs:[{t:gameData.RESOURCES.wood.id,value:100},{t:gameData.RESOURCES.gold.id,value:100}],l:500,defense:3,armorType:1,pop:8,g:"castle.js",image:"townhall.png",height:22,buttonId:10},{name:"House",r:0,t:1,shape:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],timeConstruction:20,
buttons:[],needs:[{t:gameData.RESOURCES.wood.id,value:50}],l:100,defense:1,armorType:1,pop:5,g:"habitation.js",image:"house.png",height:12,buttonId:11},{name:"Casern",r:0,t:2,shape:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],timeConstruction:40,buttons:[gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][1],gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][2],gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][3]],needs:[{t:gameData.RESOURCES.wood.id,value:100},
{t:gameData.RESOURCES.gold.id,value:50}],l:250,defense:2,armorType:1,pop:0,g:"barrack.js",image:"casern.png",height:14,buttonId:12}]);gameData.BASECAMPS=[{buildings:[gameData.ELEMENTS[gameData.FAMILIES.building][gameData.RACES.human.id][0]],units:[gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][0],gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][0],gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.human.id][0]]}];gameData.MAP_TYPES={standard:{id:0,name:"Standard"},random:{id:1,name:"Random"}};gameData.INITIAL_RESOURCES={low:{name:"Low",re:[{t:gameData.RESOURCES.wood.id,value:50},{t:gameData.RESOURCES.gold.id,value:50}]},standard:{name:"Standard",re:[{t:gameData.RESOURCES.wood.id,value:100},{t:gameData.RESOURCES.gold.id,value:100}]},high:{name:"High",re:[{t:gameData.RESOURCES.wood.id,value:250},{t:gameData.RESOURCES.gold.id,value:250}]}};
gameData.MAP_SIZES={test:{name:"Test",x:80,y:80},small:{name:"Small",x:80,y:80},medium:{name:"Medium",x:140,y:140},large:{name:"Large",x:200,y:200}};gameData.ZONES={nothing:0,basecamp:1,forest:2,goldmine:3,stonemine:4,water:5};gameData.VEGETATION_TYPES={standard:{name:"Standard",zones:[{t:gameData.ZONES.nothing,factor:20},{t:gameData.ZONES.forest,factor:12},{t:gameData.ZONES.goldmine,factor:1}]}};gameData.ELEMENTS[gameData.FAMILIES.terrain].push([{name:"Tree",t:0,shape:[[1]],canMoveIn:!1,resourceType:gameData.RESOURCES.wood.id,ra:75,g:"tree.js",image:"forest.png"},{name:"Stone Mine",t:1,shape:[[1,1,1],[1,1,1],[1,1,1]],canMoveIn:!1,ra:500,g:"stonemine.js",image:"stone.png"},{name:"Gold Mine",t:2,shape:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],canMoveIn:!1,resourceType:gameData.RESOURCES.gold.id,ra:3E3,g:"goldmine.js",image:"gold-mine.png"}]);