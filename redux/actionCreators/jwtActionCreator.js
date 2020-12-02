import JWT_TOKEN from "../actions/jwtAction";

function jwtSave(token) {
    return {
        type: JWT_TOKEN,
        value: token
    };
}

export default jwtSave;