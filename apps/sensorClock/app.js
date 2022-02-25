const Layout = require("Layout");
const storage = require('Storage');
const locale = require("locale");

Graphics.prototype.setFontAudiowide = function() {
  // Actual height 33 (36 - 4)
  var widths = atob("CiAsESQjJSQkHyQkDA==");
  var font = atob("AAAAAAAAAAAAAAAAAAAAAPAAAAAAAfgAAAAAAfgAAAAAAfgAAAAAAfgAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAADgAAAAAAHgAAAAAAfgAAAAAA/gAAAAAD/gAAAAAH/gAAAAAf/AAAAAB/8AAAAAD/4AAAAAP/gAAAAAf/AAAAAB/8AAAAAD/4AAAAAP/gAAAAAf+AAAAAB/8AAAAAH/wAAAAAP/gAAAAA/+AAAAAB/8AAAAAD/wAAAAAD/gAAAAAD+AAAAAAD4AAAAAADwAAAAAADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAA//+AAAAB///AAAAH///wAAAP///4AAAf///8AAA////+AAA/4AP+AAB/gAD/AAB/AA9/AAD+AB+/gAD+AD+/gAD+AD+/gAD8AH+fgAD8AP8fgAD8AP4fgAD8Af4fgAD8A/wfgAD8A/gfgAD8B/gfgAD8D/AfgAD8D+AfgAD8H+AfgAD8P8AfgAD8P4AfgAD8f4AfgAD8/wAfgAD8/gAfgAD+/gA/gAD+/AA/gAB/eAB/AAB/sAD/AAB/wAH/AAA////+AAAf///8AAAP///4AAAH///wAAAD///gAAAA//+AAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAD8AAAAAAD8AAAAAAD8AAAAAAD8AAAAAAD8AAAAAAD/////gAD/////gAD/////gAD/////gAD/////gAD/////gAD/////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAH//gAAAAP//gAD8Af//gAD8A///gAD8B///gAD8B///gAD8B/AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD+D+AfgAD//+AfgAD//+AfgAB//8AfgAA//4AfgAAf/wAfgAAP/gAfgAAB8AAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD+B+A/gAD/////gAB/////AAB/////AAA////+AAAf///8AAAP///4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4AAAAD//8AAAAD//+AAAAD//+AAAAD//+AAAAD//+AAAAD//+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAAAB+AAAAD/////gAD/////gAD/////gAD/////gAD/////gAD/////gAD/////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//AAfgAD//wAfgAD//4AfgAD//8AfgAD//8AfgAD//+AfgAD8D+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B/A/gAD8B///gAD8B///gAD8A///AAD8A///AAAAAf/+AAAAAP/4AAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///AAAAH///wAAAf///8AAAf///8AAA////+AAB/////AAB/h+H/AAD/B+B/gAD+B+A/gAD+B+A/gAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B/A/gAD8B///gAD8B///gAD8A///AAAAAf//AAAAAf/+AAAAAH/4AAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAD8AAAAAAD8AAAAAAD8AAAAAAD8AAAAgAD8AAABgAD8AAAHgAD8AAAfgAD8AAA/gAD8AAD/gAD8AAP/gAD8AA//gAD8AB//AAD8AH/8AAD8Af/wAAD8A//AAAD8D/+AAAD8P/4AAAD8f/gAAAD9//AAAAD//8AAAAD//wAAAAD//gAAAAD/+AAAAAD/4AAAAAD/wAAAAAD/AAAAAAD8AAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAAH/4AAAAAP/8AAAH+f/+AAAf////AAA/////gAB/////gAB///A/gAD//+AfgAD//+AfgAD+D+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD+D+AfgAD//+AfgAD//+AfgAB///A/gAB/////gAA/////AAAP////AAAD+f/+AAAAAP/8AAAAAH/4AAAAAA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAf/wAAAAA//4AAAAB//8AAAAB//8AfgAD//+AfgAD/D+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD8B+AfgAD+B+A/gAD+B+A/gAD/B+B/gAB/////AAB/////AAA////+AAAf///8AAAP///4AAAH///wAAAB///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAPAAAA/AAfgAAA/AAfgAAA/AAfgAAA/AAfgAAAeAAPAAAAAAAAAAAAAAAAAAAAAAAAAA");
  var scale = 1; // size multiplier for this font
  g.setFontCustom(font, 46, widths, 48+(scale<<8)+(1<<16));
};
Graphics.prototype.setFontAudiowideSmall = function() {
// Actual height 16 (15 - 0)
var widths = atob("BQQGDAkOCwMHBwkJBAkDCw8GDAwMDAwKDAwEBAgJCAsLDQ0MDQwMDQ4EDA0MDw4ODQ4NDAwNDBANDQsGCwYHCwkKCwoLCgkLCwQECwUOCwsLCwkKCQsLDwsLCgcEBwoI");
var font = atob("AAAAAAAAAAAAAAAA/7D/sAAAeAB4AAAAeAB4AAAAAAABgBnwH/D/wPmAGfAf8P+A+YAZAAAAHgA+wD7A9vD28DfAN4ACAAAAAAA8AH4AZhB+cD3wA8APAD3gc/BDMAOwAfAAwACAP+B/8GYwZjBmMGAwYPAB4AGAAAAAAHgAeAAAAD/A//Dw+MA8AAwABAAEAAzAHPD8//A/wAAAAABuAHwA/wD/AHwAbgAAAAAABgAGAAYAP8A/wAYABgAGAAAAAAQAPAA4AAAAAAYABgAGAAYABgAGAAYAAAAAAAAwADAAAAAQAHAB8APADwA+APgA4ADAAAAAAAA/wH/g8PDh8MOwxzDPMM4w3DD4cPjwf+A/wAAAwADAAP/w//AAAAAAAAAD8MfwxjDGMMYwxjDGMOYw/jB8MAAAAADGMMYwxjDGMMYwxjDmMP/wf+AAAAAAAAD+AP4ABgAGAAYABgAGAAYA//D/8AAAAAD8MP4wxjDGMMYwxjDGMMYwx/DD4ACAAAA/wH/g5nDGMMYwxjDGMMYwx/AD4AAAwADAEMBwwfDD4M+A/gD4AOAAQAAAAAPgf/D/cMYwxjDGMMYw/3B/8APgAAA4AH4A/jDGMMYwxjDGMMYw5nB/4D/AAAAAABgwGDAAAAAIGHgYcAAABgAPAB8AO4BxwGDAQEAAAAAAGYAZgBmAGYAZgBmAGYAAAAAAQEBgwHHAO4AfAA4ABADAAMAAwADHsMewxgDGAP4A/gA4AAAAA4Af8BnwH/AfwB/AH8AfwB/AB4AAAAAAH/B/8HGA4YDhgMGAwYDBgMGA//D/8AAAAAD/8P/wwDDGMMYwxjDGMM4w/zB/8APgAAAAAH/g//DAMMAwwDDAMMAwwDDAMMAwAAAAAP/w//DAMMAwwDDAMMAw4HDw8H/gP8AAAAAA/+D/8MZwxjDGMMYwxjDGMMYwwDAAAAAA//D/8MAAxgDGAMYAxgDGAMYAwAAAAAAAf+D/8MAwxjDGMMYwxjDGMMYwx/DH8AAAAAD/8P/wBgAGAAYABgAGAAYABgD/8P/wAAAAAAAA//D/8AAAADAAMAAwADAAMAAwADAAcP/w/+AAAAAAAAD/8P/wAAAGAA8AH4A/wHng8PDgcMAQAAAAAP/w//AAMAAwADAAMAAwADAAMAAwAAAAAP/w//B8AB8AB8AB8ADwAfAHwB8AfAD/8P/wAAAAAP/w//BwADgAHgAPAAeAA8AB4P/w//AAAAAAAAA/wH/g8PDgcMAwwDDAMMAw4HDgcH/gP8AAAAAAf/D/8OAAwYDBgMGAwYDBgOOA/4B/AAAAAAA/wH/g4HDgcMAwwDDAMMA44Hzw/H/kP8AAAAAA//D/8MAAwwDDgMPAw8DD4Mdw/zB+EAAAAAB8MP4w5jDGMMYwxjDGMMYwx3DH8APgwADAAMAAwADAAP/w//DAAMAAwADAAMAAAAD/gP/gAOAAcABwADAAMAAwADD/8P/wAACAAOAA+AA/AA/AA/AA8APgD4B+APgA4ACAAP4A//AP8AHwB8AfADwAPAAfAAfAA+AP8P/w/gCAAIAQ4HDw8HngP8APAB+AP8B54OBwwDCAEAAAAAD+AP8ABwADAAPwA/AD8AMABwD/AP4AAAAAAMBwwPDB8MPwx7DeMPww+DDwMOAwAAD//P/8gBwADAAMgADAAPAAfAAeAAeAA+AA8AAwABAAAAAAAAwADP/8//wAADwAcADgAOAAeAA8AAAAAAAABgAGAAYABgAGAAYABgAGAAYAAAAAgACAAMAAwADAAAAAAAAAAAHgA/AbMBswGzAbMBswH/AP4AAAAAD/4P/wAHAYMBgwGDAYMB/wD+ADgAAAD+Af8BgwGDAYMBgwGDAYMAAAAAAP4B/wHHAYMBgwGDAYMP/w/+AAAAAAD+Af8BgwGbAZsBmwGbAfgA8AAAD/8P/wwACYAJgAmACYAJgAAAAP4B/wGDMYMxgzGDMcNx//D/4AAAAA//D/8AAAGAAYABgAGAAf8A/wB/AAAJ/wn/AAAAAHn/+f/gAAAAD/8P/wAwAHgAfAD+Ac8BhwEDAQEAAA/+D/8ABwADAP8B/wH/AYABgAGAAf8B/wHAAYABwAH/AP8AAAD/Af8B/wGAAYABgAGAAcAB/wD/AAAAAAD+Af8BgwGDAYMBgwHHAf8A/gAAAAAA/+H/4cABgwGDAYMBgwH/AP4AOAAAAP4B/wGDAYMBgwGDAcMB/+D/4AAAAAD/Af8BwAGAAYABgAGAAYAAAADzAfMBswGzAbMBswG/AZ4ADAGAAYABgA//D/8BgAGAAYABgAAAAf4B/wAHAAMAAwADAAMB/wH/AAAAAAH/Af8ABwAHAA4AHgA8AfgB4AGAAAAB/wH/AB4APAB4AP4B/wH/AA4AHgB4AfABwAEAAQEBgwHHAf4A/AB4AP4B7wGHAQMAAQAAAf4B/wAHAAMwAzADMAMx//H/4f+BggGHAY8BnwG/AfsB8wHDAYMAAABgAHAP/4//yAHAAMAAAAAP/8//wAAAAAAAyAHP/8//gHAAYAAAAHAAYABgAHAAcAAwADAAcABgAAADAAMAAAACAAMAAAAAAA");
var scale = 1; // size multiplier for this font
g.setFontCustom(font, 32, widths, 16+(scale<<8)+(1<<16));
}

// weather icons from https://icons8.com/icon/set/weather/color
var sunIcon = require("heatshrink").decompress(atob("mEwwhC/AH4AbhvQC6vd7ouVC4IwUCwIwUFwQwQCYgAHDZQXc9wACC6QWDDAgXN7wXF9oXPCwowDC5guGGAYXMCw4wCC5RGJJAZGTJBiNISIylQVJrLCC5owGF65fXR7AwBC5jvhC7JIILxapDFxAXOGAy9KC4owGBAQXODAgHDC54AHC8T0FAAQSOGg4qPGA4WUGAIuVC7AA/AH4AEA="));

var partSunIcon = require("heatshrink").decompress(atob("mEwwhC/AH4AY6AWVhvdC6vd7owUFwIABFiYAFGR4Xa93u9oXTCwIYDC6HeC4fuC56MBC4ySOIwpIQXYQXHmYABRpwXECwQYKF5HjC4kwL5gQCAYYwO7wqFAAowK7wWKJBgXLJBPd6YX/AAoVMAAM/Cw0DC5yRHCx5JGFyAwGCyIwFC/4XyR4inXa64wRFwowQCw4A/AH4AkA"));

var cloudIcon = require("heatshrink").decompress(atob("mEwwhC/AH4A/AH4AtgczmYWWDCgWDmcwIKAuEGBoSGGCAWKC7BIKIxYX6CpgABn4tUSJIWPJIwuQGAwWRGAoX/C+SPEU67XXGCIuFGCAWHAH4A/AH4A/ADg="));

var snowIcon = require("heatshrink").decompress(atob("mEwwhC/AH4AhxGAC9YUBC4QZRhAVBAIWIC6QAEI6IYEI5cIBgwWOC64NCKohHPNox3RBgqnQEo7XPHpKONR5AXYAH4ASLa4XWXILiBC6r5LDBgWWDBRrKC5hsCEacIHawvMCIwvQC5QvQFAROEfZ5ADLJ4YGCywvVI7CPGC9IA/AH4AF"));

var rainIcon = require("heatshrink").decompress(atob("mEwwhC/AH4AFgczmYWWDCgWDmcwIKAuEGBoSGGCAWKC7BIKIxYX6CpgABn4tUSJIWPJIwuQGAwWRGAoX/C+SPEU67XXGCIuFGCAWHAGeIBJEIwAVJhGIC5AJBC5QMJEJQMEC44JBC6QSCC54FHLxgNBBgYSEDgKpPMhQXneSwuUAH4A/AA4="));

var stormIcon = require("heatshrink").decompress(atob("mEwwhC/AFEzmcwCyoYUgYXDmYuVGAY0OFwocHC6pNLCxYXYJBQXuCxhhJRpgYKCyBKFFyIXFCyJIFC/4XaO66nU3eza6k7C4IWFGBwXBCwwwO3ewC5AZMC6RaCIxZiI3e7AYYwRCQIIBC4QwPIQIpDC5owDhYREIxgAEFIouNC4orDFyBGBGAcLC6BaFhYWRLSRIFISQXcCyqhRAH4Az"));

// err icon - https://icons8.com/icons/set/error
var errIcon = require("heatshrink").decompress(atob("mEwwkBiIA/AH4AZUAIWUiAXBWqgXXdIYuVGCgXBgICCIyYXCJCQTDC6QrEMCQSEJCQRFC6ApGJCCiDDQSpQFAYXEJBqNGJCA/EC4ZIOEwgXFJBgNEAhKlNAgxIKBgoXEJBjsLC5TsIeRycMBhRrMMBKzQEozjOBxAgHGww+IA6wfSH4hnIC47OMSJqlRIJAXCACIXaGoQARPwwuTAH4A/ABw"));

var houseIcon = require("heatshrink").decompress(atob("mEwwYvsgmACJ8kyQQOhIRBoARNpIRBpAQMgQRCpIRMiQRDkARLBwMn+QUBPRYRBn/+CIKAKGQNN///9MkyAQIgIRBv4RB/6AKF4OTCAX/8iAIPQWfCIf8QBB6CCAYABQBB6CCIqAHPQYRFQA56EAAqAFPQwAFBYIRChJ6FAAqABSQR6GAAqABSQQjBCBKACEYUBPQyAGNYZ6GGwwRX/J0BZAX27dt34R/CP4RLUKIR/CP4RHg4RL8ARDAH4AXA=="))

/**
Get room values stored by Gadgetbridge
*/

function getValues() {
  let temperatures = storage.readJSON('temperatures.json');
  return temperatures;
}

/**
Choose weather icon to display based on condition.
Based on function from the Bangle weather app so it should handle all of the conditions
sent from gadget bridge.
*/
function chooseIcon(condition) {
  condition = condition.toLowerCase();
  if (condition.includes("thunderstorm")) return stormIcon;
  if (condition.includes("freezing") || condition.includes("snow") ||
    condition.includes("sleet")) {
    return snowIcon;
  }
  if (condition.includes("drizzle") ||
    condition.includes("shower")) {
    return rainIcon;
  }
  if (condition.includes("rain")) return rainIcon;
  if (condition.includes("clear")) return sunIcon;
  if (condition.includes("few clouds")) return partSunIcon;
  if (condition.includes("scattered clouds")) return cloudIcon;
  if (condition.includes("clouds")) return cloudIcon;
  if (condition.includes("mist") ||
    condition.includes("smoke") ||
    condition.includes("haze") ||
    condition.includes("sand") ||
    condition.includes("dust") ||
    condition.includes("fog") ||
    condition.includes("ash") ||
    condition.includes("squalls") ||
    condition.includes("tornado")) {
    return cloudIcon;
  }
  return cloudIcon;
}

/*
* Choose weather icon to display based on weather conditition code
* https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/
function chooseIconByCode(code) {
  const codeGroup = Math.round(code / 100);
  switch (codeGroup) {
    case 2: return stormIcon;
    case 3: return rainIcon;
    case 5: return rainIcon;
    case 6: return snowIcon;
    case 7: return cloudIcon;
    case 8:
      switch (code) {
        case 800: return sunIcon;
        case 801: return partSunIcon;
        default: return cloudIcon;
      }
      break;
    default: return cloudIcon;
  }
}

/**
Get weather stored in json file by weather app.
*/
function getWeather() {
  let jsonWeather = storage.readJSON('weather.json');
  return jsonWeather;
}

var clockLayout = new Layout({
  type: "v", c: [
    { type: "txt", font: "Audiowide", halign: 0, fillx: 1, pad: 8, label: "00:00", id: "time" },
    {
      type: "h", fillx: 1, c: [
        { type: "txt", font: "AudiowideSmall", label: "THU", id: "dow" },
        { type: "txt", font: "AudiowideSmall", label: "01/01/1970", id: "date" }
      ]
    },
    {
      type: "h", valign: 1, fillx: 1, c: [
        { type: "img", filly: 1, halign: -1, id: "weatherIcon", src: sunIcon },
        { type: "txt", font: "10%", id: "temp", label: "00 °F" }
      ]
    },
    {
      type: "h", valign: 1, fillx: 1, c: [
        { type: "img", filly: 1, halign: -1, id: "homeIcon", src: houseIcon },
        { type: "txt", font: "10%", id: "temp2", label: "00 °F" }
      ]
    }
  ]
});

// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function () {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}

function draw() {
  var date = new Date();
  clockLayout.time.label = locale.time(date, 1);
  clockLayout.date.label = locale.date(date, 1).toUpperCase();
  clockLayout.dow.label = locale.dow(date, 1).toUpperCase() + " ";

  var weatherJson = getWeather();
  var temps = getValues();

  //var br = temps.bedroom;

  if (weatherJson && weatherJson.weather) {
    var currentWeather = weatherJson.weather;
    const temp = locale.temp(currentWeather.temp - 273.15).match(/^(\D*\d*)(.*)$/);
    const tempf = (temp[1] * 1.8) + 32
    clockLayout.temp.label = tempf + " °F";
    const code = currentWeather.code || -1;
    if (code > 0) {
      clockLayout.weatherIcon.src = chooseIconByCode(code);
    } else {
      clockLayout.weatherIcon.src = chooseIcon(currentWeather.txt);
    }
    const lr = temps.livingroom;
    clockLayout.temp2.label = lr + " °F";

  }
  else {
    clockLayout.temp.label = "Err";
    clockLayout.temp2.label = "No Data";
    clockLayout.weatherIcon.src = errIcon;
    clockLayout.homeIcon.src = houseIcon;
  }
  clockLayout.clear();
  clockLayout.render();
  // queue draw in one minute
  queueDraw();
}

g.clear();
Bangle.setUI("clock");  // Show launcher when middle button pressed
Bangle.loadWidgets();
Bangle.drawWidgets();
clockLayout.render();
draw();
