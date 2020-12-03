import {MENU_IS_OPEN} from "../actions/menuAction";

export default function openMenu(value) {
    return {
        type: 'MENU_IS_OPEN',
        value: value
    };
}

