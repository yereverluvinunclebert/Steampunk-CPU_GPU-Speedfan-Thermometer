//===========================================================================
// functions.js
// Steampunk cpu/gpu thermometers widget  1.0.1
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patience from Harry Whitfield
//
//===========================================================================

/*global mainWindow, mainWindowwidthDefault, mainWindowheightDefault,
	cableWheelSet, cableWheelSethoffsetDefault, cableWheelSetvoffsetDefault,
	cableWheelSetwidthDefault, cableWheelSetheightDefault, cable, cablehoffsetDefault,
	cablevoffsetDefault, cablewidthDefault, cableheightDefault, pipes, pipeshoffsetDefault,
	pipesvoffsetDefault, pipeswidthDefault, pipesheightDefault, bell, bellhoffsetDefault,
	bellvoffsetDefault, bellwidthDefault, bellheightDefault, indicatorRed,
	indicatorRedhoffsetDefault, indicatorRedvoffsetDefault, indicatorRedwidthDefault,
	indicatorRedheightDefault, speaker, speakerhoffsetDefault, speakervoffsetDefault,
	speakerwidthDefault, speakerheightDefault, bar, barhoffsetDefault, barvoffsetDefault,
	barwidthDefault, barheightDefault, sliderSet, sliderSethoffsetDefault,
	sliderSetvoffsetDefault, sliderSetwidthDefault, sliderSetheightDefault, text1,
	text1hoffsetDefault, text1voffsetDefault, text1fontDefault, text2, text2hoffsetDefault,
	text2voffsetDefault, text2fontDefault, tingingSound, startup, Scale:true
*/

/*properties
    altKey, contextMenuItems, data, debug, event, fontsize, hOffset, height,
    hoffset, hoffsetpref, imageCmdPref, onContextMenu, onRunCommandInBgComplete,
    onSelect, open, openFilePref, sizePref, soundpref, style, title, tooltip,
    tooltipPref, vOffset, value, visible, voffset, voffsetpref, widgetTooltip,
    width
*/

//======================================================================================
// Function to move the main_window onto the main screen - called on startup and by timer
//======================================================================================
function mainScreen() {
// if the widget is off screen then move into the viewable window

    print("****************MAINSCREEN********************");

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
    print("screen.width "+screen.width);
    print("screen.height "+screen.height);
    print("aspectRatio "+aspectRatio);
    // check if the widget has a lock for the screen type.
    if (aspectRatio == "landscape") {
       if (preferences.widgetLockLandscapeModePref.value == 1 ) {
             mainWindow.hoffset = preferences.landscapeHoffsetPref.value;
             mainWindow.voffset = preferences.landscapeVoffsetPref.value;
       }
       if (preferences.widgetHideModePref.value == "landscape" ) {
          print ("Hiding the widget for landscape mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }
    // check if the widget has a lock for the screen type.
    if (aspectRatio == "portrait") {
       if (preferences.widgetLockPortraitModePref.value == 1 ) {
             mainWindow.hoffset = preferences.portraitHoffsetPref.value;
             mainWindow.voffset = preferences.portraitVoffsetPref.value;
       }
       if (preferences.widgetHideModePref.value == "portrait" ) {
          print ("Hiding the widget for portrait mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }

    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 0) {
        mainWindow.vOffset = 0; // avoid Mac toolbar
    }
    if (mainWindow.hOffset > screen.width - 50) { //adjust for the extra width of the help page
        mainWindow.hOffset = screen.width - mainWindow.width + 220;
    }
    if (mainWindow.vOffset > screen.height - 150) {  //adjust for the extra height of the help page
        mainWindow.vOffset = screen.height - mainWindow.height; // avoid Mac toolbar
    }

    // calculate the current hlocation in % of the screen
    //store the current hlocation in % of the screen
    if ( preferences.hLocationPercPref.value != 0) {
      preferences.hLocationPercPref.value = (mainWindow.hoffset / screen.width)* 100;
    }
    if ( preferences.vLocationPercPref.value != 0) {
      preferences.vLocationPercPref.value = (mainWindow.voffset / screen.height)* 100;
    }

}
//=====================
//End function
//=====================
//===============================
// function to resize all layers
//===============================
function resize() {
    Scale = Number(preferences.sizePref.value) / 100;	// sets global scale because it is used elsewhere
    log("Resizing: preferences.sizePref.value: " + preferences.sizePref.value);
    log("Scale: " + Scale);
    mainWindow.width = mainWindowwidthDefault * Scale;
    mainWindow.height = mainWindowheightDefault * Scale;

    cableWheelSet.hoffset = cableWheelSethoffsetDefault * Scale;
    cableWheelSet.voffset = cableWheelSetvoffsetDefault * Scale;
    cableWheelSet.width = cableWheelSetwidthDefault * Scale;
    cableWheelSet.height = cableWheelSetheightDefault * Scale;

    cable.hoffset = cablehoffsetDefault * Scale;
    cable.voffset = cablevoffsetDefault * Scale;
    cable.width = cablewidthDefault * Scale;
    cable.height = cableheightDefault * Scale;

    pipes.hoffset = pipeshoffsetDefault * Scale;
    pipes.voffset = pipesvoffsetDefault * Scale;
    pipes.width = pipeswidthDefault * Scale;
    pipes.height = pipesheightDefault * Scale;

    bell.hoffset = bellhoffsetDefault * Scale;
    bell.voffset = bellvoffsetDefault * Scale;
    bell.width = bellwidthDefault * Scale;
    bell.height = bellheightDefault * Scale;

    indicatorRed.hoffset = indicatorRedhoffsetDefault * Scale;
    indicatorRed.voffset = indicatorRedvoffsetDefault * Scale;
    indicatorRed.width = indicatorRedwidthDefault * Scale;
    indicatorRed.height = indicatorRedheightDefault * Scale;

    speaker.hoffset = speakerhoffsetDefault * Scale;
    speaker.voffset = speakervoffsetDefault * Scale;
    speaker.width = speakerwidthDefault * Scale;
    speaker.height = speakerheightDefault * Scale;

    bar.hoffset = barhoffsetDefault * Scale;
    bar.voffset = barvoffsetDefault * Scale;
    bar.width = barwidthDefault * Scale;
    bar.height = barheightDefault * Scale;

    sliderSet.hoffset = sliderSethoffsetDefault * Scale;
    sliderSet.voffset = sliderSetvoffsetDefault * Scale;
    sliderSet.width = sliderSetwidthDefault * Scale;
    sliderSet.height = sliderSetheightDefault * Scale;

    text1.hoffset = text1hoffsetDefault * Scale;
    text1.voffset = text1voffsetDefault * Scale;
    text1.style.fontsize = (text1fontDefault * Scale + "px");

    text2.hoffset = text2hoffsetDefault * Scale;
    text2.voffset = text2voffsetDefault * Scale;
    text2.style.fontsize = (text2fontDefault * Scale + "px");

    mainWindow.visible = true;
}
//=====================
//End function
//=====================

//===========================================
// this function opens the online help file
//===========================================
function menuitem1OnClick() {
    var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/instructions-for-the-steampunk-cpu-gpu-thermometers.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the URL for paypal
//===========================================
function menuitem2OnClick() {
    var answer = alert("Help support the creation of more widgets like this, send us a coffee! This button opens a browser window and connects to the Kofi donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

    if (answer === 1) {
                openURL("https://www.ko-fi.com/yereverluvinunclebert");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens my Amazon URL wishlist
//===========================================
function menuitem3OnClick() {
    var answer = alert("Help support the creation of more widgets like this. Buy me a small item on my Amazon wishlist! This button opens a browser window and connects to my Amazon wish list page). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("http://www.amazon.co.uk/gp/registry/registry.html?ie=UTF8&id=A3OBFB6ZN4F7&type=wishlist");
	}
}
//=====================
//End function
//=====================
//===========================================
// this function opens the rocketdock URL
//===========================================
function menuitem4OnClick() {

    var answer = alert("Log in and vote for the widget on Rocketdock. This button opens a browser window and connects to the Rocketdock page where you can give the widget a 5 star rating... Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://rocketdock.com/addon/misc/39639");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens other widgets URL
//===========================================
function menuitem5OnClick() {
    var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/steampunk-widgets.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the download URL
//===========================================
function menuitem6OnClick() {
    var answer = alert("Download latest version of the widget - this button opens a browser window and connects to the widget download page where you can check and download the latest zipped .WIDGET file). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/jdownloads/steampunk-cpu-gpu-temperature-monitor-yahoo-widget.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the browser at the contact URL
//===========================================
function contact() {
    var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/contact.html?Itemid=3");
    }
}
//=====================
//End function
//=====================


//===========================================
// this function opens the browser at the contact URL
//===========================================
function facebookChat() {
    var answer = alert("Visiting the Facebook chat page - this button opens a browser window and connects to our Facebook chat page.). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.facebook.com/profile.php?id=100012278951649");
    }
}
//=====================
//End function
//=====================



//===========================================
// this function allows a spacer in the menu
//===========================================
function nullfunction() { print("null"); }
//=====================
//End function
//=====================

//=========================================================================
// this function assigns translations to preference descriptions and titles
//=========================================================================
function setmenu() {
	var items = [], item;

	item = new MenuItem();
	item.title = "Online Help";
	item.onSelect = menuitem1OnClick;
	items.push(item);

        item = new MenuItem();
        item.title = "Donate a Coffee with Ko-Fi";
        item.onSelect = function () {
            menuitem2OnClick();
        };
	items.push(item);


        item = new MenuItem();
        item.title = "";
        item.onSelect = function () {
            nullfunction();
        };
	items.push(item);

        item = new MenuItem();
        item.title = "See More Steampunk Widgets";
        item.onSelect = function () {
            menuitem5OnClick();
        };
	items.push(item);

	item = new MenuItem();
	item.title = "Contact Support";
    item.onSelect = function() {
        contact();
    };
	items.push(item);

	item = new MenuItem();
	item.title = "Display Licence Agreement...";
	item.onSelect = function () {
		displayLicence();
	};
	items.push(item);

	item = new MenuItem();
	item.title = "Download Latest Version";
	item.onSelect = function () {
		menuitem6OnClick();
	};
	items.push(item);

        item = new MenuItem();
        item.title = "";
        item.onSelect = function() {
            nullfunction();
        };
	items.push(item);

        item = new MenuItem();
        item.title = "Chat about Steampunk Widgets on Facebook";
        item.onSelect = function() {
            facebookChat();
        };
	items.push(item);

        item = new MenuItem();
        item.title = "";
        item.onSelect = function () {
            nullfunction();
        };
	items.push(item);

	item = new MenuItem();
	item.title = "Reveal Widget in Windows Explorer";
	item.onSelect = function () {
		findWidget();
	};
	items.push(item);

        item = new MenuItem();
        item.title = "";
        item.onSelect = function () {
            nullfunction();
        };
	items.push(item);

	item = new MenuItem();
	item.title = "Reload Widget (F5)";
	item.onSelect = function () {
		reloadWidget();
	};
	items.push(item);
    

    if (preferences.imageEditPref.value != "" && debugFlg === "1") {
            mItem = new MenuItem();
            mItem.title = "Edit Widget using " + preferences.imageEditPref.value ;
            mItem.onSelect = function () {
                editWidget();
            };
            items.push(mItem);
    }
            
	mainWindow.contextMenuItems = items;

}
//=====================
//End function
//=====================

//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function changePrefs() {
    log("preferences Changed");
    savePreferences(); 	/// <<<<<<<<<<<<<
    sleep(1000);
    startup();			/// <<<<<<<<<<<<<
//	reloadWidget();
}
//=====================
//End function
//=====================
//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function settooltip() {
    if (preferences.tooltipPref.value === "enable") {
        if (preferences.widgetTooltip.value !== "") {
        	cableWheelSet.tooltip =
        		cable.tooltip =
        		pipes.tooltip =
        		bell.tooltip =
        		indicatorRed.tooltip =
        		speaker.tooltip =
            	bar.tooltip = preferences.widgetTooltip.value;
        } else {
            if (preferences.imageCmdPref.value === "") {
        		cableWheelSet.tooltip =
        			cable.tooltip =
        			pipes.tooltip =
        			bell.tooltip =
        			indicatorRed.tooltip =
        			speaker.tooltip =
                	bar.tooltip = "Double click on me to assign a double-click function to this widget";
            } else {
        		cableWheelSet.tooltip =
        			cable.tooltip =
        			pipes.tooltip =
        			bell.tooltip =
        			indicatorRed.tooltip =
        			speaker.tooltip =
            		bar.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            }
        }
    } else {
        cableWheelSet.tooltip =
        	cable.tooltip =
        	pipes.tooltip =
        	bell.tooltip =
        	indicatorRed.tooltip =
        	speaker.tooltip =
        	bar.tooltip = "";
    }
}
//=====================
//End function
//=====================

//======================================================================================
// Function to perform commands
//======================================================================================
var runningTask;

//=====================
// function to carry out a command
//=====================
function performCommand(method) {
    var answer;
    
    if (method === "menu") {
        runCommandInBg(preferences.imageEditPref.value, "runningTask");
    } else {
        print("method "+method);
        if (system.event.altKey) { // filesystem.open() call
            if (preferences.openFilePref.value === "") {
                answer = alert("This widget has not been assigned an alt+double-click function. You need to open the preferences and select a file to be opened. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
            filesystem.open(preferences.openFilePref.value);
        } else { 
            if (preferences.imageCmdPref.value === "") {
                answer = alert("This widget has not been assigned a double-click function. You need to open the preferences and enter a run command for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
                runCommandInBg(preferences.imageCmdPref.value, "runningTask");
        }
    }
}
//=====================
//End function
//=====================


//======================================================================================
// function 
//======================================================================================
widget.onRunCommandInBgComplete = function () {
    var theTag = system.event.data;
    print("onRunCommandInBgComplete for tag: " + theTag);
    if (theTag === "runningTask") {
        if (widget.debug === "on") {
            print(preferences.imageCmdPref.value + "\n\n" + runningTask);
        } else {
            alert(preferences.imageCmdPref.value + "\n\n" + runningTask);
        }
    }
};
//=====================
//End function
//=====================

//======================================================================================
//  widget moves in relation to the desktop orientation, portrait or landscape
//======================================================================================
widget.onScreenChanged = function( event ) {
//mainWindow.onMouseDown = function( event ) {   //can be tested using this event
    // function fires if any screen size, arrangement change occurs

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }

    checkLockWidget();

    print("screen.width "+screen.width);
    print("screen.height "+screen.height);
    print("aspectRatio "+aspectRatio);

    // check if the widget has a lock for the screen type.
    if (aspectRatio == "landscape") {
       if (preferences.widgetLockLandscapeModePref.value == 1 ) {
             mainWindow.hoffset = preferences.landscapeHoffsetPref.value;
             mainWindow.voffset = preferences.landscapeVoffsetPref.value;
             // reapply the lock

       } else {
              placeByPercentage();
       }
       if (preferences.widgetHideModePref.value == "landscape" ) {
          print ("Hiding the widget for landscape mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }
    // check if the widget has a lock for the screen type.
    if (aspectRatio == "portrait") {
       if (preferences.widgetLockPortraitModePref.value == 1 ) {
             mainWindow.hoffset = preferences.portraitHoffsetPref.value;
             mainWindow.voffset = preferences.portraitVoffsetPref.value;
             // reapply the lock
       } else {
              placeByPercentage();
       }
       if (preferences.widgetHideModePref.value == "portrait" ) {
          print ("Hiding the widget for portrait mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }
    // If it does not have a lock in either landscape/portrait mode then position it by stored percentage so that it positions itself in % from the top of the screen


    // the screen re-orientation can put the widget off screen, fix that
    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 0) {
        mainWindow.vOffset = 0; // avoid Mac toolbar
    }

       resizethermometer(); // resize the thermometer

/*
        print ("DEBUG2 ");
        print( 'screen resolution '+screen.resolution );
        print( 'screen resolution '+screen.height );
        print( 'screen resolution '+screen.width );
        print( 'mainWindow.hoffset '+mainWindow.hoffset );
        print( 'mainWindow.voffset '+mainWindow.voffset );
*/
  };
//=====================
//End function
//=====================


//===========================================
// this function
//===========================================
function placeByPercentage() {

        // First of all read the previous hlocation from the prefs in %
        // calculate the current hlocation in % of the screen
        // NOTE: the widget stores any new h & v locations in % of the screen using the half-second location timer - screenLocationTimer
        // if the screen width has changed then change the relative position
        // the h&v modifiers take into account the extra width/height of the invisible help elemenets
    
        var hModifier = (60/ thermometerScale * 100);
        var vModifier = (230/ thermometerScale * 100);
    
        mainWindow.hoffset = screen.width * (preferences.hLocationPercPref.value / 100);
        mainWindow.voffset = screen.height * (preferences.vLocationPercPref.value / 100);
    
        // after the replacement on screen, if the bottom of the widget is off screen then lift it back on screen
        if ((mainWindow.voffset-hModifier) + mainWindow.height > screen.height)  {
            mainWindow.voffset = (screen.height - (mainWindow.height-hModifier)) ;
        }
        // after the replacement on screen, if the right hand side of the widget is off screen then lift it back to the left until it is on screen
        if ((mainWindow.hoffset - vModifier) + mainWindow.width > screen.width)  {
            mainWindow.hoffset = screen.width - (mainWindow.width-vModifier) ;
        }

  };
//=====================
//End function
//=====================



//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {

 // temporary development version of the widget
    var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
    var alertString = "The widget folder is: \n";
    if (filesystem.itemExists(widgetFullPath)) {
        alertString += system.userWidgetsFolder + " \n\n";
        alertString += "The widget name is: \n";
        alertString += widgetName + ".\n ";

        alert(alertString, "Open the widget's folder?", "No Thanks");

        filesystem.reveal(widgetFullPath);
    } else {
        widgetFullPath = resolvePath(".");   
        filesystem.reveal(widgetFullPath);
        print("widgetFullPath " + widgetFullPath);
    }
}
//=====================
//End function
//=====================


//===========================================
// this function edits the widget
//===========================================
function editWidget() {
    //var answer = alert("Editing the widget. Proceed?", "Open Editor", "No Thanks");
    //if (answer === 1) {
        //uses the contents of imageEditPref to initiate your default editor
        performCommand("menu");
    //}
}
//=====================
//End function
//=====================


//======================================================================================
// END script functions.js
//======================================================================================

