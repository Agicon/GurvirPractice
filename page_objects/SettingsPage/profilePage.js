import Base from "../testBase";



class profilePage extends Base {
    /*-------------------------POM---------------------------*/
    get firstNameField() { return $('//*[@id="firstName"]'); }

    get lastNameField() { return $('//*[@id="lastName"]') }

    get emailField() { return $("//input[@id='email']") }

    get saveSettingsButton() { return $("//div[@id='settings-profile']//button[@type='submit']") }

    get changePasswordButton() { return $('//button[@class="ant-btn Button animated fadeIn --big --full-size ant-btn-default"]') }

    get currentPasswordField() { return $("//input[@id='change-old-password']") }

    get newPasswordField() { return $('//*[@id="change-new-password"]') }

    get updatePasswordButton() { return $('//*[@id="change-password-submit-btn"]') }

    get seePasswordCheckBox() { return $('//*[@id="see-new-password"]') }
    //-------------//
    get cropButton() { return $('(//button[@class="ant-btn Button animated fadeIn ant-btn-primary"])[2]') }


    //-----------------------ACTION METHODS------------------//

    seePasswordCheckBoxIsDisplayed() {
        this.seePasswordCheckBox.waitForDisplayed({ timeout: 7000 })
        return this.seePasswordCheckBox.isDisplayed();
    }

    clickOnSeePasswordCheckbox() {
        if (this.seePasswordCheckBoxIsDisplayed() === true) {
            this.seePasswordCheckBox.click();
        } else {
            throw new Error('Somethings went worng with see password check box');
        }
    }

    seePasswordCheckBoxIsSelected() {
        if (this.newPasswordField.getAttribute('type') === 'text') {
            console.log('See Password Check box is  Selected')
            return true;
        } else {
            return false;
        }
    }


    firstNameFieldIsDisplayed() {
        this.firstNameField.waitForDisplayed({ timeout: 6000 });
        return this.firstNameField.isDisplayed();
    }

    fillDataInFNameField(fName) {
        if (this.firstNameFieldIsDisplayed() === true) {
            this.firstNameField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            this.firstNameField.setValue(fName)
        } else {
            throw new Error("Something is going wrong at first name field")
        }
    }
    getFirstName() {
        this.firstNameField.waitForDisplayed({ timeout: 6000 })
        return this.firstNameField.getValue();
    }

    lastNameFieldIsDisplayed() {
        this.lastNameField.waitForDisplayed({ timeout: 6000 });
        return this.lastNameField.isDisplayed();
    }

    fillDataInLnameField(lName) {
        if (this.lastNameFieldIsDisplayed() === true) {
            this.lastNameField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            this.lastNameField.setValue(lName)
        } else {
            throw new Error("Something is going wrong at last name field ")
        }
    }

    getLastName() {
        this.lastNameField.waitForDisplayed({ timeout: 6000 })
        return this.lastNameField.getValue();
    }

    emailFieldIsDisplayed() {
        this.emailField.waitForDisplayed({ timeout: 6000 });
        return this.emailField.isDisplayed();
    }

    fillDataInEmailField(email) {
        if (this.emailFieldIsDisplayed() === true) {
            this.emailField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            this.emailField.setValue(email)
        } else {
            throw new Error("Somthing is going wrong at email field")
        }
    }

    getEmail() {
        this.emailField.waitForDisplayed({ timeout: 6000 })
        return this.emailField.getValue();
    }

    saveSettingsButtonIsDisplayed() {
        this.saveSettingsButton.waitForDisplayed({ timeout: 6000 });
        return this.saveSettingsButton.isDisplayed();
    }

    clickOnSaveSettingsButton() {
        if (this.saveSettingsButtonIsDisplayed() === true) {
            this.saveSettingsButton.click();
        } else {
            throw new Error("Something went worng with save settings button")
        }
    }

    changePasswordButtonIsDisplayed() {
        this.changePasswordButton.waitForDisplayed({ timeout: 6000 });
        return this.changePasswordButton.isDisplayed();
    }

    clickOnChangePasswordButton() {
        if (this.changePasswordButtonIsDisplayed() === true) {
            this.changePasswordButton.click();
        } else {
            throw new Error('Something went wrong with "Change Password" button')
        }
    }

    currentPasswordFieldIsDisplayed() {
        this.currentPasswordField.waitForDisplayed({ timeout: 6000 });
        return this.currentPasswordField.isDisplayed();
    }

    fillCurrentPasswordField(currentPassword) {
        if (this.currentPasswordFieldIsDisplayed() === true) {
            this.currentPasswordField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            this.currentPasswordField.setValue(currentPassword)
        }
        else {
            throw new Error('Something went wrong with new  "Current Password" field')
        }
    }


    newPasswordFieldIsDisplayed() {
        this.newPasswordField.waitForDisplayed({ timeout: 6000 });
        return this.newPasswordField.isDisplayed();
    }

    fillNewPasswordField(newPassword) {
        if (this.newPasswordFieldIsDisplayed() === true) {
            this.newPasswordField.click();
            browser.keys(['Control', 'a']);
            browser.keys(['Delete']);
            this.newPasswordField.setValue(newPassword)
        } else {
            throw new Error('Something went wrong with "New Password" field')
        }
    }

    updatePasswordButtonIsDisplayed() {
        this.updatePasswordButton.waitForDisplayed({ timeout: 6000 });
        return this.updatePasswordButton.isDisplayed();

    }

    clickOnUpdatePasswordButton() {
        if (this.updatePasswordButtonIsDisplayed() === true) {
            this.updatePasswordButton.click();
        } else {
            throw new Error("Somethings went wrong with update 'Password Button'")
        }
    }
//-------------------//

clickOnCropButton() {
    if (this.cropButton.isDisplayed()=== true) {
        this.cropButton.click();
    } else {
        throw new Error('Some thing went worng with crop button');
    }
}
}


export default new profilePage();
