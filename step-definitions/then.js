import { Then } from "cucumber";
import TestUtils from "../page_objects/testUtils";
import LoginPage from "../page_objects/LoginPage/loginPage";
import HomePage from "../page_objects/HomePage/homePage";
import FreeTrialSignUpPage from "../page_objects/SignUpPage/freeTrialSignUpPage";
import StarterSignUpPage from "../page_objects//SignUpPage/starterSignUpPage";
import GrowthSignUpPage from "../page_objects/SignUpPage/growthSignUpPage";
import BusinessSignUpPage from "../page_objects/SignUpPage/businessSignUpPage";
import EventPage from "../page_objects/Events/eventPage";
import AllPage from "../page_objects/Events/allPage";
import StandardPage from "../page_objects/Events/standardPage";
import SeriesPage from "../page_objects/Events/seriesPage";
import AutomatedPage from "../page_objects/Events/automatedPage";
import ArchivedPage from "../page_objects/Events/archivedPage";
import SettingsPage from "../page_objects/SettingsPage/settingsPage";
import ProfilePage from "../page_objects/SettingsPage/profilePage";
import GeneralPage from "../page_objects/SettingsPage/generalPage";
import MeetingRoomPage from "../page_objects/MeetingRoom/meetingRoomPage";
import BrandingPage from "../page_objects/SettingsPage/brandingPage";
import IntegrationsPage from "../page_objects/SettingsPage/integrationsPage";
import ApiPage from "../page_objects/SettingsPage/apiPage";
import BillingPage from "../page_objects/SettingsPage/billingPage";
import TeamPage from "../page_objects/SettingsPage/teamPage";
import EmailSettings from "../page_objects/SettingsPage/emailSettingsPage";
import simulatedSession from "../page_objects/SimulatedSession/simulatedSession";
import archivedPage from "../page_objects/Events/archivedPage";
import meetingRoomPage from "../page_objects/MeetingRoom/meetingRoomPage";
import generalPage from "../page_objects/SettingsPage/generalPage";
import brandingPage from "../page_objects/SettingsPage/brandingPage";
import billingPage from "../page_objects/SettingsPage/billingPage";
import starterSignUpPage from "../page_objects//SignUpPage/starterSignUpPage";
import newIntegrationPage from "../page_objects/NewIntegration/newIntegrationPage";


//--------ARCHIVE EVENT ----------//

Then(/^User shall see "Archive" option$/, {}, () => {
  expect(archivedPage.archiveButtonIsDisplayed()).toEqual(true);


})

Then(/^User should able to view event in archived event list (.*)$/, {}, (eventName) => {
  archivedPage.openArchivedTab();
  archivedPage.searchArchivedEvent(eventName);
})

Then(/^User shall see delete button$/, {}, () => {
  expect(archivedPage.deleteEventButtonIsDisplayed()).toEqual(true);
})


Then(/^Delete event validation (.*) should displayed$/, {}, (message) => {
  var actualMessage = $("//div[@class='ant-notification-notice-message']").getText();
  expect(actualMessage).toEqual(message);
})


Then(/^User shall see unarchive button$/, {}, () => {
  expect(archivedPage.unarchiveButtonIsDisplayed()).toEqual(true);
})

Then(/^User should able to unarchive (.*) event$/, {}, (eventName) => {
  HomePage.openEventsTab();
  archivedPage.checkAndArchivedDuplicateEvents(eventName);
})



//-----------------------Simulated session---------------//
Then(/^User should not be able to add Session in simulated event$/, () => {
  console.log("User is not able to add session Because schedule session button is disabled");

})

Then(/^User shall see Simulated event on the homepage name as (.*)$/, {}, (eventName) => {
  browser.pause(1000);
  browser.refresh();
  browser.pause(8000);
  var actText = simulatedSession.getSessionHeadertitle();
  if (actText === eventName) {
    console.log('Semulated seddion is displayed ');
  } else {
    throw new Error('Simualted Session name is mismatched: ACTUALTEXT: ' + actText + '  EXPECTED TEXT: ' + eventName)
  }

})

Then(/^User shall see simulated event with "Join room" button$/, () => {
  if (simulatedSession.joinRoomButtonIsDisplayed() === true) {
    console.log("Simulated event join room button");
  } else {
    throw new Error("Simulated event join room button is not displayed");
  }
})

Then(/^User shoud be able to run the Simulated session$/, () => {
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);
  if (EventPage.joinRoomBtnUnderJoinIsDisplayed() === true) {
    console.log("Join room button is displaying ..User is able to run simmulated session");
  } else {
    throw new Error("Join room button is not displaying..Failed to run simmulated session");
  }
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
})

Then(/^User shall see Simulated video$/, () => {
  if (simulatedSession.simulatedVideoIsDisplayed() === true) {
    console.log("Simulated video is displaying in meeting room ");

  } else {
    throw new Error("Simulated video is not displaying");
  }
  $("//body[@class='simulation-disable-actions encourage']").waitForDisplayed({ timeout: 700000 });
})

Then(/^User shall see "Start Session" button$/, () => {
  if (simulatedSession.startSessionButtonIsDisplayed() === true) {
    console.log("Start session button is displaying after simulated video ");
  } else {
    throw new Error("Start session button is not displaying after simulated video");
  }

})

Then(/^User should be able to Run the Simulated session as admin by clicking on "Start Session" button$/, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  simulatedSession.clickOnEnabledStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(8000);
  if (simulatedSession.webinarTimerIsDisplayed() === true) {
    console.log("Admin is able to start simulated session");
  } else {
    throw new Error("Admin is not able to start simulated session");
  }

})
Then(/^Sub host is able to start session by clicking on "Start Session" button$/, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(8000);
  if (MeetingRoomPage.sessionTimeIsDisplayed() === true) {
    console.log("Session started successfully");
  } else {
    throw new Error("Session is not started");
  }
})
Then(/^User shall see disabled "Schedule Session" button$/, () => {
  if (simulatedSession.disabledScheduleSessionsButtonIsDisplayed() === true) {
    console.log("Disabled schedule session button is displaying");
  } else {
    throw new Error("Disabled scheduled session button is not dispalyed");
  }

})

/*------------Settings page code----------------*/

Then(/^User Should able to see demio logo on Webinar room screen$/, () => {
  MeetingRoomPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
  browser.pause(1000)
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);

  EventPage.clickOnJoinRoomBtnUnderJoin();
  const demioLogo = $("//div[@class='header-controls-logo-avatar']//span[@class='Company-Icon --error']");
  demioLogo.waitForDisplayed({ timeout: 30000 });
  if (demioLogo.isDisplayed() === true) {
    console.log("Webinar room disable button is working on meeting room screen");

  } else {

    throw new Error("Webinar room disable button is not working on meeting room screen ");
  }
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
})
Then(/^User Should able to see uploaded logo on Webinar room screen$/, () => {
  MeetingRoomPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
  browser.pause(1000)
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  var actLogo = $("//div[@class='header-controls-logo-avatar']//img").getAttribute("src");
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();
  const image1 = $("(//div[@class='demio-upload-preview']//img)[2]");
  image1.waitForDisplayed({ timeout: 10000 });
  var expLogo = image1.getAttribute("src");
  if (actLogo.includes(expLogo)) {
    console.log("Webinar room enable button is working on meeting room screen");
  } else {
    throw new Error("Webinar room disable button is not working on meeting room screen ..actual logo>>" + actLogo + "Expected logo>>" + expLogo);
  }

})
Then(/^User Should able to see demio logo on email notification screen$/, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEmailNotifications();
  EventPage.clickOnEditEmail();
  $("(//td[@align='center'])[2]//img").waitForDisplayed({ timeout: 10000 });
  var actLogo = $("(//td[@align='center'])[2]//img").getAttribute("src");
  browser.refresh();
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();
  var expLogo = $(".company-image-section.logo img").getAttribute("src");
  if (actLogo.includes(expLogo)) {
    throw new Error("Confirmation and Reminder Emails disable button is not working on edit email screen actual logo>>" + actLogo + "Expected logo>>" + expLogo);

  } else {
    console.log("Confirmation and Reminder Emails disable button is working on edit email screen");
  }

})


Then(/^User Should able to see uploaded logo on email notification screen$/, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEmailNotifications();
  EventPage.clickOnEditEmail();
  $("(//td[@align='center'])[2]//img").waitForDisplayed({ timeout: 10000 });
  var actLogo = $("(//td[@align='center'])[2]//img").getAttribute("src");
  browser.refresh();
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();
  browser.pause(3000);
  var expLogo = $(".company-image-section.logo img").getAttribute("src");
  if (actLogo.includes(expLogo)) {
    console.log("Confirmation and Reminder Emails enable button is working on edit email screen");
  } else {
    throw new Error("Confirmation and Reminder Emails enable button is not working on edit email screen ..actual logo>>" + actLogo + "Expected logo>>" + expLogo);
  }

})


Then(/^User should able to enable uploaded logo on registration (.*) ,Thank you and Recording screen$/, {}, (regEmail) => {

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actLogoOnRegScreen = $(".registration-header-logo > img").getAttribute("src");

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actTankyouScreenLogo = $(".registration-header-logo>img").getAttribute("src");
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();

  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(8000);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  // MeetingRoomPage.clickOnCloseSettingPopover();
  // MeetingRoomPage.clickOnViewSharingOptions();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(8000);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  EventPage.clickOnSummaryTab();
  EventPage.clickOnPastSessionOption();
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 550000 });
  EventPage.clickOnSessionDropDown();
  EventPage.clickOnShareReplayOption();
  EventPage.clickOnArrowOnRecordingPage();
  EventPage.switchToRecordingWindow();
  var actRecordingLogo = $(".registration-header-logo>img").getAttribute("src");
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  browser.refresh();

  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();

  var expLogo = $("(//div[@class='demio-upload-preview']//img)").getAttribute("src");
  console.log("actual logo>>" + actLogoOnRegScreen + "Expected logo>>" + expLogo)
  if (actLogoOnRegScreen.includes(expLogo)) {
    console.log("Pages enable button is working on registration screen");
  } else {
    throw new Error("Pages enable button is not working on registration screen ..actual logo>>" + actLogoOnRegScreen + "Expected logo>>" + expLogo);
  }

  if (actTankyouScreenLogo.includes(expLogo)) {
    console.log("Pages enable button is working on ThankYou screen");
  } else {
    throw new Error("Pages enable button is not working on ThankYou screen ..actual logo>>" + actTankyouScreenLogo + "Expected logo>>" + expLogo);
  }
  var expectedLogo = expLogo.slice(0, -20);
  if (actRecordingLogo.includes(expectedLogo)) {
    console.log("Pages enable button is working on Recording screen");
  } else {
    throw new Error("Pages enable button is not working on Recording screen ..actual logo>>" + actRecordingLogo + "Expected logo>>" + expLogo);
  }

})


Then(/^User should be able to see demio logo on registration (.*) ,Thank you and Recording screen$/, {}, (regEmail) => {

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actLogoOnRegScreen = $(".registration-header-logo > img").getAttribute("src");

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actTankyouScreenLogo = $(".registration-header-logo>img").getAttribute("src");
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();

  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  // MeetingRoomPage.clickOnCloseSettingPopover();
  browser.pause(9000);
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  // MeetingRoomPage.clickOnViewSharingOptions();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(8000);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton()
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  EventPage.clickOnSummaryTab();
  EventPage.clickOnPastSessionOption();
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 550000 });
  EventPage.clickOnSessionDropDown();
  EventPage.clickOnShareReplayOption();
  EventPage.clickOnArrowOnRecordingPage();
  EventPage.switchToRecordingWindow();
  var actRecordingLogo = $(".registration-header-logo>img").getAttribute("src");
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  browser.refresh();

  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();

  var expLogo = $("(//div[@class='demio-upload-preview'])//img").getAttribute("src");

  if (actLogoOnRegScreen.includes(expLogo)) {
    throw new Error("Pages disable button is not working on registration screen ");
  } else {
    console.log("Pages disable button is working on registration screen");
  }

  if (actTankyouScreenLogo.includes(expLogo)) {
    throw new Error("Pages enable button is not working on ThankYou screen ");
  } else {

    console.log("Pages enable button is working on ThankYou screen");
  }
  var expectedLogo = expLogo.slice(0, -20);
  if (actRecordingLogo.includes(expectedLogo)) {
    throw new Error("Pages enable button is not working on Recording screen ");
  } else {
    console.log("Pages enable button is working on Recording screen");

  }

})

Then(/^User should be able to Enable OR Disbaled "Pages Reg,Thank you, Recording:" (.*) ,"Confirmation and Reminder Emails:" (.*)  and  "Webinar Room:" (.*)$/, {}, (pages, email, webinarRoom) => {
  browser.refresh();
  if (pages === 'Enable') {
    BrandingPage.enabledPageSwitch();
  } else if (pages === 'Disable') {
    BrandingPage.disablePageSwitch();
  }
  else {
    throw new Error('Please Enter correct value in feature Exaples: Enable OR Disble')
  }

  if (email === 'Enable') {
    BrandingPage.enableEmailSwitch();
  } else if (email === 'Disable') {
    BrandingPage.disableEmailSwitch();
  }
  else {
    throw new Error('Please Enter correct value in feature Exaples: Enable OR Disble')
  }


  if (webinarRoom === 'Enable') {
    BrandingPage.enableroomswitcher();
  } else if (webinarRoom === 'Disable') {
    BrandingPage.disableroomswitcher();
  }
  else {
    throw new Error('Please Enter correct value in feature Exaples: Enable OR Disble')
  }
})



Then(/^User should be able to Save the Changes "From name" (.*) "Contact & Forwarding Email" (.*) and "Custom Signature" (.*) by clicking on "Save Settings" Button$/, (fromName, email, signature) => {

  EmailSettings.clickOnSaveEmailSettings();
  // var actVMessage = TeamPage.getValidationMessage();
  // if (actVMessage === 'Email Settings Saved!') {
  //   console.log('Email setting  saved')
  // } else {
  //   throw new Error('Validation message is missmatched: ACTUAL: ' + actVMessage + "EXPECTED: Email Settings Saved!")
  // }
  browser.pause(1000)
  var actFromName = EmailSettings.getFromName();
  var actEmail = EmailSettings.getContactForwardEmail();
  var actSignature = EmailSettings.getSignature()
  if (actFromName === fromName && actEmail === email && actSignature === signature) {

    console.log("From Name, Contact & Forwarding Email and Custom Signature is  displaying")
  } else {
    throw new Error('---------------------------------------------------------"\n"' +

      "ACTUAL FROM NAME: " + actFromName + "  EXPECTED: " + fromName + "\n" +
      "ACTUAL EMAIL: " + actEmail + "  EXPECTED: " + email + "\n" +
      "ACTUAL SIGNATURE: " + actSignature + "  EXPECTED: " + signature + "\n")

  }

})

Then(/^User should able to fill (.*) in "Custom Signature" input field$/, (signature) => {
  EmailSettings.fillCustomerSignatureInputField(signature);
})

Then(/^User should able to fill (.*) in "Contact & Forwarding Email" input field$/, {}, (email) => {
  EmailSettings.fillContactAndForwardEmailField(email)
})

Then(/User should able to fill (.*) in "Form Name" input field/, {}, (fromName) => {
  EmailSettings.fillFromNameInputField(fromName)

})

Then(/^User shall see following options as (.*)$/, {}, (options) => {
  if (options === "Email Settings Options" && EmailSettings.emailSettingsIsDisplayed() === true) {
    console.log(options + '  Is displayed')
  } else if (options === "From Name  Input Field" && EmailSettings.fromNameInputFieldIsDisplayed() === true) {
    console.log(options + '  Is displayed')
  }
  else if (options === "Contact & Forwarding Email input Field" && EmailSettings.contactAndForwardingEmailInputFieldIsDisplayed() === true) {
    console.log(options + '  Is displayed')
  } else if (options === "Custom Signature  input Field" && EmailSettings.customerSignatureInputFieldIsDisplayed() === true) {
    console.log(options + '  Is displayed')
  }
  else if (options === 'Save Settings Button' && EmailSettings.saveEmailSettingsButtonIsDisplayed() === true) {
    console.log(options + '  Is displayed')
  }
  else {
    throw new Error(options + '  Is  not displayed')
  }
})

Then(/^User should able to Delete added user by clicking on Delete user button and get validation message as (.*)$/, {}, (vMessage) => {

  browser.pause(2000)
  TeamPage.clickOnDeleteUserButton()
  var actText = TeamPage.getValidationMessage();
  var exptText = vMessage;
  if (actText.includes(exptText)) {
    console.log('User is deleted')
  } else {
    throw new Error('Validation message is mismatched: ACTUAL: ' + actText + "  EXPECTED: " + exptText);
  }
})

Then(/^User shall get "Delete User" pop-up message screen$/, {}, () => {
  if (TeamPage.deleteUserPopUpScreenIsDisplayed() === true) {
    console.log('Delete user pop screen is displayed ')
  } else {
    throw new Error('Some thing went worng with delete user pop up screen')
  }
})

Then(/^User shall see added Team Member Email as (.*)$/, {}, (email) => {

  TeamPage.validateaddedEmail(email)

})


Then(/^User should be able to Add the Team member by clicking on "ADD" button and get validation message as (.*)$/, {}, (vMessage) => {
  TeamPage.clickOnAddTeamButton();
  var actText = TeamPage.getValidationMessage();
  var expText = vMessage;
  if (actText.includes(expText)) {
    console.log('Member is addded')
  } else {
    throw new Error('Validation message is missmatched: ACTUAL:' + actText + "EXPECTED: " + expText)
  }
})

Then(/^User should be able to enter (.*) of new team Member in "Email" field$/, {}, (email) => {
  TeamPage.fillEmailInputField(email)
})

Then(/^User shall see "Add" button$/, {}, () => {
  if (TeamPage.addTeamMemberButtonIsDisplayed() === true) {
    console.log('ADD button is displayed at Add Team  Member screeen')
  } else {
    throw new Error('Some thing went worng with ADD button on Add Team member pop-up screen')
  }
})

Then(/^User shall see "Email" field$/, {}, () => {
  if (TeamPage.addMemberEmailInputFieldIsDisplayed() === true) {
    console.log('Add email input field is displayed')
  } else {
    throw new Error('Some thing went worng with ADD MEMBER EMAIL INPUT FIELD')
  }
})

Then(/^User shall see "Add Team Member" pop-up$/, {}, () => {
  browser.pause(1000)
  if (TeamPage.addTeamMemberPopupScreenIsDisplayed() === true) {
    console.log('Add new team member pop -up screen is opened')
  } else {
    throw new Error('Some thing went worng with ADD NEW TEAM MEMBER POP-UP SCREEN')
  }
})

Then(/^User shall see "ADD NEW" button$/, {}, () => {
  if (TeamPage.addNewTeamButtonIsDisplayed() === true) {
    console.log('Add New Button is displayed')
  } else {
    throw new Error('Some thing went worng with Add New Button')
  }
})

Then('User shall see Added Team Members', {}, () => {

  if (TeamPage.teamMemberSectionIsDisplayed() === true) {
    console.log('Added Team member is Displayed')
  } else {
    throw new Error("Added team meber is not displayed")
  }
})


Then(/^User shall see "Manage the team" information$/, {}, () => {
  if (TeamPage.manageTeamSectionIsDisplayed() === true) {
    console.log('Manage the team section is displayed')
  } else {
    throw new Error('Somethings went  worng with manage the team section')
  }
})


Then(/^User shall see "Cancel Your Account" with "Start Cancellation" option$/, {}, () => {
  if (BillingPage.cancelYourPlanSectionISDisplayed() === true &&
    BillingPage.startCancellationButtonIsDisplayed() === true) {
    console.log('"Cancel Your Account" with "Start Cancellation" is displayed')
  } else {
    throw new Error('Some thing went worng with "Cancel Your Account" with "Start Cancellation" button')
  }
})

Then(/^User shall see "Your Plan" option with details "Package Level","Price","Room Size" and "Adjust plan" button$/, {}, () => {
  if (BillingPage.yourPlanSectionIsDisplayed() === true) {
    console.log("Your plan section is displaying on screen");
  } else {
    throw new Error("Something went worng  with 'Your Plan' option is not displaying on screen");
  }
  if (BillingPage.packageLevelIsDisplayed() === true) {
    console.log("Package level is displaying on screen");
  } else {
    throw new Error("Something went worng  with 'Package level' option is not displaying on screen")
  }
  if (BillingPage.priceIsDisplayed() === true) {
    console.log("price section is displaying on screen");
  } else {
    throw new Error("Price section is not displaying on screen")
  }
  if (BillingPage.roomSizeIsDisplayed() === true) {
    console.log("Room size section is displaying on screen");
  } else {
    throw new Error("Reem size section is not displaying on screen")
  }

  // if (BillingPage.adjustPlanButtonIsDisplayed() === true) {
  //   console.log("Adjust plan option is displaying on screen");
  // } else {
  //   throw new Error("Adjust plan option is not displaying on screen");
  // }

})

Then(/^User shall see "Credit Card" information along with "Update Card Details" option$/, {}, () => {

  if (BillingPage.creditCardSectionIsDisplayed() === true && BillingPage.updateCardDetailsLinksIsDisplayed() === true) {
    console.log('Credit card section and Update Card Details option is displayed ')
  }
  else {
    throw new Error('Some thing went worng with credit card section and update credit card details')
  }
})

Then(/^User shall see "Plans and Billings" information$/, {}, () => {

  if (BillingPage.planAndBillingSectionIsDisplayed() === true) {
    console.log('Plan and billing setion is displayed')
  } else {
    throw new Error('Some  thing went worng with paln and billing section')
  }

})

Then(/^User shall see "API KEY" field$/, {}, () => {
  if (ApiPage.apiKeyFieldIsDisplayed() === true) {
    console.log("Api feld is displaying")
  } else {
    throw new Error('Someting went worng with ApiKey Field')
  }
})

Then(/^User shall see "API SECRET" field$/, {}, () => {
  if (ApiPage.apiSecretFieldIsDisplayed() === true) {
    console.log("Api Secret field is displaying")
  } else {
    throw new Error('Someting went worng with Api Secrect Field')
  }
})

Then(/^User shall see "Regenerate" button$/, {}, () => {
  if (ApiPage.regenrateButtonISDisplayed() === true) {
    console.log("Regenerate button is displaying")
  } else {
    throw new Error('Someting went worng with Regenerate Button')
  }
})

Then(/^User should be able to "Regenerate"  "API SECRET" by clicking on "Regenerate" button$/, {}, () => {

  ApiPage.checkAPIkeyISGenerated();
})


Then(/^User Should be able to upload logo (.*) by clicking on "Upload Logo" option$/, {}, (logo) => {
  browser.refresh();
  browser.pause(5000);
  BrandingPage.uploadLogo(logo);
  BrandingPage.clickOnCropButton();
  browser.pause(2000);
});

Then(/^User Should able to edit (.*)$/, {}, (colorScheme) => {
  BrandingPage.fillColorCodeInColorSchmeField(colorScheme)
})

Then(/^User shall see the options as (.*) at branding page$/, {}, (option) => {
  if (option === "Color Scheme field" && BrandingPage.colorSchemeFieldIsDisplayed() === true) {
    console.log(option + "  Is displayed");
  } else if (option === 'Upload Logo button' && BrandingPage.uploadLogoButtonIsDisplayed() === true) {
    console.log(option + "  Is displayed");
  } else if (option === 'Enable disbaled  switch  of Reg, Thank You and Recording Pages' && BrandingPage.pageSwitcherIsDisplayed() === true) {
    console.log(option + "  Is displayed");
  } else if (option === 'Enable disbaled  switch  of Confirmation and Reminder Emails' && BrandingPage.emailSwitcherIsDisplayed() === true) {
    console.log(option + "  Is displayed");
  } else if (option === 'Enable disbaled  switch  of Webinar Room' && BrandingPage.roomswitcherIsDisplayed() === true) {
    console.log(option + "  Is displayed");
  }
  else {
    throw new Error('Somethings went worng with :>> ' + option);
  }

})

Then(/^User should be able to Click on "Active" and "Disabled" button for GDPR settings$/, {}, () => {
  GeneralPage.clickOnActivateGdprSetting();
  browser.pause(3000);
  GeneralPage.clickOnDisabledGdprSettings();
})

Then(/^User should be able to save the (.*) in (.*) by clicking on "Save" button$/, {}, (data, inputFields) => {
  GeneralPage.clickOnSaveButton();

  var comanyName = GeneralPage.getCompanyName();
  var timeZone = GeneralPage.getTimeZone();
  var language = GeneralPage.getLanguage();

  if (GeneralPage.validationMsgIsDisplayed() === true) {
    console.log("Validation message appeared by clicking on SAVE button")
    if (inputFields === 'Company Name Field' && comanyName.includes(data)) {
      console.log('Comapny name is saved as ' + comanyName);
    }
    else if (inputFields === 'TimeZone Dropdown' && data.includes(timeZone)) {
      console.log("Time zone is save as " + timeZone);

    } else if (inputFields === 'Language Dropdown' && data.includes(language)) {
      console.log("Language is saved as " + language);
    }
    else {

      throw new Error('Somethings went worng with :>> ' + inputFields + " ACTUAL DATA: " + data + "EXPECTED DATA: " + comanyName + " " + timeZone + " " + language);
    }
    browser.pause(4000);
  } else {
    throw new Error("VALODATION MESSAGE IS  NOT DURING SAVE GENERAL INFO.")
  }
})

Then(/^User should be able to save the changes made in "Company Name" by clicking on "Save" button$/, {}, () => {
  GeneralPage.clickOnSaveButton();
  if (GeneralPage.validationMsgIsDisplayed() === true) {
    console.log("Validation message appeared by clicking on SAVE button")
  } else {

  }
})

Then(/^User Should be able to edit data (.*) in (.*)$/, {}, (data, inputFields) => {
  if (inputFields === 'Company Name Field' && GeneralPage.companyNameFieldIsDisplayed() === true) {
    GeneralPage.fillCompanyNameField(data)
  } else if (inputFields === 'TimeZone Dropdown' && GeneralPage.timeZoneFieldIsDisplayed() === true) {
    GeneralPage.selectTimeZone(data);
  } else if (inputFields === 'Language Dropdown' && GeneralPage.languageFieldIsDisplayed() === true) {
    GeneralPage.selectLanguage(data);
  } else {
    throw new Error('Somethings went worng with :>> ' + inputFields);
  }
})

Then(/^User shall see (.*) at general tab$/, {}, (options) => {

  if (options === 'Company Name Field' && GeneralPage.companyNameFieldIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'Save Button' && GeneralPage.saveButtonIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'TimeZone Dropdown' && GeneralPage.timeZoneFieldIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'Language Dropdown' && GeneralPage.languageFieldIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'GDPR Active Button' && GeneralPage.activeGdprSettingButtonIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'GDPR Disabled Button' && GeneralPage.disabledGdprSettingButtonIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else {
    throw new Error('Somethings went worng with :>> ' + options + "Is not Displayed");
  }
})

Then(/^User should be able to update the password by clicking on "UPDATE PASSWORD" Button$/, {}, () => {
  ProfilePage.clickOnUpdatePasswordButton();
});

Then(/^User should be able to enter current password as (.*) and new password as (.*)$/, {}, (currentPassword, newPassword) => {

  ProfilePage.fillCurrentPasswordField(currentPassword);
  ProfilePage.fillNewPasswordField(newPassword);
})

Then(/^User shall see "UPDATE PASSWORD" Button$/, {}, () => {

  if (ProfilePage.updatePasswordButtonIsDisplayed() === true) {
    console.log('Update Password button is Displayed')
  } else {
    throw new Error('Updated Password button is not displayed')
  }
});

Then(/^User should be able to mark OR unmark see password checkbox$/, {}, () => {
  ProfilePage.clickOnSeePasswordCheckbox();
  if (ProfilePage.seePasswordCheckBoxIsSelected() === true) {
    console.log('See password  Check box is selected')

    ProfilePage.clickOnSeePasswordCheckbox();
    if (ProfilePage.seePasswordCheckBoxIsSelected() === false) {
      console.log('See password check is not selected')
    } else {
      throw new Error('Check box is not working')
    }
  } else {
    throw new Error('Check box is alredy selected')
  }


});

Then(/^User shall see "See Password" Checkbox$/, {}, () => {
  if (ProfilePage.seePasswordCheckBoxIsDisplayed() === true) {
    console.log('See Password Check box is displayed')
  } else {
    throw new Error('Something went worn at "See Password Check box" ')
  }

});

Then(/^User shall see "Current Password" and "New Password" field$/, {}, () => {
  if (ProfilePage.currentPasswordFieldIsDisplayed() === true && ProfilePage.newPasswordFieldIsDisplayed() === true) {
    console.log('Current Password And New Password field is showing');
  } else {
    throw new Error('Current Password And New Password field is not showing')
  }
});


Then(/^User shall see "Change Your Password" pop-up$/, {}, () => {
  if (ProfilePage.currentPasswordFieldIsDisplayed() === true) {
    console.log('Change Password pop-up screen')
  } else {
    console.log('Change password pop up screen is not open')
  }
});

Then(/^User able to see Save OR Changed (.*) in (.*)$/, {}, (data, inputFields) => {

  if (inputFields === 'First Name') {
    ProfilePage.getFirstName() === data;
  }

  else if (inputFields === 'Last Name') {
    ProfilePage.getLastName() === data;
  }

  else if (inputFields === 'Email') {
    ProfilePage.getEmail() === data;
  }

  else {
    throw new Error(data + "Is Not Matched in " + inputFields)

  }

});

Then(/^User Should be able to add data (.*) in (.*)$/, {}, (data, inputFields) => {
  if (inputFields === 'First Name') {
    ProfilePage.fillDataInFNameField(data)
  }
  else if (inputFields === 'Last Name') {
    ProfilePage.fillDataInLnameField(data)
  }
  else if (inputFields === 'Email') {
    ProfilePage.fillDataInEmailField(data)
  } else {
    throw new Error(data + "Is not filled in " + inputFields)
  }
});

Then(/^User shall see fields as (.*)$/, {}, (inputFields) => {

  if (inputFields === 'First Name' && ProfilePage.firstNameFieldIsDisplayed() === true) {
    console.log(inputFields + " Is Displayed")

  } else if (inputFields === 'Last Name' && ProfilePage.lastNameFieldIsDisplayed() === true) {
    console.log(inputFields + " Is Displayed")

  } else if (inputFields === 'Email' && ProfilePage.emailFieldIsDisplayed() === true) {
    console.log(inputFields + " Is Displayed")

  } else if (inputFields === 'Save Settings Button' && ProfilePage.saveSettingsButtonIsDisplayed() === true) {
    console.log(inputFields + " Is Displayed")

  } else if (inputFields === 'Change Password Button' && ProfilePage.changePasswordButtonIsDisplayed() === true) {
    console.log(inputFields + " Is Displayed");

  } else {
    throw new Error("Something went wrong at: " + inputFields)
  }

});

Then(/"Profile" page should be open$/, {}, () => {
  if (SettingsPage.checkProfileHeaderIsDisplayed() === true) {
    console.log("Profile page is opened");
  }
  else {
    throw new Error('Profile tab is not opening');
  }
});


Then(/^"General" page should be open$/, {}, () => {
  if (SettingsPage.checkGeneralHeaderIsDisplayed() === true) {
    console.log('General page is opened')
  } else {
    throw new Error('General page is not opening')
  }
});


Then(/^"Branding" page should be open$/, {}, () => {
  if (SettingsPage.checkBrandingHeaderIsDisplayed() === true) {
    console.log('Branding page is opened');
  } else {
    throw new Error('Branding tab is not opening')
  }
});


Then(/^"Billing" page should be open$/, {}, () => {

  if (SettingsPage.checkbillingHeaderIsDisplayed() === true) {
    console.log('Billing page is opened');
  } else {
    throw new Error('Billing page is not opened')
  }
});


Then(/^"API" page should be open$/, {}, () => {

  if (SettingsPage.checkApiHeaderIsDisplayed() === true) {
    console.log('API page is opened');
  } else {
    throw new Error('API page is not opened')
  }
});


Then(/^"Integrations" page should be open$/, {}, () => {

  if (SettingsPage.checkIntegrationsHeaderIsDisplayed() === true) {
    console.log('Integrations page is opened');
  } else {
    throw new Error('Integrations page is not opened')
  }
});


Then(/^"Team" page should be open$/, {}, () => {

  if (SettingsPage.checkTeamHeaderIsDisplayed() === true) {
    console.log('Team page is opened');
  } else {
    throw new Error('Team page is not opened')
  }
});


Then(/^"Email settings" page should be open$/, {}, () => {

  if (SettingsPage.checkEmailSettingHeaderIsDisplayed() === true) {
    console.log('Email settings page is opened');
  } else {
    throw new Error('Email settings page is not opened')
  }
});

Then(/^By default "Profile" should be selected$/, {}, () => {
  SettingsPage.checkProfileTabIsSelected();
});

Then(/^User shall see (.*) under settings$/, {}, (options) => {

  if (options === "Profile" && SettingsPage.profileTabIsDisplayed() === true) {
    console.log('Profile tab is displaying')
  }

  else if (options === 'General' && SettingsPage.generalTabIsDisplayed() === true) {
    console.log(options + ' tab is displaying')
  }

  else if (options === 'Branding' && SettingsPage.brandingTabIsDisplayed() === true) {
    console.log(options + ' tab is displaying')
  }

  else if (options === 'Billing' && SettingsPage.billingTabIsDisplayed() === true) {
    console.log(options + 'tab is displaying')
  }


  else if (options === 'API' && SettingsPage.apiTabIsDisplayed() === true) {
    console.log(options + 'tab is displaying')
  }

  else if (options === 'Integrations' && SettingsPage.integrationsTabIsDisplayed() === true) {
    console.log(options + 'tab is displaying')
  }

  else if (options === 'Team' && SettingsPage.teamTabIsDisplayed() === true) {
    console.log(options + 'tab is displaying')
  }

  else if (options === 'Email settings' && SettingsPage.emailSettingsTabIsDisplayed() === true) {
    console.log(options + 'tab is displaying')
  }

  else {
    throw new Error(options + " tab is not displaying");
  }
})


Then(/^User shall see (.*) under integration tab$/, {}, (options) => {
  if (options === 'Manage Integration' && IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log(options + "tab is displaying");
  }
  else if (options === 'CURRENT INTEGRATIONS' && IntegrationsPage.currentIntegrationTabIsDisplayed() === true) {
    console.log(options + "tab is displaying");
  }
  else if (options === 'ADD NEW' && IntegrationsPage.addNewTabIsDisplayed() === true) {
    console.log(options + "tab is displaying");
  }
  else {
    throw new Error(options + " tab is not displaying");
  }
})

Then(/^User shall see (.*) of all the integrations at the bottom$/, {}, (icons) => {
  if (icons === 'Zapier' && IntegrationsPage.zapierIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Infusionsoft' && IntegrationsPage.infusionsoftIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Aweber' && IntegrationsPage.aweberIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Ontraport' && IntegrationsPage.ontraportIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Mailchimp' && IntegrationsPage.mailchimpIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Getresponse' && IntegrationsPage.getresponseIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Activecampaign' && IntegrationsPage.activecampaignIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'ConvertKit' && IntegrationsPage.convertKitIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Drip' && IntegrationsPage.dripIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Markethero' && IntegrationsPage.marketheroIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }
  else if (icons === 'Marketo' && IntegrationsPage.marketoIconIsDisplayed() === true) {
    console.log(icons + "icon is displaying");
  }

  else {
    throw new Error(icons + " icon is not displaying");
  }
})


Then(/^User should be redirected to Mailchimp Log in and authorize page$/, {}, () => {
  if (IntegrationsPage.mailchimpLoginContantIsDisplayed() === true) {
    console.log("host successfully redirect on mailchimp login page");
  } else {
    throw new Error("Failed to redirect on mailchimp login page");
  }

})
Then(/^User should be redirected to Authorize Demio Staging page$/, {}, () => {
  if (IntegrationsPage.authorizePageTitleIsDisplayed() === true) {
    console.log("host successfully redirect to Authorize Demio Staging page");
  } else {
    throw new Error("Failed to redirect to Authorize Demio Staging page");
  }

})


Then(/^User should be redirected back to the Integration setting page and the Mailchimp integration should be added (.*) to the account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }

  IntegrationsPage.validateAddedMailchimp(status);
})

Then(/^User should be redirected to Zapier Log in page$/, {}, () => {
  EventPage.switchToWindowNewTab();
  if (IntegrationsPage.zapierEmailFieldIsDisplayed() === true) {
    console.log("host redirect on zapier login page");
  } else {
    throw new Error("failed to redirect on zapier login page");
  }

})

Then(/^User should be redirected to Zapier dashboard$/, {}, () => {
  if (IntegrationsPage.zapierDashboardHeaderIsDisplayed() === true) {
    console.log("host redirect on zapier dashboard page");
  } else {
    throw new Error("failed to redirect on zapier dashboard page");
  }
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
})


Then(/^User should be redirected to Login Page$/, {}, () => {
  EventPage.switchToWindowNewTab();
  if (IntegrationsPage.infusionsoftEmailFieldIsDisplayed() === true) {
    console.log("host redirect on infusionsoft login page");
  } else {
    throw new Error("failed to redirect on infusionsoft login page");
  }

})

Then(/^User should be redirected to Account Central page$/, {}, () => {

  if (IntegrationsPage.accountCentralPageHeaderIsDispalyed() === true) {
    console.log("host redirect on Account central page");
  } else {
    throw new Error("failed to redirect on Account central page");
  }

})

Then(/^Infusionsoft integration (.*) should be added to the staging account$/, {}, (status) => {
  IntegrationsPage.validateAddedInfusionsoft(status);
})

Then(/^User should be redirected to Aweber Log in page$/, {}, () => {

  if (IntegrationsPage.aweberLogoIsDisplayed() === true) {
    console.log("host redirect on Aweber login page");
  } else {
    throw new Error("failed to redirect on Aweber login page");
  }

})

Then(/^User should be redirected back to the Integration setting page and the Aweber integration (.*) should be added to the staging account$/, {}, (status) => {

  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }

  IntegrationsPage.validateAddedAweber(status);


})

Then(/^User should be redirected to Marketo pop up$/, {}, () => {

  if (IntegrationsPage.clientIdFieldIsDisplayed() === true) {
    console.log("host redirect on Marketo pop up screen");
  } else {
    throw new Error("failed to redirect on Marketo pop up screen");
  }

})
Then(/^User should be redirected back to the Integration setting page and the Marketo (.*) integration should be added to the account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }

  IntegrationsPage.validateAddedMarketo(status);


})

Then(/^ConvertKit integration (.*) should be added to the staging account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }
  IntegrationsPage.validateAddedConvertKit(status);

})

Then(/^Market Hero integration (.*) should be added to the staging account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }
  IntegrationsPage.validateAddedMarkethero(status);

})


Then(/^ActiveCampaign integration (.*) should be added to the staging account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }
  IntegrationsPage.validateAddedActiveCampaign(status);
})

Then(/^Getresponse integration (.*) should be added to the staging account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }
  IntegrationsPage.validateAddedGetresponse(status);
})

Then(/^Drip integration (.*) should be added to the staging account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }
  IntegrationsPage.validateAddedDripIntegration(status);
})

Then(/^Ontraport or Officeautopilot integration (.*) should be added to the staging account$/, {}, (status) => {
  if (IntegrationsPage.manageIntegrationTabIsDisplayed() === true) {
    console.log("User redirect to integration settings window");
  } else {
    throw new Error("Failed to redirect to integration settings window");
  }
  IntegrationsPage.validateAddedOntraport(status);
})

Then(/^User should be redirected to Zap editor screen$/, {}, () => {
  if (IntegrationsPage.editButtonIsDisplayed() === true) {
    console.log("Successfully redirect on zap edit screen");
  } else {
    throw new Error("Edit button is not displayed so Failed to redirect on zap edit screen");
  }

})

Then(/^User shall be redirected to Action menu$/, {}, () => {
  $("//span[contains(text(),'Test trigger')]").waitForDisplayed({ timeout: 10000 });
  $("//span[contains(text(),'Test trigger')]").click();
  // browser.pause(70000);
  IntegrationsPage.clickcontinueButtonUnderZabPage();
  //  IntegrationsPage.clickOnTestTriggerButton();
  if (IntegrationsPage.addStepButtonIsDisplayed() === true) {
    console.log("User redirect on action menu screen");
  } else {
    throw new Error("Failed to redirect on action menu screen");
  }

})


Then(/^User shall select a gmail account (.*)$/, {}, (gmailAccount) => {
  IntegrationsPage.clickOnGmailAccountDropdown();
  IntegrationsPage.searchGmailAccountFromList(gmailAccount);

})

Then(/^User should be redirected to customize spreadsheet row menu$/, {}, () => {
  IntegrationsPage.clickOnCreateSpreadSheetButton();

})

Then(/^User should be redirected to (.*) pop up$/, {}, (title) => {
  IntegrationsPage.validateIntegrationPopup(title);

})

Then(/^Aweber integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledAweberToggleButton();
})

Then(/^Mailchimp integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledMailchimpToggleButton();
})
Then(/^Markethero integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledMarketheroToggleButton();
})

Then(/^Marketo integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledMarketoToggleButton();
})

Then(/^User should be redirected to (.*) pop up under customize screen$/, {}, (title) => {
  IntegrationsPage.validateIntegrationPopup(title);

})

Then(/^Infusionsoft integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledInfusionsoftToggleButton();
})

Then(/^Ontraport integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledOntraportToggleButton();
})

Then(/^Activecampaign integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledActivecampaignToggleButton();
})


Then(/^ConvertKit integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledConvertKitToggleButton();
})


Then(/^Drip integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledDripToggleButton();
})

Then(/^User shall see all the enabled integrations$/, {}, () => {
  if (IntegrationsPage.infusionsoftToggleButtonIsDisplayed() === true) {
    console.log("Infusionsoft integration is displaying on event integration screen");
  } else {
    throw new Error("Infusionsoft integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.aweberToggleButtonIsDisplayed() === true) {
    console.log("Aweber integration is displaying on event integration screen");
  } else {
    throw new Error("Aweber integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.ontraportToggleButtonIsDisplayed() === true) {
    console.log("Ontraport integration is displaying on event integration screen");
  } else {
    throw new Error("Ontraport integration is not displaying on event integration screen");
  }


  if (IntegrationsPage.mailchimpToggleButtonIsDisplayed() === true) {
    console.log("Mailchimp integration is displaying on event integration screen");
  } else {
    throw new Error("Mailchimp integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.activecampaignToggleButtonIsDisplayed() === true) {
    console.log("Activecampaign integration is displaying on event integration screen");
  } else {
    throw new Error("Activecampaign integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.convertKitToggleButtonIsDisplayed() === true) {
    console.log("ConvertKit integration is displaying on event integration screen");
  } else {
    throw new Error("ConvertKit integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.dripToggleButtonIsDisplayed() === true) {
    console.log("Drip integration is displaying on event integration screen");
  } else {
    throw new Error("Drip integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.marketheroToggleButtonIsDisplayed() === true) {
    console.log("Markethero integration is displaying on event integration screen");
  } else {
    throw new Error("Markethero integration is not displaying on event integration screen");
  }

  if (IntegrationsPage.marketoToggleButtonIsDisplayed() === true) {
    console.log("Marketo integration is displaying on event integration screen");
  } else {
    throw new Error("Marketo integration is not displaying on event integration screen");
  }


})

Then(/^Getresponse integration should be enabled$/, {}, () => {
  browser.pause(2000);
  IntegrationsPage.validateEnabledGetresponseToggleButton();
})
/*----------End Settings page code-------------*/


/*Home page*/

Then(/^It should redirected to "Event" page$/, {}, () => {
  HomePage.checkEventTabOpen();

})
Then(/^"Help" and "User Profile" dropdown should be available in Header$/, {}, () => {

  if (HomePage.helpBuittonIsDisplay() === true && HomePage.userMenuButtonIsDisplay() === true) {
    console.log("Help and User Profile Dropdown Tab is display on home page")
  } else {
    throw new Error("HELP AND USER PROFILE TAB IS NOT DISPLAY");
  }

});

Then(/^"Schedule" and "Events" tab should be available in Header$/, {}, () => {

  if (HomePage.scheduleTabIsDisplayed() === true && HomePage.eventsTabIsDisplayed() === true) {
    console.log("Schedule and Event Tab is display on home page")
  } else {
    throw new Error("SHEDULE AND EVENT TAB IS NOT DISPLAY");
  }
});

Then(/^"Demio" logo should be available in top-left corner$/, {}, () => {
  if (HomePage.demioLogoIsDisplay() === true) {
    console.log("DEMIO LOGO IS FOUND");
  } else {
    throw new Error("DEMIO LOGO IS NOT FOUND")
  }

});

Then(/^Should redirected to Home page$/, {}, () => {

  HomePage.validateHomePage();
});

Then(/^User should be redirect to home page$/, {}, () => {
  HomePage.validateHomePage();
  browser.pause(6000);
  try {
    const frame = $("//iframe[@name='intercom-tour-frame']");
    browser.switchToFrame(frame);
    $("//div[@class='intercom-tour-step-header']//span").click();
  } catch (error) {

  }
});


Then(/^By default "Schedule" tab should be selected in Header$/, {}, () => {

  HomePage.checkSheduleTabByDefaultOpen();

});


Then(/^It should displayed options: "Chat With Us", "Knowledge Base" and "Demio University"$/, {}, () => {
  if (HomePage.chatWithUsIsDisplayed() === true && HomePage.knowledgeBaseIsDisplayed() === true && HomePage.demioUniversityIsDisplayed() === true) {
    console.log("Chat With Us, Knowledge Base and Demio University is display in help dropdown");
  } else {
    throw new Error("CHAT WITH US, KNOWLEDGE BASE AND DEMIO UNIVERSITY OPTIONS ARE NOT DISPLAY");
  }

});

Then(/^It should displayed options (.*)$/, {}, (options) => {
  if (options === 'Chat With Us' && HomePage.chatWithUsIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'Knowledge Base' && HomePage.knowledgeBaseIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else if (options === 'Demio University' && HomePage.demioUniversityIsDisplayed() === true) {
    console.log(options + "Is Displayed")
  } else {
    throw new Error('Somethings went worng with :>> ' + options + "Is not Displayed");
  }

});

Then(/^(.*) Should displayed to user$/, {}, (options) => {
  if (options === 'Profile' && HomePage.profileIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Settings' && HomePage.settingsIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Manage Accounts' && HomePage.manageAccountOptionIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Demio Fan Club Referrals' && HomePage.refferalProgramIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Product Updates' && HomePage.productUpdatesIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Logout' && HomePage.logOutIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Growth formula' && HomePage.growthFormulaIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Webinar Status' && HomePage.webinarStatusOptionIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'Statistic Data Storage' && HomePage.statisticDataStorageOptionIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else if (options === 'System' && HomePage.systemOptionIsDisplayed() === true) {
    console.log(options + "Is Displayed")
    browser.refresh();

  } else {
    throw new Error('Somethings went worng with :>> ' + options + "Is not Displayed");
  }
});

Then(/^It should displayed options: "All Upcoming", "All Past", "Upcoming Today", "Upcoming This Week" and "Upcoming This Month"$/, {}, () => {
  if (HomePage.allUpcomingIsDisplay() === true && HomePage.allPastIsDisplay() === true && HomePage.upcomingTodayIsDisplay() === true && HomePage.upcomingThisWeekIsDisplay() === true && HomePage.upcomingThisMonthIsDisplay() === true) {
    console.log("All Upcoming, All Past, Upcoming Today, Upcoming This Week and Upcoming This Month are display in schedule");
  } else {
    throw new Error("All Upcoming, All Past, Upcoming Today, Upcoming This Week and Upcoming This Month ARE NOT DISPLAY");
  }

});

Then(/^It should displayed all scheduled events (.*)$/, {}, (eventName) => {

  EventPage.validateScheduledEvent(eventName);

});

/*----------Start Login page code-------------*/

Then(/^User should redirect on "Forgot your password" screen$/, {}, () => {
  LoginPage.validateForgotYourPasswordScreen();
  browser.pause(6000);
});



Then(/^User should get (.*) message$/, {}, (informativeText) => {

  LoginPage.checkPasswordEmailValidation(informativeText)
})

Then(/^Should not redirected to "Home" page"$/, {}, () => {
  if (HomePage.scheduleTabIsExist() === false) {
    console.log("Login Failed")
  }
  else {
    throw new Error("User is bale tto loged in with invalid password");
  }

});

Then(/^User should redirected to "Forgot your password" page$/, {}, () => {
  LoginPage.validateForgotYourPasswordScreen();
});

Then(/^User should get informative message as (.*)$/, {}, (informativeText) => {

  LoginPage.checkForgotPasswordInformativeText(informativeText);

});


/*----------End of Login page code-------------*/

/*----------Strat Free Trial Sign Up page code-------------*/

Then(/^User should redirect on "Try Demio For Free" page$/, {}, () => {
  FreeTrialSignUpPage.validateTryDemioForFreePage();
  browser.pause(6000);
});

Then(/^User should be redirect to company name field$/, {}, () => {
  FreeTrialSignUpPage.validateCompanyNameField();
  browser.pause(6000);
});

/*----------End of Free Trial Sign Up page code-------------*/


/*----------Strat starter Sign Up page code-------------*/

Then(/^User should be redirected at "Set Password" screen$/, {}, () => {
  StarterSignUpPage.validateSetPasswordScreen();
  browser.pause(6000);
});



/*----------End of Starter Sign Up page code-------------*/


/*----------Strat Event page code-------------*/

Then(/^It should displayed with tabs: "All", "Standard", "Series", "Automated" and "Archived"$/, {}, () => {
  if (AllPage.allTabIsDisplayed() === true && StandardPage.standardTabIsDisplayed() === true && SeriesPage.seriesTabIsDisplayed() === true && AutomatedPage.automatedTabIsDisplayed() === true && ArchivedPage.archivedTabIsDisplayed() === true) {
    console.log("All, Standard, Series, Automated and Archived tabs are displayed in event");
  } else {
    throw new Error("All, Standard, Series, Automated and Archived tabs ARE NOT DISPLAY");
  }
});

Then(/^there should be "Add New Event" button available$/, {}, () => {
  EventPage.validateAddNewEventButton();
  browser.pause(6000);
});


Then(/^Event creation page should open$/, {}, () => {
  EventPage.validateEventCreationPage();
});

Then(/^"Create New Standard" page should open$/, {}, () => {
  StandardPage.validateCreateNewStandardEventPage();
});

Then(/^"Create New Series" page should open$/, {}, () => {
  SeriesPage.validateCreateNewSeriesEventPage();

});

Then(/^"Create New Automated" page should open$/, {}, () => {
  AutomatedPage.validateCreateNewAutomatedEventPage();
});

Then(/^Event validation message (.*) should displayed$/, {}, (validationMsg) => {

  EventPage.eventNameFieldValidation(validationMsg);

});


Then(/^It should displayed with searched item (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(600);
  const eventName = data[0];
  EventPage.validateSearchedEvent(eventName);

});

Then(/^It should display message (.*)$/, {}, (validationMsg) => {

  EventPage.validateNothingFoundValidation(validationMsg);
});

Then(/^User shall see "Standard" option to create a new standard event$/, {}, () => {

  if (StandardPage.addNewStandardIsDisplay() === true) {
    console.log("standard option is display on add new event screen");
  } else {
    throw new Error("STANDARD OPTION IS NOT DISPLAY ON ADD NEW EVENT SCREEN");
  }
});

Then(/^User shall see "Series" option to create a new series event$/, {}, () => {
  if (SeriesPage.addNewSeriesIsDisplay() === true) {
    console.log("Series option is display on add new event screen");
  } else {
    throw new Error("SERIES OPTION IS NOT DISPLAY ON ADD NEW EVENT SCREEN");
  }
});
Then(/^User shall see "Automated" option to create a new automated event$/, {}, () => {
  if (AutomatedPage.addNewAutomatedIsDisplay() === true) {
    console.log("Automated option is display on add new event screen");
  } else {
    throw new Error("AUTOMATED OPTION IS NOT DISPLAY ON ADD NEW EVENT SCREEN");
  }
});
Then(/^User shall see "BACK TO EVENTS" option for going back to Events page$/, {}, () => {
  if (EventPage.backToEventsIsDisplayed() === true) {
    console.log("Back to event button is display on add new event screen");
  } else {
    throw new Error("BACK TO EVENT BUTTON IS NOT DISPLAY ON ADD NEW EVENT SCREEN");
  }
});


Then(/^It should displayed all events "standardEvent" and "seriesEvent" and "automatedEvent" under all tab$/, {}, () => {
  if (StandardPage.standardTabIsDisplayed() === true) {
    console.log("standard event is displaying");
  } else {
    throw new Error("standard event is not displaying under all tab")
  }
  if (SeriesPage.seriesTabIsDisplayed() === true) {
    console.log("seris event is displaying");
  } else {
    throw new Error("series event is not displaying under all tab")
  }
  if (AutomatedPage.automatedTabIsDisplayed() === true) {
    console.log("automated event is displaying under all tab");
  } else {
    throw new Error("automated event is not displaying under all tab");
  }
});

Then(/^It should displayed only Standard events (.*)$/, {}, (event) => {

  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const standardEvent = data[0];
  if (EventPage.validateEventIsDispaly(standardEvent) === true) {
    console.log('standard event is displaying under standard tab');
  } else {
    throw new Error("standard event is not displaying under tab")
  }

});

Then(/^It should displayed only Series events (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const seriesEvent = data[0];
  if (EventPage.validateEventIsDispaly(seriesEvent) === true) {
    console.log('series event is displaying under series tab');
  } else {
    throw new Error("series event is not displaying under tab")
  }

});
Then(/^It should displayed only Automated events (.*)$/, {}, (event) => {
  var data = TestUtils.getAutomatedEventData(event); //Retrive data from excel
  browser.pause(6000);
  const automatedEvent = data[0];
  if (EventPage.validateEventIsDispaly(automatedEvent) === true) {
    console.log('automated event is displaying under automated tab');
  } else {
    throw new Error("automated event is not displaying under tab")
  }

});


Then(/^User should able to click on "Continue" button$/, {}, () => {
  EventPage.clickOnContinueButton();
});

Then(/^User should be able to select available option (.*)$/, {}, (option) => {
  if (EventPage.selectedHowOftenOptionIsDisplay(option) === true) {
    console.log("How often dropdown option is selected");
  } else {
    throw new Error("failed to select how often dropdown option");
  }
});


Then(/^User should not able to select past date$/, {}, () => {
  EventPage.clickOnSelectDateField();
  EventPage.validateDisablesPastDate();

});


Then(/^User should only be able to select current or future dates only$/, {}, () => {
  EventPage.clickAddToEventScheduleButton();
  EventPage.validateManageEventScreen();

});


Then(/^User should able to see added predefined field (.*)$/, {}, (field) => {
  EventPage.validatePredefinedFieldOnRegPage(field);

});

Then(/^Added custom field is displayed on registration page (.*)$/, {}, (label) => {
  EventPage.validateCustomFieldOnRegPage(label);

});


/*----------End of Event page code-------------*/

/*----------Strat Standard Event page code-------------*/
Then(/^User should be redirected to "Create New Standard Event" Screen$/, {}, () => {
  StandardPage.validateCreateNewStandardEventPage();
});

Then(/^User shall see "Event Name" field$/, {}, () => {
  if (EventPage.eventNameFieldIsDisplayed() === true) {
    console.log("Event name field is display");
  } else {
    throw new Error("EVENT NAME FIELD IS NOT DISPLAY");
  }
});

Then(/^User shall see "Event Host" name$/, {}, () => {
  if (EventPage.eventHostNameIsDisplayed() === true) {
    console.log("Event host name is display");
  } else {
    throw new Error("EVENT HOST NAME IS NOT DISPLAY");
  }
});

Then(/^User shall see "Swap Host" button$/, {}, () => {
  if (EventPage.swapHostButtonIsDisplayed() === true) {
    console.log("Swap host button is display");
  } else {
    throw new Error("SWAP HOST BUTTON IS NOT DISPLAY");
  }
});

Then(/^User shall see "Continue" button$/, {}, () => {
  if (EventPage.continueButtonIsDispaly() === true) {
    console.log("CONTINUE button is display");
  } else {
    throw new Error("CONTINUE BUTTON IS NOT DISPLAY");
  }
});

Then(/^User shall see "EVENT TYPES" button$/, {}, () => {
  if (EventPage.eventTypeButtonIsDisplay() === true) {
    console.log("Event types button is display");
  } else {
    throw new Error("EVENT TYPES BUTTON IS NOT DISPLAY");
  }
});

Then(/^User should be redirected to "Manage event" screen$/, {}, () => {
  EventPage.validateManageEventScreen();
});



Then(/^User shall see "Summary","Customize","Share" and "Activity" Tabs$/, {}, () => {
  if (EventPage.summaryTabIsDisplay() == true && EventPage.customizeTabIsDisplay() == true && EventPage.shareTabIsDisplay() == true && EventPage.activityTabIsDisplay() == true) {
    console.log("summary,customize,share and activity tabs are displaying")
  } else {
    throw new Error("SUMMARY,CUSTOMIZE,SHARE AND ACTIVITY TABS ARE NOT DISPLAYED");
  }
});

Then(/^User shall see "JOIN ROOM" button$/, {}, () => {
  if (EventPage.joinRoomButtonIsDisplay() == true) {
    console.log("Join room button is display")
  } else {
    throw new Error("JOIN ROOM BUTTON IS NOT DISPLAY");
  }
});

Then(/^User shall see "Schedule this Event" button$/, {}, () => {
  if (EventPage.scheduleThisEventIsDisplay() == true) {
    console.log("Schedule this event button is display")
  } else {
    throw new Error("SCHEDULE THIS EVENT BUTTON IS NOT DISPLAY");
  }
});

Then(/^User shall see "Edit" button alongside Event name$/, {}, () => {
  if (EventPage.sessionEditIconIsDispaly() == true) {
    console.log("session edit icon is display")
  } else {
    throw new Error("SESSION EDIT ICON IS NOT DISPLAY");
  }
});

Then(/^User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option$/, {}, () => {
  if (EventPage.upcomingSessionIsDisplay() === true && EventPage.pastSessionsIsDisplay() === true && EventPage.blackOutDatesIsDisplay() === true) {
    console.log("Upcoming Sessions,Past Sessions and Blackout Dates options are display");
  } else {
    throw new Error("Upcoming Sessions,Past Sessions and Blackout Dates options are not display")
  }
});

Then(/^User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"$/, {}, () => {
  EventPage.openSessionOptionsList();
  if (EventPage.viewRegistrationPageIsDisplay() == true && EventPage.duplicateEventOptionIsDisplay() == true && EventPage.archiveEventOptionIsDisplay() == true) {
    console.log("View registration page, duplicate event, archive event options are display");
  } else {
    throw new Error("View registration page, duplicate event, archive event options are not display in dropdown list")
  }
});


Then(/^User should be redirected to Schedule Upcoming session menu$/, {}, () => {
  EventPage.validateScheduleUpcomingSessionPage();
});

Then(/^User shall see "Single Date & Time" and "Recurring Times" options$/, {}, () => {
  if (EventPage.singleDateAndTimeIsDisplay() == true && EventPage.recurringTimeOptionIsDisplay() == true) {
    console.log("Single Date & Time and Recurring Times options are displayed");
  } else {
    throw new Error("Single Date & Time and Recurring Times are not display")
  }
});
Then(/^By default "Single Date & Time" option should be selected$/, {}, () => {
  EventPage.singleDateAndTimeOptionSelected();
});

Then(/^User shall see "Select Date" field$/, {}, () => {
  if (EventPage.selectDateFieldIsDisplay() == true) {
    console.log("select date field is displayed")
  } else {
    throw new Error("SELECT DATE FIELD IS NOT DISPLAYED");
  }
});

Then(/^User shall see "Select time" field$/, {}, () => {
  if (EventPage.selectTimeFieldIsDisplay() == true) {
    console.log("select time field is displayed")
  } else {
    throw new Error("SELECT TIME FIELD IS NOT DISPLAYED");
  }
});

Then(/^User shall see "Add to Event schedule" button$/, {}, () => {
  if (EventPage.addToEventScheduleIsDisplay() == true) {
    console.log("add to event schedule button is displayed")
  } else {
    throw new Error("ADD TO EVENT SCHEDULE BUTTON IS NOT DISPLAYED");
  }
});

Then(/^Success message (.*) should display$/, {}, (message) => {
  browser.pause(1000);
  var actMessage = EventPage.validateSuccessMessage();
  var expMessage = message;
  if (actMessage.includes(expMessage)) {
    console.log("Success validation message matched");
    browser.pause(3000);
  } else {

    throw new Error("SUCCESS VALIDATION MESSAGE MISSMATCHED actualMessage>>" + actMessage + "Expected message>>" + expMessage);
  }

});

Then(/^Created session should display under upcoming sessions$/, {}, () => {
  browser.pause(2000);
  if (EventPage.eventUnderUpcomingSessionTab() === true) {
    console.log("Event details added under upcoming session tab");
  } else {
    throw new Error("EVENT IS NOT DISPLAY UNDER UPCOMING SESSION TAB");
  }
});

Then(/^"How often" dropdown should also display along with "select date" and "select time" fields$/, {}, () => {
  if (EventPage.howOftenDropDownIsDisplay() === true) {
    console.log("how often ? dropdown is display");
  } else {
    throw new Error("How often? dropdown option is not dispaly");
  }
});

Then(/^Success message "Recurring sessions scheduled" should display$/, {}, () => {
  var actMessage = EventPage.validateSuccessMessage();
  var expMessage = "Recurring sessions scheduled";
  if (actMessage.includes(expMessage)) {
    console.log("Success validation message matched");
  } else {
    console.log("actualMessage>>" + actMessage + "Expected message>>" + expMessage);
    throw new Error("SUCCESS VALIDATION MESSAGE MISSMATCHED");
  }

});

Then(/^User shall see "event registration link"$/, {}, () => {
  if (EventPage.eventRegistrationLinkIsDisplay() == true) {
    console.log("Event registration link is display")
  } else {
    throw new Error("EVENT REGICTRATION LINK IS NOT DISPLAYED");
  }
});

Then(/^User should be able to copy the link$/, {}, () => {
  EventPage.clickOnCopyLinkButton();
  EventPage.validateCopiedLinkMessage();
});

Then(/^User shall see "facebook","twitter" and "linkedin" logo for sharing the link$/, {}, () => {
  if (EventPage.facebookLogoIsDisplay() == true && EventPage.twitterLogoIsDisplay() == true && EventPage.linkedinLogoIsDisplay() == true) {
    console.log("facebook,twitter and linkedin logo display for sharing the link");
  } else {
    throw new Error("facebook,twitter and linkedin logo not display for sharing the link");
  }
});

Then(/^User shall see "Embed options" option$/, {}, () => {
  if (EventPage.embedOptionsTabIsDisplay() == true) {
    console.log("Embed options tab is display")
  } else {
    throw new Error("EMBED OPTIONS TAB IS NOT DISPLAY");
  }
});

Then(/^User shall see "Inline embed" and "PopOver embed" tab$/, {}, () => {
  if (EventPage.inlineEmbedTabIsDisplay() === true && EventPage.popOverEmbedTabIsDisplay() === true) {
    console.log("Inline embed and PopOver embed tabs are display")
  } else {
    throw new Error("Inline embed and PopOver embed tabs are not displayed");
  }
});

Then(/^User shall see "Inline Embed Style :" dropdown$/, {}, () => {
  if (EventPage.inlineEmbedStyleButtonIsDisplay() == true) {
    console.log("Inline embed style drop down button is display")
  } else {
    throw new Error("Inline embed style button is not displayed");
  }
});

Then(/^For automated event user shall see "Inline Embed Style :" dropdown$/, {}, () => {
  if (AutomatedPage.inlineEmbedStyleButtonIsDisplay() == true) {
    console.log("Inline embed style drop down button is display")
  } else {
    throw new Error("Inline embed style button is not displayed");
  }
});

Then(/^User shall see "Button Color :" button with preview of selected color$/, {}, () => {
  if (EventPage.buttonColorUnderInlineEmbedIsDisplay() == true) {
    console.log("Button color is display")
  } else {
    throw new Error("Button color is not displayed");
  }
});

Then(/^User should able to see "Button Text" field$/, {}, () => {
  if (EventPage.buttonTextIputFieldIsDisplayed() === true) {
    console.log("Button text input field is display")
  } else {
    throw new Error("Button text input field is not displayed");
  }
});
Then(/^User shall see "Responsive" checkbox and "Form Width" field$/, {}, () => {
  if (EventPage.responsiveCheckBoxIsDisplay() == true && EventPage.formWidthFieldIsDisplay() == true) {
    console.log("Responsive checkbox and form width fields are display")
  } else {
    throw new Error("Responsive checkbox and form width fields are not displayed");
  }
});

Then(/^User shall see "Embed Code" non-editable Text area$/, {}, () => {
  if (EventPage.embedCodeFieldIsDisplay() == true) {
    console.log("embed code text field is display")
  } else {
    throw new Error("Embed code text field is not displayed");
  }
});

Then(/^User shall see Preview of the registration form$/, {}, () => {
  if (EventPage.previewRegistrationFormIsDisplay() == true) {
    console.log("Preview registration form is display")
  } else {
    throw new Error("Preview registration form is not displayed");
  }
});

Then(/^By default "Inline embed " option should be selected$/, {}, () => {
  EventPage.validateInlineEmbedIsSelected();
});

Then(/^User should be able to select any option from "Inline Embed Style" dropdown (.*)$/, {}, (option) => {
  EventPage.clickOnInlineEmbedStyle();
  EventPage.selectInlineEmbedStyle(option);
});


Then(/^For automated event user should be able to select any option from "Inline Embed Style" dropdown (.*)$/, {}, (option) => {
  AutomatedPage.clickOnInlineEmbedStyle();
  EventPage.selectInlineEmbedStyle(option);
});

Then(/^User should not be redirected to any page when clicked on register button$/, {}, () => {
  if (EventPage.inlineEmbedStyleButtonIsDisplay() == true) {
    console.log("User is not redirect on another page after clicking on registration button")
  } else {
    throw new Error("USER REDIRECT ON ANOTHER PAGE AFYER CLICK ON REGISTRATION BUTTON");
  }
});
Then(/^For automated event User should not be redirected to any page when clicked on register button$/, {}, () => {
  if (AutomatedPage.inlineEmbedStyleButtonIsDisplay() == true) {
    console.log("User is not redirect on another page after clicking on registration button")
  } else {
    throw new Error("USER REDIRECT ON ANOTHER PAGE AFYER CLICK ON REGISTRATION BUTTON");
  }
});

Then(/^User should be able to mark or unmark the "Responsive" checkbox$/, {}, () => {
  EventPage.markResponsiveCheckBox();

});

Then(/^User should be able to change the Form width (.*)$/, {}, (formWidth) => {
  EventPage.addFormWidthData(formWidth);
  // EventPage.validateUpdatedFormWidth(formWidth);
});

Then(/^User enter values (.*) and (.*) in fields of form preview and click on register button$/, {}, (firstName, email) => {
  browser.pause(5000);
  EventPage.addPreviewFirstNameFieldData(firstName);
  EventPage.addPreviewEmailField(email);
  EventPage.clickOnPreviewRegistrationButton();
});

Then(/^User should be able to edit the button text (.*)$/, {}, (buttonText) => {
  EventPage.validateUpdatedButtonText(buttonText);
});

Then(/^User should be able to change the color of the button from the Button color option (.*)$/, {}, (colorCode) => {
  EventPage.clickOnButtonColorUnderInlineEmbed();
  EventPage.addNewColorCode(colorCode);
  // browser.refresh();
  // browser.pause(10000);
  // EventPage.clickOnEmbedOptionsTab();
  EventPage.colorCoverClick();
  browser.pause(1000);
  EventPage.validateUpdatedButtonColorUnderInlineEmbed(colorCode);
});


Then(/^User shall see "Popover Embed Style" dropdown$/, {}, () => {
  if (EventPage.popoverEmbedStyleDisplay() == true) {
    console.log("Popover embed style button is display")
  } else {
    throw new Error("Popover embed style button is not display under popover");
  }

});

Then(/^For automated event user shall see "Popover Embed Style" dropdown$/, {}, () => {
  if (AutomatedPage.popoverEmbedStyleDisplay() == true) {
    console.log("Popover embed style button is display")
  } else {
    throw new Error("Popover embed style button is not display under popover");
  }

});
Then(/^User shall see "Button color" button with color preview$/, {}, () => {
  if (EventPage.popoverButtonColorIsDisplay() == true) {
    console.log("Button color is display")
  } else {
    throw new Error("Button color is not displayed under popover");
  }

});

Then(/^User shall see "Button size" options$/, {}, () => {
  if (EventPage.buttonSizeSmallIsDisplay() == true && EventPage.buttonSizeMediumIsDisplay() == true && EventPage.buttonSizeLargeIsDisplay() == true) {
    console.log("Button size small,medium and large are display")
  } else {
    throw new Error("Button size small,medium and large are not display under popover");
  }

});

Then(/^User shall see "Button Text" field under popover screen$/, {}, () => {
  if (EventPage.buttonTextFieldInPopoverIsDisplay() == true) {
    console.log(" Button text field is display")
  } else {
    throw new Error(" Button text field is not displayed under popover");
  }

});

Then(/^User shall see "Popover Button Text" field$/, {}, () => {
  if (EventPage.popoverButtonTextFieldIsDisplay() == true) {
    console.log("Popover Button text field is display")
  } else {
    throw new Error("Popover Button text field is not displayed under popover");
  }

});

Then(/^User shall see "Embed Code" non-editable Text area under popover screen$/, {}, () => {
  if (EventPage.popoverEmbedCodeIsDisplay() == true) {
    console.log("embed code text field is display")
  } else {
    throw new Error("Embed code text field is not displayed under popover");
  }

});

Then(/^User shall see Register button under Preview of the registration form$/, {}, () => {
  if (EventPage.previewRegisterButtonIsDisplay() == true) {
    console.log("Preview register button is display")
  } else {
    throw new Error("Preview register button is not displayed under popover");
  }

});

Then(/^User shall see "Responsive" checkbox and "Form Width" field under popover screen$/, {}, () => {
  browser.pause(2000);
  if (EventPage.popoverRresponsiveCheckIsDisplay() == true && EventPage.popoverButtonWidthFieldIsDisplay() == true) {
    console.log("Responsive checkbox and form width fields are display");
  } else {
    throw new Error("Responsive checkbox and form width fields are not displayed under popover screen");
  }
});

Then(/^User should be able to change the color (.*) of the button from the Button color option in popover screen$/, {}, (color) => {
  EventPage.clickOnPopoverButtonColor();
  EventPage.addNewColorCode(color);
  // browser.refresh();
  // browser.pause(10000);
  // EventPage.clickOnEmbedOptionsTab();
  // EventPage.clickOnPopoverEmbedOption();
  browser.pause(1000);
  EventPage.colorCoverClick();
  browser.pause(1000);
  EventPage.updatedPopoverButtonColor(color);
});


Then(/^User should be able to select any option from "Popover Embed Style" dropdown (.*)$/, {}, (style) => {
  EventPage.selectPopoverEmbedStyle(style);
});

Then(/^For automated event user should be able to select any option from "Popover Embed Style" dropdown (.*)$/, {}, (style) => {
  AutomatedPage.selectPopoverEmbedStyle(style);
});
Then(/^popup with registration form fields should display for (.*)$/, {}, (event) => {
  var data = TestUtils.getAutomatedEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validatePopUpRegistrationForm(eventName);

});

Then(/^popup with registration form fields for standard event should display for (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validatePopUpRegistrationForm(eventName);

});

Then(/^popup with registration form fields for series event should display (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validatePopUpRegistrationForm(eventName);

});


Then(/^Enter first name (.*) and email (.*) in registration form fields$/, {}, (firstName, email) => {
  EventPage.addPopupRegistrationData(firstName, email);

});
Then(/^For standard event (.*) User should be on same registration popup$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validatePopUpRegistrationForm(eventName);

});

Then(/^For series event User should be on same registration popup page (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validatePopUpRegistrationForm(eventName);

});

Then(/^User should be on same registration popup (.*)$/, {}, (event) => {
  var data = TestUtils.getAutomatedEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validatePopUpRegistrationForm(eventName);

});

Then(/^User should be able to mark or unmark the "Responsive" checkbox under popover embed page$/, {}, () => {
  EventPage.markResponsiveCheckBox();

});

Then(/^User should able to change the Button width (.*)$/, {}, (buttonWidth) => {
  EventPage.addButtonWidthData(buttonWidth);
  EventPage.validateUpdatedButtonWidth(buttonWidth);

});

Then(/^User should able to update button text in popoer embed screen$/, {}, () => {
  EventPage.validateUpdatedButtonTextInPopover();

});

Then(/^User should able to update popover button text$/, {}, () => {
  EventPage.validateUpdatedPopoverButtonText();

});
Then(/^User shall see "Registration" tab$/, {}, () => {
  if (EventPage.registrationTabIsDisplay() == true) {
    console.log("Registration tab is display")
  } else {
    throw new Error("REGISTRATION TAB IS NOT DISPLAY");
  }

});
Then(/^User shall see "Email Notifications" tab$/, {}, () => {
  if (EventPage.emailNotificationsTabIsDisplay() == true) {
    console.log("Email notifications tab is display")
  } else {
    throw new Error("EMAIL NOTIFICATIONS TAB IS NOT DISPLAY");
  }
});
Then(/^User shall see "Room" tab$/, {}, () => {
  if (EventPage.roomTabIsDisplay() == true) {
    console.log("Room tab is display")
  } else {
    throw new Error("ROOM TAB IS NOT DISPLAY");
  }
});

Then(/^User shall see "Event Admins" tab$/, {}, () => {
  if (EventPage.eventAdminsTabIsDisplay() == true) {
    console.log("event admins tab is display")
  } else {
    throw new Error("EVENT ADMINS TAB IS NOT DISPLAY");
  }

});
Then(/^User shall see "General" tab$/, {}, () => {
  if (EventPage.generalTabIsDisplay() == true) {
    console.log("General tab is display")
  } else {
    throw new Error("GENERAL TAB IS NOT DISPLAY");
  }

});
Then(/^User shall see "Integrations" tab$/, {}, () => {
  if (EventPage.integrationsTabIsDisplay() == true) {
    console.log("Integrations tab is display")
  } else {
    throw new Error("INTEGRATIONS NOTIFICATIONS TAB IS NOT DISPLAY");
  }

});

Then(/^User shall see "Customize Registration","Edit Form Fields" and "Settings" option$/, {}, () => {
  if (EventPage.customizeRegistrationIsDisplay() == true && EventPage.editFormFieldIsDisplay() && EventPage.settingsButtonIsDisplay()) {
    console.log("customize registration,edit form fields and settings options are display")
  } else {
    throw new Error("CUSTOMIZE REGISTRATION,EDIT FORM FIELD AND SETTINGS OPTIONS ARE NOT DISPLAYED");
  }

});

Then(/^By default "Customize Registration" should selected$/, {}, () => {
  EventPage.customizeRegistrationIsSelected();
});

Then(/^User shall see "Custom Thankyou Page" toggle button$/, {}, () => {
  if (EventPage.customThankyouToggleIsDisplay() == true) {
    console.log("Custom thankyou page toggle button is display")
  } else {
    throw new Error("CUSTOM THANKYOU PAGE TOGGLE BUTTON IS NOT DISPLAY");
  }

});

Then(/^User shall see "Customize" button$/, {}, () => {
  if (EventPage.customizeButtonIsDisplay() == true) {
    console.log("Customize button is display")
  } else {
    throw new Error("CUSTOMIZE BUTTON IS NOT DISPLAY");
  }

});

Then(/^User shall see "First Name" option with dropdown "Show API Details"$/, {}, () => {
  if (EventPage.firstNameOptionIsDisplay() == true && EventPage.firstNameDropDownIsDisplay() == true && EventPage.showApiDetailsForNameIsDispaly() == true) {
    console.log("first name option with dropdown option show API Details are display")
  } else {
    throw new Error("first name option with dropdown option show API Details are not display");
  }

});

Then(/^User shall see "Email" option with dropdown "Show API Details"$/, {}, () => {
  if (EventPage.emailOptionIsDisplay() == true && EventPage.emailDropDownIsDisplay() == true && EventPage.showApiDetailsForEmailIsDispaly() == true) {
    console.log("email option with dropdown option show API Details are display")
  } else {
    throw new Error("Email option with dropdown option show API Details are not display");
  }

});

Then(/^User shall see "Enhanced Validation" toggle button$/, {}, () => {
  if (EventPage.enhansedValidationBtnIsDispaly() == true) {
    console.log("enhansed validation toggle button is display")
  } else {
    throw new Error("ENHANSED VALIDATION TOGGLE BUTTN IS NOT DISPLAY");
  }

});



Then(/^User shall see "ADD ANOTHER FIELD" option$/, {}, () => {
  if (EventPage.addAnotherFieldIsDispaly() == true) {
    console.log("Add anothe field option is display")
  } else {
    throw new Error("ADD ANOTHER FIELD OPTION IS NOT DISPLAY");
  }

});

Then(/^User shall see "Session Registration Limit" toggle button$/, {}, () => {
  if (EventPage.sessionRegistrationToggleDispaly() == true) {
    console.log("Session registration limit toggle is display")
  } else {
    throw new Error("SESSION REGISTRATION LIMIT TOGGLE IS NOT DISPLAY");
  }

});

Then(/^User shall see "Visible Upcoming Sessions" field$/, {}, () => {
  if (EventPage.visibleUpcomingSessionDisplay() == true) {
    console.log("Visible upcoming session field is display")
  } else {
    throw new Error("VISSIBLE UPCOMING SESSION FIELD IS NOT DISPLAY");
  }

});

Then(/^User should be on Event Customization page$/, {}, () => {
  if (EventPage.registrationTabIsDisplay() == true) {
    console.log("Event customize page is loaded")
  } else {
    throw new Error("EVENT CUSTOMIZE PAGE IS NOT LOADED");
  }

});


Then(/^User should be redirected to Registration page editor with Preview of Registration page$/, {}, () => {
  EventPage.validateEditorPage();
});


Then(/^User shall see "Save and Close" button$/, {}, () => {
  if (EventPage.saveAndCloseButtonIsDispaly() == true) {
    console.log("Save and close button displaying")
  } else {
    throw new Error("SAVE AND CLOSE BUTTON IS NOT DISPLAYING");
  }

});


Then(/^User shall see following dropdowns "Template","Branding","Elements","Social"$/, {}, () => {
  if (EventPage.templateDropDownIsDisplay() == true && EventPage.brandingDropDownIsDisplay() == true && EventPage.elementsDropDownIsDisplay() == true && EventPage.socialDropDownIsDisplay() == true) {
    console.log("template,branding,elements and social dropDown lists are displaying")
  } else {
    throw new Error("template,branding,elements and social dropDown lists are not displaying");
  }

});

Then(/^User shall see "Accent","Gradient" and "Background Image" options in the dropdown$/, {}, () => {
  EventPage.clickOnTemplateMenuButton();
  if (EventPage.accentOptionIsDispaly() == true && EventPage.gradentOptionIsDispaly() == true && EventPage.backGroundImgOptionIsDispaly() == true) {
    console.log("Accent,Gradient and Background Image lists are displaying");
    EventPage.clickOnTemplateMenuButton();
  } else {
    throw new Error("Accent,Gradient and Background Image lists are displaying are not displaying");
  }

});

Then(/^User shall see "Upload image" option$/, {}, () => {
  if (EventPage.uploadImageOptionIsDsipaly() == true) {
    console.log("upload image button displaying")
  } else {
    throw new Error("UPLOAD IMAGE OPTION IS NOT DISPLAYING");
  }

});

Then(/^User shall see "Upload image" option for automated event$/, {}, () => {
  if (EventPage.uploadImageOptionForAutoIsDsipaly() == true) {
    console.log("upload image button displaying")
  } else {
    throw new Error("UPLOAD IMAGE OPTION IS NOT DISPLAYING");
  }

});



Then(/^User shall see "Edit Setting" Button for graph settings$/, {}, () => {
  if (EventPage.editSettingsButtonIsDispaly() == true) {
    console.log("edit settings button displaying")
  } else {
    throw new Error("EDIT SETTINGS BUTTON IS NOT DISPLAYING");
  }

});

Then(/^User shall see "Color scheme " option with color preview$/, {}, () => {
  if (EventPage.colorSchemeOptionIsDispaly() == true) {
    console.log("Color scheme option displaying")
  } else {
    throw new Error("COLOR SCHEME OPTION IS NOT DISPLAYING");
  }

});

Then(/^following toggle buttons should display "Headline","SubHeadline","Video","Description","Featured Presenters"$/, {}, () => {
  if (EventPage.headlineToggleIsDispaly() == true && EventPage.subHeadlineToggleIsDispaly() == true && EventPage.videoToggleButtonIsDispaly() == true && EventPage.descriptionToggleIsDisplay() == true && EventPage.featuredPresentersToggleIsDisplay() == true) {
    console.log("Headline,SubHeadline,Video,Description and Featured Presenters toggle buttons are displaying")
  } else {
    throw new Error("Headline,SubHeadline,Video,Description and Featured Presenters toggle buttons are not displaying");
  }

});

Then(/^User should be able to On or Off enhanced validation button$/, {}, () => {
  EventPage.onEnhansedValidationToggleButton();
  EventPage.offEnhansedValidationToggleButton();

});

Then(/^User shall see options "Last Name","Website","Company","Phone Number" ,"GDPR" and "Create a Custom Field" option$/, {}, () => {
  if (EventPage.lastNameOptionIsDispaly() == true && EventPage.websiteOptionIsDispaly() == true && EventPage.companyOptionIsDispaly() == true && EventPage.phoneNumberOptionIsDispaly() == true && EventPage.gdprOptionIsDispaly() == true && EventPage.createCustomFieldIsDispaly() == true) {
    console.log("Last Name,Website,Company,Phone Number,GDPR,Create a Custom Field options are displaying")
  } else {
    throw new Error("Last Name,Website,Company,Phone Number,GDPR,Create a Custom Field options are not displaying");
  }

});

Then(/^User shall see "Add Another Field" pop-up$/, {}, () => {
  EventPage.validateAddAnotherFieldPopup();

});

Then(/^User shall see "Select Field Option" dropdown button$/, {}, () => {
  if (EventPage.selectFieldDropDownIsDispaly() == true) {
    console.log("Select field option dropdown is displaying")
  } else {
    throw new Error("Select field option dropdown is not displaying");
  }

});

Then(/^User should be able to add any field "Last Name","Website","Company","Phone Number" and make it Required or not as per needed$/, {}, () => {
  if (EventPage.selectFieldDropDownIsDispaly() == true) {
    console.log("Select field option dropdown is displaying")
  } else {
    throw new Error("Select field option dropdown is not displaying");
  }

});
Then(/^User should able to make it Required or not as per needed$/, {}, () => {
  if (EventPage.selectFieldDropDownIsDispaly() == true) {
    console.log("Select field option dropdown is displaying")
  } else {
    throw new Error("Select field option dropdown is not displaying");
  }

});

Then(/^User should be able to add any field (.*)$/, {}, (field) => {
  EventPage.validateNewAddedField(field);

});

Then(/^User shall see "Select Field Type" dropdown option$/, {}, () => {
  EventPage.selectFieldTypeDropDownIsDisplay();

});

Then(/^User shall see options "Text","TextArea","Dropdown","Checkbox"$/, {}, () => {
  if (EventPage.textOptionIsDispaly() == true) {
    console.log("Text options is displaying")
  } else {
    throw new Error("Text option is not displaying");
  }

  if (EventPage.textAreaOptionIsDispaly() == true) {
    console.log("text area option is displaying")
  } else {
    throw new Error("text area option is not displaying");
  }

  if (EventPage.dropDownOptionIsDispaly() == true) {
    console.log("dropdown option is displaying")
  } else {
    throw new Error("dropdown option is not displaying");
  }

  if (EventPage.checkBoxOptionIsDispaly() == true) {
    console.log("checkbox option is displaying")
  } else {
    throw new Error("checkbox option is not displaying");
  }

});

Then(/^User selects any field type option (.*)$/, {}, (option) => {
  EventPage.selectEventTypeOption(option);

});

Then(/^User should able to add label (.*)$/, {}, (label) => {
  EventPage.addLabelFieldData(label);

});

Then(/^User Should be able to drag and drop the fields to up and down$/, {}, () => {
  EventPage.dragAndDropField();

});


Then(/^User Should be able to change the template view from the options "Accent","Gradient","Background Image" (.*)$/, {}, (option) => {
  EventPage.selectTemplate(option);
  browser.pause(500);
});

Then(/^User Should be able to upload image (.*) of the logo by clicking on "Upload Image" option$/, {}, (image) => {
  EventPage.updateBrandingImage(image);
  browser.pause(5000);

});
Then(/^User shall see the Uploaded Image in the Upload Image box.$/, {}, () => {
  if (EventPage.uploadedImageInBoxIsDispaly() == true) {
    console.log("image uploaded successfully")
  } else {
    throw new Error("USER IS FAILD TO UPLOAD IMAGE");
  }

});

Then(/^User should be able to change the color scheme by clicking on color scheme option (.*)$/, {}, (colorCode) => {
  EventPage.clickOnButtonColor();
  EventPage.addNewColorCode(colorCode);

  EventPage.colorCoverClick();
  browser.pause(1000);

});

Then(/^User shall see the changed color in the background of Preview Screen (.*)$/, {}, (colorCode) => {

  EventPage.validateUpdatedBrandingColor(colorCode);
});
Then(/^For registration User shall see the changed color in the background of Preview Screen (.*)$/, {}, (colorCode) => {

  EventPage.validateUpdatedBrandingColorForReg(colorCode);
});

Then(/^User Should be able to upload image of the logo by clicking on "Upload Image" option for automated event (.*)$/, {}, (image) => {

  AutomatedPage.updateBrandingImage(image);

});

Then(/^User Shall see the preview as per the option selected$/, {}, () => {
  EventPage.validateUpdatedTemplate();

});


Then(/^User should be on event editor screen$/, {}, () => {
  EventPage.validateEditorPage();

});

Then(/^User Should be able to turn on and Off "Headline" button and shall see the change in Preview$/, {}, () => {
  EventPage.validateHeadlineButton();

});



Then(/^User shall see the saved "Subheadline" below the headline (.*) in the preview screen$/, {}, (subheadline) => {
  EventPage.validateSubheadlinePreview(subheadline);

});

Then(/^User should be able to enter the "Subheadline" (.*) in "Subheadline" field$/, {}, (subheadline) => {
  EventPage.addSubheadlineField(subheadline);

});

Then(/^User should be able to add "Video Url" (.*) in "VIDEO URL" field$/, {}, (videoLink) => {
  EventPage.addUrlInVideoLinkField(videoLink);

});

Then(/^User shall the Saved Video (.*) at the bottom of Preview screen below video$/, {}, (videoLink) => {
  EventPage.validateVideoInPreview(videoLink);

});

Then(/^User should be able to enter the "Description" (.*) in "Description" field$/, {}, (description) => {
  EventPage.addDescriptionField(description);

});

Then(/^User shall see the saved "Description" below the headline (.*) in the preview screen$/, {}, (description) => {
  EventPage.validateDescriptionInPreview(description);

});

Then(/^User should be able to Upload the Presenter Photo (.*)$/, {}, (photo) => {
  EventPage.addPresenterPhoto(photo);

});

Then(/^User should be able to Enter "Presenter Name" (.*),"Presenter Title" (.*),"Presenter Website" (.*),"Presenter Bio" (.*)$/, {}, (presenterName, presenterTitle, presenterWebsite, presenterBio) => {
  EventPage.addPresenterNameField(presenterName);
  EventPage.addPresenterTitleField(presenterTitle);
  EventPage.addPresenterWebsiteField(presenterWebsite);
  EventPage.addPresenterBioField(presenterBio);

});

Then(/^User shall see the Added Presenter with name (.*), title (.*), Website (.*) and bio (.*) at the Bottom of the preview screen below description$/, {}, (presenterName, presenterTitle, presenterWebsite, presenterBio) => {
  EventPage.valiadtePresenterDetailsInPreview(presenterName, presenterTitle, presenterWebsite, presenterBio);


});


Then(/^User should be able to Upload Social image (.*) by clicking at "Upload Image" option$/, {}, (image) => {
  EventPage.uploadSocialImage(image);

});

Then(/^User shall see the uploaded image in the "Upload Image" box$/, {}, () => {
  if (EventPage.socialImageInPreviewIsDispaly() === true) {
    console.log("Social image is displaying in preview")
  } else {
    throw new Error("SOCIAL IMAGE IS NOT DISPLAYING IN PREVIEW");
  }

});

Then(/^User should be able to Enter values in "Title" (.*) and "Description" (.*) fields$/, {}, (title, description) => {
  browser.pause(1000);
  EventPage.addTitleField(title);
  EventPage.addSocialDescriptionField(description);

});

Then(/^User shall see the changes image,title (.*) and Description (.*) at open graph pop up screen$/, {}, (title, description) => {
  EventPage.validateUpdatedSocialImage();
  EventPage.validateUpdatedTitle(title);
  EventPage.validateUpdatedDescription(description);
  browser.pause(3000);
  const closeButton = $("(//button[@aria-label='Close'])");
  closeButton.waitForDisplayed({ timeout: 30000 });
  closeButton.click();
});


Then(/^User Should be redirected back to Customize Registration screen$/, {}, () => {
  if (EventPage.customizeButtonIsDisplay() === true) {
    console.log("User successfully redirect on customize registration page")
  } else {
    throw new Error("SAVE AND BACK BUTTON IS NOT WORKING");
  }

});



Then(/^User should be able to Upload Social image by clicking at "Upload Image" option for automated event (.*)$/, {}, (image) => {
  AutomatedPage.uploadSocialImage(image);

});



Then(/^All the Changes (.*) and (.*) must reflect at Event Registration Page$/, {}, (subheadline, videoLink) => {
  EventPage.switchToRegistrationWindow();
  EventPage.validateChangesOnRegPage(subheadline, videoLink);

});

Then(/^User should be able to Increase and decrease the number of sessions to be visible$/, {}, () => {
  EventPage.validateIncreaseNoOfSession();
  EventPage.validateDecreaseNoOfSession();

});

Then(/^User should be able to able to increase or decrease number of registrants per session$/, {}, () => {
  EventPage.validateIncreaseNoOfRegistrations();
  EventPage.validateDecreaseNoOfRegistrations();

});


Then(/User shall see toggle buttons as "Instant Confirmation","24Hours Before","1Hour Before","15Minutes Before","Replay Follow Up"$/, {}, () => {

  if (EventPage.instantConfirmationToggleIsDispaly() === true) {
    console.log("instant Confirmation toggle Button Is Displayed")

  } else {
    throw new Error("instant Confirmation toggle Button Is not Displayed");
  }


  if (EventPage.hoursBeforeToggleIsDispaly() === true) {
    console.log("24 hours before toggle Button Is Displayed")

  } else {
    throw new Error("24 hours before toggle Button Is not Displayed");
  }

  if (EventPage.oneHourBeforeToggleIsDispaly() === true) {
    console.log("1 hour before toggle Button Is Displayed")

  } else {
    throw new Error("1 hour before toggle Button Is not Displayed");
  }

  if (EventPage.minutesBeforeToggleIsDispaly() === true) {
    console.log("15 minutes before toggle Button Is Displayed")

  } else {
    throw new Error("15 minutes before toggle Button Is not Displayed");
  }

  if (EventPage.replayFollowUpToggleIsDispaly() === true) {
    console.log("replay Follow Up toggle Button Is Displayed")

  } else {
    throw new Error("replay Follow Up toggle Button Is not Displayed");
  }


});

Then(/^User shall see "Replay Follow Up" dropdown with options "All Registrants","Attendees","No Shows"$/, {}, () => {
  if (EventPage.replayFollowUpDropDownIsDispaly() === true) {
    console.log("replay Follow Up DropDown Button Is Displayed")
    EventPage.clickOnReplayFollowUpDropDown();

  } else {
    throw new Error("replay Follow Up DropDown Button Is not Displayed");
  }

  if (EventPage.allRegistrantsOptionIsDispaly() === true) {
    console.log("all Registrants Option Is Displayed")

  } else {
    throw new Error("all Registrants Option Is not Displayed");
  }

  if (EventPage.attendeesOptionIsDispaly() === true) {
    console.log("Attendees option Is Displayed")

  } else {
    throw new Error("Attendees option Is not Displayed");
  }

  if (EventPage.noShowsOptionIsDispaly() === true) {
    console.log("No shows option Is Displayed")

  } else {
    throw new Error("No shows option Is not Displayed");
  }


});

Then(/^User should be able to select any of the option (.*) from "Replay Follow Up" dropdown$/, {}, (option) => {
  EventPage.selectReplayFollowUpOption(option);

});

Then(/^User shall see "Edit Email" option with every toggle button$/, {}, () => {


  if (EventPage.instantConfEditEmailIsDispaly() === true) {
    console.log("instant Confirmation edit email option Is Displayed")

  } else {
    throw new Error("instant Confirmation edit email option Is not Displayed");
  }


  if (EventPage.hoursBeforeEditEmailIsDispaly() === true) {
    console.log("24 hours before edit email option Is Displayed")

  } else {
    throw new Error("24 hours before edit email option Is not Displayed");
  }

  if (EventPage.oneHourBeforeToggleIsDispaly() === true) {
    console.log("1 hour before edit email option Is Displayed")

  } else {
    throw new Error("1 hour before edit email option Is not Displayed");
  }

  if (EventPage.minutesBeforeToggleIsDispaly() === true) {
    console.log("15 minutes before edit email option Is Displayed")

  } else {
    throw new Error("15 minutes before edit email option Is not Displayed");
  }

  if (EventPage.replayFollowUpToggleIsDispaly() === true) {
    console.log("replay Follow Up edit email option Is Displayed")

  } else {
    throw new Error("replay Follow Up edit email option Is not Displayed");
  }


});

Then(/^User should be able to turn on and off any of the button$/, {}, () => {
  EventPage.turnOneHourBeforeToggle();
});

Then(/^User should redirect on email notifications tab$/, {}, () => {
  if (EventPage.emailNotificationsTabIsDisplay() === true) {
    console.log("save notification button is working");
  } else {
    throw new Error("SAVE NOTIFICATIONS BUTTON IS NOT WORKING");
  }
});

Then(/^User should be able to "Edit Email" for any of the timing (.*)$/, {}, (email) => {
  EventPage.addEditEmailField(email);
});

Then(/^User shall see "Event Timezone" and "Event Language" dropdown$/, {}, () => {
  if (EventPage.eventTimeZoneButtonIsDispaly() === true) {
    console.log("Event time zone drop down Button Is Displayed")

  } else {
    throw new Error("Event time zone drop down Button Is not Displayed");
  }


  if (EventPage.eventLanguageButtonIsDispaly() === true) {
    console.log("Event language drop down Button Is Displayed")

  } else {
    throw new Error("Event language drop down Button Is not Displayed");
  }
});


Then(/^User should be able to select the "Event Timezone" (.*) from the dropdown$/, {}, (timeZone) => {
  EventPage.selectTimeZone(timeZone);
});

Then(/^User should be able to select the "Event Language" (.*) from the dropdown$/, {}, (language) => {
  EventPage.selectEventLanguage(language);
});



Then(/^User shall see "Resources", "Presentation Materials" and "Settings" option$/, {}, () => {
  if (EventPage.resourceOptionIsDispaly() === true) {
    console.log("Resource option Is Displayed")

  } else {
    throw new Error("Resource option Is not Displayed");
  }


  if (EventPage.presentationMaterialsIsDispalyed() === true) {
    console.log("Presentation material option Is Displayed")

  } else {
    throw new Error("Presentation material option Is not Displayed");
  }

  if (EventPage.roomSettingsOptionIsDispalyed() === true) {
    console.log("Room settings option Is Displayed")

  } else {
    throw new Error("Room settings option Is not Displayed");
  }
});


Then(/^for "Resources" option "ADD A RESOURCE" button should display$/, {}, () => {
  if (EventPage.addAResourceButtonIsDispaly() === true) {
    console.log("Add a resource button Is Displayed")

  } else {
    throw new Error("Add a resource button Is not Displayed");
  }

});

Then(/^By default "Resources" option should be selected$/, {}, () => {
  EventPage.resourceOptionIsSelected();
});


Then(/^User shall see "ADD A MATERIAL" button$/, {}, () => {
  if (EventPage.addMaterialOptionIsDispaly() === true) {
    console.log("Add a material Option Is Displayed")

  } else {
    throw new Error("Add a material Option Is not Displayed");
  }
});

Then(/^User Shall see "Public Chat" and "Private Chat" tabs , by default "Public Chat" should be selected$/, {}, () => {
  if (EventPage.publicChatTabIsDisplay() === true) {
    console.log("Public chat tab Is Displayed")

  } else {
    throw new Error("Public chat tab Is not Displayed");
  }

  if (EventPage.privateChatTabIsDisplay() === true) {
    console.log("Private chat tab Is Displayed")

  } else {
    throw new Error("Private chat tab Is not Displayed");
  }

  EventPage.publicChatTabIsSelected();
});

Then(/^User Shall see "Post Session Redirect" toggle button$/, {}, () => {
  if (EventPage.postSessionRedirectToggleIsDispaly() === true) {
    console.log("Post session redirect toggle button Is Displayed")

  } else {
    throw new Error("Post session redirect toggle button Is not Displayed");
  }
});

Then(/^User shall see "Done" Button to save the made changes made and materials added$/, {}, () => {
  if (EventPage.doneButtonIsDispalyed() === true) {
    console.log("Done button Is Displayed")

  } else {
    throw new Error("Done button Is not Displayed");
  }
});

Then(/^User shall see "Type of Resource" dropdown$/, {}, () => {
  if (EventPage.typeOfResourceDropDownIsDispaly() === true) {
    console.log("Type of resource drop down Is Displayed")

  } else {
    throw new Error("Type of resource drop down Is not Displayed");
  }
});


Then(/^User shall see "Poll","Handout",Featured Action" options$/, {}, () => {
  if (EventPage.pollOptionIsDispalyed() === true) {
    console.log("Poll option Is Displayed")

  } else {
    throw new Error("Poll option Is not Displayed");
  }

  if (EventPage.handoutOptionIsDispalyed() === true) {
    console.log("Handout option Is Displayed")

  } else {
    throw new Error("Handout option Is not Displayed");
  }

  if (EventPage.featuredActionOptionIsDispaly() === true) {
    console.log("featured action option Is Displayed")

  } else {
    throw new Error("Featured action option Is not Displayed");
  }
});


Then(/^User for "Poll" User shall see Following Fields "Question","Option 1",Option 2"$/, {}, () => {
  if (EventPage.questionFieldIsDispalyed() === true) {
    console.log("Question field Is Displayed")

  } else {
    throw new Error("Question field Is not Displayed");
  }

  if (EventPage.option1FieldIsDispalyed() === true) {
    console.log("Option1 field Is Displayed")

  } else {
    throw new Error("Option1 field Is not Displayed");
  }

});

Then(/^User shall see "Add Another option" button$/, {}, () => {
  if (EventPage.addAnotherOptionIsDispaly() === true) {
    console.log("Add another option Is Displayed")

  } else {
    throw new Error("Add another option Is not Displayed");
  }
});

Then(/^"Option 3" field appears with a delete button$/, {}, () => {
  if (EventPage.option3FieldIsDisplay() === true) {
    console.log("Option3 field Is Displayed")

  } else {
    throw new Error("Option3 field Is not Displayed");
  }

  if (EventPage.option3DeleteOptionIsDisplay() === true) {
    console.log("Option3 delete option Is Displayed")

  } else {
    throw new Error("Option3 delete option Is not Displayed");
  }
});

Then(/^User shall see "Share Results With Attendees" checkbox$/, {}, () => {
  if (EventPage.shareResultCheckBoxIsDisplay() === true) {
    console.log("Share Results With Attendees checkbox is displayed")

  } else {
    throw new Error("Share Results With Attendees checkbox is not displayed");
  }
});

Then(/^User shall see "ADD RESOURCE" button$/, {}, () => {
  if (EventPage.addResourceButtonIsDispaly() === true) {
    console.log("Add resource button is displayed")

  } else {
    throw new Error("Add resource button is not displayed");
  }

});


Then(/^User should be able to Enter data in "Question" (.*) ,"Option 1" (.*) ,Option 2" (.*) fields$/, {}, (question, option1, option2) => {
  EventPage.addQuestionField(question);
  EventPage.addOption1Field(option1);
  EventPage.addOption2Field(option2);
});


Then(/^User should be able to "Add Another Field" by clicking on "Add Another option" button$/, {}, () => {
  if (EventPage.addResourceButtonIsDispaly() === true) {
    console.log("Add resource button is displayed")

  } else {
    throw new Error("Add resource button is not displayed");
  }

});

Then(/^User should be able to delete the Added fields by clicking on Delete button$/, {}, () => {
  EventPage.clickOnDeleteOptionButton();
  browser.pause(3000);
  if (EventPage.optionDeleteOptionIsDisplay() === true) {
    throw new EventPage("Delete option button is not working");
  } else {
    console.log("delete option button is working");
  }
});

Then(/^User should be able to Mark the "Share Results With Attendees" checkbox$/, {}, () => {
  EventPage.markShareResultCheckBox();

});

Then(/^User should able to save the added Poll (.*)$/, {}, (question) => {
  EventPage.validateAddedPoll(question);

});


Then(/^for "Handout" User shall see "Handout Title","Upload File" fields$/, {}, () => {
  if (EventPage.handoutTitleFieldIsDisplay() === true) {
    console.log("Handout tile field is displayed")

  } else {
    throw new Error("Handout title field is not dispalyed");
  }

  if (EventPage.uploadMediaFieldIsDispaly() === true) {
    console.log("Handout upload file field Is Displayed")

  } else {
    throw new Error("Handout upload file field Is not Displayed");
  }


});

Then(/^User should be able to Enter values in the "Handout Title" (.*) field$/, {}, (title) => {
  EventPage.addHandoutTitleData(title);

});

Then(/^User should be able to "Upload File" (.*)$/, {}, (image) => {
  EventPage.uploadImageData(image);

});

Then(/^User should able to save the added handout title (.*)$/, {}, (title) => {
  EventPage.validateAddedHoandoutTitle(title);

});


Then(/^For "Featured Action" User shall see following fields "Title","Link URl","Button Text"$/, {}, () => {
  if (EventPage.featuredTitleFieldIsDispaly() === true) {
    console.log("featured tile field is displayed")

  } else {
    throw new Error("featured title field is not dispalyed");
  }

  if (EventPage.linkUrlFieldIsDisplay() === true) {
    console.log("Link URL field Is Displayed")

  } else {
    throw new Error("Link URL field Is not Displayed");
  }


  if (EventPage.buttonTextFieldIsDisplay() === true) {
    console.log("Button text field Is Displayed")

  } else {
    throw new Error("Button text field Is not Displayed");
  }

});

Then(/^User should be able to Enter values in the "Title" (.*) ,"Link URl" (.*),"Button Text" (.*) fields$/, {}, (title, link, buttonText) => {
  EventPage.addFeaturedTitleField(title);
  EventPage.addLinkUrlField(link);
  EventPage.addButtonTextField(buttonText);

});


Then(/^User should be able to save the added "Featured Action" (.*)$/, {}, (title) => {
  EventPage.validateAddedFeaturedAction(title);

});

Then(/^User shall see "Type Of Material" dropdown$/, {}, () => {
  if (EventPage.typeOfMaterialDropDownIsDisplay() === true) {
    console.log("Type of material dropdown Is Displayed")

  } else {
    throw new Error("Type of material dropdown Is not Displayed");
  }

});


Then(/^User shell see "Slides" and "Video" options$/, {}, () => {
  if (EventPage.slidesOptionIsDispaly() === true) {
    console.log("Slides option Is Displayed")

  } else {
    throw new Error("Slides option Is not Displayed");
  }

  if (EventPage.videoOptionIsDisplayed() === true) {
    console.log("Video option Is Displayed")

  } else {
    throw new Error("Video option Is not Displayed");
  }

});

Then(/^User shall see "Upload Media" Option$/, {}, () => {
  browser.pause(1000);
  if (EventPage.uploadMediaFieldIsDispaly() === true) {
    console.log("Upload media field Is Displayed ")

  } else {
    throw new Error("Upload media field Is not Displayed ");
  }

});

Then(/^User shall see "ADD MATERIAL" Button$/, {}, () => {
  if (EventPage.addMaterialButtonIsDispalyed() === true) {
    console.log("Add material button Is Displayed ")

  } else {
    throw new Error("Add material button Is not Displayed ");
  }

});

Then(/^User shall see "Material Name" field$/, {}, () => {
  if (EventPage.materialNameFieldIsDispaly() === true) {
    console.log("Material name field Is Displayed ")

  } else {
    throw new Error("Material name field Is not Displayed ");
  }

});

Then(/^User should be able to enter data in "Material Name" field (.*)$/, {}, (name) => {
  EventPage.addMaterialNameField(name);

});



Then(/^User should be able to Upload desired Media slide files (.*)$/, {}, (slide) => {
  EventPage.uploadSlideFile(slide);

});


Then(/^User should able to save the added Material (.*)$/, {}, (name) => {
  EventPage.validateNewAddedMaterial(name);


});

Then(/^User should be able to Upload desired Media video file (.*)$/, {}, (video) => {
  EventPage.uploadVideoFile(video);


});


Then(/^User should be able to click on "Public Chat" and "Private Chat" tab$/, {}, () => {
  EventPage.publicChatTabIsSelected();
  EventPage.clickOnPrivetaChatTab();
  EventPage.privateChatTabIsSelected();
});

Then(/^User shall see "Add A Custom Url" field$/, {}, () => {
  if (EventPage.addCustomUrlFieldIsDisplayed() === true) {
    console.log("Add custom URL field Is Displayed ")

  } else {
    throw new Error("Add custom URL field Is not Displayed ");
  }

});


Then(/^User should be able to add URL (.*) in the above mentioned field$/, {}, (url) => {
  EventPage.addCustomUrlFieldData(url);
});


Then(/^User shall see Name of the Host and "Swap Host" button$/, {}, () => {
  if (EventPage.hostNameInEventAdminIsDispaly() === true) {
    console.log("Host name Is Displayed in event admin tab")

  } else {
    throw new Error("Host name Is not Displayed in event admin tab ");
  }

  // if (EventPage.swapHostBtnInEventAdminIsDsipaly() === true) {
  //   console.log("Swap host button Is Displayed in event admin tab")

  // } else {
  //   throw new Error("Swap host button Is not Displayed in event admin tab ");
  // }

});

Then(/^Name of the Host should displayed$/, {}, () => {
  if (EventPage.hostNameInEventAdminIsDispaly() === true) {
    console.log("Host name Is Displayed in event admin tab")

  } else {
    throw new Error("Host name Is not Displayed in event admin tab ");
  }


});


Then(/^User shall see "Team Member" and "Guest" tabs by default "Team Member" tab should be selected$/, {}, () => {
  if (EventPage.teamMemberTabIsDiaplay() === true) {
    console.log("Team member tab Is Displayed in event admin tab")

  } else {
    throw new Error("Team member tab Is not Displayed in event admin tab ");
  }

  if (EventPage.guestTabIsDisplay() === true) {
    console.log("Guest tab Is Displayed in event admin tab")

  } else {
    throw new Error("Guest tab Is not Displayed in event admin tab ");
  }

  EventPage.teamMemberTabIsSelected();
});


Then(/^User shall see "Choose a member" dropdown$/, {}, () => {
  if (EventPage.chooseMemberDropDownIsDisplay() === true) {
    console.log("Choose a member dropdown Is Displayed in event admin tab")

  } else {
    throw new Error("Choose a member dropdown Is not Displayed in event admin tab ");
  }


});

Then(/^User shall see names of added user and "add another user" options$/, {}, () => {
  if (EventPage.addedMemberNameIsDisplay() === true) {
    console.log("Added member name Is Displayed in dropdown list")

  } else {
    throw new Error("Added member name Is not Displayed in dropdown list");
  }

  if (EventPage.addAnotherUserOptionIsDisplay() === true) {
    console.log("add another user option Is Displayed in dropdown list")

  } else {
    throw new Error("add another user option Is not Displayed in dropdown list");
  }

});
Then(/^User shall see "Select a role" dropdown$/, {}, () => {
  if (EventPage.selectRoleDropdownIsDisplay() === true) {
    console.log("Select role dropdown Is Displayed ")

  } else {
    throw new Error("Select role dropdown Is not Displayed");
  }


});

Then(/^User shall see "Host","Presenter" and "Moderator" options$/, {}, () => {
  if (EventPage.hostOptionIsDisplay() === true) {
    console.log("Host option Is Displayed in dropdown list")

  } else {
    throw new Error("Host option Is not Displayed in dropdown list");
  }

  if (EventPage.presenterOptionIsDisplay() === true) {
    console.log("Presenter option Is Displayed in dropdown list")

  } else {
    throw new Error("Presenter option Is not Displayed in dropdown list");
  }

  if (EventPage.moderatorOptionIsDisplay() === true) {
    console.log("Moderator option Is Displayed in dropdown list")

  } else {
    throw new Error("Moderator option Is not Displayed in dropdown list");
  }

});

Then(/^User shall see "All Sessions" Button$/, {}, () => {
  if (EventPage.allSessionButtonIsDispaly() === true) {
    console.log("All session button is dispalyed")

  } else {
    throw new Error("All session button is not displayed");
  }
});

Then(/^User shall see "Add Admin" Button$/, {}, () => {
  if (EventPage.addAdminButtonIsDispaly() === true) {
    console.log("Add admin button is dispalyed")

  } else {
    throw new Error("Add admin button is not dipslayed");
  }

});


Then(/^User should be able to select a role for the added Member from the "Select a role" (.*) dropdown$/, {}, (role) => {
  EventPage.selectRoleOption(role);

});


Then(/^User Shall see "Invite Aadmin for all session that are shown and future sessions" checkbox$/, {}, () => {
  if (EventPage.inviteAdminCheckBoxIsDispaly() === true) {
  } else {
    throw new Error("Something went worng with ")
  }

});

Then(/^User shall see "Confirm" Button$/, {}, () => {
  if (EventPage.confirmButtonIsDispaly() === true) {
    console.log("Confirm button is dispalyed")

  } else {
    throw new Error("confirm button is not dipslayed");
  }

});

Then(/^User should be able to Mark and Unmark the checkbox and click on "Confirm" Button$/, {}, () => {
  EventPage.selectInviteAdminCheckBox();
  EventPage.clickOnConfirmButton();

});


Then(/^User shall see "Name" and "Email" field$/, {}, () => {
  if (EventPage.nameFieldIsDispalyed() === true) {
    console.log("Name field is dispalyed")

  } else {
    throw new Error("Name field is not dipslayed");
  }

  if (EventPage.emailFieldIsDispalyed() === true) {
    console.log("Email field is dispalyed")

  } else {
    throw new Error("Email field is not dipslayed");
  }

});


Then(/^User shall see "Select a role" dropdown for guest$/, {}, () => {
  if (EventPage.selectRoleGuestDropDownIsDisplay() === true) {
    console.log("Select role dropdown is dispalyed for guest")

  } else {
    throw new Error("Select role dropdown is not dispalyed for guest");
  }
});

Then(/^For automated event user shall see "Select a role" dropdown for guest$/, {}, () => {
  if (AutomatedPage.selectRoleGuestDropDownIsDisplay() === true) {
    console.log("Select role dropdown is dispalyed for guest")

  } else {
    throw new Error("Select role dropdown is not dispalyed for guest");
  }
});

Then(/^User shall see "Presenter" and "Moderator" options$/, {}, () => {
  if (EventPage.presenterOptionIsDisplay() === true) {
    console.log("Presenter option is dispalyed")

  } else {
    throw new Error("Presenter option is not dispalyed");
  }

  if (EventPage.moderatorOptionIsDisplay() === true) {
    console.log("Moderator option is dispalyed")

  } else {
    throw new Error("Moderator option is not dipslayed");
  }

});

Then(/^User should be able to Enter "Name" (.*) and "Email" of the New Admin to be$/, {}, (name) => {
  EventPage.addNameField(name);
  EventPage.addEmailFieldForAdmin();
});


Then(/^Admin should be displayed in Event Admins List with details email,name (.*) and role (.*)$/, {}, (name, role) => {
  browser.pause(2000);
  EventPage.validateAddedRole(role);
  EventPage.validateAddedName(name);
  if (EventPage.addedEmailIsDispalyed() === true) {
    console.log("admin email is displayed");
  } else {
    throw new Error("ADMIN'S EMAIL IS NOT ADDED");
  }
});


Then(/^User shall see "Session Date&Time","Admin Team","Registered" options$/, {}, () => {
  if (EventPage.sessionDateTitmeIsDisplay() === true) {
    console.log("Session date and time is displayed");
  } else {
    throw new Error("Session date and time is not displayed");
  }

  if (EventPage.adminTermIsDisplay() === true) {
    console.log("admin Term is displayed");
  } else {
    throw new Error("ADMIN TERM IS NOT DISPAYED");
  }

  if (EventPage.registerOptionIsDisplay() === true) {
    console.log("register option is displayed");
  } else {
    throw new Error("REGISTER OPTION IS NOT DISPLAYED");
  }
});



Then(/^User shall see dropdown with options "View Insights","Edit Date & Time","Cancel Session"$/, {}, () => {
  EventPage.clickOnSessionDropDown();
  if (EventPage.viewInsightsOptionIsDisplay() === true) {
    console.log("View insights option is displayed");
  } else {
    throw new Error("View insights option is not displayed");
  }

  if (EventPage.editDateAndTimeOptionIsDisplay() === true) {
    console.log("edit date and time OPTION is displayed");
  } else {
    throw new Error("EDIT DATE AND TIME OPTION IS NOT DISPAYED");
  }

  if (EventPage.cancelSessionOptionIsDisplay() === true) {
    console.log("Cancel session option is displayed");
  } else {
    throw new Error("CANCEL SESSION OPTION IS NOT DISPLAYED");
  }
});



Then(/^User shall see "Session Date&Time","Registered" options$/, {}, () => {
  if (EventPage.sessionDateTitmeIsDisplay() === true) {
    console.log("Session date and time is displayed");
  } else {
    throw new Error("Session date and time is not displayed");
  }

  if (EventPage.registeredOptionForPastIsDisplay() == true) {
    console.log("Registered option for past session options display")
  } else {
    throw new Error("Registered option for past session options is not display");
  }



});
Then(/^User shall see "Attended","Missed","Messages" options$/, {}, () => {

  if (EventPage.attendedOptionIsDisplay() == true) {
    console.log("Attended options is display")
  } else {
    throw new Error("Attended options is not displayed");
  }

  if (EventPage.missedOptionIsDisplay() == true) {
    console.log("Missed options is display")
  } else {
    throw new Error("Missed options is not displayed");
  }

  if (EventPage.messageOptionIsDisplay() == true) {
    console.log("Message options is display")
  } else {
    throw new Error("Message options is not displayed");
  }

  // EventPage.closeResentWindow();
  // EventPage.switchToManageEventWindow();

});



Then(/^"Cancel Session" window prompt (.*)$/, {}, (windowTitle) => {
  browser.pause(3000);
  EventPage.validateCancelSessionWindow(windowTitle);
});


Then(/^Session should not displayed under "Upcoming Session" tab$/, {}, () => {
  browser.pause(5000);
  EventPage.validateCanceledSession();
});


Then(/^User should able to schedule more than one session with time (.*)$/, {}, (secondSesssionTime) => {
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectFutureTime(secondSesssionTime);
  EventPage.clickAddToEventScheduleButton();
  browser.pause(5000);
  EventPage.validateManageEventScreen();
  if (EventPage.secondSessionUnderUpcomingSessTab() === true) {
    console.log("Second session is added under upcoming session tab");
  } else {
    throw new Error("USER IS FAILED TO ADD MORE THAN ONE SESSION");
  }

});
Then(/^Host should able to schedule new session with time (.*)$/, {}, (secondSesssionTime) => {
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectFutureTime(secondSesssionTime);
  EventPage.clickAddToEventScheduleButton();
  browser.pause(5000);
  EventPage.validateManageEventScreen();

});

Then(/^User should be on Registration page$/, {}, () => {
  EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
});

Then(/^User should get messsage (.*) on message window$/, {}, (message) => {
  EventPage.validateRegisteredSuccessMessage(message);
});

Then(/^Session status is displaying (.*) in waiting screen$/, {}, (message) => {
  if (MeetingRoomPage.waitingScreen.getText().includes(message)) {
    console.log("Session status matched on waiting screen");

  } else {
    throw new Error("Session status missmatched on waiting screen actual status>>" + MeetingRoomPage.waitingScreen.getText() + "expected status>>" + message);
  }
});

Then(/^User should redirected to Demio success page on successfull registration$/, {}, () => {
  if (EventPage.joinLinkOnSuccessPageIsDisplay() === true) {
    console.log("user successfully rediest on demio success page");
  } else {
    throw new Error("DEMIO SUCCESS PAGE IS NOT LOADED");
  }
});

Then(/^It should redirected to the event room window on clicking join room button$/, {}, () => {
  EventPage.closeResentWindow();
  EventPage.switchToEventRoomWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  if (EventPage.manageYourRegistrationLinkIsDisplay() === true) {
    console.log("user successfully redirect on event room window");
  } else {
    throw new Error("EVENT ROOM WINDOW IS NOT LOADED");
  }
});


Then(/^User should redirected to "Manage Registration" page$/, {}, () => {
  if (EventPage.cancelRegistrationLinkIsDispaly() === true) {
    console.log("Manage registration page is loaded");
  } else {
    throw new Error("Manage registrtaion page is not loaded");
  }
});

Then(/^Message should prompt with options: "No, Never Mind" and "Yes, Cancel"$/, {}, () => {
  if (EventPage.messagePromptIsDisplay() === true) {
    console.log("Message is prompt for cancel registration");
  } else {
    throw new Error("Message is not prompt for cancel registration");
  }

  if (EventPage.noNevenMindOptionIsDisplay() === true) {
    console.log("No,never mind option is displayed");
  } else {
    throw new Error("No,never mind option is not displayed");
  }

  if (EventPage.yesCancelOptionIsDisplay() === true) {
    console.log("yes,cancel option is displayed");
  } else {
    throw new Error("yes,cancel option is not displayed");
  }
});


Then(/^User should get a cancel registration message (.*)$/, {}, (cancelMessage) => {
  EventPage.validateCancelRegistrationMessage(cancelMessage);
});

Then(/^Registered user should removed when cancel registration from manage registration$/, {}, () => {
  EventPage.userRemovedFromRegistrationForm();

});


Then(/^It should displayed with option Insights,download recording,delete recording and share replay$/, {}, () => {
  if (EventPage.shareReplayOptionIsDispaly() === true) {
    console.log("share replay option is displayed");
  } else {
    throw new Error("share replay option is not displayed");
  }

  if (EventPage.viewInsightsOptionIsDisplay() === true) {
    console.log("View insights option is displayed");
  } else {
    throw new Error("View insights option is not displayed");
  }

  if (EventPage.downloadRecordingOptionIsDisplay() === true) {
    console.log("Download recording option is displayed");
  } else {
    throw new Error("Download recording option is not displayed");
  }

  if (EventPage.deleteRecordingOptionIsDisplay() === true) {
    console.log("Delete recording option is displayed");
  } else {
    throw new Error("Delete recording option is not displayed");
  }
});

Then(/^Recording page popup should displayed$/, {}, () => {
  if (EventPage.arrowOnRecordingPopupIsDisplay() === true) {
    console.log("recording page popup is loaded");
  } else {
    throw new Error("recording page popup is not loaded");
  }
});

Then(/^User Should able to open recording$/, {}, () => {
  if (EventPage.playRecordingButtonIsDisplay() === true) {
    console.log("Recording opened successfully");
  } else {
    throw new Error("Failed to open recording");
  }
});

Then(/^Move to Manage event window$/, {}, () => {
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  browser.refresh();
});

Then(/^Close recent window and switch to manage event window$/, {}, () => {
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  browser.refresh();

});

Then(/^User should be redirected to "Activity>>Insight tab"$/, {}, () => {
  EventPage.insightsTabIsActive();
  browser.pause(3000);

});
Then(/^Session must be started by admin$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(10000);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(8000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.clickOnSummaryTab();

});

Then(/^Admin starts the session and share added resource$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(8000);
  MeetingRoomPage.clickOnOpenChatButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(8000);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(4000);
  EventPage.clickOnChatResourceButton();
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  browser.pause(10000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.clickOnSummaryTab();

});

Then(/^It should displayed time when user has joined the session$/, {}, () => {
  if (EventPage.joinTimeStampIsDispaly() === true) {
    console.log("join time stamp is displayed under people tab");
  } else {
    throw new Error("JOIN TIME STAMP IS NOT DISPLAYED");
  }

});

Then(/^It should displayed time when user has exit the session$/, {}, () => {
  if (EventPage.exitTimeStampIsDispaly() === true) {
    console.log("Exit time stamp is displayed under people tab");
  } else {
    throw new Error("EXIT TIME STAMP IS NOT DISPLAYED");
  }
});


Then(/^It should displayed timings of attended session in minutes$/, {}, () => {
  if (EventPage.attendanceMintsIsDispaly() === true) {
    console.log("attended session in minutes is displayed under people tab");
  } else {
    throw new Error("attended session in minutes IS NOT DISPLAYED");
  }
});

Then(/^It should displayed attendance percent of user who attended the session$/, {}, () => {
  if (EventPage.attendancePerIsDispaly() === true) {
    console.log("attended session in % is displayed under people tab");
  } else {
    throw new Error("attended session in % IS NOT DISPLAYED");
  }
});

Then(/^Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"$/, {}, () => {
  browser.refresh();
  if (EventPage.nameOrEmailColumnIsDispaly() === true) {
    console.log("name or email column is displayed under people tab");
  } else {
    throw new Error("name or email column is not displayed under people tab");
  }

  if (EventPage.regDateAndTimeColumnIsDisplay() === true) {
    console.log("Registration Date and time column is displayed under people tab");
  } else {
    throw new Error("Registrtaiom date and time column is not displayed under people tab");
  }

  if (EventPage.sessionDateAndTimeColumnIsDiplay() === true) {
    console.log("Session Date and time column is displayed under people tab");
  } else {
    throw new Error("Session date and time column is not displayed under people tab");
  }

  if (EventPage.joinTimeStampColumnIsDisplay() === true) {
    console.log("Join time stemp column is displayed under people tab");
  } else {
    throw new Error("Join time stemp column is not displayed under people tab");
  }
});


Then(/^User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns$/, {}, () => {
  if (EventPage.exitTimeStampColumnIsDisplay() === true) {
    console.log("exit time stemp column is displayed under people tab");
  } else {
    throw new Error("exit time stemp column is not displayed under people tab");
  }

  if (EventPage.attendanceMintsColumnIsDisplay() === true) {
    console.log("Attendance minutes column is displayed under people tab");
  } else {
    throw new Error("Attendance minutes column is not displayed under people tab");
  }

  if (EventPage.attendancePerColumnIsDisplay() === true) {
    console.log("attendance % column is displayed under people tab");
  } else {
    throw new Error("attendance % column is not displayed under people tab");
  }

  if (EventPage.focusPerColumnIsDisplay() === true) {
    console.log("Focus % column is displayed under people tab");
  } else {
    throw new Error("Focus % column is not displayed under people tab");
  }

  if (EventPage.locationColumnIsDisplay() === true) {
    console.log("Location column is displayed under people tab");
  } else {
    throw new Error("Location column is not displayed under people tab");
  }
});

Then(/^It should displayed focus percent of user who attended the session$/, {}, () => {
  if (EventPage.focusPerIsDisplayed() === true) {
    console.log("focus % is displayed under people tab");
  } else {
    throw new Error("focus % IS NOT DISPLAYED");
  }
});

Then(/^It should displayed Registration Date & Time of registered user$/, {}, () => {
  if (EventPage.regDateAndTimeIsDisplayed() === true) {
    console.log("Registration date and time displayed under people tab");
  } else {
    throw new Error("REGISTRATION DATE AND TIME IS NOT DISPLAYED");
  }
});


Then(/^It should displayed Session Date & Time$/, {}, () => {
  if (EventPage.sessionDateAndTimeIsDisplayed() === true) {
    console.log("Session date and time displayed under people tab");
  } else {
    throw new Error("Session DATE AND TIME IS NOT DISPLAYED");
  }
});

Then(/^It should displayed "Name or Email" of registered user$/, {}, () => {
  if (EventPage.nameOrEmailIsDisplayed() === true) {
    console.log("Name or email is displayed under people tab");
  } else {
    throw new Error("NAME OR EMAIL IS NOT DISPLAYED");
  }
});

Then(/^It should displayed whether the registered user attended the session or not$/, {}, () => {
  EventPage.validateAttendedResult()
});


Then(/^It should displayed correct number of "Regsitration" (.*), "Attended" (.*) and "Missed" (.*) on "Insights Page"$/, {}, (regCount, attendedCount, missedCount) => {
  // browser.refresh();
  browser.pause(7000);
  EventPage.validateInsightsRegCount(regCount);
  EventPage.validateInsightsMissedCount(missedCount);
  EventPage.validateInsightsAttendedCount(attendedCount);
});

Then(/^It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"$/, {}, () => {
  // browser.refresh();
  if (EventPage.sessionDurationIsDisplay() === true) {
    console.log("Session duration is displayed in insights page");
  } else {
    throw new Error("Session duration is not displayed in insights page");
  }
  if (EventPage.averageTimeAttendedIsDisplay() === true) {
    console.log("Average time attended is displayed in insights page");
  } else {
    throw new Error("Average time attended is not displayed in insights page");
  }

  if (EventPage.averageTimeFocusIsDisplay() === true) {
    console.log("Average time focus is displayed in insights page");
  } else {
    throw new Error("Average time focus is not displayed in insights page");
  }
});

Then(/^Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"$/, {}, () => {
  browser.refresh();
  browser.pause(3000);
  if (EventPage.registrationGraphIsDisplay() === true) {
    console.log("Registeration graph displayed in insights page");
  } else {
    throw new Error("Registeration graph is not displayed in insights page");
  }

  if (EventPage.attendanceGraphIsDisplay() === true) {
    console.log("Attendance graph is displayed in insights page");
  } else {
    throw new Error("Attendance graph focus is not displayed in insights page");
  }
});

Then(/^Session must be started and admin share handout in event$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(6000);
  EventPage.clickOnChatResourceButton();
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();


});
Then(/^Should displayed correct number of clicks on the resources below "Insights graph"$/, {}, () => {

  if (EventPage.resourceClickResultIsDisplay() === true) {
    console.log("resource click result is displayed in insights page");
  } else {
    throw new Error("resource click result is not displayed in insights page");
  }


});


Then(/^User should be able to select a member from choose a member dropdown (.*)$/, {}, (member) => {
  EventPage.selectMemberFromChooseMemberList(member);


});

Then(/^User should be able to Click on "ADD ADMIN" Button and the Admin should be added and displayed in Event Admins List$/, {}, () => {
  EventPage.clickOnAddAdminButton();
  EventPage.addedAdminIsDisplayedInList();


});

Then(/^User should able to download export CSV file$/, {}, () => {
  browser.refresh();
  EventPage.clickOnExportCsvInInsights();
  browser.pause(200);
  browser.keys(['Meta', 'Enter']);
});

Then(/^Attendees should redirect on added url (.*)$/, {}, (url) => {
  EventPage.switchToWindowNewTab();
  // var actURL = browser.getUrl();
  // browser.url(actURL + "?skip");
  browser.pause(3000);
  var actUrl = $("//link[@rel='canonical']").getAttribute("href");
  if (actUrl.includes(url)) {
    console.log("Page url matched");

  } else {
    throw new Error("Filed to redirect on added url actual url>>" + actUrl + "expected url>>" + url);
  }
  // EventPage.validateWindowUrl(url);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Admin starts session$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(9000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.clickOnSummaryTab();

});
Then(/^User should redirected to "Thank You" screen (.*)$/, {}, (header) => {
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.validateThankYouScreen(header);
});


Then(/^"Timer" should displayed on Registration page$/, {}, () => {
  if (EventPage.timerIsDisplayed() === true) {
    console.log("Timer is displaying on registration page");
  } else {
    throw new Error("TIMER IS NOT DISPLAYED IN REGISTRATION PAGE");
  }
});


Then(/^Countdown timer should display for Days, Hours, Minutes and Seconds$/, {}, () => {
  if (EventPage.dayTimerIsDisplayed() === true) {
    console.log("Day Timer is displaying on registration page");
  } else {
    throw new Error("DAY TIMER IS NOT DISPLAYED IN REGISTRATION PAGE");
  }

  if (EventPage.hoursTimerIsDisplayed() === true) {
    console.log("Hours Timer is displaying on registration page");
  } else {
    throw new Error("HOURS TIMER IS NOT DISPLAYED IN REGISTRATION PAGE");
  }

  if (EventPage.minutesTimerIsDisplayed() === true) {
    console.log("Minutes Timer is displaying on registration page");
  } else {
    throw new Error("MINUTES TIMER IS NOT DISPLAYED IN REGISTRATION PAGE");
  }

  if (EventPage.secondTimerIsDisplayed() === true) {
    console.log("Second Timer is displaying on registration page");
  } else {
    throw new Error("SECOND TIMER IS NOT DISPLAYED IN REGISTRATION PAGE");
  }
});

Then(/^User should able to add their first name (.*)$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  console.log('NAMEXCC' + name);
  EventPage.addFirstNameFieldData(name);

});

Then(/^User should able to add their Email (.*)$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const email = data[1];
  console.log('EMAILXCC' + email);
  EventPage.addEmailField(email);

});


Then(/^It should displayed with Unique Join Link$/, {}, () => {
  if (EventPage.joinLinkOnSuccessPageIsDisplay() === true) {
    console.log("Join link is displayed on demio success page");
  } else {
    throw new Error("JOIN LINK IS NOT DISPLAYED");
  }
});

Then(/^"copy link" should copied the join link on clicking (.*)$/, {}, (text) => {
  EventPage.validateCopiedJoinLink(text);
});

Then(/^It should displayed with correct session (.*) and user info (.*) on "Manage Registration" page$/, {}, (event, regEmail) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.validateSessionNameOnManageRegPage(eventName);

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.validateUserInfoOnManageRegPage(name, emailAddress);

});
Then(/^User should only register after entering valid email on registration page (.*)$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
});
Then(/^User is failed to login with invalid email (.*)$/, {}, (validation) => {
  EventPage.validateInValidEmailValidation(validation);
});

Then(/^It should displayed correct countdown on Join Link page$/, {}, () => {
  if (EventPage.countDownIsDisplayed() === true) {
    console.log("count down is displaying on join link page");
  } else {
    throw new Error("count down is not displayed on join link page");
  }
});



Then(/^Upcoming date and time should load correctly on success Registration page for user (.*)$/, {}, (regEmail) => {
  var expeDate = $("td:nth-of-type(1) > span > span").getText();
  var dayName = expeDate.slice(0, 3);
  var expDayName = TestUtils.getDayName(dayName);
  var monthName = expeDate.slice(5, 8);
  var expMonthName = TestUtils.getMonthName(monthName);
  var modifiedDate0 = expeDate.replace(dayName, expDayName);
  var modifiedDate1 = modifiedDate0.replace(monthName, expMonthName);
  var modifiedDate22 = modifiedDate1.replace(".", "").replace(",", "");
  var modifiedDate2 = modifiedDate22.replace(" IST", "").replace(" GMT", "");
  // var modifiedDate2 = modifiedDate222.slice(20,25)
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actDateTime1 = $(".text-capitalized.webinar-date").getText().replace(",", "");
  var actDateTime = actDateTime1.replace(" GMT", "").replace(" IST", "");
  if (actDateTime.includes(expDayName) && actDateTime.includes(expMonthName)) {
    console.log("date and time is matched on success registration page ..day>>" + expDayName + "month>>" + expMonthName);
  } else {

    throw new Error("Date and time is missmatched on success registration page actual date & time>>" + actDateTime + "expected date & time>>" + modifiedDate2);

  }
  // if (modifiedDate2.includes(actDateTime)) {
  //   console.log("date and time is matched on success registration page");
  // } else {

  //   throw new Error("Date and time is missmatched on success registration page actual date & time>>" + actDateTime + "expected date & time>>" + modifiedDate2);

  // }
});


Then(/^On registration page upcoming date and time load correctly$/, {}, () => {
  var expeDate = $("td:nth-of-type(1) > span > span").getText();
  var dayName = expeDate.slice(0, 3);
  var expDayName = TestUtils.getDayName(dayName);
  var monthName = expeDate.slice(5, 8);
  var expMonthName = TestUtils.getMonthName(monthName);
  var modifiedDate0 = expeDate.replace(dayName, expDayName);
  var modifiedDate1 = modifiedDate0.replace(monthName, expMonthName);
  var modifiedDate22 = modifiedDate1.replace(".", "");
  var modifiedDate222 = modifiedDate22.replace(" IST", "");
  var modifiedDate2 = modifiedDate222.replace(" GMT", "");
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();

  var actDateTime1 = $(".text-capitalized.webinar-date").getText();
  var actDateTime11 = actDateTime1.trim();
  var actDateTime111 = actDateTime11.replace(" GMT", "");
  var actDateTime = actDateTime111.replace(" IST", "");
  if (actDateTime.includes(expDayName) && actDateTime.includes(expMonthName)) {
    console.log("date and time is matched on registration page..day>>" + expDayName + "month>>" + expMonthName);
  } else {

    throw new Error("Date and time us missmatched on registration page  actual date & time>>" + actDateTime + "expected date & time>>" + modifiedDate2);
  }
  // if (modifiedDate2.includes(actDateTime)) {
  //   console.log("date and time is matched on registration page");
  // } else {

  //   throw new Error("Date and time us missmatched on registration page  actual date & time>>" + actDateTime + "expected date & time>>" + modifiedDate2);
  // }
});

Then(/^It should displayed "Correct Name, Email and Date" on Join Link page (.*)$/, {}, (regEmail) => {
  $("td:nth-of-type(1) > span > span").waitForDisplayed({ timeout: 10000 });
  var expeDate = $("td:nth-of-type(1) > span > span").getText();
  var dayName = expeDate.slice(0, 3);
  var expDayName = TestUtils.getDayName(dayName);
  var monthName = expeDate.slice(5, 8);
  var expMonthName = TestUtils.getMonthName(monthName);
  var modifiedDate0 = expeDate.replace(dayName, expDayName);
  var modifiedDate1 = modifiedDate0.replace(monthName, expMonthName);
  var modifiedDate2 = modifiedDate1.replace(".", "").replace("2021 ", "").replace("IST", "");

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  EventPage.clickOnJoinRoomButton();
  EventPage.closeResentWindow();
  EventPage.switchToEventRoomWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  var actDateTime = $(".waiting-screen-webinar-date").getText();
  var dateTime = actDateTime.replace("IST", "");
  if (modifiedDate2.localeCompare(actDateTime)) {
    console.log("date and time is matched on success registration page");
  } else {

    throw new Error("Date and time us missmatched on success registration page ACTUAL DATE AND TIME:>>" + dateTime + " EXPECTED DATE AND TIME:>>" + modifiedDate2);
  }

  EventPage.validateUserInfoOnJoinLinkPage(name, emailAddress);
});


Then(/^User should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"$/, {}, () => {
 browser.pause(2000);
  if (EventPage.appleCalendarOptionIsDisplayed() === true) {
    console.log("Apple calendar option is displayed under add to calendar list");
  } else {
    throw new Error("Apple calendar option is not displayed under add to calendar list");
  }
  if (EventPage.googleOptionIsDisplayed() === true) {
    console.log("Google option is displayed under add to calendar list");
  } else {
    throw new Error("Google option is not displayed under add to calendar list");
  }
  if (EventPage.outlookOptionIsDisplayed() === true) {
    console.log("Out look option is displayed under add to calendar list");
  } else {
    throw new Error("Out look option is not displayed under add to calendar list");
  }
  if (EventPage.outlookComOptionIsDisplayed() === true) {
    console.log("outlookCom option is displayed under add to calendar list");
  } else {
    throw new Error("outlookCom option is not displayed under add to calendar list");
  }
  if (EventPage.yahooOptionIsDisplayed() === true) {
    console.log("yahoo option is displayed under add to calendar list");
  } else {
    throw new Error("yahoo option is not displayed under add to calendar list");
  }
});

Then(/^OnSuccess reg page user should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"$/, {}, () => {
  if (EventPage.appleCalendarOptionOnSuccessRegIsDisplayed() === true) {
    console.log("Apple calendar option is displayed under add to calendar list");
  } else {
    throw new Error("Apple calendar option is not displayed under add to calendar list on success registration page");
  }
  if (EventPage.googleOptionOnSuccessRegIsDisplayed() === true) {
    console.log("Google option is displayed under add to calendar list");
  } else {
    throw new Error("Google option is not displayed under add to calendar list on success registration page");
  }
  if (EventPage.outlookOptionOnSuccessRegIsDisplayed() === true) {
    console.log("Out look option is displayed under add to calendar list");
  } else {
    throw new Error("Out look option is not displayed under add to calendar list on success registration page");
  }
  if (EventPage.outlookComOptionOnSuccessRegIsDisplayed() === true) {
    console.log("outlookCom option is displayed under add to calendar list");
  } else {
    throw new Error("outlookCom option is not displayed under add to calendar list on success registration page");
  }
  if (EventPage.yahooOptionOnSuccessRegIsDisplayed() === true) {
    console.log("yahoo option is displayed under add to calendar list");
  } else {
    throw new Error("yahoo option is not displayed under add to calendar list on success registration page");
  }
});


Then(/^User should be download calendar$/, {}, () => {
  browser.keys(['Meta', 'Enter']);
  browser.pause(2000);
});

Then(/^User should redirect on new tab for option (.*)$/, {}, (option) => {
  EventPage.closeResentWindow();
  browser.pause(3000);
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(3000);
  var actTitle = browser.getTitle();
  if (actTitle.includes(option.replace(".com", ''))) {
    console.log("new tab title is matched");
  } else {
    throw new Error("New tab title misssmatched  actual title>>" + actTitle + "expected title>>" + option);
  }

});

Then(/^It should displayed correct "User's Date or Time" of registration and location in "Activity area"$/, {}, () => {
  var actDate = $("td:nth-of-type(1) > span > span").getText();
  EventPage.clickOnActivityTab();
  browser.pause(3000)
  var expDate = $(".session-selector-button > span:nth-of-type(1)").getText().replace("Upcoming", "");
  if (actDate.includes(expDate)) {
    console.log("date and time is matched in activity area");
  } else {
    console.log("actual date & time>>" + actDate + "expected date & time>>" + expDate);
    throw new Error("Date and time is missmatched on activity area");

  }
});

Then(/^New custom field (.*) must be added (.*) for event$/, {}, (option, label) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnEditFormFieldButton();
  EventPage.clickOnAddAnotherField();
  EventPage.validateAddAnotherFieldPopup();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.clickOnCreateCustomField();
  EventPage.clickOnSelectFieldTypeButton();
  EventPage.selectEventTypeOption(option);
  EventPage.addLabelFieldData(label);
  EventPage.clickOnAddFormFieldButton();
  EventPage.validateNewAddedField(label);

});

Then(/^Custom field (.*) should displayed on registration screen$/, {}, (label) => {
  EventPage.validateCustomFieldOnRegPage(label);

});

Then(/^Custom field should displayed on registration screen (.*)$/, {}, (label) => {
  EventPage.validateCustomFieldForRegistration(label);

});


Then(/^User should able to turn on and off "Email Notification" button$/, {}, () => {
  EventPage.turnOnEmailNotificationButton();
  EventPage.turnOffEmailNotificationButton();

});
Then(/^User should registered only in selected session$/, {}, () => {
  EventPage.validateRegisteredSession();

});

Then(/^It should displayed location of registered user$/, {}, () => {
  browser.refresh();
  if (EventPage.locationOfRegUserIsDisplayed() === true) {
    console.log("Location OF REGISTERED USER is displayed under people tab");
  } else {
    throw new Error("Location of registered user is not displayed under people tab");
  }
});

Then(/^Downloading of recording should start when user selects "Download Recording" option from dropdown$/, {}, () => {
  browser.keys(['Meta', 'Enter']);
  browser.pause(3000);
});


Then(/^User should redirect on editor page$/, {}, () => {
  const frame = $("iframe#reg-editor");
  browser.switchToFrame(frame);
  $(".play-button").waitForExist({ timeout: 6000 });
  if ($(".play-button").isDisplayed() === true) {
    console.log("user redirect on editor page");
  } else {
    throw new Error("failed to redirect On editor page");
  }
});



Then(/^Register count should displayed$/, {}, () => {
  if (EventPage.registerCountIsDisplayed() === true) {
    console.log("Register count is displaying");
  } else {
    throw new Error("Register count is not displaying");
  }
});


Then(/^User shall see "Upcoming" link$/, {}, () => {
  if (EventPage.upcomingLinkIsDisplayed() === true) {
    console.log("Upcoming link is displaying");
  } else {
    throw new Error("Upcoming link is not displaying");
  }
});

Then(/^Delete registration icon should displayed in registration details screen$/, {}, () => {
  if (EventPage.deleteRegistrationIconIsDisplayed() === true) {
    console.log("Delete rwgistration icon is displaying");
  } else {
    throw new Error("Delete registration icon is not displaying");
  }
});

Then(/^Register count should be changed$/, {}, () => {
  browser.pause(2000);
  try {
    $("//div[@class='ant-drawer-mask']").click();
  } catch (error) {

  }
  browser.refresh();
  EventPage.clickOnSummaryTab();
  if (EventPage.getRegisterCount() === "0") {
    console.log("delete registration icon is working");
  } else {
    throw new Error("After delete registration register count missmatched  actual count>>" + EventPage.getRegisterCount())
  }
});


Then(/^Cancel registration button should displayed on registration details screen$/, {}, () => {
  if (EventPage.cnacelRegistrationButtonIsDisplayed() === true) {
    console.log("Cancel registration button is displaying");
  } else {
    throw new Error("Cancel registration button is not displaying");
  }
});

Then(/^Error screen should displayed on attendee's screen$/, {}, () => {
  EventPage.switchToWindowNewTab();
  browser.refresh();
  const error = $("//div[@class='error']");
  error.waitForDisplayed({ timeout: 10000 });
  if (error.isDisplayed() === true) {
    console.log("Error message is succesfully displaying on attendee's screen");
  } else {
    throw new Error("Error message is not displaying on attendee's screen");
  }
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
});
//--------//

Then(/^User shall see copy link icon$/, {}, () => {
  if (EventPage.copyRegistrationLinkIconIsDisplayed() === true) {
    console.log("copy registration link icon is displayed");

  } else {
    throw new Error("Copy registration link icon is not displayed");
  }
});

Then(/^User should able to copy registration link$/, {}, () => {

  const message = $("//div[@class='ant-form-explain']");
  message.waitForDisplayed({ timeout: 10000 });
  if (message.isDisplayed() === true) {
    console.log("copy link icon is working");

  } else {
    throw new Error("copy link icon is not working");
  }

});

Then(/^User should able to send join link$/, {}, () => {

  const message = $("//div[@class='ant-notification-notice-message']");
  message.waitForDisplayed({ timeout: 10000 });
  if (message.isDisplayed() === true) {
    console.log("resend confirmation button is working");

  } else {
    throw new Error("resend confirmation button is not working");
  }
  $("//div[@class='ant-drawer-mask']").click();
});

Then(/^User shall see "Resend confirmation" button$/, {}, () => {
  if (EventPage.resendConfirmationButtonIsDisplayed() === true) {
    console.log("Resend confirmation button is displaying");
  } else {
    throw new Error("Resend confirmation button is not displayed");
  }
});





/*----------Start Series Event page code-------------*/

Then(/^User should be redirected to "Create New Series Event" Screen$/, {}, () => {
  SeriesPage.validateCreateNewSeriesEventPage();
});

Then(/^User shall see "Customize Registration","Edit Form Fields" options$/, {}, () => {
  if (EventPage.customizeRegistrationIsDisplay() == true && EventPage.editFormFieldIsDisplay()) {
    console.log("customize registration and edit form fields options display")
  } else {
    throw new Error("CUSTOMIZE REGISTRATION AND EDIT FORM FIELD  OPTIONS NOT DISPLAYED");
  }

});

Then(/^Should created ten sessions at a time for recurring sessions$/, {}, () => {
  SeriesPage.validateSeriesOfSessionCreated();
});


Then(/^User should able to see correct session (.*) and user info (.*) on "Manage Registration" page$/, {}, (event, regEmail) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  SeriesPage.validateSessionNameOnManageRegPage(eventName);

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.validateUserInfoOnManageRegPage(name, emailAddress);

});
/*----------Strat Automated Event page code-------------*/

Then(/^the FeatureAction links shall launch automatically at the set time$/, {}, () => {

  AutomatedPage.featureActionButtonInRoomIsDisplayed();
})



Then(/^the Handout shall launch automatically at the set time$/, {}, () => {
  AutomatedPage.clickOnHandoutsOption();
  if (AutomatedPage.handOutDownloadButtonIsDisplayed() === true) {
    console.log('Handout is displayed');
  } else {
    throw new Error('Handout is not displayed')
  }
});

Then(/^the Poll shall launch automatically at the set time$/, {}, () => {
  MeetingRoomPage.clickOnPollsOption();
  if (AutomatedPage.pollChatQuestionIsDisplayed() === true) {
    console.log('Poll is displayed');
  } else {
    throw new Error('Poll is not displayed')
  }
});

Then(/^It should displayed correct insights for on demand session including the Registered Attended (.*)$/, {}, (count) => {
  var actAttendedCount = AutomatedPage.getAttendedFromSummary();
  var actRegisteredCount = AutomatedPage.getRegisteredFromSummary();

  if (actAttendedCount === count) {
    console.log('Attened correct matched');
  } else if (actRegisteredCount === count) {
    console.log('Registered Not matched');
  } else {

    throw new Error('DATA IS NOT MATCHED: EXPECTED DATA:' + count + ' ATTENDED ' + actAttendedCount + "REGIS. " + actRegisteredCount);
  }

});

Then(/^User sould redirected to "Activity" section of Event$/, {}, () => {

  if (AutomatedPage.insightsButtonIsDisplayed() === true) {
    console.log('Opened Activity page')
  } else {
    throw new Error('Something went worng  with activity tab');
  }
});

Then(/^It should displayed correct number Attended and Messages (.*) on the On demand section page$/, {}, (userCount) => {
  var actAttendedCount = AutomatedPage.getAttendedCount();
  var actMessages = AutomatedPage.getMessagesCount();
  if (actAttendedCount === userCount && actMessages === userCount) {
    console.log('TOTAL COUNT OF ATTENDED: ' + actAttendedCount)
  } else {
    throw new Error('Reg. Count Is Not Matched: ACTUAL MESSAGE: ' + actMessages + "  Exp MESSAGE: " + userCount + " ACTUAL ATTENDED: " + actAttendedCount + "  Expt ATTENDED: " + userCount);
  }

});

Then(/^It should displayed correct number (.*) of "Attended" on the On demand section page$/, {}, (userCount) => {
  var actAttendedCount = AutomatedPage.getAttendedCount();
  if (actAttendedCount === userCount) {
    console.log('TOTAL COUNT OF ATTENDED: ' + actAttendedCount)
  } else {
    throw new Error('Reg. Count Is Not Matched: ACTUAL: ' + actAttendedCount + "  Exp: " + userCount);
  }
});

Then(/^It should displayed correct number (.*) of "Registered" on the On demand section page$/, {}, (userCount) => {
  var actRegCount = AutomatedPage.getRegisteredCount();
  if (actRegCount === userCount) {
    console.log('TOTAL COUNT OF REG: ' + actRegCount)
  } else {
    throw new Error('Reg. Count Is Not Matched: ACTUAL: ' + actRegCount + "  Exp: " + userCount);
  }

});

Then(/^On-demand session should started as soon as user click on "Join Room" button$/, {}, () => {

  if (AutomatedPage.sessionTimeIsDisplayed() === true) {
    console.log("Session Started");
  } else {
    throw new Error('Session is not  started');
  }
});


Then(/^As soon as user registered for On-demand session user should redirected to "Join Room" button$/, {}, () => {

  if (AutomatedPage.joinRoomButtonIsDisplayed() === true) {
    console.log('Join Now button is displyed')
  } else {
    throw new Error('Somethings went worng');
  }

});

Then(/^User should able to register with email (.*) for On-demand session after Enabling it from event settings$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log("ASDFG" + name);
  console.log("Email" + emailAddress);

  AutomatedPage.registerEvents(name, emailAddress);

});

Then(/^Registraion link should be displayed$/, {}, () => {

  AutomatedPage.registrationLinksIsdisplayed();
});

Then(/^Enable OR Disable "On-Demand" option should be displayed$/, {}, () => {

  if (AutomatedPage.onDemandSwitchIsDisplayed() === true) {
    console.log('on Demand Enable OR Disable option is displayed')
  } else {

    throw new Error('Something went worng with On-Demand switch')
  }
});

Then(/^User should able to Enable OR Disable On-demand sessions of the Automated event$/, {}, () => {

  AutomatedPage.clickOnOnDemandsOption();
  AutomatedPage.enabledOnDemandSwitch();
  AutomatedPage.disabledOnDemandSwitch();
});

Then(/^User should be redirected to "Create New Automated Event" Screen$/, {}, () => {
  AutomatedPage.validateCreateNewAutomatedEventPage();
});

Then(/^User shall see "Upload Media" field$/, {}, () => {
  if (AutomatedPage.uploadMediaFileIsDisplay() === true) {

    console.log('Upload Meadia field displayed')
  } else {
    throw new Error('Upload Media field is not displayed')
  }
});

Then(/^User shall see Link "Or select a video from your library"$/, {}, () => {
  AutomatedPage.selectVideoFromLibrary();
});

Then(/^User shall see "On-Demand" option$/, {}, () => {
  if (EventPage.onDemandOffIsDisplay() == true) {
    console.log("on demand option is display")
  } else {
    throw new Error("ON DEMAND OPTION IS NOT DISPLAY");
  }
});


Then(/^User shall see following toggle buttons for automated event "Instant Confirmation","24Hours Before","1Hour Before","15Minutes Before"$/, {}, () => {

  if (EventPage.instantConfirmationToggleIsDispaly() === true) {
    console.log("instant Confirmation toggle Button Is Displayed")

  } else {
    throw new Error("instant Confirmation toggle Button Is not Displayed");
  }


  if (EventPage.hoursBeforeToggleIsDispaly() === true) {
    console.log("24 hours before toggle Button Is Displayed")

  } else {
    throw new Error("24 hours before toggle Button Is not Displayed");
  }

  if (EventPage.oneHourBeforeToggleIsDispaly() === true) {
    console.log("1 hour before toggle Button Is Displayed")

  } else {
    throw new Error("1 hour before toggle Button Is not Displayed");
  }

  if (EventPage.minutesBeforeToggleIsDispaly() === true) {
    console.log("15 minutes before toggle Button Is Displayed")

  } else {
    throw new Error("15 minutes before toggle Button Is not Displayed");
  }

});



Then(/^User shall see "Edit Email" option with every toggle button for automated event$/, {}, () => {
  if (EventPage.instantConfEditEmailIsDispaly() === true) {
    console.log("instant Confirmation edit email option Is Displayed")

  } else {
    throw new Error("instant Confirmation edit email option Is not Displayed");
  }


  if (EventPage.hoursBeforeEditEmailIsDispaly() === true) {
    console.log("24 hours before edit email option Is Displayed")

  } else {
    throw new Error("24 hours before edit email option Is not Displayed");
  }

  if (EventPage.oneHourBeforeToggleIsDispaly() === true) {
    console.log("1 hour before edit email option Is Displayed")

  } else {
    throw new Error("1 hour before edit email option Is not Displayed");
  }

  if (EventPage.minutesBeforeToggleIsDispaly() === true) {
    console.log("15 minutes before edit email option Is Displayed")

  } else {
    throw new Error("15 minutes before edit email option Is not Displayed");
  }


});


Then(/^User shall see "Resources" and "Settings" option$/, {}, () => {
  if (EventPage.resourceOptionIsDispaly() === true) {
    console.log("Resource option Is Displayed")

  } else {
    throw new Error("Resource option Is not Displayed");
  }

  if (AutomatedPage.roomSettingsOptionIsDispalyed() === true) {
    console.log("Room settings option Is Displayed for automated event")

  } else {
    throw new Error("Room settings option Is not Displayed for automated event");
  }
});



Then(/^for "Handout" User shall see "Handout Title","Upload File" fields for automated event$/, {}, () => {
  if (EventPage.handoutTitleFieldIsDisplay() === true) {
    console.log("Handout tile field is displayed")

  } else {
    throw new Error("Handout title field is not dispalyed");
  }

  if (AutomatedPage.handoutUploadFileIsDispaly() === true) {
    console.log("Handout upload file field Is Displayed")

  } else {
    throw new Error("Handout upload file field Is not Displayed");
  }


});


Then(/^For automated event User should be able to "Upload File" (.*)$/, {}, (image) => {
  AutomatedPage.uploadFileData(image);
});

Then(/^For automated event details email,name (.*) and role (.*) of Admin should be displayed in Event Admins List$/, {}, (name, role) => {
  browser.pause(3000);
  AutomatedPage.validateAddedName(name);
  AutomatedPage.validateAddedRole(role);
  if (EventPage.addedEmailIsDispalyed() === true) {
    console.log("admin email is displayed");
  } else {
    throw new Error("ADMIN'S EMAIL IS NOT ADDED");
  }
});



Then(/^For automated event user shall see names of added user and "add another user" options$/, {}, () => {
  if (AutomatedPage.addedMemberNameIsDisplay() === true) {
    console.log("Added member name Is Displayed in dropdown list")

  } else {
    throw new Error("Added member name Is not Displayed in dropdown list");
  }

  if (EventPage.addAnotherUserOptionIsDisplay() === true) {
    console.log("add another user option Is Displayed in dropdown list")

  } else {
    throw new Error("add another user option Is not Displayed in dropdown list");
  }

});

Then(/^For Automated event user shall see "Select a role" dropdown$/, {}, () => {
  if (AutomatedPage.selectRoleDropdownIsDisplay() === true) {
    console.log("Select role dropdown Is Displayed ")

  } else {
    throw new Error("Select role dropdown Is not Displayed");
  }


});

Then(/^User shall see "Moderator" option$/, {}, () => {

  if (EventPage.moderatorOptionIsDisplay() === true) {
    console.log("Moderator option Is Displayed in dropdown list")

  } else {
    throw new Error("Moderator option Is not Displayed in dropdown list");
  }

});
Then(/^Click on "ADD ADMIN" Button and the Admin should be added and displayed in Event Admins List$/, {}, () => {
  EventPage.clickOnAddAdminButton();
  AutomatedPage.addedAdminIsDisplayedInList();


});

Then(/^the selected Team Member is added as Host for the Event$/, {}, () => {
  AutomatedPage.addedAdminIsDisplayedInList();


});

Then(/^For automated event attendees should redirect on added url (.*)$/, {}, (url) => {
  browser.pause(30000);
  EventPage.validateWindowUrl(url);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();


});


Then(/^For automated event user shall see Preview of the registration form$/, {}, () => {
  if (AutomatedPage.previewRegistrationFormIsDisplay() == true) {
    console.log("Preview registration form is display")
  } else {
    throw new Error("Preview registration form is not displayed");
  }
});

Then(/^For automated event user should be able to change the Form width (.*)$/, {}, (formWidth) => {
  EventPage.addFormWidthData(formWidth);
  AutomatedPage.validateUpdatedFormWidth(formWidth);
});
Then(/^For automated event user should redirected to "Thank You" screen (.*)$/, {}, (header) => {
  browser.pause(10000);
  EventPage.validateThankYouScreen(header);
  // EventPage.closeResentWindow();
  // EventPage.switchToManageEventWindow();
});


Then(/^Validation message (.*) should displayed$/, {}, (validationMsg) => {
  AutomatedPage.validateSendReplyValidationMsg(validationMsg);
});

Then(/^User shall see Filter dropdown$/, {}, () => {
  if (AutomatedPage.filterDropDownIsDisplayed() === true) {
    console.log("filter drop down is displayed");
  } else {
    throw new Error("filter dropdown is not dispalyed");
  }
});

Then(/^User shall see options "Scheduled Session" and "On-demand Session"$/, {}, () => {
  if (AutomatedPage.scheduledSessionOptionIsDisplayed() === true) {
    console.log("Scheduled session option is displayed");
  } else {
    throw new Error("Scheduled session option is not displayed");
  }

  if (AutomatedPage.onDemandOptionIsDisplayed() === true) {
    console.log("On demand option is displayed");
  } else {
    throw new Error("On demand option is not displayed");
  }
});

Then(/^The data shall display as per the option selected from the dropdown$/, {}, () => {
  EventPage.clickOnSummaryTab();
  var actDate = $("td:nth-of-type(1) > span > span").getText();
  EventPage.clickOnActivityTab();
  AutomatedPage.clickOnFilterDropdown();
  AutomatedPage.selectScheduledSessionOption();
  browser.pause(2000);
  var expDate = $(".session-selector-button > span:nth-of-type(1)").getText().replace("Upcoming", "");
  if (actDate.includes(expDate)) {
    console.log("Filter dropdown is working");
  } else {
    console.log("actual date & time>>" + actDate + "expected date & time>>" + expDate);
    throw new Error("Filter dropdown is not working");

  }
});

Then(/^For automated event "Resources" option "ADD A RESOURCE" button should display$/, {}, () => {
  if (AutomatedPage.addAResourceButtonIsDispaly() === true) {
    console.log("Add a resource button Is Displayed")

  } else {
    throw new Error("Add a resource button Is not Displayed");
  }

});

Then(/^User shall see notice (.*)$/, {}, (notice) => {
  AutomatedPage.validateVideoNotice(notice);

});

Then(/^User shall see upload video option at the end of the notice$/, {}, () => {
  if (AutomatedPage.uploadVideoOptionIsDisplayed() === true) {
    console.log("upload video option is displaying");
  } else {
    throw new Error("Upload video option is not displayed");
  }

});

Then(/^User should be redirected to the "Automation" block$/, {}, () => {
  if (AutomatedPage.automationTabIsDisplayed() === true) {
    console.log("Successfully redirect on automation block");
  } else {
    throw new Error("failed to redirect on automation block");
  }

});

Then(/^For automated event User shall see "Upload Media" option$/, {}, () => {
  if (AutomatedPage.automationTabIsDisplayed() === true) {
    console.log("Successfully redirect on automation block");
  } else {
    throw new Error("failed to redirect on automation block");
  }

});

Then(/^User should be able to upload video (.*)$/, {}, (videoName) => {
  AutomatedPage.selectVideoFromLibrary(videoName);
  $(".demio-upload-preview").waitForDisplayed({ timeout: 30000 });

});

Then(/^User shall see "Swap Video" and "Download Media" option$/, {}, () => {
  if (AutomatedPage.swapVideoOptionIsDisplayed() === true) {
    console.log("Swap video option is displaying");
  } else {
    throw new Error("Swap video option is not displaying");
  }
  if (AutomatedPage.downloadMediaOptionIsDisplayed() === true) {
    console.log("Download media option is displaying");
  } else {
    throw new Error("Download media option is not displaying");
  }
});

Then(/^The uploaded video should be downloaded$/, {}, () => {
  EventPage.switchToWindowNewTab();
  if ($("body > video[name='media']").isDisplayed() === true) {
    console.log("video downloaded successfully");
  } else {
    throw new Error("failed to download video");
  }
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^The user shall see "Swap Video" pop-up (.*)$/, {}, (popupTitle) => {
  AutomatedPage.validateSwapVideoPopup(popupTitle);

});
Then(/^The user should be able to upload swap video (.*)$/, {}, (swapVideo) => {
  AutomatedPage.uploadVideo(swapVideo);
  browser.pause(20000);

});

Then(/^User shall see "NO,NEVER MIND" and "SWAP VIDEO" button$/, {}, () => {
  if (AutomatedPage.noNeverMindButtonIsDisplayed() === true) {
    console.log("No,Never Mind button is displaying");
  } else {
    throw new Error("No,Never Mind Button is not displaying");
  }
  if (AutomatedPage.swapTheVideoButtonIsDisplayed() === true) {
    console.log("Swap the video button is displaying");
  } else {
    throw new Error("Swap the video button is not displaying");
  }
});

Then(/^User should able to see "NO,NEVER MIND" button$/, {}, () => {
  if (AutomatedPage.noNeverMindButtonIsDisplayed() === true) {
    console.log("No,Never Mind button is displaying");
  } else {
    throw new Error("No,Never Mind Button is not displaying");
  }

});

Then(/^The video should be swapped (.*)$/, {}, (swapVideo) => {
  AutomatedPage.validateSwappedVideo(swapVideo);
});
Then(/^The video uploading should be cancelled$/, {}, () => {
  $(".ant-modal-body div[role='tabpanel'] span[role='button']").waitForDisplayed({ timeout: 10000 });
  if ($(".ant-modal-body div[role='tabpanel'] span[role='button']").isDisplayed() === true) {
    console.log("Cancel upload button is working");
  } else {
    throw new Error("Cancel upload button is not working");
  }
});

Then(/^The uploaded video should vanish$/, {}, () => {
  if (AutomatedPage.swappedVideoIsDisplayed() === true) {
    throw new Error("Swapped video is still displaying");
  } else {
    console.log("Select different video option is working");
  }
});

Then(/^User should be able to upload a new video (.*)$/, {}, (newVideo) => {
  AutomatedPage.uploadVideo(newVideo);
  browser.pause(10000);
  // AutomatedPage.validateSwappedVideo(newVideo);

  $("(//div[@class='file-name'])[2]").waitForDisplayed({ timeout: 20000 });
  var actVideo = $("(//div[@class='file-name'])[2]").getText();
  if (actVideo.includes(newVideo)) {
    console.log("Video swapped successfully");
  } else {
    throw new Error("Failed to swap video actual video>>" + actVideo + "Expected video>>" + swapVideo);
  }

});


//------------------START MEETING ROOM SCRIPTS----------------//

Then(/^It should redirected to "Welcome," page (.*)$/, {}, (pageTitle) => {
  EventPage.switchToJoinWindow();
  browser.pause(3000);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(5000);
  MeetingRoomPage.validateWelcomePage(pageTitle);
});

Then(/^User should redirected to Meeting Room$/, {}, () => {
  if (MeetingRoomPage.goOnStageButtonIsDisplayed() === true) {
    console.log("user successfully redirect to meeting room");
  } else {
    throw new Error("failed to redirect to meeting room screen");
  }
});


Then(/^Session should started$/, {}, () => {
  if (MeetingRoomPage.sessionTimeIsDisplayed() === true) {
    console.log("Session started successfully");
  } else {
    throw new Error("Session is not started");
  }
});

Then(/^Added resources should displayed$/, {}, () => {
  if (MeetingRoomPage.addedChatResourceIsDisplayed() === true) {
    console.log("added chat resource displayed successfully");
  } else {
    throw new Error("added chat resource is not displayed successfully");
  }
});

Then(/^Added material (.*) should displayed under share screen$/, {}, (name) => {
  browser.pause(2000);
  MeetingRoomPage.validateAddedMaterial(name);

});

Then(/^Registered attendees (.*) should displayed under the Attendee option$/, {}, (regEmail) => {
  MeetingRoomPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.validateAttendeeDetails(name, emailAddress);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToRegistrationWindow();
});



Then(/^Host must be Added for event$/, {}, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  if (MeetingRoomPage.hostUnderAdminEvantsIsDisplayed() === true) {
    console.log("Host is added for event");
  } else {
    throw new Error("host is not added for event");
  }
});
Then(/^Host (.*) should displayed under the Attendee option$/, {}, (userName) => {
  var data = TestUtils.getUserCredetials(userName); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();
  const userid = data[0];
  MeetingRoomPage.validateHostDetails(userid);

});

Then(/^(.*) must be Added (.*) for event$/, {}, (role, regEmail) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];

  EventPage.addNameField(name);
  EventPage.addAdminEmailField(emailAddress);
  EventPage.clickOnSelectRoleGuestDropdown();
  EventPage.selectRoleOption(role);
  EventPage.clickOnAddAdminButton();
  browser.pause(3000);
});


Then(/^Presenter's details (.*) should displayed under attendees option$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.validatePresenterDetails(name, emailAddress);

});

Then(/^Moderator's details (.*) should displayed under attendees option$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.validateModeratorDetails(name, emailAddress);

});

Then(/^Timer should displayed as soon as session has started$/, {}, () => {
  if (MeetingRoomPage.sessionTimeIsDisplayed() === true) {
    console.log("Timer is displayed successfully");
  } else {
    throw new Error("TIMER IS NOT DISPLAYED");
  }

});

Then(/^Click on end the session$/, {}, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();

});

Then(/^Host end's the session$/, {}, () => {
  EventPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();

});

Then(/^Join room and click on people button$/, {}, () => {
  MeetingRoomPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  MeetingRoomPage.clickOnPeopleButton();

});

Then(/^Host should able to ban an attendee with title (.*)$/, {}, (title) => {
  EventPage.closeResentWindow();
  EventPage.switchToRegistrationWindow();
  MeetingRoomPage.validateRemovedUserPageTitle(title);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();

});

Then(/^Page title (.*) should displayed on banned attendee's screen$/, {}, (title) => {
  EventPage.closeResentWindow();
  EventPage.switchToRegistrationWindow();
  MeetingRoomPage.validateRemovedUserPageTitle(title);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();

});

Then(/^Should displayed correct Name and Email of the Attendee (.*)$/, {}, (regEmail) => {
  MeetingRoomPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();

  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.validateAttendeeDetails(name, emailAddress);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToRegistrationWindow();
});

Then(/^Should displayed correct Name and Email of the Presenter (.*)$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.validatePresenterDetails(name, emailAddress);

});


Then(/^Should displayed correct Name and Email of the Moderator (.*)$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  MeetingRoomPage.clickOnPeopleButton();
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.validateModeratorDetails(name, emailAddress);

});




Then(/^Add resources options "poll" , "handout" and "featured action" should displayed$/, {}, () => {
  if (MeetingRoomPage.pollOptionIsDispalyed() === true) {
    console.log("Poll option Is Displayed")

  } else {
    throw new Error("Poll option Is not Displayed");
  }

  if (MeetingRoomPage.handoutOptionIsDispalyed() === true) {
    console.log("Handout option Is Displayed")

  } else {
    throw new Error("Handout option Is not Displayed");
  }

  if (MeetingRoomPage.featuredActionOptionIsDispaly() === true) {
    console.log("featured action option Is Displayed")

  } else {
    throw new Error("Featured action option Is not Displayed");
  }
});

Then(/^Admin should able to add and share new poll (.*) within the meeting room$/, {}, (question) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(question);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();

  browser.pause(6000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^User should able to view poll (.*) and options (.*) and (.*)$/, {}, (question, option1, option2) => {
  MeetingRoomPage.validatePollQuestionOnAttendeeScreen(question);
  MeetingRoomPage.validatePollOptionsOnAttendeeScreen(option1, option2);
});

Then(/^User should able to add handout title (.*)$/, {}, (title) => {
  MeetingRoomPage.addHandoutTitleData(title);

});

Then(/^Admin should able to add and share handout (.*) within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(title);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();

  browser.pause(6000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Attendee should able to view handouts (.*)$/, {}, (title) => {
  MeetingRoomPage.validateHandoutOnAttendeeScreen(title);

});


Then(/^User should able to add featured action title field (.*)$/, {}, (title) => {
  MeetingRoomPage.fillFeaturedTitleField(title);
});

Then(/^User should able to add link url (.*) and button text field (.*) and file (.*)$/, {}, (link, buttonText, image) => {
  MeetingRoomPage.fillLinkUrlField(link);
  MeetingRoomPage.fillButtonTextField(buttonText);
  EventPage.uploadImageData(image);
});

Then(/^Admin should able to add new featured action (.*) within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(title);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();
  browser.pause(6000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Attendee should able to view featured action button (.*)$/, {}, (title) => {
  MeetingRoomPage.validateFeaturedTitleOnAttendeeScreen(title);
});

Then(/^Button text should displayed as (.*)$/, {}, (buttonText) => {
  MeetingRoomPage.validateButtonTextOnAttendeeScreen(buttonText)
});


Then(/^Guest should able to add and share new poll (.*) within the meeting room$/, {}, (question) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(question);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Guest should able to add and share handout (.*) within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(title);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Guest should able to add new featured action (.*) within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(title);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});



Then(/^Shared slide should displayed on attendee (.*) screen$/, {}, (regEmail) => {
  var actSource = $("img[alt='Demio Slides Slide #1']").getAttribute("src");
  browser.pause(5000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(10000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(10000);
  var expSource = $("img[alt='Demio Slides Slide #1']").getAttribute("src");
  if (actSource.includes(expSource)) {
    console.log("slide is matched on attendees screen");
  } else {
    console.log("actual source>>" + actSource + "expected source>>" + expSource);
    throw new Error("Slide missmatched on attendee's screen");
  }
});

Then(/^Shared video is displayed on attendee's screen$/, {}, () => {
  if (MeetingRoomPage.sharedVideoIsDispalyed() === true) {
    console.log("Shared video is displayed successfully");
  } else {
    throw new Error("SHARED VIDEO IS NOT DISPLAYED");
  }
});



Then(/^Host should able to send message (.*) in the chat$/, {}, (message) => {
  MeetingRoomPage.validateMessageInChatWindow(message);
});


Then(/^Attendee should able to receive message (.*) in the chat$/, {}, (message) => {
  MeetingRoomPage.validateReceivedMessage(message);
});

Then(/^Guest should able to send message (.*) in the chat$/, {}, (message) => {
  MeetingRoomPage.validateMessageInChatWindow(message);
});

Then(/^Banned attendee (.*) should not able to join the Room again (.*)$/, {}, (regEmail, title) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  MeetingRoomPage.validateRemovedUserPageTitle(title);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Attendee should able to send message (.*) in the chat$/, {}, (message) => {
  MeetingRoomPage.validateMessageInChatWindow(message);
});

Then(/^Host Should able to receive message (.*) send by attendee$/, {}, (message) => {
  MeetingRoomPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.validateReceivedMessage(message);
});


Then(/^Register user (.*) should able to receive message (.*)$/, {}, (regEmail, message) => {
  EventPage.switchToParentTab();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(6000);
  MeetingRoomPage.validateReceivedMessage(message);
});



Then(/^Delete icon should diplayed with message$/, {}, () => {
  if (MeetingRoomPage.deleteMessageButtonIsDisplayed() === true) {
    console.log("Delete message button is displayed successfully");
  } else {
    throw new Error("DELETE MESSAGE BUTTON IS NOT DISPLAYED");
  }
});

Then(/^Delete message is not displayed on chat window$/, {}, () => {
  MeetingRoomPage.validateDeletedMessage();
});
Then(/^Delete message is not displayed on attendee's screen$/, {}, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  MeetingRoomPage.validateDeletedMessage();
  EventPage.closeResentWindow();
  EventPage.switchToWindowNewTab();

});

Then(/^"Yes delete" button should displayed$/, {}, () => {
  if (MeetingRoomPage.yesDeleteButtonIsDisplayed() === true) {
    console.log("yes Delete button is displayed successfully");
  } else {
    throw new Error("yes DELETE BUTTON IS NOT DISPLAYED");
  }
});

Then(/^Share handout (.*) within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(title);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();
  browser.pause(8000);

});

Then(/^Attendee clicks on download button of shared resource$/, {}, () => {
  EventPage.clickOnHandoutsButton();
  EventPage.clickOnResourceDownloadButton();
  EventPage.closeResentWindow();
  EventPage.switchToWindowNewTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  browser.pause(3000);
  EventPage.closeResentWindow();
  // EventPage.switchToManageEventWindow();

});

Then(/^Guest share handout (.*) within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(title);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  browser.pause(6000);

});

Then(/^Host should able to See the Results (.*) of Handouts under the Handouts Section$/, {}, (downloadCount) => {
  MeetingRoomPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.validateHandoutResult(downloadCount);


});

Then(/^Guest should able to See the Results (.*) of Handouts under the Handouts Section$/, {}, (downloadCount) => {

  EventPage.clickOnGuestTab();
  MeetingRoomPage.clickOnSessionOptionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLink();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.validateHandoutResult(downloadCount);


});


Then(/^Host should able to See the Results of Polls under the Polls Section for (.*) and (.*)$/, {}, (selectOption1, selectOption2) => {
  MeetingRoomPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.validateOption1Result(selectOption1);
  MeetingRoomPage.validateOption2Result(selectOption2);
  MeetingRoomPage.validateTotalPollResult(selectOption1, selectOption2);

});


Then(/^Guest share poll (.*) within the meeting room$/, {}, (question) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedChatResource(question);
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  browser.pause(6000);

});
Then(/^Guest should able to See the Results of Polls under the Polls Section for (.*) and (.*)$/, {}, (selectOption1, selectOption2) => {

  EventPage.clickOnGuestTab();
  MeetingRoomPage.clickOnSessionOptionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLink();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.validateOption1Result(selectOption1);
  MeetingRoomPage.validateOption2Result(selectOption2);
  MeetingRoomPage.validateTotalPollResult(selectOption1, selectOption2);

});


Then(/^Host should able to Mark the message sent by attendee as question$/, {}, () => {
  if (MeetingRoomPage.chatQuestionOptionIsDisplayed() === true) {
    console.log("Mark as a question option is working");
  } else {
    throw new Error("MARK AS A QUESTION OPTION IS NOT WORKING");
  }
});



Then(/^Guest should able to Mark the message sent by attendee as question$/, {}, () => {
  if (MeetingRoomPage.chatQuestionOptionIsDisplayed() === true) {
    console.log("Mark as a question option is working");
  } else {
    throw new Error("MARK AS A QUESTION OPTION IS NOT WORKING");
  }
});

Then(/^Host should able to Unmark the message sent by attendee by clicking on "Unmark as question" option$/, {}, () => {
  if (MeetingRoomPage.chatQuestionOptionIsDisplayed() === true) {
    throw new Error("UNMARK AS A QUESTION OPTION IS NOT WORKING");

  } else {
    console.log("UnMark as a question option is working");
  }
});


Then(/^"Unmark as question" option should displayed$/, {}, () => {
  if (MeetingRoomPage.unMarkAsQuestionOptionIsDisplayed() === true) {
    console.log("UnMark as a question option is working");
  } else {
    throw new Error("UNMARK AS A QUESTION OPTION IS NOT WORKING");
  }
});


Then(/^Guest should able to Unmark the message sent by attendee by clicking on "Unmark as question" option$/, {}, () => {
  if (MeetingRoomPage.chatQuestionOptionIsDisplayed() === true) {
    throw new Error("UNMARK AS A QUESTION OPTION IS NOT WORKING");

  } else {
    console.log("UnMark as a question option is working");
  }
});

Then(/^Host should able to Answer the Marked Question$/, {}, () => {
  if (MeetingRoomPage.finishAnsweringButtonIsDisplayed() === true) {
    console.log("Host is able to Answer the Marked Question");

  } else {
    throw new Error("Host is failed to Answer the Marked Question");
  }
});

Then(/^Live answer message (.*) should display on attendee's screen under live answer container$/, {}, (message) => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  MeetingRoomPage.validateLiveAnswerMessage(message);
});

Then(/^Guest should able to Answer the Marked Question$/, {}, () => {
  if (MeetingRoomPage.finishAnsweringButtonIsDisplayed() === true) {
    console.log("Guest is able to Answer the Marked Question");

  } else {
    throw new Error("Guest is failed to Answer the Marked Question");
  }
});

Then(/^Live answer message (.*) should display on attendee's screen$/, {}, (message) => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  MeetingRoomPage.validateLiveAnswerMessage(message);
});

Then(/^"Answered" (.*) should displayed after the question is answered$/, {}, (questionStatus) => {
  MeetingRoomPage.validateQuestionStatus(questionStatus);
});


Then(/^Host should able to mention (.*) in the meeting room by clicking on "@" in chat window$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.validateMentionedNameInChatWindow(name);
});
Then(/^Mentioned attendee's (.*) name should displayed in chat window$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.validateMentionedNameInChatWindow(name);
});
Then(/^Guest should able to mention (.*) in the meeting room by clicking on "@" in chat window$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.validateMentionedNameInChatWindow(name);
});

Then(/^Attendee should able to mention (.*) in the meeting room by clicking on "@" in chat window$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.validateMentionedNameInChatWindow(name);
});

Then(/^Mentioned guest's (.*) name should displayed in chat window$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.validateMentionedNameInChatWindow(name);
});

Then(/^In other tab second attendee (.*) joins the session$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[3]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  MeetingRoomPage.registerMoreThanOneUsers(name, emailAddress);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
});
Then(/^(.*) private message should not displayed on other attendee's screen$/, {}, (message) => {

  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[3]);
  if (EventPage.joinRoomBtnUnderJoin.isDisplayed() === true) {
    EventPage.joinRoomBtnUnderJoin.click();

  } else {
    console.log("Button is not displying")
  }

  MeetingRoomPage.validatePrivateMessage(message);

});
Then(/^(.*) public message should displayed on other attendee's screen$/, {}, (message) => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[3]);
  if (EventPage.joinRoomBtnUnderJoin.isDisplayed() === true) {
    EventPage.joinRoomBtnUnderJoin.click();
    browser.pause(7000);
    MeetingRoomPage.clickOnOpenChatButton();
    browser.pause(1000);
  } else {
    console.log("Button is not displying")
  }
  MeetingRoomPage.clickOnOpenChatButton();
  MeetingRoomPage.validatePublicMessage(message);

});
Then(/^Close recent window$/, {}, () => {

  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  browser.pause(1000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();

});
Then(/^Only questioned messages (.*) should displayed when click on chat question button$/, {}, (message) => {
  MeetingRoomPage.validateMessageInChatWindow(message);

});

Then(/^Mentioned message (.*) should displayed when click on "@"$/, {}, (message) => {
  MeetingRoomPage.validateMessageInChatWindow(message);
});

Then(/^Admin should able to receive message (.*) in the chat$/, {}, (message) => {
  MeetingRoomPage.validateReceivedMessage(message);
});
Then(/^Attendee should not able to receive admins message (.*) in the chat$/, {}, (message) => {
  if (MeetingRoomPage.messageIsDisplayed(message) === true) {
    throw new Error("Admin message displayed on attendee's screen");
  } else {
    console.log("Admin message is displayed only to admins");
  }
});
Then(/^Window should expand to full screen when clicked on Fullscreen option$/, {}, () => {
  MeetingRoomPage.validateMaximizedWindow();
  // MeetingRoomPage.clickOnFullScreenOption();
});

Then(/^Chat Panel should minimized (.*)$/, {}, (minimizedPanelClass) => {
  MeetingRoomPage.validateMinimizedChatPanel(minimizedPanelClass);

});

Then(/^Setting Pop up should displayed$/, {}, () => {
  if (MeetingRoomPage.settingPopupIsDisplayed() === true) {
    console.log("setting popup is displayed ");
  } else {
    throw new Error("Setting popup is not displayed");
  }

});

Then(/^Chat Pop up should displayed$/, {}, () => {
  MeetingRoomPage.validateChatPopup();
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  browser.pause(500);

});
Then(/^Host should able to End the session$/, {}, () => {
  if (EventPage.summaryTabIsDisplay() === true) {
    console.log("Session ended successfully");
  } else {
    throw new Error("End session button is not working");
  }
});
Then(/^Timer should displayed in the Video launched$/, {}, () => {
  if (MeetingRoomPage.videoTimerIsDisplayed() === true) {
    console.log("Video timer is displaying successfully");
  } else {
    throw new Error("video timer is not displayed");
  }

});

Then(/^User shall see Pause,Restart and Stop buttton$/, {}, () => {
  if (MeetingRoomPage.pauseVideoButtonIsDisplayed() === true) {
    console.log("Pause video button is displaying successfully");
  } else {
    throw new Error("Pause video button is not displayed");
  }

  if (MeetingRoomPage.restartVideoButtonIsDisplayed() === true) {
    console.log("Restart video button is displaying successfully");
  } else {
    throw new Error("Restart video button is not displayed");
  }

  if (MeetingRoomPage.stopSharingVideoButtonIsDisplayed() === true) {
    console.log("Stop video button is displaying successfully");
  } else {
    throw new Error("Stop video button is not displayed");
  }
});

Then(/^Pause,Restart and Stop buttton should work as per their functionality$/, {}, () => {
  MeetingRoomPage.clickOnPauseVideoButton();
  MeetingRoomPage.validatePausedVideo();
  MeetingRoomPage.clickOnRestartVideoButton();
  MeetingRoomPage.validateRestartedVideo();
  MeetingRoomPage.clickOnStopShareVideoButton();
  MeetingRoomPage.validateStopedVideo();
});


Then(/^User shall see Next, Previous and Stop button$/, {}, () => {
  browser.pause(5000);
  $("img[alt='Demio Slides Slide #1']").moveTo();
  $("img[alt='Demio Slides Slide #1']").click();
  if (MeetingRoomPage.stopSharingSlideButtonIsDisplayed() === true) {
    console.log("Stop slide button is displaying successfully");
  } else {
    throw new Error("Stop slide button is not displayed");
  }

  if (MeetingRoomPage.nextSlideButtonIsDisplayed() === true) {
    console.log("Next slide button is displaying successfully");
  } else {
    throw new Error("Next slide button is not displayed");
  }

  if (MeetingRoomPage.previousSlideButtonIsDisplayed() === true) {
    console.log("Previous slide button is displaying successfully");
  } else {
    throw new Error("Previous slide button is not displayed");
  }

});


Then(/^Next, Previous and Stop button should work as per their functionality$/, {}, () => {
  MeetingRoomPage.validateNextSlideFunctionality();
  MeetingRoomPage.validatePreviousSlideFunctionality();
  MeetingRoomPage.clickOnStopShareSlideButton();

});

Then(/^Share your screen and Stop sharing buttons are displaying when admin shares the material$/, {}, () => {
  if (MeetingRoomPage.shareYourScreenButtonIsDisplayed() === true) {
    console.log("Share your screen button is displaying successfully");
  } else {
    throw new Error("Share your screen button is not displayed");
  }

  if (MeetingRoomPage.stopSharingButtonIsDisplayed() === true) {
    console.log("Stop sharing button is displaying successfully");
  } else {
    throw new Error("Stop sharing button is not displayed");
  }
});
Then(/^Admin should able to Switch from Slides to Video$/, {}, () => {
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnVideoMaterial();
  MeetingRoomPage.clickOnYesShareButton();
  MeetingRoomPage.validateSharedVideo();
  browser.pause(3000);

});


Then(/^Same slide should displayed on attendee (.*) screen$/, {}, (regEmail) => {
  var actSlide = $("div#slides-container > .slides>img").getAttribute("alt");
  // EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  // EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(1000);
  $("div#slides-container > .slides>img").waitForDisplayed({ timeout: 30000 });
  var expSlide = $("div#slides-container > .slides>img").getAttribute("alt");
  if (actSlide.includes(expSlide)) {
    console.log("slide is matched on attendees screen");
  } else {

    throw new Error("Slide missmatched on attendee's screen  actual slide>>" + actSlide + "expected slide>>" + expSlide);
  }
});


Then(/^Video should be paused$/, {}, () => {
  MeetingRoomPage.validatePausedVideo();
});

Then(/^Moderator should redirected to Meeting Room$/, {}, () => {
  if (MeetingRoomPage.peopleButtonIsDisplayed() === true) {
    console.log("Moderator successfully redirect to meeting room");
  } else {
    throw new Error("failed to redirect to meeting room screen");
  }
});

Then(/^Attendee should redirected to Meeting Room$/, {}, () => {
  if (MeetingRoomPage.chatHeaderTabIsDispalyed() === true) {
    console.log("Attendee successfully redirect to meeting room");
  } else {
    throw new Error("failed to redirect to meeting room screen");
  }
});


Then(/^Session pop up should display$/, () => {
  if (MeetingRoomPage.sessionPopupIsDispalyed() === true) {
    console.log("Session popup is successfully displayed");
  } else {
    throw new Error("SESSION POPUP IS NOT DISPLAYED AFTER CLICK ON SESSION NAME");
  }
});

Then(/^User shall see "End Session" Pop-up.$/, () => {
  if (MeetingRoomPage.endSessionPopupIsDispalyed() === true) {
    console.log("end Session popup is successfully displayed");
  } else {
    throw new Error("END SESSION POPUP IS NOT DISPLAYED AFTER CLICK ON END SESSION BUTTON");
  }


});

Then(/^User shall see following options "Video","Audio","Connectivity"$/, () => {
  if (MeetingRoomPage.videoOptionIsDipslayed() === true) {
    console.log("video option is displaying under go on stage popup");
  } else {
    throw new Error("Video option is not displayed on go on stage popup");
  }

  if (MeetingRoomPage.audioOptionIsDisplayed() === true) {
    console.log("Audio option is displaying under go on stage popup");
  } else {
    throw new Error("Audio option is not displayed on go on stage popup");
  }

  if (MeetingRoomPage.connectivityOptionIsDisplayed() === true) {
    console.log("Connectivity option is displaying under go on stage popup");
  } else {
    throw new Error("Connectivity option is not displayed on go on stage popup");
  }

});



Then(/^User should be redirected back to the meeting room$/, () => {
  if (MeetingRoomPage.stageEmptyMessageIsDisplayed() === true) {
    console.log("user successfully redirect back to meeting room");

  } else {
    throw new Error("failed to redirect back to meeting room screen");
  }
});

Then(/^User should be redirected back to the meeting room with the staging menu bar at bottom$/, () => {
  if (MeetingRoomPage.stagingMenuBarIsDisplayed() === true) {
    console.log("staging menu bar is successfully displaying");
  } else {
    throw new Error("Staging menu bar is not displayed after clicking on go on stage button");
  }
});


Then(/^User shall see "([^"]*)" Pop up screen$/, (args1) => {
  if (MeetingRoomPage.goOnStagePopupIsDispalyed() === true) {
    console.log("Go on stage popup is displaying successfully>>" + args1);
  } else {
    throw new Error("go on stage popup is not displayed");
  }
});

Then(/^User should be able to turn on and off "Audio" button$/, () => {
  if (MeetingRoomPage.getAudioButtonStatus() === "false") {
    console.log("Audio button is currently off");
    MeetingRoomPage.clickOnAudioButton();
  } else if (MeetingRoomPage.getAudioButtonStatus() === "true") {
    console.log("audio button is already on");
  } else {
    throw new Error("AUDIO BUTTON IS NOT DISPLAYED");
  }
});
Then(/^User should be able to turn on and off "Video" button$/, () => {
  if (MeetingRoomPage.getVideoButtonStatus() === "false") {
    console.log("Audio button is currently off");
    MeetingRoomPage.clickOnVideoButton();
  } else if (MeetingRoomPage.getVideoButtonStatus() === "true") {
    console.log("Video button is already on");
  } else {
    throw new Error("VIDEO BUTTON IS NOT DISPLAYED");
  }
});


Then(/^The invite should be sent to the selected Presenter$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  browser.pause(3000);
  if (MeetingRoomPage.goOnStageJoinSessionButtonIsDispalyed() === true) {
    console.log("Invite successfully send to selected admin");
  } else {
    throw new Error("Fail to send invite to selected host");
  }
});

Then(/^The invite should be sent to the selected Attendee$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[3]);
  browser.pause(3000);
  if (MeetingRoomPage.goOnStageJoinSessionButtonIsDispalyed() === true) {
    console.log("Invite successfully send to selected attendee");
  } else {
    throw new Error("Fail to send invite to selected attendee");
  }
});


Then(/^close all three tabs$/, () => {
  EventPage.closeResentWindow();
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  EventPage.closeResentWindow();
  EventPage.switchToWindowNewTab();
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();

});




Then(/^In third tab attendee (.*) joins the session$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[3]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);

  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(5000);
});


Then(/^User shall see moderator details (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail);
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];

  var actName = $(".--label-moderator.title").getText();
  var actEmail = $("div:nth-of-type(2) > .PeopleItem-container > .PeopleItem__content > .email.subtitle").getText();
  if (actName.includes(name) && actEmail.includes(emailAddress)) {
    console.log("Moderator's name and email address matched");
  } else {

    throw new Error("Moderator's details missmatched..actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
  }

});

Then(/^The invite should be sent to the selected Moderator$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  browser.pause(2000);
  if (MeetingRoomPage.goOnStageJoinSessionButtonIsDispalyed() === true) {
    console.log("Invite successfully send to selected admin");
  } else {
    throw new Error("Fail to send invite to selected host");
  }
});

Then(/^Close Window new tab and switch to parent tab$/, () => {
  EventPage.switchToWindowNewTab();
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
});

Then(/^User shall see host details (.*)$/, (member) => {
  browser.pause(500);
  var actName = $("(//div[@class='title --label-host'])[2]").getText();
  if (actName.includes(member)) {
    console.log("Host's name matched");
  } else {

    throw new Error("Host's name missmatched..actual name>>" + actName + "expected name>>" + member);
  }

});

Then(/^User shall see all the attenees (.*) and host (.*)$/, (regEmail, member) => {
  var actName = $("div:nth-of-type(2) > .PeopleItem-container > .PeopleItem__content > .PeopleItem__row > .--label-host.title").getText();
  if (actName.includes(member)) {
    console.log("Host's name matched");
  } else {

    throw new Error("Host's name missmatched..actual name>>" + actName + "expected name>>" + member);
  }
  var data = TestUtils.getEmailForRegistration(regEmail);
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)

  var actName = $(".--label-attendee.title").getText();
  var actEmail = $("div:nth-of-type(3) > .PeopleItem-container > .PeopleItem__content > .email.subtitle").getText();
  if (actName.includes(name) && actEmail.includes(emailAddress)) {
    console.log("attendee's name and email address matched");
  } else {

    throw new Error("attendee's details missmatched..actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
  }
});



Then(/^The invite should be sent to the selected Host$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  browser.pause(1000);
  if (MeetingRoomPage.goOnStageJoinSessionButtonIsDispalyed() === true) {
    console.log("Invite successfully send to selected host");
  } else {
    throw new Error("Fail to send invite to selected host");
  }
});

Then(/^The invite should be sent to the admin$/, () => {
  if (MeetingRoomPage.goOnStageJoinSessionButtonIsDispalyed() === true) {
    console.log("Invite successfully send to selected host");
  } else {
    throw new Error("Fail to send invite to selected host");
  }
});

Then(/^The invite should be sent to the first selected Attendee$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  if (MeetingRoomPage.goOnStageJoinSessionButtonIsDispalyed() === true) {
    console.log("Invite successfully send to selected host");
  } else {
    throw new Error("Fail to send invite to selected host");
  }
});

Then(/^The Selected admin or attendee should be removed from stage$/, () => {
  browser.pause(2000);
  if (MeetingRoomPage.goOnStageButtonIsDisplayed() === true) {
    console.log("Admin is successfully leave the stage");

  } else {
    throw new Error("Admin is Failed to leave stage");
  }
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  browser.pause(3000);
  if (MeetingRoomPage.stageEmptyMessageIsDisplayed() === true) {
    console.log("Attendee is successfully removed from stage");

  } else {
    throw new Error("Failed to remove attendee from stage");
  }

});


Then(/^The user should not longer be on stage$/, () => {
  if (MeetingRoomPage.goOnStageButtonIsDisplayed() === true) {
    console.log("leave stage icon is working");
  } else {
    throw new Error("Leave stage icon is not working..user is failed to leave stage");
  }
});


Then(/^Moderator should not longer be on stage$/, () => {
  if (MeetingRoomPage.stageEmptyMessageIsDisplayed() === true) {
    console.log("leave stage icon is working on moderator screen");

  } else {
    throw new Error("Leave stage icon is not working..Moderator is failed to leave stage");
  }
});


Then(/^Attendee should not longer be on stage$/, () => {
  if (MeetingRoomPage.stageEmptyMessageIsDisplayed() === true) {
    console.log("leave stage icon is working on attendee screen");
  } else {
    throw new Error("Leave stage icon is not working..Attendee is failed to leave stage");

  }
});

Then(/^Added poll resources (.*) should displayed within the meeting room$/, (question) => {
  MeetingRoomPage.validateAddedChatResource(question);
});

Then(/^Added handout resources (.*) should displayed within the meeting room$/, (title) => {
  MeetingRoomPage.validateAddedChatResource(title);
});

Then(/^Added featured resources (.*) should displayed within the meeting room$/, (title) => {
  MeetingRoomPage.validateAddedChatResource(title);
});

Then(/^User is able to receive message (.*) sent by other admin$/, (message) => {
  MeetingRoomPage.validateReceivedMessage(message);
});

Then(/^Delete message is not displayed on user's screen$/, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  MeetingRoomPage.validateDeletedMessage();

});

Then(/^Only admin message (.*) displaying on "Admin" chat area other message (.*) is not displaying$/, (adminChatmessage, message1) => {
  MeetingRoomPage.validateMessageInChatWindow(adminChatmessage);
  browser.pause(5000);
  const messageInChatWindow = $(".Linkify");
  messageInChatWindow.waitForDisplayed({ timeout: 10000 });
  var actMessage = messageInChatWindow.getText();
  if (actMessage.includes(message1)) {
    throw new Error("Other messages are also displayed under admin chat area");
  } else {
    console.log("Only admin messages are displayed under admin chat area");
  }
});


Then(/^Result status should display private on attendee's screen$/, () => {
  var actStatus = $(".scroll-container span").getText();
  var expStatus = "Private";
  if (actStatus.includes(expStatus)) {
    console.log("attendees are not able to see the results of polls");
  } else {
    throw new Error("attendees are able to see the results of polls");
  }
});

Then(/^Poll Result should display on attendee's screen$/, () => {
  var actStatus = $(".chat-poll-total").getText();
  var expStatus = "You chose ";
  if (actStatus.includes(expStatus)) {
    console.log("attendees are not able to see the results of polls");
  } else {
    throw new Error("attendees are able to see the results of polls");
  }
});


Then(/^"Stage is full" message (.*) should display$/, (message) => {
  var actMessage = MeetingRoomPage.getMessageText();
  var expMessage = message;
  if (actMessage.includes(expMessage)) {
    console.log("Stage validation message is matched");
  } else {
    throw new Error("Validation message is missmatched actual message>>" + actMessage + "expected message>>" + expMessage);
  }
});

Then(/^Fourth user (.*) is not able to go on stage when stage is full$/, (regEmail) => {
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[0]);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  browser.pause(3000);
  const handle = browser.getWindowHandles();
  browser.switchToWindow(handle[5]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  // super.switchToWindowNewTab();
  browser.pause(1000);
  const elem = $('.white-block-message');

  var rNo = Math.floor(Math.random() * 100);
  var uName = name + rNo;
  //var emailAddress = email + rNo;
  var emailAddress = emailAddress1.replace("@gmail.com", uName + "@gmail.com");
  MeetingRoomPage.fillRegistrationNameField(uName);
  browser.pause(1000);
  MeetingRoomPage.fillRegistrationEmailField(emailAddress);
  browser.pause(1000);
  MeetingRoomPage.clickOnJoinNowButton();
  browser.pause(2000);
  MeetingRoomPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  browser.switchToWindow(handle[1]);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  browser.refresh();
  browser.pause(3000);
  MeetingRoomPage.clickOnJoinRoomBtnUnderJoin();

  MeetingRoomPage.clickOnPeopleButton();
  browser.pause(3000);
  MeetingRoomPage.clickFifthUserMenuButton();
  browser.pause(2000);
  if (MeetingRoomPage.stagefullUnderMenuIsDisplayed() === true) {
    console.log("User is not able to go on stage when stage is full");


  } else {
    throw new Error("User is able to go on stage when stage is full");
  }

});

Then(/^Spotlight mode should be enabled$/, () => {
  if ($(".--hidden.bottom-controls").isDisplayed() === true) {
    console.log("Enable spotlight button is working ");
  } else {
    throw new Error("Enable spotlight button is not working");
  }
});


Then(/^The attendee should not be able to join the room$/, () => {
  if (MeetingRoomPage.waitingScreenIsDisplayed() === true) {
    console.log("Attendee is not able to join the session");

  } else {
    throw new Error("Attendee is able to join the session");

  }
});

Then(/^Add material pop up should display$/, () => {
  const handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  if (EventPage.typeOfMaterialDropDownIsDisplay() === true) {
    console.log("Add material popup is displaying");
  } else {
    throw new Error("Add material option is not working under share material screen");
  }
});


Then(/^User's name and details should be displayed$/, () => {
  if (MeetingRoomPage.userProfileInfoIsDisplayed() === true) {
    console.log("View profile icon is working in meeting room");
  } else {
    throw new Error("View profile icon is not working under new room screen");
  }
});

Then(/^Attendee's details (.*) should be displayed$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail);
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  var actName = $(".header-controls-user-name").getText();
  var actEmail = $(".header-controls-user-email").getText();
  if (actName.includes(name) && actEmail.includes(emailAddress)) {
    console.log("attendee's name and email address matched");
  } else {

    throw new Error("attendee's details missmatched..actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
  }

});


Then(/^Search bar and List of added materials should display$/, () => {
  if (MeetingRoomPage.searchBarIsDisplayed() === true && MeetingRoomPage.materialListIsDisplayed() === true) {
    console.log("Search bar and material lsit are displaying successfully");
  } else {
    throw new Error("Search bar and material list are not displayed");
  }

});


Then(/^User should be able to Search material (.*)$/, (name) => {
  MeetingRoomPage.validateAddedMaterial(name);
});

Then(/^Selected template should displayed on registration screen$/, () => {
  const event = $("(//a[@class='session-block-left event'])[1]");
  event.click();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  const template = $("//div[@class='registration-header-container fill-screen registration-header-accent']");
  if (template.isDisplayed() === true) {
    console.log("Template uploaded successfully");
  } else {
    throw new Error("Template is not uploaded on registration screen");
  }
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
});


Then(/^Uploaded branding image should displayed on registration screen$/, () => {
  browser.refresh();
  browser.pause(3000);
  EventPage.clickOnCustomizeButton();
  var actualSrc = $("//div[@class='registration-header-logo']//img").getAttribute("src");
  browser.back();
  const event = $("(//a[@class='session-block-left event'])[1]");
  event.click();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var expectedSrc = $("//div[@class='registration-header-logo']//img").getAttribute("src");
  expect(actualSrc).toEqual(expectedSrc);
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
});

Then(/^Added subheadline (.*) and video link (.*) and description (.*) should displayed on registration page$/, (subheadline, videoLink, description) => {
  browser.back();
  // EventPage.clickOnSaveAndCloseButton();
  browser.pause(3000);
  if ($("(//a[@class='session-block-left event'])[1]").isDisplayed() === true) {
    $("(//a[@class='session-block-left event'])[1]").click();
  } else {
    console.log("Element not on page")
  }

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actualHeadline = $(".webinar-subtitle").getText();
  var actualDescription = $(".trix-content.webinar-description > div").getText();

  expect(actualHeadline).toEqual(subheadline);
  expect(actualDescription).toEqual(description);

  browser.switchToFrame($("iframe"));
  var actualVideo = $(".yt-uix-sessionlink.ytp-title-link").getAttribute("href");
  if (actualVideo.includes(videoLink)) {
    console.log("Video displaying successfully");
  } else {
    throw new Error("Failed to upload video link actual link >>" + actualVideo + "expected link >>" + videoLink);
  }


  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
});


Then(/^Updated subheadline (.*) and video link (.*) and description (.*) should displayed on registration page$/, (subheadline, videoLink, description) => {

  EventPage.clickOnSaveAndCloseButton();
  browser.pause(3000);
  if ($("(//a[@class='session-block-left event'])[1]").isDisplayed() === true) {
    $("(//a[@class='session-block-left event'])[1]").click();
  } else {
    console.log("Element not on page")
  }

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actualHeadline = $(".webinar-subtitle").getText();
  var actualDescription = $(".trix-content.webinar-description > div").getText();

  expect(actualHeadline).toEqual(subheadline);
  expect(actualDescription).toEqual(description);

  browser.switchToFrame($("iframe"));
  var actualVideo = $(".yt-uix-sessionlink.ytp-title-link").getAttribute("href");
  if (actualVideo.includes(videoLink)) {
    console.log("Video displaying successfully");
  } else {
    throw new Error("Failed to upload video link actual link >>" + actualVideo + "expected link >>" + videoLink);
  }


  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
});


Then(/^Featured presenter (.*) and (.*) and (.*) and (.*) should diaplyed on registration screen$/, (presenterName, presenterTitle, presenterWebsite, presenterBio) => {
  const event = $("(//a[@class='session-block-left event'])[1]");
  event.click();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actualName = $("//div[@class='name']").getText();
  var actualTitle = $("//div[@class='title']").getText();
  var actualBio = $("//div[@class='description']").getText();
  // var actualWebsite = $("//a[@class='website']").getAttribute("href").replace("https://", "");
  expect(actualName).toEqual(presenterName);
  expect(actualTitle).toEqual(presenterTitle);
  expect(actualBio).toEqual(presenterBio);
  // expect(actualWebsite).toEqual(presenterWebsite);
  if ($("//div[@class='presenter-info']//span[@class='avatar']").isDisplayed()===true) {
    console.log("User is able to upload feature presenter image on registration page")
  } else {
    throw new Error("Failed to upload feature action image on registration page");
  }
});



//------------Updated new Room---------------//


Then(/^Slide Material (.*) must be added in event (.*)$/, {}, (name, slide) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnPresentationMaterials();
  EventPage.clickOnAddAMaterialOption();
  EventPage.clickonTypeOfMaterialDropDown();
  EventPage.selectSlidesOption();
  EventPage.addMaterialNameField(name);
  EventPage.uploadSlideFile(slide);
  EventPage.clickOnAddMaterialButton();
  // browser.refresh();
  // browser.pause(1000);
  // $("//div[contains(text(),'Prepare the room in advance.')]").moveTo();
  // browser.pause(20000);
  // browser.refresh();
  // browser.refresh();
  $("//div[@class='row-icon event-material-thumbnail ']//img").waitForDisplayed({ timeout: 120000 });
  EventPage.clickOnDoneButton();
  browser.pause(300);
});



Then(/^video (.*) material (.*) must be added$/, (videoName, video) => {
  
  // EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnPresentationMaterials();
  EventPage.clickOnAddAMaterialOption();
  EventPage.clickonTypeOfMaterialDropDown();
  EventPage.selectVideoOption();
  EventPage.addMaterialNameField(videoName);
  EventPage.uploadVideoFile(video);
  EventPage.clickOnAddMaterialButton();
  browser.pause(5000);
  $("(//div[@class='row-icon event-material-thumbnail '])[1]//img").waitForDisplayed({ timeout: 120000 });
  $("(//div[@class='row-icon event-material-thumbnail '])[2]//img").waitForDisplayed({ timeout: 120000 });
  EventPage.clickOnDoneButton();
  browser.refresh();
  browser.refresh();
  browser.pause(1000);
});



Then(/^New Poll resource (.*) must be added with options (.*) and (.*)$/, {}, (question, option1, option2) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectPollOption();
  EventPage.addQuestionField(question);
  EventPage.addOption1Field(option1);
  EventPage.addOption2Field(option2);
  EventPage.clickOnAddResourceButton();
});


Then(/^Handout material (.*) and (.*) must be added for event$/, {}, (title, image) => {
  // browser.refresh();
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectHandoutOption();
  EventPage.addHandoutTitleData(title);
  EventPage.uploadImageData(image);
  EventPage.clickOnAddResourceButton();

});


Then(/^Featured resource must be created with title (.*) and featureUrl (.*) buttonText (.*) image (.*)$/, {}, (featureTitle, featureUrl, buttonText, image) => {
  // browser.refresh();
  // EventPage.clickOnCustomizeTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectFeaturedActionOption();
  EventPage.addFeaturedTitleField(featureTitle);
  EventPage.addLinkUrlField(featureUrl);
  EventPage.uploadImageData(image);
  EventPage.addButtonTextField(buttonText);
  EventPage.clickOnAddResourceButton();
  // AutomatedPage.validateAddedActionFeature(featureTitle);


});

Then(/^presenter must be added in event admin option with (.*) and (.*)$/, {}, (role1, regEmail1) => {

  browser.refresh();
  EventPage.clickOnGuestTab();
  var data = TestUtils.getEmailForRegistration(regEmail1); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.addNameField(name);
  EventPage.addAdminEmailField(emailAddress);
  EventPage.clickOnSelectRoleGuestDropdown();
  EventPage.selectRoleOption(role1);
  EventPage.clickOnAddAdminButton();
  browser.pause(1000);
});



Then(/^Host must be added in event admin option with (.*) and (.*)$/, (role2, member) => {
  browser.refresh();
  EventPage.clickOnChooseMemberDropDown();
  EventPage.selectMemberFromChooseMemberList(member);
  EventPage.clickOnSelectRoleDropDown();
  EventPage.selectRoleOption(role2);
  EventPage.clickOnAllSessionButton();
  browser.pause(500);
  EventPage.selectInviteAdminCheckBox();
  EventPage.clickOnConfirmButton();
  EventPage.clickOnAddAdminButton();
  browser.pause(3000);
  EventPage.addedAdminIsDisplayedInList();
});

Then(/^Move to guest section$/, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
});

Then(/^Presenter joins the session in second tab$/, () => {
  MeetingRoomPage.clickOnPresenterSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInSecondTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
});


Then(/^User shall see all the attenees and presenter (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail);
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)

  var actName = $(".--label-attendee.title").getText();
  var actEmail = $("div:nth-of-type(3) > .PeopleItem-container > .PeopleItem__content > .email.subtitle").getText();
  if (actName.includes(name) && actEmail.includes(emailAddress)) {
    console.log("attendee's name and email address matched");
  } else {

    throw new Error("attendee's details missmatched..actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
  }


  var actName = $(".--label-presenter.title").getText();
  var actEmail = $("div:nth-of-type(2) > .PeopleItem-container > .PeopleItem__content > .email.subtitle").getText();
  if (actName.includes(name) && actEmail.includes(emailAddress)) {
    console.log("Presenter's name and email address matched");
  } else {

    throw new Error("Presenter's details missmatched..actual name>>" + actName + "expected name>>" + name + "actual email address>>" + actEmail + "expected email>>" + emailAddress);
  }

});


Then(/^Moderator joins the session in second tab$/, () => {
  MeetingRoomPage.clickOnModeratorSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInSecondTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
});

Then(/^Added host joins the session in second tab$/, () => {
  MeetingRoomPage.clickOnHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInSecondTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }
  EventPage.clickOnJoinRoomBtnUnderJoin();
});

Then(/^New Host Must be in Meeting Room$/, () => {
  MeetingRoomPage.clickOnHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInNewTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
});

Then(/^Added Presenter joins the session$/, () => {
  MeetingRoomPage.clickOnPresenterSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInNewTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
});


Then(/^Poll resources (.*) should displayed within the meeting room$/, (question) => {
  MeetingRoomPage.validateAddedPollResource(question);
});

Then(/^Handout resources (.*) should displayed within the meeting room$/, (title) => {
  MeetingRoomPage.validateAddedHandoutResource(title);
});


Then(/^Featured resources (.*) should displayed within the meeting room$/, (title) => {
  MeetingRoomPage.validateAddedFeaturedActionResource(title);
});

Then(/^Shared Handouts should displayed on attendee's screen (.*)$/, {}, (title) => {
  MeetingRoomPage.validateHandoutResourceOnAttendeeScreen(title);

});

Then(/^Added video material (.*) should displayed under share screen$/, {}, (videoName) => {
  browser.pause(2000);
  MeetingRoomPage.validateAddedVideoMaterial(videoName);

});

Then(/^Added slide material (.*) should displayed under share screen$/, {}, (name) => {
  browser.pause(2000);
  MeetingRoomPage.validateAddedSlideMaterial(name);

});


Then(/^Host clicks on stop share slide button$/, {}, () => {
  browser.pause(1000);
  // $("div[class='viewer-area undefined']").scrollIntoView();
  // $("div[class='viewer-area undefined']").click();
  $(".MaterialButton").click();
  browser.pause(300);
  $("(//div[@class='UserMenu'])[4]").waitForDisplayed({ timeout: 10000 });
  $("(//div[@class='UserMenu'])[4]").moveTo();
  $("(//div[@class='UserMenu'])[4]").click();
  $("div[class='menu-item --red']").waitForDisplayed({ timeout: 10000 });
  $("div[class='menu-item --red']").click();



});

Then(/^User clicks on Stop video share button$/, {}, () => {
  try {
    $("(//div[@class='UserMenu-container'])[1]").moveTo();
    $("(//div[@class='UserMenu-container'])[1]").click();
    $("//div[@class='menu-item --red']").waitForDisplayed({ timeout: 10000 });
    $("//div[@class='menu-item --red']").click();
  } catch (error) {

  }

});


Then(/^User should able to Switch from Slides to Video (.*)$/, {}, (videoName) => {
  // MeetingRoomPage.clickOnCloseSettingPopover();
  browser.pause(4000);
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnAddedMaterial(videoName);
  MeetingRoomPage.clickOnYesShareButton();
  MeetingRoomPage.validateSharedVideo();
  browser.pause(3000);

});

Then(/^Admin should be able to add (.*) and share new poll resource within the meeting room$/, {}, (question) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedPollResource(question);
  MeetingRoomPage.clickOnAddedPollResource(question);
  EventPage.clickOnShareNowButton();
  browser.pause(6000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

Then(/^Admin should able to add (.*) and share added handout within the meeting room$/, {}, (title) => {
  MeetingRoomPage.clickOnChatResourceButton();
  MeetingRoomPage.validateAddedHandoutResource(title);
  MeetingRoomPage.clickOnAddedHandoutResource(title);
  EventPage.clickOnShareNowButton();
  browser.pause(6000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});



Then(/^Message (.*) should displayed in the chat section$/, {}, (message) => {
  MeetingRoomPage.validateMessageInChatSection(message);
});

Then(/^Other user is able to receive message (.*) sent by other admin$/, (message) => {
  MeetingRoomPage.validateMessageInChatSection(message);
});

Then(/^On message (.*) Delete icon should diplayed with message$/, {}, (message) => {
  if (MeetingRoomPage.deleteButtonIsDisplayed(message) === true) {
    console.log("Delete message button is displayed successfully");
  } else {
    throw new Error("DELETE MESSAGE BUTTON IS NOT DISPLAYED");
  }
});

Then(/^Deleted message (.*) is not displayed on chat window$/, {}, (message) => {
  MeetingRoomPage.validateDeletedMessageInChatSection(message);
});

Then(/^Message (.*) is not displayed on user's screen$/, {}, (message) => {
  MeetingRoomPage.validateDeletedMessageInChatSection(message);
});
Then(/^Admin message (.*) displaying on "Admin" chat area other message (.*) is not displaying$/, (adminChatmessage, message1) => {
  // MeetingRoomPage.validateMessageInChatWindow(adminChatmessage);
  browser.pause(5000);
  const messageInChatWindow = $("(//span[contains(text(),'" + adminChatmessage + "')])[1]|(//div[contains(text(),'" + adminChatmessage + "')])[1]");
  messageInChatWindow.waitForDisplayed({ timeout: 10000 });

  if (messageInChatWindow.isDisplayed() === true) {
    console.log("Only admin messages are displayed under admin chat area");

  } else {
    throw new Error("Other messages are also displayed under admin chat area");
  }
});

Then(/^Host Join the room and click on people button$/, {}, () => {
  MeetingRoomPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
  browser.pause(5000)
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }

  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  MeetingRoomPage.clickOnPeopleButton();


});


// Then(/^Message (.*) is not displayed on user's screen$/, {}, (message) => {
//   MeetingRoomPage.validateDeletedMessageInChatSection(message);
// });

Then(/^Public poll Result should display on attendee's screen$/, {}, () => {
  browser.pause(3000);
  const result = $("(//div[@class='chat-poll-answer-percent'])[1]");
  if (result.isDisplayed() === true) {
    console.log("Poll result is displayed on attenddee's screen");
  } else {
    throw new Error("Result is not displayed on attendee's screen");
  }

});

Then(/^Added resource should displayed under customize tab (.*)$/, {}, (title) => {
  EventPage.validateAddedResource(title)

});

Then(/^User should able to upload template$/, {}, () => {
  var actClass = $(".registration-header-container").getAttribute("class");
  var expClass = "registration-header-container registration-header-accent registration-header-accent-shift center-header-container";
  if (actClass.includes(expClass)) {
    console.log("template updated successfully");

  } else {
    throw new Error("USER FAILED TO UPDATE TEMPLATE");
  }


});

Then(/^Added Material should displayed under customize tab (.*)$/, {}, (name) => {
  EventPage.validateAddedMaterial(name);


});
Then(/^Log out from account$/, {}, () => {
  // $("//div[@class='user-menu']").click();
  $("//a[@href='/logout']").waitForDisplayed({ timeout: 10000 });
  $("//a[@href='/logout']").click();
  browser.pause(3000);
});

Then(/^User shall see list of Members in the team with their details$/, {}, () => {
  if (TeamPage.listOfMembersIsDisplayed() === true) {
    console.log("List of members displaying")
  } else {
    throw new Error("List of members is not displayig under team screen");
  }
});


Then(/^User shall see "ADD TEAM MEMBER" Button$/, {}, () => {
  if (TeamPage.addTeamMemberButtonIsDisplayed() === true) {
    console.log("Add team member button is displaying")
  } else {
    throw new Error("Add team member button is not displaying");
  }
});

Then(/^User shall see a dropdown along side team member details to Edit or Remove team member$/, {}, () => {
  if (TeamPage.sessionOptionsDropDownIsDisplayed() === true) {
    console.log("Session options dropdown is displaying along side team member details")
  } else {
    throw new Error("Session options dropdown is not displaying along side team member details");
  }
});


Then(/^User shall see "Search" field to search team member$/, {}, () => {
  if (TeamPage.searchFieldIsDisplayed() === true) {
    console.log("Search field is displaying")
  } else {
    throw new Error("Search field is not displaying Under Team settings screen");
  }
});

Then(/^New team Member should be invited and Should display in team member list with details displaying as (.*)$/, {}, (status) => {
  // if (TeamPage.inviteSentValidationMessageIsDisplayed() === true) {
  //   console.log("Invite sent validation message is displaying");
    TeamPage.validateInvitedMemberDetails(status);
  // } else {
  //   throw new Error("Invite sent validation message is not displaying");
  // }

});

Then(/^User shall see "Edit User" and "Remove User" option$/, {}, () => {
  if (TeamPage.editUserOptionIsDisplayed() === true) {
    console.log("Edit user option is displaying");

  } else {
    throw new Error("Edit user option is not displaying");
  }

  if (TeamPage.removeUserOptionIsDisplayed() === true) {
    console.log("Remove user option is displaying");

  } else {
    throw new Error("Remove user option is not displaying");
  }

});


Then(/^User Shall see "Remove User" Confirmation Pop up$/, {}, () => {
  const elem = $("//div[@class='ant-modal-confirm-btns']");
  if (elem.isDisplayed() === true) {
    console.log("Remove user confirmation popup is displaying");
  } else {
    throw new Error("Remove user confirmation popup is not Displaying");
  }

});

Then(/^the team Member should be removed and should not display in team member list$/, {}, () => {
  const elem = $("//div[@class='ant-empty-image']");
  elem.waitForDisplayed({ timeout: 10000 });
  if (elem.isDisplayed() === true) {
    console.log("User removed successfully");
  } else {
    throw new Error("Member still displayed ..Failed to remove user from list");
  }

});


Then(/^User shall see Team Members with credentials (.*) matching the entered input in Search field$/, {}, (email) => {
  browser.pause(3000);
  TeamPage.validateSearchedUserDetail(email);

});


Then(/^User Shall see "Edit Team Member" Pop up$/, {}, () => {
  const editPopup = $("//div[@class='ant-tabs-tab-active ant-tabs-tab']");
  if (editPopup.isDisplayed() === true) {
    console.log("Edit team member popup is displaying");
  } else {
    throw new Error("Edit team member popup is not Displaying");
  }

});

Then(/^"Host Ability" Should be Disabled for the Team Member$/, {}, () => {
  if (TeamPage.validateDisabledHostAbility() === true) {
    console.log("Disable host ability functionality is working ");
  } else {
    throw new Error("Disabled host ablility functionality is not working");
  }

});

Then(/^On team page "Host Ability" Should be enabled for the Team Member$/, {}, () => {
  if (TeamPage.validateEnabledHostAbility() === true) {
    console.log("Enabled host ability functionality is working ");
  } else {
    throw new Error("Enabled host ablility functionality is not working");
  }

});


Then(/^the Host should be Deleted (.*)$/, {}, (member) => {
  const hostName = $("//div[contains(text(),'" + member + "')]");
  if (hostName.isDisplayed() === true) {
    throw new Error("Deleted admin still displayed under admin list")
  } else {
    console.log("Delete admin option is working")
  }

});


Then(/^Remove pre shared material$/, () => {
  try {
    $("//div[@class='slides']//img").moveTo();
    $("//button[@class='slide-control-button stop']").click();
  } catch (error) {

  }
});


Then(/^User shall see "Set As Default" and "Remove Domain" option$/, () => {
  if (BrandingPage.setAsDefaultOptionIsDisplayed() === true) {
    console.log("set as default option si displaying in dropdown list");
  } else {
    throw new Error("SET AS DEFAULT OPTION IS NOT DISPLAYED UNDER DROP DOWN LIST");
  }

  if (BrandingPage.removeDomainOptionIsDisplayed() === true) {
    console.log("Remove domain option is displayed under drop down list")
  } else {
    throw new Error("REMOVE DOMAIN OPTION IS NOT DISPLAYED UNDER DROP DOWN LIST");
  }
});

Then(/^User Shall see "Set As Default" Confirmation Pop up$/, () => {
  if (BrandingPage.confirmationPopupIsDisplayed() === true) {
    console.log("confirmation popup is displayed after clicking on set as default option")

  } else {
    throw new Error("Confirmation popup is not displayed after clicking on set as default option")

  }
});

Then(/^User Shall see "Remove Domain" Confirmation Pop up$/, () => {
  if (BrandingPage.confirmationPopupIsDisplayed() === true) {
    console.log("confirmation popup is displayed after clicking on Remove domain option")

  } else {
    throw new Error("Confirmation popup is not displayed after clicking on Remove domain option")

  }
});


Then(/^User Shall see "NO, NEVER MIND" and "YES,CHANGE" buttons$/, () => {
  if (BrandingPage.noNeverMindButtonIsDisplayed() === true) {
    console.log("No,Never Mind button is displaying in popup")
  } else {
    throw new Error("No,Never mind button is not displayed in popup");
  }

  if (BrandingPage.yesChangeButtonIsDisplayed() === true) {
    console.log("yes,Change button is displayed in popup");
  } else {
    throw new Error("Yes,cange button is not displayed in popup");
  }
});

Then(/^"NO, NEVER MIND" and "YES,CHANGE" buttons should displayed$/, () => {
  if (BrandingPage.noNeverMindButtonIsDisplayed() === true) {
    console.log("No,Never Mind button is displaying in popup")
  } else {
    throw new Error("No,Never mind button is not displayed in popup");
  }

  if (BrandingPage.yesRemoveButtonIsDisplayed() === true) {
    console.log("yes,Remove button is displayed in popup");
  } else {
    throw new Error("Yes,Remove button is not displayed in popup");
  }
});


//--------------Integration cases------------//
Then(/^User should able to add another fields (.*)$/, (field) => {
  EventPage.clickOnAddAnotherField();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.selectFieldFromDropDown(field);
  EventPage.clickOnAddFormFieldButton();

});

Then(/^User select custom field (.*) using label (.*) and (.*) using (.*) and (.*) using (.*) options (.*) and (.*) then add (.*) using (.*) and (.*)$/, (customFieldText, textLabel, customFieldTextArea, textAreaLabel, customFieldDropDown, dropdownLabel, option1, option2, customFieldCheckbox, checboxLabel, text) => {
  EventPage.clickOnAddAnotherField();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.clickOnCreateCustomField();
  EventPage.clickOnSelectFieldTypeButton()
  EventPage.selectEventTypeOption(customFieldText);
  EventPage.addLabelFieldData(textLabel);
  EventPage.clickOnAddFormFieldButton();
  EventPage.clickOnAddAnotherField();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.clickOnCreateCustomField();
  EventPage.clickOnSelectFieldTypeButton()
  EventPage.selectEventTypeOption(customFieldTextArea);
  EventPage.addLabelFieldData(textAreaLabel);
  EventPage.clickOnAddFormFieldButton();
  EventPage.clickOnAddAnotherField();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.clickOnCreateCustomField();
  EventPage.clickOnSelectFieldTypeButton();
  EventPage.selectEventTypeOption(customFieldDropDown);
  EventPage.addLabelFieldData(dropdownLabel);
  EventPage.addDropdownOption(option1);
  $("//label[contains(text(),'Options')]").click();
  EventPage.addDropdownOption(option2);
  EventPage.clickOnAddFormFieldButton();
  EventPage.clickOnAddAnotherField();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.clickOnCreateCustomField();
  EventPage.clickOnSelectFieldTypeButton();
  EventPage.selectEventTypeOption(customFieldCheckbox);
  EventPage.addLabelFieldData(checboxLabel);
  EventPage.addDescriptionField(text);
  EventPage.clickOnAddFormFieldButton();

});


Then(/^User add custom field (.*) using label (.*) using (.*)$/, (customFieldText, textZipLabel, customFieldNumberDropDown) => {
  EventPage.clickOnAddAnotherField();
  EventPage.clickOnSelectFieldDropDown();
  EventPage.clickOnCreateCustomField();
  EventPage.clickOnSelectFieldTypeButton()
  EventPage.selectEventTypeOption(customFieldText);
  EventPage.addLabelFieldData(textZipLabel);
  IntegrationsPage.clickOnValidationDropdown();
  IntegrationsPage.selectDropdownOptions(customFieldNumberDropDown);
  EventPage.clickOnAddFormFieldButton();

});

Then(/^User click on done button$/, () => {
  browser.pause(3000);
  EventPage.clickOnDoneButton();

});
Then(/^Click on register button$/, () => {
  EventPage.clickOnRegistrationButton();
  browser.pause(3000);
  var urlis = browser.getUrl();
  browser.url(urlis + "?skip");
  browser.pause(1000);

});

Then(/^Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(website);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(company);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(text);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(textArea);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(option1);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(zipCode);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(refer);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(facebook);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(twitter);
  IntegrationsPage.verifyAttendeeJoinLinkInLogs(actAttendeeJoinLink);
  IntegrationsPage.verifyMissedJoinLinkInLogs(actMissedJoinLink);
});

Then(/^For Ontraport register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(website);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(company);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(text);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(textArea);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(option1);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(zipCode);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(refer);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(facebook);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(twitter);
  IntegrationsPage.verifyAttendeeJoinLinkInLogs(actAttendeeJoinLink);
  IntegrationsPage.verifyMissedJoinLinkInOntraportLogs(actMissedJoinLink);
});
Then(/^(.*) should displaying under all trigger logs$/, (successTag) => {
  IntegrationsPage.validateSuccessLogUnderAllTriggerLogs(successTag);
});

Then(/^Trigger logs and Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(website);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(company);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(text);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(textArea);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(option1);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(zipCode);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(refer);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(facebook);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(twitter);
  IntegrationsPage.verifyAttendeeEmailInTriggerLogs(actAttendeeEmail);
  IntegrationsPage.verifyMissedEmailInTriggerLogs(actMissedEmail);
});

Then(/^Select no show sub tag (.*)$/, (noShowSubTag) => {
  IntegrationsPage.selectNoShowSubTag(noShowSubTag);
});

Then(/^Select attendee sub tag (.*)$/, (attendeeSubTag) => {
  browser.pause(3000);
  IntegrationsPage.selectAttendeeSubTag(attendeeSubTag);
});

Then(/^For aweber integration Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(website);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(phoneNo);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(company);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(text);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(textArea);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(option1);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(zipCode);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(refer);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(facebook);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(twitter);
  IntegrationsPage.verifyAweberAttendeeJoinLinkInLogs(actAttendeeJoinLink);
  IntegrationsPage.verifyAweberMissedJoinLinkInLogs(actMissedJoinLink);
});

Then(/^Under trigger logs for aweber (.*) should display$/, (successTag) => {
  browser.pause(300);
  IntegrationsPage.validateAweberSuccessLogUnderAllTriggerLogs(successTag);
});


Then(/^For Getresponse integration trigger logs and Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.pause(1000);
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  browser.pause(10000);
  browser.refresh();
  browser.pause(10000);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInGetresponseLogs(twitter);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(actMissedUserName);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(actMissedEmail);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(website);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(phoneNo);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(company);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(text);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(textArea);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(option1);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(zipCode);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(refer);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(facebook);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(twitter);
  IntegrationsPage.verifyGetresponseMissedJoinLinkInLogs(actMissedJoinLink);
  IntegrationsPage.verifyGetresponseAttendeeJoinLinkInLogs(actAttendeeJoinLink);
});

Then(/^Select choose item from attendee dropdown (.*)$/, (firstChooseItemAttendeeOption) => {
  IntegrationsPage.clickOnChooseItemFromListForAttendee();
  IntegrationsPage.selectOptionfromSelectList(firstChooseItemAttendeeOption);
});

Then(/^Select second choose item from attendee dropdown (.*)$/, (firstChooseItemAttendeeOption) => {
  IntegrationsPage.clickOnSecondChooseItemAttendeeDropdown();
  IntegrationsPage.selectOptionfromSelectList(firstChooseItemAttendeeOption);
});

Then(/^For noshow select second choose item from dropdown (.*)$/, (SecondChooseItemNoShowOption) => {
  IntegrationsPage.clickOnChooseItemNoShowSecondDropdown();
  browser.pause(3000);
  const listOption = $("(//option[contains(text(),'" + SecondChooseItemNoShowOption + "')])[2]");
  listOption.waitForDisplayed({ timeout: 10000 });
  listOption.click();
});

Then(/^For noshow Select choose item from dropdown (.*)$/, (firstChooseItemNoShowOption) => {
  browser.pause(3000);
  IntegrationsPage.clickOnChooseItemNoShowDropdown();
  browser.pause(1000);
  const listOption = $("(//option[contains(text(),'" + firstChooseItemNoShowOption + "')])[2]");
  listOption.waitForDisplayed({ timeout: 10000 });
  listOption.click();
});

Then(/^For mailchimp static segment integartion trigger logs and Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInMailchimpStaticSegmentLogs(twitter);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(actMissedUserName);
  IntegrationsPage.verifyMissedFormDetailInGetresponseLogs(actMissedEmail);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(website);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(phoneNo);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(company);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(text);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(textArea);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(option1);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(zipCode);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(refer);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(facebook);
  IntegrationsPage.verifyMissedFormDetailInMailchimpStaticSegmentLogs(twitter);
  IntegrationsPage.verifyMauilchimpStaticSegmentMissedJoinLinkInLogs(actMissedJoinLink);
  IntegrationsPage.verifyMailChimpStaticSegmentAttendeeJoinLinkInLogs(actAttendeeJoinLink);
});

Then(/^For mailchimp static segment noshow select second choose item from dropdown (.*)$/, (firstChooseItemNoShowOption) => {
  browser.pause(3000);
  IntegrationsPage.clickOnChooseItemNoShowSecondDropdown();
  browser.pause(300);
  const listOption = $("(//option[contains(text(),'" + firstChooseItemNoShowOption + "')])[3]");
  listOption.waitForDisplayed({ timeout: 10000 });
  listOption.click();
});

Then(/^For mailchimp Select second choose item from attendee dropdown (.*)$/, (firstChooseItemAttendeeOption) => {
  IntegrationsPage.clickOnSecondChooseItemAttendeeDropdown();
  const listOption = $("(//option[contains(text(),'" + firstChooseItemAttendeeOption + "')])[2]");
  listOption.waitForDisplayed({ timeout: 10000 });
  listOption.click();
});

Then(/^For noshow user select choose item from dropdown (.*)$/, (firstChooseItemNoShowOption) => {
  browser.pause(3000);
  IntegrationsPage.clickOnChooseItemNoShowDropdown();
  browser.pause(1000);
  IntegrationsPage.selectOptionfromSelectList(firstChooseItemNoShowOption);
});

Then(/^(.*) should displaying for drip integration under all trigger logs$/, (successTag) => {
  IntegrationsPage.validateSuccessLogUnderAllTriggerLogs(successTag);
});


Then(/^For drip integartion Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailsInDripLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(website);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(phoneNo);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(company);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(text);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(textArea);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(option1);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(zipCode);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(refer);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(facebook);
  IntegrationsPage.verifyMissedFormDetailInDripLogs(twitter);
  IntegrationsPage.verifyDripAttendeeJoinLinkInLogs(actAttendeeJoinLink);
  IntegrationsPage.verifyDripMissedJoinLinkInLogs(actMissedJoinLink);
});
Then(/^For drip integration success (.*) should display under all trigger logs$/, (successTag) => {
  IntegrationsPage.validateSuccessLogsForDripStartWorkflow(successTag);
});

Then(/^For marketo integration user details and Join link should display under trigger logs$/, () => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText().trim();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText().trim();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyAttendeeJoinLinkInMarketoLogs(actAttendeeJoinLink);
  IntegrationsPage.verifyMissedJoinLinkInMarketoLogs(actMissedJoinLink);
});
Then(/^Under marketo trigger logs (.*) displaying under all trigger logs$/, (successTag) => {
  IntegrationsPage.validateSuccessLogUnderAllMarketoTriggerLogs(successTag);
});

Then(/^For convertkit integration Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  var actAttendeeJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[2]").click();
  var actMissedJoinLink = $("(//input[@class='ant-input ant-input-lg'])[2]").getAttribute("value");
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(website);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInConvertKitLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(website);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(phoneNo);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(company);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(text);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(textArea);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(option1);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(zipCode);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(refer);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(facebook);
  IntegrationsPage.verifyMissedUserFormDetailInConvertKitLogs(twitter);
  IntegrationsPage.verifyAttendeeJoinLinkInLogs(actAttendeeJoinLink);
  IntegrationsPage.verifyMissedJoinLinkInLogs(actMissedJoinLink);
});

Then(/^For stagging Host clicks on stop share slide button$/, {}, () => {
  $("(//div[@class='UserMenu-dropdown false'])[1]").waitForDisplayed({ timeout: 10000 });
  $("(//div[@class='UserMenu-dropdown false'])[1]").click();
  $("div[class='menu-item --red']").waitForDisplayed({ timeout: 10000 });
  $("div[class='menu-item --red']").click();
});

Then(/^Refresh screen until session get start$/, {}, () => {
  do {
    browser.refresh();
    browser.pause(5000);
  }
  while ($("//span[@class='in-progress-animation session-list']").isDisplayed() === false);
});

Then(/^For automated event Shared video is displayed on attendee's screen$/, {}, () => {
  const sharedVideo = $("//div[@class='AutomatedVideo --fit-width']|//div[@class='AutomatedVideo']");
  sharedVideo.waitForDisplayed({ timeout: 20000 });
  if (sharedVideo.isDisplayed() === true) {
    console.log("Shared video is displayed successfully");
  } else {
    throw new Error("SHARED VIDEO IS NOT DISPLAYED");
  }
});


Then(/^The FeatureAction links should not launch automatically before the set time$/, {}, () => {
  if (AutomatedPage.featureActionButtonInRoom.isDisplayed() === false) {
    console.log("Feature action is not displaying in room before set time")

  } else {
    throw new Error("Featured action is displaying in room before set time")
  }
})



Then(/^The Handout should not launch automatically before the set time$/, {}, () => {
  if (AutomatedPage.handOutDownloadButton.isDisplayed() === false) {
    console.log('Handout is not displaying in room before set time');
  } else {
    throw new Error('Handout is displaying in room before set time')
  }
});

Then(/^The Poll should not launch automatically before the set time$/, {}, () => {
  if (MeetingRoomPage.pollsOption.isDisplayed() === false) {
    console.log('Poll is not displaying in room before set time');
  } else {
    throw new Error('Poll is displaying in room before set time')
  }
});

Then(/^In Automated event added moderator join the session$/, {}, () => {
  AutomatedPage.clickOnModeratorSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  AutomatedPage.openJoinRoomLinkInTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
});


Then(/^For automated event user should able to add featured action title field (.*)$/, {}, (title) => {
  AutomatedPage.fillFeaturedTitleField(title);
});

Then(/^For automated event user should able to add link url (.*) and button text field (.*) and file (.*)$/, {}, (link, buttonText, image) => {
  AutomatedPage.fillLinkUrlField(link);
  AutomatedPage.fillButtonTextField(buttonText);
  EventPage.uploadImageData(image);
});

Then(/^User switch to feature action window (.*)$/, {}, (url) => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[3]);
  // EventPage.validateWindowUrl(url);

});

Then(/^video does not start from begning$/, {}, () => {
  AutomatedPage.validateVideodoesNotStartFromBegning();
});

Then(/^"Regsitration" (.*), "Attended" (.*) and "Missed" (.*) and message count should displayed under tab$/, {}, (regCount, userCount, missedCount) => {
  if (AutomatedPage.getMessagesCount() === "0") {
    throw new Error("Message count is not displaying under past session tab>>" + 0)

  } else {
    console.log("Messages count is displaying under past session tab");
  }
  var actAttendedCount = AutomatedPage.getAttendedCount();
  var actRegistered = AutomatedPage.getRegisteredCount();
  var actMissedCount = AutomatedPage.getMissedCount();
  if (actAttendedCount === userCount && actRegistered === regCount && actMissedCount === missedCount) {
    console.log("all data matched in past sesstion tab")
  } else {
    throw new Error('Reg. Count Is Not Matched: ACTUAL REGISTERED: ' + actRegistered + "  Exp REGISTERED: " + userCount + " ACTUAL ATTENDED: " + actAttendedCount + "  Expt ATTENDED: " + userCount + "Actual MISSSED>>" + actMissedCount + "Expected MISSED>>" + missedCount);
  }
});

Then(/^Number of clicks (.*) should displaying under insights for all resources$/, {}, (userCount) => {
  browser.refresh();
  var actPollResourcesClicks = $("(//div[@class='poll-answer-percent'])[1]//span").getText();
  var actHandoutClick = $("div.resource-container:nth-child(3) span:nth-child(1)").getText();
  var actFeatureActionClicks = $("div.resource-container:nth-child(4) span:nth-child(1)").getText();

  if (actPollResourcesClicks.includes(userCount) && actHandoutClick.includes(userCount) && actFeatureActionClicks.includes(userCount)) {
    console.log("All resource click count matched under insights");

  } else {
    throw new Error("Number of clicks missmatched under insights Number of Poll resource clicks are>>" + actPollResourcesClicks + "Number of handout resource clicks>>" + actHandoutClick + "Number of feature rfesources clicks>>" + actFeatureActionClicks + "EXPECTED NUMBER OF CLICKS SHOULD BE>>" + userCount);
  }

});

Then(/^All (.*) users should displaying under people tab$/, {}, (userCount) => {
  browser.pause(2000);
  var actUserCount = $("//div[@class='PeopleButton__content']//div").getText();
  if (actUserCount.includes(userCount)) {
    console.log("User count displaying correct on people button")

  } else {
    throw new Error("User count missmatched on people button actual count>>" + actUserCount + "expected count>>" + userCount);
  }
});

Then(/^Start and end join time of attendee should displaying under people tab$/, {}, () => {
  var actStartTime = $("tr:nth-child(1) > td.ant-table-row-cell-break-word:nth-child(5)").getText();
  var actEndTime = $("tr:nth-child(1) > td.ant-table-row-cell-break-word:nth-child(6)").getText();

  if (actStartTime.includes("00:") && actEndTime.includes("00:")) {
    console.log("Session join and left time of attendee is displaying under people tab")

  } else {
    throw new Error("Start and end join time of attendee is not displaying under people tab Start join time>>" + actStartTime + "Actual end time>>" + actEndTime);
  }
});

Then(/^For on demand event "Regsitration" (.*), "Attended" (.*) and message count should displayed under tab$/, {}, (regCount, userCount) => {
  browser.pause(5000);
  var actRegCount = AutomatedPage.getMessagesCount();
  if (actRegCount === regCount) {
    console.log("Messages count is displaying under past session tab");

  } else {
    throw new Error("Message count is not displaying under past session tab actual message>>" + AutomatedPage.getMessagesCount() + "Expected message>>" + regCount)

  }
  var actAttendedCount = AutomatedPage.getAttendedCount();
  var actRegistered = AutomatedPage.getRegisteredCount();
  if (actAttendedCount === userCount && actRegistered === regCount) {
    console.log("all data matched in past sesstion tab")
  } else {
    throw new Error('Reg. Count Is Not Matched: ACTUAL REGISTERED: ' + actRegistered + "  Exp REGISTERED: " + userCount + " ACTUAL ATTENDED: " + actAttendedCount + "  Expt ATTENDED: " + userCount);
  }
});

Then(/^For on demand It should displayed correct number of "Regsitration" (.*), "Attended" (.*) on "Insights Page"$/, {}, (regCount, attendedCount) => {
  // browser.refresh();
  browser.pause(4000);
  EventPage.validateInsightsAttendedCount(attendedCount);
});

Then(/^For ondemand Start and end join time of attendee should displaying under people tab$/, {}, () => {
  $("div.ant-table-wrapper.people-table >div tr > td:nth-child(4)").waitForDisplayed({ timeout: 10000 });
  var actStartTime = $("div.ant-table-wrapper.people-table >div tr > td:nth-child(4)").getText();
  var actEndTime = $("div.ant-table-wrapper.people-table >div tr > td:nth-child(5)").getText();

  if (actStartTime.includes("00:") && actEndTime.includes("00:")) {
    console.log("Session join and left time of attendee is displaying under people tab")

  } else {
    throw new Error("Start and end join time of attendee is not displaying under people tab Start join time>>" + actStartTime + "Actual end time>>" + actEndTime);
  }
});

Then(/^Attendees Graph should be loaded correctly on "Insights Page"$/, {}, () => {
  browser.refresh();
  if (EventPage.attendanceGraphIsDisplay() === true) {
    console.log("Attendance graph is displayed in insights page");
  } else {
    throw new Error("Attendance graph focus is not displayed in insights page");
  }
});

Then(/^Session resume if user (.*) left for few seconds and rejoin again$/, {}, (regEmail) => {
  AutomatedPage.validateSessionResumeForUser(regEmail);
});


Then(/^For Salesforce Trigger logs and Register and missed attendee details website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*) should display under logs$/, (website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  const firstUserName = $("(//div[@class='people-profile-name'])[2]");
  const secondUserName = $("(//div[@class='people-profile-name'])[1]");
  var actAttendeeUserName = firstUserName.getText();
  var actAttendeeEmail = $("(//div[@class='people-profile-email'])[2]").getText();
  var actMissedUserName = secondUserName.getText();
  var actMissedEmail = $("(//div[@class='people-profile-email'])[1]").getText();
  browser.refresh();
  $("(//span[@class='session-selector-type past'])[3]").click();
  browser.pause(500);
  browser.refresh();
  EventPage.clickOnSummaryTab();
  IntegrationsPage.clickOnRegistrationIntegrationLogButton();
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeUserName);
  IntegrationsPage.verifyAttendeeNameOrEmailInLogs(actAttendeeEmail);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(website);
  IntegrationsPage.verifyAttendeePhoneDetailInLogs(phoneNo);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(company);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(text);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(textArea);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(option1);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(zipCode);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(refer);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(facebook);
  IntegrationsPage.verifyAttendeeFormDetailInLogs(twitter);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedUserName);
  IntegrationsPage.verifyMissedUserNameOrEmailInLogs(actMissedEmail);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(website);
  IntegrationsPage.verifyMissedUserPhoneDetailInLogs(phoneNo);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(company);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(text);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(textArea);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(option1);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(zipCode);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(refer);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(facebook);
  IntegrationsPage.verifyMissedUserFormDetailInLogs(twitter);
  IntegrationsPage.verifyAttendeeEmailInTriggerLogs(actAttendeeEmail);
  IntegrationsPage.verifyMissedEmailInTriggerLogs(actMissedEmail);
});

Then(/^Correct session count (.*) should display on under dropdown list$/, {}, (sessonCount) => {
  EventPage.validateSessionCountUnderRegPageDropdown(sessonCount);
});

Then(/^validation message (.*) should displaying for both added fields$/, {}, (validationMessage) => {
  EventPage.validateSecondFieldValidation(validationMessage);
  EventPage.validateFirstFieldValidation(validationMessage);
});

Then(/^Click on selected make required field checkbox$/, {}, () => {
  EventPage.clickOnSeslectedMakeRequiredFieldCheckbox();

});

Then(/^Register user should redirect on added url (.*)$/, {}, (url) => {
  EventPage.validateWindowUrl(url);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  browser.pause(2000);
});

Then(/^User click on "Blackout every Sunday" checkbox$/, {}, () => {
  EventPage.clickOnBlackouteverySundayCheckbox();
});
Then(/^Click on "Confirm" button$/, {}, () => {
  EventPage.clickOnConfirmBlackoutDateButton();
  browser.pause(5000)
});

Then(/^validation (.*) should displayed$/, {}, (message) => {
  var actualMessage = $("//div[@class='ant-notification-notice-message']").getText();
  expect(actualMessage).toEqual(message);
})

Then(/^Uploaded background image and selected opcity is displaying on registration page after click on save and close button$/, {}, () => {
  browser.pause(5000);
  var actOpcity = $("//div[@class='registration-header-mask']").getAttribute("style");
  var actImage = $("//div[@class='registration-header-background']").getAttribute("style");
  EventPage.clickOnSaveAndCloseButton();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(2000);
  var expOpcity = $("//div[@class='registration-header-mask']").getAttribute("style");
  var expImage = $("//div[@class='registration-header-background']").getAttribute("style");
  expect(actOpcity).toEqual(expOpcity);
  expect(actImage).toEqual(expImage);

})

Then(/^Series session should displaying with time (.*)$/, {}, (futureTime) => {
  expect(SeriesPage.validateCreatedSeriesEventBox()).toEqual(true);
  expect(SeriesPage.validateSessionTime(futureTime)).toEqual(true);

})


Then(/^For series event Correct session count (.*) should display on under dropdown list$/, {}, (sessonCount) => {
  browser.pause(2000);
  SeriesPage.validateSessionCountUnderRegPageDropdown(sessonCount);
  browser.refresh();
});

Then(/^Referral url is dipslaying as (.*)$/, {}, (url) => {
  var actUrl = $("(//td[@class='ant-table-row-cell-break-word'])[15]//div").getText();
  if (actUrl.includes(url)) {
    console.log("Correct referral url displaying on screen");
  } else {

    throw new Error("Referral url matched under people tab actual url>>" + actUrl + "expected url>>" + url);
  }
});

Then(/^Location (.*) utm term (.*) utm source (.*) utm medium (.*) utm content (.*) should display on the screen$/, {}, (location, utmTerm, utmSource, utmMedium, utmContent) => {
  EventPage.verifyLocationUnderPeopleTab(location);
  EventPage.verifyUtmSourceUnderPeopleTab(utmSource);
  EventPage.verifyUtmMediumUnderPeopleTab(utmMedium);
  EventPage.verifyUtmTermUnderPeopleTab(utmTerm);
  EventPage.verifyUtmContentUnderPeopleTab(utmContent);
});

Then(/^Event is not ready screen is displaying on screen$/, {}, () => {
  if (EventPage.eventIsNotReadyMessageIsDisplayed() === true) {
    console.log("event is not ready screen is displaying on screen")

  } else {
    throw new Error("Event is not ready screen is not displaying on screen")
  }
});

Then(/^Get Embed Code and paste under (.*) in new tab$/, {}, (url) => {
  const actualUrl = $("(//textarea[@class='ant-input share-embed-code'])[1]").getText();
  HomePage.openUrlInNewTabS(url);
  HomePage.switchToWindowNewTab();
  browser.pause(8000);
  $("//textarea[@id='textareaCode']").click();
  browser.keys(['Control', 'a']);
  browser.keys(['Delete']);
});

Then(/^On scheduled event time tag is displaying as (.*)$/, {}, (timeTag) => {
  var actualTime = $("td.ant-table-row-cell-break-word:nth-child(1) > span:nth-child(1)>span:nth-child(1)").getText();
  if (actualTime.includes(timeTag)) {
    console.log("Time is successfully updated");

  } else {
    throw new Error("Failed to update time zone actual time zone>>" + actualTime + "Expected time zone tag>>" + timeTag);
  }
});

Then(/^On registration page email label is displaying as (.*)$/, {}, (emailLabel) => {
  var actuallaber = $("//input[@name='email']").getAttribute("placeholder");
  if (actuallaber.includes(emailLabel)) {
    console.log("Language is successfully updated");

  } else {
    throw new Error("Failed to update language actual emailLabel>>" + actuallaber + "Expected label>>" + emailLabel);
  }
});

Then(/^Verify that selected colour is displaying on registration page$/, {}, () => {
  const registrationButton = $("//form[@class='demio-embed-form demio-embed-form-responsive']//button");
  var actColour = registrationButton.getAttribute("style");
  EventPage.clickOnSaveAndCloseButton();
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  registrationButton.waitForDisplayed({ timeout: 10000 });
  console.log("actual attribute>>" + actColour + "expected attribute>>" + expColour);
  var expColour = registrationButton.getAttribute("style");
  if (actColour.includes(expColour)) {
    console.log("branding colour is matched on registration page");

  } else {
    throw new Error("Branding colour missmateched on registration page actual colour style>>" + actColour + "Expected colour>>" + expColour);
  }
});
Then(/^User is able to register and displaying register count under summary tab$/, {}, () => {
  var getRegisteredCount = $("//button[@class='session-table-stat registered']").getText();
  if (getRegisteredCount === "1") {
    console.log("Registration count is displaying under summary tab");

  } else {
    throw new Error("Registration count is not displaying under summary tab>>" + 0);
  }
});

Then(/^Correct user info (.*) is displaying under people tab$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  browser.pause(300);
  EventPage.validateUserInfoOnActivityPage(name, emailAddress)
});
Then(/^Selected recuring option (.*) should display under dropdown list$/, {}, (option) => {
  browser.pause(3000);
  const recurringOption = $("//div[contains(text(),'" + option + "')]");
  if (recurringOption.isDisplayed() === true) {
    console.log("recurring option is  displaying under dropdown");

  } else {
    throw new Error("Recurring option missmatched under dropdown list");
  }
  browser.refresh();
});

Then(/^For automated event User should able to schedule more than one session with time (.*)$/, {}, (secondSesssionTime) => {
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectFutureTime(secondSesssionTime);
  EventPage.clickAddToEventScheduleButton();
  browser.pause(5000);
  EventPage.validateManageEventScreen();
  if (AutomatedPage.secondSessionUnderUpcomingSessTab() === true) {
    console.log("Second session is added under upcoming session tab");
  } else {
    throw new Error("USER IS FAILED TO ADD MORE THAN ONE SESSION");
  }

});

Then(/^Session title (.*) should displaying for on demand session on screen$/, {}, (sessionTitle) => {
  AutomatedPage.onDemandSessionTitleUnderDropdown(sessionTitle);
  AutomatedPage.selectOnDemandSessionFromRegDropdown(sessionTitle);
});

Then(/^User should able to download all resource export CSV buttons$/, {}, () => {
  EventPage.clickOnExportCsvFirstResourceButton();
  EventPage.clickOnEsvButtonForSecondResource();
  EventPage.clickOnEsvButtonForThirdResource();
});

Then(/^Move to moderator window$/, {}, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  browser.pause(1000);

});

Then(/^"Save and show code" button should display on screen$/, {}, () => {
  if (StandardPage.saveAndShowCodeButtonIsDispalyed() === true) {
    console.log("Save and show code button is displaying on screen");
  } else {
    throw new Error("Save and show code button is not displaying on screen")
  }

});
Then(/^Added role (.*) should dipslayed under event admin tab$/, {}, (role1) => {
  EventPage.validateAddedRole(role1);
});

Then(/^Selected any option from "Inline Embed Style" dropdown should displayed (.*)$/, {}, (option) => {
  EventPage.validateSelectedInlineEmbedStyle(option);
});

Then(/^Changed the Form width (.*) should displaying on screen$/, {}, (formWidth) => {
  EventPage.validateUpdatedFormWidth(formWidth);
});

Then(/^Check the Updated color of the button from the Button color option (.*)$/, {}, (colorCode) => {
  EventPage.validateUpdatedButtonColorUnderInlineEmbed(colorCode);
});
Then(/^For duplicate event User shall see the changes image,title (.*) and Description (.*) at open graph pop up screen$/, {}, (title, description) => {
  if ($(".open-graph-preview > img").isDisplayed() === true) {
    console.log("Image is displaying successfully");
  } else {
    throw new Error("Failed to display image under edit settings screen")
  }
  EventPage.validateUpdatedTitle(title);
  EventPage.validateUpdatedDescription(description);
  browser.pause(3000);
  const closeButton = $("(//button[@aria-label='Close'])");
  closeButton.waitForDisplayed({ timeout: 30000 });
  closeButton.click();
});

Then(/^Template (.*) should be selected in event$/, {}, (option) => {
  EventPage.validateSelectedTemplateOption(option);
});

Then(/^Selected timezone (.*) should displaying under tab$/, {}, (timeZone) => {
  EventPage.validateSelectedTimezoneOption(timeZone);
});

Then(/^Selected language (.*) should displayed under tab$/, {}, (language) => {
  EventPage.validateSelectedLanguageOption(language);
});

Then(/^Add custom URL (.*) should displaying on screen$/, {}, (url) => {
  EventPage.validateCustomUrlFieldData(url);
});


Then(/^Selected any option from "Popover Embed Style" dropdown displaying on screen (.*)$/, {}, (option) => {
  EventPage.validateSelectedPopoverEmbedStyle(option);
});

Then(/^Updated button width (.*) should displaying on screen$/, {}, (buttonWidth) => {
  EventPage.validateUpdatedButtonWidth(buttonWidth);
});

Then(/^For popover embid Updated color of the button from the Button color option (.*)$/, {}, (color) => {
  EventPage.updatedPopoverButtonColor(color);
});

Then(/^User should able to see updated "Reply follow up" option (.*)$/, {}, (replyOption) => {
  EventPage.validateReplyFollowUpOption(replyOption);
});

Then(/^Upcoming sessions getting cancelled$/, {}, () => {
  if (EventPage.eventUnderUpcomingSessionTab() === true) {
    throw new Error("ARCHIVE EVENT OPTION IS NOT WORKING BECAUSE UPCOMMING SESSION STILL DISPLAYING");

  } else {
    console.log("Event successfully cancelled on archiving");
  }
});

Then(/^User info (.*) is displaying under message tab$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.validateUserInfoOnMessageScreen(name, emailAddress);
});

Then(/^Message (.*) should displaying under message tab$/, {}, (message) => {
  EventPage.validateMessageUnderMessageTab(message);
});

Then(/^All deleted resources should removed from meeting room$/, () => {
  MeetingRoomPage.validateDeletedAllResourcesInRoom();
});

Then(/^Title for material (.*) should displaying on screen$/, (title) => {
  browser.pause(2000);
  MeetingRoomPage.validateEmptyMaterialTitle(title);
});

Then(/^Selected chat option should displaying as (.*)$/, (option) => {
  browser.pause(1000);
  MeetingRoomPage.validateSelectedChatOptionInRoom(option);
});

Then(/^User click on "confirm" button$/, {}, () => {
  EventPage.clickOnConfirmButton();
});
Then(/^Guest name (.*) should display on the screen$/, {}, (updatedName) => {
  MeetingRoomPage.verifyGuestNameUnderPeopleScreen(updatedName);
});

Then(/^User refresh the screen$/, {}, () => {
  browser.refresh();
});

Then(/^Delete Moderator and check that copied link is not working and displaying message (.*)$/, {}, (errorMessage) => {
  MeetingRoomPage.clickOnModeratorSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.clickOnModeratorSessionDropDown();
  EventPage.clickOnDeleteAdminOption();
  EventPage.clickOnYesDeleteHostButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var actMessage = $("//h1[@class='headline']").getText();
  if (actMessage.includes(errorMessage)) {
    console.log("Link is not working after delete host")

  } else {
    throw new Error("Moderator deleted but join link is still working actual message>>" + actMessage + "Expected message>>" + errorMessage);
  }
});
Then(/^Delete Presenter and check that copied link is not working and displaying message (.*)$/, {}, (errorMessage) => {
  MeetingRoomPage.clickOnPresenterSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.clickOnPresenterSessionDropDown();
  EventPage.clickOnDeleteAdminOption();
  EventPage.clickOnYesDeleteHostButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(2000);
  var actMessage = $("//h1[@class='headline']").getText();
  if (actMessage.includes(errorMessage)) {
    console.log("Link is not working after delete host")

  } else {
    throw new Error("Presenter deleted but join link is still working actual message>>" + actMessage + "Expected message>>" + errorMessage);
  }
});

Then(/^Delete Host and check that copied link is not working and displaying message (.*)$/, {}, (errorMessage) => {
  MeetingRoomPage.clickOnHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.clickOnHostSessionDropDown();
  EventPage.clickOnDeleteAdminOption();
  EventPage.clickOnYesDeleteHostButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var actMessage = $("//h1[@class='headline']").getText();
  if (actMessage.includes(errorMessage)) {
    console.log("Link is not working after delete host")

  } else {
    throw new Error("Host deleted but join link is still working actual message>>" + actMessage + "Expected message>>" + errorMessage);
  }
});

Then(/^Event name (.*) and time should displayed on popup$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(600);
  const eventName = data[0];
  EventPage.validateEventNameOnPopup(eventName);
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[0]);
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  browser.switchToWindow(handle[1]);
  browser.pause(500);
  var handle1 = browser.getWindowHandles();
  browser.switchToWindow(handle1[2]);
  browser.pause(200);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(200);
  var actualDateAndTime = $("//div[@class='webinar-date text-capitalized']").getText().replace("2022 ", "");
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  EventPage.switchToWindowNewTab();
  var expectedDateAndTime = $("//div[@class='header-controls-modal-time']//span").getText();
  if (actualDateAndTime.includes(expectedDateAndTime)) {
    console.log("date and time matched on start/end session popup");

  } else {
    throw new Error("Date and time missmatched on start/end session popup actual details>>" + actualDateAndTime + "Expected details>>" + expectedDateAndTime);
  }
});

Then(/^Check that stage size and room size are displayed fine on Start Session card and get updated when changed from “Manage Account” (.*)$/, {}, (account) => {
  var actStageSize = $("//span[@class='header-controls-modal-menu']//span//strong").getText();
  var actRoomSize = $("(//div[@class='header-controls-modal-stat'])[2]//span//strong").getText();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[0]);
  HomePage.clickOnUserMenuButton();
  browser.pause(2000);
  HomePage.clickOnManageAccountsOption();
  HomePage.searchAccountNameInManageAccountsScreen(account);
  var expStageSize = $("(//table[@class='table table-condensed table-stripped table-bordered'])[3]//tr[11]//td[2]").getText();
  var expRoomSize = $("((//table[@class='table table-condensed table-stripped table-bordered'])[4]//td[2])[1]//input").getAttribute("value");
  if (expStageSize.includes(actRoomSize)) {
    console.log("Stage size is displaying correct on popup screen");
  } else {
    throw new Error("Stage size missmatched on start event popup actual size>>" + actStageSize + "Expected stage size>>" + expStageSize);
  }

  if (actRoomSize.includes(expRoomSize)) {
    console.log("Correct room size is displaying on start session popup")

  } else {
    throw new Error("Room size missmatched on start session popup actual size>>" + actRoomSize + "Expected room size>>" + expRoomSize);
  }

});

Then(/^Check that stage size (.*) and room size (.*) get updated when changed from “Manage Account”$/, {}, (stageSize, roomSize) => {
  EventPage.updateAttendeesOnManageAccountScreen(roomSize);
  EventPage.updateStageLimitOnManageAccountScreen(stageSize);
  const submitManageAccountsButton = $("//button[contains(text(),' Submit')]");
  submitManageAccountsButton.click();
  browser.pause(3000);
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  browser.refresh();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  browser.pause(3000);
  var actStageSize = $("//span[@class='header-controls-modal-menu']//span//strong").getText();
  var actRoomSize = $("(//div[@class='header-controls-modal-stat'])[2]//span//strong").getText();
  if (actStageSize.includes(stageSize)) {
    console.log("Updated stage size matched on popup");

  } else {
    throw new Error("Failed to update stage size actual stage size>>" + actStageSize + "Expected stage size>>" + stageSize);
  }
  if (actRoomSize.includes(roomSize)) {
    console.log("Successfully updated room size in start session popup");

  } else {
    throw new Error("Failed to update room size on start session popup actual room size>>" + actRoomSize + "Expected room size>>" + roomSize);
  }
});

Then(/^Validate all resource clicks count (.*) on admin screen$/, {}, (clickCount) => {
  browser.pause(2000);
  MeetingRoomPage.validateHandoutResult(clickCount);
  MeetingRoomPage.validateFeatureActionsResult(clickCount);
  MeetingRoomPage.validatePollResult(clickCount);

});

Then(/^Message count should displaying under summary tab (.*)$/, {}, (count) => {
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 600000 });
  // MeetingRoomPage.validateSummaryMessageCount(count);

});

Then(/^Added host (.*) shold displaying in created session$/, {}, (host) => {
  EventPage.validateAddedHost(host);

});

Then(/^Updated session time (.*) should display on screen$/, {}, (updatedTime) => {
  EventPage.validateTimeOfSession(updatedTime);

});


Then(/^User schedule more than one session on same time with (.*)$/, {}, (secondSesssionTime) => {
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectFutureTime(secondSesssionTime);
  EventPage.clickAddToEventScheduleButton();

});

Then(/^User able to schedule more than one session with next day time (.*)$/, {}, (secondSesssionTime) => {
  browser.pause(1000);
  EventPage.clickOnScheduleSessionButton();
  browser.pause(1000);
  EventPage.selectNextDay();
  EventPage.selectFutureTime(secondSesssionTime);
  EventPage.clickAddToEventScheduleButton();
  browser.pause(1000);
  EventPage.validateManageEventScreen();
  if (EventPage.secondSessionUnderUpcomingSessTab() === true) {
    console.log("Second session is added under upcoming session tab");
  } else {
    throw new Error("USER IS FAILED TO ADD MORE THAN ONE SESSION");
  }

});

Then(/^User uncheck all session checkbox and select second session checkbox$/, {}, () => {
  EventPage.hostSelectSecondSesseionCheckbox();

});
Then(/^Verify that added host is able to join selected session through join link$/, {}, () => {
  var actSession = $("(//label[@class='ant-checkbox-group-item ant-checkbox-wrapper ant-checkbox-wrapper-checked']//span)[3]").getText();
  EventPage.clickOnConfirmButton();
  EventPage.clickOnGuestTab();
  // MeetingRoomPage.clickOnHostSessionDropDown();
  const hostSessionDropdown = $("(//div[@class='admin-action'])[4]//button");
  hostSessionDropdown.click();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }
  EventPage.clickOnJoinRoomBtnUnderJoin();
  $("//div[@class='waiting-screen-webinar-date']").waitForDisplayed({ timeout: 10000 });
  var expSession = $("//div[@class='waiting-screen-webinar-date']").getText();
  var today = new Date();
  var day = today.getMonth();
  var daylist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log("Today is : " + daylist[day]);
  if (expSession.includes(daylist[day])) {
    throw new Error("Host is not able to join selected session actual session is on >>" + daylist[day]) + "Expeced session is on >>" + expSession;


  } else {
    console.log("Host is able to join selected session");

  }

});

Then(/^Download and delete image or media options should displaying on screen$/, {}, () => {
  //  $("//div[@class='file-name']").waitForDisplayed({timeout:20000});
  browser.pause(5000);
  EventPage.downloadImageOrMediaOptionIsDisplayed();
  EventPage.deleteImageOrMediaOptionIsDisplayed();

});
Then(/^On edit screen download and delete image or media options should displaying on screen$/, {}, () => {
  browser.pause(1000);
  EventPage.downloadImageMediaOptionInEditIsDisplayed();
  EventPage.deleteImageOrMediaOptionInEditIsDisplayed();

});

Then(/^No materials title should display on screen$/, {}, () => {
  EventPage.validateNoMaterialsScreen();

});

Then(/^For materials No materials title should display on screen$/, {}, () => {
  EventPage.validateNoMaterialsScreenForMaterials();

});

Then(/^For series Event name (.*) and time should displayed on popup$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(600);
  const eventName = data[0];
  EventPage.validateEventNameOnPopup(eventName);
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[0]);
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  browser.switchToWindow(handle[1]);
  browser.pause(500);
  var handle1 = browser.getWindowHandles();
  browser.switchToWindow(handle1[2]);
  browser.pause(200);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(200);
  var actualDateAndTime = $("//div[@class='webinar-date text-capitalized']").getText().replace("2022 ", "");
  var expectedDateAndTime = $("//div[@class='header-controls-modal-time']//span").getText();
  if (actualDateAndTime.includes(expectedDateAndTime)) {
    console.log("date and time matched on start/end session popup");

  } else {
    throw new Error("Date and time missmatched on start/end session popup actual details>>" + actualDateAndTime + "Expected details>>" + expectedDateAndTime);
  }
});

Then(/^User select past session option on activity tab$/, {}, () => {
  EventPage.clickOnSessionDropdownOnActivity();
  EventPage.clickOnPastSessionsOnActivity();
  try {
    $("(//div[@class='session-selector-option false'])[1]").click();
  } catch (error) {
    
  }
 

});

Then(/^GDPR default field should displaying on edit form fields screen$/, {}, () => {
  if (generalPage.defaultGDPROnEditFormFieldIsDisplayed() === true) {
    console.log("Active GDPR option is working fine");

  } else {
    throw new Error("active GDPR option is not working under general tab")
  }
});

Then(/^default GDPR field should not displaying on edit form fields screen$/, {}, () => {
  if (generalPage.defaultGDPROnEditFormFieldIsDisplayed() === true) {
    throw new Error("disabled GDPR option is not working under general tab")

  } else {
    console.log("disabled GDPR option is working fine");
  }
});

Then(/^User should ble to update company name (.*)$/, {}, (name) => {
  generalPage.validateUpdatedCompanyName(name);
});

Then(/^Under settings user should be able to select the "Event Timezone" (.*) from the dropdown$/, {}, (timeZone) => {
  generalPage.selectTimeZone(timeZone);
});

Then(/^Under settings user should be able to select the "Event Language" (.*) from the dropdown$/, {}, (language) => {
  generalPage.selectEventLanguage(language);
});

Then(/^Delete company logo if already added$/, {}, () => {
  try {
    brandingPage.deleteCompanyLogo();
  } catch (error) {

  }
});

Then(/^User delete company icon if already added$/, {}, () => {
  try {
    brandingPage.deleteCompanyIcon();
  } catch (error) {

  }
});

Then(/^User Should be able to upload icon (.*) by clicking on "Upload icon" option$/, {}, (logo) => {
  browser.refresh();
  browser.pause(5000);
  BrandingPage.uploadLogo(logo);
  BrandingPage.clickOnCropButton();
  browser.pause(2000);
});

Then(/^User should redirect on (.*) screen$/, {}, (title) => {
  BrandingPage.verifyNewCustomDomainTitle(title);
});

Then(/^verify that user is able to add new domain (.*)$/, {}, (domain) => {
  BrandingPage.verifyAddedDomain(domain);
});

Then(/^User should able to remove added custom domain$/, {}, () => {
  browser.pause(1000);
  if ($("(//div[@class='domain-name'])[2]").isDisplayed() === true) {
    throw new Error("Failed to remove domain");

  } else {
    console.log("Domain removed successfully")
  }
});


Then(/^User click on gdpr checkbox on registration screen$/, {}, () => {
  EventPage.clickOnGdprCheckboxOnRegScreen();

});

Then(/^"Billing address" section is displaying on screen$/, {}, () => {
  BillingPage.verifyBillingAddressSection();

});

Then(/^User is able to save updated billing address information (.*) and (.*)$/, {}, (countryName, state) => {
  var actBillingName = billingPage.billingNameField.getAttribute("value");
  var actAddressLine1 = billingPage.addressLineOneField.getAttribute("value");
  var actAddressLine2 = billingPage.addressLineTwoField.getAttribute("value");
  var actCity = billingPage.cityField.getAttribute("value");
  var actPostalCode = billingPage.postalCodeField.getAttribute("value");
  billingPage.clickOnSaveAddressButton();
  browser.pause(5000);
  var expBillingName = $("(//div[@class='invoice-billing-address-line'])[1]").getText();
  var expAddressLine1 = $("(//div[@class='invoice-billing-address-line'])[2]").getText();
  var expAddressLine2 = $("(//div[@class='invoice-billing-address-line'])[3]").getText();
  var expCity = $("(//div[@class='invoice-billing-address-line'])[4]").getText().replace(",", "");
  var expPostalCode = $("(//div[@class='invoice-billing-address-line'])[4]").getText();
  var expState = $("(//div[@class='invoice-billing-address-line'])[4]").getText();
  var expCountry = $("(//div[@class='invoice-billing-address-line'])[5]").getText();

  if (actBillingName.includes(expBillingName)) {
    console.log("Billing name matched");
  } else {
    throw new Error("Billing name mismatched actual name>>" + actBillingName + "Expected billing name>>" + expBillingName);
  }

  if (actAddressLine1.includes(expAddressLine1)) {
    console.log("Billing address one matched");
  } else {
    throw new Error("Billing address one mismatched actual name>>" + actAddressLine1 + "Expected billing address>>" + expAddressLine1);
  }

  if (actAddressLine1.includes(expAddressLine1)) {
    console.log("Billing address one matched");
  } else {
    throw new Error("Billing address one mismatched actual name>>" + actAddressLine1 + "Expected billing address>>" + expAddressLine1);
  }

  if (actAddressLine2.includes(expAddressLine2)) {
    console.log("Billing address two matched");
  } else {
    throw new Error("Billing address two mismatched actual name>>" + actAddressLine2 + "Expected billing address>>" + expAddressLine2);
  }

  if (expCity.includes(actCity)) {
    console.log("Billing city matched");
  } else {
    throw new Error("Billing city mismatched actual city>>" + actCity + "Expected city>>" + expCity);
  }

  if (expPostalCode.includes(actPostalCode)) {
    console.log("Billing postal code matched");
  } else {
    throw new Error("Billing postal code mismatched actual name>>" + actPostalCode + "Expected billing postal code>>" + expPostalCode);
  }

  if (expCity.includes(actCity)) {
    console.log("Billing city matched");
  } else {
    throw new Error("Billing city mismatched actual name>>" + actPostalCode + "Expected billing city>>" + expPostalCode);
  }

  if (expState.includes(state)) {
    console.log("Billing state matched");
  } else {
    throw new Error("Billing state mismatched actual name>>" + state + "Expected billing state>>" + expState);
  }

  if (expCountry.includes(countryName)) {
    console.log("Billing country matched");
  } else {
    throw new Error("Billing country mismatched actual name>>" + countryName + "Expected billing country>>" + expCountry);
  }
});

Then(/^"Join room" button should displaying active$/, {}, () => {
  browser.pause(5000);
  if (EventPage.joinRoomButton.getAttribute("class").includes("ant-btn Button animated fadeIn ant-btn-primary")) {
    console.log("Join room button is displaying active for this event");
  } else {
    throw new Error("No event is running but still join room button is displaying disabled");
  }

});


Then(/^Using join link Host Join the room and click on people button$/, {}, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
  browser.pause(1000);
  MeetingRoomPage.clickOnAdminHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  // EventPage.switchToWindowNewTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
  browser.pause(5000)
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }

  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  MeetingRoomPage.clickOnPeopleButton();


});

Then(/^Verify that "Join room" button should displaying disabled after start the session$/, {}, () => {
  browser.refresh();
  browser.refresh();
  browser.pause(1000);
  if (EventPage.joinRoomButton.getAttribute("class").includes("ant-btn Button animated fadeIn --disabled ant-btn-primary")) {
    console.log("Join room button is displaying disabled for this event");
  } else {
    throw new Error("Join room button still displaying active after start the session");
  }

});


Then(/^From link admin starts the session and share added resource$/, {}, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
  browser.pause(1000);
  MeetingRoomPage.clickOnHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(8000);
  MeetingRoomPage.clickOnOpenChatButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(8000);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(4000);
  EventPage.clickOnChatResourceButton();
  EventPage.clickOnAddedChatResource();
  EventPage.clickOnShareNowButton();
  browser.pause(30000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.clickOnSummaryTab();

});

Then(/^For dev server chat Panel should minimized (.*)$/, {}, (minimizedPanelClass) => {
  MeetingRoomPage.validateMinimizedChatPanelForStaging(minimizedPanelClass);

});

Then(/^For dev server message (.*) should displaying under message tab$/, {}, (message) => {
  EventPage.validateMessageUnderMessageTabForStaging(message);
});

Then(/^User schedule more than one session with start time (.*)$/, {}, (secondSesssionTime) => {
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectSecondStartSessionTime(secondSesssionTime);
  EventPage.selectEndSessionTime();
  EventPage.clickAddToEventScheduleButton();
  browser.pause(1000);
  EventPage.validateManageEventScreen();
  if (EventPage.secondSessionUnderUpcomingSessTab() === true) {
    console.log("Second session is added under upcoming session tab");
  } else {
    throw new Error("USER IS FAILED TO ADD MORE THAN ONE SESSION");
  }

});


Then(/^Select start session time (.*) and schedule more than one session$/, {}, (secondSesssionTime) => {
  browser.pause(1000);
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectStartSessionTime(secondSesssionTime);
  EventPage.selectEndSessionTime();
  EventPage.clickAddToEventScheduleButton();

});

Then(/^With next day time (.*) user is able to schedule more than one session$/, {}, (secondSesssionTime) => {
  browser.pause(1000);
  EventPage.clickOnScheduleSessionButton();
  browser.pause(1000);
  EventPage.selectNextDay();
  browser.pause(1000);
  EventPage.selectStartSessionTime(secondSesssionTime);
  EventPage.selectEndSessionTime();
  EventPage.clickAddToEventScheduleButton();
  browser.pause(3000);
  EventPage.validateManageEventScreen();
  if (EventPage.secondSessionUnderUpcomingSessTab() === true) {
    console.log("Second session is added under upcoming session tab");
  } else {
    throw new Error("USER IS FAILED TO ADD MORE THAN ONE SESSION");
  }

});



Then(/^For third session schedule session with start time (.*)$/, {}, (secondSesssionTime) => {
  EventPage.clickOnScheduleSessionButton();
  EventPage.selectFutureDate();
  EventPage.selectThirdStartSessionTime(secondSesssionTime);
  EventPage.selectEndSessionTime();
  EventPage.clickAddToEventScheduleButton();
  browser.pause(1000);
  EventPage.validateManageEventScreen();
  if (EventPage.secondSessionUnderUpcomingSessTab() === true) {
    console.log("Second session is added under upcoming session tab");
  } else {
    throw new Error("USER IS FAILED TO ADD MORE THAN ONE SESSION");
  }

});



Then(/^User is able to upload profile picture$/, {}, () => {
  ProfilePage.clickOnCropButton();
  browser.pause(6000);
  if ($("//img[@class='Demio-Avatar__image']").isDisplayed() === true) {
    console.log("User profile upoloaded successfully")
  } else {
    throw new Error("Failed to upload user profile");
  }
});
Then(/^For automated event User should be able to Enter "Presenter Name" (.*),"Presenter Title" (.*),"Presenter Website" (.*),"Presenter Bio" (.*)$/, {}, (presenterName, presenterTitle, presenterWebsite, presenterBio) => {
  AutomatedPage.addPresenterNameField(presenterName);
  AutomatedPage.addPresenterTitleField(presenterTitle);
  AutomatedPage.addPresenterWebsiteField(presenterWebsite);
  AutomatedPage.addPresenterBioField(presenterBio);

});

Then(/^Delete image if already added$/, {}, () => {
  try {
    brandingPage.deleteCompanyLogo();
  } catch (error) {

  }
});

Then(/^User select current date from calendar$/, {}, () => {
  EventPage.clickOnCurrentDateUnderBlackoutDateSection();
});

Then(/^Remove blackout date and verify that session added automatically$/, {}, () => {
  var dateBefore = $("((//td[@class='ant-table-row-cell-break-word'])[1]//span)[2]").getText();
  EventPage.clickOnBlackoutDatesLink();
  EventPage.clickOnClearAllBlackoutDatesLink();
  EventPage.clickOnConfirmBlackoutDateButton();
  browser.pause(5000);
  var dateAfter = $("((//td[@class='ant-table-row-cell-break-word'])[1]//span)[2]").getText();
  if (dateBefore.includes(dateAfter)) {
    throw new Error("Session is not added automatically after remove blackout date");
  } else {
    console.log("Session added automatically after remove the blackout date");
  }
});

Then(/^Selected template should displayed on recording screen$/, {}, () => {
  EventPage.validateUpdatedTemplateOnRecordingScreen();

});

Then(/^Refresh screen and click on join room button$/, {}, () => {
  browser.refresh();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
});

Then(/^User is not able to select a team member (.*) as a host for an event who doest not have host ability$/, {}, (member) => {
  EventPage.clickOnChooseMemberDropDown();
  EventPage.selectMemberFromChooseMemberList(member);
  EventPage.clickOnSelectRoleDropDown();
  const hostOption = $("(//div[@data-id='host']//div)[1]");
  var actClass = hostOption.getAttribute("class");
  if (actClass.includes("role-select-container --disabled")) {
    console.log("A team member who does not have host ability is not able to slect as host for any event");

  } else {
    throw new Error("User is able to select a team member as a host who doesn't have host ability");
  }

});

Then(/^For dev server changed branding colour (.*) should display on the screen$/, {}, (colorCode) => {

  EventPage.validateUpdatedBrandingColorForDevServer(colorCode);
});

Then(/^For duplicate event changed color in the background of Preview (.*)$/, {}, (colorCode) => {
  EventPage.validateUpdatedBrandingColorField(colorCode);
});
//-----------------//
Then(/^User schedule new session on next day$/, {}, () => {
  browser.pause(1000);
  EventPage.clickOnScheduleSessionButton();
  browser.pause(1000);
  EventPage.selectNextDayFromScheduleCalendar();
  EventPage.selectEventStartTimeForNextDay();
  EventPage.clickAddToEventScheduleButton();
  browser.pause(1000);
  EventPage.validateManageEventScreen();
});

Then(/^Verify second user info (.*) is displaying under people activity tab$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.validateSecondUserInfoOnActivityPage(name, emailAddress)
});


Then(/^Message text should displaying under message tab (.*)$/, {}, (message) => {
  EventPage.validateMessageTextUnderMessageTab(message);
});

Then(/^For date range script correct user info (.*) is displaying under people tab$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.validateUserInfoOnActivityPageForDateRange(name, emailAddress)
});

Then(/^User detail (.*) should displayied after applying filter under people area$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.validateUserInfoOnPeopleArea(name, emailAddress)
});

Then(/^Start session button should be disabled$/, {}, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.VerifyThatStartSessionButtonIsDisabled();
  EventPage.clickOnClosePopoverButton();
});

Then(/^Automatic message should display (.*) in the chat section$/, {}, (message) => {
  browser.pause(1000);
  MeetingRoomPage.validateMessageInChatWindow(message);
});

Then(/^External link should display under chat section$/, {}, () => {
  simulatedSession.externalLinkIsDisplayed();
});


Then(/^Number of clicks (.*) should display for feature action resource$/, {}, (featureClicks) => {
  simulatedSession.verifyNumberOnFeatureActionClicks(featureClicks);
});

Then(/^Number of clicks for handout resource should display (.*)$/, {}, (handoutClicks) => {
  simulatedSession.verifyHandoutClicksInRoom(handoutClicks);
});

Then(/^Number of answers should display for poll resources (.*)$/, {}, (pollAnswers) => {
  simulatedSession.verifyPollAnswersInRoom(pollAnswers);
});


Then(/^User refresh screen$/, {}, () => {
  browser.pause(8000);
  $("//div[@class='checkuser']").click();
  browser.pause(3000);
});


Then(/^Number of clicks for feature action (.*) for handouts (.*) and for poll (.*) should displaying under insights$/, {}, (featureClicks, handoutClicks, pollClicks) => {
  browser.refresh();
  browser.pause(2000);
  var actPollResourcesClicks = $("(//div[@class='poll-answer-percent'])[1]//span").getText();
  var actHandoutClick = $("div.resource-container:nth-child(3) span:nth-child(1)").getText();
  var actFeatureActionClicks = $("div.resource-container:nth-child(4) span:nth-child(1)").getText();

  if (actPollResourcesClicks.includes(pollClicks) && actHandoutClick.includes(handoutClicks) && actFeatureActionClicks.includes(featureClicks)) {
    console.log("All resource click count matched under insights");

  } else {
    throw new Error("Number of clicks missmatched under insights Number of Poll resource clicks are>>" + actPollResourcesClicks + "Extected poll clicks>>" + pollClicks + "Number of handout resource clicks>>" + actHandoutClick + "Expected handout clicks>>" + handoutClicks + "Number of feature rfesources clicks>>" + actFeatureActionClicks + "Expected feature action clicks>>" + featureClicks);
  }

});

Then(/^Domain name should incuded in url$/, {}, () => {
  var actURL = browser.getUrl();
  EventPage.closeResentWindow();
  EventPage.switchToParentTab();
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();
  var expectedDomainName = $("(//div[@class='domain-name'])[2]").getText();
  if (actURL.includes(expectedDomainName)) {
    console.log("Domain name is displaying in url");
  } else {
    throw new Error("Domain name is not displaying in url ..actual URL>>" + actURL + "Expected domain name>>" + expectedDomainName)
  }
});

Then(/^Change default domain name$/, {}, () => {
  BrandingPage.clickOnFirstDomainNameDropdown();
  browser.pause(3000);
  try {
    BrandingPage.clickOnSetAsDefaultOption();
    browser.pause(1000);
    EventPage.clickOnYesButton();
  } catch (error) {

  }
});

Then(/^User open url using source tracking url$/, {}, () => {
  const currentURL = browser.getUrl();
  var newURL = currentURL + "?utm_source=Builder&utm_medium=Campaign_medium&utm_campaign=Test_campaign&utm_id=Campaign_id&utm_term=Campaign_term&utm_content=Content";
  console.log("New url is >>" + newURL);
  browser.url(newURL);
});

Then(/^For source tracking user should be on Registration page$/, {}, () => {
  EventPage.switchToRegistrationWindow();
});

Then(/^Resources UTM ID (.*) UTM source (.*) UTM medium (.*) UTM campaign (.*) UTM term (.*) UTM content (.*) should displayed under people tab$/, {}, (utmID, utmSource, utmMedium, utmCampaign, utmTerm, utmContent) => {
  browser.pause(5000);
  EventPage.verifySourceData(utmID);
  EventPage.verifySourceData(utmSource);
  EventPage.verifySourceData(utmMedium);
  EventPage.verifySourceData(utmCampaign);
  EventPage.verifySourceData(utmTerm);
  EventPage.verifySourceData(utmContent);
});


Then(/^User is able to select country name (.*)$/, {}, (country) => {
  FreeTrialSignUpPage.clickOnCountyDropdownButton();
  browser.pause(2000);
  FreeTrialSignUpPage.clickOnCountryOption(country);
});

Then(/^Click on confirm invoice link$/, {}, () => {
  starterSignUpPage.clickOnConfirmInvoiceLink();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  browser.pause(10000);
});

Then(/^User add all custom codes using code (.*) for fields (.*) field (.*) field (.*) field (.*)$/, {}, (customCode, field1, field2, field3, field4) => {
  var data = TestUtils.getUserCredetials(customCode);
  browser.pause(3000);
  const customCodeValue = data[0];
  newIntegrationPage.clickOnWhereDoYouWantToApplyFirstDropdown();
  const fieldOption = $("//li[contains(text(),'" + field1 + "')]");
  fieldOption.click();
  newIntegrationPage.fillFirstCustomCodeField(customCodeValue);
  newIntegrationPage.clickOnWhereDoYouWantToApplySecondDropdown();
  browser.pause(1000);
  const fieldOption2 = $("(//li[contains(text(),'" + field2 + "')])[2]");
  fieldOption2.click();
  newIntegrationPage.fillSecondCustomCodeField(customCodeValue);
  newIntegrationPage.clickOnWhereDoYouWantToApplyThirdDropdown();
  browser.pause(1000);
  const fieldOption3 = $("(//li[contains(text(),'" + field3 + "')])[3]");
  fieldOption3.click();
  newIntegrationPage.fillThirdCustomCodeField(customCodeValue);
  newIntegrationPage.clickOnWhereDoYouWantToApplyFourthDropdown();
  browser.pause(1000);
  const fieldOption4 = $("(//li[contains(text(),'" + field4 + "')])[4]");
  fieldOption4.click();
  newIntegrationPage.fillFourthCustomCodeField(customCodeValue);

});

Then(/^Added custom datad (.*) should display on screen$/, {}, (customCode) => {
  var data = TestUtils.getUserCredetials(customCode);
  browser.pause(3000);
  const customCodeValue = data[0];
  try {
    browser.switchToFrame($("iframe[id='demio-room-code']"))
  } catch (error) {

  }
  var actHeader = $("body>h1").getText();
  var actParagraph = $("body>p").getText();
  if (customCodeValue.includes(actHeader) && customCodeValue.includes(actParagraph)) {
    console.log("Custom code data is displaying on screen");
  } else {
    throw new Error("Failed to displaying custome code data on screen");
  }
  try {
    browser.switchToParentFrame();
  } catch (error) {

  }
});

Then(/^Click on "Add New" button$/, {}, () => {
  browser.pause(1500);
  newIntegrationPage.clickOnAddNewButton();
});

Then(/^User click on save integration button on custom code page$/, {}, () => {
  newIntegrationPage.clickOnSaveIntegrationButtonOnCustomCode();
});


Then(/^After applying filter the message (.*) should not displaying in message tab$/, {}, (adminMessage) => {
  const actMessage1 = $("(//div[@class='message-text'])[2]");
  if (actMessage1.isDisplayed() === true) {
    throw new Error("MESSAGE FILTER IS NOT WORKING UNDER MESSAGE TAB");

  } else {
    console.log("Message filter is working fine under message tab")
  }
});

Then(/^After applying filter only (.*) should display on screen$/, {}, (questionMessage) => {
  var actMessage1 = $("(//div[@class='message-text'])[1]").getText();
  if (actMessage1.includes(questionMessage)) {
    console.log("Message filter is working fine under message tab")

  } else {
    throw new Error("MESSAGE FILTER IS NOT WORKING UNDER MESSAGE TAB");
  }
});


Then(/^User should able to open registration url in next tab$/, {}, () => {
  MeetingRoomPage.openRegistrationLinkInNewTab();
});

Then(/^Deleted custom field is not displayed on registration page (.*)$/, {}, (label) => {
  EventPage.validateDeletedCustomFieldOnRegPage(label);

});

Then(/^User is able to delete recording from summary tab$/, {}, () => {
  EventPage.verifyDeletedRecording();
});

Then(/^After clicking on zip code field and outside zipcode field error validation (.*) should display on screen$/, {}, (validation) => {
  billingPage.clickOnZipCodeField();
  billingPage.clickOnCityField();
  billingPage.validateMandatoryZipCodeErrorValidation(validation);
});

Then(/^Deleted resources are removed from user screen$/, {}, () => {
  MeetingRoomPage.validateDeletedFeatureActionResource();
  if (MeetingRoomPage.pollsOption.isDisplayed()===true) {
    MeetingRoomPage.pollsOption.click();
  } else {
    console.log("User is on attendees screen");
  }
  MeetingRoomPage.validateDeletedPollResouce();
  if (MeetingRoomPage.handoutsOption.isDisplayed()===true) {
    MeetingRoomPage.handoutsOption.click();
  } else {
    console.log("User is on attendees screen");
  }

  MeetingRoomPage.validateDeletedHandoutResource();
});



Then(/^User is able to select new team member role from dropdown list (.*)$/, {}, (option) => {
TeamPage.selectNewTeamMemberDropdownOption(option);
});

Then(/^User is able to edit new team member role (.*) from dropdown list$/, {}, (option) => {
  TeamPage.updateNewTeamMemberDropdownOption(option);
  });


  Then(/^User is able to see delete option$/, {}, () => {
TeamPage.deleteUserButtonIsDisplayed();
    });

  
Then(/^User shall see "Call to action" toggle button$/, {}, () => {
  EventPage.callToActionToggleButtonIsDisplayed();
});

Then(/^User should able to fill all field title (.*) button url (.*) and button text (.*)$/, {}, (ctaTitle, buttonUrl, buttonText) => {
  EventPage.fillCtaTitleField(ctaTitle);
  EventPage.fillCtaButtonTextField(buttonText);
  EventPage.fillCtaButtonUrlField(buttonUrl);
});

Then(/^User should able to redirect on url (.*)$/, {}, (url) => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  EventPage.validateWindowUrl(url);
  browser.closeWindow();
  browser.switchToWindow(handle[0]);
});

Then(/^User is able to add cta title (.*) button text (.*)$/, {}, (ctaTitle, buttonText) => {
  EventPage.verifyAddedCtaTitle(ctaTitle);
  EventPage.verifyAddedCtaButton(buttonText);
});

Then(/^User Save added settings and verify that added logo and template should display on recording screen$/, {}, () => {
  var actualSrc = $("//div[@class='registration-header-logo']//img").getAttribute("src");
  var actTemplate = $("(//div[@class='registration-page replay-page']//div)[2]").getAttribute("class");
  EventPage.clickOnSaveAndCloseButton();
  browser.pause(2000);
  EventPage.clickOnArrowOnRecordingPage();
  EventPage.switchToRecordingWindow();
  if (EventPage.playRecordingButtonIsDisplay() === true) {
    console.log("Recording opened successfully");
  } else {
    throw new Error("Failed to open recording");
  }
  var expectedSrc = $("//div[@class='registration-header-logo']//img").getAttribute("src");
  var expectedTemplate = $("(//div[@class='registration-page replay-page']//div)[2]").getAttribute("class");
  expect(actualSrc).toEqual(expectedSrc);
  expect(actTemplate).toEqual(expectedTemplate);
});

Then(/^User deleted already added branding logo image$/, {}, () => {
  brandingPage.deleteAlreadyUploadedBrandingLogoImage();
});


Then(/^Registrants graph should not displaying on screen$/, {}, () => {
  EventPage.validateEmptyGraphContainer();
});


Then(/^Shared resource number (.*) should displayed for all resources$/, {}, (resourceNumber) => {
  EventPage.validateResourceNumberForAllResources(resourceNumber);
});

Then(/^shared emoji should displayed under chat screen$/, {}, () => {
  EventPage.shareAndVerifySharedEmoji();
});
Then(/^User is able to cancel the sessions which have no registrants$/, {}, () => {
EventPage.verifyCancelledRecurringSession();
});

Then(/^Updated event (.*) should display on screen$/, {}, (updatedName) => {
EventPage.validateUpdatedEventName(updatedName);
  });
