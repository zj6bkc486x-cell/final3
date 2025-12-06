gdjs.stage1Code = {};
gdjs.stage1Code.localVariables = [];
gdjs.stage1Code.idToCallbackMap = new Map();
gdjs.stage1Code.GD_9548176_9544221_9554868_9547732Objects1= [];
gdjs.stage1Code.GD_9548176_9544221_9554868_9547732Objects2= [];
gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1= [];
gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects2= [];
gdjs.stage1Code.GD_9547016_9554532Objects1= [];
gdjs.stage1Code.GD_9547016_9554532Objects2= [];
gdjs.stage1Code.GD_9545208_9548708Objects1= [];
gdjs.stage1Code.GD_9545208_9548708Objects2= [];
gdjs.stage1Code.GD_9554060_9545912_9553944Objects1= [];
gdjs.stage1Code.GD_9554060_9545912_9553944Objects2= [];
gdjs.stage1Code.GDmasterkey_9595textObjects1= [];
gdjs.stage1Code.GDmasterkey_9595textObjects2= [];
gdjs.stage1Code.GDbutterfly_9595textObjects1= [];
gdjs.stage1Code.GDbutterfly_9595textObjects2= [];
gdjs.stage1Code.GDlamp_9595textObjects1= [];
gdjs.stage1Code.GDlamp_9595textObjects2= [];
gdjs.stage1Code.GDpendant_9595textObjects1= [];
gdjs.stage1Code.GDpendant_9595textObjects2= [];
gdjs.stage1Code.GDplayerObjects1= [];
gdjs.stage1Code.GDplayerObjects2= [];


gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage1Code.GDplayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959547560_95959549828_95959553552_95959553412Objects1Objects = Hashtable.newFrom({"마스터키": gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage1Code.GDplayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959547016_95959554532Objects1Objects = Hashtable.newFrom({"램프": gdjs.stage1Code.GD_9547016_9554532Objects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage1Code.GDplayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959545208_95959548708Objects1Objects = Hashtable.newFrom({"나비": gdjs.stage1Code.GD_9545208_9548708Objects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.stage1Code.GDplayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959554060_95959545912_95959553944Objects1Objects = Hashtable.newFrom({"팬던트": gdjs.stage1Code.GD_9554060_9545912_9553944Objects1});
gdjs.stage1Code.mapOfEmptyGD_9554060_9545912_9553944ObjectsEmptyGD_9545208_9548708ObjectsEmptyGD_9547560_9549828_9553552_9553412ObjectsEmptyGD_9547016_9554532Objects = Hashtable.newFrom({"팬던트": [], "나비": [], "마스터키": [], "램프": []});
gdjs.stage1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("butterfly_text"), gdjs.stage1Code.GDbutterfly_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("lamp_text"), gdjs.stage1Code.GDlamp_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("masterkey_text"), gdjs.stage1Code.GDmasterkey_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("pendant_text"), gdjs.stage1Code.GDpendant_9595textObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDmasterkey_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDmasterkey_9595textObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage1Code.GDpendant_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDpendant_9595textObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage1Code.GDbutterfly_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDbutterfly_9595textObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.stage1Code.GDlamp_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDlamp_9595textObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Walen - Dark Heart (freetouse.com).mp3", 1, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("마스터키"), gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959547560_95959549828_95959553552_95959553412Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("masterkey_text"), gdjs.stage1Code.GDmasterkey_9595textObjects1);
/* Reuse gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1 */
{for(var i = 0, len = gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage1Code.GDmasterkey_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDmasterkey_9595textObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("램프"), gdjs.stage1Code.GD_9547016_9554532Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959547016_95959554532Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lamp_text"), gdjs.stage1Code.GDlamp_9595textObjects1);
/* Reuse gdjs.stage1Code.GD_9547016_9554532Objects1 */
{for(var i = 0, len = gdjs.stage1Code.GD_9547016_9554532Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GD_9547016_9554532Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage1Code.GDlamp_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDlamp_9595textObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("나비"), gdjs.stage1Code.GD_9545208_9548708Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959545208_95959548708Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("butterfly_text"), gdjs.stage1Code.GDbutterfly_9595textObjects1);
/* Reuse gdjs.stage1Code.GD_9545208_9548708Objects1 */
{for(var i = 0, len = gdjs.stage1Code.GD_9545208_9548708Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GD_9545208_9548708Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage1Code.GDbutterfly_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDbutterfly_9595textObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.stage1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("팬던트"), gdjs.stage1Code.GD_9554060_9545912_9553944Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GDplayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_9546stage1Code_9546GD_95959554060_95959545912_95959553944Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pendant_text"), gdjs.stage1Code.GDpendant_9595textObjects1);
/* Reuse gdjs.stage1Code.GD_9554060_9545912_9553944Objects1 */
{for(var i = 0, len = gdjs.stage1Code.GD_9554060_9545912_9553944Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GD_9554060_9545912_9553944Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.stage1Code.GDpendant_9595textObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDpendant_9595textObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.stage1Code.mapOfEmptyGD_9554060_9545912_9553944ObjectsEmptyGD_9545208_9548708ObjectsEmptyGD_9547560_9549828_9553552_9553412ObjectsEmptyGD_9547016_9554532Objects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage2", false);
}
}

}


};

gdjs.stage1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage1Code.GD_9548176_9544221_9554868_9547732Objects1.length = 0;
gdjs.stage1Code.GD_9548176_9544221_9554868_9547732Objects2.length = 0;
gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1.length = 0;
gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects2.length = 0;
gdjs.stage1Code.GD_9547016_9554532Objects1.length = 0;
gdjs.stage1Code.GD_9547016_9554532Objects2.length = 0;
gdjs.stage1Code.GD_9545208_9548708Objects1.length = 0;
gdjs.stage1Code.GD_9545208_9548708Objects2.length = 0;
gdjs.stage1Code.GD_9554060_9545912_9553944Objects1.length = 0;
gdjs.stage1Code.GD_9554060_9545912_9553944Objects2.length = 0;
gdjs.stage1Code.GDmasterkey_9595textObjects1.length = 0;
gdjs.stage1Code.GDmasterkey_9595textObjects2.length = 0;
gdjs.stage1Code.GDbutterfly_9595textObjects1.length = 0;
gdjs.stage1Code.GDbutterfly_9595textObjects2.length = 0;
gdjs.stage1Code.GDlamp_9595textObjects1.length = 0;
gdjs.stage1Code.GDlamp_9595textObjects2.length = 0;
gdjs.stage1Code.GDpendant_9595textObjects1.length = 0;
gdjs.stage1Code.GDpendant_9595textObjects2.length = 0;
gdjs.stage1Code.GDplayerObjects1.length = 0;
gdjs.stage1Code.GDplayerObjects2.length = 0;

gdjs.stage1Code.eventsList0(runtimeScene);
gdjs.stage1Code.GD_9548176_9544221_9554868_9547732Objects1.length = 0;
gdjs.stage1Code.GD_9548176_9544221_9554868_9547732Objects2.length = 0;
gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects1.length = 0;
gdjs.stage1Code.GD_9547560_9549828_9553552_9553412Objects2.length = 0;
gdjs.stage1Code.GD_9547016_9554532Objects1.length = 0;
gdjs.stage1Code.GD_9547016_9554532Objects2.length = 0;
gdjs.stage1Code.GD_9545208_9548708Objects1.length = 0;
gdjs.stage1Code.GD_9545208_9548708Objects2.length = 0;
gdjs.stage1Code.GD_9554060_9545912_9553944Objects1.length = 0;
gdjs.stage1Code.GD_9554060_9545912_9553944Objects2.length = 0;
gdjs.stage1Code.GDmasterkey_9595textObjects1.length = 0;
gdjs.stage1Code.GDmasterkey_9595textObjects2.length = 0;
gdjs.stage1Code.GDbutterfly_9595textObjects1.length = 0;
gdjs.stage1Code.GDbutterfly_9595textObjects2.length = 0;
gdjs.stage1Code.GDlamp_9595textObjects1.length = 0;
gdjs.stage1Code.GDlamp_9595textObjects2.length = 0;
gdjs.stage1Code.GDpendant_9595textObjects1.length = 0;
gdjs.stage1Code.GDpendant_9595textObjects2.length = 0;
gdjs.stage1Code.GDplayerObjects1.length = 0;
gdjs.stage1Code.GDplayerObjects2.length = 0;


return;

}

gdjs['stage1Code'] = gdjs.stage1Code;
