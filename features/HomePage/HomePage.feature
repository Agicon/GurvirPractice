Feature: Verify home page features
    As a User i want to check home feature

    Background:
        Given User should be on Home page

    #Done
    Scenario Outline: Check availability of "Home" page
        Given User should be on login page
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should be redirect to home page
        Then By default "Schedule" tab should be selected in Header
        Examples:
            | userName                   | password   |
            | tester.desk4+tl2@gmail.com | Testing12! |

    #Done
    Scenario: Check availability/functionality of "demio" logo
        When Go to top-left corner
        Then "Demio" logo should be available in top-left corner
        When Click on "Demio" logo
        Then Should redirected to Home page


    #Done
    Scenario: Check availability of "Schedule" and "Events" tab in Header
        When Go to Header
        Then "Schedule" and "Events" tab should be available in Header
        Then  By default "Schedule" tab should be selected in Header



    #Done
    Scenario: Check availability of "Help" and "User Profile" dropdown in Header
        Given User should be on Home page
        When Go to top-right corner of Header
        Then "Help" and "User Profile" dropdown should be available in Header

    #Done
    Scenario Outline: Check functionality of "Event" tab in Header
        Given User should be on Home page
        When Go to Header
        When Click on "Event" tab
        Then It should redirected to "Event" page

    #SDone
    Scenario Outline: Check list of options under "Help" dropdown
        Given User should be on Home page
        When Go to top-right corner of Header
        When Click on "Help" dropdown
        Then It should displayed options: "Chat With Us", "Knowledge Base" and "Demio University"

    #SDone
    Scenario Outline: Check list of options under "User Profile" dropdown
        Given User should be on Home page
        When Go to top-right corner of Header
        When Click on "User Profile" dropdown
        Then It should displayed options: "Profile", "Settings", "Referral Program", "Product Updates" and "Logout"


    #SDone
    Scenario Outline: Check availability/functionality of "Schedule" dropdown below Header
        Given User should be on Home page
        Given There should be existing Scheduled events <eventName>
        When Click on "Schedule" field
        Then It should displayed options: "All Upcoming", "All Past", "Upcoming Today", "Upcoming This Week" and "Upcoming This Month"
        When Select any option <option>
        Then It should displayed all scheduled events <eventName>
        Examples:
            | eventName       | option         |
            | ScheduledEvent1 | Upcoming Today |

    #SDone
    Scenario Outline: Check displaying of "Scheduled Events" under "Schedule" tab
        Given User should be on Home page
        Given There should be existing Scheduled events <eventName>
        Given User should be on Home page
        When Scroll down to area where events display
        Then It should displayed all scheduled events <eventName>
        Examples:
            | eventName       |
            | ScheduledEvent1 |
















