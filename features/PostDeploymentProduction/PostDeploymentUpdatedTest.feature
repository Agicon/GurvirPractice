Feature: Verify New room page features
    As a User i want to check new room feature

    Background:
        Given User close extra tabs

    Scenario Outline: Redirect on home page
        Given User should redirect on <homeUrl> Home page
        Examples:
            | homeUrl               |
            | productionHomePageUrl |

    # Scenario Outline: Check that user is able to create session and edit and delete all resources
    #     Given User should redirect on <url> login page
    #     Given User login with <userA>
    # Given End if any session running and new "Standard" Event must be craeted <eventName>
    # When User Clicks on "Customize" option
    # When User Clicks on "Room" option
    # When User Clicks on "ADD A RESOURCE" button
    # When User clicks on "Type of Resource" dropdown
    # When User selects "Handout" option from dropdown list
    # Then User should be able to Enter values in the "Handout Title" <handoutTitle> field
    # Then User should be able to "Upload File" <image>
    # When User clicks upload option button
    # Then Download and delete image or media options should displaying on screen
    # When User clicks on Delete image or media option
    # Then User shall see "Upload image" option
    # Then User should be able to "Upload File" <image>
    # When User Clicks on "Add Resource" button
    # When User edit handout resource title <handoutTitle>
    # When User clicks upload option button
    # Then Download and delete image or media options should displaying on screen
    # When User clicks on Delete image or media option
    # Then User shall see "Upload image" option
    # Then User should be able to "Upload File" <image>
    # When User Clicks on "Add Resource" button
    # When User Clicks on "ADD A RESOURCE" button
    # When User clicks on "Type of Resource" dropdown
    # When User selects "Poll" option from dropdown list
    # Then User should be able to Enter data in "Question" <question> ,"Option 1" <option1> ,Option 2" <option2> fields
    # Then User should be able to Mark the "Share Results With Attendees" checkbox
    # When User Clicks on "Add Resource" button
    # Then Added resource should displayed under customize tab <question>
    # When User edit poll resource question <question>
    # When User Clicks on "Add Resource" button
    # Then Added resource should displayed under customize tab <question>
    # When User Clicks on "ADD A RESOURCE" button
    # When User clicks on "Type of Resource" dropdown
    # When User selects "Featured Action" option from dropdown list
    # Then User should be able to Enter values in the "Title" <featureTitle> ,"Link URl" <link>,"Button Text" <buttonText> fields
    # Then User should be able to "Upload File" <image>
    # When User clicks upload option button
    # Then Download and delete image or media options should displaying on screen
    # When User clicks on Delete image or media option
    # Then User shall see "Upload image" option
    # Then User should be able to "Upload File" <image>
    # When User Clicks on "Add Resource" button
    # When User edit feature action resource title <featureTitle>
    # When User clicks upload option button
    # Then Download and delete image or media options should displaying on screen
    # When User clicks on Delete image or media option
    # Then User shall see "Upload image" option
    # Then User should be able to "Upload File" <image>
    # When User Clicks on "Add Resource" button
    # Then Added resource should displayed under customize tab <featureTitle>
    # When User delete all resources or materials <count> from room tab
    # Then No materials title should display on screen
    # Examples:
    #     | userA | eventName | count | url                | handoutTitle | image      | question                       | option1  | option2 | option3 | featureTitle    | link                           | buttonText | image       |
    #     | admin | A         | 3     | stagingLoginUrl | handoutTest  | tweety.jpg | Where are you joining us from? | New York | Toronto | London  | Download chrome | https://www.google.com/chrome/ | OpenURL    | testOne.jpg |

    # Scenario Outline: Check that user is able to edit and delete all materials in created event
    #     Given Created event <eventName> should be searched and selected from event list
    #     When User Clicks on "Customize" option
    #     When User Clicks on "Room" option
    #     When User clicks on "Presentation Materials" option
    #     When User Clicks on "ADD A MATERIAL" button
    #     When User clicks on "Type Of Material" dropdown
    #     When User selects "Slides" option from "Type of Material" dropdown
    #     Then User should be able to enter data in "Material Name" field <name>
    #     Then User should be able to Upload desired Media slide files <slide>
    #     When User clicks upload option button
    #     Then Download and delete image or media options should displaying on screen
    #     When User clicks on Delete image or media option
    #     Then User shall see "Upload image" option
    #     Then User should be able to Upload desired Media slide files <slide>
    #     When User Click on "ADD MATERIAL" Button
    #     Then User should able to save the added Material <name>
    #     When User click on edit first material button
    #     When User clicks upload option button
    #     Then Download and delete image or media options should displaying on screen
    #     When User clicks on Delete image or media option
    #     When User Clicks on "ADD A MATERIAL" button
    #     When User clicks on "Type Of Material" dropdown
    #     When User selects "Video" option from "Type of Material" dropdown
    #     Then User should be able to enter data in "Material Name" field <videoName>
    #     Then User should be able to Upload desired Media video file <video>
    #     When User clicks upload option button
    #     Then Download and delete image or media options should displaying on screen
    #     When User clicks on Delete image or media option
    #     Then User shall see "Upload image" option
    #     Then User should be able to Upload desired Media video file <video>
    #     When User Click on "ADD MATERIAL" Button
    #     Then Added Material should displayed under customize tab <videoName>
    #     When User click on edit second material button
    #     When User clicks upload option button
    #     Then Download and delete image or media options should displaying on screen
    #     When User clicks on Delete image or media option
    #     When User delete all resources or materials <count> from room tab
    #     Then For materials No materials title should display on screen
    #     Examples:
    #         | eventName | name    | slide        | videoName | video      | count |
    #         | A         | testPDF | pdf-test.pdf | testVideo | sample.mp4 | 2     |


    # Scenario Outline: Check the functionality of edit and delete resources
    #     Given Created event <eventName> should be searched and selected from event list
    #     # When User select start session time <futureTime>
    #      When User select start session time
    #       When User clicks on "Add to Event schedule" button
    #     Then <role> must be Added <regEmail> for event
    #     Then presenter must be added in event admin option with <role1> and <regEmail1>
    #     Then Host must be added in event admin option with <role2> and <member>
    #     When User Clicks on "Guest" tab
    #     When User click on presenter session dropdown
    #     When User select "Edit admin" option for presenter
    #     When User edit admin name <updatedPresenterName>
    #     Then User click on "confirm" button
    #     Then Guest name <updatedPresenterName> should display on the screen
    #     When Click on moderator session dropdown
    #     When For Moderator User select "Edit admin" option
    #     When User edit admin name <updatedModeratorName>
    #     Then User click on "confirm" button
    #     Then Guest name <updatedModeratorName> should display on the screen
    #     When Click on host session dropdown
    #     When For Host User select "Edit admin" option
    #     When User edit admin role <UpdatedRole>
    #     Then User click on "confirm" button
    #     When User Clicks on "Guest" tab
    #     Then Delete Presenter and check that copied link is not working and displaying message <errorMessage>
    #     Then Move to Manage event window
    #     When User Clicks on "Guest" tab
    #     Then Delete Moderator and check that copied link is not working and displaying message <errorMessage>
    #     Then Move to Manage event window
    #     When User Clicks on "Guest" tab
    #     Then Delete Host and check that copied link is not working and displaying message <errorMessage>
    #     Then Move to Manage event window
    #     Examples:
    #         | eventName | futureTime | updatedPresenterName | updatedModeratorName | UpdatedHostName | UpdatedRole | member    | errorMessage                 | role      | name     | role1     | role2 | regEmail1 |
    #         | A         | 11:00 pm   | UpdatedPresenter     | UpdatedModerator     | UpdatedHost     | Presenter   | Subuser 1 | Uh oh, there’s nothing here. | Moderator | newAdmin | Presenter | Host  | K         |


    Scenario Outline: Check that user is able to create and schedule a session and check if no session ruinning all the buttons should be active
        Given User should redirect on <url> login page
        Given User login with <userA>
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        # When User select start session time <futureTime>
        # When For End session User select session time
        # When User clicks on "Add to Event schedule" button
        When User Clicks on "Schedule this Event" button
        Then User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        When Click on "Schedule" field
        Then "Join room" button should displaying active
        Given Created event <eventName> should be searched and selected from event list
        Then "Join room" button should displaying active
        Examples:
            | userA | eventName | futureTime | url                | endTime | message                    |
            | admin | C         | 8:00 pm    | productionLoginUrl | 9:00 pm | Session has been scheduled |

    Scenario Outline: Check that user is able to add materials in created event
        Given Created event <eventName> should be searched and selected from event list
        Then Slide Material <name> must be added in event <slide>
        Then video <videoName> material <video> must be added
        Examples:
            | eventName | slide      | name | video          | videoName |
            | C         | sample.pdf | pdf  | shareVideo.mp4 | NewVideo  |

    Scenario Outline: Check that user is able to add resources in created event
        Given Created event <eventName> should be searched and selected from event list
        Then New Poll resource <question> must be added with options <option1> and <option2>
        Then Handout material <title> and <image> must be added for event
        Then Featured resource must be created with title <title1> and featureUrl <link> buttonText <buttonText> image <image1>
        Examples:
            | eventName | title1                      | link                           | buttonText | image1      | question                       | option1  | option2 | title   | image    |
            | C         | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg |

    Scenario Outline: Check that user is able to add New members in created event
        Given Created event <eventName> should be searched and selected from event list
        Then <role> must be Added <regEmail> for event
        Then presenter must be added in event admin option with <role1> and <regEmail1>
        Then Host must be added in event admin option with <role2> and <member>
        Examples:
            | eventName | role      | regEmail | role1     | role2 | member    | regEmail1 |
            | C         | Moderator | L        | Presenter | Host  | Subuser 1 | K         |

    Scenario Outline: Check redirection of Event Host to Meeting Room on Clicking  "Join Room" button and is able to start the session also able to go and leave stage and search materaial
        #Verify that all join room button are displaying disbled after start the session
        Given Created event <eventName> should be searched and selected from event list
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome," page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When Chat screen is closed then click on open button
        When User click on Event name bar
        Then Session pop up should display
        Then User should be able to copy the link
        Then User should able to open registration url in next tab
        Then Move to Manage event window
        When Move to meeting room window
        When Click on Start Session button under popup
        When Click on yes start button
        Then Session should started
        Given User Must be on stage
        When User clicks on "Leave stage" button
        Then The user should not longer be on stage
        When Clicks on "Share Materials" button
        Then Search bar and List of added materials should display
        When User added material <name> in search bar
        Then User should be able to Search material <name>
        Then Move to Manage event window
        # Then Verify that "Join room" button should displaying disabled after start the session
        # When Click on "Schedule" field
        # Then Verify that "Join room" button should displaying disabled after start the session
        Examples:
            | userA | eventName | pageTitle | name |
            | admin | C         | Welcome,  | pdf  |


    Scenario Outline: If we have multiple hosts for e.g Host 1 and Host 2. Host 1 has started the session the Join room button should not get disabled for the Host 2 for other session
        Given In Other tab User should redirect on <url> login page
        Given login with email <email> and password <password>
        Given There should be existing Scheduled events <eventName>
        When Click on "Schedule" field
        Then "Join room" button should displaying active
        Then Move to Manage event window
        Examples:
            | email                            | password      | eventName | url                | name | futureTime |
            | tester.desk4+Subuser01@gmail.com | Testing12345! | B         | productionLoginUrl | pdf  | 10:00 pm   |


    Scenario Outline: Check the functionality if one event is started then "Join room" button is disabled for any other event
        Given User should redirect on <url> login page
        Given User login with <userA>
        Given There should be existing Scheduled events <eventName>
        Then Verify that "Join room" button should displaying disabled after start the session
        When Click on "Schedule" field
        # Then Verify that "Join room" button should displaying disabled after start the session
        Examples:
            | eventName | userA | url                |
            | A         | admin | productionLoginUrl |

    Scenario Outline: Check that the Presenter are able to leave stage
        Given Created event <eventName> should be searched and selected from event list
        Then Move to guest section
        Then Added Presenter joins the session
        When Chat screen is closed then click on open button
        Given User Must be on stage
        When User clicks on "Leave stage" button
        Then The user should not longer be on stage
        Then Move to Manage event window
        Examples:
            | eventName |
            | C         |

    Scenario Outline: Check that the Moderator is able go on stage and leave the stage
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        Then Move to guest section
        Then Moderator joins the session in second tab
        When Chat screen is closed then click on open button
        When Switch to admin tab and click on people button
        When User click on moderators's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the selected Moderator
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        When User clicks on "Leave stage" button on moderator screen
        Then Moderator should not longer be on stage
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName |
            | C         |

    Scenario Outline: Check that the attendee is able to leave stage and is able to open chat popup and attendee's detail should display under profile icon
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        When User clicks on view Profile icon
        Then Attendee's details <regEmail> should be displayed
        When Switch to admin tab and click on people button
        When User click on second index attendee's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the first selected Attendee
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        When User clicks on "Leave stage" button on attendee screen
        Then Attendee should not longer be on stage
        When Click on "chat Header Right" Arrow
        Then Chat Pop up should displayed
        When Move to meeting room window
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail |
            | C         | F        |

    Scenario Outline: Verify admin is able to create and share handout resource under chat screen and added handout in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
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
        When User Click on added handout resource <addedHandoutTitle>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
        When User clicks on handouts option on attendee screen
        Then Attendee should able to view handouts <title>
        Then Attendee should able to view handouts <addedHandoutTitle>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | image    | title       | addedHandoutTitle |
            | C         | E        | doll.jpg | NewHandout1 | NewFile           |

    Scenario Outline: Verify admin is able to create and share poll resource under chat screen and added poll question in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
        When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        When User Click on added poll resource <question>
        When Clicked on "Share Now" button
        When Click on chat resource plus button
        Then Poll resources <addedQuestion> should displayed within the meeting room
        When User Click on added poll resource <addedQuestion>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
        When Attendee clicks on polls option
        Then User should able to view poll <question> and options <option1> and <option2>
        Then User should able to view poll <addedQuestion> and options <AddedOption1> and <addedOption2>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | question                   | option1    | option2 | addedQuestion                  | AddedOption1 | addedOption2 |
            | C         | P        | What is your qualification | graduation | None    | Where are you joining us from? | New York     | Toronto      |

    Scenario Outline: Verify admin is able to create and share feature resource under chat screen in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "featured action"
        Then User should able to add featured action title field <title>
        Then User should able to add link url <link> and button text field <buttonText> and file <image>
        When save resource by clicking on "Save" button
        When Click on chat resource plus button
        Then Featured resources <title> should displayed within the meeting room
        When User Click on added featured resource <title>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | title              | buttonText  | image    | link            |
            | C         | Q        | New feature action | Quit action | doll.jpg | www.feature.com |


    Scenario Outline: Check that user is able to launch Featured action
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Click on chat resource plus button
        Then Featured resources <title> should displayed within the meeting room
        When User Click on added featured resource <title>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        # Then Button text should displayed as <buttonText>
        Then Move to Manage event window
        Examples:
            | eventName | title                       | link                           | buttonText | image       | videoName      | futureTime | regEmail |
            | C         | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | TestOne.jpg | demioVideo.mp4 | 10:30 pm   | P        |

    Scenario Outline: Check that Pause,Restart and Stop buttton of Video material launched is working as per its functionality
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        Given User Must be on stage
        Then Remove pre shared material
        When Clicks on "Share Materials" button
        Then Refresh screen and click on join room button
        When Clicks on "Share Materials" button
        #    Then Refresh screen and click on join room button
        # When Clicks on "Share Materials" button
        When Host clicks on added material <name>
        Then Timer should displayed in the Video launched
        Then User shall see Pause,Restart and Stop buttton
        Then Pause,Restart and Stop buttton should work as per their functionality
        Then Move to Manage event window
        Examples:
            | eventName | name     |
            | C         | NewVideo |

    # Scenario Outline: Check that the shared slide is displaying same for all  the attendees and admins in the meeting room
    #     Given Created event <eventName> should be searched and selected from event list
    #     Given Host Must be in Meeting Room
    #     When Chat screen is closed then click on open button
    #     When Clicks on "Share Materials" button
    #     Then Added slide material <name> should displayed under share screen
    #     When Host clicks on added material <name>
    #     When Clicked on "User menu" icon
    #     When Clicked on "Enable Spotlight" icon
    #     Then Spotlight mode should be enabled
    #     When Clicks on next slide button
    #     Then Same slide should displayed on attendee <regEmail> screen
    #     When Move to meeting room window
    #     Then Host clicks on stop share slide button
    #     # Then Move to Manage event window
    #     Then Close Window new tab and switch to parent tab
    #     Examples:
    #         | eventName | regEmail | name | pageTitle |
    #         | C         | E        | pdf  | Welcome,  |


    Scenario Outline: Check that admin is able to switch from Public chat to private and vice versa in room and veriy that user is able to share emoji
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        When Host Select "Public" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        When User send the emoji in chat message
Then shared emoji should displayed under chat screen
        Then <message> public message should displayed on other attendee's screen
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | regEmail | message  |
            | C         | J        | NewGroup |

    Scenario Outline: Check that User is able to delete messages sent by other admins and invited host is able to meeting room after clicking on "NO THANKS , I DON'T WANT TO GO ON STAGE" button
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        Then Move to guest section
        Then Added host joins the session in second tab
        When Chat screen is closed then click on open button
        When Type message <message> in text area
        Then Message <message> should displayed in the chat section
        When Move to meeting room window
        Then Other user is able to receive message <message> sent by other admin
        Then On message <message> Delete icon should diplayed with message
        When User Clicks On "Delete" icon
        Then "Yes delete" button should displayed
        When Clicks on "yes delete" button
        Then Deleted message <message> is not displayed on chat window
        When User Switch to admin tab and click on people button
        Then User shall see host details <member>
        When User click on host's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the selected Host
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"
        Then User should be redirected back to the meeting room
        Then Message <message> is not displayed on user's screen
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | message               | member    |
            | C         | Good morning everyone | Subuser 1 |

    # # DONE
    # Scenario Outline: Check that User is able to delete messages sent by attendees
    #     Given Created event <eventName> should be searched and selected from event list
    #     Given Host Must be in Meeting Room
    #     When User switch to "Manage event" window
    #     When In other tab attendee <regEmail> joins the session
    #     When Type message <message> in text area
    #     When Move to meeting room window
    #     Then On message <message> Delete icon should diplayed with message
    #     When User Clicks On "Delete" icon
    #     Then "Yes delete" button should displayed
    #     When Clicks on "yes delete" button
    #     Then Deleted message <message> is not displayed on chat window
    #     Then Message <message> is not displayed on user's screen
    #     Then Move to Manage event window
    #     Examples:
    #         | eventName | regEmail | message   |
    #         | C         | O        | Hii admin |


    # # DONE
    # Scenario Outline: Check that user is able to mark and Unmark a message as question
    #     Given Created event <eventName> should be searched and selected from event list
    #     Given Host Must be in Meeting Room
    #     When User switch to "Manage event" window
    #     When In other tab attendee <regEmail> joins the session
    #     When Type message <message> in text area
    #     Then Message <message> should displayed in the chat section
    #     When Move to meeting room window
    #     When Move to message <message>
    #     When Admin Clicks on "Mark as a question" option
    #     Then Host should able to Mark the message sent by attendee as question
    #     When Clicks on chat question options three dots
    #     Then "Unmark as question" option should displayed
    #     When Clicks on "Unmark as question" option
    #     Then Host should able to Unmark the message sent by attendee by clicking on "Unmark as question" option
    #     Then Move to Manage event window
    #     Then Close Window new tab and switch to parent tab
    #     Examples:
    #         | eventName | futureTime | regEmail | message |
    #         | C         | 10:30 pm   | Q        | ok  |

    # #DONE
    # Scenario Outline: Check that user is able to Answer a questioned message and is able to see only questioned messages when clicked on " ? " icon
    #     Given Created event <eventName> should be searched and selected from event list
    #     Given Host Must be in Meeting Room
    #     When User switch to "Manage event" window
    #     When In other tab attendee <regEmail> joins the session
    #     When Type message <message> in text area
    #     Then Message <message> should displayed in the chat section
    #     When Move to meeting room window
    #     When Move to message <message>
    #     When Admin Clicks on "Mark as a question" option
    #     Then Host should able to Mark the message sent by attendee as question
    #     When Clicks on "Answer Live" option
    #     Then Host should able to Answer the Marked Question
    #     Then Live answer message <message> should display on attendee's screen under live answer container
    #     Then Move to Manage event window
    #     When Move to meeting room window
    #     When Clicks on "Finish answering" button
    #     Then "Answered" <questionStatus> should displayed after the question is answered
    #     When Click on chat question button
    #     Then Only questioned messages <message> should displayed when click on chat question button
    #     Then Move to Manage event window
    #     Examples:
    #         | eventName | regEmail | message | questionStatus |
    #         | C         | N        | Question message     | ANSWERED       |


    Scenario Outline: Check that user is able to see only mentioned messages when clicked on " @ " icon
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        When Click on "@" to mention
        When Attendee mention host and send message <message> by clicking on enter key
        When Move to meeting room window
        When Click on chat mentions "@" button
        Then Mentioned message <message> should displayed when click on "@"
        When Click on "@" to mention
        When Attendee mention host and send message <adminMessage> by clicking on enter key
        Then Move to attendee's screen
        Then Mentioned message <adminMessage> should displayed when click on "@"
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | regEmail | message        | adminMessage  |
            | C         | L        | Important info | check message |


    Scenario Outline: Verify the functionality of "Admin" buton ,"View Profile" icon for user , "close chat" option,"Full screen" icon and "Settings" icon under meeting room and admin message is not displaying on attendee's screen
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Type message <message1> in text area
        When Admin clicks on "Admins" tab in Chat tab
        When Type message <adminChatmessage> in text area
        Then Admin message <adminChatmessage> displaying on "Admin" chat area other message <message1> is not displaying
        When User clicks on view Profile icon
        Then User's name and details should be displayed
        When Click on "Hide chat" option
        Then For dev server chat Panel should minimized <minimizedPanelClass>
        When Click on "Full Screen" option
        Then Window should expand to full screen when clicked on Fullscreen option
        When Click on "Setting" option
        Then Setting Pop up should displayed
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
        Then Attendee should not able to receive admins message <adminChatmessage> in the chat
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message1     | adminChatmessage              | minimizedPanelClass                                                           |
            | C         | I        | ResultStatus | Please submit your assignment | chat-component chat-rebuild-container chat-feature-admin-tab hide --isnot-ios |

    Scenario Outline: Verify that the private message sent to a attendee is not displaying to other attendees in the room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Chat screen is closed then click on open button
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        When Move to meeting room window
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | regEmail | message         |
            | C         | J        | NewGroupCreated |


    Scenario Outline: Check that the banned attendee is not able to join the Room Again
        Given Created event <eventName> should be searched and selected from event list
        When User <regEmail> attends the session
        Then Using join link Host Join the room and click on people button
        When Click on attendee menu button which you want to ban
        When Click on Ban attendee option
        Then Host should able to ban an attendee with title <title>
        Then Banned attendee <regEmail> should not able to join the Room again <title>
        Examples:
            | eventName | regEmail | slide        | futureTime | name | title                       |
            | C         | B        | pdf-test.pdf | 10:30 pm   | pdf  | Yikes! You’ve been removed. |

    Scenario Outline: Check that the shared Video is displaying same for all the attendees and admins in the meeting room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Clicks on "Share Materials" button
        Then Refresh screen and click on join room button
        When Clicks on "Share Materials" button
        Then Refresh screen and click on join room button
        When Clicks on "Share Materials" button
        When Host clicks on added material <videoName>
        When Host clicks on pause button
        Then Video should be paused
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
        Then Shared video is displayed on attendee's screen
        Then Video should be paused
        Then Move to Manage event window
        Given Host Must be in Meeting Room
        Then User clicks on Stop video share button
        Then Move to Manage event window
        Examples:
            | eventName | videoName | regEmail |
            | C         | NewVideo  | M        |

    Scenario Outline: Check that Host is able to add and launch Pdf by clicking on Add material under material option
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When Clicks on "Share Materials" button
        When Host clicks on Add material option
        Then Add material pop up should display
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | futureTime | name | slide        |
            | C         | 10:30 pm   | pdf1 | pdf-test.pdf |


    Scenario Outline: Check that User is able to  "End Session"
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Chat screen is closed then click on open button
        When User click on Event name bar
        Then Session pop up should display
        When User clicks on "End Session" button under session popup
        Then User shall see "End Session" Pop-up.
        When User clicks on "YES,END"
        Then Host should able to End the session
        Then Move to Manage event window
        Examples:
            | eventName |
            | C         |

    Scenario Outline: Check that user is able to create Post session and verify message under people tab
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        Given User should be on Manage Event Page
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        # When User select start session time <futureTime>
        When User selects start time for automated events
        # When For End session User select session time
        When User clicks on "Add to Event schedule" button
        Then Created session should display under upcoming sessions
        When Material <name> must be added in event <slide>
        When Admin add handout <title> and <image> for event
        Then Admin starts the session and share added resource
        When Registered user <regEmail> must attends the session and send message <message>
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        When User clicks on "People" tab
        When User click on "Message" tab
        Then User info <regEmail> is displaying under message tab
        Then Message <message> should displaying under message tab
        Examples:
            | userA | eventName | slide        | futureTime | name | regEmail | title             | image      | message     |
            | admin | C         | pdf-test.pdf | 11:00 pm   | pdf  | A        | NewTitleForSeries | tweety.jpg | testMessage |

    Scenario Outline: Verify visibility of post session options and if share replay option opens the recording page and user can open recording by clicking on arrow
        Given Created event <eventName> should be searched and selected from event list
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


    Scenario Outline: Check user redirects to the Activity>>Insights page when user clicks "View Insights" option from dropdown on Event summary page
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        When Select "View Insights" option
        Then User should be redirected to "Activity>>Insight tab"

        Examples:
            | eventName |
            | C         |


    Scenario Outline: Check functionality of all columns under "People" tab
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

    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        #    Check if graph loaded correctly for "Registrants" and "Attendees" and number of click  on "Insights Page" and all the fields are exported correctly under people tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"
        Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
        Then Should displayed correct number of clicks on the resources below "Insights graph"
        When User clicks on "People" tab
        Then Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"
        Then User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns
        Then User should able to download export CSV file
        Examples:
            | eventName |
            | C         |

    Scenario Outline: Check if user is able to delete recording from summary tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        When Click on "Delete Recording" option
        When Clicks on "yes delete" button
        Then User is able to delete recording from summary tab
        Examples:
            | eventName |
            | C         |


 Scenario Outline: Check and verify the availability and redirection of exact number of "Regsitration", "Attended" and "Missed" on "summary" and "Insights Page" also verify the functionality of filter options under people tab
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then User shall see "Session Date&Time","Admin Team","Registered" options
        Then User shall see dropdown with options "View Insights","Edit Date & Time","Cancel Session"
        When Material <name> must be added in event <slide>
        When User Registered for event session with email <regEmail1>
        When User Registered for event session with email <regEmail2>
        Then Session must be started by admin
        When Registered user <regEmail3> must attends the session and send message <message>
        When Admin ends the session
        When User clicks on past event option
        When User click on missed count under summary tab
        Then User detail <regEmail2> should displayied after applying filter under people area
        When Go to Event Summary page
        When User clicks on past event option
        When User click on attendees count under summary tab
        Then User detail <regEmail3> should displayied after applying filter under people area
        When Go to Event Summary page
        When User clicks on past event option
        When User click on register count under summary tab
        Then User detail <regEmail3> should displayied after applying filter under people area
        Then Verify second user info <regEmail2> is displaying under people activity tab
        When Go to Event Summary page
        When User clicks on past event option
        When User click on message count under summary tab
        Then Message text should displaying under message tab <message>
        When Go to Event Summary page
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        When User click on missed count under insights
        Then User detail <regEmail2> should displayied after applying filter under people area
       When User clicks on "Activity" tab on manage event page
        When User click on insights option under activity area
        When User click on attendees count under insights
        Then User detail <regEmail3> should displayied after applying filter under people area
        When User click on insights option under activity area
        When User click on register count under insights
        Then User detail <regEmail3> should displayied after applying filter under people area
        Then Verify second user info <regEmail2> is displaying under people activity tab
        When User click on insights option under activity area
        When User click on message count under insights
        Then Message text should displaying under message tab <message>
        When User clicks on "People" tab
        When User apply filter <filterOption1> under people tab
        Then User detail <regEmail2> should displayied after applying filter under people area
        When User apply filter <filterOption> under people tab
        Then User detail <regEmail3> should displayied after applying filter under people area
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | message    | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime | filterOption | filterOption1 |
            | admin | I         | K         | I         | 2         | new result | E         | pdf  | pdf-test.pdf | 3        | 2           | 1             | 10:30 pm   | Attended     | Missed        |

    Scenario Outline: Share added resources under chat screen and verify the attendee response on admin screen and attendee redirect to thank you screen after end the session
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Given Host should be in meeting room and starts the session
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
            | eventName | futureTime | count | header                | message       | title1                      | link                  | buttonText | image1      | question                       | option1  | option2 | title   | image    | regEmail |
            | D         | 11:00 pm   | 1     | Thank you for joining | check message | Download chrome for browser | https://webdriver.io/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg | K        |

    Scenario Outline: Share pre added resources and verify the attendee response and clicks in summary  and verify Post-session Redirect url
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
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
        Then Move to Manage event window
        When Go to Event Summary page
        When User clicks on past event option
        Then Message count should displaying under summary tab <count>
        When User clicks on "Activity" tab on manage event page
        Then Number of clicks <count> should displaying under insights for all resources
        Then Attendees should redirect on added url <url>
        Examples:
            | eventName | futureTime | count | message       | url                   | title1                      | link                  | buttonText | image1      | question                       | option1  | option2 | title   | image    | regEmail |
            | C         | 11:00 pm   | 1     | check message | https://webdriver.io/ | Download chrome for browser | https://webdriver.io/ | OPENURL    | TestOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg | K        |

    # Scenario Outline: Verify the functionality of messages filer under activity area
    #     Given End if any session running and new "Standard" Event must be craeted <eventName>
    #     When User Clicks on "Schedule this Event" button
    #     Given User should be redirected to Schedule Upcoming session menu
    #     When User selects current or future date
    #     When User selects start time for automated events
    #     When User clicks on "Add to Event schedule" button
    #     Given Host should be in meeting room and starts the session
    #     When Chat screen is closed then click on open button
    #     When Type message <adminMessage> in text area
    #     Then Host should able to send message <adminMessage> in the chat
    #     When User switch to "Manage event" window
    #     When In other tab attendee <regEmail> joins the session
    #     When Chat screen is closed then click on open button
    #     When Type message <questionMessage> in text area
    #     Then Message <questionMessage> should displayed in the chat section
    #     When Move to meeting room window
    #     When Move to message <questionMessage>
    #     When Admin Clicks on "Mark as a question" option
    #     When User click on Event name bar
    #     Then Session pop up should display
    #     When User clicks on "End Session" button under session popup
    #     Then User shall see "End Session" Pop-up.
    #     When User clicks on "YES,END"
    #     Then Host should able to End the session
    #     Then Move to Manage event window
    #     When User clicks on "Activity" tab on manage event page
    #     When User clicks on "People" tab
    #     When User click on "Message" tab
    #     Then Message text should displaying under message tab <adminMessage>
    #     Then Message text should displaying under message tab <questionMessage>
    #     When User select "Questions" option from message filter
    #     Then After applying filter only <questionMessage> should display on screen
    #     Then After applying filter the message <adminMessage> should not displaying in message tab
    #     Examples:
    #         | eventName | adminMessage | questionMessage | regEmail |
    #         | K         | NewAdmin     | NewQuestion     | A        |


  
    Scenario Outline: For standard event Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page" also verify the functionality of "Date range" filter
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then User shall see "Session Date&Time","Admin Team","Registered" options
        Then User shall see dropdown with options "View Insights","Edit Date & Time","Cancel Session"
        When Material <name> must be added in event <slide>
        Then Session must be started by admin
        When Registered user <regEmail3> must attends the session and send message <message>
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        When Go to Event Summary page
        Then User schedule new session on next day
        Then Session must be started by admin
        When Registered user <regEmail1> must attends the session and send message <message1>
        When Admin ends second session
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        Then For date range script correct user info <regEmail1> is displaying under people tab
        When User click on "Message" tab
        Then User info <regEmail1> is displaying under message tab
        Then Message text should displaying under message tab <message1>
        When User clicks on "People" tab
        When User click on session dropdown on insights page
        When User selects "Date range" option
        When User select todays date from date range calendar
        Then For date range script correct user info <regEmail1> is displaying under people tab
        Then Verify second user info <regEmail3> is displaying under people activity tab
        When User click on "Message" tab
        Then User info <regEmail1> is displaying under message tab
        Then User info <regEmail3> is displaying under message tab
        Then Message text should displaying under message tab <message>
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime | regCountForNextDay | attendedCountForNextDay | missedCountForNextDay | message  | message1   | videoName | video          |
            | admin | I         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 1        | 0           | 1             | 10:30 pm   | 3                  | 2                       | 1                     | textUser | testMesage | testVideo | shareVideo.mp4 |

   Scenario Outline: For series event Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page" also verify the functionality of "Date range" filter
        Given Deleted pogressed event and new "Series" Event must be craeted <eventName>
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then User shall see "Session Date&Time","Admin Team","Registered" options
        Then User shall see dropdown with options "View Insights","Edit Date & Time","Cancel Session"
        When Material <name> must be added in event <slide>
        Then Session must be started by admin
        When Registered user <regEmail3> must attends the session and send message <message>
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Then User select past session option on activity tab
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        When Go to Event Summary page
        Then User schedule new session on next day
        Then Session must be started by admin
        When Registered user <regEmail1> must attends the session and send message <message1>
        When Admin ends second session
        Given Created series event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then User select past session option on activity tab
        When User clicks on "People" tab
        Then For date range script correct user info <regEmail1> is displaying under people tab
        When User click on "Message" tab
        Then User info <regEmail1> is displaying under message tab
        Then Message text should displaying under message tab <message1>
        When User clicks on "People" tab
        When User click on session dropdown on insights page
        When User selects "Date range" option
        When User select todays date from date range calendar
        Then For date range script correct user info <regEmail1> is displaying under people tab
        Then Verify second user info <regEmail3> is displaying under people activity tab
        When User click on "Message" tab
        Then User info <regEmail1> is displaying under message tab
        Then User info <regEmail3> is displaying under message tab
        Then Message text should displaying under message tab <message>
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime | regCountForNextDay | attendedCountForNextDay | missedCountForNextDay | message  | message1   | videoName | video          |
            | admin | I         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 1        | 0           | 1             | 10:30 pm   | 3                  | 2                       | 1                     | textUser | testMesage | testVideo | shareVideo.mp4 |

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
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then Success message <message> should display
        Then Refresh screen until session get start
        When Registered user <regEmail> join the meeting room
        When Chat screen is closed then click on open button
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
        #  When Chat screen is closed then click on open button
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
            | admin | K         | automatedEvent.mp4 | K        | 3         | 0h 0m 45s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | https://demio.com/ | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | Test admin message |

    Scenario Outline: Moderator is able to add and share and click resources under chat screen
        Given Created automated event <eventName> should be searched and selected from event list
        Then Move to guest section
        Then In Automated event added moderator join the session
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Move to meeting room window
        When Chat screen is closed then click on open button
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
            | eventName | regEmail | question                   | option1    | option2 | featureTitle | image      | handoutTitle | header                | buttonText | link                  | minimizedPanelClass                                                            |
            | K         | N        | What is your qualification | graduation | None    | New Feature  | tweety.jpg | new handout  | Thank you for joining | QUIT       | https://webdriver.io/ | hide chat-rebuild-container chat-feature-admin-tab --is-admin-chat --isnot-ios |

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
        When User selects start time for automated events
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
            | userA | eventName | videoName        | regEmail | regCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | buttonText | image       | message                    | member    | role      | message       | featureUrl            | missedCount | attendeeCount |
            | admin | K         | twoMinsVideo.mp4 | K        | 2        | 0h 0m 50s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | https://webdriver.io/ | 1           | 1             |

  
    Scenario Outline: Check if rescheduling automated events functionality is working fine and session starts at the correct time
        Given Created automated event <eventName> should be searched and selected from event list
        When User click schedule session button
        Then User should be redirected to Schedule Upcoming session menu
        When User selects current or future date
        When User selects start time for automated events
        When User clicks on "Add to Event schedule" button
        Then Refresh screen until session get start
        When Registered user <regEmail> join the meeting room
        Then For automated event user should redirected to "Thank You" screen <header>
        Examples:
            | eventName | regEmail | header                |
            | K         | K        | Thank you for joining |

    Scenario Outline: Check if it displays correct number of Registered,Attendee ,messages and insights graph on the On demand section page
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given Handout should be created with title <handoutTitle> and image <image> and set launchTime <launchTime>
        Given For onDemand event Polls should be created with question <pollQuestion> and optionOne <optionOne> optionTwo <optionTwo> and set launchTime <launchTime>
        Given OnDemand event Feature should be created with Featured title <featureTitle> and featureUrl <featureUrl> buttonText <buttonText> image <image> with <launchTime>
        When Go to Event Summary page
        When Click on "On-Demand" option
        Given For on demand session <attendeeCount> Users must Attended and click on all resources for poll <optionOne> and redirect on url <featureUrl> for feature action and sent <message> with email <regEmail>
        When Go to Event Summary page
        When Click on "On-Demand" option
        Then For on demand event "Regsitration" <regCount>, "Attended" <attendeeCount> and message count should displayed under tab
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then For on demand It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendeeCount> on "Insights Page"
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Number of clicks <attendeeCount> should displaying under insights for all resources
        When User clicks on "Activity" tab on manage event page
        Then Attendees Graph should be loaded correctly on "Insights Page"
        When User clicks on "People" tab
        Then For ondemand Start and end join time of attendee should displaying under people tab
        Examples:
            | userA | eventName | videoName       | regEmail | regCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | buttonText | image       | message                    | member    | role      | message       | featureUrl            | missedCount | attendeeCount |
            | admin | L         | oneMinVideo.mp4 | K        | 1        | 0h 0m 09s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | https://webdriver.io/ | 1           | 1             |

    Scenario Outline: Check if resources are shared automatically on set time, session resumes if user left for few seconds and joins again and also check enable post session functionality
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given Handout should be created with title <handoutTitle> and image <image> and set launchTime <launchTime>
        Given For onDemand event Polls should be created with question <pollQuestion> and optionOne <optionOne> optionTwo <optionTwo> and set launchTime <launchTime>
        Given OnDemand event Feature should be created with Featured title <featureTitle> and featureUrl <url> buttonText <buttonText> image <image> with <launchTime>
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
        When Click on "Join Room" button after registered
        When Chat screen is closed then click on open button
        Then The Handout should not launch automatically before the set time
        Then The FeatureAction links should not launch automatically before the set time
        Then The Poll should not launch automatically before the set time
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then the Poll shall launch automatically at the set time
        Then Session resume if user <regEmail> left for few seconds and rejoin again
        # Then For automated event attendees should redirect on added url <url>
        Examples:
            | userA | eventName | videoName      | regEmail | userCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | url                   | buttonText | image       |
            | admin | K         | shareVideo.mp4 | K        | 1         | 0h 0m 30s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | https://webdriver.io/ | Click here | TestOne.jpg |

