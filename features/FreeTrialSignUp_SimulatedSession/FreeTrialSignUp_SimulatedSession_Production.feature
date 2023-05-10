
Feature: Verify demio sigh up for a free trial feature
  As a User i want to check Free trial sign up and simulated session feature of demio web app

  Scenario Outline: Check user is able to click on "sign up for free trial" link
    Given User should redirect on <url> login page
    When User click on "sign up for free trial" link
    Then User should redirect on "Try Demio For Free" page
    Examples:
      | userA | url                |
      | admin | productionLoginUrl |

  Scenario Outline: Check user is able to Build demio account in simple steps
    Given User should signup with a new trial account using <fullName> WorkEmail <workEmail> password <password> and company name <companyName> and country <country>
    Given User should able to build demio account with company name <companyName> and by selecting <selectAnOption> and <optionForAccess>
    Then User should be redirect to home page
    Examples:
      | fullName   | password   | companyName | eventName                            | workEmail | selectAnOption     | optionForAccess | country     |
      | Auto7 Test | AutoTestA7 | A1 company  | My First Webinar Experience on Demio | A         | Generate new leads | Google Search   | Afghanistan |

  Scenario: Verify if join room button is enabled for simulated event
    Then User shall see simulated event with "Join room" button
    When User clicks on "Join Room" button
    Then User shoud be able to run the Simulated session

  Scenario Outline: Verify if user joins as admins on clicking the join room button and also verify automatic messages , verify all insights/ summary data/ messages verification/ verify all people tab columns ,for simulated session
    When User clicks on "Join Room" button
    When User clicks on "Join Room" button under welcome screen for simulated Event
    Then User shall see Simulated video
    Then Start session button should be disabled
    When The simulated video ends
    Then User should be able to Run the Simulated session as admin by clicking on "Start Session" button
    Then User shall see Simulated video
    When The simulated video ends
    Then Automatic message should display <FirstMessage> in the chat section
    Then External link should display under chat section
    When Clicks on "Share Materials" button
    When Host clicks on added material <pdfName>
    Then Automatic message should display <messageForPDF> in the chat section
    Then Automatic message should display <secondMessageForPDF> in the chat section
    When Clicks on "Share Materials" button
    When Host clicks on added material <videoName>
    When Click on "Yes" button
    Then Automatic message should display <messageForVideo> in the chat section
    Then Automatic message should display <secondMessageForVideo> in the chat section
    When Click on chat resource plus button
    When User Click on added featured resource <featureTitle>
    When Clicked on "Share Now" button
    When User click On Chat option in room
    Then Automatic message should display <featureFirstMessage> in the chat section
    Then Automatic message should display <featureSecondMessage> in the chat section
    Then Number of clicks <featureClicks> should display for feature action resource
    When Click on chat resource plus button
    When User Click on added handout resource <handoutTitle>
    When Clicked on "Share Now" button
    Then Number of clicks for handout resource should display <handoutClicks>
    When User click On Chat option in room
    Then Automatic message should display <handoutMessage> in the chat section
    When Click on chat resource plus button
    When User Click on added poll resource <pollTitle>
    When Clicked on "Share Now" button
    Then Number of answers should display for poll resources <pollAnswers>
    When User click On Chat option in room
    Then Automatic message should display <pollMessage> in the chat section
    When User switch to "Manage event" window
    When User clicks on simulated event
    When In other tab attendee <regEmail> joins the session
    Then Move to Manage event window
    When Move to meeting room window
    When User Clicks on end the session
    Then Move to Manage event window
    When Go to Event Summary page
    When User clicks on past event option
    Then Message count should displaying under summary tab <messageCount>
    When User clicks on "Activity" tab on manage event page
    Then User should be redirected to "Activity>>Insight tab"
    Then It should displayed correct number of "Regsitration" <regCount>, "Attended" <attendedCount> and "Missed" <missedCount> on "Insights Page"
    Then Graph should be loaded correctly for "Registrants" and "Attendees" on "Insights Page"
    Then User should able to download all resource export CSV buttons
    Then Number of clicks for feature action <featureClicks> for handouts <handoutClicks> and for poll <pollAnswers> should displaying under insights
    When User clicks on "People" tab
    Then User should able to download export CSV file
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
    When User click on "Message" tab
    Then Message text should displaying under message tab <firstMessage>
    Examples:
      | pdfName                      | firstMessage | videoName               | FirstMessage                             | messageForPDF                                   | secondMessageForPDF                      | messageForVideo                                     | secondMessageForVideo                                     | featureTitle                                                                       | handoutTitle        | pollTitle                              | featureFirstMessage                           | featureSecondMessage                             | handoutMessage | pollMessage               | featureClicks | handoutClicks | pollAnswers | regCount | attendedCount | missedCount | messageCount |
      | Some Slides for You to Share | Hello        | A Video for You to Play | Hey everyone! Dave here from California. | Beautiful slides! They’re perfectly clear, too. | The presentation we’ve been waiting for! | Brb grabbing some popcorn. The video has started :) | Wow! It’s so cool that the video plays right in the room. | Did you know we have a free Demio university to help you learn all about webinars? | Webinar Recipe Book | What do you love the most about Demio? | Just clicked... checking out the website now. | Such a great way to share offers in the webinar. | Thank you!     | Just submitted my answer! | 9             | 8             | 12          | 56       | 15            | 41          | 19           |


  Scenario: User should'nt be able to add more session to the simulated event
    When Go to Event Summary page
    Then User refresh screen
    Then User shall see disabled "Schedule Session" button
    Then User should not be able to add Session in simulated event
