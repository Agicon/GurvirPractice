import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";
class GrowthSignUpPage extends Base {
   /*---------------------POM---------------*/

   get growthPageHeadline() {
    return $('.headline span');
  }






    //-----------------------ACTION METHODS--------------//
    openGrowthUrl() {

        super.open("https://my.staging.demio.com/package/buy/growth-plan-150-attendees");
       
         this.growthPageHeadline.waitForDisplayed({ timeOut: 30000 });
       this.validateGrowthSignUpPage();
      
      }


      validateGrowthSignUpPage(){
        var actHeadline=this.growthPageHeadline.getText();
        var expHeadline="Growth Plan - Monthly";
        if(actHeadline.includes(expHeadline)){
          console.log("user redirect on growth signup page");
        }else{
          console.log("actual headline>>"+actHeadline + "expected headline>>"+expHeadline);
          throw new Error("GROWTH SIGNUP PAGE IS NOT LOADED");
        }

      }
}


export default new GrowthSignUpPage();
