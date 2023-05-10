import Base from "../testBase";
class settingsPage extends Base {
    /*-------------------------POM---------------------------*/

    get profileTab() {
        return $("li:nth-of-type(1) > a");
    }

    get generalTab() {
        return $("li:nth-of-type(2) > a");
    }

    get brandingTab() {
        return $("li:nth-of-type(3) > a");
    }

    get billingTab() {
        return $("li:nth-of-type(4) > a");
    }

    get apiTab() {
        return $("li:nth-of-type(5) > a");
    }

    get IntegrationsTab() {
        return $("li:nth-of-type(6) > a");
    }

    get teamTab() {
        return $("li:nth-of-type(7) > a");
    }

    get emailSettingsTab() {
        return $("li:nth-of-type(8) > a");
    }

    get userProfileHeader() {
        return $('//*[@id="settings"]/div[3]/h2');
    }

    get generalHeader() {
        return $('//*[@id="settings"]/div[3]/h2');
    }

    get brandingHeader() {
        return $('//*[@id="settings-branding"]/div/div[1]/div[1]/div[1]');
    }

    get billingHeader() {
        return $('//*[@id="settings"]/div[4]/h2');
    }

    get apiheader() {
        return $('//*[@id="settings"]/div[3]/h2');
    }

    get IntegrationsHeader() {
        return $('//*[@id="settings"]/div[3]/h2');
    }

    get teamHeader() {
        return $('//div[@class="manage-team-title"]');
    }

    get emailSettingsHeader() {
        return $('//*[@id="settings"]/div[3]/h2');
    }
    //-----------------------ACTION METHODS------------------//


    profileTabIsDisplayed() {
        this.profileTab.waitForDisplayed({ timeout: 7000 });
        return this.profileTab.isDisplayed();

    }

    clickOnProfileTab() {
        this.profileTab.waitForClickable({ timeout: 8000 });
        this.profileTab.click();
        browser.pause(4000);
    }

    openProfileTab() {
        browser.url('https://my.staging.demio.com/manage/settings/profile');// STAGING
        // browser.url('https://my.demio.com/manage/settings/profile'); //Live

        browser.pause(2000);
    }

    checkProfileTabIsSelected() {
        this.profileTab.waitForDisplayed({ timeout: 7000 });
        if (this.profileTab.getAttribute('class') === 'active') {
            console.log('PROFILE tab is selected');
        }
        else {
            throw new Error('PROFILE Tab is not selected')
        }
    }

    checkProfileHeaderIsDisplayed() {
        this.userProfileHeader.waitForDisplayed({ timeout: 7000 });
        return this.userProfileHeader.isDisplayed();
    }

    generalTabIsDisplayed() {

        this.generalTab.waitForDisplayed({ timeout: 10000 });
        return this.generalTab.isDisplayed();
    }

    clickOnGeneralTab() {
        this.generalTab.waitForClickable({ timeout: 8000 });
        this.generalTab.click();
        browser.pause(3000);

    }

    checkGeneralTabIsSelected() {
        this.generalTab.waitForDisplayed({ timeout: 7000 });
        if (this.generalTab.getAttribute('class') === 'active') {
            console.log('GENERAL tab is selected');
        }
        else {
            throw new Error('GENERAL Tab is not selected')
        }

    }


    checkGeneralHeaderIsDisplayed() {
        this.generalHeader.waitForDisplayed({ timeout: 7000 });
        return this.generalHeader.isDisplayed();
    }

    brandingTabIsDisplayed() {
        this.brandingTab.waitForDisplayed({ timeout: 7000 });
        return this.brandingTab.isDisplayed();

    }


    clickOnBrandingTab() {
        this.brandingTab.waitForClickable({ timeout: 10000 });
        this.brandingTab.click();
        browser.pause(2000);


    }

    checkBrandingTabIsSelected() {
        this.brandingTab.waitForDisplayed({ timeout: 7000 });
        if (this.brandingTab.getAttribute('class') === 'active') {
            console.log('BRANDING tab is selected');
        }
        else {
            throw new Error('BRANDING Tab is not selected')
        }
    }

    checkBrandingHeaderIsDisplayed() {
        this.brandingHeader.waitForDisplayed({ timeout: 7000 });
        return this.brandingHeader.isDisplayed();
    }

    billingTabIsDisplayed() {
        this.billingTab.waitForDisplayed({ timeout: 7000 });
        return this.billingTab.isDisplayed();

    }

    clickOnBillingTab() {
        this.billingTab.waitForClickable({ timeout: 8000 });
        this.billingTab.click();
        browser.pause(3000);

    }

    checkBillingTabIsSelected() {
        this.billingTab.waitForClickable({ timeout: 8000 });
        if (this.billingTab.getAttribute('class') === 'active') {
            console.log('BILLING tab is selected');
        }
        else {
            throw new Error('BILLING Tab is not selected')
        }
    }

    checkbillingHeaderIsDisplayed() {
        this.billingHeader.waitForDisplayed({ timeout: 7000 });
        return this.billingHeader.isDisplayed();
    }

    apiTabIsDisplayed() {
        this.apiTab.waitForDisplayed({ timeout: 7000 });
        return this.apiTab.isDisplayed();

    }

    clickOnApiTab() {
        this.apiTab.waitForClickable({ timeout: 8000 });
        this.apiTab.click();
        browser.pause(2000);
    }

    checkApiTabIsSelected() {
        this.apiTab.waitForDisplayed({ timeout: 7000 });
        if (this.apiTab.getAttribute('class') === 'active') {
            console.log('API tab is selected');
        }
        else {
            throw new Error('API Tab is not selected')
        }
    }

    checkApiHeaderIsDisplayed() {
        this.apiheader.waitForDisplayed({ timeout: 7000 });
        return this.apiheader.isDisplayed();
    }

    integrationsTabIsDisplayed() {
        this.IntegrationsTab.waitForDisplayed({ timeout: 7000 });
        return this.IntegrationsTab.isDisplayed();
    }

    clickOnIntegrationTab() {
        this.IntegrationsTab.waitForClickable({ timeout: 8000 });
        this.IntegrationsTab.click();
        browser.pause(1000);
    }

    checkIntegartionsTabIsSelected() {
        this.IntegrationsTab.waitForDisplayed({ timeout: 7000 });
        if (this.IntegrationsTab.getAttribute('class') === 'active') {
            console.log('INTEGARATIONS tab is selected');
        }
        else {
            throw new Error('INTEGARATIONS Tab is not selected')
        }
    }

    checkIntegrationsHeaderIsDisplayed() {
        this.IntegrationsHeader.waitForDisplayed({ timeout: 7000 });
        return this.IntegrationsHeader.isDisplayed();
    }
    teamTabIsDisplayed() {
        this.teamTab.waitForDisplayed({ timeout: 7000 });
        return this.teamTab.isDisplayed();
    }

    clickOnTeamTab() {
        this.teamTab.waitForClickable({ timeout: 10000 });
        this.teamTab.click();
        browser.pause(3000);
    }

    checkTeamTabIsSelected() {
        this.teamTab.waitForDisplayed({ timeout: 7000 });
        if (this.teamTab.getAttribute('class') === 'active') {
            console.log('TEAM tab is selected');
        }
        else {
            throw new Error('TEAM Tab is not selected')
        }
    }

    checkTeamHeaderIsDisplayed() {
        this.teamHeader.waitForDisplayed({ timeout: 7000 });
        return this.teamHeader.isDisplayed();
    }


    emailSettingsTabIsDisplayed() {
        this.emailSettingsTab.waitForDisplayed({ timeout: 7000 });
        return this.emailSettingsTab.isDisplayed();

    }

    clickOnemailSettingsTab() {
        this.emailSettingsTab.waitForClickable({ timeout: 8000 });
        this.emailSettingsTab.click();
        browser.pause(2000);
    }


    checkEmailSettingsTabIsSelected() {
        this.emailSettingsTab.waitForDisplayed({ timeout: 7000 });
        if (this.emailSettingsTab.getAttribute('class') === 'active') {
            console.log('EMAIL SETTINGS tab is selected');
        }
        else {
            throw new Error('EMAIL SETTINGS Tab is not selected');
        }
    }

    checkEmailSettingHeaderIsDisplayed() {
        this.emailSettingsHeader.waitForDisplayed({ timeout: 7000 });
        return this.emailSettingsHeader.isDisplayed();
    }

}

export default new settingsPage();
