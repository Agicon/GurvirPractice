Feature: Verify event page features
As a User i want to check event feature

Feature: Verify event page features
    As a User i want to check event feature

   
    Scenario Outline: Check availablity of tabs/buttons on Event page
      Given User should redirect on <url> login page
        Given User login with <userA>
        Given User should be on Events page
        Then It should displayed with tabs: "All", "Standard", "Series", "Automated" and "Archived"
        Then there should be "Add New Event" button available
        Examples:
            | userA |url|
            | admin |stagingLoginUrl|



    Scenario Outline: Check functionality of "Search Box"
        Given new "Series" Event must be craeted  <eventName>
        Given new "Standard" Event must be craeted <eventName>
        Given new "Automated" Event <eventName> must be craeted
        Given User should be on Events page
        When Add data to be searched <eventName>
        Then It should displayed with searched item <eventName>
        Given User should be on Events page
        When add missmatched data in search field <missmatchedData>
        Then It should display message <validationMsg>
        Examples:
            | eventName | automatedEvent | missmatchedData | validationMsg                 |
            | A         | AutoEvent      |$$$      | Nothing found for this search |


    Scenario: Check that user is able to create event types screen on clicking "Add new Event" button.
        Given User should be on Events page
        When Click on "Add New Event" button
        Then User shall see "Standard" option to create a new standard event
        Then User shall see "Series" option to create a new series event
        Then User shall see "Automated" option to create a new automated event
        Then User shall see "BACK TO EVENTS" option for going back to Events page
        Then "Schedule" and "Events" tab should be available in Header
        Then "Demio" logo should be available in top-left corner
        Then "Help" and "User Profile" dropdown should be available in Header



    Scenario Outline: Check functionality of Tabs
        Given User should be on Events page
        Then It should displayed all events "standardEvent" and "seriesEvent" and "automatedEvent" under all tab
        When Click On "Standard" tab
        Then It should displayed only Standard events <standardEventName>
        When Click On "Series" tab
        Then It should displayed only Series events <seriesEventName>
        When Click On "Automated" tab
        Then It should displayed only Automated events <automatedEventName>
        Examples:
            | standardEventName | seriesEventName | automatedEventName | videoName  |
            | A                 | A               | A                  | sample.mp4 |


    Scenario Outline: Check if user able to click on 'Continue' button after Selecting 'Live event' option and entering valid event title
        Given User should be on Create Events page
        When User selects "Live event" option
        When Enter valid event title <eventName>
        Then User should able to click on "Continue" button
        Then User should be redirected to "Manage event" screen
        Examples:
            | eventName |
            | B         |


    Scenario Outline: Check if user able to select all options in 'How often?' dropdown i.e Everyday/Everyweek/Everymonth (Recurring type)
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        Then User should be able to select available option <option>
        Examples:
            | eventName | option     | message                      |
            | A         | Every week | Recurring sessions scheduled |


    Scenario Outline: Check if user can select "current" OR "future" date to select event start date (Multiple Times)
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then User should not able to select past date
        Then User should only be able to select current or future dates only
        Examples:
            | eventName |
            | A         |

