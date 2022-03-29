import { When } from '@cucumber/cucumber';
import Auth from '../pages/auth.page';
import Menu from '../pages/menu.page';
const Header = require("../pages/header.page")


When(/^the user clicks the Menu button on the Header$/, async () => {
    await Header.openMenu()
})

When(/^the user clicks the Log In button$/, async () => {
    await Menu.clickLogInButton()
})

When(/^the user clicks the (\w+\s\w+) tab$/, async (name) => {
    await Auth.clickTab(name)
})

When(/^the user fills the required fields$/, async () => {
    await Auth.fillSignUpFields()
})

When(/^clicks the Sign Up button$/, async () => {
    await Auth.clickSignUpButton()
})

When(/^the user dismiss the newsletter request$/, async () => {
    await Auth.dissmissNewsletter()
})