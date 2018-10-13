// action types constants
export const GET_AVATAR = 'GET_AVATAR'

export const getAvatar = (query) => {
    return {
        type: GET_AVATAR,
        payload: {
            query: query
        }
    }
}