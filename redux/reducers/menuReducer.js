import initialState from "../initialState";
import {MENU_IS_OPEN} from "../actions/menuAction";


export default function menuReducer(state = false, action) {
    switch (action.type) {
        case 'MENU_IS_OPEN':
            return action.value
        default:
            return state
    }
}