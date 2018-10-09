import * as ApiUtilSession from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (user) => dispatch => (
  ApiUtilSession.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);
//

export const logout = () => dispatch => (
  ApiUtilSession.logout().then( () => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
  ApiUtilSession.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);
