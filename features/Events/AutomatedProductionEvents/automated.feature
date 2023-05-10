Feature: Verify event page features
    As a User i want to check Automated event feature

    Background:
        Given User should be on Home page

    #Done
    Scenario Outline: Verify if it is displaying the "Event Name" field ,"Upload Media" field,"Event Types" button,"Continue" button
        Given User should be on login page
        Given User login with <userA>
        Given User should be on Create Events page
        When User clicks on "Automated" option
        Then User should be redirected to "Create New Automated Event" Screen
        Then User shall see "Event Name" field
        Then User shall see "Continue" button
        Then User shall see "EVENT TYPES" button
        Examples:
            | userA |
            | admin |

    #POST-DEPLOYEMENT
    Scenario Outline: Check that user is able to create new event on clicking "Automated" option
        Given new "Automated" Event <eventName> must be craeted
        Then User should be redirected to "Manage event" screen
        Examples:
            | eventName |
            | D         |

    #Done
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

    #Done
    Scenario Outline: Check availablity of fields/buttons on Clicking "Schedule this event " button
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
        Examples:
            | eventName |
            | D         |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Session" for "Automated Event"
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
    Scenario Outline: Verify user is able to copy event registration link of automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User should be able to copy the link
        Examples:
            | eventName | videoName  |
            | D         | sample.mp4 |

    #Done
    Scenario Outline: Verify availability of event registration link and Inline embed options for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Then User shall see "event registration link"
        Then User shall see "facebook","twitter" and "linkedin" logo for sharing the link
        Then User shall see "Embed options" option
        When User Clicks on "Embed options"
        Then User shall see "Inline embed" and "PopOver embed" tab
        Then For automated event user shall see "Inline Embed Style :" dropdown
        Then User shall see "Button Color :" button with preview of selected color
        Then User should able to see "Button Text" field
        Then User shall see "Responsive" checkbox and "Form Width" field
        Then User shall see "Embed Code" non-editable Text area
        Examples:
            | eventName | videoName      |
            | D         | demioVideo.mp4 |

    #Done
    Scenario Outline: Verify functionality of Inline embed options for Automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Given User should be on Manage Event Share Page
        When User Clicks on "Embed options"
        Then By default "Inline embed " option should be selected
        Then For automated event user should be able to select any option from "Inline Embed Style" dropdown <option>
        When User add new text in button text field <buttonText>
        Then User should be able to edit the button text <buttonText>
        Then User enter values <firstName> and <email> in fields of form preview and click on register button
        Then For automated event User should not be redirected to any page when clicked on register button
        Then User should be able to mark or unmark the "Responsive" checkbox
        When User unmarks the "Responive" checkbox
        Then For automated event user should be able to change the Form width <formWidth>
        Then User should be able to change the color of the button from the Button color option <colorCode>
        Examples:
            | eventName | option           | colorCode | firstName | email          | formWidth | buttonText | videoName  |
            | D         | Styled HTML Form | #02bf6f   | Arya      | test@gmail.com | 500       | 12         | sample.mp4 |

    #Done
    Scenario Outline: Verify availability of Popover embed options
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
        Examples:
            | eventName | videoName  |
            | D         | sample.mp4 |


    #Done
    Scenario Outline: Verify functionality of Popover embed options for Automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Share" button
        Given User should be on Manage Event Share Page
        When User Clicks on "Embed options"
        When User clicks "Popover embed" option
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
            | eventName | color   | style  | firstName | email           | buttonWidth | buttonText | buttonText1 | videoName  |
            | D         | #6b27a8 | Button | amyy      | amy@12gmail.com | 500         | NEW        | CLICK HERE  | sample.mp4 |


    #Done
    Scenario Outline: Verify availability of tabs when clicked on Customization for Automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User shall see "Registration" tab
        Then User shall see "Email Notifications" tab
        Then User shall see "Room" tab
        Then User shall see "Event Admins" tab
        Then User shall see "General" tab
        Then User shall see "Integrations" tab
        Examples:
            | eventName | videoName      |
            | D         | demioVideo.mp4 |


    #Done
    Scenario Outline: Check availablity of fields/buttons on Clicking "Registration" tab for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
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
            | eventName | videoName  |
            | D         | sample.mp4 |


    #Done
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
        Then User shall see "Color scheme " option with color preview
        When User clicks on "Elements" dropdown
        Then following toggle buttons should display "Headline","SubHeadline","Video","Description","Featured Presenters"
        When User clicks on "Social dropdown"
        Then User shall see "Edit Setting" Button for graph settings
        Examples:
            | eventName | videoName  |
            | D         | sample.mp4 |



    #POST-DEPLOYEMENT
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
            | eventName | field   | videoName  |
            | D         | Website | sample.mp4 |

    #Done
    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize-->Binding Editor for Automated event
        Given Created automated event <eventName> should be searched and selected from event list
        Given User should be on Manage Event Page
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        When User Clicks on "Branding" dropdown
        Then User should be able to change the color scheme by clicking on color scheme option <updatedColor>
        Then User shall see the changed color in the background of Preview Screen <updatedColor>
        Then User Should be able to upload image of the logo by clicking on "Upload Image" option for automated event <image>
        Then User shall see the Uploaded Image in the Upload Image box.
        Examples:
            | eventName | image    | updatedColor | videoName  |
            | D         | doll.jpg | #0586b7      | sample.mp4 |

    #Done
    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize-->Editor for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        When User Clicks on "Template dropdown"
        When User clicks on template menu button
        Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
        Then User Shall see the preview as per the option selected
        Examples:
            | option   | eventName | videoName  |
            | Gradient | D         | sample.mp4 |

    #Done
    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize-->Template Editor for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        Then User should be on event editor screen
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
        Examples:
            | eventName | subheadline     | videoLink                                   | videoName  |
            | D         | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | sample.mp4 |

    #Done Pass
    Scenario Outline: Verify functionality of options under Registration --> Customize-->Element Editor -->Description and presenter for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        Then User should be on event editor screen
        When User clicks on "Elements" dropdown
        When User turns on "Featured Presenters" button
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
        When User turns on "Description" button
        Then User should be able to enter the "Description" <description> in "Description" field
        When Clicks on "SAVE DESCRIPTION" button
        Then User shall see the saved "Description" below the headline <description> in the preview screen
        Examples:
            | eventName | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | videoName  |
            | D         | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | sample.mp4 |


    #SDone
    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize-->Settings Editor for automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        Then User should be on event editor screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then User should be able to Upload Social image by clicking at "Upload Image" option for automated event <image>
        Then User shall see the uploaded image in the "Upload Image" box
        Then User should be able to Enter values in "Title" <title> and "Description" <description> fields
        When Clicks on "SAVE OPEN GRAPH" button
        When User clicks on "Edit Settings" button
        Then User shall see the changes image,title <title> and Description <description> at open graph pop up screen
        Examples:
            | eventName | description          | image      | title        | videoName  |
            | D         | settings description | tweety.jpg | social title | sample.mp4 |

    #SDone
    Scenario Outline: Verify functionality of options under Registration --> Customize Registration --> Customize-->Save&close button for Automated event
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        Then User should be on event editor screen
        When User clicks on "Elements" dropdown
        When User clicks on "Save&Close" button
        Then User Should be redirected back to Customize Registration screen
        Examples:
            | eventName | subheadline | videoLink                                   | videoName      |
            | D         | AutoModule  | https://www.youtube.com/watch?v=EngW7tLk6R8 | demioVideo.mp4 |

    #SDone Pass
    Scenario Outline: Verify functionality of options under Registration --> Settings
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
        Examples:
            | eventName | videoName      |
            | D         | demioVideo.mp4 |

    #   #POST-DEPLOYEMENT Pass
    Scenario Outline: Verify availability and functionality of options under Customize--> Email Notifications
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
            | eventName | role      | member    | videoName  |
            | D         | Moderator | Subuser 1 | sample.mp4 |




    Scenario Outline: Display of notice and upload video option at the top
        Given Created automated event <eventName> should be searched and selected from event list
        Then User should be redirected to "Manage event" screen
        Then User shall see notice <notice>
        Then User shall see upload video option at the end of the notice
        When User clicks on Upload video option
        Examples:
            | eventName | notice                                                                                          |
            | D         | A video is required for Automated events. Registration will be disabled until a video is added. |

    Scenario Outline: Verify availability and functionality of "Automation Block"
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks on "Automation" tab
        Then User shall see "Upload Media" Option
        Then User should be able to upload video <videoName>
        Examples:
            | eventName | videoName  |
            | D         | sample.mp4 |


    Scenario Outline: Verify functionality of  "Download Media" option under Automation block
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks on "Automation" tab
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Download Media"
        Then The uploaded video should be downloaded
        Examples:
            | eventName | videoName  |
            | D         | sample.mp4 |


    Scenario Outline: Verify functionality of  "Swap video" option under Automation block
        Given Created automated event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User clicks on "Automation" tab
        When User clicks upload option button
        Then User shall see "Swap Video" and "Download Media" option
        When User clicks on "Swap Video"
        Then The user shall see "Swap Video" pop-up <popupTitle>
        Then The user should be able to upload swap video <swapVideo>
        Then User shall see "NO,NEVER MIND" and "SWAP VIDEO" button
        When Clicks on "SWAP THE VIDEO" button
        Then The video should be swapped <swapVideo>
        Examples:
            | eventName | videoName  | popupTitle | swapVideo      |
            | D         | sample.mp4 | Swap Video | demioVideo.mp4 |



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
            | eventName | videoName  | popupTitle | swapVideo      |
            | D         | sample.mp4 | Swap Video | demioVideo.mp4 |

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
            | eventName | videoName  | popupTitle |
            | D         | sample.mp4 | Swap Video |

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
            | eventName | videoName  | popupTitle | swapVideo      | newVideo      |
            | D         | sample.mp4 | Swap Video | demioVideo.mp4 | testVideo.mp4 |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify functionality for creating a "Recurring Sessions" for "Automated Event "
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
            | H         | 11:30 pm   | Every day | sample.mp4 | Recurring sessions scheduled |

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
        Then For automated event attendees should redirect on added url <url>
        Examples:
            | eventName | url                    | futureTime | regEmail | videoName  |
            | W         | https://www.demio.com/ | 10:30 pm   | P        | sample.mp4 |



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
            | eventName | futureTime | regEmail | videoName  | header                 |
            | A         | 10:30 pm   | P        | sample.mp4 | Thank you for joining |