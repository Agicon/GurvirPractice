Feature: Verify event page features
As a User i want to check event feature

Feature: Verify event page features
    As a User i want to check event feature

    Background:
        Given User should be on Home page

    Scenario Outline: Check availablity of tabs/buttons on Event page
        Given User should be on login page
        Given User login with <userA>
        Given User should be on Events page
        Then It should displayed with tabs: "All", "Standard", "Series", "Automated" and "Archived"
        Then there should be "Add New Event" button available
        Examples:
            | userA |
            | admin |

    #    #Done
    Scenario Outline: Check minimum length of "Event Name" field while creating "Standard"/"Series"/"Automated" events
        Given User should be on Events page
        When Click on "Add New Event" button
        Then Event creation page should open
        When click On "Standard" option
        Then "Create New Standard" page should open
        When Go to "Event Name" field
        When Add data in "Event Name" field <eventName>
        Then validation message <validationMsg> should displayed
        Given User should be on Events page
        When Click on "Add New Event" button
        When Click On "Series" option
        Then "Create New Series" page should open
        When Go to "Event Name" field
        When Add data in "Event Name" field <eventName>
        Then validation message <validationMsg> should displayed
        Given User should be on Events page
        When Click on "Add New Event" button
        When Click On "Automated" option
        Then "Create New Automated" page should open
        When Go to "Event Name" field
        When Add data in "Event Name" field <eventName>
        Then validation message <validationMsg> should displayed

        Examples:
            | eventName | validationMsg                           |
            | Evnt      | Please enter a minimum of 5 characters. |

    Scenario Outline: Check functionality of "Search Box"
        Given new "Series" Event must be craeted  <eventName>
        Given new "Standard" Event must be craeted <eventName>
        Given new "Automated" Event <eventName> must be craeted
        Given User should be on Events page
        When Add data to be searched <eventName>
        Then It should displayed with searched item <eventName>
        Given User should be on Events page
        When add missmatched data in search field <missmatchedData>
        Then It should display message <validationMsg>
        Examples:
            | eventName | automatedEvent | missmatchedData | validationMsg                 |
            | A         | AutoEvent      |$$$      | Nothing found for this search |

    #Done
    Scenario: Check that user is able to create event types screen on clicking "Add new Event" button.
        Given User should be on Events page
        When Click on "Add New Event" button
        Then User shall see "Standard" option to create a new standard event
        Then User shall see "Series" option to create a new series event
        Then User shall see "Automated" option to create a new automated event
        Then User shall see "BACK TO EVENTS" option for going back to Events page
        Then "Schedule" and "Events" tab should be available in Header
        Then "Demio" logo should be available in top-left corner
        Then "Help" and "User Profile" dropdown should be available in Header


    #DONE
    Scenario Outline: Check functionality of Tabs
        Given User should be on Events page
        Then It should displayed all events "standardEvent" and "seriesEvent" and "automatedEvent" under all tab
        When Click On "Standard" tab
        Then It should displayed only Standard events <standardEventName>
        When Click On "Series" tab
        Then It should displayed only Series events <seriesEventName>
        When Click On "Automated" tab
        Then It should displayed only Automated events <automatedEventName>
        Examples:
            | standardEventName | seriesEventName | automatedEventName | videoName  |
            | A                 | A               | A                  | sample.mp4 |


    Scenario Outline: Check if user able to click on 'Continue' button after Selecting 'Live event' option and entering valid event title
        Given User should be on Create Events page
        When User selects "Live event" option
        When Enter valid event title <eventName>
        Then User should able to click on "Continue" button
        Then User should be redirected to "Manage event" screen
        Examples:
            | eventName |
            | B         |


    Scenario Outline: Check if user able to select all options in 'How often?' dropdown i.e Everyday/Everyweek/Everymonth (Recurring type)
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then "How often" dropdown should also display along with "select date" and "select time" fields
        When User selects option from "How often" dropdown <option>
        Then User should be able to select available option <option>
        Examples:
            | eventName | option     | message                      |
            | A         | Every week | Recurring sessions scheduled |


    Scenario Outline: Check if user can select "current" OR "future" date to select event start date (Multiple Times)
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Schedule this Event" button
        Given User should be redirected to Schedule Upcoming session menu
        When User click on "Recurring Times" option
        Then User should not able to select past date
        Then User should only be able to select current or future dates only
        Examples:
            | eventName |
            | A         |




    Scenario Outline: Check if user can add all types of fields (Pre defined and custom fields including Dropdown etc)
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Registration" option
        When User clicks on "Edit Form Fields" button
        When User Clicks on "ADD ANOTHER FIELD" option
        Then User shall see "Add Another Field" pop-up
        Then User shall see "Select Field Option" dropdown button
        When User clicks on "Select Field Option" dropdown button
        Then User shall see options "Last Name","Website","Company","Phone Number" ,"GDPR" and "Create a Custom Field" option
        When User selects any field option from dropDown list <field>
        When User clicks on "ADD FORM FIELD" Button
        Then User should be able to add any field <field>
        When User Clicks on "ADD ANOTHER FIELD" option
        When User clicks on "Select Field Option" dropdown button
        When User selects "Create a Custom Field" option from dropdown
        Then User shall see "Select Field Type" dropdown option
        When User clicks on "Select Field Type" dropdown option
        Then User shall see options "Text","TextArea","Dropdown","Checkbox"
        Then User selects any field type option <option>
        Then User should able to add label <label>
        When User clicks on "ADD FORM FIELD" Button
        Then User should be able to add any field <label>
        When User clicks on dropdown along side JOIN ROOM button
        When User clicks on "View registration page" option
        Then User should be on Registration page
        Then User should able to see added predefined field <field>
        Then Added custom field is displayed on registration page <label>
        Examples:
            | eventName | field   | label     | option    | firstSessionTime |
            | A         | Website | custom900 | Text Area | 10:30 pm         |

