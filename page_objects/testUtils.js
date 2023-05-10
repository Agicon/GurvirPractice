import EventPage from "./Events/eventPage";
import homePage from "./HomePage/homePage";
import MeetingRoomPage from "../page_objects/MeetingRoom/meetingRoomPage";
var xlsx = require("xlsx");
var Excel = require("exceljs");

class Testutils {
  getUserCredetials(user) {
    var matched = []; // the array to store matched questions..
    var workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./page_objects/testData/files/usersCredentials.xlsx")
      .then(function () {
        var worksheet = workbook.getWorksheet("userCredentials");

        var actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);

        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          var rowValue = row.getCell(1).value;

          var rowOneValue = rowValue.toString().replace(",", "");

          if (user.match(rowOneValue)) {
            console.log(" ");
            console.log(
              "________________________________________________________________________"
            );
            console.log(
              "DATA IS MATCHED AT ROW NO. " + rowNumber + " AS: " + rowOneValue
            );
            console.log(
              "________________________________________________________________________"
            );

            var userId = row.getCell(2).value; //retrive userId
            console.log("UserID: " + userId);

            var password = row.getCell(3).value; //retrive passowrd
            console.log(
              "Password: " + password.toString().replace(password, "********")
            );

            var userName = row.getCell(4).value; //retrive UserName
            console.log("UserName: " + userName);
            var userAddress = row.getCell(5).value; //retrive UserName
            console.log("UserAddress: " + userAddress);

            matched.push(userId, password, userName, userAddress);
          }
        });
      });
    return matched;
  }


  getStandardEventData(user) {

    var matched = []; // the array to store matched questions..
    var workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./page_objects/testData/files/usersCredentials.xlsx")
      .then(function () {
        var worksheet = workbook.getWorksheet("Standard Event");

        var actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);
        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          var rowValue = row.getCell(1).value;

          var rowOneValue = rowValue.toString().replace(",", "");

          if (user.match(rowOneValue)) {
            console.log(" ");
            console.log(
              "________________________________________________________________________"
            );
            console.log(
              "DATA IS MATCHED AT ROW NO. " + rowNumber + " AS: " + rowOneValue
            );
            console.log(
              "________________________________________________________________________"
            );
            var value0 = row.getCell(2).value; //retrive value0
            console.log("UserID: " + value0);

            var value1 = row.getCell(3).value; //retrive value1
            console.log(
              "DATA:" + value1);
            var value2 = row.getCell(4).value; //retrive value2
            console.log("UserName: " + value2);
            matched.push(value0, value1, value2);
          }
        });
      });
    return matched;

  }


  getSeriesEventData(user) {
    var matched = []; // the array to store matched questions..
    var workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./page_objects/testData/files/usersCredentials.xlsx")
      .then(function () {
        var worksheet = workbook.getWorksheet("Series Event");

        var actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);
        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          var rowValue = row.getCell(1).value;
          var rowOneValue = rowValue.toString().replace(",", "");
          if (user.match(rowOneValue)) {
            console.log(" ");
            console.log(
              "________________________________________________________________________"
            );
            console.log(
              "DATA IS MATCHED AT ROW NO. " + rowNumber + " AS: " + rowOneValue
            );
            console.log(
              "________________________________________________________________________"
            );
            var value0 = row.getCell(2).value; //retrive value0
            console.log("UserID: " + value0);

            var value1 = row.getCell(3).value; //retrive value1
            console.log(
              "DATA:" + value1);
            var value2 = row.getCell(4).value; //retrive value2
            console.log("UserName: " + value2);
            matched.push(value0, value1, value2);
          }
        });
      });
    return matched;
  }

  getEmailForRegistration(user) {
    var matched = []; // the array to store matched questions..
    var workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./page_objects/testData/files/usersCredentials.xlsx")
      .then(function () {
        var worksheet = workbook.getWorksheet("RegistrationEmails");

        var actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);
        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          var rowValue = row.getCell(1).value;

          var rowOneValue = rowValue.toString().replace(",", "");

          if (user.match(rowOneValue)) {
            console.log(" ");
            console.log(
              "________________________________________________________________________"
            );
            console.log(
              "DATA IS MATCHED AT ROW NO. " + rowNumber + " AS: " + rowOneValue
            );
            console.log(
              "________________________________________________________________________"
            );
            var value0 = row.getCell(2).value; //retrive value0
            console.log("UserID: " + value0);

            var value1 = row.getCell(3).value; //retrive value1
            console.log(
              "DATA:" + value1);
            var value2 = row.getCell(4).value; //retrive value2
            console.log("UserName: " + value2);
            matched.push(value0, value1, value2);
          }
        });
      });
    return matched;

  }

  getAutomatedEventData(user) {
    var matched = []; // the array to store matched questions..
    var workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./page_objects/testData/files/usersCredentials.xlsx")
      .then(function () {
        var worksheet = workbook.getWorksheet("Automated Event");
        var actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);
        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          var rowValue = row.getCell(1).value;

          var rowOneValue = rowValue.toString().replace(",", "");

          if (user.match(rowOneValue)) {
            console.log(" ");
            console.log(
              "________________________________________________________________________"
            );
            console.log(
              "DATA IS MATCHED AT ROW NO. " + rowNumber + " AS: " + rowOneValue
            );
            console.log(
              "________________________________________________________________________"
            );
            var value0 = row.getCell(2).value; //retrive value0
            console.log("UserID: " + value0);

            var value1 = row.getCell(3).value; //retrive value1
            console.log(
              "DATA:" + value1);
            var value2 = row.getCell(4).value; //retrive value2
            console.log("UserName: " + value2);
            matched.push(value0, value1, value2);
          }
        });
      });
    return matched;

  }

  switchToFrame(frameId) {
    const iFrame = $("" + frameId + "");
    iFrame.waitForDisplayed({ timeout: 60000 });

    browser.switchToFrame(iFrame);
  }

  switchToParentFrame() {
    //browser.switchToParentFrame();

    function getQuestionsFromSet(setName) {
      var matched = []; // the array to store matched questions..
      $.each(questionSets, function (index, obj) {
        if (obj.label == setName) {
          console.log(obj.value); // array with some objects as values, which is what I expect.
          matched.push(obj.value); // push the matched ones
        }
      });
      return matched; // **return** it
    }
  }

  generateTime() {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );

    // prints time in HH:MM format
    console.log(hours + ":" + minutes);

    var time =
      year +
      ":" +
      month +
      ":" +
      date +
      ":" +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;

    return time;
  }

  getcTime() {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();
    var min = parseInt(minutes) + 1;



    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      min +
      ":" +
      seconds
    );

    // prints time in HH:MM format
    console.log(hours + ":" + min);

    var time =

      hours +
      ":" +
      min + 1;

    return time;
  }

  clickArchiveEventPopup() {

    try {
      const elem = $('//div[@class="confirm-modal-buttons"]//button[2]|//div[@class="ant-modal-confirm-btns"]//button[2]');
      elem.waitForClickable({ timeout: 10000 });
      elem.click();
      browser.pause(5000);

    } catch (error) {

    }


  }

  generateCurrentTime() {
    var time = new Date();
    var cTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return cTime + 1;
  }


  checkAndArchivedDuplicateEvents(groupName) {
    EventPage.addDataInSearchField(groupName);
    browser.refresh();
    browser.pause(2000);

    const eventName = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/a');
    var events = $('//*[@id="my-events"]/div/div[2]/div[1]/div[2]/span[1]');
    browser.pause(2000);
    if (eventName.isDisplayed() === true) {
      events.waitForDisplayed({ timeout: 6000 });
      var count = events.getText();
      console.log("COUNT:" + count)
      var length = count.replace("Events", "");
      console.log("LENGTH: " + length);
      console.log("Duplucate Group Counts:" + length);
      const dropDownButton = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/div/div/button');
      var i = 1;
      do {
        //eventName.scrollIntoView();
        eventName.waitForDisplayed({ timeout: 15000 });
        browser.pause(1000)
        dropDownButton.waitForClickable({ timeout: 6000 });
        dropDownButton.click();
        browser.pause(3000)
        const archiveButton = $("//li[contains(text(),'Archive')]");
        archiveButton.waitForDisplayed({ timeout: 10000 });
        // archiveButton.scrollIntoView();
        archiveButton.click();
        browser.pause(3000);
        this.clickArchiveEventPopup();
        i++;

      } while (i <= length);
    } else {
      console.log("Duplicate events is not found");
    }
  }

  getDayName(day) {
    if (day === "Mon") {
      return 'Monday';
    } else if (day === "Tue") {
      return 'Tuesday';
    } else if (day === "Wed") {
      return 'Wednesday';
    } else if (day === "Thu") {
      return 'Thursday';
    } else if (day === 'Fri') {
      return 'Friday';
    } else if (day === 'Sat') {
      return 'Saturday';
    } else if (day === 'Sun') {
      return 'Sunday';

    } else {
      throw new Error("DAY NAME IS NOT MATCHED");
    }
  }

  getMonthName(month) {
    if (month === "Jan") {
      return 'January';
    } else if (month === "Feb") {
      return 'February';
    } else if (month === "Mar") {
      return 'March';
    } else if (month === "Apr") {
      return 'April';
    } else if (month === 'May') {
      return 'May';
    } else if (month === 'Jun') {
      return 'June';
    } else if (month === 'Jul') {
      return 'July';
    } else if (month === "Aug") {
      return 'August';
    } else if (month === "Sep") {
      return 'September';
    } else if (month === "Oct") {
      return 'October';
    } else if (month === 'Nov') {
      return 'November';
    } else if (month === 'Dec') {
      return 'December';
    }
    else {
      throw new Error("MONTH NAME IS NOT MATCHED");
    }
  }


  searchCreatedEvent(groupName) {
    EventPage.addDataInSearchField(groupName);
    // browser.refresh();
    browser.pause(2000);
    const eventName = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/a');
    eventName.waitForDisplayed({ timeout: 100000 });
    if (eventName.isDisplayed() === true) {
      eventName.click();
    } else {
      throw new Error("Event is not found please create the event before search")
    }
  }

  checkAndArchivedDuplicateStandardEvents() {
    EventPage.clickOnAllTab();
    // browser.refresh();
    browser.pause(2000);
    const eventName = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/a');
    var events = $('//*[@id="my-events"]/div/div[2]/div[1]/div[2]/span[1]');
    browser.pause(2000);
    if (eventName.isDisplayed() === true) {
      events.waitForDisplayed({ timeout: 6000 });
      var count = events.getText();
      console.log("COUNT:" + count)
      var length = count.replace("Events", "");
      console.log("LENGTH: " + length);
      console.log("Duplucate Group Counts:" + length);
      const dropDownButton = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/div/div/button');
      var i = 1;
      do {
        //eventName.scrollIntoView();
        eventName.waitForDisplayed({ timeout: 15000 });
        browser.pause(1000)
        dropDownButton.waitForClickable({ timeout: 6000 });
        dropDownButton.click();
        browser.pause(3000)
        const archiveButton = $("//li[contains(text(),'Archive')]");
        archiveButton.waitForDisplayed({ timeout: 10000 });
        archiveButton.scrollIntoView();
        archiveButton.click();
        browser.pause(3000);
        this.clickArchiveEventPopup();
        i++;

      } while (i <= length);
    } else {
      console.log("Duplicate events is not found");
    }
  }

EndIfAnySessionIsInProgress(){
  EventPage.clickOnAllTab();
  // browser.refresh();
  browser.pause(2000);
  const eventName = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/a');
  var events = $('//*[@id="my-events"]/div/div[2]/div[1]/div[2]/span[1]');
  browser.pause(2000);
  if (eventName.isDisplayed() === true) {
    events.waitForDisplayed({ timeout: 6000 });
    var count = events.getText();
    console.log("COUNT:" + count)
    var length = count.replace("Events", "");
    console.log("LENGTH: " + length);
    console.log("Duplucate Group Counts:" + length);
    var i = 1;
    do {
      //eventName.scrollIntoView();

      eventName.waitForDisplayed({ timeout: 15000 });
      browser.pause(1000)
      eventName.waitForClickable({ timeout: 6000 });
      eventName.click();
      browser.pause(3000)

    if ($("//span[@class='in-progress-animation session-list']").isDisplayed()===true) {
      EventPage.clickOnCustomizeTab();
      EventPage.clickOnEventAdminsTab();
      EventPage.clickOnGuestTab();
      browser.pause(2000);
      MeetingRoomPage.clickOnHostSessionDropDown();
      MeetingRoomPage.clickOnCopyJoinLinkButton();
      MeetingRoomPage.openJoinRoomLinkInFirstTab();
      EventPage.switchToWindowNewTab();
      var actURL = browser.getUrl();
      browser.url(actURL + "?skip");
      $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
     
      EventPage.clickOnJoinRoomBtnUnderJoin();
      browser.pause(3000);
      if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
        $("//a[contains(text(),'JOIN ANYWAYS')]").click();
      } else {
        console.log("Join anyways button is not dispalyed");
      }
    
      MeetingRoomPage.clickOnLeftHeaderSessionTitle();
      MeetingRoomPage.clickOnEndSessionButton();
      MeetingRoomPage.clickOnYesEndButton();
      EventPage.closeResentWindow();
      EventPage.switchToManageEventWindow();
    } else {
      console.log("No session is running");
    }
    EventPage.openSessionOptionsList();
      const archiveButton = $("//li[contains(text(),'Archive')]");
      archiveButton.waitForDisplayed({ timeout: 10000 });
      archiveButton.moveTo();
      archiveButton.click();
      browser.pause(3000);
      this.clickArchiveEventPopup();
      browser.back();
      i++;

    } while (i <= length);
  } else {
    console.log("Duplicate events is not found");
  }
}
}

export default new Testutils();
