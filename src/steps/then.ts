import { Then } from '@cucumber/cucumber';
import Menu from '../pages/menu.page';
import Auth from '../pages/auth.page'


Then(/^the menu must be open so the user can choose an option$/, async () => {
    await Menu.assertMenu();
});

Then(/^an authentication modal must be visible to the user$/, async () => {
    await Auth.asertForm()
});

Then(/^user must be logged in with its name placed in the menu$/, async () => {
    await Auth.assertLogIn()
});


