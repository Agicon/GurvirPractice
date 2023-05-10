Feature: Verify event page features
    As a User i want to check post session feature

    Background:
        Given User should be on Home page


    Scenario Outline: Check that user is able to create Post session
        Given User should be on login page
        Given User login with <userA>
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Admin add handout <title> and <image> for event
        Then Admin starts the session and share added resource
        When Registered user <regEmail> must attends the session
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Examples:
            | userA | eventName | slide        | futureTime | name | regEmail | title             | image      |
            | admin | C         | pdf-test.pdf | 11:00 pm   | pdf  | A        | NewTitleForSeries | tweety.jpg |
    #SDone
    Scenario Outline: Check displaying of correct "Registered", "Attended", "Missed" and "Messages" after event has finished on summary page (Past Session)
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        Then User shall see "Session Date&Time","Registered" options
        Then User shall see "Attended","Missed","Messages" options
        Examples:
            | eventName |
            | C         |


    Scenario Outline: Verify if share replay option opens the recording page and user can open recording by clicking on arrow
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        When Click on "Share Replay" option
        Then Recording page popup should displayed
        When User clicks on arrow on recording page popup
        When User switch to recording window
        Then User Should able to open recording
        Then Move to Manage event window
        Examples:
            | eventName |
            | C         |



    Scenario Outline: Click on the dropdown button to see it is displaying options to go to Insights,download recording,delete recording and share replay
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        Examples:
            | eventName |
            | C         |


    Scenario Outline: Check user redirects to the Activity>>Insights page when user clicks "View Insights" option from dropdown on Event summary page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        When Select "View Insights" option
        Then User should be redirected to "Activity>>Insight tab"
        Examples:
            | eventName |
            | C         |



    # SDone
    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"
        When User clicks on "People" tab
        Then Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"
        Then User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns

        Examples:
            | eventName |
            | C         |




    Scenario Outline: Check if graph loaded correctly for "Registrants" and "Attendees"  on "Insights Page"
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
        Examples:
            | eventName |
            | C         |


    Scenario Outline: Check if displaying correct number of clicks on the resources below "Insights graph"
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Should displayed correct number of clicks on the resources below "Insights graph"
        Examples:
            | eventName |
            | C         |



    #SDone
    Scenario Outline: Export the registered users and check if all the fields are exported correctly
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        Then User should able to download export CSV file
        Examples:
            | eventName |
            | C         |




    Scenario Outline: Check functionality of "Location" column under "People" tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        Then It should displayed location of registered user
        Examples:
            | eventName |
            | C         |


    Scenario Outline: Check Availability/Functionality of "Export CSV" option under "People" tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        When Click on "Export CSV" button
        Examples:
            | eventName |
            | C         |



    Scenario Outline: Check functionality of "Download Recording" option when user select from dropdown
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        When Click on "Download Recording" option
        Then Downloading of recording should start when user selects "Download Recording" option from dropdown
        Examples:
            | eventName |
            | C         |




    Scenario Outline: Check if user can edit the recording page by clicking on edit page button
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        When Click on "Share Replay" option
        Then Recording page popup should displayed
        When User clicks on "Edit page" button
        Then User should redirect on editor page
        Examples:
            | eventName |
            | C         |



    Scenario Outline: Verify availability of options under Summary
        Given Created event <eventName> should be searched and selected from event list
        When For new session User Clicks on "Schedule this Event" button
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When "Upcoming Session" is selected
        Then User shall see "Session Date&Time","Admin Team","Registered" options
        Then User shall see dropdown with options "View Insights","Edit Date & Time","Cancel Session"
        When User clicks on past event option
        Then User shall see "Session Date&Time","Registered" options
        Then User shall see "Attended","Missed","Messages" options
        Examples:
            | eventName | futureTime |
            | C         | 11:00 pm   |




    Scenario Outline: Verify that the admin is able to Reply to the messages sent by attendees
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given <userCount> Users must Attended and sent <message> for On-demand session with email <regEmail>
        When Go to Event Summary page
        When User clicks on Message count
        When Clicks on "Reply" button
        When Admin enter message <replyMessage> replay in "Enter your reply message" fields
        When Admin clicks on "send reply" button
        Then Validation message <validationMsg> should displayed
        Examples:
            | eventName | videoName      | regEmail | userCount | message                    | replyMessage        | validationMsg        |
            | H         | demioVideo.mp4 | H        | 1         | Hi this message is sent by | Hi ,admin this side | Reply has been sent. |


    Scenario Outline: Verify that the data changes when we Change Filter from On-Demand to Scheduled session
        Given Created automated event <eventName> should be searched and selected from event list
        When User schedule new session at future time <futureTime>
        When User clicks on "Activity" tab on manage event page
        Then User shall see Filter dropdown
        When User clicks on Filter dropdown
        Then User shall see options "Scheduled Session" and "On-demand Session"
        When User change Filter from On-Demand to Scheduled session
        Then The data shall display as per the option selected from the dropdown
        Examples:
            | eventName | videoName      | futureTime |
            | H         | demioVideo.mp4 | 11:00 pm   |

    Scenario Outline: Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page"
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Material <name> must be added in event <slide>
        When User Registered for event session with email <regEmail1>
        When User Registered for event session with email <regEmail2>
        Then Session must be started by admin
        When Registered user <regEmail3> must attends the session
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime |
            | admin | I         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 3        | 2           | 1             | 10:30 pm   |

