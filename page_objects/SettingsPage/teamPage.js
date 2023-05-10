import Base from "../testBase";



class teamPage extends Base {
    /*-------------------------POM---------------------------*/
    get manageTeamSection() { return $('#settings > div.section > h2') }
    get teamMember() { return $('(//*[@class="contact-info"]/h3)[1]') }
    get teamMemberEmail() { return $('(//*[@class="contact-info"]/p)[1]') }
    get teamLength() { return $('//*[@class="tab-title text-uppercase"]') }
    get addNewTeamButton() { return $('.btn.button.dm.pull-right.success') }
    get removeTeamButton() { return $('.button.danger.default.dm') }
    get dismissPopUpButton() { return $('#addNewUser > div > form > div.modal-header > button') }
    get addNewTeamPopUpHeader() { return $('//div[@class="ant-modal invite-team-user-modal"]') }
    get addMemberEmailInputField() { return $('//input[@id="email"]') }
    get addTeamMemberButton() { return $('(//*[@id="addNewUser"]//button)[2]') }
    get validationMessage() { return $('.toast-message') }
    get deleteUserPopUpScreen() { return $('div#demio-alert-modal .modal-header') }
    get deleteUserButton() { return $('.btn.btn-green.btn-lg.confirm') }
    get addTeamMemberButton() { return $('//button[@class="ant-btn Button animated fadeIn --icon-left ant-btn-primary"]') }
    get sessionOptionsDropDown() { return $('(//div[@class="session-options"]//button)[1]') }
    get searchField() { return $('//input[@class="ant-input"]') }
    get hostAbilityOption() { return $('//input[@class="ant-checkbox-input"]') }
    get sendInviteButton() { return $('//button[@class="ant-btn Button animated fadeIn ant-btn-primary"]') }
    get inviteSentValidationMessage() { return $('//div[@class="ant-notification-notice-message"]') }
    get editUserOption() { return $('//li[@class="ant-dropdown-menu-item edit-option"]') }
    get removeUserOption() { return $('//li[@class="ant-dropdown-menu-item cancel-option"]') }
    get yesRemoveButton() { return $('//button[@class="ant-btn Button animated fadeIn --red ant-btn-primary"]') }
    get updateButton() { return $('//button[@class="ant-btn Button animated fadeIn ant-btn-primary"]') }
    get teamMemberDropdown() { return $('//div[@class="team-modal-container"]//div[@class="ant-select-selection__rendered"]') }
    get addedTeamMemberRoleDropdown() { return $('(//div[@class="ant-select-selection-selected-value"])[1]') }
    get deleteUserButton() { return $('(//button[@class="delete-user-button"])[1]') }
    get enabledCheckboxOfMember() { return $('(//span[@class="ant-checkbox ant-checkbox-checked"])[2]') }

    
   
    //-----------------------ACTION METHODS------------------//




    clickOnDeleteUserButton() {

        this.deleteUserButton.waitForClickable({ timeout: 6000 })
        this.deleteUserButton.click();
    }

    deleteUserButtonIsDisplayed() {

        this.deleteUserButton.waitForDisplayed({ timeout: 6000 })
        return this.deleteUserButton.isDisplayed();
    }




    deleteUserPopUpScreenIsDisplayed() {
        this.deleteUserPopUpScreen.waitForDisplayed({ timeout: 7000 })
        return this.deleteUserPopUpScreen.isDisplayed();
    }



    validateaddedEmail(email) {
        browser.pause(1000)

        var elemList = $$('//*[@class="contact-info"]');
        var len = elemList.length
        console.log("LENGHTQWERT:  " + len)

        var matched = []; // the array to store matched questions..



        if (len > 1) {

            console.log('_________________ADDED MEMBER LIST_________________________')
            for (var i = 2; i <= len; i++) {

                var elem = $('(//*[@class="contact-info"]/p)[' + len + ']');
                var addedMemberEmail = elem.getText();
                browser.pause(100);

                console.log("ADDED EMAIL:  " + addedMemberEmail)
                matched.push(addedMemberEmail);
            }
        }

        var value = email.toString().replace(" ", "");
        var addedUser = value,
            filtered = matched.filter(function (str) { return str.includes(addedUser); }); // filtring the added email code from the list
        if (filtered.includes(email)) {
            console.log('Email is displayed of added user')
        } else {
            throw new Error('Email of added user is mismatched  ACTUAL: ' + filtered + " EXPECTED: " + email)
        }
    }

    getValidationMessage() {
        this.validationMessage.waitForDisplayed({ timeout: 20000 })
        return this.validationMessage.getText();
    }
    manageTeamSectionIsDisplayed() {
        this.manageTeamSection.waitForDisplayed({ timeout: 6000 })
        return this.manageTeamSection.isDisplayed();

    }

    getTeamMemberLeangth() {
        this.teamLength.waitForDisplayed({ timeout: 6000 })
        return this.teamLength.getText();
    }

    teamMemberSectionIsDisplayed() {
        this.teamMember.waitForDisplayed({ timeout: 6000 })
        return this.teamMember.isDisplayed();
    }

    teamMemberEmailIsDisplayed() {
        this.teamMemberEmail.waitForDisplayed({ timeout: 6000 })
        return this.teamMemberEmail.isDisplayed();
    }

    getTeamEmailAddress() {
        this.teamMemberEmail.waitForDisplayed({ timeout: 6000 })
        return this.teamMemberEmail.getText()
    }

    addNewTeamButtonIsDisplayed() {
        this.addNewTeamButton.waitForDisplayed({ timeout: 6000 })
        return this.addNewTeamButton.isDisplayed();
    }

    clickOnAddNewTeamMemberButton() {
        this.addNewTeamButton.waitForClickable({ timeout: 6000 })
        this.addNewTeamButton.click();
    }

    addTeamMemberPopupScreenIsDisplayed() {

        this.addNewTeamPopUpHeader.waitForDisplayed({ timeout: 6000 })
        return this.addNewTeamPopUpHeader.isDisplayed();
    }

    dismissPopUpButtonIsDisplayed() {
        this.dismissPopUpButton.waitForDisplayed({ timeout: 6000 })
        return this.dismissPopUpButton.isDisplayed();
    }
    clickOnDismissPopUpButton() {
        this.dismissPopUpButton.waitForClickable({ timeout: 6000 })
        this.dismissPopUpButton.click();
    }

    addMemberEmailInputFieldIsDisplayed() {
        this.addMemberEmailInputField.waitForDisplayed({ timeout: 60000 })
        return this.addMemberEmailInputField.isDisplayed();
    }

    fillEmailInputField(email) {
        this.addMemberEmailInputField.waitForDisplayed({ timeout: 6000 })
        this.addMemberEmailInputField.setValue(email)
    }

    addTeamMemberButtonIsDisplayed() {
        this.addTeamMemberButton.waitForDisplayed({ timeout: 6000 })
        return this.addTeamMemberButton.isDisplayed();
    }

    clickOnAddTeamButton() {
        this.addTeamMemberButton.waitForClickable({ timeout: 6000 })
        this.addTeamMemberButton.click();
    }
    removeTeamButtonIsDisplayed() {

        this.removeTeamButton.waitForDisplayed({ timeout: 6000 })
        return this.removeTeamButton.isDisplayed();
    }

    clickOnRemoveTeamButton() {

        var elemList = $$('//*[@class="contact-info"]');
        browser.pause(1000)
        var len = elemList.length;
        if (len > 1) {
            var deleteUser = $('(//*[@class="dm button default danger"])[' + len + ']')
            deleteUser.click();
        }
    }


    listOfMembersIsDisplayed() {
        const listOfMembers = $("(//tr[@class='ant-table-row ant-table-row-level-0'])[1]");
        listOfMembers.waitForDisplayed({ timeout: 10000 });
        return listOfMembers.isDisplayed();

    }
    addTeamMemberButtonIsDisplayed() {
        this.addTeamMemberButton.waitForClickable({ timeout: 10000 });
        return this.addTeamMemberButton.isDisplayed();
    }

    clickOnAddTeamMemberButton() {
        if (this.addTeamMemberButtonIsDisplayed() === true) {
            this.addTeamMemberButton.click();
        } else {
            throw new Error("Add team member button is not displayed")
        }
    }

    sessionOptionsDropDownIsDisplayed() {
        this.sessionOptionsDropDown.waitForDisplayed({ timeout: 10000 });
        return this.sessionOptionsDropDown.isDisplayed();
    }

    searchFieldIsDisplayed() {
        this.searchField.waitForDisplayed({ timeout: 10000 });
        return this.searchField.isDisplayed();
    }

    selectOrUnselectHostAbilityOption() {
        const elem = $("(//div[@class='host-ability-info']//span)[1]");
        var value = elem.getAttribute("class");
        if (value.includes("ant-checkbox ant-checkbox-checked")) {
            console.log("Check box is selected");
        } else {
            this.hostAbilityOption.click();
        }
    }

    disableHostAbilityCheckBox() {
        const elem = $("(//div[@class='host-ability-info']//span)[1]");
        var value = elem.getAttribute("class");
        if (value.includes("ant-checkbox ant-checkbox-checked")) {
            console.log("Check box is selected ..clicking for disable");
            this.hostAbilityOption.click();
        } else {
            throw new Error("Host ability check box is not Working")
        }
    }


    enableHostAbilityCheckBox() {
        const elem = $("(//div[@class='host-ability-info']//span)[1]");
        var value = elem.getAttribute("class");
        if (value.includes("ant-checkbox ant-checkbox-checked")) {
            console.log("Check box is selected");
        } else {
            this.hostAbilityOption.click();
        }
    }
    sendInviteButtonIsDisplayed() {
        this.sendInviteButton.waitForClickable({ timeout: 10000 });
        return this.sendInviteButton.isDisplayed();
    }

    clickOnSendInviteButton() {
        if (this.sendInviteButtonIsDisplayed() === true) {
            this.sendInviteButton.click();
        } else {
            throw new Error("Send invite button is not displayed")
        }
    }

    inviteSentValidationMessageIsDisplayed() {
        this.inviteSentValidationMessage.waitForDisplayed({ timeout: 10000 });
        return this.inviteSentValidationMessage.isDisplayed();
    }

    validateInvitedMemberDetails(status) {
        browser.pause(5000);
        const memberDetails = $("//div[contains(text(),'" + status + "')]");
        memberDetails.scrollIntoView();
        if (memberDetails.isDisplayed() === true) {
            console.log("Status on name of invited member is matched");
        } else {
            throw new Error("Status in not displaying on invited member details>>" + status);
        }
    }

    searchMemberFromList(email) {
        this.searchField.setValue(email);
        //  browser.keys(['Meta', 'Enter']);
        browser.pause(6000);

    }

    clickOnSessionOptionsDropDown() {
        if (this.sessionOptionsDropDownIsDisplayed() === true) {
            this.sessionOptionsDropDown.click();
        } else {
            throw new Error("Session option drop down is not displayed");
        }
    }

    editUserOptionIsDisplayed() {
        this.editUserOption.waitForClickable({ timeout: 10000 });
        return this.editUserOption.isDisplayed();
    }

    clickOnEditUserOption() {
        if (this.editUserOptionIsDisplayed() === true) {
            this.editUserOption.click();
            browser.pause(3000);
        } else {
            throw new Error("Edit user option is not displayed");
        }
    }

    removeUserOptionIsDisplayed() {
        this.removeUserOption.waitForClickable({ timeout: 10000 });
        return this.removeUserOption.isDisplayed();
    }
    clickOnRemoveUserOption() {
        if (this.removeUserOptionIsDisplayed() === true) {
            this.removeUserOption.click();
            browser.pause(3000);
        } else {
            throw new Error("Remove user option is not displayed");
        }
    }

    yesRemoveButtonIsDisplayed() {
        this.yesRemoveButton.waitForClickable({ timeout: 10000 });
        return this.yesRemoveButton.isDisplayed();
    }
    clickOnYesRemoveButton() {
        if (this.yesRemoveButtonIsDisplayed() === true) {
            this.yesRemoveButton.click();

        } else {
            throw new Error("Yes remove button is not displayed");
        }
    }

    validateSearchedUserDetail(email) {
        browser.pause(8000);
        const emailDetail = $("//div[@class='team-profile-email']");
        var actEmail = emailDetail.getText();
        if (actEmail.includes(email)) {
            console.log("Searched member details matched")
        } else {
            throw new Error("Searched members details missmtched...actual email>>" + actEmail + "Expected email>>" + email);
        }
    }

    updateButtonIsDisplayed() {
        this.updateButton.waitForClickable({ timeout: 10000 });
        return this.updateButton.isDisplayed();
    }
    clickOnUpdateButton() {
        if (this.updateButtonIsDisplayed() === true) {
            this.updateButton.click();
            browser.pause(3000);
        } else {
            throw new Error("Update button is not displayed")
        }
    }

    validateDisabledHostAbility(){
        const disabledIcon=$("(//span[contains(text(),'Disabled')])[1]");
        return disabledIcon.isDisplayed();
    }

    validateEnabledHostAbility(){
        const enabledIcon=$("(//span[contains(text(),'Enabled')])[1]");
        return enabledIcon.isDisplayed();
    }

    selectNewTeamMemberDropdownOption(option){
        if (this.teamMemberDropdown.isDisplayed()===true) {
            this.teamMemberDropdown.click();
            browser.pause(2000);
            const dropdownOption=$("//li[@name='"+option+"']");
            if (dropdownOption.isDisplayed()===true) {
                dropdownOption.click();
            } else {
                throw new Error("Options are not displaying under drop down list");
            }
        } else {
            throw new Error("Dopdown option is not displaying to select new role")
        }
    }

    updateNewTeamMemberDropdownOption(option){
        if (this.addedTeamMemberRoleDropdown.isDisplayed()===true) {
            this.addedTeamMemberRoleDropdown.click();
            browser.pause(2000);
            const dropdownOption=$("//li[@name='"+option+"']");
            if (dropdownOption.isDisplayed()===true) {
                dropdownOption.click();
            } else {
                throw new Error("Options are not displaying under drop down list");
            }
        } else {
            throw new Error("Added team member role Dopdown option is not displaying to select new role")
        }
    }

    deleteUserButtonIsDisplayed(){
        if (this.deleteUserButton.isDisplayed()===true) {
            console.log("Button is displaying successfully");
        } else {
            throw new Error("Delete button is not displaying for new added team member");
        }
    }

    clickOnDeleteUserButton(){
        if (this.deleteUserButton.isDisplayed()===true) {
            this.deleteUserButton.click();
        } else {
            throw new Error("Delete user button is not displaying on screen")
        }
    }

    uncheckEnabledHostAbilityCheckbox(){
        browser.pause(2000);
        if (this.enabledCheckboxOfMember.isDisplayed()===true) {
            this.enabledCheckboxOfMember.click();
        } else {
            console.log("Host ability checkbox is not displaying for added team member");
        }
    }

    checkDisabledHostAbilityCheckbox(){
        browser.pause(1000);
        if (this.enabledCheckboxOfMember.isDisplayed()===true) {
            console.log("Host ability checkbox is already checked")
        } else {
  $("(//input[@class='ant-checkbox-input'])[2]").click();
            browser.pause(1500);
        }
    }
}

export default new teamPage();
