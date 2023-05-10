import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";

class StarterSignUpPage extends Base {
    /*---------------------POM---------------*/
    get firstNameField() {
        return $('//input[@name="firstName"]');
      }

      get lastNameField() {
        return $('//input[@name="lastName"]');
      }

      get emailField() {
        return $('//input[@name="email"]');
      }

      get cardHolderNameField() {
        return $('//input[@name="cardHolderName"]');
      }

      get cardNumberField() {
        return $('//input[@id="cardNumber"]');
      }

         get expirationMonthField() {
        return $('//input[@id="cardExpiry"]');
      }

      get expirationYearField() {
        return $('//input[@id="cardExpiry"]');
      }

      get cvvField() {
        return $('//input[@id="cardCvc"]');
      }

      get createMyAccountButton() {
        return $('//button[contains(text(),"Create My Account")]');
      }

      get passwordField() {
        return $('//input[@id="password"]');
      }
      
      get confirmPasswordField() {
        return $('//input[@id="password-confirmation"]');
      }

      get setPasswordButton() {
        return $('//button[@class="login-button"]');
      }

      get completePaymentButton() {
        return $('//button[contains(text(),"Complete Payment")]');
      }
      get confirmInvoiceLink() {
        return $('//a[@rel="noreferrer"]');
      }
      get payButton() {
        return $('//div[@class="SubmitButton-IconContainer"]');
      }
      
      
     //-----------------------ACTION METHODS--------------//

     openStarterUrl() {

        super.open("https://my.dev.demio.com/package/buy/starter-50-attendee-annual");
       
        this.firstNameField.waitForDisplayed({ timeOut: 30000 });
       
        // this.validateLoginPage();
      }

    //   validateLoginPage() {
    //     var title = browser.getTitle();
    //     console.log("Title:" + title);
    //     if (browser.getTitle() === 'Login - Demio') {
    //       console.log("login page loaded");
    //     } else {
    //       throw new Error('Login Page is not loaded..!')
    //     }
    //   }

    fillFirstNameField(firstName){
        this.firstNameField.setValue(firstName);

    }

    fillLastNameField(lastName){
        this.lastNameField.setValue(lastName);
        
    }


    fillEmailField(email){

      var rNo = Math.floor(Math.random() * 999998);
      // var uName = fullName + rNo;
      var emailAddress = email.replace("@gmail.com", rNo + "@gmail.com");
        this.emailField.setValue(emailAddress);
        
    }
        
    

    fillCardHolderNameField(cardHolderName){
        this.cardHolderNameField.setValue(cardHolderName);
        
    }

    fillCardNumberField(cardNumber){
      this.cardNumberField.waitForDisplayed({timeout:20000});
      this.cardNumberField.click();
      browser.pause(200);
        this.cardNumberField.setValue(cardNumber);
        
    }


    selectExpiryMonth(expiryMonth){
        this.expirationMonthField.click();
        this.expirationMonthField.setValue(expiryMonth);
        
    }

    selectExpiryYear(expiryYear){
        this.expirationYearField.setValue(expiryYear);
    }
    fillCvvField(cvvData){
      this.cvvField.click();
        this.cvvField.setValue(cvvData);
        
    }

    clickOnCreateMyAccountButton(){
        // do {
          this.createMyAccountButton.click();
          browser.pause(500);
        // }
        // while (this.firstNameField.isDisplayed() === true);

    }

    validateSetPasswordScreen(){
        if(this.passwordField.isDisplayed()==true){
            console.log("user redirect on set password screen");
        }else{
            throw new Error("SET PASSWORD SCREEN IS NOT LOADED");
        }
    }

    fillPasswordField(password){
        this.passwordField.setValue(password);
    }

    fillConfirmPasswordField(confirmPassword){
        this.confirmPasswordField.setValue(confirmPassword);
    }

    fillConfirmPasswordField(confirmPassword){
        this.confirmPasswordField.setValue(confirmPassword);
    }

    clickOnSetPasswordButton(){
   this.setPasswordButton.click();
   browser.pause(10000);
    }

    clickOnCompletePaymentButton(){
      if (this.completePaymentButton.isDisplayed()===true) {
        this.completePaymentButton.click();
        this.confirmInvoiceLink.waitForDisplayed({timeout:20000});
      } else {
        throw new Error("Complete payment button is not displaying on screen");
      }
    }

    clickOnConfirmInvoiceLink(){
      if (this.confirmInvoiceLink.isDisplayed()===true) {
        this.confirmInvoiceLink.click();
      } else {
        throw new Error("Confirm invoice link is not displaying on screen");
      }
    }

    clickOnPayButton(){
      if (this.payButton.isDisplayed()===true) {
        this.payButton.click();
        browser.pause(2000);
      } else {
        throw new Error("Pay button is not displaying on screen");
      }
    }
    }

    export default new StarterSignUpPage();
    