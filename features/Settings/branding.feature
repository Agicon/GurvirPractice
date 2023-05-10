Feature: Verify demio branding feature

    Background: Background name
        Given User should be on Home page


    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |

    Scenario Outline: Check availability fields and buttons at "Branding" settings
        Given User should be on Settings Page
        #Then By default "Profile" should be selected
        When User clicks on "Branding" Tab
        Then User shall see the options as <option> at branding page
        Examples:
            | option                                                         |
            | Color Scheme field                                             |
            | Enable disbaled  switch  of Reg, Thank You and Recording Pages |
            | Enable disbaled  switch  of Confirmation and Reminder Emails   |
            | Enable disbaled  switch  of Webinar Room                       |

    Scenario Outline: Availability and functionality of fields/buttons at "Branding" settings
        Given User should be on Settings Page
        When User clicks on "Branding" Tab
        Then User Should able to edit <color scheme>
        # Then User Should be able to upload logo <logo> by clicking on "Upload Logo" option
        Then User should be able to Enable OR Disbaled "Pages Reg,Thank you, Recording:" <pages> ,"Confirmation and Reminder Emails:" <confirmation and Reminder Emails>  and  "Webinar Room:" <webinar Room>
        Examples:
            | logo      | color scheme | pages   | confirmation and Reminder Emails | webinar Room |
            | Logo2.jpg | #6B27A8      | Enable  | Disable                          | Enable       |
            | Logo2.jpg | #6B27A8      | Disable | Disable                          | Disable      |




    Scenario Outline: Validate the functionality of Enable pages,"Confirmation and Reminder Emails:" and Webinar Room:  button under branding tab
        Given User should be on Settings Page
        When User clicks on "Branding" Tab
        When User Enable Pages button <pages>
        When User click on confirmation and Reminder Emails button <confirmation and Reminder Emails>
        When User click on Webinar Room button <webinar Room>
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Material <name> must be added in event <slide>
        Then User should able to enable uploaded logo on registration <regEmail> ,Thank you and Recording screen
        Given Created event <eventName> should be searched and selected from event list
        Then Host should able to schedule new session with time <futureTime>
        Then User Should able to see uploaded logo on email notification screen
        Given Created event <eventName> should be searched and selected from event list
        Then User Should able to see uploaded logo on Webinar room screen
        Examples:
            | pages  | eventName | futureTime | regEmail | name | slide        | confirmation and Reminder Emails | webinar Room |
            | Enable | F         | 10:30 pm   | P        | pdf  | pdf-test.pdf | Enable                           | Enable       |



    Scenario Outline: Validate the functionality of Disable pages,"Confirmation and Reminder Emails:" and Webinar Room: button under branding tab
        Given User should be on Settings Page
        When User clicks on "Branding" Tab
        When User Enable Pages button <pages>
        When User click on confirmation and Reminder Emails button <confirmation and Reminder Emails>
        When User click on Webinar Room button <webinar Room>
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Material <name> must be added in event <slide>
        Then User should be able to see demio logo on registration <regEmail> ,Thank you and Recording screen
        Given Created event <eventName> should be searched and selected from event list
        Then Host should able to schedule new session with time <futureTime>
        Then User Should able to see demio logo on email notification screen
        Given Created event <eventName> should be searched and selected from event list
        Then User Should able to see demio logo on Webinar room screen
        Examples:
            | pages   | eventName | futureTime | regEmail | name | slide        | confirmation and Reminder Emails | webinar Room |
            | Disable | F         | 10:30 pm   | P        | pdf  | pdf-test.pdf | Disable                          | Disable      |



    Scenario: Check User is able to Change the default domain
        Given User should be on Settings Page
        When User clicks on "Branding" Tab
        When User Clicks on dropdown alongside Domain names
        Then User shall see "Set As Default" and "Remove Domain" option
        When User Clicks on "Set As Default" option
        Then User Shall see "Set As Default" Confirmation Pop up
        Then User Shall see "NO, NEVER MIND" and "YES,CHANGE" buttons
        # When User Clicks on "YES,CHANGE" button
        # Then the select Domain should be set as Default


    Scenario: Check User is able to Remove Domain
        Given User should be on Settings Page
        When User clicks on "Branding" Tab
        When User Clicks on dropdown alongside Domain names
          Then User shall see "Set As Default" and "Remove Domain" option
          When User Clicks on "Remove Domain" option
           Then User Shall see "Remove Domain" Confirmation Pop up
        Then "NO, NEVER MIND" and "YES,CHANGE" buttons should displayed
        Then User Shall see "Remove Domain" Confirmation Pop up


