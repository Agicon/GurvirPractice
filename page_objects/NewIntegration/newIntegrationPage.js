import Base from "../testBase";
class NewIntegrationPage extends Base {
    get customCodeSettingsLink() {
        return $('//a[@class="integration-settings"]');
      }

      get whereDoYouWantToApplyFirstDropdown() {
        return $('(//div[@class="ant-modal-wrap ant-modal-centered"]//div[@class="ant-select-selection__rendered"])[1]');
      }

      get whereDoYouWantToApplySecondDropdown() {
        return $('(//div[@class="ant-modal-wrap ant-modal-centered"]//div[@class="ant-select-selection__rendered"])[3]');
      }

      get whereDoYouWantToApplyThirdDropdown() {
        return $('(//div[@class="ant-modal-wrap ant-modal-centered"]//div[@class="ant-select-selection__rendered"])[5]');
      }

      get whereDoYouWantToApplyFourthDropdown() {
        return $('(//div[@class="ant-modal-wrap ant-modal-centered"]//div[@class="ant-select-selection__rendered"])[7]');
      }

      get firstCustomCodeField() {
        return $('(//textarea[@class="ant-input"])[1]');
      }

      get secondCustomCodeField() {
        return $('(//textarea[@class="ant-input"])[2]');
      }

      get thirdCustomCodeField() {
        return $('(//textarea[@class="ant-input"])[3]');
      }

      get fourthCustomCodeField() {
        return $('(//textarea[@class="ant-input"])[4]');
      }

      get addNewButton() {
        return $('//a[@class="add-option-link"]');
      }
      get saveIntegrationButtonOnCustomCode() {
        return $('(//div[@class="save-integration-container"])//button');
      }

    
    validateEnabledIntegrationInSettions(integration) {
      const integrationName=$("span[title='"+integration+"']");
      integrationName.waitForDisplayed({timeout:30000})
      if (integrationName.isDisplayed()===true) {
          console.log("Integration is enabled under settings");
          
      } else {
          throw new Error("Please add integration under integration settings>>"+integration);
          
      }

    }

   clickOnCustomCodeSettingsLink(){
    if (this.customCodeSettingsLink.isDisplayed()===true) {
        this.customCodeSettingsLink.click();
    } else {
        throw new Error("custom code settings link is not displaying on screen");
    }
   }

   clickOnWhereDoYouWantToApplyFirstDropdown(){
    if (this.whereDoYouWantToApplyFirstDropdown.isDisplayed()===true) {
        this.whereDoYouWantToApplyFirstDropdown.click();
    } else {
        throw new Error("'Where do you want to apply this custom change' first dropdown field is not displaying on screen");
    }
   }

   clickOnWhereDoYouWantToApplySecondDropdown(){
    if (this.whereDoYouWantToApplySecondDropdown.isDisplayed()===true) {
        this.whereDoYouWantToApplySecondDropdown.click();
    } else {
        throw new Error("'Where do you want to apply this custom change' second dropdown field is not displaying on screen");
    }
   }

   clickOnWhereDoYouWantToApplyThirdDropdown(){
    if (this.whereDoYouWantToApplyThirdDropdown.isDisplayed()===true) {
        this.whereDoYouWantToApplyThirdDropdown.click();
    } else {
        throw new Error("'Where do you want to apply this custom change' third dropdown field is not displaying on screen");
    }
   }

   clickOnWhereDoYouWantToApplyFourthDropdown(){
    if (this.whereDoYouWantToApplyFourthDropdown.isDisplayed()===true) {
        this.whereDoYouWantToApplyFourthDropdown.click();
    } else {
        throw new Error("'Where do you want to apply this custom change' fourth dropdown field is not displaying on screen");
    }
   }

   clickOnDropdownOption(option){
    browser.pause(1500);
    const fieldOption=$("//li[contains(text(),'"+option+"')]");
    fieldOption.moveTo();
    fieldOption.click();
    browser.pause(1000);
   }

   fillFirstCustomCodeField(customValue){
   if (this.firstCustomCodeField.isDisplayed()===true) {
    this.firstCustomCodeField.click();
    this.firstCustomCodeField.setValue(customValue);
   } else {
    throw new Error("First custom field is not displaying on screen")
   }
   
   }
   fillSecondCustomCodeField(customValue){
    if (this.secondCustomCodeField.isDisplayed()===true) {
     this.secondCustomCodeField.click();
     this.secondCustomCodeField.setValue(customValue);
    } else {
     throw new Error("Second custom field is not displaying on screen")
    }
    
    }

    fillThirdCustomCodeField(customValue){
      if (this.thirdCustomCodeField.isDisplayed()===true) {
       this.thirdCustomCodeField.click();
       this.thirdCustomCodeField.setValue(customValue);
      } else {
       throw new Error("Third custom field is not displaying on screen")
      }
      
      }

      fillFourthCustomCodeField(customValue){
        if (this.fourthCustomCodeField.isDisplayed()===true) {
         this.fourthCustomCodeField.click();
         this.fourthCustomCodeField.setValue(customValue);
        } else {
         throw new Error("Fourth custom field is not displaying on screen")
        }
        
        }
        
        clickOnAddNewButton(){
          if (this.addNewButton.isDisplayed()===true) {
            this.addNewButton.click();
          } else {
            throw new Error("Add new button is not displaying on screen");
          }
        }

        clickOnSaveIntegrationButtonOnCustomCode(){
          if (this.saveIntegrationButtonOnCustomCode.isDisplayed()===true) {
            this.saveIntegrationButtonOnCustomCode.click();
          } else {
            throw new Error("Save integration button is not displaying on custom code page");
          }
        }
}
export default new NewIntegrationPage();
