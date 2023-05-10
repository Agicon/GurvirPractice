import Base from "../testBase";
import TestUtils from "../testUtils";
import HomePage from "../HomePage/homePage";

class LoginPage extends Base {
  /*---------------------POM---------------*/
  get userNameField() {
    return $('//*[@id="email"]');
  }
  get passwordField() {
    return $('//*[@id="password"]');
  }

  get loginButton() {
    return $("//button[contains(text(),'LOGIN')]|//button[@type='submit']");
  }

  get forgotYourPasswordLinks() {
    return $('//*[@id="user-login"]/div/div[2]/div[3]');
  }

  get SignUpForAFreeTrialLinks() {
    return $('//*[@id="user-login"]/div/div[3]/a');
  }

  get demioLogo() {
    return $('//*[@id="user-login"]/div/img');
  }


  get forgotYourPasswordLink() {
    return $('//div[@id="user-login"]//a[.="Forgot your password?"]');
  }

  get forgotYourPasswordScreenTitle() {
    return $('//div[@id="user-login"]//div[@class="login-title"]');
  }

  get resetMyPasswordButton() {
    return $('//*[@id="user-login"]/div/div[2]/button')
  }

  get goBackToLogin() {
    return $('//*[@id="user-login"]/div/div[3]/a');
  }
  get validationMessage() {
    return $('//*[@id="user-login"]/div/div[2]/div[1]/div');

  }
  /*-----------Action Methos---------------*/

  clickOnResetPasswordButton() {
    this.resetMyPasswordButton.waitForDisplayed({ timeOut: 3000 });
    if (this.resetMyPasswordButton.isDisplayed()) {
      this.resetMyPasswordButton.click();

    } else {
      throw new Error("Reset Password Button is not clickable")
    }
  }

  clickOnGoBackToLogin() {

    this.goBackToLogin.waitForDisplayed({ timeOut: 3000 })
    if (this.goBackToLogin.isDisplayed()) {
      this.goBackToLogin.click();
    } else {
      throw new Error("Go Back To Login Button is not clickable")
    }
  }

  openLoginPageUrl(url) {
    browser.deleteAllCookies();
try {
  if($("//a[contains(text(),'Log in to your account')]").isDisplayed()===true){
    $("//a[contains(text(),'Log in to your account')]").click();
  }else{
    console.log('Hold on, we need to confirm it’s you.')
  }
  
} catch (error) {
  
}
    browser.pause(1000);
    var data = TestUtils.getUserCredetials(url); //Retrive data from excel
    browser.pause(1000);
    var url = data[0];
    console.log('LOGIN PAGE URL:' + url);
    browser.url(url);
    this.validateLoginPage();
  
  }
  openLoginPage() {
    browser.deleteAllCookies();
try {
  if($("//a[contains(text(),'Log in to your account')]").isDisplayed()===true){
    $("//a[contains(text(),'Log in to your account')]").click();
  }else{
    console.log('Hold on, we need to confirm it’s you.')
  }
  
} catch (error) {
  
}
    browser.pause(1000);
    var data = TestUtils.getUserCredetials(url); //Retrive data from excel
    browser.pause(1000);
    var url = data[0];
    console.log('LOGIN PAGE URL:' + url);
    browser.url(url);
    this.validateLoginPage();
  
  }

  validateLoginPage() {
    var title = browser.getTitle();
    browser.pause(1000);
    console.log("Title:" + title);
    if (browser.getTitle() === 'Login - Demio') {
      console.log("login page loaded");
    } else {
      throw new Error('Login Page is not loaded..!')
    }
  }

  fillUserNameField(userName) {
    this.userNameField.click();
    browser.pause(3000);
    this.userNameField.setValue(userName);
    browser.pause(3000);
  }

  fillPasswordField(password) {
    this.passwordField.setValue(password);
  }

  clickOnLoginButton() {
    this.loginButton.waitForDisplayed({ timeOut: 3000 });
    this.loginButton.click();
  }

  logInWithUser(userName) {
    var data = TestUtils.getUserCredetials(userName); //Retrive data from excel
    browser.pause(3000);
    const userid = data[0];
    const password = data[1];
    // this.openLoginPage();
    this.fillUserNameField(userid);
    this.fillPasswordField(password);
    this.clickOnLoginButton();
    HomePage.validateHomePage();
  }

  clickOnForgotPasswordLink() {
    if (this.forgotYourPasswordLink.isDisplayed()) {
      this.forgotYourPasswordLink.click();
      browser.pause(10000);
    } else {
      throw new Error("Forgot your password link is not displaying ..!")
    }

  }

  validateForgotYourPasswordScreen() {
    if (this.forgotYourPasswordScreenTitle.isDisplayed() == true) {
      console.log("User successfully redirect on forgot your password screen");
    } else {
      throw new Error("Forgot your password link is not working");
    }
  }

  getInformativeText() {
    this.validationMessage.waitForDisplayed({ timeOut: 3000 });
    return this.validationMessage.getText();

  }

  checkPasswordEmailValidation(text) {
    if (this.getInformativeText() === text) {
      console.log("Validation message is appeared")
    } else {
      console.log("ACTUAL: " + this.getInformativeText() + "  EXPECTED: " + text);
      throw new Error("SOMETHINGS GOES WROMG..!!")
    }
  }

  checkForgotPasswordInformativeText(text) {
    if (this.getInformativeText() === text) {
      console.log("Validation message is appeared")
    } else {
      throw new Error("SOMETHINGS GOES WROMG..!!INFORMATIVE MESSAGE MISSMATCHED ACTUAL: " + this.getInformativeText() + "  EXPECTED: " + text)
    }

  }

  openUrlContails(url){
    var actURL = browser.getUrl().replace("skip","");
    var data = TestUtils.getUserCredetials(url); //Retrive data from excel
    browser.pause(1000);
    var url = data[0];
       const url1 = String(url);
    
   browser.url(actURL+url1);
  }
}

export default new LoginPage();
