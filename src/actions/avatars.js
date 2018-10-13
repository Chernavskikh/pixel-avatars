// action types constants
export const GET_AVATAR = 'GET_AVATAR'
export const SAVE_AVATAR = 'SAVE_AVATAR'
export const DELETE_AVATAR = 'DELETE_AVATAR'

export const getAvatar = (query) => {
    return {
        type: GET_AVATAR,
        payload: {
            query: query
        }
    }
}

export const saveAvatar = (query, type) => {
    return {
        type: SAVE_AVATAR,
        payload: {
            query,
            type,
            // generate unic id
            id: Date.now(),
        }
    }
}

export const deleteAvatar = (id) => {
    return {
        type: DELETE_AVATAR,
        payload: {
            id,
        }
    }
}