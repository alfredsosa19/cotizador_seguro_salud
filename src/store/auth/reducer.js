import constants from "./constants";

const INITIAL_STATE = {
  userInfo: null,
  isLoggedIn: false,
  planMembers: null,
  planPrice: null,
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.ADD_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
        sLoggedIn: true,
      };
    }
    case constants.ADD_PLAN_MEMBERS: {
      return {
        ...state,
        planMembers: action.payload,
      };
    }
    case constants.ADD_PLAN_PRICE: {
      return {
        ...state,
        planPrice: action.payload,
      };
    }
    case constants.LOGOUT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
