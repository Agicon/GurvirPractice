Feature: Verify demio settings feature
    As a User i want to check Settings feature of demio web app

    Background:
        Given User should be on Home page

    #DONE
    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |


    #DONE
    Scenario Outline: Check Availability under settings
        When User click on profile dropdown and select settings options
        #Then By default "Profile" should be selected
        Then User shall see <options> under settings
        Examples:
            | options        |
            | Profile        |
            | General        |
            | Branding       |
            | Billing        |
            | API            |
            | Integrations   |
            | Team           |
            | Email settings |

    #DONE
    Scenario: Check functionality of Profile tab under settings
        Given User should be on Settings Page
        When User click on "Profile" tab
        Then "Profile" page should be open

    #DONE
    Scenario: Check functionality of General tab under settings
        Given User should be on Settings Page
        When User click on "General" tab
        Then "General" page should be open

    #DONE
    Scenario: Check functionality of Branding tab under settings
        Given User should be on Settings Page
        When User click on "Branding" tab
        Then "Branding" page should be open

    #DONE
    Scenario: Check functionality of Billing tab under settings
        Given User should be on Settings Page
        When User click on "Billing" tab
        Then "Billing" page should be open

    #DONE
    Scenario: Check functionality of API tab under settings
        Given User should be on Settings Page
        When User click on "API" tab
        Then "API" page should be open

    #DONE
    Scenario: Check functionality of Integrations tab under settings
        Given User should be on Settings Page
        When User click on "Integrations" tab
        Then "Integrations" page should be open

    #DONE
    Scenario: Check functionality of Team tab under settings
        Given User should be on Settings Page
        When User click on "Team" tab
        Then "Team" page should be open

    #DONE
    Scenario: Check functionality of Email settings tab under settings
        Given User should be on Settings Page
        When User click on "Email settings" tab
        Then "Email settings" page should be open




    #-----------------------Profile--------------------------#
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
            | First Name  | Automation                |
            | Last Name   | Test                       |
            | Email       | tester.desk4+am@gmail.com |


    Scenario Outline: Check functionality of  "Change Password" button and input fields
        Given User should be on Settings Page
        #Then By default "Profile" should be selected
        When User click on "Profile" tab
        When User Clicks on "Change Password" Button
        Then User shall see "Change Your Password" pop-up
        Then User shall see "Current Password" and "New Password" field
        # Then User shall see "See Password" Checkbox
        # Then User should be able to mark OR unmark see password checkbox
        Then User shall see "UPDATE PASSWORD" Button
        Then User should be able to enter current password as <CurrentPassword> and new password as <NewPassword>
        Then User should be able to update the password by clicking on "UPDATE PASSWORD" Button
        Examples:
            | CurrentPassword | NewPassword |
            | Testing12!      | Testing12!  |
# 

    #----------------------------------General------------------------------------#
    Scenario Outline: Check availability fields and buttons at "General" settings
        Given User should be on Settings Page
        #Then By default "Profile" should be selected
        When User clicks on "General" Tab
        Then User shall see <options> at general tab
        Examples:
            | options              |
            | Company Name Field   |
            | Save Button          |
            | TimeZone Dropdown    |
            | Language Dropdown    |
            | GDPR Active Button   |
            | GDPR Disabled Button |



    Scenario Outline: Check functionality of user "General" input fields
        Given User should be on Settings Page
        When User clicks on "General" Tab
        Then User Should be able to edit data <data> in <inputFields>
        Then User should be able to save the <expectedData> in <inputFields> by clicking on "Save" button
        Then User should be able to Click on "Active" and "Disabled" button for GDPR settings
        Examples:
            | inputFields        | data                      | expectedData  |
            | Company Name Field | TEST123                   | TEST123       |
            | TimeZone Dropdown  | (GMT+05:30) Asia/Calcutta | Asia/Calcutta |
            | Language Dropdown  | English                   | en_US         |



    #-------------------------------------Branding--------------------------------------#
    Scenario Outline: Check availability fields and buttons at "Branding" settings
        Given User should be on Settings Page
        #Then By default "Profile" should be selected
        When User clicks on "Branding" Tab
        Then User shall see the options as <option> at branding page

        Examples:
            | option                                                         |
            | Color Scheme field                                             |
           # | Upload Logo button                                             |
            | Enable disbaled  switch  of Reg, Thank You and Recording Pages |
            | Enable disbaled  switch  of Confirmation and Reminder Emails   |
            | Enable disbaled  switch  of Webinar Room                       |


    Scenario Outline:Availability and functionality of fields/buttons at "Branding" settings
        Given User should be on Settings Page
        When User clicks on "Branding" Tab
        Then User Should able to edit <color scheme>
        # Then User Should be able to upload logo <logo> by clicking on "Upload Logo" option
      Then User should be able to Enable OR Disbaled "Pages Reg,Thank you, Recording:" <Pages> ,"Confirmation and Reminder Emails:" <Confirmation and Reminder Emails>  and  "Webinar Room:" <Webinar Room>

        Examples:
            | logo      | color scheme | Pages   | Confirmation and Reminder Emails | Webinar Room |
            | Logo2.jpg | #6B27A8      | Enable  | Enable                           | Enable       |
            | Logo2.jpg | #6B27A8      | Disable | Disable                          | Disable      |

    #----------------------------------------Billing-------------------------------------#

    Scenario Outline: Availability and functionality of fields/buttons at "Billings" settings
        Given User should be on Settings Page
        When User click on "Billing" tab
        Then User shall see "Plans and Billings" information
        Then User shall see "Credit Card" information along with "Update Card Details" option
        Then User shall see "Your Plan" option with details "Package Level","Price","Room Size" and "Adjust plan" button
        Then User shall see "Cancel Your Account" with "Start Cancellation" option


    # #-----------------------------------------API----------------------------------------#

    Scenario Outline: Availability and functionality of fields/buttons at "API" settings
        Given User should be on Settings Page
        When User clicks on "API" Tab
        Then User shall see "API KEY" field
        Then User shall see "API SECRET" field
        Then User shall see "Regenerate" button
        Then User should be able to "Regenerate"  "API SECRET" by clicking on "Regenerate" button


    # #-------------------------------------Integrations-----------------------------------#


    #-------------------------------------Team-------------------------------------------#

    Scenario Outline: Availability and functionality of fields/buttons at "Team" settings
        Given User should be on Settings Page
        When User click on "Team" tab
        Then User shall see list of Members in the team with their details
        Then User shall see "ADD TEAM MEMBER" Button
        Then User shall see a dropdown along side team member details to Edit or Remove team member
        Then User shall see "Search" field to search team member
        When User Clicks on "ADD TEAM MEMBER" Button
        Then User shall see "Add Team Member" pop-up
        When User should be able to enter <email> of new team Member in "Email" field
        When User Selects or Unselects "Host Ability" option
        When User Clicks on "Send Invite" button
        Then New team Member should be invited and Should display in team member list with name displaying as <status>
        When User search added member in search field <email>
        Then User shall see Team Members with credentials <email> matching the entered input in Search field
        When User Clicks on dropdown alongside team member details
        Then User shall see "Edit User" and "Remove User" option
        When User Clicks on "Remove User" option
        Then User Shall see "Remove User" Confirmation Pop up
        When User Clicks on "YES,REMOVE" button
        Then the team Member should be removed and should not display in team member list
        Examples:
            | email                     | status            |
            | tester.desk4+M1@gmail.com | Pending  |



    #-----------------------------------Email settings-----------------------------------#
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
            | Automation Tester | tester.desk4+am@gmail.com | Signature Test |