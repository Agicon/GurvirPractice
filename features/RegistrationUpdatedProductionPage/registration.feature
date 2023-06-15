Feature: Verify event page features
    As a User i want to check event registration feature

    Background:
        Given User close extra tabs

    #Covered-Up : Check working of "Manage Registration" Link on join link page and Check all the fields are exported correctly from Activity area
    #Covered-Up : Check displaying of "Timer" on Registration page
    #Covered-Up : Check user able to copy "Unique Join Link" after registration
    #Covered-Up : Check displaying of Correct session and User Info on Manage Registration page
    #Covered-Up : Check displaying of "Correct Countdown" on the join link page
    #Covered-Up : Check user can register only after entering the valid email
    # Covered-Up : Check working of "Calendar" button on join link page for standard event and downloaded when clicked
    #Covered-Up : Check if user can turn off the notification emails from the "Email Notification" button on "Manage Registration" page
    # Scenario Outline: Check functionality of "View registration page" option ,"Register" button and check functionality of  "Join Room" button on Demio success page
    #     Given User should redirect on <url> login page
    #     Given User login with <userA>
    #     Given End if any session running and new "Standard" Event must be craeted <eventName>
    #     Given User should be on Manage Event Page
    #     When User Clicks on "Schedule this Event" button
    #     Given User should be redirected to Schedule Upcoming session menu
    #     When User selects current or future date
    #     When User select start session time <futureTime>
    #     When For End session User select session time
    #     When User clicks on "Add to Event schedule" button
    #     Then Created session should display under upcoming sessions
    #     When User clicks on dropdown along side JOIN ROOM button
    #     When User clicks on "View registration page" option
    #     Then User should be on Registration page
    #     When User add invalid <invalidemail> email and valid name for <regEmail> in registration form
    #     Then User is failed to login with invalid email <validation>
    #     Then "Timer" should displayed on Registration page
    #     Then Countdown timer should display for Days, Hours, Minutes and Seconds
    #     When Add data in "Registration form" and click registration button <regEmail>
    #     Then User should redirected to Demio success page on successfull registration
    #     Then User should get messsage <message> on message window
    #     Then It should displayed with Unique Join Link
    #     When Click on "Copy Link"
    #     Then "copy link" should copied the join link on clicking <text>
    #     When On success reg page click on "Add To Calendar" button
    #     Then OnSuccess reg page user should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"
    #     When Clicked on any option from add to calendar list <option1>
    #     Then User should be download calendar
    #     When Open copied url in new tab
    #     Then It should displayed correct countdown on Join Link page
    #     When Click on "Manage your Registration" Link
    #     Then User should redirected to "Manage Registration" page
    #     When Manage your registration page user click on "Add To Calendar" button
    #     Then OnSuccess reg page user should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"
    #     When Clicked on any option from add to calendar list <option1>
    #     Then User should be download calendar
    #     When Manage your registration page user click on "Add To Calendar" button
    #     Then User should able to turn on and off "Email Notification" button
    #     Then It should displayed with correct session <eventName> and user info <regEmail> on "Manage Registration" page
    #     Then Close recent window and switch to manage event window
    #     When User clicks on "Activity" tab on manage event page
    #     When User clicks on "People" tab
    #     When Click on "Export CSV" button
    #     Examples:
    #         | userA | eventName | regEmail | message                                       | futureTime | url                | text    | validation                  | invalidemail | option | option1 |
    #         | admin | C         | F        | Great! You are Now Registered for this Event: | 10:30 pm   | productionLoginUrl | Copied! | Please enter a valid email. | test@gmail   | Google | Outlook |

    Scenario Outline: Check if the registered user is removed if the cancel registration from the Manage registration
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
            | C         | E        | Great! You are Now Registered for this Event: | 10:30 pm   | Your event registration has been canceled. Your join link is no longer active. |



    Scenario Outline: Check displaying of "Correct Name, Email and Date" on the join link page
        Given Created event <eventName> should be searched and selected from event list
        Then It should displayed "Correct Name, Email and Date" on Join Link page <regEmail>
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | E        |

    Scenario Outline: Check working of "Calendar" button on join link page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        Then Session status is displaying <status> in waiting screen
        When Click on "Add To Calendar" button
        Then User should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"
        When Clicked on any option from add to calendar list <option>
        Then User should redirect on new tab for option <option>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime | option      | status                                                                                        |
            | C         | B        | Great! You are Now Registered for this Event: | 10:30 pm   | Outlook.com | This session has not started yet. You will be redirected to the room once the session begins. |

    Scenario Outline: Check displaying of correct "User's Date/Time" of registration and location in "Activity area"
        Given Created event <eventName> should be searched and selected from event list
        Then It should displayed correct "User's Date or Time" of registration and location in "Activity area"
        Examples:
            | eventName | regEmail | message                                       | futureTime | option |
            | C         | F        | Great! You are Now Registered for this Event: | 10:30 pm   | Google |

    Scenario Outline: Check registered user updated with all custom fields in dashboard of activity area
        Given Created event <eventName> should be searched and selected from event list
        When User shoud be on edit form field page
        Then User should able to add another fields <field1>
        Then User should able to add another fields <field2>
        Then User should able to add another fields <field3>
        Then User should able to add another fields <field4>
        Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
        Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
        Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
        Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
        Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
        Then User click on done button
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then User click on gdpr checkbox on registration screen
        When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
        Then Click on register button
        Then User should redirected to Demio success page on successfull registration
        Then Move to Manage event window
        Examples:
            | userA | eventName | futureTime | integration                 | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag     | attendee | attendeeTag   | noShowOption | noShowTag      | lastNameOption | websiteOption | phoneOption  | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption    | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
            | admin | C         | 11:00 pm   | OfficeAutopilot / Ontraport | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Demio: Register | Add Tag  | Demio: Attend | Add Tag      | Demio: No Show | Last Note      | IP Address    | Office Phone | Title           | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Fax            | Address        | City           | Zip Code      | Referring Page | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     |

    Scenario Outline: Check that selected template from customize tab is successfully uploaded on registration screen
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User select start session time <futureTime>
        When For End session User select session time
        When User clicks on "Add to Event schedule" button
        Given Created event <eventName> should be searched and selected from event list
        Given Template option <option> must be selected by admin
        Then Selected template should displayed on registration screen
        Examples:
            | eventName | futureTime | regEmail | option |
            | C         | 10:30 pm   | L        | Accent |

    Scenario Outline: check that uploaded branding image is displaying on registration screen and functionality of delete image
        Given Created event <eventName> should be searched and selected from event list
        Given Branding image <image> must be uploaded
        When User clicks upload option button
        # Then Download and delete image or media options should displaying on screen
        # When User clicks on Delete image or media option
        # Then User shall see "Upload image" option
        # Then User should be able to "Upload File" <image>
        Then Uploaded branding image should displayed on registration screen
        Examples:
            | eventName | futureTime | regEmail | image    |
            | C         | 10:30 pm   | A        | doll.jpg |

    Scenario Outline: check that host is able to add and edit subheadline, video link and description on registration page
        Given Created event <eventName> should be searched and selected from event list
        Given Subheadline <subheadline> and video link <videoLink> and description <description> must be added
        Then Added subheadline <subheadline> and video link <videoLink> and description <description> should displayed on registration page
        Given User edit Subheadline <updatedSubheadline> and video link <updatedVideoLink> and description <updatedDescription> must be added
        Then Updated subheadline <updatedSubheadline> and video link <updatedVideoLink> and description <updatedDescription> should displayed on registration page
        Examples:
            | eventName | futureTime | regEmail | subheadline | videoLink                                   | description     | updatedSubheadline | updatedVideoLink                            | updatedDescription |
            | C         | 10:30 pm   | B        | SubModule   | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | SubModule30        | https://www.youtube.com/watch?v=BROfzUAIwXU | description        |


    Scenario Outline: Check host is able to add and edit "Featured presenter" on registration screen
        Given Created event <eventName> should be searched and selected from event list
        Given Featured presenter <presenterName> and <presenterTitle> and <presenterWebsite> and <presenterBio> with <photo> must be added
        When User clicks upload option button
        Then Download and delete image or media options should displaying on screen
        When User clicks on Delete image or media option
        Then User shall see "Upload image" option
        Then User should be able to "Upload File" <photo>
        When Clicks On "Add Presenter" button
        When Click on edit presenter button
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        When User clicks upload option button
        Then On edit screen download and delete image or media options should displaying on screen
        When Clicks On "Add Presenter" button
        When User click on delete feature presenters
        Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
        Then User should be able to Upload the Presenter Photo <photo>
        When Clicks On "Add Presenter" button
        When For registration user click on add presenter button
        Then Featured presenter <presenterName> and <presenterTitle> and <presenterWebsite> and <presenterBio> should diaplyed on registration screen
        Examples:
            | eventName | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio |
            | C         | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   |

    Scenario Outline: Verify functionality of options add/edit/delete under Registration --> Customize Registration --> Customize-->Settings Editor
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        Then By default "Customize Registration" should selected
        When User Clicks on "Customize" button
        Then User should be on event editor screen
        When User clicks on "Social dropdown"
        When User clicks on "Edit Settings" button
        Then Delete image if already added
        Then User should be able to "Upload File" <image>
        Then User shall see the uploaded image in the "Upload Image" box
        Then User should be able to Enter values in "Title" <title> and "Description" <description> fields
        When For social User clicks upload option button
        Then Download and delete image or media options should displaying on screen
        When User clicks on Delete image or media option
        Then User should be able to "Upload File" <image>
        When Clicks on "SAVE OPEN GRAPH" button
        When User clicks on "Edit Settings" button
        When User clicks upload option button
        Then On edit screen download and delete image or media options should displaying on screen
        When Clicks on "SAVE OPEN GRAPH" button
        Examples:
            | eventName | description          | image      | title        |
            | C         | settings description | tweety.jpg | social title |



    Scenario Outline: Check host is able to delete attendee's registration
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User select start time and schedule new session <futureTime>
        Given Host should be in meeting room and starts the session
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Move to Manage event window
        Then Register count should displayed
        When User clicks on register count on manage event screen
        Then User shall see "Upcoming" link
        When User click on "Upcoming" Link
        Then Delete registration icon should displayed in registration details screen
        When User clicks on delete registration icon
        When User clicks on "Yes Delete" button
        Then Register count should be changed

        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | F        |

    Scenario Outline: Check host is able to copy the registration link and cancel attendee's regisreation
        Given Created event <eventName> should be searched and selected from event list
        When Registered user <regEmail> join the meeting room
        When User switch to "Manage event" window
        Then Register count should displayed
        When User clicks on register count on manage event screen
        Then User shall see "Upcoming" link
        When User click on "Upcoming" Link
        Then User shall see copy link icon
        When User clicks on copy link icon
        Then User should able to copy registration link
        Then Cancel registration button should displayed on registration details screen
        When User clicks on cancel registration button
        When User clicks on "Yes Cancel" button
        Then Register count should be changed
        Then Error screen should displayed on attendee's screen
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | L        |

    Scenario Outline: Check host is able to resend confirmation to registered attendee
        Given Created event <eventName> should be searched and selected from event list
        When Registered user <regEmail> join the meeting room
        When User switch to "Manage event" window
        Then Register count should displayed
        When User clicks on register count on manage event screen
        Then User shall see "Upcoming" link
        When User click on "Upcoming" Link
        Then User shall see "Resend confirmation" button
        When User clicks on "Resend confirmation" button
        Then User should able to send join link
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | K        |

    Scenario Outline: Multiple session and availability if the sessions on the reg page and after setting Session limit
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User select start time and schedule new session <firstSessionTime>
        Then User should be redirected to "Manage event" screen
        Then Created session should display under upcoming sessions
        Then With next day time <secondSessionTime> user is able to schedule more than one session
        Then Created session should display under upcoming sessions
        Then For third session schedule session with start time <thirdSessionTime>
        Then Created session should display under upcoming sessions
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When User click on upcoming session dropdown list
        Then Correct session count <sessonCount> should display on under dropdown list
        When User switch to "Manage event" window
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Settings"
        When User add visible upcomming session limit <sessionCountAfterSetLimit>
        When User clicks on "Done" button
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When User click on upcoming session dropdown list
        Then Correct session count <sessionCountAfterSetLimit> should display on under dropdown list
        Examples:
            | eventName | firstSessionTime | message                    | secondSessionTime | sessonCount | thirdSessionTime | sessionCountAfterSetLimit |
            | C         | 9:30 pm          | Session has been scheduled | 10:30 pm          | 3           | 11:30 pm         | 2                         |



    Scenario Outline: Check if user needs to register again for recurring sessions and user is able to stop recurring sessions and the sessions which have registrants are not cancelled
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        # When User select start session time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When User selects upcoming session from dropdown list
        When Add data in "Registration form" and click registration button <regEmail>
        Then Move to Manage event window
        Then User should registered only in selected session
        When Click on dropdown arrow in front of session
        When User click on stop session from recurring option
        When Click on "Yes" button
          Then User is able to register and displaying register count under summary tab
        Then User is able to cancel the sessions which have no registrants
        Examples:
            | eventName | futureTime | option     | message                      |
            | C         | 10:30 pm   | Every week | Recurring sessions scheduled |

        Scenario Outline: Check the functionality of session registration limit
            Given End if any session running and new "Standard" Event must be craeted <eventName>
            When User select start time and schedule new session <firstSessionTime>
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            When User clicks on "Settings"
            When User turns on the "Session Registration Limit"
            When User add session registration limit <sessionRegLimit>
            When User clicks on "Done" button
            When Click on "Join Room" button under event tab
            Then It should redirected to "Welcome," page <pageTitle>
            When User clicks on "Join Room" button under welcome screen
            Then User should redirected to Meeting Room
            When User click on Event name bar
            Then Session pop up should display
            When Click on Start Session button under popup
            When Click on yes start button
            Then Session should started
            Then Close Window new tab and switch to parent tab
            When Registered user <regEmail1> must attends the session
            Then Move to Manage event window
            When Registered user <regEmail2> must attends the session
            Then Move to Manage event window
            When Othen User going to join session then it will show <title> screen
            Then Close Window new tab and switch to parent tab
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            When User clicks on "Settings"
            When User add session registration limit <updatedRegLimit>
            When User clicks on "Done" button
            When Registered user <regEmail3> must attends the session
            Examples:
                | eventName | firstSessionTime | pageTitle | regEmail1 | regEmail2 | sessionRegLimit | title                                        | regEmail3 | updatedRegLimit |
                | M         | 10:30 pm         | Welcome,  | K         | O         | 2               | Looks like this event is no longer available | L         | 3               |

        Scenario Outline: Check the functionality of Email enhance validation
            Given Created event <eventName> should be searched and selected from event list
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            When User clicks on "Settings"
            When User add session registration limit <updatedRegLimit>
            When User clicks on "Done" button
            When Registered user <regEmail1> must attends the session
            Then Move to Manage event window
            When User shoud be on edit form field page
            When User turn On enhanced validation button
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When Add data in "Registration form" and click registration button <regEmail>
            Then User is failed to login with invalid email <validation>
            Then Move to Manage event window
            Examples:
                | eventName | validation                  | regEmail1 | regEmail         | updatedRegLimit |
                | M         | Please enter a valid email. | E         | test09@gmail.com | 100             |

        Scenario Outline: Check the functionality of Field required and optional
            Given Created event <eventName> should be searched and selected from event list
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            When User clicks on "Edit Form Fields" button
            When User Clicks on "ADD ANOTHER FIELD" option
            When User clicks on "Select Field Option" dropdown button
            When User selects "Create a Custom Field" option from dropdown
            When User clicks on "Select Field Type" dropdown option
            Then User selects any field type option <firstOption>
            Then User should able to add label <label>
            When User clicks on "ADD FORM FIELD" Button
            Then User should be able to add any field <label>
            When User Clicks on "ADD ANOTHER FIELD" option
            When User clicks on "Select Field Option" dropdown button
            When User selects "Create a Custom Field" option from dropdown
            When User clicks on "Select Field Type" dropdown option
            Then User selects any field type option <secondOption>
            Then User should able to add label <labelText>
            When User clicks on "ADD FORM FIELD" Button
            Then User should be able to add any field <labelText>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When Add data in "Registration form" and click registration button <regEmail>
            Then validation message <validationMessage> should displaying for both added fields
            When User add data in text <textData> and text area <textAreaData> fields
            Then Click on register button
            When User clicks on "Join Room" button under welcome screen
            Then Move to Manage event window
            When Click on third customize field dropdown
            When User click on edit field option
            Then Click on selected make required field checkbox
            When Clicks on "SAVE FORM FIELD" Button
            When Click on fourth customize field dropdown
            When For fourth field User click on edit field option
            Then Click on selected make required field checkbox
            When Clicks on "SAVE FORM FIELD" Button
            When Registered user <regEmail> join the meeting room
            Examples:
                | eventName | label     | firstOption | secondOption | labelText | validationMessage      | textData | textAreaData | regEmail |
                | M         | custom900 | Text Area   | Text         | New text  | Please enter an input. | test134  | desk35251    | D        |

        Scenario Outline: Check displaying of correct "session date & time" with local timezone on "Registration" page
            Given End if any session running and new "Standard" Event must be craeted <eventName>
            Given User should be on Manage Event Page
            When User Clicks on "Schedule this Event" button
            Given User should be redirected to Schedule Upcoming session menu
            When User selects current or future date
            When User selects start time For standard events
            When User clicks on "Add to Event schedule" button
            Then Upcoming date and time should load correctly on success Registration page for user <regEmail>
            Then Move to Manage event window
            Examples:
                | eventName | futureTime | regEmail |
                | N         | 10:30 pm   | D        |


        Scenario Outline: Check "Upcoming date loads" fine on "Registration" page and also verify the source tracking data
            Given Created event <eventName> should be searched and selected from event list
            Then On registration page upcoming date and time load correctly
            Then User open url using source tracking url
            When Add data in "Registration form" and click registration button <regEmail>
            Then Move to Manage event window
            When User clicks on "Activity" tab on manage event page
            When User clicks on "People" tab
            Then Resources UTM ID <utmID> UTM source <utmSource> UTM medium <utmMedium> UTM campaign <utmCampaign> UTM term <utmTerm> UTM content <utmContent> should displayed under people tab
            Examples:
                | eventName | futureTime | regEmail | utmID       | utmSource | utmMedium       | utmCampaign   | utmTerm       | utmContent |
                | N         | 10:30 pm   | N        | Campaign_id | Builder   | Campaign_medium | Test_campaign | Campaign_term | Content    |

        Scenario Outline: Check user is able to Validate Custom Thank you page
            Given End if any session running and new "Standard" Event must be craeted <eventName>
            When User select start time and schedule new session <firstSessionTime>
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            When User click on customize thenk you toggle button
            Then User should be able to add URL <url> in the above mentioned field
            When User clicks on "Done" button
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When Add data in "Registration form" and click registration button <regEmail>
            Then Register user should redirect on added url <url>
            Examples:
                | eventName | futureTime | regEmail | url                   | firstSessionTime |
                | C         | 10:30 pm   | L        | https://webdriver.io/ | 10:30 pm         |

        Scenario Outline: Check the functionality of Blackout dates
            Given Created event <eventName> should be searched and selected from event list
            When Click on dropdown arrow in front of session
            When Click on "Cancel Session" option
            Then "Cancel Session" window prompt <windowTitle>
            When Click on "Yes,Confirm" button
            When User click on blackout date link
            Then User click on "Blackout every Sunday" checkbox
            Then Click on "Confirm" button
            When User Clicks on "Schedule this Event" button
            When Click on select date calender
            When Click on first sunday from calender
            When User clicks on "Add to Event schedule" button
            Then validation <validationMessage> should displayed
            When User click on blackout date link
            When Click on "Clear all Blackout Dates" link
            Then Click on "Confirm" button
            When Click on select date calender
            When Click on first sunday from calender
            When User clicks on "Add to Event schedule" button
            Then validation <successMessage> should displayed
            Examples:
                | eventName | windowTitle    | validationMessage                                                                                                                      | successMessage             |
                | C         | Cancel Session | Your blackout dates are conflicting with the single session schedule. Please remove the conflicting blackout dates and then try again. | Session has been scheduled |

        Scenario Outline: Check if user can add and delete background image for registration page and user can change the opacity of the Registration page
            Given Created event <eventName> should be searched and selected from event list
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            Then By default "Customize Registration" should selected
            When User Clicks on "Customize" button
            When User Clicks on "Template dropdown"
            When User clicks on template menu button
            Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
            Then User should be able to "Upload File" <image>
            When User clicks upload option button
            Then Download and delete image or media options should displaying on screen
            When User clicks on Delete image or media option
            Then User shall see "Upload image" option
            Then User should be able to "Upload File" <image>
            When User select opcity <opcity>
            Then Uploaded background image and selected opcity is displaying on registration page after click on save and close button
            Examples:
                | eventName | option           | image      | opcity |
                | C         | Background Image | tweety.jpg | High   |

        Scenario Outline: Verify people tab data (Referral Url and UTM values)
            Given End if any session running and new "Standard" Event must be craeted <eventName>
            When User select start time and schedule new session <sessionTime>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When User open URL contains <url>
            When Add data in "Registration form" and click registration button <regEmail>
            When User switch to "Manage event" window
            When User clicks on "Activity" tab on manage event page
            When User clicks on "People" tab
            Then Referral url is dipslaying as <referralUrl>
            Then Location <location> utm term <utmTerm> utm source <utmSource> utm medium <utmMedium> utm content <utmContent> should display on the screen
            Examples:
                | eventName | regEmail | url             | referralUrl | sessionTime | location      | utmSource | utmMedium | utmTerm       | utmContent       |
                | N         | K        | campaignBuilder | Unknown     | 10:30 pm    | United States | Facebook  | Banner    | Campaign_term | Campaign_content |

        Scenario Outline: Verify the functionality of language and time zone
            Given Created event <eventName> should be searched and selected from event list
            When User Clicks on "Customize" option
            When User Clicks on "General" option
            When User clicks on "Event Timezone" dropdown button
            Then User should be able to select the "Event Timezone" <timeZone> from the dropdown
            When User clicks on "Event Language" dropdown button
            Then User should be able to select the "Event Language" <language> from the dropdown
            When Go to Event Summary page
            Then On scheduled event time tag is displaying as <timeTag>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            Then On registration page email label is displaying as <emailLabelInLanguage>
            Examples:
                | timeTag | timeZone                              | emailLabelInLanguage | language | eventName |
                | -03     | (GMT-03:00) America/Argentina/Cordoba | Sähköpostiosoite     | Finnish  | N         |

        Scenario Outline: Upload and verify branding colour on registration page
            Given Created event <eventName> should be searched and selected from event list
            When User Clicks on "Customize" option
            Then User should be on Event Customization page
            When User Clicks on "Registration" option
            Then By default "Customize Registration" should selected
            When User Clicks on "Customize" button
            When User Clicks on "Branding" dropdown
            Then User should be able to change the color scheme by clicking on color scheme option <updatedColor>
            Then For registration User shall see the changed color in the background of Preview Screen <updatedColor>
            # Then Verify that selected colour is displaying on registration page
            Examples:
                | eventName | updatedColor |
                | N         | #6b27a8      |


        Scenario Outline: Check the functionality of delete logo on replay customize screen
            Given End if any session running and new "Standard" Event must be craeted <eventName>
            When User select start time and schedule new session <futureTime>
            When Material <name> must be added in event <slide>
            Then Session must be started by admin
            When Registered user <regEmail3> must attends the session and send message <mesage>
            When Admin join session from URL and ends the session
            When Click on dropdown in fron of session
            When Click on "Share Replay" option
            Then Recording page popup should displayed
            When User clicks on "Edit page" button
            When On replay cusomize screen User Clicks on "Branding" dropdown
            When User clicks upload option button
            Then Download and delete image or media options should displaying on screen
            When User clicks on Delete image or media option
            Then User shall see "Upload image" option
            Then User should be able to "Upload File" <image>
            Examples:
                | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime | image      |
                | admin | N         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 3        | 2           | 1             | 10:30 pm   | tweety.jpg |

        # //------------Series event----------//
        Scenario Outline: Check if user needs to register again for recurring sessions and user is able to stop recurring sessions and the sessions which have registrants are not cancelled
            Given Archived old events and new "Series" Event must be craeted <eventName>
            Given User should be on Manage Event Page
            When User Clicks on "Schedule this Event" button
            Given User should be redirected to Schedule Upcoming session menu
            When User click on "Recurring Times" option
            When User selects option from "How often" dropdown <option>
            When User selects current or future date
            # When User select start session time <futureTime>
            When User clicks on "Add to Event schedule" button
            Then Success message <message> should display
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When For series event User click on upcoming session dropdown list
            Then Selected recuring option <option> should display under dropdown list
            When Add data in "Registration form" and click registration button <regEmail>
            Then Move to Manage event window
            Then User should registered only in selected session
            Then User is able to register and displaying register count under summary tab
     When Click on dropdown arrow in front of session
            When User click on stop session from recurring option
            When Click on "Yes" button
              Then User is able to register and displaying register count under summary tab
            Then User is able to cancel the sessions which have no registrants
            When User clicks on "Activity" tab on manage event page
            When User clicks on "People" tab
            Then Correct user info <regEmail> is displaying under people tab
            Examples:
                | eventName | futureTime | option     | message                      | regEmail |
                | B         | 10:30 pm   | Every week | Recurring sessions scheduled | D        |

        Scenario Outline: Check if user can register without session for series event
            Given Archived old events and new "Series" Event must be craeted <eventName>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When Add data in "Registration form" and click registration button <regEmail>
            Then Move to Manage event window
            Then User is able to register and displaying register count under summary tab
            When User clicks on "Activity" tab on manage event page
            When User clicks on "People" tab
            Then Correct user info <regEmail> is displaying under people tab
            Examples:
                | eventName | regEmail |
                | C         | L        |

        Scenario Outline: Create and schedule new series event Check Displaying correct session time after regiastration on  opening the join link for series event
            Given Created series event <eventName> should be searched and selected from event list
            When User Clicks on "Schedule this Event" button
            Given User should be redirected to Schedule Upcoming session menu
            When User selects current or future date
            When User select start session time <futureTime>
            When For End session User select session time
            When User clicks on "Add to Event schedule" button
            Then Success message <message> should display
            Then User should be redirected to "Manage event" screen
            Then Created session should display under upcoming sessions
            # Then Series session should displaying with time <futureTime>
            Then It should displayed "Correct Name, Email and Date" on Join Link page <regEmail>
            Then Move to Manage event window
            Examples:
                | eventName | futureTime | regEmail | message                    |
                | C         | 10:30 pm   | E        | Session has been scheduled |


        Scenario Outline: Check if displaying correct multiple series schedule and Check registered user updated with all custom fields in dashboard of activity area for series even
            Given Created series event <eventName> should be searched and selected from event list
            Then With next day time <secondSessionTime> user is able to schedule more than one session
            Then Created session should display under upcoming sessions
            When User Clicks on "Customize" option
            When User Clicks on "Registration" option
            When User clicks on "Edit Form Fields" button
            When User Clicks on "ADD ANOTHER FIELD" option
            When User clicks on "Select Field Option" dropdown button
            When User selects "Create a Custom Field" option from dropdown
            When User clicks on "Select Field Type" dropdown option
            Then User selects any field type option <firstOption>
            Then User should able to add label <label>
            When User clicks on "ADD FORM FIELD" Button
            Then User should be able to add any field <label>
            When User Clicks on "ADD ANOTHER FIELD" option
            When User clicks on "Select Field Option" dropdown button
            When User selects "Create a Custom Field" option from dropdown
            When User clicks on "Select Field Type" dropdown option
            Then User selects any field type option <secondOption>
            Then User should able to add label <labelText>
            When User clicks on "ADD FORM FIELD" Button
            Then User should be able to add any field <labelText>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When For series event User click on upcoming session dropdown list
            Then For series event Correct session count <sessonCount> should display on under dropdown list
            When Add data in "Registration form" and click registration button <regEmail>
            Then validation message <validationMessage> should displaying for both added fields
            When User add data in text <textData> and text area <textAreaData> fields
            Then Click on register button
            When User switch to "Manage event" window
            Examples:
                | eventName | secondSessionTime | firstOption | label     | secondOption | labelText | sessonCount | regEmail | validationMessage      | textData | textAreaData |
                | C         | 11:30 pm          | Text Area   | textLabel | Text         | new text  | 2           | K        | Please enter an input. | test134  | desk35251    |

        Scenario Outline: For series event Check if the registered user is removed if the cancel registration from the Manage registration
            Given Archived old events and new "Series" Event must be craeted <eventName>
            When User select start time and schedule new session <futureTime>
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
                | C         | E        | Great! You are Now Registered for this Event: | 10:30 pm   | Your event registration has been canceled. Your join link is no longer active. |

        Scenario Outline: Check host is able to delete attendee's registration for series event
            Given Created series event <eventName> should be searched and selected from event list
            Given Host should be in meeting room and starts the session
            Then Move to Manage event window
            When Registered user <regEmail> join the meeting room
            Then Move to Manage event window
            When Go to Event Summary page
            Then Register count should displayed
            When User clicks on register count on manage event screen
            Then User shall see "Upcoming" link
            When User click on "Upcoming" Link
            Then Delete registration icon should displayed in registration details screen
            When User clicks on delete registration icon
            When User clicks on "Yes Delete" button
            Then Register count should be changed
            Examples:
                | eventName | futureTime | regEmail |
                | C         | 10:30 pm   | F        |


        Scenario Outline: verify the source tracking data
            Given Archived old events and new "Series" Event must be craeted <eventName>
            When User select start time and schedule new session <futureTime>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then For source tracking user should be on Registration page
            Then User open url using source tracking url
            When Add data in "Registration form" and click registration button <regEmail>
            Then Move to Manage event window
            When User clicks on "Activity" tab on manage event page
            When User clicks on "People" tab
            Then Resources UTM ID <utmID> UTM source <utmSource> UTM medium <utmMedium> UTM campaign <utmCampaign> UTM term <utmTerm> UTM content <utmContent> should displayed under people tab
            Examples:
                | eventName | futureTime | regEmail | utmID       | utmSource | utmMedium       | utmCampaign   | utmTerm       | utmContent |
                | C         | 10:30 pm   | N        | Campaign_id | Builder   | Campaign_medium | Test_campaign | Campaign_term | Content    |


        # # //-----------Automated Event-----------//
        Scenario Outline: Check host is able to delete attendee's registration for automated event
            Given new "Automated" Event <eventName> must be craeted using video <videoName>
            When Go to Event Summary page
            When User Clicks on "Schedule this Event" button
            Then User should be redirected to Schedule Upcoming session menu
            When User selects current or future date
            When User selects start time for automated events
            When User clicks on "Add to Event schedule" button
            Then Refresh screen until session get start
            When Registered user <regEmail> join the meeting room
            Then Move to Manage event window
            Then Register count should displayed
            When User clicks on register count on manage event screen
            Then User shall see "Upcoming" link
            When User click on "Upcoming" Link
            Then Delete registration icon should displayed in registration details screen
            When User clicks on delete registration icon
            When User clicks on "Yes Delete" button
            Then Register count should be changed
            Examples:
                | eventName | regEmail | videoName        |
                | C         | K        | twoMinsVideo.mp4 |

        Scenario Outline:  Add one scheudle session --> Enable on dmeand --> Check showing both the events on reg page and able to register
            Given Created automated event <eventName> should be searched and selected from event list
            Then User schedule more than one session with start time <secondSessionTime>
            When Click on "On-Demand" option
            When Enable "On-Demand" option
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When User click on upcoming session dropdown list
            Then Correct session count <sessonCount> should display on under dropdown list
            Then Session title <sessionTitle> should displaying for on demand session on screen
            When Add data in "Registration form" and click registration button <regEmail>
            When Click on "Join Room" button after registered
            Examples:
                | eventName | secondSessionTime | sessionTitle | sessonCount | regEmail |
                | C         | 10:30 pm          | On-Demand    | 1           | G        |

        Scenario Outline: Verify event is not ready screen is displaying when on-demand is displabed for automated event
            Given new "Automated" Event <eventName> must be craeted using video <videoName>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            Then Event is not ready screen is displaying on screen
            Examples:
                | eventName | videoName        |
                | C         | twoMinsVideo.mp4 |


        Scenario Outline: For automated event Check if the registered user is removed if the cancel registration from the Manage registration
            Given new "Automated" Event <eventName> must be craeted using video <videoName>
            When Go to Event Summary page
            When User Clicks on "Schedule this Event" button
            Then User should be redirected to Schedule Upcoming session menu
            When User selects current or future date
            When User selects start time for automated events
            When User clicks on "Add to Event schedule" button
            Then Refresh screen until session get start
            When Registered user <regEmail> join the meeting room
            Then Move to Manage event window
            Then Register count should displayed
            When User clicks on register count on manage event screen
            Then User shall see "Upcoming" link
            When User click on "Upcoming" Link
            Then Delete registration icon should displayed in registration details screen
            When User clicks on delete registration icon
            When User clicks on "Yes Delete" button
            Then Register count should be changed
            Examples:
                | eventName | videoName        | regEmail |
                | C         | twoMinsVideo.mp4 | K        |


        Scenario Outline: For automated event Verify the customize fields on registration page
            Given Created automated event <eventName> should be searched and selected from event list
            When User Clicks on "Customize" option
            When User Clicks on "Registration" option
            When User clicks on "Edit Form Fields" button
            When User Clicks on "ADD ANOTHER FIELD" option
            When User clicks on "Select Field Option" dropdown button
            When User selects "Create a Custom Field" option from dropdown
            When User clicks on "Select Field Type" dropdown option
            Then User selects any field type option <firstOption>
            Then User should able to add label <label>
            When User clicks on "ADD FORM FIELD" Button
            Then User should be able to add any field <label>
            When User Clicks on "ADD ANOTHER FIELD" option
            When User clicks on "Select Field Option" dropdown button
            When User selects "Create a Custom Field" option from dropdown
            When User clicks on "Select Field Type" dropdown option
            Then User selects any field type option <secondOption>
            Then User should able to add label <labelText>
            When User clicks on "ADD FORM FIELD" Button
            Then User should be able to add any field <labelText>
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then User should be on Registration page
            When Add data in "Registration form" and click registration button <regEmail>
            Then validation message <validationMessage> should displaying for both added fields
            When User add data in text <textData> and text area <textAreaData> fields
            Then Click on register button
            When User switch to "Manage event" window
            Examples:
                | eventName | secondSessionTime | firstOption | label     | secondOption | labelText | sessonCount | regEmail | validationMessage      | textData | textAreaData |
                | C         | 11:30 pm          | Text Area   | textLabel | Text         | new text  | 2           | K        | Please enter an input. | test134  | desk35251    |


        Scenario Outline: verify the source tracking data
            Given new "Automated" Event <eventName> must be craeted using video <videoName>
            When Go to Event Summary page
            When User Clicks on "Schedule this Event" button
            Then User should be redirected to Schedule Upcoming session menu
            When User selects current or future date
            When User selects start time for automated events
            When User clicks on "Add to Event schedule" button
            Then Refresh screen until session get start
            When User clicks on dropdown along side JOIN ROOM button
            When User clicks on "View registration page" option
            Then For source tracking user should be on Registration page
            Then User open url using source tracking url
            When Add data in "Registration form" and click registration button <regEmail>
            Then Move to Manage event window
            When User clicks on "Activity" tab on manage event page
            When User clicks on "People" tab
            Then Resources UTM ID <utmID> UTM source <utmSource> UTM medium <utmMedium> UTM campaign <utmCampaign> UTM term <utmTerm> UTM content <utmContent> should displayed under people tab

            Examples:
                | eventName | videoName       | regEmail | utmID       | utmSource | utmMedium       | utmCampaign   | utmTerm       | utmContent |
                | C         | oneMinVideo.mp4 | K        | Campaign_id | Builder   | Campaign_medium | Test_campaign | Campaign_term | Content    |


    Scenario Outline: Check that User is able to redirects to the room and session starts as soon as user click on Join room button
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
        Then Move to Manage event window
        When Go to Event Summary page
        When User click on "Upcoming session" under summary tab
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        When User selects option from "How often" dropdown <option>
        When User selects current or future date
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When For automated event User click on upcoming session dropdown list and select session
        When Add data in "Registration form" and click registration button <regEmail>
        Then Move to Manage event window
        Then User should registered only in selected session
        Then User is able to register and displaying register count under summary tab
        When Click on dropdown arrow in front of session
        When User click on stop session from recurring option
        When Click on "Yes" button
        Then User is able to register and displaying register count under summary tab
        Then User is able to cancel the sessions which have no registrants
        Examples:
            | eventName | regEmail | videoName        | option     | message                      |
            | C         | K        | twoMinsVideo.mp4 | Every week | Recurring sessions scheduled |



    Scenario Outline: The session should be re-added automatically when the user removes blackout dates
        Given new "Standard" Event must be craeted <event>
        When User click on blackout date link
        Then User select current date from calendar
        Then Click on "Confirm" button
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        When User clicks on "Add to Event schedule" button
        Then Remove blackout date and verify that session added automatically
        Examples:
            | event |
            | A     |


  Scenario Outline: Check if user is able to delete form fields and it displays as expected on registration page
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Edit Form Fields" button
        When User Clicks on "ADD ANOTHER FIELD" option
        When User clicks on "Select Field Option" dropdown button
        When User selects "Create a Custom Field" option from dropdown
        Then User shall see "Select Field Type" dropdown option
        When User clicks on "Select Field Type" dropdown option
        Then User shall see options "Text","TextArea","Dropdown","Checkbox"
        Then User selects any field type option <option>
        Then User should able to add label <label>
        When User clicks on "ADD FORM FIELD" Button
        Then User should be able to add any field <label>
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then Added custom field is displayed on registration page <label>
        When User switch to "Manage event" window
        When Click on third customize field dropdown
        When User click delete field option
        When Clicks on "yes delete" button
        Then User should be on Registration page
         Then Deleted custom field is not displayed on registration page <label>
        Examples:
            | eventName | field   | label     | option    | firstSessionTime |
            | A         | Website | custom900 | Text Area | 10:30 pm         |

