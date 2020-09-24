import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from "../util/user_api_util";
import jwt_decode from 'jwt-decode';



export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_USER = "RECEIVE_USER";



export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});


export const receiveUserLogin = () => ({
    type: RECEIVE_USER_LOGIN
});


export const receiveUserLogout = () => ({
    type: RECEIVE_USER_LOGOUT
});


export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});



export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});


export const signup = user => dispatch =>
    SessionAPIUtil.signup(user).then((res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        
        // dispatch(receiveCurrentUser(decoded));
        dispatch(receiveCurrentUser(user));
    })
    .catch((err) => {
        dispatch(receiveSessionErrors(err.response.data));
    });


export const fetchCurrentUser = userId => dispatch => {
    UserAPIUtil.getUser(userId)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .catch((err) => console.log(err))
};

export const login = user => dispatch =>
    SessionAPIUtil.login(user)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            SessionAPIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(user));
        })
        .catch((err) => {
            dispatch(receiveSessionErrors(err.response.data));
        });


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionAPIUtil.setAuthToken(false);
    dispatch(receiveUserLogout());
};


export const updateUser = (userData) => (dispatch) => {
    return UserAPIUtil.updateUser(userData)
      .then((user) => dispatch(receiveUser(user)))
      .catch((err) => console.log(err));
};



export const fetchUser = userId => (dispatch) => {
    return UserAPIUtil.getUser(userId)
        .then((user) => dispatch(receiveUser(user)))
        .catch((err) => console.log(err));
};