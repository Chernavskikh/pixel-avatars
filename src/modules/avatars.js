const GET_AVATAR = 'GET_AVATAR'
const SAVE_AVATAR = 'SAVE_AVATAR'
const DELETE_AVATAR = 'DELETE_AVATAR'

const initialState = {
    avatarQuery: '',
    favoritesArr: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AVATAR:
            return {
                ...state,
                avatarQuery: action.payload.query
            }

        case SAVE_AVATAR :
            return {
                ...state,
                favoritesArr: [...state.favoritesArr, action.payload]
            }

        case DELETE_AVATAR :
            return {
                ...state,
                favoritesArr: state.favoritesArr.filter(item => action.payload.id !== item.id),
            }

        default:
            return state
    }
}



