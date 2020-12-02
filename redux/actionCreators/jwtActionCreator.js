import {JWT_TOKEN} from "../actions/jwtAction";

export default function jwtSave(value) {
    return {
        type: 'JWT_TOKEN',
        value: value
    };
}

