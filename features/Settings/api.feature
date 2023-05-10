Feature: Verify demio api feature
    As a User i want to check API feature of demio web app

    Background:
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |


    Scenario Outline: Availability and functionality of fields/buttons at "API" settings
        Given User should be on Settings Page
        When User clicks on "API" Tab
        Then User shall see "API KEY" field
        Then User shall see "API SECRET" field
        Then User shall see "Regenerate" button
        Then User should be able to "Regenerate"  "API SECRET" by clicking on "Regenerate" button