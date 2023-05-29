import {
    SET_USERTOKEN
} from './mutation-types'

export default {
    setUserToken({ commit }, uesrToken) {
        console.log(", uesrToken: " + uesrToken)
        return commit(SET_USERTOKEN, uesrToken)  
    },
}
