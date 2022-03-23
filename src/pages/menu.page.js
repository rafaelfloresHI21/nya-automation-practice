const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Menu extends Page {
  /**
   * define selectors using getter methods
   */
    get menu() {
        return $(".global-menu")
    }

    get authButton(){
        return $(".login.subscribe")
    }
  /**
   * a method to encapsule automation code to interact with the page
   */
    async assertMenu(){
        const menu = await this.menu
        expect(menu).toExist()
       
        const currentUrl = await browser.getUrl()
        expect(currentUrl).toContain("menu", `Expected URL "${currentUrl}" to contain "menu"`)
    }

    async clickLogInButton(){
        const button = await this.authButton
        await expect(button).toExist()
        await button.click()
    }
    open() {
        return super.open("/menu");
    }
}

module.exports = new Menu();