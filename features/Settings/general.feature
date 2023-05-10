Feature: Verify demio general feature

    Background: Background name
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |



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

