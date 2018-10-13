const GET_AVATAR = 'GET_AVATAR'

const initialState = {
    avatarQuery: '',
}

export default (state = initialState, action) => {
    console.log(action);
    console.log(action.type);
    switch (action.type) {
        case GET_AVATAR:
            return {
                ...state,
                avatarQuery: action.payload.query
            }

        default:
            return state
    }
}


