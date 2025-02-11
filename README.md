# Roll Call Web App

Written in the Apps Script extension of Google Sheets. This web app uses a lightweight Excel database to store student names, dates and attendance.
Students are filtered by day which correspond to an Excel page. The user can view attendance records by day, and submit attendance for a custom date, or default current date.

<img src="https://github.com/SapporoAlex/Roll-Call-Web-App/blob/main/rollcall.jpg" width="400px" height="auto">
<img src="https://github.com/SapporoAlex/Roll-Call-Web-App/blob/main/records.jpg" width="400px" height="auto">

## Usage

1. Open a new Google Sheets Spreadsheet.
2. Create a new sheet for each day/class.
3. Open Apps Script in extensions.
4. Create files for index.html, html-js.html, html-css.html, and Code.gs.
5. Adapt "day" variable in html-js.html, and selectDay() function, this is how we choose the page accessed by the table.
6. Deploy as web app, and save the URL to your mobile device.

## NB

The names used in the Excel file supplied do not represent real people. The current version I use personally is not available here.
