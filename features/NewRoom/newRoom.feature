Feature: Verify New room page features
    As a User i want to check new room feature

    Background:
        Given User should be on Home page

    Scenario Outline: Check that user is able to create and schedule a session
        Given User should be on login page
        Given User login with <userA>
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Examples:
            | userA | eventName | futureTime |
            | admin | C         | 11:00 pm   |

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
            | C         | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | testOne.jpg | Where are you joining us from? | New York | Toronto | NewFile | doll.jpg |


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
    Scenario Outline: Check redirection of Attendee to Meeting Room
        Given Created event <eventName> should be searched and selected from event list
        When Registered user <regEmail> join the meeting room
        Then Attendee should redirected to Meeting Room
        Then Move to Manage event window
        Examples:
            | eventName | regEmail |
            | C         | M        |


    #DONE
    Scenario Outline: Check User is able to Go on Stage if required
        Given Created event <eventName> should be searched and selected from event list
        When Host Must be in Meeting Room
        When User clicks on "GO ON STAGE"
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"
        Then User should be redirected back to the meeting room
        When Clicks on "Go on stage" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        Then Move to Manage event window
        Examples:
            | eventName | futureTime |
            | C         | 11:00 pm   |

    #DONE
    Scenario Outline: Check Presenter is able to redirect to meeting room and Go on Stage if required
        Given Created event <eventName> should be searched and selected from event list
        Then Move to guest section
        When Presenter joins the session
        Then User should redirected to Meeting Room
        When User clicks on "GO ON STAGE"
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"
        Then User should be redirected back to the meeting room
        When Clicks on "Go on stage" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        Then Move to Manage event window

        Examples:
            | eventName | role      |
            | C         | Presenter |

    # DONE
    Scenario Outline: Check that the invited Presenter and Attendee are able to "GO ON STAGE "
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Presenter joins the session in second tab
        When User switch to "Manage event" window
        Then In third tab attendee <regEmail> joins the session
        When Switch to admin tab and click on people button
        When User click on presenter's menu button
        When User click on "Invite on stage" button
        When User click on attendee's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the selected Presenter
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        Then The invite should be sent to the selected Attendee
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        Then close all three tabs
        Examples:
            | eventName | regEmail |
            | C         | K        |


    # DONE
    Scenario Outline: Check that the invited host is able to redirect to meeting room and "GO ON STAGE " and is able to leave the stage
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Added host joins the session in second tab
        When Switch to admin tab and click on people button
        Then User shall see host details <member>
        When User click on host's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the selected Host
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        When User clicks on "Leave stage" button
        Then The user should not longer be on stage
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | member    |
            | C         | Subuser 1 |

    # DONE
    Scenario Outline: Check that User is able to Invite Admins and attendees to the Stage and both are able to "GO ON STAGE"
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Switch to admin tab and click on people button
        When User click on Admins's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the admin
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        When Click on people button
        When User click on attendee's menu button after admin go on stage
        When User click on "Invite on stage" button
        Then The invite should be sent to the first selected Attendee
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "Go on stage" button under join session screen
        Then User should be redirected back to the meeting room with the staging menu bar at bottom
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail |
            | C         | R        |

    #  DONE
    Scenario Outline: Check that user is able to Remove admins and attendees from stage
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When In other tab attendee <regEmail> joins the session
        When Switch to admin tab and click on people button
        Given There must be a admin or a attendee on stage
        When User click on attendee's menu button for "Remove from stage" action
        When User clicks on "Remove from stage"
        When User click on admin's menu button for "Leave stage" action
        When User clicks on "Leave stage"
        Then The Selected admin or attendee should be removed from stage
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail |
            | C         | H        |


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
            | C         | H        |

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
    Scenario Outline: Check the Added resources are displaying on cllick of "+" button and user is able to launch Handout resource
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Handout resources <title> should displayed within the meeting room
        When User Click on added handout resource <title>
        When Clicked on "Share Now" button
        Then Move to Manage event window
        When Registered user <regEmail> join the meeting room
        When Attendee Clicks on "handout" option
        Then Shared Handouts should displayed on attendee's screen <title>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | title   | image    |
            | C         | O        | NewFile | doll.jpg |

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
            | eventName | title                       | link                           | buttonText | image       | videoName      | futureTime |
            | C         | Download chrome for browser | https://www.google.com/chrome/ | OPENURL    | testOne.jpg | demioVideo.mp4 | 10:30 pm   |

    #DONE
    Scenario Outline: Check that the Added slide and video Materials are displaying under the share option
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        Then Added video material <videoName> should displayed under share screen
        Then Added slide material <name> should displayed under share screen
        Then Move to Manage event window
        Examples:
            | eventName | name | videoName |
            | C         | pdf  | NewVideo  |


    #DONE
    Scenario Outline: Check that user is able to share the Slides
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        Given User Must be on stage
        When Clicks on "Share Materials" button
        Then Added slide material <name> should displayed under share screen
        When Host clicks on added material <name>
        Then Same slide should displayed on attendee <regEmail> screen
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | name |
            | C         | E        | pdf  |
    #DONE
    Scenario Outline: Check that user is able to view next and previous slide
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        # Given User Must be on stage
        Then User shall see Next, Previous and Stop button
        Then Next, Previous and Stop button should work as per their functionality
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | slide      | futureTime | name |
            | C         | O        | sample.pdf | 10:30 pm   | pdf  |
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
        When Clicks on next slide button
        Then Same slide should displayed on attendee <regEmail> screen
        Then Move to Manage event window
        Given Host Must be in Meeting Room
        Then Host clicks on stop share slide button
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | name |
            | C         | E        | pdf  |


    # DONE
    Scenario Outline: Check that the Admin is able to Switch from Slides to Video and Video to share screen  and vice versa
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        Then Remove pre shared material
        When Clicks on "Share Materials" button
        When Host clicks on added material <name>
        Then User should able to Switch from Slides to Video <videoName>
        Then User clicks on Stop video share button
        Then Move to Manage event window
        Examples:
            | eventName | name | videoName |
            | C         | pdf  | NewVideo  |




    #DONE
    Scenario Outline: Check that the invited Presenter and Attendee are able to redirect to meeting room after clicking on "NO THANKS , I DON'T WANT TO GO ON STAGE" button
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Presenter joins the session in second tab
        When User switch to "Manage event" window
        When User switch to "Manage event" window
        Then In third tab attendee <regEmail> joins the session
        When Switch to admin tab and click on people button
        When User click on presenter's menu button
        When User click on "Invite on stage" button
        When User click on attendee's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the selected Presenter
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"
        Then User should be redirected back to the meeting room
        Then The invite should be sent to the selected Attendee
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"
        Then User should be redirected back to the meeting room
        Then close all three tabs
        Examples:
            | eventName | regEmail | role      |
            | C         | L        | Presenter |



    #DONE
    Scenario Outline: Check that the invited Moderator is able to redirect to meeting room after clicking on "NO THANKS , I DON'T WANT TO GO ON STAGE" button
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        Then Move to guest section
        Then Moderator joins the session in second tab
        When Switch to admin tab and click on people button
        Then User shall see moderator details <regEmail>
        When User click on moderators's menu button
        When User click on "Invite on stage" button
        Then The invite should be sent to the selected Moderator
        Then User shall see "GO ON STAGE" Pop up screen
        Then User shall see following options "Video","Audio","Connectivity"
        Then User should be able to turn on and off "Audio" button
        Then User should be able to turn on and off "Video" button
        When User clicks on "NO THANKS , I DON'T WANT TO GO ON STAGE"
        Then User should be redirected back to the meeting room
        Then Move to Manage event window
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | role      | regEmail |
            | C         | Moderator | L        |

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


    #DONE
    Scenario Outline: Check that admin is able to add and launch a new poll from chat pop up
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "Poll"
        When Add required fields with <question> and options <option1> and <option2>
        When save resource by clicking on "Save" button
        Then Admin should be able to add <question> and share new poll resource within the meeting room
        When Registered user <regEmail> join the meeting room
        When Attendee clicks on polls option
        Then User should able to view poll <question> and options <option1> and <option2>
        Then Move to Manage event window
        Examples:
            | eventName | question            | option1  | option2 | regEmail |
            | C         | Where are you from? | New York | Toronto | P        |


    # DONE
    Scenario Outline: Check that admin is able to add and launch a new Handout from chat pop up
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on chat resource plus button
        Then Add resources options "poll" , "handout" and "featured action" should displayed
        When Click on "handout"
        When Add handout file <image>
        Then User should able to add handout title <title>
        When save resource by clicking on "Save" button
        Then Admin should able to add <title> and share added handout within the meeting room
        When Registered user <regEmail> join the meeting room
        When Attendee Clicks on "handout" option
        Then Shared Handouts should displayed on attendee's screen <title>
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | title          | image      |
            | C         | P        | NewHandoutFile | tweety.jpg |

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
            | C         | 10:30 pm   | Q        | Hii     |

    #DONE
    Scenario Outline: Check that user is able to Answer a questioned message and is able to see only questioned messages when clicked on " ? " icon
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
        When Clicks on "Answer Live" option
        Then Host should able to Answer the Marked Question
        Then Live answer message <message> should display on attendee's screen under live answer container
        Then Move to Manage event window
        When Move to meeting room window
        When Clicks on "Finish answering" button
        Then "Answered" <questionStatus> should displayed after the question is answered
        When Click on chat question button
        Then Only questioned messages <message> should displayed when click on chat question button
        Then Move to Manage event window
        Examples:
            | eventName | regEmail | message | questionStatus |
            | C         | N        | Hi      | ANSWERED       |


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



    # DONE
    Scenario Outline: Check that attendees are not able to see the results of polls if results are set to private
        Given Created event <eventName> should be searched and selected from event list
        Given Resource <question> must be added with options <option1> and <option2> and disable share result with attendee
        Given Host Must be in Meeting Room
        Then Admin should able to add and share new poll <question> within the meeting room
        When Registered user <regEmail> join the meeting room
        When Attendee clicks on polls option
        When User click on option <option1>
        Then Result status should display private on attendee's screen
        Then Move to Manage event window
        Examples:
            | eventName | question               | option1 | option2 | futureTime | pageTitle | regEmail | selectOption1 | selectOption2 |
            | C         | What's your city name? | Delhi   | Mumbai  | 10:30 pm   | Welcome,  | R        | 2             | 1             |

    #DONE
    Scenario Outline: Check that attendees are able to see the results of polls if results are set to public
        Given Created event <eventName> should be searched and selected from event list
        Given Enable share result option Poll resource <question> must be added with options <option1> and <option2>
        Given Host Must be in Meeting Room
        Then Admin should able to add and share new poll <question> within the meeting room
        When Registered user <regEmail> join the meeting room
        When Attendee clicks on polls option
        When User click on option <option1>
        Then Public poll Result should display on attendee's screen
        Then Move to Manage event window
        Examples:
            | eventName | question       | option1 | option2 | futureTime | pageTitle | regEmail |
            | C         | Where are you? | At home | Office  | 10:30 pm   | Welcome,  | Q        |




    #DONE
    Scenario Outline: Check that the admin/attendee is not able to go on stage when stage is full
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When User switch to "Manage event" window
        When First user must be on stage for with email <regEmail>
        When Second user must be on stage for with email <regEmail>
        When Third user must be on stage for with email <regEmail>
        When User clicks on "GO ON STAGE"
        When User clicks on "Go on stage" button under join session screen
          Then "Stage is full" message <message> should display
        Then Fourth user <regEmail> is not able to go on stage when stage is full
        Then Move to Manage event window
        Then close all three tabs
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | regEmail | message            |
            | C         | P        | The stage is full. |

    #DONE
    Scenario Outline: Check that user is able to enable spotlight mode while sharing a pdf material
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        Then Added slide material <name> should displayed under share screen
        When Host clicks on added material <name>
        When Clicked on "User menu" icon
        When Clicked on "Enable Spotlight" icon
        Then Spotlight mode should be enabled
        Then Host clicks on stop share slide button
        Then Move to Manage event window
        Examples:
            | eventName | name |
            | C         | pdf  |


    #DONE
    Scenario Outline: Check that user is able to enable spotlight mode while sharing a video material
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Clicks on "Share Materials" button
        When Host clicks on added material <name>
        When Clicked on "User menu" icon
        When Clicked on "Enable Spotlight" icon
        Then Spotlight mode should be enabled
        Then Move to Manage event window
        Examples:
            | eventName | name     | video          | futureTime | regEmail | role      |
            | C         | NewVideo | shareVideo.mp4 | 10:30 pm   | M        | Presenter |



    #DONE
    Scenario Outline: Check that attendees are not able to join the room when the room is full
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        Then Move to Manage event window
        When First user attendes the session with email <regEmail>
        When Second user attendes the session with email <regEmail>
        When Third user attendes the session with email <regEmail>
        When Forth user attendes the session with email <regEmail>
        When One more attendee <regEmail> tries to join the room
        Then The attendee should not be able to join the room
        Then close all three tabs
        Then Close Window new tab and switch to parent tab
        Then Close Window new tab and switch to parent tab
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | K        |




    #DONE
    Scenario Outline: Check that admin is able to open chat pop up
        Given Created event <eventName> should be searched and selected from event list
        Given Host Must be in Meeting Room
        When Click on "chat Header Right" Arrow
        Then Chat Pop up should displayed
        Examples:
            | eventName | futureTime | regEmail |
            | C         | 10:30 pm   | J        |



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
        When User selects Pdf name as <name> Material type <slide>
        Then Added slide material <name> should displayed under share screen
        When Host clicks on added material <name>
        Then Same slide should displayed on attendee <regEmail> screen
        Then Move to Manage event window

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
        When User selects video name as <videoName> Material type <video>
        Then Added video material <videoName> should displayed under share screen
        Then Move to Manage event window
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


    # DONE
    Scenario Outline: Check that Host is able to "Start Session" and "End Session"
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given <role> must be added <member> in "Event Admin" option
        When Added host joins the session link
        Then It should redirected to "Welcome," page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        When User click on Event name bar
        Then Session pop up should display
        When Click on Start Session button under popup
        When Click on yes start button
        Then Session should started
        When User click on Event name bar
        Then Session pop up should display
        When User clicks on "End Session" button under session popup
        Then User shall see "End Session" Pop-up.
        When User clicks on "YES,END"
        Then Host should able to End the session
        Then Move to Manage event window

        Examples:
            | eventName | role | member    | futureTime | pageTitle |
            | A         | Host | Subuser 1 | 11:00 pm   | Welcome,  |










