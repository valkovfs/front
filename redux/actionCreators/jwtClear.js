import {CLEAR_JWT} from "../actions/jwtAction";

export default function jwtClear(value) {
    return {
        type: 'CLEAR_JWT',
        value: value
    };
}

