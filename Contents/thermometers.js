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

       // Do this once to extract the file to the Widget's data folder.
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
       var upper1MenuItems = new Array();
       var upper2MenuItems = new Array();
       var lower1MenuItems = new Array();
       var lower2MenuItems = new Array();
       var selectedLeftSensor = new Array();
       var selectedRightSensor = new Array();
       var selectedUpper1Sensor = new Array();
       var selectedUpper2Sensor = new Array();
       var selectedlower1Sensor = new Array();
       var selectedlower2Sensor = new Array();
       var noofsensors = 8;
       var getSensorList = 0;
       var  currentLeftSensor = 1;
       var  currentRightSensor = 5;
       var  currentUpper1Sensor = 2;
       var  currentUpper2Sensor = 2;
       var  currentlower1Sensor = 2;
       var  currentlower2Sensor = 2;

       var leftmenunameitems = new Array();
       var rightmenunameitems = new Array();
       var selectedLeftSensorName = new Array();
       var selectedRightSensorName  = new Array();
       var currentLeftSensorName = 1;
       var currentRightSensorName = 5;
       var currentUpper1SensorName = 3;
       var currentUpper2SensorName = 4;

       var currentLeftSensorNameText ="Core 0";
       var currentRightSensorNameText ="GPU";
       var currentUpper1SensorNameText ="HD0";
       var currentUpper2SensorNameText ="HD0";
       var currentlower1SensorNameText ="HD1";
       var currentlower2SensorNameText ="HD1";

       var speedfanflag = "unknown";
       var PreviousredMercuryLeftvoffset= 250;
       var PreviousredMercuryRightvoffset= 250;
       var hotSliderLeftclicked = "false";
       var hotSliderRighttclicked = "false";

       var leftTemperatureMax = 0;
       var rightTemperatureMax = 0;
       var upper1TemperatureMax = 0;
       var upper2TemperatureMax = 0;
       var lower1TemperatureMax = 0;
       var lower2TemperatureMax = 0;
       var leftTemperature = 0;
       var rightTemperature = 0;
       var upper1Temperature = 0;
       var upper2Temperature = 0;
       var lower1Temperature = 0;
       var lower2Temperature = 0;



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

        //resizing variables

        var mainWindowwidthDefault  = mainWindow.width;
	    var mainWindowheightDefault = mainWindow.height;

        // waitmessage
       // movinglines.png

        var thermometersHelpPagehoffsetDefault = thermometersHelpPage.hoffset;
        var thermometersHelpPagevoffsetDefault = thermometersHelpPage.voffset;
        var thermometersHelpPagewidthDefault =  thermometersHelpPage.width;
        var thermometersHelpPageheightDefault =  thermometersHelpPage.height;

        var lower1PointerhoffsetDefault = lower1Pointer.hoffset;
        var lower1PointervoffsetDefault = lower1Pointer.voffset;
        var lower1PointerwidthDefault =  lower1Pointer.width;
        var lower1PointerheightDefault =  lower1Pointer.height;
        var lower1PointerhRegistrationPointDefault =  lower1Pointer.hRegistrationPoint;
        var lower1PointervRegistrationPointDefault =  lower1Pointer.vRegistrationPoint;

        var lower2PointerhoffsetDefault = lower2Pointer.hoffset;
        var lower2PointervoffsetDefault = lower2Pointer.voffset;
        var lower2PointerwidthDefault =  lower2Pointer.width;
        var lower2PointerheightDefault =  lower2Pointer.height;
        var lower2PointerhRegistrationPointDefault =  lower2Pointer.hRegistrationPoint;
        var lower2PointervRegistrationPointDefault =  lower2Pointer.vRegistrationPoint;

        var upper1PointerhoffsetDefault = upper1Pointer.hoffset;
        var upper1PointervoffsetDefault = upper1Pointer.voffset;
        var upper1PointerwidthDefault =  upper1Pointer.width;
        var upper1PointerheightDefault =  upper1Pointer.height;
        var upper1PointerhRegistrationPointDefault =  upper1Pointer.hRegistrationPoint;
        var upper1PointervRegistrationPointDefault =  upper1Pointer.vRegistrationPoint;

        var upper2PointerhoffsetDefault = upper2Pointer.hoffset;
        var upper2PointervoffsetDefault = upper2Pointer.voffset;
        var upper2PointerwidthDefault =   upper2Pointer.width;
        var upper2PointerheightDefault =  upper2Pointer.height;
        var upper2PointerhRegistrationPointDefault =  upper2Pointer.hRegistrationPoint;
        var upper2PointervRegistrationPointDefault =  upper2Pointer.vRegistrationPoint;

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

        var upper1GaugeSensorChar1hoffsetDefault = upper1GaugeSensorChar1.hoffset;
        var upper1GaugeSensorChar1voffsetDefault = upper1GaugeSensorChar1.voffset;
        var upper1GaugeSensorChar1widthDefault =   upper1GaugeSensorChar1.width;
        var upper1GaugeSensorChar1heightDefault =  upper1GaugeSensorChar1.height;

        var upper1GaugeSensorChar2hoffsetDefault = upper1GaugeSensorChar2.hoffset;
        var upper1GaugeSensorChar2voffsetDefault = upper1GaugeSensorChar2.voffset;
        var upper1GaugeSensorChar2widthDefault =   upper1GaugeSensorChar2.width;
        var upper1GaugeSensorChar2heightDefault =  upper1GaugeSensorChar2.height;

        var upper1GaugeSensorChar3hoffsetDefault = upper1GaugeSensorChar3.hoffset;
        var upper1GaugeSensorChar3voffsetDefault = upper1GaugeSensorChar3.voffset;
        var upper1GaugeSensorChar3widthDefault =   upper1GaugeSensorChar3.width;
        var upper1GaugeSensorChar3heightDefault =  upper1GaugeSensorChar3.height;

        var upper1GaugeSensorChar4hoffsetDefault = upper1GaugeSensorChar4.hoffset;
        var upper1GaugeSensorChar4voffsetDefault = upper1GaugeSensorChar4.voffset;
        var upper1GaugeSensorChar4widthDefault =   upper1GaugeSensorChar4.width;
        var upper1GaugeSensorChar4heightDefault =  upper1GaugeSensorChar4.height;

        var upper1GaugeSensorChar5hoffsetDefault = upper1GaugeSensorChar5.hoffset;
        var upper1GaugeSensorChar5voffsetDefault = upper1GaugeSensorChar5.voffset;
        var upper1GaugeSensorChar5widthDefault =   upper1GaugeSensorChar5.width;
        var upper1GaugeSensorChar5heightDefault =  upper1GaugeSensorChar5.height;


        var upper2GaugeSensorChar1hoffsetDefault = upper2GaugeSensorChar1.hoffset;
        var upper2GaugeSensorChar1voffsetDefault = upper2GaugeSensorChar1.voffset;
        var upper2GaugeSensorChar1widthDefault =   upper2GaugeSensorChar1.width;
        var upper2GaugeSensorChar1heightDefault =  upper2GaugeSensorChar1.height;

        var upper2GaugeSensorChar2hoffsetDefault = upper2GaugeSensorChar2.hoffset;
        var upper2GaugeSensorChar2voffsetDefault = upper2GaugeSensorChar2.voffset;
        var upper2GaugeSensorChar2widthDefault =   upper2GaugeSensorChar2.width;
        var upper2GaugeSensorChar2heightDefault =  upper2GaugeSensorChar2.height;

        var upper2GaugeSensorChar3hoffsetDefault = upper2GaugeSensorChar3.hoffset;
        var upper2GaugeSensorChar3voffsetDefault = upper2GaugeSensorChar3.voffset;
        var upper2GaugeSensorChar3widthDefault =   upper2GaugeSensorChar3.width;
        var upper2GaugeSensorChar3heightDefault =  upper2GaugeSensorChar3.height;

        var upper2GaugeSensorChar4hoffsetDefault = upper2GaugeSensorChar4.hoffset;
        var upper2GaugeSensorChar4voffsetDefault = upper2GaugeSensorChar4.voffset;
        var upper2GaugeSensorChar4widthDefault =   upper2GaugeSensorChar4.width;
        var upper2GaugeSensorChar4heightDefault =  upper2GaugeSensorChar4.height;

        var upper2GaugeSensorChar5hoffsetDefault = upper2GaugeSensorChar5.hoffset;
        var upper2GaugeSensorChar5voffsetDefault = upper2GaugeSensorChar5.voffset;
        var upper2GaugeSensorChar5widthDefault =   upper2GaugeSensorChar5.width;
        var upper2GaugeSensorChar5heightDefault =  upper2GaugeSensorChar5.height;

        var lower1GaugeSensorChar1hoffsetDefault = lower1GaugeSensorChar1.hoffset;
        var lower1GaugeSensorChar1voffsetDefault = lower1GaugeSensorChar1.voffset;
        var lower1GaugeSensorChar1widthDefault =   lower1GaugeSensorChar1.width;
        var lower1GaugeSensorChar1heightDefault =  lower1GaugeSensorChar1.height;

        var lower1GaugeSensorChar2hoffsetDefault = lower1GaugeSensorChar2.hoffset;
        var lower1GaugeSensorChar2voffsetDefault = lower1GaugeSensorChar2.voffset;
        var lower1GaugeSensorChar2widthDefault =   lower1GaugeSensorChar2.width;
        var lower1GaugeSensorChar2heightDefault =  lower1GaugeSensorChar2.height;

        var lower1GaugeSensorChar3hoffsetDefault = lower1GaugeSensorChar3.hoffset;
        var lower1GaugeSensorChar3voffsetDefault = lower1GaugeSensorChar3.voffset;
        var lower1GaugeSensorChar3widthDefault =   lower1GaugeSensorChar3.width;
        var lower1GaugeSensorChar3heightDefault =  lower1GaugeSensorChar3.height;

        var lower1GaugeSensorChar4hoffsetDefault = lower1GaugeSensorChar4.hoffset;
        var lower1GaugeSensorChar4voffsetDefault = lower1GaugeSensorChar4.voffset;
        var lower1GaugeSensorChar4widthDefault =   lower1GaugeSensorChar4.width;
        var lower1GaugeSensorChar4heightDefault =  lower1GaugeSensorChar4.height;

        var lower1GaugeSensorChar5hoffsetDefault = lower1GaugeSensorChar5.hoffset;
        var lower1GaugeSensorChar5voffsetDefault = lower1GaugeSensorChar5.voffset;
        var lower1GaugeSensorChar5widthDefault =   lower1GaugeSensorChar5.width;
        var lower1GaugeSensorChar5heightDefault =  lower1GaugeSensorChar5.height;


        var lower2GaugeSensorChar1hoffsetDefault = lower2GaugeSensorChar1.hoffset;
        var lower2GaugeSensorChar1voffsetDefault = lower2GaugeSensorChar1.voffset;
        var lower2GaugeSensorChar1widthDefault =   lower2GaugeSensorChar1.width;
        var lower2GaugeSensorChar1heightDefault =  lower2GaugeSensorChar1.height;

        var lower2GaugeSensorChar2hoffsetDefault = lower2GaugeSensorChar2.hoffset;
        var lower2GaugeSensorChar2voffsetDefault = lower2GaugeSensorChar2.voffset;
        var lower2GaugeSensorChar2widthDefault =   lower2GaugeSensorChar2.width;
        var lower2GaugeSensorChar2heightDefault =  lower2GaugeSensorChar2.height;

        var lower2GaugeSensorChar3hoffsetDefault = lower2GaugeSensorChar3.hoffset;
        var lower2GaugeSensorChar3voffsetDefault = lower2GaugeSensorChar3.voffset;
        var lower2GaugeSensorChar3widthDefault =   lower2GaugeSensorChar3.width;
        var lower2GaugeSensorChar3heightDefault =  lower2GaugeSensorChar3.height;

        var lower2GaugeSensorChar4hoffsetDefault = lower2GaugeSensorChar4.hoffset;
        var lower2GaugeSensorChar4voffsetDefault = lower2GaugeSensorChar4.voffset;
        var lower2GaugeSensorChar4widthDefault =   lower2GaugeSensorChar4.width;
        var lower2GaugeSensorChar4heightDefault =  lower2GaugeSensorChar4.height;

        var lower2GaugeSensorChar5hoffsetDefault = lower2GaugeSensorChar5.hoffset;
        var lower2GaugeSensorChar5voffsetDefault = lower2GaugeSensorChar5.voffset;
        var lower2GaugeSensorChar5widthDefault =   lower2GaugeSensorChar5.width;
        var lower2GaugeSensorChar5heightDefault =  lower2GaugeSensorChar5.height;

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

        var upper1GaugehoffsetDefault = upper1Gauge.hoffset;
        var upper1GaugevoffsetDefault = upper1Gauge.voffset;
        var upper1GaugewidthDefault =  upper1Gauge.width;
        var upper1GaugeheightDefault =  upper1Gauge.height;

        var upper2GaugeLabelhoffsetDefault = upper2GaugeLabel.hoffset;
        var upper2GaugeLabelvoffsetDefault = upper2GaugeLabel.voffset;
        var upper2GaugeLabelwidthDefault =  upper2GaugeLabel.width;
        var upper2GaugeLabelheightDefault =  upper2GaugeLabel.height;

        var upper2GaugehoffsetDefault = upper2Gauge.hoffset;
        var upper2GaugevoffsetDefault = upper2Gauge.voffset;
        var upper2GaugewidthDefault =  upper2Gauge.width;
        var upper2GaugeheightDefault =  upper2Gauge.height;

        var lower1GaugehoffsetDefault = lower1Gauge.hoffset;
        var lower1GaugevoffsetDefault = lower1Gauge.voffset;
        var lower1GaugewidthDefault =  lower1Gauge.width;
        var lower1GaugeheightDefault =  lower1Gauge.height;

        var lower2GaugehoffsetDefault = lower2Gauge.hoffset;
        var lower2GaugevoffsetDefault = lower2Gauge.voffset;
        var lower2GaugewidthDefault =  lower2Gauge.width;
        var lower2GaugeheightDefault =  lower2Gauge.height;

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

        var thermometerRightSensorChar1hoffsetDefault = thermometerRightSensorChar1.hoffset;
        var thermometerRightSensorChar1voffsetDefault = thermometerRightSensorChar1.voffset;
        var thermometerRightSensorChar1widthDefault =  thermometerRightSensorChar1.width;
        var thermometerRightSensorChar1heightDefault =  thermometerRightSensorChar1.height;

        var thermometerRightSensorChar2hoffsetDefault = thermometerRightSensorChar2.hoffset;
        var thermometerRightSensorChar2voffsetDefault = thermometerRightSensorChar2.voffset;
        var thermometerRightSensorChar2widthDefault =  thermometerRightSensorChar2.width;
        var thermometerRightSensorChar2heightDefault =  thermometerRightSensorChar2.height;

        var thermometerRightSensorChar3hoffsetDefault = thermometerRightSensorChar3.hoffset;
        var thermometerRightSensorChar3voffsetDefault = thermometerRightSensorChar3.voffset;
        var thermometerRightSensorChar3widthDefault =  thermometerRightSensorChar3.width;
        var thermometerRightSensorChar3heightDefault =  thermometerRightSensorChar3.height;

        var thermometerRightSensorChar4hoffsetDefault = thermometerRightSensorChar4.hoffset;
        var thermometerRightSensorChar4voffsetDefault = thermometerRightSensorChar4.voffset;
        var thermometerRightSensorChar4widthDefault =  thermometerRightSensorChar4.width;
        var thermometerRightSensorChar4heightDefault =  thermometerRightSensorChar4.height;

        var thermometerRightSensorChar5hoffsetDefault = thermometerRightSensorChar5.hoffset;
        var thermometerRightSensorChar5voffsetDefault = thermometerRightSensorChar5.voffset;
        var thermometerRightSensorChar5widthDefault =  thermometerRightSensorChar5.width;
        var thermometerRightSensorChar5heightDefault =  thermometerRightSensorChar5.height;

        var thermometerLeftSensorChar1hoffsetDefault = thermometerLeftSensorChar1.hoffset;
        var thermometerLeftSensorChar1voffsetDefault = thermometerLeftSensorChar1.voffset;
        var thermometerLeftSensorChar1widthDefault =  thermometerLeftSensorChar1.width;
        var thermometerLeftSensorChar1heightDefault =  thermometerLeftSensorChar1.height;

        var thermometerLeftSensorChar2hoffsetDefault = thermometerLeftSensorChar2.hoffset;
        var thermometerLeftSensorChar2voffsetDefault = thermometerLeftSensorChar2.voffset;
        var thermometerLeftSensorChar2widthDefault =  thermometerLeftSensorChar2.width;
        var thermometerLeftSensorChar2heightDefault =  thermometerLeftSensorChar2.height;

        var thermometerLeftSensorChar3hoffsetDefault = thermometerLeftSensorChar3.hoffset;
        var thermometerLeftSensorChar3voffsetDefault = thermometerLeftSensorChar3.voffset;
        var thermometerLeftSensorChar3widthDefault =  thermometerLeftSensorChar3.width;
        var thermometerLeftSensorChar3heightDefault =  thermometerLeftSensorChar3.height;

        var thermometerLeftSensorChar4hoffsetDefault = thermometerLeftSensorChar4.hoffset;
        var thermometerLeftSensorChar4voffsetDefault = thermometerLeftSensorChar4.voffset;
        var thermometerLeftSensorChar4widthDefault =  thermometerLeftSensorChar4.width;
        var thermometerLeftSensorChar4heightDefault =  thermometerLeftSensorChar4.height;

        var thermometerLeftSensorChar5hoffsetDefault = thermometerLeftSensorChar5.hoffset;
        var thermometerLeftSensorChar5voffsetDefault = thermometerLeftSensorChar5.voffset;
        var thermometerLeftSensorChar5widthDefault =  thermometerLeftSensorChar5.width;
        var thermometerLeftSensorChar5heightDefault =  thermometerLeftSensorChar5.height;

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
    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
        preferences.imageEditPref.hidden=false;
        preferences.imageCmdPref.hidden=false;
    } else {
        preferences.imageEditPref.hidden=true;		
        preferences.imageCmdPref.hidden=true;
    }		

    mainScreen(); 	// check the widget is on-screen
    resizethermometer(); // resize the thermometer
          
    busy.hoffset = (225 * thermometerScale)
    busy.voffset = (190 * thermometerScale)
    busyBlur.hoffset = (225 * thermometerScale)
    busyBlur.voffset = (190 * thermometerScale)
    busyTimer.ticking = true;
   
   createLicence(mainWindow);  // create the licence window
   showdockicon();      // put the icon in the dock
   setmenu();           // build the menu

   rightwarmtext.visible= true;
   leftwarmtext.visible= true;
   righthottext.visible= true;
   lefthottext.visible= true;
   warmSliderRight.visible= true;
   warmSliderLeft.visible= true;
   hotSliderRight.visible= true;
   hotSliderLeft.visible= true;
   
   //sound the bell alarm here
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
   
   checkLockWidget();     //check the lock on the widget is required
   adjustSliderVoffset(); //adjust the hot/warm sliders according to the stored voffset values
   
   //initial checks of visibility dependant solely upon preferences as the no. of sensors is currently the default 8
   setUpper2GaugeVisibility();  //determine secondary upper gauge visibility
   setLower1GaugeVisibility();  //determine primary lower gauge visibility
   setLower2GaugeVisibility();  //determine secondary lower gauge visibility

   puff(420,205); //set out a puff on startup
      /*Operating system	Version number
          Windows 98 	4.1.1998
          Windows 98 SE 	4.1.2222
          Windows ME 	4.90.3000
          Windows 2000 	5.00.2195
          Windows XP 	5.1.2600
          Windows 2003 	5.2.3790
          Windows Vista 	6.0.6000
          Windows Vista, SP2 	6.0.6002
          Windows 7 	6.1.7600
          Windows 7, SP1 	6.1.7601
          Windows 8 	6.2.9200
          Windows 8.1 	6.3.9431      */

    // Check speedfan executable exists in the expected folders
    checkSpeedfanBinaryExists();
    
    // speedfan not found, blink the red lamps
    if (speedfanflag !== "installed") {   
        speedfanindicatorred.visible = true;
        speedfanindicator.visible = false;
        speedfanindicatorlampTimer.ticking = true;
        speedfanflag = "unknown";
        preferences.SpeedfanLocation.value = "";
        busy.tooltip = "Cannot find Speedfan - click to find the binary"
        print ("setting tooltips");
    }     
   

   
   if (speedfanflag === "installed")
      {
            // kill speedfan, kill it first, we don't want two processes running...
            //KillSpeedfanProcess();
            // if windows XP or earlier then set speedfan to minimise
            // later versions of Windows will not allow access to the program files folders
            if (getWindowsVersion() <= "5.7" || getWindowsVersion() >= "5.0")
            {
                print ("********************************************************* ");
                print("getWindowsVersion() " + getWindowsVersion());
                getWindowsVersion();
                modifySpeedfanConfiguration();  // function to read and modify the speedfan configuration file  LogEnabled=true
            }
            else
            {
               print("getWindowsVersion() " + getWindowsVersion());
               print("Automatically minimising Speedfan only works in windows XP or older");
               print("so you'll need to minimise speedfan yourself on newer versions of windows");
               print("You will need to have Logging Enabled in speedfan to get the sensors");
               
               //try anyway
               getWindowsVersion();
               modifySpeedfanConfiguration();  // function to read and modify the speedfan configuration file  LogEnabled=true
            }
            // restart speedfan after change to minimise it on startup
            StartSpeedfanProcess();
   }
   // make the message plaque

   if (preferences.soundsPref.value !== "mute" ) {play(electricDrone,false);};

   if (speedfanflag === "installed")
   {
        waitmessage.visible = true;
        //var a = new FadeAnimation( waitmessage, 255, 500, animator.kEaseInOut );
        //animator.start( a );  // won't work in this widget, don't know why
        fadeIn(waitmessage,1);
   }


   puff(420,205);
   //read speedfan's sensor cfg file to name the sensors
   if (system.platform == "windows")
   {
      if (speedfanflag == "installed")
      {
            if (getWindowsVersion() <= "5.7" || getWindowsVersion() >= "5.0")
            {
                getWindowsSensorNames();
            }
            else
            {
                print("NT 6 systems cannot get the sensor names as they are stored in program files");
                //try anyway
                getWindowsSensorNames();
            }
      }
   }

   //start timer to sample temperature.
   sampletemperature();
   if (speedfanflag == "installed")
   {
            log ("start sampling timer");
            samplingTimer.ticking = true;
            samplingTimer.interval = 5;
            ovalSlider.tooltip= "frequency slider set to "+samplingTimer.interval+ " seconds";

   }
   
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
        if (preferences.upper2GaugeShownPref.value == "disabled"  && noofsensors >= 4) {
            preferences.upper2GaugeShownPref.value = "enabled";
            valve.src="Resources/valve-rotated.png";
            upper2GaugeLabel.visible = true;
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
            upper2Gauge.visible = true;
            upper2Pointer.visible = true;
            upper2GaugeSensorChar1.visible = true;
            upper2GaugeSensorChar2.visible = true;
            upper2GaugeSensorChar3.visible = true;
            upper2GaugeSensorChar4.visible = true;
            upper2GaugeSensorChar5.visible = true;
            puff(428,215);     // scaling change required here
            ReadTemperatures();
        }
        else
        {
            preferences.upper2GaugeShownPref.value = "disabled";
            valve.src="Resources/valve.png";
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
            upper2GaugeLabel.visible = false;
            upper2Gauge.visible = false;
            upper2Pointer.visible = false;
            upper2GaugeSensorChar1.visible = false;
            upper2GaugeSensorChar2.visible = false;
            upper2GaugeSensorChar3.visible = false;
            upper2GaugeSensorChar4.visible = false;
            upper2GaugeSensorChar5.visible = false;
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
        if (preferences.lower2GaugeShownPref.value == "disabled"  && noofsensors >= 6) {
            preferences.lower2GaugeShownPref.value = "enabled";
            valve2.src="Resources/valve-rotated.png";
            lower2Gauge.visible = true;
            lower2Pointer.visible = true;
            lower2GaugeSensorChar1.visible = true;
            lower2GaugeSensorChar2.visible = true;
            lower2GaugeSensorChar3.visible = true;
            lower2GaugeSensorChar4.visible = true;
            lower2GaugeSensorChar5.visible = true;
            puff(220,305);
            if (preferences.soundsPref.value != "mute" ) {play(pop, false);};
        }
        else
        {
            preferences.lower2GaugeShownPref.value = "disabled";
            valve2.src="Resources/valve.png";
            lower2Gauge.visible = false;
            lower2Pointer.visible = false;
            lower2GaugeSensorChar1.visible = false;
            lower2GaugeSensorChar2.visible = false;
            lower2GaugeSensorChar3.visible = false;
            lower2GaugeSensorChar4.visible = false;
            lower2GaugeSensorChar5.visible = false;
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
      warmSliderRight.onMouseMove= null;

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

        upper1Pointer.hoffset =  upper1PointerhoffsetDefault * thermometerScale;
        upper1Pointer.voffset =  upper1PointervoffsetDefault * thermometerScale;
        upper1Pointer.width =  upper1PointerwidthDefault * thermometerScale;
        upper1Pointer.height =  upper1PointerheightDefault * thermometerScale;
        upper1Pointer.hRegistrationPoint =  upper1PointerhRegistrationPointDefault * thermometerScale;
        upper1Pointer.vRegistrationPoint =  upper1PointervRegistrationPointDefault * thermometerScale;

        upper2Pointer.hoffset =  upper2PointerhoffsetDefault * thermometerScale;
        upper2Pointer.voffset =  upper2PointervoffsetDefault * thermometerScale;
        upper2Pointer.width =  upper2PointerwidthDefault * thermometerScale;
        upper2Pointer.height =  upper2PointerheightDefault * thermometerScale;
        upper2Pointer.hRegistrationPoint =  upper2PointerhRegistrationPointDefault * thermometerScale;
        upper2Pointer.vRegistrationPoint =  upper2PointervRegistrationPointDefault * thermometerScale;

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

        upper1GaugeSensorChar1.hoffset =  upper1GaugeSensorChar1hoffsetDefault * thermometerScale;
        upper1GaugeSensorChar1.voffset =  upper1GaugeSensorChar1voffsetDefault * thermometerScale;
        upper1GaugeSensorChar1.width =  upper1GaugeSensorChar1widthDefault * thermometerScale;
        upper1GaugeSensorChar1.height =  upper1GaugeSensorChar1heightDefault * thermometerScale;

        upper1GaugeSensorChar2.hoffset =  upper1GaugeSensorChar2hoffsetDefault * thermometerScale;
        upper1GaugeSensorChar2.voffset =  upper1GaugeSensorChar2voffsetDefault * thermometerScale;
        upper1GaugeSensorChar2.width =  upper1GaugeSensorChar2widthDefault * thermometerScale;
        upper1GaugeSensorChar2.height =  upper1GaugeSensorChar2heightDefault * thermometerScale;

        upper1GaugeSensorChar3.hoffset =  upper1GaugeSensorChar3hoffsetDefault * thermometerScale;
        upper1GaugeSensorChar3.voffset =  upper1GaugeSensorChar3voffsetDefault * thermometerScale;
        upper1GaugeSensorChar3.width =  upper1GaugeSensorChar3widthDefault * thermometerScale;
        upper1GaugeSensorChar3.height =  upper1GaugeSensorChar3heightDefault * thermometerScale;

        upper1GaugeSensorChar4.hoffset =  upper1GaugeSensorChar4hoffsetDefault * thermometerScale;
        upper1GaugeSensorChar4.voffset =  upper1GaugeSensorChar4voffsetDefault * thermometerScale;
        upper1GaugeSensorChar4.width =  upper1GaugeSensorChar4widthDefault * thermometerScale;
        upper1GaugeSensorChar4.height =  upper1GaugeSensorChar4heightDefault * thermometerScale;

        upper1GaugeSensorChar5.hoffset =  upper1GaugeSensorChar5hoffsetDefault * thermometerScale;
        upper1GaugeSensorChar5.voffset =  upper1GaugeSensorChar5voffsetDefault * thermometerScale;
        upper1GaugeSensorChar5.width =  upper1GaugeSensorChar5widthDefault * thermometerScale;
        upper1GaugeSensorChar5.height =  upper1GaugeSensorChar5heightDefault * thermometerScale;

        upper2GaugeSensorChar1.hoffset =  upper2GaugeSensorChar1hoffsetDefault * thermometerScale;
        upper2GaugeSensorChar1.voffset =  upper2GaugeSensorChar1voffsetDefault * thermometerScale;
        upper2GaugeSensorChar1.width =  upper2GaugeSensorChar1widthDefault * thermometerScale;
        upper2GaugeSensorChar1.height =  upper2GaugeSensorChar1heightDefault * thermometerScale;

        upper2GaugeSensorChar2.hoffset =  upper2GaugeSensorChar2hoffsetDefault * thermometerScale;
        upper2GaugeSensorChar2.voffset =  upper2GaugeSensorChar2voffsetDefault * thermometerScale;
        upper2GaugeSensorChar2.width =  upper2GaugeSensorChar2widthDefault * thermometerScale;
        upper2GaugeSensorChar2.height =  upper2GaugeSensorChar2heightDefault * thermometerScale;

        upper2GaugeSensorChar3.hoffset =  upper2GaugeSensorChar3hoffsetDefault * thermometerScale;
        upper2GaugeSensorChar3.voffset =  upper2GaugeSensorChar3voffsetDefault * thermometerScale;
        upper2GaugeSensorChar3.width =  upper2GaugeSensorChar3widthDefault * thermometerScale;
        upper2GaugeSensorChar3.height =  upper2GaugeSensorChar3heightDefault * thermometerScale;

        upper2GaugeSensorChar4.hoffset =  upper2GaugeSensorChar4hoffsetDefault * thermometerScale;
        upper2GaugeSensorChar4.voffset =  upper2GaugeSensorChar4voffsetDefault * thermometerScale;
        upper2GaugeSensorChar4.width =  upper2GaugeSensorChar4widthDefault * thermometerScale;
        upper2GaugeSensorChar4.height =  upper2GaugeSensorChar4heightDefault * thermometerScale;

        upper2GaugeSensorChar5.hoffset =  upper2GaugeSensorChar5hoffsetDefault * thermometerScale;
        upper2GaugeSensorChar5.voffset =  upper2GaugeSensorChar5voffsetDefault * thermometerScale;
        upper2GaugeSensorChar5.width =  upper2GaugeSensorChar5widthDefault * thermometerScale;
        upper2GaugeSensorChar5.height =  upper2GaugeSensorChar5heightDefault * thermometerScale;

        lower1GaugeSensorChar1.hoffset =  lower1GaugeSensorChar1hoffsetDefault * thermometerScale;
        lower1GaugeSensorChar1.voffset =  lower1GaugeSensorChar1voffsetDefault * thermometerScale;
        lower1GaugeSensorChar1.width =  lower1GaugeSensorChar1widthDefault * thermometerScale;
        lower1GaugeSensorChar1.height =  lower1GaugeSensorChar1heightDefault * thermometerScale;

        lower1GaugeSensorChar2.hoffset =  lower1GaugeSensorChar2hoffsetDefault * thermometerScale;
        lower1GaugeSensorChar2.voffset =  lower1GaugeSensorChar2voffsetDefault * thermometerScale;
        lower1GaugeSensorChar2.width =  lower1GaugeSensorChar2widthDefault * thermometerScale;
        lower1GaugeSensorChar2.height =  lower1GaugeSensorChar2heightDefault * thermometerScale;

        lower1GaugeSensorChar3.hoffset =  lower1GaugeSensorChar3hoffsetDefault * thermometerScale;
        lower1GaugeSensorChar3.voffset =  lower1GaugeSensorChar3voffsetDefault * thermometerScale;
        lower1GaugeSensorChar3.width =  lower1GaugeSensorChar3widthDefault * thermometerScale;
        lower1GaugeSensorChar3.height =  lower1GaugeSensorChar3heightDefault * thermometerScale;

        lower1GaugeSensorChar4.hoffset =  lower1GaugeSensorChar4hoffsetDefault * thermometerScale;
        lower1GaugeSensorChar4.voffset =  lower1GaugeSensorChar4voffsetDefault * thermometerScale;
        lower1GaugeSensorChar4.width =  lower1GaugeSensorChar4widthDefault * thermometerScale;
        lower1GaugeSensorChar4.height =  lower1GaugeSensorChar4heightDefault * thermometerScale;

        lower1GaugeSensorChar5.hoffset =  lower1GaugeSensorChar5hoffsetDefault * thermometerScale;
        lower1GaugeSensorChar5.voffset =  lower1GaugeSensorChar5voffsetDefault * thermometerScale;
        lower1GaugeSensorChar5.width =  lower1GaugeSensorChar5widthDefault * thermometerScale;
        lower1GaugeSensorChar5.height =  lower1GaugeSensorChar5heightDefault * thermometerScale;

        lower2GaugeSensorChar1.hoffset =  lower2GaugeSensorChar1hoffsetDefault * thermometerScale;
        lower2GaugeSensorChar1.voffset =  lower2GaugeSensorChar1voffsetDefault * thermometerScale;
        lower2GaugeSensorChar1.width =  lower2GaugeSensorChar1widthDefault * thermometerScale;
        lower2GaugeSensorChar1.height =  lower2GaugeSensorChar1heightDefault * thermometerScale;

        lower2GaugeSensorChar2.hoffset =  lower2GaugeSensorChar2hoffsetDefault * thermometerScale;
        lower2GaugeSensorChar2.voffset =  lower2GaugeSensorChar2voffsetDefault * thermometerScale;
        lower2GaugeSensorChar2.width =  lower2GaugeSensorChar2widthDefault * thermometerScale;
        lower2GaugeSensorChar2.height =  lower2GaugeSensorChar2heightDefault * thermometerScale;

        lower2GaugeSensorChar3.hoffset =  lower2GaugeSensorChar3hoffsetDefault * thermometerScale;
        lower2GaugeSensorChar3.voffset =  lower2GaugeSensorChar3voffsetDefault * thermometerScale;
        lower2GaugeSensorChar3.width =  lower2GaugeSensorChar3widthDefault * thermometerScale;
        lower2GaugeSensorChar3.height =  lower2GaugeSensorChar3heightDefault * thermometerScale;

        lower2GaugeSensorChar4.hoffset =  lower2GaugeSensorChar4hoffsetDefault * thermometerScale;
        lower2GaugeSensorChar4.voffset =  lower2GaugeSensorChar4voffsetDefault * thermometerScale;
        lower2GaugeSensorChar4.width =  lower2GaugeSensorChar4widthDefault * thermometerScale;
        lower2GaugeSensorChar4.height =  lower2GaugeSensorChar4heightDefault * thermometerScale;

        lower2GaugeSensorChar5.hoffset =  lower2GaugeSensorChar5hoffsetDefault * thermometerScale;
        lower2GaugeSensorChar5.voffset =  lower2GaugeSensorChar5voffsetDefault * thermometerScale;
        lower2GaugeSensorChar5.width =  lower2GaugeSensorChar5widthDefault * thermometerScale;
        lower2GaugeSensorChar5.height =  lower2GaugeSensorChar5heightDefault * thermometerScale;


        thermometersHelpPage.hoffset =  thermometersHelpPagehoffsetDefault * thermometerScale;
        thermometersHelpPage.voffset =  thermometersHelpPagevoffsetDefault * thermometerScale;
        thermometersHelpPage.width =  thermometersHelpPagewidthDefault * thermometerScale;
        thermometersHelpPage.height =  thermometersHelpPageheightDefault * thermometerScale;

        lower1Pointer.hoffset =  lower1PointerhoffsetDefault * thermometerScale;
        lower1Pointer.voffset =  lower1PointervoffsetDefault * thermometerScale;
        lower1Pointer.width =  lower1PointerwidthDefault * thermometerScale;
        lower1Pointer.height =  lower1PointerheightDefault * thermometerScale;
        lower1Pointer.hRegistrationPoint =  lower1PointerhRegistrationPointDefault * thermometerScale;
        lower1Pointer.vRegistrationPoint =  lower1PointervRegistrationPointDefault * thermometerScale;

        lower2Pointer.hoffset =  lower2PointerhoffsetDefault * thermometerScale;
        lower2Pointer.voffset =  lower2PointervoffsetDefault * thermometerScale;
        lower2Pointer.width =  lower2PointerwidthDefault * thermometerScale;
        lower2Pointer.height =  lower2PointerheightDefault * thermometerScale;
        lower2Pointer.hRegistrationPoint =  lower2PointerhRegistrationPointDefault * thermometerScale;
        lower2Pointer.vRegistrationPoint =  lower2PointervRegistrationPointDefault * thermometerScale;

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

        upper1Gauge.hoffset =  upper1GaugehoffsetDefault * thermometerScale;
        upper1Gauge.voffset =  upper1GaugevoffsetDefault * thermometerScale;
        upper1Gauge.width =  upper1GaugewidthDefault * thermometerScale;
        upper1Gauge.height =  upper1GaugeheightDefault * thermometerScale;

        upper2GaugeLabel.hoffset =  upper2GaugeLabelhoffsetDefault * thermometerScale;
        upper2GaugeLabel.voffset =  upper2GaugeLabelvoffsetDefault * thermometerScale;
        upper2GaugeLabel.width =  upper2GaugeLabelwidthDefault * thermometerScale;
        upper2GaugeLabel.height =  upper2GaugeLabelheightDefault * thermometerScale;

        upper2Gauge.hoffset =  upper2GaugehoffsetDefault * thermometerScale;
        upper2Gauge.voffset =  upper2GaugevoffsetDefault * thermometerScale;
        upper2Gauge.width =  upper2GaugewidthDefault * thermometerScale;
        upper2Gauge.height =  upper2GaugeheightDefault * thermometerScale;

        lower1Gauge.hoffset =  lower1GaugehoffsetDefault * thermometerScale;
        lower1Gauge.voffset =  lower1GaugevoffsetDefault * thermometerScale;
        lower1Gauge.width =  lower1GaugewidthDefault * thermometerScale;
        lower1Gauge.height =  lower1GaugeheightDefault * thermometerScale;

        lower2Gauge.hoffset =  lower2GaugehoffsetDefault * thermometerScale;
        lower2Gauge.voffset =  lower2GaugevoffsetDefault * thermometerScale;
        lower2Gauge.width =  lower2GaugewidthDefault * thermometerScale;
        lower2Gauge.height =  lower2GaugeheightDefault * thermometerScale;

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

        thermometerRightSensorChar1.hoffset =  thermometerRightSensorChar1hoffsetDefault * thermometerScale;
        thermometerRightSensorChar1.voffset =  thermometerRightSensorChar1voffsetDefault * thermometerScale;
        thermometerRightSensorChar1.width =  thermometerRightSensorChar1widthDefault * thermometerScale;
        thermometerRightSensorChar1.height =  thermometerRightSensorChar1heightDefault * thermometerScale;

        thermometerRightSensorChar2.hoffset =  thermometerRightSensorChar2hoffsetDefault * thermometerScale;
        thermometerRightSensorChar2.voffset =  thermometerRightSensorChar2voffsetDefault * thermometerScale;
        thermometerRightSensorChar2.width =  thermometerRightSensorChar2widthDefault * thermometerScale;
        thermometerRightSensorChar2.height =  thermometerRightSensorChar2heightDefault * thermometerScale;

        thermometerRightSensorChar3.hoffset =  thermometerRightSensorChar3hoffsetDefault * thermometerScale;
        thermometerRightSensorChar3.voffset =  thermometerRightSensorChar3voffsetDefault * thermometerScale;
        thermometerRightSensorChar3.width =  thermometerRightSensorChar3widthDefault * thermometerScale;
        thermometerRightSensorChar3.height =  thermometerRightSensorChar3heightDefault * thermometerScale;

        thermometerRightSensorChar4.hoffset =  thermometerRightSensorChar4hoffsetDefault * thermometerScale;
        thermometerRightSensorChar4.voffset =  thermometerRightSensorChar4voffsetDefault * thermometerScale;
        thermometerRightSensorChar4.width =  thermometerRightSensorChar4widthDefault * thermometerScale;
        thermometerRightSensorChar4.height =  thermometerRightSensorChar4heightDefault * thermometerScale;

        thermometerRightSensorChar5.hoffset =  thermometerRightSensorChar5hoffsetDefault * thermometerScale;
        thermometerRightSensorChar5.voffset =  thermometerRightSensorChar5voffsetDefault * thermometerScale;
        thermometerRightSensorChar5.width =  thermometerRightSensorChar5widthDefault * thermometerScale;
        thermometerRightSensorChar5.height =  thermometerRightSensorChar5heightDefault * thermometerScale;

        thermometerLeftSensorChar1.hoffset =  thermometerLeftSensorChar1hoffsetDefault * thermometerScale;
        thermometerLeftSensorChar1.voffset =  thermometerLeftSensorChar1voffsetDefault * thermometerScale;
        thermometerLeftSensorChar1.width =  thermometerLeftSensorChar1widthDefault * thermometerScale;
        thermometerLeftSensorChar1.height =  thermometerLeftSensorChar1heightDefault * thermometerScale;

        thermometerLeftSensorChar2.hoffset =  thermometerLeftSensorChar2hoffsetDefault * thermometerScale;
        thermometerLeftSensorChar2.voffset =  thermometerLeftSensorChar2voffsetDefault * thermometerScale;
        thermometerLeftSensorChar2.width =  thermometerLeftSensorChar2widthDefault * thermometerScale;
        thermometerLeftSensorChar2.height =  thermometerLeftSensorChar2heightDefault * thermometerScale;

        thermometerLeftSensorChar3.hoffset =  thermometerLeftSensorChar3hoffsetDefault * thermometerScale;
        thermometerLeftSensorChar3.voffset =  thermometerLeftSensorChar3voffsetDefault * thermometerScale;
        thermometerLeftSensorChar3.width =  thermometerLeftSensorChar3widthDefault * thermometerScale;
        thermometerLeftSensorChar3.height =  thermometerLeftSensorChar3heightDefault * thermometerScale;

        thermometerLeftSensorChar4.hoffset =  thermometerLeftSensorChar4hoffsetDefault * thermometerScale;
        thermometerLeftSensorChar4.voffset =  thermometerLeftSensorChar4voffsetDefault * thermometerScale;
        thermometerLeftSensorChar4.width =  thermometerLeftSensorChar4widthDefault * thermometerScale;
        thermometerLeftSensorChar4.height =  thermometerLeftSensorChar4heightDefault * thermometerScale;

        thermometerLeftSensorChar5.hoffset =  thermometerLeftSensorChar5hoffsetDefault * thermometerScale;
        thermometerLeftSensorChar5.voffset =  thermometerLeftSensorChar5voffsetDefault * thermometerScale;
        thermometerLeftSensorChar5.width =  thermometerLeftSensorChar5widthDefault * thermometerScale;
        thermometerLeftSensorChar5.height =  thermometerLeftSensorChar5heightDefault * thermometerScale;

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
         sampletemperature();
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
function sampletemperature()
{
      ReadTemperatures();
      storeTemperatures();
      drawTemperatures();
      SetMercuryLevels();
      RedrawUpper1Gauge();  //standard upper gauge
      if (preferences.upper2GaugeShownPref.value != "disabled") {RedrawUpper2Gauge();};   //extra upper gauge
      Redrawlower1Gauge();  //standard lower gauge
      if (preferences.lower2GaugeShownPref.value != "disabled") {Redrawlower2Gauge();};   //extra upper gauge
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
      setUpper2GaugeVisibility();  //determine secondary upper gauge visibility
      setLower1GaugeVisibility();  //determine primary lower gauge visibility
      setLower2GaugeVisibility();  //determine secondary lower gauge visibility
   


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

               if (preferences.soundsPref.value != "mute" ) {play(draw, false);};
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
               
               if (preferences.soundsPref.value != "mute" ) {play(draw, false);};
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
    redMercuryLeft.tooltip =  currentLeftSensorNameText + " temperature "+ leftTemperature  + " degrees celsius";
    leftScribeHead.tooltip =  currentLeftSensorNameText + " temperature "+ leftTemperature + " degrees celsius";
    scribeHeadNoWireTwo.tooltip =  currentLeftSensorNameText + " temperature "+ leftTemperature + " degrees celsius";
    thermometerLeft.tooltip =  currentLeftSensorNameText + " temperature "+ leftTemperature + " degrees celsius";
    leftTemperatureMaxIndex.tooltip =  currentLeftSensorNameText + " Max. temperature reached " + leftTemperatureMax + " degrees celsius";

    redMercuryRight.tooltip =  currentRightSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    rightScribeHead.tooltip =  currentRightSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    scribeHeadNoWireOne.tooltip =  currentRightSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    thermometerRight.tooltip =  currentRightSensorNameText + " temperature "+ rightTemperature + " degrees celsius";
    rightTemperatureMaxIndex.tooltip =  currentRightSensorNameText + " Max. temperature reached " + rightTemperatureMax + " degrees celsius";

    var rightSliderHotAlarmTemperature =  (220-(hotSliderRight.voffset));
    hotSliderRight.tooltip = currentRightSensorNameText + " temperature HOT alarm currently set to " + (rightSliderHotAlarmTemperature) +" Celsius";
    righthottext.tooltip = currentRightSensorNameText + " temperature HOT alarm currently set to " + (rightSliderHotAlarmTemperature) +" Celsius";

    var rightSliderWarmAlarmTemperature =  (220-(warmSliderRight.voffset));
    warmSliderRight.tooltip = currentRightSensorNameText + " temperature WARM alarm currently set to " + (rightSliderWarmAlarmTemperature) +" Celsius";
    rightwarmtext.tooltip = currentRightSensorNameText + " temperature WARM alarm currently set to " + (rightSliderWarmAlarmTemperature) +" Celsius";

    var leftSliderHotAlarmTemperature =  (220-(hotSliderLeft.voffset));
    hotSliderLeft.tooltip = currentLeftSensorNameText + " temperature HOT alarm currently set to " + (leftSliderHotAlarmTemperature) +" Celsius";
    lefthottext.tooltip = currentLeftSensorNameText + " temperature HOT alarm currently set to " + (leftSliderHotAlarmTemperature) +" Celsius";

    var leftSliderWarmAlarmTemperature =  (220-(warmSliderLeft.voffset));
    warmSliderLeft.tooltip = currentLeftSensorNameText + " temperature WARM alarm currently set to " + (leftSliderWarmAlarmTemperature) +" Celsius";
    leftwarmtext.tooltip = currentLeftSensorNameText + " temperature WARM alarm currently set to " + (leftSliderWarmAlarmTemperature) +" Celsius";
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

               for (var a =0;a<=80;a++)
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
                 for (var a =0;a<=87;a++)
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
                 for (var a =0;a<=193;a++)
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
          //print("speedfanexe = "+speedfanexe);
        //}

	// returns a string separated by spaces otherwise unusable
        speedfanexe = speedfanexe.split("\n");
        noofsensors = speedfanexe[1];
	//print("number of speedfan sensors = " + noofsensors );
        var temperatureString = speedfanexe[2];
        print("temperatureString = "+temperatureString);

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
           selectedLeftSensor[noofsensors-2] = 1;
           selectedRightSensor[1] = 1;

           currentLeftSensor = noofsensors-3;
           currentRightSensor = 1;

           // noofsensors-2 might always be the cpu sensor?   - needs checking

           //
           if (noofsensors >= 1) {
             print("preferences.leftThermometerDefaultSensorPref.value " + preferences.leftThermometerDefaultSensorPref.value);
             if (preferences.leftThermometerDefaultSensorPref.value != "" ) {
                  leftTemperature = parseFloat(preferences.leftThermometerDefaultSensorPref.value);
                  generateLeftSensorList(preferences.leftThermometerDefaultSensorPref.value);
             } else {
                  leftTemperature = parseFloat(SensorTemp[1]);
                  generateLeftSensorList(1);
             }
           }
           if (noofsensors >= 2) {
    	       if (preferences.rightThermometerDefaultSensorPref.value != "" ) {
                    rightTemperature = parseFloat(preferences.rightThermometerDefaultSensorPref.value);
                    generateRightSensorList(preferences.rightThermometerDefaultSensorPref.value);
               } else {
                    rightTemperature = parseFloat(SensorTemp[2]);
                    generateRightSensorList(2);
               }
           }
           if (noofsensors >= 3) {
    	       if (preferences.upper1GaugeDefaultSensorPref.value != "" ) {
                    upper1Temperature = parseFloat(preferences.upper1GaugeDefaultSensorPref.value);
                    generateUpper1SensorList(preferences.upper1GaugeDefaultSensorPref.value);
               } else {
                    upper1Temperature = parseFloat(SensorTemp[3]);
                    generateUpper1SensorList(3);
               }
           }

           if (noofsensors >= 4) {
    	       if (preferences.upper2GaugeDefaultSensorPref.value != "" ) {
                    upper2Temperature = parseFloat(preferences.upper2GaugeDefaultSensorPref.value);
                    generateUpper2SensorList(preferences.upper2GaugeDefaultSensorPref.value);
               } else {
                    upper2Temperature = parseFloat(SensorTemp[4]);
                    generateUpper2SensorList(4);
               }
           }
           if (noofsensors >= 5) {
    	       if (preferences.lower1GaugeDefaultSensorPref.value != "" ) {
                    lower1Temperature = parseFloat(preferences.lower1GaugeDefaultSensorPref.value);
                    generateLower1SensorList(preferences.lower1GaugeDefaultSensorPref.value);
               } else {
                    lower1Temperature = parseFloat(SensorTemp[5]);
                    generateLower1SensorList(5);
               }
           }
           if (noofsensors >= 6) {
    	       if (preferences.lower2GaugeDefaultSensorPref.value != "" ) {
                    lower2Temperature = parseFloat(preferences.lower2GaugeDefaultSensorPref.value);
                    generateLower2SensorList(preferences.lower2GaugeDefaultSensorPref.value);
               } else {
                    lower2Temperature = parseFloat(SensorTemp[6]);
                    generateLower2SensorList(6);
               }
            }

           // generate the sensor menus for each sensor that exists
           // Math.floor((Math.random() * noofsensors) + 1);
           getSensorList = 1;
        } else {
           //print("Second time");
           //print("currentLeftSensor "+currentLeftSensor);
           //print("leftTemperature "+leftTemperature);

           if (noofsensors>=1) {leftTemperature = parseFloat(SensorTemp[currentLeftSensor]);};
           if (noofsensors>=2) {rightTemperature = parseFloat(SensorTemp[currentRightSensor]);};
           if (noofsensors>=3) {upper1Temperature = parseFloat(SensorTemp[currentUpper1Sensor]);};
           if (noofsensors>=4) {upper2Temperature = parseFloat(SensorTemp[currentUpper2Sensor]);};
           if (noofsensors>=5) {lower1Temperature = parseFloat(SensorTemp[currentlower1Sensor]);};
           if (noofsensors>=6) {lower2Temperature = parseFloat(SensorTemp[currentlower2Sensor]);};
        }
        //print("selected sensor" + data+ " for the left hand display" + selectedLeftSensor[data]);
        //print("selected sensor" + data+ " for the right hand display" + selectedRightSensor[data]);
      }
}
//=====================
//End function
//=====================

//===============================================================
// function to read and modify the speedfan configuration file
//===============================================================
function modifySpeedfanConfiguration()
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
function generateRightSensorList(data) {
            print("selecting sensor" + data + " for the right hand thermometer" );
            // clear the previous sensor, ensure none selected
            for (var a =1;a<=noofsensors;a++)
            {
                 if (a != data) {selectedRightSensor[a] = 0;};
            }
            selectedRightSensor[data] = 1;
            currentRightSensor = data;
            SensorTingTimer.ticking = true; // set a ting for the sensor
            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a =1;a<=noofsensors;a++)
            {
              rightmenuitems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              rightmenuitems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              rightmenuitems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedRightSensor[a] == 1)
              {
                  rightmenuitems[a].checked = true;
                  currentRightSensorNameText = sensorName[a];
                  preferences.rightThermometerDefaultSensorPref.value = data;
                  //if windows XP then get the associated image and display it as the selection is made
                        //print("selecting " + sensorName[a] + " sensor");
                        buildOnScreenRightSensorNames(sensorName[a]);
                        buildRightScribeHeadNames(sensorName[a]);
              }
              else
              {
                  rightmenuitems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              if (a ==1) {rightmenuitems[a].onSelect = function( nullFunction1 ) {selectedRightSensor[1] = 1;generateRightSensorList(1);}};
              if (a ==2) {rightmenuitems[a].onSelect = function( nullFunction2 ) {selectedRightSensor[2] = 1;generateRightSensorList(2);}};
              if (a ==3) {rightmenuitems[a].onSelect = function( nullFunction3 ) {selectedRightSensor[3] = 1;generateRightSensorList(3);}};
              if (a ==4) {rightmenuitems[a].onSelect = function( nullFunction4 ) {selectedRightSensor[4] = 1;generateRightSensorList(4);}};
              if (a ==5) {rightmenuitems[a].onSelect = function( nullFunction5 ) {selectedRightSensor[5] = 1;generateRightSensorList(5);}};
              if (a ==6) {rightmenuitems[a].onSelect = function( nullFunction6 ) {selectedRightSensor[6] = 1;generateRightSensorList(6);}};
              if (a ==7) {rightmenuitems[a].onSelect = function( nullFunction7 ) {selectedRightSensor[7] = 1;generateRightSensorList(7);}};
              if (a ==8) {rightmenuitems[a].onSelect = function( nullFunction8 ) {selectedRightSensor[8] = 1;generateRightSensorList(8);}};
              if (a ==9) {rightmenuitems[a].onSelect = function( nullFunction9 ) {selectedRightSensor[9] = 1;generateRightSensorList(9);}};
              if (a ==10) {rightmenuitems[a].onSelect = function( nullFunction10 ) {selectedRightSensor[10] = 1;generateRightSensorList(10);}};
              if (a ==11) {rightmenuitems[a].onSelect = function( nullFunction11 ) {selectedRightSensor[11] = 1;generateRightSensorList(11);}};
              if (a ==12) {rightmenuitems[a].onSelect = function( nullFunction12 ) {selectedRightSensor[12] = 1;generateRightSensorList(12);}};
              if (a ==13) {rightmenuitems[a].onSelect = function( nullFunction13 ) {selectedRightSensor[13] = 1;generateRightSensorList(13);}};
              if (a ==14) {rightmenuitems[a].onSelect = function( nullFunction14 ) {selectedRightSensor[14] = 1;generateRightSensorList(14);}};
              if (a ==15) {rightmenuitems[a].onSelect = function( nullFunction15 ) {selectedRightSensor[15] = 1;generateRightSensorList(15);}};
              if (a ==16) {rightmenuitems[a].onSelect = function( nullFunction16 ) {selectedRightSensor[16] = 1;generateRightSensorList(16);}};
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
function generateLeftSensorList(data) {
            print("selecting sensor" + data + " for the left hand thermometer" );
            // clear the previous sensor, ensure none selected
            for (var a =1;a<=noofsensors;a++)
            {
                 if (a != data) {selectedLeftSensor[a] = 0;};
            }
            selectedLeftSensor[data] = 1;
            currentLeftSensor = data;
            SensorTingTimer.ticking = true; // set a ting for the sensor

            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a =1;a<=noofsensors;a++)
            {
              leftmenuitems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              leftmenuitems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              leftmenuitems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedLeftSensor[a] == 1)
              {
                  leftmenuitems[a].checked = true;
                  currentLeftSensorNameText = sensorName[a];
                  preferences.leftThermometerDefaultSensorPref.value = data;
                  //if windows XP then get the associated image and display it as the selection is made
                        //print("selecting " + sensorName[a] + " sensor");
                        buildOnScreenLeftSensorNames(sensorName[a]);
                        buildscribeHeadNoWireTwoNames(sensorName[a]);
              }
              else
              {
                  leftmenuitems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              if (a ==1) {leftmenuitems[a].onSelect = function( nullFunction1 ) {selectedLeftSensor[1] = 1;generateLeftSensorList(1);}};
              if (a ==2) {leftmenuitems[a].onSelect = function( nullFunction2 ) {selectedLeftSensor[2] = 1;generateLeftSensorList(2);}};
              if (a ==3) {leftmenuitems[a].onSelect = function( nullFunction3 ) {selectedLeftSensor[3] = 1;generateLeftSensorList(3);}};
              if (a ==4) {leftmenuitems[a].onSelect = function( nullFunction4 ) {selectedLeftSensor[4] = 1;generateLeftSensorList(4);}};
              if (a ==5) {leftmenuitems[a].onSelect = function( nullFunction5 ) {selectedLeftSensor[5] = 1;generateLeftSensorList(5);}};
              if (a ==6) {leftmenuitems[a].onSelect = function( nullFunction6 ) {selectedLeftSensor[6] = 1;generateLeftSensorList(6);}};
              if (a ==7) {leftmenuitems[a].onSelect = function( nullFunction7 ) {selectedLeftSensor[7] = 1;generateLeftSensorList(7);}};
              if (a ==8) {leftmenuitems[a].onSelect = function( nullFunction8 ) {selectedLeftSensor[8] = 1;generateLeftSensorList(8);}};
              if (a ==9) {leftmenuitems[a].onSelect = function( nullFunction9 ) {selectedLeftSensor[9] = 1;generateLeftSensorList(9);}};
              if (a ==10) {leftmenuitems[a].onSelect = function( nullFunction10 ) {selectedLeftSensor[10] = 1;generateLeftSensorList(10);}};
              if (a ==11) {leftmenuitems[a].onSelect = function( nullFunction11 ) {selectedLeftSensor[11] = 1;generateLeftSensorList(11);}};
              if (a ==12) {leftmenuitems[a].onSelect = function( nullFunction12 ) {selectedLeftSensor[12] = 1;generateLeftSensorList(12);}};
              if (a ==13) {leftmenuitems[a].onSelect = function( nullFunction13 ) {selectedLeftSensor[13] = 1;generateLeftSensorList(13);}};
              if (a ==14) {leftmenuitems[a].onSelect = function( nullFunction14 ) {selectedLeftSensor[14] = 1;generateLeftSensorList(14);}};
              if (a ==15) {leftmenuitems[a].onSelect = function( nullFunction15 ) {selectedLeftSensor[15] = 1;generateLeftSensorList(15);}};
              if (a ==16) {leftmenuitems[a].onSelect = function( nullFunction16 ) {selectedLeftSensor[16] = 1;generateLeftSensorList(16);}};
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
function generateUpper1SensorList(data) {
            print("selecting sensor" + data + " for the Upper 1 Right gauge" );
            // clear the previous sensor, ensure none selected
            for (var a =1;a<=noofsensors;a++)
            {
                 if (a != data) {selectedUpper1Sensor[a] = 0;};
            }
            selectedUpper1Sensor[data] = 1;
            currentUpper1Sensor = data;
            SensorTingTimer.ticking = true; // set a ting for the sensor

            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a =1;a<=noofsensors;a++)
            {
              upper1MenuItems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              upper1MenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              upper1MenuItems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedUpper1Sensor[a] == 1)
              {
                  upper1MenuItems[a].checked = true;
                  currentUpper1SensorNameText = sensorName[a];
                  preferences.upper1GaugeDefaultSensorPref.value = data;
                  //if windows XP then get the associated image and display it as the selection is made
                        print("selecting " + sensorName[a] + " sensor");
                        buildOnScreenUpper1SensorNames(sensorName[a]);
                        //buildUpperScribeHeadNames(sensorName[a]);
              } else {
                  upper1MenuItems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              if (a ==1) {upper1MenuItems[a].onSelect = function( nullFunction1 ) {selectedUpper1Sensor[1] = 1;generateUpper1SensorList(1);}};
              if (a ==2) {upper1MenuItems[a].onSelect = function( nullFunction2 ) {selectedUpper1Sensor[2] = 1;generateUpper1SensorList(2);}};
              if (a ==3) {upper1MenuItems[a].onSelect = function( nullFunction3 ) {selectedUpper1Sensor[3] = 1;generateUpper1SensorList(3);}};
              if (a ==4) {upper1MenuItems[a].onSelect = function( nullFunction4 ) {selectedUpper1Sensor[4] = 1;generateUpper1SensorList(4);}};
              if (a ==5) {upper1MenuItems[a].onSelect = function( nullFunction5 ) {selectedUpper1Sensor[5] = 1;generateUpper1SensorList(5);}};
              if (a ==6) {upper1MenuItems[a].onSelect = function( nullFunction6 ) {selectedUpper1Sensor[6] = 1;generateUpper1SensorList(6);}};
              if (a ==7) {upper1MenuItems[a].onSelect = function( nullFunction7 ) {selectedUpper1Sensor[7] = 1;generateUpper1SensorList(7);}};
              if (a ==8) {upper1MenuItems[a].onSelect = function( nullFunction8 ) {selectedUpper1Sensor[8] = 1;generateUpper1SensorList(8);}};
              if (a ==9) {upper1MenuItems[a].onSelect = function( nullFunction9 ) {selectedUpper1Sensor[9] = 1;generateUpper1SensorList(9);}};
              if (a ==10) {upper1MenuItems[a].onSelect = function( nullFunction10 ) {selectedUpper1Sensor[10] = 1;generateUpper1SensorList(10);}};
              if (a ==11) {upper1MenuItems[a].onSelect = function( nullFunction11 ) {selectedUpper1Sensor[11] = 1;generateUpper1SensorList(11);}};
              if (a ==12) {upper1MenuItems[a].onSelect = function( nullFunction12 ) {selectedUpper1Sensor[12] = 1;generateUpper1SensorList(12);}};
              if (a ==13) {upper1MenuItems[a].onSelect = function( nullFunction13 ) {selectedUpper1Sensor[13] = 1;generateUpper1SensorList(13);}};
              if (a ==14) {upper1MenuItems[a].onSelect = function( nullFunction14 ) {selectedUpper1Sensor[14] = 1;generateUpper1SensorList(14);}};
              if (a ==15) {upper1MenuItems[a].onSelect = function( nullFunction15 ) {selectedUpper1Sensor[15] = 1;generateUpper1SensorList(15);}};
              if (a ==16) {upper1MenuItems[a].onSelect = function( nullFunction16 ) {selectedUpper1Sensor[16] = 1;generateUpper1SensorList(16);}};
             }
             upper1MenuItems[17] = new MenuItem();
	     upper1MenuItems[17].title = "Primary Upper Gauge Sensor List Shown above";
             upper1MenuItems[18] = new MenuItem();
	     upper1MenuItems[18].title = "Select Fahrenheit for this gauge";
	     upper1MenuItems[18].onSelect = selectFahrenheitUpper1;
             //set the context menu for the thermometer background
             upper1Gauge.contextMenuItems = upper1MenuItems;
             samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================
//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateUpper2SensorList(data) {
            print("selecting sensor" + data + " for the Upper 2 Right gauge" );
            // clear the previous sensor, ensure none selected
            for (var a =1;a<=noofsensors;a++)
            {
                 if (a != data) {selectedUpper2Sensor[a] = 0;};
            }
            selectedUpper2Sensor[data] = 1;
            currentUpper2Sensor = data;
            SensorTingTimer.ticking = true; // set a ting for the sensor

            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a =1;a<=noofsensors;a++)
            {
              upper2MenuItems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              upper2MenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              upper2MenuItems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedUpper2Sensor[a] == 1)
              {
                  upper2MenuItems[a].checked = true;
                  currentUpper2SensorNameText = sensorName[a];
                  preferences.upper2GaugeDefaultSensorPref.value = data;
                  //if windows XP then get the associated image and display it as the selection is made
                        print("selecting " + sensorName[a] + " sensor");
                        buildOnScreenUpper2SensorNames(sensorName[a]);
                        //buildUpperScribeHeadNames(sensorName[a]);
              } else {
                  upper2MenuItems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              if (a ==1) {upper2MenuItems[a].onSelect = function( nullFunction1 ) {selectedUpper2Sensor[1] = 1;generateUpper2SensorList(1);}};
              if (a ==2) {upper2MenuItems[a].onSelect = function( nullFunction2 ) {selectedUpper2Sensor[2] = 1;generateUpper2SensorList(2);}};
              if (a ==3) {upper2MenuItems[a].onSelect = function( nullFunction3 ) {selectedUpper2Sensor[3] = 1;generateUpper2SensorList(3);}};
              if (a ==4) {upper2MenuItems[a].onSelect = function( nullFunction4 ) {selectedUpper2Sensor[4] = 1;generateUpper2SensorList(4);}};
              if (a ==5) {upper2MenuItems[a].onSelect = function( nullFunction5 ) {selectedUpper2Sensor[5] = 1;generateUpper2SensorList(5);}};
              if (a ==6) {upper2MenuItems[a].onSelect = function( nullFunction6 ) {selectedUpper2Sensor[6] = 1;generateUpper2SensorList(6);}};
              if (a ==7) {upper2MenuItems[a].onSelect = function( nullFunction7 ) {selectedUpper2Sensor[7] = 1;generateUpper2SensorList(7);}};
              if (a ==8) {upper2MenuItems[a].onSelect = function( nullFunction8 ) {selectedUpper2Sensor[8] = 1;generateUpper2SensorList(8);}};
              if (a ==9) {upper2MenuItems[a].onSelect = function( nullFunction9 ) {selectedUpper2Sensor[9] = 1;generateUpper2SensorList(9);}};
              if (a ==10) {upper2MenuItems[a].onSelect = function( nullFunction10 ) {selectedUpper2Sensor[10] = 1;generateUpper2SensorList(10);}};
              if (a ==11) {upper2MenuItems[a].onSelect = function( nullFunction11 ) {selectedUpper2Sensor[11] = 1;generateUpper2SensorList(11);}};
              if (a ==12) {upper2MenuItems[a].onSelect = function( nullFunction12 ) {selectedUpper2Sensor[12] = 1;generateUpper2SensorList(12);}};
              if (a ==13) {upper2MenuItems[a].onSelect = function( nullFunction13 ) {selectedUpper2Sensor[13] = 1;generateUpper2SensorList(13);}};
              if (a ==14) {upper2MenuItems[a].onSelect = function( nullFunction14 ) {selectedUpper2Sensor[14] = 1;generateUpper2SensorList(14);}};
              if (a ==15) {upper2MenuItems[a].onSelect = function( nullFunction15 ) {selectedUpper2Sensor[15] = 1;generateUpper2SensorList(15);}};
              if (a ==16) {upper2MenuItems[a].onSelect = function( nullFunction16 ) {selectedUpper2Sensor[16] = 1;generateUpper2SensorList(16);}};
             }
             upper2MenuItems[17] = new MenuItem();
	     upper2MenuItems[17].title = "Secondary Upper Gauge Sensor List Shown above";
             upper2MenuItems[18] = new MenuItem();
	     upper2MenuItems[18].title = "Select Fahrenheit for this gauge";
	     upper2MenuItems[18].onSelect = selectFahrenheitUpper2;
             //set the context menu for the thermometer background
             upper2Gauge.contextMenuItems = upper2MenuItems;
             samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================
//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateLower1SensorList(data) {
            print("selecting sensor" + data + " for the lower 1 Right gauge" );
            // clear the previous sensor, ensure none selected
            for (var a =1;a<=noofsensors;a++)
            {
                 if (a != data) {selectedlower1Sensor[a] = 0;};
            }
            selectedlower1Sensor[data] = 1;
            currentlower1Sensor = data;
            SensorTingTimer.ticking = true; // set a ting for the sensor

            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a =1;a<=noofsensors;a++)
            {
              lower1MenuItems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              lower1MenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              lower1MenuItems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedlower1Sensor[a] == 1)
              {
                  lower1MenuItems[a].checked = true;
                  currentlower1SensorNameText = sensorName[a];
                  preferences.lower1GaugeDefaultSensorPref.value = data;
                  //if windows XP then get the associated image and display it as the selection is made
                        print("selecting " + sensorName[a] + " sensor");
                        buildOnScreenlower1SensorNames(sensorName[a]);
                        //buildlower1ScribeHeadNames(sensorName[a]);
              }
              else
              {
                  lower1MenuItems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              if (a ==1) {lower1MenuItems[a].onSelect = function( nullFunction1 ) {selectedlower1Sensor[1] = 1;generateLower1SensorList(1);}};
              if (a ==2) {lower1MenuItems[a].onSelect = function( nullFunction2 ) {selectedlower1Sensor[2] = 1;generateLower1SensorList(2);}};
              if (a ==3) {lower1MenuItems[a].onSelect = function( nullFunction3 ) {selectedlower1Sensor[3] = 1;generateLower1SensorList(3);}};
              if (a ==4) {lower1MenuItems[a].onSelect = function( nullFunction4 ) {selectedlower1Sensor[4] = 1;generateLower1SensorList(4);}};
              if (a ==5) {lower1MenuItems[a].onSelect = function( nullFunction5 ) {selectedlower1Sensor[5] = 1;generateLower1SensorList(5);}};
              if (a ==6) {lower1MenuItems[a].onSelect = function( nullFunction6 ) {selectedlower1Sensor[6] = 1;generateLower1SensorList(6);}};
              if (a ==7) {lower1MenuItems[a].onSelect = function( nullFunction7 ) {selectedlower1Sensor[7] = 1;generateLower1SensorList(7);}};
              if (a ==8) {lower1MenuItems[a].onSelect = function( nullFunction8 ) {selectedlower1Sensor[8] = 1;generateLower1SensorList(8);}};
              if (a ==9) {lower1MenuItems[a].onSelect = function( nullFunction9 ) {selectedlower1Sensor[9] = 1;generateLower1SensorList(9);}};
              if (a ==10) {lower1MenuItems[a].onSelect = function( nullFunction10 ) {selectedlower1Sensor[10] = 1;generateLower1SensorList(10);}};
              if (a ==11) {lower1MenuItems[a].onSelect = function( nullFunction11 ) {selectedlower1Sensor[11] = 1;generateLower1SensorList(11);}};
              if (a ==12) {lower1MenuItems[a].onSelect = function( nullFunction12 ) {selectedlower1Sensor[12] = 1;generateLower1SensorList(12);}};
              if (a ==13) {lower1MenuItems[a].onSelect = function( nullFunction13 ) {selectedlower1Sensor[13] = 1;generateLower1SensorList(13);}};
              if (a ==14) {lower1MenuItems[a].onSelect = function( nullFunction14 ) {selectedlower1Sensor[14] = 1;generateLower1SensorList(14);}};
              if (a ==15) {lower1MenuItems[a].onSelect = function( nullFunction15 ) {selectedlower1Sensor[15] = 1;generateLower1SensorList(15);}};
              if (a ==16) {lower1MenuItems[a].onSelect = function( nullFunction16 ) {selectedlower1Sensor[16] = 1;generateLower1SensorList(16);}};
             }
             lower1MenuItems[17] = new MenuItem();
	     lower1MenuItems[17].title = "Lower Primary Gauge Sensor List Shown above";
             lower1MenuItems[18] = new MenuItem();
	     lower1MenuItems[18].title = "Select Fahrenheit for this gauge";
	     lower1MenuItems[18].onSelect = selectFahrenheitLower1;
             //set the context menu for the thermometer background
             lower1Gauge.contextMenuItems = lower1MenuItems;
             samplingTimer.interval = 0.5;   //this interval change causes the scribe to reset back to normal position quickly
}
//=====================
//End function
//=====================
//=================================================================================================
// function to select the sensor, clear the menu and determine what to do when an item is selected.
//=================================================================================================
function generateLower2SensorList(data) {
            print("selecting sensor" + data + " for the lower2 Right gauge" );
            // clear the previous sensor, ensure none selected
            for (var a =1;a<=noofsensors;a++)
            {
                 if (a != data) {selectedlower2Sensor[a] = 0;};
            }
            selectedlower2Sensor[data] = 1;
            currentlower2Sensor = data;
            SensorTingTimer.ticking = true; // set a ting for the sensor

            //loop through the sensor names adding each into the menu array changing the menu item
            for (var a =1;a<=noofsensors;a++)
            {
              lower2MenuItems[a] = new MenuItem();
              // if windows XP then display the actual sensor names, if NT 6 systems just give an unnamed list
              // if windows XP then display the actual sensor names from the config files
              lower2MenuItems[a].title = " Sensor "+a+" - " +SensorTemp[a]+" celsius " + sensorName[a];
              //enable all menu items
              lower2MenuItems[a].enabled = true;
              //if this is the selected sensor then change the image &c
              if (selectedlower2Sensor[a] == 1)
              {
                  lower2MenuItems[a].checked = true;
                  currentlower2SensorNameText = sensorName[a];
                  preferences.lower2GaugeDefaultSensorPref.value = data;
                  //if windows XP then get the associated image and display it as the selection is made
                        print("selecting " + sensorName[a] + " sensor");
                        buildOnScreenlower2SensorNames(sensorName[a]);
                        //buildlower2ScribeHeadNames(sensorName[a]);
              }
              else
              {
                  lower2MenuItems[a].checked = false;
              }
              // in the new menu we have created set what should happen if one of the sensors is selected - then call this routine
              // allows up to 16 sensors

              if (a ==1) {lower2MenuItems[a].onSelect = function( nullFunction1 ) {selectedlower2Sensor[1] = 1;generateLower2SensorList(1);}};
              if (a ==2) {lower2MenuItems[a].onSelect = function( nullFunction2 ) {selectedlower2Sensor[2] = 1;generateLower2SensorList(2);}};
              if (a ==3) {lower2MenuItems[a].onSelect = function( nullFunction3 ) {selectedlower2Sensor[3] = 1;generateLower2SensorList(3);}};
              if (a ==4) {lower2MenuItems[a].onSelect = function( nullFunction4 ) {selectedlower2Sensor[4] = 1;generateLower2SensorList(4);}};
              if (a ==5) {lower2MenuItems[a].onSelect = function( nullFunction5 ) {selectedlower2Sensor[5] = 1;generateLower2SensorList(5);}};
              if (a ==6) {lower2MenuItems[a].onSelect = function( nullFunction6 ) {selectedlower2Sensor[6] = 1;generateLower2SensorList(6);}};
              if (a ==7) {lower2MenuItems[a].onSelect = function( nullFunction7 ) {selectedlower2Sensor[7] = 1;generateLower2SensorList(7);}};
              if (a ==8) {lower2MenuItems[a].onSelect = function( nullFunction8 ) {selectedlower2Sensor[8] = 1;generateLower2SensorList(8);}};
              if (a ==9) {lower2MenuItems[a].onSelect = function( nullFunction9 ) {selectedlower2Sensor[9] = 1;generateLower2SensorList(9);}};
              if (a ==10) {lower2MenuItems[a].onSelect = function( nullFunction10 ) {selectedlower2Sensor[10] = 1;generateLower2SensorList(10);}};
              if (a ==11) {lower2MenuItems[a].onSelect = function( nullFunction11 ) {selectedlower2Sensor[11] = 1;generateLower2SensorList(11);}};
              if (a ==12) {lower2MenuItems[a].onSelect = function( nullFunction12 ) {selectedlower2Sensor[12] = 1;generateLower2SensorList(12);}};
              if (a ==13) {lower2MenuItems[a].onSelect = function( nullFunction13 ) {selectedlower2Sensor[13] = 1;generateLower2SensorList(13);}};
              if (a ==14) {lower2MenuItems[a].onSelect = function( nullFunction14 ) {selectedlower2Sensor[14] = 1;generateLower2SensorList(14);}};
              if (a ==15) {lower2MenuItems[a].onSelect = function( nullFunction15 ) {selectedlower2Sensor[15] = 1;generateLower2SensorList(15);}};
              if (a ==16) {lower2MenuItems[a].onSelect = function( nullFunction16 ) {selectedlower2Sensor[16] = 1;generateLower2SensorList(16);}};
             }
             lower2MenuItems[17] = new MenuItem();
	     lower2MenuItems[17].title = "Lower Secondary Gauge Sensor List Shown above";
             lower2MenuItems[18] = new MenuItem();
	     lower2MenuItems[18].title = "Select Fahrenheit for this gauge";
	     lower2MenuItems[18].onSelect = selectFahrenheitLower2;
             //set the context menu for the thermometer background
             lower2Gauge.contextMenuItems = lower2MenuItems;
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
function buildLeftSensorNameList(data) {

            print("selecting sensor name" + data + " for the left hand display" );
            selectedLeftSensorName[data] = 1;
            currentLeftSensorName = data;

            for (var a =1;a<=13;a++)
            {
                 if (a != data) {selectedLeftSensorName[a] = 0;};
                 addleftsensorname(a);
                 setLeftSensorImages(a);
            }

            //thermometerLeftSensorName.contextMenuItems = leftmenunameitems;
            thermometerLeft.contextMenuItems = leftmenunameitems;
}
//=====================
//End function
//=====================
//===========================================
// function to redraw Gauges
//===========================================
function RedrawUpper1Gauge() {
    upper1Pointer.rotation = upper1Temperature* 2.75;
    //upper1Gauge.tooltip = "Current temperature " + upperTemperature + " celsius - Sensor name " + currentUpperSensorNameText;
    upper1Gauge.tooltip = currentUpper1SensorNameText + " temperature "+ upper1Temperature  + " degrees celsius";
}
//=====================
//End function
//=====================
//===========================================
// function to redraw Gauges
//===========================================
function RedrawUpper2Gauge() {
    upper2Pointer.rotation = upper2Temperature * 2.75;
    upper2Gauge.tooltip = currentUpper2SensorNameText + " temperature "+ upper2Temperature  + " degrees celsius";
}
//=====================
//End function
//=====================
//===========================================
// function to redraw Gauges
//===========================================
function Redrawlower1Gauge() {
    lower1Pointer.rotation = lower1Temperature* 2.75;
    //lower1Gauge.tooltip = "Current temperature " + lower1Temperature + " celsius - Sensor name " + currentlower1SensorNameText;
    lower1Gauge.tooltip = currentlower1SensorNameText + " temperature "+ lower1Temperature  + " degrees celsius";
}
//=====================
//End function
//=====================
//===========================================
// function to redraw Gauges
//===========================================
function Redrawlower2Gauge() {
    lower2Pointer.rotation = lower2Temperature* 2.75;
    //lower2Gauge.tooltip = "Current temperature " + lower2Temperature + " celsius - Sensor name " + currentlower2SensorNameText;
    lower2Gauge.tooltip = currentlower2SensorNameText + " temperature "+ lower2Temperature  + " degrees celsius";
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

      for (var a =50;a<=255;a++)
      {
              steam.opacity = a;
              sleep (1);
              a=a+2;
      }
      for (var a =50;a<=255;a++)
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
      for (var a =50;a<=255;a++)
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
      for (var a =50;a<=255;a++)
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
function buildOnScreenRightSensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           thermometerRightSensorChar1.src = "Resources/questionmarktext.png";
           thermometerRightSensorChar2.src =  "Resources/questionmarktext.png";
           thermometerRightSensorChar3.src =  "Resources/questionmarktext.png";
           thermometerRightSensorChar4.src =  "Resources/questionmarktext.png";
           thermometerRightSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {thermometerRightSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {thermometerRightSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {thermometerRightSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {thermometerRightSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {thermometerRightSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("thermometerRightSensorChar5.src  "+thermometerRightSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================

//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenLeftSensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           thermometerLeftSensorChar1.src = "Resources/questionmarktext.png";
           thermometerLeftSensorChar2.src =  "Resources/questionmarktext.png";
           thermometerLeftSensorChar3.src =  "Resources/questionmarktext.png";
           thermometerLeftSensorChar4.src =  "Resources/questionmarktext.png";
           thermometerLeftSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {thermometerLeftSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {thermometerLeftSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {thermometerLeftSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {thermometerLeftSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {thermometerLeftSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("thermometerLeftSensorChar5.src  "+thermometerLeftSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenUpper1SensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           upper1GaugeSensorChar1.src = "Resources/questionmarktext.png";
           upper1GaugeSensorChar2.src =  "Resources/questionmarktext.png";
           upper1GaugeSensorChar3.src =  "Resources/questionmarktext.png";
           upper1GaugeSensorChar4.src =  "Resources/questionmarktext.png";
           upper1GaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {upper1GaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {upper1GaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {upper1GaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {upper1GaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {upper1GaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("upper1GaugeSensorChar5.src  "+upper1GaugeSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenUpper2SensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           upper2GaugeSensorChar1.src = "Resources/questionmarktext.png";
           upper2GaugeSensorChar2.src =  "Resources/questionmarktext.png";
           upper2GaugeSensorChar3.src =  "Resources/questionmarktext.png";
           upper2GaugeSensorChar4.src =  "Resources/questionmarktext.png";
           upper2GaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {upper2GaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {upper2GaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {upper2GaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {upper2GaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {upper2GaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("upper2GaugeSensorChar5.src  "+upper1GaugeSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================
//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenlower1SensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           lower1GaugeSensorChar1.src = "Resources/questionmarktext.png";
           lower1GaugeSensorChar2.src =  "Resources/questionmarktext.png";
           lower1GaugeSensorChar3.src =  "Resources/questionmarktext.png";
           lower1GaugeSensorChar4.src =  "Resources/questionmarktext.png";
           lower1GaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {lower1GaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {lower1GaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {lower1GaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {lower1GaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {lower1GaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("lower1GaugeSensorChar5.src  "+lower1GaugeSensorChar5.src );
                }
	   }
}
//=====================
//End function
//=====================

//===========================================
// function to extract each sensor character
//===========================================
function buildOnScreenlower2SensorNames(a) {
	   var cc = "";
	   var lettercnt = 0;
           lower2GaugeSensorChar1.src = "Resources/questionmarktext.png";
           lower2GaugeSensorChar2.src =  "Resources/questionmarktext.png";
           lower2GaugeSensorChar3.src =  "Resources/questionmarktext.png";
           lower2GaugeSensorChar4.src =  "Resources/questionmarktext.png";
           lower2GaugeSensorChar5.src =  "Resources/questionmarktext.png";
           for (var loopcount=0; loopcount < 8; loopcount ++)
	   {
                //if (lettercnt <= 5 ) {return};
                cc = a.substring(loopcount -1,loopcount);
                if (lettercnt <= 5 && cc != "" && cc != " ") {
                  lettercnt = lettercnt +  1;
                  if (lettercnt == 1) {lower2GaugeSensorChar1.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 2) {lower2GaugeSensorChar2.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 3) {lower2GaugeSensorChar3.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 4) {lower2GaugeSensorChar4.src = "Resources/"+cc+".png"; }
                  if (lettercnt == 5) {lower2GaugeSensorChar5.src = "Resources/"+cc+".png"; }
                  //print  ("lower2GaugeSensorChar5.src  "+lower2GaugeSensorChar5.src );
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
function setUpper2GaugeVisibility() {
     if (preferences.upper2GaugeShownPref.value == "enabled" && noofsensors >= 4 )
     {
        upper2GaugeLabel.visible = true;
        upper2Gauge.visible = true;
        upper2Pointer.visible = true;
        upper2GaugeSensorChar1.visible = true;
        upper2GaugeSensorChar2.visible = true;
        upper2GaugeSensorChar3.visible = true;
        upper2GaugeSensorChar4.visible = true;
        upper2GaugeSensorChar5.visible = true;
     }
     else
     {
        upper2GaugeLabel.visible = false;
        upper2Gauge.visible = false;
        upper2Pointer.visible = false;
        upper2GaugeSensorChar1.visible = false;
        upper2GaugeSensorChar2.visible = false;
        upper2GaugeSensorChar3.visible = false;
        upper2GaugeSensorChar4.visible = false;
        upper2GaugeSensorChar5.visible = false;
     }
}
//=====================
//End function
//=====================

//======================================================================================
// Function to determine lower gauge visibility, the one bottom left
//======================================================================================
function setLower1GaugeVisibility() {
     if (noofsensors >= 5)
     {
        lower1Gauge.visible = true;
        lower1Pointer.visible = true;
        lower1GaugeSensorChar1.visible = true;
        lower1GaugeSensorChar2.visible = true;
        lower1GaugeSensorChar3.visible = true;
        lower1GaugeSensorChar4.visible = true;
        lower1GaugeSensorChar5.visible = true;
     }
     else
     {
        lower1Gauge.visible = false;
        lower1Pointer.visible = false;
        lower1GaugeSensorChar1.visible = false;
        lower1GaugeSensorChar2.visible = false;
        lower1GaugeSensorChar3.visible = false;
        lower1GaugeSensorChar4.visible = false;
        lower1GaugeSensorChar5.visible = false;
     }
}
//=====================
//End function
//=====================


//======================================================================================
// Function to determine lower gauge visibility, the one bottom extreme left
//======================================================================================
function setLower2GaugeVisibility() {
     if (preferences.lower2GaugeShownPref.value == "enabled" && noofsensors >= 6)
     {
        lower2Gauge.visible = true;
        lower2Pointer.visible = true;
        lower2GaugeSensorChar1.visible = true;
        lower2GaugeSensorChar2.visible = true;
        lower2GaugeSensorChar3.visible = true;
        lower2GaugeSensorChar4.visible = true;
        lower2GaugeSensorChar5.visible = true;
     }
     else
     {
        lower2Gauge.visible = false;
        lower2Pointer.visible = false;
        lower2GaugeSensorChar1.visible = false;
        lower2GaugeSensorChar2.visible = false;
        lower2GaugeSensorChar3.visible = false;
        lower2GaugeSensorChar4.visible = false;
        lower2GaugeSensorChar5.visible = false;
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
function selectFahrenheitUpper1() {
   print ("HELP!");
   if ( upper1Gauge.src == "Resources/gauge-fahrenheit.png" ) {
     upper1Gauge.src = "Resources/gauge-celsius.png";
     preferences.upperGauge1ScalePref = "Celsius";
     upper1MenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     upper1Gauge.src = "Resources/gauge-fahrenheit.png";
     preferences.upperGauge1ScalePref = "Fahrenheit";
     upper1MenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================

//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitUpper2() {
   print ("HELP!");
   if ( upper2Gauge.src == "Resources/gauge-fahrenheit.png" ) {
     upper2Gauge.src = "Resources/gauge-celsius.png";
     preferences.upperGauge2ScalePref = "Celsius";
     upper2MenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     upper2Gauge.src = "Resources/gauge-fahrenheit.png";
     preferences.upperGauge2ScalePref = "Fahrenheit";
     upper2MenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================


//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitLower1() {
   if ( lower1Gauge.src == "Resources/cpu-gauge-fahrenheit.png" ) {
     lower1Gauge.src = "Resources/cpu-gauge-celsius.png";
     preferences.lowerGauge1ScalePref = "Celsius";
     lower1MenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     lower1Gauge.src = "Resources/cpu-gauge-fahrenheit.png";
     preferences.lowerGauge1ScalePref = "Fahrenheit";
     lower1MenuItems[18].title = "Select Celsius for this gauge";
   }
  }
//=====================
//End function
//=====================


//======================================================================================
// Function to select a fahrenheit gauge
//======================================================================================
function selectFahrenheitLower2() {
   if ( lower2Gauge.src == "Resources/cpu-gauge2-fahrenheit.png" ) {
     lower2Gauge.src = "Resources/cpu-gauge2-celsius.png";
     preferences.lowerGauge2ScalePref = "Celsius";
     lower2MenuItems[18].title = "Select Fahrenheit for this gauge";
   } else {
     lower2Gauge.src = "Resources/cpu-gauge2-fahrenheit.png";
     preferences.lowerGauge2ScalePref = "Fahrenheit";
     lower2MenuItems[18].title = "Select Celsius for this gauge";
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



cpuPlaque.onMouseDown = function () {
    popupplaque.visible = true;
    if (preferences.soundsPref.value != "mute" ) {play(newclunk, false);};

}
    
       
       
       
thermometerLeft.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
    popupMenu(thermometerLeft.contextMenuItems, (155 * thermometerScale), 0);
}


crank.onMouseDown = function () {
    crankhandle();
}



sToggle.onMouseDown = function () {
    sToggle.hoffset=373;
    if (preferences.soundsPref.value != "mute" ) {play(clunk, false);};
    gettingSpeedfan.visible=true;
    sleep(7500);
    openURL("http://www.almico.com/sfdownload.php");
    sToggle.hoffset=378;
    gettingSpeedfan.visible=false;
}


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
           //modifySpeedfanConfiguration();
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


thermometerRight
.onMouseDown = function () {
    if (preferences.soundsPref.value != "mute" ) {play(ting, false);};
        popupMenu(thermometerRight.contextMenuItems, (312 * thermometerScale), 0);
    }
