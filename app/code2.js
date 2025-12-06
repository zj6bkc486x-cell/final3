gdjs.stage2Code = {};
gdjs.stage2Code.localVariables = [];
gdjs.stage2Code.idToCallbackMap = new Map();
gdjs.stage2Code.GDbackgroundObjects1= [];
gdjs.stage2Code.GDbackgroundObjects2= [];
gdjs.stage2Code.GD_9546041_9551204Objects1= [];
gdjs.stage2Code.GD_9546041_9551204Objects2= [];
gdjs.stage2Code.GD_9545216_9544060Objects1= [];
gdjs.stage2Code.GD_9545216_9544060Objects2= [];
gdjs.stage2Code.GD_9546028_9551312_9544033Objects1= [];
gdjs.stage2Code.GD_9546028_9551312_9544033Objects2= [];
gdjs.stage2Code.GD_9547932_9544256_9544592Objects1= [];
gdjs.stage2Code.GD_9547932_9544256_9544592Objects2= [];
gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1= [];
gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects2= [];
gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1= [];
gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects2= [];
gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1= [];
gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects2= [];
gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1= [];
gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects2= [];
gdjs.stage2Code.GDplayerObjects1= [];
gdjs.stage2Code.GDplayerObjects2= [];


gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage2Code.GDplayerObjects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959546041_95959551204Objects1Objects = Hashtable.newFrom({"동전": gdjs.stage2Code.GD_9546041_9551204Objects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage2Code.GDplayerObjects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959545216_95959544060Objects1Objects = Hashtable.newFrom({"날개": gdjs.stage2Code.GD_9545216_9544060Objects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage2Code.GDplayerObjects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959546028_95959551312_95959544033Objects1Objects = Hashtable.newFrom({"돌조각": gdjs.stage2Code.GD_9546028_9551312_9544033Objects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage2Code.GDplayerObjects1});
gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959547932_95959544256_95959544592Objects1Objects = Hashtable.newFrom({"물고기": gdjs.stage2Code.GD_9547932_9544256_9544592Objects1});
gdjs.stage2Code.mapOfEmptyGD_9546041_9551204ObjectsEmptyGD_9545216_9544060ObjectsEmptyGD_9546028_9551312_9544033ObjectsEmptyGD_9547932_9544256_9544592Objects = Hashtable.newFrom({"동전": [], "날개": [], "돌조각": [], "물고기": []});
gdjs.stage2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("동전텍스트"), gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1);
gdjs.copyArray(runtimeScene.getObjects("조각난_모자이크_타일_텍스트"), gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1);
gdjs.copyArray(runtimeScene.getObjects("천사날개_텍스트"), gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1);
gdjs.copyArray(runtimeScene.getObjects("청동물고기텍스트"), gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1);
{for(var i = 0, len = gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Aylex - Falling (freetouse.com).mp3", 2, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage2Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("동전"), gdjs.stage2Code.GD_9546041_9551204Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects, gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959546041_95959551204Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage2Code.GD_9546041_9551204Objects1 */
gdjs.copyArray(runtimeScene.getObjects("동전텍스트"), gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1);
{for(var i = 0, len = gdjs.stage2Code.GD_9546041_9551204Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9546041_9551204Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage2Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("날개"), gdjs.stage2Code.GD_9545216_9544060Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects, gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959545216_95959544060Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage2Code.GD_9545216_9544060Objects1 */
gdjs.copyArray(runtimeScene.getObjects("천사날개_텍스트"), gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1);
{for(var i = 0, len = gdjs.stage2Code.GD_9545216_9544060Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9545216_9544060Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage2Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("돌조각"), gdjs.stage2Code.GD_9546028_9551312_9544033Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects, gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959546028_95959551312_95959544033Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage2Code.GD_9546028_9551312_9544033Objects1 */
gdjs.copyArray(runtimeScene.getObjects("조각난_모자이크_타일_텍스트"), gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1);
{for(var i = 0, len = gdjs.stage2Code.GD_9546028_9551312_9544033Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9546028_9551312_9544033Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage2Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("물고기"), gdjs.stage2Code.GD_9547932_9544256_9544592Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GDplayerObjects1Objects, gdjs.stage2Code.mapOfGDgdjs_9546stage2Code_9546GD_95959547932_95959544256_95959544592Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage2Code.GD_9547932_9544256_9544592Objects1 */
gdjs.copyArray(runtimeScene.getObjects("청동물고기텍스트"), gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1);
{for(var i = 0, len = gdjs.stage2Code.GD_9547932_9544256_9544592Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9547932_9544256_9544592Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1.length ;i < len;++i) {
    gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.stage2Code.mapOfEmptyGD_9546041_9551204ObjectsEmptyGD_9545216_9544060ObjectsEmptyGD_9546028_9551312_9544033ObjectsEmptyGD_9547932_9544256_9544592Objects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage3", false);
}
}

}


};

gdjs.stage2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage2Code.GDbackgroundObjects1.length = 0;
gdjs.stage2Code.GDbackgroundObjects2.length = 0;
gdjs.stage2Code.GD_9546041_9551204Objects1.length = 0;
gdjs.stage2Code.GD_9546041_9551204Objects2.length = 0;
gdjs.stage2Code.GD_9545216_9544060Objects1.length = 0;
gdjs.stage2Code.GD_9545216_9544060Objects2.length = 0;
gdjs.stage2Code.GD_9546028_9551312_9544033Objects1.length = 0;
gdjs.stage2Code.GD_9546028_9551312_9544033Objects2.length = 0;
gdjs.stage2Code.GD_9547932_9544256_9544592Objects1.length = 0;
gdjs.stage2Code.GD_9547932_9544256_9544592Objects2.length = 0;
gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GDplayerObjects1.length = 0;
gdjs.stage2Code.GDplayerObjects2.length = 0;

gdjs.stage2Code.eventsList0(runtimeScene);
gdjs.stage2Code.GDbackgroundObjects1.length = 0;
gdjs.stage2Code.GDbackgroundObjects2.length = 0;
gdjs.stage2Code.GD_9546041_9551204Objects1.length = 0;
gdjs.stage2Code.GD_9546041_9551204Objects2.length = 0;
gdjs.stage2Code.GD_9545216_9544060Objects1.length = 0;
gdjs.stage2Code.GD_9545216_9544060Objects2.length = 0;
gdjs.stage2Code.GD_9546028_9551312_9544033Objects1.length = 0;
gdjs.stage2Code.GD_9546028_9551312_9544033Objects2.length = 0;
gdjs.stage2Code.GD_9547932_9544256_9544592Objects1.length = 0;
gdjs.stage2Code.GD_9547932_9544256_9544592Objects2.length = 0;
gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9546041_9551204_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9552380_9549324_9545216_9544060_9595_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9551312_9544033_9545212_9595_9547784_9551088_9551060_9553356_9595_9553440_9551068_9595_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects1.length = 0;
gdjs.stage2Code.GD_9552397_9546041_9547932_9544256_9544592_9553581_9549828_9553944Objects2.length = 0;
gdjs.stage2Code.GDplayerObjects1.length = 0;
gdjs.stage2Code.GDplayerObjects2.length = 0;


return;

}

gdjs['stage2Code'] = gdjs.stage2Code;
