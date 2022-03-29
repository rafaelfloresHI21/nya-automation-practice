import { Given } from '@cucumber/cucumber';
import Header from "../pages/header.page"
import Menu from '../pages/menu.page';

const pages = {
    whatever: Header,
    menu: Menu
  };

Given(/^a user at (\w+) screen in the app$/,async page => {
    pages[page].open()
});

