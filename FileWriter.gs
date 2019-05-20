var basePropertyForColor;
var medicNumberForRow;
var columnOneContents;
var columnTwoContents;
var columnThreeContents;

var billingFolder = DriveApp.getFolderById("1mdVc3_U99SIhRXkCfkCteLCu9Vm5FInb");
var currentYearFolderName = getCurrentYearFolderName();
var billingYearFolder;// = billingFolder.getFoldersByName(currentYearFolderName);
var trackingFileName = getCurrentMonthFileName();
var trackingFile;// = DriveApp.getFilesByName(trackingFileName);
var tApp = SpreadsheetApp;
var tSS;// = tApp.open(trackingFile.next());

var rowNumberForFormat;

function writeMedicsToBillingFile() {
  
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  tSS = tApp.open(trackingFile.next());
  
  for (j = 0; j < Medics.length; j++) {
    
    columnOneContents = Medics[j].base;
    columnTwoContents = Medics[j].number;
    columnThreeContents = Medics[j].name;
    trackingFileRowNumberString = j.toString();
    //assignColorSchemePerBase();
    var row = getMedicRowNumber();
    var column = returnColumnFromCurrentDayOfMonth();

    if (Medics[j].number.toString() === "") {
      Logger.log('empty string caught ' + j);
      
    } else if (row == undefined || column == undefined || Medics[j].name == "") {
    } else {
      
      var cellToWriteTo = tSS.getRange(column + row);
      var cellToWriteToData = cellToWriteTo.getValue();
      
      if (cellToWriteToData == "") {
        //Logger.log(row.toString());
        Logger.log(column.toString());
        Logger.log(Medics[j].name);
        cellToWriteTo.setValue(Medics[j].name);
        if (Medics[j].checkedIn === false) {
          cellToWriteTo.setBackground("yellow");
        }
        //tSS.getRange("B" + trackingFileColumnNumberString).setValue(Medics[j].number);
        //tSS.getRange("A" + trackingFileColumnNumberString).setValue(Medics[j].base);
      }
    }
  }
}

function getMedicRowNumber() {
 
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  tSS = tApp.open(trackingFile.next());
  
  for (i = 1; i < 36; i++) { 
    
    var trackingFileRowNumberString = i.toString();
    //var bases = ["page", "vernal", "craig", "riverton", "lander", "moab", "steamboat", "los alamos", "glenwood", "rawlins", "fort mohave", "pocatello", "pagosa springs"];
    var cell = tSS.getRange("B" + trackingFileRowNumberString);
    var cellData = cell.getValue();
    var cellContents = cellData.toString().trim().toUpperCase();
    var rowNumber;
    Logger.log(trackingFileRowNumberString);
    Logger.log(cell);
    Logger.log("cellContents: " + cellContents);

  
    if (columnTwoContents === cellContents) {
      
      rowNumber = cell.getRowIndex().toString();
      Logger.log("row number: " + rowNumber);
      Logger.log("medic number for row: " + medicNumberForRow);
      Logger.log("cell contents two: " + cellContents);
      break;
    }
  }
  return rowNumber;
}

function writeAssetsToBillingFile() {

  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  tSS = tApp.open(trackingFile.next());
  
  for (j = 0; j < Assets.length; j++) {

    columnOneContents = Assets[j].base;
    columnTwoContents = Assets[j].type;
    var row = getAssetRowNumber();
    var column = returnColumnFromCurrentDayOfMonth();
    Logger.log(columnOneContents);
    Logger.log(columnTwoContents);
    Logger.log(row);
    Logger.log(column);
    
    
    //assignColorSchemePerBase();

    if (Assets[j].tailNumber.toString() === "") {
      Logger.log('empty string caught ' + j);
      
    } else if (row == undefined || column == undefined) {
    } 
    else {
      Logger.log(columnOneContents);
      Logger.log(columnTwoContents);
      tSS.getRange(column + row).setValue(Assets[j].tailNumber);
      //tSS.getRange("B" + trackingFileColumnNumberString).setValue(Assets[j].type);
      //tSS.getRange("A" + trackingFileColumnNumberString).setValue(Assets[j].base);
    }
  }
}

function getAssetRowNumber() {
  
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  tSS = tApp.open(trackingFile.next());
  
  for (i = 36; i < 55; i++) {

    var trackingFileRowNumberString = i.toString();
    var baseCell = tSS.getRange("A" + trackingFileRowNumberString);
    var typeCell = tSS.getRange("B" + trackingFileRowNumberString);
    var baseCellData = baseCell.getValue();
    var typeCellData = typeCell.getValue();
    var baseCellContents = baseCellData.toString().trim().toUpperCase();
    var typeCellContents = typeCellData.toString().trim().toUpperCase();
    var rowNumber;
    Logger.log(trackingFileRowNumberString);
  
    if (columnOneContents === baseCellContents) {
      
      if (columnTwoContents === typeCellContents) {
        
        rowNumber = baseCell.getRowIndex().toString();
        //Logger.log(rowNumber);
        break;
      }
    }
  }
  return rowNumber;
}

function writePilotsToBillingFile() {
  
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  tSS = tApp.open(trackingFile.next());
  
  for (j = 0; j < Pilots.length; j++) {
    
    columnOneContents = Pilots[j].base;
    columnTwoContents = Pilots[j].role + " " + Pilots[j].shift;
    basePropertyForColor = Pilots[j].base;
    var row = getPilotRowNumber();
    var column = returnColumnFromCurrentDayOfMonth();

    
    //assignColorSchemePerBase();

    if (Pilots[j].shift.toString() === "") {
      Logger.log('empty string caught ' + j);
      
    } else if (row == undefined || column == undefined) {
    } else {
      
      var cellToWriteTo = tSS.getRange(column + row);
      var cellToWriteToData = cellToWriteTo.getValue();
      Logger.log(cellToWriteToData);
      
      if (cellToWriteToData == "") {
        
        cellToWriteTo.setValue(Pilots[j].name);
        //tSS.getRange("B" + trackingFileColumnNumberString).setValue(Pilots[j].role + " " + Pilots[j].shift);
        //tSS.getRange("A" + trackingFileColumnNumberString).setValue(Pilots[j].base);
      }
    }
  }
}

function getPilotRowNumber() {
  
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  tSS = tApp.open(trackingFile.next());
  
  for (i = 57; i < 86; i++) {

    var trackingFileRowNumberString = i.toString();
    var baseCell = tSS.getRange("A" + trackingFileRowNumberString);
    var typeCell = tSS.getRange("B" + trackingFileRowNumberString);
    var baseCellData = baseCell.getValue();
    var typeCellData = typeCell.getValue();
    var baseCellContents = baseCellData.toString().trim().toUpperCase();
    var typeCellContents = typeCellData.toString().trim().toUpperCase();
    var rowNumber;
  
    if (columnOneContents === baseCellContents && columnTwoContents === typeCellContents) {
      
      rowNumber = baseCell.getRowIndex();
      Logger.log(rowNumber);
      break;
    }
  }
  return rowNumber;
}