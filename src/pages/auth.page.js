const utils = require("../../utils/utils");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Auth extends Page {
  /**
   * define selectors using getter methods
   */
    get authForm(){
        return $("form[method='post']")
    }

    get authNav(){
        return $("div[role='navigation']")
    }

    get currentActiveTab() {
        return $(".auth0-lock-tabs-current")
    }

    get emailInput() {
        return $("/html//input[@id='1-email']")
    }

    get passwordInput() {
        return $(".auth0-lock-input-password .auth0-lock-input")
    }

    get nameInput(){
        return $("/html//input[@id='1-customFirstname']")
    }

    get unActiveTab(){
        return $(".auth0-lock-tabs a")
    }

    get submitButton(){
        return $(".auth0-lock-submit")
    }

    get newsletterModal(){
        return $(".newsletter.warning-message")
    }

    get newsLetterButton(){
        return $(".button")
    }

    get userAvatar(){
        return $(".user-avatar")
    }

    get userName(){
        return $(".username")
    }

    async asertForm(){
        const generalForm = await this.authForm
        await expect(generalForm).toBeDisplayed() 
        await this.assertCurrentTab("Log In")
        const inEmail = await this.emailInput 
        await expect(inEmail).toBeDisplayed()
        const inPass = await this.passwordInput
        await expect(inPass).toBeDisplayed()
    }

    async assertCurrentTab(tab){
        const nav = await this.authNav
        await expect(nav).toBeDisplayed()
        const currentTab = await this.currentActiveTab
        const visibleTextNav = await currentTab.$("li > span")
        await expect(visibleTextNav).toHaveText(tab)
    }

    async clickTab(name){
        const tab = await this.unActiveTab
        await tab.click()
        await this.assertCurrentTab(name)
    }

    async fillSignUpFields(){
        const email = await this.emailInput;
        await email.setValue(utils.credentials.name + `+${this.getUser()}@helloiconic.com`)
        const pass = await this.passwordInput;
        await pass.setValue(utils.credentials.password)
        const name = await this.nameInput;
        await name.setValue(utils.credentials.name)
    }

    async clickSignUpButton(){
        const button = await this.submitButton
        await button.click();
        const generalForm = await this.authForm
        await generalForm.waitForDisplayed({reverse: true})
    }

    async dissmissNewsletter(){
        const newsletter = await this.newsletterModal
        await newsletter.waitForDisplayed({ timeout: 10000})
    }

    async assertLogIn(){
        const userContainer = await this.userAvatar
        await userContainer.waitForExist({timeout: 5000})
        const username = await this.userName
        await username.waitForDisplayed({timeout: 5000})
        await expect(username).toHaveText(utils.credentials.name)
    }

    getUser() {
        const temp = new Date()
        return `${temp.getDay()}${temp.getHours()}${temp.getMinutes()}`
    }
}

module.exports = new Auth();