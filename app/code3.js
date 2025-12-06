gdjs.stage3Code = {};
gdjs.stage3Code.localVariables = [];
gdjs.stage3Code.idToCallbackMap = new Map();
gdjs.stage3Code.GDbackgroundObjects1= [];
gdjs.stage3Code.GDbackgroundObjects2= [];
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1= [];
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects2= [];
gdjs.stage3Code.GD_9548727Objects1= [];
gdjs.stage3Code.GD_9548727Objects2= [];
gdjs.stage3Code.GD_9546028_9544867Objects1= [];
gdjs.stage3Code.GD_9546028_9544867Objects2= [];
gdjs.stage3Code.GD_9551333Objects1= [];
gdjs.stage3Code.GD_9551333Objects2= [];
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1= [];
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects2= [];
gdjs.stage3Code.GD_95513332Objects1= [];
gdjs.stage3Code.GD_95513332Objects2= [];
gdjs.stage3Code.GD_95487272Objects1= [];
gdjs.stage3Code.GD_95487272Objects2= [];
gdjs.stage3Code.GD_9546028_95448672Objects1= [];
gdjs.stage3Code.GD_9546028_95448672Objects2= [];
gdjs.stage3Code.GDplayerObjects1= [];
gdjs.stage3Code.GDplayerObjects2= [];


gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage3Code.GDplayerObjects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959551089_95959551008_95959595_95959551312_95959544033_95959549345_95959595_95959554028_95959554200Objects1Objects = Hashtable.newFrom({"작은_조각상_파편": gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage3Code.GDplayerObjects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959548727Objects1Objects = Hashtable.newFrom({"빗": gdjs.stage3Code.GD_9548727Objects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage3Code.GDplayerObjects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959546028_95959544867Objects1Objects = Hashtable.newFrom({"돌꽃": gdjs.stage3Code.GD_9546028_9544867Objects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage3Code.GDplayerObjects1});
gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959551333Objects1Objects = Hashtable.newFrom({"종": gdjs.stage3Code.GD_9551333Objects1});
gdjs.stage3Code.mapOfEmptyGD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200ObjectsEmptyGD_9548727ObjectsEmptyGD_9546028_9544867ObjectsEmptyGD_9551333Objects = Hashtable.newFrom({"작은_조각상_파편": [], "빗": [], "돌꽃": [], "종": []});
gdjs.stage3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("돌꽃2"), gdjs.stage3Code.GD_9546028_95448672Objects1);
gdjs.copyArray(runtimeScene.getObjects("빗2"), gdjs.stage3Code.GD_95487272Objects1);
gdjs.copyArray(runtimeScene.getObjects("작은_조각상_파편2"), gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1);
gdjs.copyArray(runtimeScene.getObjects("종2"), gdjs.stage3Code.GD_95513332Objects1);
{for(var i = 0, len = gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_95513332Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_95513332Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_95487272Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_95487272Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_9546028_95448672Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9546028_95448672Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "numbthefeelings - i never knew her (freetouse.com).mp3", 2, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("작은_조각상_파편"), gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959551089_95959551008_95959595_95959551312_95959544033_95959549345_95959595_95959554028_95959554200Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1 */
gdjs.copyArray(runtimeScene.getObjects("작은_조각상_파편2"), gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1);
{for(var i = 0, len = gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("빗"), gdjs.stage3Code.GD_9548727Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959548727Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage3Code.GD_9548727Objects1 */
gdjs.copyArray(runtimeScene.getObjects("빗2"), gdjs.stage3Code.GD_95487272Objects1);
{for(var i = 0, len = gdjs.stage3Code.GD_9548727Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9548727Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_95487272Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_95487272Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("돌꽃"), gdjs.stage3Code.GD_9546028_9544867Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959546028_95959544867Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage3Code.GD_9546028_9544867Objects1 */
gdjs.copyArray(runtimeScene.getObjects("돌꽃2"), gdjs.stage3Code.GD_9546028_95448672Objects1);
{for(var i = 0, len = gdjs.stage3Code.GD_9546028_9544867Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9546028_9544867Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_9546028_95448672Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9546028_95448672Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("종"), gdjs.stage3Code.GD_9551333Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GDplayerObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_9546stage3Code_9546GD_95959551333Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage3Code.GD_9551333Objects1 */
gdjs.copyArray(runtimeScene.getObjects("종2"), gdjs.stage3Code.GD_95513332Objects1);
{for(var i = 0, len = gdjs.stage3Code.GD_9551333Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_9551333Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage3Code.GD_95513332Objects1.length ;i < len;++i) {
    gdjs.stage3Code.GD_95513332Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.stage3Code.mapOfEmptyGD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200ObjectsEmptyGD_9548727ObjectsEmptyGD_9546028_9544867ObjectsEmptyGD_9551333Objects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage4", false);
}
}

}


};

gdjs.stage3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage3Code.GDbackgroundObjects1.length = 0;
gdjs.stage3Code.GDbackgroundObjects2.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects2.length = 0;
gdjs.stage3Code.GD_9548727Objects1.length = 0;
gdjs.stage3Code.GD_9548727Objects2.length = 0;
gdjs.stage3Code.GD_9546028_9544867Objects1.length = 0;
gdjs.stage3Code.GD_9546028_9544867Objects2.length = 0;
gdjs.stage3Code.GD_9551333Objects1.length = 0;
gdjs.stage3Code.GD_9551333Objects2.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects2.length = 0;
gdjs.stage3Code.GD_95513332Objects1.length = 0;
gdjs.stage3Code.GD_95513332Objects2.length = 0;
gdjs.stage3Code.GD_95487272Objects1.length = 0;
gdjs.stage3Code.GD_95487272Objects2.length = 0;
gdjs.stage3Code.GD_9546028_95448672Objects1.length = 0;
gdjs.stage3Code.GD_9546028_95448672Objects2.length = 0;
gdjs.stage3Code.GDplayerObjects1.length = 0;
gdjs.stage3Code.GDplayerObjects2.length = 0;

gdjs.stage3Code.eventsList0(runtimeScene);
gdjs.stage3Code.GDbackgroundObjects1.length = 0;
gdjs.stage3Code.GDbackgroundObjects2.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects1.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_9554200Objects2.length = 0;
gdjs.stage3Code.GD_9548727Objects1.length = 0;
gdjs.stage3Code.GD_9548727Objects2.length = 0;
gdjs.stage3Code.GD_9546028_9544867Objects1.length = 0;
gdjs.stage3Code.GD_9546028_9544867Objects2.length = 0;
gdjs.stage3Code.GD_9551333Objects1.length = 0;
gdjs.stage3Code.GD_9551333Objects2.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects1.length = 0;
gdjs.stage3Code.GD_9551089_9551008_9595_9551312_9544033_9549345_9595_9554028_95542002Objects2.length = 0;
gdjs.stage3Code.GD_95513332Objects1.length = 0;
gdjs.stage3Code.GD_95513332Objects2.length = 0;
gdjs.stage3Code.GD_95487272Objects1.length = 0;
gdjs.stage3Code.GD_95487272Objects2.length = 0;
gdjs.stage3Code.GD_9546028_95448672Objects1.length = 0;
gdjs.stage3Code.GD_9546028_95448672Objects2.length = 0;
gdjs.stage3Code.GDplayerObjects1.length = 0;
gdjs.stage3Code.GDplayerObjects2.length = 0;


return;

}

gdjs['stage3Code'] = gdjs.stage3Code;
