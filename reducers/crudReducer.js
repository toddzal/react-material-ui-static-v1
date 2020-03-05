import { DESC_CHANGED, DETAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = {
  desc: "",
  detail: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DESC_CHANGED:
      return { ...state, desc: action.payload };
    case DETAIL_CHANGED:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};
