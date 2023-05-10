import Base from "../testBase";
import TestUtils from "../testUtils";
import LoginPage from "../LoginPage/loginPage";
import { expect } from "chai";
import { throws } from "assert";


class EventPage extends Base {

  /*---------------------POM---------------*/
  get eventsTab() {
    return $('//*[@id="main-menu"]/div/div[1]/a[2]/span/div');
  }

  get eventsFilterSection() {
    return $('//div[@class="events-header-filter"]');
  }

  get addNewEventButton() {
    return $('//a[@href="/manage/event/create"]');
  }

  get backToEventsButton() {
    return $('//span[contains(text(),"BACK TO EVENTS")]');
  }
  get eventNameField() {
    return $('//input[@type="text"]');
  }
  get continueButton() {
    return $('.ant-row-flex-center [type]');
  }

  get swapHostButton() {
    return $('//*[@id="event-manage-root"]/div/div[2]/div/div[2]/div[1]/form/div[2]/div[2]/div/span/div/span/button');
  }

  get searchEventField() {
    return $('//input[@placeholder="Type to search"]');
  }


  get eventHostName() {
    return $('//div[@class="info-user-name"]');
  }

  get eventTypeButton() {
    return $('//button//span[contains(text(),"EVENT TYPES")]');
  }

  get summaryTab() {
    return $('(//div[contains(text(),"summary")])[1]');
  }

  get scheduleThisEventButton() {
    return $('.activity-empty-button .ant-btn-primary');
  }

  get addToEventScheduleButton() {
    return $('.add-session-button');
  }


  get customizeTab() {
    return $('//div[contains(text(),"customize")]');
  }

  get shareTab() {
    return $('//div[contains(text(),"share")]');
  }

  get activityTab() {
    return $('(//div[contains(text(),"activity")])[1]');
  }
  get joinRoomButton() {
    return $('.session-button .ant-btn-primary');
  }

  get sessionEditIcon() {
    return $('#event-manage-root > div > div.session-header-top > div:nth-child(1) > svg');
  }

  get upcomingSessionsOption() {
    return $('((//div[@class="share-container"])[1]//button)[1]');
  }

  get pastSessionsOption() {
    return $('(//button[@class="share-tab-option-container"])[1]');
  }

  get onDemandOffOption() {
    return $('(//button[@class="share-tab-option-container"])[2]');
  }

  get blackOutDatesOption() {
    return $('.session-list-links > a');
  }

  get blackOutDatesOption() {
    return $('.session-list-links > a');
  }

  get blackOutDatesOption() {
    return $('.session-list-links > a');
  }

  get viewRegistrationPage() {
    return $('ul[role="menu"] > li:nth-of-type(1)');
  }

  get duplicateEventOption() {
    return $('//ul[@role="menu"]/li[3]');
  }

  get archiveEventOption() {
    return $('//ul[@role="menu"]/li[4]');
  }

  get sessionOptionsDropDown() {
    return $('//*[@id="event-manage-root"]/div/div[2]/div[2]/div[1]/button');
  }

  get singleDateAndTimeOption() {
    return $('.ant-row-flex-space-between > div:nth-of-type(1)');
  }

  get recurringTimeOption() {
    return $('.ant-row-flex-space-between .schedule-type-box:nth-of-type(2)');
  }

  get selectDateField() {
    return $('.ant-calendar-picker-input');
  }

  get selectTimeField() {
    return $('(//input[@class="ant-time-picker-input"])[1]');
  }

  get selectEndTimeField() {
    return $('(//input[@class="ant-time-picker-input"])[2]');
  }
  get successMessage() {
    return $('//div[@class="ant-notification-notice-message"]');
  }

  get calendarInputField() {
    return $('.ant-calendar-input');
  }

  get timeInputField() {
    return $('.ant-time-picker-panel-input');
  }

  get howOftenDropDown() {
    return $('div[role="combobox"] > .ant-select-selection__rendered');
  }

  get copyLinkButton() {
    return $('.ant-input-group-addon > .copy-link');
  }

  get facebookLogo() {
    return $('//a[@class="share-button --facebook"]');
  }

  get twitterLogo() {
    return $('//a[@class="share-button --twitter"]');
  }

  get linkedinLogo() {
    return $('//a[@class="share-button --linkedin"]');
  }

  get embedOptionsTab() {
    return $('//a[contains(text(),"Embed Options")]');
  }

  get inlineEmbedOption() {
    return $('.share-embed-toggle-container button:nth-of-type(1)');
  }

  get popOverEmbedTab() {
    return $('.false.share-embed-toggle > .share-embed-toggle-text');
  }

  get inlineEmbedStyleButton() {
    return $('(//div[@class="ant-select-selection__rendered"])[4]');
  }

  get buttonColor() {
    return $('(//span[@class="ant-input-group-addon"])[2]');
  }

  get buttonColorUnderInlineEmbed() {
    return $('(//span[@class="ant-input-group-addon"])[1]');
  }
  get buttonTextIputField() {
    return $('//input[@id="text"]');
  }

  get responsiveCheckBox() {
    return $('.share-content > div:nth-of-type(2) .ant-checkbox-wrapper-checked');
  }

  get formWidthField() {
    return $('.share-content > div:nth-of-type(2) [maxlength="3"]');
  }

  get embedCodeField() {
    return $('.share-content > div:nth-of-type(2) .share-embed-code');
  }
  get previewRegistrationForm() {
    return $('(//form[@class="demio-embed-form "])');
  }
  get firstNameField() {
    return $('(//input[@name="name"])');
  }

  get emailField() {
    return $('(//input[@name="email"])');
  }

  get previewFirstNameField() {
    return $('(//input[@name="name"])[2]');
  }

  get previewEmailField() {
    return $('(//input[@name="email"])[2]');
  }

  get registrationButton() {
    return $('form[method="post"] > button[type="submit"]');
  }

  get previewRegistrationButton() {
    return $('(//button[@type="submit"])[4]');
  }

  get popoverButtonColor() {
    return $('(//div[@class="color-picker-color"])[1]');
  }
  get popoverEmbedStyleButton() {
    return $('(//div[@class="ant-select-selection__rendered"])[4]');
  }
  get buttonSizeSmall() {
    return $('.ant-radio-group.ant-radio-group-outline.demio-radio-buttons-outline.share-embed-button-size > label:nth-of-type(1)');
  }
  get buttonSizeMedium() {
    return $('.ant-radio-group.ant-radio-group-outline.demio-radio-buttons-outline.share-embed-button-size > label:nth-of-type(2)');
  }
  get buttonSizeLarge() {
    return $('.ant-radio-group.ant-radio-group-outline.demio-radio-buttons-outline.share-embed-button-size > label:nth-of-type(3)');
  }
  get popoverResponsiveCheckBox() {
    return $('//span[@class="ant-checkbox ant-checkbox-checked"]');
  }

  get popoverButtonWidthField() {
    return $('//input[@id="buttonWidth"]');
  }

  get buttonTextFieldInPopover() {
    return $('//input[@id="buttonText"]');
  }

  get popoverButtonTextField() {
    return $('//input[@id="popoverText"]');
  }


  get popoverEmbedCodeField() {
    return $('//input[@id="popoverText"]');
  }

  // get previewRegistrationForm() {
  //   return $('//*[@id="event-manage-root"]/div/div[3]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/span/div/div/form');
  // }


  get previewRegisterButton() {
    return $('//a[@class="demio-embed-button"]');
  }

  get registrationTab() {
    return $('div:nth-of-type(1) > .Box > .Box-header');
  }

  get emailNotificationsTab() {
    return $('div:nth-of-type(2) > .Box > .Box-header');
  }

  get roomTab() {
    return $('div:nth-of-type(3) > .Box > .Box-header');
  }

  get eventAdminsTab() {
    return $('div:nth-of-type(4) > .Box > .Box-header');
  }
  get generalTab() {
    return $('div:nth-of-type(5) > .Box > .Box-header');
  }

  get integrationsTab() {
    return $('div:nth-of-type(6) > .Box > .Box-header');
  }

  get customizeRegistrationBtn() {
    return $('.Boxes > div:nth-of-type(1) div:nth-of-type(1) [role="tab"]:nth-of-type(1)');
  }

  get editFormFieldsBtn() {
    return $('.Boxes > div:nth-of-type(1) div:nth-of-type(1) .ant-tabs-tab:nth-of-type(2)');
  }

  get settingsButton() {
    return $('.Boxes > div:nth-of-type(1) div:nth-of-type(1) .ant-tabs-tab:nth-of-type(3)');
  }

  get thankYouPageToggleBtn() {
    return $('(//span[@class="ant-switch-inner"])[1]');
  }

  get customizeButton() {
    return $('.registration-box-button');
  }

  get firstNameOption() {
    return $('div:nth-of-type(1) > .registration-field');
  }

  get emailOption() {
    return $('div:nth-of-type(2) > .registration-field');
  }

  get firstNameDropDown() {
    return $('[data-rbd-droppable-id] [data-rbd-draggable-context-id="0"]:nth-of-type(1) .session-options-dropdown');
  }

  get emailDropDown() {
    return $('[data-rbd-droppable-id] [data-rbd-draggable-context-id="0"]:nth-of-type(2) .session-options-dropdown');
  }
  get showApiDetailsForName() {
    return $('(//ul[@role="menu"]/li[@role="menuitem"])[1]');
  }

  get showApiDetailsForEmail() {
    return $('(//ul[@role="menu"]/li[@role="menuitem"])[2]');
  }

  get enhansedValidationToggle() {
    return $('.registration-field-email-verification .ant-switch');
  }

  get addAnotherFieldOption() {
    return $('.registration-field-add > div');
  }
  get sessionRegistrationToggle() {
    return $('.registration-settings-form-field .ant-switch');
  }
  get visibleUpcomingSessionField() {
    return $('//input[@role="spinbutton"]');
  }

  get saveAndCloseButton() {
    return $('//button[@class="editor-save"]');
  }



  get templateDropDown() {
    return $('li:nth-of-type(1) > .ant-menu-submenu-title');
  }

  get brandingDropDown() {
    return $('li:nth-of-type(2) > .ant-menu-submenu-title');
  }

  get brandingDropDownOnReplayScreen() {
    return $('(//li[@class="ant-menu-submenu ant-menu-submenu-inline"])[2]');
  }

  get elementsDropDown() {
    return $('li:nth-of-type(3) > .ant-menu-submenu-title');
  }

  get socialDropDown() {
    return $('li:nth-of-type(4) > .ant-menu-submenu-title');
  }
  get templateMenuDropdown() {
    return $('li[role="menuitem"] > .ant-form-item.ant-row div[role="combobox"] > .ant-select-selection__rendered');
  }

  get accentOption() {
    return $('//ul[@role="listbox"]/li[1]');
  }

  get gradientOption() {
    return $('//ul[@role="listbox"]/li[2]');
  }

  get backGroundImageOption() {
    return $('//ul[@role="listbox"]/li[3]');
  }

  get uploadImageOption() {
    return $('//span[@class="ant-upload ant-upload-btn"]');
  }
  get uploadImageOptionForAuto() {
    return $('(//span[@class="ant-upload ant-upload-btn"])[2]');
  }
  get editSettingsButton() {
    return $('.editor-column [role="menuitem"]:nth-of-type(4) [type]');
  }



  get colorSchemeOption() {
    return $('//*[@id="branding$Menu"]/li/div[2]/div/div/span/div/div/div[2]/div/span/div/span/span/input');
  }

  get headlineToggleButton() {
    return $('li[role="menuitem"] > div:nth-of-type(1) button[role="switch"]');
  }

  get subHeadlineToggleButton() {
    return $('li[role="menuitem"] > div:nth-of-type(2) button[role="switch"]');
  }

  get videoToggleButton() {
    return $('li[role="menuitem"] > div:nth-of-type(3) button[role="switch"]');
  }

  get featuredPresentersToggle() {
    return $('li[role="menuitem"] > div:nth-of-type(5) button[role="switch"]');
  }

  get descriptionToggle() {
    return $('li[role="menuitem"] > div:nth-of-type(4) button[role="switch"]');
  }


  get selectFieldDropDown() {
    return $('//div[contains(text(),"Select an option")]');
  }
  get lastNameOption() {
    return $('//div[@data-id="Last Name"]|//div[@data-id="last_name"]');
  }

  get websiteOption() {
    return $('//div[@data-id="Website"]|//div[@data-id="website"]');
  }

  get companyOption() {
    return $('//div[@data-id="Company"]|//div[@data-id="company"]');
  }

  get phoneNumberOption() {
    return $('//div[@data-id="Phone Number"]|//div[@data-id="phone_number"]');
  }

  get gdprOption() {
    return $('//div[@data-id="GDPR"]|//div[@data-id="gdpr"]');
  }

  get createCustomField() {
    return $('//div[@class="registration-modal-field-option --custom"]');
  }

  get addFormFieldButton() {
    return $('.--right.Button.animated.ant-btn.ant-btn-primary.fadeIn');
  }

  get selectFieldTypeDropDown() {
    return $('div.Demio-Select-field.full-width label:nth-child(1) div.Demio-Select > div.Demio-Select-selection.--default-option-selected');
  }

  get textOption() {
    return $('//div[@data-id="text"]');
  }

  get textAreaOption() {
    return $('//div[@data-id="textarea"]');
  }

  get dropDownOption() {
    return $('//div[@data-id="dropdown"]');
  }

  get checkBoxOption() {
    return $('//div[@data-id="checkbox"]');
  }
  get labelField() {
    return $('//input[@placeholder="Introduce the label"]');
  }


  get saveSubheadlineButton() {
    return $('//div[@class="save-button-container"]//button');
  }

  get subheadlineField() {
    return $('//input[@id="subHeadline"]');
  }

  get saveVideoButton() {
    return $('(//div[@class="save-button-container"])//button');
  }


  get videoLinkField() {
    return $('input[id="videoURL"]');
  }

  get descriptionField() {
    return $('trix-editor[role="textbox"]');
  }

  get saveDescriptionButton() {
    return $('(//div[@class="save-button-container"])//button');
  }

  get addPresenterButton() {
    return $('(//button[@class="ant-btn Button animated fadeIn ant-btn-primary"])[3]|//form//button[@class="ant-btn Button animated fadeIn ant-btn-primary"]');
  }



  get presenterNameField() {
    return $('//div[@class="presenter-container"]//input[@id="name"]|(//input[@id="name"])[2]');
  }

  get presenterTitleField() {
    return $('//input[@id="title"]');
  }


  get presenterWebsiteField() {
    return $('//div[@class="presenter-container"]//input[@id="website"]|(//div[@class="ant-modal-body"])[2]//input[@id="website"]');
  }

  get presenterBioField() {
    return $('//textarea[@id="description"]');
  }

  get titleField() {
    return $('//input[@id="metaTitle"]');
  }

  get socialDescriptionField() {
    return $('//textarea[@placeholder="Enter description"]');
  }

  get saveOpenGraphBtn() {
    return $('(//div[@class="save-button-container"]//button)');
  }

  get doneButton() {
    return $('.ant-btn-sm');
  }

  get sessionRegistrationsField() {
    return $('.limit .ant-input-number-input');
  }


  get instantConfirmationToggle() {
    return $('.reminder-list-container > div > div:nth-of-type(1) > button[role="switch"]');
  }

  get hoursBeforeToggle() {
    return $('.reminder-list-container > div > div:nth-of-type(2) > button[role="switch"]');
  }

  get oneHourBeforeToggle() {
    return $('.reminder-list-container > div > div:nth-of-type(3) > button[role="switch"]');
  }

  get minutesBeforeToggle() {
    return $('.reminder-list-container > div > div:nth-of-type(4) > button[role="switch"]');
  }

  get replayFollowUpToggle() {
    return $('.reminder-list-container > div > div:nth-of-type(5) > button[role="switch"]');
  }

  get replayFollowUpDropDown() {
    return $('[class="reminder-special-options flex-1"] .ant-select-selection__rendered');
  }


  get allRegistrantsOption() {
    return $('ul[role="listbox"] > li:nth-of-type(1)');
  }

  get attendeesOption() {
    return $('ul[role="listbox"] > li:nth-of-type(2)');
  }

  get noShowsOption() {
    return $('ul[role="listbox"] > li:nth-of-type(3)');
  }


  get instantConfEditEmailOption() {
    return $('div:nth-of-type(1) > .edit-reminder > a');
  }

  get hoursBeforeEditEmail() {
    return $('div:nth-of-type(2) > .edit-reminder > a');
  }

  get oneHourBeforeEditEmail() {
    return $('div:nth-of-type(3) > .edit-reminder > a');
  }

  get minutesBeforeEditEmail() {
    return $('div:nth-of-type(4) > .edit-reminder > a');
  }

  get replayFollowUpEditEmail() {
    return $('div:nth-of-type(5) > .edit-reminder > a');
  }

  get saveNotificationButton() {
    return $('.save-reminder-button');
  }

  get editEmailField() {
    return $('textarea[placeholder="Enter custom text here..."]');
  }

  get eventTimeZoneDropDown() {
    return $('.customize-general-box .ant-form-item:nth-of-type(1) [role]');
  }

  get eventLanguageDropDown() {
    return $('.customize-general-box .ant-form-item:nth-of-type(2) [role]');
  }


  get resourceOption() {
    return $('.room-block-tabs div:nth-of-type(1) [role="tab"]:nth-of-type(1)');
  }

  get presentationMaterialsOption() {
    return $('.room-block-tabs div:nth-of-type(1) .ant-tabs-tab:nth-of-type(2)');
  }

  get roomSettingsOption() {
    return $('.room-block-tabs div:nth-of-type(1) .ant-tabs-tab:nth-of-type(3)');
  }

  get addAResourceButton() {
    return $('//div[@class="text-btn-container room"]//button');
  }

  get addMaterialOption() {
    return $('.ant-tabs-vertical [role="tabpanel"]:nth-of-type(2) .ant-btn-primary');
  }

  get publicChatTab() {
    return $('div:nth-of-type(1) > .schedule-type-box-margin');
  }

  get privateChatTab() {
    return $('div:nth-of-type(2) > .schedule-type-box-margin');
  }
  get postSessionRedirectToggle() {
    return $('.form-item-border-bottom .ant-switch-inner');
  }
  get typeOfResourceDropDown() {
    return $('//div[@id="product-tour-resource-type-dropdown"]//div');
  }

  get pollOption() {
    return $('//div[@id="product-tour-resource-type-poll"]');
  }

  get handoutOption() {
    return $('//div[@id="product-tour-resource-type-handout"]');
  }

  get featuredActionOption() {
    return $('//div[@id="product-tour-resource-type-featured-action"]');
  }

  get questionField() {
    return $('//input[@id="title"]');
  }

  get optionField() {
    return $('div.demio-tags-input div.Demio-Input-field div.Demio-Input-container > input:nth-child(1)');
  }

  get option2Field() {
    return $('.material-container div:nth-of-type(3) input');
  }

  get addAnotherOption() {
    return $('.ant-modal-body div[role="tabpanel"] .Demio-Select-selection');
  }

  get option3Field() {
    return $('.material-container div:nth-of-type(4) [type]');
  }

  get optionDeleteOption() {
    return $('(//a[@class="demio-tag-remove"])[1]');
  }

  get shareResultsCheckBox() {
    return $('.ant-checkbox');
  }

  get addResourceButton() {
    return $('//button[@class="ant-btn Button animated fadeIn --right ant-btn-primary"]');
  }

  get handoutTitleField() {
    return $('//input[@id="title"]');
  }

  get uploadMediaField() {
    return $('//div[@class="material-container"]//span[@role="button"]');
  }

  get featuredTitleField() {
    return $('//input[@id="title"]');
  }

  get linkUrlField() {
    return $('//input[@id="linkURL"]');
  }

  get buttonTextField() {
    return $('//input[@id="buttonText"]');
  }


  get typeOfMaterialDropDown() {
    return $('.ant-modal-body div[role="tabpanel"] .Demio-Select-selection');
  }


  get slidesOption() {
    return $('//div[@data-id="presentation"]');
  }

  get videoOption() {
    return $('//div[@data-id="video-material"]');
  }

  get addMaterialButton() {
    return $('.--right.Button.animated.ant-btn.ant-btn-primary.fadeIn');
  }

  get materialNameField() {
    return $('//input[@id="name"]');
  }

  get addCustomUrlField() {
    return $('//span//input[@placeholder="Add a custom URL"]');
  }

  get hostNameInEventAdmin() {
    return $('.admin-name');
  }

  get swapHostBtnInEventAdmin() {
    return $('.swap-host-button');
  }

  get teamMemberTab() {
    return $('.demio-radio-buttons-outline .ant-radio-button-wrapper:nth-of-type(1)');
  }

  get guestTab() {
    return $('.demio-radio-buttons-outline .ant-radio-button-wrapper:nth-of-type(2)');
  }

  get chooseMemberDropDown() {
    return $('div#choose-member > .Demio-Select-selection');
  }

  get addedMemberName() {
    return $('.scroll-container > .user-popover-option.--selected');
  }

  get addAnotherUserOption() {
    return $('.user-select-container > .add-host');
  }

  get selectRoleDropdown() {
    return $('[class] .Demio-Select-field:nth-of-type(3) [tabindex]');
  }

  get hostOption() {
    return $('.--custom-options.Demio-Select-options > div:nth-of-type(1)');
  }

  get presenterOption() {
    return $('//div[contains(text(),"Presenter")]');
  }

  get moderatorOption() {
    return $('//div[contains(text(),"Moderator")]');
  }

  get allSessionButton() {
    return $('.--big.--black.--form.--thin.Button.admin-session-select-button.animated.ant-btn.ant-btn-default.fadeIn');
  }

  get addAdminButton() {
    return $('.--big.ant-btn-primary');
  }

  get inviteAdminCheckBox() {
    return $('//span[@class="ant-checkbox ant-checkbox-checked"]');
  }

  get confirmButton() {
    return $('.admin-dates-button');
  }

  get eventAtFirstIndex() {
    return $('//*[@id="my-events"]/div/div[2]/div[2]/div[1]/div/div/a')
  }


  get nameField() {
    return $('input[name="name"]');
  }

  get emailFieldForAdmin() {
    return $('input[id="email"]');
  }

  get selectRoleGuestDropDown() {
    return $('div:nth-of-type(4) .Demio-Select-selection ');
  }


  get sessionDateTime() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(1)');
  }

  get adminTermOption() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(2)');
  }

  get registerOption() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(3)');
  }

  get sessionDropDown() {
    return $('(//button[@class="ant-btn info-button ant-dropdown-trigger session-options-dropdown Button animated fadeIn ant-btn-primary"])[2]');
  }

  get viewInsightsOption() {
    return $('//ul//li[contains(text(),"View Insights")]');
  }

  get editDateAndTimeOption() {
    return $('//ul//li[contains(text(),"Edit Date & Time")]');
  }

  get cancelSessionOption() {
    return $('//ul//li[contains(text(),"Cancel Session")]');
  }

  get registeredOptionForPast() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(2)');
  }
  get attendedOption() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(3)');
  }

  get missedOption() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(4)');
  }

  get messageOption() {
    return $('.ant-table-row.ant-table-row-level-0 > td:nth-of-type(5)');
  }

  get yesConfirmButton() {
    return $('.cancel-date-comfirm');
  }



  get scheduleSessionButton() {
    return $('.sessions-list-schedule-button');
  }


  get registerButton() {
    return $('//button[@type="submit"]');
  }

  get joinLinkOnSuccessPage() {
    return $('.join-link');
  }

  get joinRoomButtonOnSuccessPage() {
    return $('.join-room');
  }

  get manageYourRegistrationLink() {
    return $('.waiting-screen-manage');
  }

  get cancelRegistrationLink() {
    return $('.manage-cancel-link');
  }


  get peopleTab() {
    return $('//div[@class="share-tabs"]//span[contains(text(),"people")]');
  }


  get exportCSV() {
    return $('.people-export');
  }


  get noNeverMindOption() {
    return $('.ant-modal-confirm-btns .ant-btn:nth-of-type(1)');
  }

  get yesCancelOption() {
    return $('(//div[@class="ant-modal-body"]//button)[2]');
  }
  get joinRoomBtnUnderJoin() {
    return $('//div[contains(text(),"JOIN ROOM")]');
  }

  get leftHeaderButton() {
    return $('.header-controls-left');
  }

  get startSessionButton() {
    return $('.Button.animated.ant-btn.ant-btn-primary.fadeIn.false.webinar-start-button');
  }

  get yesButtonUnderPopup() {
    return $('//div[@class="ant-modal-body"]//button[2]');
  }
  get goOnStageButton() {
    return $('.go-on-stage-button');
  }

  get viewSharingOptionsBtn() {
    return $('.--button-strike.--share.admin-controls-button');
  }

  get shareMaterialOption() {
    return $('.share-material-container');
  }

  get endSessionButton() {
    return $('.--cancel.Button.animated.ant-btn.ant-btn-primary.fadeIn.false.webinar-start-button');
  }

  get shareReplayOption() {
    return $('//ul//li[contains(text(),"Share Replay")]');
  }

  get shareReplayOption() {
    return $('//ul//li[contains(text(),"Share Replay")]');
  }

  get downloadRecordingOption() {
    return $('//li//a[contains(text(),"Download Recording")]');
  }

  get deleteRecordingOption() {
    return $('//li[contains(text(),"Delete Recording")]');
  }

  get arrowInRecordingPopup() {
    return $('.session-join-room');
  }


  get playRecordingButton() {
    return $('.play-button > .fa.fa-play');
  }

  get nameOrEmailColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word ant-table-row-cell-last"])[2]');
  }

  get regDateAndTimeColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[1]');
  }

  get sessionDateAndTimeColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[2]');
  }

  get attendedColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[3]');
  }
  get joinTimeStampColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[4]');
  }

  get joinTimeStamp() {
    return $('//td//span[@class="session-selector-type past"]');
  }

  get exitTimeStampColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[5]');
  }

  get exitTimeStamp() {
    return $('(//td[@class="ant-table-row-cell-break-word"])[5]');
  }

  get attendanceMintsColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[6]');
  }
  get attendanceMints() {
    return $('td:nth-of-type(7) > span');
  }

  get attendancePerColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[7]');
  }
  get attendancePer() {
    return $('td:nth-of-type(8) > span');
  }

  get focusPerColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word"])[8]');
  }

  get locationColumn() {
    return $('(//th[@class="ant-table-row-cell-break-word ant-table-row-cell-last"])[1]');
  }

  get focusPer() {
    return $('td:nth-of-type(9) > span');
  }

  get regDateAndTime() {
    return $('td:nth-of-type(2) > span');
  }

  get sessionDateAndTime() {
    return $('td:nth-of-type(3) > span');
  }

  get attendedResult() {
    return $('td:nth-of-type(4) > span');
  }

  get nameOrEmail() {
    return $('.ant-table-body-inner .people-profile-name');
  }

  get insightsRegistered() {
    return $('.registered.stat');
  }

  get insightsMissed() {
    return $('.missed.stat');
  }

  get insightsAttended() {
    return $('//span[@class="stat"]');
  }

  get sessionDuration() {
    return $('//span[@class="stat"]');
  }

  get sessionDuration() {
    return $('.bottom-stat-container > div:nth-of-type(1) > div');
  }

  get averageTimeAttended() {
    return $('.bottom-stat.middle > div');
  }
  get averageTimeFocus() {
    return $('.bottom-stat-container > div:nth-of-type(3) > div');
  }

  get registrationGraph() {
    return $('(//canvas[@class="chartjs-render-monitor"])[1]');
  }

  get attendanceGraph() {
    return $('div.share-container > div:nth-child(2) canvas');
  }

  get chatResourceButton() {
    return $('.chat-resource-button');
  }

  get shareNowButton() {
    return $('.share');
  }

  get handoutsButton() {
    return $('.chat-header-left > div:nth-of-type(2)');
  }

  get downloadButton() {
    return $('.chat-handout-button');
  }


  get timerOnRegistrationPage() {
    return $('.demio-countdown');
  }

  get dayTimer() {
    return $('.demio-countdown > div:nth-of-type(1)');
  }

  get hoursTimer() {
    return $('.demio-countdown > div:nth-of-type(2)');
  }

  get minutesTimer() {
    return $('.demio-countdown > div:nth-of-type(3)');
  }

  get secondTimer() {
    return $('.demio-countdown > div:nth-of-type(4)');
  }


  get copyLinkButtonForJoinLink() {
    return $('.thanks-copy-link');
  }


  get addToCalendarButton() {
    return $('//a[contains(text(),"Add to Calendar")]|//div[@id="waiting-screen"]//button');
  }

  get appleCalendarOption() {
    return $('//a[contains(text(),"Apple Calendar")]');
  }

  get googleOption() {
    return $('//a[contains(text(),"Google")]');
  }

  get outlookOption() {
    return $('//a[contains(text(),"Outlook")]');
  }

  get outlookComOption() {
    return $('//a[contains(text(),"Outlook.com")]');
  }

  get yahooOption() {
    return $('//a[contains(text(),"Yahoo")]');
  }

  get appleCalendarOptionOnSuccessReg() {
    return $('//a[contains(text(),"Apple Calendar")]');
  }

  get googleOptionOnSuccessReg() {
    return $('//a[contains(text(),"Google")]');
  }

  get outlookOptionOnSuccessReg() {
    return $('//a[contains(text(),"Outlook")]');
  }

  get outlookComOptionOnSuccessReg() {
    return $('//a[contains(text(),"Outlook.com")]');
  }

  get yahooOptionOnSuccessReg() {
    return $('//a[contains(text(),"Yahoo")]');
  }
  get emailNotificationButton() {
    return $('button[role="switch"]');
  }

  get upcomingSessionDropdown() {
    return $('.demio-placeholder');
  }

  get emailNotificationButton() {
    return $('button[role="switch"]');
  }

  get locationOfUser() {
    return $('tr:nth-of-type(1) > td:nth-of-type(10)');
  }
  get editPageButton() {
    return $('.--big.--full-size.Button.animated.ant-btn.ant-btn-primary.fadeIn');
  }
  //---//
  get registerCount() {
    return $('(//button[@class="session-table-stat registered"])[1]');
  }

  get upcomingLink() {
    return $('(//span[@class="session-selector-type upcoming"])[2]');
  }


  get deleteRegistrationIcon() {
    return $('//i[@class="anticon anticon-delete"]');
  }

  get cancelRegistrationButton() {
    return $('(//button[@class="ant-btn Button animated fadeIn ant-btn-default"])[2]|//button[@class="ant-btn Button animated fadeIn --cancel ant-btn-default"]');
  }

  get yesButton() {
    return $('//button[@class="ant-btn ant-btn-primary"]');
  }

  get copyRegistrationLinkIcon() {
    return $('(//div[@class="copy-link"])[2]|(//button[@class="copy-link"])[2]');
  }

  get resendConfirmationButton() {
    return $('(//button[@class="ant-btn Button animated fadeIn ant-btn-default"])[1]|//button[@class="ant-btn Button animated fadeIn --black --icon-right ant-btn-default"]');
  }

  get deleteAdminButton() {
    return $('//li[@class="ant-dropdown-menu-item cancel-option"]');
  }

  get yesDeleteHostButton() {
    return $('//button[@class="ant-btn ant-btn-primary"]');
  }
  get addOptionField() {
    return $('div[class="Demio-Input-field"]>div>input');
  }

  get customizeRegistrationOption() {
    return $('//div[contains(text(),"Customize Registration")]');
  }

  get visibleUpcommingSessionField() {
    return $('//input[@role="spinbutton"]');
  }

  get sessionRegLimitField() {
    return $('(//input[@role="spinbutton"])[2]');
  }
  get textField() {
    return $('//div[@class="Demio-Input-container"]//textarea');
  }
  get textAreaField() {
    return $('(//div[@class="Demio-Input-container"]//input)[3]');
  }

  get thirdCustomizeFieldDropdown() {
    return $('(//div[@class="registration-field-edition"]//button)[3]');
  }
  get fourthCustomizeFieldDropdown() {
    return $('(//div[@class="registration-field-edition"]//button)[4]');
  }
  get makeRequiredFieldCheckbox() {
    return $('.ant-checkbox.ant-checkbox-checked');
  }

  get saveFormFieldButton() {
    return $('//button[@class="ant-btn Button animated fadeIn --right ant-btn-primary"]');
  }
  get editFieldOption() {
    return $('//li[contains(text(),"Edit Field")]');
  }
  get blackOutDatesLink() {
    return $('//div[@class="session-list-links"]//a');
  }

  get blackouteverySundayCheckbox() {
    return $('div.ant-checkbox-group.blackoutdates-daylist > label:nth-child(1)');
  }

  get confirmBlackoutDateButton() {
    return $('//button[@class="ant-btn blackoutdates-comfirm Button animated fadeIn ant-btn-primary"]');
  }
  get firstSundayInCalender() {
    return $('(//tbody[@class="ant-calendar-tbody"]//tr//td[1]//div[@aria-disabled="false"])[1]');
  }
  get clearAllBlackoutDatesLink() {
    return $('//a[@class="btn-red-color blackoutdates-clearall"]');
  }

  get exportCsvButtonForFirstResource() {
    return $('(//a[contains(text()," EXPORT CSV")])[1]');
  }
  get exportCsvButtonForSecondResource() {
    return $('(//a[contains(text()," EXPORT CSV")])[2]');
  }
  get exportCsvButtonForThirdResource() {
    return $('(//a[contains(text()," EXPORT CSV")])[3]');
  }
  get unarchiveEventButton() {
    return $('(//button[@class="ant-btn Button animated fadeIn --black ant-btn-default"])[1]');
  }

  get messageTab() {
    return $('//span[contains(text(),"messages")]');
  }

  get editSettingsPollResourceLink() {
    return $('(//div[@class="edit-material"])[2]');
  }
  get editSettingsHandoutResourceLink() {
    return $('(//div[@class="edit-material"])[1]');
  }
  get editSettingsFeatureResourceLink() {
    return $('(//div[@class="edit-material"])[3]');
  }

  get editFirstMaterialLink() {
    return $('(//div[@class="edit-material"])[1]');
  }

  get editSecondMaterialLink() {
    return $('(//div[@class="edit-material"])[2]');
  }

  get editAdminNameField() {
    return $('(//input[@name="name"])[2]');
  }
  get attendeesField() {
    return $('((//table[@class="table table-condensed table-stripped table-bordered"])[4]//td[2])[1]//input');
  }

  get stageLimitDropdown() {
    return $('select[id="stage_limit"]');
  }

  get selectHostButton() {
    return $('//button[@class="ant-btn swap-host-button Button animated fadeIn --icon-left ant-btn-primary"]');
  }

  get editEventTimeField() {
    return $('//input[@class="ant-time-picker-input"]');
  }

  get notifyRegistrantsCheckbox() {
    return $('//span[contains(text(),"Notify Registrants?")]');
  }

  get allSessionsButton() {
    return $('(//button[@class="ant-btn session-button admin-session-select-button Button animated fadeIn --black --thin --big --icon-left ant-btn-default"])[2]');
  }

  get downloadImageOrMediaOption() {
    return $('div[class="ant-dropdown ant-dropdown-placement-bottomRight"]>ul[role="menu"] > li:nth-of-type(1)');
  }
  get deleteImageOrMediaOption() {
    return $('div[class="ant-dropdown ant-dropdown-placement-bottomRight"]>ul[role="menu"] > li:nth-of-type(2)');
  }

  get noMaterialsScreen() {
    return $('(//div[@class="no-materials"])[1]');
  }

  get noMaterialsScreenForMaterials() {
    return $('(//div[@class="no-materials"])[2]');
  }

  get editSubheadlineOption() {
    return $('(//button[@class="link-button editor-configure"])[2]');
  }

  get editVideoOption() {
    return $('(//button[@class="link-button editor-configure"])[3]');
  }

  get editDescriptionOption() {
    return $('(//button[@class="link-button editor-configure"])[4]');
  }

  get editFeaturedPresentersOption() {
    return $('//button[@class="link-button edit-text"]');
  }

  get deleteFeaturePresentersButton() {
    return $('//i[@class="anticon anticon-delete icon-delete"]');
  }

  get sessionDropdownOnActivity() {
    return $('(//div[@class="session-header-section"]//button)[1]');
  }

  get pastSessionsOnActivity() {
    return $('(//span[@class="session-selector-tab-option"])[2]');
  }

  get gdprCheckboxOnRegPage() {
    return $('//input[@id="gdpr"]');
  }

  get allTab() {
    return $('//span[contains(text(),"all")]');
  }

  get currentDateUnderBlackoutDateSection() {
    return $('(//button[@class="rdp-button_reset rdp-button rdp-day rdp-day_today"])[1]');
  }

  get sessionDropDownOnInsightsPage() {
    return $('//div[@class="session-header-filter-type"]');
  }
  get dateRangeOption() {
    return $('//li[@title="Date Range"]');
  }
  get dateRangeCalendarField() {
    return $('(//input[@class="ant-calendar-range-picker-input"])[1]');
  }
  get currentDateOnDateRangeCalendar() {
    return $('//tr[@class="ant-calendar-current-week ant-calendar-active-week"]//div[@aria-selected="true"][@aria-disabled="false"]');
  }

  get closePopoverButton() {
    return $('//span[@class="close-popover"]');
  }

  get messageFilterButton() {
    return $('//div[@class="messages-filter"]');
  }
  get questionMessageFilterOption() {
    return $('//li[contains(text(),"Questions")]');
  }

  get deleteFieldButton() {
    return $('//li[@class="ant-dropdown-menu-item cancel-option"]');
  }
  get addNewEventOnScheduleTab() {
    return $('//div[@class="ant-dropdown-trigger"]');
  }


  get callToActionToggleButton() {
    return $('li[role="menuitem"] > div:nth-of-type(3) button[role="switch"]');
  }

  get ctaTitleField() {
    return $('input[id="ctaTitle"]');
  }

  get ctaButtonTextField() {
    return $('input[id="ctaButtonText"]');
  }

  get ctaButtonUrlField() {
    return $('input[id="ctaLink"]');
  }

  get saveSettingsButton() {
    return $('(//div[@class="save-button-container"]//button)');
  }

  get addedCtaButton() {
    return $('a[class="cta-button"]');
  }

  get emptyGraphContainer() {
    return $('//div[@class="activity-empty-container no-border"]');
  }

  get resourceNumberForFirstResource() {
    return $('(//button[@class="resources-number"])[1]');
  }
  get resourceNumberForSecondResource() {
    return $('(//button[@class="resources-number"])[2]');
  }
  get resourceNumberForThirdResource() {
    return $('(//button[@class="resources-number"])[3]');
  }

  get smileOptionInChatScreen() {
    return $('//i[@class="fa fa-smile-o"]');
  }

  get firstEmojiInList() {
    return $('(//div[@class="chat-menu-emojis-list"]//span)[1]');
  }

  get stopSessionFromRecurring() {
    return $('//li[@class="ant-dropdown-menu-item cancel-option"]');
  }

  get editEventIcon() {
    return $('#event-manage-root > div > div.session-header-top > div.session-header-section.left > svg > g > path');
  }

  get editEventNameField() {
    return $('//input[@id="name"]');
  }

  get saveEditEventButton() {
    return $('(//button[@class="ant-btn Button animated fadeIn ant-btn-primary"])[3]');
  }

  get filterButtonUnderPeopleTab() {
    return $('//div[@class="people-filter"]');
  }

  get registeredCountInSummary() { return $('//button[@class="session-table-stat registered"]'); }
  get missedCountInsummary() { return $('//button[@class="session-table-stat missed"]'); }
  get attendedCountInSummary() { return $('//button[@class="session-table-stat attended"]'); }
  get messagesCountInSummary() { return $('//button[@class="session-table-stat messages"]'); }
  get insightsOptionInActivity() { return $('//span[contains(text(),"insights")]'); }
  get insightsMessagesCount() {
    return $('.messages-number');
  }
  //-----------------------ACTION METHODS--------------//

  selectSearchedEvent(eventName) {

    this.eventAtFirstIndex.waitForDisplayed({ timeout: 8000 })
    var actEventName = this.eventAtFirstIndex.getText();

    if (actEventName.includes(eventName)) {
      this.eventAtFirstIndex.click();
    } else {
      throw new Error('EVENT NAME IS NOT MATCHED:  ACTUAL:' + actEventName + "EXPECTED: " + eventName);
    }
  }



  eventsTabIsDisplayed() {
    this.eventsTab.waitForDisplayed({ timeout: 30000 });
    return this.eventsTab.isDisplayed();
  }

  openEventsTab() {
    if (this.eventsTabIsDisplayed() === true) {
      this.eventsTab.click();
      browser.pause(1000);
    } else {
      throw new Error("Event tab is not clickable ..!")
    }
  }


  validateEventPage() {
    const elem = $(".events-header-title");
    elem.waitForDisplayed({ timeout: 10000 });
    var actTitle = elem.getText();
    var expTitle = "Events";
    if (actTitle.includes(expTitle)) {
      console.log("Event page loaded");
    } else {
      throw new Error("EVENT PAGE IS NOT LOADED  actual title>>" + actTitle + "expected title>>" + expTitle);
    }
  }
  goToTabsBelowHeader() {
    this.eventsFilterSection.scrollIntoView();
  }

  validateAddNewEventButton() {

    this.addNewEventButton.waitForClickable({ timeout: 10000 });
    if (this.addNewEventButton.isDisplayed() === true) {
      console.log("Add new event button is displaying")
    } else {
      throw new Error("Add new event button is not displayed ..!")
    }
  }


  clickOnAddNewEventButton() {
    if (this.addNewEventButton.isDisplayed() === true) {
      this.addNewEventButton.click();
    } else {
      throw new Error("Add new event button is not clickable ..!")
    }
  }
  backToEventsIsDisplayed() {
    this.backToEventsButton.waitForDisplayed({ timeout: 10000 });
    return this.backToEventsButton.isDisplayed();
  }

  validateEventCreationPage() {
    if (this.backToEventsIsDisplayed() === true) {
      console.log("user redirect on event creation page");
    } else {
      throw new Error("Event creation page is not loaded")
    }
  }

  goToEventNameField() {
    this.eventNameField.scrollIntoView();
  }

  fillEventNameField(eventName) {

    this.eventNameField.waitForDisplayed({ timeout: 6000 });
    this.eventNameField.setValue(eventName);
  }

  clickOnContinueButton() {
    this.continueButton.waitForExist({ timeout: 50000 })
    this.continueButton.scrollIntoView();
    if (this.continueButton.isDisplayed() === true) {
      this.continueButton.click();
    } else {

      throw new Error("Continue button is not clickable..!!!")
    }
  }

  eventNameFieldValidation(validationMsg) {
    // const box = $(".Box-title");
    // box.click();
    // browser.pause(3000);
    var actMsg = $("//div[@class='Demio-Input-hint']").getText();
    var expMsg = validationMsg;
    if (actMsg.includes(expMsg)) {
      console.log("Event name field validation matched");
    } else {
      console.log("ACTUAL: " + actMsg + " EXP: " + expMsg);
      throw new Error("VALIDATION MESSAGE MISSMATCHED..!!");
    }
  }

  clickOnSwapHostButton() {
    this.swapHostButton.scrollIntoView();
    if (this.swapHostButton.isDisplayed() === true) {
      this.swapHostButton.click();
    } else {
      throw new Error("Swap host button is not clickable..!!!")
    }
  }

  addDataInSearchField(standardEvent) {
    this.searchEventField.waitForDisplayed({ timeout: 30000 });
    this.searchEventField.setValue(standardEvent);
    browser.pause(1000);
    browser.keys(['Meta', 'Enter']);

  }

  validateSearchedEvent(seriesEvent) {
    var actEvent = $("(//div[@class='event-block-title'])[1]").getText();
    if (actEvent.includes(seriesEvent)) {
      console.log("searched event is displaying");
    } else {
      throw new Error("SEARCHED EVENT IS NOT DISPLAYING");
    }
  }

  validateNothingFoundValidation(validationMsg) {
    var actMessage = $("(//div[@class='header-message'])[1]").getText();
    var expMessage = validationMsg;
    if (actMessage.includes(expMessage)) {
      console.log("Validation message matched");
    } else {
      console.log("actual message>>" + actMessage + "expected message>>" + expMessage);
      throw new Error("NOTHING FOUND VALIDATION MESSAGE MISSMATCHED");
    }
  }

  eventNameFieldIsDisplayed() {
    return this.eventNameField.isDisplayed();
  }

  eventHostNameIsDisplayed() {
    this.eventHostName.scrollIntoView();
    return this.eventHostName.isDisplayed();
  }

  swapHostButtonIsDisplayed() {
    return this.swapHostButton.isDisplayed();
  }

  continueButtonIsDispaly() {
    return this.continueButton.isDisplayed();
  }
  eventTypeButtonIsDisplay() {
    return this.eventTypeButton.isDisplayed();

  }

  summaryTabIsDisplay() {
    // this.summaryTab.scrollIntoView();
    this.summaryTab.waitForDisplayed({ timeout: 10000 });
    return this.summaryTab.isDisplayed();
  }

  openSummaryTab() {
    this.summaryTab.scrollIntoView(0, 200);
    if (this.summaryTabIsDisplay() === true) {
      this.summaryTab.click();
    } else {
      throw new Error('Somting went worng with summary tab');
    }
  }

  validateManageEventScreen() {
    if (this.summaryTabIsDisplay() === true) {
      console.log("User redirect to manage event screen");
    } else {
      throw new Error("MANAGE EVENT SCREEN IS NOT LOADED");
    }

  }

  scheduleThisEventIsDisplay() {

    this.scheduleThisEventButton.waitForDisplayed({ timeout: 10000 });
    return this.scheduleThisEventButton.isDisplayed();
  }

  clickScheduleThisEventButton() {
    if (this.scheduleThisEventIsDisplay() === true) {
      this.scheduleThisEventButton.click();

    } else {
      throw new Error("SCHEDULE THIS EVENT BUTTON IS NOT DISPLAY");
    }
  }

  addToEventScheduleIsDisplay() {
    return this.addToEventScheduleButton.isDisplayed();
  }

  clickAddToEventScheduleButton() {
    if (this.addToEventScheduleIsDisplay() === true) {
      this.addToEventScheduleButton.scrollIntoView();
      this.addToEventScheduleButton.waitForClickable({ timeout: 8000 })
      this.addToEventScheduleButton.click();
      browser.pause(500);
      // browser.refresh();
    } else {
      throw new Error("ADD TO EVENT BUTTON IS NOT DISPLAYED");
    }
  }
  validateScheduledEvent(eventName) {
    const actEvent = $("(//a[contains(text(),'" + eventName + "')])[1]");
    actEvent.scrollIntoView();
    if (actEvent.isDisplayed() == true) {
      console.log("event displaying under schedule tab");
    } else {
      throw new Error("SCHEDULED EVENT IS NOT DISPLAYING UNDER SCHEDULE TAB")
    }

  }
  customizeTabIsDisplay() {
    this.customizeTab.scrollIntoView(0, 200);
    this.customizeTab.waitForDisplayed({ timeout: 30000 });
    return this.customizeTab.isDisplayed();
  }

  shareTabIsDisplay() {
    this.shareTab.waitForDisplayed({ timeout: 30000 });
    return this.shareTab.isDisplayed();
  }

  activityTabIsDisplay() {
    return this.activityTab.isDisplayed();
  }

  joinRoomButtonIsDisplay() {
    // this.joinRoomButton.scrollIntoView();
    return this.joinRoomButton.isDisplayed();
  }

  sessionEditIconIsDispaly() {
    return this.sessionEditIcon.isDisplayed();
  }

  upcomingSessionIsDisplay() {
    this.upcomingSessionsOption.waitForDisplayed({timeout:10000});
    this.upcomingSessionsOption.scrollIntoView(0, 100);
    return this.upcomingSessionsOption.isDisplayed();
  }

  pastSessionsIsDisplay() {
    return this.pastSessionsOption.isDisplayed();
  }

  onDemandOffIsDisplay() {
    return this.onDemandOffOption.isDisplayed();
  }

  blackOutDatesIsDisplay() {
    return this.blackOutDatesOption.isDisplayed();
  }

  viewRegistrationPageIsDisplay() {
    return this.viewRegistrationPage.isDisplayed();
  }

  duplicateEventOptionIsDisplay() {
    return this.duplicateEventOption.isDisplayed();
  }

  archiveEventOptionIsDisplay() {
    return this.archiveEventOption.isDisplayed();
  }

  sessionOptionsButtonIsDisplay() {
    this.sessionOptionsDropDown.scrollIntoView(0, 200);
    this.sessionOptionsDropDown.waitForDisplayed({ timeout: 8000 });
    return this.sessionOptionsDropDown.isDisplayed();

  }
  openSessionOptionsList() {
    this.sessionOptionsDropDown.waitForDisplayed({ timeout: 10000 });
    // this.sessionOptionsDropDown.moveTo();
    if (this.sessionOptionsButtonIsDisplay() === true) {
      this.sessionOptionsDropDown.click();
      browser.pause(2000);
    } else {
      throw new Error("DROP DOWN BUTTON IS NOT DISPALY");
    }
  }

  validateScheduleUpcomingSessionPage() {
    var actHeader = $("//div[@class='add-session-header']").getText();
    var expHeader = "Schedule Upcoming Sessions";
    if (actHeader.includes(expHeader)) {
      console.log("Schedule upcoming session screen is loaded");
    } else {
      throw new Error("SCHEDULE UPCOMING SESSSION SCREEN IS NOT LOADED..!!");
    }
  }

  singleDateAndTimeIsDisplay() {
    return this.singleDateAndTimeOption.isDisplayed();
  }

  recurringTimeOptionIsDisplay() {
    return this.recurringTimeOption.isDisplayed();
  }

  singleDateAndTimeOptionSelected() {
    var actClass = this.singleDateAndTimeOption.getAttribute("class");
    var expClass = "flex schedule-type-box-thin schedule-type-box --selected";
    if (actClass.includes(expClass)) {
      console.log("single date and time option is selected by default");
    } else {
      throw new Error("BY DEFAULT SINGLE DATE AND TIME OPTION IS NOT SELECTED");
    }

  }

  selectDateFieldIsDisplay() {
    return this.selectDateField.isDisplayed();
  }

  selectTimeFieldIsDisplay() {
    return this.selectTimeField.isDisplayed();
  }

  selectFutureDate(futureDate) {
    this.selectDateField.click();
    // this.calendarInputField.waitForDisplayed({ timeout: 10000 });
    // this.calendarInputField.clearValue();
    // this.calendarInputField.setValue(futureDate);
    browser.keys(['Meta', 'Enter']);
    browser.pause(1000);

  }

  selectFutureTime(futureTime) {
    this.selectTimeField.click();
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    this.timeInputField.setValue(futureTime);
    browser.keys(['Meta', 'Enter']);
    const clockIcon = $('.ant-time-picker-clock-icon.anticon.anticon-clock-circle > svg');
    clockIcon.click();
    browser.pause(200);

  }

  validateSuccessMessage() {
    this.successMessage.waitForDisplayed({ timeout: 10000 });
    var Message = this.successMessage.getText();
    return Message;

  }
  eventUnderUpcomingSessionTab() {
    // $(".ant-table-fixed > .ant-table-tbody").waitForDisplayed({ timeout: 10000 });
    return $(".ant-table-fixed > .ant-table-tbody").isDisplayed();
  }
  clickOnRecurringTimes() {
    if (this.recurringTimeOptionIsDisplay() == true) {
      this.recurringTimeOption.click();
    } else {
      throw new Error("RECURRING TIMES OPTION IS NOT DISPLAY");
    }
  }

  howOftenDropDownIsDisplay() {
    return this.howOftenDropDown.isDisplayed();
  }

  clickOnHowOftenButton() {
    if (this.howOftenDropDownIsDisplay() == true) {
      this.howOftenDropDown.click();
    } else {
      throw new Error("HOW OFTEN BUTTON IS NOT CLICKED");
    }
  }

  selectHowOftenOption(option) {
    $("//li[contains(text(),'" + option + "')]").click();

  }

  clickOnShareTab() {
    if (this.shareTabIsDisplay() == true) {
      this.shareTab.scrollIntoView(0, 200)
      this.shareTab.click();
    } else {
      throw new Error("SHARE TAB IS NOT DISPLAYING");
    }
  }

  eventRegistrationLinkIsDisplay() {
    const registrationLink = $(".ant-input-wrapper [type]");
    return registrationLink.isDisplayed();

  }

  clickOnCopyLinkButton() {
    if (this.copyLinkButton.isDisplayed() === true) {
      this.copyLinkButton.click();
      browser.pause(200);
    } else {
      throw new Error("COPY LINK BUTTON IS NOT DIPSLAYING")
    }
  }
  validateCopiedLinkMessage() {
    const message = $("//div[@class='embed-code-copied']");
    message.waitForDisplayed({ timeout: 10000 });
    var actText = message.getText();
    var expText = "Link copied to clipboar";
    if (actText.includes(expText)) {
      console.log("link copied successfully");
    } else {
      console.log("actual text>>" + actText + "expected text>>" + expText);
      throw new Error("USER IS FAILED TO COPY EVENT LINK");
    }

  }

  facebookLogoIsDisplay() {
    this.facebookLogo.waitForDisplayed({ timeout: 6000 });
    return this.facebookLogo.isDisplayed();
  }

  twitterLogoIsDisplay() {
    this.twitterLogo.waitForDisplayed({ timeout: 6000 });
    return this.twitterLogo.isDisplayed();
  }

  linkedinLogoIsDisplay() {
    this.linkedinLogo.waitForDisplayed({ timeout: 6000 });
    return this.linkedinLogo.isDisplayed();
  }

  embedOptionsTabIsDisplay() {
    this.embedOptionsTab.waitForDisplayed({ timeout: 6000 });
    return this.embedOptionsTab.isDisplayed();
  }

  clickOnEmbedOptionsTab() {
    if (this.embedOptionsTabIsDisplay()) {
      this.embedOptionsTab.click();
    } else {
      throw new Error("EMBED OPTIONS TAB IS NOT DISPLAYING");
    }
  }


  inlineEmbedTabIsDisplay() {
    this.inlineEmbedOption.waitForDisplayed({ timeout: 6000 });
    return this.inlineEmbedOption.isDisplayed();
  }

  popOverEmbedTabIsDisplay() {
    this.popOverEmbedTab.waitForDisplayed({ timeout: 6000 });
    return this.popOverEmbedTab.isDisplayed();
  }

  inlineEmbedStyleButtonIsDisplay() {
    this.inlineEmbedStyleButton.waitForDisplayed({ timeout: 6000 });
    return this.inlineEmbedStyleButton.isDisplayed();
  }

  buttonColorIsDisplay() {
    this.buttonColor.waitForDisplayed({ timeout: 6000 })
    return this.buttonColor.isDisplayed();
  }

  buttonColorUnderInlineEmbedIsDisplay() {
    this.buttonColorUnderInlineEmbed.waitForDisplayed({ timeout: 6000 })
    return this.buttonColorUnderInlineEmbed.isDisplayed();
  }
  buttonTextFieldIsDisplay() {
    this.buttonTextField.waitForDisplayed({ timeout: 6000 });

    return this.buttonTextField.isDisplayed();

  }

  formWidthFieldIsDisplay() {
    return this.formWidthField.isDisplayed();

  }

  responsiveCheckBoxIsDisplay() {
    browser.pause(200);
    this.responsiveCheckBox.scrollIntoView();
    browser.pause(500);
    return this.responsiveCheckBox.isDisplayed();
  }

  embedCodeFieldIsDisplay() {
    this.embedCodeField.scrollIntoView();
    return this.embedCodeField.isDisplayed();
  }

  previewRegistrationFormIsDisplay() {
    this.previewRegistrationForm.scrollIntoView();
    return this.previewRegistrationForm.isDisplayed();
  }

  validateInlineEmbedIsSelected() {
    var actClass = this.inlineEmbedOption.getAttribute("class");
    var expClass = "share-embed-toggle active";
    if (actClass.includes(expClass)) {
      console.log("InlineEmbed option is selected by default");
    } else {
      throw new Error("INLINE EMBED OPTION IS NOT SELECTED BY DEFAULT");
    }
  }

  clickOnInlineEmbedStyle() {
    if (this.inlineEmbedStyleButtonIsDisplay()) {
      this.inlineEmbedStyleButton.scrollIntoView(0, 200);
      this.inlineEmbedStyleButton.click();

    } else {
      throw new Error("INLINE EMBED STYLE BUTTON IS NOT DISPLAYING")
    }
  }
  selectInlineEmbedStyle(option) {
    const styleOption = $("(//li[contains(text(),'" + option + "')])[1]");
    styleOption.click();


  }

  clickOnButtonColor() {
    // this.buttonColor.scrollIntoView();
    this.buttonColor.click();
    browser.pause(1000);

  }
  clickOnButtonColorUnderInlineEmbed() {
    // this.buttonColorUnderInlineEmbed.scrollIntoView();
    this.buttonColorUnderInlineEmbed.click();
    browser.pause(1000);

  }
  markResponsiveCheckBox() {
    this.responsiveCheckBox.scrollIntoView();
    var actClass = this.responsiveCheckBox.getAttribute("class");
    console.log("actual mark>>" + actClass);
    var expClass = "ant-checkbox-wrapper ant-checkbox-wrapper-checked";
    if (actClass.includes(expClass)) {
      console.log("Responsive check box marked");
    } else {
      throw new Error("USER FAILED TO MARK RESPONSIVE CHECKBOX ");
    }
  }

  unMarkResponsiveCheckBox() {
    var actClass = this.responsiveCheckBox.getAttribute("class");
    var expClass = "ant-checkbox-wrapper ant-checkbox-wrapper-checked";
    console.log("actual unmark>>" + actClass);

    if (actClass.includes(expClass)) {
      console.log("click on responsive check box");
      this.responsiveCheckBox.scrollIntoView(0, 100)
      this.responsiveCheckBox.click();
      browser.pause(1000);
    } else {
      throw new Error("RESPONSIVE CHECKBOX IS NOT WORKING");
    }


  }

  addFormWidthData(formWidth) {
    // this.formWidthField.scrollIntoView();
    browser.pause(500);
    this.formWidthField.click();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    this.formWidthField.setValue(formWidth);
    browser.pause(500);

  }

  validateUpdatedFormWidth(formWidth) {
    const previewRegistrationForm = $("(//form[@class='demio-embed-form '])")

    previewRegistrationForm.scrollIntoView();
    var actWidth = previewRegistrationForm.getAttribute("style").replace("width:", " ").replace("px", " ");

    if (actWidth.includes(formWidth)) {
      console.log("width updated successfully");
    } else {
      throw new Error("FORM WIDTH FIELD IS NOT WORKING actual width>>" + actWidth + "Expected width>>" + formWidth);
    }
  }

  registratioNameFieldIsDisplayed() {

    this.firstNameField.waitForDisplayed({ timeout: 60000 })
    return this.firstNameField.isDisplayed();
  }

  addFirstNameFieldData(firstName) {

    if (this.registratioNameFieldIsDisplayed() === true) {
      this.firstNameField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.firstNameField.setValue(firstName)
    } else {
      throw new Error('Something went worng with Registarion name field')
    }
  }
  previewRegistratioNameFieldIsDisplayed() {
    this.previewFirstNameField.waitForDisplayed({ timeout: 60000 })
    return this.previewFirstNameField.isDisplayed();
  }

  addPreviewFirstNameFieldData(firstName) {
    if (this.previewRegistratioNameFieldIsDisplayed() === true) {
      this.previewFirstNameField.scrollIntoView(0, 100)
      this.previewFirstNameField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.previewFirstNameField.setValue(firstName)
    } else {
      throw new Error('Something went worng with Registarion name field')
    }
  }

  registrationEmailFieldIsDisplayed() {
    this.emailField.waitForDisplayed({ timeout: 6000 });
    return this.emailField.isDisplayed();
  }
  addEmailField(email) {
    if (this.registrationEmailFieldIsDisplayed() === true) {
      this.emailField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.emailField.setValue(email);
      browser.pause(100);
    } else {
      throw new Error('Somethings went worng with  registration email field');
    }
  }
  previewRegistrationEmailFieldIsDisplayed() {
    this.previewEmailField.waitForDisplayed({ timeout: 6000 });
    return this.previewEmailField.isDisplayed();
  }
  addPreviewEmailField(email) {
    if (this.previewRegistrationEmailFieldIsDisplayed() === true) {
      this.previewEmailField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.previewEmailField.setValue(email);
    } else {
      throw new Error('Somethings went worng with  registration email field');
    }
  }


  clickOnRegistrationButton() {
    if (this.registrationButton.isDisplayed() == true) {
      this.registrationButton.click();
    } else {
      throw new Error("REGISTRATION BUTTON IS NOT DISPALY")
    }
  }

  clickOnPreviewRegistrationButton() {
    if (this.previewRegistrationButton.isDisplayed() == true) {
      this.previewRegistrationButton.click();
    } else {
      throw new Error("REGISTRATION BUTTON IS NOT DISPALY")
    }
  }


  addNewButtonText(buttonText) {
    this.buttonTextIputField.scrollIntoView();
    this.buttonTextIputField.setValue(buttonText);
    browser.pause(500);
  }

  validateUpdatedButtonText() {
    const registrationButton = $("//div[@class='share-embed-preview']//button");
    var actText = this.buttonTextIputField.getAttribute("value");
    registrationButton.scrollIntoView();
    var expText = this.registrationButton.getText();
    if (actText.includes(expText)) {
      console.log("button text updated successfully");
    } else {
      throw new Error("BUTTON TEXT IS NOT UPDATED actual text>>" + actText + "expected text>>" + expText);
    }
  }

  addNewColorCode(colorCode) {
    const inputField = $(".flexbox-fix input");
    inputField.click();
    // inputField.clearValue();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(3000);
    inputField.setValue(colorCode);
    browser.pause(3000);
  }

  validateUpdatedButtonColor(colorCode) {
    this.buttonColor.scrollIntoView();
    this.buttonColor.waitForDisplayed({ timeout: 6000 });
    const elem = $("div:nth-of-type(2) > .share-embed-left .share-color-picker .ant-input");
    elem.waitForDisplayed({ timeout: 6000 });
    browser.pause(3000);
    var actColor = elem.getAttribute("value");
    browser.pause(1000);
    if (actColor.includes(colorCode)) {
      console.log("button color is working");
    } else {
      throw new Error("BUTTON COLOR IS NOT WORKING  actual color>>" + actColor + "Expect: " + colorCode);
    }

  }

  validateUpdatedButtonColorUnderInlineEmbed(colorCode) {
    this.buttonColorUnderInlineEmbed.scrollIntoView();
    this.buttonColorUnderInlineEmbed.waitForDisplayed({ timeout: 6000 });
    const elem = $(".share-embed-left .share-color-picker .ant-input");
    elem.waitForDisplayed({ timeout: 6000 });
    var actColor = elem.getAttribute("value");
    browser.pause(1000);
    if (actColor.includes(colorCode)) {
      console.log("button color is working");
    } else {
      throw new Error("BUTTON COLOR IS NOT WORKING  actual color>>" + actColor + "Expect: " + colorCode);
    }

  }


  clickOnPopoverEmbedOption() {
    if (this.popOverEmbedTabIsDisplay() === true) {
      this.popOverEmbedTab.click();
    } else {
      throw new Error("Popover EMBED TAB IS NOT DISPLAY");
    }
  }

  popoverEmbedStyleDisplay() {
    this.popoverEmbedStyleButton.waitForDisplayed({ timeout: 6000 });
    return this.popoverEmbedStyleButton.isDisplayed();
  }

  popoverButtonColorIsDisplay() {
    this.popoverButtonColor.waitForDisplayed({ timeout: 6000 });
    return this.popoverButtonColor.isDisplayed();
  }

  buttonSizeSmallIsDisplay() {
    this.buttonSizeSmall.waitForDisplayed({ timeout: 6000 });
    return this.buttonSizeSmall.isDisplayed();
  }
  buttonSizeMediumIsDisplay() {
    this.buttonSizeMedium.waitForDisplayed({ timeout: 6000 });
    return this.buttonSizeMedium.isDisplayed();
  }
  buttonSizeLargeIsDisplay() {
    this.buttonSizeLarge.waitForDisplayed({ timeout: 6000 });
    return this.buttonSizeLarge.isDisplayed();
  }

  popoverButtonTextFieldIsDisplay() {
    this.popoverButtonTextField.waitForDisplayed({ timeout: 6000 });
    return this.popoverButtonTextField.isDisplayed();

  }

  buttonTextFieldInPopoverIsDisplay() {
    this.buttonTextFieldInPopover.waitForDisplayed({ timeout: 6000 });
    return this.buttonTextFieldInPopover.isDisplayed();

  }

  popoverButtonWidthFieldIsDisplay() {
    this.popoverButtonWidthField.waitForDisplayed({ timeout: 6000 });
    return this.popoverButtonWidthField.isDisplayed();
  }

  popoverRresponsiveCheckIsDisplay() {
    browser.pause(200);
    this.popoverResponsiveCheckBox.scrollIntoView();
    browser.pause(500);
    return this.popoverResponsiveCheckBox.isDisplayed();
  }

  popoverEmbedCodeIsDisplay() {
    this.popoverEmbedCodeField.scrollIntoView();
    return this.popoverEmbedCodeField.isDisplayed();
  }

  previewRegisterButtonIsDisplay() {
    this.previewRegisterButton.scrollIntoView();
    return this.previewRegisterButton.isDisplayed();
  }

  clickOnPreviewRegisterButton() {
    if (this.previewRegisterButtonIsDisplay() == true) {
      this.previewRegisterButton.click();
      browser.pause(500);
    } else {
      throw new Error("PREVIEW REGISTER BUTTON IS NOT DISPLAY");
    }

  }

  clickOnPopoverButtonColor() {
    // this.popoverButtonColor.scrollIntoView();
    this.popoverButtonColor.click();

  }
  updatedPopoverButtonColor(colorCode) {
    // this.popoverButtonColor.scrollIntoView();
    var actColor = $("div.color-picker-container span.ant-input-group-wrapper span.ant-input-wrapper.ant-input-group > input.ant-input").getAttribute("value");
    browser.pause(1000);
    if (actColor.includes(colorCode)) {
      console.log("button color is working");
    } else {
      console.log("actual color>>" + actColor);
      throw new Error("BUTTON COLOR IS NOT WORKING");
    }

  }

  selectPopoverEmbedStyle(style) {
    this.popoverEmbedStyleButton.click();
    const styleOption = $("(//li[contains(text(),'" + style + "')])[1]");
    styleOption.click();

  }

  validatePopUpRegistrationForm(eventName) {
    const elem = $('.demio-embed-header > .demio-embed-title');
    elem.waitForDisplayed({ timeout: 6000 });
    var actTitle = elem.getText();

    if (actTitle.includes(eventName)) {
      console.log("Popup registration form display");
    } else {
      console.log("actual title>>" + actTitle);
      throw new Error("POPUP REGISTRATION FORM IS NOT DISPLAY actual event name>>" + actTitle + "expacted event name>>" + eventName);
    }
  }

  addPopupRegistrationData(firstName, email) {
    const nameInputField = $("(//input[@name='name'])");
    nameInputField.waitForDisplayed({ timeout: 6000 });
    nameInputField.setValue(firstName);
    const emailInputField = $('(//input[@placeholder="Email"])');
    emailInputField.waitForDisplayed({ timeout: 6000 });
    emailInputField.setValue(email);

  }

  clickOnPopupFormRegisterButton() {
    $(".demio-embed-popover  form[method='post'] > button[type='submit']").click();
  }

  markPopoverResponsiveCheckBox() {
    this.popoverResponsiveCheckBox.scrollIntoView();
    var actClass = this.popoverResponsiveCheckBox.getAttribute("class");
    console.log("actual mark>>" + actClass);
    var expClass = "ant-checkbox-wrapper ant-checkbox-wrapper-checked";
    if (actClass.includes(expClass)) {
      console.log("Responsive check box marked");
    } else {
      console.log("actual class>>" + actClass + "expected class>>" + expClass);
      throw new Error("USER FAILED TO MARK POPOVER EMBED RESPONSIVE CHECKBOX ");
    }
  }

  unMarkPopoverResponsiveCheckBox() {
    var actClass = this.popoverResponsiveCheckBox.getAttribute("class");
    var expClass = "ant-checkbox ant-checkbox-checked";
    console.log("actual unmark>>" + actClass);

    if (actClass.includes(expClass)) {
      console.log("click on responsive check box");
      this.popoverResponsiveCheckBox.scrollIntoView(0, 100)
      this.popoverResponsiveCheckBox.click();

    } else {
      throw new Error("POPOVER EMBED RESPONSIVE CHECKBOX IS NOT WORKING actual class>>" + actClass + "expected class>>" + expClass);
    }

  }

  addButtonWidthData(buttonWidth) {
    // this.popoverButtonWidthField.scrollIntoView();
    this.popoverButtonWidthField.click();
    browser.pause(800);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    this.popoverButtonWidthField.setValue(buttonWidth);
    browser.pause(1000);

  }

  validateUpdatedButtonWidth(buttonWidth) {
    this.previewRegisterButton.scrollIntoView();
    var actWidth = this.previewRegisterButton.getAttribute("style").replace("width:", " ").replace("px", " ");

    if (actWidth.includes(buttonWidth)) {
      console.log("button width updated successfully");
    } else {

      throw new Error("BUTTON WIDTH FIELD IS NOT WORKING actual width>>" + actWidth + "expected width>>" + buttonWidth);
    }
  }

  addNewButtonTextInPopover(buttonText) {
    // this.buttonTextFieldInPopover.scrollIntoView();
    this.buttonTextFieldInPopover.click();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(5000);
    this.buttonTextFieldInPopover.setValue(buttonText);
    browser.pause(1000);
  }

  validateUpdatedButtonTextInPopover() {
    var actText = this.buttonTextFieldInPopover.getAttribute("value");
    this.previewRegisterButton.scrollIntoView();
    var expText = this.previewRegisterButton.getText();
    if (actText.includes(expText)) {
      console.log("button text updated successfully under popover embed screen");
    } else {
      console.log("actual text>>" + actText + "expected text>>" + expText);
      throw new Error("BUTTON TEXT IS NOT UPDATED UNDER POPOVER EMBED SCREEN");
    }
  }

  addNewPopoverButtonText(buttonText1) {
    // this.popoverButtonTextField.scrollIntoView();
    this.popoverButtonTextField.click();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    this.popoverButtonTextField.setValue(buttonText1);
    browser.pause(1000);
  }

  validateUpdatedPopoverButtonText() {
    var actText = this.popoverButtonTextField.getAttribute("value");
    this.previewRegisterButton.scrollIntoView(0, 100);
    this.previewRegisterButton.click();
    var expText = $(".demio-embed-popover  form[method='post'] > button[type='submit']").getText();
    if (actText.includes(expText)) {
      console.log("popover button text updated successfully");
    } else {
      console.log("actual text>>" + actText + "expected text>>" + expText);
      throw new Error("POPUP BUTTON TEXT IS NOT UPDATED UNDER POPOVER EMBED SCREEN");
    }
  }

  clickOnCustomizeTab() {
    if (this.customizeTabIsDisplay() === true) {
      this.customizeTab.click();
      browser.pause(500);
    } else {
      throw new Error("CUSTOMIZE TAB IS NOT DISPLAY");
    }
  }

  registrationTabIsDisplay() {
    return this.registrationTab.isDisplayed();
  }

  emailNotificationsTabIsDisplay() {
    this.emailNotificationsTab.scrollIntoView(0, 100)
    return this.emailNotificationsTab.isDisplayed();
  }

  roomTabIsDisplay() {
    this.roomTab.scrollIntoView(0,100);
    this.roomTab.waitForDisplayed({ timeout: 10000 });
    return this.roomTab.isDisplayed();
  }

  eventAdminsTabIsDisplay() {
    this.eventAdminsTab.scrollIntoView();
    return this.eventAdminsTab.isDisplayed();
  }
  generalTabIsDisplay() {
    return this.generalTab.isDisplayed();
  }
  integrationsTabIsDisplay() {
    return this.integrationsTab.isDisplayed();
  }

  clickOnRegistrationTab() {
    if (this.registrationTabIsDisplay()) {
      this.registrationTab.scrollIntoView(0, 100);
      this.registrationTab.click();
    } else {
      throw new Error("REGISTRATION TAB IS NOT DISPLAY");
    }
  }

  customizeRegistrationIsDisplay() {
    return this.customizeRegistrationBtn.isDisplayed();

  }

  editFormFieldIsDisplay() {
    return this.editFormFieldsBtn.isDisplayed();
  }

  settingsButtonIsDisplay() {
    return this.settingsButton.isDisplayed();
  }

  customizeRegistrationIsSelected() {
    var actAttribute = this.customizeRegistrationBtn.getAttribute("aria-selected");
    console.log("Select option>>" + actAttribute);
    if (actAttribute.includes("true")) {
      console.log("By default customize options is selected");
    } else {
      throw new Error("BY DEFAULT CUSTOMIZE REGISTRATION OPTION IS NOT SELCTED");
    }
  }

  customThankyouToggleIsDisplay() {
    return this.thankYouPageToggleBtn.isDisplayed();
  }

  customizeButtonIsDisplay() {
    return this.customizeButton.isDisplayed();
  }

  firstNameOptionIsDisplay() {
    return this.firstNameOption.isDisplayed();
  }
  firstNameDropDownIsDisplay() {
    return this.firstNameDropDown.isDisplayed();
  }

  showApiDetailsForNameIsDispaly() {
    this.firstNameDropDown.click();
    browser.pause(500);
    return this.showApiDetailsForName.isDisplayed();

  }


  emailOptionIsDisplay() {
    return this.emailOption.isDisplayed();
  }
  emailDropDownIsDisplay() {
    return this.emailDropDown.isDisplayed();
  }

  showApiDetailsForEmailIsDispaly() {
    this.editFormFieldsBtn.click();
    browser.pause(500);
    this.emailDropDown.click();
    browser.pause(500);
    return this.showApiDetailsForEmail.isDisplayed();
  }

  enhansedValidationBtnIsDispaly() {
    return this.enhansedValidationToggle.isDisplayed();
  }

  addAnotherFieldIsDispaly() {
    return this.addAnotherFieldOption.isDisplayed();
  }

  sessionRegistrationToggleDispaly() {
    return this.sessionRegistrationToggle.isDisplayed();
  }

  visibleUpcomingSessionDisplay() {

    return this.visibleUpcomingSessionField.isDisplayed();
  }

  clickOnEditFormFieldButton() {
    this.editFormFieldsBtn.waitForDisplayed({ timeout: 10000 });
    this.editFormFieldsBtn.click();
    browser.pause(500);
  }

  clcikOnSettingsButton() {
    this.settingsButton.click();
    browser.pause(500);
  }

  clickOnCustomButton() {
    if (this.customizeButton.isDisplayed() === true) {
      this.customizeButton.click();
    } else {
      throw new Error(this.customizeButton.isDisplayed());
    }

  }

  validateEditorPage() {
    var actHeader = $("//div[@class='editor-header']//div").getText().trim();
    var expHeader = "Editor";
    if (actHeader.includes(expHeader)) {
      console.log("Editor page loaded successfully");
    } else {
      console.log("actual header>>" + actHeader);
      throw new Error("EDITOR PAGE IS NOT LOADED");
    }
  }


  templateDropDownIsDisplay() {
    this.templateDropDown.waitForDisplayed({ timeout: 20000 });
    return this.templateDropDown.isDisplayed();

  }

  brandingDropDownIsDisplay() {
    this.brandingDropDown.waitForDisplayed({ timeout: 6000 });
    return this.brandingDropDown.isDisplayed();

  }

  ClickBrandingDropDownOnReplayScreen() {
    browser.switchToFrame($("//iframe[@id='reg-editor']"));
    this.brandingDropDownOnReplayScreen.waitForDisplayed({ timeout: 6000 });
    this.brandingDropDownOnReplayScreen.click();
    browser.pause(2000);

  }



  elementsDropDownIsDisplay() {
    this.elementsDropDown.waitForDisplayed({ timeout: 6000 });
    return this.elementsDropDown.isDisplayed();

  }

  socialDropDownIsDisplay() {
    this.socialDropDown.waitForDisplayed({ timeout: 6000 });
    return this.socialDropDown.isDisplayed();

  }

  clickOnTemplateDropDown() {
    if (this.templateDropDownIsDisplay() == true) {
      this.templateDropDown.click();
      browser.pause(1000);
    } else {
      throw new Error("template button is not displaying");
    }
  }

  clickOnTemplateMenuButton() {
    if (this.templateMenuDropdown.isDisplayed() == true) {
      this.templateMenuDropdown.click();
      browser.pause(1000);
    } else {
      throw new Error("TEMPLATE MENU BUTTON IS NOT DISPLAY");
    }
  }

  accentOptionIsDispaly() {
    this.accentOption.waitForDisplayed({ timeout: 6000 })
    return this.accentOption.isDisplayed();
  }

  gradentOptionIsDispaly() {
    this.gradientOption.waitForDisplayed({ timeout: 6000 })
    return this.gradientOption.isDisplayed();
  }

  backGroundImgOptionIsDispaly() {
    this.backGroundImageOption.waitForDisplayed({ timeout: 6000 })
    return this.backGroundImageOption.isDisplayed();
  }
  clickOnCustomizeButton() {
    // this.customizeButton.scrollIntoView();
    if (this.customizeButtonIsDisplay()) {
      this.customizeButton.click();
      this.customizeButton.waitForDisplayed({ timeout: 10000 })
      browser.pause(1000);
    } else {
      throw new Error("CUSTOMIZE BUTTON IS NOT DISPLAY");
    }
  }

  saveAndCloseButtonIsDispaly() {
    this.saveAndCloseButton.scrollIntoView();
    this.saveAndCloseButton.waitForDisplayed({ timeout: 10000 });
    return this.saveAndCloseButton.isDisplayed();
  }

  clickOnBrandingDropDown() {
    if (this.brandingDropDownIsDisplay()) {
      this.brandingDropDown.click();
      browser.pause(1000);
    } else {
      throw new Error("branding dropdown is not dipslay");
    }
  }

  uploadImageOptionIsDsipaly() {
    this.uploadImageOption.waitForDisplayed({ timeout: 6000 });
    return this.uploadImageOption.isDisplayed();
  }

  clickOnElementsDropDown() {
    if (this.elementsDropDownIsDisplay()) {
      this.elementsDropDown.scrollIntoView();
      this.elementsDropDown.click();
      browser.pause(1000);
    } else {
      throw new Error("elements dropdown is not dipslay");
    }
  }

  clickOnSocialDropDown() {
    if (this.socialDropDownIsDisplay()) {
      this.socialDropDown.scrollIntoView();
      this.socialDropDown.click();
      browser.pause(1000);
    } else {
      throw new Error("social dropdown is not dipslay");
    }
  }

  editSettingsButtonIsDispaly() {
    this.editSettingsButton.waitForDisplayed({ timeout: 6000 });
    return this.editSettingsButton.isDisplayed();
  }

  colorSchemeOptionIsDispaly() {
    this.colorSchemeOption.waitForDisplayed({ timeout: 6000 });
    return this.colorSchemeOption.isDisplayed();
  }

  headlineToggleIsDispaly() {
    this.headlineToggleButton.waitForDisplayed({ timeout: 6000 });
    return this.headlineToggleButton.isDisplayed();
  }

  subHeadlineToggleIsDispaly() {
    this.subHeadlineToggleButton.waitForDisplayed({ timeout: 6000 });
    return this.subHeadlineToggleButton.isDisplayed();
  }

  videoToggleButtonIsDispaly() {
    this.videoToggleButton.waitForDisplayed({ timeout: 6000 });
    return this.videoToggleButton.isDisplayed();
  }

  descriptionToggleIsDisplay() {
    this.descriptionToggle.waitForDisplayed({ timeout: 6000 });
    return this.descriptionToggle.isDisplayed();
  }

  featuredPresentersToggleIsDisplay() {
    this.featuredPresentersToggle.waitForDisplayed({ timeout: 6000 });
    return this.featuredPresentersToggle.isDisplayed();
  }

  colorCoverClick() {
    $("//div[@class='color-picker-cover']").click();
  }

  uploadImageOptionForAutoIsDsipaly() {
    this.uploadImageOptionForAuto.waitForDisplayed({ timeout: 6000 });
    return this.uploadImageOptionForAuto.isDisplayed();
  }

  onEnhansedValidationToggleButton() {
    var actClass = this.enhansedValidationToggle.getAttribute("class");
    var expClass = "ant-switch";
    if (actClass.includes(expClass)) {
      this.enhansedValidationToggle.click();

    } else {
      console.log("enhanced validation toggle button is already on");
    }
  }

  offEnhansedValidationToggleButton() {
    var actClass = this.enhansedValidationToggle.getAttribute("class");
    var expClass = "ant-switch ant-switch-checked";
    if (actClass.includes(expClass)) {
      this.enhansedValidationToggle.click();

    } else {
      console.log("enhanced validation toggle button is already off");
    }
  }

  clickOnAddAnotherField() {
    if (this.addAnotherFieldIsDispaly()) {
      this.addAnotherFieldOption.click();
      browser.pause(1000);
    } else {
      throw new Error("add another field option is not display");
    }
  }

  selectFieldDropDownIsDispaly() {
    return this.selectFieldDropDown.isDisplayed();
  }

  clickOnSelectFieldDropDown() {
    if (this.selectFieldDropDownIsDispaly()) {
      this.selectFieldDropDown.click();
      browser.pause(1000);
    } else {
      throw new Error("SELECT FIELD DROPDOWN BUTTON IS NOT DISPLAY");
    }
  }

  lastNameOptionIsDispaly() {
    return this.lastNameOption.isDisplayed();
  }

  companyOptionIsDispaly() {
    return this.companyOption.isDisplayed();
  }

  websiteOptionIsDispaly() {
    return this.websiteOption.isDisplayed();
  }

  phoneNumberOptionIsDispaly() {
    return this.phoneNumberOption.isDisplayed();
  }
  gdprOptionIsDispaly() {
    return this.gdprOption.isDisplayed();
  }

  createCustomFieldIsDispaly() {
    return this.createCustomField.isDisplayed();
  }

  validateAddAnotherFieldPopup() {
    var actTitle = $(".ant-modal-body  div[role='tablist'] div[role='tab']").getText();
    var expTitle = "Add Another Field";
    if (actTitle.includes(expTitle)) {
      console.log("add another field popup is loaded");
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + expTitle);
      throw new Error("ADD ANOTHER FIELD POPUP IS NOT DISPLAYED");
    }
  }

  selectFieldFromDropDown(field) {
    const fieldsOption = $("//div[contains(text(),'" + field + "')]");
    fieldsOption.waitForDisplayed({ timeout: 10000 });
    fieldsOption.scrollIntoView();
    fieldsOption.click();
  }

  markMakeRequiredFieldCheckBox() {
    const makeRequiredField = $(".ant-checkbox.ant-checkbox-checked");
    var actClass = makeRequiredField.getAttribute("class");
    var expClass = "ant-checkbox";
    if (actClass.includes(expClass)) {
      makeRequiredField.click();
      browser.pause(1000);
    } else {
      console.log("Check box is already marked");
    }
  }
  addFormFieldButtonIsDispaly() {
    return this.addFormFieldButton.isDisplayed();

  }

  clickOnAddFormFieldButton() {
    if (this.addFormFieldButton.isDisplayed()) {
      this.addFormFieldButton.click();
      browser.pause(1000);
    } else {
      throw new Error("ADD FORM FIELD BUTTON IS NOT DISPLAY");
    }
  }

  validateNewAddedField(field) {
    if ($("//div[contains(text(),'" + field + "')]").isDisplayed() == true) {
      console.log("new field is created successfully");
    } else {
      throw new Error("NEW FIELD IS NOT CREATED");
    }
  }

  clickOnCreateCustomField() {
    if (this.createCustomFieldIsDispaly() === true) {
      $("//div[@class='registration-modal-field-option --custom']").click();
      //  this.createCustomField.scrollIntoView()
      //  this.createCustomField.click();
      browser.pause(1000);
    } else {
      throw new Error("CREATE A NEW CUSTOM BUTTON IS NOT DISPLAYING");
    }
  }

  selectFieldTypeDropDownIsDisplay() {
    return this.selectFieldTypeDropDown.isDisplayed();
  }

  clickOnSelectFieldTypeButton() {
    this.selectFieldTypeDropDown.click();
    browser.pause(1000);
  }

  selectEventTypeOption(option) {
    const fieldsOption = $("//div[@data-name='" + option + "']");
    fieldsOption.waitForDisplayed({ timeout: 10000 });
    fieldsOption.scrollIntoView();
    fieldsOption.click();
    browser.pause(1000);
  }

  textOptionIsDispaly() {
    return this.textOption.isDisplayed();
  }

  textAreaOptionIsDispaly() {
    return this.textAreaOption.isDisplayed();
  }

  dropDownOptionIsDispaly() {
    return this.dropDownOption.isDisplayed();
  }

  checkBoxOptionIsDispaly() {
    return this.checkBoxOption.isDisplayed();
  }

  addLabelFieldData(label) {
    if (this.labelField.isDisplayed() == true) {
      this.labelField.scrollIntoView();
      this.labelField.setValue(label);
    } else {
      throw new Error("LABEL FIELD IS NOT DISPLAYING");
    }
  }

  dragAndDropField() {
    this.firstNameOption.dragAndDrop(this.emailOption, 5000);
  }

  selectTemplate(option) {
    const template = $("//li[contains(text(),'" + option + "')]");
    template.waitForDisplayed({ timeout: 10000 });
    template.click();

  }

  validateUpdatedTemplate() {
    browser.pause(2000);
    var actClass = $(".registration-header-container").getAttribute("class");
    var expClass = "registration-header-container fill-screen registration-header-accent";
    var expClassBg = "registration-header-container fill-screen";
    if (actClass.includes(expClass)) {
      console.log("template updated successfully");
    } else if (actClass.includes(expClassBg)) {
      console.log("template for background is updated");
    } else {
      throw new Error("USER FAILED TO UPDATE TEMPLATE actual template class>>" + actClass + "Expected template class>>" + expClass);
    }
  }
  updateBrandingImage(image) {
    const element = $("(//input[@type='file'])[1]");
    browser.pause(1000);
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    browser.pause(1000);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $("(//input[@type='file'])[1]").setValue(remoteFilePath);
    browser.pause(5000);
  }

  uploadedImageInBoxIsDispaly() {
    const displayedImg = $(".sticky-footer > .registration-header-logo>img");
    displayedImg.waitForDisplayed({ timeout: 30000 });
    return displayedImg.isDisplayed();
  }


  validateUpdatedBrandingColor(updatedColor) {
    var actColor = $("(//input[@class='ant-input'])[1]").getAttribute("value");
    if (actColor.includes(updatedColor)) {
      console.log("Branding button color is working");
    } else {

      throw new Error("BRANDING BUTTON COLOR IS NOT WORKING actual color>>" + actColor + "expected color>>" + updatedColor);
    }

  }
  validateUpdatedBrandingColorForReg(updatedColor) {
    var actColor = $("(//input[@class='ant-input'])[1]").getAttribute("value");
    if (actColor.includes(updatedColor)) {
      console.log("Branding button color is working");
    } else {

      throw new Error("BRANDING BUTTON COLOR IS NOT WORKING actual color>>" + actColor + "expected color>>" + updatedColor);
    }

  }


  validateHeadlineButton() {
    this.headlineToggleButton.click();
    if ($(".webinar-title").isDisplayed() === false) {
      console.log("headline button is off");
      this.headlineToggleButton.click();
      $(".webinar-title").waitForDisplayed({ timeout: 10000 });
    } else {
      console.log("toggle button is already on");
    }

  }

  validateSubheadlinePreview(subheadline) {
    var actSubheadline = $(".webinar-subtitle").getText();
    if (actSubheadline.includes(subheadline)) {
      console.log("subheadline preview is matched");
    } else {
      throw new Error("SUBHEADLINE PREVIEW IS MISSMATECTD");
    }

  }

  clickOnSaveSubheadlineButton() {
    if (this.saveSubheadlineButton.isDisplayed() === true) {
      this.saveSubheadlineButton.click();
      browser.pause(1000);
    } else {
      throw new Error("save subheadline button is not displayed");
    }
  }


  addSubheadlineField(subheadline) {
    browser.pause(2000);
    this.subheadlineField.click();
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(500);
    this.subheadlineField.waitForDisplayed({ timeout: 10000 });
    this.subheadlineField.setValue(subheadline);
    browser.pause(1000);
  }


  turnOnSubheadlineButton() {
    var actClass = this.subHeadlineToggleButton.getAttribute("class");
    var expClass = "ant-switch";
    if (actClass.includes(expClass)) {
      this.subHeadlineToggleButton.click();
    } else {
      console.log("subheadline toggle button is already on");
    }
  }

  turnOnVideoButton() {
    this.videoToggleButton.waitForDisplayed({ timeout: 6000 });
    var actClass = this.videoToggleButton.getAttribute("class");
    var expClass = "ant-switch";
    if (actClass.includes(expClass)) {
      this.videoToggleButton.click();
      browser.pause(1000);
    } else {
      console.log("Video toggle button is already on");
    }
  }

  clickOnVideoToggleButton() {
    this.videoToggleButton.click();
  }

  clickOnSaveVideoButton() {
    this.saveVideoButton.scrollIntoView();
    this.saveVideoButton.waitForDisplayed({ timeout: 10000 });
    this.saveVideoButton.click();

  }


  addUrlInVideoLinkField(videoLink) {
    this.videoLinkField.waitForDisplayed({ timeout: 10000 });
    this.videoLinkField.click();
    browser.keys(['Control', 'a']);
    browser.pause(500);
    browser.keys(['Delete']);
    browser.pause(500);
    this.videoLinkField.setValue(videoLink);
    browser.pause(1000);

  }

  validateVideoInPreview(videoLink) {
    const iframe = $(".registration-editor iframe");
    browser.switchToFrame(iframe);
    const video = $("(//div[@id='player']/div//div[@class='ytp-title-text']//a)[1]");
    video.waitForDisplayed({ timeout: 30000 });
    var actLink = video.getAttribute("href");
    if (actLink.includes(videoLink)) {
      console.log("video is displaying in preview section");
    } else {
      throw new Error("video is not dispalying in preview section");
    }
    browser.switchToParentFrame();
  }

  turnOnDescriptionButton() {
    var actClass = this.descriptionToggle.getAttribute("class");
    var expClass = "ant-switch";
    if (actClass.includes(expClass)) {
      browser.pause(1000);
      this.descriptionToggle.click();

    } else {
      console.log("description toggle button is already on");
    }
  }

  addDescriptionField(description) {
    this.descriptionField.waitForDisplayed({ timeout: 10000 });
    this.descriptionField.click();
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(500);
    this.descriptionField.setValue(description);
    browser.pause(500);
  }

  clickOnSaveDescriptionButton() {
    this.saveDescriptionButton.waitForDisplayed({ timeout: 10000 });
    if (this.saveDescriptionButton.isDisplayed() === true) {
      this.saveDescriptionButton.click();
      browser.pause(500);
    } else {
      throw new Error("save description button is not displayed");
    }
  }


  validateDescriptionInPreview(description) {
    const descriptionPreview = $(".trix-content.webinar-description > div");
    descriptionPreview.waitForDisplayed({ timeout: 10000 });
    var actdescription = descriptionPreview.getText();
    if (actdescription.includes(description)) {
      console.log("description is displaying in preview section");
    } else {
      throw new Error("Description is not dispalying in preview section");
    }
  }


  turnOnFeaturedPresentersButton() {
    browser.pause(1000);
    var actClass = this.featuredPresentersToggle.getAttribute("class");
    var expClass = "ant-switch";
    if (actClass.includes(expClass)) {
      this.featuredPresentersToggle.click();
      browser.pause(1000);
    } else {
      console.log("description toggle button is already on");
    }


  }

  clickOnAddPresenterButton() {
    this.addPresenterButton.scrollIntoView();
    this.addPresenterButton.waitForClickable({ timeout: 10000 });
    if (this.addPresenterButton.isDisplayed() === true) {

      this.addPresenterButton.click();
    } else {
      throw new Error("Add presenter button is not displayed");
    }
  }


  addPresenterPhoto(photo) {
    const element = $(".presenter-container [type='file']");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + photo);
    const remoteFilePath = browser.uploadFile(filePath);
    $(".presenter-container [type='file']").scrollIntoView();
    $(".presenter-container [type='file']").setValue(remoteFilePath);
    $("//div[@class='presenter-container']//div[@class='demio-upload-preview']").waitForDisplayed({ timeout: 40000 });
  }

  addPresenterNameField(presenterName) {
    this.presenterNameField.waitForDisplayed({ timeout: 10000 });
    this.presenterNameField.setValue(presenterName);
    browser.pause(200);
  }

  addPresenterTitleField(presenterTitle) {
    this.presenterTitleField.setValue(presenterTitle);
  }

  addPresenterWebsiteField(presenterWebsite) {
    browser.pause(500);
    this.presenterWebsiteField.setValue(presenterWebsite);
    browser.pause(200);
  }

  addPresenterBioField(presenterBio) {
    this.presenterBioField.setValue(presenterBio);
  }

  valiadtePresenterDetailsInPreview(presenterName, presenterTitle, presenterWebsite, presenterBio) {
    try {
      const closeButton = $("(//button[@aria-label='Close'])");
      closeButton.waitForDisplayed({ timeout: 30000 });
      closeButton.click();
      browser.pause(1000);
    } catch (error) {

    }

    $("//div[@class='name']").scrollIntoView();
    var actName = $("//div[@class='name']").getText();
    var actTitle = $("//div[@class='title']").getText();
    var actWebsite = $("(//a[@class='website'])[1]").getText();
    var actBio = $("//div[@class='description']").getText();

    if (actName.includes(presenterName) && actTitle.includes(presenterTitle) && actWebsite.includes(presenterWebsite) && actBio.includes(presenterBio)) {
      console.log("all details of new presenter are displaying in preview section");
    } else {
      console.log("actual name>>" + actName + "actual title>>" + actTitle + "actual website>>" + actWebsite + "actual bio>>" + actBio);
      throw new Error("PRESENTER DETAILS MISSMATCHED..!!");
    }
  }

  clickOnEditSettingsButton() {
    if (this.editSettingsButtonIsDispaly() === true) {
      this.editSettingsButton.scrollIntoView();
      this.editSettingsButton.click();
      browser.pause(1000);
      try {
        this.editSettingsButton.click();
      } catch (error) {

      }
    } else {
      throw new Error("EDIT SETTINGS BUTTON IS NOT DISPLAYING");
    }
  }

  uploadSocialImage(image) {
    const element = $("(//input[@type='file'])[2]");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $("(//input[@type='file'])[2]").scrollIntoView();
    $("(//input[@type='file'])[2]").setValue(remoteFilePath);


  }

  socialImageInPreviewIsDispaly() {
    const imageInPreview = $("//div[@class='presenter-container']//div[@class='demio-upload-preview']");
    imageInPreview.waitForDisplayed({ timeout: 50000 });
    return imageInPreview.isDisplayed();
  }

  addTitleField(title) {
    this.titleField.scrollIntoView();
    this.titleField.click();
    for (var i = 1; i <= 8; i++) {
      browser.keys(['Backspace']);
    }
    // $("//label[@title='Title']").click();
    this.titleField.setValue(title);

  }

  addSocialDescriptionField(description) {
    this.socialDescriptionField.setValue(description);

  }
  clickOnSaveOpenGraphButton() {
    this.saveOpenGraphBtn.scrollIntoView();
    this.saveOpenGraphBtn.waitForClickable({ timeout: 10000 });
    if (this.saveOpenGraphBtn.isDisplayed() === true) {
      this.saveOpenGraphBtn.click();
    } else {
      throw new Error("SAVE OPEN GRAPH BUTTON IS NOT DISPLAYING");
    }
  }


  validateUpdatedSocialImage() {
    browser.pause(3000);
    const img = $(".open-graph-preview > img");
    img.waitForDisplayed({ timeout: 3000 });
    var actImage = img.getAttribute("src");
    var expImage = $("//div[@class='presenter-container']//div[@class='demio-upload-preview']//img").getAttribute("src");
    if (actImage.includes(expImage)) {
      console.log("Source image updated successfully");
    } else {

      throw new Error("SOURCE IMAGE IS NOT UPDATED  actual image source>>" + actImage + "expected image source>>" + expImage);
    }
  }

  validateUpdatedTitle(title) {

    var actTitle = $(".open-graph-preview>h1").getText();
    if (actTitle.includes(title)) {
      console.log("Social title updated");
    } else {

      throw new Error("SOCIAL TITLE MISSMATCHED   actual title>>" + actTitle + "expected title>>" + title);
    }
  }

  validateUpdatedDescription(description) {
    var actDescription = $(".open-graph-preview>p").getText();
    if (actDescription.includes(description)) {
      console.log("Social description updated");
    } else {

      throw new Error("SOCIAL DESCRIPTION MISSMATCHED    actual description>>" + actDescription + "expected description>>" + description);
    }
  }

  validateEventIsDispaly(event) {
    const eventName = $("(//div[contains(text(),'" + event + "')])[1]");
    eventName.waitForDisplayed({ timeout: 10000 });
    eventName.scrollIntoView();
    return eventName.isDisplayed();
  }


  clickOnSaveAndCloseButton() {
    if (this.saveAndCloseButtonIsDispaly() === true) {
      this.saveAndCloseButton.click();
    } else {
      throw new Error("SAVE AND CLOSE BUTTON IS NOT DIPSLAYING");
    }
  }


  clickOnViewRegistrationPage() {
    browser.pause(1000);
    this.viewRegistrationPage.waitForDisplayed({ timeout: 30000 });
    if (this.viewRegistrationPageIsDisplay() === true) {
      this.viewRegistrationPage.click();
      browser.pause(2000);
    } else {
      throw new Error("VIEW REGISTRATION PAGE OPTION IS NOT DISPLAYED");
    }
  }


  switchToRegistrationWindow() {
    super.switchToWindowNewTab();

  }
  validateChangesOnRegPage(subheadline, videoLink) {
    const subtitle = $(".webinar-subtitle");
    subtitle.waitForDisplayed({ timeout: 10000 });
    var actSubTitle = subtitle.getText();
    const iframe = $(".video-ratio-container>iframe");
    browser.switchToFrame(iframe);
    var actVideoLink = $(".yt-uix-sessionlink.ytp-title-link").getAttribute("href");
    if (actSubTitle.includes(subheadline)) {
      console.log("subtitle is matched on registration screen");
    } else if (actVideoLink.includes(videoLink)) {
      console.log("video is dispalying on registration page");
    } else {
      throw new Error("changes missmatched on registration screen");
    }

    browser.closeWindow();
    browser.pause(100);
    super.switchToParentTab();
  }

  turnOnSessionRegLimitButton() {
    var actClassName = this.sessionRegistrationToggle.getAttribute("class");
    if (actClassName.includes("ant-switch") === true) {
      this.sessionRegistrationToggle.click();
    } else {
      console.log("Session registration toggle is already turned on");
    }
  }


  clickOnDoneButton() {
    this.doneButton.scrollIntoView(0, 100);
    browser.pause(2000)
    // this.doneButton.moveTo();
    // browser.pause(200)
    if (this.doneButton.isDisplayed() === true) {
      this.doneButton.click();
    } else {
      throw new Error("DONE BUTTON IS NOT DISPALYING");
    }

  }

  validateIncreaseNoOfSession() {
    this.visibleUpcomingSessionField.waitForDisplayed({ timeout: 1000 });
    var actValue = this.visibleUpcomingSessionField.getAttribute("value");
    var number = parseInt(actValue);
    const increaseValueButton = $(".ant-input-number-handler-wrap > span:nth-of-type(1)");
    // increaseValueButton.scrollIntoView();
    increaseValueButton.click();
    var actSession = this.visibleUpcomingSessionField.getAttribute("value");
    var expSession = number + 1;
    if (actSession == expSession) {
      console.log("Increase value button is working for number of sessions");
    } else {
      console.log("actual count>>" + actSession + "expected count>>" + expSession);
      throw new Error("INCREASE VALUE BUTTON IS NOT WORKING FOR NUMBER OF SESSIONS");
    }
  }

  validateDecreaseNoOfSession() {
    var actValue = this.visibleUpcomingSessionField.getAttribute("value");
    var number = parseInt(actValue);
    const decreaseValueButton = $(".ant-input-number-handler-wrap > span:nth-of-type(2)");
    decreaseValueButton.scrollIntoView(0, 100);
    decreaseValueButton.click();
    var actSession = this.visibleUpcomingSessionField.getAttribute("value");
    var expSession = number - 1;
    if (actSession == expSession) {
      console.log("Decrease value button is working for number of sessions");
    } else {
      console.log("actual count>>" + actSession + "expected count>>" + expSession);
      throw new Error("DECREASE VALUE BUTTON IS NOT WORKING FOR NUMBER OF SESSIONS");
    }
  }



  validateIncreaseNoOfRegistrations() {
    this.sessionRegistrationsField.waitForDisplayed({ timeout: 1000 });
    var actValue = this.sessionRegistrationsField.getAttribute("value");
    var step = this.sessionRegistrationsField.getAttribute("step");
    var number = parseInt(actValue);
    var increaseStep = parseInt(step);
    const increaseValueButton = $(".limit .ant-input-number-handler-up");
    // increaseValueButton.scrollIntoView();
    browser.pause(10000);
    increaseValueButton.click();
    var actSession = this.sessionRegistrationsField.getAttribute("value");
    var expSession = number + increaseStep;
    if (actSession == expSession) {
      console.log("Increase value button is working for number of registrations");
    } else {
      console.log("actual count>>" + actSession + "expected count>>" + expSession);
      throw new Error("INCREASE VALUE BUTTON IS NOT WORKING FOR NUMBER OF REGISTRATIONS");
    }
  }

  validateDecreaseNoOfRegistrations() {
    var actValue = this.sessionRegistrationsField.getAttribute("value");
    var step = this.sessionRegistrationsField.getAttribute("step");
    var number = parseInt(actValue);
    var increaseStep = parseInt(step);
    const decreaseValueButton = $(".limit .ant-input-number-handler-down");
    // decreaseValueButton.scrollIntoView();
    decreaseValueButton.click();
    var actSession = this.sessionRegistrationsField.getAttribute("value");
    var expSession = number - increaseStep;
    if (actSession == expSession) {
      console.log("Decrease value button is working for number of REGISTRATIONS");
    } else {
      console.log("actual count>>" + actSession + "expected count>>" + expSession);
      throw new Error("DECREASE VALUE BUTTON IS NOT WORKING FOR NUMBER OF REGISTRATIONS");
    }
  }

  instantConfirmationToggleIsDispaly() {
    return this.instantConfirmationToggle.isDisplayed();
  }

  hoursBeforeToggleIsDispaly() {
    return this.hoursBeforeToggle.isDisplayed();
  }

  oneHourBeforeToggleIsDispaly() {
    return this.oneHourBeforeToggle.isDisplayed();
  }

  minutesBeforeToggleIsDispaly() {
    return this.minutesBeforeToggle.isDisplayed();
  }

  replayFollowUpToggleIsDispaly() {
    return this.replayFollowUpToggle.isDisplayed();
  }

  clickOnEmailNotifications() {
    this.emailNotificationsTab.waitForDisplayed({ timeout: 10000 });
    if (this.emailNotificationsTabIsDisplay() === true) {
      this.emailNotificationsTab.click();
    } else {
      throw new Error("EMAIL NOTIFICATION TAB IS NOT DISPLAYING")
    }
  }

  replayFollowUpDropDownIsDispaly() {
    return this.replayFollowUpDropDown.isDisplayed();
  }

  clickOnReplayFollowUpDropDown() {
    if (this.replayFollowUpDropDownIsDispaly() === true) {
      this.replayFollowUpDropDown.click();
    } else {
      throw new Error("replay followUp dropdown button is not displayed");
    }
  }

  allRegistrantsOptionIsDispaly() {
    this.allRegistrantsOption.waitForDisplayed({ timeout: 10000 });
    return this.allRegistrantsOption.isDisplayed();
  }

  attendeesOptionIsDispaly() {
    return this.attendeesOption.isDisplayed();
  }

  attendeesOptionIsDispaly() {
    return this.attendeesOption.isDisplayed();
  }

  noShowsOptionIsDispaly() {
    return this.noShowsOption.isDisplayed();
  }

  selectReplayFollowUpOption(option) {
    const dropdownOption = $("//li[contains(text(),'" + option + "')]");
    dropdownOption.click();
    browser.pause(1000);
    if ($("[title='" + option + "']").isDisplayed() === true) {
      console.log("user is able to select dropdown option");
    } else {
      throw new Error("user is not able to select replay followup dropdown option");
    }
  }

  instantConfEditEmailIsDispaly() {
    return this.instantConfEditEmailOption.isDisplayed();
  }

  hoursBeforeEditEmailIsDispaly() {
    return this.oneHourBeforeEditEmail.isDisplayed();
  }

  oneHourBeforeEditEmailIsDisplay() {
    return this.oneHourBeforeEditEmail.isDisplayed();
  }

  minutesBeforeEditEmailIsDispaly() {
    return this.minutesBeforeEditEmail.isDisplayed();
  }

  replayFollowUpEditEmailIsDispaly() {
    return this.replayFollowUpEditEmail.isDisplayed();
  }

  turnOneHourBeforeToggle() {
    var actValue = this.oneHourBeforeToggle.getAttribute("class");

    if (actValue.includes("ant-switch ant-switch-checked")) {
      console.log("button is already on");

    } else {
      console.log("Button is off");
    }
  }

  clickOnInstantEditEmailOption() {
    if (this.instantConfEditEmailIsDispaly() === true) {
      this.instantConfEditEmailOption.click();
    } else {
      throw new Error("instant confirmation edit email option is not dispalying");
    }
  }

  saveNotificationButtonIsDispaly() {
    return this.saveNotificationButton.isDisplayed();

  }

  clickOnSaveNotificationButton() {
    if (this.saveNotificationButtonIsDispaly() === true) {
      this.saveNotificationButton.click();
    } else {
      throw new Error("SAVE NOTIFICATION BUTTON IS NOT DISPLAYED");
    }
  }

  addEditEmailField(email) {
    this.editEmailField.waitForDisplayed({ timeout: 1000 });
    this.editEmailField.setValue(email);

  }

  clickOnHoursBeforeEditEmailOption() {
    if (this.hoursBeforeEditEmailIsDispaly() === true) {
      this.hoursBeforeEditEmail.click();
    } else {
      throw new Error("24 hours before edit email option is not dispalying");
    }
  }

  clickOnOneHourBeforeEditEmailOption() {
    if (this.oneHourBeforeEditEmailIsDisplay() === true) {
      this.oneHourBeforeEditEmail.click();
    } else {
      throw new Error("one hour before edit email option is not dispalying");
    }
  }

  clickOnMinutesBeforeEditEmailOption() {
    if (this.minutesBeforeEditEmailIsDispaly() === true) {
      this.minutesBeforeEditEmail.click();
    } else {
      throw new Error("Minutes before edit email option is not dispalying");
    }
  }

  clickOnGeneralTab() {
    if (this.generalTabIsDisplay() === true) {
      this.generalTab.click();
    } else {
      throw new Error("GENERAL TAB IS NOT DISPLAYED");
    }
  }

  eventTimeZoneButtonIsDispaly() {
    return this.eventTimeZoneDropDown.isDisplayed();
  }

  eventLanguageButtonIsDispaly() {
    return this.eventLanguageDropDown.isDisplayed();
  }

  clickOnEventTimeZoneButton() {
    if (this.eventTimeZoneButtonIsDispaly() === true) {
      this.eventTimeZoneDropDown.click();
    } else {
      throw new Error("EVENT TIME ZONE DROPDOWN IS NOT DISPLAYED");
    }
  }

  clickOnEventLanguageButton() {
    if (this.eventLanguageButtonIsDispaly() === true) {
      this.eventLanguageDropDown.click();
    } else {
      throw new Error("EVENT LANGUAGE DROPDOWN IS NOT DISPLAYED");
    }
  }

  selectTimeZone(timeZone) {
    const time = $("//li[contains(text(),'" + timeZone + "')]");
    time.scrollIntoView();
    time.waitForDisplayed({ timeout: 1000 });
    if (time.isDisplayed() === true) {
      time.click();
    } else {
      throw new Error("USER IS FAILD TO SELECT TIME ZONE");
    }
  }

  selectEventLanguage(language) {
    const eventLanguage = $("//li[contains(text(),'" + language + "')]");
    eventLanguage.waitForDisplayed({ timeout: 1000 });
    eventLanguage.scrollIntoView();
    if (eventLanguage.isDisplayed() === true) {
      eventLanguage.click();
    } else {
      throw new Error("USER IS FAILD TO SELECT EVENT LANGUAGE");
    }

  }

  clickOnRoomTab() {
    if (this.roomTabIsDisplay() === true) {
      this.roomTab.click();
    } else {
      throw new Error("ROOM TAB IS NOT DISPLAYED");
    }
  }

  resourceOptionIsSelected() {
    if (this.resourceOption.getAttribute('aria-selected') === 'true') {
      console.log('Resource option is selected');
    }
    else {
      throw new Error('RESOURCE OPTION is not selected')
    }

  }

  presentationMaterialsIsDispalyed() {
    return this.presentationMaterialsOption.isDisplayed();
  }

  roomSettingsOptionIsDispalyed() {
    this.roomSettingsOption.scrollIntoView(0, 100);
    return this.roomSettingsOption.isDisplayed();
  }

  resourceOptionIsDispaly() {
    return this.resourceOption.isDisplayed();
  }

  addAResourceButtonIsDispaly() {
    // this.addAResourceButton.moveTo();
    this.addAResourceButton.waitForDisplayed({ timeout: 30000 });

    return this.addAResourceButton.isDisplayed();

  }

  clickOnPresentationMaterials() {
    if (this.presentationMaterialsIsDispalyed() === true) {
      this.presentationMaterialsOption.click();

    } else {
      throw new Error("PRESENTATION MATERIAL OPTION IS NOT DIPSLAY");
    }
  }


  addMaterialOptionIsDispaly() {
    return this.addMaterialOption.isDisplayed();
  }


  clickOnSettingOption() {
    if (this.roomSettingsOptionIsDispalyed() === true) {
      this.roomSettingsOption.click();
    } else {
      throw new Error("SETTINGS OPTION IS NOT DISPLAYED");
    }
  }


  publicChatTabIsDisplay() {
    return this.publicChatTab.isDisplayed();
  }

  privateChatTabIsDisplay() {
    return this.privateChatTab.isDisplayed();
  }

  publicChatTabIsSelected() {
    if ($(".form-item-border-bottom.preferences-chat-selection > .ant-row-flex.ant-row-flex-space-between.schedule-type-boxes > div:nth-of-type(1)").isDisplayed() === true) {
      console.log("by default public chat tab is selected");
    } else {
      throw new Error("BY DEFAULT PUBLIC CHAT TAB IS NOT SELECTED");
    }
  }

  postSessionRedirectToggleIsDispaly() {
    return this.postSessionRedirectToggle.isDisplayed();
  }

  doneButtonIsDispalyed() {
    return this.doneButton.isDisplayed();
  }

  clickOnAddAResourceButton() {
    if (this.addAResourceButtonIsDispaly() === true) {
      this.addAResourceButton.click();

    } else {
      throw new Error("ADD A RESOURCE BUTTON IS NOT DISPLAYED");
    }
  }

  typeOfResourceDropDownIsDispaly() {
    this.typeOfResourceDropDown.scrollIntoView(0, 100);
    this.typeOfResourceDropDown.waitForDisplayed({ timeout: 1000 });
    return this.typeOfResourceDropDown.isDisplayed();
  }

  clickOnTypeOfResourceDropDown() {
    if (this.typeOfResourceDropDownIsDispaly() === true) {
      this.typeOfResourceDropDown.click();
    } else {
      throw new Error("TYPE OF RESOURCE DROPDOWN IS NOT DISPLAYED");

    }
  }

  pollOptionIsDispalyed() {
    this.pollOption.waitForDisplayed({ timeout: 10000 });
    return this.pollOption.isDisplayed();

  }

  handoutOptionIsDispalyed() {
    this.handoutOption.waitForDisplayed({ timeout: 6000 });
    return this.handoutOption.isDisplayed();
  }

  featuredActionOptionIsDispaly() {
    this.featuredActionOption.waitForDisplayed({ timeout: 10000 });
    return this.featuredActionOption.isDisplayed();
  }

  selectPollOption() {
    if (this.pollOptionIsDispalyed() === true) {
      this.pollOption.click();
    } else {
      throw new Error("POLL OPTION IS NOT DISPLAYED");
    }
  }

  questionFieldIsDispalyed() {
    return this.questionField.isDisplayed();
  }

  option1FieldIsDispalyed() {
    return this.optionField.isDisplayed();

  }

  option2FieldIsDisplayed() {
    return this.option2Field.isDisplayed();
  }

  addAnotherOptionIsDispaly() {
    return this.addAnotherOption.isDisplayed();
  }


  clickOnAddAnotherOption() {
    if (this.addAnotherOptionIsDispaly() === true) {
      this.addAnotherOption.click();
    } else {
      throw new Error("add another option is not displayed");
    }
  }

  option3FieldIsDisplay() {
    return this.option3Field.isDisplayed();
  }

  optionDeleteOptionIsDisplay() {
    return this.optionDeleteOption.isDisplayed();
  }

  shareResultCheckBoxIsDisplay() {
    this.shareResultsCheckBox.waitForDisplayed({ timeout: 30000 });
    this.shareResultsCheckBox.scrollIntoView();
    return this.shareResultsCheckBox.isDisplayed();
  }

  addResourceButtonIsDispaly() {
    this.addResourceButton.scrollIntoView();
    return this.addResourceButton.isDisplayed();
  }

  addQuestionField(question) {
    this.questionField.click();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    this.questionField.setValue(question);
  }

  addOption1Field(option1) {
    this.optionField.setValue(option1);
    browser.keys(['Meta', 'Enter']);
    browser.pause(200);
  }

  addOption2Field(option2) {
    this.optionField.setValue(option2);
    browser.keys(['Meta', 'Enter']);
    browser.pause(200);
  }

  clickOnDeleteOptionButton() {
    if (this.optionDeleteOptionIsDisplay() === true) {
      this.optionDeleteOption.click();
    } else {
      throw new Error("DELETE NEW OPTION BUTTON IS NOT DISPLAYED");
    }
  }

  markShareResultCheckBox() {
    if (this.shareResultsCheckBox.getAttribute("class") == "ant-checkbox") {
      this.shareResultsCheckBox.click();
    } else {
      throw new Error("share result with attendeess checkbox is not working");
    }
  }

  unMarkShareResultCheckBox() {
    if (this.shareResultsCheckBox.getAttribute("class") == "ant-checkbox-input") {
      this.shareResultsCheckBox.click();
    } else {
      console.log("share result with attendeess checkbox is disabled");
    }
  }

  clickOnAddResourceButton() {
    if (this.addResourceButtonIsDispaly() === true) {
      this.addResourceButton.waitForClickable({ timeout: 30000 });
      this.addResourceButton.scrollIntoView();
      this.addResourceButton.click();
      browser.pause(500);
    } else {
      throw new Error("add resource button is not working");
    }
  }

  validateAddedPoll(question) {
    var actQuestion = $(".ant-row-flex-middle .row-title").getText();
    if (actQuestion.includes(question)) {
      console.log("poll question is matched");
    } else {
      console.log("actual question>>" + actQuestion + "expected question>>" + question);
      throw new Error("poll question missmatched");
    }
  }

  selectHandoutOption() {
    if (this.handoutOptionIsDispalyed() === true) {
      this.handoutOption.click();
    } else {
      throw new Error("HANDOUT OPTION IS NOT DISPLAYED");
    }
  }

  handoutTitleFieldIsDisplay() {
    this.handoutTitleField.waitForDisplayed({ timeout: 6000 });
    return this.handoutTitleField.isDisplayed();
  }

  uploadMediaFieldIsDispaly() {
    return this.uploadMediaField.isDisplayed();
  }

  addHandoutTitleData(title) {
    if (this.handoutTitleFieldIsDisplay() === true) {
      this.handoutTitleField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      this.handoutTitleField.setValue(title);
    } else {
      throw new Error("HANDOUT TILE FIELD IS NOT DISPALYED");
    }
  }
  uploadImageData(image) {
    const element = $("span[role='button'] > input[type='file']");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    $("span[role='button'] > input[type='file']").scrollIntoView();
    $("span[role='button'] > input[type='file']").setValue(remoteFilePath);
    browser.pause(6000);

  }


  validateAddedHoandoutTitle(title) {
    var actTitle = $(".ant-row-flex-middle .row-title").getText();
    if (actTitle.includes(title)) {
      console.log("Handout title is matched");
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + title);
      throw new Error("Added handout title missmatched");
    }
  }

  featuredTitleFieldIsDispaly() {
    this.featuredTitleField.waitForDisplayed({ timeout: 6000 });
    return this.featuredTitleField.isDisplayed();
  }

  linkUrlFieldIsDisplay() {
    this.linkUrlField.waitForDisplayed({ timeout: 6000 });
    return this.linkUrlField.isDisplayed();
  }

  selectFeaturedActionOption() {
    if (this.featuredActionOptionIsDispaly() === true) {
      this.featuredActionOption.click();
    } else {
      throw new Error("FEATURED ACTION OPTION IS NOT DISPLAYED");
    }
  }

  addFeaturedTitleField(title) {
    this.featuredTitleField.waitForDisplayed({ timeout: 6000 });
    this.featuredTitleField.click();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    this.featuredTitleField.setValue(title);
  }

  addLinkUrlField(link) {
    this.linkUrlField.waitForDisplayed({ timeout: 6000 });
    this.linkUrlField.setValue(link);
  }

  addButtonTextField(buttonText) {
    this.buttonTextField.waitForDisplayed({ timeout: 6000 });
    this.buttonTextField.setValue(buttonText);
  }

  validateAddedFeaturedAction(title) {

    const elem = $('.ant-row-flex-middle .row-title');
    $('.ant-row-flex-middle .row-title').waitForEnabled(3000);
    var actTitle = elem.getText();

    //var actTitle = $(".ant-row-flex-middle .row-title").getText();
    if (actTitle.includes(title)) {
      console.log("Featured Action title is matched");
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + title);
      throw new Error("Added Featured Action title missmatched");
    }
  }

  clickOnAddAMaterialOption() {
    if (this.addMaterialOptionIsDispaly() === true) {
      this.addMaterialOption.click();
    } else {
      throw new Error("ADD A MATERIAL OPTION IS NOT DISPLAYED");
    }
  }


  typeOfMaterialDropDownIsDisplay() {
    this.typeOfMaterialDropDown.waitForDisplayed({ timeout: 30000 });
    return this.typeOfMaterialDropDown.isDisplayed();
  }

  clickonTypeOfMaterialDropDown() {
    if (this.typeOfMaterialDropDownIsDisplay() === true) {
      this.typeOfMaterialDropDown.click();
    } else {
      throw new Error("Type of material dropdown is not dispalyed");
    }
  }

  addMaterialButtonIsDispalyed() {
    this.addMaterialButton.waitForDisplayed({ timeout: 10000 });
    this.addMaterialButton.waitForClickable({ timeout: 10000 });
    return this.addMaterialButton.isDisplayed();
  }

  slidesOptionIsDispaly() {
    this.slidesOption.waitForDisplayed({ timeout: 10000 });
    return this.slidesOption.isDisplayed();
  }

  videoOptionIsDisplayed() {
    this.videoOption.waitForDisplayed({ timeout: 6000 });
    return this.videoOption.isDisplayed();
  }

  selectSlidesOption() {
    if (this.slidesOptionIsDispaly() === true) {
      this.slidesOption.click();
    } else {
      throw new Error("SLIDES OPTION IS NOT DISPALYED");
    }
  }

  materialNameFieldIsDispaly() {
    this.materialNameField.waitForDisplayed({ timeout: 6000 });
    return this.materialNameField.isDisplayed();
  }

  addMaterialNameField(name) {
    if (this.materialNameFieldIsDispaly() === true) {
      this.materialNameField.click();
      browser.pause(100);
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      this.materialNameField.setValue(name);
    } else {
      throw new Error("ADD MATERIAL NAME FIELD IS NOT DISPLAYED")
    }
  }

  uploadSlideFile(slide) {
    const element = $("span[role='button'] > input[type='file']");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/slideFile/" + slide);
    const remoteFilePath = browser.uploadFile(filePath);
    $("span[role='button'] > input[type='file']").scrollIntoView();
    $("span[role='button'] > input[type='file']").setValue(remoteFilePath);
    const button = $("//button[@class='ant-btn Button animated fadeIn --right ant-btn-primary']").waitForDisplayed({ timeout: 30000 });

  }

  clickOnAddMaterialButton() {
    if (this.addMaterialButtonIsDispalyed() === true) {
      this.addMaterialButton.click();
    } else {
      throw new Error("ADD MATERIAL BUTTON IS NOT DISPLAYED");
    }
  }

  validateNewAddedMaterial(name) {
    var actMaterialName = $(".material-list-item .row-title").getText();
    if (actMaterialName.includes(name)) {
      console.log("Material name is matched");
    } else {
      throw new Error("Added new material name is missmatched actual material>>" + actMaterialName + "expected material>>" + name);
    }
  }

  selectVideoOption() {
    if (this.videoOptionIsDisplayed() === true) {
      this.videoOption.click();
    } else {
      throw new Error("VIDEO OPTION IS NOT DISPALYED");
    }
  }
  uploadVideoFile(video) {
    const element = $("span[role='button'] > input[type='file']");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/videoFile/" + video);
    const remoteFilePath = browser.uploadFile(filePath);
    $("span[role='button'] > input[type='file']").scrollIntoView();
    $("span[role='button'] > input[type='file']").setValue(remoteFilePath);
    const button = $("//button[@class='ant-btn Button animated fadeIn --right ant-btn-primary']").waitForDisplayed({ timeout: 50000 });

  }

  clickOnPrivetaChatTab() {
    if (this.privateChatTabIsDisplay() === true) {
      // this.privateChatTab.scrollIntoView();
      browser.pause("3000");
      this.privateChatTab.click();
      browser.pause("3000");
    } else {
      throw new Error("PRIVATE CHAT TAB IS NOT DISPLAYED");
    }
  }
  privateChatTabIsSelected() {
    $("//div[@class='flex schedule-type-box-thin schedule-type-box preferences-chat-box room-settings-box --selected']").waitForDisplayed({ timeout: 10000 });
    if ($("//div[@class='flex schedule-type-box-thin schedule-type-box preferences-chat-box room-settings-box --selected']").isDisplayed() === true) {
      console.log("Private chat tab is selected");
    } else {
      throw new Error("PRIVATE CHAT TAB IS NOT SELECTED");
    }
  }

  turnOnPostSessionRedirectToggle() {
    if (this.postSessionRedirectToggle.getText() === "OFF") {
      browser.pause("3000");
      this.postSessionRedirectToggle.click();
      browser.pause("3000");
    }

    else {
      console.log("post session redirect button is already on");
    }
  }

  addCustomUrlFieldIsDisplayed() {
    this.addCustomUrlField.waitForDisplayed({ timeout: 6000 })
    return this.addCustomUrlField.isDisplayed();
  }

  addCustomUrlFieldData(url) {
    if (this.addCustomUrlFieldIsDisplayed() === true) {
      this.addCustomUrlField.setValue(url);
    } else {
      throw new Error("ADD CUSTOM URL FIELD IS NOT DISPLAYED");
    }
  }

  clickOnEventAdminsTab() {
    if (this.guestTab.isDisplayed() === true) {
      console.log("Admin tab is already open");
    } else {
      this.eventAdminsTab.click();

    }
  }

  hostNameInEventAdminIsDispaly() {
    this.hostNameInEventAdmin.waitForDisplayed({ timeout: 6000 });
    return this.hostNameInEventAdmin.isDisplayed();

  }
  swapHostBtnInEventAdminIsDsipaly() {
    this.swapHostBtnInEventAdmin.waitForDisplayed({ timeout: 6000 })
    return this.swapHostBtnInEventAdmin.isDisplayed();
  }

  teamMemberTabIsDiaplay() {
    this.teamMemberTab.waitForDisplayed({ timeout: 6000 });
    return this.teamMemberTab.isDisplayed();
  }

  guestTabIsDisplay() {
    this.guestTab.waitForDisplayed({ timeout: 10000 });
    return this.guestTab.isDisplayed();
  }

  teamMemberTabIsSelected() {
    if (this.teamMemberTab.getAttribute("class") == "ant-radio-button-wrapper ant-radio-button-wrapper-checked") {
      console.log("team member tab is selected");
    } else {
      throw new Error("team member tab is not selected");
    }
  }

  chooseMemberDropDownIsDisplay() {
    this.chooseMemberDropDown.waitForDisplayed({ timeout: 6000 });
    return this.chooseMemberDropDown.isDisplayed();
  }

  clickOnChooseMemberDropDown() {
    if (this.chooseMemberDropDownIsDisplay() === true) {
      // this.chooseMemberDropDown.moveTo();
      this.chooseMemberDropDown.click();
    } else {
      throw new Error("CHOOSE MEMBER DROPDOWN IS NOT DISPALYED");
    }
  }
  addedMemberNameIsDisplay() {
    this.addedMemberName.waitForDisplayed({ timeout: 10000 });
    return this.addedMemberName.isDisplayed();
  }

  addAnotherUserOptionIsDisplay() {
    this.addAnotherUserOption.waitForDisplayed({ timeout: 6000 })
    return this.addAnotherUserOption.isDisplayed();
  }

  selectRoleDropdownIsDisplay() {
    this.hostNameInEventAdmin.waitForDisplayed({ timeout: 6000 })
    this.hostNameInEventAdmin.click();
    this.selectRoleDropdown.waitForDisplayed({ timeout: 3000 });
    return this.selectRoleDropdown.isDisplayed();
  }

  clickOnSelectRoleDropDown() {
    if (this.selectRoleDropdown.isDisplayed() === true) {
      // this.selectRoleDropdown.scrollIntoView();
      this.selectRoleDropdown.click();
    } else {
      throw new Error("SELECT ROLE DROPDOWN IS NOT DISPLAYED");
    }
  }

  hostOptionIsDisplay() {
    this.hostOption.waitForDisplayed({ timeout: 6000 });
    return this.hostOption.isDisplayed();
  }

  presenterOptionIsDisplay() {
    this.presenterOption.waitForDisplayed({ timeout: 6000 })
    return this.presenterOption.isDisplayed();
  }

  moderatorOptionIsDisplay() {
    this.moderatorOption.waitForDisplayed({ timeout: 6000 });
    return this.moderatorOption.isDisplayed();
  }

  allSessionButtonIsDispaly() {
    this.allSessionButton.waitForDisplayed({ timeout: 3000 });
    return this.allSessionButton.isDisplayed();
  }

  addAdminButtonIsDispaly() {
    this.addAdminButton.waitForDisplayed({ timeout: 6000 });
    return this.addAdminButton.isDisplayed();
  }

  selectRoleOption(role) {
    $("//div[contains(text(),'" + role + "')]").click();
  }

  clickOnAllSessionButton() {
    if (this.allSessionButtonIsDispaly() === true) {
      this.allSessionButton.click();
    } else {
      throw new Error("all session button is not displayed");
    }
  }

  inviteAdminCheckBoxIsDispaly() {
    this.inviteAdminCheckBox.waitForDisplayed({ timeout: 8000 })
    return this.inviteAdminCheckBox.isDisplayed();
  }


  selectInviteAdminCheckBox() {
    if (this.inviteAdminCheckBox.isSelected() === true) {
      console.log("check box is already selected");
    } else {
      console.log("check box is not selected");
    }
  }


  confirmButtonIsDispaly() {
    this.confirmButton.waitForDisplayed({ timeout: 6000 })
    return this.confirmButton.isDisplayed();
  }


  clickOnConfirmButton() {
    if (this.confirmButtonIsDispaly() === true) {
      this.confirmButton.click();
      browser.pause(2000);
    } else {
      throw new Error("CONFIRM BUTTON IS NOT DISPLAYED");
    }

  }

  clickOnGuestTab() {
    if (this.guestTabIsDisplay() === true) {
      this.guestTab.scrollIntoView(0, 100)
      this.guestTab.click();
    } else {
      throw new Error("GUEST TAB IS NOT DISPLAYED ")
    }
  }

  nameFieldIsDispalyed() {
    this.nameField.waitForDisplayed({ timeout: 6000 })
    return this.nameField.isDisplayed();
  }

  emailFieldIsDispalyed() {
    this.emailFieldForAdmin.waitForDisplayed({ timeout: 6000 })
    return this.emailFieldForAdmin.isDisplayed();
  }

  addNameField(name) {
    if (this.nameFieldIsDispalyed() === true) {
      this.nameField.setValue(name);
    } else {
      throw new Error("name field is not displayed");
    }
  }

  addEmailFieldForAdmin() {
    if (this.emailFieldIsDispalyed() === true) {
      var newNumber = Math.floor((Math.random() * 100) + 1);
      this.emailFieldForAdmin.setValue("tester.desk24+" + newNumber + "+@gmail.com");
    } else {
      throw new Error("Email field is not displayed");
    }
  }

  selectRoleGuestDropDownIsDisplay() {
    this.selectRoleGuestDropDown.waitForDisplayed({ timeout: 6000 })
    return this.selectRoleGuestDropDown.isDisplayed();
  }

  clickOnSelectRoleGuestDropdown() {
    if (this.selectRoleGuestDropDownIsDisplay() === true) {
      this.selectRoleGuestDropDown.click();
    } else {
      throw new Error("SELECT ROLE DROPDOWN FOR GUEST IS DISPALYED");
    }
  }

  clickOnAddAdminButton() {
    if (this.addAdminButtonIsDispaly() === true) {
      this.addAdminButton.click();
    } else {
      throw new Error("ADD ADMIN BUTTON IS NOT DISPLAYED");
    }
  }

  genaratrRandomNumber() {
    var newNumber = Math.floor((Math.random() * 100) + 1);
    console.log("number is >>" + newNumber);
  }

  validateAddedRole(role) {
    var result = role.toLowerCase();
    const elem = $("//div[contains(text(),'" + result + "')]");
    elem.waitForDisplayed({ timeout: 6000 });
    // var actRole = elem.getText();
    // var expRole = role;
    if (elem.isDisplayed() === true) {
      console.log("add role is matched");
    } else {
      throw new Error("FAILED TO ADD ROLE>>" + role);
    }
  }

  validateAddedName(name) {
    const elem = $('(//div[@class="admin-name"])[2]');
    // elem.scrollIntoView();
    elem.waitForDisplayed({ timeout: 6000 });
    var actName = elem.getText();
    var expName = name;
    if (actName.includes(expName)) {
      console.log("add name is matched");
    } else {
      throw new Error("ADDED NAME IS MISSMATCHED actual name>>" + actName + "expected Name>>" + expName);
    }
  }

  addedEmailIsDispalyed() {
    const elem = $('//div[@class="admin-email"]');
    elem.waitForDisplayed({ timeout: 6000 });
    return elem.isDisplayed();
  }

  upcomingSessionIsSelected() {
    if ($(".session-list div:nth-of-type(1)").getAttribute("class") === "share-tab-option-container active") {
      console.log("upcoming session tab is selected");
    } else {

      throw new Error("Upcoming session tab is not selected");
    }
  }

  sessionDateTitmeIsDisplay() {
    this.sessionDateTime.waitForDisplayed({ timeout: 6000 })
    return this.sessionDateTime.isDisplayed();
  }

  adminTermIsDisplay() {
    this.adminTermOption.waitForDisplayed({ timeout: 6000 })
    return this.adminTermOption.isDisplayed();
  }

  registerOptionIsDisplay() {
    this.registerOption.waitForDisplayed({ timeout: 6000 })
    return this.registerOption.isDisplayed();
  }

  sessionDropDownIsDisplayed() {
    this.sessionDropDown.waitForDisplayed({ timeout: 10000 });
    return this.sessionDropDown.isDisplayed();
  }

  clickOnSessionDropDown() {
    if (this.sessionDropDownIsDisplayed() === true) {
      // this.sessionDropDown.scrollIntoView();
      this.sessionDropDown.click();

    } else {
      throw new Error("SESSION DROPDOWN IS NOT DISPLAYED");
    }
  }

  viewInsightsOptionIsDisplay() {
    this.viewInsightsOption.waitForDisplayed({ timeout: 30000 });
    return this.viewInsightsOption.isDisplayed();
  }

  editDateAndTimeOptionIsDisplay() {
    this.editDateAndTimeOption.waitForDisplayed({ timeout: 6000 })
    return this.editDateAndTimeOption.isDisplayed();
  }

  cancelSessionOptionIsDisplay() {
    this.cancelSessionOption.waitForDisplayed({ timeout: 10000 });
    return this.cancelSessionOption.isDisplayed();
  }


  clickOnPastSessionOption() {
    this.pastSessionsOption.waitForDisplayed({ timeout: 10000 });
    if (this.pastSessionsIsDisplay() === true) {
      this.pastSessionsOption.click();
    } else {
      throw new Error("Past session option is not dispalyed")
    }
  }

  registeredOptionForPastIsDisplay() {
    this.registeredOptionForPast.waitForDisplayed({ timeout: 6000 })
    return this.registeredOptionForPast.isDisplayed();
  }

  attendedOptionIsDisplay() {
    this.attendedOption.waitForDisplayed({ timeout: 6000 })
    return this.attendedOption.isDisplayed();
  }

  messageOptionIsDisplay() {
    this.messageOption.waitForDisplayed({ timeout: 6000 })
    return this.messageOption.isDisplayed();
  }

  missedOptionIsDisplay() {
    this.missedOption.waitForDisplayed({ timeout: 6000 })
    return this.missedOption.isDisplayed();
  }


  clickOnCancelSessionOption() {
    if (this.cancelSessionOptionIsDisplay() === true) {
      this.cancelSessionOption.scrollIntoView();
      this.cancelSessionOption.click();
      browser.pause(3000);
    } else {
      throw new Error("cancel session option is not displayed");
    }
  }
  validateCancelSessionWindow(windowTitle) {
    var actTitle = $(".ant-modal-body  div[role='tablist'] div[role='tab']").getText();
    if (actTitle.includes(windowTitle)) {
      console.log("cancel session window is dispalyed");
    } else {
      console.log("actual title>>" + $(".ant-modal-body  div[role='tablist'] div[role='tab']").getText() + "expected title>>" + windowTitle);
      throw new Error("CANCEL SESSION WINDOW IS NOT DISPLAYED");

    }
  }

  clickOnYesConfirmButton() {
    this.yesConfirmButton.waitForDisplayed({ timeout: 5000 });
    if (this.yesConfirmButton.isDisplayed() === true) {
      this.yesConfirmButton.click();
    } else {
      throw new Error("YES CONFIRM BUTTON IS NOT DISPLAYED");
    }
  }

  validateCanceledSession() {
    if ($(".ant-table-fixed > .ant-table-tbody").isDisplayed() === true) {
      throw new Error("Cancelled session is still displayed under upcomning session tab");
    } else {
      console.log("Session cancelled successfully");
    }
  }
  clickOnScheduleSessionButton() {
    this.scheduleSessionButton.waitForDisplayed({ timeout: 20000 });
    if (this.scheduleSessionButton.isDisplayed() === true) {
      this.scheduleSessionButton.click();
    } else {
      throw new Error("schedule session button is not displayed");
    }
  }

  secondSessionUnderUpcomingSessTab() {
    return $(".ant-table-tbody > tr:nth-of-type(2)").isDisplayed();
  }

  clickOnRegisterButton() {
    if (this.registerButton.isDisplayed() === true) {
      this.registerButton.click();
    } else {
      throw new Error("REGISTER BUTTON IS NOT DISPALYED");
    }
  }

  addRegistrationEmailField(email) {
    const emailField = $("//input[@name='email']");
    emailField.waitForDisplayed({ timeout: 6000 })
    emailField.click();
    browser.pause(100);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    emailField.setValue(email);
  }

  validateRegisteredSuccessMessage(message) {
    const messageTitle = $(".success-message");
    messageTitle.waitForDisplayed({ timeout: 10000 });
    var actTitle = messageTitle.getText();
    if (actTitle.includes(message)) {
      console.log("message title matched");
    } else {
      console.log("actual title>>" + actTitle + "expected title>>" + message);
      throw new Error("MESSAGE TITLE MISSMATCHED..!!");
    }
  }

  joinLinkOnSuccessPageIsDisplay() {
    this.joinLinkOnSuccessPage.waitForDisplayed({ timeout: 10000 });
    return this.joinLinkOnSuccessPage.isDisplayed();
  }

  clickOnJoinRoomButton() {
    this.joinRoomButtonOnSuccessPage.waitForDisplayed({ timeout: 20000 });
    if (this.joinRoomButtonOnSuccessPage.isDisplayed() === true) {
      this.joinRoomButtonOnSuccessPage.click();
      browser.pause(4000);
    } else {
      throw new Error("JOIN ROOM BUTTON IS NOT DISPALYED ON DEMIO SUCCESS PAGE");
    }
  }

  switchToEventRoomWindow() {
    super.switchToWindowNewTab();


  }

  manageYourRegistrationLinkIsDisplay() {
    //const elem = $("//a[contains(text(),'Download Chrome')]");
    this.manageYourRegistrationLink.waitForDisplayed({ timeout: 20000 });
    return this.manageYourRegistrationLink.isDisplayed();
  }

  clickOnManageYourRegistrationLink() {
    this.manageYourRegistrationLink.waitForDisplayed({ timeout: 6000 })
    this.manageYourRegistrationLink.click();
  }
  cancelRegistrationLinkIsDispaly() {
    this.cancelRegistrationLink.waitForDisplayed({ timeout: 6000 });
    return this.cancelRegistrationLink.isDisplayed();
  }


  switchToManageEventWindow() {
    //super.switchToWindowAtFirtIndex();
    super.switchToParentTab();

  }


  clickOnActivityTab() {
    this.activityTab.scrollIntoView(0, 200)
    this.activityTab.waitForDisplayed({ timeout: 10000 });
    if (this.activityTabIsDisplay() === true) {
      this.activityTab.click();
    } else {
      throw new Error("activity is not displayed");
    }
  }

  clickOnPeopleTab() {
    this.peopleTab.waitForDisplayed({ timeout: 5000 });
    if (this.peopleTab.isDisplayed() === true) {
      this.peopleTab.scrollIntoView(0, 100)
      this.peopleTab.click();
      browser.pause(1000);
    } else {
      throw new Error("PEOPLE TAB IS NOT DISPLAYED");
    }
  }

  exportCSVIsDisplayed() {
    this.exportCSV.waitForDisplayed({ timeout: 30000 })
    return this.exportCSV.isDisplayed();

  }

  clickOnExportCsvButton() {
    if (this.exportCSVIsDisplayed() === true) {
      this.exportCSV.click();
    } else {
      throw new Error("EXPORT CSV BUTTON IS NOT DISPALYED");
    }
  }
  clickOnCancelRegistrationLink() {
    if (this.cancelRegistrationLinkIsDispaly() === true) {
      this.cancelRegistrationLink.click();
    } else {
      throw new Error("CANCEL REGISTRATION LINK IS NOT DISPLAYED");
    }
  }

  messagePromptIsDisplay() {
    $(".ant-modal-confirm-title").waitForDisplayed({ timeout: 10000 });
    return $(".ant-modal-confirm-title").isDisplayed();
  }

  noNevenMindOptionIsDisplay() {
    this.noNeverMindOption.waitForDisplayed({ timeout: 6000 })
    return this.noNeverMindOption.isDisplayed();
  }

  yesCancelOptionIsDisplay() {
    this.yesCancelOption.waitForDisplayed({ timeout: 6000 })
    return this.yesCancelOption.isDisplayed();
  }

  clickOnYesCancelOption() {
    if (this.yesCancelOptionIsDisplay() === true) {
      this.yesCancelOption.click();
    } else {
      throw new Error("YES, CANCEL OPTION IS NOT DISPLAYED");
    }
  }

  validateCancelRegistrationMessage(cancelMessage) {
    $(".manage-info").waitForDisplayed({ timeout: 10000 });
    var actMessage = $(".manage-info").getText();
    if (actMessage.includes(cancelMessage)) {
      console.log("cancel registration message is matched");
    } else {
      console.log("actual message>>" + actMessage + "expected message>>" + cancelMessage);
      throw new Error("CANCEL REGISTRATION MESSAGE MISSMATCHED..!!");
    }
  }

  userRemovedFromRegistrationForm() {
    if ($(".ant-input.ant-input-lg").isDisplayed() === true) {
      throw new Error("Cancel registration functionality is not working");
    } else {
      console.log("Cancel registration functionality is working");
    }
  }

  closeResentWindow() {
    browser.closeWindow();
  }

  clickOnJoinRoom() {
    browser.pause(2000);
    this.joinRoomButton.waitForDisplayed({ timeout: 10000 });
    this.joinRoomButton.waitForClickable({ timeout: 30000 });
    if (this.joinRoomButtonIsDisplay() === true) {
      // this.joinRoomButton.scrollIntoView();
      this.joinRoomButton.click();
      browser.pause(1000);
    } else {
      throw new Error("JOIN ROOM BUTTON IS NOT DISPLAYED");
    }
  }


  switchToJoinWindow() {
    //super.switchToWindowNewTab();
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handleXXXXX " + handle);

    browser.switchToWindow(handle[1]);


  }

  joinRoomBtnUnderJoinIsDisplayed() {
    this.joinRoomBtnUnderJoin.waitForDisplayed({ timeout: 30000 })
    return this.joinRoomBtnUnderJoin.isDisplayed();
  }

  clickOnJoinRoomBtnUnderJoin() {
    if (this.joinRoomBtnUnderJoinIsDisplayed() === true) {
      this.joinRoomBtnUnderJoin.click();
    } else {
      throw new Error("join room button is not displayed under join window");
    }
  }

  clickOnLeftHeaderButton() {
    this.leftHeaderButton.waitForDisplayed({ timeout: 10000 });
    if (this.leftHeaderButton.isDisplayed() === true) {
      this.leftHeaderButton.click();
    } else {
      throw new Error("left headed button is not displayed")
    }

  }

  clickOnStartSessionButton() {
    this.startSessionButton.waitForClickable({ timeout: 10000 });
    if (this.startSessionButton.isDisplayed() === true) {
      this.startSessionButton.click();
      browser.pause(6000);
    } else {
      throw new Error("Start session button is not displayed")
    }
  }

  clickOnYesButton() {
    this.yesButton.waitForDisplayed({ timeout: 10000 });
    if (this.yesButton.isDisplayed() === true) {
      this.yesButton.click();


    } else {
      throw new Error("Yes start button is not displayed")
    }
  }


  clickOnGoOnStageButton() {
    if (this.goOnStageButton.isDisplayed() === true) {
      this.goOnStageButton.click();
      const goOnStageJoin = $(".join-button");
      goOnStageJoin.click();
    } else {
      throw new Error("Go On Stage button is not displayed")
    }
  }

  viewSharingOptionsBtnIsDisplayed() {
    this.viewSharingOptionsBtn.waitForDisplayed({ timeout: 30000 });
    return this.viewSharingOptionsBtn.isDisplayed();
  }

  clickOnViewSharingOptions() {

    if (this.viewSharingOptionsBtnIsDisplayed() === true) {
      this.viewSharingOptionsBtn.click();
    } else {
      throw new Error("view sharing option button is not displayed")
    }
  }

  shareMaterialOptionIsDisplayed() {
    this.shareMaterialOption.waitForDisplayed({ timeout: 15000 });
    return this.shareMaterialOption.isDisplayed();
  }

  clickOnShareMaterialOption() {

    if (this.shareMaterialOptionIsDisplayed() === true) {
      this.shareMaterialOption.click();

    } else {
      throw new Error("Share screen option button is not displayed")
    }
  }

  clickOnEndSessionButton() {
    if (this.endSessionButton.waitForDisplayed({ timeout: 10000 }) && this.endSessionButton.isDisplayed() === true) {
      this.endSessionButton.click();

    } else {
      throw new Error("EndSession button is not displayed")
    }
  }

  shareReplayOptionIsDispaly() {
    this.shareReplayOption.waitForDisplayed({ timeout: 10000 });
    return this.shareReplayOption.isDisplayed();
  }

  downloadRecordingOptionIsDisplay() {
    this.downloadRecordingOption.waitForDisplayed({ timeout: 6000 })
    return this.downloadRecordingOption.isDisplayed();
  }

  deleteRecordingOptionIsDisplay() {
    this.deleteRecordingOption.waitForDisplayed({ timeout: 6000 })
    return this.deleteRecordingOption.isDisplayed();
  }

  clickOnShareReplayOption() {
    if (this.shareReplayOptionIsDispaly() === true) {
      this.shareReplayOption.click();
    } else {
      throw new Error("share replay option is not displayed");
    }
  }

  arrowOnRecordingPopupIsDisplay() {
    this.arrowInRecordingPopup.waitForDisplayed({ timeout: 10000 });
    return this.arrowInRecordingPopup.isDisplayed();
  }

  clickOnArrowOnRecordingPage() {
    if (this.arrowOnRecordingPopupIsDisplay() === true) {
      this.arrowInRecordingPopup.click();

    } else {
      throw new Error("ARROW IS NOT DISPLAYED ON RECORDING PAGE POPUP");
    }
  }

  switchToRecordingWindow() {
    super.switchToWindowNewTab();

  }

  playRecordingButtonIsDisplay() {
    browser.refresh();
    this.playRecordingButton.waitForDisplayed({ timeout: 10000 });
    return this.playRecordingButton.isDisplayed();

  }



  selectViewInsightsOption() {
    if (this.viewInsightsOptionIsDisplay() === true) {
      this.viewInsightsOption.click();
    } else {
      throw new Error("VIEW INSIGHTS OPTION IS NOT DISPLAYED UNDER DROPDOWN LIST");
    }
  }

  insightsTabIsActive() {
    const elem = $('((//div[@class="share-tabs"])[2]//div)[1]')
    elem.waitForExist({ timeout: 10000 })
    if (elem.getAttribute("class") === "share-tab-option-container active") {
      console.log("user successfully redirect on activity insights field");
    } else {
      throw new Error("FAILED TO REDIRECT ON ACTIVITY INSIGHTS FILED");
    }
  }
  clickOnSummaryTab() {
    this.summaryTab.waitForDisplayed({ timeout: 10000 });
    if (this.summaryTabIsDisplay() === true) {
      this.summaryTab.scrollIntoView(0, 200)
      this.summaryTab.click();
    }
  }
  attendEventAndSentMessage(count, name, email, message) {
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      this.attendAndSentMessageMultipleUsers(name, email, message);
    }

  }

  eventIsNotReadyMessageIsDisplayed() {
    const elem = $('.white-block-message');
    return elem.isDisplayed();

  }

  registerEvents(name, email) {
    // var regLinks = this.getRegistraionLinks();
    // super.openUrlInNewTab(regLinks);
    // super.switchToWindowNewTab();
    browser.pause(3000);
    // const elem = $('.white-block-message');

    var length = 50;
    var i = 1;
    do {
      if (this.eventIsNotReadyMessageIsDisplayed() === true) {
        browser.refresh();
        browser.pause(2000);
        i++;
      } else {
        browser.pause(2000);
        this.addFirstNameFieldData(name);
        browser.pause(1000);
        this.addEmailField(email);
        browser.pause(2000);
        this.clickOnRegistrationButton();
        browser.pause(2000);
        break;
      }

      i++;

    } while (i <= length);


  }

  joinTimeStampColumnIsDisplay() {
    this.joinTimeStampColumn.waitForDisplayed({ timeout: 10000 });
    return this.joinTimeStampColumn.isDisplayed();
  }

  moveToJoinTimeStampColumn() {
    if (this.joinTimeStampColumnIsDisplay() === true) {
      this.joinTimeStampColumn.scrollIntoView();
    } else {
      throw new Error("JOIN TIME STAMP COLUMN IS NOT DISPLAYES");
    }
  }

  joinTimeStampIsDispaly() {
    this.joinTimeStamp.waitForDisplayed({ timeout: 6000 });
    return this.joinTimeStamp.isDisplayed();
  }

  exitTimeStampColumnIsDisplay() {
    this.exitTimeStampColumn.waitForDisplayed({ timeout: 10000 });
    return this.exitTimeStampColumn.isDisplayed();
  }

  exitTimeStampIsDispaly() {
    this.exitTimeStamp.waitForDisplayed({ timeout: 6000 });
    return this.exitTimeStamp.isDisplayed();
  }

  attendanceMintsColumnIsDisplay() {
    this.attendanceMintsColumn.waitForDisplayed({ timeout: 10000 });
    return this.attendanceMintsColumn.isDisplayed();
  }

  moveToExitTimeStapmColumn() {
    this.exitTimeStampColumn.waitForDisplayed({ timeout: 6000 });
    this.exitTimeStampColumn.scrollIntoView();
  }

  moveToAttendanceMintsColumn() {
    this.attendanceMintsColumn.waitForDisplayed({ timeout: 6000 });
    this.attendanceMintsColumn.scrollIntoView();
  }
  attendanceMintsIsDispaly() {
    this.attendanceMints.waitForDisplayed({ timeout: 6000 });
    return this.attendanceMints.isDisplayed();
  }

  moveToAttendancePerColumn() {
    this.attendancePerColumn.waitForDisplayed({ timeout: 6000 });
    this.attendancePerColumn.scrollIntoView();
  }
  attendancePerColumnIsDisplay() {
    this.attendancePerColumn.waitForDisplayed({ timeout: 6000 });
    return this.attendancePerColumn.isDisplayed();
  }
  attendancePerIsDispaly() {
    this.attendancePer.waitForDisplayed({ timeout: 6000 })
    return this.attendancePer.isDisplayed();
  }
  nameOrEmailColumnIsDispaly() {
    this.nameOrEmailColumn.waitForDisplayed({ timeout: 10000 });
    return this.nameOrEmailColumn.isDisplayed();
  }

  regDateAndTimeColumnIsDisplay() {
    this.regDateAndTimeColumn.waitForDisplayed({ timeout: 10000 });
    return this.regDateAndTimeColumn.isDisplayed();
  }


  sessionDateAndTimeColumnIsDiplay() {
    this.sessionDateAndTimeColumn.waitForDisplayed({ timeout: 6000 });
    return this.sessionDateAndTimeColumn.isDisplayed();
  }

  focusPerColumnIsDisplay() {
    this.focusPerColumn.waitForDisplayed({ timeout: 6000 })
    return this.focusPerColumn.isDisplayed();
  }

  locationColumnIsDisplay() {
    this.locationColumn.waitForDisplayed({ timeout: 6000 })
    return this.locationColumn.isDisplayed();
  }
  moveToFocusPerColumn() {
    this.focusPerColumn.waitForExist({ timeout: 6000 })
    this.focusPerColumn.scrollIntoView();
  }

  focusPerIsDisplayed() {
    this.focusPer.waitForDisplayed({ timeout: 6000 })
    return this.focusPer.isDisplayed();

  }

  moveToRegDateAndTimeColumn() {
    this.regDateAndTimeColumn.waitForExist({ timeout: 6000 })
    this.regDateAndTimeColumn.scrollIntoView();
  }

  regDateAndTimeIsDisplayed() {
    this.regDateAndTime.waitForDisplayed({ timeout: 6000 })
    return this.regDateAndTime.isDisplayed();
  }

  attendedColumnIsDisplay() {
    this.regDateAndTimeColumn.waitForDisplayed({ timeout: 6000 })
    return this.regDateAndTimeColumn.isDisplayed();
  }

  moveToSessionDateAndTimeColumn() {
    this.sessionDateAndTimeColumn.waitForExist({ timeout: 6000 })
    this.sessionDateAndTimeColumn.scrollIntoView();
  }
  sessionDateAndTimeIsDisplayed() {
    this.sessionDateAndTime.waitForDisplayed({ timeout: 6000 });
    return this.sessionDateAndTime.isDisplayed();
  }


  moveToNameOrEmailColumn() {
    this.nameOrEmailColumn.waitForExist({ timeout: 6000 })
    this.nameOrEmailColumn.scrollIntoView();
  }

  nameOrEmailIsDisplayed() {
    this.nameOrEmail.waitForDisplayed({ timeout: 6000 });
    return this.nameOrEmail.isDisplayed();
  }

  moveToAttendedColumn() {
    this.attendedColumn.waitForExist({ timeout: 6000 })
    this.attendedColumn.scrollIntoView();
  }

  validateAttendedResult() {
    if (this.attendedResult.getText() === "Yes") {
      console.log("User sttends the session");
    } else if (this.attendedResult.getText() === "No") {
      console.log("user not attends the session");
    } else {
      console.log("Attend result is>>" + this.attendedResult.getText());
      throw new Error("Attended result field si not working");
    }
  }
  validateInsightsRegCount(regCount) {
    this.insightsRegistered.waitForDisplayed({ timeout: 10000 });
    var actRegistered = this.insightsRegistered.getText().trim();
    var Totalcount = parseInt(actRegistered);
    if (Totalcount == regCount) {
      console.log("registered count is matched on insights view");
    } else {
      throw new Error("REGISTERED COUNT IS NOT CORRECT ON INSIGHTS VIEW actual registered>>" + Totalcount + "expected registered>>" + regCount);
    }
  }

  validateInsightsMissedCount(missedCount) {
    this.insightsMissed.waitForDisplayed({ timeout: 200000 });
    // this.insightsMissed.scrollIntoView();
    var actMissed = this.insightsMissed.getText().trim();
    var Totalcount = parseInt(actMissed);
    if (Totalcount == missedCount) {
      console.log("missed count is matched on insights view");
    } else {
      console.log("actual missed>>" + Totalcount + "expected missed>>" + missedCount);
      throw new Error("MISSED COUNT IS NOT CORRECT ON INSIGHTS VIEW");
    }

  }


  validateInsightsAttendedCount(attendedCount) {
    // this.insightsAttended.scrollIntoView();
    browser.pause(1000);
    var actAttended = this.insightsAttended.getText().trim();
    var Totalcount = parseInt(actAttended);
    if (Totalcount == attendedCount) {
      console.log("Attended count is matched on insights view");
    } else {
      console.log("actual Attended>>" + Totalcount + "expected Attended>>" + attendedCount);
      throw new Error("ATTENDED COUNT IS NOT CORRECT ON INSIGHTS VIEW");
    }

  }

  sessionDurationIsDisplay() {
    this.sessionDuration.waitForDisplayed({ timeout: 50000 })
    this.sessionDuration.scrollIntoView();
    return this.sessionDuration.isDisplayed();
  }

  averageTimeAttendedIsDisplay() {
    this.averageTimeAttended.waitForDisplayed({ timeout: 30000 });
    return this.averageTimeAttended.isDisplayed();
  }

  averageTimeFocusIsDisplay() {
    this.averageTimeFocus.waitForDisplayed({ timeout: 30000 });
    return this.averageTimeFocus.isDisplayed();
  }

  registrationGraphIsDisplay() {
    this.registrationGraph.waitForDisplayed({ timeout: 30000 });
    return this.registrationGraph.isDisplayed();

  }

  attendanceGraphIsDisplay() {
    this.attendanceGraph.waitForDisplayed({ timeout: 30000 })
    return this.attendanceGraph.isDisplayed()
  }

  clickOnChatResourceButton() {
    if (this.chatResourceButton.isDisplayed() === true) {
      this.chatResourceButton.click();
    } else {
      throw new Error("CHAT RESOURCE BUTTON IS NOT DISPLAYED");
    }
  }

  clickOnAddedChatResource() {
    $(".chat-resources-list.scroll-container > .chat-resource-item").isDisplayed({ timeout: 1000 });
    $(".chat-resources-list.scroll-container > .chat-resource-item").click();

  }

  clickOnShareNowButton() {
    this.shareNowButton.waitForClickable({ timeout: 10000 });
    if (this.shareNowButton.isDisplayed() === true) {
      this.shareNowButton.click();
      browser.pause(800);
    } else {
      throw new Error("SHARE NOW BUTTON IS NOT DISPLAYED");
    }
  }

  clickOnHandoutsButton() {
    if (this.handoutsButton.isDisplayed() === true) {
      this.handoutsButton.click();
      browser.pause(1000);
    } else {
      throw new Error("HANDOUTS BUTTON IS NOT DISPLAYED");
    }
  }

  clickOnResourceDownloadButton() {
    browser.pause(1000);
    if (this.downloadButton.isDisplayed() === true) {
      this.downloadButton.click();
      browser.pause(1000);
    } else {
      throw new Error("DOWNLOAD BUTTON IS NOT DISPLAYED");
    }
  }

  resourceClickResultIsDisplay() {
    // browser.refresh();
    const result = $(".false.header");
    // result.scrollIntoView();
    result.waitForDisplayed({ timeout: 10000 });
    return $(".false.header").isDisplayed();
  }

  selectMemberFromChooseMemberList(member) {
    const addedMember = $("//span[contains(text(),'" + member + "')]");
    addedMember.waitForDisplayed({ timeout: 10000 });
    if (addedMember.isDisplayed() === true) {
      addedMember.click();
    } else {
      throw new Error("NO MEMBER IS DISPLAYING UNDER DROPDOWN LIST PLEASE ADD NEW MEMBER");
    }
  }

  addedAdminIsDisplayedInList() {
    if ($(".admin-list-container.flex-3 > div:nth-of-type(3)").isDisplayed() === true) {
      console.log("admin is added in event admin list");
    } else {
      throw new Error("FAILED TO ADD NEW ADMIN");
    }

  }
  clickOnExportCsvInPeopleTab() {
    const exportCSV = $("(//a[contains(text(),' EXPORT CSV')])[1]");
    exportCSV.waitForDisplayed({ timeout: 10000 });
    exportCSV.scrollIntoView();
    if (exportCSV.isDisplayed() === true) {
      exportCSV.click();
    } else {
      throw new Error("EXPORT CSV BUTTON IS NOT DISPALYED");
    }
  }
  clickOnExportCsvInInsights() {
    const exportCSV = $("(//button[@class='people-export'])[1]|(//a[@class='people-export'])[1]");
    exportCSV.waitForDisplayed({ timeout: 10000 });
    exportCSV.scrollIntoView();
    if (exportCSV.isDisplayed() === true) {
      exportCSV.click();
    } else {
      throw new Error("EXPORT CSV BUTTON IS NOT DISPALYED");
    }
  }
  selectedHowOftenOptionIsDisplay(option) {
    const optionType = $("div[title='" + option + "']");
    optionType.waitForDisplayed({ timeout: 10000 });
    return optionType.isDisplayed();
  }


  clickOnSelectDateField() {
    if (this.selectDateFieldIsDisplay() === true) {
      this.selectDateField.click();
    } else {
      throw new Error("Select date field is not displayed");
    }

  }

  validateDisablesPastDate() {
    const backwordArrow = $(".ant-calendar-header > div > a:nth-of-type(2)");
    backwordArrow.waitForDisplayed({ timeout: 10000 });
    backwordArrow.click();
    if ($("table[role='grid'] > tbody > tr:nth-of-type(2) > td:nth-of-type(2)").getAttribute("class") == "ant-calendar-cell ant-calendar-disabled-cell") {
      console.log("past date is disabled in calander");
    } else {
      throw new Error("user is able to select past date");
    }

  }

  validatePredefinedFieldOnRegPage(field) {
    var actField = $("(//input[@type='text'])[2]").getAttribute("placeholder");
    if (actField.includes(field)) {
      console.log("pre defined field added on registration page");
    } else {
      console.log("actual field>>" + actField + "expected field>>" + field);
      throw new Error("pre defined field is not displayed on registration page");
    }
  }

  validateCustomFieldOnRegPage(label) {
    const field = $("//textarea[@placeholder='" + label + "']");
    if (field.isDisplayed() === true) {
      console.log("Custom field added on registration page");
    } else {
      throw new Error("Failed to add new custom field on registration page");
    }
  }
  validateCustomFieldForRegistration(label) {
    const field = $("//input[@placeholder='" + label + "']");
    field.waitForDisplayed({ timeout: 10000 });
    if (field.isDisplayed() === true) {
      console.log("Custom field added on registration page");
    } else {
      throw new Error("Failed to add new custom field on registration page");
    }


  }

  validateWindowUrl(url) {
    browser.pause(3000);
    var actUrl = browser.getUrl()
    if (url.includes(actUrl)) {
      console.log("User successfully redirect on added url");
    } else {

      throw new Error("USER FAILD TO REDIRECT ON ADDED URL actual url>>" + actUrl + "expected url>>" + url);
    }
  }


  validateThankYouScreen(header) {
    $("//div[@class='margin-bottom margin-small']//h1").waitForDisplayed({ timeout: 300000 });
    var actHeaded = $("//div[@class='margin-bottom margin-small']//h1").getText();
    if (actHeaded.includes(header)) {
      console.log("User successfully redirect on thank you page");
    } else {
      console.log("actual header>>" + actHeaded + "expected header>>" + header);
      throw new Error("USER FAILD TO REDIRECT ON THANK YOU PAGE");
    }
  }

  timerIsDisplayed() {
    this.timerOnRegistrationPage.waitForDisplayed({ timeout: 1000 });
    return this.timerOnRegistrationPage.isDisplayed();
  }
  dayTimerIsDisplayed() {
    this.dayTimer.waitForDisplayed({ timeout: 1000 });
    return this.dayTimer.isDisplayed();
  }
  hoursTimerIsDisplayed() {
    this.hoursTimer.waitForDisplayed({ timeout: 1000 });
    return this.hoursTimer.isDisplayed();
  }
  minutesTimerIsDisplayed() {
    this.minutesTimer.waitForDisplayed({ timeout: 1000 });
    return this.minutesTimer.isDisplayed();
  }

  secondTimerIsDisplayed() {
    this.secondTimer.waitForDisplayed({ timeout: 1000 });
    return this.secondTimer.isDisplayed();
  }

  copyLinkForJoinLinkIsDisplayed() {
    this.copyLinkButtonForJoinLink.waitForDisplayed({ timeout: 1000 });
    return this.copyLinkButtonForJoinLink.isDisplayed();
  }
  clickOnCopyLinkForJoinLink() {
    if (this.copyLinkForJoinLinkIsDisplayed() === true) {
      this.copyLinkButtonForJoinLink.click();
    } else {
      throw new Error("COPY LINK IS NOT DISPLAYED");
    }

  }

  validateCopiedJoinLink(text) {
    var actText = this.copyLinkButtonForJoinLink.getText();
    if (actText.includes(text)) {
      console.log("link copied successfully");
    } else {
      throw new Error("Failed to copy join link");
    }

  }
  validateSessionNameOnManageRegPage(eventName) {
    var actEventName = $(".manage-webinar-name").getText();
    if (actEventName.includes(eventName)) {
      console.log("sesssion name is correctly displayed on mamage your registration page");
    } else {
      console.log("actual name>>" + actEventName + "expected name>>" + eventName);
      throw new Error("SESSION NAME IS MISSMATCHED ON MANAGE YOUR REGISTRATION PAGE");
    }
  }
  validateUserInfoOnManageRegPage(name, email) {
    var actName = $(".manager-user-name").getText();
    var actEmail = $(".manage-user-email").getText();
    if (actName.includes(name) && actEmail.includes(email)) {
      console.log("user name and email matched on manage registration page");
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      console.log("actual email>>" + actEmail + "expected email>>" + email);
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON MANAGE YOUR REGISTRATION PAGE");
    }
  }

  validateInValidEmailValidation(validation) {
    const validationMsg = $("//div[contains(text(),'" + validation + "')]");
    validationMsg.waitForDisplayed({ timeout: 1000 });
    if (validationMsg.isDisplayed() === true) {
      console.log("validation message is displayed for wrong email ");
    } else {
      throw new Error("INVALID EMAIL FIELD VALIDATION MESSAGE IS NOT DISPLAYED");
    }
  }

  countDownIsDisplayed() {
    const countdown = $(".demio-countdown");
    countdown.waitForDisplayed({ timeout: 10000 });
    return countdown.isDisplayed();
  }


  addToCalendarButtonIsDisplayed() {
    this.addToCalendarButton.waitForDisplayed({ timeout: 30000 });
    return this.addToCalendarButton.isDisplayed();
  }

  clickOnAddToCalendarButton() {
    if (this.addToCalendarButtonIsDisplayed() === true) {
      this.addToCalendarButton.click();
    } else {
      throw new Error("ADD TO CALENDAR BUTTON IS NOT DISPLAYED");
    }
  }

  appleCalendarOptionIsDisplayed() {
    return this.appleCalendarOption.isDisplayed();
  }

  googleOptionIsDisplayed() {
    return this.googleOption.isDisplayed();
  }

  outlookOptionIsDisplayed() {
    return this.outlookOption.isDisplayed();
  }

  outlookComOptionIsDisplayed() {
    return this.outlookComOption.isDisplayed();
  }

  yahooOptionIsDisplayed() {
    return this.yahooOption.isDisplayed();
  }
  appleCalendarOptionOnSuccessRegIsDisplayed() {
    return this.appleCalendarOptionOnSuccessReg.isDisplayed();
  }

  googleOptionOnSuccessRegIsDisplayed() {
    return this.googleOptionOnSuccessReg.isDisplayed();
  }

  outlookOptionOnSuccessRegIsDisplayed() {
    return this.outlookOptionOnSuccessReg.isDisplayed();
  }

  outlookComOptionOnSuccessRegIsDisplayed() {
    return this.outlookComOptionOnSuccessReg.isDisplayed();
  }

  yahooOptionOnSuccessRegIsDisplayed() {
    return this.yahooOptionOnSuccessReg.isDisplayed();
  }
  selectAddToCalendarOption(option) {
    const listOption = $("(//a[contains(text(),'" + option + "')])[1]");
    listOption.scrollIntoView();
    listOption.waitForDisplayed({ timeout: 1000 });
    listOption.click();
  }

  turnOnEmailNotificationButton() {
    var actChecked = this.emailNotificationButton.getAttribute("aria-checked");
    if (actChecked == "true") {
      console.log("Email notification button is already on");
    } else {
      console.log("actual status>>" + actChecked + "expected check>>" + "true");
      this.emailNotificationButton.click();
    }
  }

  turnOffEmailNotificationButton() {
    var actChecked = this.emailNotificationButton.getAttribute("aria-checked");
    if (actChecked == "false") {
      console.log("Email notification button is already off");
    } else {
      console.log("actual status>>" + actChecked + "expected check>>" + "false");
      this.emailNotificationButton.click();
    }
  }

  clickOnUpcomingSessionButton() {
    this.upcomingSessionDropdown.waitForDisplayed({ timeout: 1000 });
    if (this.upcomingSessionDropdown.isDisplayed() === true) {
      this.upcomingSessionDropdown.click();
    } else {
      throw new Error("UPCOMING SESSION DROPDOWN BUTTON IS NOT DISPLAYED");
    }

  }


  selectSessionOnRegistrationPage() {
    const session = $(".calendar-dates-list.scroll-container > div:nth-of-type(1)");
    session.waitForDisplayed({ timeout: 1000 });
    if (session.isDisplayed() === true) {
      session.click();
    } else {
      throw new Error("Session is not displayed under dropdown list");
    }
  }

  validateRegisteredSession() {
    browser.refresh();
    browser.pause(3000);
    const firstSession = $("tr:nth-of-type(1) > td:nth-of-type(3)  .registered.session-table-stat");
    const secondSession = $("tr:nth-of-type(2) > td:nth-of-type(3)  .registered.session-table-stat");
    var regUser = parseInt(firstSession);
    var notRegUser = parseInt(secondSession);
    if (regUser == notRegUser) {
      console.log("register count>>" + regUser + "Register count for non registered session>>" + notRegUser);
      throw new Error("Registration for recurring session is not working properly");
    } else {
      console.log("Registration for reccuring session is working ");
    }
  }

  locationOfRegUserIsDisplayed() {
    this.locationOfUser.waitForDisplayed({ timeout: 10000 });
    this.locationOfUser.scrollIntoView();
    return this.locationOfUser.isDisplayed();

  }


  clickOnDownloadRecordingOption() {
    if (this.downloadRecordingOptionIsDisplay() === true) {
      this.downloadRecordingOption.click();
    } else {
      throw new Error("Download recording option is not displayed ");
    }
  }

  editPageButtonIsDisplay() {
    this.editPageButton.waitForDisplayed({ timeout: 1000 });
    return this.editPageButton.isDisplayed();
  }

  clickOnEditPageButton() {
    if (this.editPageButtonIsDisplay() === true) {
      this.editPageButton.scrollIntoView();
      this.editPageButton.click();
    } else {
      throw new Error("EDIT PAGE BUTTON IS NOT DISPLAYED");
    }
  }
  clickOnUpcomingSession() {
    if (this.upcomingSessionIsDisplay() === true) {
      this.upcomingSessionsOption.click();
    } else {
      throw new Error("Upcoming sesion option is not displayed");
    }

  }

  addAdminEmailField(emailAddress) {
    if (this.emailFieldIsDispalyed() === true) {
      this.emailFieldForAdmin.setValue(emailAddress);
    } else {
      throw new Error("Email field is not displayed");
    }
  }

  clickOnIntegrationsTab() {
    if (this.integrationsTabIsDisplay() === true) {
      this.integrationsTab.scrollIntoView();
      this.integrationsTab.click();
    } else {
      throw new Error("integrations tab is not displayed");
    }
  }

  clickOnEditEmail() {
    const editEmailButton = $("div:nth-of-type(1) > .edit-reminder > a");
    editEmailButton.waitForDisplayed({ timeout: 10000 });
    editEmailButton.click();
  }

  validateUserInfoOnJoinLinkPage(name, email) {
    var actName = $(".waiting-screen-user-name").getText();
    var actEmail = $(".waiting-screen-user-email").getText();
    if (actName.includes(name) && actEmail.includes(email)) {
      console.log("user name and email matched on join link page");
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      console.log("actual email>>" + actEmail + "expected email>>" + email);
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON JOIN LINK PAGE");
    }
  }
  buttonTextIputFieldIsDisplayed() {
    this.buttonTextIputField.waitForDisplayed({ timeout: 10000 });
    return this.buttonTextIputField.isDisplayed();
  }

  //----------//
  registerCountIsDisplayed() {
    this.registerCount.waitForDisplayed({ timeout: 10000 });
    return this.registerCount.isDisplayed();
  }

  clickOnRegisterCount() {
    if (this.registerCountIsDisplayed() === true) {
      this.registerCount.click();
    } else {
      throw new Error("Register count is not displayed");
    }
  }


  upcomingLinkIsDisplayed() {
    this.upcomingLink.waitForDisplayed({ timeout: 30000 });
    return this.upcomingLink.isDisplayed();
  }

  clickOnUpcomingLink() {
    if (this.upcomingLinkIsDisplayed() === true) {
      this.upcomingLink.click();
    } else {
      throw new Error("Upcoming link is not displayed");
    }

  }

  deleteRegistrationIconIsDisplayed() {
    this.deleteRegistrationIcon.waitForDisplayed({ timeout: 10000 });
    return this.deleteRegistrationIcon.isDisplayed();
  }

  clickOnDeleteRegistrationIcon() {
    if (this.deleteRegistrationIconIsDisplayed() === true) {
      this.deleteRegistrationIcon.click();
    } else {
      throw new Error("Delete registration icon is not displayed");
    }
  }

  yesDeleteButtonIsDisplayed() {
    this.yesButtonUnderPopup.waitForDisplayed({ timeout: 10000 });
    return this.yesButtonUnderPopup.isDisplayed();
  }

  clickOnYesDeleteButton() {
    if (this.yesDeleteButtonIsDisplayed() === true) {
      this.yesButtonUnderPopup.click();
    } else {
      throw new Error("Yes delete button is not displayed");
    }
  }

  yesCancelButtonIsDisplayed() {
    this.yesButtonUnderPopup.waitForDisplayed({ timeout: 10000 });
    return this.yesButtonUnderPopup.isDisplayed();
  }

  clickOnYesCancelButton() {
    if (this.yesCancelButtonIsDisplayed() === true) {
      this.yesButtonUnderPopup.click();
    } else {
      throw new Error("Yes cancel button is not displayed");
    }
  }
  getRegisterCount() {
    var count = this.registerCount.getText();
    return count;
  }


  cnacelRegistrationButtonIsDisplayed() {
    this.cancelRegistrationButton.waitForDisplayed({ timeout: 10000 });
    return this.cancelRegistrationButton.isDisplayed();
  }

  clickOnCancelRegistrationButton() {
    if (this.cnacelRegistrationButtonIsDisplayed() === true) {
      this.cancelRegistrationButton.click();
    } else {
      throw new Error("cancel registration button is not displayed");
    }
  }

  copyRegistrationLinkIconIsDisplayed() {
    this.copyRegistrationLinkIcon.waitForDisplayed({ timeout: 10000 });
    return this.copyRegistrationLinkIcon.isDisplayed();

  }

  clickOnCopyRegistrationLinkIcon() {
    if (this.copyRegistrationLinkIconIsDisplayed() === true) {
      this.copyRegistrationLinkIcon.click();
    } else {
      throw new Error("Copy registration link icon is not displayed");
    }
  }

  resendConfirmationButtonIsDisplayed() {
    this.resendConfirmationButton.waitForDisplayed({ timeout: 10000 });
    return this.resendConfirmationButton.isDisplayed();
  }
  clickOnResendConfirmationButton() {
    if (this.resendConfirmationButtonIsDisplayed() === true) {
      this.resendConfirmationButton.click();
    } else {
      throw new Error("Resend confirmation button is not displayed");
    }
  }

  validateAddedResource(title) {

    const elem = $("(//div[contains(text(),'" + title + "')])[1]");

    if (elem.isDisplayed() === true) {
      console.log("Resource title is matched");
    } else {

      throw new Error("Added resource title missmatched");
    }
  }

  clickSaveOpenGraphButton() {
    this.saveOpenGraphBtn.scrollIntoView();
    if (this.saveOpenGraphBtn.isDisplayed() === true) {
      this.saveOpenGraphBtn.click();
    } else {
      throw new Error("SAVE OPEN GRAPH BUTTON IS NOT DISPLAYING");
    }
  }

  clickAddPresenterButton() {
    const addPresenterButton = $("(//div[@class='save-button-container'])//button|//form//button[@class='ant-btn Button animated fadeIn ant-btn-primary']");
    addPresenterButton.scrollIntoView();
    addPresenterButton.waitForDisplayed({ timeout: 30000 });
    if (addPresenterButton.isDisplayed() === true) {

      addPresenterButton.click();
    } else {
      throw new Error("Add presenter button is not displayed");
    }
  }

  clickSaveDescriptionButton() {
    const saveDescriptionButton = $("(//div[@class='save-button-container'])//button");
    saveDescriptionButton.scrollIntoView();
    saveDescriptionButton.waitForClickable({ timeout: 30000 });
    if (saveDescriptionButton.isDisplayed() === true) {

      saveDescriptionButton.click();
    } else {
      throw new Error("Save description button is not displayed");
    }
  }

  validateAddedMaterial(name) {
    const elem = $("(//div[contains(text(),'" + name + "')])[1]");

    if (elem.isDisplayed() === true) {
      console.log("Added material title is matched");
    } else {

      throw new Error("Added material title missmatched");
    }
  }

  clickOnDeleteAdminOption() {
    this.deleteAdminButton.waitForClickable({ timeout: 10000 });
    if (this.deleteAdminButton.isDisplayed() === true) {
      this.deleteAdminButton.click();
    } else {
      throw new Error("Delete admin option is not displayed")
    }
  }

  clickOnYesDeleteHostButton() {
    this.yesDeleteHostButton.waitForClickable({ timeout: 10000 });
    if (this.yesDeleteHostButton.isDisplayed() === true) {
      this.yesDeleteHostButton.click();
      browser.pause(3000);
    } else {
      throw new Error("Yes Delete admin option is not displayed")
    }


  }
  addDropdownOption(option) {
    this.addOptionField.waitForDisplayed({ timeout: 30000 })
    this.addOptionField.setValue(option);
    browser.keys(['Meta', 'Enter']);
    browser.pause(500);
  }

  clickOnCustomizeRegistrationOption() {
    this.customizeRegistrationOption.click();
  }

  selectAutomatedEventTime() {
    this.selectTimeField.click();
    browser.pause(500)
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(1000)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(1000)
    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    // ISTTime now represents the time in IST coordinates

    var hours = ISTTime.getHours()
    var minutes = ISTTime.getMinutes() + 2;
    var strTime = hours + ':' + minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime1 = hours + ':' + minutes + ' ' + ampm;


    if (strTime1.includes("60")) {
      var hours1 = ISTTime.getHours() + 1;
      hours1 = hours1 % 12;
      hours1 = hours1 ? hours1 : 12;
      hours1 = hours1 < 10 ? '0' + hours1 : hours1;
      var strTime2 = hours1 + ':' + minutes + ' ' + ampm;
      browser.pause(1000);
      var strTime = strTime2.replace("60", "00");
      this.timeInputField.setValue(strTime);
      browser.keys(['Meta', 'Enter']);
      browser.pause(800);
      console.log("Time1>>" + strTime);
    } else {
      if (strTime1.includes("61")) {
        var hours1 = ISTTime.getHours() + 1;
        hours1 = hours1 % 12;
        hours1 = hours1 ? hours1 : 12;
        hours1 = hours1 < 10 ? '0' + hours1 : hours1;
        var strTime2 = hours1 + ':' + minutes + ' ' + ampm;
        browser.pause(1000);
        var strTime = strTime2.replace("61", "01");
        this.timeInputField.setValue(strTime);
        browser.keys(['Meta', 'Enter']);
        browser.pause(800);
        console.log("Time1>>" + strTime);
      } else {
        if (strTime1.includes("62")) {
          var hours1 = ISTTime.getHours() + 1;
          hours1 = hours1 % 12;
          hours1 = hours1 ? hours1 : 12;
          hours1 = hours1 < 10 ? '0' + hours1 : hours1;
          var strTime2 = hours1 + ':' + minutes + ' ' + ampm;
          browser.pause(1000);
          var strTime = strTime2.replace("62", "02");
          this.timeInputField.setValue(strTime);
          browser.keys(['Meta', 'Enter']);
          browser.pause(800);
          console.log("Time1>>" + strTime);
        } else {
          this.timeInputField.setValue(strTime1);
          browser.keys(['Meta', 'Enter']);
          console.log("Time1>>" + strTime1);
          browser.pause(800);
          console.log("Time not includes given value");
        }
      }

    }
    const clockIcon = $('.ant-time-picker-clock-icon.anticon.anticon-clock-circle > svg');
    clockIcon.click();
    browser.pause(500);

  }

  validateSessionCountUnderRegPageDropdown(count) {
    browser.pause(2000);
    var elem = $$("//div[@class='item scheduled']").length;
    if (parseInt(elem) === parseInt(count)) {
      console.log("Session count matched in dropdown list>>" + elem);

    } else {
      throw new Error("Session count missmatched under dropdown list actual count>>" + elem + "Expected count>>" + count);
    }
  }

  addVisibileUpcommingSession(limit) {
    this.visibleUpcommingSessionField.click();
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    this.visibleUpcommingSessionField.setValue(limit);
  }

  addSessionRegLimit(limit) {
    this.sessionRegLimitField.click();
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    this.sessionRegLimitField.setValue(limit);
  }
  validateBlockScreen(header) {
    $("//div[@class='white-block-message']").waitForDisplayed({ timeout: 40000 });
    var actHeaded = $("//div[@class='white-block-message']").getText();
    if (actHeaded.includes(header)) {
      console.log("User successfully redirect on block screen");
    } else {
      console.log("actual header>>" + actHeaded + "expected header>>" + header);
      throw new Error("USER FAILD TO REDIRECT ON BLOCK SCREEN");
    }
  }

  validateFirstFieldValidation(validation) {
    const firstValidation = $("(//div[@class='Demio-Input-error'])[1]");
    if (firstValidation.getText().includes(validation)) {
      console.log("validation message is displaying for first field");
    } else {
      throw new Error("Validation message missmatched on registrtation page actual validation>>" + firstValidation.getText() + "Expected validation>>" + validation);
    }
  }
  validateSecondFieldValidation(validation) {
    const secondValidation = $("(//div[@class='Demio-Input-error'])[2]");
    if (secondValidation.getText().includes(validation)) {
      console.log("validation message is displaying for first field");
    } else {
      throw new Error("Validation message missmatched on registrtation page actual validation>>" + secondValidation.getText() + "Expected validation>>" + validation);
    }
  }

  fillTextField(text) {
    this.textField.scrollIntoView();
    this.textField.setValue(text);
  }

  fillTextAreaField(textArea) {
    this.textAreaField.scrollIntoView();
    this.textAreaField.setValue(textArea);
  }

  clickOnThirdCustomizeFieldDropdown() {
    this.thirdCustomizeFieldDropdown.waitForDisplayed({ timeout: 10000 });
    this.thirdCustomizeFieldDropdown.click();
  }

  clickOnFourthCustomizeFieldDropdown() {
    this.fourthCustomizeFieldDropdown.scrollIntoView(0, 100);
    this.fourthCustomizeFieldDropdown.waitForDisplayed({ timeout: 10000 });
    this.fourthCustomizeFieldDropdown.click();
  }

  clickOnSeslectedMakeRequiredFieldCheckbox() {
    this.makeRequiredFieldCheckbox.waitForDisplayed({ timeout: 10000 });
    this.makeRequiredFieldCheckbox.click();
    browser.pause(1000);
  }
  clickOnSaveFormFieldButton() {
    this.saveFormFieldButton.waitForDisplayed({ timeout: 10000 });
    this.saveFormFieldButton.click();
  }
  editFieldOptionIsDisplayed() {
    this.editFieldOption.scrollIntoView();
    return this.editFieldOption.isDisplayed();
  }

  clickOnEditFieldOption() {
    if (this.editFieldOptionIsDisplayed() === true) {
      this.editFieldOption.click();
    } else {
      throw new Error("Edit field option is not displayed");
    }
  }

  clickCustomThankyouToggleIsDisplay() {
    this.thankYouPageToggleBtn.click();
  }

  clickOnBlackoutDatesLink() {
    this.blackOutDatesLink.scrollIntoView(0, 200);
    browser.pause(2000);
    this.blackOutDatesLink.waitForDisplayed({ timeout: 10000 });
    this.blackOutDatesLink.click();
  }

  clickOnBlackouteverySundayCheckbox() {
    this.blackouteverySundayCheckbox.waitForDisplayed({ timeout: 50000 });
    this.blackouteverySundayCheckbox.click();
  }
  clickOnConfirmBlackoutDateButton() {
    this.confirmBlackoutDateButton.click();
  }

  clickOnFirstSunday() {
    this.firstSundayInCalender.waitForDisplayed({ timeout: 10000 });
    this.firstSundayInCalender.click();
  }

  clickOnClearAllBlackoutDatesLink() {
    this.clearAllBlackoutDatesLink.waitForDisplayed({ timeout: 10000 });
    this.clearAllBlackoutDatesLink.click();
  }

  uploadBackgroundImage(photo) {
    const element = $(".presenter-container [type='file']");
    var js = "arguments[0].style = 'visible'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + photo);
    const remoteFilePath = browser.uploadFile(filePath);
    $(".presenter-container [type='file']").scrollIntoView();
    $(".presenter-container [type='file']").setValue(remoteFilePath);
    $(".demio-upload-preview").waitForDisplayed({ timeout: 40000 });
  }

  selectOpcityOption(opcity) {
    const opcityOption = $("//label//span[contains(text(),'" + opcity + "')]");
    opcityOption.click();
  }

  verifyLocationUnderPeopleTab(location) {
    var actLocation = $("(//td[@class='ant-table-row-cell-break-word'])[8]//div").getText();
    if (actLocation.includes(location) | actLocation.includes("India")) {
      console.log("Location is matched under people tab");

    } else {
      throw new Error("Location is missmatched under people tab actual location>>" + actLocation + "Expected location is India or>>" + location);
    }

  }

  verifyUtmSourceUnderPeopleTab(source) {
    var actSource = $("(//td[@class='ant-table-row-cell-break-word'])[10]//div").getText();
    if (actSource.includes(source)) {
      console.log("Utm source is matched under people tab");

    } else {
      throw new Error("Utm source is missmatched under people tab actual source>>" + actSource + "Expected source>>" + source);
    }

  }
  verifyUtmMediumUnderPeopleTab(medium) {
    var actMedium = $("(//td[@class='ant-table-row-cell-break-word'])[11]//div").getText();
    if (actMedium.includes(medium)) {
      console.log("Utm medium is matched under people tab");

    } else {
      throw new Error("Utm medium is missmatched under people tab actual medium>>" + actMedium + "Expected medium>>" + medium);
    }

  }
  verifyUtmTermUnderPeopleTab(term) {
    var actTerm = $("(//td[@class='ant-table-row-cell-break-word'])[13]//div").getText();
    if (actTerm.includes(term)) {
      console.log("Utm term is matched under people tab");

    } else {
      throw new Error("Utm term is missmatched under people tab actual term>>" + actTerm + "Expected term>>" + term);
    }

  }

  verifyUtmContentUnderPeopleTab(content) {
    var actContent = $("(//td[@class='ant-table-row-cell-break-word'])[14]//div").getText();
    if (actContent.includes(content)) {
      console.log("Utm content is matched under people tab");

    } else {
      throw new Error("Utm content is missmatched under people tab actual content>>" + actContent + "Expected content>>" + content);
    }

  }


  validateUserInfoOnActivityPage(name, email) {
    var actName = $("//div[@class='people-profile-name']").getText();
    var actEmail = $("//div[@class='people-profile-email']").getText();
    if (actName.includes(name) && actEmail.includes(email)) {
      console.log("user name and email matched on manage registration page");
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      console.log("actual email>>" + actEmail + "expected email>>" + email);
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON ACTIVITY PAGE actual name>>" + actName + "expected name>>" + name + "actual email>>" + actEmail + "expected email>>" + email);
    }
  }

  clickOnExportCsvFirstResourceButton() {
    if (this.exportCsvButtonForFirstResource.isDisplayed() === true) {
      this.exportCsvButtonForFirstResource.click();

    } else {
      throw new Error("Export ECV button is not displaying for first resource");
    }
  }

  clickOnEsvButtonForSecondResource() {
    if (this.exportCsvButtonForSecondResource.isDisplayed() === true) {
      this.exportCsvButtonForSecondResource.click();

    } else {
      throw new Error("Export ECV button is not displaying for second resource");
    }
  }
  clickOnEsvButtonForThirdResource() {
    if (this.exportCsvButtonForThirdResource.isDisplayed() === true) {
      this.exportCsvButtonForThirdResource.click();

    } else {
      throw new Error("Export ECV button is not displaying for third resource");
    }
  }

  validateSelectedInlineEmbedStyle(option) {
    const styleOption = $("(//div[contains(text(),'" + option + "')])[1]");
    styleOption.waitForDisplayed({ timeout: 30000 });
    if (styleOption.isDisplayed() === true) {
      console.log("selected style is displaying");

    } else {
      throw new Error("Selected inline embed style is not displaying");
    }
  }
  validateSelectedTemplateOption(option) {
    const actTemp = $("//div[@class='editor-template ant-select ant-select-enabled']//div//div//div").getText();
    if (actTemp.includes(option)) {
      console.log("Selected template is displaying on screen");

    } else {
      throw new Error("Template missmateched on screen >>" + actTemp + "Expected template>>" + option);
    }
  }

  validateSelectedTimezoneOption(timezone) {
    const actTitme = $("(//div[@class='customize-general-box']//div[@class='ant-select-selection-selected-value'])[1]").getText();
    if (actTitme.includes(timezone)) {
      console.log("Selected time zone is matched under general tab");

    } else {
      throw new Error("Timezone option is missmateched under general tab ..actual option >>" + actTitme + "Expected option>>" + timezone);
    }
  }

  validateSelectedLanguageOption(language) {
    const actLanguage = $("(//div[@class='customize-general-box']//div[@class='ant-select-selection-selected-value'])[2]").getText();
    if (actLanguage.includes(language)) {
      console.log("Selected language is matched under general tab");

    } else {
      throw new Error("Language option is missmateched under general tab ..actual option >>" + actLanguage + "Expected option>>" + language);
    }
  }

  validateCustomUrlFieldData(url) {
    const actUrl = this.addCustomUrlField.getAttribute("value");
    if (actUrl.includes(url)) {
      console.log("Custom field data matched");
    } else {
      throw new Error("CUSTOM FIELD DATA MISSMATCHED ..ACTUAL URL>>" + actUrl + "EXPECTED URL>>" + url);
    }
  }

  validateSelectedPopoverEmbedStyle(style) {
    const styleOption = $("(//div[contains(text(),'" + style + "')])[1]");
    styleOption.waitForDisplayed({ timeout: 30000 });
    if (styleOption.isDisplayed() === true) {
      console.log("selected style is displaying");

    } else {
      throw new Error("Selected popover embed style is not displaying");
    }

  }

  validateReplyFollowUpOption(option) {
    if ($("[title='" + option + "']").isDisplayed() === true) {
      console.log("user is able to select dropdown option");
    } else {
      throw new Error("user is not able to select replay followup dropdown option");
    }
  }

  clickOnUnarchiveEventButton() {
    if (this.unarchiveEventButton.isDisplayed() === true) {
      this.unarchiveEventButton.click();

    } else {
      throw new Error("Unarchive event button is not displaying on screen")
    }
  }

  clickOnMessageTab() {
    browser.refresh();
    this.messageTab.waitForDisplayed({ timeout: 10000 });
    if (this.messageTab.isDisplayed() === true) {
      this.messageTab.click();
      $("//div[@class='messages-header']").waitForDisplayed({ timeout: 10000 });
    } else {
      throw new Error("Message tab is not displaying");
    }
  }

  validateUserInfoOnMessageScreen(name, email) {
    browser.pause(1000);
    var actName = $("(//div[contains(text(),'" + name + "')])[1]");
    var actEmail = $("(//div[contains(text(),'" + email + "')])[1]");
    if (actName.isDisplayed() === true && actEmail.isDisplayed() === true) {
      console.log("user name and email matched on manage registration page");
    } else {
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON ACTIVITY PAGE");
    }
  }

  validateMessageUnderMessageTabForStaging(message) {
    var actMessage = $("(//div[@class='message-text'])[1]").getText();
    if (actMessage.includes(message)) {
      console.log("Message matched on message tab");

    } else {
      throw new Error("Message missmateched on message screen actual message>>" + actMessage + "Expected message>>" + message)
    }
  }

  validateMessageUnderMessageTab(message) {
    var actMessage = $("(//div[@class='message-text'])[2]").getText();
    if (actMessage.includes(message)) {
      console.log("Message matched on message tab");

    } else {
      throw new Error("Message missmateched on message screen actual message>>" + actMessage + "Expected message>>" + message)
    }
  }
  deleteAllResources(count) {
    // var count=$$("//i[@class='anticon anticon-delete icon-delete']").length();
    var b = parseInt(count);
    var i;
    for (i = 1; i <= b; i++) {
      const deleteIcon = $("(//i[@class='anticon anticon-delete icon-delete'])[1]");
      deleteIcon.click();

      const yesDeleteResourceButton = $("//button[@class='ant-btn ant-btn-primary ant-btn-sm']");
      this.doneButton.scrollIntoView();
      yesDeleteResourceButton.waitForDisplayed({ timeout: 10000 });
      yesDeleteResourceButton.click();

    }
  }

  clickEditSettingsPollResourceLink() {
    if (this.editSettingsPollResourceLink.isDisplayed() === true) {
      this.editSettingsPollResourceLink.click();

    } else {
      throw new Error("Edit settings link is not displaying for poll resources");
    }
  }

  clickEditSettingsHandoutResourceLink() {
    if (this.editSettingsHandoutResourceLink.isDisplayed() === true) {
      this.editSettingsHandoutResourceLink.click();

    } else {
      throw new Error("Edit settings link is not displaying for handout resources");
    }
  }

  clickEditSettingsFeatureResourceLink() {
    this.editSettingsFeatureResourceLink.waitForDisplayed({ timeout: 10000 });
    if (this.editSettingsFeatureResourceLink.isDisplayed() === true) {
      this.editSettingsFeatureResourceLink.click();

    } else {
      throw new Error("Edit settings link is not displaying for feature action resources");
    }
  }

  clickOnEditFirstMaterialLink() {
    this.roomTab.scrollIntoView();
    if (this.editFirstMaterialLink.isDisplayed() === true) {
      this.editFirstMaterialLink.click();
    } else {
      throw new Error("edit settings link is not displaying for first material")
    }

  }

  clickOnEditSecondMaterialLink() {
    if (this.editSecondMaterialLink.isDisplayed() === true) {
      this.editSecondMaterialLink.click();
    } else {
      throw new Error("edit settings link is not displaying for second material")
    }

  }
  fillEditAdminNameField(updatedValue) {
    if (this.editAdminNameField.isDisplayed() === true) {
      this.editAdminNameField.click();
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      this.editAdminNameField.setValue(updatedValue);
    } else {
      throw new Error("Name field is not displaying on edit admin screen");
    }
  }
  validateEventNameOnPopup(event) {
    var actEvent = $("//div[@class='header-controls-modal-title']").getText();
    if (actEvent.includes(event)) {
      console.log("Event is displaying on start/end session popup");
    } else {
      throw new Error("EVENT NAME MISSMATCHED ON START/END SESSION POPUP ACTUAL EVENT NAME>>" + actEvent + "expected event name >>" + event);
    }
  }

  updateAttendeesOnManageAccountScreen(size) {
    this.attendeesField.click();
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    this.attendeesField.setValue(size);
  }

  updateStageLimitOnManageAccountScreen(size) {
    this.stageLimitDropdown.click();
    browser.pause(1000);
    const option = $("//option[@value='" + size + "']");
    option.click();
    browser.pause(1000);
  }

  clickOnSelectHostButton() {
    if (this.selectHostButton.isDisplayed() === true) {
      this.selectHostButton.click();

    } else {
      throw new Error("SELECT HOST BUTTON IS NOT DISPLAYING ON SCREEN")
    }
  }

  selectHost(host) {
    browser.pause(2000);
    const hostOption = $("//span[contains(text(),'" + host + "')]");
    if (hostOption.isDisplayed() === true) {
      hostOption.click();
      browser.pause(1000);
    } else {
      throw new Error("host option is not displaying option is >>" + host);
    }

  }

  validateAddedHost(host) {
    $("//span[@class='avatar-tooltip-wrapper']").moveTo();

    var actHost = $("//span[@class='avatar-tooltip-name']").getText();
    if (actHost.includes(host)) {
      console.log("Host added successfully");

    } else {
      throw new Error("Failed to add host actual host>>" + actHost + "Expected host>>" + host);
    }
  }

  updateEventTime(time) {
    this.editEventTimeField.click();
    browser.pause(1000);
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100);
    $("//input[@class='ant-time-picker-panel-input']").setValue(time);
    browser.pause(1000);
  }

  validateTimeOfSession(time) {
    var actTime = $("(//td[@class='ant-table-row-cell-break-word'])[1]//span//span").getText().replace("PM", "");
    var expTime = time.replace("pm", "");
    if (actTime.includes(expTime)) {
      console.log("User is able to edit session details");
    } else {
      throw new Error("failed to update session details actual details>>" + actTime + "Expected details>>" + expTime);
    }
  }

  clickOnNotifyRegistrantsCheckbox() {
    if (this.notifyRegistrantsCheckbox.isDisplayed() === true) {
      this.notifyRegistrantsCheckbox.click();

    } else {
      throw new Error("Notify registrants checkbox is not displaying")
    }
  }

  selectNextDay() {
    this.selectDateField.click();
    $("//a[@class='ant-calendar-next-month-btn']").click();
    const nextDate = $("//div[contains(text(),'17')]");
    nextDate.click();
    browser.pause(1000);

  }

  clickOnAllSessionsButton() {
    if (this.allSessionsButton.isDisplayed() === true) {
      this.allSessionsButton.click();

    } else {
      throw new Error("All session button is not displaying for added host")
    }

  }

  hostSelectSecondSesseionCheckbox() {
    const allSessionCheckbox = $("label.ant-checkbox-group-item.ant-checkbox-wrapper.ant-checkbox-wrapper-checked > span:nth-child(2)");
    allSessionCheckbox.waitForDisplayed({ timeout: 50000 });
    allSessionCheckbox.click();
    browser.pause(1000);
    const secondSessionCheckbox = $("label.ant-checkbox-group-item.ant-checkbox-wrapper:nth-child(3) > span:nth-child(2)");
    secondSessionCheckbox.waitForDisplayed({ timeout: 10000 });
    secondSessionCheckbox.click();
    browser.pause(1000);
  }

  downloadImageOrMediaOptionIsDisplayed() {
    if (this.downloadImageOrMediaOption.isDisplayed() === true) {
      console.log("Download image or media option is displaying");
    } else {
      throw new Error("Download image or media option is not displaying on screen")
    }
  }
  deleteImageOrMediaOptionIsDisplayed() {
    if (this.deleteImageOrMediaOption.isDisplayed() === true) {
      console.log("Delete image or media option is displaying on screen");

    } else {
      throw new Error("Delete image or media option is not displaying on screen");
    }
  }

  clickOnDownloadImageOrMediaOption() {
    if (this.downloadImageOrMediaOption.isDisplayed() === true) {
      this.downloadImageOrMediaOption.click();

    } else {
      throw new Error("Failed to click on download option");
    }
  }

  clickOnDeleteImageOrMediaOption() {
    if (this.deleteImageOrMediaOption.isDisplayed() === true) {
      this.deleteImageOrMediaOption.click();

    } else {
      throw new Error("Delete image or media option is not displaying on screen")
    }
  }
  validateNoMaterialsScreen() {
    if (this.noMaterialsScreen.isDisplayed() === true) {
      console.log("no materials screen is displaying on screen");
    } else {
      throw new Error("No material screen is not displaying failed to delete resources")
    }
  }
  validateNoMaterialsScreenForMaterials() {
    if (this.noMaterialsScreenForMaterials.isDisplayed() === true) {
      console.log("no materials screen is displaying on screen");
    } else {
      throw new Error("No material screen is not displaying failed to delete materials")
    }
  }
  clickOnEditSubheadlineOption() {
    if (this.editSubheadlineOption.isDisplayed() === true) {
      this.editSubheadlineOption.click();
    } else {
      throw new Error("Edit option is not displaying for subheadline");
    }
  }
  clickOnEditDescriptionOption() {
    if (this.editDescriptionOption.isDisplayed() === true) {
      this.editDescriptionOption.click();
    } else {
      throw new Error("Edit option is not displaying for description");
    }
  }
  clickOnEditVideoOption() {
    if (this.editVideoOption.isDisplayed() === true) {
      this.editVideoOption.click();
    } else {
      throw new Error("Edit option is not displaying for video");
    }
  }

  clickOnDeleteFeaturePresentersButton() {
    if (this.deleteFeaturePresentersButton.isDisplayed() === true) {
      this.deleteFeaturePresentersButton.click();
    } else {
      throw new Error("Delete features button is not displaying")
    }

  }

  clickOnEditFeaturedPresenterButton() {
    this.editFeaturedPresentersOption.click();
  }

  downloadImageMediaOptionInEditIsDisplayed() {
    const downloadImageOrMediaOption = $("//li[contains(text(),'Download')]")
    if (downloadImageOrMediaOption.isDisplayed() === true) {
      console.log("Download image or media option is displaying");
    } else {
      throw new Error("Download image or media option is not displaying on screen")
    }
  }
  deleteImageOrMediaOptionInEditIsDisplayed() {
    const deleteImageOrMediaOption = $("//li[contains(text(),'Delete')]")
    if (deleteImageOrMediaOption.isDisplayed() === true) {
      console.log("Delete image or media option is displaying on screen");

    } else {
      throw new Error("Delete image or media option is not displaying on screen");
    }
  }

  clickOnSessionDropdownOnActivity() {
    this.sessionDropdownOnActivity.waitForDisplayed({ timeout: 10000 });
    this.sessionDropdownOnActivity.click();
  }

  clickOnPastSessionsOnActivity() {
    browser.pause(1000);
    try {
      this.pastSessionsOnActivity.click();
    } catch (error) {

    }

  }

  selectStandardEventTime() {
    this.selectTimeField.click();
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    // ISTTime now represents the time in IST coordinates

    var hours = ISTTime.getHours()
    var minutes = ISTTime.getMinutes() + 3;
    var strTime = hours + ':' + minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log("Time>>" + strTime);
    this.timeInputField.setValue(strTime);
    browser.keys(['Meta', 'Enter']);
    const clockIcon = $('.ant-time-picker-clock-icon.anticon.anticon-clock-circle > svg');
    clockIcon.click();
    browser.pause(200);

  }

  clickOnGdprCheckboxOnRegScreen() {
    try {
      this.gdprCheckboxOnRegPage.click();
      browser.pause(1000);
    } catch (error) {

    }

  }

  clickOnAllTab() {
    if (this.allTab.isDisplayed() === true) {
      this.allTab.click();

    } else {
      throw new Error("all tab is not displaying on screen")
    }
  }

  selectStartSessionTime(futureTime) {
    this.selectTimeField.click();
    browser.pause(100)
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    // this.timeInputField.setValue(futureTime);
    const hrs = $("(//li[contains(text(),'11')])[1]");
    hrs.scrollIntoView();
    browser.pause(200);
    hrs.click();
    browser.pause(200);
    const min = $("(//li[contains(text(),'00')])[1]");
    min.scrollIntoView();
    browser.pause(200);
    min.click();
    const zone = $("(//li[contains(text(),'pm')])[1]");
    zone.click();
    // browser.keys(['Meta', 'Enter']);
    // browser.keys(['Meta', 'Backspace']);
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[2]');
    clockIcon.scrollIntoView(0, 100);
    clockIcon.click();
    browser.pause(200);

  }
  selectStandardEventStartTime() {
    this.selectTimeField.click();
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    // ISTTime now represents the time in IST coordinates

    var hours = ISTTime.getHours()
    var minutes = ISTTime.getMinutes() + 3;
    var strTime = hours + ':' + minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log("Time>>" + strTime);

    // this.timeInputField.setValue(strTime);
    // browser.keys(['Meta', 'Backspace']);
    // browser.keys(['Meta', 'Enter']);
    const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours + "')])[1]");
    hrs.scrollIntoView();
    hrs.click();
    browser.pause(500);
    $("(//li[contains(text(),'00')])[1]").click();
    $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
    $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]").scrollIntoView();
    browser.pause(500);
    // min.click();
    const min = $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]");
    min.click();
    browser.pause(500)
    const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
    zone.click();
    browser.pause(500)
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[2]');
    clockIcon.click();
    browser.pause(200);

  }

  selectAutomatedEventStartTime() {
    this.selectTimeField.click();
    browser.pause(200)
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(1000)
    // browser.keys(['Control', 'a']);
    // browser.keys(['Delete']);
    // browser.pause(1000)
    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    // ISTTime now represents the time in IST coordinates

    var hours = ISTTime.getHours()

    var minutes = ISTTime.getMinutes() + 2;
    var strTime = hours + ':' + minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime1 = hours + ':' + minutes + ' ' + ampm;




    if (strTime1.includes("60")) {
      var hours1 = ISTTime.getHours() + 1;
      hours1 = hours1 % 12;
      hours1 = hours1 ? hours1 : 12;
      hours1 = hours1 < 10 ? '0' + hours1 : hours1;
      const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours1 + "')])[1]");
      hrs.scrollIntoView();
      browser.pause(500);
      hrs.click();
      browser.pause(200);
      $("(//li[contains(text(),'00')])[1]").click();
      $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
      $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]").scrollIntoView();
      browser.pause(500);
      // min.click();
      const min = $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]");
      min.click();
      browser.pause(1000)
      const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
      zone.click();
      browser.pause(500)

    } else {
      if (strTime1.includes("61")) {
        var hours1 = ISTTime.getHours() + 1;
        hours1 = hours1 % 12;
        hours1 = hours1 ? hours1 : 12;
        hours1 = hours1 < 10 ? '0' + hours1 : hours1;
        const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours1 + "')])[1]");
        hrs.scrollIntoView();
        browser.pause(500);
        hrs.click();
        browser.pause(500);
        $("(//li[contains(text(),'00')])[1]").click();
        $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
        $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]").scrollIntoView();
        browser.pause(500);
        // min.click();
        const min = $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]");
        min.click();
        browser.pause(1000)
        const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
        zone.click();
        browser.pause(500)

      } else {
        if (strTime1.includes("62")) {
          var hours1 = ISTTime.getHours() + 1;
          hours1 = hours1 % 12;
          hours1 = hours1 ? hours1 : 12;
          hours1 = hours1 < 10 ? '0' + hours1 : hours1;
          const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours1 + "')])[1]");
          hrs.scrollIntoView();
          browser.pause(500);
          hrs.click();
          browser.pause(500);
          $("(//li[contains(text(),'00')])[1]").click();
          $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
          $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'04')]").scrollIntoView();
          browser.pause(500);
          // min.click();
          const min = $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'04')]");
          min.click();
          browser.pause(1000)
          const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
          zone.click();
          browser.pause(500)

        } else {
          const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours + "')])[1]");
          hrs.scrollIntoView();
          hrs.click();
          browser.pause(500)
          $("(//li[contains(text(),'00')])[1]").click();
          $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
          $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]").scrollIntoView();
          browser.pause(500)
          const min = $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]");
          min.click();
          browser.pause(1000)
          const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
          zone.click();
          browser.pause(500)

        }
      }

    }

    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[2]');
    clockIcon.scrollIntoView(0, 100)
    clockIcon.click();
    browser.pause(500);

  }

  selectEndSessionTime() {
    browser.pause(1000)
    const hrs = $("(//li[contains(text(),'11')])[1]");
    hrs.scrollIntoView();
    browser.pause(200)
    hrs.click();
    browser.pause(100)
    const min = $("(//li[contains(text(),'05')])[2]");
    min.scrollIntoView();
    min.click();
    const zone = $("(//li[contains(text(),'pm')])[1]");
    zone.click();
    // browser.keys(['Meta', 'Enter']);
    // browser.keys(['Meta', 'Backspace']);
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[1]');
    clockIcon.scrollIntoView(0, 100);
    clockIcon.click();
    browser.pause(200);

  }


  selectSecondStartSessionTime(futureTime) {
    this.selectTimeField.click();
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    // this.timeInputField.setValue(futureTime);
    const hrs = $("(//li[contains(text(),'11')])[1]");
    hrs.scrollIntoView();
    browser.pause(200);
    hrs.click();
    browser.pause(200);
    const min = $("(//li[contains(text(),'02')])[2]");
    min.scrollIntoView();
    min.click();
    const zone = $("(//li[contains(text(),'pm')])[1]");
    zone.click();
    // browser.keys(['Meta', 'Enter']);
    // browser.keys(['Meta', 'Backspace']);
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[2]');
    clockIcon.scrollIntoView(0, 100);
    clockIcon.click();
    browser.pause(200);

  }

  selectThirdStartSessionTime(futureTime) {
    this.selectTimeField.click();
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    // this.timeInputField.setValue(futureTime);
    const hrs = $("(//li[contains(text(),'10')])[1]");
    hrs.scrollIntoView();
    browser.pause(200);
    hrs.click();
    browser.pause(200);
    const min = $("(//li[contains(text(),'03')])[2]");
    browser.pause(200);
    min.scrollIntoView();
    min.click();
    const zone = $("(//li[contains(text(),'pm')])[1]");
    zone.click();
    // browser.keys(['Meta', 'Enter']);
    // browser.keys(['Meta', 'Backspace']);
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[2]');
    clockIcon.scrollIntoView(0, 100);
    clockIcon.click();
    browser.pause(200);

  }

  selectFutureEndSessionTime() {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    // ISTTime now represents the time in IST coordinates
    var hours = ISTTime.getHours()
    var minutes = ISTTime.getMinutes() + 5;
    var strTime = hours + ':' + minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime1 = hours + ':' + minutes + ' ' + ampm;
    if (strTime1.includes("60")) {
      var hours1 = ISTTime.getHours() + 1;
      hours1 = hours1 % 12;
      hours1 = hours1 ? hours1 : 12;
      hours1 = hours1 < 10 ? '0' + hours1 : hours1;
      const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours1 + "')])[1]");
      hrs.scrollIntoView();
      browser.pause(500);
      hrs.click();
      browser.pause(200);
      $("(//li[contains(text(),'00')])[1]").click();
      $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
      $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]").scrollIntoView();
      browser.pause(500);
      // min.click();
      const min = $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]");
      min.click();
      browser.pause(1000)
      const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
      zone.click();
      browser.pause(500)
    } else {
      if (strTime1.includes("61")) {
        var hours1 = ISTTime.getHours() + 1;
        hours1 = hours1 % 12;
        hours1 = hours1 ? hours1 : 12;
        hours1 = hours1 < 10 ? '0' + hours1 : hours1;
        const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours1 + "')])[1]");
        hrs.scrollIntoView();
        browser.pause(500);
        hrs.click();
        browser.pause(500);
        $("(//li[contains(text(),'00')])[1]").click();
        $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
        $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]").scrollIntoView();
        browser.pause(500);
        // min.click();
        const min = $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'03')]");
        min.click();
        browser.pause(1000)
        const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
        zone.click();
        browser.pause(500)
      } else {
        if (strTime1.includes("62")) {
          var hours1 = ISTTime.getHours() + 1;
          hours1 = hours1 % 12;
          hours1 = hours1 ? hours1 : 12;
          hours1 = hours1 < 10 ? '0' + hours1 : hours1;
          const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours1 + "')])[1]");
          hrs.scrollIntoView();
          browser.pause(500);
          hrs.click();
          browser.pause(500);
          $("(//li[contains(text(),'00')])[1]").click();
          $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
          $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'04')]").scrollIntoView();
          browser.pause(500);
          // min.click();
          const min = $("(//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'04')]");
          min.click();
          browser.pause(1000)
          const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
          zone.click();
          browser.pause(500)
        } else {
          const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours + "')])[1]");
          hrs.scrollIntoView();
          hrs.click();
          browser.pause(500)
          $("(//li[contains(text(),'00')])[1]").click();
          $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
          $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]").scrollIntoView();
          browser.pause(500)
          const min = $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]");
          min.click();
          browser.pause(1000)
          const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
          zone.click();
          browser.pause(500)
        }
      }
    }
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[1]');
    clockIcon.click();
    browser.pause(500);
  }


  clickOnCurrentDateUnderBlackoutDateSection() {
    browser.pause(2000);
    if (this.currentDateUnderBlackoutDateSection.isDisplayed() === true) {
      this.currentDateUnderBlackoutDateSection.click();
      browser.pause(100);

    } else {
      throw new Error("Current date is not displaying under blackout calendar");
    }
  }

  validateUpdatedTemplateOnRecordingScreen() {
    var actClass = $(".registration-header-container").getAttribute("class");
    var expClass = "registration-header-container height-auto registration-header-accent registration-header-accent-shift";
    if (actClass.includes(expClass)) {
      console.log("template updated successfully");
    } else {
      throw new Error("USER FAILED TO UPDATE TEMPLATE actual template class>>" + actClass + "Expected template class>>" + expClass);
    }
  }

  //------------------//

  selectEventStartTimeForNextDay() {
    this.selectTimeField.click();
    this.timeInputField.waitForDisplayed({ timeout: 10000 });
    this.timeInputField.click();
    browser.pause(100)
    browser.keys(['Control', 'a']);
    browser.keys(['Delete']);
    browser.pause(100)
    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    // ISTTime now represents the time in IST coordinates

    var hours = ISTTime.getHours()
    var minutes = ISTTime.getMinutes() + 3;
    var strTime = hours + ':' + minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log("Time>>" + strTime);

    // this.timeInputField.setValue(strTime);
    // browser.keys(['Meta', 'Backspace']);
    // browser.keys(['Meta', 'Enter']);

    const hrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours + "')])[1]");
    hrs.scrollIntoView();
    hrs.click();
    browser.pause(500);
    $("(//li[contains(text(),'00')])[1]").click();
    // $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
    // $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'"+minutes+"')])[1]").scrollIntoView();
    // browser.pause(500);
    // // min.click();
    // const min = $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'"+minutes+"')])[1]");
    // min.click();
    browser.pause(500)
    const zone = $("(//li[contains(text(),'" + ampm + "')])[1]");
    zone.click();
    browser.pause(500)
    const clockIcon = $('(//span[@class="ant-time-picker-icon"]//i)[2]');
    clockIcon.scrollIntoView(0, 100)
    clockIcon.click();
    browser.pause(2000);
    const zone1 = $("(//li[contains(text(),'" + ampm + "')])[1]");
    zone1.click();
    const Endhrs = $("((//div[@class='ant-time-picker-panel-select'])[1]//li[contains(text(),'" + hours + "')])[1]");
    Endhrs.scrollIntoView();
    browser.pause(1000);
    Endhrs.click();
    browser.pause(500);
    $("(//li[contains(text(),'00')])[1]").click();
    $("(//div[@class='ant-time-picker-panel-select'])[2]").moveTo();
    $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]").scrollIntoView();
    browser.pause(1000);
    const min = $("((//div[@class='ant-time-picker-panel-select'])[2]//li[contains(text(),'" + minutes + "')])[1]");
    min.click();
    browser.pause(500)
    zone.click();
    browser.pause(500)
    const clockIcon1 = $('(//span[@class="ant-time-picker-icon"]//i)[1]');
    clockIcon1.click();

  }

  clickOnSessionDropdownOnInsightsPage() {
    if (this.sessionDropDownOnInsightsPage.isDisplayed() === true) {
      this.sessionDropDownOnInsightsPage.click();
    } else {
      throw new Error("Session dropdown buttion is not displaying on insights screen")
    }
  }

  clickOnDateRangeOption() {
    browser.pause(2000);
    browser.keys(['Meta', 'ArrowDown']);
    browser.pause(2000);
    browser.keys(['Meta', 'Enter']);
    browser.pause(2000);

  }

  clickOnDateRangeCalendarField() {
    if (this.dateRangeCalendarField.isDisplayed() === true) {
      this.dateRangeCalendarField.click();
    } else {
      throw new Error("Calendar is not displaying for date range on insights screen");
    }
  }

  clickOnCurrentDateOnDateRangeCalendar() {
    browser.pause(2000);
    if (this.currentDateOnDateRangeCalendar.isDisplayed() === true) {
      this.currentDateOnDateRangeCalendar.click();
      browser.refresh();
      browser.pause(2000);
    } else {
      throw new Error("Current date is disabled on date range calendar");
    }

  }

  selectNextDayFromScheduleCalendar() {
    this.selectDateField.click();
    browser.pause(3000);
    // const nextDate = $("(//td[@class='ant-calendar-cell'])[1]");
    const nextDate = $("(//tr[@class='ant-calendar-current-week ant-calendar-active-week']//td//div[@aria-disabled='false'][@aria-selected='false'])[1]");
    nextDate.click();


  }

  validateSecondUserInfoOnActivityPage(name, email) {
    $("(//tr[2]//td[@class='ant-table-row-cell-break-word'])[1]").click();
    browser.pause(5000);
    var actName = $("(//div[@class='people-profile-name drawer'])[1]").getText();
    var actEmail = $("(//div[@class='people-profile-email drawer'])[1]").getText();
    if (actName.includes(name) && actEmail.includes(email)) {
      console.log("user name and email matched on manage registration page");
      browser.refresh();
    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      console.log("actual email>>" + actEmail + "expected email>>" + email);
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON PEOPLE ACTIVITY AREA");
    }
  }

  validateMessageTextUnderMessageTab(message) {
    var actMessage = $("(//div[@class='message-text'])[1]").getText();
    var actMessage1 = $("(//div[@class='message-text'])[2]").getText();
    if (actMessage.includes(message) | actMessage1.includes(message)) {
      console.log("Message is displaying under message tab")
    } else {
      throw new Error("MESSAGE IS NOT DISPLAYING UNDER MESSAGE TAB");
    }
  }

  validateUserInfoOnActivityPageForDateRange(name, email) {
    $("(//tr[1]//td[@class='ant-table-row-cell-break-word'])[1]").click();
    browser.pause(5000);
    var actName = $("(//div[@class='people-profile-name drawer'])[1]").getText();
    var actEmail = $("(//div[@class='people-profile-email drawer'])[1]").getText();
    if (actName.includes(name) && actEmail.includes(email)) {
      console.log("user name and email matched on manage registration page");
      browser.refresh();

    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      console.log("actual email>>" + actEmail + "expected email>>" + email);
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON ACTIVITY PAGE");
    }
  }


  validateUserInfoOnPeopleArea(name, email) {
    $("(//div[@id='people-table']//tr//td)[2]").click();
    browser.pause(5000);
    var actName = $("(//div[@class='people-profile-name drawer'])[1]").getText();
    var actEmail = $("(//div[@class='people-profile-email drawer'])[1]").getText();
    if (actName.includes(name) && actEmail.includes(email)) {
      console.log("user name and email matched on manage registration page");
      browser.refresh();

    } else {
      console.log("actual name>>" + actName + "expected name>>" + name);
      console.log("actual email>>" + actEmail + "expected email>>" + email);
      throw new Error("USER NAME OR EMAIL MISSMATCHED ON PEOPLE AREA ON ACTIVITY PAGE");
    }
  }
  validateUpdatedBrandingColorForDevServer(updatedColor) {
    var actColor = $("(//input[@class='ant-input'])[2]").getAttribute("value");
    if (actColor.includes(updatedColor)) {
      console.log("Branding button color is working");
    } else {

      throw new Error("BRANDING BUTTON COLOR IS NOT WORKING actual color>>" + actColor + "expected color>>" + updatedColor);
    }

  }
  validateUpdatedBrandingColorField(updatedColor) {
    var actColor = $("(//input[@class='ant-input'])[1]").getAttribute("value");
    if (actColor.includes(updatedColor)) {
      console.log("Branding button color is working");
    } else {

      throw new Error("BRANDING BUTTON COLOR IS NOT WORKING actual color>>" + actColor + "expected color>>" + updatedColor);
    }
  }
  verifySourceData(data) {
    const actValue = $("//div[contains(text(),'" + data + "')]");
    if (actValue.isDisplayed() === true) {
      console.log("Data is successfully displaying under people tab")

    } else {
      throw new Error("Source data not displaying under people tab>>" + data)
    }
  }



  clickOnClosePopoverButton() {
    this.closePopoverButton.waitForDisplayed({ timeout: 10000 });
    if (this.closePopoverButton.isDisplayed() === true) {
      this.closePopoverButton.click();
    } else {
      throw new Error("Close popover button is not displaying on screen")
    }
  }

  VerifyThatStartSessionButtonIsDisabled() {
    if (this.startSessionButton.isClickable() === false) {
      console.log("Start session button is disabled when video is displaying")
    } else {
      throw new Error("Start button enabled when first video running")
    }
  }

  clickOnMessageFilterButton() {
    if (this.messageFilterButton.isDisplayed() === true) {
      this.messageFilterButton.click();
      browser.pause(1000);
    } else {
      throw new Error("Message filter is not displaying under activity area");
    }
  }

  selectQuestionMessageOption() {
    if (this.questionMessageFilterOption.isDisplayed() === true) {
      this.questionMessageFilterOption.click();
      browser.pause(2000);
    } else {
      throw new Error("Question option is not displaying under message filter list")
    }
  }

  clickOnDeleteFieldOption() {
    browser.pause(1000);
    if (this.deleteFieldButton.isDisplayed() === true) {
      this.deleteFieldButton.click();
    } else {
      throw new Error("Delete field option is not displaying on screen");
    }
  }
  validateDeletedCustomFieldOnRegPage(label) {
    const field = $("//textarea[@placeholder='" + label + "']");
    if (field.isDisplayed() === true) {
      throw new Error("Failed to add new custom field on registration page");
    } else {
      console.log("Custom field added on registration page");

    }
  }

  clickOnDeleteRecordingOption() {
    if (this.deleteRecordingOption.isDisplayed() === true) {
      console.log("delete recording option is displaying on screen");
      this.deleteRecordingOption.click();
    } else {
      throw new Error("Delete recording option is not displaying on screen");
    }
  }

  verifyDeletedRecording() {
    const activyRecording = $("svg[class='demio-icon session-list-recording-button --active']");
    if (activyRecording.isDisplayed() === true) {
      throw new Error("User is not able to delete recording");
    } else {
      console.log("User is able to delete recording from summary tab");
    }
  }


  uploadVisualEffectImageData(image) {
    const element = $("input[type='file']");
    var js = "arguments[0].style = 'display: -webkit-box'";
    browser.execute(js, element);
    const path = require("path");
    const filePath = path.join(__dirname, "/imageFile/" + image);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.pause(1000);
    $("input[type='file']").scrollIntoView();
    $("input[type='file']").setValue(remoteFilePath);
    browser.pause(10000);

  }
  clickOnAddNewEventButtonOnScheduleTab() {
    browser.pause(1000);
    if (this.addNewEventOnScheduleTab.isDisplayed() === true) {
      console.log("Add new event is displaying under schedule tab");
      this.addNewEventOnScheduleTab.click();
      browser.pause(1000);
    } else {
      throw new Error("Add new Event button is not displaying under schedule tab")
    }
  }

  selectDropdownOption(option) {
    browser.pause(1000);
    const dropdownOption = $("(//li//div[contains(text(),'" + option + "')])[1]");
    if (dropdownOption.isDisplayed() === true) {
      dropdownOption.click();
    } else {
      throw new Error("User is not able to select dropdown option>>" + option);
    }
  }


  callToActionToggleButtonIsDisplayed() {
    if (this.callToActionToggleButton.isDisplayed() === true) {
      console.log("Call to action toggle button is displaying on screen");
    } else {
      throw new Error("Call to action toggle button is not displaying on screen");
    }
  }
  turnOnCallToActionButton() {
    var actClass = this.callToActionToggleButton.getAttribute("class");
    var expClass = "ant-switch";
    if (actClass.includes(expClass)) {
      this.callToActionToggleButton.click();
    } else {
      console.log("Call to action toggle button is already on");
    }
  }

  fillCtaTitleField(title) {
    browser.pause(3000);
    if (this.ctaTitleField.isDisplayed() === true) {
      this.ctaTitleField.click();
      this.ctaTitleField.setValue(title);
    } else {
      throw new Error("CTA title field is not displaying on screen");
    }
  }

  fillCtaButtonTextField(text) {
    if (this.ctaButtonTextField.isDisplayed() === true) {
      this.ctaButtonTextField.click();
      this.ctaButtonTextField.setValue(text);
    } else {
      throw new Error("CTA button text field is not displaying on screen");
    }
  }

  fillCtaButtonUrlField(url) {
    if (this.ctaButtonUrlField.isDisplayed() === true) {
      this.ctaButtonUrlField.click();
      this.ctaButtonUrlField.setValue(url);
    } else {
      throw new Error("CTA button url field is not displaying on screen");
    }
  }

  clickOnSaveSettingsButton() {
    if (this.saveSettingsButton.isDisplayed() === true) {
      this.saveSettingsButton.click();
    } else {
      throw new Error("Save settings button is not displaying on screen");
    }
  }

  verifyAddedCtaTitle(title) {
    var actTitle = $("div[class='cta-title']").getText();
    if (actTitle.includes(title)) {
      console.log("CTA title matched on edit page screen");
    } else {
      throw new Error("CTA title mismatched actual title>>" + actTitle + "expected title>>" + title);
    }
  }

  verifyAddedCtaButton(text) {
    if (this.addedCtaButton.getText().includes(text)) {
      console.log("CTA button added successfully");

    } else {
      throw new Error("CTA button text mismatched actual text>>" + this.addedCtaButton.getText() + "Expected button text>>" + text);
    }
  }

  clickOnAddedCtaButton() {
    if (this.addedCtaButton.isDisplayed() === true) {
      this.addedCtaButton.click();
      browser.pause(1000);
    } else {
      throw new Error("Added CTA button is not displaying on screen");
    }
  }

  validateEmptyGraphContainer() {
    if (this.emptyGraphContainer.isDisplayed() === true) {
      console.log("Graph is not dipslaying under insights screen");
    } else {
      throw new Error("Empty graph container is not displaying under insights screen")
    }
  }

  validateResourceNumberForAllResources(number) {
    var firstResourceNumber = this.resourceNumberForFirstResource.getText();
    var secondResourceNamber = this.resourceNumberForSecondResource.getText();
    var thirdResourceNamber = this.resourceNumberForThirdResource.getText();
    if (firstResourceNumber.includes(number)) {
      console.log("Resource number is matched for first resource");

      if (secondResourceNamber.includes(number)) {
        console.log("Resource number is matched for second resource");

        if (thirdResourceNamber.includes(number)) {
          console.log("Resource number is matched for third resource");

        } else {
          throw new Error("Resource number missmatched for third resource..actual number>>" + thirdResourceNamber + "Expected resource number>>" + number);

        }
      } else {
        throw new Error("Resource number missmatched for second resource..actual number>>" + secondResourceNamber + "Expected resource number>>" + number);

      }
    } else {
      throw new Error("Resource number missmatched for first resource..actual number>>" + firstResourceNumber + "Expected resource number>>" + number);
    }
  }

  clickOnSmileOptionOnChatScreen() {
    if (this.smileOptionInChatScreen.isDisplayed) {
      this.smileOptionInChatScreen.click();
    } else {
      throw new Error("Smile option is not displaying under chat screen");
    }
  }

  shareAndVerifySharedEmoji() {
    browser.pause(2000);
    if (this.firstEmojiInList.isDisplayed() === true) {
      var actEmoji = this.firstEmojiInList.getText();
      this.firstEmojiInList.click();
      browser.pause(1000);
      if ($("//div[contains(text(),'" + actEmoji + "')]").isDisplayed() === true) {
        console.log("User is able to share emoji")
      } else {
        throw new Error("Failed to verify shared emoji on chat screen")
      }
    } else {
      throw new Error("Emoji list is not displayed")
    }
  }

  clickOnStopSessionFromRecurringOption() {
    browser.pause(1000);
    if (this.stopSessionFromRecurring.isDisplayed() === true) {
      this.stopSessionFromRecurring.click();
    } else {
      throw new Error("Stop session from recurring option is not displaying on screen");
    }
  }

  verifyCancelledRecurringSession() {
    if ($("//td[@class='ant-table-row-cell-break-word']//a[contains(text(),'0')]").isDisplayed() === true) {
      throw new Error("User is not able to cancel the sessions which have no registrants")
    } else {
      console.log("User is able to cancel the sessions which have no registrants");
    }
  }

  clickOnEditEventIcon() {
    if (this.editEventIcon.isDisplayed() === true) {
      this.editEventIcon.scrollIntoView(0, 100)
      this.editEventIcon.click();
    } else {
      throw new Error("Edit event icon is not displaying on screen")
    }
  }


  fillEditEventField(name) {
    browser.pause(3000)
    if (this.editEventNameField.isDisplayed() === true) {
      this.editEventNameField.click();
      browser.keys(['Control', 'a']);
      browser.keys(['Delete']);
      browser.pause(100);
      this.editEventNameField.setValue(name);
    } else {
      throw new Error("Edit event name field is not displaying on screen")
    }
  }

  clickOnSaveEditEventButton() {
    browser.pause(300)
    if (this.saveEditEventButton.isDisplayed() === true) {
      this.saveEditEventButton.click();
    } else {
      throw new Error("Save button is not displaying on screen under edit event screen");
    }
  }

  validateUpdatedEventName(name) {
    var actEvent = $("//div[@class='session-header-title']//span").getText();
    if (actEvent.includes(name)) {
      console.log("User is able to update event");
    } else {
      throw new Error("Failed to update event name actual event name>>" + actEvent + "Expected event name>>" + name);
    }
  }

  clickOnFilterButtonUnderPeopleTab() {
    browser.pause(5000);
    if (this.filterButtonUnderPeopleTab.isDisplayed() === true) {
      this.filterButtonUnderPeopleTab.click();
    } else {
      throw new Error("Filter button is not displaying under people tab")
    }
  }

  clickOnRegisteredCountInSummary() {
    if (this.registeredCountInSummary.isDisplayed() === true) {
      console.log("Registered count is displaying under summary tab")
      this.registeredCountInSummary.click();
    } else {
      throw new Error("Registered count is nort displaying under summary tab")
    }
  }

  clickOnAttendedCountInSummary() {
    if (this.attendedCountInSummary.isDisplayed() === true) {
      console.log("Attended count is displaying under summary tab")
      this.attendedCountInSummary.click();
    } else {
      throw new Error("Attended count is not displaying under summary tab");
    }
  }

  clickOnMissedCountInSummary() {
    if (this.missedCountInsummary.isDisplayed() === true) {
      console.log("Missed count is dipalying under summary tab");
      this.missedCountInsummary.click();
    } else {
      throw new Error("Missed count is not displaying under summary tab")
    }
  }

  clickOnMessageCountInSummary() {
    if (this.messagesCountInSummary.isDisplayed() === true) {
      console.log("Message count is displaying under summary tab");
      this.messagesCountInSummary.click();
    } else {
      throw new Error("Message count is not displaying under summary tab")
    }
  }


  clickOnInsightsOptionInActivity() {
    browser.pause(3000)
    this.insightsOptionInActivity.scrollIntoView(0,100)

    if (this.insightsOptionInActivity.isDisplayed() === true) {
      console.log("Insights button is displaying under activity area");
      this.insightsOptionInActivity.click();
    } else {
      throw new Error("Insights option is missing under activity area")
    }
  }

  clickOnRegisteredCountInInsights() {
    browser.pause(3000);
    if (this.insightsRegistered.isDisplayed() === true) {
      console.log("Registered count is displaying under insights screen")
      this.insightsRegistered.click();
    } else {
      throw new Error("Registered count is not displaying under insights screen")
    }
  }

  clickOnAttendedCountInInsights() {
    browser.pause(3000);
    if (this.insightsAttended.isDisplayed() === true) {
      console.log("Attended count is displaying under Insights screen")
      this.insightsAttended.click();
    } else {
      throw new Error("Attended count is not displaying under Insights screen");
    }
  }

  clickOnMissedCountInInsights() {
    browser.pause(3000);
    if (this.insightsMissed.isDisplayed() === true) {
      console.log("Missed count is dipalying under Insights screen");
      this.insightsMissed.click();
    } else {
      throw new Error("Missed count is not displaying under Insights screen")
    }
  }

  clickOnMessageCountInInsights() {
    browser.pause(3000);
    if (this.insightsMessagesCount.isDisplayed() === true) {
      console.log("Message count is displaying under Insights screen");
      this.insightsMessagesCount.click();
    } else {
      throw new Error("Message count is not displaying under Insights screen")
    }
  }

}

export default new EventPage();
