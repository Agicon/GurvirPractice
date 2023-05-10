import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";
import EventPage from "../Events/eventPage";
import MeetingRoomPage from "../MeetingRoom/meetingRoomPage";
import { time } from "console";

class AutomatedPage extends Base {
  /*---------------------POM---------------*/
  get automatedTab() {
    return $('//span[contains(text(),"automated")]');
  }
  get addNewAutomated() {
    return $('//*[@id="event-manage-root"]/div/div[2]/div[3]');

  }

  get eventNameField() {
    return $('//input[@placeholder="Enter a Name"]');
  }

  get uploadMediaField() {
    return $("span[role='button']");
  }

  get roomSettingsOption() {
    return $('.room-block-tabs div:nth-of-type(1) .ant-tabs-tab:nth-of-type(2)');
  }

  get handoutUploadFile() {
    return $('(//span[@role="button"])[2]');
  }

  get onDemandOptionsButton() {
    return $('//div[@class="share-tabs session-list session-list-tabs-desktop"]//button[3]');
  }

  get onDemandSwitch() {
    return $("td:nth-of-type(5)  button[role='switch']")
  }

  get registrationLink() {
    return $(".ant-input.ant-input-lg")
  }

  get registratioNameField() {

    return $("input[name='name']");
  }

  get registrationEmailField() {
    return $("input[name='email']")
  }

  get joinNowButton() {
    return $("form[method='post'] > button[type='submit']");
  }

  get eventIsNotReadyMessage() {
    return $('.white-block-message');
  }

  get joinRoomButton() {
    return $("//div[contains(text(),'JOIN ROOM')]");

  }

  get sessionTime() {
    return $('.header-controls-runtime');
  }


  get registeredCount() { return $('//button[@class="session-table-stat registered"]'); }

  get attendedCount() { return $('//*[@id="event-manage-root"]//button[@class="session-table-stat attended"]'); }

  get messagesCount() { return $('//*[@id="event-manage-root"]//button[@class="session-table-stat messages"]'); }

  get missedCount() { return $('//button[@class="session-table-stat missed"]'); }
  get chatInputField() { return $('.chat-smart-input__input'); }

  get sentButton() { return $('.chat-send-button'); }

  get insightsButton() {
    return $('//a[contains(text(),"insights")]');
  }

  get peopleButton() { return $('div:nth-of-type(4)  .share-tabs > div:nth-of-type(2) > .share-tab-option'); }

  get registerSummary() { return $('.registered.stat'); }

  get attendedSummary() { return $('.css-z8u1pj .stat'); }

  get launchTimeSwitch() { return $('.material-container .ant-switch'); }

  get launchTimeInputField() { return $('.ant-time-picker-panel-input'); }

  get timePickerField() { return $('.ant-time-picker-input'); }

  get handOutDownloadButton() { return $('.chat-handout-button'); }

  get pollQuestionField() { return $('//input[@id="title"]'); }

  get pollOptionOneField() { return $('//div[@id="product-tour-resource-type-poll"]') }

  get pollOptionTwoField() { return $('//input[@placeholder="Enter Option 2"]') }


  get pollChatQuestion() { return $('.chat-poll-header'); }

  get featureTitleField() { return $('//input[@id="title"]'); }

  get featureUrlField() { return $('//input[@id="linkURL"]'); }

  get featureButtonTextField() { return $('//input[@id="buttonText"]'); }

  get featureImageInputField() { return $('//input[@type="file"]'); }

  get featureActionButton() { return $('//div[@data-id="featured-action"]'); }

  get featureActionButtonInRoom() { return $('.featured-action-button') }

  get addedMemberName() {
    return $('.scroll-container > div:nth-of-type(2)');
  }

  get selectRoleDropdown() {
    return $('[class] .Demio-Select-field:nth-of-type(3) [tabindex]');
  }

  get replyButton() {
    return $('.button.dm.primary.reply.xs');
  }
  get sendReplyButton() {
    return $('.modal-footer .primary');
  }


  get filterDropdown() {
    return $('(//div[@class="ant-select-selection__rendered"])[3]');
  }
  get scheduledSessionOption() {
    return $('ul[role="listbox"] > li:nth-of-type(1)');
  }

  get onDemandOption() {
    return $('ul[role="listbox"] > li:nth-of-type(1)');
  }
  get addAResourceButton() {
    return $('.text-btn-container .ant-btn-primary');
  }

  get automationTab() {
    return $('div:nth-of-type(6) > .Box > .Box-header');
  }


  get videoNotice() {
    return $('.demio-info-left');
  }

  get uploadVideoOption() {
    return $('.demio-info-box  a');
  }

  get uploadOptionButton() {
    return $('.ant-dropdown-trigger.demio-upload-options-button > .demio-icon');
  }

  get swapVideoOption() {
    return $('ul[role="menu"] > li:nth-of-type(1)');
  }
  get downloadMediaOption() {
    return $('ul[role="menu"] > li:nth-of-type(2)');
  }

  get noNeverMindButton() {
    return $('.swap-video-modal-bottom .ant-btn-default');
  }

  get swapTheVideoButton() {
    return $('.swap-video-modal-bottom .ant-btn-primary');
  }
  get swapUploadOptionButton() {
    return $('.swap-video-modal-top .demio-upload-info-container .demio-icon');
  }

  get cancelUploadButton() {
    return $('.swap-video-modal-top [role="menuitem"]');
  }

  get selectDifferentVideoOption() {
    return $('//li[contains(text(),"Select a Different Video")]');
  }



  get inlineEmbedStyleButton() {
    return $('(//div[@class="ant-select-selection__rendered"])[3]');
  }

  get previewRegistrationForm() {
    return $('//form[@class="demio-embed-form "]');
  }

  get popoverEmbedStyleButton() {
    return $('(//div[@class="ant-select-selection__rendered"])[3]');
  }

  get selectRoleGuestDropDown() {
    return $('//div[contains(text(),"Role")]');
  }

  get pollOptionField() { return $('div.demio-tags-input div.Demio-Input-field div.Demio-Input-container > input:nth-child(1)') }
  get handoutsOption() { return $('//button[contains(text(),"handouts")]|//div[contains(text(),"handouts")]') }

  get moderatorSessionDropDown() {
    return $('(//div[@class="admin-action"])[2]//button');
  }

  get nameField() {
    return $('input[name="name"]');
  }

  get featuredTitleField() {
    return $('(//div[@class="chat-resource-create-input"]//input)[1]');
  }

  get linkUrlField() {
    return $('(//div[@class="chat-resource-create-input"]//input)[2]');
  }

  get buttonTextField() {
    return $('(//div[@class="chat-resource-create-input"]//input)[3]');
  }

  get featuredActionTitleButton() {
    return $('(//div[@class="featured-action-button"])[1]');
  }
  
  get pastSessionsOption() {
    return $('//span[contains(text(),"1 Past Session")]|//span[contains(text(),"2 Past Sessions")]');
  }

  get presenterNameField() {
    return $('(//input[@id="name"])[1]');
  }

  get presenterTitleField() {
    return $('//input[@id="title"]');
  }

  get presenterWebsiteField() {
    return $('(//div[@class="ant-modal-body"])[2]//input[@id="website"]');
  }

  get presenterBioField() {
    return $('//textarea[@id="description"]');
  }

  get upcomingSessionDropdown() {
    return $('//div[@class="chosen input "]');
  }
  
  //-----------------------ACTION METHODS--------------//

  addPresenterNameField(presenterName) {
    this.presenterNameField.waitForDisplayed({ timeout: 50000 });
    this.presenterNameField.setValue(presenterName);
    browser.pause(200);
  }
  

  addPresenterTitleField(presenterTitle) {
    this.presenterTitleField.setValue(presenterTitle);
  }

  addPresenterWebsiteField(presenterWebsite) {
    browser.pause(500);
    this.presenterWebsiteField.setValue(presenterWebsite);
    browser.pause(200);
  }

  addPresenterBioField(presenterBio) {
    this.presenterBioField.setValue(presenterBio);
  }

  featureActionButtonInRoomIsDisplayed() {

    this.featureActionButtonInRoom.waitForDisplayed({ timeout: 30000 });
    return this.featureActionButtonInRoom.isDisplayed();
  }

  featureButtonTextFieldIsDisplayed() {
    this.featureButtonTextField.scrollIntoView();
    this.featureButtonTextField.waitForDisplayed({ time: 6000 });
    return this.featureButtonTextField.isDisplayed();
  }

  fillFeatureButtonTextField(featureTextButton) {
    if (this.featureButtonTextFieldIsDisplayed() === true) {
      this.featureButtonTextField.setValue(featureTextButton)
    } else {
      throw new Error('Somethings went worng feature Text field ');
    }
  }


  featureActionButtonIsDisplayed() {

    this.featureActionButton.waitForDisplayed({ timeout: 6000 });
    return this.featureActionButton.isDisplayed();
  }

  selectFeatureAction() {
    if (this.featureActionButtonIsDisplayed() === true) {
      this.featureActionButton.click();
    } else {
      throw new Error('Feature Action button is not displayed')
    }
  }

  uploadFeatureImage(image) {
    const element = $('//input[@type="file"]');
    browser.pause(1000);
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    browser.pause(10000);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $('//input[@type="file"]').setValue(remoteFilePath);

  }

  featureUrlFieldIsDispayed() {
    this.featureUrlField.waitForDisplayed({ timeout: 6000 });
    return this.featureUrlField.isDisplayed();
  }

  fillFeatureUrlField(featureUrl) {
    if (this.featureUrlFieldIsDispayed() === true) {
      this.featureUrlField.setValue(featureUrl);

    } else {
      throw new Error('Something went worng with feature url field ');
    }
  }

  featureTitleFieldIsDisplayed() {

    this.featureTitleField.waitForDisplayed({ timeout: 6000 });
    return this.featureTitleField.isDisplayed();
  }

  fillFeatureTitleField(featureTitle) {
    if (this.featureTitleFieldIsDisplayed() === true) {
      this.featureTitleField.setValue(featureTitle)

    } else {
      throw new Error('Something went worng with Feature title field')
    }
  }

  createFeatureUrlWithLaunchTime(featureTitle, featureUrl, buttonText, image, launchTime) {
    EventPage.clickOnCustomizeTab();
    EventPage.clickOnRoomTab();
    EventPage.clickOnAddAResourceButton();
    EventPage.clickOnTypeOfResourceDropDown();
    this.selectFeatureAction();
    this.fillFeatureTitleField(featureTitle);
    this.fillFeatureUrlField(featureUrl);
    this.uploadFileData(image);
    this.fillFeatureButtonTextField(buttonText);
    this.clickOnLaunchTimeSwitch();
    this.addLaunchTime(launchTime);
    browser.pause(2000)
    EventPage.clickOnAddResourceButton();
    this.validateAddedActionFeature(featureTitle);

  }

  createFeatureUrlForOnDemandWithLaunchTime(featureTitle, featureUrl, buttonText, image, launchTime) {
    // EventPage.clickOnCustomizeTab();
    // EventPage.clickOnRoomTab();
    EventPage.clickOnAddAResourceButton();
    EventPage.clickOnTypeOfResourceDropDown();
    this.selectFeatureAction();
    this.fillFeatureTitleField(featureTitle);
    this.fillFeatureUrlField(featureUrl);
    this.uploadFileData(image);
    this.fillFeatureButtonTextField(buttonText);
    this.clickOnLaunchTimeSwitch();
    browser.pause(2000)
    this.addLaunchTime(launchTime);
    browser.pause(2000)
    EventPage.clickOnAddResourceButton();
    // this.validateAddedActionFeature(featureTitle);

  }

  pollChatQuestionIsDisplayed() {
    this.pollChatQuestion.waitForDisplayed({ timeout: 40000 });
    return this.pollChatQuestion.isDisplayed();
  }

  pollQuestionFieldIsDisplayed() {

    this.pollQuestionField.waitForDisplayed({ timeout: 6000 });
    return this.pollQuestionField.isDisplayed();
  }

  fillPollQuestionField(pollQuestion) {

    if (this.pollQuestionFieldIsDisplayed() === true) {
      this.pollQuestionField.setValue(pollQuestion)
    } else {
      throw new Error('Something went worng with poll qestion  field');
    }
  }

  pollOptionOneFieldIsDisplayed() {
    this.pollOptionOneField.waitForDisplayed({ timeout: 6000 });
    return this.pollOptionOneField.isDisplayed();
  }

  fillPollOptionsOneFiled(optionOne) {
    if (this.pollOptionOneFieldIsDisplayed() === true) {

      this.pollOptionOneField.setValue(optionOne)
    } else {
      throw new Error('Something went worng with "Poll Options 1 Field"')
    }
  }

  pollOptionTwoFieldIsDisplayed() {
    this.pollOptionTwoField.waitForDisplayed({ timeout: 6000 });
    return this.pollOptionTwoField.isDisplayed();
  }

  fillPollOptionTwoField(optionTwo) {
    if (this.pollOptionTwoFieldIsDisplayed() === true) {

      this.pollOptionTwoField.setValue(optionTwo)
    } else {
      throw new Error('Something went worng with Option 2 field');
    }

  }
  fillPollOptionsField(optionOne) {
    if (this.pollOptionFieldIsDisplayed() === true) {

      this.pollOptionField.setValue(optionOne);
      browser.keys(['Meta', 'Enter']);
    } else {
      throw new Error('Something went worng with "Poll Options 1 Field"')
    }
  }

  pollOptionFieldIsDisplayed() {
    this.pollOptionField.waitForDisplayed({ timeout: 6000 });
    return this.pollOptionField.isDisplayed();
  }
  createPollWithLaunchTime(pollQuestion, optionOne, optionTwo, launchTime) {
    EventPage.clickOnCustomizeTab();
    EventPage.clickOnRoomTab();
    EventPage.clickOnAddAResourceButton();
    EventPage.clickOnTypeOfResourceDropDown();
    EventPage.selectPollOption();
    this.fillPollQuestionField(pollQuestion);
    this.fillPollOptionsField(optionOne);
    this.fillPollOptionsField(optionTwo);
    this.clickOnLaunchTimeSwitch();
    this.addLaunchTime(launchTime);
    EventPage.clickOnAddResourceButton();
    this.validateAddedPollTitle(pollQuestion);

  }

  createPollForOnDemandWithLaunchTime(pollQuestion, optionOne, optionTwo, launchTime) {
    // EventPage.clickOnCustomizeTab();
    // EventPage.clickOnRoomTab();
    EventPage.clickOnAddAResourceButton();
    EventPage.clickOnTypeOfResourceDropDown();
    EventPage.selectPollOption();
    this.fillPollQuestionField(pollQuestion);
    this.fillPollOptionsField(optionOne);
    this.fillPollOptionsField(optionTwo);
    $("//input[@class='ant-checkbox-input']").click();
    this.clickOnLaunchTimeSwitch();
    this.addLaunchTime(launchTime);
    EventPage.clickOnAddResourceButton();
    // this.validateAddedPollTitle(pollQuestion);

  }



  validateAddedPollTitle(title) {
    var actTitle = $('//div[@class="ant-row-flex ant-row-flex-middle resource-list-item"]//div[@class="row-title"]').getText();
    if (actTitle.includes(title)) {
      console.log("Poll title is matched");
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + title);
      throw new Error("Added Poll title missmatched");
    }
  }
  validateAddedActionFeature(title) {

    var actTitle = $('.ant-row-flex.ant-row-flex-middle.resource-list-item > .row-info > .row-title').getText();
    browser.pause(2000);
    if (actTitle.includes(title)) {
      console.log("Poll title is matched");
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + title);
      throw new Error("Added Poll title missmatched");
    }
  }




  handOutDownloadButtonIsDisplayed() {
    this.handOutDownloadButton.waitForDisplayed({ timeout: 30000 });
    return this.handOutDownloadButton.isDisplayed();
  }

  timePickerFieldIsDisplayed() {
    this.timePickerField.waitForDisplayed({ timeout: 6000 });
    return this.timePickerField.isDisplayed();
  }

  clickOnTimePickerField() {
    if (this.timePickerFieldIsDisplayed() === true) {
      this.timePickerField.click();
    } else {
      throw new Error('Somthing went worng with Time picker field');
    }
  }

  uploadFiles(image) {
    const element = $('(//span[@role="button"])[2]//input');
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $('(//span[@role="button"])[2]//input').scrollIntoView();
    $('(//span[@role="button"])[2]//input').setValue(remoteFilePath);
    browser.pause(8000);

  }

  createHandOutWithLaunchTime(handoutTitle, image, launchTime) {
      EventPage.clickOnCustomizeTab();
    EventPage.clickOnRoomTab();
    EventPage.clickOnAddAResourceButton();
    EventPage.clickOnTypeOfResourceDropDown();
    EventPage.selectHandoutOption();
    EventPage.addHandoutTitleData(handoutTitle);
    this.uploadFileData(image);
    browser.pause(5000);
    this.clickOnLaunchTimeSwitch();
    this.addLaunchTime(launchTime);
    EventPage.clickOnAddResourceButton();
    EventPage.validateAddedHoandoutTitle(handoutTitle);
  }

  addLaunchTime(launchTime) {
    this.clickOnTimePickerField();
    browser.pause(2000)
    this.fillLaunchTimeInputField(launchTime);
    browser.pause(2000)

  }

  launchTimeInputFieldIsDisplayed() {
    this.launchTimeInputField.waitForDisplayed({ timeout: 6000 });
    return this.launchTimeInputField.isDisplayed();
  }

  fillLaunchTimeInputField(time) {
    if (this.launchTimeInputFieldIsDisplayed() === true) {
      const input = $('.ant-time-picker-panel-input');
      input.addValue(time); $('.ant-time-picker-panel-input').waitForEnabled(3000);
      //input.addValue(time);
      input.click();
      // this.launchTimeInputField.setValue(time)
      // browser.pause(3000);
      // this.launchTimeInputField.click();

    } else {
      throw new ('Something went worng with launch time input field');
    }
  }

  launchTimeSwitchIsDisplayed() {
    this.launchTimeSwitch.scrollIntoView();
    this.launchTimeSwitch.waitForDisplayed({ timeout: 6000 });
    return this.launchTimeSwitch.isDisplayed();

  }

  clickOnLaunchTimeSwitch() {
    if (this.launchTimeSwitchIsDisplayed() === true) {
      this.launchTimeSwitch.click();
    } else {
      throw new Error('Something went worng with launch switch time');
    }

  }

  registerSummaryIsDisplayed() {
    this.registerSummary.waitForDisplayed({ timeout: 6000 });
    return this.registerSummary.isDisplayed();
  }

  getRegisteredFromSummary() {
    if (this.registerSummaryIsDisplayed() === true) {
      var value = this.registerSummary.getText();
      return value;
    } else {
      throw new Error('Somethings went worng "Register Summary" ')
    }
  }

  attendedSummaryIsDisplayed() {
    this.attendedSummary.waitForDisplayed({ timeout: 6000 })
    return this.attendedSummary.isDisplayed();
  }

  getAttendedFromSummary() {
    if (this.attendedSummaryIsDisplayed() === true) {
      var value = this.attendedSummary.getText();
      return value;
    } else {
      throw new Error('Somthing went worng with attended summary options')
    }
  }


  insightsButtonIsDisplayed() {
    this.insightsButton.waitForDisplayed({ timeout: 3000 })
    return this.insightsButton.isDisplayed();
  }

  clickOnInsightsButton() {
    if (this.insightsButtonIsDisplayed() === true) {
      this.insightsButton.click();
    } else {
      throw new Error('Some things went worng Insight button is not displayed')
    }
  }
  peopleButtonIsDisplayed() {
    this.peopleButton.waitForDisplayed({ timeout: 6000 });
    return this.peopleButton.isDisplayed();

  }

  clickOnPeopleButton() {
    if (this.peopleButtonIsDisplayed() === true) {
      this.peopleButton.click();
    } else {
      throw new Error('Somethings went worng with people button')
    }
  }


  sentButtonIsDisplayed() {
    this.sentButton.waitForDisplayed({ timeout: 6000 });
    return this.sentButton.isDisplayed();

  }

  clickOnSentButton() {
    if (this.sentButtonIsDisplayed() === true) {
      this.sentButton.click();
    } else {
      throw new Error('Something went worng with sent button');
    }
  }

  chatInputFieldIsDisplayed() {
    this.chatInputField.waitForDisplayed({ timeout: 6000 });
    return this.chatInputField.isDisplayed();

  }

  fillDataInChatInputField(message) {

    if (this.chatInputFieldIsDisplayed() === true) {
      this.chatInputField.setValue(message)
      browser.pause(2000);
    } else {
      throw new Error('Somethings went worng with chat input field')
    }
  }

  registeredCountIsDisplayed() {
    this.registeredCount.waitForDisplayed({ timeout: 6000 });
    return this.registeredCount.isDisplayed();
  }

  getRegisteredCount() {
    if (this.registeredCountIsDisplayed() === true) {
      this.registeredCount.scrollIntoView();
      var counts = this.registeredCount.getText();
    } else {
      throw new Error('Count is not displyed')
    }
    return counts;
  }

  getMissedCount() {
    this.missedCount.scrollIntoView();
    var counts = this.missedCount.getText();
    return counts;
  }

  attendedCountIsDisplayed() {
    this.attendedCount.waitForDisplayed({ timeout: 6000 });
    return this.attendedCount.isDisplayed();

  }

  getAttendedCount() {
    browser.pause(3000)
    browser.refresh();
    browser.pause(1000);
    if (this.attendedCountIsDisplayed() === true) {
      browser.pause(1000);
      return this.attendedCount.getText();
    } else {
      throw new Error('Somthing went worng Attended count is not displayed')
    }
  }

  messagesCountIsDisplayed() {
    this.messagesCount.waitForDisplayed({ timeout: 6000 });
    return this.messagesCount.isDisplayed();

  }

  getMessagesCount() {
    if (this.messagesCountIsDisplayed() === true) {
      return this.messagesCount.getText();
    } else {
      throw new Error('Something  went worng with message count')
    }

  }

  sessionTimeIsDisplayed() {
    this.sessionTime.waitForDisplayed({ timeout: 8000 });
    return this.sessionTime.isDisplayed();
  }

  joinRoomButtonIsDisplayed() {
    this.joinRoomButton.waitForDisplayed({ timeout: 30000 });
    return this.joinRoomButton.isDisplayed();
  }

  clickOnJoinRoomButton() {
    if (this.joinRoomButtonIsDisplayed() === true) {
      this.joinRoomButton.click();
    } else { throw new Error("Something went worng at join room button") }

  }

  eventIsNotReadyMessageIsDisplayed() {
    const elem = $('.white-block-message');
    return elem.isDisplayed();

  }

  registratioNameFieldIsDisplayed() {
    this.registratioNameField.waitForDisplayed({ timeout: 6000 });
    return this.registratioNameField.isDisplayed();
  }

  fillRegistrationNameField(regName) {
    if (this.registratioNameFieldIsDisplayed() === true) {
      this.registratioNameField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.registratioNameField.setValue(regName)
    } else {
      throw new Error('Something went worng with Registarion name field')
    }
  }

  registrationEmailFieldIsDisplayed() {
    this.registrationEmailField.waitForDisplayed({ timeout: 6000 })
    return this.registrationEmailField.isDisplayed();
  }

  fillRegistrationEmailField(regEmail) {

    if (this.registrationEmailFieldIsDisplayed() === true) {
      this.registrationEmailField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.registrationEmailField.setValue(regEmail);
    } else {
      throw new Error('Somethings went worng with  registration email field');
    }
  }

  joinNowButtonIsDisplayed() {

    this.joinNowButton.waitForDisplayed({ timeout: 10000 });
    return this.joinNowButton.isDisplayed();
  }

  clickOnJoinNowButton() {
    if (this.joinNowButtonIsDisplayed() === true) {
      this.joinNowButton.click();
    } else {
      throw new Error('Something went worng with join now button');
    }
  }

  registerEvents(name, email) {
    var regLinks = this.getRegistraionLinks();
    super.openUrlInNewTab(regLinks);
    super.switchToWindowNewTab();
    var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
    browser.pause(20000);
    browser.refresh();
    browser.pause(20000);
    browser.refresh();
    browser.pause(20000);
    browser.refresh();
   
    // const elem = $('.white-block-message');

    // var length = 50;
    // var i = 1;
    // do {
    //   if (this.eventIsNotReadyMessageIsDisplayed() === true) {
    //     browser.refresh();
    //     browser.pause(2000);
    //     i++;
    //   } else {
        // browser.pause(2000);
        this.fillRegistrationNameField(name);
        // browser.pause(1000);
        this.fillRegistrationEmailField(email);
        this.clickOnJoinNowButton();
        // browser.pause(2000);
    //     break;
    //   }

    //   i++;

    // } while (i <= length);

  }

  regiregisterMultipleUsers(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 0; i < b; i++) {
      this.registerMultipleUsers(name, email);

    }

  }

  registerMultipleUsers(name, email) {
    var regLinks = this.getRegistraionLinks();
    super.openUrlInNewTab(regLinks);
    super.switchToWindowNewTab();
    browser.pause(1000);
    const elem = $('.white-block-message');
    const handles = browser.getWindowHandles();
    var rNo = Math.floor(Math.random() * 100);


    var uName = name + rNo;
    //var emailAddress = email + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");

    var length = 50;
    var i = 1;
    do {

      if (this.eventIsNotReadyMessageIsDisplayed() === true) {
        browser.refresh();
        browser.pause(3000);
        i++;

      } else {
        this.fillRegistrationNameField(uName);
        browser.pause(1000);
        this.fillRegistrationEmailField(emailAddress);
        browser.pause(1000);
        this.clickOnJoinNowButton();
        browser.pause(4000);
        browser.refresh();
        if (handles.length > 1) {
          browser.switchToWindow(handles[1]);
          browser.closeWindow();
          browser.pause(100);
          browser.switchToWindow(handles[0]);
        }
        break;
      }

      i++;

    } while (i <= length);

  }


  attendOnDemandWithMultipleUsers(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.registerAndAttendMultipleUsers(name, email);
    }

  }


  registerAndAttendMultipleUsers(name, email) {
    var regLinks = this.getRegistraionLinks();
    super.openUrlInNewTab(regLinks);
    super.switchToWindowNewTab();
    browser.pause(1000);
    const elem = $('.white-block-message');
    const handles = browser.getWindowHandles();
    var rNo = Math.floor(Math.random() * 100);
    var uName = name + rNo;
    //var emailAddress = email + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");

    var length = 50;
    var i = 1;
    do {

      if (this.eventIsNotReadyMessageIsDisplayed() === true) {
        browser.refresh();
        browser.pause(3000);
        i++;

      } else {
        this.fillRegistrationNameField(uName);
        browser.pause(1000);
        this.fillRegistrationEmailField(emailAddress);
        browser.pause(1000);
        this.clickOnJoinNowButton();
        browser.pause(4000);
        this.clickOnJoinRoomButton();
        browser.pause(5000);
        if (this.sessionTimeIsDisplayed() === true) {
          console.log("Session started")
        } else {
          console.log('Session is not started');
        }
        if (handles.length > 1) {
          browser.switchToWindow(handles[1]);
          browser.closeWindow();
          browser.pause(100);
          browser.switchToWindow(handles[0]);
        }
        break;
      }

      i++;

    } while (i <= length);

  }

  attendOnDemnadAndSentMessage(count, name, email, message) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.attendAndSentMessageMultipleUsers(name, email, message);
    }

  }

  attendAutomatedEventAndSentMessage(count, name, email, message, optionOne, url) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.attendAndSentMessageAndClikResourcesMultipleUsers(name, email, message, optionOne, url);
    }
  }
  attendAndSentMessageAndClikResourcesMultipleUsers(name, email, message, optionOne, url) {
    EventPage.openSessionOptionsList();
    EventPage.clickOnViewRegistrationPage();
    EventPage.switchToRegistrationWindow();
    var actURL1 = browser.getUrl();
    browser.url(actURL1 + "?skip");
    var rNo = Math.floor(Math.random() * 100);
    var uName = name + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");
    console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
    EventPage.registerEvents(uName, emailAddress);
    var actURL1 = browser.getUrl();
    browser.url(actURL1 + "?skip");
    EventPage.clickOnJoinRoomBtnUnderJoin();
    browser.pause(3000);
    MeetingRoomPage.clickOnOpenChatButton();
    this.fillDataInChatInputField(message + ":" + uName);
    this.clickOnSentButton();
    browser.pause(1500);
    this.clickOnFeaturedActionTitleButton();
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    browser.switchToWindow(handle[2]);
    EventPage.validateWindowUrl(url);
    EventPage.closeResentWindow();
    browser.switchToWindow(handle[1]);
    MeetingRoomPage.clickOnAttendeePollsOption();
    MeetingRoomPage.selectPollOption(optionOne);
    this.clickOnHandoutsOption();
    MeetingRoomPage.clickOnResourceDownloadButton();
    EventPage.closeResentWindow();
    EventPage.switchToManageEventWindow();
  }

  attendAndSentMessageMultipleUsers(name, email, message) {
    var regLinks = this.getRegistraionLinks();
    super.openUrlInNewTab(regLinks);
    super.switchToWindowNewTab();
    browser.pause(5000);

    const elem = $('.white-block-message');
    const handles = browser.getWindowHandles();
    var rNo = Math.floor(Math.random() * 100);
    var uName = name + rNo;
    //var emailAddress = email + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");

    var length = 50;
    var i = 1;
    do {

      if (this.eventIsNotReadyMessageIsDisplayed() === true) {
        browser.refresh();
        browser.pause(3000);
        i++;

      } else {
        this.fillRegistrationNameField(uName);
        browser.pause(1000);
        this.fillRegistrationEmailField(emailAddress);
        browser.pause(1000);
        this.clickOnJoinNowButton();
        browser.pause(2000);
        this.clickOnJoinRoomButton();
        browser.pause(3000);
        this.fillDataInChatInputField(message + ":" + uName);
        browser.pause(3000);
        this.clickOnSentButton();
        browser.pause(5000);
        if (this.sessionTimeIsDisplayed() === true) {
          console.log("Session started")
        } else {
          console.log('Session is not started');
        }
        if (handles.length > 1) {
          browser.switchToWindow(handles[1]);
          browser.closeWindow();
          browser.pause(2000);
          browser.switchToWindow(handles[0]);
          browser.pause(2000);
        }
        break;
      }

      i++;

    } while (i <= length);
  }

  registrationLinksIsdisplayed() {
    this.registrationLink.waitForDisplayed({ timeout: 9000 })
    return this.registrationLink.isDisplayed();
  }

  getRegistraionLinks() {
    if (this.registrationLinksIsdisplayed() === true) {
      this.registrationLink.waitForDisplayed();
      return this.registrationLink.getAttribute('value');
    } else {
      throw new Error('Somethings went wrong with registration links');
    }
  }

  onDemandSwitchIsDisplayed() {
    this.onDemandSwitch.waitForDisplayed({ timeout: 6000 });
    return this.onDemandSwitch.isDisplayed();
  }
  enabledOnDemandSwitch() {

    if (this.onDemandSwitchIsDisplayed() === true) {

      if (this.onDemandSwitch.getAttribute('aria-checked') === 'false') {
        this.onDemandSwitch.click();
        browser.pause(4000);
        this.onDemandSwitch.waitForClickable({ timeout: 3000 })
      } else {
        browser.pause(3000);
        throw new Error('ON DEMAND SWITCHED IS ALREADY ON')
      }

    } else {
      throw new Error('SOMETHINGS WENT WORNG WITH ON DEMAND SWITCHED');
    }
  }

  disabledOnDemandSwitch() {

    if (this.onDemandSwitchIsDisplayed() === true) {

      if (this.onDemandSwitch.getAttribute('aria-checked') === true) {
        this.onDemandSwitch.waitForClickable({ timeout: 3000 });
        this.onDemandSwitch.click();
      } else {
        console.log('On demand switch is alredy disabled')
      }

    } else {
      throw new Error('SOMETHINGS WENT WORNG WITH ON DEMAND SWITCHED');
    }

  }

  onDemandOptionsButtonIsDisplayed() {
    this.onDemandOptionsButton.waitForDisplayed({ timeout: 6000 });
    return this.onDemandOptionsButton.isDisplayed();
  }

  clickOnOnDemandsOption() {
    if (this.onDemandOptionsButtonIsDisplayed() === true) {
      this.onDemandOptionsButton.click();
    } else {
      console.log('Something went worng with On Demands Button');
    }
  }


  automatedTabIsDisplayed() {
    this.automatedTab.waitForDisplayed({ timeout: 6000 });
    return this.automatedTab.isDisplayed();
  }

  openAutomatedTab() {
    this.automatedTab.waitForDisplayed({ timeout: 6000 });
    this.automatedTab.scrollIntoView(0,200)
    if (this.automatedTab.isDisplayed()) {
      this.automatedTab.click();
    } else {

      throw new Error("Automated tab is not clickable..!!!")
    }
  }

  openAddNewAutomatedEvent() {
    this.addNewAutomated.waitForDisplayed({ timeout: 10000 });
    if (this.addNewAutomated.isDisplayed()) {
      this.addNewAutomated.click();
    } else {
      throw new Error("Add new automated is not clickable..!!!")
    }
  }

  validateCreateNewAutomatedEventPage() {

    $('//*[@id="event-manage-root"]/div/div[2]/div/div[1]/div/div[2]').waitForDisplayed({ timeout: 8000 })

    var actTitle = $("//div[@id='event-manage-root']//h1").getText();
    var expTitle = "Create New Automated Event";
    if (actTitle.includes(expTitle)) {
      console.log("Create new automated event page loaded successfully")
    } else {
      console.log("actual title>>" + actTitle);
      console.log("expected title>>" + expTitle);
      throw new Error("Create new automated event page is not loaded")
    }
  }

  addNewAutomatedIsDisplay() {
    this.addNewAutomated.waitForDisplayed({ timeout: 8000 });
    return this.addNewAutomated.isDisplayed();
  }

  uploadMediaFileIsDisplay() {
    this.uploadMediaField.waitForDisplayed({ timeout: 8000 });
    return this.uploadMediaField.isDisplayed();
  }


  selectVideoFromLibrary(videoName) {
    const element = $("//input[@type='file']");
    browser.pause(1000);
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    browser.pause(10000);
    const path = require("path");
    const filePath = path.join(__dirname, "/videoFile/" + videoName);
    const remoteFilePath = browser.uploadFile(filePath);
    $("//input[@type='file']").setValue(remoteFilePath);
    browser.pause(10000);

  }

  updateBrandingImage(image) {
    const element = $("(//input[@type='file'])[2]");
    browser.pause(1000);
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    browser.pause(3000);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $("(//input[@type='file'])[2]").setValue(remoteFilePath);

  }

  uploadSocialImage(image) {
    const element = $("(//input[@type='file'])[3]");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    browser.pause(2000);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $("(//input[@type='file'])[3]").scrollIntoView();
    $("(//input[@type='file'])[3]").setValue(remoteFilePath);


  }
  roomSettingsOptionIsDispalyed() {
    this.roomSettingsOption.waitForDisplayed({ timeout: 6000 });
    return this.roomSettingsOption.isDisplayed();
  }

  clickOnSettingOption() {
    if (this.roomSettingsOptionIsDispalyed() === true) {
      this.roomSettingsOption.click();
    } else {
      throw new Error("SETTINGS OPTION IS NOT DISPLAYED");
    }
  }
  uploadFileData(image) {
    const element = $("(//input[@type='file'])[2]");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $("(//input[@type='file'])[2]").scrollIntoView();
    $("(//input[@type='file'])[2]").setValue(remoteFilePath);
    const button = $("//button[@class='ant-btn Button animated fadeIn --right ant-btn-primary']").waitForDisplayed({ timeout: 30000 });

  }
  handoutUploadFileIsDispaly() {
    this.handoutUploadFile.waitForDisplayed({ timeout: 6000 })
    return this.handoutUploadFile.isDisplayed();
  }


  addedMemberNameIsDisplay() {
    this.addedMemberName.waitForDisplayed({ timeout: 10000 });
    return this.addedMemberName.isDisplayed();
  }

  selectRoleDropdownIsDisplay() {
    this.selectRoleDropdown.waitForDisplayed({ timeout: 3000 });
    return this.selectRoleDropdown.isDisplayed();
  }

  addedAdminIsDisplayedInList() {
    $(".admin-list-item.animated.ant-row-flex.ant-row-flex-middle.fadeInLeft").waitForDisplayed({timeout:10000});
    if ($(".admin-list-item.animated.ant-row-flex.ant-row-flex-middle.fadeInLeft").isDisplayed() === true) {
      console.log("admin is added in event admin list");
    } else {
      throw new Error("FAILED TO ADD NEW ADMIN");
    }

  }

  clickOnSummaryMessageCount() {
    if (this.messagesCountIsDisplayed() === true) {
      this.messagesCount.click();
      browser.pause(3000);
    } else {
      throw new Error("MESSAGE COUNT IS NOT DISPLAYED UNDER SUMMARY TAB");
    }
  }

  replyButtonIsDisplayed() {
    this.replyButton.moveTo();
    this.replyButton.waitForClickable({ timeout: 20000 });
    return this.replyButton.isDisplayed();
  }
  clickOnReplyButton() {
    if (this.replyButtonIsDisplayed() === true) {
      this.replyButton.scrollIntoView();
      this.replyButton.click();
    } else {
      throw new Error("REPLY BUTTON IS NOT DISPLAYED");
    }

  }


  enterMessageInReplyTextField(replyMessage) {
    const textField = $("textarea[placeholder='Enter your reply message']");
    textField.waitForDisplayed({ timeout: 1000 });
    if (textField.isDisplayed() === true) {
      textField.setValue(replyMessage);
    } else {
      throw new Error("text field is not displayed to admin")
    }
  }

  sendReplyButtonIsDisplayed() {
    this.sendReplyButton.scrollIntoView({ timeout: 10000 });
    return this.sendReplyButton.isDisplayed();
  }

  clickOnSendReplyButton() {
    if (this.sendReplyButtonIsDisplayed() === true) {
      this.sendReplyButton.click();
    } else {
      throw new Error("SEND REPLY BUTTON IS NOT DISPLAYED");
    }
  }

  validateSendReplyValidationMsg(validationMsg) {
    $("//div[@class='toast-message']").waitForDisplayed({ timeout: 10000 });
    var actMsg = $("//div[@class='toast-message']").getText();
    if (actMsg.includes(validationMsg)) {
      console.log("validation message matched");
    } else {
      console.log("actual message>>" + actMsg + "Expected message>>" + validationMsg);
      throw new Error("VALIDATION MESSAGE MISSMATCHED");
    }
  }


  filterDropDownIsDisplayed() {
    this.filterDropdown.waitForDisplayed({ timeout: 10000 });
    return this.filterDropdown.isDisplayed();
  }

  clickOnFilterDropdown() {
    if (this.filterDropDownIsDisplayed() === true) {
      this.filterDropdown.click();
    } else {
      throw new Error("filter dropdown is not displayed");
    }
  }

  scheduledSessionOptionIsDisplayed() {
    this.scheduledSessionOption.waitForDisplayed({ timeout: 10000 });
    return this.scheduledSessionOption.isDisplayed();
  }

  onDemandOptionIsDisplayed() {
    return this.onDemandOption.isDisplayed();
  }

  selectScheduledSessionOption() {
    if (this.scheduledSessionOptionIsDisplayed() === true) {
      this.scheduledSessionOption.click();
    } else {
      throw new Error("schedule session option is not displayed");
    }
  }

  validateAddedRole(role) {
    const elem = $('//div[@class="admin-info flex-1"]//div[@class="admin-role-tag moderator"]');
    elem.waitForDisplayed({ timeout: 6000 });
    var actRole = elem.getText();
    var expRole = role;
    if (actRole.includes(expRole)) {
      console.log("add role is matched");
    } else {
      console.log("actual role >> " + actRole + "expected role >> " + expRole);
      throw new Error("ADDED ROLE IS MISSMATCHED");
    }
  }

  validateAddedName(name) {
    const elem = $('(//div[@class="admin-name"])[1]');
    elem.scrollIntoView();
    elem.waitForDisplayed({ timeout: 6000 });
    var actName = elem.getText();
    var expName = name;
    if (actName.includes(expName)) {
      console.log("add name is matched");
    } else {
      throw new Error("ADDED NAME IS MISSMATCHED actual name>>" + actName + "expected Name>>" + expName);
    }
  }
  addAResourceButtonIsDispaly() {
    this.addAResourceButton.waitForDisplayed({ timeout: 30000 });
    this.addAResourceButton.scrollIntoView();
    return this.addAResourceButton.isDisplayed();

  }

  clickOnAddAResourceButton() {
    if (this.addAResourceButtonIsDispaly() === true) {
      this.addAResourceButton.click();

    } else {
      throw new Error("ADD A RESOURCE BUTTON IS NOT DISPLAYED");
    }
  }

  automationTabIsDisplayed() {
    // this.automationTab.scrollIntoView();
    return this.automationTab.isDisplayed();
  }

  clickOnAutomationTab() {
    if (this.automationTabIsDisplayed() === true) {
      this.automationTab.click();
    } else {
      throw new Error("Automation tab is not dispalyed");
    }
  }

  validateVideoNotice(notice) {
    var actNotice = this.videoNotice.getText();
    if (actNotice.includes(notice)) {
      console.log("video notice is matched");
    } else {
      throw new Error("Video notice missmatched actual notice>>" + actNotice + "expected notice>>" + notice);
    }
  }

  uploadVideoOptionIsDisplayed() {
    this.uploadVideoOption.waitForDisplayed({ timeout: 10000 });
    return this.uploadVideoOption.isDisplayed();
  }

  clickOnUploadVideoOption() {
    if (this.uploadVideoOptionIsDisplayed() === true) {
      this.uploadVideoOption.click();
    } else {
      throw new Error("Upload video option is not displayed");
    }
  }

  uploadOptionButtonIsDisplayed() {
    this.uploadOptionButton.waitForDisplayed({ timeout: 1000 });
    return this.uploadOptionButton.isDisplayed();
  }
  clickOnUploadOptionButton() {
    if (this.uploadOptionButtonIsDisplayed() === true) {
      this.uploadOptionButton.click();
    } else {
      throw new Error("Upload option button is not displayed");
    }
  }

  swapVideoOptionIsDisplayed() {
    browser.pause(20000)
    this.swapVideoOption.waitForDisplayed({ timeout: 10000 });
    return this.swapVideoOption.isDisplayed();
  }
  clickOnSwapVideoOption() {
    if (this.swapVideoOptionIsDisplayed() === true) {
      this.swapVideoOption.waitForClickable({ timeout: 30000 })
      this.swapVideoOption.click();
    } else {
      throw new Error("Swap video option is not displaying");
    }
  }

  downloadMediaOptionIsDisplayed() {
    this.downloadMediaOption.waitForDisplayed({ timeout: 10000 });
    return this.downloadMediaOption.isDisplayed();

  }

  clickOnDownloadMediaOption() {
    if (this.downloadMediaOptionIsDisplayed() === true) {
      this.downloadMediaOption.click();
    } else {
      throw new Error("download Media option is not displaying");
    }
  }


  validateSwapVideoPopup(popupTitle) {
    const pageTitle = $(".ant-modal-body  div[role='tablist'] div[role='tab']");
    pageTitle.waitForDisplayed({ timeout: 20000 });
    var actTitle = pageTitle.getText();
    if (actTitle.includes(popupTitle)) {
      console.log("Popup title matched");
    } else {
      throw new Error("Popup title missmatched Actual title>>" + actTitle + "Expected title>>" + popupTitle);
    }
  }

  uploadVideo(swapVideo) {
    const element = $("(//input[@type='file'])[2]");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/videoFile/" + swapVideo);
    const remoteFilePath = browser.uploadFile(filePath);
    $("(//input[@type='file'])[2]").scrollIntoView();
    $("(//input[@type='file'])[2]").setValue(remoteFilePath);
  }

  noNeverMindButtonIsDisplayed() {
    this.noNeverMindButton.waitForDisplayed({ timeout: 10000 });
    return this.noNeverMindButton.isDisplayed();
  }

  swapTheVideoButtonIsDisplayed() {
    this.swapTheVideoButton.waitForClickable({ timeout: 30000 });
    return this.swapTheVideoButton.isDisplayed();
  }
  clickOnSwapTheVideoButton() {
    if (this.swapTheVideoButtonIsDisplayed() === true) {
      this.swapTheVideoButton.click();
    } else {
      throw new Error("Swap the video button is not displayed");
    }
  }
  validateSwappedVideo(swapVideo) {
    // this.clickOnSwapTheVideoButton();
    browser.pause(3000);
    $(".Boxes .file-name").waitForDisplayed({ timeout: 20000 });
    var actVideo = $(".Boxes .file-name").getText();
    if (actVideo.includes(swapVideo)) {
      console.log("Video swapped successfully");
    } else {
      throw new Error("Failed to swap video actual video>>" + actVideo + "Expected video>>" + swapVideo);
    }
  }

  swapUploadOptionButtonIsDisplayed() {
    this.swapUploadOptionButton.waitForDisplayed({ timeout: 1000 });
    return this.swapUploadOptionButton.isDisplayed();
  }
  clickOnSwapUploadOptionButton() {
    if (this.swapUploadOptionButtonIsDisplayed() === true) {
      this.swapUploadOptionButton.click();
    } else {
      throw new Error("Swap video Upload option button is not displayed");
    }
  }

  cancelUploadButtonIsDisplayed() {
    this.cancelUploadButton.waitForDisplayed({ timeout: 10000 });
    return this.cancelUploadButton.isDisplayed();
  }

  clickOnCancelUploadButton() {
    if (this.cancelUploadButtonIsDisplayed() === true) {
      this.cancelUploadButton.click();
    } else {
      throw new Error("Cancel upload button is not displayed");
    }
  }
  clickOnNoNeverMindButton() {
    if (this.noNeverMindButtonIsDisplayed() === true) {
      this.noNeverMindButton.click();
    } else {
      throw new Error("No Never mind button is not displayed");
    }
  }

  selectDifferentVideoOptionIsDisplayed() {
    this.selectDifferentVideoOption.waitForDisplayed({ timeout: 30000 });
    return this.selectDifferentVideoOption.isDisplayed();
  }

  clickOnSelectDifferentVideo() {
    if (this.selectDifferentVideoOptionIsDisplayed() === true) {
      this.selectDifferentVideoOption.click();
    } else {
      throw new Error("Select different video option is not displayed");
    }
  }
  swappedVideoIsDisplayed() {
    browser.pause(2000);
    return $(".ant-modal-body div[role='tabpanel'] .file-name").isDisplayed();
  }

  validateUpdatedFormWidth(formWidth) {
    browser.pause(50000);
    this.previewRegistrationForm.scrollIntoView();
    this.previewRegistrationForm.waitForDisplayed({ timeout: 10000 });
    var actWidth = this.previewRegistrationForm.getAttribute("style").replace("width:", " ").replace("px", " ");

    if (actWidth.includes(formWidth)) {
      console.log("width updated successfully");
    } else {
      throw new Error("FORM WIDTH FIELD IS NOT WORKING");
    }
  }

  previewRegistrationFormIsDisplay() {
    return this.previewRegistrationForm.isDisplayed();
  }

  inlineEmbedStyleButtonIsDisplay() {
    this.inlineEmbedStyleButton.waitForDisplayed({ timeout: 6000 });
    return this.inlineEmbedStyleButton.isDisplayed();
  }

  clickOnInlineEmbedStyle() {
    if (this.inlineEmbedStyleButtonIsDisplay()) {
      browser.pause(5000);
      this.inlineEmbedStyleButton.scrollIntoView(0,100);
      this.inlineEmbedStyleButton.click();
    } else {
      throw new Error("INLINE EMBED STYLE BUTTON IS NOT DISPLAYING")
    }
  }

  previewRegistrationFormIsDisplay() {
    return this.previewRegistrationForm.isDisplayed();
  }

  validateUpdatedFormWidth(formWidth) {
    browser.pause(1500);
    // this.previewRegistrationForm.scrollIntoView();
    var actWidth = this.previewRegistrationForm.getAttribute("style").replace("width:", " ").replace("px", " ");

    if (actWidth.includes(formWidth)) {
      console.log("width updated successfully");
    } else {
      throw new Error("FORM WIDTH FIELD IS NOT WORKING");
    }
  }

  selectPopoverEmbedStyle(style) {
    this.popoverEmbedStyleButton.click();
    const styleOption = $("(//li[contains(text(),'" + style + "')])[1]");
    styleOption.click();

  }
  popoverEmbedStyleDisplay() {
    this.popoverEmbedStyleButton.waitForDisplayed({ timeout: 6000 });
    return this.popoverEmbedStyleButton.isDisplayed();
  }

  validateWindowUrl(url) {
    browser.pause(31000);
    var actUrl = browser.getUrl();
    if (actUrl.includes(url)) {
      console.log("User successfully redirect on added url");
    } else {

      throw new Error("USER FAILD TO REDIRECT ON ADDED URL actual url>>" + actUrl + "expected url>>" + url);
    }
  }

  selectRoleGuestDropDownIsDisplay() {
    this.selectRoleGuestDropDown.waitForDisplayed({ timeout: 6000 })
    return this.selectRoleGuestDropDown.isDisplayed();
  }

  clickOnSelectRoleGuestDropdown() {
    if (this.selectRoleGuestDropDownIsDisplay() === true) {
      this.selectRoleGuestDropDown.click();
    } else {
      throw new Error("SELECT ROLE DROPDOWN FOR GUEST IS DISPALYED");
    }
  }

  handoutsOptionIsDispalyed() {
    this.handoutsOption.waitForDisplayed({ timeout: 50000 });
    return this.handoutsOption.isDisplayed();
  }
  clickOnHandoutsOption() {
    if (this.handoutsOptionIsDispalyed() === true) {
      this.handoutsOption.click();
    } else {
      throw new Error("handouts option is not displayed");
    }
  }


  clickOnModeratorSessionDropDown() {
    this.moderatorSessionDropDown.waitForDisplayed({ timeout: 10000 });
    if (this.moderatorSessionDropDown.isDisplayed() === true) {
      this.moderatorSessionDropDown.click();
    } else {
      throw new Error("MODERATOR SESSION DROPDOWN IS NOT DISPLAYED");
    }
  }
  openJoinRoomLinkInTab() {
    this.nameField.click();
    browser.keys(['Control', 'v']);
    var urlValue = this.nameField.getAttribute("value");
    super.openUrlInNewTab(urlValue);
    // super.switchToWindowNewTab();
    browser.pause(3000);

  }
  featuredTitleFieldIsDisplayed() {
    this.featuredTitleField.waitForDisplayed({ timeout: 10000 });
    return this.featuredTitleField.isDisplayed();
  }
  fillFeaturedTitleField(title) {
    if (this.featuredTitleFieldIsDisplayed() === true) {
      this.featuredTitleField.setValue(title);
    } else {
      throw new Error("featured action title field is not displayed");
    }
  }
  linkUrlFieldIsDisplayed() {
    this.linkUrlField.waitForDisplayed({ timeout: 10000 });
    return this.linkUrlField.isDisplayed();
  }
  fillLinkUrlField(link) {
    if (this.linkUrlFieldIsDisplayed() === true) {
      this.linkUrlField.setValue(link);
    } else {
      throw new Error("featured action link url field is not displayed");
    }

  }
  buttonTextFieldIsDisplayed() {
    this.buttonTextField.waitForDisplayed({ timeout: 10000 });
    return this.buttonTextField.isDisplayed();
  }

  fillButtonTextField(buttonText) {
    if (this.buttonTextFieldIsDisplayed() === true) {
      this.buttonTextField.setValue(buttonText);
    } else {
      throw new Error("featured action button text field is not displayed");
    }
  }

  featuredActionTitleButtonIsDispalyed() {
    this.featuredActionTitleButton.waitForDisplayed({ timeout: 10000 });
    return this.featuredActionTitleButton.isDisplayed();
  }
  clickOnFeaturedActionTitleButton() {
    if (this.featuredActionTitleButtonIsDispalyed() === true) {
      this.featuredActionTitleButton.click();
    } else {
      throw new Error("featured action title button is not displayed");
    }
  }

  validateVideodoesNotStartFromBegning() {
    const begningTime = $("//div[contains(text(),'0:')]");
    if (begningTime.isDisplayed() === true) {
      throw new Error("Video start from begning for late joining user");

    } else {
      console.log("Video does not start from begning for late joining user");
    }
  }

  missedAutomatedEvent(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.missedMultipleUsers(name, email);
    }
  }
  missedMultipleUsers(name, email) {
    EventPage.openSessionOptionsList();
    EventPage.clickOnViewRegistrationPage();
    EventPage.switchToRegistrationWindow();
    // var actURL1 = browser.getUrl();
    browser.url(browser.getUrl() + "?skip");
    var rNo = Math.floor(Math.random() * 100);
    var uName = name + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");
    console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
    EventPage.registerEvents(uName, emailAddress);
    // var actURL1 = browser.getUrl();
    // browser.url(actURL1 + "?skip");
    EventPage.closeResentWindow();
    EventPage.switchToManageEventWindow();
  }

  pastSessionsIsDisplay() {
    return this.pastSessionsOption.isDisplayed();
  }

  clickOnPastSessionOption() {
    this.pastSessionsOption.waitForDisplayed({ timeout: 90000 });
    if (this.pastSessionsIsDisplay() === true) {
      this.pastSessionsOption.click();
    } else {
      throw new Error("Past session option is not dispalyed")
    }
  }



  attendOnDemandEventAndSentMessage(count, name, email, message, optionOne, url) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.attendOnDemandAndSentMessageAndClikResourcesMultipleUsers(name, email, message, optionOne, url);
    }
  }
  attendOnDemandAndSentMessageAndClikResourcesMultipleUsers(name, email, message, optionOne, url) {
    var regLinks = this.getRegistraionLinks();
  super.openUrlInNewTab(regLinks);
    EventPage.switchToRegistrationWindow();
    var actURL1 = browser.getUrl();
    browser.url(actURL1 + "?skip");
    browser.pause(5000);
 browser.refresh();
    var rNo = Math.floor(Math.random() * 100);
    var uName = name + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");
    console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
    EventPage.registerEvents(uName, emailAddress);
    var actURL1 = browser.getUrl();
    browser.url(actURL1 + "?skip");
    EventPage.clickOnJoinRoomBtnUnderJoin();
    browser.pause(3000);
    MeetingRoomPage.clickOnOpenChatButton();
    this.fillDataInChatInputField(message + ":" + uName);
    this.clickOnSentButton();
    this.clickOnFeaturedActionTitleButton();
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    browser.switchToWindow(handle[2]);
    EventPage.validateWindowUrl(url);
    EventPage.closeResentWindow();
    browser.switchToWindow(handle[1]);
    MeetingRoomPage.clickOnAttendeePollsOption();
    MeetingRoomPage.selectPollOption(optionOne);
    this.clickOnHandoutsOption();
    MeetingRoomPage.clickOnResourceDownloadButton();
    EventPage.closeResentWindow();
    EventPage.switchToManageEventWindow();
  }

  validateSessionResumeForUser(regEmail){
    var exitTime=$("//div[@class='header-controls-runtime']").getText();
    EventPage.closeResentWindow();
    EventPage.switchToManageEventWindow();
    var regLinks = this.getRegistraionLinks();
    super.openUrlInNewTab(regLinks);
    super.switchToWindowNewTab();
    var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
    var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  this.fillRegistrationNameField(name);
    this.fillRegistrationEmailField(emailAddress);
    this.clickOnJoinNowButton();
    EventPage.clickOnJoinRoomBtnUnderJoin();
  $("//div[@class='header-controls-runtime']").waitForDisplayed({timeout:10000});
  
  const resumeTime=$("//div[contains(text(),'"+exitTime+"')]");
  resumeTime.waitForDisplayed({timeout:5000});
  if (resumeTime.isDisplayed()===true) {
    console.log("Session resume successfully if user left room and rejoin after some time");
    
  } else {
    throw new Error("Failed to resume session if user rejoin session after some time exit time>>"+exitTime+"Resume time>>"+resumeTime);
  }
  }

  secondSessionUnderUpcomingSessTab() {
    return $("(//tr[@class='ant-table-row ant-table-row-level-0'])[2]").isDisplayed();
  }

  onDemandSessionTitleUnderDropdown(sessionTitle){
const Title=$("//div[contains(text(),'"+sessionTitle+"')]");
if (Title.isDisplayed()===true) {
  console.log("OnDemand session is displaying under upcoming session lists");
  
} else {
  throw new Error("OnDemand session is not displaying under session list");
}
  }
  selectOnDemandSessionFromRegDropdown(sessionTitle){
    const Title=$("//div[contains(text(),'"+sessionTitle+"')]");
    Title.click();
  }

  clickOnUpcomingSessionButton() {
    this.upcomingSessionDropdown.waitForDisplayed({ timeout: 1000 });
    if (this.upcomingSessionDropdown.isDisplayed() === true) {
      this.upcomingSessionDropdown.click();
    } else {
      throw new Error("UPCOMING SESSION DROPDOWN BUTTON IS NOT DISPLAYED");
    }

  }
}
export default new AutomatedPage();
