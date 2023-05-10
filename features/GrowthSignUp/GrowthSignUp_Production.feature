
Feature: Verify demio sigh up for a growth feature
  As a User i want to check growth sign up feature of demio web app

 Background:
  Scenario Outline: User redirect on growth signup page
    Given User should redirect on <url> login page
    Examples:
    |url|
    |growthSignUpProduction|


  Scenario Outline: Check User is able to create a account with Growth plan.
    When User enters "First name" <firstName>
    When User enters "Last name" <lastName>
    When User enters "email" <email>
    When User enters "Password" <password>
    Then User is able to select country name <country>
    When User clicks on "Create My Account" button
    Then User refresh screen
    Then Click on confirm invoice link
    # When User enters "card number" <cardNumber>
    # When User enters "card Expiry date" month <expiryMonth> year <expiryYear>
    # When User enters "cvv or cvv2" <cvvData>
    When User click on "Pay" button
    Examples:
      | firstName | lastName | email                       | cardHolderName | cardNumber       | expiryMonth | expiryYear | cvvData | password   | confirmPassword | companyName | selectAnOption     | optionForAccess |
      | Auto      | TestT1   | tester.desk24+t18@gmail.com | dest user      | 4000056655665556 | 02          | 2022       | 215     | Testing123 | Testing123      | A1 company  | Generate new leads | Google Search   |


      
