import { CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { GET_USER_INFO } from "../actions/user_actions";

const initialState = 0;

const buyingPowerReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = 0;

  switch (action.type) {

    case CURRENT_USER:
      return newState = action.currentUser.buyingPower;
    case GET_USER_INFO:
      return newState = action.user.buyingPower;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}
    
export default buyingPowerReducer;
