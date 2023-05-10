import Base from "../testBase";

class emailSettingspage extends Base {
    /*-------------------------POM---------------------------*/
    get emailSettings() { return $('//*[@class="section"]/h2') }
    get fromNameInputField() { return $('//*[@name="username"]') }
    get contactAndForwardingEmailInputField() { return $('//*[@name="sender_email"]') }
    get customerSignatureInputField() { return $('//*[@name="customer_signature"]') }
    get saveEmailSettingsButton() { return $('//*[@id="save-email-settings"]') }

    //-----------------------ACTION METHODS------------------//

    emailSettingsIsDisplayed() {
        this.emailSettings.waitForDisplayed({ timeout: 6000 })
        return this.emailSettings.isDisplayed();
    }

    fromNameInputFieldIsDisplayed() {
        this.fromNameInputField.waitForDisplayed({ timeout: 6000 });
        return this.fromNameInputField.isDisplayed();
    }

    fillFromNameInputField(fromName) {
        if (this.fromNameInputFieldIsDisplayed() === true) {
            this.fromNameInputField.setValue(fromName)
        } else {
            throw new Error('Some thing went worng with form name input field')
        }
    }

    getFromName() {
        if (this.fromNameInputFieldIsDisplayed() === true) {
            return this.fromNameInputField.getValue();
        } else {
            throw new Error('Value is  not avaiable in from name input field')
        }
    }

    contactAndForwardingEmailInputFieldIsDisplayed() {
        this.contactAndForwardingEmailInputField.waitForDisplayed({ timeout: 6000 })
        return this.contactAndForwardingEmailInputField.isDisplayed();
    }

    fillContactAndForwardEmailField(forwardEmail) {

        if (this.contactAndForwardingEmailInputFieldIsDisplayed() === true) {
            this.contactAndForwardingEmailInputField.setValue(forwardEmail)
        } else {
            throw new Error('Some thing went worng with "Contact & forward Email field"')
        }
    }

    getContactForwardEmail() {
        if (this.contactAndForwardingEmailInputFieldIsDisplayed() === true) {
            return this.contactAndForwardingEmailInputField.getValue();
        } else {
            throw new Error('Some thing went worng Value of "Contact & forward is not avaiable"')
        }
    }

    customerSignatureInputFieldIsDisplayed() {
        this.customerSignatureInputField.waitForDisplayed({ timeout: 6000 })
        return this.customerSignatureInputField.isDisplayed();
    }

    fillCustomerSignatureInputField(signature) {
        if (this.customerSignatureInputFieldIsDisplayed() === true) {
            this.customerSignatureInputField.setValue(signature)
        } else {
            throw new Error('Some thing went worng with signature field')
        }
    }

    getSignature() {

        if (this.customerSignatureInputFieldIsDisplayed() === true) {
            return this.customerSignatureInputField.getValue();
        } else {
            throw new Error('Some thing went worng Value of "Customer Signature" is not avaiable"')
        }

    }


    saveEmailSettingsButtonIsDisplayed() {
        this.saveEmailSettingsButton.waitForDisplayed({ timeout: 6000 })
        return this.saveEmailSettingsButton.isDisplayed();
    }
    clickOnSaveEmailSettings() {

        if (this.emailSettingsIsDisplayed() === true) {
            this.saveEmailSettingsButton.click();
        } else {
            throw new Error('Some thing  went worng with Save  Email Settings button')
        }
    }


}

export default new emailSettingspage();
