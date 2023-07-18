//=================================================
//	 Steampunk Temperature Monitor gauge (MkII)
//	 Written by: Dean Beedell with assistance from Harry Whitfield (Merlin)
//
//       Dean.beedell@lightquick.co.uk
//	 Copyright (C) 2011 All Rights Reserved.
//=================================================

/*
Written by: Dean Beedell with assistance from Harry Whitfield (Merlin)

Sounds courtesy of freesounds (http://www.freesound.org)
21065__elonen__in_sauna_1.wav by elonen
14118__adcbicycle__31.wav by
14090__adcbicycle__3.wav
32634__kjackson__Open_03.wav
34169__Glaneur_de_sons__electric_wire_02.wav
53679__lonemonk__Switch_and_Ballast_1.wav
58496__Benboncan__Treadle_Metalworking_Lathe.wav
85122__Wrylytucker__locking_keyed_padlock.wav
995__RHumphries__RBH_Household_closet_01.wav

All the images my own except for the gauges courtesy of Elmer befuddled (Kevin John Bull Esq.)
Submitted to the yahoo widget gallery with the kind permission of Dave Rice (Yahoo)

Thermometer MkI - List of tasks done
===============

Check the mercury/alcohol pushes up the indexes - done
Make the alarm bell ring on an over-temperature (red) alarm - done
Check the speedfan configuration file, rename it as backup, change speedfan startup minimised - done
Alarm cease on clapper move - done
Alarm cease on bell ding - done
Ensure any Widnows-specific code is only called when the o/s is non-Mac - done
Added descriptions to all routines  - done
Separated the code for checking whether speedfan exists from the code for starting speedfan - done
Tidied up the messages to the log - done
Added waitmessage - done
Ensure any speedfan-specific code is only called when speedfan is installed - done
Alarm clapper state restored on bell ding - done
Logic changed on the search for the executable - done
If speedfan is not installed provide a pop-up with an installation link - done
Added chance to enter correct Speedfan folder location - done
Checks for current version number of widnows - done
XP (NT5) now automatically minimises Speedfan whilst Vista/Win 7 (NT6) does not - done
Move the vertical lines on the paper from right to left according to the sampling interval - WIP
XP (NT5) gets the Speedfan sensor names whilst Vista/Win 7 (NT6) does not - done
Added tooltips for the maximum temperature indices - done
Added temperature tooltips for the scribes and for the thermometer bodies - done
Fixed a problem where a flat file widget cannot run a non-extracted executable - done
Added sensor count to the c++ speedfanreader.exe - done
electric sound added to the warm/hot sliders - done
scribbling sound added to the scribes - done
mechanical sound added to the printer platen move - done
clunk sound added to the various functions - done
relay sound added to the flashing lamps - done
fixed some of the moving lines not disappearing - done
added a wiggle to the scribes - done
Write up full instructions page on the website - done
Add a paper pull on the printer paper - done
Add tags to the rear of the hot/warm sliders  - done
Added animation of the printer at startup - done
0.16 cause slider tags to move the sliders as well as the toggles - done
0.16 Add tooltip showing temperatures to the scribes - done
0.16 Add current temperature tooltip to sliders - done
0.16 Added drop down menu to allow alternative sensors to be selected - done
0.17 Alarm clapper state to be saved to preferences - done
0.17 Alarm slider voffset values to be saved to preferences - done
0.17 Allows you to change the sensor names displayed - done
0.18 Add a ?, X or TEMP titles for the unknown sensor types - done
0.18 In XP - identify the sensors using the Speedfan cfg files and select the appropriate sensor - done
0.18 Set the tooltips so that they reflect the chosen sensor - done
0.19 Graphical bug, selecting new sensor sometimes causes the thermometer index to be overwritten
0.19 Graphical bug, the text sliders are written at the top of the page on startup
0.19 Added the frequency slider in seconds.
0.19 Added the memory and cpu gauges, piping and valves
0.19 Added the wheels behind the hot and warm sliders
0.19 Added the indents behind the hot and warm sliders right hand
0.19 Added the fahrenheit scale
0.19 Added the fahrenheit/centigrade selecter images
0.19 Extracted the centigrade scale to a separate image
0.19 Added the restart and mute toggles
0.19 Moved the Speedfan site button to the right
0.19 Added code to mute the sounds if disabled
0.19 Added code to kill restart speedfan if button pressed
0.20 Added the centigrade scale
0.20 Added the code to switch between centigrade and fahrenheit
0.20 Added the steam puff graphics and code to display it when required
0.20 Clicking on the valve turns off the steam puff
0.20 Clicking on the valve turns the valve
0.20 Added a puff after the printer is opened or closed
0.20 Added tooltips to the cpu/mem gauges
0.20 Added the reflection to the gauge glass
0.20 Added the call of task manager to the cpu gauge click
0.20 Added the call of performance monitor to the memory gauge click
0.20 Added the MAC OS/X equivalents to task manager and performance monitor.
0.20 Added the new help glass and the controls to activate it.
0.20 Added the taskmgr mini-popout and click on to activate the task manager
0.20 Added fadein and fadeout routines
0.20 Added link to new help page
0.20 Increased the size of the printer area to the edge of the widget
0.20 Added resizing of the new images

0.21 store the selected sensors - done
0.21 select the chosen sensors on startup - done
0.21 place the widget on the correct part of the screen on rotation on tablet devices to portrait mode  - done
0.21 Add optional lower gauge - done
0.21 added code to lock the widget in place - done
0.21 allow option to display multiple gauges one for each sensor - done
0.21 Draw the chart - done
0.21 Ensure HM Stationers text moves - done
0.21 Add the resized platen to the widget and adjust all the hoffsets  - done
0.21 resize the fahrenheit scale - done
0.21 resize the steam valve - done
0.21 resize the printer lines - done
0.21 remove the old help glass - done
0.21 create a new help image - done
0.21 Modify the code to place widget in correct location when screen changes from landscape to portrait
0.21 remove the tiny pipe shadow and replace with a tap - done
0.21 resizing bug causes platen to be in the wrong place - done
0.21 add two extra frames to receive the traces and appear continuous.
0.21 added standard menu items
0.21 added licence code
0.21 added ability to reveal widget in windows explorer
0.21 added the wait animation to the startup.
0.21 Sort out the scribe images to match the sensor selection
0.21 Scribe trace colours to match the scribe heads
0.21 move the scribe head text along with the scribe head when clicked upon - done
0.21 fix scribe head ordering - done
0.21 fix the confusing naming of the scribe variables
0.21 fix the crank handle positioning
0.21 fix the zorder of the pop up information plaque

0.22 if any speedfan temperature is zero then it is ignored and the previous temperature is retained


all the code stripped from the .KON and recreated in the .js
all the timers stripped from the .KON and recreated in the .js
moved the startup code into functions


Thermometer MkII - TBD List
===========================

0.22 fix the search for sensor names not finding nos. three and four of the quad core sensors - done
0.22 fix the problems of running under windows 8.1 and identifying sensor names
0.22 cause the timer to trigger so that the gauges all populate when the widget starts up
0.22 add the ability to resize x 150% or more
0.22 resizing bug causes warm/hot alarm sliders to be in the wrong place
0.22 resizing bug means hot alarm sliders cannot be lowered
0.22 resizing bug means sampling interval is incorrect
0.22 resize the traces
adjustSliderVoffset
SetCurrentTemperatureTooltips

0.22 resize the scribe text

0.22 Centigrade vs fahrenheit toggle switch for gauges alone, determines scale &c  - ad an option
      to the menu to toggle the gauge face.
0.22 jslint the lot
0.22 add resizing functionality using the stretcher
0.22 restarting after preferences causes a hang
0.22 tooltips in fahrenheit

Add Mac OS/X temperature code ( an unknown quantity this ) - partly done but untested

Save the sampling speed to a preference and add to startup
Comment out or remove the debug code
clear the selected sensor preferences before bundling

*/
    var leftScribeRgbCol = null;
    var rightScribeRgbCol = null;
    var hsb = new Array(3);

    var nCharCode=null;
    var leftTraceHue =null;
    var rightTraceHue =null;

    var traceOffset = 0;
    var arrayLength = 120;
    var leftTempArray = new Array(arrayLength);
    var rightTempArray = new Array(arrayLength);
    var tempStorageArrayPosition = 1;

    var frame = mainFrame;
    var canvasTop = 1;
    var canvasLeft = 185;
    var canvasWidth = 480;
    var canvasHeight = 305;

    var canvasOne = newCanvas(canvasLeft, canvasTop, canvasWidth, canvasHeight, 0);
    frame.appendChild(canvasOne);
    ctx = canvasOne.getContext( "2d" );
    canvasOne.visible = true;

    var canvasTwo = newCanvas(canvasLeft, canvasTop, canvasWidth, canvasHeight, 0);
    frame.appendChild(canvasTwo);
    canvasTwo.visible = true;

    var canvasThree = newCanvas(canvasLeft, canvasTop, canvasWidth, canvasHeight, 0);
    frame.appendChild(canvasThree);
    canvasThree.visible = true;

    var usteamstate = 1;
    var lsteamstate = 1;

    var busyCounter = 1;
    var useCanvas = 1;

    var verticalplot1 = null;
    var verticalplot2 = null;
    var horizontalAdjust = null;
    var lineColour = null;
    var thick = null;

    // Do this once to extract the file to the Widget's selectedMenuItem folder.
    var tempmonitor = widget.extractFile("Resources/tempmonitor");
    var speedFanExePath = widget.extractFile("Resources/speedfanreader.exe");
    var widgetName = "Steampunk CPU_GPU Speedfan Thermometer.widget";

    var thermometerScale = null;

    var printer = "showing";
    //var verticallineshoffset = 31;
    //var movinglineshoffset = 216;
    var helpdropdownactiveFlg = false;

    var sensorcount = 0;

    var sensorName = new Array();
    var SensorTemp = new Array();
    var leftmenuitems = new Array();
    var rightmenuitems = new Array();
    var UpperRightBottomGaugeMenuItems = new Array();
    var UpperRightTopGaugeMenuItems = new Array();
    var LowerRightMenuItems = new Array();
    var LowerLeftMenuItems = new Array();
    var selectedLeftThermometerSensor = new Array();
    var selectedRightThermometerSensor = new Array();
    var selectedUpperRightBottomGaugeSensor = new Array();
    var selectedUpperRightTopGaugeSensor = new Array();
    var selectedLowerRightGaugeSensor = new Array();
    var selectedLowerLeftGaugeSensor = new Array();
    var noofsensors = 8;
    var getSensorList = 0;
    var  currentLeftThermometerSensor = 1;
    var  currentRightThermometerSensor = 5;
    var  currentUpperRightBottomGaugeSensor = 2;
    var  currentUpperRightTopGaugeSensor = 2;
    var  currentLowerRightGaugeSensor = 2;
    var  currentLowerLeftThermometerSensor = 2;

    var leftmenunameitems = new Array();
    var rightmenunameitems = new Array();
    var selectedLeftThermometerSensorName = new Array();
    var selectedRightThermometerSensorName  = new Array();
    var currentLeftThermometerSensorName = 1;
    var currentRightThermometerSensorName = 5;
    var currentUpperRightBottomGaugeSensorName = 3;
    var currentUpperRightTopGaugeSensorName = 4;

    var currentLeftThermometerSensorNameText ="Core 0";
    var currentRightThermometerSensorNameText ="GPU";
    var currentUpperRightBottomGaugeSensorNameText ="HD0";
    var currentUpperRightTopGaugeSensorNameText ="HD0";
    var currentLowerRightGaugeSensorNameText ="HD1";
    var currentLowerLeftThermometerSensorNameText ="HD1";

    var speedfanflag = "unknown";
    var PreviousredMercuryLeftvoffset= 250;
    var PreviousredMercuryRightvoffset= 250;
    var hotSliderLeftclicked = "false";
    var hotSliderRighttclicked = "false";

    var leftTemperatureMax = 0;
    var rightTemperatureMax = 0;
    var UpperRightBottomGaugeTemperatureMax = 0;
    var UpperRightTopGaugeTemperatureMax = 0;
    var LowerRightTemperatureMax = 0;
    var LowerLeftTemperatureMax = 0;
    var leftTemperature = 0;
    var rightTemperature = 0;
    var UpperRightBottomGaugeTemperature = 0;
    var UpperRightTopGaugeTemperature = 0;
    var LowerRightTemperature = 0;
    var LowerLeftTemperature = 0;



    // sound variables

    var steamsound ="Resources/steamsound.mp3";
    var electricDrone ="Resources/electricDrone.mp3";
    var rollerblindup ="Resources/rollerblind-up.mp3";
    var rollerblinddown ="Resources/rollerblind-down.mp3";
    var clunk = "Resources/clunk.mp3";
    var cranksound = "Resources/crank.mp3";
    var newclunk = "Resources/newclunk.mp3";
    var draw = "Resources/draw.mp3";
    var zzzz = "Resources/zzzz.mp3";
    var sparks = "Resources/sparks.mp3";
    var relay = "Resources/relay.mp3";
    var slider = "Resources/slider.mp3" ;
    var mechanism = "Resources/mechanism.mp3" ;
    var singleBell = "Resources/singleBell.mp3" ;
    var alarmbells = "Resources/singleBell.mp3" ;
    var ting = "Resources/ting.mp3" ;
    var lock = "Resources/lock.mp3" ;
    var pop = "Resources/pop.mp3" ;
    var pageFumble = "Resources/page-fumble.mp3";    

    //resizing variables

    var mainWindowwidthDefault  = mainWindow.width;
    var mainWindowheightDefault = mainWindow.height;

    // waitmessage
    // movinglines.png

    var thermometersHelpPagehoffsetDefault = thermometersHelpPage.hoffset;
    var thermometersHelpPagevoffsetDefault = thermometersHelpPage.voffset;
    var thermometersHelpPagewidthDefault =  thermometersHelpPage.width;
    var thermometersHelpPageheightDefault =  thermometersHelpPage.height;

    var LowerRightPointerhoffsetDefault = LowerRightPointer.hoffset;
    var LowerRightPointervoffsetDefault = LowerRightPointer.voffset;
    var LowerRightPointerwidthDefault =  LowerRightPointer.width;
    var LowerRightPointerheightDefault =  LowerRightPointer.height;
    var LowerRightPointerhRegistrationPointDefault =  LowerRightPointer.hRegistrationPoint;
    var LowerRightPointervRegistrationPointDefault =  LowerRightPointer.vRegistrationPoint;

    var LowerLeftPointerhoffsetDefault = LowerLeftPointer.hoffset;
    var LowerLeftPointervoffsetDefault = LowerLeftPointer.voffset;
    var LowerLeftPointerwidthDefault =  LowerLeftPointer.width;
    var LowerLeftPointerheightDefault =  LowerLeftPointer.height;
    var LowerLeftPointerhRegistrationPointDefault =  LowerLeftPointer.hRegistrationPoint;
    var LowerLeftPointervRegistrationPointDefault =  LowerLeftPointer.vRegistrationPoint;

    var UpperRightBottomGaugePointerhoffsetDefault = UpperRightBottomGaugePointer.hoffset;
    var UpperRightBottomGaugePointervoffsetDefault = UpperRightBottomGaugePointer.voffset;
    var UpperRightBottomGaugePointerwidthDefault =  UpperRightBottomGaugePointer.width;
    var UpperRightBottomGaugePointerheightDefault =  UpperRightBottomGaugePointer.height;
    var UpperRightBottomGaugePointerhRegistrationPointDefault =  UpperRightBottomGaugePointer.hRegistrationPoint;
    var UpperRightBottomGaugePointervRegistrationPointDefault =  UpperRightBottomGaugePointer.vRegistrationPoint;

    var UpperRightTopGaugePointerhoffsetDefault = UpperRightTopGaugePointer.hoffset;
    var UpperRightTopGaugePointervoffsetDefault = UpperRightTopGaugePointer.voffset;
    var UpperRightTopGaugePointerwidthDefault =   UpperRightTopGaugePointer.width;
    var UpperRightTopGaugePointerheightDefault =  UpperRightTopGaugePointer.height;
    var UpperRightTopGaugePointerhRegistrationPointDefault =  UpperRightTopGaugePointer.hRegistrationPoint;
    var UpperRightTopGaugePointervRegistrationPointDefault =  UpperRightTopGaugePointer.vRegistrationPoint;

    var steamhoffsetDefault = steam.hoffset;
    var steamvoffsetDefault = steam.voffset;
    var steamwidthDefault =   steam.width;
    var steamheightDefault =  steam.height;

    var valvehoffsetDefault = valve.hoffset;
    var valvevoffsetDefault = valve.voffset;
    var valvewidthDefault =   valve.width;
    var valveheightDefault =  valve.height;

    var valve2hoffsetDefault = valve2.hoffset;
    var valve2voffsetDefault = valve2.voffset;
    var valve2widthDefault =   valve2.width;
    var valve2heightDefault =  valve2.height;

    //        var resizingValvehoffsetDefault = resizingValve.hoffset;
    //        var resizingValvevoffsetDefault = resizingValve.voffset;
    //        var resizingValvewidthDefault =   resizingValve.width;
    //        var resizingValveheightDefault =  resizingValve.height;

    var memTaphoffsetDefault = memTap.hoffset;
    var memTapvoffsetDefault = memTap.voffset;
    var memTapwidthDefault =   memTap.width;
    var memTapheightDefault =  memTap.height;

    var UpperRightBottomGaugeSensorChar1hoffsetDefault = UpperRightBottomGaugeSensorChar1.hoffset;
    var UpperRightBottomGaugeSensorChar1voffsetDefault = UpperRightBottomGaugeSensorChar1.voffset;
    var UpperRightBottomGaugeSensorChar1widthDefault =   UpperRightBottomGaugeSensorChar1.width;
    var UpperRightBottomGaugeSensorChar1heightDefault =  UpperRightBottomGaugeSensorChar1.height;

    var UpperRightBottomGaugeSensorChar2hoffsetDefault = UpperRightBottomGaugeSensorChar2.hoffset;
    var UpperRightBottomGaugeSensorChar2voffsetDefault = UpperRightBottomGaugeSensorChar2.voffset;
    var UpperRightBottomGaugeSensorChar2widthDefault =   UpperRightBottomGaugeSensorChar2.width;
    var UpperRightBottomGaugeSensorChar2heightDefault =  UpperRightBottomGaugeSensorChar2.height;

    var UpperRightBottomGaugeSensorChar3hoffsetDefault = UpperRightBottomGaugeSensorChar3.hoffset;
    var UpperRightBottomGaugeSensorChar3voffsetDefault = UpperRightBottomGaugeSensorChar3.voffset;
    var UpperRightBottomGaugeSensorChar3widthDefault =   UpperRightBottomGaugeSensorChar3.width;
    var UpperRightBottomGaugeSensorChar3heightDefault =  UpperRightBottomGaugeSensorChar3.height;

    var UpperRightBottomGaugeSensorChar4hoffsetDefault = UpperRightBottomGaugeSensorChar4.hoffset;
    var UpperRightBottomGaugeSensorChar4voffsetDefault = UpperRightBottomGaugeSensorChar4.voffset;
    var UpperRightBottomGaugeSensorChar4widthDefault =   UpperRightBottomGaugeSensorChar4.width;
    var UpperRightBottomGaugeSensorChar4heightDefault =  UpperRightBottomGaugeSensorChar4.height;

    var UpperRightBottomGaugeSensorChar5hoffsetDefault = UpperRightBottomGaugeSensorChar5.hoffset;
    var UpperRightBottomGaugeSensorChar5voffsetDefault = UpperRightBottomGaugeSensorChar5.voffset;
    var UpperRightBottomGaugeSensorChar5widthDefault =   UpperRightBottomGaugeSensorChar5.width;
    var UpperRightBottomGaugeSensorChar5heightDefault =  UpperRightBottomGaugeSensorChar5.height;


    var UpperRightTopGaugeGaugeSensorChar1hoffsetDefault = UpperRightTopGaugeGaugeSensorChar1.hoffset;
    var UpperRightTopGaugeGaugeSensorChar1voffsetDefault = UpperRightTopGaugeGaugeSensorChar1.voffset;
    var UpperRightTopGaugeGaugeSensorChar1widthDefault =   UpperRightTopGaugeGaugeSensorChar1.width;
    var UpperRightTopGaugeGaugeSensorChar1heightDefault =  UpperRightTopGaugeGaugeSensorChar1.height;

    var UpperRightTopGaugeGaugeSensorChar2hoffsetDefault = UpperRightTopGaugeGaugeSensorChar2.hoffset;
    var UpperRightTopGaugeGaugeSensorChar2voffsetDefault = UpperRightTopGaugeGaugeSensorChar2.voffset;
    var UpperRightTopGaugeGaugeSensorChar2widthDefault =   UpperRightTopGaugeGaugeSensorChar2.width;
    var UpperRightTopGaugeGaugeSensorChar2heightDefault =  UpperRightTopGaugeGaugeSensorChar2.height;

    var UpperRightTopGaugeGaugeSensorChar3hoffsetDefault = UpperRightTopGaugeGaugeSensorChar3.hoffset;
    var UpperRightTopGaugeGaugeSensorChar3voffsetDefault = UpperRightTopGaugeGaugeSensorChar3.voffset;
    var UpperRightTopGaugeGaugeSensorChar3widthDefault =   UpperRightTopGaugeGaugeSensorChar3.width;
    var UpperRightTopGaugeGaugeSensorChar3heightDefault =  UpperRightTopGaugeGaugeSensorChar3.height;

    var UpperRightTopGaugeGaugeSensorChar4hoffsetDefault = UpperRightTopGaugeGaugeSensorChar4.hoffset;
    var UpperRightTopGaugeGaugeSensorChar4voffsetDefault = UpperRightTopGaugeGaugeSensorChar4.voffset;
    var UpperRightTopGaugeGaugeSensorChar4widthDefault =   UpperRightTopGaugeGaugeSensorChar4.width;
    var UpperRightTopGaugeGaugeSensorChar4heightDefault =  UpperRightTopGaugeGaugeSensorChar4.height;

    var UpperRightTopGaugeGaugeSensorChar5hoffsetDefault = UpperRightTopGaugeGaugeSensorChar5.hoffset;
    var UpperRightTopGaugeGaugeSensorChar5voffsetDefault = UpperRightTopGaugeGaugeSensorChar5.voffset;
    var UpperRightTopGaugeGaugeSensorChar5widthDefault =   UpperRightTopGaugeGaugeSensorChar5.width;
    var UpperRightTopGaugeGaugeSensorChar5heightDefault =  UpperRightTopGaugeGaugeSensorChar5.height;

    var LowerRightGaugeSensorChar1hoffsetDefault = LowerRightGaugeSensorChar1.hoffset;
    var LowerRightGaugeSensorChar1voffsetDefault = LowerRightGaugeSensorChar1.voffset;
    var LowerRightGaugeSensorChar1widthDefault =   LowerRightGaugeSensorChar1.width;
    var LowerRightGaugeSensorChar1heightDefault =  LowerRightGaugeSensorChar1.height;

    var LowerRightGaugeSensorChar2hoffsetDefault = LowerRightGaugeSensorChar2.hoffset;
    var LowerRightGaugeSensorChar2voffsetDefault = LowerRightGaugeSensorChar2.voffset;
    var LowerRightGaugeSensorChar2widthDefault =   LowerRightGaugeSensorChar2.width;
    var LowerRightGaugeSensorChar2heightDefault =  LowerRightGaugeSensorChar2.height;

    var LowerRightGaugeSensorChar3hoffsetDefault = LowerRightGaugeSensorChar3.hoffset;
    var LowerRightGaugeSensorChar3voffsetDefault = LowerRightGaugeSensorChar3.voffset;
    var LowerRightGaugeSensorChar3widthDefault =   LowerRightGaugeSensorChar3.width;
    var LowerRightGaugeSensorChar3heightDefault =  LowerRightGaugeSensorChar3.height;

    var LowerRightGaugeSensorChar4hoffsetDefault = LowerRightGaugeSensorChar4.hoffset;
    var LowerRightGaugeSensorChar4voffsetDefault = LowerRightGaugeSensorChar4.voffset;
    var LowerRightGaugeSensorChar4widthDefault =   LowerRightGaugeSensorChar4.width;
    var LowerRightGaugeSensorChar4heightDefault =  LowerRightGaugeSensorChar4.height;

    var LowerRightGaugeSensorChar5hoffsetDefault = LowerRightGaugeSensorChar5.hoffset;
    var LowerRightGaugeSensorChar5voffsetDefault = LowerRightGaugeSensorChar5.voffset;
    var LowerRightGaugeSensorChar5widthDefault =   LowerRightGaugeSensorChar5.width;
    var LowerRightGaugeSensorChar5heightDefault =  LowerRightGaugeSensorChar5.height;


    var LowerLeftGaugeSensorChar1hoffsetDefault = LowerLeftGaugeSensorChar1.hoffset;
    var LowerLeftGaugeSensorChar1voffsetDefault = LowerLeftGaugeSensorChar1.voffset;
    var LowerLeftGaugeSensorChar1widthDefault =   LowerLeftGaugeSensorChar1.width;
    var LowerLeftGaugeSensorChar1heightDefault =  LowerLeftGaugeSensorChar1.height;

    var LowerLeftGaugeSensorChar2hoffsetDefault = LowerLeftGaugeSensorChar2.hoffset;
    var LowerLeftGaugeSensorChar2voffsetDefault = LowerLeftGaugeSensorChar2.voffset;
    var LowerLeftGaugeSensorChar2widthDefault =   LowerLeftGaugeSensorChar2.width;
    var LowerLeftGaugeSensorChar2heightDefault =  LowerLeftGaugeSensorChar2.height;

    var LowerLeftGaugeSensorChar3hoffsetDefault = LowerLeftGaugeSensorChar3.hoffset;
    var LowerLeftGaugeSensorChar3voffsetDefault = LowerLeftGaugeSensorChar3.voffset;
    var LowerLeftGaugeSensorChar3widthDefault =   LowerLeftGaugeSensorChar3.width;
    var LowerLeftGaugeSensorChar3heightDefault =  LowerLeftGaugeSensorChar3.height;

    var LowerLeftGaugeSensorChar4hoffsetDefault = LowerLeftGaugeSensorChar4.hoffset;
    var LowerLeftGaugeSensorChar4voffsetDefault = LowerLeftGaugeSensorChar4.voffset;
    var LowerLeftGaugeSensorChar4widthDefault =   LowerLeftGaugeSensorChar4.width;
    var LowerLeftGaugeSensorChar4heightDefault =  LowerLeftGaugeSensorChar4.height;

    var LowerLeftGaugeSensorChar5hoffsetDefault = LowerLeftGaugeSensorChar5.hoffset;
    var LowerLeftGaugeSensorChar5voffsetDefault = LowerLeftGaugeSensorChar5.voffset;
    var LowerLeftGaugeSensorChar5widthDefault =   LowerLeftGaugeSensorChar5.width;
    var LowerLeftGaugeSensorChar5heightDefault =  LowerLeftGaugeSensorChar5.height;

    var leftscalehoffsetDefault = leftscale.hoffset;
    var leftscalevoffsetDefault = leftscale.voffset;
    var leftscalewidthDefault =  leftscale.width;
    var leftscaleheightDefault =  leftscale.height;

    var rightscalehoffsetDefault = rightscale.hoffset;
    var rightscalevoffsetDefault = rightscale.voffset;
    var rightscalewidthDefault =  rightscale.width;
    var rightscaleheightDefault =  rightscale.height;

    var stanchionhoffsetDefault = stanchion.hoffset;
    var stanchionvoffsetDefault = stanchion.voffset;
    var stanchionwidthDefault =  stanchion.width;
    var stanchionheightDefault =  stanchion.height;

    var UpperRightBottomGaugehoffsetDefault = UpperRightBottomGauge.hoffset;
    var UpperRightBottomGaugevoffsetDefault = UpperRightBottomGauge.voffset;
    var UpperRightBottomGaugewidthDefault =  UpperRightBottomGauge.width;
    var UpperRightBottomGaugeheightDefault =  UpperRightBottomGauge.height;

    var UpperRightTopGaugeGaugeLabelhoffsetDefault = UpperRightTopGaugeGaugeLabel.hoffset;
    var UpperRightTopGaugeGaugeLabelvoffsetDefault = UpperRightTopGaugeGaugeLabel.voffset;
    var UpperRightTopGaugeGaugeLabelwidthDefault =  UpperRightTopGaugeGaugeLabel.width;
    var UpperRightTopGaugeGaugeLabelheightDefault =  UpperRightTopGaugeGaugeLabel.height;

    var UpperRightTopGaugeGaugehoffsetDefault = UpperRightTopGaugeGauge.hoffset;
    var UpperRightTopGaugeGaugevoffsetDefault = UpperRightTopGaugeGauge.voffset;
    var UpperRightTopGaugeGaugewidthDefault =  UpperRightTopGaugeGauge.width;
    var UpperRightTopGaugeGaugeheightDefault =  UpperRightTopGaugeGauge.height;

    var LowerRightGaugehoffsetDefault = LowerRightGauge.hoffset;
    var LowerRightGaugevoffsetDefault = LowerRightGauge.voffset;
    var LowerRightGaugewidthDefault =  LowerRightGauge.width;
    var LowerRightGaugeheightDefault =  LowerRightGauge.height;

    var LowerLeftGaugehoffsetDefault = LowerLeftGauge.hoffset;
    var LowerLeftGaugevoffsetDefault = LowerLeftGauge.voffset;
    var LowerLeftGaugewidthDefault =  LowerLeftGauge.width;
    var LowerLeftGaugeheightDefault =  LowerLeftGauge.height;

    var rTogglehoffsetDefault = rToggle.hoffset;
    var rTogglevoffsetDefault = rToggle.voffset;
    var rTogglewidthDefault =  rToggle.width;
    var rToggleheightDefault =  rToggle.height;

    var mTogglehoffsetDefault = mToggle.hoffset;
    var mTogglevoffsetDefault = mToggle.voffset;
    var mTogglewidthDefault =  mToggle.width;
    var mToggleheightDefault =  mToggle.height;

    var scaleswitchrighthoffsetDefault = scaleswitchright.hoffset;
    var scaleswitchrightvoffsetDefault = scaleswitchright.voffset;
    var scaleswitchrightwidthDefault =  scaleswitchright.width;
    var scaleswitchrightheightDefault =  scaleswitchright.height;

    var scaleswitchlefthoffsetDefault = scaleswitchleft.hoffset;
    var scaleswitchleftvoffsetDefault = scaleswitchleft.voffset;
    var scaleswitchleftwidthDefault =  scaleswitchleft.width;
    var scaleswitchleftheightDefault =  scaleswitchleft.height;

    var thermometerRightThermometerSensorChar1hoffsetDefault = thermometerRightThermometerSensorChar1.hoffset;
    var thermometerRightThermometerSensorChar1voffsetDefault = thermometerRightThermometerSensorChar1.voffset;
    var thermometerRightThermometerSensorChar1widthDefault =  thermometerRightThermometerSensorChar1.width;
    var thermometerRightThermometerSensorChar1heightDefault =  thermometerRightThermometerSensorChar1.height;

    var thermometerRightThermometerSensorChar2hoffsetDefault = thermometerRightThermometerSensorChar2.hoffset;
    var thermometerRightThermometerSensorChar2voffsetDefault = thermometerRightThermometerSensorChar2.voffset;
    var thermometerRightThermometerSensorChar2widthDefault =  thermometerRightThermometerSensorChar2.width;
    var thermometerRightThermometerSensorChar2heightDefault =  thermometerRightThermometerSensorChar2.height;

    var thermometerRightThermometerSensorChar3hoffsetDefault = thermometerRightThermometerSensorChar3.hoffset;
    var thermometerRightThermometerSensorChar3voffsetDefault = thermometerRightThermometerSensorChar3.voffset;
    var thermometerRightThermometerSensorChar3widthDefault =  thermometerRightThermometerSensorChar3.width;
    var thermometerRightThermometerSensorChar3heightDefault =  thermometerRightThermometerSensorChar3.height;

    var thermometerRightThermometerSensorChar4hoffsetDefault = thermometerRightThermometerSensorChar4.hoffset;
    var thermometerRightThermometerSensorChar4voffsetDefault = thermometerRightThermometerSensorChar4.voffset;
    var thermometerRightThermometerSensorChar4widthDefault =  thermometerRightThermometerSensorChar4.width;
    var thermometerRightThermometerSensorChar4heightDefault =  thermometerRightThermometerSensorChar4.height;

    var thermometerRightThermometerSensorChar5hoffsetDefault = thermometerRightThermometerSensorChar5.hoffset;
    var thermometerRightThermometerSensorChar5voffsetDefault = thermometerRightThermometerSensorChar5.voffset;
    var thermometerRightThermometerSensorChar5widthDefault =  thermometerRightThermometerSensorChar5.width;
    var thermometerRightThermometerSensorChar5heightDefault =  thermometerRightThermometerSensorChar5.height;

    var thermometerLeftThermometerSensorChar1hoffsetDefault = thermometerLeftThermometerSensorChar1.hoffset;
    var thermometerLeftThermometerSensorChar1voffsetDefault = thermometerLeftThermometerSensorChar1.voffset;
    var thermometerLeftThermometerSensorChar1widthDefault =  thermometerLeftThermometerSensorChar1.width;
    var thermometerLeftThermometerSensorChar1heightDefault =  thermometerLeftThermometerSensorChar1.height;

    var thermometerLeftThermometerSensorChar2hoffsetDefault = thermometerLeftThermometerSensorChar2.hoffset;
    var thermometerLeftThermometerSensorChar2voffsetDefault = thermometerLeftThermometerSensorChar2.voffset;
    var thermometerLeftThermometerSensorChar2widthDefault =  thermometerLeftThermometerSensorChar2.width;
    var thermometerLeftThermometerSensorChar2heightDefault =  thermometerLeftThermometerSensorChar2.height;

    var thermometerLeftThermometerSensorChar3hoffsetDefault = thermometerLeftThermometerSensorChar3.hoffset;
    var thermometerLeftThermometerSensorChar3voffsetDefault = thermometerLeftThermometerSensorChar3.voffset;
    var thermometerLeftThermometerSensorChar3widthDefault =  thermometerLeftThermometerSensorChar3.width;
    var thermometerLeftThermometerSensorChar3heightDefault =  thermometerLeftThermometerSensorChar3.height;

    var thermometerLeftThermometerSensorChar4hoffsetDefault = thermometerLeftThermometerSensorChar4.hoffset;
    var thermometerLeftThermometerSensorChar4voffsetDefault = thermometerLeftThermometerSensorChar4.voffset;
    var thermometerLeftThermometerSensorChar4widthDefault =  thermometerLeftThermometerSensorChar4.width;
    var thermometerLeftThermometerSensorChar4heightDefault =  thermometerLeftThermometerSensorChar4.height;

    var thermometerLeftThermometerSensorChar5hoffsetDefault = thermometerLeftThermometerSensorChar5.hoffset;
    var thermometerLeftThermometerSensorChar5voffsetDefault = thermometerLeftThermometerSensorChar5.voffset;
    var thermometerLeftThermometerSensorChar5widthDefault =  thermometerLeftThermometerSensorChar5.width;
    var thermometerLeftThermometerSensorChar5heightDefault =  thermometerLeftThermometerSensorChar5.height;

    var gettingSpeedfanhoffsetDefault = gettingSpeedfan.hoffset;
    var gettingSpeedfanvoffsetDefault = gettingSpeedfan.voffset;
    var gettingSpeedfanwidthDefault =  gettingSpeedfan.width;
    var gettingSpeedfanheightDefault =  gettingSpeedfan.height;

    var sTogglehoffsetDefault = sToggle.hoffset;
    var sTogglevoffsetDefault = sToggle.voffset;
    var sTogglewidthDefault =  sToggle.width;
    var sToggleheightDefault =  sToggle.height;

    var speedfanNotFoundhoffsetDefault = speedfanNotFound.hoffset;
    var speedfanNotFoundvoffsetDefault = speedfanNotFound.voffset;
    var speedfanNotFoundwidthDefault =  speedfanNotFound.width;
    var speedfanNotFoundheightDefault =  speedfanNotFound.height;

    var waitmessagehoffsetDefault = waitmessage.hoffset;
    var waitmessagevoffsetDefault = waitmessage.voffset;
    var waitmessagewidthDefault =  waitmessage.width;
    var waitmessageheightDefault =  waitmessage.height;

    var paperhoffsetDefault = paper.hoffset;
    var papervoffsetDefault = paper.voffset;
    var paperwidthDefault =  paper.width;
    var paperheightDefault =  paper.height;


    var paperPullhoffsetDefault = paperPull.hoffset;
    var paperPullvoffsetDefault = paperPull.voffset;
    var paperPullwidthDefault =  paperPull.width;
    var paperPullheightDefault =  paperPull.height;


    var movinglineshoffsetDefault = movinglines.hoffset;
    var movinglinesvoffsetDefault = movinglines.voffset;
    var movinglineswidthDefault =  movinglines.width;
    var movinglinesheightDefault =  movinglines.height;

    var upperrightbrackethoffsetDefault = upperrightbracket.hoffset;
    var upperrightbracketvoffsetDefault = upperrightbracket.voffset;
    var upperrightbracketwidthDefault =  upperrightbracket.width;
    var upperrightbracketheightDefault =  upperrightbracket.height;

    var lowerrightbrackethoffsetDefault = lowerrightbracket.hoffset;
    var lowerrightbracketvoffsetDefault = lowerrightbracket.voffset;
    var lowerrightbracketwidthDefault =  lowerrightbracket.width;
    var lowerrightbracketheightDefault =  lowerrightbracket.height;

    var topbarhoffsetDefault = topbar.hoffset;
    var topbarvoffsetDefault = topbar.voffset;
    var topbarwidthDefault =  topbar.width;
    var topbarheightDefault =  topbar.height;

    var bottombarhoffsetDefault = bottombar.hoffset;
    var bottombarvoffsetDefault = bottombar.voffset;
    var bottombarwidthDefault =  bottombar.width;
    var bottombarheightDefault =  bottombar.height;

    var trunnionhoffsetDefault = trunnion.hoffset;
    var trunnionvoffsetDefault = trunnion.voffset;
    var trunnionwidthDefault =  trunnion.width;
    var trunnionheightDefault =  trunnion.height;

    var holehoffsetDefault = hole.hoffset;
    var holevoffsetDefault = hole.voffset;
    var holewidthDefault =  hole.width;
    var holeheightDefault =  hole.height;

    var bunchedLineshoffsetDefault = bunchedLines.hoffset;
    var bunchedLinesvoffsetDefault = bunchedLines.voffset;
    var bunchedLineswidthDefault =  bunchedLines.width;
    var bunchedLinesheightDefault =  bunchedLines.height;

    var verticalLineshoffsetDefault = verticalLines.hoffset;
    var verticalLinesvoffsetDefault = verticalLines.voffset;
    var verticalLineswidthDefault =  verticalLines.width;
    var verticalLinesheightDefault =  verticalLines.height;

    var rightScribeHeadhoffsetDefault = rightScribeHead.hoffset;
    var rightScribeHeadvoffsetDefault = rightScribeHead.voffset;
    var rightScribeHeadwidthDefault =  rightScribeHead.width;
    var rightScribeHeadheightDefault =  rightScribeHead.height;

    var rightScribeHeadShadowhoffsetDefault = rightScribeHeadShadow.hoffset;
    var rightScribeHeadShadowvoffsetDefault = rightScribeHeadShadow.voffset;
    var rightScribeHeadShadowwidthDefault =  rightScribeHeadShadow.width;
    var rightScribeHeadShadowheightDefault =  rightScribeHeadShadow.height;

    var longWirehoffsetDefault = longWire.hoffset;
    var longWirevoffsetDefault = longWire.voffset;
    var longWirewidthDefault =  longWire.width;
    var longWireheightDefault =  longWire.height;

    var scribeHeadNoWireTwohoffsetDefault = scribeHeadNoWireTwo.hoffset;
    var scribeHeadNoWireTwovoffsetDefault = scribeHeadNoWireTwo.voffset;
    var scribeHeadNoWireTwowidthDefault =  scribeHeadNoWireTwo.width;
    var scribeHeadNoWireTwoheightDefault =  scribeHeadNoWireTwo.height;

    var leftScribeTexthoffsetDefault = leftScribeText.hoffset;
    var leftScribeTextvoffsetDefault = leftScribeText.voffset;
    var leftScribeTextwidthDefault =  leftScribeText.width;
    var leftScribeTextheightDefault =  leftScribeText.height;

    var leftScribeTextShadowhoffsetDefault = leftScribeTextShadow.hoffset;
    var leftScribeTextShadowvoffsetDefault = leftScribeTextShadow.voffset;
    var leftScribeTextShadowwidthDefault =  leftScribeTextShadow.width;
    var leftScribeTextShadowheightDefault =  leftScribeTextShadow.height;
    var leftScribeTextShadowsizeDefault =  leftScribeTextShadow.size;

    var rightScribeTexthoffsetDefault = rightScribeText.hoffset;
    var rightScribeTextvoffsetDefault = rightScribeText.voffset;
    var rightScribeTextwidthDefault =  rightScribeText.width;
    var rightScribeTextheightDefault =  rightScribeText.height;
    var rightScribeTextsizeDefault =  rightScribeText.size;

    var rightScribeTextShadowhoffsetDefault = rightScribeTextShadow.hoffset;
    var rightScribeTextShadowvoffsetDefault = rightScribeTextShadow.voffset;
    var rightScribeTextShadowwidthDefault =  rightScribeTextShadow.width;
    var rightScribeTextShadowheightDefault =  rightScribeTextShadow.height;

    var scribeHeadNoWireOnehoffsetDefault = scribeHeadNoWireOne.hoffset;
    var scribeHeadNoWireOnevoffsetDefault = scribeHeadNoWireOne.voffset;
    var scribeHeadNoWireOnewidthDefault =  scribeHeadNoWireOne.width;
    var scribeHeadNoWireOneheightDefault =  scribeHeadNoWireOne.height;

    var shortWirehoffsetDefault = shortWire.hoffset;
    var shortWirevoffsetDefault = shortWire.voffset;
    var shortWirewidthDefault =  shortWire.width;
    var shortWireheightDefault =  shortWire.height;

    var leftScribeHeadhoffsetDefault = leftScribeHead.hoffset;
    var leftScribeHeadvoffsetDefault = leftScribeHead.voffset;
    var leftScribeHeadwidthDefault =  leftScribeHead.width;
    var leftScribeHeadheightDefault =  leftScribeHead.height;

    var leftScribeHeadShadowhoffsetDefault = leftScribeHeadShadow.hoffset;
    var leftScribeHeadShadowvoffsetDefault = leftScribeHeadShadow.voffset;
    var leftScribeHeadShadowwidthDefault =  leftScribeHeadShadow.width;
    var leftScribeHeadShadowheightDefault =  leftScribeHeadShadow.height;

    var stationerstexthoffsetDefault = stationerstext.hoffset;
    var stationerstextvoffsetDefault = stationerstext.voffset;
    var stationerstextwidthDefault =  stationerstext.width;
    var stationerstextheightDefault =  stationerstext.height;

    var woodSurroundhoffsetDefault = woodSurround.hoffset;
    var woodSurroundvoffsetDefault = woodSurround.voffset;
    var woodSurroundwidthDefault =  woodSurround.width;
    var woodSurroundheightDefault =  woodSurround.height;

    var hotSliderRighthoffsetDefault = hotSliderRight.hoffset;
    var hotSliderRightvoffsetDefault = hotSliderRight.voffset;
    var hotSliderRightwidthDefault =  hotSliderRight.width;
    var hotSliderRightheightDefault =  hotSliderRight.height;

    var hotSliderLefthoffsetDefault = hotSliderLeft.hoffset;
    var hotSliderLeftvoffsetDefault = hotSliderLeft.voffset;
    var hotSliderLeftwidthDefault =  hotSliderLeft.width;
    var hotSliderLeftheightDefault =  hotSliderLeft.height;

    var warmSliderRighthoffsetDefault = warmSliderRight.hoffset;
    var warmSliderRightvoffsetDefault = warmSliderRight.voffset;
    var warmSliderRightwidthDefault =  warmSliderRight.width;
    var warmSliderRightheightDefault =  warmSliderRight.height;

    var warmSliderLefthoffsetDefault = warmSliderLeft.hoffset;
    var warmSliderLeftvoffsetDefault = warmSliderLeft.voffset;
    var warmSliderLeftwidthDefault =  warmSliderLeft.width;
    var warmSliderLeftheightDefault =  warmSliderLeft.height;


    var righthottexthoffsetDefault = righthottext.hoffset;
    var righthottextvoffsetDefault = righthottext.voffset;
    var righthottextwidthDefault =  righthottext.width;
    var righthottextheightDefault =  righthottext.height;

    var rightwarmtexthoffsetDefault = rightwarmtext.hoffset;
    var rightwarmtextvoffsetDefault = rightwarmtext.voffset;
    var rightwarmtextwidthDefault =  rightwarmtext.width;
    var rightwarmtextheightDefault =  rightwarmtext.height;

    var leftwarmtexthoffsetDefault = leftwarmtext.hoffset;
    var leftwarmtextvoffsetDefault = leftwarmtext.voffset;
    var leftwarmtextwidthDefault =  leftwarmtext.width;
    var leftwarmtextheightDefault =  leftwarmtext.height;

    var lefthottexthoffsetDefault = lefthottext.hoffset;
    var lefthottextvoffsetDefault = lefthottext.voffset;
    var lefthottextwidthDefault =  lefthottext.width;
    var lefthottextheightDefault =  lefthottext.height;

    var cpuPlaquehoffsetDefault = cpuPlaque.hoffset;
    var cpuPlaquevoffsetDefault = cpuPlaque.voffset;
    var cpuPlaquewidthDefault =  cpuPlaque.width;
    var cpuPlaqueheightDefault =  cpuPlaque.height;

    var popupplaquehoffsetDefault = popupplaque.hoffset;
    var popupplaquevoffsetDefault = popupplaque.voffset;
    var popupplaquewidthDefault =  popupplaque.width;
    var popupplaqueheightDefault =  popupplaque.height;

    var thermometerLefthoffsetDefault = thermometerLeft.hoffset;
    var thermometerLeftvoffsetDefault = thermometerLeft.voffset;
    var thermometerLeftwidthDefault =  thermometerLeft.width;
    var thermometerLeftheightDefault =  thermometerLeft.height;

    var crankhoffsetDefault = crank.hoffset;
    var crankvoffsetDefault = crank.voffset;
    var crankwidthDefault =  crank.width;
    var crankheightDefault =  crank.height;

    var thermometerRighthoffsetDefault = thermometerRight.hoffset;
    var thermometerRightvoffsetDefault = thermometerRight.voffset;
    var thermometerRightwidthDefault =  thermometerRight.width;
    var thermometerRightheightDefault =  thermometerRight.height;

    var rightTemperatureMaxIndexhoffsetDefault = rightTemperatureMaxIndex.hoffset;
    var rightTemperatureMaxIndexvoffsetDefault = rightTemperatureMaxIndex.voffset;
    var rightTemperatureMaxIndexwidthDefault =  rightTemperatureMaxIndex.width;
    var rightTemperatureMaxIndexheightDefault =  rightTemperatureMaxIndex.height;

    var leftTemperatureMaxIndexhoffsetDefault = leftTemperatureMaxIndex.hoffset;
    var leftTemperatureMaxIndexvoffsetDefault = leftTemperatureMaxIndex.voffset;
    var leftTemperatureMaxIndexwidthDefault =  leftTemperatureMaxIndex.width;
    var leftTemperatureMaxIndexheightDefault =  leftTemperatureMaxIndex.height;

    var rightLamphoffsetDefault = rightLamp.hoffset;
    var rightLampvoffsetDefault = rightLamp.voffset;
    var rightLampwidthDefault =  rightLamp.width;
    var rightLampheightDefault =  rightLamp.height;

    var leftLamphoffsetDefault = leftLamp.hoffset;
    var leftLampvoffsetDefault = leftLamp.voffset;
    var leftLampwidthDefault =  leftLamp.width;
    var leftLampheightDefault =  leftLamp.height;

    var redLampFlashinghoffsetDefault = redLampFlashing.hoffset;
    var redLampFlashingvoffsetDefault = redLampFlashing.voffset;
    var redLampFlashingwidthDefault =  redLampFlashing.width;
    var redLampFlashingheightDefault =  redLampFlashing.height;

    var amberLamphoffsetDefault = amberLamp.hoffset;
    var amberLampvoffsetDefault = amberLamp.voffset;
    var amberLampwidthDefault =  amberLamp.width;
    var amberLampheightDefault =  amberLamp.height;

    var amberLampFlashinghoffsetDefault = amberLampFlashing.hoffset;
    var amberLampFlashingvoffsetDefault = amberLampFlashing.voffset;
    var amberLampFlashingwidthDefault =  amberLampFlashing.width;
    var amberLampFlashingheightDefault =  amberLampFlashing.height;

    var bellSethoffsetDefault = bellSet.hoffset;
    var bellSetvoffsetDefault = bellSet.voffset;
    var bellSetwidthDefault =  bellSet.width;
    var bellSetheightDefault =  bellSet.height;

    var hTogglehoffsetDefault = hToggle.hoffset;
    var hTogglevoffsetDefault = hToggle.voffset;
    var hTogglewidthDefault =  hToggle.width;
    var hToggleheightDefault =  hToggle.height;

    var screw1hoffsetDefault = screw1.hoffset;
    var screw1voffsetDefault = screw1.voffset;
    var screw1widthDefault =  screw1.width;
    var screw1heightDefault =  screw1.height;

    var screw2hoffsetDefault = screw2.hoffset;
    var screw2voffsetDefault = screw2.voffset;
    var screw2widthDefault =  screw2.width;
    var screw2heightDefault =  screw2.height;

    var clapperhoffsetDefault = clapper.hoffset;
    var clappervoffsetDefault = clapper.voffset;
    var clapperwidthDefault =  clapper.width;
    var clapperheightDefault =  clapper.height;

    var ClapperRotatedhoffsetDefault = ClapperRotated.hoffset;
    var ClapperRotatedvoffsetDefault = ClapperRotated.voffset;
    var ClapperRotatedwidthDefault =  ClapperRotated.width;
    var ClapperRotatedheightDefault =  ClapperRotated.height;

    var speedfanindicatorredglowinghoffsetDefault = speedfanindicatorredglowing.hoffset;
    var speedfanindicatorredglowingvoffsetDefault = speedfanindicatorredglowing.voffset;
    var speedfanindicatorredglowingwidthDefault =  speedfanindicatorredglowing.width;
    var speedfanindicatorredglowingheightDefault =  speedfanindicatorredglowing.height;

    var speedfanindicatorredhoffsetDefault = speedfanindicatorred.hoffset;
    var speedfanindicatorredvoffsetDefault = speedfanindicatorred.voffset;
    var speedfanindicatorredwidthDefault =  speedfanindicatorred.width;
    var speedfanindicatorredheightDefault =  speedfanindicatorred.height;

    var speedfanindicatorhoffsetDefault = speedfanindicator.hoffset;
    var speedfanindicatorvoffsetDefault = speedfanindicator.voffset;
    var speedfanindicatorwidthDefault =  speedfanindicator.width;
    var speedfanindicatorheightDefault =  speedfanindicator.height;

    var frequencySliderhoffsetDefault = frequencySlider.hoffset;
    var frequencySlidervoffsetDefault = frequencySlider.voffset;
    var frequencySliderwidthDefault =  frequencySlider.width;
    var frequencySliderheightDefault =  frequencySlider.height;

    var ovalSliderhoffsetDefault = ovalSlider.hoffset;
    var ovalSlidervoffsetDefault = ovalSlider.voffset;
    var ovalSliderwidthDefault =  ovalSlider.width;
    var ovalSliderheightDefault =  ovalSlider.height;

    var redMercuryLefthoffsetDefault = redMercuryLeft.hoffset;
    var redMercuryLeftvoffsetDefault = redMercuryLeft.voffset;
    var redMercuryLeftwidthDefault =  redMercuryLeft.width;
    var redMercuryLeftheightDefault =  redMercuryLeft.height;

    var redMercuryRighthoffsetDefault = redMercuryRight.hoffset;
    var redMercuryRightvoffsetDefault = redMercuryRight.voffset;
    var redMercuryRightwidthDefault =  redMercuryRight.width;
    var redMercuryRightheightDefault =  redMercuryRight.height;

    var stretcherhoffsetDefault = stretcher.hoffset;
    var stretchervoffsetDefault = stretcher.voffset;
    var stretcherwidthDefault =  stretcher.width;
    var stretcherheightDefault =  stretcher.height;

    var thermometersHelpPageFronthoffsetDefault = thermometersHelpPageFront.hoffset;
    var thermometersHelpPageFrontvoffsetDefault = thermometersHelpPageFront.voffset;
    var thermometersHelpPageFrontwidthDefault =  thermometersHelpPageFront.width;
    var thermometersHelpPageFrontheightDefault =  thermometersHelpPageFront.height;

    var currIcon="Resources/dockIcon.png";
    var aspectRatio = "none";
    var debugFlg = "";
        
        
//===========================================
// this function runs on startup
//===========================================
function startup() {

    // debug development options revealed
    revealDevelopmentOptions();

    // check the widget is on-screen
    mainScreen(); 	
    
    // resize the thermometer
    resizethermometer(); 
          
    // rotate the busytimer
    rotateBusyTimer ();     
   
    // create the licence window
    createLicence(mainWindow);  
    
    // put the icon in the dock
    showdockicon();     
     
    // build the menu
    setmenu();           
   
    // sound the bell alarm here
    soundBellAlarm();
     
    // check the lock on the widget is required
    checkLockWidget();     
    
    // adjust the hot/warm sliders according to the stored voffset values
    adjustSliderVoffset(); 

    // initial checks of visibility dependant solely upon preferences as the no. of sensors is currently the default 8
    // determine secondary upper gauge visibility
    setUpperRightTopGaugeGaugeVisibility();  
    
    // determine primary lower gauge visibility
    setLowerRightGaugeVisibility();  
    
    // determine secondary lower gauge visibility
    setLowerLeftGaugeVisibility();  

    // set out a visible puff on startup
    puff(420,205); 

    // Check speedfan executable exists in the expected folders
    checkSpeedfanBinaryExists();
    
    // speedfan not found, blink the red lamps
    blinkRedIndicatorLamps();
    
    // attempt to enable speedfan logging
    stubEnableSpeedfanLogging();
    
    // play a droning sound
    if (preferences.soundsPref.value !== "mute" ) {play(electricDrone,false);};

    // obtain speedfan sensor names
    stubGetWindowsSensorNames();

    // start timer to sample temperature.
    //sampleTemperaturesOnce();
    
    startSampling();
   
}
//=====================
//End function startup
//=====================


//===============================================================
// function to find speedfan after the busy icon has been clicked
//===============================================================
busy.onmousedown = function () {
    busyTimer.ticking = false; 
    busy.visible = false;
    busyBlur.visible = false;
    
    // speedfan not found
    if (speedfanflag !== "installed") {   
        selectSpeedfanBinaryLocation();
    }
};
//=====================
//End function 
//=====================

//===============================================================
// function to find speedfan after the busy icon has been clicked
//===============================================================
speedfanindicatorred.onmousedown = function () {
    busyTimer.ticking = false; 
    busy.visible = false;
    busyBlur.visible = false;
    
    // speedfan not found
    if (speedfanflag !== "installed") {   
        selectSpeedfanBinaryLocation();
    }
};
//=====================
//End function 
//=====================


//===============================================================
// function to find speedfan after the busy icon has been clicked
//===============================================================
speedfanindicatorredglowing.onmousedown = function () {
    busyTimer.ticking = false; 
    busy.visible = false;
    busyBlur.visible = false;
    
    // speedfan not found
    if (speedfanflag !== "installed") {   
        selectSpeedfanBinaryLocation();
    }
};
//=====================
//End function 
//=====================


 
 
// //===========================================
// // function to 
// //===========================================
// resizingValve.onMouseDown = function () {          
//    if (preferences.resizingValvePref.value == "disabled")
//    {
//       preferences.resizingValvePref.value = "enabled";
//       resizingValve.src="Resources/valve-rotated.png";
//       puff(235,10);     // scaling change required here
//    } else {
//       preferences.resizingValvePref.value = "disabled";
//       resizingValve.src="Resources/valve.png";
//       puff(235,10);     // scaling change required here
//    }
// }
////=====================
////End function 
//=====================



//===========================================
// function to 
//===========================================
valve.onMouseDown = function () {
    if (waitmessage.visible == false) {
        if (preferences.UpperRightTopGaugeGaugeShownPref.value == "disabled"  && noofsensors >= 4) {
            preferences.UpperRightTopGaugeGaugeShownPref.value = "enabled";
            valve.src="Resources/valve-rotated.png";
            UpperRightTopGaugeGaugeLabel.visible = true;
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
            UpperRightTopGaugeGauge.visible = true;
            UpperRightTopGaugePointer.visible = true;
            UpperRightTopGaugeGaugeSensorChar1.visible = true;
            UpperRightTopGaugeGaugeSensorChar2.visible = true;
            UpperRightTopGaugeGaugeSensorChar3.visible = true;
            UpperRightTopGaugeGaugeSensorChar4.visible = true;
            UpperRightTopGaugeGaugeSensorChar5.visible = true;
            puff(428,215);     // scaling change required here
            ReadTemperatures();
        }
        else
        {
            preferences.UpperRightTopGaugeGaugeShownPref.value = "disabled";
            valve.src="Resources/valve.png";
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
            UpperRightTopGaugeGaugeLabel.visible = false;
            UpperRightTopGaugeGauge.visible = false;
            UpperRightTopGaugePointer.visible = false;
            UpperRightTopGaugeGaugeSensorChar1.visible = false;
            UpperRightTopGaugeGaugeSensorChar2.visible = false;
            UpperRightTopGaugeGaugeSensorChar3.visible = false;
            UpperRightTopGaugeGaugeSensorChar4.visible = false;
            UpperRightTopGaugeGaugeSensorChar5.visible = false;
            puff(425,130);     // scaling change required here
        }
    }
};
//=====================
//End function 
//=====================




//===========================================
// function to 
//===========================================
valve2.onMouseDown = function () {
    if (waitmessage.visible == false) {
        if (preferences.LowerLeftGaugeShownPref.value == "disabled"  && noofsensors >= 6) {
            preferences.LowerLeftGaugeShownPref.value = "enabled";
            valve2.src="Resources/valve-rotated.png";
            LowerLeftGauge.visible = true;
            LowerLeftPointer.visible = true;
            LowerLeftGaugeSensorChar1.visible = true;
            LowerLeftGaugeSensorChar2.visible = true;
            LowerLeftGaugeSensorChar3.visible = true;
            LowerLeftGaugeSensorChar4.visible = true;
            LowerLeftGaugeSensorChar5.visible = true;
            puff(220,305);
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
        }
        else
        {
            preferences.LowerLeftGaugeShownPref.value = "disabled";
            valve2.src="Resources/valve.png";
            LowerLeftGauge.visible = false;
            LowerLeftPointer.visible = false;
            LowerLeftGaugeSensorChar1.visible = false;
            LowerLeftGaugeSensorChar2.visible = false;
            LowerLeftGaugeSensorChar3.visible = false;
            LowerLeftGaugeSensorChar4.visible = false;
            LowerLeftGaugeSensorChar5.visible = false;
            puff(220,305);
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
        }
    }
};
//=====================
//End function 
//=====================



//===========================================
// function to put a small icon into the dock
//===========================================
function showdockicon()
{
   var dockIcon=XMLDOM.parse(filesystem.readFile("dock.xml"));
   widget.setDockItem(dockIcon);
   mainWindow.visible = true;
   //screenwrite("Running showdockicon");
   //print("Running showdockicon");
}
//=====================
//End function
//=====================

//===========================================
// function to pull down the help canvas
//===========================================
function helpdropdownmove()
{

if (preferences.soundsPref.value === "enabled") {
    play(pageFumble, false);
}
 if ( thermometersHelpPageFront.visible == false ) {
        thermometersHelpPage.visible = true;
        thermometersHelpPageFront.visible = true;
        if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);};
        if (preferences.soundsPref.value != "mute" ) {play(rollerblinddown, false);};
 } else {
        thermometersHelpPage.visible = false;
        thermometersHelpPageFront.visible = false;
        if (preferences.soundsPref.value != "mute" ) {play(rollerblindup, false);};
 }
}
//=====================
//End function
//=====================
//===========================================
// Function to determine if the left index has been clicked on
//===========================================
function leftTemperatureMaxIndexdown()
{
//      print("Running function leftTemperatureMaxIndexdown");
      leftTemperatureMaxIndexclicked = true;
//      print("Leaving function leftTemperatureMaxIndexdown " +clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to slide the left index
//===========================================
function leftTemperatureMaxIndexdrag()
{
    //print("Running function leftTemperatureMaxIndexdrag "+clicked);
    //print("slider set offset "+leftTemperatureMaxIndex.voffset);
    //print("system event offset "+system.event.voffset);
          if(leftTemperatureMaxIndexclicked === true) {
             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};

             //print("clicked = true in leftTemperatureMaxIndexdrag ");
             leftTemperatureMaxIndex.voffset = system.event.voffset;
             if (leftTemperatureMaxIndex.voffset >= 220* thermometerScale)
             {
                 leftTemperatureMaxIndex.voffset = 220* thermometerScale;
             }

             if (leftTemperatureMaxIndex.voffset <= 77* thermometerScale)
             {
                 leftTemperatureMaxIndex.voffset = 77* thermometerScale;
             }

             if (leftTemperatureMaxIndex.voffset >= redMercuryLeft.voffset -(19 * thermometerScale))
             {
                  leftTemperatureMaxIndex.voffset = redMercuryLeft.voffset -(19 * thermometerScale);
             }
             //acceleration = timeaccelerationfactor * (leftTemperatureMaxIndex.hoffset - (396* thermometerScale));
             //print("timeaccelerationfactor",timeaccelerationfactor);
             //print("acceleration",acceleration);
             //print("sliderSet.hoffset",sliderSet.hoffset-396);
          }

//   print("leaving function leftTemperatureMaxIndexdrag ");
}
//=====================
//End function
//=====================
//===========================================
// Function when left index click ends
//===========================================
function leftTemperatureMaxIndexup()
{
  if(leftTemperatureMaxIndexclicked === true)
   {
      leftTemperatureMaxIndexclicked = false;
      leftTemperatureMaxIndex.onMouseMove= null;

      SetCurrentTemperatureTooltips();
   }
      //print("Running function leftTemperatureMaxIndexup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to determine if the left index has been clicked on
//===========================================
function rightTemperatureMaxIndexdown()
{
//      print("Running function rightTemperatureMaxIndexdown");
      rightTemperatureMaxIndexclicked = true;
//      print("Leaving function rightTemperatureMaxIndexdown " +clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to slide the right index
//===========================================
function rightTemperatureMaxIndexdrag()
{
    //print("Running function rightTemperatureMaxIndexdrag "+clicked);
    //print("slider set offset "+rightTemperatureMaxIndex.voffset);
    //print("system event offset "+system.event.voffset);
          if(rightTemperatureMaxIndexclicked === true) {
             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};
             //print("clicked = true in rightTemperatureMaxIndexdrag ");
             rightTemperatureMaxIndex.voffset = system.event.voffset;
             if (rightTemperatureMaxIndex.voffset >= 220* thermometerScale)
             {
                 rightTemperatureMaxIndex.voffset = 220* thermometerScale;
             }
             if (rightTemperatureMaxIndex.voffset <= 77* thermometerScale)
             {
                 rightTemperatureMaxIndex.voffset = 77* thermometerScale;
             }
             if (rightTemperatureMaxIndex.voffset >= redMercuryRight.voffset -(19 * thermometerScale))
             {
                  rightTemperatureMaxIndex.voffset = redMercuryRight.voffset -(19 * thermometerScale);
             }
             //acceleration = timeaccelerationfactor * (rightTemperatureMaxIndex.hoffset - (396* thermometerScale));
             //print("timeaccelerationfactor",timeaccelerationfactor);
             //print("acceleration",acceleration);
             //print("sliderSet.hoffset",sliderSet.hoffset-396);
          }
//   print("leaving function rightTemperatureMaxIndexdrag ");
}
//=====================
//End function
//=====================
//===========================================
// Function called when right index click ends
//===========================================
function rightTemperatureMaxIndexup()
{
  if(rightTemperatureMaxIndexclicked === true)
   {
      rightTemperatureMaxIndexclicked = false;
      rightTemperatureMaxIndex.onMouseMove= null;

      SetCurrentTemperatureTooltips();
   }
      //print("Running function rightTemperatureMaxIndexup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to unclick the left hand hot alarm slider
//===========================================
function hotSliderLeftup()
{
  if(hotSliderLeftclicked === true)
   {
      hotSliderLeftclicked = false;
      hotSliderLeft.onMouseMove= null;

      SetCurrentTemperatureTooltips();
      preferences.hotSliderLeftValuePref.value = hotSliderLeft.voffset;

   }
      //print("Running function hotSliderLeftup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to click on the right hand hot slider
//===========================================
function hotSliderRightdown()
{
//      print("Running function hotSliderRightdown");
      hotSliderRightclicked = true;
//      print("Leaving function hotSliderRightdown " +clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to slide the right hand hot slider
//===========================================
function hotSliderRightdrag()
{
    //print("Running function hotSliderRightdrag "+clicked);
    //print("slider set offset "+hotSliderRight.voffset);
    //print("system event offset "+system.event.voffset);
          if(hotSliderRightclicked === true) {

             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};

             //print("clicked = true in hotSliderRightdrag ");
             hotSliderRight.voffset = system.event.voffset;
             //righthottext.voffset = system.event.voffset;
             //righthottext.voffset = ((system.event.voffset-10)* thermometerScale);
             if (hotSliderRight.voffset >= (warmSliderRight.voffset-10)* thermometerScale)
             {
                 hotSliderRight.voffset = (warmSliderRight.voffset-10)* thermometerScale;
             }

             if (hotSliderRight.voffset >= 220* thermometerScale)
             {
                 hotSliderRight.voffset = 220* thermometerScale;
             }

             if (hotSliderRight.voffset <= 77* thermometerScale)
             {
                 hotSliderRight.voffset = 77* thermometerScale;
             }

             righthottext.voffset = (hotSliderRight.voffset-4)* thermometerScale;

             //acceleration = timeaccelerationfactor * (hotSliderRight.hoffset - (396* thermometerScale));
             //print("timeaccelerationfactor",timeaccelerationfactor);
             //print("acceleration",acceleration);
             //print("sliderSet.hoffset",sliderSet.hoffset-396);
          }

//   print("leaving function hotSliderRightdrag ");
}
//=====================
//End function
//=====================
//===========================================
// Function to unclick the right hand hot slider
//===========================================
function hotSliderRightup()
{
  if(hotSliderRightclicked === true)
   {
      hotSliderRightclicked = false;
      hotSliderRight.onMouseMove= null;

      SetCurrentTemperatureTooltips();

      preferences.hotSliderRightValuePref.value = hotSliderRight.voffset;
   }

      //print("Running function hotSliderRightup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function hotSliderLeftdown()
{
//      print("Running function hotSliderLeftdown");
      hotSliderLeftclicked = true;
//      print("Leaving function hotSliderLeftdown " +clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function hotSliderLeftdrag()
{
    //print("Running function hotSliderLeftdrag "+clicked);
    //print("slider set offset "+hotSliderLeft.voffset);
    //print("system event offset "+system.event.voffset);
          if(hotSliderLeftclicked === true) {

             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};

             //print("clicked = true in hotSliderLeftdrag ");
             hotSliderLeft.voffset = system.event.voffset;
             //lefthottext.voffset = system.event.voffset;
             if (hotSliderLeft.voffset >= (warmSliderLeft.voffset-10)* thermometerScale)
             {
                 hotSliderLeft.voffset = (warmSliderLeft.voffset-10)* thermometerScale;
             }

             if (hotSliderLeft.voffset >= 220* thermometerScale)
             {
                 hotSliderLeft.voffset = 220* thermometerScale;
             }

             if (hotSliderLeft.voffset <= 77* thermometerScale)
             {
                 hotSliderLeft.voffset = 77* thermometerScale;
             }
             lefthottext.voffset = (hotSliderLeft.voffset-5)* thermometerScale;

             //acceleration = timeaccelerationfactor * (hotSliderLeft.hoffset - (396* thermometerScale));
             //print("timeaccelerationfactor",timeaccelerationfactor);
             //print("acceleration",acceleration);
             //print("sliderSet.hoffset",sliderSet.hoffset-396);
          }

//   print("leaving function hotSliderLeftdrag ");
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function hotSliderLeftup()
{
  if(hotSliderLeftclicked === true)
   {
      hotSliderLeftclicked = false;
      hotSliderLeft.onMouseMove= null;

      SetCurrentTemperatureTooltips();

      preferences.hotSliderLeftValuePref.value = hotSliderLeft.voffset;
   }
      //print("Running function hotSliderLeftup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function warmSliderLeftdown()
{
//      print("Running function warmSliderLeftdown");
      warmSliderLeftclicked = true;
//      print("Leaving function warmSliderLeftdown " +clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function warmSliderLeftdrag()
{
    //print("Running function warmSliderLeftdrag "+clicked);
    //print("slider set offset "+warmSliderLeft.voffset);
    //print("system event offset "+system.event.voffset);
          if(warmSliderLeftclicked === true) {

             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};

             //print("clicked = true in warmSliderLeftdrag ");
             warmSliderLeft.voffset = system.event.voffset;
             //leftwarmtext.voffset = system.event.voffset;

             if (warmSliderLeft.voffset <= (hotSliderLeft.voffset+10)* thermometerScale)
             {
                 warmSliderLeft.voffset = (hotSliderLeft.voffset+10)* thermometerScale;
             }


             if (warmSliderLeft.voffset >= 270* thermometerScale)
             {
                 warmSliderLeft.voffset = 270* thermometerScale;
             }

             if (warmSliderLeft.voffset <= 77* thermometerScale)
             {
                 warmSliderLeft.voffset = 77* thermometerScale;
             }
             leftwarmtext.voffset = (warmSliderLeft.voffset-5)* thermometerScale;

             //acceleration = timeaccelerationfactor * (warmSliderLeft.hoffset - (396* thermometerScale));
             //print("timeaccelerationfactor",timeaccelerationfactor);
             //print("acceleration",acceleration);
             //print("sliderSet.hoffset",sliderSet.hoffset-396);
          }

//   print("leaving function warmSliderLeftdrag ");
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function warmSliderLeftup()
{
  if(warmSliderLeftclicked === true)
   {
      warmSliderLeftclicked = false;
      warmSliderLeft.onMouseMove= null;

      SetCurrentTemperatureTooltips();
      preferences.warmSliderLeftValuePref.value = warmSliderLeft.voffset;

   }
      //print("Running function warmSliderLeftup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function warmSliderRightdown()
{
//      print("Running function warmSliderRightdown");
      warmSliderRightclicked = true;
//      print("Leaving function warmSliderRightdown " +clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function warmSliderRightdrag()
{
    //print("Running function warmSliderRightdrag "+clicked);
    //print("slider set offset "+warmSliderRight.voffset);
    //print("system event offset "+system.event.voffset);
          if(warmSliderRightclicked === true) {

             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};

             //print("clicked = true in warmSliderRightdrag ");
             warmSliderRight.voffset = system.event.voffset;
             //rightwarmtext.voffset = system.event.voffset;

             if (warmSliderRight.voffset <= (hotSliderRight.voffset+10)* thermometerScale)
             {
                 warmSliderRight.voffset = (hotSliderRight.voffset +10)* thermometerScale;
             }

             if (warmSliderRight.voffset >= 220* thermometerScale)
             {
                 warmSliderRight.voffset = 220* thermometerScale;
             }

             if (warmSliderRight.voffset <= 77* thermometerScale)
             {
                 warmSliderRight.voffset = 77* thermometerScale;
             }
             rightwarmtext.voffset = (warmSliderRight.voffset-5)* thermometerScale;

             //acceleration = timeaccelerationfactor * (warmSliderRight.hoffset - (396* thermometerScale));
             //print("timeaccelerationfactor",timeaccelerationfactor);
             //print("acceleration",acceleration);
             //print("sliderSet.hoffset",sliderSet.hoffset-396);
          }

//   print("leaving function warmSliderRightdrag ");
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function warmSliderRightup()
{
  if(warmSliderRightclicked === true)
   {
      warmSliderRightclicked = false;
      warmSliderRight.onMouseMove = null;

      SetCurrentTemperatureTooltips();
      preferences.warmSliderRightValuePref.value = warmSliderRight.voffset;

   }
      //print("Running function warmSliderRightup clicked is now "+ clicked);
}
//=====================
//End function
//=====================
//===========================================
// Function to
//===========================================
function ovalSliderdown()
{
//      print("Running function ovalSliderdown");
      ovalSliderclicked = true;
//      print("Leaving function ovalSliderdown " +clicked);
}
//=====================
//End function
//=====================

//===========================================
// Function to
//===========================================
function ovalSliderdrag()
{
    //print("Running function ovalSliderdrag "+clicked);
    //print("slider set offset "+ovalSlider.hoffset);
    //print("system event offset "+system.event.hoffset);
          if(ovalSliderclicked === true) {

             //play(zzzz, false);
             if (preferences.soundsPref.value != "mute" ) {play(sparks, false);};
             //print("clicked = true in ovalSliderdrag ");
             ovalSlider.hoffset = system.event.hoffset-(2* thermometerScale);
             if (ovalSlider.hoffset >= 366* thermometerScale)
             {
                 ovalSlider.hoffset = 366* thermometerScale;
             }

             if (ovalSlider.hoffset <= 316* thermometerScale)
             {
                 ovalSlider.hoffset = 316* thermometerScale;
             }

             var ttt = (((ovalSlider.hoffset - 300) /10)* thermometerScale );

             if (ttt == 1){if (preferences.soundsPref.value != "mute" ) {sleep(300);play(newclunk,false);};};
             if (ttt == 2){if (preferences.soundsPref.value != "mute" ) {sleep(300);play(newclunk,false);};};
             if (ttt == 3){if (preferences.soundsPref.value != "mute" ) {sleep(300);play(newclunk,false);};};
             if (ttt == 4){if (preferences.soundsPref.value != "mute" ) {sleep(300);play(newclunk,false);};};
             if (ttt == 5){if (preferences.soundsPref.value != "mute" ) {sleep(300);play(newclunk,false);};};
             if (ttt == 6){if (preferences.soundsPref.value != "mute" ) {sleep(300);play(newclunk,false);};};

             samplingTimer.interval = parseInt((((ovalSlider.hoffset - 300) /10)* thermometerScale ));   
             if (samplingTimer.interval == 1){ovalSlider.src="Resources/oval1slider.png";};
             if (samplingTimer.interval == 2){ovalSlider.src="Resources/oval2slider.png";};
             if (samplingTimer.interval == 3){ovalSlider.src="Resources/oval3slider.png";};
             if (samplingTimer.interval == 4){ovalSlider.src="Resources/oval4slider.png";};
             if (samplingTimer.interval == 5){ovalSlider.src="Resources/oval5slider.png";};
             if (samplingTimer.interval == 6){ovalSlider.src="Resources/oval6slider.png";};

          }

   //print("samplingTimer.interval ",samplingTimer.interval);
   //print("ttt ",ttt);
//   print("leaving function ovalSliderdrag ");
}
//=====================
//End function
//=====================

//===========================================
// Function to
//===========================================
function ovalSliderup()
{
  if(ovalSliderclicked === true)
   {
      ovalSliderclicked = false;
      ovalSlider.onMouseMove= null;
      print("samplingTimer.interval ",samplingTimer.interval);
      ovalSlider.tooltip= "frequency slider set to "+samplingTimer.interval+ " seconds";

   }
      //print("Running function ovalSliderup clicked is now "+ clicked);
}
//=====================
//End function
//=====================

//===============================
// function to resize all layers
//===============================
function resizethermometer()
{
        // check if the widget has a lock for the screen type.
        if (aspectRatio == "landscape") {
          if (preferences.maxWidthLandscapePref.value == 0)
          {
              preferences.maxWidthLandscapePref.value = 100;
          }
          thermometerScale = Number(preferences.maxWidthLandscapePref.value) / 100;
        }
        // check if the widget has a lock for the screen type.
        if (aspectRatio == "portrait") {
          if (preferences.maxWidthPortraitPref.value == 0)
          {
              preferences.maxWidthPortraitPref.value = 100;
          }
          thermometerScale = Number(preferences.maxWidthPortraitPref.value) / 100;
        }

	print("aspectRatio ",aspectRatio);
	print("thermometerScale ",thermometerScale);

	mainWindow.width  = mainWindowwidthDefault * thermometerScale;
	mainWindow.height = mainWindowheightDefault * thermometerScale;

        UpperRightBottomGaugePointer.hoffset =  UpperRightBottomGaugePointerhoffsetDefault * thermometerScale;
        UpperRightBottomGaugePointer.voffset =  UpperRightBottomGaugePointervoffsetDefault * thermometerScale;
        UpperRightBottomGaugePointer.width =  UpperRightBottomGaugePointerwidthDefault * thermometerScale;
        UpperRightBottomGaugePointer.height =  UpperRightBottomGaugePointerheightDefault * thermometerScale;
        UpperRightBottomGaugePointer.hRegistrationPoint =  UpperRightBottomGaugePointerhRegistrationPointDefault * thermometerScale;
        UpperRightBottomGaugePointer.vRegistrationPoint =  UpperRightBottomGaugePointervRegistrationPointDefault * thermometerScale;

        UpperRightTopGaugePointer.hoffset =  UpperRightTopGaugePointerhoffsetDefault * thermometerScale;
        UpperRightTopGaugePointer.voffset =  UpperRightTopGaugePointervoffsetDefault * thermometerScale;
        UpperRightTopGaugePointer.width =  UpperRightTopGaugePointerwidthDefault * thermometerScale;
        UpperRightTopGaugePointer.height =  UpperRightTopGaugePointerheightDefault * thermometerScale;
        UpperRightTopGaugePointer.hRegistrationPoint =  UpperRightTopGaugePointerhRegistrationPointDefault * thermometerScale;
        UpperRightTopGaugePointer.vRegistrationPoint =  UpperRightTopGaugePointervRegistrationPointDefault * thermometerScale;

        steam.hoffset =  steamhoffsetDefault * thermometerScale;
        steam.voffset =  steamvoffsetDefault * thermometerScale;
        steam.width =  steamwidthDefault * thermometerScale;
        steam.height =  steamheightDefault * thermometerScale;

        valve.hoffset =  valvehoffsetDefault * thermometerScale;
        valve.voffset =  valvevoffsetDefault * thermometerScale;
        valve.width =  valvewidthDefault * thermometerScale;
        valve.height =  valveheightDefault * thermometerScale;

        valve2.hoffset =  valve2hoffsetDefault * thermometerScale;
        valve2.voffset =  valve2voffsetDefault * thermometerScale;
        valve2.width =  valve2widthDefault * thermometerScale;
        valve2.height =  valve2heightDefault * thermometerScale;

//        resizingValve.hoffset =  resizingValvehoffsetDefault * thermometerScale;
//        resizingValve.voffset =  resizingValvevoffsetDefault * thermometerScale;
//        resizingValve.width =  resizingValvewidthDefault * thermometerScale;
//        resizingValve.height =  resizingValveheightDefault * thermometerScale;

        memTap.hoffset =  memTaphoffsetDefault * thermometerScale;
        memTap.voffset =  memTapvoffsetDefault * thermometerScale;
        memTap.width =  memTapwidthDefault * thermometerScale;
        memTap.height =  memTapheightDefault * thermometerScale;

        UpperRightBottomGaugeSensorChar1.hoffset =  UpperRightBottomGaugeSensorChar1hoffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar1.voffset =  UpperRightBottomGaugeSensorChar1voffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar1.width =  UpperRightBottomGaugeSensorChar1widthDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar1.height =  UpperRightBottomGaugeSensorChar1heightDefault * thermometerScale;

        UpperRightBottomGaugeSensorChar2.hoffset =  UpperRightBottomGaugeSensorChar2hoffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar2.voffset =  UpperRightBottomGaugeSensorChar2voffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar2.width =  UpperRightBottomGaugeSensorChar2widthDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar2.height =  UpperRightBottomGaugeSensorChar2heightDefault * thermometerScale;

        UpperRightBottomGaugeSensorChar3.hoffset =  UpperRightBottomGaugeSensorChar3hoffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar3.voffset =  UpperRightBottomGaugeSensorChar3voffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar3.width =  UpperRightBottomGaugeSensorChar3widthDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar3.height =  UpperRightBottomGaugeSensorChar3heightDefault * thermometerScale;

        UpperRightBottomGaugeSensorChar4.hoffset =  UpperRightBottomGaugeSensorChar4hoffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar4.voffset =  UpperRightBottomGaugeSensorChar4voffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar4.width =  UpperRightBottomGaugeSensorChar4widthDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar4.height =  UpperRightBottomGaugeSensorChar4heightDefault * thermometerScale;

        UpperRightBottomGaugeSensorChar5.hoffset =  UpperRightBottomGaugeSensorChar5hoffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar5.voffset =  UpperRightBottomGaugeSensorChar5voffsetDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar5.width =  UpperRightBottomGaugeSensorChar5widthDefault * thermometerScale;
        UpperRightBottomGaugeSensorChar5.height =  UpperRightBottomGaugeSensorChar5heightDefault * thermometerScale;

        UpperRightTopGaugeGaugeSensorChar1.hoffset =  UpperRightTopGaugeGaugeSensorChar1hoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar1.voffset =  UpperRightTopGaugeGaugeSensorChar1voffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar1.width =  UpperRightTopGaugeGaugeSensorChar1widthDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar1.height =  UpperRightTopGaugeGaugeSensorChar1heightDefault * thermometerScale;

        UpperRightTopGaugeGaugeSensorChar2.hoffset =  UpperRightTopGaugeGaugeSensorChar2hoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar2.voffset =  UpperRightTopGaugeGaugeSensorChar2voffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar2.width =  UpperRightTopGaugeGaugeSensorChar2widthDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar2.height =  UpperRightTopGaugeGaugeSensorChar2heightDefault * thermometerScale;

        UpperRightTopGaugeGaugeSensorChar3.hoffset =  UpperRightTopGaugeGaugeSensorChar3hoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar3.voffset =  UpperRightTopGaugeGaugeSensorChar3voffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar3.width =  UpperRightTopGaugeGaugeSensorChar3widthDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar3.height =  UpperRightTopGaugeGaugeSensorChar3heightDefault * thermometerScale;

        UpperRightTopGaugeGaugeSensorChar4.hoffset =  UpperRightTopGaugeGaugeSensorChar4hoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar4.voffset =  UpperRightTopGaugeGaugeSensorChar4voffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar4.width =  UpperRightTopGaugeGaugeSensorChar4widthDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar4.height =  UpperRightTopGaugeGaugeSensorChar4heightDefault * thermometerScale;

        UpperRightTopGaugeGaugeSensorChar5.hoffset =  UpperRightTopGaugeGaugeSensorChar5hoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar5.voffset =  UpperRightTopGaugeGaugeSensorChar5voffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar5.width =  UpperRightTopGaugeGaugeSensorChar5widthDefault * thermometerScale;
        UpperRightTopGaugeGaugeSensorChar5.height =  UpperRightTopGaugeGaugeSensorChar5heightDefault * thermometerScale;

        LowerRightGaugeSensorChar1.hoffset =  LowerRightGaugeSensorChar1hoffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar1.voffset =  LowerRightGaugeSensorChar1voffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar1.width =  LowerRightGaugeSensorChar1widthDefault * thermometerScale;
        LowerRightGaugeSensorChar1.height =  LowerRightGaugeSensorChar1heightDefault * thermometerScale;

        LowerRightGaugeSensorChar2.hoffset =  LowerRightGaugeSensorChar2hoffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar2.voffset =  LowerRightGaugeSensorChar2voffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar2.width =  LowerRightGaugeSensorChar2widthDefault * thermometerScale;
        LowerRightGaugeSensorChar2.height =  LowerRightGaugeSensorChar2heightDefault * thermometerScale;

        LowerRightGaugeSensorChar3.hoffset =  LowerRightGaugeSensorChar3hoffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar3.voffset =  LowerRightGaugeSensorChar3voffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar3.width =  LowerRightGaugeSensorChar3widthDefault * thermometerScale;
        LowerRightGaugeSensorChar3.height =  LowerRightGaugeSensorChar3heightDefault * thermometerScale;

        LowerRightGaugeSensorChar4.hoffset =  LowerRightGaugeSensorChar4hoffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar4.voffset =  LowerRightGaugeSensorChar4voffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar4.width =  LowerRightGaugeSensorChar4widthDefault * thermometerScale;
        LowerRightGaugeSensorChar4.height =  LowerRightGaugeSensorChar4heightDefault * thermometerScale;

        LowerRightGaugeSensorChar5.hoffset =  LowerRightGaugeSensorChar5hoffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar5.voffset =  LowerRightGaugeSensorChar5voffsetDefault * thermometerScale;
        LowerRightGaugeSensorChar5.width =  LowerRightGaugeSensorChar5widthDefault * thermometerScale;
        LowerRightGaugeSensorChar5.height =  LowerRightGaugeSensorChar5heightDefault * thermometerScale;

        LowerLeftGaugeSensorChar1.hoffset =  LowerLeftGaugeSensorChar1hoffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar1.voffset =  LowerLeftGaugeSensorChar1voffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar1.width =  LowerLeftGaugeSensorChar1widthDefault * thermometerScale;
        LowerLeftGaugeSensorChar1.height =  LowerLeftGaugeSensorChar1heightDefault * thermometerScale;

        LowerLeftGaugeSensorChar2.hoffset =  LowerLeftGaugeSensorChar2hoffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar2.voffset =  LowerLeftGaugeSensorChar2voffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar2.width =  LowerLeftGaugeSensorChar2widthDefault * thermometerScale;
        LowerLeftGaugeSensorChar2.height =  LowerLeftGaugeSensorChar2heightDefault * thermometerScale;

        LowerLeftGaugeSensorChar3.hoffset =  LowerLeftGaugeSensorChar3hoffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar3.voffset =  LowerLeftGaugeSensorChar3voffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar3.width =  LowerLeftGaugeSensorChar3widthDefault * thermometerScale;
        LowerLeftGaugeSensorChar3.height =  LowerLeftGaugeSensorChar3heightDefault * thermometerScale;

        LowerLeftGaugeSensorChar4.hoffset =  LowerLeftGaugeSensorChar4hoffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar4.voffset =  LowerLeftGaugeSensorChar4voffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar4.width =  LowerLeftGaugeSensorChar4widthDefault * thermometerScale;
        LowerLeftGaugeSensorChar4.height =  LowerLeftGaugeSensorChar4heightDefault * thermometerScale;

        LowerLeftGaugeSensorChar5.hoffset =  LowerLeftGaugeSensorChar5hoffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar5.voffset =  LowerLeftGaugeSensorChar5voffsetDefault * thermometerScale;
        LowerLeftGaugeSensorChar5.width =  LowerLeftGaugeSensorChar5widthDefault * thermometerScale;
        LowerLeftGaugeSensorChar5.height =  LowerLeftGaugeSensorChar5heightDefault * thermometerScale;


        thermometersHelpPage.hoffset =  thermometersHelpPagehoffsetDefault * thermometerScale;
        thermometersHelpPage.voffset =  thermometersHelpPagevoffsetDefault * thermometerScale;
        thermometersHelpPage.width =  thermometersHelpPagewidthDefault * thermometerScale;
        thermometersHelpPage.height =  thermometersHelpPageheightDefault * thermometerScale;

        LowerRightPointer.hoffset =  LowerRightPointerhoffsetDefault * thermometerScale;
        LowerRightPointer.voffset =  LowerRightPointervoffsetDefault * thermometerScale;
        LowerRightPointer.width =  LowerRightPointerwidthDefault * thermometerScale;
        LowerRightPointer.height =  LowerRightPointerheightDefault * thermometerScale;
        LowerRightPointer.hRegistrationPoint =  LowerRightPointerhRegistrationPointDefault * thermometerScale;
        LowerRightPointer.vRegistrationPoint =  LowerRightPointervRegistrationPointDefault * thermometerScale;

        LowerLeftPointer.hoffset =  LowerLeftPointerhoffsetDefault * thermometerScale;
        LowerLeftPointer.voffset =  LowerLeftPointervoffsetDefault * thermometerScale;
        LowerLeftPointer.width =  LowerLeftPointerwidthDefault * thermometerScale;
        LowerLeftPointer.height =  LowerLeftPointerheightDefault * thermometerScale;
        LowerLeftPointer.hRegistrationPoint =  LowerLeftPointerhRegistrationPointDefault * thermometerScale;
        LowerLeftPointer.vRegistrationPoint =  LowerLeftPointervRegistrationPointDefault * thermometerScale;

        leftscale.hoffset =  leftscalehoffsetDefault * thermometerScale;
        leftscale.voffset =  leftscalevoffsetDefault * thermometerScale;
        leftscale.width =  leftscalewidthDefault * thermometerScale;
        leftscale.height =  leftscaleheightDefault * thermometerScale;

        rightscale.hoffset =  rightscalehoffsetDefault * thermometerScale;
        rightscale.voffset =  rightscalevoffsetDefault * thermometerScale;
        rightscale.width =  rightscalewidthDefault * thermometerScale;
        rightscale.height =  rightscaleheightDefault * thermometerScale;

        stanchion.hoffset =  stanchionhoffsetDefault * thermometerScale;
        stanchion.voffset =  stanchionvoffsetDefault * thermometerScale;
        stanchion.width =  stanchionwidthDefault * thermometerScale;
        stanchion.height =  stanchionheightDefault * thermometerScale;

        UpperRightBottomGauge.hoffset =  UpperRightBottomGaugehoffsetDefault * thermometerScale;
        UpperRightBottomGauge.voffset =  UpperRightBottomGaugevoffsetDefault * thermometerScale;
        UpperRightBottomGauge.width =  UpperRightBottomGaugewidthDefault * thermometerScale;
        UpperRightBottomGauge.height =  UpperRightBottomGaugeheightDefault * thermometerScale;

        UpperRightTopGaugeGaugeLabel.hoffset =  UpperRightTopGaugeGaugeLabelhoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeLabel.voffset =  UpperRightTopGaugeGaugeLabelvoffsetDefault * thermometerScale;
        UpperRightTopGaugeGaugeLabel.width =  UpperRightTopGaugeGaugeLabelwidthDefault * thermometerScale;
        UpperRightTopGaugeGaugeLabel.height =  UpperRightTopGaugeGaugeLabelheightDefault * thermometerScale;

        UpperRightTopGaugeGauge.hoffset =  UpperRightTopGaugeGaugehoffsetDefault * thermometerScale;
        UpperRightTopGaugeGauge.voffset =  UpperRightTopGaugeGaugevoffsetDefault * thermometerScale;
        UpperRightTopGaugeGauge.width =  UpperRightTopGaugeGaugewidthDefault * thermometerScale;
        UpperRightTopGaugeGauge.height =  UpperRightTopGaugeGaugeheightDefault * thermometerScale;

        LowerRightGauge.hoffset =  LowerRightGaugehoffsetDefault * thermometerScale;
        LowerRightGauge.voffset =  LowerRightGaugevoffsetDefault * thermometerScale;
        LowerRightGauge.width =  LowerRightGaugewidthDefault * thermometerScale;
        LowerRightGauge.height =  LowerRightGaugeheightDefault * thermometerScale;

        LowerLeftGauge.hoffset =  LowerLeftGaugehoffsetDefault * thermometerScale;
        LowerLeftGauge.voffset =  LowerLeftGaugevoffsetDefault * thermometerScale;
        LowerLeftGauge.width =  LowerLeftGaugewidthDefault * thermometerScale;
        LowerLeftGauge.height =  LowerLeftGaugeheightDefault * thermometerScale;

        rToggle.hoffset =  rTogglehoffsetDefault * thermometerScale;
        rToggle.voffset =  rTogglevoffsetDefault * thermometerScale;
        rToggle.width =  rTogglewidthDefault * thermometerScale;
        rToggle.height =  rToggleheightDefault * thermometerScale;

        mToggle.hoffset =  mTogglehoffsetDefault * thermometerScale;
        mToggle.voffset =  mTogglevoffsetDefault * thermometerScale;
        mToggle.width =  mTogglewidthDefault * thermometerScale;
        mToggle.height =  mToggleheightDefault * thermometerScale;


        scaleswitchleft.hoffset =  scaleswitchlefthoffsetDefault * thermometerScale;
        scaleswitchleft.voffset =  scaleswitchleftvoffsetDefault * thermometerScale;
        scaleswitchleft.width =  scaleswitchleftwidthDefault * thermometerScale;
        scaleswitchleft.height =  scaleswitchleftheightDefault * thermometerScale;

        scaleswitchright.hoffset =  scaleswitchrighthoffsetDefault * thermometerScale;
        scaleswitchright.voffset =  scaleswitchrightvoffsetDefault * thermometerScale;
        scaleswitchright.width =  scaleswitchrightwidthDefault * thermometerScale;
        scaleswitchright.height =  scaleswitchrightheightDefault * thermometerScale;

        thermometerRightThermometerSensorChar1.hoffset =  thermometerRightThermometerSensorChar1hoffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar1.voffset =  thermometerRightThermometerSensorChar1voffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar1.width =  thermometerRightThermometerSensorChar1widthDefault * thermometerScale;
        thermometerRightThermometerSensorChar1.height =  thermometerRightThermometerSensorChar1heightDefault * thermometerScale;

        thermometerRightThermometerSensorChar2.hoffset =  thermometerRightThermometerSensorChar2hoffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar2.voffset =  thermometerRightThermometerSensorChar2voffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar2.width =  thermometerRightThermometerSensorChar2widthDefault * thermometerScale;
        thermometerRightThermometerSensorChar2.height =  thermometerRightThermometerSensorChar2heightDefault * thermometerScale;

        thermometerRightThermometerSensorChar3.hoffset =  thermometerRightThermometerSensorChar3hoffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar3.voffset =  thermometerRightThermometerSensorChar3voffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar3.width =  thermometerRightThermometerSensorChar3widthDefault * thermometerScale;
        thermometerRightThermometerSensorChar3.height =  thermometerRightThermometerSensorChar3heightDefault * thermometerScale;

        thermometerRightThermometerSensorChar4.hoffset =  thermometerRightThermometerSensorChar4hoffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar4.voffset =  thermometerRightThermometerSensorChar4voffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar4.width =  thermometerRightThermometerSensorChar4widthDefault * thermometerScale;
        thermometerRightThermometerSensorChar4.height =  thermometerRightThermometerSensorChar4heightDefault * thermometerScale;

        thermometerRightThermometerSensorChar5.hoffset =  thermometerRightThermometerSensorChar5hoffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar5.voffset =  thermometerRightThermometerSensorChar5voffsetDefault * thermometerScale;
        thermometerRightThermometerSensorChar5.width =  thermometerRightThermometerSensorChar5widthDefault * thermometerScale;
        thermometerRightThermometerSensorChar5.height =  thermometerRightThermometerSensorChar5heightDefault * thermometerScale;

        thermometerLeftThermometerSensorChar1.hoffset =  thermometerLeftThermometerSensorChar1hoffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar1.voffset =  thermometerLeftThermometerSensorChar1voffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar1.width =  thermometerLeftThermometerSensorChar1widthDefault * thermometerScale;
        thermometerLeftThermometerSensorChar1.height =  thermometerLeftThermometerSensorChar1heightDefault * thermometerScale;

        thermometerLeftThermometerSensorChar2.hoffset =  thermometerLeftThermometerSensorChar2hoffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar2.voffset =  thermometerLeftThermometerSensorChar2voffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar2.width =  thermometerLeftThermometerSensorChar2widthDefault * thermometerScale;
        thermometerLeftThermometerSensorChar2.height =  thermometerLeftThermometerSensorChar2heightDefault * thermometerScale;

        thermometerLeftThermometerSensorChar3.hoffset =  thermometerLeftThermometerSensorChar3hoffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar3.voffset =  thermometerLeftThermometerSensorChar3voffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar3.width =  thermometerLeftThermometerSensorChar3widthDefault * thermometerScale;
        thermometerLeftThermometerSensorChar3.height =  thermometerLeftThermometerSensorChar3heightDefault * thermometerScale;

        thermometerLeftThermometerSensorChar4.hoffset =  thermometerLeftThermometerSensorChar4hoffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar4.voffset =  thermometerLeftThermometerSensorChar4voffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar4.width =  thermometerLeftThermometerSensorChar4widthDefault * thermometerScale;
        thermometerLeftThermometerSensorChar4.height =  thermometerLeftThermometerSensorChar4heightDefault * thermometerScale;

        thermometerLeftThermometerSensorChar5.hoffset =  thermometerLeftThermometerSensorChar5hoffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar5.voffset =  thermometerLeftThermometerSensorChar5voffsetDefault * thermometerScale;
        thermometerLeftThermometerSensorChar5.width =  thermometerLeftThermometerSensorChar5widthDefault * thermometerScale;
        thermometerLeftThermometerSensorChar5.height =  thermometerLeftThermometerSensorChar5heightDefault * thermometerScale;

        gettingSpeedfan.hoffset =  gettingSpeedfanhoffsetDefault * thermometerScale;
        gettingSpeedfan.voffset =  gettingSpeedfanvoffsetDefault * thermometerScale;
        gettingSpeedfan.width =  gettingSpeedfanwidthDefault * thermometerScale;
        gettingSpeedfan.height =  gettingSpeedfanheightDefault * thermometerScale;

        sToggle.hoffset =  sTogglehoffsetDefault * thermometerScale;
        sToggle.voffset =  sTogglevoffsetDefault * thermometerScale;
        sToggle.width =  sTogglewidthDefault * thermometerScale;
        sToggle.height =  sToggleheightDefault * thermometerScale;


        movinglines.hoffset =  movinglineshoffsetDefault * thermometerScale;
        movinglines.voffset =  movinglinesvoffsetDefault * thermometerScale;
        movinglines.width =  movinglineswidthDefault * thermometerScale;
        movinglines.height =  movinglinesheightDefault * thermometerScale;

        speedfanNotFound.hoffset =  speedfanNotFoundhoffsetDefault * thermometerScale;
        speedfanNotFound.voffset =  speedfanNotFoundvoffsetDefault * thermometerScale;
        speedfanNotFound.width =  speedfanNotFoundwidthDefault * thermometerScale;
        speedfanNotFound.height =  speedfanNotFoundheightDefault * thermometerScale;

        waitmessage.hoffset =  waitmessagehoffsetDefault * thermometerScale;
        waitmessage.voffset =  waitmessagevoffsetDefault * thermometerScale;
        waitmessage.width =  waitmessagewidthDefault * thermometerScale;
        waitmessage.height =  waitmessageheightDefault * thermometerScale;

        paper.hoffset =  paperhoffsetDefault * thermometerScale;
        paper.voffset =  papervoffsetDefault * thermometerScale;
        paper.width =  paperwidthDefault * thermometerScale;
        paper.height =  paperheightDefault * thermometerScale;

        paperPull.hoffset =  paperPullhoffsetDefault * thermometerScale;
        paperPull.voffset =  paperPullvoffsetDefault * thermometerScale;
        paperPull.width =  paperPullwidthDefault * thermometerScale;
        paperPull.height =  paperPullheightDefault * thermometerScale;

        upperrightbracket.hoffset =  upperrightbrackethoffsetDefault * thermometerScale;
        upperrightbracket.voffset =  upperrightbracketvoffsetDefault * thermometerScale;
        upperrightbracket.width =  upperrightbracketwidthDefault * thermometerScale;
        upperrightbracket.height =  upperrightbracketheightDefault * thermometerScale;

        lowerrightbracket.hoffset =  lowerrightbrackethoffsetDefault * thermometerScale;
        lowerrightbracket.voffset =  lowerrightbracketvoffsetDefault * thermometerScale;
        lowerrightbracket.width =  lowerrightbracketwidthDefault * thermometerScale;
        lowerrightbracket.height =  lowerrightbracketheightDefault * thermometerScale;

        topbar.hoffset =  topbarhoffsetDefault * thermometerScale;
        topbar.voffset =  topbarvoffsetDefault * thermometerScale;
        topbar.width =  topbarwidthDefault * thermometerScale;
        topbar.height =  topbarheightDefault * thermometerScale;

        bottombar.hoffset =  bottombarhoffsetDefault * thermometerScale;
        bottombar.voffset =  bottombarvoffsetDefault * thermometerScale;
        bottombar.width =  bottombarwidthDefault * thermometerScale;
        bottombar.height =  bottombarheightDefault * thermometerScale;

        trunnion.hoffset =  trunnionhoffsetDefault * thermometerScale;
        trunnion.voffset =  trunnionvoffsetDefault * thermometerScale;
        trunnion.width =  trunnionwidthDefault * thermometerScale;
        trunnion.height =  trunnionheightDefault * thermometerScale;

        hole.hoffset =  holehoffsetDefault * thermometerScale;
        hole.voffset =  holevoffsetDefault * thermometerScale;
        hole.width =  holewidthDefault * thermometerScale;
        hole.height =  holeheightDefault * thermometerScale;

        bunchedLines.hoffset =  bunchedLineshoffsetDefault * thermometerScale;
        bunchedLines.voffset =  bunchedLinesvoffsetDefault * thermometerScale;
        bunchedLines.width =  bunchedLineswidthDefault * thermometerScale;
        bunchedLines.height =  bunchedLinesheightDefault * thermometerScale;

        verticalLines.hoffset =  verticalLineshoffsetDefault * thermometerScale;
        verticalLines.voffset =  verticalLinesvoffsetDefault * thermometerScale;
        verticalLines.width =  verticalLineswidthDefault * thermometerScale;
        verticalLines.height =  verticalLinesheightDefault * thermometerScale;

        longWire.hoffset =  longWirehoffsetDefault * thermometerScale;
        longWire.voffset =  longWirevoffsetDefault * thermometerScale;
        longWire.width =  longWirewidthDefault * thermometerScale;
        longWire.height =  longWireheightDefault * thermometerScale;

        rightScribeHead.hoffset =  rightScribeHeadhoffsetDefault * thermometerScale;
        rightScribeHead.voffset =  rightScribeHeadvoffsetDefault * thermometerScale;
        rightScribeHead.width =  rightScribeHeadwidthDefault * thermometerScale;
        rightScribeHead.height =  rightScribeHeadheightDefault * thermometerScale;

        rightScribeHeadShadow.hoffset =  rightScribeHeadShadowhoffsetDefault * thermometerScale;
        rightScribeHeadShadow.voffset =  rightScribeHeadShadowvoffsetDefault * thermometerScale;
        rightScribeHeadShadow.width =  rightScribeHeadShadowwidthDefault * thermometerScale;
        rightScribeHeadShadow.height =  rightScribeHeadShadowheightDefault * thermometerScale;

        scribeHeadNoWireTwo.hoffset =  scribeHeadNoWireTwohoffsetDefault * thermometerScale;
        scribeHeadNoWireTwo.voffset =  scribeHeadNoWireTwovoffsetDefault * thermometerScale;
        scribeHeadNoWireTwo.width =  scribeHeadNoWireTwowidthDefault * thermometerScale;
        scribeHeadNoWireTwo.height =  scribeHeadNoWireTwoheightDefault * thermometerScale;

        leftScribeText.hoffset =  leftScribeTexthoffsetDefault * thermometerScale;
        leftScribeText.voffset =  leftScribeTextvoffsetDefault * thermometerScale;
        leftScribeText.width =  leftScribeTextwidthDefault * thermometerScale;
        leftScribeText.height =  leftScribeTextheightDefault * thermometerScale;

        leftScribeTextShadow.hoffset =  leftScribeTextShadowhoffsetDefault * thermometerScale;
        leftScribeTextShadow.voffset =  leftScribeTextShadowvoffsetDefault * thermometerScale;
        leftScribeTextShadow.width =  leftScribeTextShadowwidthDefault * thermometerScale;
        leftScribeTextShadow.height =  leftScribeTextShadowheightDefault * thermometerScale;
        leftScribeTextShadow.size =  leftScribeTextShadowsizeDefault * thermometerScale;

        rightScribeText.hoffset =  rightScribeTexthoffsetDefault * thermometerScale;
        rightScribeText.voffset =  rightScribeTextvoffsetDefault * thermometerScale;
        rightScribeText.width =  rightScribeTextwidthDefault * thermometerScale;
        rightScribeText.height =  rightScribeTextheightDefault * thermometerScale;
        rightScribeText.size =  rightScribeTextsizeDefault * thermometerScale;

        rightScribeTextShadow.hoffset =  rightScribeTextShadowhoffsetDefault * thermometerScale;
        rightScribeTextShadow.voffset =  rightScribeTextShadowvoffsetDefault * thermometerScale;
        rightScribeTextShadow.width =  rightScribeTextShadowwidthDefault * thermometerScale;
        rightScribeTextShadow.height =  rightScribeTextShadowheightDefault * thermometerScale;

        scribeHeadNoWireOne.hoffset =  scribeHeadNoWireOnehoffsetDefault * thermometerScale;
        scribeHeadNoWireOne.voffset =  scribeHeadNoWireOnevoffsetDefault * thermometerScale;
        scribeHeadNoWireOne.width =  scribeHeadNoWireOnewidthDefault * thermometerScale;
        scribeHeadNoWireOne.height =  scribeHeadNoWireOneheightDefault * thermometerScale;

        shortWire.hoffset =  shortWirehoffsetDefault * thermometerScale;
        shortWire.voffset =  shortWirevoffsetDefault * thermometerScale;
        shortWire.width =  shortWirewidthDefault * thermometerScale;
        shortWire.height =  shortWireheightDefault * thermometerScale;

        leftScribeHead.hoffset =  leftScribeHeadhoffsetDefault * thermometerScale;
        leftScribeHead.voffset =  leftScribeHeadvoffsetDefault * thermometerScale;
        leftScribeHead.width =  leftScribeHeadwidthDefault * thermometerScale;
        leftScribeHead.height =  leftScribeHeadheightDefault * thermometerScale;

        leftScribeHeadShadow.hoffset =  leftScribeHeadShadowhoffsetDefault * thermometerScale;
        leftScribeHeadShadow.voffset =  leftScribeHeadShadowvoffsetDefault * thermometerScale;
        leftScribeHeadShadow.width =  leftScribeHeadShadowwidthDefault * thermometerScale;
        leftScribeHeadShadow.height =  leftScribeHeadShadowheightDefault * thermometerScale;

        stationerstext.hoffset =  stationerstexthoffsetDefault * thermometerScale;
        stationerstext.voffset =  stationerstextvoffsetDefault * thermometerScale;
        stationerstext.width =  stationerstextwidthDefault * thermometerScale;
        stationerstext.height =  stationerstextheightDefault * thermometerScale;

        woodSurround.hoffset =  woodSurroundhoffsetDefault * thermometerScale;
        woodSurround.voffset =  woodSurroundvoffsetDefault * thermometerScale;
        woodSurround.width =  woodSurroundwidthDefault * thermometerScale;
        woodSurround.height =  woodSurroundheightDefault * thermometerScale;

        hotSliderRight.hoffset =  hotSliderRighthoffsetDefault * thermometerScale;
        hotSliderRight.voffset =  hotSliderRightvoffsetDefault * thermometerScale;
        hotSliderRight.width =  hotSliderRightwidthDefault * thermometerScale;
        hotSliderRight.height =  hotSliderRightheightDefault * thermometerScale;

        hotSliderLeft.hoffset =  hotSliderLefthoffsetDefault * thermometerScale;
        hotSliderLeft.voffset =  hotSliderLeftvoffsetDefault * thermometerScale;
        hotSliderLeft.width =  hotSliderLeftwidthDefault * thermometerScale;
        hotSliderLeft.height =  hotSliderLeftheightDefault * thermometerScale;

        warmSliderRight.hoffset =  warmSliderRighthoffsetDefault * thermometerScale;
        warmSliderRight.voffset =  warmSliderRightvoffsetDefault * thermometerScale;
        warmSliderRight.width =  warmSliderRightwidthDefault * thermometerScale;
        warmSliderRight.height =  warmSliderRightheightDefault * thermometerScale;

        warmSliderLeft.hoffset =  warmSliderLefthoffsetDefault * thermometerScale;
        warmSliderLeft.voffset =  warmSliderLeftvoffsetDefault * thermometerScale;
        warmSliderLeft.width =  warmSliderLeftwidthDefault * thermometerScale;
        warmSliderLeft.height =  warmSliderLeftheightDefault * thermometerScale;

	righthottext.hoffset =  righthottexthoffsetDefault * thermometerScale;
        righthottext.voffset =  righthottextvoffsetDefault * thermometerScale;
        righthottext.width =  righthottextwidthDefault * thermometerScale;
        righthottext.height =  righthottextheightDefault * thermometerScale;

	rightwarmtext.hoffset =  rightwarmtexthoffsetDefault * thermometerScale;
        rightwarmtext.voffset =  rightwarmtextvoffsetDefault * thermometerScale;
        rightwarmtext.width =  rightwarmtextwidthDefault * thermometerScale;
        rightwarmtext.height =  rightwarmtextheightDefault * thermometerScale;

	leftwarmtext.hoffset =  leftwarmtexthoffsetDefault * thermometerScale;
        leftwarmtext.voffset =  leftwarmtextvoffsetDefault * thermometerScale;
        leftwarmtext.width =  leftwarmtextwidthDefault * thermometerScale;
        leftwarmtext.height =  leftwarmtextheightDefault * thermometerScale;

	lefthottext.hoffset =  lefthottexthoffsetDefault * thermometerScale;
        lefthottext.voffset =  lefthottextvoffsetDefault * thermometerScale;
        lefthottext.width =  lefthottextwidthDefault * thermometerScale;
        lefthottext.height =  lefthottextheightDefault * thermometerScale;

	cpuPlaque.hoffset =  cpuPlaquehoffsetDefault * thermometerScale;
        cpuPlaque.voffset =  cpuPlaquevoffsetDefault * thermometerScale;
        cpuPlaque.width =  cpuPlaquewidthDefault * thermometerScale;
        cpuPlaque.height =  cpuPlaqueheightDefault * thermometerScale;

	popupplaque.hoffset =  popupplaquehoffsetDefault * thermometerScale;
        popupplaque.voffset =  popupplaquevoffsetDefault * thermometerScale;
        popupplaque.width =  popupplaquewidthDefault * thermometerScale;
        popupplaque.height =  popupplaqueheightDefault * thermometerScale;

        thermometerLeft.hoffset =  thermometerLefthoffsetDefault * thermometerScale;
        thermometerLeft.voffset =  thermometerLeftvoffsetDefault * thermometerScale;
        thermometerLeft.width =  thermometerLeftwidthDefault * thermometerScale;
        thermometerLeft.height =  thermometerLeftheightDefault * thermometerScale;

        crank.hoffset =  crankhoffsetDefault * thermometerScale;
        crank.voffset =  crankvoffsetDefault * thermometerScale;
        crank.width =  crankwidthDefault * thermometerScale;
        crank.height =  crankheightDefault * thermometerScale;

        thermometerRight.hoffset =  thermometerRighthoffsetDefault * thermometerScale;
        thermometerRight.voffset =  thermometerRightvoffsetDefault * thermometerScale;
        thermometerRight.width =  thermometerRightwidthDefault * thermometerScale;
        thermometerRight.height =  thermometerRightheightDefault * thermometerScale;

        rightTemperatureMaxIndex.hoffset =  rightTemperatureMaxIndexhoffsetDefault * thermometerScale;
        rightTemperatureMaxIndex.voffset =  rightTemperatureMaxIndexvoffsetDefault * thermometerScale;
        rightTemperatureMaxIndex.width =  rightTemperatureMaxIndexwidthDefault * thermometerScale;
        rightTemperatureMaxIndex.height =  rightTemperatureMaxIndexheightDefault * thermometerScale;

        leftTemperatureMaxIndex.hoffset =  leftTemperatureMaxIndexhoffsetDefault * thermometerScale;
        leftTemperatureMaxIndex.voffset =  leftTemperatureMaxIndexvoffsetDefault * thermometerScale;
        leftTemperatureMaxIndex.width =  leftTemperatureMaxIndexwidthDefault * thermometerScale;
        leftTemperatureMaxIndex.height =  leftTemperatureMaxIndexheightDefault * thermometerScale;

        rightLamp.hoffset =  rightLamphoffsetDefault * thermometerScale;
        rightLamp.voffset =  rightLampvoffsetDefault * thermometerScale;
        rightLamp.width =  rightLampwidthDefault * thermometerScale;
        rightLamp.height =  rightLampheightDefault * thermometerScale;

        leftLamp.hoffset =  leftLamphoffsetDefault * thermometerScale;
        leftLamp.voffset =  leftLampvoffsetDefault * thermometerScale;
        leftLamp.width =  leftLampwidthDefault * thermometerScale;
        leftLamp.height =  leftLampheightDefault * thermometerScale;

        redLampFlashing.hoffset =  redLampFlashinghoffsetDefault * thermometerScale;
        redLampFlashing.voffset =  redLampFlashingvoffsetDefault * thermometerScale;
        redLampFlashing.width =  redLampFlashingwidthDefault * thermometerScale;
        redLampFlashing.height =  redLampFlashingheightDefault * thermometerScale;

        amberLamp.hoffset =  amberLamphoffsetDefault * thermometerScale;
        amberLamp.voffset =  amberLampvoffsetDefault * thermometerScale;
        amberLamp.width =  amberLampwidthDefault * thermometerScale;
        amberLamp.height =  amberLampheightDefault * thermometerScale;

        amberLampFlashing.hoffset =  amberLampFlashinghoffsetDefault * thermometerScale;
        amberLampFlashing.voffset =  amberLampFlashingvoffsetDefault * thermometerScale;
        amberLampFlashing.width =  amberLampFlashingwidthDefault * thermometerScale;
        amberLampFlashing.height =  amberLampFlashingheightDefault * thermometerScale;

        bellSet.hoffset =  bellSethoffsetDefault * thermometerScale;
        bellSet.voffset =  bellSetvoffsetDefault * thermometerScale;
        bellSet.width =  bellSetwidthDefault * thermometerScale;
        bellSet.height =  bellSetheightDefault * thermometerScale;

        hToggle.hoffset =  hTogglehoffsetDefault * thermometerScale;
        hToggle.voffset =  hTogglevoffsetDefault * thermometerScale;
        hToggle.width =  hTogglewidthDefault * thermometerScale;
        hToggle.height =  hToggleheightDefault * thermometerScale;

        screw1.hoffset =  screw1hoffsetDefault * thermometerScale;
        screw1.voffset =  screw1voffsetDefault * thermometerScale;
        screw1.width =  screw1widthDefault * thermometerScale;
        screw1.height =  screw1heightDefault * thermometerScale;

        screw2.hoffset =  screw2hoffsetDefault * thermometerScale;
        screw2.voffset =  screw2voffsetDefault * thermometerScale;
        screw2.width =  screw2widthDefault * thermometerScale;
        screw2.height =  screw2heightDefault * thermometerScale;

        clapper.hoffset =  clapperhoffsetDefault * thermometerScale;
        clapper.voffset =  clappervoffsetDefault * thermometerScale;
        clapper.width =  clapperwidthDefault * thermometerScale;
        clapper.height =  clapperheightDefault * thermometerScale;

        ClapperRotated.hoffset =  ClapperRotatedhoffsetDefault * thermometerScale;
        ClapperRotated.voffset =  ClapperRotatedvoffsetDefault * thermometerScale;
        ClapperRotated.width =  ClapperRotatedwidthDefault * thermometerScale;
        ClapperRotated.height =  ClapperRotatedheightDefault * thermometerScale;

        speedfanindicatorredglowing.hoffset =  speedfanindicatorredglowinghoffsetDefault * thermometerScale;
        speedfanindicatorredglowing.voffset =  speedfanindicatorredglowingvoffsetDefault * thermometerScale;
        speedfanindicatorredglowing.width =  speedfanindicatorredglowingwidthDefault * thermometerScale;
        speedfanindicatorredglowing.height =  speedfanindicatorredglowingheightDefault * thermometerScale;

        speedfanindicatorred.hoffset =  speedfanindicatorredhoffsetDefault * thermometerScale;
        speedfanindicatorred.voffset =  speedfanindicatorredvoffsetDefault * thermometerScale;
        speedfanindicatorred.width =  speedfanindicatorredwidthDefault * thermometerScale;
        speedfanindicatorred.height =  speedfanindicatorredheightDefault * thermometerScale;

        speedfanindicator.hoffset =  speedfanindicatorhoffsetDefault * thermometerScale;
        speedfanindicator.voffset =  speedfanindicatorvoffsetDefault * thermometerScale;
        speedfanindicator.width =  speedfanindicatorwidthDefault * thermometerScale;
        speedfanindicator.height =  speedfanindicatorheightDefault * thermometerScale;


        frequencySlider.hoffset =  frequencySliderhoffsetDefault * thermometerScale;
        frequencySlider.voffset =  frequencySlidervoffsetDefault * thermometerScale;
        frequencySlider.width =  frequencySliderwidthDefault * thermometerScale;
        frequencySlider.height =  frequencySliderheightDefault * thermometerScale;

        ovalSlider.hoffset =  ovalSliderhoffsetDefault * thermometerScale;
        ovalSlider.voffset =  ovalSlidervoffsetDefault * thermometerScale;
        ovalSlider.width =  ovalSliderwidthDefault * thermometerScale;
        ovalSlider.height =  ovalSliderheightDefault * thermometerScale;

        redMercuryLeft.hoffset =  redMercuryLefthoffsetDefault * thermometerScale;
        redMercuryLeft.voffset =  redMercuryLeftvoffsetDefault * thermometerScale;
        redMercuryLeft.width =  redMercuryLeftwidthDefault * thermometerScale;
        redMercuryLeft.height =  redMercuryLeftheightDefault * thermometerScale;

        redMercuryRight.hoffset =  redMercuryRighthoffsetDefault * thermometerScale;
        redMercuryRight.voffset =  redMercuryRightvoffsetDefault * thermometerScale;
        redMercuryRight.width =  redMercuryRightwidthDefault * thermometerScale;
        redMercuryRight.height =  redMercuryRightheightDefault * thermometerScale;

        thermometersHelpPageFront.hoffset =  thermometersHelpPageFronthoffsetDefault * thermometerScale;
        thermometersHelpPageFront.voffset =  thermometersHelpPageFrontvoffsetDefault * thermometerScale;
        thermometersHelpPageFront.width =  thermometersHelpPageFrontwidthDefault * thermometerScale;
        thermometersHelpPageFront.height =  thermometersHelpPageFrontheightDefault * thermometerScale;

        stretcher.hoffset =  stretcherhoffsetDefault * thermometerScale;
        stretcher.voffset =  stretchervoffsetDefault * thermometerScale;
        stretcher.width =  stretcherwidthDefault * thermometerScale;
        stretcher.height =  stretcherheightDefault * thermometerScale;

}

//=====================
//End function
//=====================
//===============================
// function to
//===============================
function changePrefs()
{
         print("preferences Changed");

         resizethermometer();
         sampleTemperaturesOnce();
}
//=====================
//End function
//=====================
//===========================================
// function to close down the big help canvas
//===========================================
function showplaque()
{
     popupplaque.visible = true;
}
//=====================
//End function
//=====================


//===========================================
// function to draw the scale
//===========================================
function redrawWholeScale()
{
/*
take indicator value value and not the temperature, all we need is the vertical position
add it to the 120 value store at position 120
draw the chart from the values stored in the current array  1-120
decrement the array pointer value by one and store the next value in position 119
when 0 is reached, reset the array pointer to 120
*/
            for (var tempStorageArrayPosition = arrayLength;tempStorageArrayPosition>=1;tempStorageArrayPosition--)
            {
                if (leftTempArray[tempStorageArrayPosition] != null) {
                  //print("plot value "+a+" "+chart1[a]);

                  // read the left hand temperatures from the array and plot them
              
                  var leftTemperature1 = leftTempArray[tempStorageArrayPosition];
                  var leftTemperature2 = leftTempArray[tempStorageArrayPosition-1];

                  var plotLeftHeight =  ( leftTemperature1 + 15) * thermometerScale;
                  var leftVerticalPlot1 =   (288* thermometerScale) - plotLeftHeight;
              
                  var plotLeftHeight =  ( leftTemperature2 + 15) * thermometerScale;
                  var leftVerticalPlot2 =   (288* thermometerScale) - plotLeftHeight;
              
                  doGraph(10, useCanvas,leftVerticalPlot1,leftVerticalPlot2,traceOffset,"rgb(66,44,255)",1);
                }
                if (rightTempArray[tempStorageArrayPosition] != null) {
                    // read the right hand temperatures from the array and plot them

                    var rightTemperature1 = rightTempArray[tempStorageArrayPosition];
                    var rightTemperature2 = rightTempArray[tempStorageArrayPosition-1];

                    plotRightHeight =  ( rightTemperature1 + 15) * thermometerScale;
                    rightVerticalPlot1 =   (288* thermometerScale) - plotRightHeight;
                
                    plotRightHeight =  ( rightTemperature2 + 15) * thermometerScale;
                    rightVerticalPlot2 =   (288* thermometerScale) - plotRightHeight;
                
                    doGraph(0, useCanvas, rightVerticalPlot1,rightVerticalPlot2,traceOffset,"yellow",1);

                }

            }
}
//=====================
//End function
//=====================

//===========================================
// function to move scribes to correspond to temperature
//===========================================
function drawTemperatures()
{
    traceOffset = traceOffset + 1;

    // read the left hand temperatures from the array and plot them

    var leftTemperature1 = leftTempArray[tempStorageArrayPosition];
    if (tempStorageArrayPosition == 1) {
      var leftTemperature2 = leftTempArray[arrayLength];
    } else {
      var leftTemperature2 = leftTempArray[tempStorageArrayPosition-1];
    }

    var plotLeftHeight =  ( leftTemperature1 + 15) * thermometerScale;
    var leftVerticalPlot1 =   (288* thermometerScale) - plotLeftHeight;

    var plotLeftHeight =  ( leftTemperature2 + 15) * thermometerScale;
    var leftVerticalPlot2 =   (288* thermometerScale) - plotLeftHeight;

    // read the right hand temperatures from the array and plot them

    var rightTemperature1 = rightTempArray[tempStorageArrayPosition];
    var rightTemperature2 = rightTempArray[tempStorageArrayPosition-1];
    if (tempStorageArrayPosition == 1) {
      var rightTemperature2 = rightTempArray[arrayLength];
    } else {
      var rightTemperature2 = rightTempArray[tempStorageArrayPosition-1];
    }

    var plotRightHeight =  ( rightTemperature1 + 15) * thermometerScale;
    var rightVerticalPlot1 =   (288* thermometerScale) - plotRightHeight;

    var plotRightHeight =  ( rightTemperature2 + 15) * thermometerScale;
    var rightVerticalPlot2 =   (288* thermometerScale) - plotRightHeight;

    /*
    print(" ");
    print("leftTemperature1 "+leftTemperature1);
    print("leftTemperature2 "+leftTemperature2);
    print("tempStorageArrayPosition "+tempStorageArrayPosition);
    print("traceOffset "+traceOffset);
    */

    // increment the storage array pointer

    tempStorageArrayPosition = tempStorageArrayPosition + 1;
    if (tempStorageArrayPosition > arrayLength) {
         tempStorageArrayPosition = 1;
    }

    // Now do the plotting, plot the left trace

    doGraph(2, useCanvas,leftVerticalPlot1,leftVerticalPlot2,traceOffset,"rgb("+leftScribeRgbCol+")",2);

    // Now do the plotting, plot the right trace

    doGraph(0, useCanvas, rightVerticalPlot1,rightVerticalPlot2,traceOffset,"rgb("+rightScribeRgbCol+")",2);

    // move the three canvases to the left

    canvasOne.hoffset = canvasOne.hoffset - 3;
    canvasTwo.hoffset = canvasTwo.hoffset - 3;
    canvasThree.hoffset = canvasThree.hoffset - 3;

    // depending upon the position of the canvas select the next

    if (useCanvas == 1 && ( canvasWidth + canvasOne.hoffset <= 180 * thermometerScale)) {
       canvasTwo.hoffset = 177 * thermometerScale;
       traceOffset = 0;
       useCanvas = 2;
       print("**************************************************");
       print("useCanvas "+useCanvas);
       print("**************************************************");

       // remove the canvas that is not currently visible on screen and recreate it
       // this is done to remove the previously laid down traces.

       frame.removeChild(canvasThree);
       canvasThree = newCanvas(canvasLeft, canvasTop, canvasWidth, canvasHeight, 0);
       frame.appendChild(canvasThree);
    }

    if (useCanvas == 2 && (canvasWidth + canvasTwo.hoffset <= 180 * thermometerScale)) {
       canvasThree.hoffset = 177 * thermometerScale;
       traceOffset = 0;
       useCanvas = 3;
       print("**************************************************");
       print("useCanvas "+useCanvas);
       print("**************************************************");

       // remove the canvas that is not currently visible on screen and recreate
       // this is done to remove the previously laid down traces.

       frame.removeChild(canvasOne);
       canvasOne = newCanvas(canvasLeft, canvasTop, canvasWidth, canvasHeight, 0);
       frame.appendChild(canvasOne);
    };

    if (useCanvas == 3 && (canvasWidth + canvasThree.hoffset <= 180 * thermometerScale)) {
       canvasOne.hoffset = 177 * thermometerScale;
       traceOffset = 0;
       useCanvas = 1;
       print("**************************************************");
       print("useCanvas "+useCanvas);
       print("**************************************************");

       // remove the canvas that is not currently visible on screen and recreate
       // this is done to remove the previously laid down traces.

       frame.removeChild(canvasTwo);
       canvasTwo = newCanvas(canvasLeft, canvasTop, canvasWidth, canvasHeight, 0);
       frame.appendChild(canvasTwo);
    };
}
//===========================================
// END function ! drawTemperatures
//===========================================


//===========================================
// function to move scribes to correspond to temperature
//===========================================
function storeTemperatures()
{
    leftTempArray[tempStorageArrayPosition] = leftTemperature;
    rightTempArray[tempStorageArrayPosition] = rightTemperature;

    //print(tempStorageArrayPosition + " "+ leftTempArray[tempStorageArrayPosition]);
}
//===========================================
// END function ! storeTemperatures
//===========================================

//===========================================
// function to draw the scale
//===========================================
function doGraph (horizontalAdjust, useCanvas, verticalplot1, verticalplot2, traceOffset, lineColour, thick) {
 // this function connects two vertical points
 //print ("Function doGraph");
 //print ("verticalplot1 " + verticalplot1);
 //print ("verticalplot2 " + verticalplot2);
   if (useCanvas == 1) { ctx = canvasOne.getContext( "2d" );};
   if (useCanvas == 2) { ctx = canvasTwo.getContext( "2d" );};
   if (useCanvas == 3) { ctx = canvasThree.getContext( "2d" );};

   ctx.beginPath();
   ctx.lineWidth = thick;
   ctx.strokeStyle = lineColour;
   ctx.moveTo( (horizontalAdjust + (traceOffset * 3)),verticalplot1);
   ctx.lineTo( (horizontalAdjust + ((traceOffset-1) * 3)),verticalplot2);
   ctx.stroke();

}

//================================================
// function to sample the temperature and do stuff
//================================================
function sampleTemperaturesOnce()
{
      ReadTemperatures();
      storeTemperatures();
      drawTemperatures();
      SetMercuryLevels();
      RedrawUpperRightBottomGauge();  //standard upper gauge
      if (preferences.UpperRightTopGaugeGaugeShownPref.value != "disabled") {RedrawUpperRightTopGaugeGauge();};   //extra upper gauge
      RedrawLowerRightGauge();  //standard lower gauge
      if (preferences.LowerLeftGaugeShownPref.value != "disabled") {RedrawLowerLeftGauge();};   //extra upper gauge
      SetCurrentTemperatureTooltips();
      MoveScribes();
      if (printer == "showing")
      {
           moveLines();
      }
      CheckTemperaturesAgainstAlarms();
      preferences.resizingValvePref.value = "disabled"
      buildVitality(currIcon, leftTemperature); // build the dock vitality
      //checks of gauge visibility dependant upon no of sensors found
      setUpperRightTopGaugeGaugeVisibility();  //determine secondary upper gauge visibility
      setLowerRightGaugeVisibility();  //determine primary lower gauge visibility
      setLowerLeftGaugeVisibility();  //determine secondary lower gauge visibility
   


}
//=====================
//End function
//=====================

//================================================
// function to move the vertical lines
//================================================
function moveLines()
{
      movinglines.visible = true;
      verticalLines.hoffset = verticalLines.hoffset - (1* thermometerScale);
      movinglines.hoffset = movinglines.hoffset - (1* thermometerScale);
      if (verticalLines.hoffset <= 17 * thermometerScale)
      {
           verticalLines.hoffset = 29 * thermometerScale;
       }
      if (movinglines.hoffset <= 17 * thermometerScale)
      {
           movinglines.hoffset = 117 * thermometerScale;
      }
      //movinglines.hoffset = (movinglineshoffset* thermometerScale);

/*
      take temperature value
add it to the 120 value store at position 120
draw the chart from the values stored in the current array  1-120
decrement the array pointer value by one and store the next value in position 119
when 0 is reached, reset the array pointer to 120
*/
     //take indicator value value and not the temperature, all we need is the vertical position


            stationerstext.hoffset = stationerstext.hoffset - 3;
}
//=====================
//End function
//=====================


//===========================================
// function to move scribes to correspond to temperature
//===========================================
function MoveScribes()
{
        var previousleftScribeHeadPos=leftScribeHead.voffset;
        leftScribeHead.voffset =  redMercuryLeft.voffset - (12* thermometerScale) ;
        leftScribeHeadShadow.voffset =  redMercuryLeft.voffset - (10* thermometerScale) ;
        shortWire.voffset =  leftScribeHead.voffset+(1* thermometerScale);
        scribeHeadNoWireTwo.voffset =  redMercuryLeft.voffset - (10* thermometerScale) ;
        leftScribeText.voffset = scribeHeadNoWireTwo.voffset+(11* thermometerScale);
        leftScribeTextShadow.voffset = scribeHeadNoWireTwo.voffset+(12* thermometerScale);

        var previousrightScribeHeadPos=rightScribeHead.voffset;
        rightScribeHead.voffset =  redMercuryRight.voffset - (12* thermometerScale) ;
        rightScribeHeadShadow.voffset =  redMercuryRight.voffset - (10* thermometerScale) ;
        longWire.voffset =  rightScribeHead.voffset+(1* thermometerScale);
        scribeHeadNoWireOne.voffset =  redMercuryRight.voffset - (10* thermometerScale) ;
        rightScribeText.voffset = scribeHeadNoWireOne.voffset+(11* thermometerScale);
        rightScribeTextShadow.voffset = scribeHeadNoWireOne.voffset+(12* thermometerScale);
        
        // do a little draw shuffle when the scribe positioning changes due to a temperature change
        if (printer == "showing")
        {
         if (previousleftScribeHeadPos != leftScribeHead.voffset)
         {
               leftScribeHead.voffset = leftScribeHead.voffset +(2* thermometerScale);
               leftScribeHeadShadow.voffset = leftScribeHead.voffset +(2* thermometerScale);
               shortWire.voffset = leftScribeHead.voffset;

               if (preferences.soundsPref.value != "mute" && preferences.scribblePref.value != "mute" ) {play(draw, false);};
               
               sleep(20);
               leftScribeHead.voffset = leftScribeHead.voffset -(4* thermometerScale);
               leftScribeHeadShadow.voffset = leftScribeHead.voffset -(4* thermometerScale);
               shortWire.voffset = leftScribeHead.voffset;
               sleep(20);
               leftScribeHead.voffset = leftScribeHead.voffset +(2* thermometerScale);
               leftScribeHeadShadow.voffset = leftScribeHead.voffset +(2* thermometerScale);
               shortWire.voffset = leftScribeHead.voffset+(1* thermometerScale);
         }
         if (previousrightScribeHeadPos != rightScribeHead.voffset)
         {
               rightScribeHead.voffset = rightScribeHead.voffset +(2* thermometerScale);
               rightScribeHeadShadow.voffset = rightScribeHead.voffset +(2* thermometerScale);
               longWire.voffset = rightScribeHead.voffset;
               
               if (preferences.soundsPref.value != "mute" && preferences.scribblePref.value != "mute" ) {play(draw, false);};
               sleep(20);
               rightScribeHead.voffset = rightScribeHead.voffset -(4* thermometerScale);
               rightScribeHeadShadow.voffset = rightScribeHead.voffset -(4* thermometerScale);
               longWire.voffset = rightScribeHead.voffset;
               sleep(20);
               rightScribeHead.voffset = rightScribeHead.voffset +(2* thermometerScale);
               rightScribeHeadShadow.voffset = rightScribeHead.voffset +(2* thermometerScale);
               longWire.voffset = rightScribeHead.voffset+(1* thermometerScale);
         }
       }
}
//=====================
//End function
//=====================
//===========================================
// function to check temperatures have exceeded level 'warm'
//===========================================
function CheckTemperaturesAgainstAlarms()
{
      if (redMercuryLeft.voffset > leftwarmtext.voffset+ (5* thermometerScale))
      {
         leftLampTimer.ticking=false;
         leftLamptoflash = "none";
         leftLamp.hOffset = 262* thermometerScale;
         leftLamp.vOffset = 108* thermometerScale;
         leftLamp.width = 24* thermometerScale;
         leftLamp.height = 25* thermometerScale;
         leftLamp.src = "Resources/greenLamp.png";
      }

      //check cpu temperatures have exceeded level 'warm'

      if (redMercuryLeft.voffset <= leftwarmtext.voffset+ (5* thermometerScale))
      {
         leftLampTimer.ticking=true;
         leftLamptoflash = "amber";
         //leftLamp.src = "Resources/amberLamp.png";
      }


      //check cpu temperatures have exceeded level 'hot'

      if (redMercuryLeft.voffset <= lefthottext.voffset+ (5* thermometerScale))
      {
         leftLampTimer.ticking=true;
         leftLamptoflash = "red";
         print("over-temperature reached");
         //leftLamp.src = "Resources/redLamp.png";
      }


      if (redMercuryRight.voffset > rightwarmtext.voffset+ (5* thermometerScale))
      {
         rightLampTimer.ticking=false;
         rightLamptoflash = "none";
         rightLamp.hOffset = 338* thermometerScale;
         rightLamp.vOffset = 108* thermometerScale;
         rightLamp.width = 24* thermometerScale;
         rightLamp.height = 25* thermometerScale;
         rightLamp.src = "Resources/greenLamp.png";
      }

      //check gpu temperatures have exceeded level 'warm'

      if (redMercuryRight.voffset <= rightwarmtext.voffset+ (5* thermometerScale))
      {
         rightLampTimer.ticking=true;
         rightLamptoflash = "amber";
         //rightLamp.src = "Resources/amberLamp.png";
      }


      //check gpu temperatures have exceeded level 'hot'

      if (redMercuryRight.voffset <= righthottext.voffset+ (5* thermometerScale))
      {
         rightLampTimer.ticking=true;
         rightLamptoflash = "red";
         print("over-temperature reached");
         //rightLamp.src = "Resources/redLamp.png";
      }
}
//=====================
//End function
//=====================
//===========================================
// function to flash the left hand lamp
//===========================================
function flashleftlamp()
{
 if (leftLamptoflash == "amber")
 {
   if (leftLamp.src == "Resources/amberLamp.png")
   {
    leftLamp.hOffset = 231* thermometerScale;
    leftLamp.vOffset = 76* thermometerScale;
    leftLamp.width = 82* thermometerScale;
    leftLamp.height = 83* thermometerScale;
    leftLamp.src = "Resources/amberLampFlashing.png";
    if (preferences.soundsPref.value != "mute" ) {play(relay, false);};

   }
   else
   {
    leftLamp.hOffset = 262* thermometerScale;
    leftLamp.vOffset = 108* thermometerScale;
    leftLamp.width = 24* thermometerScale;
    leftLamp.height = 25* thermometerScale;
    leftLamp.src = "Resources/amberLamp.png";
   }
   alarmTimer.ticking = false;
 }

 if (leftLamptoflash == "red")
 {
   if (leftLamp.src == "Resources/redLamp.png")
   {
    leftLamp.hOffset = 228* thermometerScale;
    leftLamp.vOffset = 74* thermometerScale;
    leftLamp.width = 87* thermometerScale;
    leftLamp.height = 87* thermometerScale;
    leftLamp.src = "Resources/redLampFlashing.png";
    if (preferences.soundsPref.value != "mute" ) {play(relay, false);};
   }
   else
   {
    leftLamp.hOffset = 262* thermometerScale;
    leftLamp.vOffset = 108* thermometerScale;
    leftLamp.width = 24* thermometerScale;
    leftLamp.height = 25* thermometerScale;
    leftLamp.src = "Resources/redLamp.png";
   }
   //sound the bell alarm here
   if (preferences.chimesPref.value == "chime" )
   {
         alarmTimer.ticking = true;
   }
 }
}
//=====================
//End function
//=====================
//===========================================
// function to
//===========================================
function flashspeedfanindicator()
{
     // log (speedfanflag);
   if (speedfanindicatorred.visible === true)
   {
         speedfanindicatorred.visible = false;
         speedfanindicatorredglowing.visible = true;
         if (preferences.soundsPref.value != "mute" ) {play(relay, false);};
         //log (1);
   }
   else
   {
         speedfanindicatorredglowing.visible = false;
         speedfanindicatorred.visible = true;
         //log (2);
   }
}
//=====================
//End function
//=====================
//===========================================
// function to
//===========================================
function flashrightlamp()
{
 if (rightLamptoflash == "amber")
 {
   if (rightLamp.src == "Resources/amberLamp.png")
   {
    rightLamp.hOffset = 307* thermometerScale;
    rightLamp.vOffset = 76* thermometerScale;
    rightLamp.width = 82* thermometerScale;
    rightLamp.height = 83* thermometerScale;
    rightLamp.src = "Resources/amberLampFlashing.png";
    if (preferences.soundsPref.value != "mute" ) {play(relay, false);};
   }
   else
   {
    rightLamp.hOffset = 338* thermometerScale;
    rightLamp.vOffset = 108* thermometerScale;
    rightLamp.width = 24* thermometerScale;
    rightLamp.height = 25* thermometerScale;
    rightLamp.src = "Resources/amberLamp.png";
   }
   alarmTimer.ticking = false;
 }

 if (rightLamptoflash == "red")
 {
   if (rightLamp.src == "Resources/redLamp.png")
   {
    rightLamp.hOffset = 304* thermometerScale;
    rightLamp.vOffset = 74* thermometerScale;
    rightLamp.width = 87* thermometerScale;
    rightLamp.height = 87* thermometerScale;
    rightLamp.src = "Resources/redLampFlashing.png";
    if (preferences.soundsPref.value != "mute" ) {play(relay, false);};
   }
   else
   {
    rightLamp.hOffset = 338* thermometerScale;
    rightLamp.vOffset = 108* thermometerScale;
    rightLamp.width = 24* thermometerScale;
    rightLamp.height = 25* thermometerScale;
    rightLamp.src = "Resources/redLamp.png";
   }
   //sound the bell alarm here
   if (preferences.chimesPref.value == "chime")
   {
         alarmTimer.ticking = true;
   }
 }
}
//=====================
//End function
//=====================
//===========================================
// function to Set the Current Temperature Tooltips
//===========================================
function SetCurrentTemperatureTooltips()
{
    redMercuryLeft.tooltip =  currentLeftThermometerSensorNameText + " temperature "+ leftTemperature  + " degrees celsius";
    leftScribeHead.tooltip =  currentLeftThermometerSensorNameText + " temperature "+ leftTemperature + " degrees celsius";
    scribeHeadNoWireTwo.tooltip =  currentLeftThermometerSensorNameText + " temperature "+ leftTemperature + " degrees celsius";
    thermometerLeft.tooltip =  currentLeftThermometerSensorNameText + " temperature "+ leftTemperature + " degrees celsius";
    leftTemperatureMaxIndex.tooltip =  currentLeftThermometerSensorNameText + " Max. temperature reached " + leftTemperatureMax + " degrees celsius";

    redMercuryRight.tooltip =  currentRightThermometerSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    rightScribeHead.tooltip =  currentRightThermometerSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    scribeHeadNoWireOne.tooltip =  currentRightThermometerSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    thermometerRight.tooltip =  currentRightThermometerSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    rightTemperatureMaxIndex.tooltip =  currentRightThermometerSensorNameText + " Max. temperature reached " + rightTemperatureMax + " degrees celsius";

    var rightSliderHotAlarmTemperature =  (220-(hotSliderRight.voffset));
    hotSliderRight.tooltip = currentRightThermometerSensorNameText + " temperature HOT alarm currently set to " + (rightSliderHotAlarmTemperature) +" Celsius";
    righthottext.tooltip = currentRightThermometerSensorNameText + " temperature HOT alarm currently set to " + (rightSliderHotAlarmTemperature) +" Celsius";

    var rightSliderWarmAlarmTemperature =  (220-(warmSliderRight.voffset));
    warmSliderRight.tooltip = currentRightThermometerSensorNameText + " temperature WARM alarm currently set to " + (rightSliderWarmAlarmTemperature) +" Celsius";
    rightwarmtext.tooltip = currentRightThermometerSensorNameText + " temperature WARM alarm currently set to " + (rightSliderWarmAlarmTemperature) +" Celsius";

    var leftSliderHotAlarmTemperature =  (220-(hotSliderLeft.voffset));
    hotSliderLeft.tooltip = currentLeftThermometerSensorNameText + " temperature HOT alarm currently set to " + (leftSliderHotAlarmTemperature) +" Celsius";
    lefthottext.tooltip = currentLeftThermometerSensorNameText + " temperature HOT alarm currently set to " + (leftSliderHotAlarmTemperature) +" Celsius";

    var leftSliderWarmAlarmTemperature =  (220-(warmSliderLeft.voffset));
    warmSliderLeft.tooltip = currentLeftThermometerSensorNameText + " temperature WARM alarm currently set to " + (leftSliderWarmAlarmTemperature) +" Celsius";
    leftwarmtext.tooltip = currentLeftThermometerSensorNameText + " temperature WARM alarm currently set to " + (leftSliderWarmAlarmTemperature) +" Celsius";
}
//=====================
//End function
//=====================
//===========================================
// function to set the mercury levels
//===========================================
function SetMercuryLevels()
{
    //print("running SetMercuryLevels "+leftTemperatureMaxIndex.voffset);
    //print(" redMercuryLeft.height "+redMercuryLeft.height);
    //print(" redMercuryLeft.voffset "+redMercuryLeft.voffset);


    redMercuryLeft.height =  ( leftTemperature+ 15) * thermometerScale;
    redMercuryLeft.voffset =   (291* thermometerScale) - redMercuryLeft.height;


    redMercuryRight.height =  ( rightTemperature+ 15) * thermometerScale;
    redMercuryRight.voffset =   (291* thermometerScale) - redMercuryRight.height;

    //move the  indexes to the max. temperature level

    if (leftTemperature >= leftTemperatureMax)
    {
     leftTemperatureMaxIndex.voffset = redMercuryLeft.voffset -(20 * thermometerScale);
    }

    if (rightTemperature >= rightTemperatureMax)
    {
     rightTemperatureMaxIndex.voffset = redMercuryRight.voffset -(20 * thermometerScale);
    }


    if (leftTemperature >= leftTemperatureMax)
    {
      leftTemperatureMax = leftTemperature;
    }

    if (rightTemperature >= rightTemperatureMax)
    {
      rightTemperatureMax = rightTemperature;
    }
    //log (leftTemperature);
    //log (leftTemperatureMax);

    //log (rightTemperature);
    //log (rightTemperatureMax);

    //print(" redMercuryLeft.height "+redMercuryLeft.height);
    //print(" redMercuryLeft.voffset "+redMercuryLeft.voffset);

    PreviousredMercuryLeftvoffset = redMercuryLeft.voffset;
    PreviousredMercuryRightvoffset = redMercuryRight.voffset;
}
//=====================
//End function
//=====================
//===========================================
// function to check and change the loudness
//===========================================
function togglechimes () {

   if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
   if (preferences.chimesPref.value == "no chime")
   {
       preferences.chimesPref.value = "chime";
       clapper.visible=true;
       ClapperRotated.visible=false;
       if (preferences.soundsPref.value != "mute" ) {play(singleBell, false);};
       //play(singleBell);
   }
   else
   {
       preferences.chimesPref.value = "no chime";
       clapper.visible=false;
       ClapperRotated.visible=true;
       if (alarmTimer.ticking == true)
       {
         alarmTimer.ticking = false;
       }
   }
}
//=====================
//End function
//=====================
//===========================================
// function to toggle the chimes
//===========================================
function bellding ()
{
  togglechimes();
 }
//=====================
//End function
//=====================
//===========================================
// function to Kill any existing speedfan process
//===========================================
function KillSpeedfanProcess()
{
	//runCommand("%WINDIR%/system32/TASKKILL /F /IM speedfan");
	print("Stopping Any Running Speedfan Process");
}
//=====================
//End function
//=====================

//=========================================================
// function to check whther the speedfan executable exists
//=========================================================
function checkSpeedfanBinaryExists()
{

  // if NT5 and below
  // check the preferences
  // if preference filled then check the file exists
  // if not then check the file exists on all drives
  // c:/Program Files
  // if not found then prompt to install

  // if NT6 and above
  // check the preferences
  // if preference filled then check the file exists
  // if not then check the file exists on all drives
  // c:/Program Files (x86)
  // if it exists
  // then prompt to reinstall somewhere else
  // if not found then prompt to install outside of program files

        print("Checking Speedfan Executable Exists");
        print("preferences.SpeedfanLocation.value = "+preferences.SpeedfanLocation.value);
        print("getWindowsVersion() " + getWindowsVersion());
        if (getWindowsVersion() <= "5.7" && getWindowsVersion() >= "5.0")
        {
            if (filesystem.itemExists(preferences.SpeedfanLocation.value + "SpeedFan.exe"))
            {
                    //value is present check it is valid
                    print("1 Speedfan found in preferences");
                    speedfanindicatorred.visible = false;
                    speedfanindicator.visible = true;
                    speedfanflag = "installed";
                    return;
            }
        }

        if (getWindowsVersion() > "5.7")       // NT6
        {
            if (filesystem.itemExists(preferences.SpeedfanLocation.value + "SpeedFan.exe"))
            {
                    //value is present check it is valid
                    var prefVal = preferences.SpeedfanLocation.value;
                    var ss = prefVal.indexOf("Program Files");
                    if (ss != 0) {
                      var answer = alert("On Vista, Win7, 8 and 10 the Program Files folder is inaccessible. The widget needs to get/set configuration information from that folder. Speedfan.exe MUST be installed in another location in order to function. The recommended location is: C:\Programs - Remove the old version completely and then re-install it there instead.");
                    } else {
                      //speedfan is NOT in the Program Files folder - good.
                      print("2 Speedfan found in preferences");
                      speedfanindicatorred.visible = false;
                      speedfanindicator.visible = true;
                      speedfanflag = "installed";
                      return;
                    }
            }
        }

        //if the preferences are not found then go and look
        var vols = filesystem.volumes;
        var drivename = null;
        var drive = null;

        for (a in vols) {
            if (vols.hasOwnProperty(a)) {
                volscnt = Number(a);
                drivename = filesystem.getDisplayName(vols[a].path);
                print("** drivename ** " + drivename);
                var ss = drivename.indexOf("(");
                drive =  drivename.substr( ss+1, 1 );



                if (preferences.SpeedfanLocation.value == "" ) {
                    print("Looking for ",drive+":/Program Files/SpeedFan/speedfan.exe");
                    if (filesystem.itemExists(drive+":/Program Files/SpeedFan/speedfan.exe") || filesystem.itemExists("c:/Program Files (x86)/SpeedFan/speedfan.exe"))
                    {
            		    print("Speedfan found (!) here: ",drive+":/Program Files/SpeedFan/speedfan.exe");
                            speedfanindicatorred.visible = false;
                            speedfanindicator.visible = true;
                            speedfanflag = "installed";
                            if (filesystem.itemExists(drive+":/Program Files/SpeedFan/speedfan.exe"))
                            {
                               preferences.SpeedfanLocation.value = drive+":/Program Files/SpeedFan/";
                            }
                            else if (filesystem.itemExists(drive+":/Program Files (x86)/SpeedFan/speedfan.exe"))
                            {
                               preferences.SpeedfanLocation.value = drive+":/Program Files (x86)/SpeedFan/";
                            }
                            return;
                    }
                } else {
                       if (filesystem.itemExists(preferences.SpeedfanLocation.value+ "/speedfan.exe")) {
                            print("Speedfan found (!) here: ",preferences.SpeedfanLocation.value+ "/speedfan.exe");
                            speedfanindicatorred.visible = false;
                            speedfanindicator.visible = true;
                            speedfanflag = "installed";
                       }
                }
            }
        }
        
}
//=====================
//End function
//=====================


//=========================================================
// function to check whther the speedfan executable exists
//=========================================================
function selectSpeedfanBinaryLocation()
{

        // speedfan not found
            //invalid entry for speedfan location
            print("Speedfan not found - user to select a speedfan location");

                speedfanNotFound.visible = true;
                if (preferences.soundsPref.value != "mute" ) {play(singleBell, false);};

                var folder = chooseFolder(); // allow multiple png files
                print(folder);
                if (folder == null)
                {
                    print("Speedfan not found, cannot get temperatures");
                    speedfanNotFound.visible = false;
                    sleep (2000);
                    speedfanNotFound.visible = true;
                    if (preferences.soundsPref.value != "mute" ) {play(singleBell, false);};
                }
                else
                {
                    print("Speedfan folder manually selected")

                    preferences.SpeedfanLocation.value = folder + "/";
                    if (filesystem.itemExists(preferences.SpeedfanLocation.value + "speedfan.exe"))
                    {
                    //value is present check it is valid
                         speedfanindicatorlampTimer.ticking = false;

                         print("Speedfan executable found");
                         print(preferences.SpeedfanLocation.value);
                         speedfanindicatorred.visible = false;
                         speedfanindicator.visible = true;
                         speedfanflag = "installed";
                         speedfanNotFound.visible = false;
                     }
                     else
                     {
                         preferences.SpeedfanLocation.value = "";
                         print("Speedfan executable not found, cannot get temperatures");
                         speedfanNotFound.visible = false;
                         sleep (2000);
                         speedfanNotFound.visible = true;
                         if (preferences.soundsPref.value != "mute" ) {play(singleBell, false);};
                     }
                }
                //files = chooseFile( "speedfan.exe" ); // allow multiple png files

                //result = prompt("Name:", "Your Name","Name Dialog", "OK", "Cancel");
                //var answer = alert("The widget was unable to find Speedfan.exe in default location.", "Locate Speedfan's Directory");


}
//=====================
//End function
//=====================






//===========================================
// function to start the speedfan process
//===========================================
function StartSpeedfanProcess()
{
            //var fff = runCommand(  "tasklist /FI \"IMAGENAME eq speedfan/\"");
            //var fff = runCommand(  "tasklist /FI /"/\"");
             //print("**********************fff = "+fff);
        //}

	// returns a string separated by spaces otherwise unusable
       // fff = fff.split("\n");
        //var ggg  = fff[1];

    if (preferences.SpeedfanLocation.value == "")
    {

        //if the preferences are not found then go and look
        var vols = filesystem.volumes;
        var drivename = null;
        var drive = null;

        for (a in vols) {
            if (vols.hasOwnProperty(a)) {
                volscnt = Number(a);
                drivename = filesystem.getDisplayName(vols[a].path);
                var ss = drivename.indexOf("(");
                drive =  drivename.substr( ss+1, 1 );

        	print("Looking for ",drive+":/Program Files/SpeedFan/speedfan.exe");

                if (filesystem.itemExists(drive+":/Program Files/SpeedFan/speedfan.exe") || filesystem.itemExists("c:/Program Files (x86)/SpeedFan/speedfan.exe"))
                {
        		print("Starting Speedfan c:, please wait for a few seconds while it loads");
                        if (filesystem.itemExists("c:/Program Files/SpeedFan/speedfan.exe"))
                        {
                           filesystem.open("c:/Program Files/SpeedFan/speedfan.exe");
                        }
                        else if (filesystem.itemExists("c:/Program Files (x86)/SpeedFan/speedfan.exe"))
                        {
                           filesystem.open("c:/Program Files (x86)/SpeedFan/speedfan.exe");
                        }
                        return;
                }
            }
        }






       print("Speedfan checking");
        if (filesystem.itemExists("c:/Program Files/SpeedFan/speedfan.exe") || filesystem.itemExists("c:/Program Files (x86)/SpeedFan/speedfan.exe"))
        {
		print("Starting Speedfan c:, please wait for a few seconds while it loads");
                if (filesystem.itemExists("c:/Program Files/SpeedFan/speedfan.exe"))
                {
                   filesystem.open("c:/Program Files/SpeedFan/speedfan.exe");
                }
                else if (filesystem.itemExists("c:/Program Files (x86)/SpeedFan/speedfan.exe"))
                {
                   filesystem.open("c:/Program Files (x86)/SpeedFan/speedfan.exe");
                }

        }
        else if (filesystem.itemExists("d:/Program Files/SpeedFan/speedfan.exe") || filesystem.itemExists("d:/Program Files (x86)/SpeedFan/speedfan.exe"))
        {
		print("Starting Speedfan on d: please wait for a few seconds while it loads");
                if (filesystem.itemExists("d:/Program Files/SpeedFan/speedfan.exe"))
                {
                   filesystem.open("d:/Program Files/SpeedFan/speedfan.exe");
                }
                else if (filesystem.itemExists("d:/Program Files (x86)/SpeedFan/speedfan.exe"))
                {
                   filesystem.open("d:/Program Files (x86)/SpeedFan/speedfan.exe");
                }
        }
        else if (filesystem.itemExists("e:/Program Files/SpeedFan/speedfan.exe") || filesystem.itemExists("e:/Program Files (x86)/SpeedFan/speedfan.exe"))
        {
		print("Starting Speedfan on e:, please wait for a few seconds while it loads");
                if (filesystem.itemExists("e:/Program Files/SpeedFan/speedfan.exe"))
                {
                   filesystem.open("e:/Program Files/SpeedFan/speedfan.exe");
                }
                else if (filesystem.itemExists("e:/Program Files (x86)/SpeedFan/speedfan.exe"))
                {
                   filesystem.open("e:/Program Files (x86)/SpeedFan/speedfan.exe");
                }
        }
    }
    else if (filesystem.itemExists(preferences.SpeedfanLocation.value + "speedfan.exe"))
    {
                print("Starting Speedfan... please wait for a few seconds while it loads");
                filesystem.open(preferences.SpeedfanLocation.value + "speedfan.exe");
    }
    else
    {
       	print("Speedfan not found, cannot get temperatures");
    }
}
//=====================
//End function
//=====================
//======================================================
// function to crank the handle and display/hide printer
//======================================================
function crankhandle()
{
        if (crank.src!='Resources/crank-down.png')
        {
               //set printer to docked
               printer = "not showing";
               // animation to hide printer
               print("printer handle cranked down");

               //play(crank, false);
               if (preferences.soundsPref.value != "mute" ) {play(cranksound, false);};
               //play(clunk, false);
               if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};

               crank.src='Resources/crank-middle.png';
               sleep(700);

               if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
               crank.src='Resources/crank-down.png';
               crank.tooltip="crank me up Judy...";

               sleep(500);
               if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
               rightScribeHead.visible = false;
               rightScribeHeadShadow.visible = false;
               rightScribeText.visible = false;
               rightScribeTextShadow.visible = false;
               longWire.visible = false;
               scribeHeadNoWireOne.visible = true;

               sleep(500);
               if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
               leftScribeHead.visible = false;
               leftScribeHeadShadow.visible = false;
               leftScribeText.visible = false;
               leftScribeTextShadow.visible = false;
               shortWire.visible = false;
               scribeHeadNoWireTwo.visible = true;

               sleep(1000);
               // make the canvas invisible
               canvasOne.visible = false;
               canvasTwo.visible = false;
               canvasThree.visible = false;

               paper.visible = false;
               verticalLines.visible  = false;
               movinglines.visible  = false;
               bunchedLines.visible  = false;
               if (preferences.soundsPref.value != "mute" ) {play(rollerblindup);};

               stationerstext.visible = false;
               topbar.visible = true;
               bottombar.visible = true;
               trunnion.visible = true;
               sleep(1500);
               //trunnion.hoffset = 13 * thermometerScale;

               var newtrunnionhoffset = 13;
               var stretcherhoffset = 86;
               //play(mechanism, false);
               if (preferences.soundsPref.value != "mute" ) {play(mechanism, false);};
               if (preferences.soundsPref.value != "mute" ) {play(slider, false);};

               for (var a =0;a<=80; a++)
               {
                   newtrunnionhoffset = newtrunnionhoffset + 2;
                   stretcherhoffset = stretcherhoffset + 1.04;
                   trunnion.hoffset = (newtrunnionhoffset* thermometerScale);
                   stretcher.hoffset = (stretcherhoffset* thermometerScale);
                   //log ("hoffset "+trunnion.hoffset);
                   sleep(5);
               }
               sleep(1000);

               if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
               topbar.visible = false;
               sleep(500);

               bottombar.visible = false;
               if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};

               upperrightbracket.visible = true;
               lowerrightbracket.visible = true;

               preferences.printerPref.value="hide";
               sleep(1000);
               puff(420,205);
        } else {
                 printer = "showing";
                 // animation to show printer

                 print("printer handle cranked up");


                 if (preferences.soundsPref.value != "mute" ) {play(cranksound, false);};
                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};

                 crank.src='Resources/crank-middle.png';
                 sleep(700);

                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
                 crank.src='Resources/crank.png';
                 crank.tooltip="crank me down";

                 //upperrightbracket.visible = false;
                 //lowerrightbracket.visible = false;

                 topbar.visible = true;
                 sleep(500);
                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
                 bottombar.visible = true;
                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};

                 sleep(1000);

                 var newtrunnionhoffset = 175;
                 var stretcherhoffset = 170;
                 if (preferences.soundsPref.value != "mute" ) {play(mechanism, false);};
                 if (preferences.soundsPref.value != "mute" ) {play(slider, false);};;
                 for (var a =0;a<=87; a++)
                 {
                     newtrunnionhoffset = newtrunnionhoffset - 2;
                     trunnion.hoffset = (newtrunnionhoffset* thermometerScale);
                     stretcherhoffset = stretcherhoffset - 1.04;
                     stretcher.hoffset = (stretcherhoffset* thermometerScale);
                     sleep(5);
                 }
                 if (preferences.soundsPref.value != "mute" ) {play(rollerblinddown);};
                 //play(rollerblinddown);
                 paperPull.visible = true;

                 sleep(1500);
                 //trunnion.visible = false;
                 paperPull.visible = false;
                 paper.visible = true;

		 verticalLines.visible  = true;
                 movinglines.visible  = true;
                 bunchedLines.visible  = true;

                 stationerstext.visible = false;

                 sleep(1000);
                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
                 rightScribeHead.visible = true;
                 rightScribeHeadShadow.visible = true;
                 rightScribeText.visible = true;
                 rightScribeTextShadow = true;
                 longWire.visible = true;
                 scribeHeadNoWireOne.visible = false;

                 sleep(500);
                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
                 if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
                 leftScribeHead.visible = true;
		 leftScribeHeadShadow.visible = true;
                 leftScribeText.visible = true;
                 leftScribeTextShadow = true;
		 shortWire.visible = true;
                 scribeHeadNoWireTwo.visible = false;

                 sleep(500);

                 //sleep(500);

                 /*movinglines.visible= true;
                 var tmpmovinglineshoffset = 210;
                 for (var a =0;a<=193; a++)
                 {
                     tmpmovinglineshoffset = tmpmovinglineshoffset - 1;
                     movinglines.hoffset = (tmpmovinglineshoffset* thermometerScale);
                     //log ("hoffset "+movinglines.hoffset);
                     sleep(10);
                 }
                 //movinglines.visible= false;
                 */
                 preferences.printerPref.value="show";
                 // make the canvas visible
                 canvasOne.visible = true;
                 canvasTwo.visible = true;
                 canvasThree.visible = true;
                 
                 //redrawWholeScale();    //scale now shown

                 puff(420,205);
        }
}
//=====================
//End function
//=====================
//===========================================
// function to read sensor file
//===========================================
function getWindowsSensorNames()
{
        sensorcount = 0 ;
        log ( "getting sensor names" );
        log ( filesystem.itemExists(preferences.SpeedfanLocation.value + "speedfansens.cfg") );
        if (filesystem.itemExists(preferences.SpeedfanLocation.value + "speedfansens.cfg"))
        {
           log ( "reading speedfansens.cfg" );
           var speedfansenscfg = filesystem.readFile(preferences.SpeedfanLocation.value + "speedfansens.cfg", true );
	   for (var loopcount=0; loopcount < speedfansenscfg.length; loopcount ++)
	   {
                //log (speedfansenscfg[loopcount].substring(0,10));
                //sleep(100);
                if (speedfansenscfg[loopcount].substring(0,10) == "xxx Temp 1" || speedfansenscfg[loopcount].substring(0,10) == "xxx Temp 2" || speedfansenscfg[loopcount].substring(0,10) == "xxx Temp 3" || speedfansenscfg[loopcount].substring(0,10) == "xxx Temp 4")
		{
                     sensorcount = sensorcount + 1;
                     sensorName[sensorcount] = speedfansenscfg[loopcount+1].substring(5,19);
                     //sensorName = speedfansenscfg[loopcount+1];
                     log (sensorcount+"." + sensorName[sensorcount] );
                     //log ("" + sensorName );
                     //log (speedfansenscfg[loopcount+1]);
		}
	   }
        } else {
                var answer = alert("The widget was unable to find Speedfan Sensor config file in default location in Speedfan's Directory");
        }
	//log ("No. of sensors " + sensorcount );
}
//=====================
//End function
//=====================

//===========================================
// function to remove the path
//===========================================
function escapePath(path) {
	return path.replace(/([\W])/g, '\\$1');
}
//=====================
//End function
//=====================

//===========================================
// function to get the temperatures from a MAC (currently unused)
//===========================================
function getLeftTemp() {
	var data = runCommand(escapePath(tempmonitor) + " -c -a -l"),
		temp = data.match(/^CPU Core 1\: (\d+) C$/m);

	if (temp === null) { return null; }
	return temp[1];
}
//=====================
//End function
//=====================

//===========================================
// function to get the temperatures from a MAC (currently unused)
//===========================================
function getCpu2Temp() {
	var data = runCommand(escapePath(tempmonitor) + " -c -a -l"),
		temp = data.match(/^CPU Core 2\: (\d+) C$/m);

	if (temp === null) { return null; }
	return temp[1];
}
//=====================
//End function
//=====================

//===========================================
// function to get the right hand temperature
//===========================================
function getRightTemp() {
	var data = runCommand(escapePath(tempmonitor) + " -c -a -l"),
		temp = data.match(/^SMC GPU DIODE\: (\d+) C$/m);

	if (temp === null) { return null; }
	return temp[1];
}
//=====================
//End function
//=====================

//===============================================================
// function to read temperatures from the speedfan shared memory
//===============================================================
function ReadTemperatures()
{
      //read temperatures here

      if (speedfanflag == "installed")
      {

        // run the speedfan.cpp compiled executable which reads the shared memory area
        // provided by speedfan.
        // uses the convertPathToPlatform to change the / or \
        //
        //if (filesystem.itemExists("Resources/speedfan.exe"))
        //{
          var speedfanexe = runCommand(convertPathToPlatform(speedFanExePath));
          print("  speedfanexe = "+speedfanexe);
        //}

	// returns a string separated by spaces otherwise unusable
        speedfanexe = speedfanexe.split("\n");
        noofsensors = speedfanexe[1];
	//print("number of speedfan sensors = " + noofsensors );
        var temperatureString = speedfanexe[2];
        print("  temperatureString = "+temperatureString);

	if (temperatureString != "no temperatureString")
	{
            // if any temperature is zero then it is ignored and the previous temperature is retained
            // this is because the sensors may occassionally deliver incorrect zero temperatures
            // using parseFloat because it is more reliable when parsing then parseInt unless you specify a radix.


            var oldSensorTemp = SensorTemp[1];
            if (parseFloat(temperatureString.substring(1,3)) != 0) {
              SensorTemp[1] = temperatureString.substring(1,3)
            } else {
              SensorTemp[1] = oldSensorTemp;
              print("************** sensor 1 " + parseFloat(temperatureString.substring(1,3)));
              print("************** zero value found sensor 1 " + " " + SensorTemp[1]);
              print("************** zero value found sensor 1 " + " " + oldSensorTemp);
            }

            if (parseFloat(temperatureString.substring(7,9)) != 0) {
              SensorTemp[2] = temperatureString.substring(7,9)
            } else {   // debug
              SensorTemp[2] = SensorTemp[2];
              print("sensor 2 " + parseFloat(temperatureString.substring(7,9)));
              print("zero value found sensor 2 " + " " + SensorTemp[2]);
            }

            if (parseFloat(temperatureString.substring(13,15)) != 0) {
              SensorTemp[3] = temperatureString.substring(13,15)
            } else {   // debug
              SensorTemp[3] = SensorTemp[3];
              print("sensor 3 " + parseFloat(temperatureString.substring(13,15)));
              print("zero value found sensor 3 " + " " + SensorTemp[3]);
            }

            if (parseFloat(temperatureString.substring(19,21)) != 0) {
              SensorTemp[4] = temperatureString.substring(19,21)
            } else {   // if zero value found
              SensorTemp[4] = SensorTemp[4];
              print("zero value found sensor 4 " + " " + SensorTemp[4]);
            }

            if (parseFloat(temperatureString.substring(25,27)) != 0) {
              SensorTemp[5] = temperatureString.substring(25,27)
            } else {   // debug
              SensorTemp[5] = SensorTemp[5];
              print("zero value found sensor 5 " + " " + SensorTemp[5]);
            }

            if (parseFloat(temperatureString.substring(31,33)) != 0) {
              SensorTemp[6] = temperatureString.substring(31,33)
            } else {   // debug
              SensorTemp[6] = SensorTemp[6];
              print("zero value found sensor 6 " + " " + SensorTemp[6]);
            }

            if (parseFloat(temperatureString.substring(37,39)) != 0) {
              SensorTemp[7] = temperatureString.substring(37,39)
            } else {   // debug
              SensorTemp[7] = SensorTemp[7];
              print("zero value found sensor 7 " + " " + SensorTemp[7]);
            }

            if (parseFloat(temperatureString.substring(43,45)) != 0) {
              SensorTemp[8] = temperatureString.substring(43,45)
            } else {   // debug
              SensorTemp[8] = SensorTemp[8];
              print("zero value found sensor 8 " + " " + SensorTemp[8]);
            }

            if (waitmessage.visible == true)
            {
               waitmessage.visible = false;
               if (preferences.soundsPref.value != "mute" ) {play(zzzz, false);};
               //if (preferences.soundsPref.value != "mute" ) {play(zzzz, false);};
               if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);};
            }
            busy.visible= false;
            busyBlur.visible= false;
            busyTimer.ticking = false;
        }

        // display the list of sensors run this once only

        if (temperatureString != "no temperatures" && getSensorList === 0)
        {
           print("Running First time");
           print("No. of sensors = "+noofsensors);
           selectedLeftThermometerSensor[noofsensors-2] = 1;
           selectedRightThermometerSensor[1] = 1;

           currentLeftThermometerSensor = noofsensors-3;
           currentRightThermometerSensor = 1;

           // noofsensors-2 might always be the cpu sensor?   - needs checking

           //
           if (noofsensors >= 1) {
             print("preferences.leftThermometerDefaultSensorPref.value " + preferences.leftThermometerDefaultSensorPref.value);
             if (preferences.leftThermometerDefaultSensorPref.value != "" ) {
                  leftTemperature = parseFloat(preferences.leftThermometerDefaultSensorPref.value);
                  generateLeftThermometerSensorList(preferences.leftThermometerDefaultSensorPref.value);
             } else {
                  leftTemperature = parseFloat(SensorTemp[1]);
                  generateLeftThermometerSensorList(1);
             }
           }
           if (noofsensors >= 2) {
    	       if (preferences.rightThermometerDefaultSensorPref.value != "" ) {
                    rightTemperature = parseFloat(preferences.rightThermometerDefaultSensorPref.value);
                    generateRightThermometerSensorList(preferences.rightThermometerDefaultSensorPref.value);
               } else {
                    rightTemperature = parseFloat(SensorTemp[2]);
                    generateRightThermometerSensorList(2);
               }
           }
           if (noofsensors >= 3) {
    	       if (preferences.UpperRightBottomGaugeDefaultSensorPref.value != "" ) {
                    UpperRightBottomGaugeTemperature = parseFloat(preferences.UpperRightBottomGaugeDefaultSensorPref.value);
                    generateUpperRightBottomGaugeSensorList(preferences.UpperRightBottomGaugeDefaultSensorPref.value);
               } else {
                    UpperRightBottomGaugeTemperature = parseFloat(SensorTemp[3]);
                    generateUpperRightBottomGaugeSensorList(3);
               }
           }

           if (noofsensors >= 4) {
    	       if (preferences.UpperRightTopGaugeGaugeDefaultSensorPref.value != "" ) {
                    UpperRightTopGaugeTemperature = parseFloat(preferences.UpperRightTopGaugeGaugeDefaultSensorPref.value);
                    generateUpperRightTopGaugeSensorList(preferences.UpperRightTopGaugeGaugeDefaultSensorPref.value);
               } else {
                    UpperRightTopGaugeTemperature = parseFloat(SensorTemp[4]);
                    generateUpperRightTopGaugeSensorList(4);
               }
           }
           if (noofsensors >= 5) {
    	       if (preferences.LowerRightGaugeDefaultSensorPref.value != "" ) {
                    LowerRightTemperature = parseFloat(preferences.LowerRightGaugeDefaultSensorPref.value);
                    generateLowerRightGaugeSensorList(preferences.LowerRightGaugeDefaultSensorPref.value);
               } else {
                    LowerRightTemperature = parseFloat(SensorTemp[5]);
                    generateLowerRightGaugeSensorList(5);
               }
           }
           if (noofsensors >= 6) {
    	       if (preferences.LowerLeftGaugeDefaultSensorPref.value != "" ) {
                    LowerLeftTemperature = parseFloat(preferences.LowerLeftGaugeDefaultSensorPref.value);
                    generateLowerLeftGaugeSensorList(preferences.LowerLeftGaugeDefaultSensorPref.value);
               } else {
                    LowerLeftTemperature = parseFloat(SensorTemp[6]);
                    generateLowerLeftGaugeSensorList(6);
               }
            }

           // generate the sensor menus for each sensor that exists
           // Math.floor((Math.random() * noofsensors) + 1);
           getSensorList = 1;
        } else {
           //print("Second time");
           //print("currentLeftThermometerSensor "+currentLeftThermometerSensor);
           //print("leftTemperature "+leftTemperature);

           if (noofsensors>=1) {leftTemperature = parseFloat(SensorTemp[currentLeftThermometerSensor]);};
           if (noofsensors>=2) {rightTemperature = parseFloat(SensorTemp[currentRightThermometerSensor]);};
           if (noofsensors>=3) {UpperRightBottomGaugeTemperature = parseFloat(SensorTemp[currentUpperRightBottomGaugeSensor]);};
           if (noofsensors>=4) {UpperRightTopGaugeTemperature = parseFloat(SensorTemp[currentUpperRightTopGaugeSensor]);};
           if (noofsensors>=5) {LowerRightTemperature = parseFloat(SensorTemp[currentLowerRightGaugeSensor]);};
           if (noofsensors>=6) {LowerLeftTemperature = parseFloat(SensorTemp[currentLowerLeftThermometerSensor]);};
        }
        //print("selected sensor" + data+ " for the left hand display" + selectedLeftThermometerSensor[data]);
        //print("selected sensor" + data+ " for the right hand display" + selectedRightThermometerSensor[data]);
      }
}
//=====================
//End function
//=====================

//===============================================================
// function to read and modify the speedfan configuration file
//===============================================================
function enableSpeedfanLogging()
{
    var speedfanparamscfg = "";
    var newspeedfanparamscfg = "";
    if (filesystem.itemExists(preferences.SpeedfanLocation.value + "speedfanparams.cfg"))
    {
	// backup the main cfg file
        if( filesystem.itemExists(preferences.SpeedfanLocation.value + "speedfanparams.cfg"))
        {
	    filesystem.copy(preferences.SpeedfanLocation.value + "speedfanparams.cfg", preferences.SpeedfanLocation.value + "speedfanparams.cfg.bak" );
	}

        //open the speedfan cfg file for reading
        speedfanparamscfg = filesystem.readFile(preferences.SpeedfanLocation.value + "speedfanparams.cfg",true);

        //loop through the file from end to end and change the single line StartupHide to false
        for (var loopcnt=0; loopcnt < speedfanparamscfg.length; loopcnt ++)
	{
	    if (speedfanparamscfg[loopcnt] == "StartupHide=false")
	    {
	       speedfanparamscfg[loopcnt] = "StartupHide=true";
	    }
	    if (speedfanparamscfg[loopcnt] == "LogEnabled=false")
	    {
	       speedfanparamscfg[loopcnt] = "LogEnabled=true";
	    }
        }

        //loop through the file from end to end and change the single line StartupHide to false, write a newline at the end of each line
        for(var loopcnt=0; loopcnt < speedfanparamscfg.length; loopcnt ++)
	{
          newspeedfanparamscfg = newspeedfanparamscfg + speedfanparamscfg[loopcnt] + "\n";
	}
	filesystem.writeFile( preferences.SpeedfanLocation.value + "speedfanparams.cfg", newspeedfanparamscfg );

        print("Setting StartupHide=true in speedfanparams.cfg");
        print("Setting LogEnabled=true in speedfanparams.cfg");
    }
}
//=====================
//End function
//=====================

//===========================================
// function to ring alarm
//===========================================
function ringOverTemperatureAlarm()
{
   print("over-temperature reached");
   if (preferences.chimesPref.value == "chime")
   {
        clapper.visible=false;
        ClapperRotated.visible=true;

        sleep(500);

        //play a bell
        if (preferences.soundsPref.value != "mute" ) {play(alarmbells, false);};
        //play(alarmbells, false);

        //
        clapper.visible=true;
        ClapperRotated.visible=false;
        print("sounding alarm");
   }
}
//=====================
//End function
//=====================

//===========================================
// function to getWindowsVersion
//===========================================
function getWindowsVersion(data) {
    var found;

    if (system.platform === "windows") {
        if (data === undefined) {
            data = runCommand("ver");
        }
        found = data.match(/\[Version (\d\.\d)\.\d+\]/);
        if (found !== null) {
            //return "5.6";
            return found[1];

        }
    }
    return undefined;
}
//=====================
//End function
//=====================


//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateRightThermometerSensorList(selectedMenuItem) {
    print("selecting sensor" + selectedMenuItem + " for the right hand thermometer" );
    // clear the previous sensor, ensure none selected
    for (var a = 1; a <= noofsensors; a++)
    {
         if (a != selectedMenuItem) {selectedRightThermometerSensor[a] = 0;};
    }
    selectedRightThermometerSensor[selectedMenuItem] = 1;
    currentRightThermometerSensor = selectedMenuItem;
    SensorTingTimer.ticking = true; // set a ting for the sensor
    //loop through the sensor names adding each into the menu array changing the menu item
    for (var a = 1; a <= noofsensors; a++)
    {
      rightmenuitems[a] = new MenuItem();
      // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
      // if windows XP then display the actual sensor names from the config files
      rightmenuitems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
      //enable all menu items
      rightmenuitems[a].enabled = true;
      //if this is the selected sensor then change the image &c
      if (selectedRightThermometerSensor[a] == 1)
      {
        rightmenuitems[a].checked = true;
        currentRightThermometerSensorNameText = sensorName[a];
        preferences.rightThermometerDefaultSensorPref.value = selectedMenuItem;
        //if windows XP then get the associated image and display it as the selection is made
        //print("selecting " + sensorName[a] + " sensor");
        buildRightThermometerSensorLabelText(sensorName[a]);
        buildRightScribeHeadNames(sensorName[a]);
      }
      else
      {
          rightmenuitems[a].checked = false;
      }
      // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
      // allows up to 16 sensors

      if (a ==1) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[1] = 1; generateRightThermometerSensorList(1);}};
      if (a ==2) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[2] = 1; generateRightThermometerSensorList(2);}};
      if (a ==3) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[3] = 1; generateRightThermometerSensorList(3);}};
      if (a ==4) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[4] = 1; generateRightThermometerSensorList(4);}};
      if (a ==5) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[5] = 1; generateRightThermometerSensorList(5);}};
      if (a ==6) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[6] = 1; generateRightThermometerSensorList(6);}};
      if (a ==7) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[7] = 1; generateRightThermometerSensorList(7);}};
      if (a ==8) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[8] = 1; generateRightThermometerSensorList(8);}};
      if (a ==9) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[9] = 1; generateRightThermometerSensorList(9);}};
      if (a ==10) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[10] = 1; generateRightThermometerSensorList(10);}};
      if (a ==11) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[11] = 1; generateRightThermometerSensorList(11);}};
      if (a ==12) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[12] = 1; generateRightThermometerSensorList(12);}};
      if (a ==13) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[13] = 1; generateRightThermometerSensorList(13);}};
      if (a ==14) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[14] = 1; generateRightThermometerSensorList(14);}};
      if (a ==15) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[15] = 1; generateRightThermometerSensorList(15);}};
      if (a ==16) {rightmenuitems[a].onSelect = function() {selectedRightThermometerSensor[16] = 1; generateRightThermometerSensorList(16);}};
     }
     rightmenuitems[17] = new MenuItem();
     rightmenuitems[17].title = "Right Hand Sensor List Shown above";
     //set the context menu for the thermometer background
     thermometerRight.contextMenuItems = rightmenuitems;
             samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================

//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateLeftThermometerSensorList(selectedMenuItem) {
    print("selecting sensor" + selectedMenuItem + " for the left hand thermometer" );

    // clears the sensor list
    // stores the currently selected sensor
    // loop through all the sensor names adding each into the menu array 
    // build the sensor label names and scribe naming
    // select the chosen menu item, ie. tick it
    // add onSelect call to each menu item

    // clear the previous sensor, ensure none selected
    for (var a = 1; a <= noofsensors; a++)
    {
        if (a != selectedMenuItem) {selectedLeftThermometerSensor[a] = 0;};
    }

    selectedLeftThermometerSensor[selectedMenuItem] = 1;
    currentLeftThermometerSensor = selectedMenuItem;
    SensorTingTimer.ticking = true; // set a ting for the sensor

    //loop through the sensor names adding each into the menu array changing the menu item
    for (var a = 1; a <= noofsensors; a++)
    {
      leftmenuitems[a] = new MenuItem();
      leftmenuitems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
      
      //enable all menu items
      leftmenuitems[a].enabled = true;
      
      // select the chosen menu item, ie. tick it
      if (selectedLeftThermometerSensor[a] == 1)
      {
        leftmenuitems[a].checked = true;
        currentLeftThermometerSensorNameText = sensorName[a];
        preferences.leftThermometerDefaultSensorPref.value = selectedMenuItem;
        
        //if this is the selected sensor then change the image &c
        buildLeftGaugeSensorLabelText(sensorName[a]);
        buildscribeHeadNoWireTwoNames(sensorName[a]);
      }
      else
      {
          leftmenuitems[a].checked = false;
      }
      // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
      // allows up to 16 sensors

      if (a ==1) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(1);}};
      if (a ==2) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(2);}};
      if (a ==3) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(3);}};
      if (a ==4) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(4);}};
      if (a ==5) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(5);}};
      if (a ==6) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(6);}};
      if (a ==7) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(7);}};
      if (a ==8) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(8);}};
      if (a ==9) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(9);}};
      if (a ==10) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(10);}};
      if (a ==11) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(11);}};
      if (a ==12) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(12);}};
      if (a ==13) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(13);}};
      if (a ==14) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(14);}};
      if (a ==15) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(15);}};
      if (a ==16) {leftmenuitems[a].onSelect = function() {selectedLeftThermometerSensor[a] = 1; generateLeftThermometerSensorList(16);}};
     }
     leftmenuitems[17] = new MenuItem();
     leftmenuitems[17].title = "Left Hand Sensor List Shown Above";
     //set the context menu for the thermometer background
     thermometerLeft.contextMenuItems = leftmenuitems;
     samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================
//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateUpperRightBottomGaugeSensorList(selectedMenuItem) {
    print("selecting sensor" + selectedMenuItem + " for the Upper 1 Right gauge" );
    // clear the previous sensor, ensure none selected
    for (var a = 1; a <= noofsensors; a++)
    {
         if (a != selectedMenuItem) {selectedUpperRightBottomGaugeSensor[a] = 0;};
    }
    selectedUpperRightBottomGaugeSensor[selectedMenuItem] = 1;
    currentUpperRightBottomGaugeSensor = selectedMenuItem;
    SensorTingTimer.ticking = true; // set a ting for the sensor

    //loop through the sensor names adding each into the menu array changing the menu item
    for (var a = 1; a <= noofsensors; a++)
    {
      UpperRightBottomGaugeMenuItems[a] = new MenuItem();
      // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
      // if windows XP then display the actual sensor names from the config files
      UpperRightBottomGaugeMenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
      //enable all menu items
      UpperRightBottomGaugeMenuItems[a].enabled = true;
      //if this is the selected sensor then change the image &c
      if (selectedUpperRightBottomGaugeSensor[a] == 1)
      {
          UpperRightBottomGaugeMenuItems[a].checked = true;
          currentUpperRightBottomGaugeSensorNameText = sensorName[a];
          preferences.UpperRightBottomGaugeDefaultSensorPref.value = selectedMenuItem;
          //if windows XP then get the associated image and display it as the selection is made
                print("selecting " + sensorName[a] + " sensor");
                buildTopGaugeSensorLabelText(sensorName[a]);
                //buildUpperScribeHeadNames(sensorName[a]);
      } else {
          UpperRightBottomGaugeMenuItems[a].checked = false;
      }
      // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
      // allows up to 16 sensors

      if (a ==1) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(1);}};
      if (a ==2) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(2);}};
      if (a ==3) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(3);}};
      if (a ==4) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(4);}};
      if (a ==5) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(5);}};
      if (a ==6) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(6);}};
      if (a ==7) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(7);}};
      if (a ==8) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(8);}};
      if (a ==9) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(9);}};
      if (a ==10) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(10);}};
      if (a ==11) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(11);}};
      if (a ==12) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(12);}};
      if (a ==13) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(13);}};
      if (a ==14) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(14);}};
      if (a ==15) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(15);}};
      if (a ==16) {UpperRightBottomGaugeMenuItems[a].onSelect = function() {selectedUpperRightBottomGaugeSensor[a] = 1; generateUpperRightBottomGaugeSensorList(16);}};
     }
    UpperRightBottomGaugeMenuItems[17] = new MenuItem();
    UpperRightBottomGaugeMenuItems[17].title = "Primary Upper Gauge Sensor List Shown above";
    UpperRightBottomGaugeMenuItems[18] = new MenuItem();
    UpperRightBottomGaugeMenuItems[18].title = "Select Fahrenheit for this gauge";
    UpperRightBottomGaugeMenuItems[18].onSelect = selectFahrenheitUpperRightBottomGauge;
    //set the context menu for the thermometer background
    UpperRightBottomGauge.contextMenuItems = UpperRightBottomGaugeMenuItems;
    samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================

//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateUpperRightTopGaugeSensorList(selectedMenuItem) {
    print("selecting sensor" + selectedMenuItem + " for the Upper 2 Right gauge" );
    // clear the previous sensor, ensure none selected
    for (var a = 1; a <= noofsensors; a++)
    {
         if (a != selectedMenuItem) {selectedUpperRightTopGaugeSensor[a] = 0;};
    }
    selectedUpperRightTopGaugeSensor[selectedMenuItem] = 1;
    currentUpperRightTopGaugeSensor = selectedMenuItem;
    SensorTingTimer.ticking = true; // set a ting for the sensor

    //loop through the sensor names adding each into the menu array changing the menu item
    for (var a = 1; a <= noofsensors; a++)
    {
      UpperRightTopGaugeMenuItems[a] = new MenuItem();
      // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
      // if windows XP then display the actual sensor names from the config files
      UpperRightTopGaugeMenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
      //enable all menu items
      UpperRightTopGaugeMenuItems[a].enabled = true;
      //if this is the selected sensor then change the image &c
      if (selectedUpperRightTopGaugeSensor[a] == 1)
      {
          UpperRightTopGaugeMenuItems[a].checked = true;
          currentUpperRightTopGaugeSensorNameText = sensorName[a];
          preferences.UpperRightTopGaugeGaugeDefaultSensorPref.value = selectedMenuItem;
          print("selecting " + sensorName[a] + " sensor");
          buildBottomGaugeSensorLabelText(sensorName[a]);
      } else {
          UpperRightTopGaugeMenuItems[a].checked = false;
      }
      // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
      // allows up to 16 sensors

      if (a ==1) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(1);}};
      if (a ==2) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(2);}};
      if (a ==3) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(3);}};
      if (a ==4) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(4);}};
      if (a ==5) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(5);}};
      if (a ==6) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(6);}};
      if (a ==7) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(7);}};
      if (a ==8) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(8);}};
      if (a ==9) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(9);}};
      if (a ==10) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(10);}};
      if (a ==11) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(11);}};
      if (a ==12) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(12);}};
      if (a ==13) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(13);}};
      if (a ==14) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(14);}};
      if (a ==15) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(15);}};
      if (a ==16) {UpperRightTopGaugeMenuItems[a].onSelect = function() {selectedUpperRightTopGaugeSensor[a] = 1; generateUpperRightTopGaugeSensorList(16);}};
     }
    UpperRightTopGaugeMenuItems[17] = new MenuItem();
    UpperRightTopGaugeMenuItems[17].title = "Secondary Upper Gauge Sensor List Shown above";
    UpperRightTopGaugeMenuItems[18] = new MenuItem();
    UpperRightTopGaugeMenuItems[18].title = "Select Fahrenheit for this gauge";
    UpperRightTopGaugeMenuItems[18].onSelect = selectFahrenheitUpperRightTopGauge;
    //set the context menu for the thermometer background
    UpperRightTopGaugeGauge.contextMenuItems = UpperRightTopGaugeMenuItems;
    samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================

//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateLowerRightGaugeSensorList(selectedMenuItem) {
    print("selecting sensor" + selectedMenuItem + " for the lower 1 Right gauge" );
    // clear the previous sensor, ensure none selected
    for (var a = 1; a <= noofsensors; a++)
    {
         if (a != selectedMenuItem) {selectedLowerRightGaugeSensor[a] = 0;};
    }
    selectedLowerRightGaugeSensor[selectedMenuItem] = 1;
    currentLowerRightGaugeSensor = selectedMenuItem;
    SensorTingTimer.ticking = true; // set a ting for the sensor

    //loop through the sensor names adding each into the menu array changing the menu item
    for (var a = 1; a <= noofsensors; a++)
    {
      LowerRightMenuItems[a] = new MenuItem();
      // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
      // if windows XP then display the actual sensor names from the config files
      LowerRightMenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
      //enable all menu items
      LowerRightMenuItems[a].enabled = true;
      //if this is the selected sensor then change the image &c
      if (selectedLowerRightGaugeSensor[a] == 1)
      {
          LowerRightMenuItems[a].checked = true;
          currentLowerRightGaugeSensorNameText = sensorName[a];
          preferences.LowerRightGaugeDefaultSensorPref.value = selectedMenuItem;
          //if windows XP then get the associated image and display it as the selection is made
                print("selecting " + sensorName[a] + " sensor");
                buildOnScreenLowerRightGaugeSensorNames(sensorName[a]);
                //buildLowerRightScribeHeadNames(sensorName[a]);
      }
      else
      {
          LowerRightMenuItems[a].checked = false;
      }
      // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
      // allows up to 16 sensors

      if (a ==1) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(1);}};
      if (a ==2) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(2);}};
      if (a ==3) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(3);}};
      if (a ==4) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(4);}};
      if (a ==5) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(5);}};
      if (a ==6) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(6);}};
      if (a ==7) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(7);}};
      if (a ==8) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(8);}};
      if (a ==9) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(9);}};
      if (a ==10) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(10);}};
      if (a ==11) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(11);}};
      if (a ==12) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(12);}};
      if (a ==13) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(13);}};
      if (a ==14) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(14);}};
      if (a ==15) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(15);}};
      if (a ==16) {LowerRightMenuItems[a].onSelect = function() {selectedLowerRightGaugeSensor[a] = 1; generateLowerRightGaugeSensorList(16);}};
     }
     LowerRightMenuItems[17] = new MenuItem();
    LowerRightMenuItems[17].title = "Lower Primary Gauge Sensor List Shown above";
    LowerRightMenuItems[18] = new MenuItem();
    LowerRightMenuItems[18].title = "Select Fahrenheit for this gauge";
    LowerRightMenuItems[18].onSelect = selectFahrenheitLowerRight;
     //set the context menu for the thermometer background
     LowerRightGauge.contextMenuItems = LowerRightMenuItems;
     samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================

//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when a menu item is selected.
//=================================================================================================
function generateLowerLeftGaugeSensorList(selectedMenuItem) {
            print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" );
            print("selecting sensor" + selectedMenuItem + " for the LowerLeft Left gauge" );
            
            // clear the previous sensor, ensure none selected
            for (var a = 1; a<= noofsensors; a++)
            {
                if (a != selectedMenuItem) {selectedLowerLeftGaugeSensor[a] = 0;};
            }
            selectedLowerLeftGaugeSensor[selectedMenuItem] = 1;
            currentLowerLeftThermometerSensor = selectedMenuItem;
            SensorTingTimer.ticking = true; // set a ting for the sensor

            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a = 1;  a <= noofsensors; a++)
            {
              LowerLeftMenuItems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              LowerLeftMenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              LowerLeftMenuItems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedLowerLeftGaugeSensor[a] == 1)
              {
                LowerLeftMenuItems[a].checked = true;
                currentLowerLeftThermometerSensorNameText = sensorName[a];
                preferences.LowerLeftGaugeDefaultSensorPref.value = selectedMenuItem;
                print("selecting " + sensorName[a] + " sensor");
                buildOnScreenLowerLeftThermometerSensorNames(sensorName[a]);
              }
              else
              {
                  LowerLeftMenuItems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              // calls itself recursively
              if (a ==1) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(1);}};
              if (a ==2) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(2);}};
              if (a ==3) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(3);}};
              if (a ==4) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(4);}};
              if (a ==5) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(5);}};
              if (a ==6) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(6);}};
              if (a ==7) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(7);}};
              if (a ==8) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(8);}};
              if (a ==9) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(9);}};
              if (a ==10) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(10);}};
              if (a ==11) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(11);}};
              if (a ==12) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(12);}};
              if (a ==13) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(13);}};
              if (a ==14) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(14);}};
              if (a ==15) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(15);}};
              if (a ==16) {LowerLeftMenuItems[a].onSelect = function() {selectedLowerLeftGaugeSensor[a] = 1; generateLowerLeftGaugeSensorList(16);}};
            
            }
            LowerLeftMenuItems[17] = new MenuItem();
            LowerLeftMenuItems[17].title = "Lower Secondary Gauge Sensor List Shown above";
            LowerLeftMenuItems[18] = new MenuItem();
            LowerLeftMenuItems[18].title = "Select Fahrenheit for this gauge";
            LowerLeftMenuItems[18].onSelect = selectFahrenheitLowerLeft;
             //set the context menu for the thermometer background
             LowerLeftGauge.contextMenuItems = LowerLeftMenuItems;
             samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================

//=======================================================================
// function to horizontalAdjust the sliders according to the stored voffset values
//=======================================================================
function adjustSliderVoffset()
{
   if (preferences.hotSliderRightValuePref.value != 0)
   {
     hotSliderRight.voffset = (preferences.hotSliderRightValuePref.value )* thermometerScale;
     righthottext.voffset = (hotSliderRight.voffset-4);
   }
   else
   {
     preferences.hotSliderRightValuePref.value = 170;
     hotSliderRight.voffset = 170;
   }
   if (preferences.hotSliderLeftValuePref.value != 0)
   {
     hotSliderLeft.voffset = (preferences.hotSliderLeftValuePref.value)* thermometerScale ;
     lefthottext.voffset = (hotSliderLeft.voffset-5)* thermometerScale;
   }
   else
   {
     preferences.hotSliderLeftValuePref.value =170;
     hotSliderLeft.voffset =170;
   }

   if (preferences.warmSliderLeftValuePref.value != 0)
   {
     warmSliderLeft.voffset = (preferences.warmSliderLeftValuePref.value)* thermometerScale ;
     leftwarmtext.voffset = (warmSliderLeft.voffset-5)* thermometerScale;
   }
   else
   {
     preferences.warmSliderLeftValuePref.value=200;
     warmSliderLeft.voffset =200;
   }


   if (preferences.warmSliderRightValuePref.value != 0)
   {
     warmSliderRight.voffset = (preferences.warmSliderRightValuePref.value)* thermometerScale ;
     rightwarmtext.voffset = (warmSliderRight.voffset-5)* thermometerScale;
   }
   else
   {
     preferences.warmSliderRightValuePref.value=210;
     warmSliderRight.voffset = 210;
   }

     hotSliderRightvoffsetDefault = hotSliderRight.voffset;
     hotSliderLeftvoffsetDefault = hotSliderLeft.voffset;
     warmSliderLeftvoffsetDefault = warmSliderLeft.voffset;
     warmSliderRightvoffsetDefault = warmSliderRight.voffset;


     righthottextvoffsetDefault = righthottext.voffset;
     lefthottextvoffsetDefault = lefthottext.voffset;
     leftwarmtextvoffsetDefault = leftwarmtext.voffset;
     rightwarmtextvoffsetDefault = rightwarmtext.voffset;

     rightTemperatureMaxIndex.visible = true;
     leftTemperatureMaxIndex.visible = true;

     leftTemperatureMaxIndexvoffsetDefault = leftTemperatureMaxIndex.voffset;
     rightTemperatureMaxIndexvoffsetDefault = rightTemperatureMaxIndex.voffset;

}
//=====================
//End function
//=====================




//===========================================
// function to
//===========================================
function buildLeftThermometerSensorNameList(data) {

            print("selecting sensor name" + data + " for the left hand display" );
            selectedLeftThermometerSensorName[data] = 1;
            currentLeftThermometerSensorName = data;

            for (var a = 1;a<=13; a++)
            {
                 if (a != data) {selectedLeftThermometerSensorName[a] = 0;};
                 addLeftThermometerSensorname(a);
                 setLeftThermometerSensorImages(a);
            }

            //thermometerLeftThermometerSensorName.contextMenuItems = leftmenunameitems;
            thermometerLeft.contextMenuItems = leftmenunameitems;
}
//=====================
//End function
//=====================
//===========================================
// function to redraw Gauges
//===========================================
function RedrawUpperRightBottomGauge() {
    UpperRightBottomGaugePointer.rotation = UpperRightBottomGaugeTemperature* 2.75;
    //UpperRightBottomGauge.tooltip = "Current temperature " + upperTemperature + " celsius - Sensor name " + currentUpperSensorNameText;
    UpperRightBottomGauge.tooltip = currentUpperRightBottomGaugeSensorNameText + " temperature "+ UpperRightBottomGaugeTemperature  + " degrees celsius";
}
//=====================
//End function
//=====================

//===========================================
// function to redraw Gauges
//===========================================
function RedrawUpperRightTopGaugeGauge() {
    UpperRightTopGaugePointer.rotation = UpperRightTopGaugeTemperature * 2.75;
    UpperRightTopGaugeGauge.tooltip = currentUpperRightTopGaugeSensorNameText + " temperature "+ UpperRightTopGaugeTemperature  + " degrees celsius";
}
//=====================
//End function
//=====================

//===========================================
// function to redraw Gauges
//===========================================
function RedrawLowerRightGauge() {
    LowerRightPointer.rotation = LowerRightTemperature* 2.75;
    //LowerRightGauge.tooltip = "Current temperature " + LowerRightTemperature + " celsius - Sensor name " + currentLowerRightGaugeSensorNameText;
    LowerRightGauge.tooltip = currentLowerRightGaugeSensorNameText + " temperature "+ LowerRightTemperature  + " degrees celsius";
}
//=====================
//End function
//=====================

//===========================================
// function to redraw Gauges
//===========================================
function RedrawLowerLeftGauge() {
    LowerLeftPointer.rotation = LowerLeftTemperature* 2.75;
    //LowerLeftGauge.tooltip = "Current temperature " + LowerLeftTemperature + " celsius - Sensor name " + currentLowerLeftThermometerSensorNameText;
    LowerLeftGauge.tooltip = currentLowerLeftThermometerSensorNameText + " temperature "+ LowerLeftTemperature  + " degrees celsius";
}
//=====================
//End function
//=====================

//===========================================
// function to emit a puff
//===========================================
function puff(hoffset,voffset)
{
      if (preferences.soundsPref.value != "mute" ) {play(steamsound,false);};
      steam.hoffset= hoffset * thermometerScale;
      steam.voffset= voffset * thermometerScale;

      for (var a =50;a<=255; a++)
      {
              steam.opacity = a;
              sleep (1);
              a=a+2;
      }
      for (var a =50;a<=255; a++)
      {
              steam.opacity = 255-a;
              sleep (1);
              a=a+2;
      }
}
//=====================
//End function
//=====================

//===========================================
// function to fade in an object
//===========================================
function fadeIn(param,param1)
{
  print("param "+ param);
  if (preferences.fadePref.value == "enabled")
  {
      for (var a =50;a<=255; a++)
      {
              param.opacity = a;
              sleep (1);
              a=a+param1;
      }
  }
  else
  {
       param.opacity = 255;

  }
}
//=====================
//End function
//=====================

//===========================================
// function to fade out an object
//===========================================
function fadeOut(param,param1)
{
  if (preferences.fadePref.value == "enabled")
  {
      for (var a =50;a<=255; a++)
      {
              param.opacity = 255-a;
              sleep (1);
              a=a+param1;
      }
  }
  else
  {
       param.opacity = 0;

  }
}
//=====================
//End function
//=====================


//===========================================
// function to create a new canvas
//===========================================
function newCanvas(hOffset, vOffset, width, height, zOrder) {
    var o = new Canvas();
    o.hOffset = hOffset;
    o.vOffset = vOffset;
    o.width = width;
    o.height = height;
    o.zOrder = zOrder;
    return o;
}
//=====================
//End function
//=====================

//===========================================
// function to extract each sensor character
//===========================================
function buildRightThermometerSensorLabelText(a) {
	   var cc = "";
	   var lettercnt = 0;
           thermometerRightThermometerSensorChar1.src = "Resources/questionmarktext.png";
           thermometerRightThermometerSensorChar2.src =  "Resources/questionmarktext.png";
           thermometerRightThermometerSensorChar3.src =  "Resources/questionmarktext.png";
           thermometerRightThermometerSensorChar4.src =  "Resources/questionmarktext.png";
           thermometerRightThermometerSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {thermometerRightThermometerSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {thermometerRightThermometerSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {thermometerRightThermometerSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {thermometerRightThermometerSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {thermometerRightThermometerSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("thermometerRightThermometerSensorChar5.src  "+thermometerRightThermometerSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================

//===========================================
// function to extract each sensor character
//===========================================
function buildLeftGaugeSensorLabelText(a) {
	   var cc = "";
	   var lettercnt = 0;
           thermometerLeftThermometerSensorChar1.src = "Resources/questionmarktext.png";
           thermometerLeftThermometerSensorChar2.src =  "Resources/questionmarktext.png";
           thermometerLeftThermometerSensorChar3.src =  "Resources/questionmarktext.png";
           thermometerLeftThermometerSensorChar4.src =  "Resources/questionmarktext.png";
           thermometerLeftThermometerSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {thermometerLeftThermometerSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {thermometerLeftThermometerSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {thermometerLeftThermometerSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {thermometerLeftThermometerSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {thermometerLeftThermometerSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("thermometerLeftThermometerSensorChar5.src  "+thermometerLeftThermometerSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildTopGaugeSensorLabelText(a) {
	   var cc = "";
	   var lettercnt = 0;
           UpperRightBottomGaugeSensorChar1.src = "Resources/questionmarktext.png";
           UpperRightBottomGaugeSensorChar2.src =  "Resources/questionmarktext.png";
           UpperRightBottomGaugeSensorChar3.src =  "Resources/questionmarktext.png";
           UpperRightBottomGaugeSensorChar4.src =  "Resources/questionmarktext.png";
           UpperRightBottomGaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {UpperRightBottomGaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {UpperRightBottomGaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {UpperRightBottomGaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {UpperRightBottomGaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {UpperRightBottomGaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("UpperRightBottomGaugeSensorChar5.src  "+UpperRightBottomGaugeSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildBottomGaugeSensorLabelText(a) {
   var cc = "";
   var lettercnt = 0;
    UpperRightTopGaugeGaugeSensorChar1.src = "Resources/questionmarktext.png";
    UpperRightTopGaugeGaugeSensorChar2.src =  "Resources/questionmarktext.png";
    UpperRightTopGaugeGaugeSensorChar3.src =  "Resources/questionmarktext.png";
    UpperRightTopGaugeGaugeSensorChar4.src =  "Resources/questionmarktext.png";
    UpperRightTopGaugeGaugeSensorChar5.src =  "Resources/questionmarktext.png";
    for (var loopcount=0; loopcount < 8; loopcount ++)
   {
        //if (lettercnt <= 5 ) {return};
        cc = a.substring(loopcount -1,loopcount);
        if (lettercnt <= 5 && cc != "" && cc != " ") {
          lettercnt = lettercnt +  1;
          if (lettercnt == 1) {UpperRightTopGaugeGaugeSensorChar1.src = "Resources/"+cc+".png"; }
          if (lettercnt == 2) {UpperRightTopGaugeGaugeSensorChar2.src = "Resources/"+cc+".png"; }
          if (lettercnt == 3) {UpperRightTopGaugeGaugeSensorChar3.src = "Resources/"+cc+".png"; }
          if (lettercnt == 4) {UpperRightTopGaugeGaugeSensorChar4.src = "Resources/"+cc+".png"; }
          if (lettercnt == 5) {UpperRightTopGaugeGaugeSensorChar5.src = "Resources/"+cc+".png"; }
          //print  ("UpperRightTopGaugeGaugeSensorChar5.src  "+UpperRightBottomGaugeSensorChar5.src );
        }
   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenLowerRightGaugeSensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           LowerRightGaugeSensorChar1.src = "Resources/questionmarktext.png";
           LowerRightGaugeSensorChar2.src =  "Resources/questionmarktext.png";
           LowerRightGaugeSensorChar3.src =  "Resources/questionmarktext.png";
           LowerRightGaugeSensorChar4.src =  "Resources/questionmarktext.png";
           LowerRightGaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {LowerRightGaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {LowerRightGaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {LowerRightGaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {LowerRightGaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {LowerRightGaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("LowerRightGaugeSensorChar5.src  "+LowerRightGaugeSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================

//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenLowerLeftThermometerSensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           LowerLeftGaugeSensorChar1.src = "Resources/questionmarktext.png";
           LowerLeftGaugeSensorChar2.src =  "Resources/questionmarktext.png";
           LowerLeftGaugeSensorChar3.src =  "Resources/questionmarktext.png";
           LowerLeftGaugeSensorChar4.src =  "Resources/questionmarktext.png";
           LowerLeftGaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {LowerLeftGaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {LowerLeftGaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {LowerLeftGaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {LowerLeftGaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {LowerLeftGaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("LowerLeftGaugeSensorChar5.src  "+LowerLeftGaugeSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================

//===========================================
// function to extract each sensor character
//===========================================
function buildscribeHeadNoWireTwoNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           //leftScribeHead.src = "Resources/scribeHeadBlank.png";
           for (var loopcount=0; loopcount < 2; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 1 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {
                    //leftScribeHead.src = "Resources/scribeHead"+cc+".png";
                    leftScribeText.data = cc;
                    leftScribeTextShadow.data = cc;
                    leftScribeText.visible = true;
                    leftScribeTextShadow.visible = true;
                  }
                  // extract the code of the first char. assign it a hue, convert the hue to RGB
                  nCharCode=cc.charCodeAt(0) - 64;
                  leftTraceHue = 360 / nCharCode;
                  hsb[0] =leftTraceHue;
                  hsb[1] =100;
                  hsb[2] =100;
                  leftScribeRgbCol = hsb2rgb(hsb);
                  leftScribeText.color="rgb("+leftScribeRgbCol+")";
                }
	   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildRightScribeHeadNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           rightScribeHead.src = "Resources/scribeHeadBlank.png";
           for (var loopcount=0; loopcount < 2; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 1 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {
                    //rightScribeHead.src = "Resources/scribeHead"+cc+".png";
                    rightScribeText.data = cc;
                    rightScribeTextShadow.data = cc;
                    rightScribeText.visible = true;
                    rightScribeTextShadow.visible = true;
                  }
                  // extract the code of the first char. assign it a hue, convert the hue to RGB
                  nCharCode=cc.charCodeAt(0) - 64;
                  rightTraceHue = 360 / nCharCode;
                  hsb[0] =rightTraceHue;
                  hsb[1] =100;
                  hsb[2] =100;
                  rightScribeRgbCol = hsb2rgb(hsb);
                  rightScribeText.color="rgb("+rightScribeRgbCol+")";
                }
	   }
}
//=====================
//End function
//=====================
//======================================================================================
// Function to wobble the pointer when clicked upon
//======================================================================================
function wobblepointer2() {
      var scribeVerticalPos = rightScribeHead.voffset - ( 50 * thermometerScale );
      if (scribeVerticalPos <= paper.voffset) {scribeVerticalPos = paper.voffset}; // does it go off the top of the paper?

      /*plotLeftHeight =  ( leftTemperature1 + 15) * thermometerScale;
      leftVerticalPlot1 =   (288* thermometerScale) - plotLeftHeight;

      plotLeftHeight =  ( leftTemperature2 + 15) * thermometerScale;
      leftVerticalPlot2 =   (288* thermometerScale) - plotLeftHeight;
      */
      rightTempArray[tempStorageArrayPosition] = rightTemperature + ( 50 * thermometerScale );

      //chart2[arraypointer ] =  scribeVerticalPos; //assign the vertical position to the array.
      rightScribeHead.voffset = scribeVerticalPos - ( 2 * thermometerScale );    // place the scribe head
      rightScribeHeadShadow.voffset = scribeVerticalPos-( 2 * thermometerScale );    // place the scribe head
      longWire.voffset = scribeVerticalPos;       // place the wire too
      rightScribeText.voffset = scribeVerticalPos+( 11 * thermometerScale );
      rightScribeTextShadow.voffset = scribeVerticalPos+( 11 * thermometerScale );

      //redMercuryRight.voffset = redMercuryRight.voffset - 50; //this is what actually causes the scribe to move
      drawTemperatures();
      //redrawWholeScale();    //scale now shown
      //moveLines();      // an extra move is required
      samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly

}
//=====================
//End function
//=====================

//======================================================================================
// Function to wobble the pointer when clicked upon
//======================================================================================
function wobblepointer1() {
      var scribeVerticalPos = leftScribeHead.voffset -( 50 * thermometerScale );
      if (scribeVerticalPos <= paper.voffset) {scribeVerticalPos = paper.voffset}; // does it go off the top of the paper?

      leftTempArray[tempStorageArrayPosition] = leftTemperature +( 50 * thermometerScale );
      
      leftScribeHead.voffset = scribeVerticalPos-( 2 * thermometerScale );    // place the scribe head
      leftScribeHeadShadow.voffset = scribeVerticalPos-( 2 * thermometerScale );    // place the scribe head
      shortWire.voffset = scribeVerticalPos;       // place the wire too
      leftScribeText.voffset = scribeVerticalPos+( 11 * thermometerScale );
      leftScribeTextShadow.voffset = scribeVerticalPos+( 11 * thermometerScale );

      //redMercuryRight.voffset = redMercuryRight.voffset - 50; //this is what actually causes the scribe to move
      drawTemperatures();
      //redrawWholeScale();    //scale now shown
      //moveLines();      // an extra move is required
      samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================

//======================================================================================
// Function to determine upper gauge 2 visibility  - the lower gauge next to the tap
//======================================================================================
function setUpperRightTopGaugeGaugeVisibility() {
     if (preferences.UpperRightTopGaugeGaugeShownPref.value == "enabled" && noofsensors >= 4 )
     {
        UpperRightTopGaugeGaugeLabel.visible = true;
        UpperRightTopGaugeGauge.visible = true;
        UpperRightTopGaugePointer.visible = true;
        UpperRightTopGaugeGaugeSensorChar1.visible = true;
        UpperRightTopGaugeGaugeSensorChar2.visible = true;
        UpperRightTopGaugeGaugeSensorChar3.visible = true;
        UpperRightTopGaugeGaugeSensorChar4.visible = true;
        UpperRightTopGaugeGaugeSensorChar5.visible = true;
     }
     else
     {
        UpperRightTopGaugeGaugeLabel.visible = false;
        UpperRightTopGaugeGauge.visible = false;
        UpperRightTopGaugePointer.visible = false;
        UpperRightTopGaugeGaugeSensorChar1.visible = false;
        UpperRightTopGaugeGaugeSensorChar2.visible = false;
        UpperRightTopGaugeGaugeSensorChar3.visible = false;
        UpperRightTopGaugeGaugeSensorChar4.visible = false;
        UpperRightTopGaugeGaugeSensorChar5.visible = false;
     }
}
//=====================
//End function
//=====================

//======================================================================================
// Function to determine lower gauge visibility, the one bottom left
//======================================================================================
function setLowerRightGaugeVisibility() {
     if (noofsensors >= 5)
     {
        LowerRightGauge.visible = true;
        LowerRightPointer.visible = true;
        LowerRightGaugeSensorChar1.visible = true;
        LowerRightGaugeSensorChar2.visible = true;
        LowerRightGaugeSensorChar3.visible = true;
        LowerRightGaugeSensorChar4.visible = true;
        LowerRightGaugeSensorChar5.visible = true;
     }
     else
     {
        LowerRightGauge.visible = false;
        LowerRightPointer.visible = false;
        LowerRightGaugeSensorChar1.visible = false;
        LowerRightGaugeSensorChar2.visible = false;
        LowerRightGaugeSensorChar3.visible = false;
        LowerRightGaugeSensorChar4.visible = false;
        LowerRightGaugeSensorChar5.visible = false;
     }
}
//=====================
//End function
//=====================


//======================================================================================
// Function to determine lower gauge visibility, the one bottom extreme left
//======================================================================================
function setLowerLeftGaugeVisibility() {
     if (preferences.LowerLeftGaugeShownPref.value == "enabled" && noofsensors >= 6)
     {
        LowerLeftGauge.visible = true;
        LowerLeftPointer.visible = true;
        LowerLeftGaugeSensorChar1.visible = true;
        LowerLeftGaugeSensorChar2.visible = true;
        LowerLeftGaugeSensorChar3.visible = true;
        LowerLeftGaugeSensorChar4.visible = true;
        LowerLeftGaugeSensorChar5.visible = true;
     }
     else
     {
        LowerLeftGauge.visible = false;
        LowerLeftPointer.visible = false;
        LowerLeftGaugeSensorChar1.visible = false;
        LowerLeftGaugeSensorChar2.visible = false;
        LowerLeftGaugeSensorChar3.visible = false;
        LowerLeftGaugeSensorChar4.visible = false;
        LowerLeftGaugeSensorChar5.visible = false;
     }
}
//=====================
//End function
//=====================


//======================================================================================
// Function to move the stretcher
//======================================================================================
function moveStretcher ()        {
        if (crank.src!='Resources/crank-down.png')
        {
          var moves = new MoveAnimation( stretcher, stretcher.hoffset+(100* thermometerScale), stretcher.voffset, 550, animator.kEaseOut, moveStretcherBack );
          animator.start( moves );
          if (preferences.soundsPref.value != "mute" ) {play(rollerblinddown);};
        }
}
//=====================
//End function
//=====================

//======================================================================================
// Function to move the stretcher
//======================================================================================
function moveStretcherBack ()        {
        //sometimes the various animations plase the stretcher in the wrong start place for returning
        //this next line makes sure it is in the right place before the animation starts
        stretcher.hoffset = (186* thermometerScale);
        var moves = new MoveAnimation( stretcher, stretcher.hoffset-(100* thermometerScale), stretcher.voffset, 550, animator.kEaseOut );
        animator.start( moves );
        if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
        wobblepointer1();
        wobblepointer2();

}
//=====================
//End function
//=====================

//======================================================================================
// Function to lock the widget
//======================================================================================
function lockWidget ()        {

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
	if (mainWindow.locked) {
                screw1.opacity = 1;
                mainWindow.locked = false;

                // check if the widget has a lock for the screen type.
                if (aspectRatio == "landscape") {
		   preferences.widgetLockLandscapeModePref.value = 0;
                }
                // check if the widget has a lock for the screen type.
                if (aspectRatio == "portrait") {
		   preferences.widgetLockPortraitModePref.value = 0;
                }
                screw1.tooltip="click me to lock the widget in place";
	        screw2.tooltip="click me to lock the widget in place";
	        paper.tooltip="";
	        woodSurround.tooltip="";
	} else {
                 screw1.opacity = 255;
                 mainWindow.locked = true;

                // check if the widget has a lock for the screen type.
                if (aspectRatio == "landscape") {
		   preferences.widgetLockLandscapeModePref.value = 1;
                   preferences.landscapeHoffsetPref.value = mainWindow.hoffset ;
                   preferences.landscapeVoffsetPref.value = mainWindow.voffset ;
                }
                // check if the widget has a lock for the screen type.
                if (aspectRatio == "portrait") {
		   preferences.widgetLockPortraitModePref.value = 1;
                   preferences.portraitHoffsetPref.value = mainWindow.hoffset ;
                   preferences.portraitVoffsetPref.value = mainWindow.voffset ;
                }
	         screw1.tooltip="click me to unlock";
	         screw2.tooltip="click me to unlock";
	         paper.tooltip=woodSurround.tooltip="The widget is currently locked in place - click on the screw to release";
	         
        }
        if (preferences.soundsPref.value != "mute" ) {play(lock, false);};
}
//=====================
//End function
//=====================

//======================================================================================
// Function to lock the widget on startup
//======================================================================================
function checkLockWidget ()        {

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
        print("aspectRatio "+aspectRatio);
        print("preferences.widgetLockLandscapeModePref.value "+preferences.widgetLockLandscapeModePref.value);
        print("preferences.widgetLockPortraitModePref.value "+preferences.widgetLockPortraitModePref.value);
        // check if the widget has a lock for the screen type.
        if (aspectRatio == "landscape" ) {
           if (preferences.widgetLockLandscapeModePref.value == 0) {
                screw1.opacity = 1;
                mainWindow.locked = false;
	        // this does not work yet
	        screw1.tooltip="click me to lock the widget in place";
	        screw2.tooltip="click me to lock the widget in place";
                 return;
           } else {
                 print("checkLockWidget locking in landscape");
                 screw1.opacity = 255;
                 mainWindow.locked = true;
                // check if the widget has a lock for the screen type.
	         screw1.tooltip="click me to unlock";
	         screw2.tooltip="click me to unlock";
                 //if (preferences.soundsPref.value != "mute" ) {play(lock, false);};
          }
        }
        // check if the widget has a lock for the screen type.
        if (aspectRatio == "portrait" ) {
          if (preferences.widgetLockPortraitModePref.value == 0) {
                screw1.opacity = 1;
                mainWindow.locked = false;
	        // this does not work yet
	        screw1.tooltip="click me to lock the widget in place";
	        screw2.tooltip="click me to lock the widget in place";
	  } else {
                 print("checkLockWidget locking in portrait");
                 screw1.opacity = 255;
                 mainWindow.locked = true;
                // check if the widget has a lock for the screen type.
	         screw1.tooltip="click me to unlock";
	         screw2.tooltip="click me to unlock";
                 //if (preferences.soundsPref.value != "mute" ) {play(lock, false);};
          }               
        }
}
//=====================
//End function
//=====================


//======================================================================================
// Function to convert HSB colours to RGB
//======================================================================================
function hsb2rgb(hsb) {
     var red, grn, blu, i, f, p, q, t;
     hsb[0]%=360;
     if(hsb[2]==0) {return(new Array(0,0,0));}
     hsb[1]/=100;
     hsb[2]/=100;
     hsb[0]/=60;
     i = Math.floor(hsb[0]);
     f = hsb[0]-i;
     p = hsb[2]*(1-hsb[1]);
     q = hsb[2]*(1-(hsb[1]*f));
     t = hsb[2]*(1-(hsb[1]*(1-f)));
     if (i==0) {red=hsb[2]; grn=t; blu=p;}
     else if (i==1) {red=q; grn=hsb[2]; blu=p;}
     else if (i==2) {red=p; grn=hsb[2]; blu=t;}
     else if (i==3) {red=p; grn=q; blu=hsb[2];}
     else if (i==4) {red=t; grn=p; blu=hsb[2];}
     else if (i==5) {red=hsb[2]; grn=p; blu=q;}
     red = Math.floor(red*255);
     grn = Math.floor(grn*255);
     blu = Math.floor(blu*255);
     return (new Array(red,grn,blu));
}
//=====================
//End function
//=====================

//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitUpperRightBottomGauge() {
   print ("HELP!");
   if ( UpperRightBottomGauge.src == "Resources/gauge-fahrenheit.png" ) {
     UpperRightBottomGauge.src = "Resources/gauge-celsius.png";
     preferences.upperGauge1ScalePref = "Celsius";
     UpperRightBottomGaugeMenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     UpperRightBottomGauge.src = "Resources/gauge-fahrenheit.png";
     preferences.upperGauge1ScalePref = "Fahrenheit";
     UpperRightBottomGaugeMenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================

//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitUpperRightTopGauge() {
   print ("HELP!");
   if ( UpperRightTopGaugeGauge.src == "Resources/gauge-fahrenheit.png" ) {
     UpperRightTopGaugeGauge.src = "Resources/gauge-celsius.png";
     preferences.upperGauge2ScalePref = "Celsius";
     UpperRightTopGaugeMenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     UpperRightTopGaugeGauge.src = "Resources/gauge-fahrenheit.png";
     preferences.upperGauge2ScalePref = "Fahrenheit";
     UpperRightTopGaugeMenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================


//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitLowerRight() {
   if ( LowerRightGauge.src == "Resources/cpu-gauge-fahrenheit.png" ) {
     LowerRightGauge.src = "Resources/cpu-gauge-celsius.png";
     preferences.lowerGauge1ScalePref = "Celsius";
     LowerRightMenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     LowerRightGauge.src = "Resources/cpu-gauge-fahrenheit.png";
     preferences.lowerGauge1ScalePref = "Fahrenheit";
     LowerRightMenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================


//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitLowerLeft() {
   if ( LowerLeftGauge.src == "Resources/cpu-gauge2-fahrenheit.png" ) {
     LowerLeftGauge.src = "Resources/cpu-gauge2-celsius.png";
     preferences.lowerGauge2ScalePref = "Celsius";
     LowerLeftMenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     LowerLeftGauge.src = "Resources/cpu-gauge2-fahrenheit.png";
     preferences.lowerGauge2ScalePref = "Fahrenheit";
     LowerLeftMenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================




//======================================================================================
// Function 
//======================================================================================
hotSliderRight.onmousedown = function () {
    hotSliderRightdown();
}
//=====================
//End function
//=====================

 
 //======================================================================================
 // Function 
 //======================================================================================
 hotSliderRight.onmousedown = function () {
    hotSliderRightdrag();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
 hotSliderRight.onmousedown = function () {
    hotSliderRightup();
 }
 //=====================
 //End function
 //=====================



//======================================================================================
// Function 
//======================================================================================
hotSliderLeft.onmousedown = function () {
    hotSliderLeftdown();
}
//=====================
//End function
//=====================

 
 //======================================================================================
 // Function 
 //======================================================================================
 hotSliderLeft.onmousedown = function () {
    hotSliderLeftdrag();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
 hotSliderLeft.onmousedown = function () {
    hotSliderLeftup();
 }
 //=====================
 //End function
 //=====================








//======================================================================================
// Function 
//======================================================================================
warmSliderRight.onmousedown = function () {
    warmSliderRightdown();
}
//=====================
//End function
//=====================

 
 //======================================================================================
 // Function 
 //======================================================================================
 warmSliderRight.onmousedown = function () {
    warmSliderRightdrag();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
 warmSliderRight.onmousedown = function () {
    warmSliderRightup();
 }
 //=====================
 //End function 
 //=====================




//======================================================================================
// Function 
//======================================================================================
warmSliderLeft.onmousedown = function () {
    warmSliderLeftdown();
}
//=====================
//End function
//=====================

 
 //======================================================================================
 // Function 
 //======================================================================================
 warmSliderLeft.onmousedown = function () {
    warmSliderLeftdrag();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
 warmSliderLeft.onmousedown = function () {
    warmSliderLeftup();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
cpuPlaque.onMouseDown = function () {
    popupplaque.visible = true;
    if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);};
    }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
thermometerLeft.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(thermometerLeft.contextMenuItems, (155 * thermometerScale), 0);
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
crank.onMouseDown = function () {
    crankhandle();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
sToggle.onMouseDown = function () {
    sToggle.hoffset=373;
    if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
    gettingSpeedfan.visible=true;
    sleep(7500);
    openURL("http://www.almico.com/sfdownload.php");
    sToggle.hoffset=378;
    gettingSpeedfan.visible=false;
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
mToggle.onMouseDown = function () {
    mToggle.hoffset=373;
    //this is the only sound that can't be muted
    play(clunk, false);
    if (preferences.soundsPref.value == "mute" )
    {
       preferences.soundsPref.value = "enable";
    }
    else
    {
       preferences.soundsPref.value = "mute";
    }
    sleep(300);
    mToggle.hoffset=378;
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
rToggle.onMouseDown = function () {
    rToggle.hoffset=373;
    if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
    sleep(300);
    if (speedfanflag == "installed")
    {
     // kill speedfan, kill it first, we don't want two processes running...

        //KillSpeedfanProcess();

        // if windows XP or earlier then set speedfan to minimise
        // later versions of Windows will not allow access to the program files folders

        if (getWindowsVersion() == "5.2" || getWindowsVersion() == "5.1" || getWindowsVersion() == "5.0")
        {
           //enableSpeedfanLogging();
        }
        else
        {
           log("Automatically minimising Speedfan only works in windows XP or older");
          log("so you'll need to minimise speedfan yourself on newer versions of windows");
        }

        // restart speedfan after change to minimise it on startup

        //StartSpeedfanProcess();
     }

    rToggle.hoffset=378;
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
thermometerRight.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
        popupMenu(thermometerRight.contextMenuItems, (312 * thermometerScale), 0);
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
lefthottext.onMouseDown = function () {
    hotSliderLeftdown();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
lefthottext.onMouseDrag = function () {
    hotSliderLeftdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
lefthottext.onMouseUp = function () {
    hotSliderLeftup();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
leftwarmtext.onMouseDown = function () {
    warmSliderLeftdown();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
leftwarmtext.onMouseDrag = function () {
    warmSliderLeftdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
leftwarmtext.onMouseUp = function () {
    warmSliderLeftup();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
rightwarmtext.onMouseDown = function () {
    warmSliderRightdown();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
lefthottext.onMouseDrag = function () {
    warmSliderRightdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
lefthottext.onMouseUp = function () {
    warmSliderRightup();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
rightTemperatureMaxIndex.onMouseDown = function () {
    rightTemperatureMaxIndexdown();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
rightTemperatureMaxIndex.onMouseDrag = function () {
    rightTemperatureMaxIndexdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
rightTemperatureMaxIndex.onMouseUp = function () {
        rightTemperatureMaxIndexup();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
leftTemperatureMaxIndex.onMouseDown = function () {
    leftTemperatureMaxIndexdown();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                       
leftTemperatureMaxIndex.onMouseDrag = function () {
    leftTemperatureMaxIndexdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
leftTemperatureMaxIndex.onMouseUp = function () {
    leftTemperatureMaxIndexup();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
bellSet.onMouseDown = function () {
    bellding();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
hToggle.onMouseDown = function () {
    helpdropdownmove();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                       
screw1.onMouseDown = function () {
    lockWidget();
}     
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                
screw2 .onMouseDown = function () {
    lockWidget();
}          
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
clapper.onMouseDown = function () {
    togglechimes();
}    
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
ClapperRotated.onMouseDown = function () {
    togglechimes();
}                                                            
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
ovalSlider.onMouseDown = function () {
    ovalSliderdown();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
ovalSlider.onMouseDrag = function () {
    ovalSliderdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
ovalSlider.onMouseUp = function () {
    ovalSliderup();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                        
leftScribeHead.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    wobblepointer1();
}
                                                             
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                                                             
rightScribeHead.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    wobblepointer2();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                                                                            
scaleswitchright.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(newclunk,false);};
    if(scaleswitchright.src == "Resources/scaleswitch.png"){
         scaleswitchright.src = "Resources/scaleswitchcent.png";
         rightscale.src = "Resources/centigradescale.png";
         rightscale.width = 21;
    }
    else
    {
         scaleswitchright.src = "Resources/scaleswitch.png";
         rightscale.src = "Resources/fahrenheitscale.png";
         rightscale.width = 18;
    }
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
scaleswitchleft.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(newclunk,false);};
    if(scaleswitchleft.src == "Resources/scaleswitch.png"){
         scaleswitchleft.src = "Resources/scaleswitchcent.png";
         leftscale.src = "Resources/centigradescale.png";
         leftscale.width = 21;
    }
    else
    {
         scaleswitchleft.src = "Resources/scaleswitch.png";
         leftscale.src = "Resources/fahrenheitscale.png";
         leftscale.width = 18;
    }
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
popupplaque.onMouseDown = function () {
    popupplaque.visible = false;
    if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);};
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
waitmessage.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
speedfanNotFound.onMouseDown = function () {
    speedfanNotFound.visible = false;
    if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);};
    openURL("http://www.almico.com/sfdownload.php");
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                                                                   
LowerRightGauge.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(LowerRightGauge.contextMenuItems, (115 * thermometerScale), (228 * thermometerScale));
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================

righthottext.onMouseDown = function () {
    hotSliderRightdown();
 }
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
righthottext.onMouseDrag = function () {
    hotSliderRightdrag();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
righthottext.onMouseUp = function () {
    hotSliderRightup();
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
UpperRightBottomGauge.onMouseDown = function () {
if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(UpperRightBottomGauge.contextMenuItems, (375 * thermometerScale), 0);
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
                                                                                                                                                                       
UpperRightTopGaugeGaugeLabel.onMouseDown = function () {
if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(UpperRightTopGaugeGauge.contextMenuItems, (375 * thermometerScale), 50);
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
UpperRightTopGaugeGauge.onMouseDown = function () {
if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(UpperRightTopGaugeGauge.contextMenuItems, (375 * thermometerScale), 50);
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
LowerLeftGauge.onMouseDown = function () {
if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(LowerLeftGauge.contextMenuItems, (5 * thermometerScale), (228 * thermometerScale));
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
stretcher.onMouseDown = function () 
{
    if (preferences.resizingValvePref.value == "disabled")
    {
           moveStretcher();
    } else {
    
    }
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
function revealDevelopmentOptions () {
    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
        preferences.imageEditPref.hidden=false;
        preferences.imageCmdPref.hidden=false;
    } else {
        preferences.imageEditPref.hidden=true;		
        preferences.imageCmdPref.hidden=true;
    }		
}                                                                                                                                                                                                               

 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
     // rotate the busy sand timer      
function rotateBusyTimer () {     
    busy.hoffset = (225 * thermometerScale)
    busy.voffset = (190 * thermometerScale)
    busyBlur.hoffset = (225 * thermometerScale)
    busyBlur.voffset = (190 * thermometerScale)
    busyTimer.ticking = true;
}
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
//sound the bell alarm here
function soundBellAlarm () {  
    if (preferences.chimesPref.value == "chime" )
    {
          clapper.visible = true;
          ClapperRotated.visible = false;
    }
    else
    {
          clapper.visible = false;
          ClapperRotated.visible = true;
    }
}   
 //=====================
 //End function
 //=====================
 
 
 //======================================================================================
 // Function 
 //======================================================================================
// speedfan not found, blink the red lamps
function blinkRedIndicatorLamps() {
    if (speedfanflag !== "installed") {   
        speedfanindicatorred.visible = true;
        speedfanindicator.visible = false;
        speedfanindicatorlampTimer.ticking = true;
        speedfanflag = "unknown";
        preferences.SpeedfanLocation.value = "";
        busy.tooltip = "Cannot find Speedfan - click to find the binary"
        print ("setting tooltips");
    }     
}
 //=====================
 //End function
 //=====================
 
//=================================
// up
//=================================
    var busyTimer = new Timer();
    busyTimer.ticking = false;
    busyTimer.interval = .1;
//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
busyTimer.onTimerFired = function () {
    busy.visible = true;
    busyBlur.visible = true;
    busyCounter = busyCounter + 1 ;
    if (busyCounter >= 7) {busyCounter = 1};
    busy.src = "Resources/busy-F" + busyCounter + "-32x32x24.png";
};

//=====================
//End function
//=====================



//=================================
// 
//=================================
    var SensorTingTimer = new Timer();
    SensorTingTimer.ticking = false;
    SensorTingTimer.interval = .1;
//=================================
// timer ends
//=================================

//=================================
// timer
//=================================
SensorTingTimer.onTimerFired = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);play(newclunk, false);};
    if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);play(ting, false);};
    SensorTingTimer.ticking = false;
};
//=====================
//End function
//=====================



//=================================
//
//=================================
    var screenLocationTimer = new Timer();
    screenLocationTimer.ticking = true;
    screenLocationTimer.interval = .5;
//=================================
// timer ends
//=================================

//=================================
// timer 
//=================================
screenLocationTimer.onTimerFired = function () {
    preferences.hLocationPref.value = mainWindow.hoffset;
    preferences.vLocationPref.value = mainWindow.voffset;
     // calculate the current hlocation in % of the screen
     //store the current hlocation in % of the screen
     preferences.hLocationPercPref.value = (mainWindow.hoffset / screen.width)* 100;
     preferences.vLocationPercPref.value = (mainWindow.voffset / screen.height)* 100;
};
//=====================
//End function
//=====================



//=================================
// 
//=================================
    var FadeTimer = new Timer();
    FadeTimer.ticking = false;
    FadeTimer.interval = 1;
//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
FadeTimer.onTimerFired = function () {
    fadeOut(tskmgr,1);
    FadeTimer.ticking=false;
};
//=====================
//End function
//=====================





//=================================
// 
//=================================
    var Fade2Timer = new Timer();
    Fade2Timer.ticking = false;
    Fade2Timer.interval = 1;
//=================================
// timer ends
//=================================

//=================================
// timer to
//=================================
Fade2Timer.onTimerFired = function () {
    fadeOut(perfmon,1);
    Fade2Timer.ticking=false;
};
//=====================
//End function
//=====================




//=================================
// 
//=================================
    var alarmTimer = new Timer();
    alarmTimer.ticking = false;
    alarmTimer.interval = 1;

//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
alarmTimer.onTimerFired = function () {
    ringOverTemperatureAlarm();
};
//=====================
//End function
//=====================



//=================================
// 
//=================================
    var samplingTimer = new Timer();
    samplingTimer.ticking = false;
    samplingTimer.interval = 5;
//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
samplingTimer.onTimerFired = function () {
            sampleTemperaturesOnce();
            samplingTimer.interval = parseInt((((ovalSlider.hoffset - 300) /10)* thermometerScale ));
};
//=====================
//End function
//=====================





//=================================
// 
//=================================
    var leftLampTimer = new Timer();
    leftLampTimer.ticking = false;
    leftLampTimer.interval = .5;
//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
leftLampTimer.onTimerFired = function () {
    flashleftlamp();
};
//=====================
//End function
//=====================




//=================================
// widget 
//=================================
    var rightLampTimer = new Timer();
    rightLampTimer.ticking = false;
    rightLampTimer.interval = .5;
//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
rightLampTimer.onTimerFired = function () {
    flashrightlamp();
};
//=====================
//End function
//=====================




//=================================
// 
//=================================
    var speedfanindicatorlampTimer = new Timer();
    speedfanindicatorlampTimer.ticking = false;
    speedfanindicatorlampTimer.interval = .5;
//=================================
// timer ends
//=================================

//=================================
// timer to 
//=================================
speedfanindicatorlampTimer.onTimerFired = function () {
    flashspeedfanindicator();
};
//=====================
//End function
//=====================



//=================================
// stub to call GetWindowsSensorNames
//=================================
function stubGetWindowsSensorNames() {

   if (system.platform == "windows")
   {
      if (speedfanflag == "installed")
      {
        // make the message plaque
        waitmessage.visible = true;
        //var a = new FadeAnimation( waitmessage, 255, 500, animator.kEaseInOut );
        //animator.start( a );  // won't work in this widget, don't know why
        fadeIn(waitmessage,1);
        
        puff(420,205);
        
        //read speedfan's sensor cfg file to name the sensors
        //NT 6 systems might not, in the future, be able to get the sensor names as they are stored in program files
        getWindowsSensorNames();
      }
   }
};
//=====================
//End function
//=====================



//=================================
// stub to call EnableSpeedfanLogging
//=================================
function stubEnableSpeedfanLogging() {

    if (system.platform == "windows")
    {
        if (speedfanflag === "installed")
          {
                // kill speedfan, kill it first, we don't want two processes running...
                // KillSpeedfanProcess();
                // if windows XP or earlier then set speedfan to minimise
                // later versions of Windows will not allow access to the program files folders
                if (getWindowsVersion() <= "5.7" || getWindowsVersion() >= "5.0")
                {
                    print ("********************************************************* ");
                    print("getWindowsVersion() " + getWindowsVersion());
                    enableSpeedfanLogging();  // function to read and modify the speedfan configuration file  LogEnabled=true
                }
                else
                {
                   print("getWindowsVersion() " + getWindowsVersion());
                   print("Automatically minimising Speedfan only works in windows XP or older");
                   print("so you'll need to minimise speedfan yourself on newer versions of windows");
                   print("You will need to have Logging Enabled in speedfan to get the sensors");
                   
                   //try anyway
                   //enableSpeedfanLogging();  // function to read and modify the speedfan configuration file  LogEnabled=true
                }
                // restart speedfan after change to minimise it on startup
                StartSpeedfanProcess();
        }
    }
};
//=====================
//End function
//=====================

    
//=================================
// stub to call 
//=================================
function startSampling() {
      
       if (speedfanflag == "installed")
       {
        log ("start sampling timer");
        samplingTimer.ticking = true;
        samplingTimer.interval = 5;
        ovalSlider.tooltip= "frequency slider set to "+samplingTimer.interval+ " seconds";
       }
 };
 //=====================
 //End function
 //=====================
 
       
       
       


//=================================
// timer to 
//=================================
thermometersHelpPage.onMouseDown = function () {
    helpdropdownmove();
};
//=================================
// timer ends
//=================================
