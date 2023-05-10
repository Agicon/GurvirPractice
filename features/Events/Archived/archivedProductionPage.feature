Feature: Verify archive event features
    As a User i want to check archive event feature

    Scenario Outline: Redirect on home page
        Given User should redirect on <url> login page
        Given User login with <userA>
        Examples:
            | url                | userA |
            | productionLoginUrl | admin |

    Scenario Outline: Check if user can unarchive events and then adding new sessions work as expected
        Given End if any session running and new "Standard" Event must be craeted <eventName>
        Given Archived event <eventName> must be present in archived list
        When User click on "Unarchive Event" session button
        Then User should able to unarchive <eventName> event
         Given Created event <eventName> should be searched and selected from event list
        When User select start time and schedule new session <futureTime>
        Examples:
            | eventName |
            | A         |


    Scenario Outline: Verify the functionality of delete archived event
        Given Archived event <eventName> must be present in archived list
        When User click on delete event option
        When Clicks on "yes delete" button
        Then Delete event validation <validationMessage> should displayed
        Examples:
            | validationMessage | eventName |
            | Event deleted     | A         |

