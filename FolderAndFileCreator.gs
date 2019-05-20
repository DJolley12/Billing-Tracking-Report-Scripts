function checkCurrentYearFolder() {
 
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName);

  var madeFolders = getFolders(currentYearFolderName);

  if (madeFolders === null) {
    
    createNewYearFolder();
  }
}

function checkIfFileExists() { 
  
  trackingFile = DriveApp.getFilesByName(trackingFileName);
  
  var madeFiles = getFiles();
  
  if (madeFiles === null) {
    
    createCopyOfTemplateFile();
  }
}

function createCopyOfTemplateFile() {
  
  billingYearFolder = billingFolder.getFoldersByName(currentYearFolderName).next();
  DriveApp.getFileById("1LLPNQq2O7x9fh_Zvg4U7upX9cPF76T6rVQ2SYDxaj54").makeCopy(trackingFileName, billingYearFolder);
}

function createNewYearFolder() {
  billingFolder.createFolder(currentYearFolderName);
}

function getFolders(folderName) {      
  var folders = billingFolder.getFoldersByName(folderName);     
  if (folders.hasNext()) {
    var folder = folders.next();
    return folder
  }
  return null;
}

function getFiles(fileName) {      
  var files = DriveApp.getFilesByName(trackingFileName);
  if (files.hasNext()) { 
    var file = files.next();
    var parents = file.getParents();
    while (parents.hasNext()) {
      var parent = parents.next();
      if (parent.getName() === currentYearFolderName) {
        return file;
      }
    }
  }
  return null;
}
