Feature: Verify demio profile feature
    As a User i want to check profile feature of demio web app

    Background:
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |

    Scenario Outline: Check availbility of fields/buttons at user "User Profile" settings
        Given User should be on Settings Page
        #Then By default "Profile" should be selected
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
        #Then By default "Profile" should be selected
        When User click on "Profile" tab
        Then User Should be able to add data <data> in <inputFields>
        When User Clicks on "Save Settings" Button
        Then User able to see Save OR Changed <data> in <inputFields>
        Examples:
            | inputFields | data                       |
            | First Name  | Test                       |
            | Last Name   | Qa                         |
            | Email       | tester.desk4+tl2@gmail.com |


    Scenario Outline: Check functionality of  "Change Password" button and input fields
        Given User should be on Settings Page
        #Then By default "Profile" should be selected
        When User click on "Profile" tab
        When User Clicks on "Change Password" Button
        Then User shall see "Change Your Password" pop-up
        Then User shall see "Current Password" and "New Password" field
        Then User shall see "See Password" Checkbox
        Then User should be able to mark OR unmark see password checkbox
        Then User shall see "UPDATE PASSWORD" Button
        Then User should be able to enter current password as <CurrentPassword> and new password as <NewPassword>
        Then User should be able to update the password by clicking on "UPDATE PASSWORD" Button
        Examples:
            | CurrentPassword | NewPassword |
            | Testing12!      | Testing12!  |


