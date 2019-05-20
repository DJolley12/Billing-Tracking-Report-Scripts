var Medics;
var Assets;
var Pilots;

var statusBoardURL = "https://docs.google.com/spreadsheets/d/1aDhg2NZfEx791INTEpZQWoXQEc5tGQWl-oEBtG4vqiU/edit?pli=1#gid=1830506211";
var statusBoardSheet = SpreadsheetApp.openByUrl(statusBoardURL).getSheetByName('Status Board');

function main() {
  
  //if current year folder doesn't exist or current month file doesn't exist, create one
  checkCurrentYearFolder();
  checkIfFileExists();
  
  //create object arrays of three categories
  Medics = returnMedicObjectArray();
  //medic number needs to have format "MEDIC (number)" to write to template file
  changeMedicNumberFormat();
  Assets = returnAssetArray();
  Pilots = returnPilotArray();
  
  //the FileWriter class is sensitive to spelling for all categories used to match objects to the correct cell. 
  //Both objects and cell keys are converted to uppercase and trimmed of beginning and end white spaces
  
  //find medics based on medic number in box on tracker
  writeMedicsToBillingFile();
  //find asset based on base and aircraft type  
  writeAssetsToBillingFile();
  //find pilot based on type, shift and base
  writePilotsToBillingFile();
} 