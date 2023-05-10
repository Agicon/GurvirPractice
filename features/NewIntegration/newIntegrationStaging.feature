Feature: Verify New integration page features
  As a User i want to check integration feature
  Background:
    Given User close extra tabs

    
  Scenario Outline: Verify the functionality of "Custom code" on all pages
    Given User should redirect on <url> login page
    Given User login with <userA>
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User Clicks on "Customize" option
    Given User must be at customize Integrations sceeen
    When User click on custom code settings link
    Then Click on "Add New" button
    Then Click on "Add New" button
    Then Click on "Add New" button
    Then User add all custom codes using code <customCodeValue> for fields <field1> field <field2> field <field3> field <field4>
    Then User click on save integration button on custom code page
    When Go to Event Summary page
    When User Clicks on "Schedule this Event" button
    Given User should be redirected to Schedule Upcoming session menu
    When User selects current or future date
    When User selects start time for automated events
    When User clicks on "Add to Event schedule" button
    When User clicks on dropdown along side JOIN ROOM button
    When User clicks on "View registration page" option
    Then User should be on Registration page
    Then Added custom datad <customCodeValue> should display on screen
    When Add data in "Registration form" and click registration button <regEmail>
    Then Added custom datad <customCodeValue> should display on screen
    Then Move to Manage event window
    When Click on "Join Room" button under event tab
    Then It should redirected to "Welcome," page <pageTitle>
    When User clicks on "Join Room" button under welcome screen
    Then User should redirected to Meeting Room
    Then Added custom datad <customCodeValue> should display on screen
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
    When Click on dropdown in fron of session
    When Click on "Share Replay" option
    Then Recording page popup should displayed
    When User clicks on arrow on recording page popup
     Then Move to Manage event window
    When User switch to recording window
    Then Added custom datad <customCodeValue> should display on screen
    Examples:
      | url                | pageTitle | customCodeValue | userA | eventName | field1            | field2         | field3      | field4       | regEmail |
      | productionLoginUrl | Welcome,  | customCode      | admin | J         | Registration Page | Thank You Page | Replay Page | Webinar Room | A        |


  Scenario Outline: Check if user is able to enable "Ontraport" integration
    Given User should redirect on <url> login page
    Given User login with <userA>
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Ontraport integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    When User select no show option <noShowOption>
    When User select tag for no show <noShowTag>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Then Ontraport integration should be enabled
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For Ontraport register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration                 | url             | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag     | attendee | attendeeTag   | noShowOption | noShowTag      | lastNameOption | websiteOption | phoneOption  | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption    | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
      | admin | A         | 11:00 pm   | OfficeAutopilot / Ontraport | stagingLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Demio: Register | Add Tag  | Demio: Attend | Add Tag      | Demio: No Show | Last Note      | IP Address    | Office Phone | Title           | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Fax            | Address        | City           | Zip Code      | Referring Page | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     |

  Scenario Outline: Check if user is able to enable "Keap" integration
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Keap integration toggle button
    When User selects option from Choose <category> Category dropdown
    When User selects option from Choose <categoryTag> Tag dropdown
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    Then Select attendee sub tag <attendeeSubTag>
    When User select no show option <noShowOption>
    When User select tag for no show <noShowTag>
    Then Select no show sub tag <noShowSubTag>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Then User click on done button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Trigger logs and Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee | attendeeTag    | noShowOption | noShowTag      | lastNameOption | websiteOption | phoneOption   | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption    | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | category       | categoryTag | noShowSubTag | attendeeSubTag |
      | admin | B         | 11:00 pm   | Keap        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add Tag  | Qa Registrants | Add Tag      | Qa Registrants | Last Name      | Website       | Phone1 Number | Field 2         | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | QACOMPANY     | Field 3        | Drodown        | Checkbox       | Address Zip Code | Middle Name | Email 2        | Phone         | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | DemioJoinLink | Qa Registrants | Registered  | Missed       | Attendees      |

  Scenario Outline: Check if user is able to enable "Aweber" integration
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Aweber integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    When User select no show option <noShowOption>
    When User select option for no show <noShowTag>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For aweber integration Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then Under trigger logs for aweber <successTag> should display
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag       | attendee    | attendeeTag       | noShowOption | noShowTag       | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
      | admin | C         | 11:00 pm   | Aweber      | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | New Registrations | Add to List | Demio_Attendee_QA | Add to List  | Demio_Noshow_QA | Last N         | Website N     | Phone N     | Text field N    | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company N     | Text Area N    | Drop N         | Check N        | Zipcode N     | Refer N     | Facebook N     | Twitter N     | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | join          |

  Scenario Outline: Check if user is able to enable "Getresponse" integration
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Getresponse integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    When User select no show option <noShowOption>
    When User select option for no show <noShowTag>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For Getresponse integration trigger logs and Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag   | attendee        | attendeeTag   | noShowOption    | noShowTag    | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
      | admin | D         | 11:00 pm   | Getresponse | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Erin_Register | Add to Campaign | Attendee List | Add to Campaign | No show List | last_name      | newwebsite    | new_phone   | text_field      | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | company       | text_area      | dropdown       | checkbox       | zipcode       | comment     | newfacebook    | newtwitter    | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | ref           |


  Scenario Outline: Check if user is able to enable "Activecampaign" integration with add to contact list
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Activecampaign integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    When User select no show option <noShowOption>
    When User select option for no show <noShowTag>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration    | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag | attendee             | attendeeTag | noShowOption         | noShowTag    | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
      | admin | E         | 11:00 pm   | Activecampaign | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Registered  | Add to Contacts List | Qa Attendee | Add to Contacts List | No show List | Last Name      | Website       | Phone       | Text field      | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | text area      | dropdown       | checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | join link     |

  Scenario Outline: Check if user is able to enable "Activecampaign" integration with add tag
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Activecampaign integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    When User select no show option <noShowOption>
    When User select option for no show <noShowTag>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration    | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag | attendee | attendeeTag | noShowOption | noShowTag | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
      | admin | F         | 11:00 pm   | Activecampaign | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Registered  | Add Tag  | Attendee    | Add Tag      | No Show   | Last Name      | Website       | Phone       | Text field      | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | text area      | dropdown       | checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | join link     |

  Scenario Outline: Check if user is able to enable "Mailchimp" integration [Add to group]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Mailchimp integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <selectListOption> from select list options dropdown
    When User select group option <selectGroupOption> from dropdown
    When Select group interest option <selectGroupInterest> from dropdown
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    Then Select choose item from attendee dropdown <firstChooseItemAttendeeOption>
    Then Select second choose item from attendee dropdown <secondChooseItemAttendeeOption>
    When For attendee select group interest option <selectGroupInterestForAttendee> from dropdown
    When User select no show option <noShowOption>
    When User select tag for no show <noShowTag>
    Then For noshow Select choose item from dropdown <firstChooseItemNoShowOption>
    Then For noshow select second choose item from dropdown <SecondChooseItemNoShowOption>
    When For noshow select group interest option <selectGroupInterestForNoshow> from dropdown
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee    | attendeeTag         | noShowOption | noShowTag           | lastNameOption | websiteOption | phoneOption  | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | category       | categoryTag | selectListOption | selectGroupOption | selectGroupInterest | registerTag         | firstChooseItemAttendeeOption | secondChooseItemAttendeeOption | selectGroupInterestForAttendee | firstChooseItemNoShowOption | SecondChooseItemNoShowOption | selectGroupInterestForNoshow |
      | admin | H         | 11:00 pm   | Mailchimp   | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to List | Demio Test Audience | Add to List  | Demio Test Audience | Last Name      | Website       | Phone Number | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     | Qa Registrants | Registered  | Add to Group     | Pet?              | Dog                 | Demio Test Audience | Add to Group                  | Pet?                           | Cat                            | Add to Group                | Pet?                         | Fish                         |


  Scenario Outline: Check if user is able to enable "Mailchimp" integration [Add to static Segment ]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Mailchimp integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <selectListOption> from select list options dropdown
    When User select group option <selectGroupOption> from dropdown
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    Then Select choose item from attendee dropdown <firstChooseItemAttendeeOption>
    Then For mailchimp Select second choose item from attendee dropdown <secondChooseItemAttendeeOption>
    When User select no show option <noShowOption>
    When User select tag for no show <noShowTag>
    Then For noshow Select choose item from dropdown <firstChooseItemNoShowOption>
    Then For mailchimp static segment noshow select second choose item from dropdown <SecondChooseItemNoShowOption>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For mailchimp static segment integartion trigger logs and Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee    | attendeeTag         | noShowOption | noShowTag           | lastNameOption | websiteOption | phoneOption  | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | category       | categoryTag | selectListOption      | selectGroupOption | registerTag         | firstChooseItemAttendeeOption | secondChooseItemAttendeeOption | firstChooseItemNoShowOption | SecondChooseItemNoShowOption |
      | admin | I         | 11:00 pm   | Mailchimp   | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to List | Demio Test Audience | Add to List  | Demio Test Audience | Last Name      | Website       | Phone Number | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     | Qa Registrants | Registered  | Add to Static Segment | Erin-register     | Demio Test Audience | Add to Static Segment         | Attended                       | Add to Static Segment       | No show                      |

  Scenario Outline: Check if user is able to enable "Mailchimp" integration [Subscribe only to List]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Mailchimp integration toggle button
    When User selects option from Choose Tag dropdown <registerTag>
    When User selects option <selectListOption> from select list options dropdown
    When User selects option <attendee> from attendees dropdown
    When User selects tag <attendeeTag> from Tags dropdown
    Then Select choose item from attendee dropdown <firstChooseItemAttendeeOption>
    When User select no show option <noShowOption>
    When User select tag for no show <noShowTag>
    Then For noshow user select choose item from dropdown <firstChooseItemNoShowOption>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For mailchimp static segment integartion trigger logs and Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee    | attendeeTag         | noShowOption | noShowTag           | lastNameOption | websiteOption | phoneOption  | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | category       | categoryTag | selectListOption       | selectGroupOption | registerTag         | firstChooseItemAttendeeOption | secondChooseItemAttendeeOption | firstChooseItemNoShowOption | SecondChooseItemNoShowOption |
      | admin | J         | 11:00 pm   | Mailchimp   | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to List | Demio Test Audience | Add to List  | Demio Test Audience | Last Name      | Website       | Phone Number | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     | Qa Registrants | Registered  | Subscribe Only to List | Erin-register     | Demio Test Audience | Subscribe Only to List        | Attended                       | Subscribe Only to List      | No show                      |


  Scenario Outline: Check if user is able to enable "Drip" integration [Campaigns - Add tag ]
    Given Integrations <integration> must be enabled from settings
  Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <Campaign> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When User enters Tag Name field <tagName>
    When User select no show option <noShowOption>
    When For No show user enters Tag Name field <noShowTagName>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee | attendeeTag         | noShowOption | noShowTag           | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | Campaign | attendee | tagName | noShowTagName |
      | admin | K         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add Tag  | Demio Test Audience | Add Tag      | Demio Test Audience | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Campaigns         | Test     | Add Tag  | Joined  | Missed        |


  Scenario Outline: Check if user is able to enable "Drip" integration [Campaigns - Add to Campaign]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <Campaign> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When Select attendee tag <tagName> from dropdown
    When User select no show option <noShowOption>
    When Select noshow tag <noShowTagName> from dropdown
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying for drip integration under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee        | noShowOption    | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | Campaign | attendee | tagName | noShowTagName |
      | admin | L         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to Campaign | Add to Campaign | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Campaigns         | Test     | Add Tag  | 1click  | 1 click test  |


  Scenario Outline: Check if user is able to enable "Drip" integration [Campaigns - Start on a workflow ]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <Campaign> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When Select attendee tag <tagName> from dropdown
    When User select no show option <noShowOption>
    When Select noshow tag <noShowTagName> from dropdown
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For drip integartion Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then For drip integration success <successTag> should display under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee            | noShowOption        | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | Campaign | attendee | tagName | noShowTagName |
      | admin | M         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Start on a Workflow | Start on a Workflow | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Campaigns         | Test     | Add Tag  | 11      | 12            |

  Scenario Outline: Check if user is able to enable "Drip" integration [Campaigns - Record Event ]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <Campaign> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When User select no show option <noShowOption>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For drip integartion Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then For drip integration success <successTag> should display under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee            | noShowOption        | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | Campaign | attendee |
      | admin | N         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Start on a Workflow | Start on a Workflow | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Campaigns         | Test     | Add Tag  |

  Scenario Outline: Check if user is able to enable "Drip" integration [Workflows - Add tag ]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <workflow> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When User enters Tag Name field <tagName>
    When User select no show option <noShowOption>
    When For No show user enters Tag Name field <noShowTagName>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee | attendeeTag         | noShowOption | noShowTag           | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | workflow | attendee | tagName | noShowTagName |
      | admin | O         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add Tag  | Demio Test Audience | Add Tag      | Demio Test Audience | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Workflows         | Test     | Add Tag  | Joined  | Missed        |

  Scenario Outline: Check if user is able to enable "Drip" integration [Workflows - Add to Campaign]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <workflow> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When Select attendee tag <tagName> from dropdown
    When User select no show option <noShowOption>
    When Select noshow tag <noShowTagName> from dropdown
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then <successTag> should displaying for drip integration under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee        | noShowOption    | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | workflow | attendee | tagName | noShowTagName |
      | admin | P         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to Campaign | Add to Campaign | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Workflows         | Test     | Add Tag  | 1click  | 1 click test  |

  Scenario Outline: Check if user is able to enable "Drip" integration [Workflows - Start on a Workflow]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <workflow> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When Select attendee tag <tagName> from dropdown
    When User select no show option <noShowOption>
    When Select noshow tag <noShowTagName> from dropdown
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For drip integartion Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then For drip integration success <successTag> should display under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee            | noShowOption        | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | workflow | attendee | tagName | noShowTagName |
      | admin | Q         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Start on a Workflow | Start on a Workflow | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Workflows         | Test     | Add Tag  | 11      | 12            |

  Scenario Outline: Check if user is able to enable "Drip" integration [Workflows - Record Event  ]
    Given Integrations <integration> must be enabled from settings
    Given End if any session running and new "Standard" Event must be craeted <eventName>
    When User select start session time <futureTime>
    When For End session User select session time
    When User clicks on "Add to Event schedule" button
    When User shoud be on edit form field page
    Then User should able to add another fields <field1>
    Then User should able to add another fields <field2>
    Then User should able to add another fields <field3>
    Then User should able to add another fields <field4>
    Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
    Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
    Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
    Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
    Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
    Then User click on done button
    Given User must be at customize Integrations sceeen
    When User turns on the Drip integration toggle button
    When User selects option <account> from Select Account dropdown
    When User selects option <integrationOption> from Select Integrations dropdown
    When User selects option <workflow> from Select Campaign dropdown
    When User selects option <attendee> from attendees dropdown
    When User select no show option <noShowOption>
    When Enable Save Join Link button
    When Select join link field <joinLinkField>
    When User clicks on "Form" option
    When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
    When User clicks on Save integation button
    Given Host Must be in Meeting Room
    When User click on Event name bar
    When Click on Start Session button under popup
    When Click on yes start button
    When User switch to "Manage event" window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    When Click on "Join Room" button after registered
    Then Move to Manage event window
    When Redirect to attendee's screen
    When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
    Then Click on register button
    Then Move to Manage event window
    When Move to meeting room window
    When User click on Event name bar
    Then Session pop up should display
    When User clicks on "End Session" button under session popup
    When User clicks on "YES,END"
    Then Move to Manage event window
    When User clicks on "Activity" tab on manage event page
    When User clicks on "People" tab
    Then For drip integartion Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
    Then For drip integration success <successTag> should display under all trigger logs
    Examples:
      | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee            | noShowOption        | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | account | integrationOption | workflow | attendee |
      | admin | R         | 11:00 pm   | Drip        | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Start on a Workflow | Start on a Workflow | last_name      | Website       | phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | JoinLink      | Demio   | Workflows         | Test     | Add Tag  |


Scenario Outline: Check if user is able to enable "Marketo" integration
  Given Integrations <integration> must be enabled from settings
  Given End if any session running and new "Standard" Event must be craeted <eventName>
  When User select start session time <futureTime>
  When For End session User select session time
  When User clicks on "Add to Event schedule" button
  When User shoud be on edit form field page
  Then User should able to add another fields <field1>
  Then User should able to add another fields <field2>
  Then User should able to add another fields <field3>
  Then User should able to add another fields <field4>
  Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
  Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
  Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
  Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
  Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
  Then User click on done button
  Given User must be at customize Integrations sceeen
  When User turns on the Marketo integration toggle button
  When For marketo user select registrants fron <registerTag> dropdown
  When Selects event marketo list option <selectListOption> from dropdown
  When User selects option <attendee> from attendees dropdown
  When User selects tag <attendeeTag> from Tags dropdown
  When User select no show option <noShowOption>
  When User select tag for no show <noShowTag>
  When Enable Save Join Link button
  When Select join link field <joinLinkField>
  When User clicks on "Form" option
  When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
  When User clicks on Save integation button
  Given Host Must be in Meeting Room
  When User click on Event name bar
  When Click on Start Session button under popup
  When Click on yes start button
  When User switch to "Manage event" window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  When Click on "Join Room" button after registered
  Then Move to Manage event window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  Then Move to Manage event window
  When Move to meeting room window
  When User click on Event name bar
  Then Session pop up should display
  When User clicks on "End Session" button under session popup
  When User clicks on "YES,END"
  Then Move to Manage event window
  When User clicks on "Activity" tab on manage event page
  When User clicks on "People" tab
  Then For marketo integration user details and Join link should display under trigger logs
  Then Under marketo trigger logs <successTag> displaying under all trigger logs
  Examples:
    | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | attendee    | attendeeTag          | noShowOption | noShowTag          | lastNameOption | websiteOption | phoneOption  | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField | category       | categoryTag | selectListOption       | registerTag |
    | admin | S         | 11:00 pm   | Marketo     | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to List | Demio Attended Leads | Add to List  | Demio Missed Leads | Last Name      | Website       | Phone Number | City            | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company Name  | State          | Country        | Department     | Cookies       | Role        | Urgency        | Priority      | user | tester   | www.demio.com | +19027365417 | 785964  | Email 3 | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     | Qa Registrants | Registered  | Demio Registered Leads | Add to List |

Scenario Outline: Check if user is able to enable "Convertkit" integration
  Given Integrations <integration> must be enabled from settings
  Given End if any session running and new "Standard" Event must be craeted <eventName>
  When User select start session time <futureTime>
  When For End session User select session time
  When User clicks on "Add to Event schedule" button
  When User shoud be on edit form field page
  Then User should able to add another fields <field1>
  Then User should able to add another fields <field2>
  Then User should able to add another fields <field3>
  Then User should able to add another fields <field4>
  Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
  Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
  Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
  Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
  Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
  Then User click on done button
  Given User must be at customize Integrations sceeen
  When User turns on the ConvertKit integration toggle button
  When User selects option from Choose Tag dropdown <registerTag>
  When User selects option <attendee> from attendees dropdown
  When User selects tag <attendeeTag> from Tags dropdown
  When User select no show option <noShowOption>
  When User select option for no show <noShowTag>
  When Enable Save Join Link button
  When Select join link field <joinLinkField>
  When User clicks on "Form" option
  When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
  When User clicks on Save integation button
  Given Host Must be in Meeting Room
  When User click on Event name bar
  When Click on Start Session button under popup
  When Click on yes start button
  When User switch to "Manage event" window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  When Click on "Join Room" button after registered
  Then Move to Manage event window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  Then Move to Manage event window
  When Move to meeting room window
  When User click on Event name bar
  Then Session pop up should display
  When User clicks on "End Session" button under session popup
  When User clicks on "YES,END"
  Then Move to Manage event window
  When User clicks on "Activity" tab on manage event page
  When User clicks on "People" tab
  Then For convertkit integration Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
  Then <successTag> should displaying under all trigger logs
  Examples:
    | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag   | attendee   | attendeeTag | noShowOption | noShowTag | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField |
    | admin | G         | 11:00 pm   | ConvertKit  | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Erin-Register | Add to Tag | Attended    | Add to Tag   | no show   | Last name      | Website       | Phone       | Textfield       | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Textarea       | Dropdown       | Checkbox       | Zipcode       | Refer       | Facebook       | Twitter       | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link     |

Scenario Outline: Check if user is able to enable "Salesforce Pardot" integration
  Given Integrations <integration> must be enabled from settings
  Given End if any session running and new "Standard" Event must be craeted <eventName>
  When User select start session time <futureTime>
  When For End session User select session time
  When User clicks on "Add to Event schedule" button
  When User shoud be on edit form field page
  Then User should able to add another fields <field1>
  Then User should able to add another fields <field2>
  Then User should able to add another fields <field3>
  Then User should able to add another fields <field4>
  Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
  Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
  Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
  Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
  Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
  Then User click on done button
  Given User must be at customize Integrations sceeen
  When User turns on the Salesforce Pardot integration toggle button
  When For salesforce user select registrants fron <registerTag> dropdown
  When Selects choose list salesforce option <selectListOption> from dropdown
  When User selects option <attendee> from attendees dropdown
  When User selects tag <attendeeTag> from Tags dropdown
  When User select no show option <noShowOption>
  When User select tag for no show <noShowTag>
  When Enable Save Join Link button
  When Select join link field <joinLinkField>
  When User clicks on "Form" option
  When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
  When User clicks on Save integation button
  Given Host Must be in Meeting Room
  When User click on Event name bar
  When Click on Start Session button under popup
  When Click on yes start button
  When User switch to "Manage event" window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  When Click on "Join Room" button after registered
  Then Move to Manage event window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  Then Move to Manage event window
  When Move to meeting room window
  When User click on Event name bar
  Then Session pop up should display
  When User clicks on "End Session" button under session popup
  When User clicks on "YES,END"
  Then Move to Manage event window
  When User clicks on "Activity" tab on manage event page
  When User clicks on "People" tab
  Then For Salesforce Trigger logs and Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
  Then <successTag> should displaying under all trigger logs
  Examples:
    | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag | attendee    | attendeeTag                                   | noShowOption | noShowTag                                   | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption  | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField    | selectListOption                               |
    | admin | G         | 11:00 pm   | Pardot      | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to List | Add to List |Demio Attendees | Add to List  | Demio No Shows | Last Name      | Website       | Phone       | Comments        | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Job Title      | Address Two    | Address One    | Zip           | Source      | Territory      | Annual Revenue | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link| Demio Registrants |

Scenario Outline: Check if user is able to enable "Salesforce Pardot" integration
  Given Integrations <integration> must be enabled from settings
  Given End if any session running and new "Standard" Event must be craeted <eventName>
  When User select start session time <futureTime>
  When For End session User select session time
  When User clicks on "Add to Event schedule" button
  When User shoud be on edit form field page
  Then User should able to add another fields <field1>
  Then User should able to add another fields <field2>
  Then User should able to add another fields <field3>
  Then User should able to add another fields <field4>
  Then User select custom field <customFieldText> using label <textLabel> and <customFieldTextArea> using <textAreaLabel> and <customFieldDropDown> using <dropdownLabel> options <option1> and <option2> then add <customFieldCheckbox> using <checboxLabel> and <text>
  Then User add custom field <customFieldText> using label <textZipLabel> using <customFieldNumberValidation>
  Then User add custom field <customFieldText> using label <textReferLabel> using <customFieldNoneValidation>
  Then User add custom field <customFieldText> using label <textFacebookLabel> using <customFieldUrlValidation>
  Then User add custom field <customFieldText> using label <textTwitterLabel> using <customFieldNoneValidation>
  Then User click on done button
  Given User must be at customize Integrations sceeen
  When User turns on the Salesforce Pardot integration toggle button
  When For salesforce user select registrants fron <registerTag> dropdown
  When Selects choose list salesforce option <selectListOption> from dropdown
  When User selects option <attendee> from attendees dropdown
  When User selects tag <attendeeTag> from Tags dropdown
  When User select no show option <noShowOption>
  When User select tag for no show <noShowTag>
  When Enable Save Join Link button
  When Select join link field <joinLinkField>
  When User clicks on "Form" option
  When User select <lastNameOption> for "Last Name" <websiteOption> for "Website" <phoneOption> for "Phone Number" <companyOption> for company <textFieldOption> for "Text field" <textAreaOption> for textarea <dropdownOption> for "Dropdown" <checkboxOption> for "Checkbox" <zipCodeOption> for "Zipcode" <referOption> for "Refer" <facebookOption> for "Facebook" <twitterOption> for "Twitter"
  When User clicks on Save integation button
  Given Host Must be in Meeting Room
  When User click on Event name bar
  When Click on Start Session button under popup
  When Click on yes start button
  When User switch to "Manage event" window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  When Click on "Join Room" button after registered
  Then Move to Manage event window
  When Redirect to attendee's screen
  When Attendee joins the session with name <name> email last name <lastName> website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter>
  Then Click on register button
  Then Move to Manage event window
  When Move to meeting room window
  When User click on Event name bar
  Then Session pop up should display
  When User clicks on "End Session" button under session popup
  When User clicks on "YES,END"
  Then Move to Manage event window
  When User clicks on "Activity" tab on manage event page
  When User clicks on "People" tab
  Then For Salesforce Trigger logs and Register and missed attendee details website <website> phone number <phoneNo> company <company> text <text> textarea <textArea> dropdown <option1> zip <zipCode> refer <refer> facebook <facebook> twitter <twitter> should display under logs
  Then <successTag> should displaying under all trigger logs
  Examples:
    | userA | eventName | futureTime | integration | url                | field1    | field2  | field3       | field4  | customFieldText | textZipLabel | textLabel | customFieldTextArea | textAreaLabel         | customFieldDropDown | dropdownLabel | option1  | option2  | customFieldCheckbox | checboxLabel | text     | registerTag | attendee    | attendeeTag                                   | noShowOption | noShowTag                                   | lastNameOption | websiteOption | phoneOption | textFieldOption | customFieldNumberValidation | customFieldNoneValidation | customFieldUrlValidation | textReferLabel | textFacebookLabel | textTwitterLabel | companyOption | textAreaOption | dropdownOption | checkboxOption | zipCodeOption | referOption | facebookOption | twitterOption  | name | lastName | website       | phoneNo      | zipCode | refer   | facebook   | twitter    | company | textArea      | successTag    | joinLinkField    | selectListOption                               |
    | admin | G         | 11:00 pm   | Pardot      | productionLoginUrl | Last Name | Website | Phone Number | Company | Text            | ZipCode      | TextField | Text Area           | Add text in text area | Dropdown            | Dropdown      | New user | Old User | Checkbox            | Checkbox     | Textuser | Add to List | Add to List |Demio Attendees | Add to List  | Demio No Shows | Last Name      | Website       | Phone       | Comments        | Number                      | None                      | URL                      | Refer          | Facebook          | Twitter          | Company       | Job Title      | Address Two    | Address One    | Zip           | Source      | Territory      | Annual Revenue | user | tester   | www.demio.com | +19027365417 | 785964  | manager | www.fb.com | twitter200 | testing | i am new user | "success": 1, | Join Link| Demio Registrants |
