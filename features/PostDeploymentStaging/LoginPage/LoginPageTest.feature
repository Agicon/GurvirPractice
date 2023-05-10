Feature: Verify demio login feature
    As a User i want to check login feature of demio web app

    Background:
        Given User should be on login page


    #POST-DEPLOYEMENT
    Scenario Outline: Check user not able to login with valid "Email" and invalid  "Password"
        Given User should be on login page
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"
        Examples:
            | userName                   | password     | informative                                  |
            | tester.desk4+tl2@gmail.com | Testing12s2! | Please enter a valid email address/password. |


    # #POST-DEPLOYEMENT
    Scenario Outline: Check user is able to login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Then User should be redirect to home page
        Examples:
            | userA |
            | admin |