gdjs.stage5Code = {};
gdjs.stage5Code.localVariables = [];
gdjs.stage5Code.idToCallbackMap = new Map();
gdjs.stage5Code.GDNewSpriteObjects1= [];
gdjs.stage5Code.GDNewSpriteObjects2= [];
gdjs.stage5Code.GDNewTextObjects1= [];
gdjs.stage5Code.GDNewTextObjects2= [];
gdjs.stage5Code.GDplayerObjects1= [];
gdjs.stage5Code.GDplayerObjects2= [];


gdjs.stage5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage 6", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.stage5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage5Code.GDNewSpriteObjects1.length = 0;
gdjs.stage5Code.GDNewSpriteObjects2.length = 0;
gdjs.stage5Code.GDNewTextObjects1.length = 0;
gdjs.stage5Code.GDNewTextObjects2.length = 0;
gdjs.stage5Code.GDplayerObjects1.length = 0;
gdjs.stage5Code.GDplayerObjects2.length = 0;

gdjs.stage5Code.eventsList0(runtimeScene);
gdjs.stage5Code.GDNewSpriteObjects1.length = 0;
gdjs.stage5Code.GDNewSpriteObjects2.length = 0;
gdjs.stage5Code.GDNewTextObjects1.length = 0;
gdjs.stage5Code.GDNewTextObjects2.length = 0;
gdjs.stage5Code.GDplayerObjects1.length = 0;
gdjs.stage5Code.GDplayerObjects2.length = 0;


return;

}

gdjs['stage5Code'] = gdjs.stage5Code;
