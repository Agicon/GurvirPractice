
Feature: Verify demio sigh up for a growth feature
  As a User i want to check growth sign up feature of demio web app

  Background:
    Given the user should open the growth URL

  Scenario Outline: Check User is able to create a account with Growth plan.
    When User enters "First name" <firstName>
    When User enters "Last name" <lastName>
    When User enters "email" <email>
    When User enters "card holders name" <cardHolderName>
    When User enters "card number" <cardNumber>
    When User enters "card Expiry date" month <expiryMonth> year <expiryYear>
    When User enters "cvv or cvv2" <cvvData>
    When User clicks on "Create My Account" button
    Then User should be redirected at "Set Password" screen
    When User enters "Password" <password>
    When User enters "Confirm Password" <confirmPassword>
    When User clicks on "Set Password" button
    Then User should be redirect to company name field
    When User fill the company name field as <companyName>
    When User click on "Continue" button
    When User select "No, we're just starting out" option
    When User select <selectAnOption> from dropdown list
    When User click on "Continue" button
    When User click on "Ready to launch" button
    When For access my account user select <optionForAccess> from dropdown list
    When User click on "Access My Account" button
    Then User should be redirect to home page
    Examples:
      | firstName | lastName | email                       | cardHolderName | cardNumber       | expiryMonth | expiryYear | cvvData | password   | confirmPassword | companyName | selectAnOption     | optionForAccess |
      | Auto      | TestT1   | tester.desk24+t18@gmail.com | dest user      | 4000056655665556 | 02          | 2022       | 215     | Testing123 | Testing123      | A1 company  | Generate new leads | Google Search   |


      
