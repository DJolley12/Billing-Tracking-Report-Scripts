function assignColorSchemePerBase() {

  var formattedBaseString = basePropertyForColor.toLowerCase().trim();
  var cellString = "A" + rowNumberForFormat.toString() + ":C" + rowNumberForFormat.toString();
  
  if (formattedBaseString == "page") {
    tSS.getRange(cellString).setBackgroundRGB(84, 209, 169);
  } else if (formattedBaseString == "vernal") {
    tSS.getRange(cellString).setBackgroundRGB(41,160, 255);
  } else if (formattedBaseString == "craig") {
    tSS.getRange(cellString).setBackgroundRGB(249, 0, 255);
  } else if (formattedBaseString == "riverton") {
    tSS.getRange(cellString).setBackgroundRGB(31, 229, 25);
  } else if (formattedBaseString == "lander") {
    tSS.getRange(cellString).setBackgroundRGB(67, 94, 255);
  } else if (formattedBaseString == "moab") {
    tSS.getRange(cellString).setBackgroundRGB(253, 131, 37);
  } else if (formattedBaseString == "steamboat") {
    tSS.getRange(cellString).setBackgroundRGB(119, 68, 255);
  } else if (formattedBaseString == "los alamos") {
    tSS.getRange(cellString).setBackgroundRGB(253, 108, 201);
  } else if (formattedBaseString == "glenwood") {
    tSS.getRange(cellString).setBackgroundRGB(64, 177, 105);
  }  else if (formattedBaseString == "rawlins") {
    tSS.getRange(cellString).setBackgroundRGB(215, 79, 83);
  } else if (formattedBaseString == "fort mohave") {
    tSS.getRange(cellString).setBackgroundRGB(146, 55, 255);
  } else if (formattedBaseString == "pocatello") {
    tSS.getRange(cellString).setBackgroundRGB(88, 234, 255);
  }
}