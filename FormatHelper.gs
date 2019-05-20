function getCurrentMonthFileName() {
  
  var date = new Date();
  var currentMonthInt = date.getMonth();
  var currentYear = date.getYear().toString();
  
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  var currentMonthYearFile = months[currentMonthInt] + ' ' + currentYear + ' Med Crew Daily Tracking';
  
  return currentMonthYearFile;
}

function getCurrentYearFolderName() {
  
  var date = new Date();
  var currentYear = date.getYear().toString();
  
  return currentYear;
}

function createNewSheet() { 
  
}

function returnColumnFromCurrentDayOfMonth() {
  
  var column;
  switch (new Date().getDate()) {
    case 1:
      column = "C";
      return column;
    case 2:
      column = "D";
      return column;
    case 3:
      column = "E";
      return column;
    case 4:
      column = "F";
      return column;
    case 5:
      column = "G";
      return column;
    case 6:
      column = "H";
      return column;
    case 7:
      column = "I";
      return column;
    case 8:
      column = "J";
      return column;
    case 9:
      column = "K";
      return column;
    case 10:
      column = "L";
      return column;
    case 11:
      column = "M";
      return column;
    case 12:
      column = "N";
      return column;
    case 13:
      column = "O";
      return column;
    case 14:
      column = "P";
      return column;
    case 15:
      column = "Q";
      return column;
    case 16:
      column = "R";
      return column;
    case 17:
      column = "S";
      return column;
    case 18:
      column = "T";
      return column;
    case 19:
      column = "U";
      return column;
    case 20:
      column = "V";
      return column;
    case 21:
      column = "W";
      return column;
    case 22:
      column = "X";
      return column;
    case 23:
      column = "Y";
      return column;
    case 24:
      column = "Z";
      return column;
    case 25:
      column = "AA";
      return column;
    case 26:
      column = "AB";
      return column;
    case 27:
      column = "AC";
      return column;
    case 28:
      column = "AD";
      return column;
    case 29:
      column = "AE";
      return column;
    case 30:
      column = "AF";
      return column;
    case 31:
      column = "AG";
      return column;
  }
}