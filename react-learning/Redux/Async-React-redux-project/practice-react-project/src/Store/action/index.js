import axios from "axios"

export function getUserName(userName) {
    return async (dispatch) => {
        try {
            dispatch(getAccountUserPending());
            const { data } = await axios.get(`https://api.github.com/users/${userName}`)
            dispatch(getAccountUserFulfilled(data.id))
        } catch (error) {
            dispatch(getAccountUserRejected(error.massage))
        }
    }

}



export function getAccountUserPending() {
    return { type: "getAccUserPending" }
}

export function getAccountUserFulfilled(value) {
    return {
        type: "getAccUserFulfilled",
        payload: value
    }
}

export function getAccountUserRejected(error) {
    return {
        type: "getAccUserRejected",
        error: error
    }
}