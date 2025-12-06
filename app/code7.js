gdjs.stage_326Code = {};
gdjs.stage_326Code.localVariables = [];
gdjs.stage_326Code.idToCallbackMap = new Map();
gdjs.stage_326Code.GDNewSpriteObjects1= [];
gdjs.stage_326Code.GDNewSpriteObjects2= [];
gdjs.stage_326Code.GDNewTextObjects1= [];
gdjs.stage_326Code.GDNewTextObjects2= [];
gdjs.stage_326Code.GDplayerObjects1= [];
gdjs.stage_326Code.GDplayerObjects2= [];


gdjs.stage_326Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage 7", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Aetheric - Coconut Kind of Love (freetouse.com).mp3", true, 100, 1);
}
}

}


};

gdjs.stage_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage_326Code.GDNewSpriteObjects1.length = 0;
gdjs.stage_326Code.GDNewSpriteObjects2.length = 0;
gdjs.stage_326Code.GDNewTextObjects1.length = 0;
gdjs.stage_326Code.GDNewTextObjects2.length = 0;
gdjs.stage_326Code.GDplayerObjects1.length = 0;
gdjs.stage_326Code.GDplayerObjects2.length = 0;

gdjs.stage_326Code.eventsList0(runtimeScene);
gdjs.stage_326Code.GDNewSpriteObjects1.length = 0;
gdjs.stage_326Code.GDNewSpriteObjects2.length = 0;
gdjs.stage_326Code.GDNewTextObjects1.length = 0;
gdjs.stage_326Code.GDNewTextObjects2.length = 0;
gdjs.stage_326Code.GDplayerObjects1.length = 0;
gdjs.stage_326Code.GDplayerObjects2.length = 0;


return;

}

gdjs['stage_326Code'] = gdjs.stage_326Code;
