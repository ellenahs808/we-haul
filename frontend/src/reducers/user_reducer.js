import { RECEIVE_USER } from "../actions/session_actions";


export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return {
                rating: action.user.data.rating,
                numberOfRatings: action.user.data.numberOfRatings
            };
        default:
            return state;
    }
};

