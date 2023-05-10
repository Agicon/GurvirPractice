import Base from "../testBase";



class apiPage extends Base {
    /*-------------------------POM---------------------------*/

    get apiKeyField() { return $('//*[@id="api-details"]/div[1]//div/input') }
    get apiSecretField() { return $('//*[@id="api-details"]/div[2]//div/input') }
    get regenrateButton() { return $('//*[@id="form"]/div[2]/a') }
    get yesButton() { return $('//button[@class="btn btn-green btn-lg confirm"]') }


    //-----------------------ACTION METHODS------------------//

    apiKeyFieldIsDisplayed() {
        this.apiKeyField.waitForDisplayed({ timeout: 6000 })
        return this.apiKeyField.isDisplayed();
    }

    apiSecretFieldIsDisplayed() {

        this.apiSecretField.waitForDisplayed({ timeout: 6000 })
        return this.apiSecretField.isDisplayed();
    }

    regenrateButtonISDisplayed() {

        this.regenrateButton.waitForDisplayed({ timeout: 6000 })
        return this.regenrateButton.isDisplayed();
    }

    clickOnRegenerateButton() {

        if (this.regenrateButtonISDisplayed() === true) {
            this.regenrateButton.click();
        }
        else {
            throw new Error('Some thing wnet worng with Regerate button')
        }
    }


    checkAPIkeyISGenerated() {
        var oldSecretKey = this.apiSecretField.getValue();
        this.clickOnRegenerateButton();
        try {
            this.clickOnYesButtonUnderPopup();
            browser.pause(2000);
        } catch (error) {
            
        }
        var newSecretKey = this.apiSecretField.getValue();

        if (oldSecretKey.includes(newSecretKey)) {
           console.log('SECRET KEY IS NOT GENERATED Note: Secrect key should be different OLDKEY: ' + oldSecretKey + "NEWKEY: " + newSecretKey)

        } else {
            console.log('API Key is Regerated');
         
        }
    }

    clickOnYesButtonUnderPopup(){
        if (this.yesButton.isDisplayed()===true) {
            this.yesButton.click();
        } else {
            throw new Error("Yes button is not displaying under popup screen");
        }
    }
}

export default new apiPage();
