
Feature: Verify New room page features
    As a User i want to check new room feature

    Background:
        Given User close extra tabs

    Scenario Outline: Redirect on home page
        Given User should redirect on <homeUrl> Home page
        Examples:
            | homeUrl            |
            | releaseHomePageUrl |

    Scenario Outline: Check that user is able to create and schedule a session
        Given User should redirect on <url> login page
        Given User login with <userA>
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Examples:
            | userA | eventName | futureTime | url             |
            | admin | C         | 11:00 pm   | releaseLoginUrl |

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


    #DONE
    Scenario Outline: Check redirection of Event Host to Meeting Room on Clicking  "Join Room" button and is able to start the session
        Given Created event <eventName> should be searched and selected from event list
        When Click on "Join Room" button under event tab
        Then It should redirected to "Welcome," page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When User click on Event name bar
        Then Session pop up should display
        When Click on Start Session button under popup
        When Click on yes start button
        Then Session should started
        Then Move to Manage event window
        Examples:
            | userA | eventName | pageTitle |
            | admin | C         | Welcome,  |

    #DONE
    Scenario Outline: Check that the User is able to leave stage
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        Given User Must be on stage
        When User clicks on "Leave stage" button
        Then The user should not longer be on stage
        Then Move to Manage event window
        Examples:
            | eventName |
            | C         |

    #DONE
    Scenario Outline: Check that the Presenter are able to leave stage
        Given Created event <eventName> should be searched and selected from event list
        Then Move to guest section
        Then Added Presenter joins the session
        Given User Must be on stage
        When User clicks on "Leave stage" button
        Then The user should not longer be on stage
        Then Move to Manage event window
        Examples:
            | eventName |
            | C         |

    # DONE
    Scenario Outline: Check that the Moderator is able go on stage and leave the stage
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Moderator joins the session in second tab
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

    #     DONE
    Scenario Outline: Check that the attendee is able to leave stage
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Switch to admin tab and click on people button
        When User click on second index attendee's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the first selected Attendee
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        When User clicks on "Leave stage" button on attendee screen
        Then Attendee should not longer be on stage
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail |
            | C         | F        |

    Scenario Outline: Verify admin is able to create and share handout resource under chat screen in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "handout"
        When Add handout file <image>
        Then User should able to add handout title <title>
        When save resource by clicking on "Save" button
         When Click on chat resource plus button
        When User Click on added handout resource <title>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When User clicks on handouts option on attendee screen
        Then Attendee should able to view handouts <title>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | image    | title       |
            | C         | E        | doll.jpg | NewHandout1 |

               #DONE
    Scenario Outline: Check that user is able to share added handout
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        When User Click on added handout resource <title>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When User clicks on handouts option on attendee screen
        Then Attendee should able to view handouts <title>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | title   |
            | C         | O        | NewFile |



    Scenario Outline: Verify admin is able to create and share poll resource under chat screen in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
         When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        When User Click on added poll resource <question>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Attendee clicks on polls option
        Then User should able to view poll <question> and options <option1> and <option2>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | question                   | option1    | option2 |
            | C         | P        | What is your qualification | graduation | None    |

    Scenario Outline: Verify admin is able to create and share feature resource under chat screen in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
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
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | title              | buttonText  | image    |link|
            | C         | Q        | New feature action | Quit action | doll.jpg |www.feature.com|

 

    #DONE
    Scenario Outline: Check that user is able to launch Polls
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Poll resources <question> should displayed within the meeting room
        When User Click on added poll resource <question>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Attendee clicks on polls option
        Then User should able to view poll <question> and options <option1> and <option2>
        Then Move to Manage event window
        Examples:
            | eventName | question                       | option1  | option2 | regEmail | selectOption1 | selectOption2 |
            | C         | Where are you joining us from? | New York | Toronto | R        | 2             | 1             |


    #DONE
    Scenario Outline: Check that user is able to launch Featured action
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Featured resources <title> should displayed within the meeting room
        When User Click on added featured resource <title>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Attendee should able to view featured action button <title>
        When Attendee clicks on featured action button
        Then Button text should displayed as <buttonText>
        Then Move to Manage event window
        Examples:
            | eventName | title                       | link                           | buttonText | image       | videoName      | futureTime |regEmail|
            | C         | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | TestOne.jpg | demioVideo.mp4 | 10:30 pm   |P|


    # DONE
    Scenario Outline: Check that Pause,Restart and Stop buttton of Video material launched is working as per its functionality
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        Given User Must be on stage
        Then Remove pre shared material
        When Clicks on "Share Materials" button
        When Host clicks on added material <name>
        Then Timer should displayed in the Video launched
        Then User shall see Pause,Restart and Stop buttton
        Then Pause,Restart and Stop buttton should work as per their functionality
        Then Move to Manage event window
        Examples:
            | eventName | name     |
            | C         | NewVideo |




    #DONE
    Scenario Outline: Check that the shared slide is displaying same for all  the attendees and admins in the meeting room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        Then Added slide material <name> should displayed under share screen
        When Host clicks on added material <name>
        When Clicked on "User menu" icon
        When Clicked on "Enable Spotlight" icon
        Then Spotlight mode should be enabled
        When Clicks on next slide button
        Then Same slide should displayed on attendee <regEmail> screen
        When Move to meeting room window
        Then Host clicks on stop share slide button
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail | name | pageTitle |
            | C         | E        | pdf  | Welcome,  |


    #DONE
    Scenario Outline: Check that the invited host is able to meeting room after clicking on "NO THANKS , I DON'T WANT TO GO ON STAGE" button
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Added host joins the session in second tab
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
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab

        Examples:
            | eventName | role | member    |
            | C         | Host | Subuser 1 |

    #DONE
    Scenario Outline: Check that attendee is able to open chat pop up
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Click on "chat Header Right" Arrow
        Then Chat Pop up should displayed
        When Move to meeting room window
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail |
            | C         | E        |


    #DONE
    Scenario Outline: Check that admin is able to switch from Public chat to private and vice versa in room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
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
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | regEmail | message  |
            | C         | J        | NewGroup |



    # DONE
    Scenario Outline: Check that User is able to delete messages sent by other admins
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Added host joins the session in second tab
        When Type message <message> in text area
        Then Message <message> should displayed in the chat section
        When Move to meeting room window
        Then Other user is able to receive message <message> sent by other admin
        Then On message <message> Delete icon should diplayed with message
        When User Clicks On "Delete" icon
        Then "Yes delete" button should displayed
        When Clicks on "yes delete" button
        Then Deleted message <message> is not displayed on chat window
        Then Message <message> is not displayed on user's screen
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | message               |
            | C         | Good morning everyone |



    # DONE
    Scenario Outline: Check that User is able to delete messages sent by attendees
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        When Move to meeting room window
        Then On message <message> Delete icon should diplayed with message
        When User Clicks On "Delete" icon
        Then "Yes delete" button should displayed
        When Clicks on "yes delete" button
        Then Deleted message <message> is not displayed on chat window
        Then Message <message> is not displayed on user's screen
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message   |
            | C         | O        | Hii admin |


    # DONE
    Scenario Outline: Check that user is able to mark and Unmark a message as question
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Type message <message> in text area
        Then Message <message> should displayed in the chat section
        When Move to meeting room window
        When Move to message <message>
        When Admin Clicks on "Mark as a question" option
        Then Host should able to Mark the message sent by attendee as question
        When Clicks on chat question options three dots
        Then "Unmark as question" option should displayed
        When Clicks on "Unmark as question" option
        Then Host should able to Unmark the message sent by attendee by clicking on "Unmark as question" option
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | futureTime | regEmail | message |
            | C         | 10:30 pm   | Q        |testing data     |

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


    #DONE
    Scenario Outline: Check that user is able to see only mentioned messages when clicked on " @ " icon
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Click on "@" to mention
        When Attendee mention host and send message <message> by clicking on enter key
        When Move to meeting room window
        When Click on chat mentions "@" button
        Then Mentioned message <message> should displayed when click on "@"
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | regEmail | message        |
            | C         | L        | Important info |

    #DONE
    Scenario Outline: Check that Messages sent under admin chat is not displaying to attendees
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Admin clicks on "Admins" tab in Chat tab
        When Type message <message> in text area
        Then Host should able to send message <message> in the chat
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Attendee should not able to receive admins message <message> in the chat
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message      |
            | C         | A        | ResultStatus |

    #DONE
    Scenario Outline: Verify the functionality of "Admin" buton ,"View Profile" icon for user , "close chat" option,"Full screen" icon and "Settings" icon under meeting room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Type message <message1> in text area
        When Admin clicks on "Admins" tab in Chat tab
        When Type message <adminChatmessage> in text area
        Then Admin message <adminChatmessage> displaying on "Admin" chat area other message <message1> is not displaying
        When User clicks on view Profile icon
        Then User's name and details should be displayed
        When Click on "Hide chat" option
        Then Chat Panel should minimized <minimizedPanelClass>
        When Click on "Full Screen" option
        Then Window should expand to full screen when clicked on Fullscreen option
        When Click on "Setting" option
        Then Setting Pop up should displayed
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message1     | adminChatmessage              | minimizedPanelClass                                                            |
            | C         | I        | ResultStatus | Please submit your assignment | hide chat-rebuild-container chat-feature-admin-tab --is-admin-chat --isnot-ios |

    #DONE
    Scenario Outline: Verify that the private message sent to a attendee is not displaying to other attendees in the room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When User switch to "Manage event" window
        Then In other tab second attendee <regEmail> joins the session
        When Host Select "Private" chat option
        Then Move to attendee's screen
        When First attendee sends message <message> in chat window
        Then <message> private message should not displayed on other attendee's screen
        Then Move to Manage event window
        When Move to meeting room window
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | regEmail | message         |
            | C         | J        | NewGroupCreated |




    #DONE
    Scenario Outline: Check that the profile of Attendee is displayed when Attendee clicks on View profile icon
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When User clicks on view Profile icon
        Then Attendee's details <regEmail> should be displayed
        Then Move to Manage event window
        Examples:
            | eventName | regEmail |
            | C         | L        |


    #DONE
    Scenario Outline: Check that search option is displaying and user is able to search materials
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        Then Search bar and List of added materials should display
        When User added material <name> in search bar
        Then User should be able to Search material <name>
        Then Move to Manage event window
        Examples:
            | eventName | slide      | futureTime | name | video          | videoName |
            | C         | sample.pdf | 10:30 pm   | pdf  | shareVideo.mp4 | NewVideo  |

    #DONE
    Scenario Outline: Check that the banned attendee is not able to join the Room Again
        Given Created event <eventName> should be searched and selected from event list
        When User <regEmail> attends the session
        Then Host Join the room and click on people button
        When Click on attendee menu button which you want to ban
        When Click on Ban attendee option
        Then Host should able to ban an attendee with title <title>
        Then Banned attendee <regEmail> should not able to join the Room again <title>
        Examples:
            | eventName | regEmail | slide        | futureTime | name | title                       |
            | C         | B        | pdf-test.pdf | 10:30 pm   | pdf  | Yikes! You’ve been removed. |

    # DONE
    Scenario Outline: Check that the shared Video is displaying same for all the attendees and admins in the meeting room
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        When Host clicks on added material <videoName>
        When Host clicks on pause button
        Then Video should be paused
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        Then Shared video is displayed on attendee's screen
        Then Video should be paused
        Then Move to Manage event window
        Given Host Must be in Meeting Room
        Then User clicks on Stop video share button
        Then Move to Manage event window
        Examples:
            | eventName | videoName | regEmail |
            | C         | NewVideo  | M        |
    #DONE
    Scenario Outline: Check that Host is able to add and launch Pdf by clicking on Add material under material option
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        When Host clicks on Add material option
        Then Add material pop up should display
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | futureTime | name | slide        |
            | C         | 10:30 pm   | pdf1 | pdf-test.pdf |

    #DONE
    Scenario Outline: Check that Host is able to add Video by clicking on Add material under material option
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        When Host clicks on Add material option
        Then Add material pop up should display
        Then Move to Manage event window
        Then Close recent window
        Examples:
            | eventName | videoName | video          | futureTime |
            | C         | testVideo | shareVideo.mp4 | 10:30 pm   |

    #DONE
    Scenario Outline: Check that User is able to  "End Session"
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
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


    Scenario Outline: Check that user is able to create Post session
        Given new "Standard" Event must be craeted <eventName>
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
        When Registered user <regEmail> must attends the session
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Examples:
            | userA | eventName | slide        | futureTime | name | regEmail | title             | image      |
            | admin | C         | pdf-test.pdf | 11:00 pm   | pdf  | A        | NewTitleForSeries | tweety.jpg |
    #SDone
    Scenario Outline: Check displaying of correct "Registered", "Attended", "Missed" and "Messages" after event has finished on summary page (Past Session)
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        Then User shall see "Session Date&Time","Registered" options
        Then User shall see "Attended","Missed","Messages" options
        Examples:
            | eventName |
            | C         |



    #DONE
    Scenario Outline: Verify if share replay option opens the recording page and user can open recording by clicking on arrow
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
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


    Scenario Outline: Click on the dropdown button to see it is displaying options to go to Insights,download recording,delete recording and share replay
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on past event option
        When Click on dropdown in fron of session
        Then It should displayed with option Insights,download recording,delete recording and share replay
        Examples:
            | eventName |
            | C         |

    #POST-DEPLOYEMENT
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




    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"
        When User clicks on "People" tab
        Then Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"
        Then User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns

        Examples:
            | eventName |
            | C         |

    Scenario Outline: Check if displaying exact number of "Regsitration", "Attended" and "Missed" on "Insights Page"
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        When Material <name> must be added in event <slide>
        When User Registered for event session with email <regEmail1>
        When User Registered for event session with email <regEmail2>
        Then Session must be started by admin
        When Registered user <regEmail3> must attends the session
        When Admin ends the session
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
        Examples:
            | userA | eventName | regEmail2 | regEmail1 | userCount | regEmail3 | name | slide        | regCount | missedCount | attendedCount | futureTime |
            | admin | I         | K         | I         | 2         | E         | pdf  | pdf-test.pdf | 3        | 2           | 1             | 10:30 pm   |



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




    # ##POST-DEPLOYEMENT DONE
    Scenario Outline: Check availability ofCheck if displaying correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page" and columns under "People" tab
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then It should displayed correct "Session Duration" , "Average Time Attended" and "Average Time Focused"  on "Insights Page"
        When User clicks on "People" tab
        Then Colums should display under People tab: "NameOrEmail", "Registration Date & Time", "Session Date & Time", "Attended","Join Timestamp"
        Then User should able to view "Exit Timestamp","Attendance Minutes", "Attendance per", "Focus per" and "Location" columns

        Examples:
            | eventName |
            | C         |


    # ##POST-DEPLOYEMENT DONE
    Scenario Outline: Check if graph loaded correctly for "Registrants" and "Attendees"  on "Insights Page"
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
        Examples:
            | eventName |
            | C         |

    ##POST-DEPLOYEMENT DONE
    Scenario Outline: Check if displaying correct number of clicks on the resources below "Insights graph"
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        Then Should displayed correct number of clicks on the resources below "Insights graph"
        Examples:
            | eventName |
            | C         |

    #POST-DEPLOYEMENT DONE
    #    SDone
    Scenario Outline: Export the registered users and check if all the fields are exported correctly
        Given Created event <eventName> should be searched and selected from event list
        When User clicks on "Activity" tab on manage event page
        Then User should be redirected to "Activity>>Insight tab"
        When User clicks on "People" tab
        Then User should able to download export CSV file
        Examples:
            | eventName |
            | C         |

    #POST-DEPLOYEMENT
    Scenario Outline: Verify availability of options under Summary
        Given Created event <eventName> should be searched and selected from event list
        When For new session User Clicks on "Schedule this Event" button
        When User selects current or future date
        When User selects future time <futureTime>
        When User clicks on "Add to Event schedule" button
        When "Upcoming Session" is selected
        Then User shall see "Session Date&Time","Admin Team","Registered" options
        Then User shall see dropdown with options "View Insights","Edit Date & Time","Cancel Session"
        When User clicks on past event option
        Then User shall see "Session Date&Time","Registered" options
        Then User shall see "Attended","Missed","Messages" options
        Examples:
            | eventName | futureTime |
            | C         | 11:00 pm   |
