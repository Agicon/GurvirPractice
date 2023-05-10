Feature: Verify event page features
    As a User i want to check event registration feature

    Background:
        Given User should be on Home page

    #SDone 
    Scenario Outline: Check functionality of "View registration page" option ,"Register" button and check functionality of  "Join Room" button on Demio success page
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
            | admin | C         | F        | Great! You are Now Registered for this Event: | 10:30 pm   |




    Scenario Outline: Check working of "Manage Registration" Link on join link page and Check all the fields are exported correctly from Activity area
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
            | C         | H        | Great! You are Now Registered for this Event: | 10:30 pm   |



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




    Scenario Outline: Check displaying of "Timer" on Registration page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then "Timer" should displayed on Registration page
        Then Countdown timer should display for Days, Hours, Minutes and Seconds
        Examples:
            | eventName | futureTime |
            | C         | 10:30 pm   |


    Scenario Outline: Check displaying of "First name","Email" field and user able to copy "Unique Join Link" after registration
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When "First name" field should displayed
        Then User should able to add their first name <regEmail>
        When "Email" field should displayed
        Then User should able to add their Email <regEmail>
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        Then It should displayed with Unique Join Link
        When Click on "Copy Link"
        Then "copy link" should copied the join link on clicking <text>
        Examples:
            | eventName | futureTime | regEmail | message                                       | text    |
            | C         | 10:30 pm   | K        | Great! You are Now Registered for this Event: | Copied! |



    Scenario Outline: Check displaying of Correct session and User Info on Manage Registration page
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
        Then It should displayed with correct session <eventName> and user info <regEmail> on "Manage Registration" page
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | E        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check user can register only after entering the valid email
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When User add invalid <invalidemail> email and valid name for <regEmail> in registration form
        Then User is failed to login with invalid email <validation>
        Then User should only register after entering valid email on registration page <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | futureTime | validation                  | invalidemail |
            | C         | F        | 10:30 pm   | Please enter a valid email. | test@gmail   |


    Scenario Outline: Check displaying of "Correct Countdown" on the join link page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        Then It should displayed correct countdown on Join Link page
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | L        | Great! You are Now Registered for this Event: | 10:30 pm   |



    Scenario Outline: Check displaying of "Timer" on Registration page for series event
        Given new "Series" Event must be craeted <eventName>
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
        Then "Timer" should displayed on Registration page
        Then Countdown timer should display for Days, Hours, Minutes and Seconds
        Then Move to Manage event window
        Examples:
            | eventName | futureTime |
            | C         | 10:30 pm   |


    Scenario Outline: Check displaying of "First name","Email" field and user able to copy "Unique Join Link" after registration for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When "First name" field should displayed
        Then User should able to add their first name <regEmail>
        When "Email" field should displayed
        Then User should able to add their Email <regEmail>
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        Then It should displayed with Unique Join Link
        When Click on "Copy Link"
        Then "copy link" should copied the join link on clicking <text>
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | text    | message                                       |
            | C         | 10:30 pm   | K        | Copied! | Great! You are Now Registered for this Event: |



    Scenario Outline: Check user can register only after entering the valid email for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When User add invalid <invalidemail> email and valid name for <regEmail> in registration form
        Then User is failed to login with invalid email <validation>
        Then User should only register after entering valid email on registration page <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | futureTime | validation                  | invalidemail |
            | C         | F        | 10:30 pm   | Please enter a valid email. | test@gmail   |


    Scenario Outline: Check displaying of "Correct Countdown" on the join link page for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        Then It should displayed correct countdown on Join Link page
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | L        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check displaying of Correct session and User Info on Manage Registration page for series event
        Given Created series event <eventName> should be searched and selected from event list
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
        Then User should able to see correct session <eventName> and user info <regEmail> on "Manage Registration" page
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | E        | Great! You are Now Registered for this Event: | 10:30 pm   |



    Scenario Outline: Check If user can cancel registration by clicking on "Cancel Registration" button for series event
        Given Created series event <eventName> should be searched and selected from event list
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




    Scenario Outline: Check Availability/Functionality of "View Registration Page" option in Series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then Move to Manage event window
        Examples:
            | eventName | futureTime |
            | C         | 10:30 pm   |

    Scenario Outline: Check displaying of correct "session date & time" with local timezone on "Registration" page
        Given Created event <eventName> should be searched and selected from event list
        Then Upcoming date and time should load correctly on success Registration page for user <regEmail>
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | D        |


    Scenario Outline: Check displaying of correct "session date & time" with local timezone on "Registration" page for series event
        Given Created series event <eventName> should be searched and selected from event list
        Then Upcoming date and time should load correctly on success Registration page for user <regEmail>
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | M        |



    Scenario Outline: Check "Upcoming date loads" fine on "Registration" page
        Given Created event <eventName> should be searched and selected from event list
        Then On registration page upcoming date and time load correctly
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | N        |

    Scenario Outline: Check "Upcoming date loads" fine on "Registration" page for series event
        Given Created series event <eventName> should be searched and selected from event list
        Then On registration page upcoming date and time load correctly
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | F        |



    Scenario Outline: Check displaying of "Correct Name, Email and Date" on the join link page for series event
        Given Created series event <eventName> should be searched and selected from event list
        Then It should displayed "Correct Name, Email and Date" on Join Link page <regEmail>
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | D        |


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
        When Click on "Add To Calendar" button
        Then User should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | B        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check working of "Calendar" button on join link page for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Join Room" button
        Then It should redirected to the event room window on clicking join room button
        When Click on "Add To Calendar" button
        Then User should display options "Apple Calendar","Google","Outlook","Outlook.com","Yahoo"
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | B        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check that outlook and apple calendar are downloaded when clicked
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Add To Calendar" button
        When Clicked on any option from add to calendar list <option>
        Then User should be download calendar
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime | option  |
            | C         | D        | Great! You are Now Registered for this Event: | 10:30 pm   | Outlook |


    Scenario Outline: Check that Google , Yahoo and outlookcom calendars are opened in new tab when clicked
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Add To Calendar" button
        When Clicked on any option from add to calendar list <option>
        Then User should redirect on new tab for option <option>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime | option |
            | C         | K        | Great! You are Now Registered for this Event: | 10:30 pm   | Google |




    Scenario Outline: Check that outlook and apple calendar are downloaded when clicked for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Add To Calendar" button
        When Clicked on any option from add to calendar list <option>
        Then User should be download calendar
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime | option  |
            | C         | M        | Great! You are Now Registered for this Event: | 10:30 pm   | Outlook |


    Scenario Outline: Check that Google , Yahoo and outlookcom calendars are opened in new tab when clicked for series event
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then User should get messsage <message> on message window
        When Click on "Add To Calendar" button
        When Clicked on any option from add to calendar list <option>
        Then User should redirect on new tab for option <option>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime | option |
            | C         | D        | Great! You are Now Registered for this Event: | 10:30 pm   | Google |


    Scenario Outline: Check displaying of correct "User's Date/Time" of registration and location in "Activity area"
        Given Created event <eventName> should be searched and selected from event list
        Then It should displayed correct "User's Date or Time" of registration and location in "Activity area"
        Examples:
            | eventName | regEmail | message                                       | futureTime | option |
            | C         | F        | Great! You are Now Registered for this Event: | 10:30 pm   | Google |





    Scenario Outline: Check if user can turn off the notification emails from the "Email Notification" button on "Manage Registration" page
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
        Then User should able to turn on and off "Email Notification" button
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | H        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check if user can turn off the notification emails from the "Email Notification" button on "Manage Registration" page for series event
        Given Created series event <eventName> should be searched and selected from event list
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
        Then User should able to turn on and off "Email Notification" button
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | P        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check working of "Manage Registration" Link on join link page for series event
        Given Created series event <eventName> should be searched and selected from event list
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
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message                                       | futureTime |
            | C         | O        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check functionality of  "Join Room" button on Demio success page for series event
        Given Created series event <eventName> should be searched and selected from event list
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
            | eventName | regEmail | message                                       | futureTime |
            | C         | O        | Great! You are Now Registered for this Event: | 10:30 pm   |


    Scenario Outline: Check redirection to Demio success page on successfull registration
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        When Add data in "Registration form" and click registration button <regEmail>
        Then User should redirected to Demio success page on successfull registration
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | futureTime |
            | C         | F        | 10:30 pm   |


    Scenario Outline: Check registered user updated with all custom fields in dashboard of activity area
        Given Created event <eventName> should be searched and selected from event list
        Then New custom field <option> must be added <label> for event
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then Custom field should displayed on registration screen <label>
        Then Move to Manage event window
        Examples:
            | eventName | option | label     | option    | futureTime |
            | C         | Text   | custom900 | Text Area | 10:30 pm   |

    Scenario Outline: Check registered user updated with all custom fields in dashboard of activity area for series event
        Given Created series event <eventName> should be searched and selected from event list
        Then New custom field <option> must be added <label> for event
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then Custom field should displayed on registration screen <label>
        Then Move to Manage event window
        Examples:
            | eventName | option | label     | option    | futureTime |
            | C         | Text   | custom900 | Text Area | 10:30 pm   |


    Scenario Outline: Check that selected template from customize tab is successfully uploaded on registration screen
        Given Created event <eventName> should be searched and selected from event list
        Given Template option <option> must be selected by admin
        Then Selected template should displayed on registration screen
        Examples:
            | eventName | futureTime | regEmail | option |
            | C         | 10:30 pm   | L        | Accent |


    Scenario Outline: check that uploaded branding image is displaying on registration screen
        Given Created event <eventName> should be searched and selected from event list
        Given Branding image <image> must be uploaded
        Then Uploaded branding image should displayed on registration screen
        Examples:
            | eventName | futureTime | regEmail | image    |
            | C         | 10:30 pm   | A        | doll.jpg |


    Scenario Outline: check that host is able to add subheadline, video link and description on registration page
        Given Created event <eventName> should be searched and selected from event list
        Given Subheadline <subheadline> and video link <videoLink> and description <description> must be added
        Then Added subheadline <subheadline> and video link <videoLink> and description <description> should displayed on registration page
        Examples:
            | eventName | futureTime | regEmail | subheadline | videoLink                                   | description     |
            | C         | 10:30 pm   | B        | SubModule   | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description |



    Scenario Outline: Chech host is able to add "Featured presenter" on registration screen
        Given Created event <eventName> should be searched and selected from event list
        Given Featured presenter <presenterName> and <presenterTitle> and <presenterWebsite> and <presenterBio> with <photo> must be added
        Then Featured presenter <presenterName> and <presenterTitle> and <presenterWebsite> and <presenterBio> should diaplyed on registration screen
        Examples:
            | eventName | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio |
            | C         | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   |




    Scenario Outline: Check host is able to delete attendee's regisreation
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
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


Scenario Outline: Check if user needs to register again for recurring sessions
    Given new "Standard" Event must be craeted <eventName>
    Given User should be on Manage Event Page
    When User Clicks on "Schedule this Event" button
    Given User should be redirected to Schedule Upcoming session menu
    When User click on "Recurring Times" option
    When User selects option from "How often" dropdown <option>
    When User selects current or future date
    When User selects future time <futureTime>
    When User clicks on "Add to Event schedule" button
    Then Success message <message> should display
    When User clicks on dropdown along side JOIN ROOM button
    When User clicks on "View registration page" option
    Then User should be on Registration page
    When User selects upcoming session from dropdown list
    When Add data in "Registration form" and click registration button <regEmail>
    Then Move to Manage event window
    Then User should registered only in selected session
    Examples:
        | eventName | futureTime | option     | message                      |
        | C         | 10:30 pm   | Every week | Recurring sessions scheduled |
        