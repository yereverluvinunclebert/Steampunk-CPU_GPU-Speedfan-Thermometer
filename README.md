# Steampunk-CPU_GPU-Speedfan-Thermometer
 
Steampunk CPU_GPU Speedfan Thermometer Yahoo Widget, written in Javascript and 
XML for the Yahoo Widget (Konfabulator) Engine. Created for XP, Vista, Win7, 8, 
10+.  

![steampunk_cpu_gpu_thermometer_widget_for_speedfan_by_yereverluvinuncleber_d4lri07-375w-2x](https://github.com/yereverluvinunclebert/Steampunk-CPU_GPU-Speedfan-Thermometer/assets/2788342/386269b8-17d4-45fb-aad0-ea4879e0cb6b)

This Speedfan Thermometer widget is an attractive dieselpunk Yahoo widget for 
your desktop. 

Fed up with the standard windows interface I have created another Steampunk look 
for an essential utility which provides temperature information - preventing 
overheating damaging your laptop/desktop PC. Does a real job and looks good too. 
Be aware that it needs Speedfan and Yahoo widgets - If you do not understand why 
please do not download my widget...

 ![cpu-gpu-thermometers](https://github.com/yereverluvinunclebert/Steampunk-CPU_GPU-Speedfan-Thermometer/assets/2788342/2ad2e0e9-b9d3-46b3-9cd8-c89393e25659)

Functional and gorgeous at the same time. This Widget is a moveable widget that 
you can move anywhere around the desktop as you require.

The widget can be resized - Hover the cursor over the widget. Press the CTRL key 
and use your mousewheel up or down. The widget will resize dynamically.

All javascript widgets need an engine to function, in this case the widget uses 
the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
creates the widget according to the XML description and using the images you 
provide. 

Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/ 
	Adobe Photoshop CS ver 8.0 (2003)  https://www.adobe.com/uk/products/photoshop/free-trial-download.html  
	Yahoo Widgets SDK: engine (Konfabulator), runtime, debugger & documentation

Tested on :

	ReactOS 0.4.14 32bit on virtualBox    
	Windows 7 Professional 32bit on Intel    
	Windows 7 Ultimate 64bit on Intel    
	Windows 7 Professional 64bit on Intel    
	Windows XP SP3 32bit on Intel    
	Windows 10 Home 64bit on Intel    
	Windows 10 Home 64bit on AMD    
	Windows 11 64bit on Intel  	

 Dependencies:
 
 o A windows-alike o/s such as Windows XP, 7-11.    	
 o Speedfan temperature installation software.
 o Installation of the yahoo widget SDK runtime engine.  
 
	Yahoo widget engine for Windows - http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg
	Speedfan - https://www.almico.com/sfdownload.php

Running the widget using a javascript engine frees javascript from running only 
within the captivity of a browser, you will now be able to run these widgets on 
your Windows desktop as long as you have the correct widget engine installed.

 
Instructions for running Yahoo widgets on Windows
=================================================

1. Install yahoo widget SDK runtime engine
2. Download the gauge from this repo.
3. Unzip it
4. Double-click on the resulting .KON file and it will install and run

Instructions for running Yahoo widgets on Mac OS/X ONLY
========================================================

1. Install yahoo widget SDK runtime engine for Mac
2. Download the gauge from this repo.
3. Unzip it
4. For all all recent versions of Mac OS/X up to Catalina, edit the following 
file:

com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
for these lines: 
   
	<key>DockOpen</key>  
	<string>false</string>  

Change to false if it is true.

5. Double-click on the widgets .KON file and it will install and run

With these instructions you should be able to start Yahoo! Widgets and the 
menubar item should appear. Widgets can then be started from the menubar or by 
double-clicking on the KON file in the usual way. Note although all Windows Yahoo 
widgets will run on Mac Os/X prior to Catalina, they may need additional supporting 
components. For example this widgets uses Speedfan which is not avaialable for 
Mac OS/X.

 
Instructions for the Steampunk-CPU_GPU-Speedfan-Thermometer
===========================================================

1. Install yahoo widget SDK runtime engine
2. Install Speedfan and run it.
3. In Speedfan open the configuration and click the log tab
4. Select the Enable check box, leave all other logging options as they are.
5. Run the widget, it should just find the speedfan location and start using it.


LICENCE AGREEMENTS:

Copyright 2023 Dean Beedell

In addition to the GNU General Public Licence please be aware that you may use
any of my own imagery in your own creations but commercially only with my
permission. In all other non-commercial cases I require a credit to the
original artist using my name or one of my pseudonyms and a link to my site.
With regard to the commercial use of incorporated images, permission and a
licence would need to be obtained from the original owner and creator, ie. me.
