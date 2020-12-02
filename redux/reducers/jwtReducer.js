import initialState from "../initialState";
import {JWT_TOKEN, CLEAR_JWT} from "../actions/jwtAction";


export default function jwtReducer(state = [], action) {
    switch (action.type) {
        case 'JWT_TOKEN':
            return [...state , action.value]
        case "CLEAR_JWT":
            return []
        default:
            return state
    }
}