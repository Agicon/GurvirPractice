import Base from "../testBase";

class simulatedSession extends Base {
    // *-------------------------POM---------------------------*//

    get sessionHeadertitle() { return $(".dashboard.session-title") }
    get joinRoomButton() { return $("//div[@class='session-button']") }
    get welcomeScreen() { return $("//div[@class='welcome']") }
    get joinRoomButtonWelcomeScreen() { return $("//div[@class='join-button']") }
    get startSessionButton() { return $(".Button.animated.ant-btn.ant-btn-primary.fadeIn.webinar-start-button.wiggle") }
    get closeNotificationOne() { return $("(//i[@class='anticon anticon-close ant-notification-close-icon'])[1]") }
    get closeNotificationTwo() { return $("(//i[@class='anticon anticon-close ant-notification-close-icon'])[1]") }
    get simulatedVideo() { return $("//video[@id='DEMIO_inline_video']") }
    get webinarTimer() { return $('//div[@class="header-controls-runtime"]') }
    get simulatedEventTitle() { return $(".dashboard.session-title") }
    get scheduleSessionButton() { return $(".dashboard.session-title") }
    get disabledScheduleSessionsButton() { return $(".sessions-list-schedule-button") }
    get activityEmptyContainer() { return $(".activity-empty-container") }
    get enabledStartSessionButton() {
        return $('//button[@class="ant-btn webinar-start-button wiggle Button animated fadeIn ant-btn-primary"]');
    }

    get externalLinkUnderChatMessage() {
        return $('//a[@class="external-link"]');
    }

    get featureActionClicksInRoom() {
        return $('//div[@class="featured-action-info"]');
    }

    get handoutClicksInRoom() {
        return $('//div[@class="chat-handout-total"]');
    }

    get pollAnswersInRoom() {
        return $('//div[@class="chat-poll-total"]');
    }

    
    //-----------------------ACTION METHODS------------------//
    closeNotificationOneISDisplayed() {
        this.closeNotificationOne.waitForDisplayed({ timeout: 6000 })
        return this.closeNotificationOne.isDisplayed();
    }
    clickOnCloseNotificationOne() {
        if (this.closeNotificationOneISDisplayed() === true) {
            this.closeNotificationOne.click();
        } else {
            throw new Error('Something went worng close notifiaction button is missing')
        }
    }
    closeNotificationTwoIsDisplayed() {
        this.closeNotificationTwo.waitForDisplayed({ timeout: 6000 })
        return this.closeNotificationTwo.isDisplayed();
    }
    clickOnCloseNotificationTwo() {
        if (this.closeNotificationTwoIsDisplayed() === true) {
            this.closeNotificationTwo.click();
        } else {
            throw new Error('Something went worng close notifiaction button is missing')
        }
    }
    sessionHeadertitleIsDisplayed() {
        this.sessionHeadertitle.waitForDisplayed({ timeout: 6000 })
        return this.sessionHeadertitle.isDisplayed();
    }
    getSessionHeadertitle() {
        if (this.sessionHeadertitleIsDisplayed() === true) {
            return this.sessionHeadertitle.getText();
        }
        else {
            throw new Error('Something went worng Session header title is missing')
        }
    }
    joinRoomButtonIsDisplayed() {
        this.joinRoomButton.waitForDisplayed({ timeout: 6000 })
        return this.joinRoomButton.isDisplayed();
    }
    clickOnjoinRoomButton() {
        if (this.joinRoomButtonIsDisplayed() === true) {
            this.joinRoomButton.click();
        } else {
            throw new Error('Something went worng with "Jon Room Button"')
        }
    }
    joinRoomButtonWelcomeScreenIsDisplayed() {
        this.joinRoomButtonWelcomeScreen.waitForDisplayed({ timeout: 6000 })
        return this.joinRoomButtonWelcomeScreen.isDisplayed();
    }
    getJoinRoomButtonWelcomeScreen() {
        if (this.joinRoomButtonWelcomeScreenIsDisplayed() === true) {
            this.joinRoomButtonWelcomeScreen.getText();
        } else {
            throw new Error('Some thing went worng with Join Room button welcome screen ')
        }
    }
    joinRoomButtonWelcomeScreenIsDisplayed() {
        this.joinRoomButtonWelcomeScreen.waitForDisplayed({ timeout: 6000 })
        return this.joinRoomButtonWelcomeScreen.isDisplayed();
    }
    clickOnJoinRoomButtonWelcomeScreen() {
        this.joinRoomButtonWelcomeScreen.waitForDisplayed();
        return this.joinRoomButtonWelcomeScreen.isDisplayed();
    }
    startSessionButtonIsDisplayed() {
        this.startSessionButton.waitForDisplayed({ timeout: 6000 })
        return this.startSessionButton.isDisplayed();
    }
    clickStartSessionButton() {
        if (this.startSessionButtonIsDisplayed() === true) {
            this.startSessionButton.click();
        } else {
            throw new Error('Some ting went worng  with Start Session Button')
        }
    }

    simulatedVideoIsDisplayed() {
        this.simulatedVideo.waitForDisplayed({ timeout: 30000 });
        return this.simulatedVideo.isDisplayed();
    }
    webinarTimerIsDisplayed() {
        this.webinarTimer.waitForDisplayed({ timeout: 10000 });
        return this.webinarTimer.isDisplayed();
    }
    simulatedEventTitleIsDisplayed() {
        this.simulatedEventTitle.waitForDisplayed({ timeout: 10000 });
        return this.simulatedEventTitle.isDisplayed();
    }

    clickOnSimulatedEvent() {
        if (this.simulatedEventTitleIsDisplayed() === true) {
            this.simulatedEventTitle.click();
        } else {
            throw new Error("simulated event is not displayed");
        }
    }
    disabledScheduleSessionsButtonIsDisplayed() {
        this.disabledScheduleSessionsButton.waitForDisplayed({ timeout: 10000 });
        return this.disabledScheduleSessionsButton.isDisplayed();
    }

    activityEmptyContainerIsDisplayed() {
        this.activityEmptyContainer.scrollIntoView();
        this.activityEmptyContainer.waitForDisplayed({ timeout: 10000 });
        this.activityEmptyContainer.isDisplayed();
    }

    clickOnEnabledStartSessionButton() {
        this.enabledStartSessionButton.waitForDisplayed({ timeout: 10000 });
        if (this.enabledStartSessionButton.isDisplayed() === true) {
            this.enabledStartSessionButton.click();
        } else {
            throw new Error("Enabled start session button is not displaying on screen")
        }
    }
    externalLinkIsDisplayed() {
        this.externalLinkUnderChatMessage.waitForDisplayed({ timeout: 30000 });
        if (this.externalLinkUnderChatMessage.isDisplayed() === true) {

        } else {
            throw new Error("External message is not displaying under chat message")
        }
    }

    verifyNumberOnFeatureActionClicks(clicks) {
        browser.pause(8000);
        var actualClick = this.featureActionClicksInRoom.getText();
        if (actualClick.includes(clicks)) {
            console.log("Clicks matched in room");
        } else {
            throw new Error("Feature action clicks missmatched in room actual clicks>>" + actualClick + "Expected clicks>>" + clicks);
        }
    }

    verifyHandoutClicksInRoom(clicks) {
        browser.pause(15000);
        var actClick = this.handoutClicksInRoom.getText();
        if (actClick.includes(clicks)) {
            console.log("Handout clicks matched in room");

        } else {
            throw new Error("Handout clicks missmatched in room actual clicks>>" + actClick + "Expected clicks>>" + clicks);
        }
    }

    verifyPollAnswersInRoom(answers) {
        browser.pause(12000);
        var actualAnswers = this.pollAnswersInRoom.getText();
        if (actualAnswers.includes(answers)) {
            console.log("Poll answers matched in room");

        } else {
            throw new Error("Number of poll answers missmatched in room actual answers>>" + actualAnswers + "Expected answers>>" + answers);
        }
    }

}
export default new simulatedSession();