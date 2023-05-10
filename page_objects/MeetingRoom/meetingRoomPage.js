import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";
import { expect } from "chai";
class meetingRoomPage extends Base {

  /*---------------------POM---------------*/

  get welcomePageTitle() {
    return $('.welcome');
  }

  get startSessionButton() {
    return $('.Button.animated.ant-btn.ant-btn-primary.fadeIn.false.webinar-start-button');
  }

  get joinRoomButton() {
    return $('.session-button .ant-btn-primary');
  }


  get endSessionButton() {
    return $('.--cancel.Button.animated.ant-btn.ant-btn-primary.fadeIn.false.webinar-start-button');
  }

  get yesButton() {
    return $('//div[@id="dialog"]//button[@class="btn btn-black"]');
  }

  get chatResourceButton() {
    return $('.chat-resource-button');
  }

  get viewSharingOptionsBtn() {
    return $('.--button-strike.--share.admin-controls-button');
  }

  get shareMaterialOption() {
    return $('.MaterialItem-container');
  }

  get attendeeButton() {
    return $('.Backstage-MenuButton');
  }

  get sessionDropDown() {
    return $('[class] .fadeInLeft:nth-of-type(3) .session-options-dropdown');
  }

  get copyJoinLinkButton() {
    return $('//li[contains(text(),"Copy Join Link")]');
  }
  get nameField() {
    return $('input[name="name"]');
  }

  get sessionTimer() {
    return $('.webinar-timer');
  }

  get attendeeMenueButton() {
    return $('(//div[@class="UserMenu"]//div)[2]');
  }

  get banAttendeeButton() {
    return $('.--red.menu-item');
  }

  get pollOption() {
    return $('div:nth-of-type(1) > .chat-resource-type');
  }

  get handoutOption() {
    return $('div:nth-of-type(2) > .chat-resource-type');
  }

  get featuredActionOption() {
    return $('div:nth-of-type(3) > .chat-resource-type');
  }

  get questionField() {
    return $('(//div[@class="chat-resource-create-input"]//input)[1]');
  }

  get option1Field() {
    return $('(//div[@class="chat-resource-create-input"]//input)[2]');
  }

  get option2Field() {
    return $('(//div[@class="chat-resource-create-input"]//input)[3]');
  }

  get saveResourceButton() {
    return $('.save');
  }

  get pollsOption() {
    return $('//button[contains(text(),"polls")]|//div[contains(text(),"polls")]');
  }

  get handoutTitleField() {
    return $('//div[@class="chat-resource-create-input"]//input');
  }
  get handoutsOption() {
    return $('//button[contains(text(),"handouts")]|//div[contains(text(),"handouts")]');
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
    return $('.featured-action-widget-button > div');
  }

  get featuredActionImageButton() {
    return $('//div[@class="featured-action-button"]');
  }

  get chatTextArea() {
    return $('.chat-smart-input__input');
  }

  get messageInChatWindow() {
    return $('.Linkify');
  }

  get deleteMessageButton() {
    return $('.anticon.anticon-delete > svg');
  }
  get yesDeleteButton() {
    return $('.ant-modal-confirm-btns .ant-btn-primary');
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

  get sessionTime() {
    return $('.header-controls-runtime');
  }
  get sessionOptionsDropDown() {
    return $('//*[@id="event-manage-root"]/div/div[2]/div[2]/div[1]/button');
  }
  get viewRegistrationPage() {
    return $('ul[role="menu"] > li:nth-of-type(1)');
  }

  get joinRoomBtnUnderJoin() {
    return $('//div[contains(text(),"JOIN ROOM")]');
  }
  get handoutsButton() {
    return $('.chat-header-left > div:nth-of-type(2)');
  }

  get downloadButton() {
    return $('.chat-handout-button');
  }

  get pollsButton() {
    return $('(//div[@class="chat-header-left"]//button)[2]|(//div[@class="chat-header-left"]//div)[2]');
  }
  get pollsOption1() {
    return $('.chat-poll-answers > div:nth-of-type(1)');
  }
  get pollsOption2() {
    return $('.chat-poll-answers > div:nth-of-type(2)');
  }

  get markAsQuestionOption() {
    return $('.--question-blue.demio-icon');
  }


  get chatQuestionThreeDots() {
    return $('.chat-question-options a');
  }

  get unMarkAsQuestionOption() {
    return $('.chat-options-popover-question');
  }

  get answerLiveOption() {
    return $('.chat-question-button');
  }

  get finishAnsweringButton() {
    return $('.featured-action-button.live-answer-button');
  }
  get questionStatus() {
    return $('.chat-question-button.chat-question-button--answered');
  }


  get mentionButton() {
    return $('.chat-mention-button.di-at-icon');
  }
  get chatQuestionButton() {
    return $('.--button-grey.demio-icon');
  }

  get chatMessageTypeButton() {
    return $('.chat-messages-type-left');
  }

  get publicChatOption() {
    return $('div:nth-of-type(1) > .chat-type-top');
  }

  get privateChatOption() {
    return $('div:nth-of-type(2) > .chat-type-top');
  }

  get chatMentionsButton() {
    return $('.chat-mentions-button-icon');
  }

  get adminsTab() {
    return $('.chat-tab-admins');
  }

  get fullScreenOption() {
    return $('.header-controls-right > div:nth-of-type(2)');
  }

  get hideChatOption() {
    return $('.chat-button.header-controls-button');
  }

  get chatHeaderRightArrow() {
    return $('.chat-header-right');
  }

  get settingsOption() {
    return $('.header-controls-right > div:nth-of-type(3)');
  }

  get settingPopup() {
    return $('.join-session.join-session--settings');
  }


  get pauseVideoButton() {
    return $('.--video.sharing-controls > .slide-control-button-container > .slide-control-button');
  }
  get restartVideoButton() {
    return $('.slide-control-buttons > div:nth-of-type(1)');
  }

  get stopSharingVideoButton() {
    return $('.slide-control-button.stop');
  }

  get videoTimer() {
    return $('.slide-control-info');
  }

  get yesRestartButton() {
    return $('.ant-modal-confirm-btns .ant-btn-primary');
  }

  get stopSharingSlideButton() {
    return $('.slide-control-button.stop');
  }

  get previousSlideButton() {
    return $('div:nth-of-type(1) > .slide-control-button');
  }

  get nextSlideButton() {
    return $('div:nth-of-type(2) > .slide-control-button');
  }

  get shareYourScreenButton() {
    return $('a:nth-of-type(1) > .share-material-right > .share-material-title');
  }

  get stopSharingButton() {
    return $('a:nth-of-type(2) > .share-material-right > .share-material-title');
  }

  get videoMaterial() {
    return $('div:nth-of-type(2) > .MaterialItem-container');
  }

  get pdfMaterial() {
    return $('div:nth-of-type(2) > .MaterialItem-container');
  }

  //-------------//

  get goOnStageButton() {
    return $('.go-on-stage-button');
  }

  get goOnStageJoinSessionButton() {
    return $('.join-button');
  }

  get leftHeaderSessionTitle() {
    return $('.header-controls-title');
  }

  get yesStartButton() {
    return $('.ant-modal-confirm-btns .ant-btn-primary');
  }

  get yesEndButton() {
    return $('.ant-modal-confirm-btns .ant-btn-primary');
  }

  get peopleButton() {
    return $('.PeopleButton');
  }

  get yesShareButton() {
    return $('(//button[@class="ant-btn ant-btn-primary"])');
  }

  get chatHeaderTab() {
    return $('.chat-header-tab');
  }

  get sessionPopup() {
    return $('.header-controls-modal-container');
  }

  get endSessionPopup() {
    return $('.ant-modal-body');
  }

  get goOnStagePopup() {
    return $('.join-session-container');
  }

  get videoOption() {
    return $('(//div[@class="join-session-switch"])[1]//button');
  }
  get audioOption() {
    return $('(//div[@class="join-session-switch"])[2]//button');
  }
  get connectivityOption() {
    return $('.run.test');
  }
  get noThanksButtonInGoOnStagePopup() {
    return $('.join-session-container > .join-session-button-cancel');
  }
  get stagingMenuBar() {
    return $('.admin-controls-container');
  }
  get inviteOnStageButton() {
    return $('.menu-item');
  }

  get removeFromStageButton() {
    return $('.menu-item-text');
  }
  get leaveStageButton() {
    return $('.menu-item-text');
  }

  get firstUserMenuButton() {
    return $('(//div[@class="UserMenu"])[1]');
  }
  get secondUserMenuButton() {
    return $('(//div[@class="UserMenu"])[2]');
  }
  get thirdUserMenuButton() {
    return $('(//div[@class="UserMenu"])[4]');
  }

  get fourthUserMenuButton() {
    return $('(//div[@class="UserMenu"])[6]');
  }
  get fifthUserMenuButton() {
    return $('(//div[@class="UserMenu"])[9]');
  }
  get leaveStageIcon() {
    return $('.admin-controls-container .admin-controls-button:nth-of-type(6)');
  }

  get moderatorLeaveStageIcon() {
    return $('.admin-controls-container .admin-controls-button:nth-of-type(4)');
  }
  get attendeeLeaveStageIcon() {
    return $('.admin-controls-container .admin-controls-button:nth-of-type(3)');
  }
  get shareScreenOption() {
    return $('.share-material-title-text');
  }

  get closeSettingPopover() {
    return $('(//span[@class="close-popover"])[1]');
  }

  get shareMaterialsButton() {
    return $('.MaterialButton');
  }

  get userMenuIcon() {
    return $('.shared-material-content > .UserMenu-container');
  }

  get enableSpotlightButton() {
    return $('.UserMenu-options .menu-item:nth-of-type(1) .menu-item-text');
  }

  get waitingScreen() {
    return $('.waiting-screen-status');
  }

  get addMaterialOption() {
    return $('.MaterialList__link');
  }

  get viewProfileIcon() {
    return $('(//div[@class="Demio-Avatar --error"])[1]|(//div[@class="Demio-Avatar --error"])[1]');
  }

  get userProfileInfo() {
    return $('.header-controls-user-info');
  }

  get searchBar() {
    return $('.MaterialList > .SearchBox > .SearchBox__input');
  }

  get materialList() {
    return $('.--show-materials-link.MaterialList__container');
  }


  //----------Updated new Room--------//

  get presenterSessionDropDown() {
    return $('(//div[@class="admin-action"])[8]//button');
  }

  get moderatorSessionDropDown() {
    return $('(//div[@class="admin-action"])[6]//button');
  }

  get hostSessionDropDown() {
    return $('(//div[@class="admin-action"])[2]//button');
  }

  get adminHostSessionDropDown() {
    return $('(//div[@class="admin-action"])[4]//button');
  }

  get attendeePollsOption() {
    return $('//div[contains(text(),"polls")]|//button[contains(text(),"polls")]');
  }

  get attendeeHandoutOption() {
    return $('//div[contains(text(),"handouts")]');
  }

  get stageEmptyMessage() {
    return $('//div[@class="stage-area-empty-message"]');
  }

  get editAdminOptionForPresenter() {
    return $('//li[contains(text(),"Edit Admin")]');
  }
  get editAdminOptionForModerator() {
    return $('(//li[contains(text(),"Edit Admin")])[2]');
  }
  get editAdminOptionForHost() {
    return $('(//li[contains(text(),"Edit Admin")])[3]');
  }

  get messagesCount() { return $('//*[@id="event-manage-root"]//a[@class="session-table-stat messages"]'); }
  get chatOptionInRoom() {
    return $('//button[contains(text(),"chat")]');
  }

  get pollMenuButtonInRoom() {
    return $('(//div[@class="chat-poll-header --is-admin"]//div[@class="chat-resource-menu-button ant-dropdown-trigger"])[1]');
  }

  get handoutMenuButtonInRoom() {
    return $('//div[@class="shadow-container chat-handouts-container scrollable disable-top-shadow"]//div[@class="chat-resource-menu-button ant-dropdown-trigger"]');
  }

  get featureActionMenuButtonInRoom() {
    return $('//div[@class="featured-action-title --is-admin"]//div[@class="chat-resource-menu-button ant-dropdown-trigger"]');
  }

  get deletePollOption() {
    return $('//li[contains(text(),"Delete Poll")]');
  }

  get deleteHandoutOption() {
    return $('//li[contains(text(),"Delete Handout")]');
  }

  get deleteFeatureActionOption() {
    return $('//li[contains(text(),"Delete Featured Action")]');
  }

  get visualEffectsToggleButton() {
    return $('//div[@class="visual-effects-switch"]//span//button');
  }

  get visualEffectsDropdown() {
    return $('//div[@class="visual-option"]//div[@class="ant-select-selection__rendered"]');
  }

  get visualEffectUploadedImage() {
    return $('(//button[@class="image_button"])[1]');
  }
  

  get applyFilterChangesButton() {
    return $('//div[@class="save-settings --visible"]//button');
  }



  //-----------------------ACTION METHODS--------------//


  validateWelcomePage(pageTitle) {
    this.welcomePageTitle.waitForDisplayed({ timeout: 10000 });
    var actTitle = this.welcomePageTitle.getText();
    if (actTitle.includes(pageTitle)) {
      console.log("user successfully redirect on welcome screen");
    } else {

      throw new Error("JOIN ROOM BUTTON IS NOT WORKING AND USER IS FAILED TO REDIRECT ON WELCOME SCREEN actual title>>" + actTitle + "expected title>>" + pageTitle);
    }
  }

  startSessionButtonIsDisplayed() {
    this.startSessionButton.scrollIntoView();
    return this.startSessionButton.isDisplayed();
  }

  joinRoomButtonIsDisplay() {
    // this.joinRoomButton.scrollIntoView();
    return this.joinRoomButton.isDisplayed();
  }

  clickOnJoinRoom() {
    this.joinRoomButton.waitForClickable({ timeout: 30000 });
    if (this.joinRoomButtonIsDisplay() === true) {
      this.joinRoomButton.click();
      browser.pause(3000);
    } else {
      throw new Error("JOIN ROOM BUTTON IS NOT DISPLAYED");
    }
  }
  clickOnStartSessionButton() {
    browser.pause(1500);
    if (this.startSessionButton.isDisplayed() === true) {
      this.startSessionButton.click();
      browser.pause(500);
    } else {
      throw new Error("Start session button is not displayed");
    }
  }

  endSessionButtonIsDisplayed() {
    this.endSessionButton.waitForDisplayed({ timeout: 30000 });
    return this.endSessionButton.isDisplayed();
  }

  clickOnEndSessionButton() {
    if (this.endSessionButtonIsDisplayed() === true) {
      this.endSessionButton.click();
    } else {
      throw new Error("EndSession button is not displayed")
    }
  }

  clickOnYesButton() {
    this.yesButton.waitForDisplayed({ timeout: 10000 });
    if (this.yesButton.isDisplayed() === true) {
      this.yesButton.click();


    } else {
      throw new Error("Yes start button is not displayed")
    }
  }

  clickOnChatResourceButton() {
    if (this.chatResourceButton.isDisplayed() === true) {
      this.chatResourceButton.click();
    } else {
      throw new Error("CHAT RESOURCE BUTTON IS NOT DISPLAYED");
    }
  }


  addedChatResourceIsDisplayed() {
    $(".chat-resources-list.scroll-container > .chat-resource-item").waitForDisplayed({ timeout: 10000 });
    return $(".chat-resources-list.scroll-container > .chat-resource-item").isDisplayed();

  }



  viewSharingOptionsBtnIsDisplayed() {
    this.viewSharingOptionsBtn.waitForDisplayed({ timeout: 20000 });
    return this.viewSharingOptionsBtn.isDisplayed();
  }

  clickOnViewSharingOptions() {

    if (this.viewSharingOptionsBtnIsDisplayed() === true) {
      this.viewSharingOptionsBtn.click();
    } else {
      throw new Error("view sharing option button is not displayed")
    }
  }

  shareMaterialOptionIsDisplayed() {
    this.shareMaterialOption.waitForDisplayed({ timeout: 15000 });
    return this.shareMaterialOption.isDisplayed();
  }

  clickOnShareMaterialOption() {

    if (this.shareMaterialOptionIsDisplayed() === true) {
      this.shareMaterialOption.click();

    } else {
      throw new Error("Share screen option button is not displayed")
    }
  }

  validateAddedMaterial(name) {
    var actName = $(".share-material-title").getText();
    if (actName.includes(name)) {
      console.log("added material is not displayed under share tab");
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      throw new Error("added material is not displayed successfully under share tab");
    }
  }

  attendeeButtonIsDisplayed() {
    this.attendeeButton.moveTo();
    this.attendeeButton.waitForDisplayed({ timeout: 10000 });
    return this.attendeeButton.isDisplayed();
  }
  clickOnAttendeeButton() {
    if (this.attendeeButtonIsDisplayed() === true) {
      this.attendeeButton.moveTo();
      this.attendeeButton.click();

    } else {
      throw new Error("ATTENDEE BUTTON IS NOT DISPLAYED");
    }
  }

  validateAttendeeDetails(name, emailAddress) {
    var actName = $(".--label-attendee.title").getText();
    var actEmail = $("div:nth-of-type(2) > .PeopleItem-container > .PeopleItem__content > .email.subtitle").getText();
    if (actName.includes(name) && actEmail.includes(emailAddress)) {
      console.log("attendee's name and email address matched");
    } else {

      throw new Error("attendee's details missmatched..actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
    }
  }

  hostUnderAdminEvantsIsDisplayed() {
    $(".admin-role-tag.host").waitForDisplayed({ timeout: 10000 });
    return $(".admin-role-tag.host").isDisplayed();
  }
  validateHostDetails(userid) {
    var actEmail = $("div:nth-of-type(1) > .PeopleItem-container > .PeopleItem__content > .email.subtitle").getText();
    if (actEmail.includes(userid)) {
      console.log("host's name and email address matched");
    } else {
      console.log("actual email address>>" + actEmail + "expected email>>" + userid);
      throw new Error("host's details missmatched");
    }
  }

  clickOnSessionOptionDropDown() {
    this.sessionDropDown.waitForDisplayed({ timeout: 10000 });
    if (this.sessionDropDown.isDisplayed() === true) {
      this.sessionDropDown.click();
    } else {
      throw new Error("SESSION DROPDOWN IS NOT DISPLAYED");
    }
  }


  copyJoinLinkIsDisplayed() {
    this.copyJoinLinkButton.waitForDisplayed({ timeout: 50000 });
    return this.copyJoinLinkButton.isDisplayed();
  }

  clickOnCopyJoinLinkButton() {
    if (this.copyJoinLinkIsDisplayed() === true) {
      this.copyJoinLinkButton.click();
    } else {
      throw new Error("COPY JOIN LINK BUTTON IS NOT DISPLAYED");
    }
  }

  openJoinRoomLink() {
    this.nameField.click();
    browser.keys(['Control', 'v']);
    var urlValue = this.nameField.getAttribute("value");
    super.openUrlInNewTab(urlValue);
    super.switchToWindowNewTab();
    browser.pause(2000);

  }

  openJoinRoomLinkInSecondTab() {
    this.nameField.click();
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    browser.keys(['Control', 'v']);
    var urlValue = this.nameField.getAttribute("value");
    browser.createWindow("tab");
    browser.pause(1000);
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    browser.switchToWindow(handle[2]);
    browser.url(urlValue);
  }

  validatePresenterDetails(name, emailAddress) {
    var actName = $(".--label-presenter.title").getText();
    var actEmail = $(".email.subtitle").getText();
    if (actName.includes(name) && actEmail.includes(emailAddress)) {
      console.log("Presenter's name and email address matched");
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
      throw new Error("Presenter's details missmatched");
    }
  }

  validateModeratorDetails(name, emailAddress) {
    var actName = $(".--label-moderator.title").getText();
    var actEmail = $(".email.subtitle").getText();
    if (actName.includes(name) && actEmail.includes(emailAddress)) {
      console.log("Moderator's name and email address matched");
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
      throw new Error("Moderator's details missmatched");
    }
  }

  sessionTimerIsDisplayed() {
    this.sessionTimer.waitForDisplayed({ timeout: 10000 });
    return this.sessionTimer.isDisplayed();
  }

  attendeeMenuButtonIsDisplayed() {
    this.attendeeMenueButton.waitForDisplayed({ timeout: 50000 });
    return this.attendeeMenueButton.isDisplayed();
  }
  clickOnAttendeeMenuButton() {
    if (this.attendeeMenuButtonIsDisplayed() === true) {
      this.attendeeMenueButton.click();
    } else {
      throw new Error("attendee menu button is not displayed under list");
    }
  }

  banAttendeeButtonIsDisplayed() {
    this.banAttendeeButton.waitForDisplayed({ timeout: 10000 });
    return this.banAttendeeButton.isDisplayed();
  }
  clickOnBanAttendeeButton() {
    if (this.banAttendeeButtonIsDisplayed() === true) {
      this.banAttendeeButton.click();
    } else {
      throw new Error("ban attendee button is displayed under list");
    }
  }

  validateRemovedUserPageTitle(title) {
    $(".misc-page-title").waitForDisplayed({ timeout: 30000 });
    var actTitle = $(".misc-page-title").getText();
    if (actTitle.includes(title)) {
      console.log("user successfully removed");
    } else {

      throw new Error("failed to remove attendee ... actual title>>" + actTitle + "Expected title>>" + title);
    }
  }

  pollOptionIsDispalyed() {
    this.pollOption.waitForDisplayed({ timeout: 10000 });
    return this.pollOption.isDisplayed();

  }

  handoutOptionIsDispalyed() {
    this.handoutOption.waitForDisplayed({ timeout: 6000 });
    return this.handoutOption.isDisplayed();
  }

  featuredActionOptionIsDispaly() {
    this.featuredActionOption.waitForDisplayed({ timeout: 6000 });
    return this.featuredActionOption.isDisplayed();
  }

  clickOnPollOption() {
    if (this.pollOptionIsDispalyed() === true) {
      this.pollOption.click();
    } else {
      throw new Error("POLL OPTION IS NOT DISPLAYED");
    }
  }
  clickOnHandoutOption() {
    if (this.handoutOptionIsDispalyed() === true) {
      this.handoutOption.click();
    } else {
      throw new Error("HANDOUT OPTION IS NOT DISPLAYED");
    }
  }
  clickOnFeaturedActionOption() {
    if (this.featuredActionOptionIsDispaly() === true) {
      this.featuredActionOption.click();
    } else {
      throw new Error("FEATURED ACTION OPTION IS NOT DISPLAYED");
    }
  }

  questionFieldIsDisplayed() {
    this.questionField.waitForDisplayed({ timeout: 10000 });
    return this.questionField.isDisplayed();
  }

  option1FieldIsDisplayed() {
    this.option1Field.waitForDisplayed({ timeout: 10000 });
    return this.option1Field.isDisplayed();
  }

  option2FieldIsDisplayed() {
    this.option2Field.waitForDisplayed({ timeout: 10000 });
    return this.option2Field.isDisplayed();
  }
  addQuestionField(question) {
    if (this.questionFieldIsDisplayed() === true) {
      this.questionField.setValue(question);
    } else {
      throw new Error("Question field is not displayed");
    }
  }

  addOption1Field(option1) {
    if (this.questionFieldIsDisplayed() === true) {
      this.option1Field.setValue(option1);
    } else {
      throw new Error("Option1 field is not displayed");
    }

  }

  addOption2Field(option2) {
    if (this.questionFieldIsDisplayed() === true) {
      this.option2Field.setValue(option2);
    } else {
      throw new Error("Option2 field is not displayed");
    }

  }

  saveResourceButtonIsDisplayed() {
    this.saveResourceButton.waitForDisplayed({ timeout: 1000 });
    return this.saveResourceButton.isDisplayed();
  }
  clickOnSaveResourceButton() {
    if (this.saveResourceButtonIsDisplayed() === true) {
      this.saveResourceButton.click();
    } else {
      throw new Error("save resource button is not displayed");
    }
  }

  validateAddedChatResource(question) {
    var actItem = $(".chat-resource-item-name").getText();
    if (actItem.includes(question)) {
      console.log("Resource successfully added");
    } else {
      console.log("actual item name>>" + actItem + "Expected item name>>" + question);
      throw new Error("new added resource name missmateched");
    }
  }

  pollsOptionIsDispalyed() {
    this.pollsOption.waitForDisplayed({ timeout: 30000 });
    return this.pollOption.isDisplayed();
  }
  clickOnPollsOption() {
    browser.pause(2000);
    if (this.pollsOption.isDisplayed() === true) {
      this.pollsOption.click();
    } else {
      throw new Error("polls option is not displayed");
    }
  }

  validatePollQuestionOnAttendeeScreen(question) {
    $("//div[contains(text(),'" + question + "')]").waitForDisplayed({ timeout: 10000 });
    const actQuestion = $("//div[contains(text(),'" + question + "')]");
    if (actQuestion.isDisplayed() === true) {
      console.log("poll question is matched on user screen");
    } else {

      throw new Error("poll question missmatched on attendee's screen actual question>>" + actQuestion + "expected question>>" + question);
    }
  }



  validatePollOptionsOnAttendeeScreen(option1, option2) {
    const actOption1 = $("//div[contains(text(),'" + option1 + "')]");
    const actOption2 = $("//div[contains(text(),'" + option2 + "')]");
    if (actOption1.isDisplayed() == true && actOption2.isDisplayed() === true) {
      console.log("Poll options matched");
    } else {
      console.log("actual option1>>" + actOption1 + "expected option1>>" + option1 + "actual option2>>" + actOption2 + "expected option2>>" + option2);
      throw new Error("poll options missmatched on attendee's screen");
    }
  }

  handoutTitleFieldIsDisplay() {
    this.handoutTitleField.waitForDisplayed({ timeout: 60000 });
    return this.handoutTitleField.isDisplayed();
  }


  addHandoutTitleData(title) {
    if (this.handoutTitleFieldIsDisplay() === true) {
      this.handoutTitleField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.handoutTitleField.setValue(title);
    } else {
      throw new Error("HANDOUT TILE FIELD IS NOT DISPALYED");
    }
  }

  handoutsOptionIsDispalyed() {
    this.handoutsOption.waitForDisplayed({ timeout: 30000 });
    return this.handoutsOption.isDisplayed();
  }
  clickOnHandoutsOption() {
    if (this.handoutsOption.isDisplayed() === true) {
      this.handoutsOption.click();
    } else {
      throw new Error("handouts option is not displayed");
    }
  }
  validateHandoutOnAttendeeScreen(title) {
    browser.pause(2000);
    var actTitle = $("(//div[contains(text(),'" + title + "')])[1]");
    if (actTitle.isDisplayed() === true) {
      console.log("Handout title is matched on user screen");
    } else {
      throw new Error("Handout title missmatched on attendee's screen ..actual title>>" + actTitle + "expected title>>" + title);
    }
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

  clickOnHandoutsOption() {
    this.handoutsOption.waitForDisplayed({ timeout: 30000 })
    if (this.handoutsOption.isDisplayed() === true) {
      this.handoutsOption.click();
    } else {
      throw new Error("handouts option is not displayed");
    }
  }

  validateFeaturedTitleOnAttendeeScreen(title) {
    $(".featured-action-widget-button > div").waitForDisplayed({ timeout: 10000 });
    var actTitle = $(".featured-action-widget-button > div").getText();
    if (actTitle.includes(title)) {
      console.log("featured action title matched on attendee's screen");
    } else {
      throw new Error("Featured action title missmatched on attendee's screen actual title>>" + actTitle + "expected title>>" + title);
    }
  }

  validateButtonTextOnAttendeeScreen(buttonText) {
    browser.pause(3000);
    $(".featured-action-button").waitForDisplayed({ timeout: 20000 });
    var actText = $(".featured-action-button").getText();
    if (actText.includes(buttonText)) {
      console.log("featured action button text matched on attendee's screen");
    } else {
      throw new Error("Featured action button text missmatched on attendee's screen actual text>>" + actText + "expected text>>" + buttonText);
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

  sharedVideoIsDispalyed() {
    $(".inline-video-viewer").waitForDisplayed({ timeout: 10000 });
    return $(".inline-video-viewer").isDisplayed();
  }

  chatTextAreaIsDisplayed() {
    this.chatTextArea.waitForDisplayed({ timeout: 10000 });
    return this.chatTextArea.isDisplayed();
  }

  enterDataInChatTextArea(message) {
    if (this.chatTextAreaIsDisplayed() === true) {
      this.chatTextArea.setValue(message);
      browser.pause(1000);
      browser.keys(['Meta', 'Enter']);
      browser.pause(1000);
    } else {
      throw new Error("Chat text area is not displayed");
    }
  }

  validateMessageInChatWindow(message) {
    browser.pause(2000);
    const messageInChatWindow = $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]")
    messageInChatWindow.waitForDisplayed({ timeout: 30000 });
    var actMessage = messageInChatWindow.getText();
    if (actMessage.includes(message)) {
      console.log("Message is successfully displayed in chat window");
    } else {
      throw new Error("MESSAGE MISSMATCHED IN CHAT WINDOW  actual message>>" + actMessage + "expected message>>" + message);
    }
  }

  validateReceivedMessage(message) {
    browser.pause(5000);
    this.messageInChatWindow.waitForDisplayed({ timeout: 10000 });
    var actMessage = this.messageInChatWindow.getText();
    if (actMessage.includes(message)) {
      console.log("Message is successfully received");
    } else {
      console.log("actual message>>" + actMessage + "expected message>>" + message);
      throw new Error("USER FAILED TO RECEIVE MESSAGE");
    }
  }

  deleteMessageButtonIsDisplayed() {
    $(".Linkify").scrollIntoView();
    $(".Linkify").moveTo();
    this.deleteMessageButton.scrollIntoView();
    this.deleteMessageButton.moveTo();
    return this.deleteMessageButton.isDisplayed();
  }

  clickOnDeleteMessageButton() {
    if (this.deleteMessageButtonIsDisplayed() === true) {
      this.deleteMessageButton.click();
    } else {
      throw new Error("DELETE MESSAGE BUTTON IS NOT DISPLAYED");
    }

  }
  yesDeleteButtonIsDisplayed() {
    this.yesDeleteButton.waitForDisplayed();
    return this.yesDeleteButton.isDisplayed();
  }

  clickOnYesDeleteButton() {
    if (this.yesDeleteButtonIsDisplayed() === true) {
      this.yesDeleteButton.click();
    } else {
      throw new Error("YES DELETE BUTTON IS NOT DISPLAYED");
    }

  }

  messageInChatWindowIsDispalyed() {
    return this.messageInChatWindow.isDisplayed();
  }
  validateDeletedMessage() {
    browser.pause(3000);
    if (this.messageInChatWindow.isDisplayed() === true) {
      throw new Error("Delete message functionality is not working")
    } else {
      console.log("message is successfully deleted from chat window")
    }
  }
  regiregisterMultipleUsers(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.registerMultipleUsers(name, email);

    }

  }
  switchToJoinWindow() {
    super.switchToWindowNewTab();

  }

  registerMultipleUsers(name, email) {
    this.openSessionOptionsList();
    this.clickOnViewRegistrationPage();
    super.switchToWindowNewTab();
    browser.pause(1000);
    // const elem = $('.white-block-message');
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


  attendEventWithMultipleUsers(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.registerAndAttendMultipleUsers(name, email);
    }

  }

  eventIsNotReadyMessageIsDisplayed() {
    const elem = $('.white-block-message');
    return elem.isDisplayed();

  }
  registerAndAttendMultipleUsers(name, email) {
    this.openSessionOptionsList();
    this.clickOnViewRegistrationPage();
    super.switchToWindowNewTab();

    browser.pause(1000);
    // const elem = $('.white-block-message');
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
        this.clickOnJoinRoomBtnUnderJoin();
        browser.pause(5000);
        if (this.handoutsButton.isDisplayed() === true) {
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
  clickOnJoinNowButton() {
    if (this.joinNowButtonIsDisplayed() === true) {
      this.joinNowButton.click();
    } else {
      throw new Error('Something went worng with join now button');
    }
  }

  joinNowButtonIsDisplayed() {

    this.joinNowButton.waitForDisplayed({ timeout: 30000 });
    return this.joinNowButton.isDisplayed();
  }

  joinRoomBtnUnderJoinIsDisplayed() {
    this.joinRoomBtnUnderJoin.waitForDisplayed({ timeout: 50000 })
    return this.joinRoomBtnUnderJoin.isDisplayed();
  }

  clickOnJoinRoomBtnUnderJoin() {
    if (this.joinRoomBtnUnderJoinIsDisplayed() === true) {
      this.joinRoomBtnUnderJoin.click();
    } else {
      throw new Error("join room button is not displayed under join window");
    }
  }

  sessionTimeIsDisplayed() {
    this.sessionTime.waitForDisplayed({ timeout: 10000 });
    return this.sessionTime.isDisplayed();
  }

  sessionOptionsButtonIsDisplay() {
    this.sessionOptionsDropDown.waitForDisplayed({ timeout: 8000 });
    return this.sessionOptionsDropDown.isDisplayed();

  }
  openSessionOptionsList() {
    this.sessionOptionsDropDown.waitForDisplayed({ timeout: 10000 });
    this.sessionOptionsDropDown.scrollIntoView();
    if (this.sessionOptionsButtonIsDisplay() === true) {
      this.sessionOptionsDropDown.click();
      browser.pause(2000);
    } else {
      throw new Error("DROP DOWN BUTTON IS NOT DISPALY");
    }
  }


  clickOnViewRegistrationPage() {
    this.viewRegistrationPage.waitForDisplayed({ timeout: 30000 });
    if (this.viewRegistrationPageIsDisplay() === true) {
      this.viewRegistrationPage.click();
      browser.pause(2000);
    } else {
      throw new Error("VIEW REGISTRATION PAGE OPTION IS NOT DISPLAYED");
    }
  }

  viewRegistrationPageIsDisplay() {
    return this.viewRegistrationPage.isDisplayed();
  }

  downloadResourceWithMultipleUsers(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.attendAndDownloadResouceMultipleUsers(name, email);
    }

  }
  attendAndDownloadResouceMultipleUsers(name, email) {
    this.openSessionOptionsList();
    this.clickOnViewRegistrationPage();
    super.switchToWindowNewTab();
    browser.pause(1000);
    // const elem = $('.white-block-message');
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
        this.clickOnJoinRoomBtnUnderJoin();
        browser.pause(5000);
        this.clickOnHandoutsButton();
        this.clickOnResourceDownloadButton();
        if (this.handoutsButton.isDisplayed() === true) {
          console.log("Session started")
        } else {
          console.log('Session is not started');
        }

        if (handles.length > 1) {
          var handle = browser.getWindowHandles();
          browser.switchToWindow(handle[2]);
          browser.closeWindow();
          browser.pause(3000);
          browser.switchToWindow(handle[1]);
          browser.closeWindow();
          browser.pause(100);
          browser.switchToWindow(handle[0]);
        }
        break;
      }

      i++;

    } while (i <= length);

  }


  clickOnHandoutsButton() {
    if (this.handoutsButton.isDisplayed() === true) {
      this.handoutsButton.click();
      browser.pause(1000);
    } else {
      throw new Error("HANDOUTS BUTTON IS NOT DISPLAYED");
    }
  }

  clickOnResourceDownloadButton() {
    this.downloadButton.waitForDisplayed({ timeout: 10000 });
    if (this.downloadButton.isDisplayed() === true) {
      this.downloadButton.click();
      browser.pause(1000);
    } else {
      throw new Error("DOWNLOAD BUTTON IS NOT DISPLAYED");
    }
  }

  validateHandoutResult(downloadCount) {
    $("//div[contains(text(),'handouts')]|//button[contains(text(),'handouts')]").waitForDisplayed({ timeout: 10000 });
    $("//div[contains(text(),'handouts')]|//button[contains(text(),'handouts')]").click();
    browser.pause(1000);
    var actClick = $("//div[@class='chat-handout-total']").getText();
    if (actClick.includes(downloadCount)) {
      console.log("Handout result matched");
    } else {
      throw new Error("Handout result missmatched actual clicks>>" + actClick + "expected clicks>>" + downloadCount);
    }
  }

  validatePollResult(downloadCount) {
    $("//div[contains(text(),'polls')]|//button[contains(text(),'polls')]").waitForDisplayed({ timeout: 10000 });
    $("//div[contains(text(),'polls')]|//button[contains(text(),'polls')]").click();
    browser.pause(1000);
    var actClick = $("//div[@class='chat-poll-total']").getText();
    if (actClick.includes(downloadCount)) {
      console.log("Poll result matched");
    } else {
      throw new Error("Poll result missmatched actual clicks>>" + actClick + "expected clicks>>" + downloadCount);
    }
  }

  validateFeatureActionsResult(downloadCount) {
    var actClick = $("//div[@class='featured-action-info']").getText();
    if (actClick.includes(downloadCount)) {
      console.log("Featurw action result matched");
    } else {
      throw new Error("Featurw action result missmatched actual clicks>>" + actClick + "expected clicks>>" + downloadCount);
    }
  }


  selectPollOption1(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.selectOption1(name, email);
    }

  }
  selectOption1(name, email) {
    this.openSessionOptionsList();
    this.clickOnViewRegistrationPage();
    super.switchToWindowNewTab();
    browser.pause(1000);
    // const elem = $('.white-block-message');
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
        this.clickOnJoinRoomBtnUnderJoin();
        browser.pause(5000);
        this.clickOnPollsButton();
        this.clickOnPollOption1();
        if (this.pollsButton.isDisplayed() === true) {
          console.log("Session started")
        } else {
          console.log('Session is not started');
        }

        if (handles.length > 1) {
          var handle = browser.getWindowHandles();
          browser.closeWindow();
          browser.pause(100);
          browser.switchToWindow(handle[0]);
        }
        break;
      }

      i++;

    } while (i <= length);

  }

  selectPollOption2(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.selectOption2(name, email);
    }

  }
  selectOption2(name, email) {
    this.openSessionOptionsList();
    this.clickOnViewRegistrationPage();
    super.switchToWindowNewTab();
    browser.pause(1000);
    // const elem = $('.white-block-message');
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
        this.clickOnJoinRoomBtnUnderJoin();
        browser.pause(5000);
        this.clickOnPollsButton();
        this.clickOnPollOption2();
        if (this.pollsButton.isDisplayed() === true) {
          console.log("Session started")
        } else {
          console.log('Session is not started');
        }

        if (handles.length > 1) {
          var handle = browser.getWindowHandles();
          browser.closeWindow();
          browser.pause(100);
          browser.switchToWindow(handle[0]);
        }
        break;
      }

      i++;

    } while (i <= length);

  }

  clickOnPollsButton() {
    this.pollsButton.waitForDisplayed({timeout:30000});
    if (this.pollsButton.isDisplayed() === true) {
      this.pollsButton.click();
      browser.pause(1000);
    } else {
      throw new Error("POLLS BUTTON IS NOT DISPLAYED");
    }
  }

  pollOption1IsDisplayed() {
    this.pollsOption1.waitForDisplayed({ timeout: 10000 });
    return this.pollsOption1.isDisplayed();
  }
  clickOnPollOption1() {
    if (this.pollsOption1.isDisplayed() === true) {
      this.pollsOption1.click();
      browser.pause(1000);
    } else {
      throw new Error("POLL OPTION 1 IS NOT DISPLAYED");
    }
  }

  pollOption2IsDisplayed() {
    this.pollsOption2.waitForDisplayed({ timeout: 10000 });
    return this.pollsOption2.isDisplayed();
  }
  clickOnPollOption2() {
    if (this.pollsOption2.isDisplayed() === true) {
      this.pollsOption2.click();
      browser.pause(1000);
    } else {
      throw new Error("POLL OPTION 2 IS NOT DISPLAYED");
    }
  }

  validateOption1Result(selectOption1) {
    $(".chat-header-left > div:nth-of-type(2)").waitForDisplayed({ timeout: 10000 });
    $(".chat-header-left > div:nth-of-type(2)").click();
    const answerCount = $("div:nth-of-type(1) > .chat-poll-answer-top > .chat-poll-answer-percent > span");
    var actClicks = answerCount.getText();
    var actClickCount = actClicks.replace(" answer", "").replace("s", "").replace(" - ", "");
    if (actClickCount.includes(selectOption1)) {
      console.log("Poll option1 result matched");
    } else {
      console.log("actual clicks>>" + actClickCount + "expected clicks>>" + selectOption1);
      throw new Error("Poll option1 result missmatched");
    }
  }

  validateOption2Result(selectOption2) {

    const answerCount = $("div:nth-of-type(2) > .chat-poll-answer-top > .chat-poll-answer-percent > span");
    var actClicks = answerCount.getText();
    var actClickCount = actClicks.replace(" answer", "").replace("s", "").replace(" - ", "");
    if (actClickCount.includes(selectOption2)) {
      console.log("Poll option2 result matched");
    } else {
      console.log("actual clicks>>" + actClickCount + "expected clicks>>" + selectOption2);
      throw new Error("Poll option2 result missmatched");
    }
  }

  validateTotalPollResult(selectOption1, selectOption2) {
    var firstPer = $("div:nth-of-type(1) > progress").getAttribute("value");
    var secondPer = $("div:nth-of-type(2) > progress").getAttribute("value");
    var firstResult = parseInt(firstPer);
    var secondResult = parseInt(secondPer);
    var expTotalPer = firstResult + secondResult;
    var expectedClicks = parseInt(selectOption1) + parseInt(selectOption2);
    var totalResult = $(".chat-poll-total").getText();
    if (totalResult.includes(expTotalPer) && totalResult.includes(expectedClicks)) {
      console.log("poll result is matched");
    } else {
      console.log("actual answers>>" + totalResult + "expected result>>" + expectedClicks + "expected percentage>>" + expTotalPer);
      throw new Error("Poll result missmatched..!!");
    }
  }

  moveToMessageInChatWindow() {
    this.messageInChatWindow.moveTo();
  }

  markAsQuestionOptionIsDisplayed() {
    this.markAsQuestionOption.moveTo();
    this.markAsQuestionOption.waitForDisplayed({ timeout: 10000 });
    return this.markAsQuestionOption.isDisplayed();
  }

  clickOnMarkAsQuestion() {
    if (this.markAsQuestionOptionIsDisplayed() === true) {
      this.markAsQuestionOption.click();
    } else {
      throw new Error("MARK AS A QUESTION OPTION IS NOT DISPLAYED");
    }
  }

  chatQuestionOptionIsDisplayed() {
    browser.pause(3000);
    return $(".chat-message-private").isDisplayed();
  }
  chatQuestionThreeDotsIsDisplayed() {
    this.chatQuestionThreeDots.waitForDisplayed({ timeout: 10000 });
    return this.chatQuestionThreeDots.isDisplayed();
  }

  clickOnChatQuestionThreeDots() {
    if (this.chatQuestionThreeDotsIsDisplayed() === true) {
      this.chatQuestionThreeDots.click();
    } else {
      throw new Error("Chat question option three dots are not displayed")
    }
  }

  unMarkAsQuestionOptionIsDisplayed() {
    this.unMarkAsQuestionOption.waitForDisplayed({ timeout: 10000 });
    return this.unMarkAsQuestionOption.isDisplayed();
  }
  clickOnUnMarkAsQuestion() {
    if (this.unMarkAsQuestionOptionIsDisplayed() === true) {
      this.unMarkAsQuestionOption.click();
    } else {
      throw new Error("unmark as question option is not displayed");
    }
  }

  answerLiveOptionIsDisplayed() {
    this.answerLiveOption.waitForDisplayed({ timeout: 10000 });
    return this.answerLiveOption.isDisplayed();
  }

  clickOnAnswerLiveOption() {
    if (this.answerLiveOptionIsDisplayed() === true) {
      this.answerLiveOption.click();
    } else {
      throw new Error("Answer live option is not displayed");
    }
  }

  finishAnsweringButtonIsDisplayed() {
    this.finishAnsweringButton.waitForDisplayed({ timeout: 10000 });
    return this.finishAnsweringButton.isDisplayed();
  }

  validateLiveAnswerMessage(message) {
    $(".live-answer-message").waitForDisplayed({ timeout: 10000 });
    var actMessage = $(".live-answer-message").getText();
    if (actMessage.includes(message)) {
      console.log("Live answer message matched");
    } else {
      throw new Error("live answer message missmatched..!! actual message>>" + actMessage + "expected message>>" + message);
    }
  }
  validateQuestionStatus(questionStatus) {
    var actStatus = this.questionStatus.getText();
    if (actStatus.includes(questionStatus)) {
      console.log("Question status matched");
    } else {
      throw new Error("Question status missmatched..!! actual status>>" + actStatus + "Expected Status>>" + questionStatus);

    }
  }

  clickOnFinishAnsweringButton() {
    if (this.finishAnsweringButtonIsDisplayed() === true) {
      this.finishAnsweringButton.click();
    } else {
      throw new Error("finish answering button is not displayed");
    }
  }

  mentionButtonIsDisplayed() {
    this.mentionButton.waitForDisplayed({ timeout: 10000 });
    return this.mentionButton.isDisplayed();
  }

  clickOnMentionButton() {
    if (this.mentionButtonIsDisplayed() === true) {
      this.mentionButton.click();
    } else {
      throw new Error("Mention button is not displayed");
    }
  }

  validateMentionedNameInChatWindow(name) {
    $(".chat-message-mention").waitForDisplayed({ timeout: 10000 });
    var actName = $(".chat-message-mention").getText();
    if (actName.includes(name)) {
      console.log("mentioned attendee's name matched in chat window");
    } else {
      throw new Error("mentioned attendee's name missmatched in chat window actual name>>" + actName + "expected name>>" + name);
    }
  }

  chatQuestionButtonIsDisplayed() {
    this.chatQuestionButton.waitForDisplayed({ timeout: 10000 });
    return this.chatQuestionButton.isDisplayed();
  }

  clickOnChatQuestionButton() {
    if (this.chatQuestionButtonIsDisplayed() === true) {
      this.chatQuestionButton.click();
    } else {
      throw new Error("chat question button is not displayed");
    }
  }

  registerMoreThanOneUsers(name, email) {

    const elem = $('.white-block-message');
    const handles = browser.getWindowHandles();
    var rNo = Math.floor(Math.random() * 100);
    var uName = name + rNo;
    //var emailAddress = email + rNo;
    var emailAddress = email.replace("@gmail.com", uName + "@gmail.com");
    this.fillRegistrationNameField(uName);
    browser.pause(1000);
    this.fillRegistrationEmailField(emailAddress);
    browser.pause(1000);
    this.clickOnJoinNowButton();
    browser.pause(4000);
    var actURL = browser.getUrl();
    browser.url(actURL + "?skip");
    this.clickOnJoinRoomBtnUnderJoin();
    browser.pause(5000);
    this.clickOnOpenChatButton();
  }

  chatMessageTypeButtonIsDisplayed() {
    this.chatMessageTypeButton.waitForDisplayed({ timeout: 10000 });
    return this.chatMessageTypeButton.isDisplayed();
  }

  clickOnchatMessageTypeButton() {
    if (this.chatMessageTypeButtonIsDisplayed() === true) {
      this.chatMessageTypeButton.click();
    } else {
      throw new Error("chat Message Type button is not displayed");
    }
  }

  privateChatOptionIsDisplayed() {
    this.privateChatOption.waitForDisplayed({ timeout: 10000 });
    return this.privateChatOption.isDisplayed();
  }
  selectPrivateOption() {
    if (this.privateChatOptionIsDisplayed() === true) {
      this.privateChatOption.click();
    } else {
      throw new Error("private Chat Option is not displayed");
    }
  }

  validatePrivateMessage(message) {
    const privateMessage = $("//span[contains(text(),'" + message + "')]|//div[contains(text(),'" + message + "')]");
    if (privateMessage.isDisplayed() === false) {
      console.log("Private chat option is working");
    } else {
      throw new Error("Private message still displayed on other attendee'a screen");
    }
  }

  publicChatOptionIsDisplayed() {
    this.publicChatOption.waitForDisplayed({ timeout: 10000 });
    return this.publicChatOption.isDisplayed();
  }
  selectPublicOption() {
    if (this.publicChatOptionIsDisplayed() === true) {
      this.publicChatOption.click();
    } else {
      throw new Error("Public Chat Option is not displayed");
    }
  }


  validatePublicMessage(message) {
    browser.pause(1000);
    const publicMessage = $("//span[contains(text(),'" + message + "')]|//div[contains(text(),'" + message + "')]");
    publicMessage.waitForDisplayed({ timeout: 10000 });
    if (publicMessage.isDisplayed() === true) {
      console.log("Public chat option is working");
    } else {
      throw new Error("Public message still not displayed on other attendee'a screen");
    }
  }

  chatMentionsButtonIsDisplayed() {
    this.chatQuestionButton.waitForDisplayed({ timeout: 10000 });
    return this.chatMentionsButton.isDisplayed();
  }

  clickOnChatMentionsButton() {
    if (this.chatMentionsButtonIsDisplayed() === true) {
      this.chatMentionsButton.click();
    } else {
      throw new Error("chat mentions button is not displaying");
    }
  }
  messageIsDisplayed(message) {
    const receivedMessage = $("//span[contains(text(),'" + message + "')]|//div[contains(text(),'" + message + "')]");
    return receivedMessage.isDisplayed();
  }

  adminsTabIsDisplayed() {
    this.adminsTab.waitForDisplayed({ timeout: 10000 });
    return this.adminsTab.isDisplayed();
  }

  clicksOnAdminsTab() {
    if (this.adminsTabIsDisplayed() === true) {
      this.adminsTab.scrollIntoView();
      this.adminsTab.click();
    } else {
      throw new Error("Admins tab is not displayed");
    }
  }

  fullScreenOptionIsDisplayed() {
    this.fullScreenOption.waitForDisplayed({ timeout: 10000 });
    return this.fullScreenOption.isDisplayed();
  }

  clickOnFullScreenOption() {
    if (this.fullScreenOptionIsDisplayed() === true) {
      this.fullScreenOption.click();
      browser.pause(3000);
    } else {
      throw new Error("full screen option is not displayed");
    }
  }

  validateMaximizedWindow() {
    // const minimizeOption = $(".di-minimize");
    // if (minimizeOption.isDisplayed() === true) {
    //   console.log("Full screen option is working");
    // } else {
    //   throw new Error("Full screen option is not working");
    // }
    var actPath = $(".header-controls-right > div:nth-of-type(2) > .demio-icon>path").getAttribute("d");
    this.clickOnFullScreenOption();
    var expPath = $(".header-controls-right > div:nth-of-type(2) > .demio-icon>path").getAttribute("d");
    if (actPath.includes(expPath)) {
      throw new Error("Full screen option is not working in meeting room ");
    } else {
      console.log("full screen option is working under meeting room screen");
    }
  }

  hideChatOptionIsDisplayed() {
    this.hideChatOption.waitForDisplayed({ timeout: 10000 });
    return this.hideChatOption.isDisplayed();
  }

  clickOnHideChatOption() {
    if (this.hideChatOptionIsDisplayed() === true) {
      this.hideChatOption.click();
    } else {
      throw new Error("full screen option is not displayed");
    }
  }
  validateMinimizedChatPanel(minimizedPanelClass) {
    browser.pause(3000);
    var actClass = $(".--isnot-ios.chat-feature-admin-tab.chat-rebuild-container").getAttribute("class");
    if (actClass.includes(minimizedPanelClass)) {
      console.log("hide chat option is working");
    } else {
      throw new Error("hide chat option is not working actual class>>" + actClass + "expected class>>" + minimizedPanelClass);
    }
  }
  validateMinimizedChatPanelForStaging(minimizedPanelClass) {
    browser.pause(3000);
    var actClass = $(".--isnot-ios.chat-feature-admin-tab.chat-rebuild-container").getAttribute("class");
    if (actClass.replace(" --is-admin-chat","").includes(minimizedPanelClass)) {
      console.log("hide chat option is working");
    } else {
      throw new Error("hide chat option is not working actual class>>" + actClass + "expected class>>" + minimizedPanelClass);
    }
  }
  chatHeaderRightArrowIsDisplayed() {
    this.chatHeaderRightArrow.waitForDisplayed({ timeout: 10000 });
    return this.chatHeaderRightArrow.isDisplayed()
  }
  clickOnHeaderRightArrow() {
    if (this.chatHeaderRightArrowIsDisplayed() === true) {
      this.chatHeaderRightArrow.click();
    } else {
      throw new Error("chat Header Right Arrow is not displayed");
    }
  }
  settingsOptionIsDisplayed() {
    this.settingsOption.waitForDisplayed({ timeout: 10000 });
    return this.settingsOption.isDisplayed()
  }
  clickOnSettingsOption() {
    if (this.settingsOptionIsDisplayed() === true) {
      this.settingsOption.click();
    } else {
      throw new Error("Settings option is not displayed");
    }
  }

  settingPopupIsDisplayed() {
    this.settingPopup.waitForDisplayed({ timeout: 10000 });
    return this.settingPopup.isDisplayed();
  }

  validateChatPopup() {
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    try {

      browser.switchToWindow(handle[2]);
      $(".chat-smart-input__control").waitForDisplayed({ timeout: 20000 });
      if ($(".chat-smart-input__control").isDisplayed() === true) {
        console.log("Chat popup is dispalyed successfully");

      } else {
        throw new Error("Chat popup is not displayed");
      }
    } catch (error) {

    }
  }

  videoTimerIsDisplayed() {
    browser.pause(3000);
    this.videoTimer.moveTo();
    this.videoTimer.waitForDisplayed({ timeout: 10000 });
    return this.videoTimer.isDisplayed();
  }

  pauseVideoButtonIsDisplayed() {
    browser.pause(2000);
    this.pauseVideoButton.moveTo();
    this.pauseVideoButton.moveTo();
    this.pauseVideoButton.waitForDisplayed({ timeout: 10000 });
    return this.pauseVideoButton.isDisplayed();
  }

  restartVideoButtonIsDisplayed() {
    this.restartVideoButton.moveTo();
    this.restartVideoButton.waitForDisplayed({ timeout: 10000 });
    return this.restartVideoButton.isDisplayed();
  }

  stopSharingVideoButtonIsDisplayed() {
    this.stopSharingVideoButton.moveTo();
    this.restartVideoButton.moveTo();
    this.stopSharingVideoButton.waitForDisplayed({ timeout: 10000 });
    return this.stopSharingVideoButton.isDisplayed();
  }

  clickOnPauseVideoButton() {
    if (this.pauseVideoButtonIsDisplayed() === true) {
      this.pauseVideoButton.click();
    } else {
      throw new Error("Pause video button is not displaying");
    }
  }


  validatePausedVideo() {
    $("div#inline-video > .inline-video-pause-icon").moveTo();
    if ($("div#inline-video > .inline-video-pause-icon").isDisplayed() === true) {
      console.log("pause video button is working");
    } else {
      throw new Error("Pause video button is not displayed");
    }
  }
  clickOnStopShareVideoButton() {
    if (this.stopSharingVideoButtonIsDisplayed() === true) {
      this.stopSharingVideoButton.click();
    } else {
      throw new Error("Stop share video button is not displaying");
    }
  }

  validateStopedVideo() {
    $("div#stage-user-1").moveTo();
    if ($("div#stage-user-1").isDisplayed() === true) {
      console.log("Stop sharing video button is working");
    } else {
      throw new Error("Stop sharing video button is not displayed");
    }
  }

  clickOnRestartVideoButton() {
    if (this.restartVideoButtonIsDisplayed() === true) {
      this.restartVideoButton.click();
    } else {
      throw new Error("Restart video button is not displaying");
    }
  }

  yesRestartButtonIsDisplayed() {
    this.yesRestartButton.moveTo();
    this.yesRestartButton.waitForDisplayed({ timeout: 10000 });
    return this.yesRestartButton.isDisplayed();
  }

  clickOnYesRestartButton() {
    if (this.yesRestartButtonIsDisplayed() === true) {
      this.yesRestartButton.click();
    } else {
      throw new Error("Yes,Restart button is not displaying");
    }
  }

  validateRestartedVideo() {
    this.clickOnYesRestartButton();
    $("video#DEMIO_inline_video").scrollIntoView();
    if ($("video#DEMIO_inline_video").isDisplayed() === true) {
      browser.pause(2000);
      console.log("restart video button is working");
    } else {
      throw new Error("restart video button is not working");
    }
  }

  stopSharingSlideButtonIsDisplayed() {
    this.stopSharingSlideButton.moveTo();
    this.stopSharingSlideButton.scrollIntoView();
    this.stopSharingSlideButton.waitForDisplayed({ timeout: 10000 });
    this.stopSharingSlideButton.moveTo();
    return this.stopSharingSlideButton.isDisplayed();
  }

  clickOnStopShareSlideButton() {
    if (this.stopSharingSlideButtonIsDisplayed() === true) {
      this.stopSharingSlideButton.moveTo();
      this.stopSharingSlideButton.scrollIntoView();
      this.stopSharingSlideButton.click();
    } else {
      throw new Error("Stop share slide button is not displaying");
    }
  }

  nextSlideButtonIsDisplayed() {
    $("//div[@class='slides']//img").moveTo();
    this.nextSlideButton.scrollIntoView();
    this.nextSlideButton.waitForDisplayed({ timeout: 10000 });
    return this.nextSlideButton.isDisplayed();

  }

  previousSlideButtonIsDisplayed() {
    this.previousSlideButton.moveTo();
    this.previousSlideButton.waitForDisplayed({ timeout: 10000 });
    return this.previousSlideButton.isDisplayed();
  }


  clickOnNextSlideButton() {
    if (this.nextSlideButtonIsDisplayed() === true) {
      this.nextSlideButton.scrollIntoView();
      this.nextSlideButton.click();


    } else {
      throw new Error("Next slide button is not displayed");
    }
  }
  clickOnPreviousSlideButton() {
    if (this.previousSlideButtonIsDisplayed() === true) {
      this.previousSlideButton.click();
    } else {
      throw new Error("Previous slide button is not displayed");
    }
  }
  validateStopedSlide() {
    $("div#stage-user-1").moveTo();
    if ($("div#stage-user-1").isDisplayed() === true) {
      console.log("Stop sharing slide button is working");
    } else {
      throw new Error("Stop sharing slide button is not displayed");
    }
  }

  validateNextSlideFunctionality() {
    const pageCount = $(".slide-control-info");
    var testCount = pageCount.getText();
    var actCount = testCount.slice(0, testCount.length - 4);
    this.clickOnNextSlideButton();
    browser.pause(5000);
    var testCount1 = pageCount.getText();
    var newCount = testCount1.slice(0, testCount1.length - 4);
    var countValue = parseInt(newCount);
    var expCount = parseInt(actCount) + 1;
    if (countValue == expCount) {
      console.log("Next slide button is working");
    } else {
      throw new Error("next slide button is not working actual count>>" + countValue + "expected count>>" + expCount);
    }
  }

  validatePreviousSlideFunctionality() {
    const pageCount = $(".slide-control-info");
    var testCount = pageCount.getText();
    var actCount = testCount.slice(0, testCount.length - 4);
    this.clickOnPreviousSlideButton();
    browser.pause(500);
    var testCount1 = pageCount.getText();
    var newCount = testCount1.slice(0, testCount1.length - 4);
    var countValue = parseInt(newCount);
    var expCount = parseInt(actCount) - 1;
    if (countValue == expCount) {
      console.log("Previous slide button is working");
    } else {
      throw new Error("Previous slide button is not working actual count>>" + countValue + "expected count>>" + expCount);
    }
  }

  shareYourScreenButtonIsDisplayed() {
    this.shareYourScreenButton.waitForDisplayed({ timeout: 10000 });
    return this.shareYourScreenButton.isDisplayed();
  }

  stopSharingButtonIsDisplayed() {
    this.stopSharingButton.waitForDisplayed({ timeout: 10000 });
    return this.stopSharingButton.isDisplayed();
  }

  clickOnSharingOptionsButton() {
    $(".--button-on.admin-controls-button").moveTo();
    $(".--button-on.admin-controls-button").click();
  }

  videoMaterialIsDisplayed() {
    this.videoMaterial.waitForDisplayed({ timeout: 10000 });
    return this.videoMaterial.isDisplayed();
  }
  clickOnVideoMaterial() {
    if (this.videoMaterialIsDisplayed() === true) {
      this.videoMaterial.click();
    } else {
      throw new Error("Video material is not displayed");
    }

  }
  pdfMaterialIsDisplayed() {
    this.pdfMaterial.waitForDisplayed({ timeout: 10000 });
    return this.pdfMaterial.isDisplayed();
  }
  clickOnPdfMaterial() {
    if (this.pdfMaterialIsDisplayed() === true) {
      this.pdfMaterial.click();
    } else {
      throw new Error("PDF material is not displayed");
    }

  }
  validateSharedVideo() {
    $("video#DEMIO_inline_video").waitForDisplayed({ timeout: 20000 });
    if ($("video#DEMIO_inline_video").isDisplayed() === true) {
      console.log("shared video is displaying on screen");
    } else {
      throw new Error("shared video is not displayed on screen");
    }
  }

  goOnStageButtonIsDisplayed() {
    this.goOnStageButton.waitForDisplayed({ timeout: 50000 });
    return this.goOnStageButton.isDisplayed();
  }

  clickOnGoOnStageButton() {
    if (this.goOnStageButtonIsDisplayed() === true) {
      this.goOnStageButton.click();
    } else {
      throw new Error("Go on stage button is not displayed");
    }
  }

  goOnStageJoinSessionButtonIsDispalyed() {
    this.goOnStageJoinSessionButton.waitForDisplayed({ timeout: 10000 });
    return this.goOnStageJoinSessionButton.isDisplayed();
  }
  clickGoOnStageJoinSessionButton() {
    if (this.goOnStageJoinSessionButtonIsDispalyed() === true) {
      this.goOnStageJoinSessionButton.click();
    } else {
      throw new Error("Go on stage button is not dispalyed under join screen");
    }
  }

  leftHeaderSessionTitleIsDispalyed() {
    this.leftHeaderSessionTitle.waitForDisplayed({ timeout: 10000 });
    return this.leftHeaderSessionTitle.isDisplayed();
  }

  clickOnLeftHeaderSessionTitle() {
    if (this.leftHeaderSessionTitleIsDispalyed() === true) {
      this.leftHeaderSessionTitle.moveTo();
      this.leftHeaderSessionTitle.click();
      browser.pause(2000);
    } else {
      throw new Error("Left header session title button is not displayed");
    }
  }
  yesStartButtonIsDispalyed() {
    this.yesStartButton.waitForDisplayed({ timeout: 10000 });
    return this.yesStartButton.isDisplayed();
  }

  clickOnYesStartButton() {
    if (this.yesStartButtonIsDispalyed() === true) {
      this.yesStartButton.click();
      browser.pause(5000);
    } else {
      throw new Error("Yes start button is not displayed");
    }
  }

  yesEndButtonIsDispalyed() {
    this.yesEndButton.waitForDisplayed({ timeout: 10000 });
    return this.yesEndButton.isDisplayed();
  }

  clickOnYesEndButton() {
    if (this.yesEndButtonIsDispalyed() === true) {
      this.yesEndButton.click();
    } else {
      throw new Error("Yes end button is not displayed");
    }
  }

  peopleButtonIsDisplayed() {
    this.peopleButton.waitForDisplayed({ timeout: 30000 });
    return this.peopleButton.isDisplayed();
  }
  clickOnPeopleButton() {
    if (this.peopleButtonIsDisplayed() === true) {
      this.peopleButton.click();
    } else {
      throw new Error("People button is not displayed");
    }
  }

  sharingOptionButtonIsNotDisplayed() {
    const sharingOptionButton = $(".--button-on.--share.--sharing-material.admin-controls-button");
    sharingOptionButton.waitForDisplayed({ timeout: 10000 });
    return sharingOptionButton.isDisplayed();
  }
  clickOnSharingOptionButton() {
    if (this.sharingOptionButtonIsNotDisplayed() === true) {
      $(".--button-on.--share.--sharing-material.admin-controls-button").click();
    } else {
      throw new Error("Sharing option button is not displayed");
    }

  }

  yesShareButtonIsDisplayed() {
    this.yesShareButton.waitForDisplayed({ timeout: 10000 });
    return this.yesShareButton.isDisplayed();
  }

  clickOnYesShareButton() {
    if (this.yesShareButtonIsDisplayed() === true) {
      this.yesShareButton.click();
    } else {
      throw new Error("Yes share button is not displayed");
    }
  }

  chatHeaderTabIsDispalyed() {
    this.chatHeaderTab.waitForDisplayed({ timeout: 10000 });
    return this.chatHeaderTab.isDisplayed();
  }

  sessionPopupIsDispalyed() {
    this.sessionPopup.waitForDisplayed({ timeout: 10000 });
    return this.sessionPopup.isDisplayed();
  }
  endSessionPopupIsDispalyed() {
    this.endSessionPopup.waitForDisplayed({ timeout: 10000 });
    return this.endSessionPopup.isDisplayed();
  }

  goOnStagePopupIsDispalyed() {
    this.goOnStagePopup.waitForDisplayed({ timeout: 10000 });
    return this.goOnStagePopup.isDisplayed();
  }

  videoOptionIsDipslayed() {
    this.videoOption.waitForDisplayed({ timeout: 10000 });
    return this.videoOption.isDisplayed();
  }

  audioOptionIsDisplayed() {
    this.audioOption.waitForDisplayed({ timeout: 10000 });
    return this.audioOption.isDisplayed();
  }

  connectivityOptionIsDisplayed() {
    this.connectivityOption.waitForDisplayed({ timeout: 10000 });
    return this.connectivityOption.isDisplayed();
  }

  noThanksButtonInGoOnStagePopupIsDisplayed() {
    this.noThanksButtonInGoOnStagePopup.waitForDisplayed({ timeout: 10000 });
    return this.noThanksButtonInGoOnStagePopup.isDisplayed();

  }

  clickOnNoThanksButtonInGoStagePopup() {
    if (this.noThanksButtonInGoOnStagePopupIsDisplayed() === true) {
      this.noThanksButtonInGoOnStagePopup.click();
    } else {
      throw new Error("No Thanks, I don't want to go on stage ..button is not displayed in popup");
    }
  }

  stagingMenuBarIsDisplayed() {
    browser.pause(5000)
    return this.stagingMenuBar.isDisplayed();
  }

  getAudioButtonStatus() {
    var status = this.audioOption.getAttribute("aria-checked");
    return status;
  }
  clickOnAudioButton() {
    if (this.audioOptionIsDisplayed() === true) {
      this.audioOption.click();
    } else {
      throw new Error("Audio button is not displayed");
    }
  }
  getVideoButtonStatus() {
    var status = this.videoOption.getAttribute("aria-checked");
    return status;
  }
  clickOnVideoButton() {
    if (this.videoOptionIsDipslayed() === true) {
      this.videoOption.click();
    } else {
      throw new Error("Video button is not displayed");
    }
  }

  inviteOnStageButtonIsDisplayed() {
    this.inviteOnStageButton.waitForDisplayed({ timeout: 10000 });
    return this.inviteOnStageButton.isDisplayed();
  }

  clickOnInviteOnStageButton() {
    if (this.inviteOnStageButtonIsDisplayed() === true) {
      this.inviteOnStageButton.click();
    } else {
      throw new Error("invite on stage button is not displayed");

    }
  }

  // openJoinRoomLinkInSecondTab() {
  //   this.nameField.click();
  //   browser.keys(['Control', 'a']);
  //     browser.keys(['Delete']);
  //     browser.pause(100);
  //   browser.keys(['Control', 'v']);
  //   var urlValue = this.nameField.getAttribute("value");
  //   super.openUrlInNewTab(urlValue);
  //   var handle = browser.getWindowHandles();
  //   browser.switchToWindow(handle[2]);
  //   browser.pause(3000);

  // }
  openJoinRoomLinkInFirstTab() {
    this.nameField.scrollIntoView(0,100);
    this.nameField.click();
    browser.keys(['Control', 'a']);
        browser.keys(['Delete']);
        browser.pause(100);
    browser.keys(['Control', 'v']);
    var urlValue = this.nameField.getAttribute("value");
    super.openUrlInNewTab(urlValue);
    var handle = browser.getWindowHandles();
    browser.switchToWindow(handle[1]);
    browser.pause(3000);

  }
  removeFromStageButtonIsDisplayed() {
    this.removeFromStageButton.waitForDisplayed({ timeout: 10000 });
    return this.removeFromStageButton.isDisplayed();
  }

  clickOnRemoveFromStageButton() {
    if (this.removeFromStageButtonIsDisplayed() === true) {
      this.removeFromStageButton.click();
    } else {
      throw new Error("Remove from stage button is not displayed");
    }
  }
  leaveStageButtonIsDisplayed() {
    this.leaveStageButton.waitForDisplayed({ timeout: 10000 });
    return this.leaveStageButton.isDisplayed();
  }

  clickOnLeaveStageButton() {
    if (this.leaveStageButtonIsDisplayed() === true) {
      this.leaveStageButton.click();
    } else {
      throw new Error("Leave stage button is not displayed");
    }
  }

  firstUserMenuButtonIsDisplayed() {
    this.firstUserMenuButton.waitForDisplayed({ timeout: 10000 });
    return this.firstUserMenuButton.isDisplayed();
  }

  clickFirstUserMenuButton() {


    if (this.firstUserMenuButtonIsDisplayed() === true) {
      this.firstUserMenuButton.click();
    } else {
      throw new Error("First user menu button is not dispalyed");
    }
  }
  secondUserMenuButtonIsDisplayed() {
    this.secondUserMenuButton.waitForDisplayed({ timeout: 10000 });
    return this.secondUserMenuButton.isDisplayed();
  }

  clickSecondUserMenuButton() {
    if (this.secondUserMenuButtonIsDisplayed() === true) {
      this.secondUserMenuButton.click();
    } else {
      throw new Error("second user menu button is not dispalyed");
    }
  }

  leaveStageIconIsDisplayed() {
    this.leaveStageIcon.waitForDisplayed({ timeout: 10000 });
    return this.leaveStageIcon.isDisplayed();
  }
  clickOnLeaveStageIcon() {
    if (this.leaveStageIconIsDisplayed() === true) {
      this.leaveStageIcon.click();
    } else {
      throw new Error("Leave stage icon is not displayed");
    }
  }
  moderatorLeaveStageIconIsDisplayed() {
    this.moderatorLeaveStageIcon.waitForDisplayed({ timeout: 10000 });
    return this.moderatorLeaveStageIcon.isDisplayed();
  }

  clickModeratorLeaveStageIcon() {
    if (this.moderatorLeaveStageIconIsDisplayed() === true) {
      this.moderatorLeaveStageIcon.click();
    } else {
      throw new Error("leave stage icon is not displayed for moderator");
    }
  }

  attendeeLeaveStageIconIsDisplayed() {
    this.attendeeLeaveStageIcon.waitForDisplayed({ timeout: 10000 });
    return this.attendeeLeaveStageIcon.isDisplayed();
  }
  clickAttendeeLeaveStageIcon() {
    if (this.attendeeLeaveStageIconIsDisplayed() === true) {
      this.attendeeLeaveStageIcon.click();
    } else {
      throw new Error("leave stage icon is not displayed for attendee");
    }
  }

  shareScreenOptionIsDisplayed() {
    this.shareScreenOption.waitForDisplayed({ timeout: 10000 });
    return this.shareScreenOption.isDisplayed();
  }

  clickOnShareScreenOption() {
    if (this.shareScreenOptionIsDisplayed() === true) {
      this.shareScreenOption.click();
    } else {
      throw new Error("share screen option is not displayed");
    }
  }

  clickOnCloseSettingPopover() {
    try {
      this.closeSettingPopover.click();
    } catch (error) {

    }
  }
  attendeeGoOnStage(count, name, email) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.attendeesGoOnStage(name, email);
    }

  }


  attendeesGoOnStage(name, email) {
    this.openSessionOptionsList();
    this.clickOnViewRegistrationPage();
    const handles = browser.getWindowHandles();
    browser.switchToWindow(handles[2]);
    // super.switchToWindowNewTab();
    browser.pause(1000);
    const elem = $('.white-block-message');

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
        this.clickOnJoinRoomBtnUnderJoin();
        browser.pause(3000);
        browser.switchToWindow(handles[1]);
        this.clickOnCloseSettingPopover();
        browser.refresh();
        browser.pause(3000);
        this.clickOnJoinRoomBtnUnderJoin();

        this.clickOnPeopleButton();
        browser.pause(5000);
        this.clickSecondUserMenuButton();
        browser.pause(5000);
        this.clickOnInviteOnStageButton();
        browser.switchToWindow(handles[2]);
        browser.pause(5000)
        this.clickGoOnStageJoinSessionButton();


        if (handles.length > 1) {
          browser.switchToWindow(handles[2]);
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

  shareMaterialsButtonIsDisplayed() {
    this.shareMaterialsButton.waitForDisplayed();
    return this.shareMaterialsButton.isDisplayed();
  }

  clickOnShareMaterialButton() {
    if (this.shareMaterialsButtonIsDisplayed() === true) {
      this.shareMaterialsButton.click();
    } else {
      throw new Error("Share material button is not displayed");
    }
  }
  thirdUserMenuButtonIsDisplayed() {
    this.thirdUserMenuButton.waitForDisplayed({ timeout: 10000 });
    return this.thirdUserMenuButton.isDisplayed();
  }

  clickThirdUserMenuButton() {
    if (this.thirdUserMenuButtonIsDisplayed() === true) {
      this.thirdUserMenuButton.click();
    } else {
      throw new Error("third user menu button is not dispalyed");
    }
  }
  fourthUserMenuButtonIsDisplayed() {
    this.fourthUserMenuButton.waitForDisplayed({ timeout: 10000 });
    return this.fourthUserMenuButton.isDisplayed();
  }

  clickFourthUserMenuButton() {
    if (this.fourthUserMenuButtonIsDisplayed() === true) {
      this.fourthUserMenuButton.click();
    } else {
      throw new Error("fourth user menu button is not dispalyed");
    }
  }
  fifthUserMenuButtonIsDisplayed() {
    this.fifthUserMenuButton.waitForDisplayed({ timeout: 10000 });
    return this.fifthUserMenuButton.isDisplayed();
  }

  clickFifthUserMenuButton() {
    if (this.fifthUserMenuButtonIsDisplayed() === true) {
      this.fifthUserMenuButton.scrollIntoView();
      this.fifthUserMenuButton.click();
    } else {
      throw new Error("fourth user menu button is not dispalyed");
    }
  }

  getMessageText() {
    var msg = $("//div[@class='ant-notification-notice-message']").getText();
    return msg;
  }

  stagefullUnderMenuIsDisplayed() {
    const elem = $("//div[@class='menu-item --is-stage-full']");
    elem.waitForDisplayed({ timeout: 10000 });
    return elem.isDisplayed();
  }

  userMenuIconIsDisplayed() {
    this.userMenuIcon.waitForDisplayed({ timeout: 10000 });
    return this.userMenuIcon.isDisplayed();
  }

  clickOnUserMenuIcon() {
    if (this.userMenuIconIsDisplayed() === true) {
      this.userMenuIcon.moveTo();
      this.userMenuIcon.click();
    } else {
      throw new Error("User menu icon isnot displayed");
    }

  }


  enableSpotlightButtonIsDisplayed() {
    this.enableSpotlightButton.waitForDisplayed({ timeout: 10000 });
    return this.enableSpotlightButton.isDisplayed();
  }

  clickOnEnableSpotlightButton() {
    if (this.enableSpotlightButtonIsDisplayed() === true) {
      this.enableSpotlightButton.click();
    } else {
      throw new Error("Enable spotlight button is not displayed");
    }
  }


  waitingScreenIsDisplayed() {
    this.waitingScreen.waitForDisplayed({ timeout: 10000 });
    return this.waitingScreen.isDisplayed();
  }

  addMaterialOptionIsDisplayed() {
    this.addMaterialOption.waitForDisplayed({ timeout: 10000 });
    return this.addMaterialOption.isDisplayed();
  }

  clickOnAddMaterialOption() {
    if (this.addMaterialOptionIsDisplayed() === true) {
      this.addMaterialOption.click();

    } else {
      throw new Error("Add material option is not displayed");

    }
  }

  viewProfileIconIsDisplayed() {
    this.viewProfileIcon.waitForDisplayed({ timeout: 10000 });
    return this.viewProfileIcon.isDisplayed();
  }
  clickonViewProfileIcon() {
    if (this.viewProfileIconIsDisplayed() === true) {
      this.viewProfileIcon.click();
    } else {
      throw new Error("View profile icon is not displayed");
    }
  }
  userProfileInfoIsDisplayed() {
    return this.userProfileInfo.isDisplayed();
  }

  searchBarIsDisplayed() {
    this.searchBar.waitForDisplayed({ timeout: 5000 });
    return this.searchBar.isDisplayed();
  }
  materialListIsDisplayed() {
    this.materialList.waitForDisplayed({ timeout: 10000 });
    return this.materialList.isDisplayed();
  }

  fillDataInSearchBarField(name) {
    if (this.searchBarIsDisplayed() === true) {
      this.searchBar.setValue(name);
    } else {
      throw new Error("Search bar field is not displayed");
    }
  }

  switchToChatPopup() {
    $("((//*[@id='popout-chat']//div[4])[1]//div[2])[1]").waitForDisplayed({ timeout: 10000 });
    return $("((//*[@id='popout-chat']//div[4])[1]//div[2])[1]").isDisplayed();
  }


  //-------Updated new room------//

  clickOnPresenterSessionDropDown() {
    // this.presenterSessionDropDown.moveTo();
    this.presenterSessionDropDown.waitForDisplayed({ timeout: 10000 });
    if (this.presenterSessionDropDown.isDisplayed() === true) {
      this.presenterSessionDropDown.click();
    } else {
      throw new Error("PRESENTER SESSION DROPDOWN IS NOT DISPLAYED");
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

  clickOnHostSessionDropDown() {
    this.hostSessionDropDown.waitForDisplayed({ timeout: 10000 });
    if (this.hostSessionDropDown.isDisplayed() === true) {
      this.hostSessionDropDown.click();
    } else {
      throw new Error("HOST SESSION DROPDOWN IS NOT DISPLAYED");
    }
  }

  openJoinRoomLinkInNewTab() {
    this.nameField.click();
    browser.keys(['Control', 'v']);
    var urlValue = this.nameField.getAttribute("value");
    super.openUrlInNewTab(urlValue);
    var handle = browser.getWindowHandles();
    browser.switchToWindow(handle[1]);
    browser.pause(3000);

  }

  validateAddedPollResource(question) {
    const actItem = $("//div[contains(text(),'" + question + "')]");
    actItem.waitForDisplayed({ timeout: 10000 });
    if (actItem.isDisplayed() === true) {
      console.log("Poll Resource successfully added");
    } else {
      throw new Error("new added poll resource name is not displayed");
    }
  }

  validateAddedHandoutResource(title) {
    const actItem = $("//div[contains(text(),'" + title + "')]");
    actItem.waitForDisplayed({ timeout: 10000 });
    if (actItem.isDisplayed() === true) {
      console.log("Handout Resource successfully added");
    } else {
      throw new Error("new added Handout resource name is not displayed");
    }
  }
  clickOnAddedPollResource(question) {
    $("//div[contains(text(),'" + question + "')]").waitForDisplayed({ timeout: 1000 });
    $("//div[contains(text(),'" + question + "')]").click();
    browser.pause(500);

  }

  clickOnAddedHandoutResource(title) {
    $("//div[contains(text(),'" + title + "')]").waitForDisplayed({ timeout: 1000 });
    $("//div[contains(text(),'" + title + "')]").click();

  }

  clickOnAddedFeaturedResource(title) {
    $("//div[@class='chat-resource-item-info']//div[contains(text(),'" + title + "')]").waitForDisplayed({ timeout: 1000 });
    $("//div[@class='chat-resource-item-info']//div[contains(text(),'" + title + "')]").click();

  }

  validateAddedFeaturedActionResource(title) {
    const actItem = $("//div[@class='chat-resource-item-info']//div[contains(text(),'" + title + "')]");
    actItem.waitForDisplayed({ timeout: 10000 });
    if (actItem.isDisplayed() === true) {
      console.log("Featured Resource successfully added");
    } else {
      throw new Error("new added Featured resource name is not displayed");
    }
  }

  clickOnAttendeePollsOption() {
    this.attendeePollsOption.waitForDisplayed({ timeout: 10000 });
    if (this.attendeePollsOption.isDisplayed() === true) {
      this.attendeePollsOption.click();
    } else {
      throw new Error("polls option is not displayed");
    }
  }

  clickOnAttendeeHandoutOption() {
    this.attendeeHandoutOption.waitForDisplayed({ timeout: 10000 });
    if (this.attendeeHandoutOption.isDisplayed() === true) {
      this.attendeeHandoutOption.click();
    } else {
      throw new Error("HANDOUT OPTION IS NOT DISPLAYED");
    }
  }

  validateHandoutResourceOnAttendeeScreen(title) {
    browser.pause(2000);
    const actTitle = $("//div[contains(text(),'" + title + "')]");
    actTitle.waitForDisplayed({ timeout: 10000 });
    if (actTitle.isDisplayed() === true) {
      console.log("Handout title is matched on user screen");
    } else {
      throw new Error("Handout title not displayed on attendee's screen ");
    }
  }

  validateAddedVideoMaterial(videoName) {
    const actName = $("//div[contains(text(),'" + videoName + "')]");
    actName.waitForDisplayed({ timeout: 40000 });
    actName.scrollIntoView();
    actName.moveTo();
    if (actName.isDisplayed() === true) {
      console.log("added material is displayed under share tab");
    } else {

      throw new Error("added video material is not displayed successfully under share tab actual name>>" + actName + "expected name>>" + name);
    }
  }

  validateAddedSlideMaterial(name) {
    const actName = $("//div[contains(text(),'" + name + "')]");
    actName.waitForDisplayed({ timeout: 30000 });
    actName.scrollIntoView();
    actName.moveTo();
    if (actName.isDisplayed() === true) {
      console.log("added material is displayed under share tab");
    } else {

      throw new Error("added slide material is not displayed successfully under share tab actual name>>" + actName + "expected name>>" + name);
    }
  }

  clickOnAddedMaterial(name) {
    const actName = $("//div[contains(text(),'" + name + "')]");
    actName.waitForDisplayed({ timeout: 35000 });
    actName.click();
  }

  validateMessageInChatSection(message) {
    browser.pause(3000);
    const msg = $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]")
    msg.waitForDisplayed({ timeout: 30000 });
    if (msg.isDisplayed() === true) {
      console.log("Message is successfully displayed in chat window");
    } else {
      throw new Error("MESSAGE MISSMATCHED IN CHAT WINDOW");
    }
  }

  deleteButtonIsDisplayed(message) {
    $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]").scrollIntoView();
    $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]").moveTo();
    var deleteButton = $$("//a[@class='chat-options-button --delete-message']");
    var n = deleteButton.length;
    var deleteButton1 = $("(//a[@class='chat-options-button --delete-message'])[" + n + "]");
    deleteButton1.scrollIntoView();
    deleteButton1.moveTo();
    var deleteMessageButton = $("//a[@class='chat-options-button --delete-message ant-tooltip-open']");
    deleteMessageButton.waitForDisplayed({ timeout: 10000 });
    return deleteMessageButton.isDisplayed();
  }
  clickOnDeleteMessage() {

    const deleteMessageButton = $("//a[@class='chat-options-button --delete-message ant-tooltip-open']");
    deleteMessageButton.click();

  }

  validateDeletedMessageInChatSection(message) {
    browser.pause(3000);
    const msg = $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]")
    if (msg.isDisplayed() === true) {
      throw new Error("Delete message functionality is not working")
    } else {
      console.log("message is successfully deleted from chat window")
    }
  }

  moveToMessage(message) {
    browser.pause(1000);
    $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]").scrollIntoView();
    $("(//span[contains(text(),'" + message + "')])[1]|(//div[contains(text(),'" + message + "')])[1]").moveTo();
    browser.pause(1000);
  }


  clickOnMarkAsQuestionButton() {
    browser.pause(1000);
    var markButton = $$("(//a[@class='chat-options-button --question-message'])");
    var n = markButton.length - 1;
    browser.pause(500);
    try {
      var markButton1 = $("(//a[@class='chat-options-button --question-message'])[" + n + "]");
      markButton1.scrollIntoView();
      markButton1.moveTo();
    } catch (error) {

    }
    var markButton2 = $("(//a[@class='chat-options-button --question-message ant-tooltip-open'])[1]");
    markButton2.click();

  }

  selectPollOption(option1) {
    const option = $("//div[contains(text(),'" + option1 + "')]");
    option.waitForDisplayed({ timeout: 10000 });
    if (option.isDisplayed() === true) {
      option.click();
      browser.pause(3000);
    } else {
      throw new Error("Poll option is not displayed on attendee's screen")
    }
  }

  stageEmptyMessageIsDisplayed() {
    this.stageEmptyMessage.waitForDisplayed({ timeout: 10000 });
    return this.stageEmptyMessage.isDisplayed();
  }

  validateDeletedAllResourcesInRoom() {
    const resourceItem = $("//div[@class='chat-resource-item']");
    if (resourceItem.isDisplayed() === true) {
      console.log("Resources are removerd from meeting room");

    } else {
      throw new Error("Deleted resources are still displaying in room");
    }
  }

  validateEmptyMaterialTitle(title) {
    browser.pause(5000);
    $("//div[@class='empty-list-title']").waitForDisplayed({ timeout: 30000 });
    var actTitle = $("//div[@class='empty-list-title']").getText();

    if (actTitle.includes(title)) {
      console.log("Title matched on screen");

    } else {
      throw new Error("Title missmatched on screen actual title>>" + actTitle + "Expected title>>" + title);
    }
  }

  validateSelectedChatOptionInRoom(option) {
    var actOption = $("//span[@class='chat-messages-type-name --hover']|//span[@class='chat-messages-type-name']").getText();
    if (actOption.includes(option)) {
      console.log("Chat option is matched in room");

    } else {
      throw new Error("Chat option missmateched in room actual option>>" + actOption + "Expected option>>" + option)
    }
  }

  clickOnEditAdminOptionForPresenter() {
    this.editAdminOptionForPresenter.waitForDisplayed({ timeout: 10000 });
    if (this.editAdminOptionForPresenter.isDisplayed() === true) {
      this.editAdminOptionForPresenter.click();
    } else {
      throw new Error("EDIT ADMIN BUTTON IS NOT DISPLAYING FOR PRESENTER");
    }
  }
  clickOnEditAdminOptionForModerator() {
    this.editAdminOptionForModerator.waitForDisplayed({ timeout: 10000 });
    if (this.editAdminOptionForModerator.isDisplayed() === true) {
      this.editAdminOptionForModerator.click();
    } else {
      throw new Error("EDIT ADMIN BUTTON IS NOT DISPLAYING FOR MODERATOR");
    }
  }

  clickOnEditAdminOptionForHost() {
    this.editAdminOptionForHost.waitForDisplayed({ timeout: 10000 });
    if (this.editAdminOptionForHost.isDisplayed() === true) {
      this.editAdminOptionForHost.click();
    } else {
      throw new Error("EDIT ADMIN BUTTON IS NOT DISPLAYING FOR HOST");
    }
  }

  selectRoleForEditAdmin(role) {
    const roleDropdown = $("(//div[@id='role']//div)[2]");
    roleDropdown.click();
    const roleOption = $("(//div[@class='role-select-subtext'])[2]");
    roleOption.moveTo();
    roleOption.click();
  }

  verifyGuestNameUnderPeopleScreen(name) {
    browser.pause(3000);
    const guestName = $("//div[contains(text(),'" + name + "')]");
    guestName.waitForDisplayed({timeout:30000})
    if (guestName.isDisplayed() === true) {
      console.log("guest name is displaying under people tab");

    } else {
      throw new Error("Guest name is not displaying under people screen")
    }
  }

  clickOnFeaturedActionImageButton() {
    this.featuredActionImageButton.waitForDisplayed({ timeout: 10000 });
    if (this.featuredActionImageButton.isDisplayed() === true) {
      this.featuredActionImageButton.click();
     browser.pause(5000);
    } else {
      throw new Error("Featured action image button is not displaying")
    }
  }

  validateSummaryMessageCount(count) {
    var actMessageCount = this.messagesCount.getText();
    if (actMessageCount.includes(count)) {
      console.log("Message count matched under summary tab")
    } else {
      throw new Error("MESSAGE COUNT IS NOT DISPLAYED UNDER SUMMARY TAB ACTUAL COUNT>>" + actMessageCount + "EXPECTED MESSAGE COUNT>>" + count);
    }
  }

  clickOnOpenChatButton() {
    try {
      if ($("//div[@class='chat-messages-type']").isDisplayed() === false) {
        $("(//div[@class='header-controls-right']//div)[5]|//div[@class='header-controls-button chat-button']").click();
        browser.pause(1000);
      } else {
        console.log("Chat screen already open")
      }
    }
    catch (error) {

    }

  }

  clickOnAdminHostSessionDropDown() {
    this.adminHostSessionDropDown.waitForDisplayed({ timeout: 10000 });
    if (this.adminHostSessionDropDown.isDisplayed() === true) {
      this.adminHostSessionDropDown.click();
    } else {
      throw new Error("ADMIN HOST SESSION DROPDOWN IS NOT DISPLAYED");
    }
  }

  openLinkInNewTab(urlValue) {
    super.openUrlInNewTab(urlValue+"?skip");

  }

  clickOnChatOptionInRoom(){
    if (this.chatOptionInRoom.isDisplayed()===true) {
      this.chatOptionInRoom.click();
    } else {
      throw new Error("Chat option is not diaplying in room");
    }
  }

openRegistrationLinkInNewTab(){
  var regLink=$("//input[@class='ant-input ant-input-lg']").getAttribute("value");
  browser.createWindow("tab");
  browser.pause(1000);
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  browser.url(regLink);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  if (this.registratioNameFieldIsDisplayed()===true) {
    console.log("Registration link is working on start webinar modal");
  } else {
    throw new Error("Registration link on start webinar modal is not working")
  }
}


deleteFeatureResourceFromRoom(){
if (this.featureActionMenuButtonInRoom.isDisplayed()===true) {
  this.featureActionMenuButtonInRoom.click();
  browser.pause(500);
  if (this.deleteFeatureActionOption.isDisplayed()===true) {
    this.deleteFeatureActionOption.click();
  } else {
    throw new Error("Delete feature actiion option is not displaying on screen")
  }
} else {
  throw new Error("Feature action menu button is not displaying on screen")
}
}



deletePollResourceFromRoom(){
  if (this.pollMenuButtonInRoom.isDisplayed()===true) {
    this.pollMenuButtonInRoom.click();
    browser.pause(500);
    if (this.deletePollOption.isDisplayed()===true) {
      this.deletePollOption.click();
    } else {
      throw new Error("Delete poll option is not displaying on screen")
    }
  } else {
    throw new Error("Poll menu button is not displaying on screen")
  }
}
deleteHandoutResourceFromRoom(){
  if (this.handoutMenuButtonInRoom.isDisplayed()===true) {
    this.handoutMenuButtonInRoom.click();
    browser.pause(500);
    if (this.deleteHandoutOption.isDisplayed()===true) {
      this.deleteHandoutOption.click();
    } else {
      throw new Error("Delete handout option is not displaying on screen")
    }
  } else {
    throw new Error("Handout menu button is not displaying on screen")
  }
}

validateDeletedPollResouce(){
  if (this.pollsOption1.isDisplayed()===true) {
    throw new Error("Host is not able to delete poll resource")
    } else {
      console.log("Host is able to delete poll resource")
    
    }
}

validateDeletedFeatureActionResource(){
if (this.featureActionMenuButtonInRoom.isDisplayed()===true) {
throw new Error("User is failed to delete feature action resource");
} else {
  console.log("User is able to delete shared feature action resource");
}
}
validateDeletedHandoutResource(){
  if (this.handoutMenuButtonInRoom.isDisplayed()===true) {
    throw new Error("User is failed to delete handout resource");
    } else {
      console.log("User is able to delete shared handout resource");
    }
}

enableVisualEffectToggleButton(){
  var actClass=this.visualEffectsToggleButton.getAttribute("Class");
  if (actClass==="ant-switch ant-switch-checked") {
    console.log("Toggle button is already enabled");
  } else {
    this.visualEffectsToggleButton.click();
  }

}

selectDropdownOption(option){
if (this.visualEffectsDropdown.isDisplayed()===true) {
  this.visualEffectsDropdown.click();
  const dropdownOption=$("//li[contains(text(),'"+option+"')]");
  dropdownOption.click();
} else {
  throw new Error("Failed to select visual effect drop down option");
}
}

removeAlreadyAddedVisualEffectImage(){
  var length = 5;
  var i = 1;
  do {
    if (this.visualEffectUploadedImage.isDisplayed()===true) {
      this.visualEffectUploadedImage.click();
      $("(//button[@class='image_button_delete'])[1]").click();
      browser.pause(3000);
      i++;
     } else {
      console.log("No image is added in visual effect");
     }
    

    i++;

  } while (i <= length);
  browser.pause(2000);
}


clickOnApplyFilterChangesButton(){
if (this.applyFilterChangesButton.isDisplayed()===true) {
  console.log("Apply filter button is displayed");
  this.applyFilterChangesButton.click();
} else {
  throw new Error("Apply filter changes button is not displaying on screen");
}
}

verifyUploadedVisualEffectImageUnderPopup(){
  browser.pause(3000);
  const visualEffectUploadedImage=$("(//button[@class='image_button selected'])[1]")
 if (visualEffectUploadedImage.isDisplayed()===true) {
  console.log("User is able to upload visual effect image");
 } else {
  throw new Error("Failed to upload visual effect image under popup screen");
 }
}

}
export default new meetingRoomPage();
