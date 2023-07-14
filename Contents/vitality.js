//===========================================================================
// vitality.js
// Steampunk Volume Widget  1.0.3
// Written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
//===========================================================================
/*properties
    appendChild, createDocument, createElement, dockOpen, hOffset, opacity,
    setAttribute, setDockItem, src, vOffset
*/

//=========================================================================
// this function builds vitality for the dock
//=========================================================================
function buildVitality(bg, perc) {
	var d, v, dock_bg, w, vit,txt;

	if (!widget.dockOpen) { return; }

	d = XMLDOM.createDocument();
	v = d.createElement("dock-item");
	v.setAttribute("version", "1.0");
	d.appendChild(v);

	dock_bg = d.createElement("image");
	dock_bg.setAttribute("src", bg);
	dock_bg.setAttribute("hOffset", 0);
	dock_bg.setAttribute("vOffset", 0);
	v.appendChild(dock_bg);

	w = d.createElement("text");
	w.setAttribute("hOffset", "5");
	w.setAttribute("vOffset", "20");
	w.setAttribute("hAlign", "left");
	w.setAttribute("style", "text-align: left;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 14px; color: #ffffff; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");

    	vit = String(perc) + " degrees";
	w.setAttribute("data", vit);
	v.appendChild(w);

	w = d.createElement("text");
	w.setAttribute("hOffset", "5");
	w.setAttribute("vOffset", "30");
	w.setAttribute("hAlign", "left");
	w.setAttribute("style", "text-align: left;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 14px; color: #ffffff; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");

    	txt = "centigrade";
	w.setAttribute("data", txt);
	v.appendChild(w);

	widget.setDockItem(d, "fade");
}
//=====================
//End function
//=====================
