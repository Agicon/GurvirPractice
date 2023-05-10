import Base from "../testBase";
import { EEXIST } from "constants";
import teamPage from "./teamPage";

class brandingPage extends Base {
    /*-------------------------POM---------------------------*/

    get uploadLogoButton() { return $('.company-icon .demio-upload-dragger') }
    get colorSchemeField() { return $('(//span[@class="ant-input-group-wrapper"]//input)[1]') }
    get pageSwitcher() { return $('(//div[@class="switcher"])[1]') }
    get emailSwitcher() { return $('(//div[@class="switcher"])[2]') }
    get roomswitcher() { return $('(//div[@class="switcher"])[3]') }
    get cropButton() { return $('//button[@class="ant-btn Button animated fadeIn ant-btn-primary"]') }
    get addedDomainDropDown() { return $('(//div[@class="domain-dropdown"]//button)[2]') }
    get setAsDefaultOption() { return $('//div[@class="ant-dropdown ant-dropdown-placement-bottomRight"]//ul//li[1]') }
    get removeDomainOption() { return $('//li[contains(text(),"Remove Domain")]') }
    get confirmationPopup() { return $('//div[@class="ant-modal-confirm-body-wrapper"]') }
    get noNeverMindButton() { return $('//button[@class="ant-btn"]') }
    get yesChangeButton() { return $('//button[@class="ant-btn ant-btn-primary"]') }
    get yesRemoveButton() { return $('//button[@class="ant-btn ant-btn-primary"]') }
    get uploadOptionButtonForLogo() { return $('(//div[@class="demio-upload-options-button ant-dropdown-trigger"])[1]') }
    get deleteImage() { return $('//li[@class="ant-dropdown-menu-item --red"]') }
    get uploadOptionButtonForIcon() { return $('(//div[@class="company-image-section company-icon"]//div//div//div//div)[6]') }
    get customDomainField() { return $('input[id="domain"]') }
    get addNewCustomDomainLink() { return $('//div[@class="add-custom-domain-link"]') }
    get addCustomDomainPopupTitle() { return $('//div[@class="ant-tabs-tab-active ant-tabs-tab"]') }
    get addCustomDomainButton() { return $('//button[@class="ant-btn Button animated fadeIn ant-btn-primary"]') }
    get uploadOptionButtonForIcon() { return $('(//div[@class="demio-upload-options-button ant-dropdown-trigger"])[2]') }
  
    get firstDomainNameDropdown() { return $('(//div[@class="domain-dropdown"]//button)[1]') }
    get recordingBrandingLogoImageOptionButton() { return $('(//div[@class="demio-upload-options-button ant-dropdown-trigger"])[2]') }
    //-----------------------ACTION METHODS------------------//

    cropButtonIsDisplayed() {
        this.cropButton.waitForDisplayed({ timeout: 10000 })
        return this.cropButton.isDisplayed();
    }

    clickOnCropButton() {
        if (this.cropButtonIsDisplayed() === true) {
            this.cropButton.click();
        } else {
            throw new Error('Some thing went worng with crop button');
        }
    }

    uploadLogoButtonIsDisplayed() {
        this.uploadLogoButton.waitForDisplayed({ timeout: 8000 });
        return this.uploadLogoButton.isDisplayed();
    }

    uploadLogo(image) {
        const element = $('(//span//input[@type="file"])[2]');
        browser.pause(1000);
        var js = "arguments[0].style = 'visible'";
        browser.execute(js, element);
        browser.pause(10000);

        const path = require("path");
        const filePath = path.join(__dirname, "/Logo/" + image);
        const remoteFilePath = browser.uploadFile(filePath);
        $('(//span//input[@type="file"])[2]').setValue(remoteFilePath);
        
    }

   
    colorSchemeFieldIsDisplayed() {
        this.colorSchemeField.waitForDisplayed({ timeout: 6000 })
        return this.colorSchemeField.isDisplayed();
    }

    fillColorCodeInColorSchmeField(colorCode) {
        if (this.colorSchemeFieldIsDisplayed() === true) {
            this.colorSchemeField.click();
            const inputField=$(".chrome-picker > div:nth-of-type(2) > div:nth-of-type(2) > .flexbox-fix > div > div>input");
           inputField.clearValue();
            inputField.setValue(colorCode);
        } else {
            throw new Error('Something went worng with color schme field')
        }
    }

    getColorSchemeFieldValue() {
        if (this.colorSchemeFieldIsDisplayed() === true) {
            return this.colorSchemeField.getValue();
        } else {
            throw new Error('Some thing went worng with color schemeField');
        }
    }

    pageSwitcherIsDisplayed() {
        this.pageSwitcher.waitForDisplayed({ timeout: 6000 })
        return this.pageSwitcher.isDisplayed();
    }

    enabledPageSwitch() {

        if (this.pageSwitcherIsDisplayed() === true) {

            const elem = $(".body .line:nth-of-type(1) [data-value='1']")

            if (elem.getAttribute('class') === 'item active') {

                console.log('Pages (Registration, Thank You, and Recording) is already enabled');

            } else {
                $('(//div[@class="switcher"])[1]//div[1]').click();
                console.log('Pages (Registration, Thank You, and Recording) IS ENABLED');
            }

        } else {
            throw new Error("Some thing Went worng with page switcher")
        }
    }

    disablePageSwitch() {

        if (this.pageSwitcherIsDisplayed() === true) {

            const elem = $(".body .line:nth-of-type(1) [data-value='0']")

            if (elem.getAttribute('class') === 'item active') {

                console.log('Pages (Registration, Thank You, and Recording) is already DISABLED');

            } else {

                $('(//div[@class="switcher"])[1]//div[2]').click();
                browser.pause(500);
                console.log('Pages (Registration, Thank You, and Recording) IS DISABLED');
            }

        } else {
            throw new Error('Something went worng with page switcher')
        }
    }

    emailSwitcherIsDisplayed() {
        this.emailSwitcher.scrollIntoView();
        this.emailSwitcher.waitForDisplayed({ timeout: 6000 })
        return this.emailSwitcher.isDisplayed();
    }

    enableEmailSwitch() {
        if (this.emailSwitcherIsDisplayed() === true) {

            const elem = $(".body .line:nth-of-type(2) [data-value='1']")

            if (elem.getAttribute('class') === 'item active') {

                console.log('"Confirmation and Reminder Emails" is already ENABLED');

            } else {

                $('(//div[@class="switcher"])[2]//div[1]').click();
                browser.pause(100);


                console.log('"Confirmation and Reminder Emails" IS ENABLED');

            }
        } else {
            throw new Error('Something went worng with email  switcher')
        }
    }

    disableEmailSwitch() {

        if (this.emailSwitcherIsDisplayed() === true) {


            const elem = $(".body .line:nth-of-type(2) [data-value='0']")

            if (elem.getAttribute('class') === 'item active') {

                console.log('"Confirmation and Reminder Emails" is already DISBALED');

            } else {

                $('(//div[@class="switcher"])[2]//div[2]').click();
                browser.pause(500);

                console.log('"Confirmation and Reminder Emails" IS DISABLED');

            }
        } else {
            throw new Error('Something went worng with email  switcher')
        }
    }


    roomswitcherIsDisplayed() {
        this.roomswitcher.scrollIntoView();
        this.roomswitcher.waitForDisplayed({ timeout: 600 })
        return this.roomswitcher.isDisplayed();
    }

    enableroomswitcher() {
        if (this.roomswitcherIsDisplayed() === true) {

            const elem = $(".body .line:nth-of-type(3) [data-value='1']")

            if (elem.getAttribute('class') === 'item active') {

                console.log('"Webinar Room" is already ENABLED');

            } else {

                $('(//div[@class="switcher"])[3]//div[1]').click();
                browser.pause(500);

                console.log('"Webinar Room" IS ENABLED');

            }
        } else {
            throw new Error('Something went worng with email  switcher')
        }

    }

    disableroomswitcher() {
        if (this.roomswitcherIsDisplayed() === true) {

            const elem = $(".body .line:nth-of-type(3) [data-value='0']")

            if (elem.getAttribute('class') === 'item active') {

                console.log('"Webinar Room" is already DISBALED');

            } else {

                $('(//div[@class="switcher"])[3]//div[2]').click();
                browser.pause(500);

                console.log('"Webinar Room" IS DISABLED');

            }
        } else {
            throw new Error('Something went worng with email  switcher')
        }

    }

    addedDomainDropDownIsDisplayed(){
        this.addedDomainDropDown.waitForDisplayed({timeout:10000});
        return this.addedDomainDropDown.isDisplayed();
    }

    clickOnAddedDomainDropDown(){
        if(this.addedDomainDropDownIsDisplayed()===true){
            this.addedDomainDropDown.click();
        }else{
            throw new Error("dOMAIN IS NOT ADDED ..PLEASE ADD DOMAIN IN YOUR ACCOUNT");
        }
    }

    setAsDefaultOptionIsDisplayed(){
        return this.setAsDefaultOption.isDisplayed();
    }

    removeDomainOptionIsDisplayed(){
        return this.removeDomainOption.isDisplayed();
    }

    clickOnSetAsDefaultOption(){
        if(this.setAsDefaultOptionIsDisplayed()===true){
            this.setAsDefaultOption.click();
        }else{
            throw new Error("Set as default option is not displayed");
        }
    }

    clickOnRemoveDomainOption(){
        this.removeDomainOption.waitForDisplayed({timeout:30000});
        if(this.removeDomainOptionIsDisplayed()===true){
            this.removeDomainOption.click();
        }else{
            throw new Error("Remove domain option is not displayed");
        }
    }

confirmationPopupIsDisplayed(){
    this.confirmationPopup.waitForDisplayed({timeout:10000});
    return this.confirmationPopup.isDisplayed();
}

noNeverMindButtonIsDisplayed(){
    this.noNeverMindButton.waitForDisplayed({timeout:10000});
    return this.confirmationPopup.isDisplayed();
}

yesChangeButtonIsDisplayed(){
    return this.yesChangeButton.isDisplayed();
}

yesRemoveButtonIsDisplayed(){
    return this.yesRemoveButton.isDisplayed();
}

deleteCompanyLogo(){
    this.uploadOptionButtonForLogo.click();
    this.deleteImage.click();
}

deleteCompanyIcon(){
    this.uploadOptionButtonForIcon.click();
    this.deleteImage.click();
}

verifyNewCustomDomainTitle(title){
    var actTitle=this.addCustomDomainPopupTitle.getText();
    if (actTitle.includes(title)) {
        console.log("User successfully redirect on add custom domain popup");
    } else {
        throw new Error("Failed to redirect on add custom domain screen ..actual title>>"+actTitle+"Expected title>>"+title);
    }
}

fillCustomDomainField(domain){
    if (this.customDomainField.isDisplayed()===true) {
        this.customDomainField.setValue(domain);
        
    } else {
        throw new Error("Custom domain field is not displaying on screen")
    }
}

clickOnAddCustomDomainButton(){
    if (this.addCustomDomainButton.isDisplayed()===true) {
        this.addCustomDomainButton.click();
    } else {
        throw new Error("Add button is not displaying on screen")
    }
}

verifyAddedDomain(domain){
    var actDomain=$("(//div[@class='domain-name'])[2]").getText();
    if (actDomain.includes(domain)) {
        console.log("Domain name matched on screen");
        
    } else {
        throw new Error("Failed to add new domain ... actual domain name>>"+actDomain +"expected domain name>>"+domain);
    }
}

clickOnAddCustomDomainLink(){
    if (this.addNewCustomDomainLink.isDisplayed()===true) {
        this.addNewCustomDomainLink.click();
    } else {
        throw new Error("Add custom domain link is not displaying")
    }
}
clickOnFirstDomainNameDropdown(){
    if (this.firstDomainNameDropdown.isDisplayed()===true) {
        this.firstDomainNameDropdown.click();
    } else {
        throw new Error("First domain name dropdown button is not displaying on screen");
    }

}

deleteAlreadyUploadedBrandingLogoImage(){
    try {
        this.recordingBrandingLogoImageOptionButton.click();
    $("(//li[@class='ant-dropdown-menu-item --red'])[2]").click();
    } catch (error) {
        
    }

}


}

export default new brandingPage();
