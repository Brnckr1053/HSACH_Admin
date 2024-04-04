function updateMotivationalQuote() {
  // Get the active presentation
  var presentation = SlidesApp.getActivePresentation();
  
  // Get the active slide
  var slide = presentation.getSlides()[0]; // Change slide index as needed

  // Get the active sheet in the Google Sheets file
  var sheet = SpreadsheetApp.openById('1GJehDPtQjTX7-nzur0bAl73a0Is_PMA89tYpEAf31jg').getActiveSheet(); // Replace with your actual sheet ID

  // Calculate the total number of quotes available
  var lastRow = sheet.getLastRow();
  var totalQuotes = lastRow - 1; // Assuming quotes start from row 2

  // Calculate the number of weekdays passed this year, excluding weekends
  var today = new Date();
  var startOfYear = new Date(today.getFullYear(), 0, 0);
  var diff = today - startOfYear;
  var oneDay = 1000 * 60 * 60 * 24;
  var dayOfYear = Math.floor(diff / oneDay);
  var weekdays = 0;

  for (var i = 0; i < dayOfYear; i++) {
    var day = new Date(today.getFullYear(), 0, i).getDay();
    if (day != 0 && day != 6) { // 0 for Sunday and 6 for Saturday
      weekdays++;
    }
  }
  
  // Determine the quote to display based on the number of weekdays modulo the total number of quotes
  var quoteIndex = (weekdays % totalQuotes) + 1; // +1 since quotes start from row 2

  // Get the quote for today
  var quote = sheet.getRange(quoteIndex + 1, 1).getValue(); // Quotes are assumed to be in Column A

  // Clear text in the second text box
  slide.getShapes()[1].getText().setText('');

  // Add the new quote to the slide
  slide.getShapes()[1].getText().setText(quote); // Assuming the quote is in the first text box, adjust as needed

  console.log("Quote for today: " + quote);
}


// function updateMotivationalQuote() {

//   var now = new Date();


//   //if (now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() === 7){


//     // Get the active presentation
//     var presentation = SlidesApp.getActivePresentation();
    
//     // Get the active slide
//     var slide = presentation.getSlides()[0]; // Change slide index as needed

//     // Get the active sheet in the Google Sheets file
//     var sheet = SpreadsheetApp.openById('1GJehDPtQjTX7-nzur0bAl73a0Is_PMA89tYpEAf31jg').getActiveSheet(); // Replace 'YOUR_SHEET_ID' with your actual sheet ID

//     // Get today's day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
//     var dayOfWeek = new Date().getDay();

//     // Get the quote for today
//     var quote = sheet.getRange(dayOfWeek + 1, 1).getValue(); // Assuming quotes are in Column A

//     // Clear text in the second text box
//     slide.getShapes()[1].getText().setText('');


//     // Add the new quote to the slide
//     slide.getShapes()[1].getText().setText(quote); // Assuming the quote is in the first text box, adjust as needed

//   //}  

//   console.log("Quote for today: " + quote);

// }
