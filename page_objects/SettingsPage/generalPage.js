import Base from "../testBase";



class generalPage extends Base {
    /*-------------------------POM---------------------------*/
    get companyNameField() { return $("//div[@id='settings-general']//input") }
    get saveButton() { return $('//button[@type="submit"]') }
    get timeZoneField() { return $('//div[@id="timezone"]') }
    get languageField() { return $('//*[@id="locale"]') }
    get gdprAccountSettings() { return $('//*[@id="gdpr"]') }
    get disabledGdprButton() { return $('//div[@data-id="disabled"]') }
    get activeGdprButton() { return $('//div[@data-id="active"]') }
    get validationMsg() { return $('//div[@class="ant-notification-notice-with-icon"]') }
    get defaultGDPROnEditFormField() { return $('//div[contains(text(),"GDPR")]') }

    //-----------------------ACTION METHODS------------------//
    validationMsgIsDisplayed() {
        this.validationMsg.waitForDisplayed({ timeout: 6000 });
        return this.validationMsg.isDisplayed();
    }


    companyNameFieldIsDisplayed() {
        this.companyNameField.waitForDisplayed({ timeout: 6000 })
        return this.companyNameField.isDisplayed();
    }

    fillCompanyNameField(comanyName) {
        if (this.companyNameFieldIsDisplayed() === true) {
            this.companyNameField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            this.companyNameField.setValue(comanyName)
        } else {
            throw new Error('Something went worng at "Company Name Field')
        }
    }

    getCompanyName() {
        this.companyNameField.waitForDisplayed({ timeout: 6000 })
        return this.companyNameField.getValue();

    }


    saveButtonIsDisplayed() {
        this.saveButton.waitForDisplayed({ timeout: 6000 })
        return this.saveButton.isDisplayed();
    }

    clickOnSaveButton() {
        if (this.saveButtonIsDisplayed() === true) {
            this.saveButton.click();
        } else {
            throw new Error('Something went worng at clicking save company Name button')
        }
    }

    timeZoneFieldIsDisplayed() {
        this.timeZoneField.waitForDisplayed({ timeout: 6000 })
        return this.timeZoneField.isDisplayed();
    }

    clickOnTimeZoneField() {
        if (this.timeZoneFieldIsDisplayed() === true) {
            this.timeZoneField.click();
        } else {
            throw new Error('Something went worng  with Time zone Field')
        }
    }

    selectTimeZone(timeZone) {
        this.clickOnTimeZoneField();
        this.timeZoneField.selectByVisibleText(timeZone)
    }

    getTimeZone() {
        this.timeZoneField.waitForDisplayed({ timeout: 6000 })
        return this.timeZoneField.getValue();

    }

    languageFieldIsDisplayed() {
        this.languageField.waitForDisplayed({ timeout: 6000 })
        return this.languageField.isDisplayed();
    }
    clickOnLanguageField() {
        if (this.languageFieldIsDisplayed() === true) {
            this.languageField.scrollIntoView();
            this.languageField.click();
            browser.pause(1000)
        } else {
            throw new Error('Something went worng with laguage field')
        }
    }

    selectLanguage(language) {
        this.clickOnLanguageField();
        this.languageField.selectByVisibleText(language);

    }

    getLanguage() {
        this.languageField.waitForDisplayed({ timeout: 6000 })
        return this.languageField.getValue();

    }

    gdprSettingsButtonIsDisplayed() {
        this.gdprAccountSettings.waitForDisplayed({ timeout: 6000 })
        return this.gdprAccountSettings.isDisplayed();
    }

    checkGdprOptionIsDisabled() {
        if (this.gdprAccountSettings.getAttribute('class') === 'item') {
            console.log('GDPR SETTINGS IS DISABLED BY DEAFULT')
        } else {
            throw new Error('GDPR Setting not Diabled by default')
        }
    }

    activeGdprSettingButtonIsDisplayed() {
        this.clickOngdprAccountSettings();
        this.activeGdprButton.waitForDisplayed({ timeout: 6000 });
        return this.activeGdprButton.isDisplayed();
    }

    disabledGdprSettingButtonIsDisplayed() {
        this.clickOngdprAccountSettings();
        this.disabledGdprButton.waitForDisplayed({ timeout: 6000 });
        return this.disabledGdprButton.isDisplayed();
    }


    clickOngdprAccountSettings() {
        if (this.gdprAccountSettings.isDisplayed()===true) {
            this.gdprAccountSettings.click();
        } else {
            throw new Error("GDPR account settings field is not displaying")
        }

    }

    clickOnDisabledGdprSettings() {
        if (this.activeGdprSettingButtonIsDisplayed()===true) {
            this.disabledGdprButton.click();
        } else {
            throw new Error("Disable GDPR button is not displaying")
        }
    }

    clickOnActiveGdprSettings() {
        if (this.activeGdprSettingButtonIsDisplayed()===true) {
            this.activeGdprButton.click();
        } else {
            throw new Error("Disable GDPR button is not displaying")
        }
    }

    defaultGDPROnEditFormFieldIsDisplayed(){
        return this.defaultGDPROnEditFormField.isDisplayed();
    }

    validateUpdatedCompanyName(name){
        var actName=$("//div[@class='header-controls-modal-top']").getText();
        if (actName.includes(name)) {
            console.log("Company name field is updated successfully");
            
        } else {
            throw new Error("Failed to update company name actual name>>"+actName+"Expected name>>"+name);
        }
    }

    selectTimeZone(timeZone) {
        const time = $("//div[contains(text(),'" + timeZone + "')]");
        time.scrollIntoView();
        time.waitForDisplayed({ timeout: 1000 });
        if (time.isDisplayed() === true) {
          time.click();
        } else {
          throw new Error("USER IS FAILD TO SELECT TIME ZONE");
        }
      }
    
      selectEventLanguage(language) {
        const eventLanguage = $("//div[contains(text(),'" + language + "')]");
        eventLanguage.waitForDisplayed({ timeout: 1000 });
        eventLanguage.scrollIntoView();
        if (eventLanguage.isDisplayed() === true) {
          eventLanguage.click();
        } else {
          throw new Error("USER IS FAILD TO SELECT EVENT LANGUAGE");
        }
    
      }
}


export default new generalPage();
