const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Header extends Page {
  /**
   * define selectors using getter methods
   */
    get menuButton() {
        return $(".global-menu-icon")
    }

  /**
   * a method to encapsule automation code to interact with the page
   */
    async openMenu(){
        const menu = await this.menuButton
        await expect(menu).toExist()
        await menu.click();
    }

    open() {
        return super.open("");
    }
}

module.exports = new Header();