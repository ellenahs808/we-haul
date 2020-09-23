import { RECEIVE_USER } from "../actions/session_actions";


export default function (state = {}, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USER:
            // return {
            //     rating: action.user.data.rating,
            //     numberOfRatings: action.user.data.numberOfRatings
            // };
            newState = action.user.data
            return newState
        default:
            return state;
    }
};

