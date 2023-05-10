# END TO END TEST CASES ADDED ONLY

Feature: Verify demio sigh up for a free trial feature
  As a User i want to check Free trial sign up feature of demio web app

  Background:
    Given User should be on login page


  #POST-DEPLOYEMENT
    Scenario: Check user is able to click on "sign up for free trial" link
     Given User should be on login page
        When User click on "sign up for free trial" link
        Then User should redirect on "Try Demio For Free" page

 #POST-DEPLOYEMENT
  Scenario Outline: Check user is able to Build demio account in simple steps
  Given User should be on login page
    Given User must have created free trial account with name <fullName> email <workEmail> and password <password>
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
      | fullName   | password   | companyName |selectAnOption|optionForAccess|
      | Auto7 Test | AutoTestA7 | A1 company  |Generate new leads|Google Search|

    