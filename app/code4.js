gdjs.stage4Code = {};
gdjs.stage4Code.localVariables = [];
gdjs.stage4Code.idToCallbackMap = new Map();
gdjs.stage4Code.GDNewTiledSpriteObjects1= [];
gdjs.stage4Code.GDNewTiledSpriteObjects2= [];
gdjs.stage4Code.GDNewSpriteObjects1= [];
gdjs.stage4Code.GDNewSpriteObjects2= [];
gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1= [];
gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects2= [];
gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1= [];
gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects2= [];
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1= [];
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects2= [];
gdjs.stage4Code.GD_9550676_9547588Objects1= [];
gdjs.stage4Code.GD_9550676_9547588Objects2= [];
gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1= [];
gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects2= [];
gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1= [];
gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects2= [];
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1= [];
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects2= [];
gdjs.stage4Code.GD_9550676_95475882Objects1= [];
gdjs.stage4Code.GD_9550676_95475882Objects2= [];
gdjs.stage4Code.GDplayerObjects1= [];
gdjs.stage4Code.GDplayerObjects2= [];


gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage4Code.GDplayerObjects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959550689_95959554844_95959549688_95959551221Objects1Objects = Hashtable.newFrom({"영혼수정": gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage4Code.GDplayerObjects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959551060_95959549836_95959548169_95959550872Objects1Objects = Hashtable.newFrom({"이슬방울": gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage4Code.GDplayerObjects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959550472_95959550519_95959544844_95959553804_95959547532Objects1Objects = Hashtable.newFrom({"씨앗꼬투리": gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage4Code.GDplayerObjects1});
gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959550676_95959547588Objects1Objects = Hashtable.newFrom({"열매": gdjs.stage4Code.GD_9550676_9547588Objects1});
gdjs.stage4Code.mapOfEmptyGD_9550689_9554844_9549688_9551221ObjectsEmptyGD_9551060_9549836_9548169_9550872ObjectsEmptyGD_9550472_9550519_9544844_9553804_9547532ObjectsEmptyGD_9550676_9547588Objects = Hashtable.newFrom({"영혼수정": [], "이슬방울": [], "씨앗꼬투리": [], "열매": []});
gdjs.stage4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("씨앗꼬투리2"), gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1);
gdjs.copyArray(runtimeScene.getObjects("열매2"), gdjs.stage4Code.GD_9550676_95475882Objects1);
gdjs.copyArray(runtimeScene.getObjects("영혼수정2"), gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1);
gdjs.copyArray(runtimeScene.getObjects("이슬방울2"), gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1);
{for(var i = 0, len = gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9550676_95475882Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550676_95475882Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Zambolino - Mountains (freetouse.com).mp3", 2, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage4Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("영혼수정"), gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959550689_95959554844_95959549688_95959551221Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1 */
gdjs.copyArray(runtimeScene.getObjects("영혼수정2"), gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1);
{for(var i = 0, len = gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage4Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("이슬방울"), gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959551060_95959549836_95959548169_95959550872Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1 */
gdjs.copyArray(runtimeScene.getObjects("이슬방울2"), gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1);
{for(var i = 0, len = gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage4Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("씨앗꼬투리"), gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959550472_95959550519_95959544844_95959553804_95959547532Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1 */
gdjs.copyArray(runtimeScene.getObjects("씨앗꼬투리2"), gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1);
{for(var i = 0, len = gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage4Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("열매"), gdjs.stage4Code.GD_9550676_9547588Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GDplayerObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_9546stage4Code_9546GD_95959550676_95959547588Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage4Code.GD_9550676_9547588Objects1 */
gdjs.copyArray(runtimeScene.getObjects("열매2"), gdjs.stage4Code.GD_9550676_95475882Objects1);
{for(var i = 0, len = gdjs.stage4Code.GD_9550676_9547588Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550676_9547588Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage4Code.GD_9550676_95475882Objects1.length ;i < len;++i) {
    gdjs.stage4Code.GD_9550676_95475882Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.stage4Code.mapOfEmptyGD_9550689_9554844_9549688_9551221ObjectsEmptyGD_9551060_9549836_9548169_9550872ObjectsEmptyGD_9550472_9550519_9544844_9553804_9547532ObjectsEmptyGD_9550676_9547588Objects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage5", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.stage4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.stage4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.stage4Code.GDNewSpriteObjects1.length = 0;
gdjs.stage4Code.GDNewSpriteObjects2.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects2.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects2.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects2.length = 0;
gdjs.stage4Code.GD_9550676_9547588Objects1.length = 0;
gdjs.stage4Code.GD_9550676_9547588Objects2.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects2.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects2.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects2.length = 0;
gdjs.stage4Code.GD_9550676_95475882Objects1.length = 0;
gdjs.stage4Code.GD_9550676_95475882Objects2.length = 0;
gdjs.stage4Code.GDplayerObjects1.length = 0;
gdjs.stage4Code.GDplayerObjects2.length = 0;

gdjs.stage4Code.eventsList0(runtimeScene);
gdjs.stage4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.stage4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.stage4Code.GDNewSpriteObjects1.length = 0;
gdjs.stage4Code.GDNewSpriteObjects2.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects1.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_9551221Objects2.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects1.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_9550872Objects2.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects1.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_9547532Objects2.length = 0;
gdjs.stage4Code.GD_9550676_9547588Objects1.length = 0;
gdjs.stage4Code.GD_9550676_9547588Objects2.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects1.length = 0;
gdjs.stage4Code.GD_9550689_9554844_9549688_95512212Objects2.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects1.length = 0;
gdjs.stage4Code.GD_9551060_9549836_9548169_95508722Objects2.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects1.length = 0;
gdjs.stage4Code.GD_9550472_9550519_9544844_9553804_95475322Objects2.length = 0;
gdjs.stage4Code.GD_9550676_95475882Objects1.length = 0;
gdjs.stage4Code.GD_9550676_95475882Objects2.length = 0;
gdjs.stage4Code.GDplayerObjects1.length = 0;
gdjs.stage4Code.GDplayerObjects2.length = 0;


return;

}

gdjs['stage4Code'] = gdjs.stage4Code;
