import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";

class AllPage extends Base {
     /*---------------------POM---------------*/
    get allTab() {
        return $('//span[contains(text(),"all")]');
      }


 //-----------------------ACTION METHODS--------------//
      
 allTabIsDisplayed() {
    return this.allTab.isDisplayed();
  }

  
  validateAllTab(){
    if(this.allTabIsDisplayed()==true){
      console.log("all tab is displaying sucessfully");
    }else{
      throw new Error("ALL TAB IS NOT DISPLAYED");
    }
  }
  openAllTab() {
    if (this.allTab.isDisplayed()) {
      this.allTab.click();
    } else {

      throw new Error("All tab is not clickable..!!!")
    }
  }

}

export default new AllPage();
