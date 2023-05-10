import Base from "../testBase";
class billingPage extends Base {
    /*-------------------------POM---------------------------*/

    get planAndBillingSection() { return $('#settings > div.section > h2') }
    get creditCardSection() { return $('#settings-billing > div > div:nth-child(1) > h2') }
    get updateCardDetailsLinks() { return $('#settings-billing > div > div:nth-child(1) > div > a') }
    get yourPlanSection() { return $('//div[@class="plan-section"]') }
    get packageLevel() { return $('//div[@class="column"][1]//div[2]') }
    get price() { return $('//div[@class="column"][2]//div[2]') }
    get roomSize() { return $('//div[@class="column"][3]//div[2]') }
    get adjustPlanButton() { return $('#settings-billing > div > div.plan-section > div.column.b > div') }
    get cancelYourPlan() { return $('#settings-billing > div > div:nth-child(4) > h2') }
    get startCancellationButton() {return $('#settings-billing > div > div:nth-child(4) > div > a') }
    get billingAddressSection() { return $('//div[@class="invoice-section --billing-address"]') }
    get billingNameField() { return $('input[id="billingName"]') }
    get addressLineOneField() { return $('input[id="addressLine1"]') }
    get addressLineTwoField() { return $('input[id="addressLine2"]') }
    get cityField() { return $('input[id="city"]') }
    get postalCodeField() { return $('input[id="zipCode"]') }
    get stateDropdownButton() { return $('//div[@id="stateRegion"]//div') }
    get countryDropdownButton() { return $('(//div[@class="ant-select-selection-selected-value"])[1]') }
    get editAddressOption() { return $('//div[@class="invoice-section-right"]//a|//div[@class="invoice-section-right"]//button') }
    get saveAddressButton() { return $('//button[@class="ant-btn Button animated fadeIn --big --full-size ant-btn-primary"]') }
    get countryDropdownFieldForStaging() { return $("//div[@class='ant-select-selection__rendered']") }
    get zipCodeField() { return $("input[name='zipCode']") }
    

    
    //-----------------------ACTION METHODS------------------//
    clickOnStartCancellationButton() {
        this.startCancellationButton.waitForClickable({ timeout: 6000 })
        this.startCancellationButton.click();
    }

    startCancellationButtonIsDisplayed() {
        this.startCancellationButton.waitForDisplayed({ timeout: 6000 })
        return this.startCancellationButton.isDisplayed();
    }

    cancelYourPlanSectionISDisplayed() {

        this.cancelYourPlan.waitForDisplayed({ timeout: 6000 })
        return this.cancelYourPlan.isDisplayed();
    }

    packageLevelIsDisplayed() {
        this.packageLevel.waitForDisplayed({ timeout: 6000 })
        return this.packageLevel.isDisplayed();
    }

    getPackageLevel() {
        this.packageLevel.waitForDisplayed({ timeout: 6000 })
        return this.packageLevel.getText();
    }

    priceIsDisplayed() {
        this.price.waitForDisplayed({ timeout: 6000 })
        return this.price.isDisplayed();

    }

    getPrice() {
        this.price.waitForDisplayed({ timeout: 6000 })
        return this.price.getText();
    }

    roomSizeIsDisplayed() {
        this.roomSize.waitForDisplayed({ timeout: 6000 })
        return this.roomSize.isDisplayed();
    }
    getRoomSize() {
        this.roomSize.waitForDisplayed({ timeout: 6000 })
        return this.roomSize.getText();
    }

    adjustPlanButtonIsDisplayed() {
        this.adjustPlanButton.isDisplayed({ timeout: 6000 })
        return this.adjustPlanButton.isDisplayed();
    }


    planAndBillingSectionIsDisplayed() {
        this.planAndBillingSection.waitForDisplayed({ timeout: 6000 });
        return this.planAndBillingSection.isDisplayed();
    }

    creditCardSectionIsDisplayed() {
        this.creditCardSection.waitForDisplayed({ timeout: 6000 });
        return this.creditCardSection.isDisplayed();
    }

    updateCardDetailsLinksIsDisplayed() {
        this.updateCardDetailsLinks.waitForDisplayed({ timeout: 6000 })
        return this.updateCardDetailsLinks.isDisplayed();
    }

    yourPlanSectionIsDisplayed() {
        this.yourPlanSection.waitForDisplayed({ timeout: 6000 })
        return this.yourPlanSection.isDisplayed();
    }

    clickOnEditAddressOption(){
        if (this.editAddressOption.isDisplayed()===true) {
            this.editAddressOption.click();
        } else {
            throw new Error("Edit address option is not displaying on screen");
        }
    }

    billingAddressSectionIsDisplayed() {
        this.billingAddressSection.waitForDisplayed({ timeout: 6000 })
        return this.billingAddressSection.isDisplayed();
    }
    verifyBillingAddressSection(){
        if (this.billingAddressSectionIsDisplayed()===true) {
            console.log("Billing address section is displaying on screen");
        } else {
            throw new Error("Billing address section is not  displaying on screen");
        }
    }

    fillBillingNameField(billingName){
        if (this.billingNameField.isDisplayed()===true) {
            this.billingNameField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            browser.pause(500);
            var rNo = Math.floor(Math.random() * 100);
    var Name = billingName + rNo;
    this.billingNameField.setValue(Name);
       
        } else {
            throw new Error("Billing name field is not displaying on screen")
        }
    }

    fillAddressLineOneField(addressLine1){
        if (this.addressLineOneField.isDisplayed()===true) {
            this.addressLineOneField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            browser.pause(500);
            var rNo = Math.floor(Math.random() * 100);
    var Name = addressLine1 + rNo;
    this.addressLineOneField.setValue(Name);
       
        } else {
            throw new Error("Address line one field is not displaying on screen")
        }
    }

    fillAddressLineTwoField(addressLine2){
        if (this.addressLineTwoField.isDisplayed()===true) {
            this.addressLineTwoField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            browser.pause(500);
            var rNo = Math.floor(Math.random() * 100);
    var Name = addressLine2 + rNo;
    this.addressLineTwoField.setValue(Name);
       
        } else {
            throw new Error("Address line two field is not displaying on screen");
        }
    }

    fillCityField(city){
        if (this.cityField.isDisplayed()===true) {
            this.cityField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            browser.pause(500);
            var rNo = Math.floor(Math.random() * 100);
    var Name = city + rNo;
    this.cityField.setValue(Name);
       
        } else {
            throw new Error("City field is not displaying on screen");
        }
    }

    fillPostalCodeField(code){
        if (this.postalCodeField.isDisplayed()===true) {
            this.postalCodeField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            browser.pause(500);
            var rNo = Math.floor(Math.random() * 100);
    var Name = code + rNo;
    this.postalCodeField.setValue(Name);
       
        } else {
            throw new Error("Postal code field is not displaying on screen");
        }
    }

    selectCountryName(country){
        if (this.countryDropdownButton.isDisplayed()===true) {
            this.countryDropdownButton.click();
            const countryName=$("//li[@data-name='"+country+"']");
            countryName.click();
            
        } else {
            throw new Error("Country dropdown is not displaying on screen");
        }
    }

    selectStateNameField(state){
        if (this.stateDropdownButton.isDisplayed()===true) {
            this.stateDropdownButton.click();
            const stateName=$("//div[@data-name='"+state+"']");
            stateName.click();
        } else {
            throw new Error("State field is not displaying on screen");
        }
    }

    clickOnSaveAddressButton(){
        if (this.saveAddressButton.isDisplayed()===true) {
        this.saveAddressButton.click();
            
        } else {
            throw new Error("Save address button is not displaying on screen")
        }
    }

    selectCountryNameForStaging(country){
        if (this.countryDropdownFieldForStaging.isDisplayed()===true) {
            this.countryDropdownFieldForStaging.click();
            const countryNameField=$("//input[@class='ant-select-search__field']");
            countryNameField.setValue(country);
            browser.pause(1000);
            browser.keys(['Meta', 'Enter']);
            
        } else {
            throw new Error("Country dropdown is not displaying on screen");
        }
    }

    validateMandatoryZipCodeErrorValidation(validation){
        var actValidation=$("//div[@class='Demio-Input-error']").getText();
        if (actValidation.includes(validation)) {
            console.log("validation message is displaying");
        } else {
         throw new Error("Error validation is not displaying for zip code field when user select country unites states..actual message>>"+actValidation+"Expected message>>"+validation);   
        }
    }
    clickOnCityField(){
        if (this.cityField.isDisplayed()===true) {
        this.cityField.click();
            
        } else {
            throw new Error("City field is not displaying on screen")
        }
    }
    clickOnZipCodeField(){
        if (this.zipCodeField.isDisplayed()===true) {
        this.zipCodeField.click();
            
        } else {
            throw new Error("City field is not displaying on screen")
        }
    }
}

export default new billingPage();
