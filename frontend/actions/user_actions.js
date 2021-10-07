import * as UserAPIUtil from '../util/user_api_util'

export const GET_USER_INFO = "GET_USER_INFO";
// export const RECEIVE_USER = "RECEIVE_USER";

// WANT TO RECONFIG TO THIS
// const getUserAction = (currentUser) => {
//   return {
//     type: GET_USER_INFO,
//     currentUser: currentUser
//   }
// }

const getUserAction = (user) => {
  return {
    type: GET_USER_INFO,
    user: user
  }
}

export const getUser = (userId) => (dispatch) => {
  return UserAPIUtil.getUser(userId)
    .then(
      (res) => dispatch(getUserAction(res)))
  // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}