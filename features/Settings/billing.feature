Feature: Verify demio billing feature

    Background:
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |

    Scenario Outline: Availability and functionality of fields/buttons at "Billings" settings
        Given User should be on Settings Page
        When User click on "Billing" tab
        Then User shall see "Plans and Billings" information
        Then User shall see "Credit Card" information along with "Update Card Details" option
        Then User shall see "Your Plan" option with details "Package Level","Price","Room Size" and "Adjust plan" button
        Then User shall see "Cancel Your Account" with "Start Cancellation" option