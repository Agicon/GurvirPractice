Feature: Verify demio team feature

    Background:
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |

    #DONE
    Scenario: Availability and functionality of fields/buttons at "Team" settings
        Given User should be on Settings Page
        When User click on "Team" tab
        Then User shall see list of Members in the team with their details
        Then User shall see "ADD TEAM MEMBER" Button
        Then User shall see a dropdown along side team member details to Edit or Remove team member
        Then User shall see "Search" field to search team member

    #DONE
    Scenario Outline: Check that User is able to add new "Team Member"
        Given User should be on Settings Page
        When User click on "Team" tab
        When User Clicks on "ADD TEAM MEMBER" Button
        Then User shall see "Add Team Member" pop-up
        When User should be able to enter <email> of new team Member in "Email" field
        When User Selects or Unselects "Host Ability" option
        When User Clicks on "Send Invite" button
        Then New team Member should be invited and Should display in team member list with name displaying as <status>
        Examples:
            | email                     | status  |
            | tester.desk4+M1@gmail.com | Pending |


    #DONE
    Scenario Outline: Check that User is able to Disable and enable "Host Ability"  of Team Member
        Given User should be on Settings Page
        When User click on "Team" tab
        When User search added member in search field <email>
        When User Clicks on dropdown alongside team member details
        Then User shall see "Edit User" and "Remove User" option
        When User Clicks on "Edit Team Member" option
        Then User Shall see "Edit Team Member" Pop up
        When User Disables "Host Ability"
        When User click on "Update" Button
        Then "Host Ability" Should be Disabled for the Team Member
        When User Clicks on dropdown alongside team member details
        When User Clicks on "Edit Team Member" option
        Then User Shall see "Edit Team Member" Pop up
        When User Enables "Host Ability"
        When User click on "Update" Button
        Then On team page "Host Ability" Should be enabled for the Team Member
        Examples:
            | email                     |
            | tester.desk4+M1@gmail.com |


    #DONE
    Scenario Outline: Check that User is able to search and Remove "Team Member"
        Given User should be on Settings Page
        When User click on "Team" tab
        When User search added member in search field <email>
        Then User shall see Team Members with credentials <email> matching the entered input in Search field
        When User Clicks on dropdown alongside team member details
        Then User shall see "Edit User" and "Remove User" option
        When User Clicks on "Remove User" option
        Then User Shall see "Remove User" Confirmation Pop up
        When User Clicks on "YES,REMOVE" button
        Then the team Member should be removed and should not display in team member list
        Examples:
            | email                     |
            | tester.desk4+M1@gmail.com |

    #DONE
    Scenario Outline: Check that User is able to add multiple admins as Host for an Event
        Given new "Standard" Event must be craeted <eventName>
        When User schedule new session at future time <futureTime>
        Given <role> must be added <member> in "Event Admin" option
        Then the selected Team Member is added as Host for the Event
        Examples:
            | eventName | role | member    | futureTime |
            | A         | Host | Subuser 1 | 11:00 pm   |

    #DONE
    Scenario Outline: Check that Multiple Hosts are able to join Room And sub host Starts and ends the Session
        Given Created event <eventName> should be searched and selected from event list
        When Host Must be in Meeting Room
        Then Move to Manage event window
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        When Added host joins the session link
        Then It should redirected to "Welcome," page <pageTitle>
        When User clicks on "Join Room" button under welcome screen
        Then User should redirected to Meeting Room
        Then Sub host is able to start session by clicking on "Start Session" button
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | pageTitle |
            | A         | Welcome,  |

    #DONE
    Scenario Outline: Check that Any of the Host is able to starts and End the Session
        Given Created event <eventName> should be searched and selected from event list
        Then Host should able to schedule new session with time <futureTime>
        When Host Must be in Meeting Room
        When User click on Event name bar
        Then Session pop up should display
        When Click on Start Session button under popup
        When Click on yes start button
        Then Session should started
        Then Click on end the session
        Then Move to Manage event window
        Examples:
            | eventName | pageTitle | futureTime |
            | A         | Welcome,  | 11:00 pm   |

    #DONE
    Scenario Outline: Check that user is able to Delete a Host from Event Admin Area
        Given Created event <eventName> should be searched and selected from event list
        When User Clicks on "Customize" option
        Then User should be on Event Customization page
        When User Clicks on "Event Admins" option
        When User clicks on session option dropdown button
        When User Clicks on "Delete Admin"
        Then the Host should be Deleted <member>
        Examples:
            | eventName | member    |
            | A         | Subuser 1 |


