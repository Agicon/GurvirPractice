Feature: Verify event page features
    As a User i want to check on-demand event feature

    Background:
        Given User close extra tabs

    #Done
    Scenario Outline: User login to serven
        Given User should redirect on <url> login page
        Given User login with <userA>
        Examples:
            | userA | url             |
            | admin | stagingLoginUrl |

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
        Then Attendees Graph should be loaded correctly on "Insights Page"
        When User clicks on "People" tab
        Then For ondemand Start and end join time of attendee should displaying under people tab
        Examples:
            | userA | eventName | videoName       | regEmail | regCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | buttonText | image       | message                    | member    | role      | message       | featureUrl           | missedCount | attendeeCount |
            | admin | L         | oneMinVideo.mp4 | K        | 1        | 0h 0m 09s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | CLICK HERE | TestOne.jpg | Session has been scheduled | Subuser 1 | Moderator | Automatedtest | https://feature.com/ | 1           | 1             |


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
        Then The Handout should not launch automatically before the set time
        Then The FeatureAction links should not launch automatically before the set time
        Then The Poll should not launch automatically before the set time
        Then the Handout shall launch automatically at the set time
        Then the FeatureAction links shall launch automatically at the set time
        Then the Poll shall launch automatically at the set time
        Then Session resume if user <regEmail> left for few seconds and rejoin again
        Then For automated event attendees should redirect on added url <url>
        Examples:
            | userA | eventName | videoName      | regEmail | userCount | launchTime | handoutTitle | image       | pollQuestion                        | optionOne | optionTwo | featureTitle | url                  | buttonText | image       |
            | admin | K         | shareVideo.mp4 | K        | 1         | 0h 0m 30s  | HandoutTest  | TestOne.jpg | Your favourite programming language | Java      | Python    | DemioLinks   | https://feature.com/ | Click here | TestOne.jpg |
