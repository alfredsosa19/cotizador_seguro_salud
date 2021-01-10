import { login } from "../../api/authApi";

import history from "../../utils/history";
import constants from "./constants";

const addUserInfo = (payload) => {
  return {
    type: constants.ADD_USER_INFO,
    payload: payload,
  };
};

export function add_members_plan(payload) {
  return {
    type: constants.ADD_PLAN_MEMBERS,
    payload: payload,
  };
}

export function add_plan_price(payload) {
  return {
    type: constants.ADD_PLAN_PRICE,
    payload: payload,
  };
}

export function logout() {
  return {
    type: constants.LOGOUT,
  };
}

export function initProcess(content) {
  return (dispatch) =>
    login(content)
      .then(async (resp) => {
        await dispatch(addUserInfo(resp.data.data.tercero));
        history.push("/valid-data");
      })
      .catch((err) => {
        throw err;
      });
}
