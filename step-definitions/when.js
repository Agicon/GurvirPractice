import { When } from "cucumber";
import TestUtils from '../page_objects/testUtils';
import LoginPage from "../page_objects/LoginPage/loginPage";
import HomePage from "../page_objects/HomePage/homePage";
import FreeTrialSignUpPage from "../page_objects/SignUpPage/freeTrialSignUpPage";
import StarterSignUpPage from "../page_objects/SignUpPage/starterSignUpPage";
import EventPage from "../page_objects/Events/eventPage";
import StandardPage from "../page_objects/Events/standardPage";
import SeriesPage from "../page_objects/Events/seriesPage";
import AutomatedPage from "../page_objects/Events/automatedPage";
import SettingsPage from "../page_objects/SettingsPage/settingsPage";
import ProfilePage from "../page_objects/SettingsPage/profilePage";
import MeetingRoomPage from "../page_objects/MeetingRoom/meetingRoomPage";
import IntegrationsPage from "../page_objects/SettingsPage/integrationsPage";
import TeamPage from "../page_objects/SettingsPage/teamPage";
import BrandingPage from "../page_objects/SettingsPage/brandingPage";
import simulatedSession from "../page_objects/SimulatedSession/simulatedSession";
import meetingRoomPage from "../page_objects/MeetingRoom/meetingRoomPage";
import archivedPage from "../page_objects/Events/archivedPage";
import testUtils from "../page_objects/testUtils";
import generalPage from "../page_objects/SettingsPage/generalPage";
import billingPage from "../page_objects/SettingsPage/billingPage";
import starterSignUpPage from "../page_objects/SignUpPage/starterSignUpPage";
import integrationsPage from "../page_objects/SettingsPage/integrationsPage";
import newIntegrationPage from "../page_objects/NewIntegration/newIntegrationPage";
import eventPage from "../page_objects/Events/eventPage";




//--------ARCHIVE EVENT ----------//

When(/^User clicks on "Archive" option$/, {}, () => {
  archivedPage.clickOnArchiveButton();
})


When(/^User clicks on "Yes Archive" button$/, {}, () => {
  archivedPage.clickOnYesArchiveButton();
})

When(/^User clicks on event menu option$/, {}, () => {
  archivedPage.clickOnEventMenuDropDown();
})


When(/^Select event from list (.*)$/, {}, (groupName) => {
  HomePage.openEventsTab();
  archivedPage.checkAndArchivedDuplicateEvents(groupName);
})


When(/^User click on delte event button$/, {}, () => {
  archivedPage.clickOnDeleteEventButton();
  $("//button[@class='ant-btn ant-btn-primary']").click();
})

When(/^User click on unarchive button$/, {}, () => {
  archivedPage.clickUnarchiveButton();

})


//-------------Simulated Session------------//


When(/^User clicks on "Join Room" button under welcome screen for simulated Event$/, {}, () => {
  EventPage.switchToWindowNewTab();
  EventPage.clickOnJoinRoomBtnUnderJoin();

})
When(/^User clicks on "Join Room" button$/, {}, () => {
  simulatedSession.clickOnjoinRoomButton();

})

When(/^The simulated video ends$/, {}, () => {
  const emptyMessage = $("//div[@class='stage-area-empty-message']");
  emptyMessage.waitForDisplayed({ timeout: 50000 });
  if (emptyMessage.isDisplayed() === true) {
    console.log("Simulated video ended successfully");

  } else {
    throw new Error("simulated video is still displaying ")
  }

})

When(/^User clicks on simulated event$/, {}, () => {
  try {
    const frame = $("//iframe[@name='intercom-tour-frame']");
    browser.switchToFrame(frame);
    $("//div[@class='intercom-tour-step-header']//span").click();
  } catch (error) {

  }
  simulatedSession.clickOnSimulatedEvent();

})

/*------------Sttings page code----------------*/

When(/^User click on confirmation and Reminder Emails button (.*)$/, {}, (email) => {

  if (email === 'Enable') {
    BrandingPage.enableEmailSwitch();
  } else if (email === 'Disable') {
    BrandingPage.disableEmailSwitch();
  }
  else {
    throw new Error('Please Enter correct value in feature Exaples: Enable OR Disble')
  }

})


When(/^User click on Webinar Room button (.*)$/, {}, (webinarRoom) => {

  if (webinarRoom === 'Enable') {
    BrandingPage.enableroomswitcher();
  } else if (webinarRoom === 'Disable') {
    BrandingPage.disableroomswitcher();
  }
  else {
    throw new Error('Please Enter correct value in feature Exaples: Enable OR Disble')
  }

})

When(/^User Enable Pages button (.*)$/, {}, (pages) => {

  if (pages === 'Enable') {
    BrandingPage.enabledPageSwitch();
  } else if (pages === 'Disable') {
    BrandingPage.disablePageSwitch();
  }
  else {
    throw new Error('Please Enter correct value in feature Exaples: Enable OR Disble')
  }
})


When(/^User click on removed added user$/, {}, () => {
  TeamPage.clickOnRemoveTeamButton();

})

When(/^User clicks on "ADD NEW" button$/, {}, () => {

  TeamPage.clickOnAddNewTeamMemberButton();
})

When(/User clicks on "API" Tab/, {}, () => {
  SettingsPage.clickOnApiTab();
})

When(/^User clicks on "Branding" Tab$/, {}, () => {
  SettingsPage.clickOnBrandingTab();
});


When(/^User clicks on "General" Tab$/, {}, () => {
  SettingsPage.clickOnGeneralTab();
});


When(/^User Clicks on "Change Password" Button$/, {}, () => {
  ProfilePage.clickOnChangePasswordButton();
});

When(/^User Clicks on "Save Settings" Button$/, {}, () => {
  ProfilePage.clickOnSaveSettingsButton();
});


When(/^User click on profile dropdown and select settings options$/, {}, () => {

  HomePage.clickOnUserMenuButton();
  HomePage.openSettingsOption();

});


When(/^User click on "Profile" tab$/, {}, () => {
  SettingsPage.clickOnProfileTab();
  browser.pause(3000)
  SettingsPage.checkProfileHeaderIsDisplayed();

});

When(/^User click on "General" tab$/, {}, () => {
  SettingsPage.clickOnGeneralTab();
});

When(/^User click on "Branding" tab$/, {}, () => {
  SettingsPage.clickOnBrandingTab();
});

When(/^User click on "Billing" tab$/, {}, () => {
  SettingsPage.clickOnBillingTab();
});


When(/^User click on "API" tab$/, {}, () => {
  SettingsPage.clickOnApiTab();
});


When(/^User click on "Integrations" tab$/, {}, () => {
  SettingsPage.clickOnIntegrationTab();
});


When(/^User click on "Team" tab$/, {}, () => {
  SettingsPage.clickOnTeamTab();
  browser.pause(1500);
});

When(/^User click on "Email settings" tab$/, {}, () => {
  SettingsPage.clickOnemailSettingsTab();
});

When(/^User Clicks on "Mailchimp" icon$/, {}, () => {
  IntegrationsPage.clickOnMailchimpIcon();
  IntegrationsPage.removePreAddedMailchimp();
});

When(/^User enters Mailchimp (.*) Username and Password$/, {}, (loginHost) => {
  IntegrationsPage.fillMailchimpLoginForm(loginHost)
});
When(/^User clicks on Login button$/, {}, () => {
  IntegrationsPage.clickOnMailchimpLoginButton();
});

When(/^User Clicks on "Allow" button$/, {}, () => {
  IntegrationsPage.clickOnAllowButton();
});

When(/^User Clicks on "Zapier" icon$/, {}, () => {
  IntegrationsPage.clickOnZapierIcon();
  IntegrationsPage.removePreAddedZapier();
});

When(/^User enters (.*) Emails and Password field$/, {}, (login) => {
  IntegrationsPage.fillZapierLoginForm(login);
});

When(/^User clicks on continue button$/, {}, () => {
  IntegrationsPage.clickOnZapierContinueButton();
});


When(/^User Clicks on "Infusionsoft" icon$/, {}, () => {
  IntegrationsPage.clickOnInfusionSoftIcon();
  IntegrationsPage.removePreAddedInfusionsoft();

});


When(/^User clicks on infusionsoft LogIn button$/, {}, () => {
  IntegrationsPage.clickOnInfusionsoftLoginButton();

});


When(/^User enters (.*) Email address and Password in infusionsoft login form$/, {}, (login) => {
  IntegrationsPage.fillInfusionSoftLoginForm(login);
});

When(/^Clicked on Allow button$/, {}, () => {
  IntegrationsPage.clickOnInfusionSoftAllowButton();

});

When(/^User Clicks on "Aweber" icon$/, {}, () => {
  IntegrationsPage.clickOnAweberIcon();
  IntegrationsPage.removePreAddedAweber();

});

When(/^User enters (.*) Login Name and Password in aweber login form$/, {}, (login) => {
  IntegrationsPage.fillAweberLoginForm(login);

});

When(/^User clicks on Allow Access button$/, {}, () => {
  IntegrationsPage.clickOnAllowAccessButton();


});


When(/^User Clicks on "Marketo" icon$/, {}, () => {
  IntegrationsPage.clickOnMarketoIcon();
  IntegrationsPage.removePreAddedMarketo();

});

When(/^User enters (.*) Client Id , Client secret, REST API Endpoint and REST API Identity$/, {}, (login) => {
  IntegrationsPage.fillMarketoLoginForm(login);

});


When(/^User clicks on Connect button$/, {}, () => {
  IntegrationsPage.clickOnConnectButton();

});


When(/^User Clicks on "ConvertKit" icon and enter API Key and API Secret in ConvertKit pop up$/, {}, () => {
  SettingsPage.clickOnApiTab();
  var apiKey = IntegrationsPage.getApiKeyData();
  var apiKeySecret = IntegrationsPage.getKeySecret();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.clickOnConvertKitIcon();
  IntegrationsPage.removePreAddedConvertKit();


  if (IntegrationsPage.popupTitleIsDisplayed() === true) {
    console.log("Convertkit popup is displaying");
  } else {
    throw new EventPage("Convetkit popup is not displayed");
  }

  const keyField = $("//input[@data-bind='value: apiKey']");
  keyField.setValue(apiKey);
  const keySecretField = $("//input[@data-bind='value: apiSecret']");
  keySecretField.setValue(apiKeySecret);

});


When(/^User Clicks on "Market Hero" icon and enters API Token in Market Hero pop up$/, {}, () => {
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

});


When(/^User Clicks on "ActiveCampaign" icon and enters (.*) API url and API key in ActiveCampaign pop up$/, {}, (login) => {
  SettingsPage.clickOnApiTab();
  var apiKey = IntegrationsPage.getApiKeyData();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.clickOnActiveCampaignIcon();
  IntegrationsPage.removePreAddedActiveCampaign();

  if (IntegrationsPage.popupTitleIsDisplayed() === true) {
    console.log("Active campaign popup is displaying");
  } else {
    throw new EventPage("Active campaign popup is not displayed");
  }
  IntegrationsPage.fillActiveCampaignUrlField(login);
  const keyField = $("//input[@data-bind='value: apiSecret']");
  keyField.setValue(apiKey);

});

When(/^User Clicks on "Getresponse" icon User enters API Token in Getresponse pop up$/, {}, () => {
  SettingsPage.clickOnApiTab();
  var apiKey = IntegrationsPage.getApiKeyData();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.clickOnGetresponseIcon();
  IntegrationsPage.removePreAddedGetresponse();

  if (IntegrationsPage.popupTitleIsDisplayed() === true) {
    console.log("Getresponse popup is displaying");
  } else {
    throw new EventPage("Getresponse popup is not displayed");
  }

  const keyField = $("//input[@data-bind='value: apiKey']");
  keyField.setValue(apiKey);

});

When(/^User Clicks on "Drip" icon and user enters API Token in Drip pop up$/, {}, () => {
  SettingsPage.clickOnApiTab();
  var apiKey = IntegrationsPage.getApiKeyData();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.clickOnDripIcon();
  IntegrationsPage.removePreAddedDrip();

  if (IntegrationsPage.popupTitleIsDisplayed() === true) {
    console.log("Drip popup is displaying");
  } else {
    throw new EventPage("Drip popup is not displayed");
  }

  const keyField = $("//input[@data-bind='value: apiKey']");
  keyField.setValue(apiKey);

});

When(/^User Clicks on "Ontraport or Officeautopilot" icon and User enters App ID and API KEY in Ontraport or Officeautopilot pop up$/, {}, () => {
  SettingsPage.clickOnApiTab();
  var apiKey = IntegrationsPage.getApiKeyData();
  var apiID = IntegrationsPage.getKeySecret();
  SettingsPage.clickOnIntegrationTab();
  IntegrationsPage.clickOnOntraportIcon();
  IntegrationsPage.removePreAddedOntraport();

  if (IntegrationsPage.popupTitleIsDisplayed() === true) {
    console.log("Ontraport or Officeautopilot popup is displaying");
  } else {
    throw new EventPage("Ontraport or Officeautopilot popup is not displayed");
  }

  const keyField = $("//input[@data-bind='value: apiKey']");
  keyField.setValue(apiID);

  const apiKeyFieldField = $("//input[@data-bind='value: apiSecret']");
  apiKeyFieldField.setValue(apiKey);

});


When(/^Clicked on Zaps$/, {}, () => {
  IntegrationsPage.clickOnZapsOption();

});

When(/^User open zapier url (.*)$/, {}, (login) => {
  IntegrationsPage.openZapierInNewTab(login);

});

When(/^Clicked on Edit option of dropdown$/, {}, () => {
  IntegrationsPage.clickOnOpenMenuButton();
  IntegrationsPage.clickOnEditOption();
});


When(/^User clicks on Edit button of Trigger tab$/, {}, () => {
  IntegrationsPage.clickOnEditButton();
});

When(/^User clicks on "choose app & event" button$/, {}, () => {
  IntegrationsPage.clickChooseAppAndEventButton();
});
When(/^User selects Demio as App$/, {}, () => {
  IntegrationsPage.clickChooseAnAppButton();
  IntegrationsPage.selectDemioAppOption();
});

When(/^User Clicks on "continue" Button$/, {}, () => {
  IntegrationsPage.clickcontinueButtonUnderZabPage();

});

When(/^User selects a Demio Account (.*)$/, {}, (demioAccount) => {
  IntegrationsPage.selectDemioAccount(demioAccount);

});

When(/^User selects New Webinar Registrant as Event$/, {}, () => {
  $("//input[@placeholder='Choose an event']").click();
  browser.pause(1000);
  $("span[title='1 .  New Webinar Registration in Demio']").click();


});

When(/^Clicks on setUp trigger tab$/, {}, () => {
  IntegrationsPage.clickOnSetUpTriggerTab();

});

When(/^User selects the desired event (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(3000);
  const eventName = data[0];
  IntegrationsPage.clickOnEventDropdown();
  IntegrationsPage.searchEventFromList(eventName);

});

When(/^User selects Google Sheets as App$/, {}, () => {
  $("//div//span[contains(text(),'Google Sheets')]").click();
  IntegrationsPage.selectGoogleSheetAppOption();


});


When(/^User selects Create Spreadsheet Row as event$/, {}, () => {
  $("//input[@placeholder='Choose an event']").click();
  browser.pause(1000);
  $("span[title='2 .  Update Spreadsheet Row in Google Sheets']").click();

});

When(/^User selects Create Spreadsheet Row as event$/, {}, () => {
  $("//input[@placeholder='Choose an event']").click();
  browser.pause(1000);
  $("span[title='2 .  Update Spreadsheet Row in Google Sheets']").click();

});

When(/^User selects Spreadsheet (.*) ,worksheet (.*),row and demio automation scripts$/, {}, (spreadsheet, worksheet) => {
  IntegrationsPage.selectSpreadSheet(spreadsheet);
  IntegrationsPage.selectWorkSheet(worksheet);

});
When(/^User clicks on "Test and Continue" button$/, {}, () => {
  IntegrationsPage.clickOnTestAndContinueButton();

});

When(/^User clicks on Turn On Zap button$/, {}, () => {
  IntegrationsPage.turnOnZapButton();

});

When(/^User turns on the Aweber integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnAweberToggleButton();
  browser.pause(4000);
});


When(/^User selects (.*) option from choose list dropdown$/, {}, (list) => {
  IntegrationsPage.clickChooseListDropDown();
  IntegrationsPage.selectListOption(list);
});

When(/^User selects option (.*) from attendees dropdown$/, {}, (attendee) => {
  browser.pause(2000);
  IntegrationsPage.clickOnAttendeeDropDown();
  browser.pause(2000);
  IntegrationsPage.selectAttendeesOption(attendee);
  browser.pause(2000);

});

When(/^User selects List option (.*)$/, {}, (listOption) => {
  IntegrationsPage.clickOnListOptionDropDown();
  IntegrationsPage.selectListOption(listOption);
});

When(/^User clicks on Save integation button$/, {}, () => {
  IntegrationsPage.clickOnSaveIntegrationButton();

});

When(/^User selects option from No shows dropdown$/, {}, () => {
  console.log("By default Do Nothing is selected");

});
When(/^User turns on the Mailchimp integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnMailchimpToggleButton();
  browser.pause(4000);
});

When(/^User selects option from choose list dropdown (.*)$/, {}, (chooseListOption) => {
  IntegrationsPage.clickOnChooseListOptionsDropDown();
  IntegrationsPage.selectChooseListOption(chooseListOption);

});

When(/^User selects option (.*) from select list options dropdown$/, {}, (selectListOption) => {
  IntegrationsPage.clickOnSelectListDropDownOption();
  IntegrationsPage.selectOptionfromSelectList(selectListOption);

});
When(/^User select (.*) from dropdown list$/, {}, (selectAnOption) => {

  FreeTrialSignUpPage.clickOnSelectAnOptionField();
  $("//li[@name='" + selectAnOption + "']").click();
  browser.pause(3000);
});

When(/^For access my account user select (.*) from dropdown list$/, {}, (optionForAccess) => {
  FreeTrialSignUpPage.clickOnSelectAnOptionField();
  $("//li[@name='" + optionForAccess + "']").click();
  browser.pause(3000);
});
When(/^User turns on the Markethero integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnMarketheroToggleButton();
  browser.pause(4000);
});

When(/^User enters name of the Tag (.*)$/, {}, (tag) => {
  IntegrationsPage.fillTagField(tag);
});

When(/^User Clicks on Ok button$/, {}, () => {
  IntegrationsPage.clickOnOkButton();
});

When(/^User enters Tag Name field (.*)$/, {}, (tagName) => {
  IntegrationsPage.fillTagNameField(tagName);
});

When(/^User selects option (.*) from Registrants dropdown$/, {}, (registrant) => {
  IntegrationsPage.clickOnRegiatratntsDropdown();
  IntegrationsPage.selectRegistrantsOption(registrant);
});

When(/^User turns on the Marketo integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnMarketoToggleButton();
  browser.pause(4000);
});


When(/^User selects option (.*) from Choose list dropdown for Marketo integration$/, {}, (chooseList) => {
  IntegrationsPage.clickOnMarketoChooseList();
  IntegrationsPage.selectMarketoChooseListOption(chooseList);
});

When(/^User turns on the Infusionsoft integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnInfusionsoftToggleButton();
  browser.pause(4000);
});

When(/^User selects option from Choose (.*) Category dropdown$/, {}, (category) => {
  IntegrationsPage.clickOnChooseCategoryDropdown();
  IntegrationsPage.selectChooseCategoryOption(category);
});

When(/^User selects option from Choose (.*) Tag dropdown$/, {}, (tag) => {
  IntegrationsPage.clickOnChooseTagDropdown();
  IntegrationsPage.selectChooseTagOption(tag);
  browser.pause(1000);
});


When(/^User turns on the Ontraport integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnOntarportToggleButton()
  browser.pause(4000);
});


When(/^User turns on the Activecampaign integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnActivecampaignToggleButton();
  browser.pause(4000);
});
When(/^User selects option from Choose Tag dropdown (.*)$/, {}, (chooseTag) => {
  IntegrationsPage.clickOnChooseListOptionsDropDown();
  browser.pause(2000);
  IntegrationsPage.selectChooseListOption(chooseTag);

});

When(/^User selects tag (.*) from Tags dropdown$/, {}, (tag) => {
  browser.pause(1000);
  IntegrationsPage.clickOnTagsDropdown();
  browser.pause(1000);
  IntegrationsPage.selectTagOption(tag);
  browser.pause(1000);

});

When(/^User turns on the Getresponse integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnGetresponseTogglebutton();
  browser.pause(4000);
});


When(/^User turns on the ConvertKit integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnConvertKitToggleButton();
  browser.pause(4000);
});

When(/^User turns on the Drip integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnDripToggleButton();
  browser.pause(4000);
});

When(/^User selects option (.*) from Select Account dropdown$/, {}, (account) => {
  IntegrationsPage.clickOnSelectAccountDropdown();
  IntegrationsPage.selectAccountFromDropdown(account);

});

When(/^User selects option (.*) from Select Integrations dropdown$/, {}, (integration) => {
  IntegrationsPage.clickOnSelectIntegrationDropdown();
  IntegrationsPage.selectIntegrationOption(integration);

});

When(/^User selects option (.*) from Select Campaign dropdown$/, {}, (campaign) => {
  IntegrationsPage.clickOnSelectCampaignDropdown();
  IntegrationsPage.selectCampaignOption(campaign);

});


When(/^User selects option from Choose Campaign dropdown (.*)$/, (chooseCampaign) => {
  IntegrationsPage.clickOnChooseCampaignDropdown();
  IntegrationsPage.clickOnChooseCampaignOption(chooseCampaign);
});
/*----------End Settings page code-------------*/



/*----------Start Login page code-------------*/

When(/^User login with as (.*)$/, {}, (userName) => {
  LoginPage.logInWithUser(userName);

});
When(/^User fill the userName field name as (.*)$/, {}, (userName) => {
  LoginPage.fillUserNameField(userName);
});

When(/^User fill the password filed as (.*)$/, {}, (password) => {
  LoginPage.fillPasswordField(password);
});

When(/^User click on "Login" button$/, {}, () => {
  LoginPage.clickOnLoginButton();
});

When(
  /^switch to user as (.*) with password (.*)$/,
  {},
  (userName, password) => {
    LoginPage.openLoginPage();
    LoginPage.fillUserNameField(userName);
    LoginPage.fillPasswordField(password);
    LoginPage.clickOnLoginButton();
    HomePage.valiadteHomePage();
  }
);

When(/^login with user (.*)$/, {}, (userB) => {
  LoginPage.logInWithUser(userB);
});
When(/^User click on "Forgot your password" link$/, {}, () => {
  LoginPage.clickOnForgotPasswordLink();
});

When(/^Click on "Reset My Password" button$/, {}, () => {

  LoginPage.clickOnResetPasswordButton();
});

When(/^User add "Email" (.*)$/, {}, (email) => {
  var data = TestUtils.getUserCredetials(email); //Retrive data from excel
  browser.pause(3000);
  const userid = data[0];
  const password = data[1];
  browser.pause(2000);
  LoginPage.fillUserNameField(userid);

})



/*----------End of Login page code-------------*/




/*-------------------HomePage-------------------*/

When(/^Go to top-right corner of Header$/, {}, () => {

  HomePage.demioLogoIsDisplay();
});

When(/^Click on "Demio" logo$/, {}, () => {
  HomePage.clickOnDemioIcon();

});

When(/^Go to Header$/, {}, () => {

  HomePage.demioLogoIsDisplay();
});



When(/^Go to top-left corner$/, {}, () => {
  HomePage.demioLogoIsDisplay();
});

When(/^Click on "Event" tab$/, {}, () => {
  HomePage.openEventsTab();

});


When(/^Click on "Help" dropdown$/, {}, () => {
  HomePage.clickOnHelpButton();
});

When(/^Click on "User Profile" dropdown$/, {}, () => {
  HomePage.clickOnUserMenuButton();
});

When(/^Click on "Schedule" field$/, {}, () => {
  HomePage.openSeheduleTab();
  HomePage.openScheduleDropDown();
});


When(/^Scroll down to area where events display$/, {}, () => {
  HomePage.openSeheduleTab();

});
When(/^Select any option (.*)$/, {}, (option) => {
  HomePage.selectScheduleDropDownOption(option);
  browser.pause(8000);

});

/*----------Start Free Trial Sign Up page code-------------*/


When(/^User click on "sign up for free trial" link$/, {}, () => {
  FreeTrialSignUpPage.clickOnFreeTrialLink();
  browser.pause(5000);
});

When(/^User fill the full name field as (.*)$/, {}, (fullName) => {


  FreeTrialSignUpPage.fillFullNameField(fullName);
  browser.pause(300);
});

When(/^User fill the name field as (.*) and work email as (.*) field$/, {}, (fullName, email) => {
  var data = TestUtils.getEmailForRegistration(email); //Retrive data from excel
  browser.pause(6000);
  const userName = data[0];
  const emailId = data[1];

  var rNo = Math.floor(Math.random() * 999998);
  var uName = fullName + rNo;
  var emailAddress = emailId.replace("@gmail.com", rNo + "@gmail.com");


  FreeTrialSignUpPage.fillFullNameField(uName);
  FreeTrialSignUpPage.fillWorkEmailField(emailAddress);
  browser.pause(300);

});
When(/^User fill the set a password field as (.*)$/, {}, (password) => {
  FreeTrialSignUpPage.fillSetAPasswordField(password);
  browser.pause(300);
});

When(/^User click on "Create My Account" button$/, {}, () => {
  FreeTrialSignUpPage.clickOnCreateMyAccountButton();
  browser.pause(20000);
});

When(/^User fill the company name field as (.*)$/, {}, (companyName) => {
  FreeTrialSignUpPage.fillCompanyNameField(companyName);

});

When(/^User click on "Continue" button$/, {}, () => {
  FreeTrialSignUpPage.clickOnContinueButton();
  browser.pause(200);
});

When(/^User select "No, we're just starting out" option$/, {}, () => {
  FreeTrialSignUpPage.clickNoWeAreJustStartingOutButton();
  browser.pause(200);
});

When(/^User click on "Ready to launch" button$/, {}, () => {
  FreeTrialSignUpPage.clickReadyToLaunchButton();
  browser.pause(200);
});

When(/^User click on "Access My Account" button$/, {}, () => {
  FreeTrialSignUpPage.clickAccessMyAccountButton();
  browser.pause(5000);
});

/*----------End of Free Trial Sign Up page code-------------*/





/*----------Start Starter Sign Up page code-------------*/
When(/^User enters "First name" (.*)$/, {}, (firstName) => {
  StarterSignUpPage.fillFirstNameField(firstName);
  browser.pause(2000);
});

When(/^User enters "Last name" (.*)$/, {}, (lastName) => {
  StarterSignUpPage.fillLastNameField(lastName);
  browser.pause(2000);
});

When(/^User enters "email" (.*)$/, {}, (email) => {
  StarterSignUpPage.fillEmailField(email);
  browser.pause(2000);
});

When(/^User enters "card holders name" (.*)$/, {}, (cardHolderName) => {
  StarterSignUpPage.fillCardHolderNameField(cardHolderName);
  browser.pause(2000);
});

When(/^User enters "card number" (.*)$/, {}, (cardNumber) => {
  // const iframe = $("(//iframe[@allow='payment *'])[1]");
  // browser.switchToFrame(iframe);
  browser.pause(5000);
  StarterSignUpPage.fillCardNumberField(cardNumber);
  browser.pause(5000);
});

When(/^User enters "card Expiry date" month (.*) year (.*)$/, {}, (expiryMonth, expiryYear) => {
  StarterSignUpPage.selectExpiryMonth(expiryMonth);
  StarterSignUpPage.selectExpiryYear(expiryYear);
  browser.pause(2000);
});

When(/^User enters "cvv or cvv2" (.*)$/, {}, (cvvData) => {
  StarterSignUpPage.fillCvvField(cvvData);

});

When(/^User clicks on "Create My Account" button$/, {}, () => {
  browser.deleteCookies();

  StarterSignUpPage.clickOnCreateMyAccountButton();
  browser.pause(8000);

});

When(/^User enters "Password" (.*)$/, {}, (password) => {
  StarterSignUpPage.fillPasswordField(password);

});

When(/^User enters "Confirm Password" (.*)$/, {}, (confirmPassword) => {
  StarterSignUpPage.fillConfirmPasswordField(confirmPassword);

});

When(/^User clicks on "Set Password" button$/, {}, () => {
  StarterSignUpPage.clickOnSetPasswordButton();

});

/*----------End of starter Sign Up page code-------------*/



/*----------Start Event page code-------------*/

When(/^Go to Insigts area$/, {}, () => {
  AutomatedPage.clickOnInsightsButton();
});
When(/^Click on "Activity" option$/, {}, () => {

  EventPage.clickOnActivityTab();
});

When(/^Go to Event Summary page$/, {}, () => {
  EventPage.openSummaryTab();

});

When(/^Go to tabs below Header$/, {}, () => {
  EventPage.goToTabsBelowHeader();

});

When(/^Click on "Add New Event" button$/, {}, () => {
  EventPage.clickOnAddNewEventButton();

});

When(/^click On "Standard" option$/, {}, () => {
  StandardPage.openAddNewStandardEvent();

});

When(/^Click On "Series" option$/, {}, () => {
  SeriesPage.openAddNewSeriesEvent();
});

When(/^Click On "Automated" option$/, {}, () => {
  AutomatedPage.openAddNewAutomatedEvent();

});


When(/^Go to "Event Name" field$/, {}, () => {
  EventPage.goToEventNameField();

});

When(/^Add data in automated "Event Name" field (.*)$/, {}, (eName) => {

  var data = TestUtils.getAutomatedEventData(eName); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.fillEventNameField(eventName);


});

When(/^Add standard event name in "Event Name" field (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.fillEventNameField(eventName);

})



When(/^click on "Continue button"$/, {}, () => {
  EventPage.clickOnContinueButton();

});

When(/^Add data to be searched (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.addDataInSearchField(eventName);

});

When(/^Search and Selects created event (.*)$/, {}, (eventName) => {
  EventPage.addDataInSearchField(eventName);
  EventPage.selectSearchedEvent(eventName);
});

When(/^add missmatched data in search field (.*)$/, {}, (eventName) => {
  EventPage.addDataInSearchField(eventName);

});


When(/^User selects "Event Host"$/, {}, () => {
  if (EventPage.eventHostNameIsDisplayed() == true) {
    console.log("event host is selected by default");
  } else {
    throw new Error("HOST IS NOT SELECTED BY DEFAULT ,NEED TO SELECT EVENT HOST");
  }

});

When(/^Click On "Standard" tab$/, {}, () => {
  StandardPage.openStandardTab();

});

When(/^Click On "Series" tab$/, {}, () => {
  SeriesPage.openSeriesTab();
});

When(/^Click On "Automated" tab$/, {}, () => {
  AutomatedPage.openAutomatedTab();

});

When(/^User clicks on "Save&Close" button$/, {}, () => {
  EventPage.clickOnSaveAndCloseButton();
  browser.pause(2000);
});

When(/^Add data in standard "Event Name" field (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.fillEventNameField(eventName);

});
When(/^User selects "Live event" option$/, {}, () => {
  StandardPage.openAddNewStandardEvent();

});
When(/^Enter valid event title (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.fillEventNameField(eventName);

});

When(/^Add data in "Event Name" field (.*)$/, {}, (eventName) => {
  EventPage.fillEventNameField(eventName);

});
/*----------End of Event page code-------------*/


/*----------Start Standard Event page code-------------*/


When(/^User select future time from select time input field$/, () => {
  var time = TestUtils.generateCurrentTime();
  var timeTwo = testUtils.getcTime();
  console.log("TIME: " + time)
  console.log("TIME2: " + timeTwo)

  return true;
});



When(/^User clicks on "Standard" option$/, {}, () => {
  StandardPage.openAddNewStandardEvent();

});

When(/^User Clicks on "Schedule this Event" button$/, {}, () => {
  EventPage.clickScheduleThisEventButton();

});

When(/^For recuring session User Clicks on "Schedule this Event" button$/, {}, () => {
  const button = $("//button[@class='sessions-list-schedule-button']");
  button.waitForDisplayed({ timeout: 10000 });
  if (button.isDisplayed() === true) {
    button.click();
  } else {
    throw new Error("Schedule this event button is not displayed");
  }
});

When(/^For new session User Clicks on "Schedule this Event" button$/, {}, () => {
  const button = $("//button[@class='sessions-list-schedule-button']");
  button.waitForDisplayed({ timeout: 10000 });
  if (button.isDisplayed() === true) {
    button.click();
  } else {
    throw new Error("Schedule this event button is not displayed");
  }
});

When(/^User selects current or future date$/, {}, () => {
  EventPage.selectFutureDate();
});

When(/^User selects future time (.*)$/, {}, (futureTime) => {
  EventPage.selectFutureTime(futureTime);
});

When(/^User clicks on "Add to Event schedule" button$/, {}, () => {
  browser.pause(1000);
  EventPage.clickAddToEventScheduleButton();
  browser.pause(3000);


});
When(/^User click on "Recurring Times" option$/, {}, () => {
  browser.pause(3000);
  EventPage.clickOnRecurringTimes();
  browser.pause(1000);
});

When(/^User selects option from "How often" dropdown (.*)$/, {}, (option) => {
  EventPage.clickOnHowOftenButton();
  EventPage.selectHowOftenOption(option);

  browser.pause(5000);
});

When(/^User Clicks on "Share" button$/, {}, () => {
  EventPage.clickOnShareTab();
});

When(/^User Clicks on "Embed options"$/, {}, () => {
  EventPage.clickOnEmbedOptionsTab();

});


When(/^User unmarks the "Responive" checkbox$/, {}, () => {
  EventPage.unMarkResponsiveCheckBox();

});

When(/^User add new text in button text field (.*)$/, {}, (buttonText) => {
  EventPage.addNewButtonText(buttonText);

});

When(/^User clicks "Popover embed" option$/, {}, () => {
  EventPage.clickOnPopoverEmbedOption();

});

When(/^User Clicks on Register button$/, {}, () => {
  EventPage.clickOnPreviewRegisterButton();

});

When(/^User clicks on "Register" button under popup form$/, {}, () => {
  EventPage.clickOnPopupFormRegisterButton();

});

When(/^User unmarks the "Responive" checkbox under popover embed screen$/, {}, () => {
  EventPage.unMarkPopoverResponsiveCheckBox();

});

When(/^User update text in button text field (.*) under popover embed screen$/, {}, (buttonText) => {
  EventPage.addNewButtonTextInPopover(buttonText);

});

When(/^User update text in popover button text field (.*)$/, {}, (buttonText1) => {
  EventPage.addNewPopoverButtonText(buttonText1);

});

When(/^User Clicks on "Customize" option$/, {}, () => {
  EventPage.clickOnCustomizeTab();

});


When(/^User clicks on "Edit Form Fields" button$/, {}, () => {
  EventPage.clickOnEditFormFieldButton();

});

When(/^User clicks on "Settings"$/, {}, () => {
  EventPage.clcikOnSettingsButton();

});


When(/^User Clicks on "Customize" button$/, {}, () => {
  EventPage.clickOnCustomizeButton();
  browser.pause(2000);
});
When(/^User Clicks on "Registration" option$/, {}, () => {
  EventPage.clickOnRegistrationTab();

});
When(/^User Clicks on "Template dropdown"$/, {}, () => {
  EventPage.clickOnTemplateDropDown();

});

When(/^User Clicks on "Branding" dropdown$/, {}, () => {
  EventPage.clickOnBrandingDropDown();
  browser.pause(500);

});

When(/^On replay cusomize screen User Clicks on "Branding" dropdown$/, {}, () => {
  EventPage.ClickBrandingDropDownOnReplayScreen();

});

When(/^User clicks on "Elements" dropdown$/, {}, () => {
  EventPage.clickOnElementsDropDown();

});

When(/^User clicks on "Social dropdown"$/, {}, () => {
  EventPage.clickOnSocialDropDown();

});


When(/^User Clicks on "ADD ANOTHER FIELD" option$/, {}, () => {
  EventPage.clickOnAddAnotherField();

});

When(/^User clicks on "Select Field Option" dropdown button$/, {}, () => {
  EventPage.clickOnSelectFieldDropDown();

});

When(/^User selects any field option from dropDown list (.*)$/, {}, (field) => {
  EventPage.selectFieldFromDropDown(field);

});

When(/^User clicks on "ADD FORM FIELD" Button$/, {}, () => {
  EventPage.clickOnAddFormFieldButton()

});

When(/^User selects "Create a Custom Field" option from dropdown$/, {}, () => {

  EventPage.clickOnCreateCustomField();

});

When(/^User clicks on "Select Field Type" dropdown option$/, {}, () => {
  EventPage.clickOnSelectFieldTypeButton()

});

When(/^User clicks on template menu button$/, {}, () => {
  EventPage.clickOnTemplateMenuButton();

});



When(/^User clicks on "SAVE SUBHEADLINE" button$/, {}, () => {
  EventPage.clickOnSaveSubheadlineButton();

});

When(/^User turns on "Subheadline" button$/, {}, () => {
  EventPage.turnOnSubheadlineButton();
  browser.pause(1000);
});
When(/^User turns on "Video" button$/, {}, () => {
  EventPage.turnOnVideoButton();
  EventPage.clickOnVideoToggleButton();
  EventPage.turnOnVideoButton();


});

When(/^User clicks on "SAVE VIDEO" button$/, {}, () => {
  EventPage.clickOnSaveVideoButton();

});

When(/^User turns on "Description" button$/, {}, () => {
  EventPage.turnOnDescriptionButton();

});

When(/^User clicks on "SAVE DESCRIPTION" button$/, {}, () => {
  EventPage.clickOnSaveDescriptionButton();

});
When(/^User turns on "Featured Presenters" button$/, {}, () => {
  EventPage.turnOnFeaturedPresentersButton();

});

When(/^User clicks On "Add Presenter" button$/, {}, () => {
  EventPage.clickOnAddPresenterButton();

});


When(/^User clicks on "Edit Settings" button$/, {}, () => {
  browser.pause(500);
  EventPage.clickOnEditSettingsButton();
  browser.pause(500);
});


When(/^User clicks on "SAVE OPEN GRAPH" button$/, {}, () => {
  browser.pause(4000);
  EventPage.clickOnSaveOpenGraphButton();

});


When(/^User clicks on dropdown along side JOIN ROOM button$/, {}, () => {
  EventPage.openSessionOptionsList();


});

When(/^User clicks on "View registration page" option$/, {}, () => {
  browser.pause(3000);
  EventPage.clickOnViewRegistrationPage();

});

When(/^User turns on the "Session Registration Limit"$/, {}, () => {
  EventPage.turnOnSessionRegLimitButton();

});

When(/^User clicks on "Done" button$/, {}, () => {
  browser.pause(3000);
  EventPage.clickOnDoneButton();
  browser.pause(500);

});


When(/^User Clicks on "Email Notifications" option$/, {}, () => {
  EventPage.clickOnEmailNotifications();

});

When(/^User clicks on "Save notification" button$/, {}, () => {
  EventPage.clickOnSaveNotificationButton();

});

When(/^Click on any "edit email" option$/, {}, () => {
  EventPage.clickOnInstantEditEmailOption();

});

When(/^User Clicks on "General" option$/, {}, () => {
  EventPage.clickOnGeneralTab();

});

When(/^User clicks on "Event Timezone" dropdown button$/, {}, () => {
  EventPage.clickOnEventTimeZoneButton();

});

When(/^User clicks on "Event Language" dropdown button$/, {}, () => {
  EventPage.clickOnEventLanguageButton();

});


When(/^User Clicks on "Room" option$/, {}, () => {
  EventPage.clickOnRoomTab();

});

When(/^User clicks on "Presentation Materials" option$/, {}, () => {
  EventPage.clickOnPresentationMaterials();

});

When(/^User clicks on "Settings" option$/, {}, () => {
  browser.pause(1000);
  EventPage.clickOnSettingOption();

});

When(/^User Clicks on "ADD A RESOURCE" button$/, {}, () => {
  EventPage.clickOnAddAResourceButton();

});

When(/^User clicks on "Type of Resource" dropdown$/, {}, () => {
  EventPage.clickOnTypeOfResourceDropDown();

});

When(/^User selects "Poll" option from dropdown list$/, {}, () => {
  EventPage.selectPollOption();

});

When(/^User clicks on "Add Another option" button$/, {}, () => {
  EventPage.clickOnAddAnotherOption();

});


When(/^User Clicks on "Add Resource" button$/, {}, () => {
  EventPage.clickOnAddResourceButton();

});

When(/^User selects "Handout" option from dropdown list$/, {}, () => {
  EventPage.selectHandoutOption();

});


When(/^User selects "Featured Action" option from dropdown list$/, {}, () => {
  EventPage.selectFeaturedActionOption();

});

When(/^User Clicks on "ADD A MATERIAL" button$/, {}, () => {
  EventPage.clickOnAddAMaterialOption();

});

When(/^User clicks on "Type Of Material" dropdown$/, {}, () => {
  EventPage.clickonTypeOfMaterialDropDown();

});

When(/^User selects "Slides" option from "Type of Material" dropdown$/, {}, () => {
  EventPage.selectSlidesOption();

});

When(/^User Click on "ADD MATERIAL" Button$/, {}, () => {
  EventPage.clickOnAddMaterialButton();
  browser.pause(3000);

});

When(/^User selects "Video" option from "Type of Material" dropdown$/, {}, () => {
  EventPage.selectVideoOption();

});


When(/^User turns on "Post-session Redirect" Button$/, {}, () => {
  EventPage.turnOnPostSessionRedirectToggle();

});

When(/^User Clicks on "Event Admins" option$/, {}, () => {
  EventPage.clickOnEventAdminsTab();

});

When(/^User clicks on "Select a role" dropdown$/, {}, () => {
  EventPage.clickOnSelectRoleDropDown();

});

When(/^User clicks on "Choose a member" dropdown$/, {}, () => {
  EventPage.clickOnChooseMemberDropDown();

});

When(/^User Clicks on "All Sessions" Button$/, {}, () => {
  EventPage.clickOnAllSessionButton();
  browser.pause(1000);

});


When(/^User Clicks on "Guest" tab$/, {}, () => {
  EventPage.clickOnGuestTab();

});

When(/^User clicks on "Select a role" dropdown for guest$/, {}, () => {
  EventPage.clickOnSelectRoleGuestDropdown();

});

When(/^For automated event user clicks on "Select a role" dropdown for guest$/, {}, () => {
  AutomatedPage.clickOnSelectRoleGuestDropdown();

});
When(/^User Clicks on "ADD ADMIN" Button$/, {}, () => {
  EventPage.clickOnAddAdminButton();

});



When(/^"Upcoming Session" is selected$/, {}, () => {
  EventPage.upcomingSessionIsSelected();

});

When(/^Search and select event for past session (.*)$/, {}, (event) => {
  var data = TestUtils.getStandardEventData(event); //Retrive data from excel
  browser.pause(6000);
  const searchEvent = data[0];
  EventPage.addDataInSearchField(searchEvent);
  EventPage.selectSearchedEvent(searchEvent);
});

When(/^"Past Session" is selected$/, {}, () => {
  EventPage.clickOnPastSessionOption();

});


When(/^Click on dropdown arrow in front of session$/, {}, () => {
  EventPage.clickOnSessionDropDown();

});



When(/^Click on "Cancel Session" option$/, {}, () => {
  EventPage.clickOnCancelSessionOption();

});

When(/^Click on "Yes,Confirm" button$/, {}, () => {
  EventPage.clickOnYesConfirmButton();

});


When(/^Add data in "First name" field (.*)$/, {}, (firstName) => {
  EventPage.addFirstNameFieldData(firstName);

});

When(/^Add data in "Email" field (.*)$/, {}, (email) => {
  EventPage.addRegistrationEmailField(email);

});

When(/^Click on "Register" button in register form$/, {}, () => {
  EventPage.clickOnRegisterButton();

});

When(/^Click on "Manage your Registration" Link$/, {}, () => {
  EventPage.clickOnManageYourRegistrationLink();

});

When(/^User switch to "Manage event" window$/, {}, () => {
  EventPage.switchToManageEventWindow();

});

When(/^User clicks on "Activity" tab on manage event page$/, {}, () => {
  EventPage.clickOnActivityTab();

});

When(/^User clicks on "People" tab$/, {}, () => {
  EventPage.clickOnPeopleTab();

});

When(/^Click on "Export CSV" button$/, {}, () => {
  browser.refresh();
  EventPage.clickOnExportCsvButton();
  browser.pause(5000);
  browser.keys(['Meta', 'Enter']);
  browser.pause(2000);

});



When(/^Click on  "Cancel Registration" button$/, {}, () => {
  EventPage.clickOnCancelRegistrationLink();

});


When(/^Click on "Yes, Cancel" option$/, {}, () => {
  browser.pause(3000);
  EventPage.clickOnYesCancelOption();

});



When(/^There must be existing past session$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(10000);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnShareMaterialButton();
  EventPage.clickOnShareMaterialOption();
  browser.pause(10000);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.clickOnSummaryTab();
  EventPage.clickOnPastSessionOption();
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 700000 });

});

When(/^Material (.*) must be added in event (.*)$/, {}, (name, slide) => {
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
  // browser.pause(30000);
  // browser.refresh();
  // $("//div[contains(text(),'Prepare the room in advance.')]").scrollIntoView();
  $("//div[@class='row-icon event-material-thumbnail ']//img").waitForDisplayed({ timeout: 120000 });
  EventPage.clickOnDoneButton();
  browser.pause(3000);
});

When(/^Click on dropdown in fron of session$/, {}, () => {
  EventPage.clickOnSessionDropDown();

});

When(/^Click on "Share Replay" option$/, {}, () => {
  EventPage.clickOnShareReplayOption();

});

When(/^User clicks on arrow on recording page popup$/, {}, () => {
  EventPage.clickOnArrowOnRecordingPage();

});

When(/^User switch to recording window$/, {}, () => {
  EventPage.switchToRecordingWindow();

});


When(/^Select "View Insights" option$/, {}, () => {
  //EventPage.switchToRecordingWindow();
  EventPage.selectViewInsightsOption();

});


When(/^User (.*) and (.*) attends the session$/, {}, (firstName, email) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.addFirstNameFieldData(firstName);
  EventPage.addRegistrationEmailField(email);
  EventPage.clickOnRegisterButton();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  browser.pause(20000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(10000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

When(/^Admin ends the session$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  browser.refresh();
  EventPage.clickOnSummaryTab();
  // EventPage.clickOnPastSessionOption();
  AutomatedPage.clickOnPastSessionOption();
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 700000 });

});



When(/^User (.*) and (.*) attends the session and sends message(.*)$/, {}, (userCount, regEmail, message) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  EventPage.attendAndSentMessageMultipleUsers(userCount, name, emailAddress, message);

  // EventPage.addFirstNameFieldData(firstName);
  // EventPage.addRegistrationEmailField(email);
  // EventPage.clickOnRegisterButton();
  // EventPage.clickOnJoinRoomBtnUnderJoin();
  // browser.pause(10000);
  // EventPage.closeResentWindow();
  // EventPage.switchToManageEventWindow();
});



When(/^Go to "Join Timestamp" column$/, {}, () => {
  EventPage.moveToJoinTimeStampColumn()

});

When(/^Go to "Attendance per" column$/, {}, () => {
  EventPage.moveToAttendancePerColumn();

});

When(/^Go to "Attendance Minutes" column$/, {}, () => {
  EventPage.moveToAttendanceMintsColumn();

});

When(/^Go to "Exit Timestamp" column$/, {}, () => {
  EventPage.moveToExitTimeStapmColumn();

});

When(/^Go to "Focus per" column$/, {}, () => {
  EventPage.moveToFocusPerColumn();

});

When(/^Go to "Registration Date & Time" column$/, {}, () => {
  EventPage.moveToRegDateAndTimeColumn();

});

When(/^Go to "Session Date & Time" column$/, {}, () => {
  EventPage.moveToSessionDateAndTimeColumn();

});

When(/^Go to "Name or Email" column$/, {}, () => {
  EventPage.moveToNameOrEmailColumn();

});
When(/^Go to "Attended" column$/, {}, () => {
  EventPage.moveToAttendedColumn();

});
When(/^User Registered for event session with email (.*)$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  browser.pause(1000);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();

});

When(/^Registered user (.*) must attends the session and send message (.*)$/, {}, (regEmail, message) => {

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(10000);
  MeetingRoomPage.clickOnOpenChatButton();
  MeetingRoomPage.enterDataInChatTextArea(message);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

When(/^Registered user (.*) must attends the session$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  browser.refresh();
  browser.pause(6000);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(10000);

});

When(/^Add data in "Registration form" and click registration button (.*)$/, {}, (regEmail) => {

  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);

});

When(/^Click on "Join Room" button$/, {}, () => {
  EventPage.clickOnJoinRoomButton();

});

When(/^Admin add handout (.*) and (.*) for event$/, {}, (title, image) => {
  browser.refresh();
  browser.pause(5000);
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnAddAResourceButton();
  EventPage.clickOnTypeOfResourceDropDown();
  EventPage.selectHandoutOption();
  EventPage.addHandoutTitleData(title);
  EventPage.uploadImageData(image);
  EventPage.clickOnAddResourceButton();

});

When(/^Registered user (.*) clicks on download button of shared resource$/, {}, (regEmail) => {

  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(5000);
  EventPage.clickOnHandoutsButton();
  EventPage.clickOnResourceDownloadButton();
  EventPage.closeResentWindow();
  EventPage.switchToWindowNewTab();
  browser.pause(3000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();

});




When(/^Add less than five characters in "Event Name" field (.*)$/, {}, (eventName) => {
  EventPage.fillEventNameField(eventName);

});

When(/^User (.*) must join the session$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(10000);
  EventPage.switchToManageEventWindow();


});


When(/^Session must be ended by admin$/, {}, () => {
  EventPage.clickOnJoinRoom();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);

  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  EventPage.clickOnSummaryTab();
  EventPage.clickOnPastSessionOption();
  browser.pause(30000);
});

When(/^"First name" field should displayed$/, {}, () => {
  if (EventPage.registratioNameFieldIsDisplayed() === true) {
    console.log("First name field is displayed on registration page");
  } else {
    throw new Error("FIRST NAME FIELD IS NOT DISPLAYED ON REGISTRATION PAGE");
  }
});

When(/^"Email" field should displayed$/, {}, () => {
  if (EventPage.registrationEmailFieldIsDisplayed() === true) {
    console.log("Email field is displayed on registration page");
  } else {
    throw new Error("EMAIL FIELD IS NOT DISPLAYED ON REGISTRATION PAGE");
  }
});

When(/^Click on "Copy Link"$/, {}, () => {
  EventPage.clickOnCopyLinkForJoinLink();
});

When(/^User add invalid (.*) email and valid name for (.*) in registration form$/, {}, (invalidemail, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];

  console.log('NAMEXCC' + name + "EMAILYU" + invalidemail)
  EventPage.registerEvents(name, invalidemail);
});


When(/^Click on "Add To Calendar" button$/, {}, () => {
  browser.pause(3000);
  EventPage.clickOnAddToCalendarButton();
});

When(/^On success reg page click on "Add To Calendar" button$/, {}, () => {
  browser.pause(3000);
  const addCalendarButton = $("//div[@class='add-to-calendar']//button");
  addCalendarButton.click();
  browser.pause(3000);
});


When(/^Clicked on any option from add to calendar list (.*)$/, {}, (option) => {
  EventPage.selectAddToCalendarOption(option);

});

When(/^User selects upcoming session from dropdown list$/, {}, () => {
  EventPage.clickOnUpcomingSessionButton();
  EventPage.selectSessionOnRegistrationPage();

});

When(/^Click on "Download Recording" option$/, {}, () => {
  EventPage.clickOnDownloadRecordingOption();

});


When(/^User clicks on "Edit page" button$/, {}, () => {
  browser.pause(1000);
  EventPage.clickOnEditPageButton();
  browser.pause(4000);
});
When(/^User schedule new session at future time (.*)$/, {}, (futureTime) => {
  const button = $("//a[contains(text(),'Upcoming Sessions')]");
  button.waitForDisplayed({ timeout: 10000 });
  button.click();
  EventPage.clickScheduleThisEventButton();
  EventPage.selectFutureDate();
  EventPage.selectFutureTime(futureTime);
  EventPage.clickAddToEventScheduleButton();
});

/*----------Start Series Event page code-------------*/

When(/^User clicks on "Series" option$/, {}, () => {
  SeriesPage.openAddNewSeriesEvent();

});

When(/^Add data in series "Event Name" field (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.fillEventNameField(eventName);

});




/*----------Start Automated Event page code-------------*/


When(/^User sets Launch time (.*) for a poll$/, {}, (lunchTime) => {


});

When(/^Click on "Join Room" button after registered$/, {}, () => {
  AutomatedPage.clickOnJoinRoomButton();
  browser.pause(6000);
});

When(/^User Register for On-demand session with email (.*)$/, {}, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  AutomatedPage.registerEvents(name, emailAddress); `  `

});


When(/^Enable "On-Demand" option$/, {}, () => {

  AutomatedPage.enabledOnDemandSwitch();
});

When(/^Click on "On-Demand" option$/, {}, () => {
  browser.pause(20000)
  browser.refresh();
  AutomatedPage.clickOnOnDemandsOption();

});

When(/^User clicks on "Automated" option$/, {}, () => {
  AutomatedPage.openAddNewAutomatedEvent();

});

When(/^User "Uploads a video" or "Selects a video from library" (.*)$/, {}, (videoName) => {
  AutomatedPage.selectVideoFromLibrary(videoName);

});

When(/^User clicks on "Settings" option for automated event$/, {}, () => {
  AutomatedPage.clickOnSettingOption();

});

When(/^User clicks on Message count$/, {}, () => {
  AutomatedPage.clickOnSummaryMessageCount();

});



When(/^Admin enter message (.*) replay in "Enter your reply message" fields$/, {}, (replyMessage) => {
  AutomatedPage.enterMessageInReplyTextField(replyMessage);

});


When(/^Clicks on "Reply" button$/, {}, () => {
  AutomatedPage.clickOnReplyButton();

});


When(/^Admin clicks on "send reply" button$/, {}, () => {
  AutomatedPage.clickOnSendReplyButton();

});

When(/^User clicks on Filter dropdown$/, {}, () => {
  AutomatedPage.clickOnFilterDropdown();
});

When(/^User change Filter from On-Demand to Scheduled session$/, {}, () => {
  AutomatedPage.selectScheduledSessionOption();
});

When(/^For automated event user Clicks on "ADD A RESOURCE" button$/, {}, () => {
  AutomatedPage.clickOnAddAResourceButton();

});

When(/^User clicks on Upload video option$/, {}, () => {
  AutomatedPage.clickOnUploadVideoOption();

});

When(/^User clicks on "Automation" tab$/, {}, () => {
  AutomatedPage.clickOnAutomationTab();

});
When(/^User clicks upload option button$/, {}, () => {
  AutomatedPage.clickOnUploadOptionButton();

});

When(/^User clicks on "Download Media"$/, {}, () => {
  AutomatedPage.clickOnDownloadMediaOption();

});
When(/^User clicks on "Swap Video"$/, {}, () => {
  browser.pause(10000);
  AutomatedPage.clickOnSwapVideoOption();

});
When(/^Clicks on "SWAP THE VIDEO" button$/, {}, () => {
  AutomatedPage.clickOnSwapTheVideoButton();
  browser.pause(5000);

});

When(/^The video (.*) is uploading$/, {}, (swapVideo) => {
  AutomatedPage.uploadVideo(swapVideo);
});

When(/^User clicks swap video upload Option button while the video is uploading$/, {}, () => {
  AutomatedPage.clickOnSwapUploadOptionButton();
});

When(/^User clicks on "Cancel upload" option$/, {}, () => {
  AutomatedPage.clickOnCancelUploadButton();
});

When(/^User clicks on "NO,NEVER MIND" button$/, {}, () => {
  AutomatedPage.clickOnNoNeverMindButton();
});
When(/^User clicks swap video upload Option button$/, {}, () => {
  AutomatedPage.clickOnSwapUploadOptionButton();
});

When(/^The user clicks on "Select a different video"$/, {}, () => {
  AutomatedPage.clickOnSelectDifferentVideo();
});


//---------------START MEETING ROOM SCRIPTS-------------//

When(/^User clicks on "Join Room" button under welcome screen$/, {}, () => {
  EventPage.clickOnJoinRoomBtnUnderJoin();
});

When(/^Click on "Join Room" button under event tab$/, {}, () => {
  MeetingRoomPage.clickOnJoinRoom();

});


When(/^Click on "Start Session" button$/, {}, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();
});

When(/^Click on chat resource plus button$/, {}, () => {
  MeetingRoomPage.clickOnChatResourceButton();
  browser.pause(500);
});

When(/^Click on "View sharing options" button$/, {}, () => {
  MeetingRoomPage.clickOnViewSharingOptions();
});

When(/^User clicks on "Atttendee" option$/, {}, () => {
  MeetingRoomPage.clickOnAttendeeButton();

});

When(/^User (.*) attends the session$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(10000);
  EventPage.switchToManageEventWindow();

});

When(/^Guest joins the session$/, {}, () => {
  MeetingRoomPage.clickOnSessionOptionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLink();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();

});

When(/^Host starts the session$/, {}, () => {
  MeetingRoomPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();
  // MeetingRoomPage.clickOnYesStartButton();
  browser.pause(10000);
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
});

When(/^Click on "Yes" button$/, {}, () => {
  EventPage.clickOnYesButton();
  browser.pause(7000);
});

When(/^Click on attendee menu button which you want to ban$/, {}, () => {
  MeetingRoomPage.clickOnAttendeeMenuButton();
});

When(/^Click on Ban attendee option$/, {}, () => {
  MeetingRoomPage.clickOnBanAttendeeButton();
});

When(/^In second tab guest joins the session$/, {}, () => {
  browser.pause(3000);
  MeetingRoomPage.clickOnSessionOptionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInSecondTab();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();

});

When(/^Click on "Poll"$/, {}, () => {
  MeetingRoomPage.clickOnPollOption();

});

When(/^Add required fields with (.*) and options (.*) and (.*)$/, {}, (question, option1, option2) => {
  MeetingRoomPage.addQuestionField(question);
  MeetingRoomPage.addOption1Field(option1);
  MeetingRoomPage.addOption2Field(option2);
});

When(/^save resource by clicking on "Save" button$/, {}, () => {
  MeetingRoomPage.clickOnSaveResourceButton();

});

When(/^Registered user (.*) join the meeting room$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  browser.pause(1000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);

});

When(/^User clicks on polls option on attendee screen$/, {}, () => {
  MeetingRoomPage.clickOnPollsOption();

});

When(/^Click on "handout"$/, {}, () => {
  MeetingRoomPage.clickOnHandoutOption();

});

When(/^Add handout file (.*)$/, {}, (image) => {
  EventPage.uploadImageData(image);

});

When(/^User clicks on handouts option on attendee screen$/, {}, () => {
  MeetingRoomPage.clickOnHandoutsOption();
});

When(/^Click on third tab handouts on attendee screen$/, {}, () => {
  $("//div[contains(text(),'handouts')]|//button[contains(text(),'handouts')]").click();
});


When(/^Click on "featured action"$/, {}, () => {
  MeetingRoomPage.clickOnFeaturedActionOption();

});

When(/^Attendee clicks on featured action button$/, {}, () => {
  MeetingRoomPage.clickOnFeaturedActionTitleButton();
  MeetingRoomPage.clickOnFeaturedActionImageButton();

});


When(/^Host starts the session and share added material$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(10000);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnShareMaterialButton();
  // MeetingRoomPage.clickOnCloseSettingPopover();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(2000);
  // MeetingRoomPage.clickOnCloseSettingPopover();


});

When(/^Guest share added material$/, {}, () => {
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  browser.pause(3000);
  MeetingRoomPage.clickOnViewSharingOptions();
  MeetingRoomPage.clickOnShareMaterialOption();
  browser.pause(10000);

});
When(/^Type message (.*) in text area$/, {}, (message) => {
  MeetingRoomPage.enterDataInChatTextArea(message);
});
When(/^Move to meeting room window$/, {}, () => {
  EventPage.switchToWindowNewTab();
});

When(/^Clicks On "Delete" icon$/, {}, () => {
  MeetingRoomPage.clickOnDeleteMessageButton();
});

When(/^Clicks on "yes delete" button$/, {}, () => {
  MeetingRoomPage.clickOnYesDeleteButton();
  browser.pause(1000);
});
When(/^In other tab attendee (.*) joins the session$/, {}, (regEmail) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  browser.pause(500);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  console.log("before url>>" + browser.getUrl());
  browser.pause(1000);
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(6000);
  const name = data[0];
  const emailAddress = data[1];
  console.log('NAMEXCC' + name + "EMAILYU" + emailAddress)
  EventPage.registerEvents(name, emailAddress);
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  browser.pause(1000);
  console.log("after url>>" + browser.getUrl());

  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(4000);



});

When(/^(.*) Users register for session with email (.*)$/, {}, (userCount, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.regiregisterMultipleUsers(userCount, name, emailAddress);
});

When(/^(.*) Users must Attended for session with email (.*)$/, {}, (userCount, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.attendEventWithMultipleUsers(userCount, name, emailAddress);
});

When(/^(.*) Users must download resource session with email (.*)$/, {}, (userCount, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.downloadResourceWithMultipleUsers(userCount, name, emailAddress);
});

When(/^(.*) Users must selects first option of poll with email (.*)$/, {}, (selectOption1, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.selectPollOption1(selectOption1, name, emailAddress);
});


When(/^(.*) Users must selects second option of poll with email (.*)$/, {}, (selectOption2, regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.selectPollOption2(selectOption2, name, emailAddress);
});


When(/^Move to attendee's message$/, {}, () => {
  MeetingRoomPage.moveToMessageInChatWindow();
});

When(/^Clicks on "Mark as a question" option$/, {}, () => {
  MeetingRoomPage.clickOnMarkAsQuestion();
});



When(/^Clicks on chat question options three dots$/, {}, () => {
  MeetingRoomPage.clickOnChatQuestionThreeDots();
});

When(/^Clicks on "Unmark as question" option$/, {}, () => {
  MeetingRoomPage.clickOnUnMarkAsQuestion();
});
When(/^Clicks on "Answer Live" option$/, {}, () => {
  MeetingRoomPage.clickOnAnswerLiveOption();
});
When(/^Clicks on "Finish answering" button$/, {}, () => {
  MeetingRoomPage.clickOnFinishAnsweringButton();

});


When(/^Click on "@" to mention$/, {}, () => {
  MeetingRoomPage.clickOnMentionButton();


});
When(/^Host mention attendee (.*) and send message (.*) by clicking on enter key$/, {}, (regEmail, message) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.enterDataInChatTextArea(name);
  MeetingRoomPage.enterDataInChatTextArea(message);
});
When(/^Move to attendee's screen$/, {}, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  browser.pause(500);
});

When(/^Guest mention attendee (.*) and send message (.*) by clicking on enter key$/, {}, (regEmail, message) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.enterDataInChatTextArea(name);
  MeetingRoomPage.enterDataInChatTextArea(message);
});
When(/^Move to guest's screen$/, {}, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);

});

When(/^Attendee mention guest (.*) and send message (.*) by clicking on enter key$/, {}, (regEmail, message) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.enterDataInChatTextArea(name);
  MeetingRoomPage.enterDataInChatTextArea(message);
});
When(/^Click on chat question button$/, {}, () => {
  MeetingRoomPage.clickOnChatQuestionButton();
});

When(/^Host Select "Private" chat option$/, {}, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  MeetingRoomPage.clickOnOpenChatButton();
  browser.pause(5000);
  MeetingRoomPage.clickOnchatMessageTypeButton();
  MeetingRoomPage.selectPrivateOption();

});


When(/^First attendee sends message (.*) in chat window$/, {}, (message) => {
  browser.pause(1000);
  MeetingRoomPage.clickOnOpenChatButton();
  browser.pause(1000);
  MeetingRoomPage.enterDataInChatTextArea(message);
});

When(/^Host Select "Public" chat option$/, {}, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  browser.pause(1000);
  MeetingRoomPage.clickOnOpenChatButton();
  browser.pause(1000);
  MeetingRoomPage.clickOnchatMessageTypeButton();
  MeetingRoomPage.selectPublicOption();

});



When(/^Attendee mention host and send message (.*) by clicking on enter key$/, {}, (message) => {
  browser.keys(['Meta', 'Enter']);
  MeetingRoomPage.enterDataInChatTextArea(message);
});

When(/^Click on chat mentions "@" button$/, {}, () => {

  MeetingRoomPage.clickOnChatMentionsButton();
});

When(/^Admin clicks on "Admins" tab in Chat tab$/, {}, () => {
  browser.pause(1000);
  MeetingRoomPage.clicksOnAdminsTab();
  browser.pause(2000);
});
When(/^Click on "Full Screen" option$/, {}, () => {
  MeetingRoomPage.clickOnFullScreenOption();

});
When(/^Click on "Hide chat" option$/, {}, () => {
  MeetingRoomPage.clickOnHideChatOption();

});
When(/^Click on "chat Header Right" Arrow$/, {}, () => {
  MeetingRoomPage.clickOnHeaderRightArrow();

});

When(/^Click on "Setting" option$/, {}, () => {
  MeetingRoomPage.clickOnSettingsOption();

});


When(/^User Clicks on end the session$/, {}, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();

});



When(/^Click on sharing options button$/, {}, () => {
  MeetingRoomPage.clickOnSharingOptionButton();

});

When(/^Host starts the session and share pdf material$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  MeetingRoomPage.clickOnStartSessionButton();
  // MeetingRoomPage.clickOnYesStartButton();
  browser.pause(4000);
  MeetingRoomPage.clickOnGoOnStageButton();
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  MeetingRoomPage.clickOnShareMaterialButton();
  MeetingRoomPage.clickOnPdfMaterial();
  browser.pause(3000);

});


When(/^Clicks on next slide button$/, {}, () => {
  MeetingRoomPage.clickOnNextSlideButton();

});
When(/^Host clicks on pause button$/, {}, () => {
  MeetingRoomPage.clickOnPauseVideoButton();

});

When(/^Clicks on "Go on stage" button$/, {}, () => {
  MeetingRoomPage.clickOnGoOnStageButton();

});

When(/^User clicks on "Go on stage" button under join session screen$/, () => {
  MeetingRoomPage.clickGoOnStageJoinSessionButton();

});

When(/^User clicks on left session header title button$/, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
});


When(/^Click on yes start button$/, () => {
  MeetingRoomPage.clickOnYesStartButton();
});

When(/^Click on people button$/, () => {
  // MeetingRoomPage.clickOnCloseSettingPopover()
  MeetingRoomPage.clickOnPeopleButton();
});



When(/^video (.*) material (.*) mudt be added with slide material$/, (videoName, video) => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRoomTab();
  EventPage.clickOnPresentationMaterials();
  EventPage.clickOnAddAMaterialOption();
  EventPage.clickonTypeOfMaterialDropDown();
  EventPage.selectVideoOption();
  EventPage.addMaterialNameField(videoName);
  EventPage.uploadVideoFile(video);
  EventPage.clickOnAddMaterialButton();
  browser.pause(8000);
  $("(//div[@class='row-icon event-material-thumbnail '])[2]").waitForDisplayed({ timeout: 30000 });
  EventPage.clickOnDoneButton();
  browser.pause(5000);
  browser.refresh();
  browser.pause(5000);
});


When(/^Added host joins the session link$/, {}, () => {
  MeetingRoomPage.clickOnSessionOptionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  EventPage.clickOnGuestTab();
  MeetingRoomPage.openJoinRoomLink();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");

});

When(/^User clicks on session option dropdown button$/, {}, () => {
  MeetingRoomPage.clickOnSessionOptionDropDown();


});
When(/^User click on Event name bar$/, () => {
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
});



When(/^Click on Start Session button under popup$/, () => {
  browser.pause(2000);
  MeetingRoomPage.clickOnStartSessionButton();
});


When(/^User clicks on "End Session" button under session popup$/, () => {
  MeetingRoomPage.clickOnEndSessionButton();
});


When(/^User clicks on "YES,END"$/, () => {
  MeetingRoomPage.clickOnYesEndButton();
  browser.pause(3000);
});



When(/^Added host join the room and starts the session$/, () => {
  EventPage.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnStartSessionButton();
  MeetingRoomPage.clickOnYesStartButton();
  browser.pause(8000);
});

When(/^User clicks on "GO ON STAGE"$/, () => {
  MeetingRoomPage.clickOnGoOnStageButton();
});


When(/^User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"$/, () => {
  MeetingRoomPage.clickOnNoThanksButtonInGoStagePopup();
});


When(/^Switch to admin tab and click on people button$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[1]);
  MeetingRoomPage.clickOnPeopleButton();

});

When(/^User Switch to admin tab and click on people button$/, () => {
  var handle = browser.getWindowHandles();
  browser.switchToWindow(handle[1]);
  browser.pause(500);
  MeetingRoomPage.clickOnPeopleButton();

});

When(/^User click on presenter's menu button$/, () => {
  $("(//div[@class='UserMenu'])[2]").click();
});


When(/^User click on "Invite on stage" button$/, () => {
  MeetingRoomPage.clickOnInviteOnStageButton();
  browser.pause(2000);
});


When(/^User click on attendee's menu button$/, () => {
  $("(//div[@class='UserMenu'])[3]").click();
});

When(/^User click on moderators's menu button$/, () => {
  $("(//div[@class='UserMenu'])[2]").click();
});

When(/^In second tab Added host joins the session link$/, {}, () => {
  MeetingRoomPage.clickOnSessionOptionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  EventPage.clickOnGuestTab();
  MeetingRoomPage.openJoinRoomLinkInSecondTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");

});

When(/^User click on host's menu button$/, () => {
  MeetingRoomPage.clickSecondUserMenuButton();
});

When(/^User click on Admins's menu button$/, () => {
  MeetingRoomPage.clickFirstUserMenuButton();
});

When(/^User click on attendee's menu button for "Remove from stage" action$/, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  $("(//div[@class='UserMenu'])[4]").click();
});

When(/^User click on second index attendee's menu button$/, () => {
  MeetingRoomPage.clickSecondUserMenuButton();
});
When(/^User clicks on "Remove from stage"$/, () => {
  MeetingRoomPage.clickOnRemoveFromStageButton();
});

When(/^User clicks on "Leave stage"$/, () => {
  MeetingRoomPage.clickOnLeaveStageButton();
});

When(/^User click on admin's menu button for "Leave stage" action$/, () => {
  $("(//div[@class='UserMenu'])[3]").click();
});


When(/^User clicks on "Leave stage" button$/, () => {
  MeetingRoomPage.clickOnLeaveStageIcon();
});


When(/^User clicks on "Leave stage" button on moderator screen$/, () => {
  MeetingRoomPage.clickModeratorLeaveStageIcon();
});

When(/^User clicks on "Leave stage" button on attendee screen$/, () => {
  MeetingRoomPage.clickAttendeeLeaveStageIcon();
});

When(/^Clicked on "Share Now" button$/, () => {
  browser.pause(500);
  EventPage.clickOnShareNowButton();
  browser.pause(1000);
});
When(/^Clicked on added resource$/, () => {
  EventPage.clickOnAddedChatResource();
});

When(/^Clicked on "Share screen"$/, () => {
  MeetingRoomPage.clickOnShareScreenOption();
});

When(/^User click on attendee's menu button after admin go on stage$/, () => {
  $("(//div[@class='UserMenu'])[3]").click();
});

When(/^Click on tab button$/, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]);
  browser.pause(1000);
  browser.keys('Tab');
  browser.keys('Tab');
  $(".--button-on.--share.admin-controls-button").scrollIntoView();
  $(".--button-on.--share.admin-controls-button").click();
  browser.pause(5000);
  browser.keys('Enter');

});



When(/^Switch to tabs$/, () => {
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[1]); end
  browser.pause(10000);
  browser.switchToWindow(handle[2]); popup
  browser.pause(10000);
  browser.switchToWindow(handle[0]); pa
  browser.pause(10000);


});

When(/^Share result with attendee option is disable$/, () => {
  $(".ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-left-content > div:nth-of-type(1) a").click();
  EventPage.unMarkShareResultCheckBox();
  EventPage.clickOnAddResourceButton();

});

When(/^User selects the poll option$/, () => {
  MeetingRoomPage.clickOnPollsButton();
  MeetingRoomPage.clickOnPollOption1();
});


When(/^(.*) Users must be on stage for with email (.*)$/, {}, (userCount, regEmail) => {
  EventPage.clickOnSessionDropDown();
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress = data[1];
  MeetingRoomPage.attendeeGoOnStage(userCount, name, emailAddress);
});

When(/^Clicks on "Share Materials" button$/, () => {
  MeetingRoomPage.clickOnShareMaterialButton();
});



When(/^First user must be on stage for with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[2]);
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
  browser.switchToWindow(handles[1]);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  browser.refresh();
  browser.pause(3000);
  MeetingRoomPage.clickOnJoinRoomBtnUnderJoin();

  MeetingRoomPage.clickOnPeopleButton();
  browser.pause(2000);
  MeetingRoomPage.clickSecondUserMenuButton();
  browser.pause(2000);
  MeetingRoomPage.clickOnInviteOnStageButton();
  browser.switchToWindow(handles[2]);
  browser.pause(2000)
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  browser.pause(2000);
  browser.switchToWindow(handles[0]);
});

When(/^Second user must be on stage for with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[3]);
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
  browser.switchToWindow(handles[1]);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  browser.refresh();
  browser.pause(3000);
  MeetingRoomPage.clickOnJoinRoomBtnUnderJoin();

  MeetingRoomPage.clickOnPeopleButton();
  browser.pause(3000);

  MeetingRoomPage.clickThirdUserMenuButton();
  browser.pause(2000);
  MeetingRoomPage.clickOnInviteOnStageButton();
  browser.switchToWindow(handles[3]);
  browser.pause(2000)
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  browser.pause(2000);
  browser.switchToWindow(handles[0]);
});

When(/^Third user must be on stage for with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[4]);
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
  browser.switchToWindow(handles[1]);
  // MeetingRoomPage.clickOnCloseSettingPopover();
  browser.refresh();
  browser.pause(3000);
  MeetingRoomPage.clickOnJoinRoomBtnUnderJoin();

  MeetingRoomPage.clickOnPeopleButton();
  browser.pause(2000);
  MeetingRoomPage.clickFourthUserMenuButton();
  browser.pause(2000);
  MeetingRoomPage.clickOnInviteOnStageButton();
  browser.switchToWindow(handles[4]);
  browser.pause(5000)
  MeetingRoomPage.clickGoOnStageJoinSessionButton();
  browser.pause(2000);
  browser.switchToWindow(handles[1]);
});


When(/^Clicked on "User menu" icon$/, () => {
  MeetingRoomPage.clickOnUserMenuIcon();
});

When(/^Clicked on "Enable Spotlight" icon$/, () => {
  MeetingRoomPage.clickOnEnableSpotlightButton();
  browser.pause(2000);
});

When(/^One more attendee (.*) tries to join the room$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  browser.pause(3000);
  const handle = browser.getWindowHandles();
  browser.switchToWindow(handle[5]);
  // super.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
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
});

When(/^First user attendes the session with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[1]);
  // super.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
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
  EventPage.switchToParentTab();
});

When(/^Second user attendes the session with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[2]);
  // super.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
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
  EventPage.switchToParentTab();
});

When(/^Third user attendes the session with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[3]);
  // super.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
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
  EventPage.switchToParentTab();
});

When(/^Forth user attendes the session with email (.*)$/, (regEmail) => {
  var data = TestUtils.getEmailForRegistration(regEmail); //Retrive data from excel
  browser.pause(4000);
  const name = data[0];
  const emailAddress1 = data[1];
  MeetingRoomPage.openSessionOptionsList();
  MeetingRoomPage.clickOnViewRegistrationPage();
  const handles = browser.getWindowHandles();
  browser.switchToWindow(handles[4]);
  // super.switchToWindowNewTab();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
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
  EventPage.switchToParentTab();


});


When(/^Host clicks on Add material option$/, () => {
  MeetingRoomPage.clickOnAddMaterialOption();
});


When(/^user selects Pdf as Material type$/, () => {
  EventPage.clickonTypeOfMaterialDropDown();
  EventPage.selectSlidesOption();
});


When(/^User selects Pdf name as (.*) Material type (.*)$/, (name, slide) => {
  browser.pause(3000);
  EventPage.addMaterialNameField(name);
  EventPage.uploadSlideFile(slide);
  EventPage.clickOnAddMaterialButton();
  browser.refresh();
  browser.pause(2000);
  // $(".edit-material > a").scrollIntoView();
  $("//div[@class='row-icon event-material-thumbnail ']//img").waitForDisplayed({ timeout: 120000 });
  EventPage.closeResentWindow();
  browser.pause(3000);
  const handle = browser.getWindowHandles();
  browser.switchToWindow(handle[1]);
  browser.refresh();
  browser.refresh();
  browser.pause(3000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnShareMaterialButton();
});


When(/^User selects video name as (.*) Material type (.*)$/, (videoName, video) => {
  browser.pause(3000);
  EventPage.clickonTypeOfMaterialDropDown();
  EventPage.selectVideoOption();
  EventPage.addMaterialNameField(videoName);
  EventPage.uploadVideoFile(video);
  EventPage.clickOnAddMaterialButton();
  browser.pause(15000);
  $("//div[contains(text(),'0:')]").waitForDisplayed({ timeout: 40000 });

  EventPage.closeResentWindow();
  browser.pause(3000);
  const handle = browser.getWindowHandles();
  browser.switchToWindow(handle[1]);
  browser.refresh();
  browser.pause(3000);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  MeetingRoomPage.clickOnShareMaterialButton();
});


When(/^User clicks on view Profile icon$/, () => {
  MeetingRoomPage.clickonViewProfileIcon();
});

When(/^Click on added material$/, () => {
  MeetingRoomPage.clickOnShareMaterialOption();
});

When(/^User added material (.*) in search bar$/, (name) => {
  MeetingRoomPage.fillDataInSearchBarField(name);
});

When(/^User sends message in message popup screen$/, () => {
  // var tabs2 = [(ST.system.getWindowHandles())];
  // ST.system.switchTo().window(tabs2[1]);

  // browser.waitUntil(() => browser.getWindowHandles().length > 1);
  // const popupWindow = browser.getWindowHandles().filter((handle) => handle !== mainTab)[0];
  // browser.switchTab(popupWindow);

  // browser.switchToWindow(handles[2]);
  browser.pause(3000);
  const handles = browser.getWindowHandles();
  console.log("=============>>" + handles.length);

  browser.switchToWindow(handles[2]);

  if (MeetingRoomPage.switchToChatPopup() === true) {
    console.log("chat popup is displayed");

  } else {
    throw new Error("Chat popup is not displayed");
  }
});

When(/^User clicks on register count on manage event screen$/, () => {
  EventPage.clickOnRegisterCount();
});

When(/^User click on "Upcoming" Link$/, () => {
  EventPage.clickOnUpcomingLink();
});


When(/^User clicks on "Yes Delete" button$/, () => {
  EventPage.clickOnYesDeleteButton();
});


When(/^User clicks on delete registration icon$/, () => {
  browser.pause(3000);
  EventPage.clickOnDeleteRegistrationIcon();
});

When(/^User clicks on "Yes Cancel" button$/, () => {
  browser.pause(3000);
  EventPage.clickOnYesCancelButton();

});


When(/^User clicks on cancel registration button$/, () => {
  EventPage.clickOnCancelRegistrationButton();
});

When(/^User clicks on copy link icon$/, () => {
  browser.pause(3000);
  EventPage.clickOnCopyRegistrationLinkIcon();
});


When(/^User clicks on "Resend confirmation" button$/, () => {
  EventPage.clickOnResendConfirmationButton();
});


//---------------UpdatedNewRoom---------------//

When(/^Presenter joins the session$/, {}, () => {
  MeetingRoomPage.clickOnPresenterSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLink();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();

});

When(/^User Click on added poll resource (.*)$/, (question) => {
  MeetingRoomPage.clickOnAddedPollResource(question);
});

When(/^User Click on added handout resource (.*)$/, (title) => {
  MeetingRoomPage.clickOnAddedHandoutResource(title);

});

When(/^User Click on added featured resource (.*)$/, (title) => {
  MeetingRoomPage.clickOnAddedFeaturedResource(title);
});

When(/^Attendee clicks on polls option$/, {}, () => {
  MeetingRoomPage.clickOnAttendeePollsOption();

});

When(/^Attendee Clicks on "handout" option$/, {}, () => {
  MeetingRoomPage.clickOnAttendeeHandoutOption();

});

When(/^Host clicks on added material (.*)$/, {}, (name) => {
  MeetingRoomPage.clickOnAddedMaterial(name);

});


When(/^User Clicks On "Delete" icon$/, {}, () => {
  MeetingRoomPage.clickOnDeleteMessage();
});


When(/^Move to message (.*)$/, {}, (message) => {
  MeetingRoomPage.moveToMessage(message);
});

When(/^Admin Clicks on "Mark as a question" option$/, {}, () => {
  MeetingRoomPage.clickOnMarkAsQuestionButton();
});


When(/^User click on option (.*)$/, {}, (option1) => {
  MeetingRoomPage.selectPollOption(option1);
});

When(/^User click on "Video" button$/, {}, () => {
  browser.pause(2000);
  EventPage.turnOnVideoButton();
  browser.pause(3000);
});

When(/^Clicks on "SAVE OPEN GRAPH" button$/, {}, () => {
  EventPage.clickSaveOpenGraphButton();

});

When(/^Clicks On "Add Presenter" button$/, {}, () => {
  browser.pause(2000);
  EventPage.clickAddPresenterButton();
  browser.pause(2000);
});

When(/^Clicks on "SAVE DESCRIPTION" button$/, {}, () => {
  EventPage.clickSaveDescriptionButton();

});

When(/^User clicks on past event option$/, {}, () => {
  const option = $("//span[contains(text(),'1 Past Session')]");
  option.waitForDisplayed({ timeout: 10000 });
  option.waitForClickable({ timeout: 10000 });
  option.click();


});

When(/^User Clicks on "ADD TEAM MEMBER" Button$/, {}, () => {
  TeamPage.clickOnAddTeamMemberButton();

});

When(/^User Selects or Unselects "Host Ability" option$/, {}, () => {
  TeamPage.selectOrUnselectHostAbilityOption();
});
When(/^User Clicks on "Send Invite" button$/, {}, () => {
  TeamPage.clickOnSendInviteButton();
});

When(/^User search added member in search field (.*)$/, {}, (email) => {
  TeamPage.searchMemberFromList(email);
});

When(/^User Clicks on dropdown alongside team member details$/, {}, () => {
  TeamPage.clickOnSessionOptionsDropDown();
});


When(/^User Clicks on "Remove User" option$/, {}, () => {
  TeamPage.clickOnRemoveUserOption();
});
When(/^User Clicks on "YES,REMOVE" button$/, {}, () => {
  TeamPage.clickOnYesRemoveButton();
});

When(/^User Clicks on "Edit Team Member" option$/, {}, () => {
  TeamPage.clickOnEditUserOption();
});

When(/^User Disables "Host Ability"$/, {}, () => {
  TeamPage.disableHostAbilityCheckBox();
});

When(/^User click on "Update" Button$/, {}, () => {
  TeamPage.clickOnUpdateButton();
});

When(/^User Enables "Host Ability"$/, {}, () => {
  TeamPage.enableHostAbilityCheckBox();
});

When(/^User Clicks on "Delete Admin"$/, {}, () => {
  EventPage.clickOnDeleteAdminOption();
  EventPage.clickOnYesDeleteHostButton();
});

When(/^User Clicks on dropdown alongside Domain names$/, {}, () => {
  BrandingPage.clickOnAddedDomainDropDown();
});

When(/^User Clicks on "Set As Default" option$/, {}, () => {
  browser.pause(2000);
  try {
    BrandingPage.clickOnSetAsDefaultOption();
    EventPage.clickOnYesButton();
  } catch (error) {

  }

});


When(/^User Clicks on "Remove Domain" option$/, {}, () => {
  BrandingPage.clickOnRemoveDomainOption();
});


//--------------Integration cases-----------//
When(/^User shoud be on edit form field page$/, {}, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnRegistrationTab();
  EventPage.clickOnEditFormFieldButton();
});
When(/^User select no show option (.*)$/, {}, (option) => {
  browser.pause(2000);
  IntegrationsPage.clickOnNoShowDropDown();
  browser.pause(2000);
  IntegrationsPage.selectNoShowOption(option);
  browser.pause(2000);
});
When(/^User select tag for no show (.*)$/, {}, (tag) => {
  IntegrationsPage.clickOnNoShowTagsDropdown();
  browser.pause(1000);
  const tagOption = $("(//option[contains(text(),'" + tag + "')])[2]");
  tagOption.waitForDisplayed({ timeout: 10000 });
  tagOption.click();
  browser.pause(1000);
});
When(/^Enable Save Join Link button$/, {}, () => {
  IntegrationsPage.clickOnSaveJoinLinkButton();
  browser.pause(1000);
});

When(/^User select (.*) for "Last Name" (.*) for "Website" (.*) for "Phone Number" (.*) for company (.*) for "Text field" (.*) for textarea (.*) for "Dropdown" (.*) for "Checkbox" (.*) for "Zipcode" (.*) for "Refer" (.*) for "Facebook" (.*) for "Twitter"$/, {}, (lastNameOption, websiteOption, phoneOption, companyOption, textFieldOption, textAreaOption, dropdownOption, checkboxOption, zipCodeOption, referOption, facebookOption, twitterOption) => {
  IntegrationsPage.clickOnLastNameDropdown();
  IntegrationsPage.selectDropdownOptions(lastNameOption);
  IntegrationsPage.clickOnWebsiteDropdown();
  IntegrationsPage.selectDropdownOptions(websiteOption);
  IntegrationsPage.clickOnPhoneNumberDropdown();
  IntegrationsPage.selectDropdownOptions(phoneOption);
  IntegrationsPage.clickOnCompanyDropdown();
  IntegrationsPage.selectDropdownOptions(companyOption);
  IntegrationsPage.clickOnTextDropdown();
  IntegrationsPage.selectDropdownOptions(textFieldOption);
  IntegrationsPage.clickOnTextAreaDropdown();
  IntegrationsPage.selectDropdownOptions(textAreaOption);
  IntegrationsPage.clickOnDropdownDropdown();
  IntegrationsPage.selectDropdownOptions(dropdownOption);
  IntegrationsPage.clickOnCheckBoxDropdown();
  IntegrationsPage.selectDropdownOptions(checkboxOption);
  IntegrationsPage.clickOnZipCodeDropdown();
  IntegrationsPage.selectDropdownOptions(zipCodeOption);
  IntegrationsPage.clickOnReferDropdown();
  IntegrationsPage.selectDropdownOptions(referOption);
  IntegrationsPage.clickOnFacebookDropdown();
  IntegrationsPage.selectDropdownOptions(facebookOption);
  IntegrationsPage.clickOnTwitterDropdown();
  IntegrationsPage.selectDropdownOptions(twitterOption);

});

When(/^User clicks on "Form" option$/, {}, () => {
  IntegrationsPage.clickOnFormButton();
});

When(/^Redirect to attendee's screen$/, {}, () => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[2]);
  browser.pause(500);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  console.log("before url>>" + browser.getUrl());
  browser.pause(1000);

});

When(/^Attendee joins the session with name (.*) email last name (.*) website (.*) phone number (.*) company (.*) text (.*) textarea (.*) dropdown (.*) zip (.*) refer (.*) facebook (.*) twitter (.*)$/, {}, (firstName, lastName, website, phoneNo, company, text, textArea, option1, zipCode, refer, facebook, twitter) => {
  var newNumber = Math.floor((Math.random() * 6781400) + 6);
  const Username = firstName + newNumber;
  const emailAddress = "tester.desk24" + newNumber + "@gmail.com";
  EventPage.registerEvents(Username, emailAddress);
  browser.pause(1000);
  IntegrationsPage.fillLastNameField(lastName);
  IntegrationsPage.fillWebsitField(website);
  IntegrationsPage.fillPhoneNumberField(phoneNo);
  IntegrationsPage.fillCompanyField(company);
  IntegrationsPage.fillTextField(text);
  IntegrationsPage.fillTextAreaField(textArea);
  IntegrationsPage.clickOnDropdownButton();
  const optionvalue = $("//div[contains(text(),'" + option1 + "')]");
  optionvalue.click();
  IntegrationsPage.clickOnCheckBox();
  if ($("(//input[@type='checkbox'])[2]").isDisplayed() === true) {
    $("(//input[@type='checkbox'])[2]").click();
  } else {
    console.log("Button is not present");
  }
  IntegrationsPage.fillZipCodeField(zipCode);
  IntegrationsPage.fillReferField(refer);
  IntegrationsPage.fillFacebookField(facebook);
  IntegrationsPage.fillTwitterField(twitter);

});

When(/^User redirect to second attendee's screen$/, {}, () => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  var handle = browser.getWindowHandles();
  console.log("Mutiple Windows handle " + handle);
  browser.switchToWindow(handle[3]);
  browser.pause(500);
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  console.log("before url>>" + browser.getUrl());
  browser.pause(1000);

});

When(/^Select join link field (.*)$/, {}, (joinLinkField) => {
  IntegrationsPage.selectJoinLinkField(joinLinkField);

});

When(/^User turns on the Keap integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnKeapToggleButton();
  browser.pause(4000);
});

When(/^User select option for no show (.*)$/, {}, (tag) => {
  const dropdownButton = $("(//div[@class='integration-old-component-field']//div//select)[2]");
  dropdownButton.click();
  browser.pause(2000);
  const tagOption = $("(//option[contains(text(),'" + tag + "')])[2]");
  tagOption.waitForDisplayed({ timeout: 10000 });
  tagOption.click();
  browser.pause(2000);
});

When(/^User select group option (.*) from dropdown$/, {}, (selectGroupOption) => {
  IntegrationsPage.clickOnSelectGroupDropdown();
  IntegrationsPage.selectOptionfromSelectList(selectGroupOption);
  browser.pause(4000);
});

When(/^Select group interest option (.*) from dropdown$/, {}, (selectGroupInterest) => {
  IntegrationsPage.clickOnSelectGroupInterestDropdown();
  IntegrationsPage.selectOptionfromSelectList(selectGroupInterest);
});

When(/^For attendee select group interest option (.*) from dropdown$/, {}, (selectGroupInterestForAttendee) => {
  IntegrationsPage.clickOnSelectGroupInterestAttendeeDropdown();
  IntegrationsPage.selectChooseListOption(selectGroupInterestForAttendee);
});

When(/^For noshow select group interest option (.*) from dropdown$/, {}, (selectGroupInterestForNoshow) => {
  browser.pause(1000);
  IntegrationsPage.clickOnSelectGroupInterestNoShowDropdown();
  browser.pause(2000);
  const tagOption = $("(//option[contains(text(),'" + selectGroupInterestForNoshow + "')])[2]");
  tagOption.waitForDisplayed({ timeout: 10000 });
  tagOption.click();
  browser.pause(2000);
});

When(/^For No show user enters Tag Name field (.*)$/, {}, (tagName) => {
  IntegrationsPage.fillNoShowTagNameField(tagName);
});

When(/^Select noshow tag (.*) from dropdown$/, {}, (noShowTagName) => {
  IntegrationsPage.clickOnNoShowTagsDropdown();
  const tagOption = $("(//option[contains(text(),'" + noShowTagName + "')])[2]");
  tagOption.waitForDisplayed({ timeout: 10000 });
  tagOption.click();
  browser.pause(1000);
});

When(/^Select attendee tag (.*) from dropdown$/, {}, (tagName) => {
  IntegrationsPage.clickOnAttendeeTagDropdown();
  IntegrationsPage.selectChooseListOption(tagName);

});

When(/^Selects event marketo list option (.*) from dropdown$/, {}, (selectListOption) => {
  IntegrationsPage.clickOnEventMarketoListDropdown();
  IntegrationsPage.selectOptionfromSelectList(selectListOption);

});

When(/^For marketo user select registrants fron (.*) dropdown$/, {}, (registerTag) => {
  IntegrationsPage.clickOnChooseListOptionsDropDown();
  IntegrationsPage.selectOptionfromSelectList(registerTag);

});

When(/^Click on "Customize registeration" option$/, {}, () => {
  EventPage.clickOnCustomizeRegistrationOption();

});

When(/^For automated events User selects future time$/, {}, () => {
  EventPage.selectAutomatedEventTime();
});

When(/^For automated event User clicks on handouts option on attendee screen$/, {}, () => {
  AutomatedPage.clickOnHandoutsOption();
});

When(/^For automated event Attendee clicks on featured action button$/, {}, () => {
  AutomatedPage.clickOnFeaturedActionTitleButton();

});
When(/^For automated event click on past session$/, {}, () => {
  AutomatedPage.clickOnPastSessionOption();

});

When(/^User turns on the Salesforce Pardot integration toggle button$/, {}, () => {
  IntegrationsPage.clickOnSalesforcePardotToggleButton();
  browser.pause(4000);
});

When(/^Selects choose list salesforce option (.*) from dropdown$/, {}, (selectListOption) => {
  IntegrationsPage.clickOnChooseListSalesForceDropdown();
  IntegrationsPage.selectOptionfromSelectList(selectListOption);

});

When(/^For salesforce user select registrants fron (.*) dropdown$/, {}, (registerTag) => {
  IntegrationsPage.clickOnChooseListOptionsDropDown();
  IntegrationsPage.selectOptionfromSelectList(registerTag);

});


When(/^User click on upcoming session dropdown list$/, {}, () => {
  EventPage.clickOnUpcomingSessionButton();
});

When(/^User add visible upcomming session limit (.*)$/, {}, (limit) => {
  EventPage.addVisibileUpcommingSession(limit);
});

When(/^User add session registration limit (.*)$/, {}, (limit) => {
  EventPage.addSessionRegLimit(limit);
});

When(/^Othen User going to join session then it will show (.*) screen$/, {}, (title) => {
  EventPage.openSessionOptionsList();
  EventPage.clickOnViewRegistrationPage();
  EventPage.switchToRegistrationWindow();
  var actURL1 = browser.getUrl();
  browser.url(actURL1 + "?skip");
  EventPage.validateBlockScreen(title);

});

When(/^User turn On enhanced validation button$/, {}, () => {
  EventPage.onEnhansedValidationToggleButton();

});

When(/^User add data in text (.*) and text area (.*) fields$/, {}, (textData, textAreaData) => {
  EventPage.fillTextField(textData);
  EventPage.fillTextAreaField(textAreaData);

});

When(/^Click on third customize field dropdown$/, {}, () => {
  EventPage.clickOnThirdCustomizeFieldDropdown();

});
When(/^Click on fourth customize field dropdown$/, {}, () => {
  browser.pause(2000);
  EventPage.clickOnFourthCustomizeFieldDropdown();

});

When(/^Clicks on "SAVE FORM FIELD" Button$/, {}, () => {
  EventPage.clickOnSaveFormFieldButton();
});

When(/^User click on edit field option$/, {}, () => {
  browser.pause(2000);
  EventPage.clickOnEditFieldOption();
  browser.pause(2000);
});
When(/^For fourth field User click on edit field option$/, {}, () => {
  browser.pause(2000);
  $("(//li[contains(text(),'Edit Field')])[2]").click();
  browser.pause(2000);
});

When(/^User click on customize thenk you toggle button$/, {}, () => {
  EventPage.clickCustomThankyouToggleIsDisplay();

});
When(/^User click on blackout date link$/, {}, () => {
  EventPage.clickOnBlackoutDatesLink();

});

When(/^Click on first sunday from calender$/, {}, () => {
  EventPage.clickOnFirstSunday();

});

When(/^Click on select date calender$/, {}, () => {
  EventPage.selectDateField.click();
  browser.pause(3000);
});

When(/^Click on "Clear all Blackout Dates" link$/, {}, () => {
  EventPage.clickOnClearAllBlackoutDatesLink();
});

When(/^User select opcity (.*)$/, {}, (opcity) => {
  EventPage.selectOpcityOption(opcity);
});

When(/^For series event User click on upcoming session dropdown list$/, {}, () => {
  SeriesPage.clickOnUpcomingSessionButton();

});
When(/^User open URL contains (.*)$/, {}, (url) => {
  LoginPage.openUrlContails(url);


});
When(/^User click on "Save and show code" button$/, {}, () => {
  StandardPage.saveAndShowCodeButton.click();
});

When(/^User click on "Unarchive Event" session button$/, {}, () => {
  EventPage.clickOnUnarchiveEventButton();
});

When(/^User click on "Message" tab$/, {}, () => {
  browser.refresh();
  EventPage.clickOnMessageTab();
});

When(/^User delete all resources or materials (.*) from room tab$/, {}, (count) => {
  EventPage.deleteAllResources(count);
});

When(/^User edit poll resource question (.*)$/, {}, (question) => {
  EventPage.clickEditSettingsPollResourceLink();
  EventPage.addQuestionField(question);
});

When(/^User edit handout resource title (.*)$/, {}, (title) => {
  EventPage.clickEditSettingsHandoutResourceLink();
  EventPage.addHandoutTitleData(title);

});

When(/^User edit feature action resource title (.*)$/, {}, (title) => {
  EventPage.clickEditSettingsFeatureResourceLink();
  EventPage.addFeaturedTitleField(title);
});

When(/^User click on edit first material button$/, {}, () => {
  EventPage.clickOnEditFirstMaterialLink();

});
When(/^User click on edit second material button$/, {}, () => {
  EventPage.clickOnEditSecondMaterialLink();

});

When(/^User click on "public chat" tab$/, {}, () => {
  if (EventPage.publicChatTab.isDisplayed() === true) {
    EventPage.publicChatTab.click();
    browser.pause(3000);
  } else {
    throw new Error("Public chat option is not displaying on screen")
  }

});

When(/^User click on presenter session dropdown$/, {}, () => {
  MeetingRoomPage.clickOnPresenterSessionDropDown();

});
When(/^User edit admin name (.*)$/, {}, (updatedName) => {
  EventPage.fillEditAdminNameField(updatedName);

});

When(/^Click on moderator session dropdown$/, {}, () => {
  MeetingRoomPage.clickOnModeratorSessionDropDown();

});

When(/^Click on host session dropdown$/, {}, () => {
  MeetingRoomPage.clickOnHostSessionDropDown();

});

When(/^User select "Edit admin" option for presenter$/, {}, () => {
  MeetingRoomPage.clickOnEditAdminOptionForPresenter();
  browser.pause(1000);
});

When(/^For Moderator User select "Edit admin" option$/, {}, () => {
  MeetingRoomPage.clickOnEditAdminOptionForModerator();
  browser.pause(1000);
});

When(/^For Host User select "Edit admin" option$/, {}, () => {
  MeetingRoomPage.clickOnEditAdminOptionForHost();
  browser.pause(1000);
});

When(/^User edit admin role (.*)$/, {}, (role) => {
  MeetingRoomPage.selectRoleForEditAdmin(role);
  browser.pause(1000);
});

When(/^Attendee click on shared handout$/, {}, () => {
  EventPage.clickOnResourceDownloadButton();
  browser.pause(500);
});

When(/^User select host (.*) for event$/, {}, (host) => {
  EventPage.clickOnSelectHostButton();
  EventPage.selectHost(host);
});

When(/^User edit date or time (.*) after clicking on edit date time option$/, {}, (time) => {
  $("(//div[@class='session-options'])[2]//button").click();
  EventPage.editDateAndTimeOption.click();
  EventPage.updateEventTime(time);
  browser.keys(['Meta', 'Backspace']);
  const clockIcon = $('.ant-time-picker-clock-icon.anticon.anticon-clock-circle > svg');
  clockIcon.click();
  browser.pause(1000);
  const timeZone = $('(//li[@class="ant-time-picker-panel-select-option-selected"])[3]');
  timeZone.click();
  browser.pause(1000);
  $("//button[@class='ant-btn edit-date-comfirm Button animated fadeIn ant-btn-primary']").click();
  browser.pause(2000);
});

When(/^User select "Notify registrants" checkbox$/, {}, () => {
  EventPage.clickOnNotifyRegistrantsCheckbox();
});

When(/^User click on "All sessions" button of added admin$/, {}, () => {
  EventPage.clickOnAllSessionsButton();

});

When(/^User click on Download image or media option$/, {}, () => {
  EventPage.clickOnDownloadImageOrMediaOption();

});
When(/^User clicks on Delete image or media option$/, {}, () => {
  browser.pause(1000);
  EventPage.clickOnDeleteImageOrMediaOption();
  browser.pause(2000);
});

When(/^For registration user click on add presenter button$/, {}, () => {
  // const AddPresenterButton = $("(//button[@class='ant-btn Button animated fadeIn ant-btn-primary'])[2]");
  // AddPresenterButton.waitForClickable({ timeout: 10000 });
  // AddPresenterButton.click();
  browser.back();
});

When(/^User click on delete feature presenters$/, {}, () => {
  EventPage.clickOnDeleteFeaturePresentersButton();
});

When(/^Click on edit presenter button$/, {}, () => {
  EventPage.clickOnEditFeaturedPresenterButton();
});
When(/^For social User clicks upload option button$/, {}, () => {
  const optionButton = $("//div[@class='demio-upload-options-button ant-dropdown-trigger']");
  if (optionButton.isDisplayed() === true) {
    optionButton.click();

  } else {
    throw new Error("Option button is not displaying on screen")
  }
});

When(/^On Replay screen User clicks upload option button$/, {}, () => {
  const optionButton = $("//div[@class='demio-upload-bottom']");
  if (optionButton.isDisplayed() === true) {
    optionButton.click();

  } else {
    throw new Error("Option button is not displaying on screen")
  }
});

When(/^Add series event name in "Event Name" field (.*)$/, {}, (event) => {
  var data = TestUtils.getSeriesEventData(event); //Retrive data from excel
  browser.pause(6000);
  const eventName = data[0];
  EventPage.fillEventNameField(eventName);

})

When(/^For standard events User selects future time$/, {}, () => {
  EventPage.selectStandardEventTime();
});


When(/^User select active gdpr option$/, {}, () => {
  generalPage.clickOnActiveGdprSettings();

})

When(/^User select disabled gdpr option$/, {}, () => {
  generalPage.clickOnDisabledGdprSettings();

})

When(/^On general settings page user click on save button$/, {}, () => {
  generalPage.clickOnSaveButton();

})

When(/^In General settings page user click on language field$/, {}, () => {
  generalPage.clickOnLanguageField();

})

When(/^General settings page user click on timezone field$/, {}, () => {
  generalPage.clickOnTimeZoneField();

})

When(/^User fill new custom domain field (.*) and click on add button$/, {}, (domain) => {
  BrandingPage.fillCustomDomainField(domain);
  BrandingPage.clickOnAddCustomDomainButton();
})

When(/^User click on "Add custom domain" button$/, {}, () => {
  BrandingPage.clickOnAddCustomDomainLink();
  browser.pause(2000);
})

When(/^User clicks icon upload option button$/, {}, () => {
  BrandingPage.uploadOptionButtonForIcon.click();
  browser.pause(3000);
});

When(/^User clicks logo upload option button$/, {}, () => {
  BrandingPage.uploadOptionButtonForLogo.click();
  browser.pause(2000);
});

When(/^User click on icon upload option button$/, {}, () => {
  BrandingPage.uploadOptionButtonForIcon.click();
  browser.pause(2000);
});
When(/^User click on "Edit address" option$/, {}, () => {
  billingPage.clickOnEditAddressOption();
  browser.pause(2000);
});

When(/^User update billing name (.*) country (.*) address line one (.*) address line two (.*) city (.*) postal code (.*) state (.*)$/, {}, (billingName, countryName, address1, address2, city, postalCode, state) => {
  billingPage.fillBillingNameField(billingName);
  billingPage.selectCountryName(countryName);
  billingPage.fillAddressLineOneField(address1);
  billingPage.fillAddressLineTwoField(address2);
  billingPage.fillCityField(city);
  billingPage.fillPostalCodeField(postalCode);
  billingPage.selectStateNameField(state);

});

When(/^Chat screen is closed then click on open button$/, {}, () => {
  browser.pause(200);
  MeetingRoomPage.clickOnOpenChatButton();
});

When(/^Admin join session from URL and ends the session$/, {}, () => {
  EventPage.clickOnCustomizeTab();
  EventPage.clickOnEventAdminsTab();
  EventPage.clickOnGuestTab();
  browser.pause(1000);
  MeetingRoomPage.clickOnHostSessionDropDown();
  MeetingRoomPage.clickOnCopyJoinLinkButton();
  MeetingRoomPage.openJoinRoomLinkInFirstTab();
  // EventPage.switchToWindowNewTab();
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
  browser.refresh();
  EventPage.clickOnSummaryTab();
  // EventPage.clickOnPastSessionOption();
  AutomatedPage.clickOnPastSessionOption();
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 700000 });

});

When(/^User select start session time (.*)$/, {}, (futureTime) => {
  const button = $("//span[contains(text(),'Upcoming Sessions')]");
  button.waitForDisplayed({ timeout: 10000 });
  button.scrollIntoView(0, 100)
  button.click();
  EventPage.clickScheduleThisEventButton();
  EventPage.selectFutureDate();
  EventPage.selectStartSessionTime(futureTime);
  // EventPage.clickAddToEventScheduleButton();
});

When(/^User select start time and schedule new session (.*)$/, {}, (futureTime) => {
  const button = $("//span[contains(text(),'Upcoming Sessions')]");
  button.waitForDisplayed({ timeout: 10000 });
  button.scrollIntoView(0, 100)
  button.click();
  browser.pause(500);
  EventPage.clickScheduleThisEventButton();
  browser.pause(500);
  EventPage.selectFutureDate();
  EventPage.selectStartSessionTime(futureTime);
  EventPage.selectEndSessionTime();
  EventPage.clickAddToEventScheduleButton();
  browser.pause(3000);
});

When(/^User selects start time For standard events$/, {}, () => {
  EventPage.selectStandardEventStartTime();
});


When(/^User selects start time for automated events$/, {}, () => {
  EventPage.selectAutomatedEventStartTime();
});

When(/^User should able to edit start date or time (.*) after clicking on edit date time option$/, {}, (time) => {
  $("(//div[@class='session-options'])[2]//button").click();
  EventPage.editDateAndTimeOption.click();
  // EventPage.selectStartSessionTime(time);
  // browser.keys(['Meta', 'Backspace']);
  browser.pause(1500);
  const calendarIcon = $('//i[@class="anticon anticon-calendar ant-calendar-picker-icon"]');
  calendarIcon.click();
  browser.pause(1000);
  const todayDate = $("//tr[@class='ant-calendar-current-week ant-calendar-active-week']//div[@aria-selected='true'][@aria-disabled='false']");
  todayDate.click();
  browser.pause(500);
  $("//button[@class='ant-btn edit-date-comfirm Button animated fadeIn ant-btn-primary']").click();
  browser.pause(2000);
});



When(/^For End session User select session time$/, {}, () => {
  EventPage.selectEndSessionTime();
  // EventPage.clickAddToEventScheduleButton();
});

When(/^Manage your registration page user click on "Add To Calendar" button$/, {}, () => {
  browser.pause(3000);
  const addCalendarButton = $("(//div[@id='manage-registration']//button)[1]");
  addCalendarButton.click();
  browser.pause(3000);
});

When(/^For Automated event user select End session time$/, {}, () => {
  EventPage.selectFutureEndSessionTime();
});

When(/^Open copied url in new tab$/, {}, () => {
  const elem = $("//input[@class='join-link-input']");
  var urlValue = elem.getAttribute("value");
  MeetingRoomPage.openLinkInNewTab(urlValue);
  EventPage.clickOnJoinRoomBtnUnderJoin();
  if (EventPage.manageYourRegistrationLinkIsDisplay() === true) {
    console.log("user successfully redirect on event room window");
  } else {
    throw new Error("EVENT ROOM WINDOW IS NOT LOADED");
  }
});


When(/^Switch to iframe on recording customize screen$/, {}, () => {
  try {
    browser.switchToFrame($("//iframe[@id='reg-editor']"));
  } catch (error) {

  }
});

//---------------------//

When(/^User click on session dropdown on insights page$/, {}, () => {
  EventPage.clickOnSessionDropdownOnInsightsPage();
});


When(/^User selects "Date range" option$/, {}, () => {
  EventPage.clickOnDateRangeOption();
});

When(/^User select todays date from date range calendar$/, {}, () => {
  EventPage.clickOnDateRangeCalendarField();
  EventPage.clickOnCurrentDateOnDateRangeCalendar();
});

When(/^Admin ends second session$/, {}, () => {
  EventPage.clickOnJoinRoom();
  EventPage.switchToJoinWindow();
  var actURL = browser.getUrl();
  browser.url(actURL + "?skip");
  EventPage.clickOnJoinRoomBtnUnderJoin();
  browser.pause(3000);
  MeetingRoomPage.clickOnLeftHeaderSessionTitle();
  EventPage.clickOnEndSessionButton();
  MeetingRoomPage.clickOnYesEndButton();
  EventPage.closeResentWindow();
  EventPage.switchToManageEventWindow();
  browser.refresh();
  EventPage.clickOnSummaryTab();
  // EventPage.clickOnPastSessionOption();
  AutomatedPage.clickOnPastSessionOption();
  $("tr:nth-of-type(2) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 700000 });
  $("tr:nth-of-type(1) > td:nth-of-type(1)  .demio-icon.session-list-recording-button > path:nth-of-type(1)").waitForDisplayed({ timeout: 700000 });

});

When(/^User click On Chat option in room$/, {}, () => {
  MeetingRoomPage.clickOnChatOptionInRoom();
});

When(/^User click On complete payment button$/, {}, () => {
  browser.switchToParentFrame();
  starterSignUpPage.clickOnCompletePaymentButton();
});
When(/^User click On complete payment button$/, {}, () => {
  browser.switchToParentFrame();
  starterSignUpPage.clickOnCompletePaymentButton();
});

When(/^User click on "Pay" button$/, {}, () => {
  starterSignUpPage.clickOnPayButton();
  browser.pause(8000);
  browser.closeWindow();
  browser.switchToWindow(handle[0]);
});

When(/^User click on delete event option$/, {}, () => {
  archivedPage.clickOnDeleteEventButton();
});

When(/^User select "Questions" option from message filter$/, {}, () => {
  EventPage.clickOnMessageFilterButton();
  EventPage.selectQuestionMessageOption();
});

When(/^User click on "Sort By" filter dropdown and select option (.*)$/, {}, (option) => {
  HomePage.clickOnSortByFilterDropdown();
  HomePage.selectFilterOption(option);
});

When(/^User click delete field option$/, {}, () => {
  EventPage.clickOnDeleteFieldOption();
});
When(/^User click on custom code settings link$/, {}, () => {
  newIntegrationPage.clickOnCustomCodeSettingsLink();
});


When(/^User click schedule session button$/, {}, () => {
  EventPage.clickOnScheduleSessionButton();
});

When(/^Click on "Delete Recording" option$/, {}, () => {
  EventPage.clickOnDeleteRecordingOption();
});
When(/^User select country (.*) in billing address form$/, {}, (countryName1) => {
  billingPage.selectCountryName(countryName1);
});

When(/^Host deleted all resources from room$/, {}, () => {
  MeetingRoomPage.deleteFeatureResourceFromRoom();
  MeetingRoomPage.clickOnYesDeleteButton();
  MeetingRoomPage.clickOnPollsOption();
  MeetingRoomPage.deletePollResourceFromRoom();
  MeetingRoomPage.clickOnYesDeleteButton();
  MeetingRoomPage.clickOnHandoutsOption();
  browser.pause(500);
  MeetingRoomPage.deleteHandoutResourceFromRoom();
  MeetingRoomPage.clickOnYesDeleteButton();

});

When(/^User update all resource automatic launch time (.*)$/, {}, (updatedLaunchTime) => {
  browser.pause(1000)
  EventPage.clickEditSettingsPollResourceLink();
  browser.pause(1000)
  AutomatedPage.addLaunchTime(updatedLaunchTime);
  browser.pause(1000)
  EventPage.clickOnAddResourceButton();
  EventPage.clickEditSettingsHandoutResourceLink();
  browser.pause(1000)
  AutomatedPage.addLaunchTime(updatedLaunchTime);
  browser.pause(2000)
  EventPage.clickOnAddResourceButton();
  EventPage.clickEditSettingsFeatureResourceLink();
  browser.pause(1000)
  AutomatedPage.addLaunchTime(updatedLaunchTime);
  browser.pause(2000)
  EventPage.clickOnAddResourceButton();


});

When(/^User click on delete button and yes remove button$/, {}, () => {
  TeamPage.clickOnDeleteUserButton();
  browser.pause(1000);
  TeamPage.clickOnYesRemoveButton();

});

When(/^User Unchecked added member "Host ability" checkbox$/, {}, () => {
  TeamPage.uncheckEnabledHostAbilityCheckbox();
  try {
    TeamPage.clickOnYesRemoveButton();
  } catch (error) {

  }
});

When(/^User enable "Host ability" for member$/, {}, () => {
  TeamPage.checkDisabledHostAbilityCheckbox();
});


When(/^User enable "Visual effects" toggle button and select (.*) from drop down list$/, {}, (dropdownOption) => {
  MeetingRoomPage.enableVisualEffectToggleButton();
  MeetingRoomPage.selectDropdownOption(dropdownOption);
});

When(/^User delete already added visual effect image$/, {}, () => {
  browser.pause(2000);
  MeetingRoomPage.removeAlreadyAddedVisualEffectImage();
});

When(/^User upload visual effect image data (.*)$/, {}, (img) => {
  EventPage.uploadVisualEffectImageData(img);
  MeetingRoomPage.verifyUploadedVisualEffectImageUnderPopup();

});

When(/^User click on "Apply filter changes" button$/, {}, () => {
  MeetingRoomPage.clickOnApplyFilterChangesButton();
  MeetingRoomPage.clickOnCloseSettingPopover();
});

When(/^User Click on "Add New Event" dropdown on schedule tab$/, {}, () => {
  EventPage.clickOnAddNewEventButtonOnScheduleTab();
});

When(/^User shall see and select event option (.*) from dropdown$/, {}, (option) => {
  EventPage.selectDropdownOption(option);
});

When(/^User click on "Call to action" button$/, {}, () => {
  EventPage.turnOnCallToActionButton()
});

When(/^User click on CTA button$/, {}, () => {
  EventPage.clickOnAddedCtaButton();
});

When(/^User click on "Save settings" button$/, {}, () => {
  EventPage.clickOnSaveSettingsButton();
});


When(/^User send the emoji in chat message$/, {}, () => {
  EventPage.clickOnSmileOptionOnChatScreen();

});


When(/^User click on stop session from recurring option$/, {}, () => {
  EventPage.clickOnStopSessionFromRecurringOption();

});

When(/^For automated event User click on upcoming session dropdown list and select session$/, {}, () => {
  browser.pause(1000);
  AutomatedPage.clickOnUpcomingSessionButton();
  browser.pause(1000);
  const firstSession = $("(//div[@class='item scheduled'])[1]");
  if (firstSession.isDisplayed() === true) {
    firstSession.click();
  } else {
    throw new Error("Session list is not displaying on registration page");
  }
});


When(/^User click on "Upcoming session" under summary tab$/, {}, () => {
  EventPage.clickOnUpcomingSession();
});


When(/^User click on edit event name button$/, {}, () => {
  EventPage.clickOnEditEventIcon();
});

When(/^User Update Event name as (.*)$/, {}, (updatedName) => {
  EventPage.fillEditEventField(updatedName);
});

When(/^User click on save button under edit screen$/, {}, () => {
  EventPage.clickOnSaveEditEventButton();
});

When(/^User apply filter (.*) under people tab$/, {}, (filterOption) => {
  EventPage.clickOnFilterButtonUnderPeopleTab();
  browser.pause(100);
  $("//li[contains(text(),'" + filterOption + "')]").click();
  browser.pause(1000);

});

When(/^User click on missed count under summary tab$/, {}, () => {
  EventPage.clickOnMissedCountInSummary();
});

When(/^User click on attendees count under summary tab$/, {}, () => {
  EventPage.clickOnAttendedCountInSummary();
});

When(/^User click on register count under summary tab$/, {}, () => {
  EventPage.clickOnRegisteredCountInSummary();
});

When(/^User click on message count under summary tab$/, {}, () => {
  EventPage.clickOnMessageCountInSummary();
});

When(/^User click on insights option under activity area$/, {}, () => {
  EventPage.clickOnInsightsOptionInActivity();

});

When(/^User click on missed count under insights$/, {}, () => {
  EventPage.clickOnMissedCountInInsights();
});

When(/^User click on attendees count under insights$/, {}, () => {
  EventPage.clickOnAttendedCountInInsights();
});

When(/^User click on register count under insights$/, {}, () => {
  EventPage.clickOnRegisteredCountInInsights();
});

When(/^User click on message count under insights$/, {}, () => {
  EventPage.clickOnMessageCountInInsights();
});
