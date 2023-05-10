Feature: Verify event page features
    As a User i want to check Standard event feature

    # Background:
    #     Given User should be on Home page


    #POST-DEPLOYEMENT
    Scenario Outline: Check that user is able to create new "Standard" event on clicking standard option
        Given User should be on login page
        Given User login with <userA>
        Then User should be redirect to home page
        Given new "Standard" Event must be craeted <eventName>
        Then User should be redirected to "Manage event" screen
        Examples:
            | eventName | userA |
            | A         | admin |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Session" for "Standard Event"
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | message                    |
            | A         | 10:30 p    | Session has been scheduled |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify user is able to copy event registration link of standard event
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Examples:
            | eventName |
            | A         |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Registration --> Edit Form Fields For standard event
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Edit Form Fields" button
        Then User should be able to On or Off enhanced validation button
        When User Clicks on "ADD ANOTHER FIELD" option
        Then User shall see "Add Another Field" pop-up
        Then User shall see "Select Field Option" dropdown button
        When User clicks on "Select Field Option" dropdown button
        Then User shall see options "Last Name","Website","Company","Phone Number" ,"GDPR" and "Create a Custom Field" option
        When User selects any field option from dropDown list <field>
        When User clicks on "ADD FORM FIELD" Button
        Then User should be able to add any field <field>

        Examples:
            | eventName | field   |
            | A         | Website |


    #   #POST-DEPLOYEMENT

    Scenario Outline: Verify availability and functionality of options under Customize--> Email Notifications
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Email Notifications" option
        Then User shall see toggle buttons as "Instant Confirmation","24Hours Before","1Hour Before","15Minutes Before","Replay Follow Up"
        Then User shall see "Replay Follow Up" dropdown with options "All Registrants","Attendees","No Shows"
        Then User should be able to select any of the option <option> from "Replay Follow Up" dropdown
        Then User shall see "Edit Email" option with every toggle button
        Then User should be able to turn on and off any of the button
        When Click on any "edit email" option
        Then User should be able to "Edit Email" for any of the timing <email>
        When User clicks on "Save notification" button
        Then User should redirect on email notifications tab
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | option    | email                    |
            | A         | Attendees | This is a reminder email |

    #     #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> General
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "General" option
        Then User shall see "Event Timezone" and "Event Language" dropdown
        When User clicks on "Event Timezone" dropdown button
        Then User should be able to select the "Event Timezone" <timeZone> from the dropdown
        When User clicks on "Event Language" dropdown button
        Then User should be able to select the "Event Language" <language> from the dropdown
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | timeZone                    | language |
            | A         | (GMT+05:00) Indian/Maldives | English  |




    #   POST-DEPLOYEMENT
    Scenario Outline: Check availablity of fields/buttons under Customize --> Room
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        Then User shall see "Resources", "Presentation Materials" and "Settings" option
        Then By default "Resources" option should be selected
        Then for "Resources" option "ADD A RESOURCE" button should display
        When User clicks on "Presentation Materials" option
        Then User shall see "ADD A MATERIAL" button
        When User clicks on "Settings" option
        Then User Shall see "Public Chat" and "Private Chat" tabs , by default "Public Chat" should be selected
        Then User Shall see "Post Session Redirect" toggle button
        Then User shall see "Done" Button to save the made changes made and materials added
        Examples:
            | eventName |
            | A         |


    #  POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Poll
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        Then User shall see "Poll","Handout",Featured Action" options
        When User selects "Poll" option from dropdown list
        Then User for "Poll" User shall see Following Fields "Question","Option 1",Option 2"
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter data in "Question" <question> ,"Option 1" <option1> ,Option 2" <option2> fields
        Then User should be able to Mark the "Share Results With Attendees" checkbox
        When User Clicks on "Add Resource" button
        Then User should able to save the added Poll <question>
        Examples:
            | eventName | question                       | option1  | option2 | option3 |
            | A         | Where are you joining us from? | New York | Toronto | London  |



    # POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Customize --> Room-->Settings
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        Then User should be able to click on "Public Chat" and "Private Chat" tab
        When User turns on "Post-session Redirect" Button
        Then User shall see "Add A Custom Url" field
        Then User should be able to add URL <url> in the above mentioned field
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | url                   |
            | A         | https://webdriver.io/ |



    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Customize --> Event Admins--> Guest
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then User shall see Name of the Host and "Swap Host" button
        Then User shall see "Team Member" and "Guest" tabs by default "Team Member" tab should be selected
        When User Clicks on "Guest" tab
        Then User shall see "Name" and "Email" field
        Then User shall see "All Sessions" Button
        Then User shall see "Add Admin" Button
        Then User should be able to Enter "Name" <name> and "Email" of the New Admin to be
        Then User shall see "Select a role" dropdown for guest
        When User clicks on "Select a role" dropdown for guest
        Then User shall see "Presenter" and "Moderator" options
        Then User should be able to select a role for the added Member from the "Select a role" <role> dropdown
        When User Clicks on "All Sessions" Button
        Then User Shall see "Invite Aadmin for all session that are shown and future sessions" checkbox
        Then User shall see "Confirm" Button
        Then User should be able to Mark and Unmark the checkbox and click on "Confirm" Button
        When User Clicks on "ADD ADMIN" Button
        Then Admin should be displayed in Event Admins List with details email,name <name> and role <role>
        Examples:
            | eventName | role      | name     |
            | A         | Moderator | newAdmin |

    # POST-DEPLOYEMENT
    Scenario Outline: Check availablity of fields/buttons under Customize --> Event Admins-->Team Member
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then User shall see Name of the Host and "Swap Host" button
        Then User shall see "Team Member" and "Guest" tabs by default "Team Member" tab should be selected
        Then User shall see "Choose a member" dropdown
        When User clicks on "Choose a member" dropdown
        Then User shall see names of added user and "add another user" options
        Then User should be able to select a member from choose a member dropdown <member>
        Then User shall see "Select a role" dropdown
        When User clicks on "Select a role" dropdown
        Then User shall see "Host","Presenter" and "Moderator" options
        Then User should be able to select a role for the added Member from the "Select a role" <role> dropdown
        Then User shall see "All Sessions" Button
        Then User shall see "Add Admin" Button
        When User Clicks on "All Sessions" Button
        Then User Shall see "Invite Aadmin for all session that are shown and future sessions" checkbox
        Then User shall see "Confirm" Button
        Then User should be able to Mark and Unmark the checkbox and click on "Confirm" Button
        Then User should be able to Click on "ADD ADMIN" Button and the Admin should be added and displayed in Event Admins List
        Examples:
            | eventName | role | member    |
            | A         | Host | Subuser 1 |

    # POST-DEPLOYEMENT
    Scenario Outline: Verify functionality create a custom field option under Registration  for standard event
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Edit Form Fields" button
        When User Clicks on "ADD ANOTHER FIELD" option
        Then User shall see "Add Another Field" pop-up
        Then User shall see "Select Field Option" dropdown button
        When User clicks on "Select Field Option" dropdown button
        When User selects "Create a Custom Field" option from dropdown
        Then User shall see "Select Field Option" dropdown button
        Then User shall see "Select Field Type" dropdown option
        When User clicks on "Select Field Type" dropdown option
        Then User shall see options "Text","TextArea","Dropdown","Checkbox"
        Then User selects any field type option <option>
        Then User should able to add label <label>
        When User clicks on "ADD FORM FIELD" Button
        Then User should be able to add any field <label>
        Examples:
            | eventName | label     | option    |
            | A         | custom900 | Text Area |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Handout
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        Then User shall see "Poll","Handout",Featured Action" options
        When User selects "Handout" option from dropdown list
        Then for "Handout" User shall see "Handout Title","Upload File" fields
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Handout Title" <title> field
        Then User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <title>
        Examples:
            | eventName | title             | image      |
            | A         | NewTitleForSeries | tweety.jpg |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Featured Action
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        Then User shall see "Poll","Handout",Featured Action" options
        When User selects "Featured Action" option from dropdown list
        Then For "Featured Action" User shall see following fields "Title","Link URl","Button Text"
        Then User shall see "Upload image" option
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Title" <title> ,"Link URl" <link>,"Button Text" <buttonText> fields
        Then User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <title>
        Examples:
            | eventName | title           | link                           | buttonText | image       |
            | A         | Download chrome | https://www.google.com/chrome/ | OpenURL    | TestOne.jpg |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Slide Presentation Material
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Presentation Materials" option
        When User Clicks on "ADD A MATERIAL" button
        Then User shall see "Type Of Material" dropdown
        Then User shall see "Material Name" field
        Then User shall see "Upload Media" Option
        Then User shall see "ADD MATERIAL" Button
        When User clicks on "Type Of Material" dropdown
        Then User shell see "Slides" and "Video" options
        When User selects "Slides" option from "Type of Material" dropdown
        Then User should be able to enter data in "Material Name" field <name>
        Then User should be able to Upload desired Media slide files <slide>
        When User Click on "ADD MATERIAL" Button
        Then User should able to save the added Material <name>
        Examples:
            | eventName | name    | slide        |
            | A         | testPDF | pdf-test.pdf |



    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Video Presentation Material
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Presentation Materials" option
        When User Clicks on "ADD A MATERIAL" button
        Then User shall see "Type Of Material" dropdown
        Then User shall see "Material Name" field
        Then User shall see "Upload Media" Option
        Then User shall see "ADD MATERIAL" Button
        When User clicks on "Type Of Material" dropdown
        Then User shell see "Slides" and "Video" options
        When User selects "Video" option from "Type of Material" dropdown
        Then User should be able to enter data in "Material Name" field <name>
        Then User should be able to Upload desired Media video file <video>
        When User Click on "ADD MATERIAL" Button
        Then Added Material should displayed under customize tab <name>
        Examples:
            | eventName | name      | video      |
            | A         | testVideo | sample.mp4 |

    #SDone
    Scenario Outline: Verify functionality of options under Registration --> Settings
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Settings"
        Then User should be able to Increase and decrease the number of sessions to be visible
        When User turns on the "Session Registration Limit"
        Then User should be able to able to increase or decrease number of registrants per session
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName |
            | A         |
    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Standard Event "
        Given User should be on Home page
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | option     | message                      |
            | C         | 10:30 p    | Every week | Recurring sessions scheduled |



    # # ## //----------------------------------POST-SESSION---------------------------------------//


    Scenario Outline: Check that user is able to create Post session
        Given User should be on Home page
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
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        Then User shall see "Session Date&Time","Registered" options
        Then User shall see "Attended","Missed","Messages" options
        Examples:
            | eventName |
            | C         |




    Scenario Outline: Verify if share replay option opens the recording page and user can open recording by clicking on arrow
        Given User should be on Home page
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
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        Examples:
            | eventName |
            | C         |

    #POST-DEPLOYEMENT
    Scenario Outline: Check user redirects to the Activity>>Insights page when user clicks "View Insights" option from dropdown on Event summary page
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        When Select "View Insights" option
        Then User should be redirected to "Activity>>Insight tab"
        Examples:
            | eventName |
            | C         |




    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given User should be on Home page
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

    Scenario Outline: Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page"
        Given User should be on Home page
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



    Scenario Outline: Check functionality of all columns under "People" tab
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        When Go to "Join Timestamp" column
        Then It should displayed time when user has joined the session
        When Go to "Exit Timestamp" column
        Then It should displayed time when user has exit the session
        When Go to "Attendance Minutes" column
        Then It should displayed timings of attended session in minutes
        When Go to "Attendance per" column
        Then It should displayed attendance percent of user who attended the session
        When Go to "Focus per" column
        Then It should displayed focus percent of user who attended the session
        When Go to "Registration Date & Time" column
        Then It should displayed Registration Date & Time of registered user
        When Go to "Session Date & Time" column
        Then It should displayed Session Date & Time
        When Go to "Name or Email" column
        Then It should displayed "Name or Email" of registered user
        When Go to "Attended" column
        Then It should displayed whether the registered user attended the session or not
        Examples:
            | eventName | regEmail | slide        | futureTime | name | message                    |
            | C         | G        | pdf-test.pdf | 10:30 p    | pdf  | Session has been scheduled |




    # ##POST-DEPLOYEMENT DONE
    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given User should be on Home page
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


    # ##POST-DEPLOYEMENT DONE
    Scenario Outline: Check if graph loaded correctly for "Registrants" and "Attendees"  on "Insights Page"
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
        Examples:
            | eventName |
            | C         |

    ##POST-DEPLOYEMENT DONE
    Scenario Outline: Check if displaying correct number of clicks on the resources below "Insights graph"
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Should displayed correct number of clicks on the resources below "Insights graph"
        Examples:
            | eventName |
            | C         |

    #POST-DEPLOYEMENT DONE
    #    SDone
    Scenario Outline: Export the registered users and check if all the fields are exported correctly
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        Then User should able to download export CSV file
        Examples:
            | eventName |
            | C         |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability of options under Summary
        Given User should be on Home page
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
    #     # //-------------------EVENTS-------------------//

    #POST-DEPLOYEMENT
    Scenario: Check that user is able to create event types screen on clicking "Add new Event" button.
        Given User should be on Home page
        Given User should be on Events page
        When Click on "Add New Event" button
        Then User shall see "Standard" option to create a new standard event
        Then User shall see "Series" option to create a new series event
        Then User shall see "Automated" option to create a new automated event
        Then User shall see "BACK TO EVENTS" option for going back to Events page
        Then "Schedule" and "Events" tab should be available in Header
        Then "Demio" logo should be available in top-left corner
        Then "Help" and "User Profile" dropdown should be available in Header


    #POST-DEPLOYEMENT
    Scenario Outline: Check functionality of "Search Box"
        Given User should be on Home page
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
            | A         | AutoEvent      | $$            | Nothing found for this search |

    #DONE
    Scenario Outline: Check functionality of Tabs
        Given User should be on Home page
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


    # //-------------------------REGISTRATION TEST SCRIPTS---------------//

    #POST-DEPLOYEMENT
    Scenario Outline: Check functionality of "View registration page" option ,"Register" button and check functionality of  "Join Room" button on Demio success page
        Given User should be on Home page
        Given new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        Then Move to Manage event window
        Examples:
            | userA | eventName | regEmail | message                                       | futureTime |
            | admin | B         | F        | Great! You are Now Registered for this Event: | 10:30 pm   |


    #POST-DEPLOYEMENT
    Scenario Outline: Check working of "Manage Registration" Link on join link page and Check all the fields are exported correctly from Activity area
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        When Click on "Manage your Registration" Link
        Then User should redirected to "Manage Registration" page
        Then Close recent window and switch to manage event window
        When User clicks on "Activity" tab on manage event page
        When User clicks on "People" tab
        When Click on "Export CSV" button
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | B         | H        | Great! You are Now Registered for this Event: | 10:30 pm   |




    #POST-DEPLOYEMENT
    Scenario Outline: Check if the registered user is removed if the cancel registration from the Manage registration
        Given User should be on Home page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        When Click on "Manage your Registration" Link
        Then User should redirected to "Manage Registration" page
        When Click on  "Cancel Registration" button
        Then Message should prompt with options: "No, Never Mind" and "Yes, Cancel"
        When Click on "Yes, Cancel" option
        Then User should get a cancel registration message <cancelMessage>
        Then Registered user should removed when cancel registration from manage registration
        Examples:
            | eventName | regEmail | message                                       | futureTime | cancelMessage                                                                  |
            | B         | E        | Great! You are Now Registered for this Event: | 10:30 pm   | Your event registration has been canceled. Your join link is no longer active. |


