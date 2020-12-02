import initialState from "../initialState";

export default function jwtSave(state = initialState.token, action) {
    switch (action.type) {
        case 'SAVE_JWT':
            return state.concat([action.value])
        default:
            return state
    }
}