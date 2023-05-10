Feature: Verify event page features
    As a User i want to check Automated event feature

    # Background:
    #     Given User should be on Home page



    #POST-DEPLOYEMENT
    Scenario Outline: Check that user is able to create new event on clicking "Automated" option
        Given User should be on login page
        Given User login with <userA>
        Given User should be on Create Events page
        Given new "Automated" Event <eventName> must be craeted
        Then User should be redirected to "Manage event" screen
        Examples:
            | userA | eventName |
            | admin | D         |



    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Session" for "Automated Event"
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | message                    | videoName  |
            | D         | 10:30 pm   | Session has been scheduled | sample.mp4 |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Automated Event "
        Given User should be on Home page
        Given new "Automated" Event <eventName> must be craeted
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
            | eventName | futureTime | option    | videoName  | message                      |
            | H         | 11:30 p    | Every day | sample.mp4 | Recurring sessions scheduled |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify user is able to copy event registration link of automated event
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Examples:
            | eventName | videoName  |
            | D         | sample.mp4 |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Registration --> Edit Form Fields For Automated event
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
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
            | eventName | field   | videoName  |
            | D         | Website | sample.mp4 |



    #POST-DEPLOYEMENT Pass
    Scenario Outline: Verify availability and functionality of options under Customize--> Email Notifications
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Email Notifications" option
        Then User shall see following toggle buttons for automated event "Instant Confirmation","24Hours Before","1Hour Before","15Minutes Before"
        Then User shall see "Edit Email" option with every toggle button for automated event
        Then User should be able to turn on and off any of the button
        When Click on any "edit email" option
        Then User should be able to "Edit Email" for any of the timing <email>
        When User clicks on "Save notification" button
        Then User should redirect on email notifications tab
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | email                    | videoName  |
            | D         | This is a reminder email | sample.mp4 |

    #   #POST-DEPLOYEMENT Pass
    Scenario Outline: Verify availability and functionality of options under Customize --> General
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
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
            | eventName | timeZone                    | language | videoName  |
            | D         | (GMT+05:00) Indian/Maldives | English  | sample.mp4 |


    #   #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Poll
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
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
            | eventName | question                       | option1  | option2 | option3 | videoName  |
            | D         | Where are you joining us from? | New York | Toronto | London  | sample.mp4 |



    #POST-DEPLOYEMENT
    Scenario Outline: Check availablity of fields/buttons under Customize --> Room
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        Then User shall see "Resources" and "Settings" option
        Then By default "Resources" option should be selected
        Then For automated event "Resources" option "ADD A RESOURCE" button should display
        When User clicks on "Settings" option for automated event
        Then User Shall see "Public Chat" and "Private Chat" tabs , by default "Public Chat" should be selected
        Then User Shall see "Post Session Redirect" toggle button
        Then User shall see "Done" Button to save the made changes made and materials added
        Examples:
            | eventName |
            | D         |





    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Handout
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When For automated event user Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        Then User shall see "Poll","Handout",Featured Action" options
        When User selects "Handout" option from dropdown list
        Then for "Handout" User shall see "Handout Title","Upload File" fields for automated event
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Handout Title" <title> field
        Then For automated event User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <title>
        Examples:
            | eventName | title     | image      | videoName  |
            | D         | AutoEvent | tweety.jpg | sample.mp4 |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Featured Action
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When For automated event user Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        Then User shall see "Poll","Handout",Featured Action" options
        When User selects "Featured Action" option from dropdown list
        Then For "Featured Action" User shall see following fields "Title","Link URl","Button Text"
        Then User shall see "Upload image" option for automated event
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Title" <title> ,"Link URl" <link>,"Button Text" <buttonText> fields
        Then For automated event User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <title>
        Examples:
            | eventName | title                       | link                           | buttonText | image       | videoName      |
            | D         | Download chrome for browser | https://www.google.com/chrome/ | OpenURL    | testOne.jpg | demioVideo.mp4 |



    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Customize --> Room-->Settings
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Settings" option for automated event
        Then User should be able to click on "Public Chat" and "Private Chat" tab
        When User turns on "Post-session Redirect" Button
        Then User shall see "Add A Custom Url" field
        Then User should be able to add URL <url> in the above mentioned field
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | url                   | videoName  |
            | D         | https://webdriver.io/ | sample.mp4 |


    #POST-DEPLOYEMENT Pending
    Scenario Outline: Verify functionality of options under Customize --> Event Admins--> Guest
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then User shall see "Team Member" and "Guest" tabs by default "Team Member" tab should be selected
        When User Clicks on "Guest" tab
        Then User shall see "Name" and "Email" field
        Then User shall see "All Sessions" Button
        Then User shall see "Add Admin" Button
        Then User should be able to Enter "Name" <name> and "Email" of the New Admin to be
        Then For automated event user shall see "Select a role" dropdown for guest
        When For automated event user clicks on "Select a role" dropdown for guest
        Then User should be able to select a role for the added Member from the "Select a role" <role> dropdown
        When User Clicks on "All Sessions" Button
        Then User shall see "Confirm" Button
        Then User should be able to Mark and Unmark the checkbox and click on "Confirm" Button
        When User Clicks on "ADD ADMIN" Button
        Then For automated event details email,name <name> and role <role> of Admin should be displayed in Event Admins List
        Examples:
            | eventName | role      | name     | videoName  |
            | D         | Moderator | newAdmin | sample.mp4 |


    # #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality create a custom field option under Registration  for Automated event
        Given User should be on Home page
        Given Created automated event <eventName> should be searched and selected from event list
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
            | eventName | label     | option    | videoName  |
            | D         | custom900 | Text Area | sample.mp4 |


    # # # //------------------------ON-DEMAND--------------------------//

    Scenario Outline: Check that User is able to redirects to the room and session starts as soon as user click on Join room button
        Given User should be on Home page
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        When Go to Event Summary page
        When Click on "On-Demand" option
        When Enable "On-Demand" option
        When User Clicks on "Share" button
        Then Registraion link should be displayed
        When User Register for On-demand session with email <regEmail>
        Then As soon as user registered for On-demand session user should redirected to "Join Room" button
        When Click on "Join Room" button after registered
        Then On-demand session should started as soon as user click on "Join Room" button
        Examples:
            | userA | eventName | videoName  | regEmail |
            | admin | C         | sample.mp4 | B        |


    Scenario Outline: Check if it displays correct number of Registered,Attendee ,messages and insights graph on the On demand section page
        Given User should be on Home page
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given <userCount> Users must Attended and sent <message> for On-demand session with email <regEmail>
        When Go to Event Summary page
        Then It should displayed correct number <userCount> of "Registered" on the On demand section page
        Then It should displayed correct number <userCount> of "Attended" on the On demand section page
        Then It should displayed correct number Attended and Messages <userCount> on the On demand section page
        When Click on "Activity" option
        Then User sould redirected to "Activity" section of Event
        When Go to Insigts area
        Then It should displayed correct insights for on demand session including the Registered Attended <userCount>
        Examples:
            | userA | eventName | videoName      | regEmail | userCount | message |
            | admin | A         | demioVideo.mp4 | E        | 5         | Hello   |


    Scenario Outline: Verify if the Handout,polls and feature actions are launched at the correct time as set in room
        Given User should be on Home page
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given Handout should be created with title <handoutTitle> and image <image> and set launchTime <launchTime>
        Given For onDemand event Polls should be created with question <pollQuestion> and optionOne <optionOne> optionTwo <optionTwo> and set launchTime <launchTime>
        Given OnDemand event Feature should be created with Featured title <featureTitle> and featureUrl <featureUrl> buttonText <buttonText> image <image> with <launchTime>
        When Go to Event Summary page
        When Click on "On-Demand" option
        When Enable "On-Demand" option
        When User Clicks on "Share" button
        When User Register for On-demand session with email <regEmail>
        Then As soon as user registered for On-demand session user should redirected to "Join Room" button
        When Click on "Join Room" button after registered
        Then On-demand session should started as soon as user click on "Join Room" button
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then the Poll shall launch automatically at the set time
        Examples:
            | userA | eventName | videoName      | regEmail | userCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | featureUrl         | buttonText | image       |
            | admin | K         | demioVideo.mp4 | K        | 1         | 0h 0m 15s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | https://demio.com/ | Click here | testOne.jpg |


