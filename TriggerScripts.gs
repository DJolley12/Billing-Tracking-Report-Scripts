function executeEveryDayAtSixPM() {
    ScriptApp.newTrigger("main")
    .timeBased()
    .everyDays(1)
    .atHour(18)
    .nearMinute(00)
    .create();
  }

function executeStartOfMonth() {
  ScriptApp.newTrigger()
  .timeBased()
  .onMonthDay(1)
  .atHour(4)
  .nearMinute(00)
  .create();
}

function executeEveryDayAtFiveAM() {
  ScriptApp.newTrigger()
  .timeBased()
  .everyDays(1)
  .atHour(5)
  .nearMinute(15)
  .create();
}