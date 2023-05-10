Feature: Verify demio integration feature

    Background:
        Given User should be on Home page

    Scenario Outline: Check user login with valid credetials
        Given User should be on login page
        Given User login with <userA>
        Examples:
            | userA |
            | admin |

    Scenario Outline: Availability and functionality of tabs at "Integrations" settings
        Given User should be on Settings Page
        When User click on "Integrations" tab
        Then User shall see <options> under integration tab
        Examples:
            | options              |
            | Manage Integration   |
            | CURRENT INTEGRATIONS |
            | ADD NEW              |

    Scenario Outline: Availability and functionality of buttons at "Integrations" settings
        Given User should be on Settings Page
        When User click on "Integrations" tab
        Then User shall see <icons> of all the integrations at the bottom
        Examples:
            | icons          |
            | Zapier         |
            | Infusionsoft   |
            | Aweber         |
            | Ontraport      |
            | Mailchimp      |
            | Getresponse    |
            | Activecampaign |
            | ConvertKit     |
            | Drip           |
            | Markethero     |
            | Marketo        |



    Scenario Outline: Check if user is able to enable " Aweber " integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Aweber integration toggle button
        Then User should be redirected to <title> pop up
        When User selects <list> option from choose list dropdown
        When User selects option <attendee> from attendees dropdown
        When User selects List option <listOption>
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Aweber integration should be enabled
        Examples:
            | eventName | login       | status          | title  | list        | attendee    | listOption  |
            | X         | aweberLogin | sections active | Aweber | Registrants | Add to List | Registrants |


    Scenario Outline: Check if user is able to enable " Mailchimp " integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Mailchimp integration toggle button
        Then User should be redirected to <title> pop up
        When User selects <list> option from choose list dropdown
        When User selects option from choose list dropdown <chooseListOption>
        When User selects option <selectListOption> from select list options dropdown
        When User selects option <attendee> from attendees dropdown
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Mailchimp integration should be enabled
        Examples:
            | eventName | login          | title     | list                | chooseListOption    | selectListOption       | attendee    | status          |
            | X         | mailchimpLogin | Mailchimp | Demio Test Audience | Demio Test Audience | Subscribe Only to List | Add to List | sections active |

    Scenario Outline: Check if user is able to enable " Markethero" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Markethero integration toggle button
        Then User should be redirected to <title> pop up
        When User enters name of the Tag <tag>
        When User Clicks on Ok button
        When User selects option <attendee> from attendees dropdown
        When User enters Tag Name field <tagName>
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Markethero integration should be enabled
        Examples:
            | eventName | title       | status          | tagName      | attendee | tag     |
            | R         | Market Hero | sections active | demioAccount | Add Tag  | new tag |


    Scenario Outline: Check if user is able to enable " Marketo" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Marketo integration toggle button
        Then User should be redirected to <title> pop up under customize screen
        When User selects option <registrant> from Registrants dropdown
        When User selects option <chooseList> from Choose list dropdown for Marketo integration
        When User selects option <attendee> from attendees dropdown
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Marketo integration should be enabled
        Examples:
            | eventName | title   | status          | registrant  | login        | chooseList      | attendee    |
            | L         | Marketo | sections active | Add to List | marketoLogin | New Test List A | Add to List |


    Scenario Outline: Check if user is able to enable "Infusionsoft" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Infusionsoft integration toggle button
        Then User should be redirected to <title> pop up
        When User selects option from Choose <category> Category dropdown
        When User selects option from Choose <tag> Tag dropdown
        When User selects option <attendee> from attendees dropdown
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Infusionsoft integration should be enabled
        Examples:
            | eventName | title        | status          | login             | attendee | category    | tag       |
            | D         | InfusionSoft | sections active | infusionsoftLogin | Add Tag  | BethanyTest | Attendeed |

    Scenario Outline: Check if user is able to enable "Ontraport" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Ontraport integration toggle button
        Then User should be redirected to <title> pop up
        When User selects option from Choose Tag dropdown <chooseTag>
        When User selects option <attendee> from attendees dropdown
        When User selects tag <tag> from Tags dropdown
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Ontraport integration should be enabled
        Examples:
            | eventName | title     | status          | attendee | chooseTag | tag       |
            | O         | Ontraport | sections active | Add Tag  | Attendees | Attendees |



    Scenario Outline: Check if user is able to enable "Activecampaign" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Activecampaign integration toggle button
        Then User should be redirected to <title> pop up
        When User selects option from Choose Tag dropdown <chooseTag>
        When User selects option <attendee> from attendees dropdown
        When User selects tag <tag> from Tags dropdown
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Activecampaign integration should be enabled
        Examples:
            | eventName | title           | status          | chooseTag | attendee | tag       |
            | B         | Active Campaign | sections active | Attendeed | Add Tag  | Attendeed |

    Scenario Outline: Check if user is able to enable "ConvertKit" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the ConvertKit integration toggle button
        Then User should be redirected to <title> pop up
        When User selects option from Choose Tag dropdown <chooseTag>
        When User selects option <attendee> from attendees dropdown
        When User selects tag <tag> from Tags dropdown
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then ConvertKit integration should be enabled
        Examples:
            | eventName | title       | status          | chooseTag | attendee   | tag |
            | H         | Convert Kit | sections active | YE        | Add to Tag | YE  |


    Scenario Outline: Check if user is able to enable "Drip" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Drip integration toggle button
        Then User should be redirected to <title> pop up
        When User selects option <account> from Select Account dropdown
        When User selects option <integration> from Select Integrations dropdown
        When User selects option <Campaign> from Select Campaign dropdown
        When User selects option <attendee> from attendees dropdown
        When User enters Tag Name field <tagName>
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Drip integration should be enabled
        Examples:
            | eventName | title | status          | account | attendee | tagName    | integration | Campaign |
            | P         | Drip  | sections active | Demio   | Add Tag  | Test demio | Campaigns   | Test     |


    Scenario Outline: Check that all the enabled integrations are displaying in Customize --> Integratiions
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        Then User shall see all the enabled integrations
        Examples:
            | status          |
            | sections active |

    Scenario Outline: Check if user is able to enable "Getresponse" integration
        Given Integrations must be enabled <status> from settings
        Given new "Standard" Event must be craeted <eventName>
        Given User must be at customize Integrations sceeen
        When User turns on the Getresponse integration toggle button
        Then User should be redirected to <title> pop up
        When User selects option from Choose Campaign dropdown <chooseCampaign>
        When User selects option <attendee> from attendees dropdown
        When User selects option from Choose Campaign dropdown <chooseCampaign>
        When User selects option from No shows dropdown
        When User clicks on Save integation button
        Then Getresponse integration should be enabled

        Examples:
            | eventName | title        | status          | chooseCampaign | attendee        |
            | L         | Get Response | sections active | newdemio_list  | Add to Campaign |


