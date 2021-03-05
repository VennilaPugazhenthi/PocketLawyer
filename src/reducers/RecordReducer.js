import { RECORD_ON, RECORD_OFF } from "../actions/types";

const INTIAL_STATE = {
  record: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case RECORD_ON:
      return { ...state, record: true };
    case RECORD_OFF:
      return { ...state, record: false };
    default:
      return state;
  }
};
