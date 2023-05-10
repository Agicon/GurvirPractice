Feature: Verify add session page features
    As a User i want to check add session feature

    Background:
        Given User should be on Home page

    #SDone
    Scenario Outline: Check Availability/Functionality of "Schedule This Event" button
        Given User should be on login page
        Given User login with <userA>
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        Then User shall see "Schedule this Event" button
        When User Clicks on "Schedule this Event" button
        Then User should be redirected to Schedule Upcoming session menu
        Examples:
            | userA | eventName |
            | admin | B         |


    Scenario Outline: Check user able to Schedule Upcoming Sessions with "Single Date & Time" option
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        Then User shall see "Schedule this Event" button
        When User Clicks on "Schedule this Event" button
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions

        Examples:
            | eventName | futureTime |
            | D         | 10:30 pm   |



    Scenario Outline: Check user able to Schedule Upcoming Sessions with "Recurring Times"
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        Then User shall see "Schedule this Event" button
        When User Clicks on "Schedule this Event" button
        Then User shall see "Single Date & Time" and "Recurring Times" options
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions
            | eventName | futureTime |
            | G         | 10:30 pm   |




    Scenario Outline: Check functionality of "Add To Event Schedule"
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        Then User shall see "Schedule this Event" button
        When User Clicks on "Schedule this Event" button
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | message                    |
            | E         | 10:30 pm   | Session has been scheduled |


    Scenario Outline: Check if user able to "Cancel Session"
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        Then User shall see "Schedule this Event" button
        When User Clicks on "Schedule this Event" button
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions
        When Click on dropdown arrow in front of session
        When Click on "Cancel Session" option
        Then "Cancel Session" window prompt <windowTitle>
        When Click on "Yes,Confirm" button
        Then Success message <message> should display
        Then Session should not displayed under "Upcoming Session" tab
        Examples:
            | eventName | futureTime | message                   | windowTitle    |
            | E         | 10:30 pm   | Session has been canceled | Cancel Session |

    Scenario Outline: Check if user able to schedule more than one session
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        Then User shall see "Schedule this Event" button
        When User Clicks on "Schedule this Event" button
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        When User selects current or future date
        When User selects future time <firstSessionTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Then User should able to schedule more than one session with time <secondSessionTime>
        Examples:
            | eventName | firstSessionTime | message                    | secondSessionTime |
            | T         | 10:30 pm         | Session has been scheduled | 11:30 pm          |



    Scenario Outline: Check for recurring sessions creating Ten sessions at a time
        Given new "Series" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Then Should created ten sessions at a time for recurring sessions
        Examples:
            | eventName | futureDate        | futureTime | option      |
            | S         | December 25, 2020 | 11:30 am   | Every month |