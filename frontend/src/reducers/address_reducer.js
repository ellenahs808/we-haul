import {UPDATE_ADDRESS, REMOVE_ADDRESS} from '../actions/address_actions'


const addressReducer = (state = { startAddress: "", endAddress: ""}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_ADDRESS:
            return {startAddress: action.address.endAddress, endAddress: action.address.startAddress}
        case REMOVE_ADDRESS:
            return {startAddress: "", endAddress: ""}
        default:
            return state
    }
};

export default addressReducer