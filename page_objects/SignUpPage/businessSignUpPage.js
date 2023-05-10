import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";
class BusinessSignUpPage extends Base {
   /*---------------------POM---------------*/

   get businessPageHeadline() {
    return $('.headline span');
  }


    //-----------------------ACTION METHODS--------------//
    openBusinessUrl() {

        super.open("https://my.staging.demio.com/package/buy/business-plan-monthly");
       
        this.businessPageHeadline.waitForDisplayed({ timeOut: 30000 });
        this.validateBusinessSignUpPage(); 
      
      }
      validateBusinessSignUpPage(){
        var actHeadline=this.businessPageHeadline.getText();
        var expHeadline="Business - Monthly";
        if(actHeadline.includes(expHeadline)){
          console.log("user redirect on business signup page");
        }else{
          console.log("actual headline>>"+actHeadline + "expected headline>>"+expHeadline);
          throw new Error("BUSINESS SIGNUP PAGE IS NOT LOADED");
        }

      }

}

export default new BusinessSignUpPage();
