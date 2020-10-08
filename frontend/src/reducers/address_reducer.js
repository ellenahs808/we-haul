import {UPDATE_ADDRESS, REMOVE_ADDRESS} from '../actions/address_actions'


const addressReducer = (state = { startAddress: "1650 Page St San Francisco, CA", endAddress: "798 Arguello Blvd San Francisco, CA"}, action) => {
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


