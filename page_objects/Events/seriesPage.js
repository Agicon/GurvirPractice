import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";

class SeriesPage extends Base {
  /*---------------------POM---------------*/
  get seriesTab() {
    return $('//span[contains(text(),"series")]');
  }


  get addNewSeries() {
    return $('//*[@id="event-manage-root"]/div/div[2]/div[2]');
  }

  get createdSeriesEventBox() {
    return $('//div[@class="series-info-container"]');
  }

  get upcomingSessionDropdown() {
    return $('//div[@class="chosen series-input "]');
  }

  //-----------------------ACTION METHODS--------------//

  seriesTabIsDisplayed() {
    this.seriesTab.waitForDisplayed({ timeout: 6000 });
    return this.seriesTab.isDisplayed();
  }

  validateSeriesTab() {
    if (this.seriesTabIsDisplayed() == true) {
      console.log("series tab is displaying sucessfully");
    } else {
      throw new Error("SERIES TAB IS NOT DISPLAYED");
    }
  }
  openSeriesTab() {
    this.seriesTab.scrollIntoView(0,200)
    if (this.seriesTab.isDisplayed()) {
      this.seriesTab.click();
    } else {

      throw new Error("Series tab is not clickable..!!!")
    }
  }

  openAddNewSeriesEvent() {
    this.addNewSeries.waitForDisplayed({ timeout: 6000 });
    if (this.addNewSeries.isDisplayed()) {
      this.addNewSeries.click();
    } else {

      throw new Error("Add new series is not clickable..!!!")
    }
  }

  validateCreateNewSeriesEventPage() {

    $('//*[@id="event-manage-root"]/div/div[2]/div/div[1]/div/div[2]').waitForDisplayed({ timeout: 10000 });

    var actTitle = $("//div[@id='event-manage-root']//h1").getText();
    var expTitle = "Create New Series Event";
    if (actTitle.includes(expTitle)) {
      console.log("Create new series event page loaded successfully")
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + expTitle);
      throw new Error("Create new series event page is not loaded")
    }
  }
  addNewSeriesIsDisplay() {
    return this.addNewSeries.isDisplayed();
  }
  validateSeriesOfSessionCreated() {
    var len = $$("//tr[@class='ant-table-row ant-table-row-level-0']").length;
    var number = parseInt(len);
    if (number == "10") {
      console.log("Series of session successfully created");
    } else {
      console.log("actual length>>" + number);
      throw new Error("count of series session missmatched");
    }

  }
  validateSessionNameOnManageRegPage(eventName) {
    var actEventName = $(".series-name").getText();
    if (actEventName.includes(eventName)) {
      console.log("sesssion name is correctly displayed on mamage your registration page");
    } else {
      console.log("actual name>>" + actEventName + "expected name>>" + eventName);
      throw new Error("SESSION NAME IS MISSMATCHED ON MANAGE YOUR REGISTRATION PAGE");
    }
  }

  validateCreatedSeriesEventBox(){
this.createdSeriesEventBox.waitForDisplayed({timeout:10000});
return this.createdSeriesEventBox.isDisplayed();
  }

  validateSessionTime(time){
    var time1=time.replace(" pm", "");
    const timing=$("//span[contains(text(),'"+time1+"')]");
    return timing.isDisplayed();
  }
  clickOnUpcomingSessionButton() {
    this.upcomingSessionDropdown.waitForDisplayed({ timeout: 1000 });
    if (this.upcomingSessionDropdown.isDisplayed() === true) {
      this.upcomingSessionDropdown.click();
    } else {
      throw new Error("UPCOMING SESSION DROPDOWN BUTTON IS NOT DISPLAYED");
    }

  }
  
  validateSessionCountUnderRegPageDropdown(count){
    browser.pause(2000);
    var elem=$$("//div[@class='info-item info-date series-cursor']").length;
    if (parseInt(elem)===parseInt(count)) {
      console.log("Session count matched in dropdown list>>"+elem);
      
    } else {
      throw new Error("Session count missmatched under dropdown list actual count>>"+elem +"Expected count>>"+count);
    }
  }


}

export default new SeriesPage();