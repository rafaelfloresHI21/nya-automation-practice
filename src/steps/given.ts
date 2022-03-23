import { Given } from '@cucumber/cucumber';
import Header from "../pages/header.page"
import Menu from '../pages/menu.page';

const pages = {
    any: Header,
    menu: Menu
  };

Given(/^a user at (\w+) screen in the app$/,() => {
    Header.open()
});

