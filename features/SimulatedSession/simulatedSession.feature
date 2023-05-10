Feature: Verify demio Simulated Session feature
    ​
    Background:
        Given User should be on Home page
  

    Scenario Outline: Verify if it automatically adds a simulated session when user signup and login
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
    Then User shall see Simulated event on the homepage name as <eventName>
    Examples:
      | fullName   | password   | companyName |selectAnOption|optionForAccess|eventName                            |
      | Auto7 Test | AutoTestA7 | A1 company  |Generate new leads|Google Search|My First Webinar Experience on Demio |

       
    Scenario: Verify if join room button is enabled for simulated event
        Given User should be on Home page
        Then User shall see simulated event with "Join room" button
        When User clicks on "Join Room" button
        Then User shoud be able to run the Simulated session
 
 
  Scenario: Verify if user joins as admins on clicking the join room button for simulated session
        When User clicks on "Join Room" button
        When User clicks on "Join Room" button under welcome screen for simulated Event
        Then User shall see Simulated video
        When The simulated video ends
      
    Scenario: User should'nt be able to add more session to the simulated event
        Then User shall see simulated event with "Join room" button
        When User clicks on simulated event
        Then User shall see disabled "Schedule Session" button
        Then User should not be able to add Session in simulated event
