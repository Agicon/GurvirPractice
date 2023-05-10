import Base from "../testBase";
import TestUtils from "../testUtils";

class ArchivedPage extends Base {
     /*---------------------POM---------------*/
    get archivedTab() {
        return $('//span[contains(text(),"archived")]');
      }
      get unarchiveButton() {
        return $('//*[@id="my-events"]/div/div[2]/div[2]/div/div/div/div/div/button');
      }

      get deleteEventButton() {
        return $('.session-header-bottom > div:nth-of-type(2) > div:nth-of-type(1) .anticon.anticon-delete.icon-delete');
      }

      get archiveButton() {
        return $('ul[role="menu"] > li:nth-of-type(7)');
      }
      
      
  get searchEventField() {
    return $('//input[@placeholder="Type to search"]');
  }

 //-----------------------ACTION METHODS--------------//
      
 archivedTabIsDisplayed() {
    return this.archivedTab.isDisplayed();
  }

  validateArchivedTab(){
    if(this.archivedTabIsDisplayed()==true){
      console.log("archived tab is displaying sucessfully");
    }else{
      throw new Error("ARCHIVED TAB IS NOT DISPLAYED");
    }
  }
  openArchivedTab() {
    if (this.archivedTab.isDisplayed()) {
      this.archivedTab.click();
    } else {

      throw new Error("Archived tab is not clickable..!!!")
    }
  }


  clickUnarchiveButton(){
    if (this.unarchiveButton.isDisplayed()) {
      this.unarchiveButton.click();
    } else {

      throw new Error("Unarchive button is not clickable..!!!")
    }
  }

  clickDeleteEventButton(){
    if (this.deleteEventButton.isDisplayed()) {
      this.deleteEventButton.click();
    } else {

      throw new Error("Delete event button is not clickable..!!!")
    }
  }


  addDataInSearchField(standardEvent) {
    var data = TestUtils.getStandardEventData(standardEvent);//Retrive data from excel
    browser.pause(6000);
    const eventName = data[0];
    this.searchEventField.setValue(eventName);
    browser.pause(4000);
  }

  checkAndArchivedDuplicateEvents(groupName) {
    this.addDataInSearchField(groupName);
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
    
       
    } else {
      console.log("events is not found");
    }
  }

  clickOnYesArchiveButton() {

    try {
      const elem = $('.ant-modal-confirm-btns .ant-btn-primary');
      elem.waitForClickable({ timeout: 10000 });
      elem.click();

    } catch (error) {

    }


  }

  archiveButtonIsDisplayed(){
    this.archiveButton.waitForDisplayed({timeout:10000});
   return this.archiveButton.isDisplayed();
  }
  
  clickOnArchiveButton(){
    if(this.archiveButtonIsDisplayed()===true){
      this.archiveButton.click();
    }else{
      throw new Error("Archive button is not displayed");
    }
  }

  clickOnEventMenuDropDown(){
    const dropDownButton = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/div/div/button');
    browser.pause(1000)
    dropDownButton.waitForClickable({ timeout: 6000 });
    dropDownButton.click();
  }

  searchArchivedEvent(groupName) {
    this.addDataInSearchField(groupName);
    browser.refresh();
    browser.pause(2000);

    const eventName = $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/a');
    // var events = $('//*[@id="my-events"]/div/div[2]/div[1]/div[2]/span[1]');
    browser.pause(2000);
    if (eventName.isDisplayed() === true) {
      // events.waitForDisplayed({ timeout: 6000 });
    } else {
      console.log("events is not found in archived list");
    }
  }
  deleteEventButtonIsDisplayed(){
    this.deleteEventButton.waitForDisplayed({timeout:10000});
    return this.deleteEventButton.isDisplayed();
  }

  clickOnDeleteEventButton(){
    if(this.deleteEventButtonIsDisplayed()===true){
      this.deleteEventButton.click();
    }else{
      throw new Error("Delete event button is not displayed");
    }
  }
  
  unarchiveButtonIsDisplayed(){
    this.unarchiveButton.waitForDisplayed();
    return this.unarchiveButton.isDisplayed();
  }
}

export default new ArchivedPage();
