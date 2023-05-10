import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";


class HomePage extends Base {
  /*---------------------POM---------------*/
  get scheduleTab() {
    return $('//*[@id="main-menu"]/div/div[1]/a[1]');
  }
  get eventsTab() {
    return $('//*[@id="main-menu"]/div/div[1]/a[2]/span/div');
  }

  get searchEventField() {
    return $('//input[@class="ant-input"]');
  }

  get eventNameField() {
    return $('//input[@placeholder="Enter a Name"]');
  }

  get continueButton() {
    return $('//button//span[contains(text(),"CONTINUE")]');
  }

  get swapHostButton() {
    return $('//*[@id="event-manage-root"]/div/div[2]/div/div[2]/div[1]/form/div[2]/div[2]/div/span/div/span/button');
  }

  get demioLogo() {
    return $('/html/body/header/div/div[1]/div[1]/a');
  }

  get helpButton() {
    return $('//*[@id="main-menu"]/div/div[2]/a/span/div');

  }

  get userMenuButton() {
    return $('//*[@id="user-menu"]/div/div/div/div/div[2]')
  }


  get chatWithUsOption() {
    return $('//div[contains(text(),"Chat With Us")]')
  }

  get knowledgeBaseOption() {
    return $('//a[@href="http://help.demio.com/"]')
  }

  get demioUniversityOption() {
    return $('//a[@href="https://university.demio.com/"]')
  }

  get profileOption() {
    return $('//a[@href="/manage/settings/profile"]')
  }

  get settingsOption() {
    return $('//a[@href="/manage/settings/general"]')
  }

  get refferalProgramOption() {
    return $('//a[@href="/manage/referral-program"]')
  }

  get productUpdatesOption() {
    return $('//a[@href="https://updates.demio.com/"]')
  }

  get growthFormulaOption() {
    return $('//a[@href="/manage/growth-formula"]')
  }

  get logoutOption() {
    return $('//a[@href="/logout"]')
  }

  get allUpcomingOption() {
    return $('//li[contains(text(),"All Upcoming")]')
  }

  get allPastOption() {
    return $('//li[contains(text(),"All Past")]')
  }

  get upcomingTodayOption() {
    return $('//li[contains(text(),"Upcoming Today")]')
  }

  get upcomingThisWeekOption() {
    return $('//li[contains(text(),"Upcoming This Week")]')
  }
  get upcomingThisMonthOption() {
    return $('//li[contains(text(),"Upcoming This Month")]')
  }

  get scheduleDropDown() {
    return $('[role="combobox"]')
  }

  get manageAccountOption() {
    return $('//a[@href="/manage/user/index"]')
  }

  get growthFormulaOption() {
    return $('//a[@href="/manage/growth-formula"]')
  }
  get manageAccountsOption() {
    return $('//a[@href="/manage/user/index"]')
  }
  get webinarStatusOption() {
    return $('//a[@href="/manage/status"]')
  }
  get statisticDataStorageOption() {
    return $('//a[@href="/manage/tools/statistic-snapshot"]')
  }
  get systemOption() {
    return $('//a[@href="/manage/system"]')
  }
  get sortByFilterDropdown() {
    return $('//div[@class="events-sort-by"]//div//div//div//div')
  }
  //-----------------------ACTION METHODS--------------//

  userMenuButtonIsDisplay() {
    this.userMenuButton.waitForDisplayed({ timeout: 6000 });
    return this.userMenuButton.isDisplayed();
  }

  helpBuittonIsDisplay() {
    this.helpButton.waitForDisplayed({ timeout: 6000 });
    return this.helpButton.isDisplayed()
  }

  clickOnDemioIcon() {
    if (this.demioLogoIsDisplay() === true) {
      this.demioLogo.click();
    } else {
      throw new Error("Demio logo is not dispayed")
    }

  }

  demioLogoIsDisplay() {
    this.demioLogo.waitForDisplayed({ timeout: 10000 });
    return this.demioLogo.isDisplayed();

  }
  redirectHomePage(url) {
 
    var data = TestUtils.getUserCredetials(url); //Retrive data from excel
    browser.pause(1000);
    var url = data[0];
    console.log('HOMEPAGE URL:' + url);

    const url1 = String(url);
    console.log("QWERTY" + url1)
    super.open(url1);
    browser.maximizeWindow();
    try {
      const handles = browser.getWindowHandles();
      if (handles.length > 1) {
        
        for (var i = 1; i < handles.length; i++) {
          const handles = browser.getWindowHandles();
          browser.switchToWindow(handles[1]);
          browser.closeWindow();
          browser.switchToWindow(handles[0]);
          
        }

      }

    } catch (error) {

    }
  }
    closeExtraTabs() {
    const handles = browser.getWindowHandles();
    if (handles.length > 0) {
      for (var i = 1; i < handles.length; i++) {
            const handles = browser.getWindowHandles();
            browser.switchToWindow(handles[1]);
            browser.closeWindow();
            browser.switchToWindow(handles[0]);
      }
    } else {
      console.log("parent window");
    }
  }

  openHomePage() {
 
    var data = TestUtils.getUserCredetials('homePageUrl'); //Retrive data from excel
    browser.pause(1000);
    var homePageUrl = data[0];
    console.log('HOMEPAGE URL:' + homePageUrl);

    const url1 = String(homePageUrl);
    console.log("QWERTY" + url1)
    super.open(url1);
    browser.maximizeWindow();
    try {
      const handles = browser.getWindowHandles();
      if (handles.length > 1) {
        
        for (var i = 1; i < handles.length; i++) {
          const handles = browser.getWindowHandles();
          browser.switchToWindow(handles[1]);
          browser.closeWindow();
          browser.switchToWindow(handles[0]);
          
        }

      }

    } catch (error) {

    }



  }

  checkSheduleTabByDefaultOpen() {
    const attribute = $('//a[@class="menu-item active"]').getAttribute('class');
    if (attribute === 'menu-item active') {
      console.log("By Default shedule tab is opened.");
    } else {
      throw new Error("Shedule tab is not open By deafault")
    }
  }

  checkEventTabOpen() {
    const attribute = $('//div[@class="events-header-filter-container --active"]');
    if (attribute.isDisplayed()===true) {
      console.log("Event tab  is opened.");
    } else {
      throw new Error("Event  tab is not open")
    }
  }


  clickOnHelpButton() {
    if (this.helpBuittonIsDisplay() === true) {
      this.helpButton.click();
    } else {
      throw new Error("Help button is not dispayed")
    }

  }


  chatWithUsIsDisplayed() {
    this.chatWithUsOption.waitForDisplayed({ timeout: 10000 });
    return this.chatWithUsOption.isDisplayed();

  }

  knowledgeBaseIsDisplayed() {
    this.knowledgeBaseOption.waitForDisplayed({ timeout: 10000 });
    return this.knowledgeBaseOption.isDisplayed();

  }

  demioUniversityIsDisplayed() {
    this.demioUniversityOption.waitForDisplayed({ timeout: 10000 });
    return this.demioUniversityOption.isDisplayed();

  }

  clickOnUserMenuButton() {
    if (this.userMenuButtonIsDisplay() === true) {
      this.userMenuButton.click();
      browser.pause(1000);
    } else {
      throw new Error("user menu button is not dispayed")
    }

  }
  profileIsDisplayed() {
    this.profileOption.waitForDisplayed({ timeout: 10000 });
    return this.profileOption.isDisplayed();

  }

  settingsIsDisplayed() {
    this.settingsOption.waitForDisplayed({ timeout: 8000 });
    return this.settingsOption.isDisplayed();

  }

  openSettingsOption() {
    if (this.settingsIsDisplayed() === true) {
      this.settingsOption.click();
    } else {
      throw new Error("Somethings went wrong at Settings Option button ")
    }
  }



  refferalProgramIsDisplayed() {
    this.refferalProgramOption.waitForDisplayed({ timeout: 8000 });
    return this.refferalProgramOption.isDisplayed();

  }
  productUpdatesIsDisplayed() {
    this.productUpdatesOption.waitForDisplayed({ timeout: 8000 });
    return this.productUpdatesOption.isDisplayed();

  }

  growthFormulaIsDisplayed() {
    this.growthFormulaOption.waitForDisplayed({ timeout: 8000 });
    return this.growthFormulaOption.isDisplayed();

  }
  logOutIsDisplayed() {
    this.logoutOption.waitForDisplayed({ timeout: 8000 });
    return this.logoutOption.isDisplayed();

  }

  allUpcomingIsDisplay() {
    this.allUpcomingOption.waitForDisplayed({ timeout: 8000 });
    return this.allUpcomingOption.isDisplayed();
  }

  allPastIsDisplay() {
    this.allPastOption.waitForDisplayed({ timeout: 8000 });
    return this.allPastOption.isDisplayed();
  }

  upcomingTodayIsDisplay() {
    this.upcomingTodayOption.waitForDisplayed({ timeout: 8000 });
    return this.upcomingTodayOption.isDisplayed();
  }

  upcomingThisWeekIsDisplay() {
    this.upcomingThisWeekOption.waitForDisplayed({ timeout: 8000 });
    return this.upcomingThisWeekOption.isDisplayed();
  }

  upcomingThisMonthIsDisplay() {
    this.upcomingThisWeekOption.waitForDisplayed({ timeout: 8000 });
    return this.upcomingThisMonthOption.isDisplayed();
  }

  scheduleDropDownIsDisplayed() {
    this.scheduleDropDown.waitForDisplayed({ timeout: 8000 });
    return this.scheduleDropDown.isDisplayed();
  }
  openScheduleDropDown() {
    if (this.scheduleDropDownIsDisplayed() === true) {
      this.scheduleDropDown.click();
    } else {
      throw new Error("Schedule dropDown is not dispayed")
    }
  }

  scheduleTabIsDisplayed() {
    this.scheduleTab.waitForExist({ timeout: 50000 });
    return this.scheduleTab.isExisting();
  }

  scheduleTabIsExist() {
    browser.pause(4000);
    return this.scheduleTab.isExisting();
  }

  eventsTabIsDisplayed() {
    this.eventsTab.waitForDisplayed({ timeout: 8000 });
    return this.eventsTab.isDisplayed();
  }

  validateHomePage() {

    console.log("DASHBOARD URL:" + browser.getUrl())
    if (this.scheduleTabIsDisplayed() === true) {
      console.log("Login Success..!!")
    } else {
      throw new Error("LOGIN FAILED");
    }
  }

  openSeheduleTab() {
    if (this.scheduleTab.isDisplayed()) {
      this.scheduleTab.click();
    } else {

      throw new Error("Shedule tab is not clickable..!!!")
    }
  }


  openEventsTab() {
    if (this.eventsTabIsDisplayed() === true) {
      this.eventsTab.click();
      browser.pause(1000);
    } else {
      throw new Error("Event tab is not clickable ..!")
    }
  }

  clickOnAddNewEventButton() {
    if (this.addNewEventButton.isDisplayed()) {
      this.addNewEventButton.click();
    } else {
      throw new Error("Add new event button is not clickable ..!")
    }
  }


  clickOnSwapHostButton() {
    if (this.swapHostButton.isDisplayed()) {
      this.swapHostButton.click();
    } else {
      throw new Error("Swap host button is not clickable..!!!")
    }
  }
  fillDataNameInSearchEventField(data) {
    this.searchEventField.setValue(data);
  }
  selectScheduleDropDownOption(option) {
    const scheduleOption = $("//li[contains(text(),'" + option + "')]");
    scheduleOption.click();
  }

  openUrlInNewTabS(url){
    super.openUrlInNewTab(url);
  }
  clickOnManageAccountsOption(){
if (this.manageAccountOption.isDisplayed()===true) {
  this.manageAccountOption.click();
  
} else {
  throw new Error("Manage accounts option is not displaying")
}
  }


  searchAccountNameInManageAccountsScreen(userName){
    var data = TestUtils.getUserCredetials(userName); //Retrive data from excel
    browser.pause(6000);
   const useridValue = data[0];
    const password = data[1];
    const userid=useridValue.toLowerCase();
    const searchField=$("//input[@id='email']");
    searchField.setValue(userid);
    const searchIcon=$("//button[@class='dm button primary']");
    searchIcon.click();

browser.pause(3000);
   const actualAccount1=$("(//table[@class='table table-striped table-responsive table-hover']//td)[2]//a");
   var actualAccount=actualAccount1.getText();
   if (actualAccount.includes(userid)) {
        actualAccount1.click();
   } else {
    throw new Error("Failed to search account name actual name>>"+actualAccount+"Expected name>>"+userid);
   }
  }

  manageAccountOptionIsDisplayed() {
    this.manageAccountOption.waitForDisplayed({ timeout: 8000 });
    return this.manageAccountOption.isDisplayed();

  }
  growthFormulaOptionIsDisplayed() {
    this.growthFormulaOption.waitForDisplayed({ timeout: 8000 });
    return this.growthFormulaOption.isDisplayed();

  }
  webinarStatusOptionIsDisplayed() {
    this.webinarStatusOption.waitForDisplayed({ timeout: 8000 });
    return this.webinarStatusOption.isDisplayed();

  }
  statisticDataStorageOptionIsDisplayed() {
    this.statisticDataStorageOption.waitForDisplayed({ timeout: 8000 });
    return this.statisticDataStorageOption.isDisplayed();

  }
  systemOptionIsDisplayed() {
    this.systemOption.waitForDisplayed({ timeout: 8000 });
    return this.systemOption.isDisplayed();

  }

clickOnSortByFilterDropdown(){
  browser.pause(1000);
  if (this.sortByFilterDropdown.isDisplayed()===true) {
    this.sortByFilterDropdown.click();
  } else {
    throw new Error("Sort by filter drop down is not displaying");
  }
}

selectFilterOption(option){
  const filterOption=$("//li[contains(text(),'"+option+"')]");
  filterOption.click();
  browser.pause(3000);
}

}



export default new HomePage();