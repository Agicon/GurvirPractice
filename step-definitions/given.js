import { Given } from "cucumber";
import TestUtils from "../page_objects/testUtils";
import LoginPage from "../page_objects/LoginPage/loginPage";
import FreeTrialSignUpPage from "../page_objects/SignUpPage/freeTrialSignUpPage";
import HomePage from "../page_objects/HomePage/homePage";
import StarterSignUpPage from "../page_objects/SignUpPage/starterSignUpPage";
import GrowthSignUpPage from "../page_objects/SignUpPage/growthSignUpPage";
import BusinessSignUpPage from "../page_objects/SignUpPage/businessSignUpPage";
import EventPage from "../page_objects/Events/eventPage";
import AllPage from "../page_objects/Events/allPage";
import StandardPage from "../page_objects/Events/standardPage";
import SeriesPage from "../page_objects/Events/seriesPage";
import AutomatedPage from "../page_objects/Events/automatedPage";
import ArchivedPage from "../page_objects/Events/archivedPage";
import automatedPage from "../page_objects/Events/automatedPage";
import MeetingRoomPage from "../page_objects/MeetingRoom/meetingRoomPage";
import BrandingPage from "../page_objects/SettingsPage/brandingPage";
import IntegrationsPage from "../page_objects/SettingsPage/integrationsPage";
import SettingsPage from "../page_objects/SettingsPage/settingsPage";
import simulatedSession from "../page_objects/SimulatedSession/simulatedSession";
import archivedPage from "../page_objects/Events/archivedPage";
import NewIntegrationPage from "../page_objects/NewIntegration/newIntegrationPage";
import brandingPage from "../page_objects/SettingsPage/brandingPage";
import freeTrialSignUpPage from "../page_objects/SignUpPage/freeTrialSignUpPage";
import loginPage from "../page_objects/LoginPage/loginPage";



//--------ARCHIVE EVENT ----------//

Given(/^Archived event (.*) must be present in archived list$/, {}, (eventName) => {
  HomePage.openEventsTab();
  archivedPage.checkAndArchivedDuplicateEvents(eventName);
  archivedPage.clickOnEventMenuDropDown();
  archivedPage.clickOnArchiveButton();
  archivedPage.clickOnYesArchiveButton();
  archivedPage.openArchivedTab();
  archivedPage.searchArchivedEvent(eventName);
  
})

//--------------------Simulated Session------------//



Given(/^User should signup with a new trial account using (.*) WorkEmail (.*) password (.*) and company name (.*) and country (.*)$/, {}, (fullName, email, password, companyName, country) => {
  // LoginPage.openLoginPage();
  // FreeTrialSignUpPage.clickOnFreeTrialLink();
  browser.pause(6000);
  var data = TestUtils.getEmailForRegistration(email); //Retrive data from excel
  browser.pause(1000);
  const userName = data[0];
  const emailId = data[1];

  var rNo = Math.floor(Math.random() * 999998);
  var uName = fullName + rNo;
  var emailAddress = emailId.replace("@gmail.com", rNo + "@gmail.com");


  FreeTrialSignUpPage.fillFullNameField(uName);
  FreeTrialSignUpPage.fillWorkEmailField(emailAddress);
  browser.pause(300);
  FreeTrialSignUpPage.fillSetAPasswordField(password);
  browser.pause(300);
  freeTrialSignUpPage.clickOnCountyDropdownButton();
  browser.pause(1000);
  freeTrialSignUpPage.clickOnCountryOption(country);
  FreeTrialSignUpPage.clickOnCreateMyAccountButton();
  browser.pause(2000);


});
/*---------------------Home Page Fature-------------*/

Given(/^User should be on Home page$/, {}, () => {
  HomePage.openHomePage();
});

Given(/^User should redirect on (.*) Home page$/, {}, (url) => {
  HomePage.redirectHomePage(url);
});


Given(/^User should be on Settings Page$/, {}, () => {

  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();

});

/*----------Start Settings page code-------------*/
Given(/^User should be on Integration Settings Page$/, {}, () => {

  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();

});


Given(/^User should be as Zapier (.*) dashboard$/, {}, (login) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.openZapierInNewTab(login);
  IntegrationsPage.fillZapierLoginForm(login);
  IntegrationsPage.clickOnZapierContinueButton();

});

Given(/^Recurring session of series event must be created in future time (.*)$/, {}, (futureTime) => {
  EventPage.clickScheduleThisEventButton();
  EventPage.clickOnRecurringTimes();
  EventPage.selectFutureDate();
  EventPage.selectFutureTime(futureTime);
  EventPage.clickAddToEventScheduleButton();

});


Given(/^Aweber (.*) integrations must be (.*) enabled from settings$/, {}, (login, status) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.romoveAllAddedIntegrations();
  IntegrationsPage.clickOnAweberIcon();
  IntegrationsPage.removePreAddedAweber();
  IntegrationsPage.fillAweberLoginForm(login);
  IntegrationsPage.clickOnAllowAccessButton();
  IntegrationsPage.validateAddedAweber(status);
});

Given(/^User must be at customize Integrations sceeen$/, {}, () => {
  browser.refresh();
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnIntegrationsTab();
});


Given(/^Mailchimp (.*) integrations must be (.*) enabled from settings$/, {}, (login, status) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.romoveAllAddedIntegrations();
  IntegrationsPage.clickOnMailchimpIcon();
  IntegrationsPage.removePreAddedMailchimp();
  IntegrationsPage.fillMailchimpLoginForm(login)
  IntegrationsPage.clickOnMailchimpLoginButton();
  browser.pause(2000);
  IntegrationsPage.clickOnAllowButton();
  IntegrationsPage.validateAddedMailchimp(status);

});

Given(/^Markethero integrations must be (.*) enabled from settings$/, {}, (status) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.romoveAllAddedIntegrations();
  SettingsPage.clickOnApiTab();
  var apiKey = IntegrationsPage.getApiKeyData();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.clickOnMarketheroIcon();
  IntegrationsPage.removePreAddedMarkethero();

  if (IntegrationsPage.popupTitleIsDisplayed() === true) {
    console.log("Market hero popup is displaying");
  } else {
    throw new EventPage("Market hero popup is not displayed");
  }

  const keyField = $("//input[@data-bind='value: apiKey']");
  keyField.setValue(apiKey);
  IntegrationsPage.clickOnConnectButton();
  IntegrationsPage.validateAddedMarkethero(status);

});

Given(/^Marketo (.*) integrations must be (.*) enabled from settings$/, {}, (login, status) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.romoveAllAddedIntegrations();
  IntegrationsPage.clickOnMarketoIcon();
  IntegrationsPage.removePreAddedMarketo();
  IntegrationsPage.fillMarketoLoginForm(login);
  IntegrationsPage.clickOnConnectButton();
  browser.pause(2000);
  IntegrationsPage.validateAddedMarketo(status);

});


Given(/^Infusionsoft (.*) integrations must be (.*) enabled from settings$/, {}, (login, status) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.romoveAllAddedIntegrations();
  IntegrationsPage.clickOnInfusionSoftIcon();
  IntegrationsPage.removePreAddedInfusionsoft();
  IntegrationsPage.fillInfusionSoftLoginForm(login);
  IntegrationsPage.clickOnInfusionsoftLoginButton();
  browser.pause(2000);
  IntegrationsPage.clickOnInfusionSoftAllowButton();
  IntegrationsPage.validateAddedInfusionsoft(status);

});



Given(/^Integrations must be enabled (.*) from settings$/, {}, (status) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.validateAddedActiveCampaign(status);
  IntegrationsPage.validateAddedGetresponse(status);
  IntegrationsPage.validateAddedOntraport(status);
  IntegrationsPage.validateAddedInfusionsoft(status);
  IntegrationsPage.validateAddedMarketo(status);
  IntegrationsPage.validateAddedMarkethero(status);
  IntegrationsPage.validateAddedMailchimp(status);
  IntegrationsPage.validateAddedAweber(status);
  IntegrationsPage.validateAddedConvertKit(status);
  IntegrationsPage.validateAddedDripIntegration(status);

});




/*-----------------Login Page-----------------------*/

Given(/^User login with (.*)$/, {}, (userName) => {
  LoginPage.logInWithUser(userName);
  try {
    browser.switchToFrame($("(//iframe[@role='dialog'])[2]"));
    $("//span[@aria-label='Close']").click();
    browser.switchToParentFrame();
  } catch (error) {

  }

  try {
    browser.switchToFrame($("//iframe[@name='intercom-note-frame']"));
    $("//span[@aria-label='Close']").click();
    browser.switchToParentFrame();
  } catch (error) {

  }
});

Given(/^User should be on login page$/, {}, () => {
  browser.maximizeWindow();
  LoginPage.openLoginPage();
});

Given(/^User should redirect on (.*) login page$/, {}, (login) => {
  browser.maximizeWindow();
  LoginPage.openLoginPageUrl(login);
});


/*----------Strat Free Trial Sign Up page code-------------*/
Given(/^User must have created free trial account with name (.*) email (.*) and password (.*)$/, {}, (fullName, workEmail, password) => {


  var data = TestUtils.getEmailForRegistration(workEmail); //Retrive data from excel
  browser.pause(6000);
  const userName = data[0];
  const emailId = data[1];

  var rNo = Math.floor(Math.random() * 968);
  var uName = fullName + rNo + 1;
  var eAddress = emailId.replace("@gmail.com", uName + "@gmail.com");
  var emailAddress = eAddress.replace(" ", "");

  FreeTrialSignUpPage.clickOnFreeTrialLink();
  FreeTrialSignUpPage.fillFullNameField(uName);
  console.log("NAME: " + emailAddress)
  FreeTrialSignUpPage.fillWorkEmailField(emailAddress);
  FreeTrialSignUpPage.fillSetAPasswordField(password);
  FreeTrialSignUpPage.clickOnCreateMyAccountButton();
  browser.pause(20000);
  FreeTrialSignUpPage.validateCompanyNameField();
});


Given(/^User should able to build demio account with company name (.*) and by selecting (.*) and (.*)$/, {}, (companyName, selectAnOption, optionForAccess) => {

  FreeTrialSignUpPage.fillCompanyNameField(companyName);
  FreeTrialSignUpPage.clickOnContinueButton();
  browser.pause(200);
  FreeTrialSignUpPage.clickNoWeAreJustStartingOutButton();
  browser.pause(2000);
  FreeTrialSignUpPage.clickOnSelectAnOptionField();
  browser.pause(1000);
  $("//li[@name='" + selectAnOption + "']").click();
  browser.pause(3000);
  FreeTrialSignUpPage.clickOnContinueButton();
  browser.pause(200);
  FreeTrialSignUpPage.clickReadyToLaunchButton();
  browser.pause(200);
  FreeTrialSignUpPage.clickOnSelectAnOptionField();
  browser.pause(1000);
  $("//li[@name='" + optionForAccess + "']").click();
  browser.pause(3000);
  FreeTrialSignUpPage.clickAccessMyAccountButton();
  browser.pause(5000);

});

/*----------End of Free Trial Sign Up page code-------------*/



/*----------Strat Starter Sign Up page code-------------*/
Given(/^the user should open the starter URL$/, {}, () => {
  StarterSignUpPage.openStarterUrl();
});




/*----------End of Starter Sign Up page code-------------*/




/*----------Strat Growth Sign Up page code-------------*/
Given(/^the user should open the growth URL$/, {}, () => {
  GrowthSignUpPage.openGrowthUrl();
});




/*----------End of Growth Sign Up page code-------------*/



/*----------Strat Business Sign Up page code-------------*/
Given(/^the user should open the business URL$/, {}, () => {
  BusinessSignUpPage.openBusinessUrl();
});




/*----------End of Business Sign Up page code-------------*/



/*----------Strat Event page code-------------*/

Given(/^User should be on Events page$/, {}, () => {
  EventPage.openEventsTab();
  EventPage.validateEventPage();
});


Given(/^There must be existing "Standard" (.*) and "Series" (.*) events available$/, {}, (standardEvent, seriesEvent) => {
  TestUtils.checkAndArchivedDuplicateEvents(standardEvent);
  TestUtils.checkAndArchivedDuplicateEvents(seriesEvent);
  EventPage.clickOnAddNewEventButton();
  StandardPage.openAddNewStandardEvent();
  EventPage.fillEventNameField(standardEvent);
  EventPage.clickOnContinueButton();
  EventPage.openEventsTab();
  EventPage.clickOnAddNewEventButton();
  SeriesPage.openAddNewSeriesEvent();
  EventPage.fillEventNameField(seriesEvent);
  EventPage.clickOnContinueButton();

});

Given(/^User should be on Create Events page$/, {}, () => {
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  EventPage.clickOnAddNewEventButton();
});

Given(/^There should be existing Scheduled events (.*)$/, {}, (eventName) => {
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  browser.pause(3000);
  EventPage.clickOnAddNewEventButton();
  var data = TestUtils.getStandardEventData(eventName); //Retrive data from excel
  browser.pause(6000);
  const eventName1 = data[0];
  StandardPage.openAddNewStandardEvent();
  EventPage.fillEventNameField(eventName1);
  EventPage.clickOnContinueButton();
  browser.pause(1000);
  EventPage.clickScheduleThisEventButton();
  browser.pause(1000);
  EventPage.clickAddToEventScheduleButton();
  browser.pause(1000);
});

Given(/^User should be on Manage Event Page$/, {}, () => {
  EventPage.validateManageEventScreen();
});

/*----------End of Event page code-------------*/



/*----------Strat Standard Event code-------------*/

Given(/^new "Standard" Event must be craeted (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.checkAndArchivedDuplicateEvents(eventName);
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  EventPage.clickOnAddNewEventButton();
  StandardPage.openAddNewStandardEvent();
  EventPage.fillEventNameField(eventName);
  browser.pause(500);
  EventPage.clickOnContinueButton();
});

Given(/^End if any session running and new "Standard" Event must be craeted (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.EndIfAnySessionIsInProgress();
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  EventPage.clickOnAddNewEventButton();
  StandardPage.openAddNewStandardEvent();
  EventPage.fillEventNameField(eventName);
  browser.pause(500);
  EventPage.clickOnContinueButton();
});
Given(/^User should be on Manage Event Share Page$/, {}, () => {
  if (EventPage.facebookLogoIsDisplay() == true) {
    console.log("User successfully redirect on share screen");
  } else {
    throw new Error("EVENT SHARE SCREEN IS NOT LOADED");
  }
});


/*----------Strat Series Event code-------------*/
Given(/^new "Series" Event must be craeted (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.checkAndArchivedDuplicateEvents(eventName);
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  browser.pause(1000);
  EventPage.clickOnAddNewEventButton();
  browser.pause(1000);
  SeriesPage.openAddNewSeriesEvent();
  browser.pause(1000);
  EventPage.fillEventNameField(eventName);
  browser.pause(1000);
  EventPage.clickOnContinueButton();
  browser.pause(3000);
});


/*----------Strat Automated Event code-------------*/

Given(/^Feature should be created with Featured title (.*) and featureUrl (.*) buttonText (.*) image (.*) with (.*)$/, {}, (featureTitle, featureUrl, buttonText, image, launchTime) => {

  AutomatedPage.createFeatureUrlWithLaunchTime(featureTitle, featureUrl, buttonText, image, launchTime);

})
Given(/^OnDemand event Feature should be created with Featured title (.*) and featureUrl (.*) buttonText (.*) image (.*) with (.*)$/, {}, (featureTitle, featureUrl, buttonText, image, launchTime) => {

  AutomatedPage.createFeatureUrlForOnDemandWithLaunchTime(featureTitle, featureUrl, buttonText, image, launchTime);

})

Given(/^For onDemand event Polls should be created with question (.*) and optionOne (.*) optionTwo (.*) and set launchTime (.*)$/, {}, (pollQuestion, optionOne, optionTwo, launchTime) => {
  AutomatedPage.createPollForOnDemandWithLaunchTime(pollQuestion, optionOne, optionTwo, launchTime);
});
Given(/^Polls should be created with question (.*) and optionOne (.*) optionTwo (.*) and set launchTime (.*)$/, {}, (pollQuestion, optionOne, optionTwo, launchTime) => {
  AutomatedPage.createPollWithLaunchTime(pollQuestion, optionOne, optionTwo, launchTime);
});


Given(/^Handout should be created with title (.*) and image (.*) and set launchTime (.*)$/, {}, (handoutTitle, image, launchTime) => {
  AutomatedPage.createHandOutWithLaunchTime(handoutTitle, image, launchTime);
});

Given(/^(.*) Users must Attended and sent (.*) for On-demand session with email (.*)$/, {}, (userCount, message, regEmail) => {
  EventPage.clickOnSummaryTab();
  AutomatedPage.clickOnOnDemandsOption();
  AutomatedPage.enabledOnDemandSwitch();
  EventPage.clickOnShareTab();
  browser.pause(4000);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.attendOnDemnadAndSentMessage(userCount, name, emailAddress, message);
});

Given(/^For post session Users (.*) must Attended and sent (.*) for On-demand session with email (.*)$/, {}, (userCount, message, regEmail) => {

  EventPage.clickOnShareTab();
  browser.pause(4000);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.attendOnDemnadAndSentMessage(userCount, name, emailAddress, message);
});
Given(/^(.*) Users must Attended for On-demand session with email (.*)$/, {}, (userCount, regEmail) => {
  EventPage.clickOnSummaryTab();
  AutomatedPage.clickOnOnDemandsOption();
  AutomatedPage.enabledOnDemandSwitch();
  EventPage.clickOnShareTab();
  browser.pause(4000);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(7000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.attendOnDemandWithMultipleUsers(userCount, name, emailAddress);

});

Given(/^(.*) Users must register for On-demand session with email (.*)$/, {}, (userCount, regEmail) => {

  EventPage.clickOnSummaryTab();
  AutomatedPage.clickOnOnDemandsOption();
  AutomatedPage.enabledOnDemandSwitch();
  EventPage.clickOnShareTab();
  browser.pause(4000);

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.regiregisterMultipleUsers(userCount, name, emailAddress);
});


Given(/^new "Automated" Event (.*) must be craeted using video (.*)$/, {}, (event, videoName) => {
  var data = TestUtils.getAutomatedEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.checkAndArchivedDuplicateEvents(eventName);
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  EventPage.clickOnAddNewEventButton();
  AutomatedPage.openAddNewAutomatedEvent();
  EventPage.fillEventNameField(eventName);
  EventPage.clickOnContinueButton();
  EventPage.clickOnCustomizeTab();
  AutomatedPage.clickOnAutomationTab();
  AutomatedPage.selectVideoFromLibrary(videoName);
  $(".demio-upload-preview").waitForDisplayed({ timeout: 300000 });
});

Given(/^Video (.*) must be added in automated event$/, {}, (videoName) => {
  EventPage.clickOnCustomizeTab();
  AutomatedPage.clickOnAutomationTab();
  AutomatedPage.selectVideoFromLibrary(videoName);
  $(".demio-upload-preview").waitForDisplayed({ timeout: 30000 });
});

Given(/^new "Automated" Event (.*) must be craeted$/, {}, (event) => {
  var data = TestUtils.getAutomatedEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.checkAndArchivedDuplicateEvents(eventName);
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  browser.pause(5000);
  EventPage.clickOnAddNewEventButton();
  browser.pause(8000);
  AutomatedPage.openAddNewAutomatedEvent();
  EventPage.fillEventNameField(eventName);
  EventPage.clickOnContinueButton();
  browser.pause(5000);
});

//------------------START MEETING ROOM SCRIPT----------------//


Given(/^Material (.*) video (.*) must be added in event$/, {}, (name, video) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnPresentationMaterials();
  EventPage.clickOnAddAMaterialOption();
  EventPage.clickonTypeOfMaterialDropDown();
  EventPage.selectVideoOption();
  EventPage.addMaterialNameField(name);
  EventPage.uploadVideoFile(video);
  EventPage.clickOnAddMaterialButton();
  browser.pause(8000);
  $("//div[@class='row-icon event-material-thumbnail ']").waitForDisplayed({ timeout: 30000 });
  EventPage.clickOnDoneButton();
  browser.pause(5000);
  browser.refresh();
  browser.pause(5000);
});

Given(/^Host should be in meeting room and starts the session$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(1000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(6000);
});

Given(/^Poll resource (.*) must be added with options (.*) and (.*)$/, {}, (question, option1, option2) => {
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

Given(/^Enable share result option Poll resource (.*) must be added with options (.*) and (.*)$/, {}, (question, option1, option2) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectPollOption();
  EventPage.addQuestionField(question);
  EventPage.addOption1Field(option1);
  EventPage.addOption2Field(option2);
  $("//input[@class='ant-checkbox-input']").click();
  EventPage.clickOnAddResourceButton();
});

Given(/^(.*) must be added (.*) in "Event Admin" option$/, (role, member) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnChooseMemberDropDown();
  EventPage.selectMemberFromChooseMemberList(member);
  EventPage.clickOnSelectRoleDropDown();
  EventPage.selectRoleOption(role);
  EventPage.clickOnAllSessionButton();
  browser.pause(1000);
  EventPage.selectInviteAdminCheckBox();
  EventPage.clickOnConfirmButton();
  EventPage.clickOnAddAdminButton();
  EventPage.addedAdminIsDisplayedInList();
});


Given(/^User Must be in Meeting Room$/, () => {
  MeetingRoomPage.clickOnJoinRoom();
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  if (MeetingRoomPage.goOnStageButtonIsDisplayed() === true) {
    console.log("user successfully redirect to meeting room");
  } else {
    throw new Error("failed to redirect to meeting room screen");
  }

});

Given(/^There must be a admin or a attendee on stage$/, () => {
  $("(//div[@class='UserMenu'])[1]").click();
  MeetingRoomPage.clickOnInviteOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  if (MeetingRoomPage.stagingMenuBarIsDisplayed() === true) {
    console.log("staging menu bar is successfully displaying");
  } else {
    throw new Error("Staging menu bar is not displayed after clicking on go on stage button");
  }

  MeetingRoomPage.clickOnPeopleButton();
  $("(//div[@class='UserMenu'])[3]").click();

  MeetingRoomPage.clickOnInviteOnStageButton();
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[2]);
  browser.pause(3000);
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  if (MeetingRoomPage.stagingMenuBarIsDisplayed() === true) {
    console.log("staging menu bar is successfully displaying");
  } else {
    throw new Error("Staging menu bar is not displayed after clicking on go on stage button");
  }
});


Given(/^User Must be on stage$/, () => {
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  // MeetingRoomPage.clickOnCloseSettingPopover();
  if (MeetingRoomPage.stagingMenuBarIsDisplayed() === true) {
    console.log("staging menu bar is successfully displaying");
  } else {
    throw new Error("Staging menu bar is not displayed after clicking on go on stage button");
  }
});



Given(/^Resource should be created with Featured title (.*) and featureUrl (.*) buttonText (.*) image (.*)$/, {}, (featureTitle, featureUrl, buttonText, image) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectFeaturedActionOption();
  EventPage.addFeaturedTitleField(featureTitle);
  EventPage.addLinkUrlField(featureUrl);
  EventPage.uploadImageData(image);
  EventPage.addButtonTextField(buttonText);
  EventPage.clickOnAddResourceButton();
  AutomatedPage.validateAddedActionFeature(featureTitle);


});
 //====//
Given(/^Template option (.*) must be selected by admin$/, {}, (option) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnCustomizeButton();
  EventPage.clickOnTemplateDropDown();
  EventPage.clickOnTemplateMenuButton();
  EventPage.selectTemplate(option);
  browser.back();
});


Given(/^Branding image (.*) must be uploaded$/, {}, (image) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnCustomizeButton();
  EventPage.clickOnBrandingDropDown();
  try {
    brandingPage.deleteCompanyLogo();
  } catch (error) {

  }

  EventPage.updateBrandingImage(image);

});


Given(/^Subheadline (.*) and video link (.*) and description (.*) must be added$/, {}, (subheadline, videoLink, description) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnCustomizeButton();
  EventPage.clickOnElementsDropDown();
  EventPage.turnOnSubheadlineButton();
  EventPage.addSubheadlineField(subheadline);
  EventPage.clickOnSaveSubheadlineButton();
  browser.pause(3000);
  EventPage.turnOnVideoButton();
  EventPage.addUrlInVideoLinkField(videoLink);
  EventPage.clickOnSaveVideoButton();
  browser.pause(3000);
  EventPage.turnOnDescriptionButton();
  EventPage.addDescriptionField(description);
  EventPage.clickOnSaveDescriptionButton();

});


Given(/^User edit Subheadline (.*) and video link (.*) and description (.*) must be added$/, {}, (subheadline, videoLink, description) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnCustomizeButton();
  EventPage.clickOnElementsDropDown();
  // EventPage.turnOnSubheadlineButton();
  EventPage.clickOnEditSubheadlineOption();
  EventPage.addSubheadlineField(subheadline);
  EventPage.clickOnSaveSubheadlineButton();
  browser.pause(3000);
  // EventPage.turnOnVideoButton();
  EventPage.clickOnEditVideoOption();
  EventPage.addUrlInVideoLinkField(videoLink);
  EventPage.clickOnSaveVideoButton();
  browser.pause(3000);
  // EventPage.turnOnDescriptionButton();
  EventPage.clickOnEditDescriptionOption();
  EventPage.addDescriptionField(description);
  EventPage.clickOnSaveDescriptionButton();

});


Given(/^Featured presenter (.*) and (.*) and (.*) and (.*) with (.*) must be added$/, {}, (presenterName, presenterTitle, presenterWebsite, presenterBio, photo) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnCustomizeButton();
  EventPage.clickOnElementsDropDown();
  EventPage.turnOnFeaturedPresentersButton();
  browser.pause(1000);
  EventPage.addPresenterNameField(presenterName);
  EventPage.addPresenterTitleField(presenterTitle);
  EventPage.addPresenterWebsiteField(presenterWebsite);
  EventPage.addPresenterBioField(presenterBio);
  EventPage.addPresenterPhoto(photo);
  // // EventPage.clickOnAddPresenterButton();
  // const AddPresenterButton = $("(//button[@class='ant-btn Button animated fadeIn ant-btn-primary'])[2]");
  // AddPresenterButton.waitForClickable({ timeout: 10000 });
  // AddPresenterButton.click();
  // browser.back();
});


//----------------------NewRoomUpdated--------------------------//



Given(/^Created event (.*) should be searched and selected from event list$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.searchCreatedEvent(eventName);
});
Given(/^Created series event (.*) should be searched and selected from event list$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.searchCreatedEvent(eventName);
});

Given(/^Created automated event (.*) should be searched and selected from event list$/, {}, (event) => {
  var data = TestUtils.getAutomatedEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.searchCreatedEvent(eventName);
});

Given(/^From join link Host Must be in Meeting Room$/, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
  MeetingRoomPage.clickOnAdminHostSessionDropDown();
  EventPage.eventAdminsTab.scrollIntoView();
  browser.pause(2000);
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }

  EventPage.clickOnJoinRoomBtnUnderJoin();
  if (MeetingRoomPage.peopleButtonIsDisplayed() === true) {
    console.log("user successfully redirect to meeting room");
  } else {
    throw new Error("failed to redirect to meeting room screen");
  }

});

Given(/^Host Must be in Meeting Room$/, () => {
  // browser.refresh();
  MeetingRoomPage.clickOnJoinRoom();

  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  $("//div[@id='main']").waitForDisplayed({ timeout: 50000 });
  if ($("//a[contains(text(),'JOIN ANYWAYS')]").isDisplayed() === true) {
    $("//a[contains(text(),'JOIN ANYWAYS')]").click();
  } else {
    console.log("Join anyways button is not dispalyed");
  }

  EventPage.clickOnJoinRoomBtnUnderJoin();
  if (MeetingRoomPage.peopleButtonIsDisplayed() === true) {
    console.log("user successfully redirect to meeting room");
  } else {
    throw new Error("failed to redirect to meeting room screen");
  }

});

Given(/^Resource (.*) must be added with options (.*) and (.*) and disable share result with attendee$/, {}, (question, option1, option2) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectPollOption();
  EventPage.addQuestionField(question);
  EventPage.addOption1Field(option1);
  EventPage.addOption2Field(option2);
  EventPage.unMarkShareResultCheckBox();
  EventPage.clickOnAddResourceButton();
});

Given(/^Users (.*) must register for On-demand session with email (.*)$/, {}, (userCount, regEmail) => {

  EventPage.clickOnShareTab();
  browser.pause(4000);

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.regiregisterMultipleUsers(userCount, name, emailAddress);
});

Given(/^User close extra tabs$/, {}, () => {
  HomePage.closeExtraTabs();
  browser.refresh();
});

//----------------INTEGRATION CASES-----------//

Given(/^Integrations (.*) must be enabled from settings$/, {}, (integration) => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnIntegrationTab();
  NewIntegrationPage.validateEnabledIntegrationInSettions(integration);

});


Given(/^For automated event (.*) Users must Attended and click on all resources for poll (.*) and redirect on url (.*) for feature action and sent (.*) with email (.*)$/, {}, (userCount, optionOne, url, message, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.attendAutomatedEventAndSentMessage(userCount, name, emailAddress, message, optionOne, url);

});

Given(/^For automated event (.*) Users must missed with email (.*)$/, {}, (missedCount, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.missedAutomatedEvent(missedCount, name, emailAddress);

});

Given(/^For on demand session (.*) Users must Attended and click on all resources for poll (.*) and redirect on url (.*) for feature action and sent (.*) with email (.*)$/, {}, (userCount, optionOne, url, message, regEmail) => {
  EventPage.clickOnSummaryTab();
  AutomatedPage.clickOnOnDemandsOption();
  AutomatedPage.enabledOnDemandSwitch();
  EventPage.clickOnShareTab();
  browser.pause(2000);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.attendOnDemandEventAndSentMessage(userCount, name, emailAddress, message, optionOne, url);

});

Given(/^Click on duplecate event option$/, {}, () => {
  EventPage.openSessionOptionsList();
  if (EventPage.duplicateEventOptionIsDisplay() === true) {
    EventPage.duplicateEventOption.click();
  } else {
    throw new Error("Duplicate option is not displaying under drop down list")
  }

});


Given(/^Click on Archive event option$/, {}, () => {
  EventPage.openSessionOptionsList();
  if (EventPage.archiveEventOptionIsDisplay() === true) {
    EventPage.archiveEventOption.click();
  } else {
    throw new Error("Archive option is not displaying under drop down list")
  }

});



Given(/^In Other tab User should redirect on (.*) login page$/, {}, (login) => {
  browser.createWindow("tab");
  EventPage.switchToWindowNewTab();
  LoginPage.openLoginPageUrl(login);
});

Given(/^login with email (.*) and password (.*)$/, {}, (email, password) => {
  LoginPage.fillUserNameField(email);
  LoginPage.fillPasswordField(password);
  LoginPage.clickOnLoginButton();
  HomePage.validateHomePage();
  try {
    browser.switchToFrame($("(//iframe[@role='dialog'])[2]"));
    $("//span[@aria-label='Close']").click();
    browser.switchToParentFrame();
  } catch (error) {

  }
});

Given(/^Using join link host should be in meeting room and starts the session$/, {}, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
  MeetingRoomPage.clickOnHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(6000);
});

Given(/^Deleted pogressed event and new "Series" Event must be craeted (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.EndIfAnySessionIsInProgress();
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  EventPage.clickOnAddNewEventButton();
  SeriesPage.openAddNewSeriesEvent();
  browser.pause(5000);
  EventPage.fillEventNameField(eventName);
  browser.pause(500);
  EventPage.clickOnContinueButton();

});


Given(/^Archived old events and new "Series" Event must be craeted (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.openEventsTab();
  TestUtils.EndIfAnySessionIsInProgress();
  EventPage.openEventsTab();
  EventPage.validateEventPage();
  browser.pause(1000);
  EventPage.clickOnAddNewEventButton();
  browser.pause(1000);
  SeriesPage.openAddNewSeriesEvent();
  browser.pause(1000);
  EventPage.fillEventNameField(eventName);
  browser.pause(1000);
  EventPage.clickOnContinueButton();
  browser.pause(3000);
});


Given(/^User delete cookies$/, {}, () => {
  browser.deleteCookies();
});

Given(/^User select custom domain as default domain$/, {}, () => {
  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();
  SettingsPage.clickOnBrandingTab();
  BrandingPage.clickOnAddedDomainDropDown();
  browser.pause(2000);
  try {
    BrandingPage.clickOnSetAsDefaultOption();
    EventPage.clickOnYesButton();
  } catch (error) {

  }
});

