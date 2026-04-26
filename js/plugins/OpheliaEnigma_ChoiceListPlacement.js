//=============================================================================
// OpheliaEnigma_ChoiceListPlacement.js
//=============================================================================

/*:
 * @plugindesc Allows the developer to change the position of the choices box
 * when a certain game switch is active.
 *
 * @author OpheliaEnigma
 *
 * @param gameSwitch id
 * @desc The id for the switch that should be active to change
 * choices position.
 * @default 100
 *
 * @param gameVariable x id
 * @desc The id of the new x position for the choices window.
 * @default 0
 *
 * @param gameVariable y id
 * @desc The id of the new y position for the choices window.
 * @default 1
 * 
 * @help
 *
 * Allows the developer to change the position of the choices box
 * when a certain game switch is active. The new position will be
 * dictated by the values within two other gameVariables that can
 * be changed during gameplay.
 *
 * VERY IMPORTANT NOTE: The variable and switch ids must exist on
 * the database for this plugin to work.
 * 
 *                      COPYRIGHT NOTICE:
 *                      -----------------
 *
 * This plugin is free to be used for non-commercial projects, however, for
 * usage on commercial projects, please visit https://opheliaenigma.itch.io/
 * and donate the amount specified for this plugin. Any doubt don't hesitate
 * to contact me, OpheliaEnigma, either through the specified link or my
 * email address: OpheliaEnigmaUltimateCoder [at] gmail.com
 */


//=============================================================================
// OpheliaEnigma_ChoiceListPlacement Code
//=============================================================================
(function() {
	// get plugin parameters
	params = PluginManager.parameters('OpheliaEnigma_ChoiceListPlacement');
	const _switchId = Number(params["gameSwitch id"]);
	const _varXid = Number(params["gameVariable x id"]);
	const _varYid = Number(params["gameVariable y id"]);

	//=============================================================================
	// Window_ChoiceList
	//=============================================================================
	var WCLUP = Window_ChoiceList.prototype.updatePlacement;
	Window_ChoiceList.prototype.updatePlacement = function() {
		WCLUP.call(this); // perform default behaviour
		if($gameSwitches.value(_switchId)){
			// update values
			this.x = $gameVariables.value(_varXid);
			this.y = $gameVariables.value(_varYid);
		}
	}
})();