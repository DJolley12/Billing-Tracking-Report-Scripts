function returnMedicObjectArray() {
  
  //status board spreadsheet
  var sbApp = SpreadsheetApp;
  var sbSS = sbApp.getActiveSpreadsheet();
  //var currentSheet = sbSS.getActiveSheet();
  var currentSheet = statusBoardSheet;
  
  var medics = [];
  for (i = 3; i < 47; i++) { 
    
    var statusBoardColumnNumberString = i.toString();
    var score = currentSheet.getRange("V" + statusBoardColumnNumberString).getValue().toString().trim();
    
    var medic = {name: currentSheet.getRange("T" + statusBoardColumnNumberString).getValue().trim().toUpperCase(), 
                 number: currentSheet.getRange("R" + statusBoardColumnNumberString).getValue().trim().toUpperCase(), 
                 base: currentSheet.getRange("A" + statusBoardColumnNumberString).getValue().trim().toUpperCase(),
                 checkedIn: false};
    
    //if base is empty string, search for previous base and assign
    if (medic.base.toString() === "" && medic.number !== "") {
      
      for (m = medics.length - 1; m >= 0; i--) {
        
        //Logger.log(m);
        //Logger.log(medic.name);
        
        if (medics[m].base !== "") {
          
          medic.base = medics[m].base;
          
          //page base often has different medic phones, if page is base, medic number is determined by row number - 2, because medic rows start at row 3
          if (medic.base === "PAGE") {
            medic.number = "MEDIC " + (i - 2).toString();
          }
          medic.checkedIn = isMedicCheckedIn(score);
          medics.push(medic);
          break;
        }
      }
    } else if (medic.base.toString() !== "") {
    
      if (medic.base === "PAGE") {
        medic.number = "MEDIC " + (i - 2).toString();
      }
      medic.checkedIn = isMedicCheckedIn(score);
      medics.push(medic);
    }
  }
  return medics;
}

function parseMedicNumber(number) {
  
  var medicNumber;
  
  for (i = 1; i < 36; i++) {
    
    var medicNumberPos1 = number.search(i.toString());
    
    if (medicNumberPos1 !== -1) {
      medicNumber = number.substring(medicNumberPos1, number.length);
      break; 
    }
  }
  return medicNumber;
}

function changeMedicNumberFormat() {
  
  var medicTitle;
  
  for (i = 0; i < Medics.length; i++) {
    
    var medicRNOrMedInt = Medics[i].number.indexOf("RN")
    
    if (medicRNOrMedInt !== -1) {
      medicTitle = Medics[i].number.replace("RN", "MEDIC");
      Medics[i].number = medicTitle;
    }
  }
}

function testMedicNumber() {
  
  var number = "";
  var medicNumber;
  
  for (i = 1; i < 36; i++) {
    
    var medicNumberPos1 = number.search(i.toString());
    
    if (medicNumberPos1 !== -1) {
      medicNumber = number.substring(medicNumberPos1, number.length);
      break; 
    }
  }
  return medicNumber;
}

function isMedicCheckedIn(score) {
  
  var checkedIn;
  
  if (score.indexOf("*") !== -1) {
    checkedIn = false;    
  } else {
    checkedIn = true;
  }
  return checkedIn;
}

function returnAssetArray() {
    
  //status board spreadsheet
  var sbApp = SpreadsheetApp;
  var sbSS = sbApp.getActiveSpreadsheet();
  //var currentSheet = sbSS.getActiveSheet();
  var currentSheet = statusBoardSheet;
  
  
  var assets = [];
  for (i = 3; i < 47; i++) { 
    
    var statusBoardColumnNumberString = i.toString();
    
    var asset = {tailNumber: currentSheet.getRange("D" + statusBoardColumnNumberString).getValue().trim().toUpperCase(), 
                 type: currentSheet.getRange("B" + statusBoardColumnNumberString).getValue().trim().toUpperCase(), 
                 base: currentSheet.getRange("A" + statusBoardColumnNumberString).getValue().trim().toUpperCase()};
    
    //if base is empty string, search for previous base and assign
    if (asset.base === "" && asset.type !== "") {
      
      for (m = assets.length -1; m >= 0; i--) {
        
        if (assets[m].base !== "") {
          
          asset.base = assets[m].base;
          assets.push(asset);
          break;
        }
      }
    } else if (asset.base.toString() !== "") {
      
      assets.push(asset);
    }
  }
  return assets;
}

function returnOutOfServiceAircraftArray() {
  
  var outOfServiceAircraftArray = [];
  var aircraftTailNumbers = ["N407CH", "N210PT", "N407JM", "N253PC", "N181CG", "N407FC", "N407CP", "N407ZM", "N407TK", "N407CN", "N407LP", "N7160V", "N429CH", "N407TH", "N407LF"];
  var oosAircraft;
  //needs another for loop inside due to different lengths of arrays
  for (i = 0; i < aircraftTailNumbers.length; i++) {
    
    for (a = 0; a < Assets.length; a++) {
      
      if (aircraftTailNumbers[i] === Assets[a].tailNumber) {
        
        oosAircraft = undefined;
        break;
      } 
      
      oosAircraft = aircraftTailNumbers[i];
    }
    
    if (oosAircraft !== undefined) {

      outOfServiceAircraftArray.push(oosAircraft);
    }
  }
  return outOfServiceAircraftArray;
}

function returnPilotArray() {
    
  //status board spreadsheet
  var sbApp = SpreadsheetApp;
  var sbSS = sbApp.getActiveSpreadsheet();
  //var currentSheet = sbSS.getActiveSheet();
  var currentSheet = statusBoardSheet;
  
  
  var pilots = [];
  for (i = 3; i < 47; i++) { 
      
    var statusBoardColumnNumberString = i.toString();
    
    var pilot = {name: currentSheet.getRange("F" + statusBoardColumnNumberString).getValue().trim().toUpperCase(), 
                 shift: currentSheet.getRange("E" + statusBoardColumnNumberString).getValue().trim().toUpperCase(), 
                 base: currentSheet.getRange("A" + statusBoardColumnNumberString).getValue().trim().toUpperCase(),
                 role: currentSheet.getRange("B" + statusBoardColumnNumberString).getValue().trim().toUpperCase()};
    
    //if base is empty string, search for previous base and assign
    if (pilot.base === "" && pilot.shift !== "") {
      
      for (m = pilots.length-1; m >= 0; i--) {
        
        if (pilots[m].base !== "") {
          
          pilot.base = pilots[m].base;
          break;
        }
      }
    } else if (pilot.base.toString() !== "" && pilot.role.toString() !== "") {
      
      pilots.push(pilot);
    }
    
    if (pilot.role === "" && pilot.shift !== "") {
      
      for (m = pilots.length - 1; m >= 0; i--) {
        
        //check if previous pilot has empty role, if not, then assign to current pilot
        if (pilots[m].role !== "") {
          
          pilot.role = pilots[m].role;
          pilots.push(pilot);
          break;
        } else if (pilot.base.toString() !== "" && pilot.role.toString() !== "") {
          
          pilots.push(pilot);
        }
      }
    } else if (pilot.role !== "" && pilot.shift !== "" && pilot.name !== "" && pilot.base !== "") {
      
      pilots.push(pilot);
    }
  }
  return pilots;
}

function returnRawMedicArray() {
  
  var currentSheet = statusBoardSheet;
  var rawMedics = {name: currentSheet.getRange("P3:P46").getValues(), 
                   number: currentSheet.getRange("O3:O46").getValues(), 
                   base: currentSheet.getRange("A3:A46").getValues()};
  
  var rawMedicNames = currentSheet.getRange("P3:P46").getValues();
  var rawMedicNumbers = currentSheet.getRange("O3:O46").getValues();
  var rawMedicBases = currentSheet.getRange("A3:A46").getValues();
  
  var cleanMedics = [];
  //Logger.log(rawMedics[1][1]);
  for (i = 0; i < rawMedicNames.length; i++) { 
    
    medic = {name: rawMedicNames[i].toString(),
             number: rawMedicNumbers[i].toString(),
             base: rawMedicBases[i].toString()};
    Logger.log(medic.name);

    
    //if base is empty string, search for previous base and assign
    if (medic.base.toString() === "" && medic.number.toString() !== "") {
      
      for (m = rawMedicBases.length - 1; m >= 0; i--) {
        
        if (medic.base !== "") {
          
          medic.base = rawMedicBases[m].toString();
          cleanMedics.push(medic);
          break;
        }
      }
    } else if (medic.base.toString() !== "") {
    
      cleanMedics.push(medic);
    }
  }
  return cleanMedics
}