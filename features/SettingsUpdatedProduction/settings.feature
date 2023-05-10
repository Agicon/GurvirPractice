Feature: Verify demio settings feature
  As a User i want to check Settings feature of demio web app

  Background:
    Given User close extra tabs

  Scenario Outline: Redirect on home page
    Given User should redirect on <loginUrl> Home page
    Given User login with <userA>
    Examples:
      | loginUrl           | userA |
      | productionLoginUrl | admin |


  #DONE
  Scenario Outline: Check Availability and redirection of options under settings
    When User click on profile dropdown and select settings options
    Then User shall see <options> under settings
    When User click on "Profile" tab
    Then "Profile" page should be open
    When User click on "General" tab
    Then "General" page should be open
    When User click on "Branding" tab
    Then "Branding" page should be open
    When User click on "Billing" tab
    Then "Billing" page should be open
    When User click on "API" tab
    Then "API" page should be open
    When User click on "Integrations" tab
    Then "Integrations" page should be open
    When User click on "Team" tab
    Then "Team" page should be open
    When User click on "Email settings" tab
    Then "Email settings" page should be open
    Examples:
      | options        |
      | Profile        |
      | General        |
      | Branding       |
      | Billing        |
      | API            |
      | Integrations   |
      | Team           |
      | Email settings |


  #-----------------------Profile--------------------------#
  Scenario Outline: Check availbility of fields/buttons at user "User Profile" settings
    Given User should be on Settings Page
    When User click on "Profile" tab
    Then User shall see fields as <inputFields>
    Examples:
      | inputFields            |
      | First Name             |
      | Last Name              |
      | Email                  |
      | Save Settings Button   |
      | Change Password Button |


  Scenario Outline: Check functionality of user profile input fields
    Given User should be on Settings Page
    When User click on "Profile" tab
    Then User Should be able to add data <data> in <inputFields>
    When User Clicks on "Save Settings" Button
    Then User able to see Save OR Changed <data> in <inputFields>
    Examples:
      | inputFields | data                     |
      | First Name  | Automation               |
      | Last Name   | QA                       |
      | Email       | Automatedtests@banzai.io |

  Scenario Outline: Check the fuctionality of upload user profile
    Given User should be on Settings Page
    When User click on "Profile" tab
    Then Delete image if already added
    Then User should be able to "Upload File" <image>
    Then User is able to upload profile picture
    Examples:
      | image      |
      | tweety.jpg |


  Scenario: Remove uploaded user profile image
    Given User should be on Settings Page
    When User click on "Profile" tab
    Then Delete image if already added


  # Scenario Outline: Check functionality of  "Change Password" button and input fields
  #     Given User should be on Settings Page
  #     When User click on "Profile" tab
  #     When User Clicks on "Change Password" Button
  #     Then User shall see "Change Your Password" pop-up
  #     Then User shall see "Current Password" and "New Password" field
  #     # Then User shall see "See Password" Checkbox
  #     # Then User should be able to mark OR unmark see password checkbox
  #     Then User shall see "UPDATE PASSWORD" Button
  #     Then User should be able to enter current password as <CurrentPassword> and new password as <NewPassword>
  #     Then User should be able to update the password by clicking on "UPDATE PASSWORD" Button
  #     Examples:
  #         | CurrentPassword | NewPassword |
  #         | Testing12!      | Testing12!  |


  #----------------------------------General------------------------------------#
  Scenario Outline: Check availability fields and buttons at "General" settings
    Given User should be on Settings Page
    When User clicks on "General" Tab
    Then User shall see <options> at general tab
    Examples:
      | options              |
      | Company Name Field   |
      | Save Button          |
      | TimeZone Dropdown    |
      | Language Dropdown    |
      | GDPR Active Button   |
      | GDPR Disabled Button |


  Scenario Outline: verify the functionality of gdpr settings options
    Given User should be on Settings Page
    When User clicks on "General" Tab
    When User select active gdpr option
    When On general settings page user click on save button
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User Clicks on "Customize" option
    Then User should be on Event Customization page
    When User Clicks on "Registration" option
    When User clicks on "Edit Form Fields" button
    Then GDPR default field should displaying on edit form fields screen
    Given User should be on Settings Page
    When User clicks on "General" Tab
    When User select disabled gdpr option
    When On general settings page user click on save button
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User Clicks on "Customize" option
    Then User should be on Event Customization page
    When User Clicks on "Registration" option
    When User clicks on "Edit Form Fields" button
    Then default GDPR field should not displaying on edit form fields screen
    Examples:
      | eventName |
      | A         |

  Scenario Outline: Check the functionality of company name field in general tab
    Given User should be on Settings Page
    When User clicks on "General" Tab
    Then User Should be able to edit data <data> in <inputFields>
    Then User should be able to save the <data> in <inputFields> by clicking on "Save" button
    Given Created event <eventName> should be searched and selected from event list
    When User select start time and schedule new session <futureTime>
    When Click on "Join Room" button under event tab
    Then It should redirected to "Welcome," page <pageTitle>
    Then User should ble to update company name <data>
    Examples:
      | eventName | inputFields        | data    | futureTime | pageTitle |
      | A         | Company Name Field | Test QA | 11:00 pm   | Welcome,  |

  Scenario Outline: Check the functionality of company name field in general tab
    Given User should be on Settings Page
    When User clicks on "General" Tab
    When General settings page user click on timezone field
    Then Under settings user should be able to select the "Event Timezone" <timeZone> from the dropdown
    When In General settings page user click on language field
    Then Under settings user should be able to select the "Event Language" <language> from the dropdown
    When On general settings page user click on save button
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    Then On scheduled event time tag is displaying as <timeTag>
    When User clicks on dropdown along side JOIN ROOM button
    When User clicks on "View registration page" option
    Then User should be on Registration page
    Then On registration page email label is displaying as <emailLabelInLanguage>
    Then Move to Manage event window
    Examples:
      | futureTime | eventName | timeTag | timeZone                  | actTimeZone               | actLanguage | emailLabelInLanguage | language | eventName |
      | 11:00 pm   | A         | IST     | (GMT+05:30) Asia/Calcutta | (GMT+05:30) Asia/Calcutta | English     | Sähköpostiosoite     | Finnish  | N         |

  Scenario Outline: Check that user is able to change language and time to normal
    Given User should be on Settings Page
    When User clicks on "General" Tab
    When General settings page user click on timezone field
    Then Under settings user should be able to select the "Event Timezone" <actTimeZone> from the dropdown
    When In General settings page user click on language field
    Then Under settings user should be able to select the "Event Language" <actLanguage> from the dropdown
    When On general settings page user click on save button
    Examples:
      | futureTime | eventName | actTimeZone               | actLanguage |
      | 11:00 pm   | A         | (GMT+05:30) Asia/Calcutta | English     |



  #       #-------------------------------------Branding--------------------------------------#
  #       Scenario Outline: Check availability fields and buttons at "Branding" settings
  #           Given User should be on Settings Page
  #           When User clicks on "Branding" Tab
  #           Then User shall see the options as <option> at branding page

  #           Examples:
  #               | option                                                         |
  #               | Color Scheme field                                             |
  #               # | Upload Logo button                                             |
  #               | Enable disbaled  switch  of Reg, Thank You and Recording Pages |
  #               | Enable disbaled  switch  of Confirmation and Reminder Emails   |
  #               | Enable disbaled  switch  of Webinar Room                       |

  Scenario Outline: Check the functionality of uploading company logo and icon
    Given User should be on Settings Page
    When User clicks on "Branding" Tab
    Then Delete company logo if already added
    Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
    When User clicks logo upload option button
    Then Download and delete image or media options should displaying on screen
    When User clicks on Delete image or media option
    Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
    Then User delete company icon if already added
    Then User Should be able to upload icon <icon> by clicking on "Upload icon" option
    When User click on icon upload option button
    Then Download and delete image or media options should displaying on screen
    When User clicks on Delete image or media option
    Then User Should be able to upload icon <icon> by clicking on "Upload icon" option
    Examples:
      | image       | icon      |
      | TestOne.jpg | Logo2.jpg |

  Scenario Outline: Validate the functionality of Enable pages,"Confirmation and Reminder Emails:" and Webinar Room:  button under branding tab
    Given User should be on Settings Page
    When User clicks on "Branding" Tab
    When User Enable Pages button <pages>
    When User click on confirmation and Reminder Emails button <confirmation and Reminder Emails>
    When User click on Webinar Room button <webinar Room>
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start time and schedule new session <futureTime>
    When Material <name> must be added in event <slide>
    Then User should able to enable uploaded logo on registration <regEmail> ,Thank you and Recording screen
    Given Created event <eventName> should be searched and selected from event list
    When Select start session time <futureTime> and schedule more than one session
    Then User Should able to see uploaded logo on email notification screen
    Given Created event <eventName> should be searched and selected from event list
    Then User Should able to see uploaded logo on Webinar room screen
    Examples:
      | pages  | eventName | futureTime | regEmail | name | slide        | confirmation and Reminder Emails | webinar Room |
      | Enable | F         | 10:30 pm   | P        | pdf  | pdf-test.pdf | Enable                           | Enable       |



  Scenario Outline: Validate the functionality of Disable pages,"Confirmation and Reminder Emails:" and Webinar Room: button under branding tab
    Given User should be on Settings Page
    When User clicks on "Branding" Tab
    When User Enable Pages button <pages>
    When User click on confirmation and Reminder Emails button <confirmation and Reminder Emails>
    When User click on Webinar Room button <webinar Room>
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start time and schedule new session <futureTime>
    When Material <name> must be added in event <slide>
    Then User should be able to see demio logo on registration <regEmail> ,Thank you and Recording screen
    Given Created event <eventName> should be searched and selected from event list
    When Select start session time <futureTime> and schedule more than one session
    Then User Should able to see demio logo on email notification screen
    Given Created event <eventName> should be searched and selected from event list
    Then User Should able to see demio logo on Webinar room screen
    Examples:
      | pages   | eventName | futureTime | regEmail | name | slide        | confirmation and Reminder Emails | webinar Room |
      | Disable | F         | 10:30 pm   | P        | pdf  | pdf-test.pdf | Disable                          | Disable      |



  # Scenario Outline: Check that user is able to add and remove new custom domain
  #   Given User should be on Settings Page
  #   When User clicks on "Branding" Tab
  #   When User click on "Add custom domain" button
  #   Then User should redirect on <title> screen
  #   When User fill new custom domain field <domain> and click on add button
  #   Then verify that user is able to add new domain <domain>
  #   When User Clicks on dropdown alongside Domain names
  #   When User Clicks on "Remove Domain" option
  #   Then User Shall see "Remove Domain" Confirmation Pop up
  #   Then User Shall see "Remove Domain" Confirmation Pop up
  #   When User Clicks on "YES,REMOVE" button
  #   Then User should able to remove added custom domain

  #   Examples:
  #     | title              | domain      |
  #     | Add Custom Domain | testing.com |

  Scenario Outline:Availability and functionality of fields/buttons at "Branding" settings
    Given User should be on Settings Page
    When User clicks on "Branding" Tab
    Then User Should able to edit <color scheme>
    # Then User Should be able to upload logo <logo> by clicking on "Upload Logo" option
    Then User should be able to Enable OR Disbaled "Pages Reg,Thank you, Recording:" <Pages> ,"Confirmation and Reminder Emails:" <Confirmation and Reminder Emails>  and  "Webinar Room:" <Webinar Room>

    Examples:
      | logo      | color scheme | Pages   | Confirmation and Reminder Emails | Webinar Room |
      | Logo2.jpg | #6B27A8      | Enable  | Enable                           | Enable       |
      | Logo2.jpg | #6B27A8      | Disable | Disable                          | Disable      |

  Scenario Outline: verify the availability of custome domain name in join room URL
    Given User select custom domain as default domain
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start time and schedule new session <futureTime>
    When Click on "Join Room" button under event tab
    Then It should redirected to "Welcome," page <pageTitle>
    Then Domain name should incuded in url
    # Then Change default domain name
    Examples:
      | eventName | pageTitle | futureTime |
      | C         | Welcome,  | 11:30 pm   |

  Scenario Outline: Verify the functionality of upload profile after selecting custom domain
    Given User select custom domain as default domain
    When User click on "Profile" tab
    Then Delete image if already added
    Then User should be able to "Upload File" <image>
    Then User is able to upload profile picture
    When User click on "Profile" tab
    Then Delete image if already added
    Examples:
      | image      |
      | tweety.jpg |

  Scenario Outline: Check the functionality of uploading company logo and icon with custom domain
    Given User select custom domain as default domain
    Then Delete company logo if already added
    Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
    When User clicks logo upload option button
    Then Download and delete image or media options should displaying on screen
    When User clicks on Delete image or media option
    Then User Should be able to upload image <image> of the logo by clicking on "Upload Image" option
    Then User delete company icon if already added
    Then User Should be able to upload icon <icon> by clicking on "Upload icon" option
    When User click on icon upload option button
    Then Download and delete image or media options should displaying on screen
    When User clicks on Delete image or media option
    Then User Should be able to upload icon <icon> by clicking on "Upload icon" option
    Examples:
      | image       | icon      |
      | TestOne.jpg | Logo2.jpg |


  Scenario Outline: Check for template Background image with custom domain
    Given User select custom domain as default domain
    Given Created event <eventName> should be searched and selected from event list
    When User Clicks on "Customize" option
    Then User should be on Event Customization page
    When User Clicks on "Registration" option
    Then By default "Customize Registration" should selected
    When User Clicks on "Customize" button
    When User Clicks on "Template dropdown"
    When User clicks on template menu button
    Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
    Then Delete image if already added
    Then User should be able to "Upload File" <image>
    When User clicks upload option button
    Then Download and delete image or media options should displaying on screen
    When User clicks on Delete image or media option
    Then User shall see "Upload image" option
    Then User should be able to "Upload File" <image>
    When User select opcity <opcity>
    Then Uploaded background image and selected opcity is displaying on registration page after click on save and close button
    Then Move to Manage event window
    Then User click on done button
    Given Branding image <image> must be uploaded
    When User clicks upload option button
    Then Uploaded branding image should displayed on registration screen
    Given Featured presenter <presenterName> and <presenterTitle> and <presenterWebsite> and <presenterBio> with <photo> must be added
    When Clicks On "Add Presenter" button
    When For registration user click on add presenter button
    Then Featured presenter <presenterName> and <presenterTitle> and <presenterWebsite> and <presenterBio> should diaplyed on registration screen
    Examples:
      | eventName | option           | image      | opcity | photo    | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage |
      | C         | Background Image | tweety.jpg | High   | doll.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  |

  Scenario Outline: Check image upload for Social image with custom domain
    Given User select custom domain as default domain
    Given Created event <eventName> should be searched and selected from event list
    When User Clicks on "Customize" option
    Then User should be on Event Customization page
    When User Clicks on "Registration" option
    Then By default "Customize Registration" should selected
    When User Clicks on "Customize" button
    When User clicks on "Social dropdown"
    When User clicks on "Edit Settings" button
    Then Delete image if already added
    Then User should be able to "Upload File" <socialImage>
    # Then User should be able to Upload Social image <socialImage> by clicking at "Upload Image" option
    Then User shall see the uploaded image in the "Upload Image" box
    Then User should be able to Enter values in "Title" <title> and "Description" <settingDescription> fields
    When Clicks on "SAVE OPEN GRAPH" button
    When User clicks on "Edit Settings" button
    Then User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
    Examples:
      | eventName | option           | image      | opcity | photo    | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage |
      | C         | Background Image | tweety.jpg | High   | doll.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  |



  Scenario Outline:  Check image upload for Resources and materials with custom domain
    Given User select custom domain as default domain
    Given Created event <eventName> should be searched and selected from event list
    When User Clicks on "Customize" option
    Then User should be on Event Customization page
    When User Clicks on "Room" option
    Then User shall see "Resources", "Presentation Materials" and "Settings" option
    Then By default "Resources" option should be selected
    Then for "Resources" option "ADD A RESOURCE" button should display
    When User Clicks on "ADD A RESOURCE" button
    Then User shall see "Type of Resource" dropdown
    When User clicks on "Type of Resource" dropdown
    When User selects "Handout" option from dropdown list
    Then for "Handout" User shall see "Handout Title","Upload File" fields
    Then User shall see "ADD RESOURCE" button
    Then User should be able to Enter values in the "Handout Title" <handoutTitle> field
    Then User should be able to "Upload File" <image>
    When User Clicks on "Add Resource" button
    Then Added resource should displayed under customize tab <handoutTitle>
    When User Clicks on "ADD A RESOURCE" button
    Then User shall see "Type of Resource" dropdown
    When User clicks on "Type of Resource" dropdown
    When User selects "Featured Action" option from dropdown list
    Then For "Featured Action" User shall see following fields "Title","Link URl","Button Text"
    Then User shall see "Upload image" option
    Then User shall see "ADD RESOURCE" button
    Then User should be able to Enter values in the "Title" <title> ,"Link URl" <link>,"Button Text" <buttonText> fields
    Then User should be able to "Upload File" <image>
    When User Clicks on "Add Resource" button
    Then Added resource should displayed under customize tab <title>
    When User Clicks on "Room" option
    Given Created event <eventName> should be searched and selected from event list
    Then Slide Material <name> must be added in event <slide>
    Then video <videoName> material <video> must be added
    Examples:
      | eventName | slide      | name | video          | videoName | handoutTitle | image      | title           | link                           | buttonText | image       |
      | C         | sample.pdf | pdf  | shareVideo.mp4 | NewVideo  | handoutTest  | tweety.jpg | Download chrome | https://www.google.com/chrome/ | OpenURL    | testOne.jpg |


  Scenario Outline: Check Custom background image upload for Visual effect and image upload when user is on stage
    Given User select custom domain as default domain
    Given Created event <eventName> should be searched and selected from event list
    # When User select start time and schedule new session <futureTime>
    Given Host Must be in Meeting Room
    When Click on "Setting" option
    Then Setting Pop up should displayed
    When User enable "Visual effects" toggle button and select <dropdownOption> from drop down list
    When User delete already added visual effect image
    When User upload visual effect image data <image>
    When User click on "Apply filter changes" button
    When Clicks on "Go on stage" button
    When User enable "Visual effects" toggle button and select <dropdownOption> from drop down list
    When User delete already added visual effect image
    When User upload visual effect image data <image>
    Examples:
      | eventName | futureTime | dropdownOption                | image      |
      | C         | 11:30 pm   | Upload your custom background | tweety.jpg |


    Scenario Outline: Check that user is able to swap video with custom domain
      Given User select custom domain as default domain
       Given new "Automated" Event <eventName> must be craeted using video <videoName>
   When User clicks upload option button
      Then User shall see "Swap Video" and "Download Media" option
      When User clicks on "Swap Video"
      Then The user shall see "Swap Video" pop-up <popupTitle>
      Then The user should be able to upload swap video <swapVideo>
      Then User shall see "NO,NEVER MIND" and "SWAP VIDEO" button
      When Clicks on "SWAP THE VIDEO" button
      Then The video should be swapped <swapVideo>
      Examples:
          | eventName | videoName       | popupTitle | swapVideo      |
          | D         | oneMinVideo.mp4 | Swap Video | demioVideo.mp4 |



  Scenario Outline: Verify that user is able to apply all custom settings on recording customize page
    Given User select custom domain as default domain
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User Clicks on "Schedule this Event" button
    Given User should be redirected to Schedule Upcoming session menu
    When User selects current or future date
    When User selects start time for automated events
    When User clicks on "Add to Event schedule" button
    When Material <name> must be added in event <slide>
    When Admin add handout <handoutTitle> and <image> for event
    Then Admin starts the session and share added resource
    When Registered user <regEmail> must attends the session and send message <message>
    When Admin ends the session
    When User clicks on past event option
    When Click on dropdown in fron of session
    When Click on "Share Replay" option
    Then Recording page popup should displayed
    When User clicks on "Edit page" button
    When Switch to iframe on recording customize screen
    When User Clicks on "Template dropdown"
    When User clicks on template menu button
    Then User Should be able to change the template view from the options "Accent","Gradient","Background Image" <option>
    Then Delete image if already added
    Then User should be able to "Upload File" <image>
    When User clicks upload option button
    Then Download and delete image or media options should displaying on screen
    When User Clicks on "Branding" dropdown
    Then User deleted already added branding logo image
    Then User Should be able to upload image of the logo by clicking on "Upload Image" option for automated event <image>
    Then User shall see the Uploaded Image in the Upload Image box.
    When User clicks on "Elements" dropdown
    When User turns on "Featured Presenters" button
    When Switch to iframe on recording customize screen
    Then User should be able to Enter "Presenter Name" <presenterName>,"Presenter Title" <presenterTitle>,"Presenter Website" <presenterWebsite>,"Presenter Bio" <presenterBio>
    Then User should be able to Upload the Presenter Photo <photo>
    When Clicks On "Add Presenter" button
    Then User shall see the Added Presenter with name <presenterName>, title <presenterTitle>, Website <presenterWebsite> and bio <presenterBio> at the Bottom of the preview screen below description
    
    Examples:
      | eventName | handoutTitle | name     | slide      | image      | updatedColor | option           | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage | ctaTitle | buttonText | buttonUrl             |
      | A         | New handout  | New test | sample.pdf | tweety.jpg | #6b27a8      | Background Image | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  | New CTA  | CTA Button | https://webdriver.io/ |



  Scenario Outline: Verify that user is able to apply all custom settings on recording customize page with custom domain
    Given User select custom domain as default domain
    Given Created event <eventName> should be searched and selected from event list
    When User clicks on past event option
    When Click on dropdown in fron of session
    When Click on "Share Replay" option
    Then Recording page popup should displayed
    When User clicks on "Edit page" button
     When Switch to iframe on recording customize screen
      When User clicks on "Social dropdown"
    When User clicks on "Edit Settings" button
    Then Delete image if already added
    Then User should be able to "Upload File" <socialImage>
    Then User shall see the uploaded image in the "Upload Image" box
    Then User should be able to Enter values in "Title" <title> and "Description" <settingDescription> fields
    When Clicks on "SAVE OPEN GRAPH" button
    When User clicks on "Edit Settings" button
    Then User shall see the changes image,title <title> and Description <settingDescription> at open graph pop up screen
    Then User Save added settings and verify that added logo and template should display on recording screen
    Then Move to Manage event window
    Examples:
      | eventName | handoutTitle | name     | slide      | image      | updatedColor | option           | subheadline     | videoLink                                   | description     | photo      | presenterName | presenterTitle        | presenterWebsite                   | presenterBio | settingDescription   | title        | socialImage | ctaTitle | buttonText | buttonUrl             |
      | A         | New handout  | New test | sample.pdf | tweety.jpg | #6b27a8      | Background Image | new subheadline | https://www.youtube.com/watch?v=EngW7tLk6R8 | new description | tweety.jpg | New Presenter | presenter for testing | my.staging.demio.com/manage/event/ | Tester Bio   | settings description | social title | tweety.jpg  | New CTA  | CTA Button | https://webdriver.io/ |

  Scenario: Change the default custom domain value
    Given User should be on Settings Page
    When User clicks on "Branding" Tab
    Then Change default domain name


#----------------------------------------Billing-------------------------------------#
Scenario Outline: Availability and functionality of fields/buttons at "Billings" settings also verify that zip code is mandatory for united states county
  Given User should be on Settings Page
  When User click on "Billing" tab
  Then User shall see "Plans and Billings" information
  Then User shall see "Your Plan" option with details "Package Level","Price","Room Size" and "Adjust plan" button
  When User click on "Edit address" option
  When User select country <countryName1> in billing address form
  Then After clicking on zip code field and outside zipcode field error validation <validation> should display on screen
  When User update billing name <billingName> country <countryName> address line one <address1> address line two <address2> city <city> postal code <postalCode> state <state>
  Then User is able to save updated billing address information <countryName> and <state>
  Examples:
    | billingName | validation                     | countryName                          | address1      | address2       | city     | postalCode | state        | countryName1  |
    | newBilling  | Please enter a valid zip code. | United States Minor Outlying Islands | First address | Second address | new york | 232343     | Baker Island | United States |

# #-----------------------------------------API----------------------------------------#

Scenario: Availability and functionality of fields/buttons at "API" settings
  Given User should be on Settings Page
  When User clicks on "API" Tab
  Then User shall see "API KEY" field
  Then User shall see "API SECRET" field
  Then User shall see "Regenerate" button
  Then User should be able to "Regenerate"  "API SECRET" by clicking on "Regenerate" button


# #-------------------------------------Team-------------------------------------------#

#-------------------------------------Team-------------------------------------------#

Scenario Outline: Availability and functionality of fields/buttons at "Team" settings , user is able to add new member and change roles
  Given User should be on Settings Page
  When User click on "Team" tab
  Then User shall see list of Members in the team with their details
  Then User shall see "ADD TEAM MEMBER" Button
  Then User shall see a dropdown along side team member details to Edit or Remove team member
  Then User shall see "Search" field to search team member
  When User Clicks on "ADD TEAM MEMBER" Button
  Then User shall see "Add Team Member" pop-up
  Then User should be able to enter <email> of new team Member in "Email" field
  Then User is able to select new team member role from dropdown list <option>
  When User Clicks on "Send Invite" button
  When User search added member in search field <email>
  Then User shall see Team Members with credentials <email> matching the entered input in Search field
  Then New team Member should be invited and Should display in team member list with details displaying as <status>
  Then New team Member should be invited and Should display in team member list with details displaying as <option>
  Then User is able to edit new team member role <option1> from dropdown list
  Then New team Member should be invited and Should display in team member list with details displaying as <option1>
  Then User is able to edit new team member role <option2> from dropdown list
  Then New team Member should be invited and Should display in team member list with details displaying as <option2>

  Examples:
    | email                      | status  | option | message      | option1 | option2 |
    | tester.desk4+M11@gmail.com | Pending | Owner  | Invite sent. | Admin   | Member  |



Scenario Outline: Check remove user functionality
  Given User should be on Settings Page
  When User click on "Team" tab
  When User search added member in search field <email>
  Then User shall see Team Members with credentials <email> matching the entered input in Search field
  Then User is able to see delete option
  When User click on delete button and yes remove button
  Then the team Member should be removed and should not display in team member list
  Examples:
    | email                      | status  |
    | tester.desk4+M11@gmail.com | Pending |


Scenario Outline: Verify the functionality of "Host ability" under team tab
  Given User should be on Settings Page
  When User click on "Team" tab
  When User Unchecked added member "Host ability" checkbox
  Given End if any session running and new "Standard" Event must be craeted <eventName>
  When User Clicks on "Customize" option
  Then User should be on Event Customization page
  When User Clicks on "Event Admins" option
  Then User is not able to select a team member <member> as a host for an event who doest not have host ability
  Given User should be on Settings Page
  When User click on "Team" tab
  Then User enable "Host ability" for member
  Given Created event <eventName> should be searched and selected from event list
  When User Clicks on "Customize" option
  Then User should be on Event Customization page
  When User Clicks on "Event Admins" option
  Then Host must be added in event admin option with <role2> and <member>
  Examples:
    | eventName | member    | role2 |
    | O         | Subuser 1 | Host  |

Scenario: User change host ability
  Given User should be on Settings Page
  When User click on "Team" tab
  Then User enable "Host ability" for member


#-----------------------------------Email settings-----------------------------------#
Scenario Outline: Availability of fields/buttons at "Email Settings" settings
  Given User should be on Settings Page
  When User click on "Email settings" tab
  Then User shall see following options as <options>
  Examples:
    | options                                |
    | Email Settings Options                 |
    | From Name  Input Field                 |
    | Contact & Forwarding Email input Field |
    | Custom Signature  input Field          |
    | Save Settings Button                   |

