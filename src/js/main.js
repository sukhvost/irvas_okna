import './slider';
import modals from './moduls/modals';
import tabs from './moduls/tabs';
import forms from './moduls/forms';
import changeModalsState from './moduls/changeModalsState';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {

    };
    changeModalsState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img>img', 'do_image_more', 'inline-block');
    forms(modalState);
});