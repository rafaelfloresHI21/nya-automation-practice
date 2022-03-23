import { When } from '@cucumber/cucumber';
import Menu from '../pages/menu.page';
const Header = require("../pages/header.page")


When(/^the user clicks the Menu button on the Header$/, async () => {
    await Header.openMenu()
})

When(/^the user clicks the Log In button$/, async () => {
    await Menu.clickLogInButton()
})