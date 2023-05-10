Feature: Verify demio login feature
    As a User i want to check login feature of demio web app

    Background:
    Scenario Outline: user shouled be on login page
 Given User should redirect on <url> login page
        Examples:
             | url                |
             | productionLoginUrl |



    Scenario Outline: Check user not able to login with valid "Email" and invalid  "Password"
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"
        Examples:
            | userName                   | password     | informative                                  |
            | tester.desk4+tl2@gmail.com | Testing12s2! | Please enter a valid email address/password. |


    #Done
    Scenario Outline: Check user not able to login with invalid "Email" and valid  "Password"
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"

        Examples:
            | userName         | password   | informative                                  |
            | tester@gmail.com | Testing12! | Please enter a valid email address/password. |


    #Done
    Scenario Outline: Check user not able to login with invalid "Email" and invalid "Password"
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"
        Examples:
            | userName         | password     | informative                                  |
            | tester@gmail.com | Testing12!23 | Please enter a valid email address/password. |



    #Done
    Scenario Outline: Check user not able to login when "Email" field left blank
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"
        Examples:
            | userName | password     | informative                             |
            |          | Testing12!23 | Please enter an email address/password. |


    #Done
    Scenario Outline: Check user not able to login when "Password" field left blank
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"
        Examples:
            | userName                   | password | informative                             |
            | tester.desk4+tl2@gmail.com |          | Please enter an email address/password. |

    #Done
    Scenario Outline: Check "Login" button functionality when both fields "Email" and "Password" are blank
        When User fill the userName field name as <userName>
        When User fill the password filed as <password>
        When User click on "Login" button
        Then User should get <informative> message
        Then Should not redirected to "Home" page"
        Examples:
            | userName | password | informative                             |
            |          |          | Please enter an email address/password. |


    #Done
    Scenario Outline: Check "Forgot your password?" functionality
        When User click on "Forgot your password" link
        Then User should redirected to "Forgot your password" page
        When User add "Email" <userA>
        When Click on "Reset My Password" button
        Then User should get informative message as <informativeText>
        # When Open the received email from inbox
        # When Click on "Set New Password" button
        # Then User should redirected to "Set your password" page
        # When Add new "Password"
        # When Add same password in "Confirm Password"
        # When Click on "Set Password"
        # Then User should redirected to "Home" page

        Examples:
         |userA   |informativeText                                                                                  |
            |admin|  Check your inbox. We're sending you an email with instructions about how to reset your password. |



# # Scenario Outline: Check users is able to login with diffrent credetials
# #     When User login with as <userA>
# #     #     # When User login with as <userB>
# #     #     # When User login with as <userC>
# #     #     # When User login with as <userD>
# #     #     # When User login with as <userE>
# #     Examples:
# #         | userA | userB | userC | userD | userE |
# #         | admin | B     | C     | D     | E     |
