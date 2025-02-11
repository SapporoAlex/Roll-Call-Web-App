function doGet(e) {

  Logger.log(e);
  return HtmlService.createTemplateFromFile("index").evaluate();

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function getRollCallData(day) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(day);
  var data = sheet.getDataRange().getValues();
  return data;
}

function submitRollCall(statusMap, day, date) {
  var id = "16RHpniWui9jBucDFMvj2z3Oh_8NyTh_9LvhRnYGACm0";
  var sheet = SpreadsheetApp.openById(id).getSheetByName(day);
  var data = sheet.getDataRange().getValues();
  if (date == "") {
    var today = new Date().toISOString().split("T")[0];
    today = today.slice(5).replace("-", "");
  }
  else {
    today = date;
  }


  // Find the column for today's date, or create one
  var dateRow = data[0]; 
  var colIndex = dateRow.indexOf(today);

  if (colIndex === -1) { 
    colIndex = dateRow.length;
    sheet.getRange(1, colIndex + 1).setValue(today);
  }

  // Loop through student names and update their status
  for (var i = 1; i < data.length; i++) {
    var studentName = data[i][0];
    if (statusMap[studentName] !== undefined) {
      sheet.getRange(i + 1, colIndex + 1).setValue(statusMap[studentName] ? "✅" : "❌");
    }
  }

  return "Attendance recorded!";
}


function viewRecords(day) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(day);
  if (!sheet) return [];

  return sheet.getDataRange().getValues();
}