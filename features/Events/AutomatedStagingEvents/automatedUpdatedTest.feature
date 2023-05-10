Feature: Verify event page features
    As a User i want to check Automated event feature

    Background:
        Given User close extra tabs

    #Done
    Scenario Outline: User login to serven
        Given User should redirect on <url> login page
        Given User login with <userA>
        Examples:
            | userA | url                |
            | admin | stagingLoginUrl |

    Scenario Outline: Start automated event and check added resources are launched at the correct time as set in room and attendee able to click on resources and verify the attendee count on people button
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
        When For automated events User selects future time
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then Refresh screen until session get start
        When Registered user <regEmail> join the meeting room
        Then For automated event Shared video is displayed on attendee's screen
        Then The Handout should not launch automatically before the set time
        Then The FeatureAction links should not launch automatically before the set time
        Then The Poll should not launch automatically before the set time
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then Button text should displayed as <buttonText>
        Then the Poll shall launch automatically at the set time
        When User click on option <optionOne>
        Then Public poll Result should display on attendee's screen
        Then Move to Manage event window
        Then Move to guest section
        Then In Automated event added moderator join the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        When Host Select "Public" chat option
        Then All <userCount> users should displaying under people tab
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> public message should displayed on other attendee's screen
        Then Move to moderator window
        When Admin clicks on "Admins" tab in Chat tab
        When Type message <adminMessage> in text area
        Then Host should able to send message <adminMessage> in the chat
        Then Move to attendee's screen
        Then Attendee should not able to receive admins message <adminMessage> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | userA | eventName | videoName          | regEmail | userCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | featureUrl         | buttonText | image       | message                    | member    | role      | message       | adminMessage       |
            | admin | K         | automatedEvent.mp4 | K        | 3         | 0h 0m 40s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | https://demio.com/ | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | Test admin message |

Scenario Outline: Moderator is able to add and share and click resources under chat screen
    Given Created automated event <eventName> should be searched and selected from event list
    Then Move to guest section
    Then In Automated event added moderator join the session
    When User switch to "Manage event" window
    When In other tab attendee <regEmail> joins the session
    When Move to meeting room window
    When Click on chat resource plus button
    When Click on "Poll"
    When Add required fields with <question> and options <option1> and <option2>
    When save resource by clicking on "Save" button
    When Click on chat resource plus button
    Then Poll resources <question> should displayed within the meeting room
    When User Click on added poll resource <question>
    When Clicked on "Share Now" button
    Then Move to attendee's screen
    When Attendee clicks on polls option
    Then User should able to view poll <question> and options <option1> and <option2>
    When Move to meeting room window
    When Click on chat resource plus button
    When Click on "featured action"
    Then For automated event user should able to add featured action title field <featureTitle>
    Then For automated event user should able to add link url <link> and button text field <buttonText> and file <image>
    When save resource by clicking on "Save" button
    When Click on chat resource plus button
    Then Featured resources <featureTitle> should displayed within the meeting room
    When User Click on added featured resource <featureTitle>
    When Clicked on "Share Now" button
    Then Move to attendee's screen
    Then Button text should displayed as <buttonText>
    When For automated event Attendee clicks on featured action button
    Then User switch to feature action window <link>
    Then Move to Manage event window
    When Move to meeting room window
    When Click on chat resource plus button
    When Click on "handout"
    When Add handout file <image>
    Then User should able to add handout title <handoutTitle>
    When save resource by clicking on "Save" button
    When Click on chat resource plus button
    When User Click on added handout resource <handoutTitle>
    When Clicked on "Share Now" button
    Then Move to attendee's screen
    When For automated event User clicks on handouts option on attendee screen
    Then Attendee should able to view handouts <handoutTitle>
    Then Move to Manage event window
    When Move to meeting room window
    Examples:
        | eventName | regEmail | question                   | option1    | option2 | featureTitle | image      | handoutTitle | header                | buttonText | link                 |minimizedPanelClass|
        | K         | N        | What is your qualification | graduation | None    | New Feature  | tweety.jpg | new handout  | Thank you for joining | QUIT       | https://feature.com/ |hide chat-rebuild-container chat-feature-admin-tab --is-admin-chat --isnot-ios |

Scenario Outline: Verify that video for attendee joining late doesn't start from beggning and user redirect on thank you screen after ending session
    Given Created automated event <eventName> should be searched and selected from event list
    When Registered user <regEmail> join the meeting room
    Then video does not start from begning
    Then For automated event user should redirected to "Thank You" screen <header>
    Examples:
        | eventName | regEmail | header                |
        | K         | K        | Thank you for joining |

Scenario Outline: Check if it displays correct number of Registered,Attendee ,messages and missed in past session tab and under insights, visibility of graphs and start/end join time data under people tab
    Given new "Automated" Event <eventName> must be craeted using video <videoName>
    Given Handout should be created with title <handoutTitle> and image <image> and set launchTime <launchTime>
    Given For onDemand event Polls should be created with question <pollQuestion> and optionOne <optionOne> optionTwo <optionTwo> and set launchTime <launchTime>
    Given OnDemand event Feature should be created with Featured title <featureTitle> and featureUrl <featureUrl> buttonText <buttonText> image <image> with <launchTime>
    When Go to Event Summary page
    When User Clicks on "Schedule this Event" button
    Then User should be redirected to Schedule Upcoming session menu
    When User selects current or future date
    When For automated events User selects future time
    When User clicks on "Add to Event schedule" button
    Then Refresh screen until session get start
    Given For automated event <missedCount> Users must missed with email <regEmail>
    Given For automated event <attendeeCount> Users must Attended and click on all resources for poll <optionOne> and redirect on url <featureUrl> for feature action and sent <message> with email <regEmail>
    When Go to Event Summary page
    When For automated event click on past session
    Then "Regsitration" <regCount>, "Attended" <attendeeCount> and "Missed" <missedCount> and message count should displayed under tab
    When User clicks on "Activity" tab on manage event page
    Then User should be redirected to "Activity>>Insight tab"
    Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendeeCount> and "Missed" <missedCount> on "Insights Page"
    Then Number of clicks <attendeeCount> should displaying under insights for all resources
    Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
    Then User should able to download all resource export CSV buttons
    When User clicks on "People" tab
    Then User should able to download export CSV file
    Then Start and end join time of attendee should displaying under people tab
    Examples:
        | userA | eventName | videoName        | regEmail | regCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | buttonText | image       | message                    | member    | role      | message       | featureUrl           | missedCount | attendeeCount |
        | admin | K         | twoMinsVideo.mp4 | K        | 2        | 0h 0m 40s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | https://feature.com/ | 1           | 1             |
