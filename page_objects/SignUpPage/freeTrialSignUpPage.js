import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";


class FreeTrialSignUpPage extends Base {
  /*---------------------POM---------------*/
  get freeTrialLink() {
    return $('//a[@href="/free-trial"]');
  }

  get tryDemioForFreeTitle() {
    return $('//div[@class="signup-form-header"]');
  }

  get fullNameField() {
    return $('//input[@name="fullName"]');
  }

  get workEmailField() {
    return $('//input[@name="email"]');
  }

  get setPasswordField() {
    return $('//input[@name="password"]');
  }
  get createMyAccountButton() {
    return $('//button[@class="signup-form-button"]');
  }

  get demioDashboardLogo() {
    return $('//span[@class="demio-logo"]');
  }

  get companyNameField() {
    return $('//input[@placeholder="Company Name"]');
  }

  get continueButton() {
    return $('//button[@class="ant-btn onboarding-continue-button Button animated fadeIn ant-btn-primary"]');
  }
  get noWeAreJustStartingOutButton() {
    return $('(//button[@class="ant-btn onboarding-option-button Button animated fadeIn ant-btn-default"])[2]');
  }

  get readyToLaunchButton() {
    return $('(//button[@class="ant-btn onboarding-option-button Button animated fadeIn ant-btn-default"])[3]');
  }
  get accessMyAccountButton() {
    return $('//button[@class="ant-btn onboarding-account-button Button animated fadeIn ant-btn-primary"]');
  }
  
  get selectAnOptionField() {
    return $('.ant-modal-content div[role="combobox"] > .ant-select-selection__rendered');
  }

  get countryDropdownButton() {
    return $('//div[@class="ant-select-selection__rendered"]');
  }


  //-----------------------ACTION METHODS--------------//

  clickOnFreeTrialLink() {

    if (this.freeTrialLink.waitForDisplayed({ timeout: 6000 }) && this.freeTrialLink.isDisplayed()) {
      this.freeTrialLink.click();
    } else {
      throw new Error("Free Trial Sign Up link is not displaying ..!")
    }
  }

  validateTryDemioForFreePage() {

    if (this.tryDemioForFreeTitle.waitForDisplayed({ timeout: 6000 }) && this.tryDemioForFreeTitle.isDisplayed() === true) {
      console.log("User successfully redirect on Try demino for free page")
    } else {
      throw new Error("Free Trial Sign Up link is not Working");
    }
  }

  fillFullNameField(fullName) {
    this.fullNameField.waitForDisplayed({ timeout: 6000 });
    this.fullNameField.setValue(fullName);
  }


  fillWorkEmailField(workEmail) {
    // this.workEmailField.waitForDisplayed({ timeout: 6000 });
    // var newNumber = Math.floor((Math.random() * 100) + 1);
    // this.workEmailField.setValue("tester.desk24+" + newNumber + "+@gmail.com");
    this.workEmailField.waitForDisplayed({ timeout: 6000 });
    this.workEmailField.clearValue()
    this.workEmailField.setValue(workEmail);
  }

  fillSetAPasswordField(password) {
    this.setPasswordField.waitForDisplayed({ timeout: 6000 });
    this.setPasswordField.clearValue();
    this.setPasswordField.setValue(password);
  }

  clickOnCreateMyAccountButton() {
    this.createMyAccountButton.waitForDisplayed({ timeout: 6000 })
    if (this.createMyAccountButton.isDisplayed()) {
      this.createMyAccountButton.click();
      browser.pause(10000);
    } else {
      throw new Error("Create My Account Button is not displaying ..!")
    }
  }

  validateCompanyNameField() {
    if (this.companyNameField.isDisplayed() == true) {
      console.log("User successfully redirect on compamny Name field");
    } else {
      throw new Error("Company Name field is not displayed");
    }
  }
  fillCompanyNameField(companyName) {
    this.companyNameField.waitForDisplayed({ timeout: 30000 });
    this.companyNameField.setValue(companyName);
  }


  clickOnContinueButton() {
    this.continueButton.scrollIntoView();
    this.continueButton.waitForDisplayed({ timeout: 30000 });
    if (this.continueButton.isDisplayed()) {
      this.continueButton.click();
    } else {
      throw new Error("Continue Button is not displaying ..!")
    }

  }
  clickNoWeAreJustStartingOutButton() {
    if (this.noWeAreJustStartingOutButton.isDisplayed()) {
      this.noWeAreJustStartingOutButton.click();
    } else {
      throw new Error("No We Are Just Starting Out Button is not displaying ..!")
    }

  }

  clickReadyToLaunchButton() {
    if (this.readyToLaunchButton.isDisplayed()) {
      this.readyToLaunchButton.click();
    } else {
      throw new Error("Ready to launch Button is not displaying ..!")
    }

  }
  clickAccessMyAccountButton() {
    if (this.accessMyAccountButton.isDisplayed()) {
      this.accessMyAccountButton.click();
    } else {
      throw new Error("Access My Account Button is not displaying ..!")
    }

  }

  
  selectAnOptionFieldIsDisplayed(){
    this.selectAnOptionField.waitForDisplayed({timeout:10000});
    return this.selectAnOptionField.isDisplayed();
   }
 
   clickOnSelectAnOptionField(){
     if(this.selectAnOptionFieldIsDisplayed()===true){
       this.selectAnOptionField.click();
     }else{
       throw new Error("Select an option field is not displayed");
     }
   }
 
   clickOnCountyDropdownButton(){
    if (this.countryDropdownButton.isDisplayed()===true) {
      this.countryDropdownButton.click();
    } else {
      throw new Error("Country Dropdown button is not displayed on screen");
    }
   }
   clickOnCountryOption(country){
    const countryOption=$("//li[@data-name='"+country+"']");
    countryOption.click();
   }
 }
 
 export default new FreeTrialSignUpPage();
 