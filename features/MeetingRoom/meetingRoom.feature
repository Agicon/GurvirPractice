Feature: Verify event page features
    As a User i want to check meeting room feature

    Background:
        Given User should be on Home page

    #SDone
    Scenario Outline: Check user redirects to "Meeting Room" on clicking "Join Room" button
        Given User should be on login page
        Given User login with <userA>
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        Then Move to Manage event window
        Examples:
            | userA | eventName | futureTime | pageTitle      |
            | admin | C         | 11:00 pm   | Welcome, Test! |



    Scenario Outline: Check Availability and functionality of " Start Session" button
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "Start Session" button
        When Click on "Yes" button
        Then Session should started
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | pageTitle      |
            | D         | 11:00 pm   | Welcome, Test! |



    Scenario Outline: Check the Added resources are displaying on cllick of "+" button
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Admin add handout <title> and <image> for event
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on chat resource plus button
        Then Added resources should displayed
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | title             | image      | pageTitle      |
            | S         | 10:30 pm   | NewTitleForSeries | tweety.jpg | Welcome, Test! |


    Scenario Outline: Check that the Added Materials are displaying under the share option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "View sharing options" button
        Then Added material <name> should displayed under share screen
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | name | slide        | pageTitle      |
            | M         | 10:30 pm   | pdf  | pdf-test.pdf | Welcome, Test! |


    Scenario Outline: Check that the registered attendees are displaying under the Attendee option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        Then Session must be started by admin
        When User <regEmail> attends the session
        Then Registered attendees <regEmail> should displayed under the Attendee option
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | slide        | futureTime | name |
            | S         | O        | pdf-test.pdf | 10:30 pm   | pdf  |


    Scenario Outline: Check that the Host is displaying under the Attendee option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        Then Host must be Added for event
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        Then Host <userA> should displayed under the Attendee option
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | pageTitle      | userA |
            | U         | 10:30 pm   | Welcome, Test! | admin |


    Scenario Outline: Check that the Presenter is displaying under the Attendee option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Presenter's details <regEmail> should displayed under attendees option
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | role      |
            | P         | 10:30 pm   | A        | Presenter |


    Scenario Outline: Check that the Moderator is displaying under the Attendee option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Moderator's details <regEmail> should displayed under attendees option
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | role      |
            | Q         | 10:30 pm   | A        | Moderator |

    Scenario Outline: Check that the timer along with the start session is working
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "Start Session" button
        When Click on "Yes" button
        Then Timer should displayed as soon as session has started
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | role      | pageTitle      |
            | O         | 10:30 pm   | E        | Moderator | Welcome, Test! |



    Scenario Outline: Check that the Host is able to ban a attendee
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        Then Session must be started by admin
        When User <regEmail> attends the session
        Then Join room and click on attendees option
        When Click on attendee which you want to ban
        When Click on Ban attendee" option
        Then Host should able to ban an attendee with title <title>
        Then Host end's the session
        Examples:
            | eventName | regEmail | slide        | futureTime | name | title                       |
            | S         | O        | pdf-test.pdf | 10:30 pm   | pdf  | Yikes! You’ve been removed. |


    Scenario Outline: Check that the Moderator is able to ban a attendee
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        When User <regEmail> attends the session
        Then <role> must be Added <regEmail> for event
        When In second tab guest joins the session
        When User clicks on "Atttendee" option
        When Click on attendee which you want to ban
        When Click on Ban attendee" option
        Then Page title <title> should displayed on banned attendee's screen
        Then Host end's the session

        Examples:
            | eventName | futureTime | regEmail | role      | title                       |
            | Q         | 10:30 pm   | A        | Moderator | Yikes! You’ve been removed. |

    Scenario Outline: Check that the Presenter is able to ban a attendee
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        When User <regEmail> attends the session
        Then <role> must be Added <regEmail> for event
        When In second tab guest joins the session
        When User clicks on "Atttendee" option
        When Click on attendee which you want to ban
        When Click on Ban attendee" option
        Then Page title <title> should displayed on banned attendee's screen
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | role      | title                       |
            | M         | 10:30 pm   | B        | Presenter | Yikes! You’ve been removed. |


    Scenario Outline: Check that the Name and Email of the Attendee is displaying fine
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        Then Session must be started by admin
        When User <regEmail> attends the session
        Then Should displayed correct Name and Email of the Attendee <regEmail>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | slide        | futureTime | name |
            | S         | O        | pdf-test.pdf | 10:30 pm   | pdf  |


    Scenario Outline: Check that the Name and Email of the Presenter  is displaying fine under attendee option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Should displayed correct Name and Email of the Presenter <regEmail>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | role      |
            | P         | 10:30 pm   | A        | Presenter |


    Scenario Outline: Check that the Name and Email of the Moderator is displaying fine under attendee option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Should displayed correct Name and Email of the Moderator <regEmail>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | role      |
            | S         | 10:30 pm   | A        | Moderator |



    Scenario Outline: Verify if admin is able to add new poll within the meeting room by clicking on "+" button
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
        Then Admin should able to add and share new poll <question> within the meeting room
        When Registered user <regEmail> join the meeting room
        When User clicks on polls option on attendee screen
        Then User should able to view poll <question> and options <option1> and <option2>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | question                       | option1  | option2 | futureTime | pageTitle      | regEmail |
            | V         | Where are you joining us from? | New York | Toronto | 10:30 pm   | Welcome, Test! | P        |


    Scenario Outline: Verify if admin is able to add new Handout within the meeting room by clicking on "+" button
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "handout"
        When Add handout file <image>
        Then User should able to add handout title <title>
        When save resource by clicking on "Save" button
        Then Admin should able to add and share handout <title> within the meeting room
        When Registered user <regEmail> join the meeting room
        When User clicks on handouts option on attendee screen
        Then Attendee should able to view handouts <title>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | pageTitle      | regEmail | title          | image      |
            | T         | 10:30 pm   | Welcome, Test! | P        | NewHandoutFile | tweety.jpg |



    Scenario Outline: Verify if admin is able to add new Featured Action within the meeting room by clicking on "+" button
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "featured action"
        Then User should able to add featured action title field <title>
        Then User should able to add link url <link> and button text field <buttonText> and file <image>
        When save resource by clicking on "Save" button
        Then Admin should able to add new featured action <title> within the meeting room
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        Then Button text should displayed as <buttonText>
        Then Move to Manage event window
        Then Host end's the session

        Examples:
            | eventName | title           | link                           | buttonText | image       | futureTime | pageTitle      | regEmail |
            | X         | Download chrome | https://www.google.com/chrome/ | OPENURL    | testOne.jpg | 10:30 pm   | Welcome, Test! | A        |

    Scenario Outline: Check that the Moderator is able to Launch the Added Poll Resources
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
        Then Guest should able to add and share new poll <question> within the meeting room
        When Registered user <regEmail> join the meeting room
        When User clicks on polls option on attendee screen
        Then User should able to view poll <question> and options <option1> and <option2>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | question                                   | option1                    | option2         | futureTime | role      | regEmail |
            | A         | Why did you decide to attend this session? | I want to learn new things | My boss made me | 10:30 pm   | Moderator | A        |



    Scenario Outline: Check that the Moderator is able to Launch the Added Handout  Resources
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "handout"
        When Add handout file <image>
        Then User should able to add handout title <title>
        When save resource by clicking on "Save" button
        Then Guest should able to add and share handout <title> within the meeting room
        When Registered user <regEmail> join the meeting room
        When User clicks on handouts option on attendee screen
        Then Attendee should able to view handouts <title>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | role      | regEmail | title   | image    |
            | B         | 10:30 pm   | Moderator | B        | NewFile | doll.jpg |


    Scenario Outline: Check that the Moderator is able to Launch the Added Featured Action Resources
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "featured action"
        Then User should able to add featured action title field <title>
        Then User should able to add link url <link> and button text field <buttonText> and file <image>
        When save resource by clicking on "Save" button
        Then Guest should able to add new featured action <title> within the meeting room
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        Then Button text should displayed as <buttonText>
        Then Move to Manage event window
        Then Host end's the session

        Examples:
            | eventName | title           | link                           | buttonText | image       | futureTime | role      | regEmail |
            | D         | Download chrome | https://www.google.com/chrome/ | OPENURL    | testOne.jpg | 10:30 pm   | Moderator | D        |


    Scenario Outline: Check that the Host is able to share slides
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Host starts the session and share added material
        Then Shared slide should displayed on attendee <regEmail> screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | regEmail | slide        | futureTime | name |
            | I         | M        | pdf-test.pdf | 10:30 pm   | pdf  |


    Scenario Outline: Check that the Presenter is able to share slides
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        When Material <name> must be added in event <slide>
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Guest share added material
        Then Shared slide should displayed on attendee <regEmail> screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | regEmail | slide        | futureTime | name | role      |
            | E         | E        | pdf-test.pdf | 10:30 pm   | pdf  | Presenter |

    Scenario Outline: Check that the Host is able to share video
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        Given Material <name> video <video> must be added in event
        Then Session must be started by admin
        When Registered user <regEmail> join the meeting room
        Then Shared video is displayed on attendee's screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | name      | video          | futureTime | regEmail |
            | Z         | testVideo | shareVideo.mp4 | 10:30 pm   | M        |



    Scenario Outline: Check that the Presenter is able to Launch the Added Poll Resources
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
        Then Guest should able to add and share new poll <question> within the meeting room
        When Registered user <regEmail> join the meeting room
        When User clicks on polls option on attendee screen
        Then User should able to view poll <question> and options <option1> and <option2>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | question                                   | option1                    | option2         | futureTime | role      | regEmail |
            | F         | Why did you decide to attend this session? | I want to learn new things | My boss made me | 10:30 pm   | Presenter | F        |



    Scenario Outline: Check that the Presenter is able to Launch the Added Handout  Resources
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "handout"
        When Add handout file <image>
        Then User should able to add handout title <title>
        When save resource by clicking on "Save" button
        Then Guest should able to add and share handout <title> within the meeting room
        When Registered user <regEmail> join the meeting room
        When User clicks on handouts option on attendee screen
        Then Attendee should able to view handouts <title>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | role      | regEmail | title   | image    |
            | D         | 10:30 pm   | Presenter | D        | NewFile | doll.jpg |


    Scenario Outline: Check that the Presenter is able to Launch the Added Featured Action Resources
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "featured action"
        Then User should able to add featured action title field <title>
        Then User should able to add link url <link> and button text field <buttonText> and file <image>
        When save resource by clicking on "Save" button
        Then Guest should able to add new featured action <title> within the meeting room
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        Then Button text should displayed as <buttonText>
        Then Move to Manage event window
        Then Host end's the session

        Examples:
            | eventName | title           | link                           | buttonText | image       | futureTime | role      | regEmail |
            | R         | Download chrome | https://www.google.com/chrome/ | OPENURL    | testOne.jpg | 10:30 pm   | Presenter | R        |


    Scenario Outline: Check that the Presenter is able to share Video
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        Given Material <name> video <video> must be added in event
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Guest share added material
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Shared video is displayed on attendee's screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | name      | video          | futureTime | regEmail | role      |
            | Z         | testVideo | shareVideo.mp4 | 10:30 pm   | M        | Presenter |


    Scenario Outline: Verify that the Host is able to send the Messages in the Chat
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When Type message <message> in text area
        Then Host should able to send message <message> in the chat
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to receive message <message> in the chat
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message              |
            | M         | 10:30 pm   | N        | Hi,admin is here..!! |


    Scenario Outline: Verify that the Moderator is able to send the Messages in the Chat
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Type message <message> in text area
        Then Guest should able to send message <message> in the chat
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to receive message <message> in the chat
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message                  | role      |
            | N         | 10:30 pm   | M        | Hi,Moderator is here..!! | Moderator |

    Scenario Outline: Verify that the Presenter is able to send the Messages in the Chat
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Type message <message> in text area
        Then Guest should able to send message <message> in the chat
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to receive message <message> in the chat
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message                  | role      |
            | K         | 10:30 pm   | K        | Hi,Presenter is here..!! | Presenter |

    Scenario Outline: Check that the banned attendee is not able to join the Room Again
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Material <name> must be added in event <slide>
        Then Session must be started by admin
        When User <regEmail> attends the session
        Then Join room and click on attendees option
        When Click on attendee which you want to ban
        When Click on Ban attendee" option
        Then Host should able to ban an attendee with title <title>
        Then Banned attendee <regEmail> should not able to join the Room again <title>
        Then Host end's the session
        Examples:
            | eventName | regEmail | slide        | futureTime | name | title                       |
            | S         | O        | pdf-test.pdf | 10:30 pm   | pdf  | Yikes! You’ve been removed. |


    Scenario Outline: Verify that the Attendee is able to send the Messages in the Chat
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        When Registered user <regEmail> join the meeting room
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        Then Host Should able to receive message <message> send by attendee
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message   |
            | O         | 10:30 pm   | O        | Hii admin |


    Scenario Outline: Check that the Host is able to delete any of the message
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When Type message <message> in text area
        Then Host should able to send message <message> in the chat
        Then Register user <regEmail> should able to receive message <message>
        When Move to meeting room window
        Then Delete icon should diplayed with message
        When Clicks On "Delete" icon
        Then "Yes delete" button should displayed
        When Clicks on "yes delete" button
        Then Delete message is not displayed on chat window
        Then Delete message is not displayed on attendee's screen
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message               |
            | N         | 10:30 pm   | M        | Good morning everyone |

    Scenario Outline: Check that the Moderator is able to delete any of the message
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Type message <message> in text area
        Then Guest should able to send message <message> in the chat
        Then Register user <regEmail> should able to receive message <message>
        When Move to meeting room window
        Then Delete icon should diplayed with message
        When Clicks On "Delete" icon
        Then "Yes delete" button should displayed
        When Clicks on "yes delete" button
        Then Delete message is not displayed on chat window
        Then Delete message is not displayed on attendee's screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message                  | role      |
            | P         | 10:30 pm   | P        | Hi,Moderator is here..!! | Moderator |

    Scenario Outline: Check that the Presenter is able to delete any of the message
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Type message <message> in text area
        Then Guest should able to send message <message> in the chat
        Then Register user <regEmail> should able to receive message <message>
        When Move to meeting room window
        Then Delete icon should diplayed with message
        When Clicks On "Delete" icon
        Then "Yes delete" button should displayed
        When Clicks on "yes delete" button
        Then Delete message is not displayed on chat window
        Then Delete message is not displayed on attendee's screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message                  | role      |
            | Q         | 10:30 pm   | Q        | Hi,Presenter is here..!! | Presenter |


    Scenario Outline: Verify that the Host is able to See the Results of Handouts under the Handout Section
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Admin add handout <title> and <image> for event
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        Then Share handout <title> within the meeting room
        Then Move to Manage event window
        When <downloadCount> Users must download resource session with email <regEmail>
        Then Host should able to See the Results <downloadCount> of Handouts under the Handouts Section
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | title             | image      | futureTime | pageTitle      | regEmail | downloadCount |
            | V         | NewTitleForSeries | tweety.jpg | 10:30 pm   | Welcome, Test! | P        | 2             |




    Scenario Outline: Verify that the Moderator is able to See the Results of Handouts under the Handout Section
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Admin add handout <title> and <image> for event
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Guest share handout <title> within the meeting room
        Then Move to Manage event window
        When <downloadCount> Users must download resource session with email <regEmail>
        Then Guest should able to See the Results <downloadCount> of Handouts under the Handouts Section
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | title             | image      | futureTime | regEmail | downloadCount | role      |
            | U         | NewTitleForSeries | tweety.jpg | 10:30 pm   | B        | 2             | Moderator |



    Scenario Outline: Verify that the Presenter is able to See the Results of Handouts under the Handout Section
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Admin add handout <title> and <image> for event
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Guest share handout <title> within the meeting room
        Then Move to Manage event window
        When <downloadCount> Users must download resource session with email <regEmail>
        Then Guest should able to See the Results <downloadCount> of Handouts under the Handouts Section
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | title             | image      | futureTime | regEmail | downloadCount | role      |
            | B         | NewTitleForSeries | tweety.jpg | 10:30 pm   | P        | 2             | Presenter |


    Scenario Outline: Verify that the Host is able to See the Results of Polls under the Polls Section
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Poll resource <question> must be added with options <option1> and <option2>
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        Then Admin should able to add and share new poll <question> within the meeting room
        When <selectOption1> Users must selects first option of poll with email <regEmail>
        When <selectOption2> Users must selects second option of poll with email <regEmail>
        Then Host should able to See the Results of Polls under the Polls Section for <selectOption1> and <selectOption2>
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | question                       | option1  | option2 | futureTime | pageTitle      | regEmail | selectOption1 | selectOption2 |
            | T         | Where are you joining us from? | New York | Toronto | 10:30 pm   | Welcome, Test! | R        | 2             | 1             |


    Scenario Outline: Verify that the Moderator is able to See the Results of Polls under the Polls Section
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Poll resource <question> must be added with options <option1> and <option2>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Guest share poll <question> within the meeting room
        Then Move to Manage event window
        When <selectOption1> Users must selects first option of poll with email <regEmail>
        When <selectOption2> Users must selects second option of poll with email <regEmail>
        Then Guest should able to See the Results of Polls under the Polls Section for <selectOption1> and <selectOption2>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | question                                   | option1                    | option2         | futureTime | regEmail | selectOption1 | selectOption2 | role      |
            | M         | Why did you decide to attend this session? | I want to learn new things | My boss made me | 10:30 pm   | M        | 2             | 1             | Moderator |


    Scenario Outline: Verify that the Presenter is able to See the Results of Polls under the Polls Section
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Poll resource <question> must be added with options <option1> and <option2>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        Then Guest share poll <question> within the meeting room
        Then Move to Manage event window
        When <selectOption1> Users must selects first option of poll with email <regEmail>
        When <selectOption2> Users must selects second option of poll with email <regEmail>
        Then Guest should able to See the Results of Polls under the Polls Section for <selectOption1> and <selectOption2>
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | question                       | option1  | option2 | futureTime | regEmail | selectOption1 | selectOption2 | role      |
            | N         | Where are you joining us from? | New York | Toronto | 10:30 pm   | N        | 2             | 2             | Presenter |

    Scenario Outline: Check that the Host is able to Mark the message sent by attendee as question
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        Then Click on end the session
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message   |
            | P         | 10:30 pm   | P        | Hii admin |


    Scenario Outline: Check that the Moderator is able to Mark the message sent by attendee as question
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message | role      |
            | F         | 10:30 pm   | G        | Hii     | Moderator |

    Scenario Outline: Check that the Presenter is able to Mark the message sent by attendee as question
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message | role      |
            | C         | 10:30 pm   | F        | Hii     | Presenter |


    Scenario Outline: Check that the Host is able to Unmark the message sent by attendee as question by clicking on [...] button
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on chat question options three dots
        Then "Unmark as question" option should displayed
        When Clicks on "Unmark as question" option
        Then Host should able to Unmark the message sent by attendee by clicking on "Unmark as question" option
        Then Click on end the session
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message |
            | F         | 10:30 pm   | Q        | Hii     |


    Scenario Outline: Check that the Moderator is able to Unmark the message sent by attendee as question by clicking on [...] button
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        When Clicks on chat question options three dots
        Then "Unmark as question" option should displayed
        When Clicks on "Unmark as question" option
        Then Guest should able to Unmark the message sent by attendee by clicking on "Unmark as question" option
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message | role      |
            | D         | 10:30 pm   | L        | Hii     | Moderator |

    Scenario Outline: Check that the Presenter is able to Unmark the message sent by attendee as question by clicking on [...] button
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        When Clicks on chat question options three dots
        Then "Unmark as question" option should displayed
        When Clicks on "Unmark as question" option
        Then Guest should able to Unmark the message sent by attendee by clicking on "Unmark as question" option
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message | role      |
            | L         | 10:30 pm   | N        | Hii     | Presenter |

    Scenario Outline: Check that the Host is able to Answer the Marked Question
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Host should able to Answer the Marked Question
        Then Live answer message <message> should display on attendee's screen under live answer container
        Then Move to Manage event window
        When Move to meeting room window
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message |
            | U         | 10:30 pm   | N        | Hii     |

    Scenario Outline: Check that the Presenter is able to Answer the Marked Question
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Guest should able to Answer the Marked Question
        Then Move to Manage event window
        Then Live answer message <message> should display on attendee's screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message | role      |
            | V         | 10:30 pm   | N        | Hii     | Presenter |

    Scenario Outline: Check that the Moderator is able to Answer the Marked Question
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Guest should able to Answer the Marked Question
        Then Move to Manage event window
        Then Live answer message <message> should display on attendee's screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message | role      |
            | Y         | 10:30 pm   | P        | Hii     | Moderator |


    Scenario Outline: Check that "Answered" is displayed after the question is answered by host
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Host should able to Answer the Marked Question
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message  | questionStatus |
            | G         | 10:30 pm   | H        | Hi admin | ANSWERED       |

    Scenario Outline: Check that "Answered" is displayed after the question is answered by presenter
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Host should able to Answer the Marked Question
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message  | questionStatus | role      |
            | K         | 10:30 pm   | L        | Hi admin | ANSWERED       | Presenter |

    Scenario Outline: Check that "Answered" is displayed after the question is answered by Moderator
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Host should able to Answer the Marked Question
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message  | questionStatus | role      |
            | L         | 10:30 pm   | O        | Hi admin | ANSWERED       | Moderator |

    Scenario Outline: Check that the Host is able to Mention anyone in the meeting room by clicking on @
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Move to meeting room window
        When Click on "@" to mention
        When Host mention attendee <regEmail> and send message <message> by clicking on enter key
        Then Host should able to mention <regEmail> in the meeting room by clicking on "@" in chat window
        When Move to attendee's screen
        Then Mentioned attendee's <regEmail> name should displayed in chat window
        Then Move to Manage event window
        When Move to meeting room window
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message              |
            | Q         | 10:30 pm   | Q        | check message please |


    Scenario Outline: Check that the Presenter is able to Mention anyone in the meeting room by clicking on @
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Move to meeting room window
        When Click on "@" to mention
        When Guest mention attendee <regEmail> and send message <message> by clicking on enter key
        Then Guest should able to mention <regEmail> in the meeting room by clicking on "@" in chat window
        When Move to attendee's screen
        Then Mentioned attendee's <regEmail> name should displayed in chat window
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message              | role      |
            | R         | 10:30 pm   | R        | check message please | Presenter |

    Scenario Outline: Check that the Moderator is able to Mention anyone in the meeting room by clicking on @
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Move to meeting room window
        When Click on "@" to mention
        When Guest mention attendee <regEmail> and send message <message> by clicking on enter key
        Then Guest should able to mention <regEmail> in the meeting room by clicking on "@" in chat window
        When Move to attendee's screen
        Then Mentioned attendee's <regEmail> name should displayed in chat window
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message              | role      |
            | P         | 10:30 pm   | P        | check message please | Moderator |


    Scenario Outline: Check that the Attendee is able to Mention anyone in the meeting room by clicking on @
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Click on "@" to mention
        When Attendee mention guest <regEmail> and send message <message> by clicking on enter key
        Then Attendee should able to mention <regEmail> in the meeting room by clicking on "@" in chat window
        When Move to attendee's screen
        Then Mentioned guest's <regEmail> name should displayed in chat window
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message              | role      |
            | U         | 10:30 pm   | H        | check message please | Presenter |
    Scenario Outline: Check that only the Questioned Messages display when clicked on ?  by host
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Host should able to Answer the Marked Question
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        When Click on chat question button
        Then Only questioned messages <message> should displayed when click on chat question button
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | message  | questionStatus |
            | S         | 10:30 pm   | A        | Hi admin | ANSWERED       |


    Scenario Outline: Check that only the Questioned Messages display when clicked on ? by moderator
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Guest should able to Answer the Marked Question
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        When Click on chat question button
        Then Only questioned messages <message> should displayed when click on chat question button
        Then Close recent window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message  | questionStatus | role      |
            | U         | 10:30 pm   | O        | Hi admin | ANSWERED       | Moderator |


    Scenario Outline: Check that only the Questioned Messages display when clicked on ? by presenter
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Attendee should able to send message <message> in the chat
        Then Move to Manage event window
        When Move to meeting room window
        When Move to attendee's message
        When Clicks on "Mark as a question" option
        Then Guest should able to Mark the message sent by attendee as question
        When Clicks on "Answer Live" option
        Then Guest should able to Answer the Marked Question
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        When Click on chat question button
        Then Only questioned messages <message> should displayed when click on chat question button
        Then Close recent window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message  | questionStatus | role      |
            | O         | 10:30 pm   | P        | Hi admin | ANSWERED       | Presenter |



    Scenario Outline: Check that the Host is able to Switch the Chat from Public to Private and Vice versa
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        When Host Select "Public" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> public message should displayed on other attendee's screen
        Then Move to Manage event window
        When Move to meeting room window
        Then Click on end the session
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | futureTime | regEmail | message  |
            | G         | 10:30 pm   | J        | NewGroup |

    Scenario Outline: Check that the Presenter is able to Switch the Chat from Public to Private and Vice versa
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        When Host Select "Public" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> public message should displayed on other attendee's screen
        Then Move to Manage event window
        Then Close recent window
        Then Close recent window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message  | role      |
            | Y         | 10:30 pm   | L        | NewGroup | Presenter |

    Scenario Outline: Check that the Moderator is able to Switch the Chat from Public to Private and Vice versa
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        When Host Select "Public" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> public message should displayed on other attendee's screen
        Then Move to Manage event window
        Then Close recent window
        Then Close recent window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message  | role      |
            | M         | 10:30 pm   | N        | NewGroup | Moderator |

    Scenario Outline: Check that only the Mentioned Messages display when clicked on @ by host
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Click on "@" to mention
        When Attendee mention host and send message <message> by clicking on enter key
        When Move to meeting room window
        When Click on chat mentions "@" button
        Then Mentioned message <message> should displayed when click on "@"
        Then Click on end the session
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | futureTime | regEmail | message        |
            | W         | 10:30 pm   | L        | Important info |

    Scenario Outline: Check that only the Mentioned Messages display when clicked on @ by presenter
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Click on "@" to mention
        When Attendee mention guest <regEmail> and send message <message> by clicking on enter key
        Then Attendee should able to mention <regEmail> in the meeting room by clicking on "@" in chat window
        When Move to meeting room window
        Then Mentioned guest's <regEmail> name should displayed in chat window
        When Click on chat mentions "@" button
        Then Mentioned message <message> should displayed when click on "@"
        Then Move to Manage event window
        Then Close recent window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message      | role      |
            | X         | 10:30 pm   | M        | ResultStatus | Presenter |

    Scenario Outline: Check that only the Mentioned Messages display when clicked on @ by moderator
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Host starts the session
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Click on "@" to mention
        When Attendee mention guest <regEmail> and send message <message> by clicking on enter key
        Then Attendee should able to mention <regEmail> in the meeting room by clicking on "@" in chat window
        When Move to meeting room window
        Then Mentioned guest's <regEmail> name should displayed in chat window
        When Click on chat mentions "@" button
        Then Mentioned message <message> should displayed when click on "@"
        Then Move to Manage event window
        Then Close recent window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message      | role      |
            | Q         | 10:30 pm   | O        | ResultStatus | Moderator |
    Scenario Outline: Check that the Message is visible to only admins when when is sent under admin chat
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given Host should be in meeting room and starts the session
        When Admin clicks on "Admins" tab in Chat tab
        When Type message <message> in text area
        Then Host should able to send message <message> in the chat
        Then Move to Manage event window
        Then <role> must be Added <regEmail> for event
        When Guest joins the session
        When Admin clicks on "Admins" tab in Chat tab
        Then Admin should able to receive message <message> in the chat
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Attendee should not able to receive admins message <message> in the chat
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | futureTime | regEmail | message      | role      |
            | R         | 10:30 pm   | A        | ResultStatus | Moderator |


    Scenario Outline: Check that window goes to Full Screen when clicked on Fullscreen Option at the top
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "Full Screen" option
        Then Window should expand to full screen when clicked on Fullscreen option
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | pageTitle      |
            | O         | 10:30 pm   | E        | Welcome, Test! |


    Scenario Outline: Check that the Chat Panel is minimized when clickedd on ->| option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "Hide chat" option
        Then Chat Panel should minimized <minimizedPanelClass>
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | pageTitle      | minimizedPanelClass                                            |
            | O         | 10:30 pm   | E        | Welcome, Test! | hide chat-rebuild-container chat-feature-admin-tab --isnot-ios |


    Scenario Outline: Check that the settings Pop up is displayed when clicked on Settings option
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "Setting" option
        Then Setting Pop up should displayed
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | pageTitle      |
            | R         | 10:30 pm   | F        | Welcome, Test! |

    Scenario Outline: Check that Chat Pop up is displayed when clicked on Arrow button at the top right corner of the screen
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "chat Header Right" Arrow
        Then Chat Pop up should displayed
        Examples:
            | eventName | futureTime | regEmail | pageTitle      |
            | T         | 10:30 pm   | J        | Welcome, Test! |



    Scenario Outline: Check that Host is able to End the session by clicking on Admin Button
        Given new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome,Test!" page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Click on "Start Session" button
        When Click on "Yes" button
        Then Session should started
        When User Clicks on end the session
        Then Host should able to End the session
        Then Move to Manage event window
        Examples:
            | eventName | futureTime | regEmail | pageTitle      |
            | T         | 10:30 pm   | J        | Welcome, Test! |


    Scenario Outline: Check that timer is displaying in the Video launched
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        Given Material <name> video <video> must be added in event
        When Host starts the session and share added material
        Then Timer should displayed in the Video launched
        When User Clicks on end the session
        Then Host should able to End the session
        Then Move to Manage event window
        Examples:
            | eventName | name      | video          | futureTime | regEmail |
            | Z         | testVideo | shareVideo.mp4 | 10:30 pm   | M        |


    Scenario Outline: Check that Pause,Restart and Stop buttton of Video material launched is working as per its functionality
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        Given Material <name> video <video> must be added in event
        When Host starts the session and share added material
        Then User shall see Pause,Restart and Stop buttton
        Then Pause,Restart and Stop buttton should work as per their functionality
        When User Clicks on end the session
        Then Host should able to End the session
        Then Move to Manage event window
        Examples:
            | eventName | name      | video          | futureTime | regEmail |
            | J         | testVideo | shareVideo.mp4 | 10:30 pm   | J        |


    Scenario Outline: Check that Next, Previous and Stop button of Slides material launched are working as per their functionality
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Host starts the session and share added material
        Then User shall see Next, Previous and Stop button
        Then Next, Previous and Stop button should work as per their functionality
        When User Clicks on end the session
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | slide      | futureTime | name |
            | S         | O        | sample.pdf | 10:30 pm   | pdf  |


    Scenario Outline: Check that Change Sharing window and Stop sharing buttons are displaying when admin shares the Screen
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Host starts the session and share added material
        When Click on sharing options button
        Then Share your screen and Stop sharing buttons are displaying when admin shares the material
        When User Clicks on end the session
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | slide      | futureTime | name |
            | G         | G        | sample.pdf | 10:30 pm   | pdf  |

    Scenario Outline: Check that the Admin is able to Switch from Slides to Video and Video to share screen  and vice versa
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        Given Material <videoName> video <video> must be added in event
        When Host starts the session and share pdf material
        Then Admin should able to Switch from Slides to Video
        When User Clicks on end the session
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | slide      | futureTime | name | video          | videoName |
            | K         | F        | sample.pdf | 10:30 pm   | pdf  | shareVideo.mp4 | NewVideo  |


    Scenario Outline: Check that the shared slide is displaying same for all
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Host starts the session and share added material
        When Clicks on next slide button
        Then Same slide should displayed on attendee <regEmail> screen
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | regEmail | slide      | futureTime | name |
            | Y         | E        | sample.pdf | 10:30 pm   | pdf  |




    Scenario Outline: Check that the shared Video is displaying same for all
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Then Created session should display under upcoming sessions
        Given Material <name> video <video> must be added in event
        When Host starts the session and share added material
        When Host clicks on pause button
        Then Video should be paused
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Shared video is displayed on attendee's screen
        Then Video should be paused
        Then Move to Manage event window
        Then Host end's the session
        Examples:
            | eventName | name      | video          | futureTime | regEmail |
            | G         | testVideo | shareVideo.mp4 | 10:30 pm   | M        |
