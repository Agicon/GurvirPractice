Feature: Verify event page features
    As a User i want to check on-demand event feature

    Background:
        Given User should be on Home page


    Scenario Outline: Check that User is able to redirects to the room and session starts as soon as user click on Join room button
        Given User should be on login page
        Given User login with <userA>
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
        Examples:
            | userA | eventName | videoName  | regEmail |
            | admin | C         | sample.mp4 | B        |


    Scenario Outline: Check if it displays correct number of Registered,Attendee ,messages and insights graph on the On demand section page
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given <userCount> Users must Attended and sent <message> for On-demand session with email <regEmail>
        When Go to Event Summary page
        Then It should displayed correct number <userCount> of "Registered" on the On demand section page
        Then It should displayed correct number <userCount> of "Attended" on the On demand section page
        Then It should displayed correct number Attended and Messages <userCount> on the On demand section page
        When Click on "Activity" option
        Then User sould redirected to "Activity" section of Event
        When Go to Insigts area
        Then It should displayed correct insights for on demand session including the Registered Attended <userCount>
        Examples:
            | userA | eventName | videoName      | regEmail | userCount |message|
            | admin | A         | demioVideo.mp4 | E        | 5         |Hello|


    Scenario Outline: Verify if the Handout,polls and feature actions are launched at the correct time as set in room
        Given new "Automated" Event <eventName> must be craeted using video <videoName>
        Given Handout should be created with title <handoutTitle> and image <image> and set launchTime <launchTime>
        Given For onDemand event Polls should be created with question <pollQuestion> and optionOne <optionOne> optionTwo <optionTwo> and set launchTime <launchTime>
        Given OnDemand event Feature should be created with Featured title <featureTitle> and featureUrl <featureUrl> buttonText <buttonText> image <image> with <launchTime>
        When Go to Event Summary page
        When Click on "On-Demand" option
        When Enable "On-Demand" option
        When User Clicks on "Share" button
        When User Register for On-demand session with email <regEmail>
        Then As soon as user registered for On-demand session user should redirected to "Join Room" button
        When Click on "Join Room" button after registered
        Then On-demand session should started as soon as user click on "Join Room" button
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then the Poll shall launch automatically at the set time
        Examples:
            | userA | eventName | videoName      | regEmail | userCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | featureUrl         | buttonText | image       |
            | admin | K         | demioVideo.mp4 | K        | 1         | 0h 0m 15s  | HandoutTest  | testOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | https://demio.com/ | Click here | testOne.jpg |

