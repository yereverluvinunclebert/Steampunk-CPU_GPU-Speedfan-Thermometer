// Put the Unix tempmonitor file in the Widget's Resources folder.

// Do this once to extract the file to the Widget's data folder.
var tempmonitor = widget.extractFile("Resources/tempmonitor");

function escapePath(path) {
	return path.replace(/([\W])/g, '\\$1');
}

function getCpu1Temp() {
	var data = runCommand(escapePath(tempmonitor) + " -c -a -l"),
		temp = data.match(/^CPU Core 1\: (\d+) C$/m);
		
	if (temp === null) { return null; }
	return temp[1];
}

function getCpu2Temp() {
	var data = runCommand(escapePath(tempmonitor) + " -c -a -l"),
		temp = data.match(/^CPU Core 2\: (\d+) C$/m);
		
	if (temp === null) { return null; }
	return temp[1];
}

function getGpuTemp() {
	var data = runCommand(escapePath(tempmonitor) + " -c -a -l"),
		temp = data.match(/^SMC GPU DIODE\: (\d+) C$/m);
		
	if (temp === null) { return null; }
	return temp[1];
}

print("cpu1Temp: " + getCpu1Temp());
print("cpu2Temp: " + getCpu2Temp());
print("gpuTemp:  " + getGpuTemp());
