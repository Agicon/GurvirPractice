Feature: Verify event page features
    As a User i want to check Series event feature

    # Background:
    #     Given User should be on Home page



    #POST-DEPLOYEMENT
    Scenario Outline: Check that user is able to create new standard event on clicking "Series" option
        Given User should be on login page
        Given User login with <userA>
        Given new "Series" Event must be craeted <eventName>
        Then User should be redirected to "Manage event" screen
        Examples:
            | eventName | userA |
            | B         | admin |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Session" for "Series Event"
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | 10:30 pm   | Session has been scheduled |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Series Event "
        Given User should be on Home page
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


    # POST-DEPLOYEMENT
    Scenario Outline: Verify user is able to copy event registration link of series event
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Examples:
            | eventName |
            | B         |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Registration --> Edit Form Fields For Series event
        Given User should be on Home page
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
            | B         | Website |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize--> Email Notifications
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | eventName | option   | email                   |
            | B         | No Shows | This is a remindr email |

    #    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> General
        Given User should be on Home page
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
            | B         | (GMT+05:00) Indian/Maldives | English  |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Poll
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | Where are you joining us from? | New York | Toronto | London  |

    #POST-DEPLOYEMENT
    Scenario Outline: Check availablity of fields/buttons under Customize --> Room
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Handout
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | NewTitleForSeries | tweety.jpg |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Resource-->Featured Action
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | Download chrome | https://www.google.com/chrome/ | OpenURL    | testOne.jpg |



    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Slide Presentation Material
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | testPDF | pdf-test.pdf |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability and functionality of options under Customize --> Room-->Video Presentation Material
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | testVideo | sample.mp4 |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Customize --> Room-->Settings
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | https://webdriver.io/ |


    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality of options under Customize --> Event Admins--> Guest
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then Name of the Host should displayed
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
            | B         | Moderator | newAdmin |


    # POST-DEPLOYEMENT
    Scenario Outline: Check availablity of fields/buttons under Customize --> Event Admins-->Team Member
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        Then Name of the Host should displayed
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
            | B         | Host | Subuser 1 |


    # POST-DEPLOYEMENT
    Scenario Outline: Verify functionality create a custom field option under Registration  for series event
        Given User should be on Home page
        Given Created series event <eventName> should be searched and selected from event list
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
            | B         | custom900 | Text Area |
