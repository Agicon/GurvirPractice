Feature: Verify Standard event page features
    As a User i want to check detailed feature
    Background:
        Given User close extra tabs


    Scenario Outline: Check availablity of tabs/buttons on Event page
        Given User should redirect on <url> login page
        Given User login with <userA>
        Given User should be on Events page
        Then It should displayed with tabs: "All", "Standard", "Series", "Automated" and "Archived"
        Then there should be "Add New Event" button available
        Examples:
            | userA | url             |
            | admin | stagingLoginUrl |


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


        Scenario Outline: Verify that user is able to create event from schedule tab
            When Click on "Schedule" field
            When User Click on "Add New Event" dropdown on schedule tab
            When User shall see and select event option <option> from dropdown
            Then "Create New Standard" page should open
            When Go to "Event Name" field
            When Add standard event name in "Event Name" field <eventName>
            When click on "Continue button"
            Then User should be redirected to "Manage event" screen
            Given Created event <eventName> should be searched and selected from event list
            When Click on "Schedule" field
            When User Click on "Add New Event" dropdown on schedule tab
            When User shall see and select event option <option2> from dropdown
            Then "Create New Series" page should open
            When Go to "Event Name" field
            When Add series event name in "Event Name" field <eventName>
            When click on "Continue button"
            Then User should be redirected to "Manage event" screen
            Given Created series event <eventName> should be searched and selected from event list
            When Click on "Schedule" field
            When User Click on "Add New Event" dropdown on schedule tab
            When User shall see and select event option <option3> from dropdown
            Then "Create New Automated" page should open
            When Go to "Event Name" field
            When Add data in automated "Event Name" field <eventName>
            When click on "Continue button"
            Then User should be redirected to "Manage event" screen
            Given Created automated event <eventName> should be searched and selected from event list
            Examples:
                | option   | eventName | option2 | option3   |
                | Standard | A         | Series  | Automated |

    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Standard Event "
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        #    When User select start session time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | option     | message                      |
            | C         | 10:30 pm   | Every week | Recurring sessions scheduled |


    Scenario Outline: Check if user is able to create a session only with more than 5 characters, select host, edit and cancel session
        Given User should be on Events page
        When Click on "Add New Event" button
        Then Event creation page should open
        When click On "Standard" option
        Then "Create New Standard" page should open
        When Go to "Event Name" field
        When Add data in "Event Name" field <eventName>
        Then Event validation message <validationMsg> should displayed
        When Add standard event name in "Event Name" field <eventName>
        When User select host <host> for event
        When click on "Continue button"
        Then User should be redirected to "Manage event" screen
        When User click on edit event name button
        When User Update Event name as <updatedName>
        When User click on save button under edit screen
        Then Updated event <updatedName> should display on screen
        When User select start time and schedule new session <futureTime>
        When User should able to edit start date or time <updatedTime> after clicking on edit date time option
        Then Updated session time <updatedTime> should display on screen
        When Click on dropdown arrow in front of session
        When Click on "Cancel Session" option
        Then "Cancel Session" window prompt <windowTitle>
        When User select "Notify registrants" checkbox
        When Click on "Yes,Confirm" button
        Then Success message <message> should display
        Then Session should not displayed under "Upcoming Session" tab
        Examples:
            | eventName | updatedName  | validationMsg                           | host      | futureTime | updatedTime | message                   | windowTitle    |
            | A         | NewTestEvent | Please enter a minimum of 5 characters. | Subuser 1 | 10:30 pm   | 11:00 pm    | Session has been canceled | Cancel Session |



    Scenario Outline: Check if user is able to select admins for particular sessions by clicking on “All Sessions” option and able to join only selected sessions if any
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User select start time and schedule new session <futureTime>
        Then With next day time <futureTime> user is able to schedule more than one session
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then Host must be added in event admin option with <role> and <member>
        When User click on "All sessions" button of added admin
        Then User uncheck all session checkbox and select second session checkbox
        Then Verify that added host is able to join selected session through join link
        Examples:
            | eventName | futureTime | role | member    |
            | A         | 10:30 pm   | Host | Subuser 1 |




    Scenario Outline: Check the visibility of all fields and buttons under create new event screen and user is able to create new event
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        Then User should be redirected to "Manage event" screen
        Given User should be on Manage Event Page
        Then User shall see "Summary","Customize","Share" and "Activity" Tabs
        Then User shall see "JOIN ROOM" button
        Then User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"
        Then User shall see "Edit" button alongside Event name
        Then User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option
        Then User shall see "Schedule this Event" button
        Examples:
            | userA | eventName |
            | admin | A         |


    Scenario Outline: Check availablity of fields/buttons on Clicking "Schedule this event " button and able to schedule event and not able to add multiple sessions for same time
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Then User should be redirected to Schedule Upcoming session menu
        Then User shall see "Summary","Customize","Share" and "Activity" Tabs
        Then User shall see "JOIN ROOM" button
        Then User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"
        Then User shall see "Edit" button alongside Event name
        Then User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        Then User shall see "Add to Event schedule" button
        When User selects current or future date
        When User select start session time <futureTime>
        When For End session User select session time
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then Select start session time <secondSessionTime> and schedule more than one session
        Then Success message <errorMessage> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | message                    | secondSessionTime | errorMessage                                                                 |
            | A         | 10:30 pm   | Session has been scheduled | 10:30 pm          | One of your upcoming sessions is already scheduled for the same date & time. |


    Scenario Outline: Verify availability and fucntionality of event registration link and Inline embed options for standard event
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Then User shall see "facebook","twitter" and "linkedin" logo for sharing the link
        Then User shall see "Embed options" option
        When User Clicks on "Embed options"
        Then User shall see "Inline embed" and "PopOver embed" tab
        Then User shall see "Inline Embed Style :" dropdown
        Then User shall see "Button Color :" button with preview of selected color
        Then User should able to see "Button Text" field
        Then User shall see "Responsive" checkbox and "Form Width" field
        Then "Save and show code" button should display on screen
        Then User should be able to select any option from "Inline Embed Style" dropdown <option>
        When User add new text in button text field <buttonText>
        Then User should be able to edit the button text <buttonText>
        Then User enter values <firstName> and <email> in fields of form preview and click on register button
        Then User should not be redirected to any page when clicked on register button
        Then User should be able to mark or unmark the "Responsive" checkbox
        When User unmarks the "Responive" checkbox
        Then User should be able to change the Form width <formWidth>
        Then User should be able to change the color of the button from the Button color option <colorCode>
        When User click on "Save and show code" button
        Examples:
            | eventName | option           | colorCode | firstName | email          | formWidth | buttonText |
            | A         | Styled HTML Form | #5f9e39   | ayman     | test@gmail.com | 500       | 12         |

    Scenario Outline: Verify availability and functionality of Popover embed options
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Share" button
        Given User should be on Manage Event Share Page
        When User Clicks on "Embed options"
        When User clicks "Popover embed" option
        Then User shall see "Popover Embed Style" dropdown
        Then User shall see "Button color" button with color preview
        Then User shall see "Button size" options
        Then User shall see "Responsive" checkbox and "Form Width" field under popover screen
        Then User shall see "Button Text" field under popover screen
        Then User shall see "Popover Button Text" field
        Then User shall see "Embed Code" non-editable Text area under popover screen
        Then User shall see Register button under Preview of the registration form
        Then User should be able to select any option from "Popover Embed Style" dropdown <style>
        Then User should be able to change the color <color> of the button from the Button color option in popover screen
        Then User should be able to mark or unmark the "Responsive" checkbox under popover embed page
        When User unmarks the "Responive" checkbox under popover embed screen
        Then User should able to change the Button width <buttonWidth>
        When User click on "Save and show code" button
        When User update text in button text field <buttonText> under popover embed screen
        Then User should able to update button text in popoer embed screen
        When User update text in popover button text field <buttonText1>
        Then User should able to update popover button text
        Then popup with registration form fields for standard event should display for <eventName>
        Then Enter first name <firstName> and email <email> in registration form fields
        When User clicks on "Register" button under popup form
        Then For standard event <eventName> User should be on same registration popup
        Examples:
            | eventName | color   | style  | firstName | email         | buttonWidth | buttonText | buttonText1 |
            | A         | #6b27a8 | Button | amy       | amy@gmail.com | 500         | NEW        | 12          |


    Scenario Outline: Check availablity of all customization tabs and fields/buttons on Clicking "Registration"--> Customize Registration tab for standard event
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        Then User shall see "Registration" tab
        Then User shall see "Email Notifications" tab
        Then User shall see "Room" tab
        Then User shall see "Event Admins" tab
        Then User shall see "General" tab
        Then User shall see "Integrations" tab
        When User Clicks on "Registration" option
        Then User shall see "Customize Registration","Edit Form Fields" and "Settings" option
        Then By default "Customize Registration" should selected
        Then User shall see "Custom Thankyou Page" toggle button
        Then User shall see "Customize" button
        When User clicks on "Edit Form Fields" button
        Then User shall see "First Name" option with dropdown "Show API Details"
        Then User shall see "Email" option with dropdown "Show API Details"
        Then User shall see "Enhanced Validation" toggle button
        Then User shall see "ADD ANOTHER FIELD" option
        When User clicks on "Settings"
        Then User shall see "Session Registration Limit" toggle button
        Then User shall see "Visible Upcoming Sessions" field
        When Click on "Customize registeration" option
        When User Clicks on "Customize" button
        Then User should be redirected to Registration page editor with Preview of Registration page
        Then User shall see "Save and Close" button
        Then User shall see following dropdowns "Template","Branding","Elements","Social"
        When User Clicks on "Template dropdown"
        Then User shall see "Accent","Gradient" and "Background Image" options in the dropdown
        When User Clicks on "Branding" dropdown
        Then User shall see "Upload image" option
        # Then User shall see "Color scheme " option with color preview
        When User clicks on "Elements" dropdown
        Then following toggle buttons should display "Headline","SubHeadline","Video","Description","Featured Presenters"
        When User clicks on "Social dropdown"
        Then User shall see "Edit Setting" Button for graph settings
        Examples:
            | eventName |
            | A         |


    Scenario Outline: Verify functionality of options under Registration --> Edit Form Fields For standard event
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

    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize for standard event
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        When User clicks on template menu button
        Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
        Then User Shall see the preview as per the option selected
        When User Clicks on "Branding" dropdown
        Then User should be able to change the color scheme by clicking on color scheme option <updatedColor>
        Then User shall see the changed color in the background of Preview Screen <updatedColor>
        Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
        Then User shall see the Uploaded Image in the Upload Image box.
        When User clicks on "Elements" dropdown
        Then User Should be able to turn on and Off "Headline" button and shall see the change in Preview
        When User turns on "Subheadline" button
        Then User should be able to enter the "Subheadline" <subheadline> in "Subheadline" field
        When User clicks on "SAVE SUBHEADLINE" button
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        When User click on "Video" button
        Then User should be able to add "Video Url" <videoLink> in "VIDEO URL" field
        When User clicks on "SAVE VIDEO" button
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        When User turns on "Featured Presenters" button
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        When User turns on "Description" button
        Then User should be able to enter the "Description" <description> in "Description" field
        When Clicks on "SAVE DESCRIPTION" button
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then User should be able to Upload Social image <socialImage> by clicking at "Upload Image" option
        Then User shall see the uploaded image in the "Upload Image" box
        Then User should be able to Enter values in "Title" <title> and "Description" <settingDescription> fields
        When Clicks on "SAVE OPEN GRAPH" button
        When User clicks on "Edit Settings" button
        Then User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        When User clicks on "Save&Close" button
        Then User Should be redirected back to Customize Registration screen
        Examples:
            | eventName | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage |
            | A         | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  |


    Scenario Outline: Verify functionality of options under Registration --> Settings and Email Notifications
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


    Scenario Outline: Verify availability and functionality of options under Customize --> General
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


    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Poll
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        Then User shall see "Resources", "Presentation Materials" and "Settings" option
        Then By default "Resources" option should be selected
        Then for "Resources" option "ADD A RESOURCE" button should display
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
        When User Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        When User selects "Handout" option from dropdown list
        Then for "Handout" User shall see "Handout Title","Upload File" fields
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Handout Title" <handoutTitle> field
        Then User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <handoutTitle>
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
            | eventName | handoutTitle | image      | question                       | option1  | option2 | option3 | title           | link                           | buttonText | image       |
            | A         | handoutTest  | tweety.jpg | Where are you joining us from? | New York | Toronto | London  | Download chrome | https://www.google.com/chrome/ | OpenURL    | testOne.jpg |

    Scenario Outline: Verify the functionality of add material in room tab
        Given Created event <eventName> should be searched and selected from event list
        Then Slide Material <name> must be added in event <slide>
        Then video <videoName> material <video> must be added
        Examples:
            | eventName | slide      | name | video          | videoName |
            | A         | sample.pdf | pdf  | shareVideo.mp4 | NewVideo  |

    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Settings
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        Then User Shall see "Public Chat" and "Private Chat" tabs , by default "Public Chat" should be selected
        Then User Shall see "Post Session Redirect" toggle button
        Then User shall see "Done" Button to save the made changes made and materials added
        When User turns on "Post-session Redirect" Button
        Then User shall see "Add A Custom Url" field
        Then User should be able to add URL <url> in the above mentioned field
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | url                   |
            | A         | https://webdriver.io/ |


    Scenario Outline: Verify functionality of options under Customize --> Event Admins--> Guest
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
        Then presenter must be added in event admin option with <role1> and <regEmail1>
        Then Host must be added in event admin option with <role2> and <member>
        Then Added role <role1> should dipslayed under event admin tab
        Then Added role <role2> should dipslayed under event admin tab
        Examples:
            | eventName | role      | name     | role1     | role2 | member    | regEmail1 |
            | A         | Moderator | newAdmin | Presenter | Host  | Subuser 1 | K         |

    Scenario Outline: Check if user can duplicate the session and all settings get copied to new event when duplicating
        Given Created event <eventName> should be searched and selected from event list
        Given Click on duplecate event option
        When User select start time and schedule new session <futureTime>
        When User Clicks on "Share" button
        When User Clicks on "Embed options"
        Then Selected any option from "Inline Embed Style" dropdown should displayed <inlineEmbedOption>
        Then User should be able to edit the button text <buttonText>
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        Then Template <option> should be selected in event
        When User Clicks on "Branding" dropdown
        Then For duplicate event changed color in the background of Preview <updatedColor>
        Then User shall see the Uploaded Image in the Upload Image box.
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        # Then User shall see the uploaded image in the "Upload Image" box
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then For duplicate event User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        When User clicks on "Save&Close" button
        When User clicks on "Edit Form Fields" button
        Then User should be able to add any field <field>
        When User Clicks on "Room" option
        Then Added resource should displayed under customize tab <question>
        Then Added resource should displayed under customize tab <handoutTitle>
        Then Added resource should displayed under customize tab <featureTitle>
        When User clicks on "Presentation Materials" option
        Then Added video material <videoMaterial> should displayed under share screen
        Then Added slide material <pdfMaterial> should displayed under share screen
        When User clicks on "Settings" option
        Then Add custom URL <url> should displaying on screen
        When User Clicks on "Event Admins" option
        When User Clicks on "Guest" tab
        Then Added role <role> should dipslayed under event admin tab
        Then Added role <role1> should dipslayed under event admin tab
        Then Added role <role2> should dipslayed under event admin tab
        When User Clicks on "General" option
        Then Selected timezone <timeZone> should displaying under tab
        Then Selected language <language> should displayed under tab
        When User Clicks on "Email Notifications" option
        Then User should able to see updated "Reply follow up" option <replyOption>
        Examples:
            | eventName | inlineEmbedOption | buttonText | formWidth | colorCode | field   | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage | question                       | handoutTitle | featureTitle    | role1     | role2 | role      | timeZone                    | language | url                   | popoverStyle | buttonWidth | colour  | replyOption | futureTime | pdfMaterial | videoMaterial |
            | A         | Styled HTML Form  | 12         | 500       | #5f9e39   | Website | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  | Where are you joining us from? | handoutTest  | Download chrome | Presenter | Host  | Moderator | (GMT+05:00) Indian/Maldives | English  | https://webdriver.io/ | Button       | 500         | #6b27a8 | Attendees   | 11:30 pm   | pdf         | NewVideo      |

    Scenario Outline: Check if we can archive the event and all upcoming sessions getting cancelled on archiving
        Given Created event <eventName> should be searched and selected from event list
        Given Click on Archive event option
        When User clicks on "Yes Archive" button
        Then Success message <message> should display
        Then Upcoming sessions getting cancelled
        Examples:
            | eventName | message                     |
            | A         | The event has been archived |

    Scenario Outline: Check if user is able to edit and Delete added resources and changes reflecting fine
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        Then Featured resources <featureTitle> should displayed within the meeting room
        When Handout resources <handoutTitle> should displayed within the meeting room
        When User switch to "Manage event" window
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User edit poll resource question <updatedQuestion>
        When User Clicks on "Add Resource" button
        When User edit handout resource title <updatedHandoutTitle>
        When User Clicks on "Add Resource" button
        When User edit feature action resource title <updatedFeatureTitle>
        When User Clicks on "Add Resource" button
        When Move to meeting room window
        Then Poll resources <updatedQuestion> should displayed within the meeting room
        Then Featured resources <updatedHandoutTitle> should displayed within the meeting room
        When Handout resources <updatedFeatureTitle> should displayed within the meeting room
        When User switch to "Manage event" window
        When User delete all resources or materials <count> from room tab
        When Move to meeting room window
        Then All deleted resources should removed from meeting room
        Examples:
            | eventName | question                       | featureTitle    | handoutTitle | count | updatedQuestion  | updatedHandoutTitle | updatedFeatureTitle |
            | A         | Where are you joining us from? | Download chrome | handoutTest  | 3     | Updated question | Updated handout     | Updated feature     |

    Scenario Outline: Check if user is able to edit and Delete added materials and changes reflecting fine
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User clicks on "Presentation Materials" option
        Then Added video material <videoMaterial> should displayed under share screen
        Then Added slide material <pdfMaterial> should displayed under share screen
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        Then Refresh screen and click on join room button
        When Clicks on "Share Materials" button
        Then Added slide material <pdfMaterial> should displayed under share screen
        Then Added video material <videoMaterial> should displayed under share screen
        When User switch to "Manage event" window
        When User click on edit first material button
        When User should be able to enter data in "Material Name" field <updatedPdfName>
        When User Click on "ADD MATERIAL" Button
        When User click on edit second material button
        When User should be able to enter data in "Material Name" field <updatedVideoName>
        When User Click on "ADD MATERIAL" Button
        When Move to meeting room window
        Then Added slide material <updatedPdfName> should displayed under share screen
        Then Added video material <updatedVideoName> should displayed under share screen
        When User switch to "Manage event" window
        When User delete all resources or materials <count> from room tab
        When Move to meeting room window
        Then Title for material <title> should displaying on screen
        Examples:
            | eventName | videoMaterial | pdfMaterial | updatedVideoName | updatedPdfName | count | title                     |
            | A         | NewVideo      | pdf         | UpdatedVideo     | UpdatedPdf     | 2     | No presentation materials |


    Scenario Outline: Check if user can switch the chat public/private before session starts from the dashboard section and also verify added and updated stage & room limit on start session popup
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        Then User should be able to click on "Public Chat" and "Private Chat" tab
        Given Host Must be in Meeting Room
        # Then Selected chat option should displaying as <option>
        When User click on Event name bar
        Then Session pop up should display
        # Then Event name <eventName> and time should displayed on popup
        Then Check that stage size and room size are displayed fine on Start Session card and get updated when changed from “Manage Account” <userA>
        Then Check that stage size <stageSize> and room size <roomSize> get updated when changed from “Manage Account”
        When Click on Start Session button under popup
        When Click on yes start button
        Then Session should started
        When User switch to "Manage event" window
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        When User click on "public chat" tab
        When User click on "public chat" tab
        When User clicks on "Done" button
        When Move to meeting room window
        When Chat screen is closed then click on open button
        Then Selected chat option should displaying as <option>
        Examples:
            | eventName | option | userA | stageSize | roomSize |
            | A         | Public | admin | 5         | 550      |

    Scenario Outline: Check if user is able to edit and delete Host, Presenter and Moderators to the event and they are able to join room correctly
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Event Admins" option
        When User Clicks on "Guest" tab
        When User click on presenter session dropdown
        When User select "Edit admin" option for presenter
        When User edit admin name <updatedPresenterName>
        Then User click on "confirm" button
        When Click on moderator session dropdown
        When For Moderator User select "Edit admin" option
        When User edit admin name <updatedModeratorName>
        Then User click on "confirm" button
        # When Click on host session dropdown
        # When For Host User select "Edit admin" option
        # When User edit admin role <UpdatedRole>
        # Then User click on "confirm" button
        Then User refresh the screen
        Given Host Must be in Meeting Room
        When Click on people button
        When User switch to "Manage event" window
        When User Clicks on "Guest" tab
        Then Moderator joins the session in second tab
        When Move to meeting room window
        Then Guest name <updatedModeratorName> should display on the screen
        When Move to guest's screen
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Added host joins the session in second tab
        When Move to meeting room window
        Then Guest name <member> should display on the screen
        When Move to guest's screen
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Presenter joins the session in second tab
        When Move to meeting room window
        Then Guest name <updatedPresenterName> should display on the screen
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Delete Presenter and check that copied link is not working and displaying message <errorMessage>
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Delete Moderator and check that copied link is not working and displaying message <errorMessage>
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Delete Host and check that copied link is not working and displaying message <errorMessage>
        Then Move to Manage event window
        Then Host must be added in event admin option with <role2> and <member>
        Examples:
            | eventName | updatedPresenterName | role2 | member    | updatedModeratorName | UpdatedHostName | UpdatedRole | member    | errorMessage                 |
            | A         | UpdatedPresenter     | Host  | Subuser 1 | UpdatedModerator     | UpdatedHost     | Presenter   | Subuser 1 | Uh oh, there’s nothing here. |


    # # //=================Series event scripts==============//

    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Series Event "
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        # When User select start session time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | option      | message                      |
            | E         | 11:30 pm   | Every month | Recurring sessions scheduled |

    Scenario Outline: Check if user is able to create a session only with more than 5 characters, select host, edit and cancel session
        Given User should be on Events page
        When Click on "Add New Event" button
        Then Event creation page should open
        When Click On "Series" option
        Then "Create New Series" page should open
        When Go to "Event Name" field
        When Add data in "Event Name" field <eventName>
        Then Event validation message <validationMsg> should displayed
        When Add series event name in "Event Name" field <eventName>
        When User select host <host> for event
        When click on "Continue button"
        Then User should be redirected to "Manage event" screen
        When User select start time and schedule new session <futureTime>
        When User should able to edit start date or time <updatedTime> after clicking on edit date time option
        Then Updated session time <updatedTime> should display on screen
        When Click on dropdown arrow in front of session
        When Click on "Cancel Session" option
        Then "Cancel Session" window prompt <windowTitle>
        When User select "Notify registrants" checkbox
        When Click on "Yes,Confirm" button
        Then Success message <message> should display
        Then Session should not displayed under "Upcoming Session" tab
        Examples:
            | eventName | validationMsg                           | host      | futureTime | updatedTime | message                   | windowTitle    |
            | A         | Please enter a minimum of 5 characters. | Subuser 1 | 10:30 pm   | 11:00 pm    | Session has been canceled | Cancel Session |


    Scenario Outline: Check if user is able to select admins for particular sessions by clicking on “All Sessions” option and able to join only selected sessions if any
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        When User select start time and schedule new session <futureTime>
        Then With next day time <futureTime> user is able to schedule more than one session
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then Host must be added in event admin option with <role> and <member>
        When User click on "All sessions" button of added admin
        Then User uncheck all session checkbox and select second session checkbox
        Then Verify that added host is able to join selected session through join link
        Examples:
            | eventName | futureTime | role | member    |
            | A         | 10:30 pm   | Host | Subuser 1 |

    Scenario Outline: Check the visibility of all fields and buttons under create new event screen and user is able to create new event
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        Then User should be redirected to "Manage event" screen
        Given User should be on Manage Event Page
        Then User shall see "Summary","Customize","Share" and "Activity" Tabs
        Then User shall see "JOIN ROOM" button
        Then User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"
        Then User shall see "Edit" button alongside Event name
        Then User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option
        Then User shall see "Schedule this Event" button
        Examples:
            | userA | eventName |
            | admin | A         |


    Scenario Outline: Check availablity of fields/buttons on Clicking "Schedule this event " button and able to schedule event and not able to add multiple sessions for same time
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Then User should be redirected to Schedule Upcoming session menu
        Then User shall see "Summary","Customize","Share" and "Activity" Tabs
        Then User shall see "JOIN ROOM" button
        Then User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"
        Then User shall see "Edit" button alongside Event name
        Then User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        Then User shall see "Add to Event schedule" button
        When User selects current or future date
        When User select start session time <futureTime>
        When For End session User select session time
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then Select start session time <futureTime> and schedule more than one session
        Then Success message <errorMessage> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | message                    | secondSessionTime | errorMessage                                                                 |
            | A         | 10:30 pm   | Session has been scheduled | 10:30 pm          | One of your upcoming sessions is already scheduled for the same date & time. |


    Scenario Outline: Verify availability and fucntionality of event registration link and Inline embed options for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Then User shall see "facebook","twitter" and "linkedin" logo for sharing the link
        Then User shall see "Embed options" option
        When User Clicks on "Embed options"
        Then User shall see "Inline embed" and "PopOver embed" tab
        Then User shall see "Inline Embed Style :" dropdown
        Then User shall see "Button Color :" button with preview of selected color
        Then User should able to see "Button Text" field
        Then User shall see "Responsive" checkbox and "Form Width" field
        Then "Save and show code" button should display on screen
        Then User should be able to select any option from "Inline Embed Style" dropdown <option>
        When User add new text in button text field <buttonText>
        Then User should be able to edit the button text <buttonText>
        Then User enter values <firstName> and <email> in fields of form preview and click on register button
        Then User should not be redirected to any page when clicked on register button
        Then User should be able to mark or unmark the "Responsive" checkbox
        When User unmarks the "Responive" checkbox
        Then User should be able to change the Form width <formWidth>
        Then User should be able to change the color of the button from the Button color option <colorCode>
        When User click on "Save and show code" button
        Examples:
            | eventName | option           | colorCode | firstName | email          | formWidth | buttonText |
            | A         | Styled HTML Form | #5f9e39   | ayman     | test@gmail.com | 500       | 12         |

    Scenario Outline: Verify availability and functionality of Popover embed options
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Share" button
        Given User should be on Manage Event Share Page
        When User Clicks on "Embed options"
        When User clicks "Popover embed" option
        Then User shall see "Popover Embed Style" dropdown
        Then User shall see "Button color" button with color preview
        Then User shall see "Button size" options
        Then User shall see "Responsive" checkbox and "Form Width" field under popover screen
        Then User shall see "Button Text" field under popover screen
        Then User shall see "Popover Button Text" field
        Then User shall see "Embed Code" non-editable Text area under popover screen
        Then User shall see Register button under Preview of the registration form
        Then User should be able to select any option from "Popover Embed Style" dropdown <style>
        Then User should be able to change the color <color> of the button from the Button color option in popover screen
        Then User should be able to mark or unmark the "Responsive" checkbox under popover embed page
        When User unmarks the "Responive" checkbox under popover embed screen
        Then User should able to change the Button width <buttonWidth>
        When User click on "Save and show code" button
        When User update text in button text field <buttonText> under popover embed screen
        Then User should able to update button text in popoer embed screen
        When User update text in popover button text field <buttonText1>
        Then User should able to update popover button text
        Then popup with registration form fields for series event should display <eventName>
        Then Enter first name <firstName> and email <email> in registration form fields
        When User clicks on "Register" button under popup form
        Then For series event User should be on same registration popup page <eventName>
        Examples:
            | eventName | color   | style  | firstName | email         | buttonWidth | buttonText | buttonText1 |
            | A         | #6b27a8 | Button | amy       | amy@gmail.com | 500         | NEW        | 12          |


    Scenario Outline: Check availablity of all customization tabs and fields/buttons on Clicking "Registration"--> Customize Registration tab for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        Then User shall see "Registration" tab
        Then User shall see "Email Notifications" tab
        Then User shall see "Room" tab
        Then User shall see "Event Admins" tab
        Then User shall see "General" tab
        Then User shall see "Integrations" tab
        When User Clicks on "Registration" option
        Then User shall see "Customize Registration","Edit Form Fields" options
        Then By default "Customize Registration" should selected
        Then User shall see "Custom Thankyou Page" toggle button
        Then User shall see "Customize" button
        When User clicks on "Edit Form Fields" button
        Then User shall see "First Name" option with dropdown "Show API Details"
        Then User shall see "Email" option with dropdown "Show API Details"
        Then User shall see "Enhanced Validation" toggle button
        Then User shall see "ADD ANOTHER FIELD" option
        When Click on "Customize registeration" option
        When User Clicks on "Customize" button
        Then User should be redirected to Registration page editor with Preview of Registration page
        Then User shall see "Save and Close" button
        Then User shall see following dropdowns "Template","Branding","Elements","Social"
        When User Clicks on "Template dropdown"
        Then User shall see "Accent","Gradient" and "Background Image" options in the dropdown
        When User Clicks on "Branding" dropdown
        Then User shall see "Upload image" option
        # Then User shall see "Color scheme " option with color preview
        When User clicks on "Elements" dropdown
        Then following toggle buttons should display "Headline","SubHeadline","Video","Description","Featured Presenters"
        When User clicks on "Social dropdown"
        Then User shall see "Edit Setting" Button for graph settings
        Examples:
            | eventName |
            | A         |


    Scenario Outline: Verify functionality of options under Registration --> Edit Form Fields For series event
        Given Created series event <eventName> should be searched and selected from event list
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

    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        When User clicks on template menu button
        Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
        Then User Shall see the preview as per the option selected
        When User Clicks on "Branding" dropdown
        Then User should be able to change the color scheme by clicking on color scheme option <updatedColor>
        Then User shall see the changed color in the background of Preview Screen <updatedColor>
        Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
        Then User shall see the Uploaded Image in the Upload Image box.
        When User clicks on "Elements" dropdown
        Then User Should be able to turn on and Off "Headline" button and shall see the change in Preview
        When User turns on "Subheadline" button
        Then User should be able to enter the "Subheadline" <subheadline> in "Subheadline" field
        When User clicks on "SAVE SUBHEADLINE" button
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        When User click on "Video" button
        Then User should be able to add "Video Url" <videoLink> in "VIDEO URL" field
        When User clicks on "SAVE VIDEO" button
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        When User turns on "Featured Presenters" button
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        When User turns on "Description" button
        Then User should be able to enter the "Description" <description> in "Description" field
        When Clicks on "SAVE DESCRIPTION" button
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then User should be able to Upload Social image <socialImage> by clicking at "Upload Image" option
        Then User shall see the uploaded image in the "Upload Image" box
        Then User should be able to Enter values in "Title" <title> and "Description" <settingDescription> fields
        When Clicks on "SAVE OPEN GRAPH" button
        When User clicks on "Edit Settings" button
        Then User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        When User clicks on "Save&Close" button
        Then User Should be redirected back to Customize Registration screen
        Examples:
            | eventName | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage |
            | A         | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  |


    Scenario Outline: Verify functionality of options under Registration -->Email Notifications
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
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


    Scenario Outline: Verify availability and functionality of options under Customize --> General
        Given Created series event <eventName> should be searched and selected from event list
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


    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Poll
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        Then User shall see "Resources", "Presentation Materials" and "Settings" option
        Then By default "Resources" option should be selected
        Then for "Resources" option "ADD A RESOURCE" button should display
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
        When User Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        When User selects "Handout" option from dropdown list
        Then for "Handout" User shall see "Handout Title","Upload File" fields
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Handout Title" <handoutTitle> field
        Then User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <handoutTitle>
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
            | eventName | handoutTitle | image      | question                       | option1  | option2 | option3 | title           | link                           | buttonText | image       |
            | A         | handoutTest  | tweety.jpg | Where are you joining us from? | New York | Toronto | London  | Download chrome | https://www.google.com/chrome/ | OpenURL    | testOne.jpg |

    Scenario Outline: Verify the functionality of add material in room tab
        Given Created series event <eventName> should be searched and selected from event list
        Then Slide Material <name> must be added in event <slide>
        Then video <videoName> material <video> must be added
        Examples:
            | eventName | slide      | name | video          | videoName |
            | A         | sample.pdf | pdf  | shareVideo.mp4 | NewVideo  |

    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Settings
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        Then User Shall see "Public Chat" and "Private Chat" tabs , by default "Public Chat" should be selected
        Then User Shall see "Post Session Redirect" toggle button
        Then User shall see "Done" Button to save the made changes made and materials added
        When User turns on "Post-session Redirect" Button
        Then User shall see "Add A Custom Url" field
        Then User should be able to add URL <url> in the above mentioned field
        When User clicks on "Done" button
        Then User should be on Event Customization page
        Examples:
            | eventName | url                   |
            | A         | https://webdriver.io/ |


    Scenario Outline: Verify functionality of options under Customize --> Event Admins--> Guest
        Given Created series event <eventName> should be searched and selected from event list
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
        Then presenter must be added in event admin option with <role1> and <regEmail1>
        Then Host must be added in event admin option with <role2> and <member>
        Then Added role <role1> should dipslayed under event admin tab
        Then Added role <role2> should dipslayed under event admin tab
        Examples:
            | eventName | role      | name     | role1     | role2 | member    | regEmail1 |
            | A         | Moderator | newAdmin | Presenter | Host  | Subuser 1 | K         |

    Scenario Outline: Check if user can duplicate the session and all settings get copied to new event when duplicating
        Given Created series event <eventName> should be searched and selected from event list
        Given Click on duplecate event option
        When User select start time and schedule new session <futureTime>
        When User Clicks on "Share" button
        When User Clicks on "Embed options"
        Then Selected any option from "Inline Embed Style" dropdown should displayed <inlineEmbedOption>
        Then User should be able to edit the button text <buttonText>
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        Then Template <option> should be selected in event
        When User Clicks on "Branding" dropdown
        Then User shall see the changed color in the background of Preview Screen <updatedColor>
        Then User shall see the Uploaded Image in the Upload Image box.
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        # Then User shall see the uploaded image in the "Upload Image" box
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then For duplicate event User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        When User clicks on "Save&Close" button
        When User clicks on "Edit Form Fields" button
        Then User should be able to add any field <field>
        When User Clicks on "Room" option
        Then Added resource should displayed under customize tab <question>
        Then Added resource should displayed under customize tab <handoutTitle>
        Then Added resource should displayed under customize tab <featureTitle>
        When User clicks on "Presentation Materials" option
        Then Added video material <videoMaterial> should displayed under share screen
        Then Added slide material <pdfMaterial> should displayed under share screen
        When User clicks on "Settings" option
        Then Add custom URL <url> should displaying on screen
        When User Clicks on "Event Admins" option
        When User Clicks on "Guest" tab
        Then Added role <role> should dipslayed under event admin tab
        Then Added role <role1> should dipslayed under event admin tab
        Then Added role <role2> should dipslayed under event admin tab
        When User Clicks on "General" option
        Then Selected timezone <timeZone> should displaying under tab
        Then Selected language <language> should displayed under tab
        When User Clicks on "Email Notifications" option
        Then User should able to see updated "Reply follow up" option <replyOption>
        Examples:
            | eventName | inlineEmbedOption | buttonText | formWidth | colorCode | field   | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage | question                       | handoutTitle | featureTitle    | role1     | role2 | role      | timeZone                    | language | url                   | popoverStyle | buttonWidth | colour  | replyOption | futureTime | pdfMaterial | videoMaterial |
            | A         | Styled HTML Form  | 12         | 500       | #5f9e39   | Website | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  | Where are you joining us from? | handoutTest  | Download chrome | Presenter | Host  | Moderator | (GMT+05:00) Indian/Maldives | English  | https://webdriver.io/ | Button       | 500         | #6b27a8 | Attendees   | 11:30 pm   | pdf         | NewVideo      |

    Scenario Outline: Check if we can archive the event and all upcoming sessions getting cancelled on archiving
        Given Created series event <eventName> should be searched and selected from event list
        Given Click on Archive event option
        When User clicks on "Yes Archive" button
        Then Success message <message> should display
        Then Upcoming sessions getting cancelled
        Examples:
            | eventName | message                     |
            | A         | The event has been archived |

    Scenario Outline: Check if user is able to edit and Delete added resources and changes reflecting fine
        Given Created series event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        Then Featured resources <featureTitle> should displayed within the meeting room
        When Handout resources <handoutTitle> should displayed within the meeting room
        When User switch to "Manage event" window
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User edit poll resource question <updatedQuestion>
        When User Clicks on "Add Resource" button
        When User edit handout resource title <updatedHandoutTitle>
        When User Clicks on "Add Resource" button
        When User edit feature action resource title <updatedFeatureTitle>
        When User Clicks on "Add Resource" button
        When Move to meeting room window
        Then Poll resources <updatedQuestion> should displayed within the meeting room
        Then Featured resources <updatedHandoutTitle> should displayed within the meeting room
        When Handout resources <updatedFeatureTitle> should displayed within the meeting room
        When User switch to "Manage event" window
        When User delete all resources or materials <count> from room tab
        When Move to meeting room window
        Then All deleted resources should removed from meeting room
        Examples:
            | eventName | question                       | featureTitle    | handoutTitle | count | updatedQuestion  | updatedHandoutTitle | updatedFeatureTitle |
            | A         | Where are you joining us from? | Download chrome | handoutTest  | 3     | Updated question | Updated handout     | Updated feature     |

    Scenario Outline: Check if user is able to edit and Delete added materials and changes reflecting fine
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User clicks on "Presentation Materials" option
        Then Added video material <videoMaterial> should displayed under share screen
        Then Added slide material <pdfMaterial> should displayed under share screen
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        Then Refresh screen and click on join room button
        When Clicks on "Share Materials" button
        Then Added slide material <pdfMaterial> should displayed under share screen
        Then Added video material <videoMaterial> should displayed under share screen
        When User switch to "Manage event" window
        When User click on edit first material button
        When User should be able to enter data in "Material Name" field <updatedPdfName>
        When User Click on "ADD MATERIAL" Button
        When User click on edit second material button
        When User should be able to enter data in "Material Name" field <updatedVideoName>
        When User Click on "ADD MATERIAL" Button
        When Move to meeting room window
        Then Added slide material <updatedPdfName> should displayed under share screen
        Then Added video material <updatedVideoName> should displayed under share screen
        When User switch to "Manage event" window
        When User delete all resources or materials <count> from room tab
        When Move to meeting room window
        Then Title for material <title> should displaying on screen
        Examples:
            | eventName | videoMaterial | pdfMaterial | updatedVideoName | updatedPdfName | count | title                     |
            | A         | NewVideo      | pdf         | UpdatedVideo     | UpdatedPdf     | 2     | No presentation materials |


    Scenario Outline: Check if user can switch the chat public/private before session starts from the dashboard section and also verify added and updated stage & room limit on start session popup
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        Then User should be able to click on "Public Chat" and "Private Chat" tab
        Given Host Must be in Meeting Room
        # Then Selected chat option should displaying as <option>
        When User click on Event name bar
        Then Session pop up should display
        # Then For series Event name <eventName> and time should displayed on popup
        Then Check that stage size and room size are displayed fine on Start Session card and get updated when changed from “Manage Account” <userA>
        Then Check that stage size <stageSize> and room size <roomSize> get updated when changed from “Manage Account”
        When Click on Start Session button under popup
        When Click on yes start button
        Then Session should started
        When User switch to "Manage event" window
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Room" option
        When User clicks on "Settings" option
        When User click on "public chat" tab
        When User click on "public chat" tab
        When User clicks on "Done" button
        When Move to meeting room window
        When Chat screen is closed then click on open button
        Then Selected chat option should displaying as <option>
        Examples:
            | eventName | option | userA | stageSize | roomSize |
            | A         | Public | admin | 5         | 550      |

    Scenario Outline: Check if user is able to edit and delete Host, Presenter and Moderators to the event and they are able to join room correctly
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User Clicks on "Event Admins" option
        When User Clicks on "Guest" tab
        When User click on presenter session dropdown
        When User select "Edit admin" option for presenter
        When User edit admin name <updatedPresenterName>
        Then User click on "confirm" button
        When Click on moderator session dropdown
        When For Moderator User select "Edit admin" option
        When User edit admin name <updatedModeratorName>
        Then User click on "confirm" button
        # When Click on host session dropdown
        # When For Host User select "Edit admin" option
        # When User edit admin role <UpdatedRole>
        # Then User click on "confirm" button
        Then User refresh the screen
        Given Host Must be in Meeting Room
        When Click on people button
        When User switch to "Manage event" window
        When User Clicks on "Guest" tab
        Then Moderator joins the session in second tab
        When Move to meeting room window
        Then Guest name <updatedModeratorName> should display on the screen
        When Move to guest's screen
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Added host joins the session in second tab
        When Move to meeting room window
        Then Guest name <member> should display on the screen
        When Move to guest's screen
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Presenter joins the session in second tab
        When Move to meeting room window
        Then Guest name <updatedPresenterName> should display on the screen
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Delete Presenter and check that copied link is not working and displaying message <errorMessage>
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Delete Moderator and check that copied link is not working and displaying message <errorMessage>
        Then Move to Manage event window
        When User Clicks on "Guest" tab
        Then Delete Host and check that copied link is not working and displaying message <errorMessage>
        Then Move to Manage event window
        Examples:
            | eventName | updatedPresenterName | updatedModeratorName | UpdatedHostName | UpdatedRole | member    | errorMessage                 |
            | A         | UpdatedPresenter     | UpdatedModerator     | UpdatedHost     | Presenter   | Subuser 1 | Uh oh, there’s nothing here. |



    Scenario Outline: Check that user is able to create Post session and verify message under people tab
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User select start session time <futureTime>
        When For End session User select session time
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Admin add handout <title> and <image> for event
        Then From link admin starts the session and share added resource
        When Registered user <regEmail> must attends the session and send message <message>
        When Admin join session from URL and ends the session
        When User clicks on "Activity" tab on manage event page
        Then User select past session option on activity tab
        When User clicks on "People" tab
        When User click on "Message" tab
        Then User info <regEmail> is displaying under message tab
        Then Message <message> should displaying under message tab
        Examples:
            | userA | eventName | slide        | futureTime | name | regEmail | title             | image      | message     |
            | admin | C         | pdf-test.pdf | 11:00 pm   | pdf  | A        | NewTitleForSeries | tweety.jpg | testMessage |

    Scenario Outline: Verify visibility of post session options and if share replay option opens the recording page and user can open recording by clicking on arrow
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on past event option
        Then User shall see "Session Date&Time","Registered" options
        Then User shall see "Attended","Missed","Messages" options
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


    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
        Then It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"
        When User clicks on "People" tab
        Then Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"
        Then User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns
        Examples:
            | eventName |
            | C         |


    Scenario Outline: Check functionality of all columns under "People" tab
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
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

    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
        Then It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"
        When User clicks on "People" tab
        Then Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"
        Then User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns
        Examples:
            | eventName |
            | C         |

    Scenario Outline: Check if graph loaded correctly for "Registrants" and "Attendees" and number of click  on "Insights Page" and all the fields are exported correctly under people tab
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
        Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
        Then Should displayed correct number of clicks on the resources below "Insights graph"
        When User clicks on "People" tab
        Then User should able to download export CSV file
        Examples:
            | eventName |
            | C         |

    Scenario Outline: Share added resources under chat screen and verify the attendee response on admin screen and attendee redirect to thank you screen after end the session
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        When User select start time and schedule new session <futureTime>
        Given Using join link host should be in meeting room and starts the session
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "handout"
        When Add handout file <image>
        Then User should able to add handout title <title>
        When save resource by clicking on "Save" button
        When Click on chat resource plus button
        When User Click on added handout resource <title>
        When Clicked on "Share Now" button
        When Click on chat resource plus button
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
        When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        When User Click on added poll resource <question>
        When Clicked on "Share Now" button
        When Click on chat resource plus button
        When Click on "featured action"
        Then User should able to add featured action title field <title>
        Then User should able to add link url <link> and button text field <buttonText> and file <image>
        When save resource by clicking on "Save" button
        When Click on chat resource plus button
        Then Featured resources <title> should displayed within the meeting room
        When User Click on added featured resource <title>
        When Clicked on "Share Now" button
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        When User selects the poll option
        When Click on third tab handouts on attendee screen
        When Attendee click on shared handout
        When Attendee clicks on featured action button
        Then User switch to feature action window <link>
        Then Move to Manage event window
        When Move to meeting room window
        Then Validate all resource clicks count <count> on admin screen
        When User click on Event name bar
        Then Session pop up should display
        When User clicks on "End Session" button under session popup
        Then User shall see "End Session" Pop-up.
        When User clicks on "YES,END"
        Then Move to Manage event window
        Then User should redirected to "Thank You" screen <header>
        Examples:
            | eventName | futureTime | count | header                | message       | title1                      | link                   | buttonText | image1      | question                       | option1  | option2 | title   | image    | regEmail |
            | D         | 11:00 pm   | 1     | Thank you for joining | check message | Download chrome for browser | https://www.demio.com/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg | K        |

    Scenario Outline: Share pre added resources and verify the attendee response and clicks in summary  and verify Post-session Redirect url
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        When User select start time and schedule new session <futureTime>
        When User Clicks on "Customize" option
        Then New Poll resource <question> must be added with options <option1> and <option2>
        Then Handout material <title> and <image> must be added for event
        Then Featured resource must be created with title <title1> and featureUrl <link> buttonText <buttonText> image <image1>
        When User clicks on "Settings" option
        Then User should be able to click on "Public Chat" and "Private Chat" tab
        When User turns on "Post-session Redirect" Button
        Then User shall see "Add A Custom Url" field
        Then User should be able to add URL <url> in the above mentioned field
        When User clicks on "Done" button
        Given Using join link host should be in meeting room and starts the session
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        When User Click on added handout resource <title>
        When Clicked on "Share Now" button
        When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        When User Click on added poll resource <question>
        When Clicked on "Share Now" button
        When Click on chat resource plus button
        When User Click on added featured resource <title1>
        When Clicked on "Share Now" button
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        Then Type message <message> in text area
        When User selects the poll option
        When Click on third tab handouts on attendee screen
        When Attendee click on shared handout
        When Attendee clicks on featured action button
        Then User switch to feature action window <link>
        Then Move to Manage event window
        When Move to meeting room window
        Then Validate all resource clicks count <count> on admin screen
        When User click on Event name bar
        Then Session pop up should display
        When User clicks on "End Session" button under session popup
        Then User shall see "End Session" Pop-up.
        When User clicks on "YES,END"
        Then Host should able to End the session
        Then Move to Manage event window
        When Go to Event Summary page
        When User clicks on past event option
        Then Message count should displaying under summary tab <count>
        When User clicks on "Activity" tab on manage event page
        Then User select past session option on activity tab
        Then Number of clicks <count> should displaying under insights for all resources
        Then Attendees should redirect on added url <url>
        Examples:
            | eventName | futureTime | count | message       | url                   | title1                      | link                   | buttonText | image1      | question                       | option1  | option2 | title   | image    | regEmail |
            | C         | 11:00 pm   | 1     | check message | https://webdriver.io/ | Download chrome for browser | https://www.demio.com/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg | K        |

    Scenario Outline: Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page"
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        When User select start time and schedule new session <futureTime>
        When Material <name> must be added in event <slide>
        When User Registered for event session with email <regEmail1>
        When User Registered for event session with email <regEmail2>
        Given Using join link host should be in meeting room and starts the session
        Then Move to Manage event window
        When Registered user <regEmail3> must attends the session and send message <mesage>
        When Admin join session from URL and ends the session
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime |
            | admin | I         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 3        | 2           | 1             | 10:30 pm   |



    # # //-----------------Automated event------------------//

    Scenario Outline: Verify if it is displaying the "Event Name" field ,"Upload Media" field,"Event Types" button,"Continue" button
        Given User should be on Create Events page
        When User clicks on "Automated" option
        Then User should be redirected to "Create New Automated Event" Screen
        Then User shall see "Event Name" field
        Then User shall see "Continue" button
        Then User shall see "EVENT TYPES" button
        Examples:
            | userA |
            | admin |


    Scenario Outline: Check that user is able to create new event on clicking "Automated" option
        Given new "Automated" Event <eventName> must be craeted
        Then User should be redirected to "Manage event" screen
        Examples:
            | eventName |
            | D         |


    Scenario Outline: Check availablity of tabs/buttons on Manage Event page for Automated Event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        Then User shall see "Summary","Customize","Share" and "Activity" Tabs
        Then User shall see "JOIN ROOM" button
        Then User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"
        Then User shall see "Edit" button alongside Event name
        Then User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option
        Then User shall see "On-Demand" option
        Then User shall see "Schedule this Event" button
        Examples:
            | eventName |
            | D         |

    Scenario Outline: Check availablity and functionality of fields/buttons on Clicking "Schedule this event " button
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Then User should be redirected to Schedule Upcoming session menu
        Then User shall see "Summary","Customize","Share" and "Activity" Tabs
        Then User shall see "JOIN ROOM" button
        Then User shall see session options dropdown along side JOIN ROOM button with options "View Registration Page","Archieve Event","Delete Event"
        Then User shall see "Edit" button alongside Event name
        Then User shall see "Upcoming Sessions","Past Sessions" and "Blackout Dates" option
        Then User shall see "On-Demand" option
        Then User shall see "Single Date & Time" and "Recurring Times" options
        Then By default "Single Date & Time" option should be selected
        Then User shall see "Select Date" field
        Then User shall see "Select time" field
        Then User shall see "Add to Event schedule" button
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | message                    | videoName       |
            | D         | 10:30 pm   | Session has been scheduled | oneMinVideo.mp4 |


    Scenario Outline: Verify user is able to copy event registration link of automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Examples:
            | eventName | videoName       |
            | D         | oneMinVideo.mp4 |

    Scenario Outline: Verify availability and functionaliy of event registration link and Inline embed options for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Then User shall see "facebook","twitter" and "linkedin" logo for sharing the link
        Then User shall see "Embed options" option
        When User Clicks on "Embed options"
        Then User shall see "Inline embed" and "PopOver embed" tab
        Then For automated event user shall see "Inline Embed Style :" dropdown
        Then User shall see "Button Color :" button with preview of selected color
        Then User should able to see "Button Text" field
        Then User shall see "Responsive" checkbox and "Form Width" field
        When User click on "Save and show code" button
        Then User shall see "Embed Code" non-editable Text area
        Then By default "Inline embed " option should be selected
        Then For automated event user should be able to select any option from "Inline Embed Style" dropdown <option>
        When User add new text in button text field <buttonText>
        Then User should be able to edit the button text <buttonText>
        Then User enter values <firstName> and <email> in fields of form preview and click on register button
        Then For automated event User should not be redirected to any page when clicked on register button
        Then User should be able to mark or unmark the "Responsive" checkbox
        When User unmarks the "Responive" checkbox
        Then User should be able to change the Form width <formWidth>
        Then User should be able to change the color of the button from the Button color option <colorCode>
        Examples:
            | eventName | option           | colorCode | firstName | email          | formWidth | buttonText | videoName       |
            | D         | Styled HTML Form | #02bf6f   | Arya      | test@gmail.com | 500       | 12         | oneMinVideo.mp4 |


    Scenario Outline: Verify availability and functionality of Popover embed options
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Given User should be on Manage Event Share Page
        When User Clicks on "Embed options"
        When User clicks "Popover embed" option
        Then For automated event user shall see "Popover Embed Style" dropdown
        Then User shall see "Button color" button with color preview
        Then User shall see "Button size" options
        Then User shall see "Responsive" checkbox and "Form Width" field under popover screen
        Then User shall see "Button Text" field under popover screen
        Then User shall see "Popover Button Text" field
        Then User shall see "Embed Code" non-editable Text area under popover screen
        Then User shall see Register button under Preview of the registration form
        Then For automated event user should be able to select any option from "Popover Embed Style" dropdown <style>
        Then User should be able to change the color <color> of the button from the Button color option in popover screen
        Then User should be able to mark or unmark the "Responsive" checkbox under popover embed page
        When User unmarks the "Responive" checkbox under popover embed screen
        Then User should able to change the Button width <buttonWidth>
        When User update text in button text field <buttonText> under popover embed screen
        Then User should able to update button text in popoer embed screen
        When User update text in popover button text field <buttonText1>
        Then User should able to update popover button text
        Then popup with registration form fields should display for <eventName>
        Then Enter first name <firstName> and email <email> in registration form fields
        When User clicks on "Register" button under popup form
        Then User should be on same registration popup <eventName>
        Examples:
            | eventName | color   | style  | firstName | email           | buttonWidth | buttonText | buttonText1 | videoName       |
            | D         | #6b27a8 | Button | amyy      | amy@12gmail.com | 500         | NEW        | CLICK HERE  | oneMinVideo.mp4 |


    Scenario Outline: Check availablity of fields/buttons on Clicking "Registration" tab for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User shall see "Registration" tab
        Then User shall see "Email Notifications" tab
        Then User shall see "Room" tab
        Then User shall see "Event Admins" tab
        Then User shall see "General" tab
        Then User shall see "Integrations" tab
        When User Clicks on "Registration" option
        Then User shall see "Customize Registration","Edit Form Fields" and "Settings" option
        Then By default "Customize Registration" should selected
        Then User shall see "Custom Thankyou Page" toggle button
        Then User shall see "Customize" button
        When User clicks on "Edit Form Fields" button
        Then User shall see "First Name" option with dropdown "Show API Details"
        Then User shall see "Email" option with dropdown "Show API Details"
        Then User shall see "Enhanced Validation" toggle button
        Then User shall see "ADD ANOTHER FIELD" option
        When User clicks on "Settings"
        Then User shall see "Session Registration Limit" toggle button
        Then User shall see "Visible Upcoming Sessions" field
        Examples:
            | eventName | videoName       |
            | D         | oneMinVideo.mp4 |


    Scenario Outline: Check availablity of fields/buttons on Clicking "Customize button" under Registration --> Customize Registration for Automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        Then User should be redirected to Registration page editor with Preview of Registration page
        Then User shall see "Save and Close" button
        Then User shall see following dropdowns "Template","Branding","Elements","Social"
        When User Clicks on "Template dropdown"
        Then User shall see "Accent","Gradient" and "Background Image" options in the dropdown
        When User Clicks on "Branding" dropdown
        Then User shall see "Upload image" option for automated event
        # Then User shall see "Color scheme " option with color preview
        When User clicks on "Elements" dropdown
        Then following toggle buttons should display "Headline","SubHeadline","Video","Description","Featured Presenters"
        When User clicks on "Social dropdown"
        Then User shall see "Edit Setting" Button for graph settings
        Examples:
            | eventName | videoName       |
            | D         | oneMinVideo.mp4 |

    Scenario Outline: Verify functionality of options under Registration --> Edit Form Fields For Automated event
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
            | eventName | field   | videoName       |
            | D         | Website | oneMinVideo.mp4 |

    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        When User clicks on template menu button
        Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
        # Then User Shall see the preview as per the option selected
        When User Clicks on "Branding" dropdown
        Then User should be able to change the color scheme by clicking on color scheme option <updatedColor>
        Then User shall see the changed color in the background of Preview Screen <updatedColor>
        Then User Should be able to upload image of the logo by clicking on "Upload Image" option for automated event <image>
        Then User shall see the Uploaded Image in the Upload Image box.
        When User clicks on "Elements" dropdown
        Then User Should be able to turn on and Off "Headline" button and shall see the change in Preview
        When User turns on "Subheadline" button
        Then User should be able to enter the "Subheadline" <subheadline> in "Subheadline" field
        When User clicks on "SAVE SUBHEADLINE" button
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        When User click on "Video" button
        Then User should be able to add "Video Url" <videoLink> in "VIDEO URL" field
        When User clicks on "SAVE VIDEO" button
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        When User turns on "Featured Presenters" button
        Then For automated event User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        When User turns on "Description" button
        Then User should be able to enter the "Description" <description> in "Description" field
        When Clicks on "SAVE DESCRIPTION" button
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then User should be able to Upload Social image by clicking at "Upload Image" option for automated event <socialImage>
        Then User shall see the uploaded image in the "Upload Image" box
        Then User should be able to Enter values in "Title" <title> and "Description" <settingDescription> fields
        When Clicks on "SAVE OPEN GRAPH" button
        When User clicks on "Edit Settings" button
        Then User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        When User clicks on "Save&Close" button
        Then User Should be redirected back to Customize Registration screen
        Examples:
            | eventName | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage |
            | D         | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  |


    Scenario Outline: Verify functionality of options under Registration --> Settings and Email Notifications for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Settings"
        Then User should be able to Increase and decrease the number of sessions to be visible
        When User turns on the "Session Registration Limit"
        Then User should be able to able to increase or decrease number of registrants per session
        When User clicks on "Done" button
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
            | eventName | option    | email                    |
            | D         | Attendees | This is a reminder email |


    Scenario Outline: Verify availability and functionality of options under Customize --> General for automated event
        Given Created automated event <eventName> should be searched and selected from event list
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
            | D         | (GMT+05:00) Indian/Maldives | English  |


    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Poll for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        Then By default "Resources" option should be selected
        Then for "Resources" option "ADD A RESOURCE" button should display
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
        When User Clicks on "ADD A RESOURCE" button
        Then User shall see "Type of Resource" dropdown
        When User clicks on "Type of Resource" dropdown
        When User selects "Handout" option from dropdown list
        Then for "Handout" User shall see "Handout Title","Upload File" fields
        Then User shall see "ADD RESOURCE" button
        Then User should be able to Enter values in the "Handout Title" <handoutTitle> field
        Then For automated event User should be able to "Upload File" <image>
        When User Clicks on "Add Resource" button
        Then Added resource should displayed under customize tab <handoutTitle>
        When User Clicks on "ADD A RESOURCE" button
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
            | eventName | handoutTitle | image      | question                       | option1  | option2 | option3 | title           | link                           | buttonText | image       |
            | D         | handoutTest  | tweety.jpg | Where are you joining us from? | New York | Toronto | London  | Download chrome | https://www.google.com/chrome/ | OpenURL    | testOne.jpg |


    Scenario Outline: Verify functionality of options under Customize --> Room-->Settings
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
            | eventName | url                   | videoName       |
            | D         | https://webdriver.io/ | oneMinVideo.mp4 |


    Scenario Outline: Verify functionality of options under Customize --> Event Admins--> Guest
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
            | eventName | role      | name     | videoName       |
            | D         | Moderator | newAdmin | oneMinVideo.mp4 |


    Scenario Outline: Verify functionality create a custom field option under Registration  for Automated event
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
            | eventName | label     | option    | videoName       |
            | D         | custom900 | Text Area | oneMinVideo.mp4 |


    Scenario Outline: Check availablity of fields/buttons under Customize --> Event Admins-->Team Member
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then User shall see "Team Member" and "Guest" tabs by default "Team Member" tab should be selected
        Then User shall see "Choose a member" dropdown
        When User clicks on "Choose a member" dropdown
        Then For automated event user shall see names of added user and "add another user" options
        Then User should be able to select a member from choose a member dropdown <member>
        Then For Automated event user shall see "Select a role" dropdown
        When User clicks on "Select a role" dropdown
        Then User shall see "Moderator" option
        Then User should be able to select a role for the added Member from the "Select a role" <role> dropdown
        Then User shall see "All Sessions" Button
        Then User shall see "Add Admin" Button
        When User Clicks on "All Sessions" Button
        Then User Shall see "Invite Aadmin for all session that are shown and future sessions" checkbox
        Then User shall see "Confirm" Button
        Then User should be able to Mark and Unmark the checkbox and click on "Confirm" Button
        Then Click on "ADD ADMIN" Button and the Admin should be added and displayed in Event Admins List
        Examples:
            | eventName | role      | member    | videoName       |
            | D         | Moderator | Subuser 1 | oneMinVideo.mp4 |




    Scenario Outline: Display of notice and upload video option at the top
        Given Created automated event <eventName> should be searched and selected from event list
        Then User should be redirected to "Manage event" screen
        Then User shall see notice <notice>
        Then User shall see upload video option at the end of the notice
        When User clicks on Upload video option
        Examples:
            | eventName | notice                                                                                          |
            | D         | A video is required for Automated events. Registration will be disabled until a video is added. |

    Scenario Outline: Verify functionality of "Automation Block" "Download Media" option under Automation block and "Swap video" option under Automation block
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        When User clicks on "Automation" tab
        Then For automated event User shall see "Upload Media" option
        Then User should be able to upload video <videoName>
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Download Media"
        Then The uploaded video should be downloaded
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Swap Video"
        Then The user shall see "Swap Video" pop-up <popupTitle>
        Then The user should be able to upload swap video <swapVideo>
        Then User shall see "NO,NEVER MIND" and "SWAP VIDEO" button
        When Clicks on "SWAP THE VIDEO" button
        Then The video should be swapped <swapVideo>
        Examples:
            | eventName | videoName       | popupTitle | swapVideo      |
            | D         | oneMinVideo.mp4 | Swap Video | demioVideo.mp4 |



    Scenario Outline: Verify functionality of  "cancel upload" option under Automation block
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks on "Automation" tab
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Swap Video"
        Then The user shall see "Swap Video" pop-up <popupTitle>
        When The video <swapVideo> is uploading
        When User clicks swap video upload Option button while the video is uploading
        When User clicks on "Cancel upload" option
        Then The video uploading should be cancelled
        Examples:
            | eventName | videoName       | popupTitle | swapVideo      |
            | D         | oneMinVideo.mp4 | Swap Video | demioVideo.mp4 |

    Scenario Outline: Verify working of  "No Never Mind" button under Automation block
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks on "Automation" tab
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Swap Video"
        Then The user shall see "Swap Video" pop-up <popupTitle>
        Then User should able to see "NO,NEVER MIND" button
        When User clicks on "NO,NEVER MIND" button
        Then User should be redirected to the "Automation" block
        Examples:
            | eventName | videoName       | popupTitle |
            | D         | oneMinVideo.mp4 | Swap Video |

    Scenario Outline: Verify functionality of options when clicked on  "..." button when the swapped video is uploaded
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks on "Automation" tab
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Swap Video"
        Then The user shall see "Swap Video" pop-up <popupTitle>
        Then The user should be able to upload swap video <newVideo>
        When User clicks swap video upload Option button
        When The user clicks on "Select a different video"
        Then The uploaded video should vanish
        Then User should be able to upload a new video <newVideo>
        Examples:
            | eventName | videoName       | popupTitle | swapVideo      | newVideo      |
            | D         | oneMinVideo.mp4 | Swap Video | demioVideo.mp4 | testVideo.mp4 |

    Scenario Outline: Check if user can duplicate the automated session and all settings get copied to new event when duplicating
        Given Created automated event <eventName> should be searched and selected from event list
        Given Click on duplecate event option
        When User select start time and schedule new session <futureTime>
        When User Clicks on "Share" button
        When User Clicks on "Embed options"
        Then Selected any option from "Inline Embed Style" dropdown should displayed <inlineEmbedOption>
        Then User should be able to edit the button text <buttonText>
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        Then Template <option> should be selected in event
        When User Clicks on "Branding" dropdown
        Then For duplicate event changed color in the background of Preview <updatedColor>
        Then User shall see the Uploaded Image in the Upload Image box.
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        # Then User shall see the uploaded image in the "Upload Image" box
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then For duplicate event User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        When User clicks on "Save&Close" button
        When User clicks on "Edit Form Fields" button
        Then User should be able to add any field <field>
        When User Clicks on "Room" option
        Then Added resource should displayed under customize tab <question>
        Then Added resource should displayed under customize tab <handoutTitle>
        Then Added resource should displayed under customize tab <featureTitle>
        When User clicks on "Settings" option for automated event
        Then Add custom URL <url> should displaying on screen
        When User Clicks on "Event Admins" option
        When User Clicks on "Guest" tab
        Then Added role <role> should dipslayed under event admin tab
        When User Clicks on "General" option
        Then Selected timezone <timeZone> should displaying under tab
        Then Selected language <language> should displayed under tab
        When User Clicks on "Email Notifications" option
        Examples:
            | eventName | inlineEmbedOption | buttonText | formWidth | colorCode | field   | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage | question                       | handoutTitle | featureTitle    | role      | timeZone                    | language | url                   | popoverStyle | buttonWidth | colour  | replyOption | futureTime | pdfMaterial | videoMaterial |
            | D         | Styled HTML Form  | 12         | 500       | #5f9e39   | Website | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  | Where are you joining us from? | handoutTest  | Download chrome | Moderator | (GMT+05:00) Indian/Maldives | English  | https://webdriver.io/ | Button       | 500         | #6b27a8 | Attendees   | 11:30 pm   | pdf         | NewVideo      |

    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Automated Event "
        Given new "Automated" Event <eventName> must be craeted
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Examples:
            | eventName | futureTime | option    | videoName       | message                      |
            | H         | 11:30 pm   | Every day | oneMinVideo.mp4 | Recurring sessions scheduled |

    Scenario Outline: Check user can turn ON "Post-Session Redirect"
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Room" option
        When User clicks on "Settings" option for automated event
        Then User should be able to click on "Public Chat" and "Private Chat" tab
        When User turns on "Post-session Redirect" Button
        Then User shall see "Add A Custom Url" field
        Then User should be able to add URL <url> in the above mentioned field
        When User clicks on "Done" button
        When Go to Event Summary page
        When Click on "On-Demand" option
        When Enable "On-Demand" option
        When User Clicks on "Share" button
        When User Register for On-demand session with email <regEmail>
        Then As soon as user registered for On-demand session user should redirected to "Join Room" button
        When Click on "Join Room" button after registered
        Then On-demand session should started as soon as user click on "Join Room" button
        Then Selected chat option should displaying as <option>
        Then For automated event attendees should redirect on added url <url>
        Examples:
            | eventName | url                    | futureTime | regEmail | videoName              | option  |
            | W         | https://www.demio.com/home | 10:30 pm   | P        | twentyFiveSecVideo.mp4 | Private |


    Scenario Outline: Check user can turn OFF "Post-Session Redirect"
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        When Go to Event Summary page
        When Click on "On-Demand" option
        When Enable "On-Demand" option
        When User Clicks on "Share" button
        When User Register for On-demand session with email <regEmail>
        Then As soon as user registered for On-demand session user should redirected to "Join Room" button
        When Click on "Join Room" button after registered
        Then On-demand session should started as soon as user click on "Join Room" button
        Then For automated event user should redirected to "Thank You" screen <header>
        Examples:
            | eventName | futureTime | regEmail | videoName       | header                |
            | A         | 10:30 pm   | P        | oneMinVideo.mp4 | Thank you for joining |






    Scenario Outline: Relation between registration customize and recording customize page
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        When Admin add handout <handoutTitle> and <image> for event
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        When User clicks on template menu button
        Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
        Then User Shall see the preview as per the option selected
        When User Clicks on "Branding" dropdown
        Then User should be able to change the color scheme by clicking on color scheme option <updatedColor>
        # Then User shall see the changed color in the background of Preview Screen <updatedColor>
        Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
        Then User shall see the Uploaded Image in the Upload Image box.
        When User clicks on "Elements" dropdown
        Then User Should be able to turn on and Off "Headline" button and shall see the change in Preview
        When User turns on "Subheadline" button
        Then User should be able to enter the "Subheadline" <subheadline> in "Subheadline" field
        When User clicks on "SAVE SUBHEADLINE" button
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        When User click on "Video" button
        Then User should be able to add "Video Url" <videoLink> in "VIDEO URL" field
        When User clicks on "SAVE VIDEO" button
        Then User shall the Saved Video <videoLink> at the bottom of Preview screen below video
        When User turns on "Featured Presenters" button
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        When User turns on "Description" button
        Then User should be able to enter the "Description" <description> in "Description" field
        When Clicks on "SAVE DESCRIPTION" button
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then User should be able to Upload Social image <socialImage> by clicking at "Upload Image" option
        Then User shall see the uploaded image in the "Upload Image" box
        Then User should be able to Enter values in "Title" <title> and "Description" <settingDescription> fields
        When Clicks on "SAVE OPEN GRAPH" button
        When User clicks on "Save&Close" button
        Then User Should be redirected back to Customize Registration screen
        Then Admin starts the session and share added resource
        When Registered user <regEmail> must attends the session and send message <message>
        When Admin ends the session
        When User clicks on past event option
        When Click on dropdown in fron of session
        When Click on "Share Replay" option
        Then Recording page popup should displayed
        When User clicks on "Edit page" button
        When Switch to iframe on recording customize screen
        Then Selected template should displayed on recording screen
        When User Clicks on "Branding" dropdown
        Then For duplicate event changed color in the background of Preview <updatedColor>
        Then User shall see the Uploaded Image in the Upload Image box.
        When User clicks on "Elements" dropdown
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
        Examples:
            | eventName | handoutTitle | name     | slide      | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage |
            | A         | New handout  | New test | sample.pdf | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  |

    Scenario Outline: A team member who doesn't have host ability should not be added as a host in any event
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then User is not able to select a team member <member> as a host for an event who doest not have host ability
        Examples:
            | eventName | member |
            | A         | User20 |

Scenario Outline: Verify that user is able to apply all custom settings on recording customize page
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        When Admin add handout <handoutTitle> and <image> for event
        Then Admin starts the session and share added resource
        When Registered user <regEmail> must attends the session and send message <message>
        When Admin ends the session
        When User clicks on past event option
        When Click on dropdown in fron of session
        When Click on "Share Replay" option
        Then Recording page popup should displayed
        When User clicks on "Edit page" button
        When Switch to iframe on recording customize screen
        When User Clicks on "Template dropdown"
        When User clicks on template menu button
        Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
        Then User Shall see the preview as per the option selected
        When User Clicks on "Branding" dropdown
        Then Delete image if already added
        Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
        Then User shall see the Uploaded Image in the Upload Image box.
        When User clicks on "Elements" dropdown
        Then User Should be able to turn on and Off "Headline" button and shall see the change in Preview
        When User turns on "Subheadline" button
        Then User should be able to enter the "Subheadline" <subheadline> in "Subheadline" field
        When User clicks on "SAVE SUBHEADLINE" button
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        Then User shall see "Call to action" toggle button
        When User click on "Call to action" button
        When Switch to iframe on recording customize screen
        Then User should able to fill all field title <ctaTitle> button url <buttonUrl> and button text <buttonText>
        When User click on "Save settings" button
        Then User is able to add cta title <ctaTitle> button text <buttonText>
        When User turns on "Description" button
        When Switch to iframe on recording customize screen
        Then User should be able to enter the "Description" <description> in "Description" field
        When Clicks on "SAVE DESCRIPTION" button
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        When User turns on "Featured Presenters" button
        When Switch to iframe on recording customize screen
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
       Then User Save added settings and verify that added logo and template should display on recording screen
        Then User shall see the saved "Subheadline" below the headline <subheadline> in the preview screen
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        Then User is able to add cta title <ctaTitle> button text <buttonText>
        When User click on CTA button
        Then Move to Manage event window
        Then User should able to redirect on url <buttonUrl>
         Examples:
            | eventName | handoutTitle | name     | slide      | image    | updatedColor | option | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage | ctaTitle | buttonText | buttonUrl             |
            | A         | New handout  | New test | sample.pdf | doll.jpg | #6b27a8      | Accent | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  | New CTA  | CTA Button | https://webdriver.io/ |


    Scenario Outline: Check that resources get launched on updated time when their launch time is updated from room and host is able to delte shared resource
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given Handout should be created with title <handoutTitle> and image <image> and set launchTime <launchTime>
        Given For onDemand event Polls should be created with question <pollQuestion> and optionOne <optionOne> optionTwo <optionTwo> and set launchTime <launchTime>
        Given OnDemand event Feature should be created with Featured title <featureTitle> and featureUrl <featureUrl> buttonText <buttonText> image <image> with <launchTime>
        When User Clicks on "Event Admins" option
        When User clicks on "Choose a member" dropdown
        Then User should be able to select a member from choose a member dropdown <member>
        When User clicks on "Select a role" dropdown
        Then User should be able to select a role for the added Member from the "Select a role" <role> dropdown
        Then Click on "ADD ADMIN" Button and the Admin should be added and displayed in Event Admins List
        When Go to Event Summary page
        When User Clicks on "Schedule this Event" button
        Then User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then Refresh screen until session get start
        Then Move to guest section
        Then In Automated event added moderator join the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        Then The Handout should not launch automatically before the set time
        Then The FeatureAction links should not launch automatically before the set time
        Then The Poll should not launch automatically before the set time
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then the Poll shall launch automatically at the set time
        Then Move to moderator window
        When Host deleted all resources from room
        Then Deleted resources are removed from user screen
        Then Move to attendee's screen
        Then Deleted resources are removed from user screen
        Then Move to Manage event window
        When User Clicks on "Room" option
        When User update all resource automatic launch time <updatedLaunchTime>
        When In other tab attendee <regEmail> joins the session
        Then The Handout should not launch automatically before the set time
        Then The FeatureAction links should not launch automatically before the set time
        Then The Poll should not launch automatically before the set time
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then the Poll shall launch automatically at the set time
        Examples:
            | userA | eventName | videoName           | regEmail | regCount | launchTime | updatedLaunchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | buttonText | image       | message                    | member    | role      | message       | featureUrl            | missedCount | attendeeCount |
            | admin | K         | automatedEvent1.mp4 | K        | 2        | 0h 1m 0s   | 0h 2m 40s         | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | https://webdriver.io/ | 1           | 1             |

 