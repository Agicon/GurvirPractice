# END TO END TEST CASES ADDED ONLY

Feature: Verify demio sigh up for a free trial feature
  As a User i want to check Free trial sign up feature of demio web app

  Background:
        Given User should be on login page



  #POST-DEPLOYEMENT
  Scenario: Check user is able to click on "sign up for free trial" link
    When User click on "sign up for free trial" link
    Then User should redirect on "Try Demio For Free" page


  #POST-DEPLOYEMENT
  Scenario Outline: Check user is able to Build demio account in simple steps
         Given User should be on Home page
        Given User should signup with a new trial account using <fullName> WorkEmail <workEmail> password <password> and company name <companyName>
        Given User should able to build demio account with company name <companyName> and by selecting <selectAnOption> and <optionForAccess>
        Then User should be redirect to home page
        Examples:
            | fullName   | password   | companyName | eventName                            | workEmail |selectAnOption|optionForAccess|
            | Auto7 Test | AutoTestA7 | A1 company  | My First Webinar Experience on Demio | A         |Generate new leads|Google Search|
