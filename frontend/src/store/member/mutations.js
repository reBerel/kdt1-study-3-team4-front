import {
    SET_USERTOKEN,
} from './mutation-types'

export default {
    [SET_USERTOKEN] (state,  receivedData) {
        state.member.userToken = receivedData
    },    
}