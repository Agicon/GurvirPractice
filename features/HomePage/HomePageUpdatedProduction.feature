Feature: Verify home page features
    As a User i want to check home feature


    Scenario Outline: Check availability of "Home" page
        Given User should redirect on <url> login page
        Given User login with <userA>
        Then User should be redirect to home page
        Then By default "Schedule" tab should be selected in Header
        Examples:
            | userA | url                |
            | admin | productionLoginUrl |

    Scenario: Check availability/functionality of "demio" logo
        When Go to top-left corner
        Then "Demio" logo should be available in top-left corner
        When Click on "Demio" logo
        Then Should redirected to Home page


    Scenario: Check availability of "Schedule" and "Events" tab in Header
        When Go to Header
        Then "Schedule" and "Events" tab should be available in Header
        Then  By default "Schedule" tab should be selected in Header


    Scenario Outline: Check availability of "Help" and "User Profile" dropdown in Header
        Given User should redirect on <homeUrl> Home page
        When Go to top-right corner of Header
        Then "Help" and "User Profile" dropdown should be available in Header
        Examples:
            | homeUrl               |
            | productionHomePageUrl |


    Scenario Outline: Check functionality of "Event" tab in Header
        Given User should redirect on <homeUrl> Home page
        When Go to Header
        When Click on "Event" tab
        Then It should redirected to "Event" page
        Examples:
            | homeUrl               |
            | productionHomePageUrl |


    Scenario Outline: Check list of options under "Help" dropdown
        Given User should redirect on <homeUrl> Home page
        When Go to top-right corner of Header
        When Click on "Help" dropdown
        Then It should displayed options: "Chat With Us", "Knowledge Base" and "Demio University"
        Examples:
            | homeUrl               |
            | productionHomePageUrl |


    Scenario Outline: Check list of options under "User Profile" dropdown
        When Go to top-right corner of Header
        When Click on "User Profile" dropdown
        Then <options> Should displayed to user
        Examples:
            | options                  |
            | Profile                  |
            | Demio Fan Club Referrals |
            | Product Updates          |
            | Manage Accounts          |
            | Webinar Status           |
            | Statistic Data Storage   |
            | System                   |
            | Logout                   |


    Scenario Outline: Check availability/functionality of "Schedule" dropdown below Header
        Given User should redirect on <homeUrl> Home page
        Given There should be existing Scheduled events <eventName>
        When Click on "Schedule" field
        Then It should displayed options: "All Upcoming", "All Past", "Upcoming Today", "Upcoming This Week" and "Upcoming This Month"
        When Select any option <option>
        Then It should displayed all scheduled events <eventName>
        Examples:
            | eventName | option         | homeUrl               |
            | S         | Upcoming Today | productionHomePageUrl |


    Scenario Outline: Check displaying of "Scheduled Events" under "Schedule" tab
        Given User should redirect on <homeUrl> Home page
        Given There should be existing Scheduled events <eventName>
        Given User should redirect on <homeUrl> Home page
        When Scroll down to area where events display
        Then It should displayed all scheduled events <eventName>
        Examples:
            | eventName | homeUrl               |
            | S         | productionHomePageUrl |

   Scenario Outline: Verify the functionality of "Sort By" filter under event tab
        Given End if any session running and new "Standard" Event must be craeted <pastName>
        When User select start time and schedule new session <futureTime>
        Given Host should be in meeting room and starts the session
        When Chat screen is closed then click on open button
        When User click on Event name bar
        Then Session pop up should display
        When User clicks on "End Session" button under session popup
        Then User shall see "End Session" Pop-up.
        When User clicks on "YES,END"
        Then Host should able to End the session
        Then Move to Manage event window
        Given There should be existing Scheduled events <upcomingEvent>
        Given new "Standard" Event must be craeted <recentEvent>
        When Click on "Event" tab
        When User click on "Sort By" filter dropdown and select option <option1>
        Then It should displayed with searched item <pastName>
        When User click on "Sort By" filter dropdown and select option <option2>
        Then It should displayed with searched item <upcomingEvent>
        When User click on "Sort By" filter dropdown and select option <option3>
        Then It should displayed with searched item <recentEvent>
        Examples:
            | pastName | futureTime | upcomingEvent | recentEvent | option1                  | option2               | option3               |
            | S        | 10:30 pm   | A             | K           | Most recent past session | Next upcoming session | Most recently created |

