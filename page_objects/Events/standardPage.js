import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";

class StandardPage extends Base {
  /*---------------------POM---------------*/
  get standardTab() {
    return $('//span[contains(text(),"standard")]');
  }

  get addNewStandard() {
    return $('div:nth-of-type(1) > .event-type-content > .event-type-title');
  }

  get saveAndShowCodeButton() {
    return $('//div[@class="ant-col form-item"]//button');
  }

  //-----------------------ACTION METHODS--------------//

  standardTabIsDisplayed() {
    this.standardTab.waitForDisplayed({ timeout: 6000 });
    return this.standardTab.isDisplayed();
  }

  validateStandardTab() {
    if (this.standardTabIsDisplayed() == true) {
      console.log("standard tab is displaying sucessfully");
    } else {
      throw new Error("STANDARD TAB IS NOT DISPLAYED");
    }
  }

  openStandardTab() {
    if (this.standardTab.isDisplayed()) {
      this.standardTab.click();
    } else {

      throw new Error("Standard tab is not clickable..!!!")
    }
  }
  openAddNewStandardEvent() {
    this.addNewStandard.waitForClickable({ timeout: 50000 });
    if (this.addNewStandard.isDisplayed()) {
      this.addNewStandard.click();
      browser.pause(4000);
    } else {

      throw new Error("Add new standard is not clickable..!!!")
    }
  }

  validateCreateNewStandardEventPage() {
    $('//*[@id="event-manage-root"]/div/div[2]/div/div[1]/div/div[2]').waitForDisplayed({ timeout: 10000 })

    var actTitle = $("//div[@id='event-manage-root']//h1").getText();
    var expTitle = "Create New Standard Event";
    if (actTitle.includes(expTitle)) {
      console.log("Create new standard event page loaded successfully")
    } else {
      console.log("actual title>>" + actTitle);
      console.log("expected title>>" + expTitle);
      throw new Error("Create new standard event page is not loaded")
    }
  }

  addNewStandardIsDisplay() {
    this.addNewStandard.waitForDisplayed({ timeout: 6000 });
    return this.addNewStandard.isDisplayed();
  }

  saveAndShowCodeButtonIsDispalyed(){
    this.saveAndShowCodeButton.waitForDisplayed({timeout:10000});
    return this.saveAndShowCodeButton.isDisplayed();
  }
}


export default new StandardPage();