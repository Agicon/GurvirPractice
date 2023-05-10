import Base from "../testBase";
import TestUtils from "../testUtils";


class integrationsPage extends Base {
    /*-------------------------POM---------------------------*/
    get manageIntegrationTab() { return $("div#settings > .section") }
    get currentIntegrationTab() { return $(".row.tab-header") }
    get addNewTab() { return $(".tab-pane > div:nth-of-type(3)") }
    get zapierIcon() { return $("a[title='Zapier']") }
    get infusionsoftIcon() { return $("span[title='Infusionsoft']") }
    get aweberIcon() { return $("span[title='Aweber']") }
    get ontraportIcon() { return $("span[title='OfficeAutopilot / Ontraport']") }
    get mailchimpIcon() { return $("span[title='Mailchimp']") }
    get getresponseIcon() { return $("span[title='Getresponse']") }
    get activecampaignIcon() { return $("span[title='Activecampaign']") }
    get convertKitIcon() { return $("span[title='ConvertKit']") }
    get dripIcon() { return $("span[title='Drip']") }
    get marketheroIcon() { return $("span[title='Market Hero']") }
    get marketoIcon() { return $("span[title='Marketo']") }
    get mailchimpLoginContant() { return $("div#login-content") }
    get mailchimpUserNameField() { return $("input#username") }
    get mailchimpPasswordField() { return $("input#password") }
    get mailchimpLoginButton() { return $("button[value='Log in']") }
    get authorizePageTitle() { return $(".login-oauth--heading.margin-bottom--lv8") }
    get allowButton() { return $("input[value='Allow']") }
    get zapierEmailField() { return $("input[name='email']") }
    get zapierContinueButton() { return $(".async-button.async-button--block.async-button--important.async-button--large.button.button--block.button--important.button--large.flat") }
    get zapierPasswordField() { return $("input#password") }
    get zapierDashboardHeader() { return $("div#header") }
    get infusionsoftEmailField() { return $("input#username") }
    get infusionsoftPasswordField() { return $("input#password") }
    get infusionsoftLoginButton() { return $("button#btn-login") }
    get accountCentralPageHeader() { return $(".navbar-brand") }
    get infusionsoftAllowButton() { return $("button[name='allow']") }
    get aweberLoginPageLogo() { return $("svg#aweber-logo") }
    get aweberEmailField() { return $("input#username") }
    get aweberPasswordField() { return $("input#password") }
    get allowAccessButton() { return $("input#allow") }
    get clientIdField() { return $("div:nth-of-type(1) > .col-xs-12 > .form-control") }
    get clientSecretField() { return $("div:nth-of-type(2) > .col-xs-12 > .form-control") }
    get restApiEndPointField() { return $("div:nth-of-type(3) > .col-xs-12 > .form-control") }
    get restApiIdentityField() { return $("div:nth-of-type(4) > .col-xs-12 > .form-control") }
    get connectButton() { return $(".modal-footer .btn-green") }
    get popupTitle() { return $(".modal-title") }
    get apiKeyField() { return $("//input[@data-bind='value: apiKey']") }
    get apiKeySecretField() { return $("//input[@data-bind='value: apiSecret']") }
    get apiUrlField() { return $("//input[@data-bind='value: apiKey']") }
    get zapsOption() { return $("//a[@href='/app/zaps']") }
    get openMenuButton() { return $("(//div[@class='open-menu'])[1]") }
    get editOption() { return $("//span[@title='Edit']") }
    get editButton() { return $("//div[@class='css-ko5xfe']") }
    get chooseAppAndEventButton() { return $("//a[@aria-label='Choose app & event']") }
    get chooseAnAppOption() { return $("section:nth-of-type(1) > div[role='button']") }
    get demioAppOption() { return $("(//span[contains(text(),'Demio')])") }
    get chooseAnEventOption() { return $("//input[@placeholder='Choose an event']") }
    get continueButtonUnderZabPage() { return $(".css-5rrm63-Button--blue--blue--fullWidth--shadowed--medium") }
    get setUpTriggerTab() { return $("div[role='presentation'] > a:nth-of-type(3)") }
    get eventDropDown() { return $("div[role='presentation'] > .css-rembug-Input__input--grey100--small--hasIcon") }
    get testTriggerButton() { return $("button#test-sample") }
    get addStepButton() { return $("(//div[@aria-label='Add a step'])[2]") }
    get googleSheetAppOption() { return $("//div//span[contains(text(),'Google Sheets')]") }
    get gmailAccountDropDown() { return $("div[role='presentation'] > .css-vwaet0-Input__input--grey100--small--hasIcon") }
    get createSpreadSheetButton() { return $("span[title='3 .  Create Spreadsheet Row in Google Sheets']") }
    get spreadSheetDropDown() { return $("form [class='css-12ts89p-index']:nth-of-type(2) [class] [class='css-1n39xjw']:nth-of-type(2)") }
    get workSheetDropDown() { return $("form [class='css-12ts89p-index']:nth-of-type(3) [class] [class='css-1n39xjw']:nth-of-type(2)") }
    get testAndContinueButton() { return $("button#test-sample") }
    get zapToggleButton() { return $("(//button[@aria-label='On off switch'])[2]") }
    get integrationToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(1) > button[role='switch']") }
    get integrationPopupTitle() { return $("div[role='tab'] > .modal-header-left") }
    get chooseListDropDown() { return $("//div[@class='section']//select") }
    get attendeeDropDown() { return $("(//div[@class='Demio-Select-selection --default-option-selected'])[3]") }
    get listOptionDropDown() { return $("div > select") }
    get saveIntegrationButton() { return $("(//div[@class='save-integration-container'])[2]//button") }
    get chooseListOptionsButton() { return $("div:nth-of-type(1) > select") }
    get selectListDropDown() { return $("div:nth-of-type(2) > select") }
    get tagNameField() { return $("//input[@placeholder='Tag name']") }
    get okButton() { return $(".form-input.section > .button.dm.primary") }
    get tagField() { return $(".form-input.section > input") }
    get registratntsDropdown() { return $("select#event-marketo-attendee-action") }
    get marketoChooseList() { return $("select#event-marketo-lists") }
    get chooseCategoryDropdown() { return $("div:nth-of-type(1) > select") }
    get chooseTagDropdown() { return $("div:nth-of-type(2) > select") }
    get keapToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(1) > button[role='switch']") }
    get aweberToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(2) > button[role='switch']") }
    get ontraportToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(3) > button[role='switch']") }
    get mailchimpToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(4) > button[role='switch']") }
    get getresponceToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(5) > button[role='switch']") }
    get activecampaignToggleButton() { return $("div:nth-of-type(6) > button[role='switch']") }
    get convertKitToggleButton() { return $("div:nth-of-type(8) > button[role='switch']") }
    get salesforcePardotToggleButton() { return $("div:nth-of-type(11) > button[role='switch']") }
    get dripToggleButton() { return $("div:nth-of-type(9) > button[role='switch']") }
    get marketheroToggleButton() { return $("div:nth-of-type(9) > button[role='switch']") }
    get marketoToggleButton() { return $("div:nth-of-type(10) > button[role='switch']") }
    get tagsDropdown() { return $("div > select") }
    get selectAccountDropdown() { return $("div:nth-of-type(1) > select") }
    get selectIntegrationDropdown() { return $("div:nth-of-type(2) > select") }
    get selectCampaignDropdown() { return $("div:nth-of-type(3) > select") }
    get chooseCampaignDropdown() { return $("div > select") }
    get noShowDropDown() { return $("(//div[@class='Demio-Select full-width'])[2]") }
    get NoShowTagsDropdown() { return $("div:nth-child(2) > div.integration-old-component-field > div > div > select") }
    get saveJoinLinkButton() { return $("div.radio-group.--no-padding > button.ant-switch") }
    get formButton() { return $("(//div[contains(text(),'Form')])[2]") }
    get lastNameDropDown() { return $("(//div[@class='Demio-Select Select--minwidth Select--up'])[1]") }
    get websiteDropDown() { return $("(//div[@class='Demio-Select Select--minwidth Select--up'])[2]") }
    get phoneNumberDropDown() { return $("(//div[@class='Demio-Select Select--minwidth Select--up'])[3]") }
    get companyDropDown() { return $("(//div[@class='Demio-Select Select--minwidth Select--up'])[4]") }
    get textDropdown() {return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[5]'); }
    get textAreaDropdown() {return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[6]');}
    get dropdownDropdown() {return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[7]');}
    get checkBoxDropdown() {return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[8]');}
    get zipCodeDropdown() {
        return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[9]');
    }
    get referDropdown() {
        return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[10]');
    }
    get facebookDropdown() {
        return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[11]');
    }
    get twitterDropdown() {
        return $('(//div[@class="Demio-Select Select--minwidth Select--up"])[12]');
    }

    get validationDropdown() {
        return $('(//div[@class="Demio-Select-selection --selected"])[6]');
    }
    get lastNameField() {
        return $('input[name="last_name"]');
    }

    get websiteField() {
        return $('input[name="website"]');
    }
    get phoneNumberField() {
        return $('input[name="phone_number"]');
    }
    get companyField() {
        return $('input[name="company"]');
    }
    get textField() {
        return $('input[placeholder="TextField"]');
    }
    get textAreaField() {
        return $('textarea[placeholder="Add text in text area"]');
    }
    get dropdownButton() {
        return $('div[class="Demio-Select-selection --default-option-selected"]');
    }
    get checkbox() {
        return $('(//input[@type="checkbox"])[1]');
    }
    get zipCodeField() {
        return $('input[placeholder="ZipCode"]');
    }
    get referField() {
        return $('input[placeholder="Refer"]');}
    get facebookField() {return $('input[placeholder="Facebook"]');}
    get twitterField() {return $('input[placeholder="Twitter"]');}
    get registrationIntegrationLogButton() {return $('a.dm.button.normal:nth-child(5)');}
    get noShowSubTagDropDown() {return $('((//div[@class="integration-old-component-field"])[2]//div//select)[2]');}
    get attendeeSubTagDropDown() {return $('((//div[@class="integration-old-component-field"])[1]//div//select)[2]');}
    get hubSpotToggleButton() { return $(".--full-size.Box-content > div > div:nth-of-type(6) > button[role='switch']") }
    get recordTimelineEventToggleButton() { return $("div.integration-margins:nth-child(4) div.radio-group.--no-padding > button.ant-switch") }
    get hubspotRegistrantsDropdown() { return $("select#event-hubspot-attendee-action") }
    get HubspotDropdown() { return $("select#event-hubspot-lists") }
    get selectGroupDropdown() { return $("div:nth-child(3) > select") }
    get selectGroupInterestDropdown() { return $("div:nth-child(4) > select") }
    get chooseItemFromListAttendeeDropdown() { return $("div:nth-child(1) > div.integration-old-component-field > div > div > select:nth-child(2)") }
    get chooseItemFromListSecondAttendeeDropdown() { return $("div:nth-child(1) > div.integration-old-component-field > div > div > select:nth-child(3)") }
    get selectGroupInterestAttendeeDropdown() { return $("div:nth-child(1) > div.integration-old-component-field > div > div > select:nth-child(4)") }
    get chooseItemFromListNoShowDropdown() { return $("div.content-padding > div:nth-child(2) > div:nth-child(2) select:nth-child(2)") }
    get chooseItemFromListSecondNoShowDropdown() { return $("div.content-padding > div:nth-child(2) > div:nth-child(2) select:nth-child(3)") }
    get selectGroupInterestNoShowDropdown() { return $("div.content-padding > div:nth-child(2) > div:nth-child(2) select:nth-child(4)") }
    get noShowTagNameField() { return $("(//input[@placeholder='Tag name'])[2]") }
    get noShowTagDropDown() {return $('((//div[@class="integration-old-component-field"])[2]//div//select)[1]');}
    get attendeeTagDropDown() {return $('((//div[@class="integration-old-component-field"])[1]//div//select)[1]');}
    get eventMarketoListDropdown() {
        return $('#event-marketo-lists');
    }
    get chooseListSalesForceDropdown() {
        return $('#event-pardot-lists');
    }

    //-----------------------ACTION METHODS------------------//

    manageIntegrationTabIsDisplayed() {
        this.manageIntegrationTab.waitForDisplayed({ timeout: 10000 });
        return this.manageIntegrationTab.isDisplayed();
    }

    currentIntegrationTabIsDisplayed() {
        this.currentIntegrationTab.waitForDisplayed({ timeout: 10000 });
        return this.currentIntegrationTab.isDisplayed();
    }
    addNewTabIsDisplayed() {
        this.addNewTab.waitForDisplayed({ timeout: 10000 });
        return this.addNewTab.isDisplayed();
    }

    zapierIconIsDisplayed() {
        this.zapierIcon.waitForDisplayed({ timeout: 10000 });
        return this.zapierIcon.isDisplayed();
    }

    infusionsoftIconIsDisplayed() {
        this.infusionsoftIcon.waitForDisplayed({ timeout: 10000 });
        return this.infusionsoftIcon.isDisplayed();
    }

    aweberIconIsDisplayed() {
        this.aweberIcon.waitForDisplayed({ timeout: 10000 });
        return this.aweberIcon.isDisplayed();
    }

    ontraportIconIsDisplayed() {
        this.ontraportIcon.waitForDisplayed({ timeout: 10000 });
        return this.ontraportIcon.isDisplayed();
    }

    mailchimpIconIsDisplayed() {
        this.mailchimpIcon.waitForDisplayed({ timeout: 10000 });
        return this.mailchimpIcon.isDisplayed();
    }

    getresponseIconIsDisplayed() {
        this.getresponseIcon.waitForDisplayed({ timeout: 10000 });
        return this.getresponseIcon.isDisplayed();
    }

    activecampaignIconIsDisplayed() {
        this.activecampaignIcon.waitForDisplayed({ timeout: 10000 });
        return this.activecampaignIcon.isDisplayed();
    }

    convertKitIconIsDisplayed() {
        this.convertKitIcon.waitForDisplayed({ timeout: 10000 });
        return this.convertKitIcon.isDisplayed();
    }
    dripIconIsDisplayed() {
        this.dripIcon.waitForDisplayed({ timeout: 10000 });
        return this.dripIcon.isDisplayed();
    }

    marketheroIconIsDisplayed() {
        this.marketheroIcon.waitForDisplayed({ timeout: 10000 });
        return this.marketheroIcon.isDisplayed();
    }

    marketoIconIsDisplayed() {
        this.marketoIcon.waitForDisplayed({ timeout: 10000 });
        return this.marketoIcon.isDisplayed();
    }


    clickOnMailchimpIcon() {
        if (this.mailchimpIconIsDisplayed() === true) {
            this.mailchimpIcon.click();

        } else {
            throw new Error("Mailchimp icon is not displayed");
        }

    }

    removePreAddedMailchimp() {
        browser.pause(3000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.mailchimpIcon.click();
            browser.pause(3000)
        } else {
            console.log("no pre added section is displayed");
        }
    }
    mailchimpLoginContantIsDisplayed() {
        this.mailchimpLoginContant.waitForDisplayed({ timeout: 50000 });
        return this.mailchimpLoginContant.isDisplayed();
    }

    fillMailchimpUserNameField(userid) {
        this.mailchimpUserNameField.waitForDisplayed({ timeout: 10000 });
        this.mailchimpUserNameField.setValue(userid);

    }
    fillMailchimpPasswordField(password) {
        this.mailchimpPasswordField.setValue(password);
    }
    mailchimpLoginButtonIsDispalyed() {
        this.mailchimpLoginButton.waitForDisplayed({ timeout: 10000 });
        return this.mailchimpLoginButton.isDisplayed();
    }

    clickOnMailchimpLoginButton() {
        if (this.mailchimpLoginButtonIsDispalyed() === true) {
            this.mailchimpLoginButton.click();
        } else {
            throw new Error("mail chimp login button is not displayed");
        }

    }
    fillMailchimpLoginForm(loginHost) {
        var data = TestUtils.getUserCredetials(loginHost); //Retrive data from excel
        browser.pause(3000);

        const userid = data[0];
        const password = data[1];
        this.fillMailchimpUserNameField(userid);
        this.fillMailchimpPasswordField(password);

    }

    authorizePageTitleIsDisplayed() {
        this.authorizePageTitle.waitForDisplayed({ timeout: 10000 });
        return this.authorizePageTitle.isDisplayed();
    }

    allowButtonIsDisplayed() {
        this.allowButton.waitForDisplayed({ timeout: 10000 });
        return this.allowButton.isDisplayed();
    }

    clickOnAllowButton() {
        if (this.allowButtonIsDisplayed() === true) {
            this.allowButton.scrollIntoView();
            this.allowButton.click();
        } else {
            throw new Error("Allow button is not displayed");
        }
    }

    validateAddedMailchimp(status) {
        var actStatus = this.mailchimpIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Mailchimp successfully added into account")
        } else {
            throw new Error("Mailchimp is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    clickOnZapierIcon() {
        if (this.zapierIconIsDisplayed() === true) {
            this.zapierIcon.click();

        } else {
            throw new Error("Zapier icon is not displayed");
        }
    }

    zapierEmailFieldIsDisplayed() {
        this.zapierEmailField.waitForDisplayed({ timeout: 10000 });
        return this.zapierEmailField.isDisplayed();
    }

    fillZapierEmailField(userid) {
        this.zapierEmailField.waitForDisplayed({ timeout: 10000 });
        this.zapierEmailField.setValue(userid);

    }

    zapierContinueButtonIsDisplayed() {
        this.zapierContinueButton.waitForDisplayed({ timeout: 10000 });
        return this.zapierContinueButton.isDisplayed();
    }

    clickOnZapierContinueButton() {
        if (this.zapierContinueButtonIsDisplayed() === true) {
            this.zapierContinueButton.click();
        } else {
            throw new Error("zapier continue button is not displayed");
        }
    }
    fillZapierPasswordField(password) {
        this.zapierPasswordField.waitForDisplayed({ timeout: 30000 });
        this.zapierPasswordField.setValue(password);
    }

    fillZapierLoginForm(login) {
        var data = TestUtils.getUserCredetials(login); //Retrive data from excel
        browser.pause(3000);

        const userid = data[0];
        const password = data[1];
        this.fillZapierEmailField(userid);
        this.clickOnZapierContinueButton();
        browser.pause(2000);
        this.fillZapierPasswordField(password);

    }

    zapierDashboardHeaderIsDisplayed() {
        this.zapierDashboardHeader.waitForDisplayed({ timeout: 15000 });
        return this.zapierDashboardHeader.isDisplayed();

    }

    clickOnInfusionSoftIcon() {
        if (this.infusionsoftIconIsDisplayed() === true) {
            this.infusionsoftIcon.click();

        } else {
            throw new Error("Infusionsoft icon is not displayed");
        }
    }
    infusionsoftEmailFieldIsDisplayed() {
        return this.infusionsoftEmailField.isDisplayed();
    }

    fillInfusionsoftEmailField(userid) {
        this.infusionsoftEmailField.waitForDisplayed({ timeout: 10000 });
        this.infusionsoftEmailField.setValue(userid);

    }

    fillInfusionsoftPasswordField(password) {
        this.infusionsoftPasswordField.waitForDisplayed({ timeout: 30000 });
        this.infusionsoftPasswordField.setValue(password);
    }

    fillInfusionSoftLoginForm(login) {
        var data = TestUtils.getUserCredetials(login); //Retrive data from excel
        browser.pause(3000);

        const userid = data[0];
        const password = data[1];
        this.fillInfusionsoftEmailField(userid);
        this.fillInfusionsoftPasswordField(password);

    }


    infusionsoftLoginButtonIsDisplayed() {
        this.infusionsoftLoginButton.waitForDisplayed({ timeout: 10000 });
        return this.infusionsoftLoginButton.isDisplayed();
    }

    clickOnInfusionsoftLoginButton() {
        if (this.infusionsoftLoginButtonIsDisplayed() === true) {
            this.infusionsoftLoginButton.click();
        } else {
            throw new Error("Infusionsoft login button is not displayed");
        }
    }

    accountCentralPageHeaderIsDispalyed() {
        this.accountCentralPageHeader.waitForDisplayed({ timeout: 10000 });
        return this.accountCentralPageHeader.isDisplayed();
    }

    infusionsoftAllowButtonIsDisplayed() {
        this.infusionsoftAllowButton.waitForDisplayed({ timeout: 10000 });
        return this.infusionsoftAllowButton.isDisplayed();
    }

    clickOnInfusionSoftAllowButton() {
        if (this.infusionsoftAllowButtonIsDisplayed() === true) {
            this.infusionsoftAllowButton.click();
        } else {
            throw new Error("Infusionsoft allow button is not displayed");
        }
    }
    validateAddedInfusionsoft(status) {
        var actStatus = this.infusionsoftIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("ActiveCampaign integration successfully added into account")
        } else {
            throw new Error("ActiveCampaign integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    clickOnAweberIcon() {
        if (this.aweberIconIsDisplayed() === true) {
            this.aweberIcon.click();
        } else {
            throw new Error("Aweber icon is not displayed");
        }
    }

    aweberLogoIsDisplayed() {
        this.aweberLoginPageLogo.waitForDisplayed({ timeout: 10000 });
        return this.aweberLoginPageLogo.isDisplayed();

    }

    fillAweberLoginForm(login) {
        var data = TestUtils.getUserCredetials(login); //Retrive data from excel
        browser.pause(3000);

        const userid = data[0];
        const password = data[1];
        this.fillAweberEmailField(userid);
        this.fillAweberPasswordField(password);

    }

    fillAweberEmailField(userid) {
        this.aweberEmailField.waitForDisplayed({ timeout: 10000 });
        this.aweberEmailField.setValue(userid);

    }

    fillAweberPasswordField(password) {
        this.aweberPasswordField.waitForDisplayed({ timeout: 30000 });
        this.aweberPasswordField.setValue(password);
    }

    allowAccessButtonIsDisplayed() {
        this.allowAccessButton.waitForDisplayed({ timeout: 10000 });
        return this.allowAccessButton.isDisplayed()
    }

    clickOnAllowAccessButton() {
        if (this.allowAccessButtonIsDisplayed() === true) {
            this.allowAccessButton.click();
        } else {
            throw new Error("Allow access button is not displayed");
        }
    }

    validateAddedAweber(status) {
        var actStatus = this.aweberIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Aweber successfully added into account")
        } else {
            throw new Error("Aweber is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    clickOnMarketoIcon() {
        if (this.marketoIconIsDisplayed() === true) {
            this.marketoIcon.click();
        } else {
            throw new Error("Marketo icon is not displayed");
        }
    }

    clientIdFieldIsDisplayed() {
        this.clientIdField.waitForDisplayed({ timeout: 10000 });
        return this.clientIdField.isDisplayed();
    }

    fillMarketoLoginForm(login) {
        var data = TestUtils.getUserCredetials(login); //Retrive data from excel
        browser.pause(3000);

        const clientId = data[0];
        const clientSecret = data[1];
        const restApiEndPoint = data[2];
        const restApiIdentity = data[3];
        this.fillClientIdField(clientId);
        this.fillClientSecretField(clientSecret);
        this.fillRestApiEndPointField(restApiEndPoint);
        this.fillRestApiIdentityField(restApiIdentity);

    }

    fillClientIdField(clientId) {
        this.clientIdField.waitForDisplayed({ timeout: 10000 });
        this.clientIdField.setValue(clientId);

    }

    fillClientSecretField(clientSecret) {
        this.clientSecretField.waitForDisplayed({ timeout: 30000 });
        this.clientSecretField.setValue(clientSecret);
    }

    fillRestApiEndPointField(restApiEndPoint) {
        this.restApiEndPointField.waitForDisplayed({ timeout: 30000 });
        this.restApiEndPointField.setValue(restApiEndPoint);
    }
    fillRestApiIdentityField(restApiIdentity) {
        this.restApiIdentityField.waitForDisplayed({ timeout: 30000 });
        this.restApiIdentityField.setValue(restApiIdentity);
    }

    connectButtonIsDisplayed() {
        this.connectButton.waitForDisplayed({ timeout: 10000 });
        return this.connectButton.isDisplayed();
    }

    clickOnConnectButton() {
        if (this.connectButtonIsDisplayed() === true) {
            this.connectButton.click();
            browser.pause(3000);
        } else {
            throw new Error("Connect button is not displayed");
        }
    }
    validateAddedMarketo(status) {
        var actStatus = this.marketoIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Marketo successfully added into account")
        } else {
            throw new Error("Marketo is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }
    popupTitleIsDisplayed() {
        this.popupTitle.waitForDisplayed({ timeout: 10000 });
        return this.popupTitle.isDisplayed();
    }

    getApiKeyData() {
        var keyData = $(".improved-section.key .text").getAttribute("value");
        return keyData;
    }

    getKeySecret() {
        var keySecret = $("form#form .text").getAttribute("value");
        return keySecret;
    }

    clickOnConvertKitIcon() {
        if (this.convertKitIconIsDisplayed() === true) {
            this.convertKitIcon.click();
        } else {
            throw new Error("convert kit icon is not displayed");
        }
    }

    validateAddedConvertKit(status) {
        var actStatus = this.convertKitIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Convertkit integration successfully added into account")
        } else {
            throw new Error("Convertkit integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    clickOnMarketheroIcon() {
        if (this.marketheroIconIsDisplayed() === true) {
            this.marketheroIcon.click();
        } else {
            throw new Error("Market hero icon is not displayed");
        }
    }

    validateAddedMarkethero(status) {
        browser.pause(2000);
        var actStatus = this.marketheroIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Markethero integration successfully added into account")
        } else {
            throw new Error("Markethero integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    removePreAddedZapier() {
        browser.pause(3000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.zapierIcon.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }

    removePreAddedInfusionsoft() {
        browser.pause(3000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.infusionsoftEmailField.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }

    removePreAddedAweber() {
        browser.pause(3000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.aweberIcon.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }

    removePreAddedMarketo() {
        browser.pause(2000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.marketoIcon.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }

    removePreAddedConvertKit() {
        browser.pause(3000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.convertKitIcon.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }

    removePreAddedMarkethero() {
        browser.pause(3000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.marketheroIcon.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }
    clickOnActiveCampaignIcon() {
        if (this.activecampaignIconIsDisplayed() === true) {
            this.activecampaignIcon.click();
        } else {
            throw new Error("Active campaign icon is not displayed");
        }
    }

    fillActiveCampaignUrlField(login) {
        var data = TestUtils.getUserCredetials(login); //Retrive data from excel
        browser.pause(3000);
        var url = data[0];
        console.log("URL is >>" + url)
        var url1 = url.toString();
        console.log("URL is >>" + url1)
        this.fillApiUrlField(url1);

    }

    fillApiUrlField(url) {
        this.apiUrlField.waitForDisplayed({ timeout: 10000 });
        this.apiUrlField.setValue(url);

    }
    validateAddedActiveCampaign(status) {
        browser.pause(2000);
        var actStatus = this.activecampaignIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("ActiveCampaign integration successfully added into account")
        } else {
            throw new Error("ActiveCampaign integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    removePreAddedActiveCampaign() {
        browser.pause(2000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.activecampaignIcon.click();

        } else {
            console.log("no pre added integartion is displayed");
        }
    }



    validateAddedGetresponse(status) {
        browser.pause(2000);
        var actStatus = this.getresponseIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Getresponse integration successfully added into account")
        } else {
            throw new Error("Getresponse integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    removePreAddedGetresponse() {
        browser.pause(2000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.getresponseIcon.click();

        } else {
            console.log("no pre added Getresponse integartion is displayed");
        }
    }

    clickOnGetresponseIcon() {
        if (this.getresponseIconIsDisplayed() === true) {
            this.getresponseIcon.click();
        } else {
            throw new Error("Getresponse icon is not displayed");
        }
    }

    validateAddedDripIntegration(status) {
        browser.pause(2000);
        var actStatus = this.dripIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Drip integration successfully added into account")
        } else {
            throw new Error("Drip integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    removePreAddedDrip() {
        browser.pause(2000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.dripIcon.click();

        } else {
            console.log("no pre added Drip integartion is displayed");
        }
    }

    clickOnDripIcon() {
        if (this.getresponseIconIsDisplayed() === true) {
            this.dripIcon.click();
        } else {
            throw new Error("Drip icon is not displayed");
        }
    }

    validateAddedOntraport(status) {
        browser.pause(2000);
        var actStatus = this.ontraportIcon.getAttribute("class");
        if (actStatus.includes(status)) {
            console.log("Ontraport integration successfully added into account")
        } else {
            throw new Error("Ontraport integration is not added in account actualStatus>>" + actStatus + "expected status>>" + status);
        }
    }

    removePreAddedOntraport() {
        browser.pause(2000);
        if ($(".btn.btn-green.btn-lg.confirm").isDisplayed() === true) {
            $(".btn.btn-green.btn-lg.confirm").click();
            browser.pause(3000);
            this.ontraportIcon.click();

        } else {
            console.log("no pre added Ontraport integartion is displayed");
        }
    }

    clickOnOntraportIcon() {
        if (this.ontraportIconIsDisplayed() === true) {
            this.ontraportIcon.click();
        } else {
            throw new Error("Ontraport icon is not displayed");
        }
    }
    openZapierInNewTab(login) {
        var data = TestUtils.getUserCredetials(login); //Retrive data from excel
        browser.pause(3000);
        var url = data[2];
        super.openUrlInNewTab(url);
        super.switchToWindowNewTab();
        browser.pause(3000);

    }

    zapsOptionIsDisplayed() {
        this.zapsOption.waitForDisplayed({ timeout: 10000 });
        return this.zapsOption.isDisplayed();
    }

    clickOnZapsOption() {
        if (this.zapsOptionIsDisplayed() === true) {
            this.zapsOption.click();
        } else {
            throw new Error("Zaps option is not displayed");
        }
    }

    openMenuButtonIsDisplayed() {
        this.openMenuButton.waitForDisplayed({ timeout: 10000 });
        return this.openMenuButton.isDisplayed();
    }

    clickOnOpenMenuButton() {
        if (this.openMenuButtonIsDisplayed() === true) {
            this.openMenuButton.click();
        } else {
            throw new Error("open menu button is not displayed");
        }
    }

    editOptionIsDisplayed() {
        this.editOption.waitForDisplayed({ timeout: 10000 });
        return this.editOption.isDisplayed();
    }

    clickOnEditOption() {
        if (this.editOptionIsDisplayed() === true) {
            this.editOption.click();
        } else {
            throw new Error("edit option is not displayed");
        }
    }

    editButtonIsDisplayed() {
        $("div:nth-of-type(2) > .css-1rlstxj  .css-143xedc").moveTo();
        this.editButton.moveTo();
        this.editButton.waitForDisplayed({ timeout: 10000 });
        return this.editButton.isDisplayed();
    }

    clickOnEditButton() {
        if (this.editButtonIsDisplayed() === true) {
            this.editButton.click();
        } else {
            throw new Error("edit button is not displayed");
        }
    }

    chooseAppAndEventButtonIsDisPlayed() {
        this.chooseAppAndEventButton.waitForDisplayed({ timeout: 10000 });
        return this.chooseAppAndEventButton.isDisplayed();
    }
    clickChooseAppAndEventButton() {
        if (this.chooseAppAndEventButtonIsDisPlayed() === true) {
            this.chooseAppAndEventButton.click();
        } else {
            throw new Error("choose app & event button is not displayed");
        }
    }

    chooseAnAppOptionIsDisplayed() {
        this.chooseAnAppOption.waitForDisplayed({ timeout: 10000 });
        return this.chooseAnAppOption.isDisplayed();
    }

    clickChooseAnAppButton() {
        if (this.chooseAnAppOptionIsDisplayed() === true) {
            this.chooseAnAppOption.click();
        } else {
            throw new Error("Choose an app option is not displayed");
        }
    }

    demioAppOptionIsDisplayed() {
        this.demioAppOption.waitForDisplayed({ timeout: 10000 });
        return this.demioAppOption.isDisplayed();
    }

    selectDemioAppOption() {
        if (this.demioAppOptionIsDisplayed() === true) {
            this.demioAppOption.click();
        } else {
            throw new Error("demio app option is not displaying");
        }
    }

    continueButtonUnderZabPageIsDisplayed() {
        this.continueButtonUnderZabPage.scrollIntoView();
        this.continueButtonUnderZabPage.waitForDisplayed({ timeout: 10000 });
        return this.continueButtonUnderZabPage.isDisplayed();
    }

    clickcontinueButtonUnderZabPage() {
        if (this.continueButtonUnderZabPageIsDisplayed() === true) {
            this.continueButtonUnderZabPage.click();
            browser.pause(2000);
        } else {
            throw new Error("Continue button under zab screen is not displayed");
        }
    }

    selectDemioAccount(demioAccount) {
        $("div[role='presentation'] > .css-vwaet0-Input__input--grey100--small--hasIcon").click();
        const searchField = $("div[role='presentation'] > input");
        searchField.moveTo();
        searchField.waitForDisplayed({ timeout: 10000 });
        searchField.setValue(demioAccount);
        browser.pause(2000);
        browser.keys(['Meta', 'Enter']);
        browser.pause(2000);
    }

    setUpTriggerTabIsDisplayed() {
        this.setUpTriggerTab.waitForDisplayed({ timeout: 10000 });
        return this.setUpTriggerTab.isDisplayed();
    }

    clickOnSetUpTriggerTab() {
        if (this.setUpTriggerTabIsDisplayed() === true) {
            this.setUpTriggerTab.click();
        } else {
            throw new Error("Set up trigger tab is not displayed");
        }
    }

    eventDropDownIsDisplayed() {
        this.eventDropDown.waitForDisplayed({ timeout: 10000 });
        return this.eventDropDown.isDisplayed();
    }

    clickOnEventDropdown() {
        if (this.eventDropDownIsDisplayed() === true) {
            this.eventDropDown.click();
        } else {
            throw new Error("event dropdown is not displayed");
        }
    }

    searchEventFromList(eventName) {
        const searchField = $("div[role='presentation'] > input[name='query']");
        searchField.waitForDisplayed({ timeout: 10000 });
        searchField.setValue(eventName);
        browser.pause(2000);
        browser.keys(['Meta', 'Enter']);
        browser.pause(2000);
    }

    testTriggerButtonIsDisplayed() {
        this.testTriggerButton.waitForDisplayed({ timeout: 10000 });
        return this.testTriggerButton.isDisplayed();
    }

    clickOnTestTriggerButton() {
        if (this.testTriggerButtonIsDisplayed() === true) {
            this.testTriggerButton.click();
        } else {
            throw new Error("Test trigger button is not displayed");
        }
    }

    addStepButtonIsDisplayed() {
        this.addStepButton.waitForDisplayed({ timeout: 10000 });
        return this.addStepButton.isDisplayed();
    }

    clickOnAddStepButton() {
        if (this.addStepButtonIsDisplayed() === true) {
            this.addStepButton.click();
        } else {
            throw new Error("ADD A STEP BUTTON IS NOT DISPLAYED")
        }
    }

    googleSheetAppOptionIsDisplayed() {
        this.googleSheetAppOption.waitForDisplayed({ timeout: 10000 });
        return this.googleSheetAppOption.isDisplayed();
    }

    selectGoogleSheetAppOption() {
        if (this.googleSheetAppOptionIsDisplayed() === true) {
            this.googleSheetAppOption.click();
        } else {
            throw new Error("GoogleSheet app option is not displaying");
        }
    }
    searchGmailAccountFromList(gmailAccount) {
        const searchField = $("div[role='presentation'] > input");
        searchField.waitForDisplayed({ timeout: 10000 });
        searchField.setValue(gmailAccount);
        browser.pause(2000);
        browser.keys(['Meta', 'Enter']);
        browser.pause(2000);
    }

    gmailAccountDropDownIsDisplayed() {
        this.gmailAccountDropDown.waitForDisplayed({ timeout: 10000 });
        return this.gmailAccountDropDown.isDisplayed();
    }
    clickOnGmailAccountDropdown() {
        if (this.gmailAccountDropDownIsDisplayed() === true) {
            this.gmailAccountDropDown.click();
        } else {
            throw new Error("Gmail account dropdown is not displayed");
        }
    }

    createSpreadSheetButtonIsDisplayed() {
        this.createSpreadSheetButton.waitForDisplayed({ timeout: 10000 });
        return this.createSpreadSheetButton.isDisplayed();
    }

    clickOnCreateSpreadSheetButton() {
        if (this.createSpreadSheetButtonIsDisplayed() === true) {
            this.createSpreadSheetButton.click();
        } else {
            throw new Error("Create spreadsheet row in google sheets button is not displayed");
        }

    }

    spreadSheetDropDownIsDisplayed() {
        this.spreadSheetDropDown.waitForDisplayed({ timeout: 10000 });
        return this.spreadSheetDropDown.isDisplayed();
    }
    clickOnSpreadSheetDropDown() {
        if (this.spreadSheetDropDownIsDisplayed() === true) {
            this.spreadSheetDropDown.click();
        } else {
            throw new Error("SpreadSheet dropdown is not displayed");
        }
    }



    selectSpreadSheet(spreadsheet) {
        this.clickOnSpreadSheetDropDown();
        const searchField = $("div[role='presentation'] > input[name='query']");
        searchField.waitForDisplayed({ timeout: 10000 });
        searchField.setValue(spreadsheet);
        browser.pause(2000);
        browser.keys(['Meta', 'Enter']);
        browser.pause(2000);
    }

    workSheetDropDownIsDisplayed() {
        this.workSheetDropDown.waitForDisplayed({ timeout: 10000 });
        return this.workSheetDropDown.isDisplayed();
    }
    clickOnWorkSheetDropDown() {
        if (this.workSheetDropDownIsDisplayed() === true) {
            this.workSheetDropDown.click();
        } else {
            throw new Error("Worksheet dropdown is not displayed");
        }
    }


    selectWorkSheet(worksheet) {
        this.clickOnWorkSheetDropDown();
        const searchField = $("div[role='presentation'] > input[name='query']");
        searchField.waitForDisplayed({ timeout: 10000 });
        searchField.setValue(worksheet);
        browser.pause(2000);
        browser.keys(['Meta', 'Enter']);
        browser.pause(2000);
    }

    testAndContinueButtonIsDisplayed() {
        this.testAndContinueButton.waitForDisplayed({ timeout: 10000 });
        return this.testAndContinueButton.isDisplayed();
    }

    clickOnTestAndContinueButton() {
        if (this.testAndContinueButtonIsDisplayed() === true) {
            this.testAndContinueButton.click();
        } else {
            throw new Error("Test and continue button is not dipslayed");
        }
    }

    zapToggleButtonIsDisplayed() {
        this.zapToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.zapToggleButton.isDisplayed();
    }

    turnOnZapButton() {
        if (this.zapToggleButtonIsDisplayed() === true) {
            this.zapToggleButton.click()
        } else {
            throw new Error("zap toggle button is not displayed");
        }

    }

    romoveAllAddedIntegrations() {
        if ($("(//span[@class='sections active'])[1]").isDisplayed() === true) {
            do {
                $("(//span[@class='sections active'])[1]").click();
                browser.pause(2000);
                $(".btn.btn-green.btn-lg.confirm").click();
                browser.pause(7000);
            }
            while ($("(//span[@class='sections active'])[1]").isDisplayed() === true);
        }
        else {

            console.log("No integration is displayed");
        }

    }

    integrationToggleButtonIsDisplayed() {
        this.integrationToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.integrationToggleButton.isDisplayed();
    }

    clickOnIntegrationToggleButton() {
        if (this.integrationToggleButtonIsDisplayed() === true) {
            this.integrationToggleButton.click();
        } else {
            throw new Error("Integration toggle button is not displayed");
        }
    }


    validateIntegrationPopup(title) {
        browser.pause(2000);
        var actTitle = this.integrationPopupTitle.getText();
        if (actTitle.includes(title)) {
            console.log("integration popoup title matched>>" + actTitle);
        } else {
            throw new Error("integration popup title missmatched ...actual title>>" + actTitle + "expected title>>" + title);
        }
    }
    chooseListDropDownIsDisplayed() {
        this.chooseListDropDown.waitForDisplayed({ timeout: 10000 });
        return this.chooseListDropDown.isDisplayed();
    }

    clickChooseListDropDown() {
        if (this.chooseListDropDownIsDisplayed() === true) {
            this.chooseListDropDown.click();
        } else {
            throw new Error("choose list dropdown is not displayed");
        }
    }

    selectListOption(list) {
        const listOption = $("select > option[label='" + list + "']");
        listOption.waitForDisplayed({ timeout: 10000 });
        listOption.click();
    }

    attendeeDropDownIsDisplayed() {
        this.attendeeDropDown.waitForDisplayed({ timeout: 10000 });
        return this.attendeeDropDown.isDisplayed();
    }

    clickOnAttendeeDropDown() {
        if (this.attendeeDropDownIsDisplayed() === true) {
            this.attendeeDropDown.click();
        } else {
            throw new Error("attendee drop down list is not displayed");
        }
    }

    selectAttendeesOption(attendee) {
        const option = $("//div[@data-name='" + attendee + "']");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    listOptionDropDownIsDisplayed() {
        this.listOptionDropDown.waitForDisplayed({ timeout: 10000 });
        return this.listOptionDropDown.isDisplayed();
    }

    clickOnListOptionDropDown() {
        if (this.listOptionDropDownIsDisplayed() === true) {
            this.listOptionDropDown.click();
        } else {
            throw new Error("List option drop down is not displayed");
        }
    }

    selectListOption(listOption) {
        const option = $("select > option[label='" + listOption + "']");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    saveIntegrationButtonIsDisplayed() {
        this.saveIntegrationButton.scrollIntoView();
        this.saveIntegrationButton.waitForDisplayed({ timeout: 10000 });
        return this.saveIntegrationButton.isDisplayed();
    }

    clickOnSaveIntegrationButton() {
        if (this.saveIntegrationButtonIsDisplayed() === true) {
            this.saveIntegrationButton.click();
        } else {
            throw new Error("Save integration button is not displayed");
        }
    }

    validateAddedIntegrationToggleButton() {
        var actAttribute = this.integrationToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("integration enabled successfully");
        } else {
            throw new Error("Failed to enabled integration")
        }
    }
    chooseListOptionsDropDownIsDisplayed() {
        this.chooseListOptionsButton.waitForDisplayed({ timeout: 30000 });
        return this.chooseListOptionsButton.isDisplayed();
    }

    clickOnChooseListOptionsDropDown() {
        if (this.chooseListOptionsDropDownIsDisplayed() === true) {
            this.chooseListOptionsButton.click();
        } else {
            throw new Error("choose list options drop down is not displayed");
        }
    }

    selectChooseListOption(chooseListOption) {
        const chooseList = $("select > option[label='" + chooseListOption + "']");
        chooseList.waitForDisplayed({ timeout: 10000 });
        chooseList.click()
    }

    selectListDropDownIsDisplayed() {
        this.selectListDropDown.waitForDisplayed({ timeout: 10000 });
        return this.selectListDropDown.isDisplayed();
    }

    clickOnSelectListDropDownOption() {
        if (this.selectListDropDownIsDisplayed() === true) {
            this.selectListDropDown.click();
        } else {
            throw new Error("Select list dropdown is not displayed");
        }
    }

    selectOptionfromSelectList(selectListOption) {
        const listOption = $("//option[contains(text(),'" + selectListOption + "')]");
        listOption.waitForDisplayed({ timeout: 10000 });
        listOption.click();
    }

    tagNameFieldIsDisplayed() {
        this.tagNameField.waitForDisplayed({ timeout: 10000 });
        return this.tagNameField.isDisplayed();
    }

    fillTagNameField(tagName) {
        if (this.tagNameFieldIsDisplayed() === true) {
            this.tagNameField.setValue(tagName);
        } else {
            throw new Error("Tag name field is not displayed");
        }
    }
    tagFieldIsDisplayed() {
        this.tagField.waitForDisplayed({ timeout: 10000 });
        return this.tagField.isDisplayed();
    }

    fillTagField(tag) {
        if (this.tagFieldIsDisplayed() === true) {
            this.tagField.setValue(tag);
        } else {
            throw new Error("Tag field is not displayed");
        }
    }
    okButtonIsDisplayed() {
        this.okButton.waitForDisplayed({ timeout: 10000 });
        return this.okButton.isDisplayed();
    }

    clickOnOkButton() {
        if (this.okButtonIsDisplayed() === true) {
            this.okButton.click();
        } else {
            throw new Error("ok button is not displayed");
        }
    }

    registratntsDropdownIsDisplayed() {
        this.registratntsDropdown.waitForDisplayed({ timeout: 10000 });
        return this.registratntsDropdown.isDisplayed();
    }

    clickOnRegiatratntsDropdown() {
        if (this.registratntsDropdownIsDisplayed() === true) {
            this.registratntsDropdown.click();
        } else {
            throw new Error("Registratnts dropdown is not displayed")
        }
    }

    selectRegistrantsOption(registrant) {
        const option = $("//option[contains(text(),'" + registrant + "')]");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    marketoChooseListDropDownIsDisplayed() {
        this.marketoChooseList.waitForDisplayed({ timeout: 10000 });
        return this.marketoChooseList.isDisplayed();
    }

    clickOnMarketoChooseList() {
        if (this.marketoChooseListDropDownIsDisplayed() === true) {
            this.marketoChooseList.click();
        } else {
            throw new Error("Marketo choose list dropdown is not displayed");
        }
    }

    selectMarketoChooseListOption(chooseList) {
        const option = $("//option[contains(text(),'" + chooseList + "')]");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    chooseCategoryDropdownIsDisplayed() {
        this.chooseCategoryDropdown.waitForDisplayed({ timeout: 10000 });
        return this.chooseCategoryDropdown.isDisplayed();
    }

    clickOnChooseCategoryDropdown() {
        if (this.chooseCategoryDropdownIsDisplayed() === true) {
            this.chooseCategoryDropdown.click();
        } else {
            throw new Error("choose category dropdown is not displayed");
        }
    }

    selectChooseCategoryOption(category) {
        const option = $("select > option[label='" + category + "']");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    chooseTagDropdownIsDisplayed() {
        this.chooseTagDropdown.waitForDisplayed({ timeout: 10000 });
        return this.chooseTagDropdown.isDisplayed();
    }

    clickOnChooseTagDropdown() {
        if (this.chooseTagDropdownIsDisplayed() === true) {
            this.chooseTagDropdown.click();
        } else {
            throw new Error("choose tag dropdown is not displayed");
        }
    }

    selectChooseTagOption(tag) {
        const option = $("select > option[label='" + tag + "']");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    keapToggleButtonIsDisplayed() {
        this.keapToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.keapToggleButton.isDisplayed();
    }

    clickOnKeapToggleButton() {
        if (this.keapToggleButtonIsDisplayed() === true) {
            this.keapToggleButton.click();
        } else {
            throw new Error("Keap toggle button is not displayed");
        }
    }

    aweberToggleButtonIsDisplayed() {
        this.aweberToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.aweberToggleButton.isDisplayed();
    }

    clickOnAweberToggleButton() {
        if (this.aweberToggleButtonIsDisplayed() === true) {
            this.aweberToggleButton.click();
        } else {
            throw new Error("Aweber toggle button is not displayed");
        }
    }

    ontraportToggleButtonIsDisplayed() {
        this.ontraportToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.ontraportToggleButton.isDisplayed();
    }

    clickOnOntarportToggleButton() {
        if (this.ontraportToggleButtonIsDisplayed() === true) {
            this.ontraportToggleButton.click();
        } else {
            throw new Error("Onterport toggle button is not displayed")
        }
    }

    mailchimpToggleButtonIsDisplayed() {
        this.mailchimpToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.mailchimpToggleButton.isDisplayed();
    }

    clickOnMailchimpToggleButton() {
        if (this.mailchimpToggleButtonIsDisplayed() === true) {
            this.mailchimpToggleButton.click()
        } else {
            throw new Error("mailchimp toggle button is not displayed");
        }
    }

    getresponceToggleButtonIsDisplayed() {
        this.getresponceToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.getresponceToggleButton.isDisplayed();
    }
    clickOnGetresponseTogglebutton() {
        if (this.getresponceToggleButtonIsDisplayed() === true) {
            this.getresponceToggleButton.click()
        } else {
            throw new Error("Getresponse toggle button is not displayed");
        }
    }

    activecampaignToggleButtonIsDisplayed() {
        this.activecampaignToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.activecampaignToggleButton.isDisplayed();
    }

    clickOnActivecampaignToggleButton() {
        if (this.activecampaignToggleButtonIsDisplayed() === true) {
            this.activecampaignToggleButton.click();
        } else {
            throw new Error("Activecampaign toggle button is not displayed");
        }
    }

    convertKitToggleButtonIsDisplayed() {
        this.convertKitToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.convertKitToggleButton.isDisplayed();
    }

    clickOnConvertKitToggleButton() {
        if (this.convertKitToggleButtonIsDisplayed() === true) {
            this.convertKitToggleButton.click();
        } else {
            throw new Error("ConvertKit toggle button is not displayed");
        }
    }

    dripToggleButtonIsDisplayed() {
        this.dripToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.dripToggleButton.isDisplayed();
    }

    clickOnDripToggleButton() {
        if (this.dripToggleButtonIsDisplayed() === true) {
            this.dripToggleButton.click();
        } else {
            throw new Error("Drip toggle button is not displayed");
        }
    }

    marketheroToggleButtonIsDisplayed() {
        this.marketheroToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.marketheroToggleButton.isDisplayed();
    }

    clickOnMarketheroToggleButton() {
        if (this.marketheroToggleButtonIsDisplayed() === true) {
            this.marketheroToggleButton.click();
        } else {
            throw new Error("Markethero toggle button is not displayed");
        }
    }

    marketoToggleButtonIsDisplayed() {
        this.marketoToggleButton.waitForDisplayed({ timeout: 10000 });
        return this.marketoToggleButton.isDisplayed();
    }

    clickOnMarketoToggleButton() {
        if (this.marketoToggleButtonIsDisplayed() === true) {
            this.marketoToggleButton.click();
        } else {
            throw new Error("Marketo toggle button is not displayed");
        }
    }
    validateEnabledAweberToggleButton() {
        var actAttribute = this.aweberToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Aweber integration enabled successfully");
        } else {
            throw new Error("Failed to enable aweber integration")
        }
    }
    validateEnabledMailchimpToggleButton() {
        var actAttribute = this.mailchimpToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Mailchimp integration enabled successfully");
        } else {
            throw new Error("Failed to enable mailchimp integration")
        }
    }

    validateEnabledMarketheroToggleButton() {
        var actAttribute = this.marketheroToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Markethero integration enabled successfully");
        } else {
            throw new Error("Failed to enable Markethero integration")
        }
    }

    validateEnabledMarketoToggleButton() {
        var actAttribute = this.marketoToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Marketo integration enabled successfully");
        } else {
            throw new Error("Failed to enable Marketo integration")
        }
    }

    validateEnabledInfusionsoftToggleButton() {
        var actAttribute = this.infusionsoftToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Infusionsoft integration enabled successfully");
        } else {
            throw new Error("Failed to enable Infusionsoft integration")
        }
    }

    validateEnabledOntraportToggleButton() {
        var actAttribute = this.ontraportToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Ontraport integration enabled successfully");
        } else {
            throw new Error("Failed to enable Ontraport integration")
        }
    }

    tagsDropdownIsDisplayed() {
        this.tagsDropdown.waitForDisplayed({ timeout: 10000 });
        return this.tagsDropdown.isDisplayed();
    }

    clickOnTagsDropdown() {
        if (this.tagsDropdownIsDisplayed() === true) {
            this.tagsDropdown.click();
        } else {
            throw new Error("Tags dropdown is not displayed");
        }
    }

    selectTagOption(tag) {
        const tagOption = $("//option[contains(text(),'" + tag + "')]");
        tagOption.waitForDisplayed({ timeout: 10000 });
        tagOption.click();
    }

    validateEnabledActivecampaignToggleButton() {
        var actAttribute = this.activecampaignToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Activecampaign integration enabled successfully");
        } else {
            throw new Error("Failed to enable Activecampaign integration")
        }
    }
    validateEnabledConvertKitToggleButton() {
        this.convertKitToggleButton.scrollIntoView();
        var actAttribute = this.convertKitToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("ConvertKit integration enabled successfully");
        } else {
            throw new Error("Failed to enable ConvertKit integration")
        }
    }

    validateEnabledDripToggleButton() {
        this.dripToggleButton.scrollIntoView();
        var actAttribute = this.dripToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Drip integration enabled successfully");
        } else {
            throw new Error("Failed to enable Drip integration")
        }
    }

    selectAccountDropdownIsDisplayed() {
        this.selectAccountDropdown.waitForDisplayed({ timeout: 10000 });
        this.selectAccountDropdown.isDisplayed();
    }

    clickOnSelectAccountDropdown() {
        if (this.selectListDropDownIsDisplayed() === true) {
            this.selectAccountDropdown.click();
        } else {
            throw new Error("select account dropdown is not displayed");
        }
    }

    selectAccountFromDropdown(account) {
        const accountOption = $("select > option[label='" + account + "']");
        accountOption.waitForDisplayed({ timeout: 10000 });
        accountOption.click();
    }

    selectIntegrationDropdownIsDisplayed() {
        this.selectIntegrationDropdown.waitForDisplayed({ timeout: 10000 });
        return this.selectIntegrationDropdown.isDisplayed();
    }

    clickOnSelectIntegrationDropdown() {
        if (this.selectIntegrationDropdownIsDisplayed() === true) {
            this.selectIntegrationDropdown.click();
        } else {
            throw new Error("Select integration dropdown is not displayed");
        }
    }

    selectIntegrationOption(integration) {
        const integrationOption = $("//option[contains(text(),'" + integration + "')]");
        integrationOption.waitForDisplayed({ timeout: 10000 });
        integrationOption.click();
    }

    selectCampaignDropdownIsDisplayed() {
        this.selectCampaignDropdown.waitForDisplayed({ timeout: 10000 });
        return this.selectCampaignDropdown.isDisplayed();
    }

    clickOnSelectCampaignDropdown() {
        if (this.selectCampaignDropdownIsDisplayed() === true) {
            this.selectCampaignDropdown.click();
        } else {
            throw new Error("Select campaign dropdown is not displayed");
        }
    }

    selectCampaignOption(campaign) {
        const campaignOption = $("select > option[label='" + campaign + "']");
        campaignOption.waitForDisplayed({ timeout: 10000 });
        campaignOption.click();
    }
    chooseCampaignDropdownIsDisplayed() {
        this.chooseCampaignDropdown.waitForDisplayed({ timeout: 10000 });
        return this.chooseCampaignDropdown.isDisplayed();
    }

    clickOnChooseCampaignDropdown() {
        if (this.chooseCampaignDropdownIsDisplayed() === true) {
            this.chooseCampaignDropdown.click();
        } else {
            throw new Error("choose campaign dropdown is not displayed");
        }
    }

    clickOnChooseCampaignOption(chooseCampaign) {
        const campaignOption = $("select > option[label='" + chooseCampaign + "']");
        campaignOption.waitForDisplayed({ timeout: 10000 });
        campaignOption.click()
    }

    validateEnabledGetresponseToggleButton() {
        var actAttribute = this.getresponceToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Getresponse integration enabled successfully");
        } else {
            throw new Error("Failed to enable Getresponse integration")
        }
    }
    clickOnNoShowDropDown() {
        this.noShowDropDown.click();
    }

    selectNoShowOption(optionValue) {
        const option = $("//div[@data-name='" + optionValue + "']");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();
    }

    clickOnNoShowTagsDropdown() {
        this.NoShowTagsDropdown.click();
    }

    clickOnSaveJoinLinkButton() {
        this.saveJoinLinkButton.waitForClickable({ timeout: 10000 });
        this.saveJoinLinkButton.click();
    }

    clickOnFormButton() {
        this.formButton.waitForClickable({ timeout: 10000 });
        this.formButton.click();
    }

    clickOnLastNameDropdown() {
        this.lastNameDropDown.click();
    }

    clickOnWebsiteDropdown() {
        this.websiteDropDown.click();
    }
    clickOnCompanyDropdown() {
        this.companyDropDown.click();
    }

    clickOnPhoneNumberDropdown() {
        this.phoneNumberDropDown.click();
    }
    clickOnTextDropdown() {
        this.textDropdown.scrollIntoView();
        this.textDropdown.click();
    }

    clickOnTextAreaDropdown() {
        this.textAreaDropdown.scrollIntoView();
        this.textAreaDropdown.click();
    }

    clickOnDropdownDropdown() {
        this.dropdownDropdown.scrollIntoView();
        this.dropdownDropdown.click();
    }

    clickOnCheckBoxDropdown() {
        this.checkBoxDropdown.scrollIntoView();
        this.checkBoxDropdown.click();
    }
    clickOnZipCodeDropdown() {
        this.zipCodeDropdown.scrollIntoView();
        this.zipCodeDropdown.click();
    }
    clickOnReferDropdown() {
        this.referDropdown.click();
    }
    clickOnFacebookDropdown() {
        this.facebookDropdown.click();
    }
    clickOnTwitterDropdown() {
        this.twitterDropdown.click();
    }
    selectDropdownOptions(option) {
        var optionIs = $("div[data-name='" + option + "']");
        optionIs.waitForClickable({ timeout: 10000 });
        optionIs.click();
        browser.pause(500);

    }

    clickOnValidationDropdown() {
        this.validationDropdown.waitForClickable({ timeout: 10000 });
        this.validationDropdown.click();

    }

    fillLastNameField(lastName) {
        this.lastNameField.waitForDisplayed({ timeout: 10000 });
        this.lastNameField.click();
        browser.pause(100);
        browser.keys(['Control', 'a']);
        browser.keys(['Delete']);
        browser.pause(100);
        this.lastNameField.setValue(lastName);
    }

    fillWebsitField(website) {
        this.websiteField.waitForDisplayed({ timeout: 10000 });
        this.websiteField.click();
        browser.pause(100);
        browser.keys(['Control', 'a']);
        browser.keys(['Delete']);
        browser.pause(100);
        this.websiteField.setValue(website);
    }

    fillPhoneNumberField(phone) {
        this.phoneNumberField.scrollIntoView();
        this.phoneNumberField.click();
        browser.pause(1000);
        for (var i = 1; i <= 14; i++) {
            browser.keys(['Backspace']);
        }
        browser.pause(500);
        this.phoneNumberField.setValue(phone);
    }

    fillCompanyField(company) {
        this.companyField.scrollIntoView();
        this.companyField.click();
        browser.pause(100);
        browser.keys(['Control', 'a']);
        browser.keys(['Delete']);
        browser.pause(100);
        this.companyField.setValue(company);
    }

    fillTextField(text) {
        this.textField.scrollIntoView();
        this.textField.setValue(text);
    }

    fillTextAreaField(textArea) {
        this.textAreaField.scrollIntoView();
        this.textAreaField.setValue(textArea);
    }

    clickOnDropdownButton() {
        this.dropdownButton.scrollIntoView();
        this.dropdownButton.click();
    }

    clickOnCheckBox() {
        this.checkbox.scrollIntoView();
        this.checkbox.click();
    }

    fillReferField(refer) {
        this.referField.scrollIntoView();
        this.referField.setValue(refer);
    }

    fillZipCodeField(zip) {
        this.zipCodeField.scrollIntoView();
        this.zipCodeField.setValue(zip);
    }

    fillFacebookField(facebooklink) {
        this.facebookField.scrollIntoView();
        this.facebookField.setValue(facebooklink);
    }
    fillTwitterField(twitter) {
        this.twitterField.scrollIntoView();
        this.twitterField.setValue(twitter);
    }
    clickOnRegistrationIntegrationLogButton() {
        browser.pause(2000);
        this.registrationIntegrationLogButton.waitForDisplayed({ timeout: 10000 });
        this.registrationIntegrationLogButton.scrollIntoView();
        this.registrationIntegrationLogButton.click();
    }

    verifyAttendeeNameOrEmailInLogs(actAttendeeUserName) {
        var expAttendeeUserName = $("(//pre[@class='json-window'])[1]").getText().replace(/["]+/g, '');
        if (expAttendeeUserName.replace(",", '').includes(actAttendeeUserName)) {
            console.log("User data matched!!");

        } else {
            throw new Error("User data missmatched...actual>>" + actAttendeeUserName + "expexted>>" + expAttendeeUserName)
        }
    }

    verifyAttendeeFormDetailInLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[2]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }

    verifyMissedUserNameOrEmailInLogs(actAttendeeUserName) {
        var expAttendeeUserName = $("(//pre[@class='json-window'])[3]").getText().replace(/["]+/g, '');
        if (expAttendeeUserName.replace(",", '').includes(actAttendeeUserName)) {
            console.log("User data matched!!");

        } else {
            throw new Error("User data missmatched...actual>>" + actAttendeeUserName + "expexted>>" + expAttendeeUserName)
        }
    }

    verifyMissedUserFormDetailInLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[4]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyMissedJoinLinkInOntraportLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("tr:nth-child(3) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        var expDetail = $("(//pre[@class='json-window'])[5]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        var expDetail2 = expDetail.replace(/\//g, "");
        var expDetail3 = expDetail2.replace(/,/g, "");
        var expDetail1 = expDetail3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink) | expDetail1.includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyMissedJoinLinkInLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("tr:nth-child(3) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");

        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyAttendeeJoinLinkInLogs(actualLink) {
        var expDetalis1 = $("(//pre[@class='json-window'])[9]").getText().replace(/["]+/g, '');
        var expDetail = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        var expDetail2 = expDetail.replace(/\//g, "");
        var expDetail3 = expDetail2.replace(/,/g, "");
        var expDetail1 = expDetail3.replace(/\\/g, "/");
        if (expDetalis.includes(actualLink) | expDetail1.includes(actualLink)) {
            console.log("Attendee User details matched!!");

        } else {
            throw new Error("Attendee User join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }

    validateSuccessLogUnderAllTriggerLogs(successLog) {
        var actFirstTriggerLog = $("(//pre[@class='json-window'])[2]").getText();
        var actSecondTriggerLog = $("(//pre[@class='json-window'])[4]").getText();
        var actThirdTriggerLog = $("(//pre[@class='json-window'])[5]").getText();
        var actFourthTriggerLog = $("tr:nth-child(3) > td:nth-child(4) > pre").getText();
        var actFifthTriggerLog = $("tr:nth-child(5) > td:nth-child(4) > pre").getText();
        var actSixthTriggerLog = $("(//pre[@class='json-window'])[11]").getText();
        if (actFirstTriggerLog.includes(successLog) && actSecondTriggerLog.includes(successLog) && actThirdTriggerLog.includes(successLog) && actFourthTriggerLog.includes(successLog) && actFifthTriggerLog.includes(successLog) && actSixthTriggerLog.includes(successLog)) {
            console.log("Success log successfully displaying under all trigger logs");
        } else {
            throw new Error("Success log is missing in any one of log , first log>>" + actFirstTriggerLog + "Second trigger log>>" + actSecondTriggerLog + "Third trigger log>>" + actThirdTriggerLog + "Fourth trigger log>>" + actFourthTriggerLog + "Fifth trigger log>>" + actFifthTriggerLog + "Sixth trigger log>>" + actSixthTriggerLog);
        }
    }

    selectJoinLinkField(field) {
        const dropdownButton = $("div:nth-child(3) > div.ant-row.ant-form-item > div.ant-col.ant-form-item-control-wrapper");
        dropdownButton.click();
        $("//li[contains(text(),'" + field + "')]").click();
    }

    validateEnabledKeapToggleButton() {
        var actAttribute = this.keapToggleButton.getAttribute("aria-checked");
        if (actAttribute.includes("true")) {
            console.log("Keap integration enabled successfully");
        } else {
            throw new Error("Failed to enable Keap integration")
        }
    }
    verifyAttendeeEmailInTriggerLogs(actAttendeeUserName) {
        var expAttendeeUserName = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        if (expAttendeeUserName.replace(",", '').includes(actAttendeeUserName)) {
            console.log("User data matched!!");

        } else {
            throw new Error("User data missmatched under trigger logs...actual>>" + actAttendeeUserName + "expexted>>" + expAttendeeUserName)
        }
    }
    verifyMissedEmailInTriggerLogs(actAttendeeUserEmail) {
        browser.pause(1000);
        var expAttendeeUserEmail = $("tr:nth-child(3) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        if (expAttendeeUserEmail.replace(",", '').includes(actAttendeeUserEmail)) {
            console.log("User data matched!!");

        } else {
            throw new Error("Missed User email missmatched under trigger logs...actual>>" + actAttendeeUserEmail + "expexted>>" + expAttendeeUserEmail)
        }
    }

    selectNoShowSubTag(noShowSubTag) {
        this.noShowSubTagDropDown.waitForClickable({ timeout: 10000 });
        this.noShowSubTagDropDown.click();
        const option = $("(//option[@label='" + noShowSubTag + "'])[1]");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();

    }

    selectAttendeeSubTag(attendeesSubTag) {
        this.attendeeSubTagDropDown.waitForClickable({ timeout: 10000 });
        this.attendeeSubTagDropDown.click();
        const option = $("(//option[@label='" + attendeesSubTag + "'])[1]");
        option.waitForDisplayed({ timeout: 10000 });
        option.click();

    }
    clickOnHubSpotToggleButton() {
        if (this.hubSpotToggleButton.isDisplayed() === true) {
            this.hubSpotToggleButton.click();
        } else {
            throw new Error("HubSpot toggle button is not displayed");
        }
    }

    clickOnRecordTimelineEventsToggleButton() {
        if (this.hubSpotToggleButton.isDisplayed() === true) {
            this.hubSpotToggleButton.click();
        } else {
            throw new Error("HubSpot toggle button is not displayed");
        }
    }


    clickOnHubspotRegistrantsDropdownList() {
        if (this.hubspotRegistrantsDropdown.isDisplayed() === true) {
            this.hubspotRegistrantsDropdown.click();
        } else {
            throw new Error("Hubspot registrants list dropdown is not displayed");
        }
    }
    verifyMissedJoinLinkInHubspotLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("tbody > tr:nth-child(3) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyAttendeeFormDetailInHubspotLogs(actualDetails) {
        var expDetalis = $("tbody > tr:nth-child(5) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyMissedFormDetailInHubspotLogs(actualDetails) {
        var expDetalis = $("table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyAttendeeEmailInHubspotTriggerLogs(actAttendeeUserName) {
        var expAttendeeUserName = $("(//pre[@class='json-window'])[2]").getText().replace(/["]+/g, '');
        if (expAttendeeUserName.replace(",", '').includes(actAttendeeUserName)) {
            console.log("User data matched!!");

        } else {
            throw new Error("User data missmatched under trigger logs...actual>>" + actAttendeeUserName + "expexted>>" + expAttendeeUserName)
        }
    }
    verifyMissedEmailInHubspotTriggerLogs(actAttendeeUserEmail) {
        browser.pause(1000);
        var expAttendeeUserEmail = $("(//pre[@class='json-window'])[4]").getText().replace(/["]+/g, '');
        if (expAttendeeUserEmail.replace(",", '').includes(actAttendeeUserEmail)) {
            console.log("User data matched!!");

        } else {
            throw new Error("Missed User email missmatched under trigger logs...actual>>" + actAttendeeUserEmail + "expexted>>" + expAttendeeUserEmail)
        }
    }

    verifyAweberMissedJoinLinkInLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("(//pre[@class='json-window'])[5]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyAweberAttendeeJoinLinkInLogs(actualLink) {
        var expDetalis1 = $("tr:nth-child(3) > td:nth-child(4) > pre").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");

        if (expDetalis.includes(actualLink)) {
            console.log("Attendee User details matched!!");

        } else {
            throw new Error("Attendee User join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }

    validateAweberSuccessLogUnderAllTriggerLogs(successLog) {
        var actFirstTriggerLog = $("(//pre[@class='json-window'])[2]").getText();
        var actSecondTriggerLog = $("(//pre[@class='json-window'])[4]").getText();
        var actThirdTriggerLog = $("tr:nth-child(3) > td:nth-child(4) > pre").getText();
        var actFourthTriggerLog = $("(//pre[@class='json-window'])[7]").getText();
        if (actFirstTriggerLog.includes(successLog) && actSecondTriggerLog.includes(successLog) && actThirdTriggerLog.includes(successLog) && actFourthTriggerLog.includes(successLog)) {
            console.log("Success log successfully displaying under all trigger logs");
        } else {
            throw new Error("Success log is missing in any one of log , first log>>" + actFirstTriggerLog + "Second trigger log>>" + actSecondTriggerLog + "Third trigger log>>" + actThirdTriggerLog + "Fourth trigger log>>" + actFourthTriggerLog);
        }
    }


    verifyAttendeeFormDetailInGetresponseLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyMissedFormDetailInGetresponseLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }

    verifyGetresponseMissedJoinLinkInLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyGetresponseAttendeeJoinLinkInLogs(actualLink) {
        var expDetalis1 = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");

        if (expDetalis.includes(actualLink)) {
            console.log("Attendee User details matched!!");

        } else {
            throw new Error("Attendee User join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }

    clickOnSelectGroupDropdown() {
        this.selectGroupDropdown.waitForDisplayed({ timeout: 10000 });
        this.selectGroupDropdown.click();
    }

    clickOnSelectGroupInterestDropdown() {
        this.selectGroupInterestDropdown.waitForClickable({ timeout: 10000 });
        this.selectGroupInterestDropdown.click();
    }

    clickOnChooseItemFromListForAttendee() {
        this.chooseItemFromListAttendeeDropdown.waitForClickable({ timeout: 10000 });
        this.chooseItemFromListAttendeeDropdown.click();
    }

    clickOnSecondChooseItemAttendeeDropdown() {
        this.chooseItemFromListSecondAttendeeDropdown.waitForClickable({ timeout: 10000 });
        this.chooseItemFromListSecondAttendeeDropdown.click();
    }

    clickOnSelectGroupInterestAttendeeDropdown() {
        this.selectGroupInterestAttendeeDropdown.waitForClickable({ timeout: 10000 });
        this.selectGroupInterestAttendeeDropdown.click();

    }

    clickOnSelectGroupInterestNoShowDropdown() {
        this.selectGroupInterestNoShowDropdown.waitForClickable({ timeout: 10000 });
        this.selectGroupInterestNoShowDropdown.click();

    }
    clickOnChooseItemNoShowDropdown() {
        this.chooseItemFromListNoShowDropdown.waitForClickable({ timeout: 10000 });
        this.chooseItemFromListNoShowDropdown.click();
    }

    clickOnChooseItemNoShowSecondDropdown() {
        this.chooseItemFromListSecondNoShowDropdown.waitForClickable({ timeout: 10000 });
        this.chooseItemFromListSecondNoShowDropdown.click();
    }

    verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyMissedFormDetailInMailchimpStaticSegmentLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }

    verifyMauilchimpStaticSegmentMissedJoinLinkInLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyMailChimpStaticSegmentAttendeeJoinLinkInLogs(actualLink) {
        var expDetalis1 = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");

        if (expDetalis.includes(actualLink)) {
            console.log("Attendee User details matched!!");

        } else {
            throw new Error("Attendee User join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    fillNoShowTagNameField(tagName) {
        this.noShowTagNameField.setValue(tagName);
    }

    clickOnAttendeeTagDropdown() {
        this.attendeeTagDropDown.waitForClickable({ timeout: 10000 });
        this.attendeeTagDropDown.click();
    }

    clickOnNoShowTagsDropdown() {
        this.noShowTagDropDown.waitForClickable({ timeout: 10000 });
        this.noShowTagDropDown.click();
    }

    validateSuccessLogUnderAllDripTriggerLogs(successLog) {
        var actFirstTriggerLog = $("(//pre[@class='json-window'])[2]").getText();
        var actSecondTriggerLog = $("(//pre[@class='json-window'])[4]").getText();
        var actFourthTriggerLog = $("tr:nth-child(3) > td:nth-child(4) > pre").getText();
        var actFifthTriggerLog = $("tr:nth-child(5) > td:nth-child(4) > pre").getText();
        var actSixthTriggerLog = $("(//pre[@class='json-window'])[11]").getText();
        if (actFirstTriggerLog.includes(successLog) && actSecondTriggerLog.includes(successLog) && actThirdTriggerLog.includes(successLog) && actFourthTriggerLog.includes(successLog) && actFifthTriggerLog.includes(successLog) && actSixthTriggerLog.includes(successLog)) {
            console.log("Success log successfully displaying under all trigger logs");
        } else {
            throw new Error("Success log is missing in any one of log , first log>>" + actFirstTriggerLog + "Second trigger log>>" + actSecondTriggerLog + "Third trigger log>>" + actThirdTriggerLog + "Fourth trigger log>>" + actFourthTriggerLog + "Fifth trigger log>>" + actFifthTriggerLog + "Sixth trigger log>>" + actSixthTriggerLog);
        }
    }
    verifyDripAttendeeJoinLinkInLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Attendee user details matched!!");

        } else {
            throw new Error("Attendee user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }


    verifyAttendeeFormDetailsInDripLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyMissedFormDetailInDripLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[5]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("Misser user details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    validateSuccessLogsForDripStartWorkflow(successLog) {
        var actFirstTriggerLog = $("(//pre[@class='json-window'])[2]").getText();
        var actSecondTriggerLog = $("(//pre[@class='json-window'])[4]").getText();
        var actFourthTriggerLog = $("(//pre[@class='json-window'])[5]").getText();
        var actFifthTriggerLog = $("(//pre[@class='json-window'])[7]").getText();
        if (actFirstTriggerLog.includes(successLog) && actSecondTriggerLog.includes(successLog) && actFourthTriggerLog.includes(successLog) && actFifthTriggerLog.includes(successLog)) {
            console.log("Success log successfully displaying under all trigger logs");
        } else {
            throw new Error("Success log is missing in any one of log , first log>>" + actFirstTriggerLog + "Second trigger log>>" + actSecondTriggerLog + "Fourth trigger log>>" + actFourthTriggerLog + "Fifth trigger log>>" + actFifthTriggerLog);
        }
    }

    verifyDripMissedJoinLinkInLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("(//pre[@class='json-window'])[5]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
        if (expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    clickOnEventMarketoListDropdown(){
        this.eventMarketoListDropdown.waitForClickable({timeout:10000});
        this.eventMarketoListDropdown.click();
    }
   
    clickOnChooseListSalesForceDropdown(){
        browser.pause(1000);
        this.chooseListSalesForceDropdown.waitForDisplayed({timeout:10000});
        this.chooseListSalesForceDropdown.click();
    }
    verifyMissedJoinLinkInMarketoLogs(actualLink) {
        browser.pause(1000);
        var expDetalis1 = $("((//table[@class='table table-bordered'])[2]//tr[1]//td[3])[1]").getText().replace(/["]+/g, '');
        var expDetalis2 = expDetalis1.replace(/\//g, "");
        var expDetalis3 = expDetalis2.replace(/,/g, "");
        var expDetalis = expDetalis3.replace(/\\/g, "/");
    
        if ("https://event.demio.com/join/"+expDetalis.replace(",", '').includes(actualLink)) {
            console.log("Missed user details matched!!");
    
        } else {
            throw new Error("Missed user join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetalis)
        }
    }
    verifyAttendeeJoinLinkInMarketoLogs(actualLink) {
        var expDetail = $("(//table[@class='table table-bordered'])//tr[5]//td[3]").getText().replace(/["]+/g, '');
        var expDetail2 = expDetail.replace(/\//g, "");
        var expDetail3 = expDetail2.replace(/,/g, "");
        var expDetail1 = expDetail3.replace(/\\/g, "/");
        if ("https://event.demio.com/join/"+expDetail1.includes(actualLink)) {
            console.log("Attendee User details matched!!");
    
        } else {
            throw new Error("Attendee User join link missmatched in details...actual>>" + actualLink + "expexted>>" + expDetail1)
        }
    }
    
    
    validateSuccessLogUnderAllMarketoTriggerLogs(successLog) {
        var actThirdTriggerLog = $("(//pre[@class='json-window'])[5]").getText();
        var actFourthTriggerLog = $("tr:nth-child(3) > td:nth-child(4) > pre").getText();
        var actFifthTriggerLog = $("tr:nth-child(5) > td:nth-child(4) > pre").getText();
        var actSixthTriggerLog = $("(//pre[@class='json-window'])[11]").getText();
        if (actThirdTriggerLog.includes(successLog) && actFourthTriggerLog.includes(successLog) && actFifthTriggerLog.includes(successLog) && actSixthTriggerLog.includes(successLog)) {
            console.log("Success log successfully displaying under all trigger logs");
        } else {
            throw new Error("Success log is missing in any one of log ,Third trigger log>>" + actThirdTriggerLog + "Fourth trigger log>>" + actFourthTriggerLog + "Fifth trigger log>>" + actFifthTriggerLog + "Sixth trigger log>>" + actSixthTriggerLog);
        }
    }
    verifyAttendeeFormDetailInConvertKitLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[11]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }

    verifyMissedUserFormDetailInConvertKitLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[7]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails)) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    clickOnSalesforcePardotToggleButton() {
        if (this.salesforcePardotToggleButton.isDisplayed() === true) {
            this.salesforcePardotToggleButton.click();
        } else {
            throw new Error("salesforcePardot toggle button is not displayed");
        }
    }
    verifyMissedUserPhoneDetailInLogs(actualDetails) {
        $("(//pre[@class='json-window'])[4]").waitForDisplayed({timeout:10000});
        var expDetalis = $("(//pre[@class='json-window'])[4]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails.replace("+",''))) {
            console.log("Missed user details matched!!");

        } else {
            throw new Error("Missed user details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
    verifyAttendeePhoneDetailInLogs(actualDetails) {
        var expDetalis = $("(//pre[@class='json-window'])[2]").getText().replace(/["]+/g, '');
        if (expDetalis.replace(",", '').includes(actualDetails.replace("+",''))) {
            console.log("User details matched!!");

        } else {
            throw new Error("User details missmatched...actual>>" + actualDetails + "expexted>>" + expDetalis)
        }
    }
}

export default new integrationsPage();
