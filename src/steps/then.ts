import { Then } from '@cucumber/cucumber';
import Menu from '../pages/menu.page';


Then(/^the menu must be open so the user can choose an option$/, async () => {
    await Menu.assertMenu();
});

Then(/^an authentication modal must be visible to the user$/, async () => {
    //something
});


