Feature: Verify event page features
    As a User i want to check Series event feature

    Background:
        Given User close extra tabs

    Scenario Outline: User login to serven
        Given User should redirect on <url> login page
        Given User login with <userA>
        Examples:
            | userA | url                |
            | admin | productionLoginUrl |

    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Series Event "
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
        When User schedule new session at future time <futureTime>
        When User edit date or time <updatedTime> after clicking on edit date time option
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
            | A         | Please enter a minimum of 5 characters. | Subuser 1 | 10:30 pm   | 11:30 pm    | Session has been canceled | Cancel Session |


    Scenario Outline: Check if user is able to select admins for particular sessions by clicking on “All Sessions” option and able to join only selected sessions if any
        Given new "Series" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then User able to schedule more than one session with next day time <futureTime>
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
        Given new "Series" Event must be craeted <eventName>
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
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then User schedule more than one session on same time with <secondSessionTime>
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

    #SDone
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
        When User schedule new session at future time <futureTime>
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
        Then User shall see the uploaded image in the "Upload Image" box
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
        When Move to meeting room window
        Then Selected chat option should displaying as <option>
        Examples:
            | eventName | option  | userA | stageSize | roomSize |
            | A         | private | admin | 5         | 550      |

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
        When Click on host session dropdown
        When For Host User select "Edit admin" option
        When User edit admin role <UpdatedRole>
        Then User click on "confirm" button
        Given Host Must be in Meeting Room
        When Click on people button
        When User switch to "Manage event" window
        Then User refresh the screen
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
        Given new "Series" Event must be craeted <eventName>
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
        When Registered user <regEmail> must attends the session and send message <message>
        When Admin ends the session
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

    Scenario Outline: Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page"
        Given new "Series" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Material <name> must be added in event <slide>
        When User Registered for event session with email <regEmail1>
        When User Registered for event session with email <regEmail2>
        Then Session must be started by admin
        When Registered user <regEmail3> must attends the session and send message <mesage>
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime |
            | admin | I         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 3        | 2           | 1             | 10:30 pm   |

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
        Given new "Series" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
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
            | eventName | futureTime | count | header                | message       | title1                      | link                           | buttonText | image1      | question                       | option1  | option2 | title   | image    | regEmail |
            | D         | 11:00 pm   | 1     | Thank you for joining | check message | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg | K        |

    Scenario Outline: Share pre added resources and verify the attendee response and clicks in summary  and verify Post-session Redirect url
        Given new "Series" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
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
        Given Host should be in meeting room and starts the session
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
            | eventName | futureTime | count | message       | url                            | title1                      | link                           | buttonText | image1      | question                       | option1  | option2 | title   | image    | regEmail |
            | C         | 11:00 pm   | 1     | check message | https://www.google.com/chrome/ | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg | K        |
