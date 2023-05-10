Feature: Verify demio email settings feature

    Background:
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |

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


    Scenario Outline: Check the functionality of fields/buttons at "Email Settings" settings
        Given User should be on Settings Page
        When User click on "Email settings" tab
        Then User should able to fill <fromName> in "Form Name" input field
        Then User should able to fill <email> in "Contact & Forwarding Email" input field
        Then User should able to fill <signature> in "Custom Signature" input field
        Then User should be able to Save the Changes "From name" <fromName> "Contact & Forwarding Email" <email> and "Custom Signature" <signature> by clicking on "Save Settings" Button
        Examples:
            | fromName  | email                      | signature      |
            | Test user | tester.desk4+sl1@gmail.com | Signature Test |