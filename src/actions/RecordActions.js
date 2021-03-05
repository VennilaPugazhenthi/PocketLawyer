import { RECORD_OFF, RECORD_ON } from "./types";

export const record_on = () => {
  return { type: RECORD_ON };
};

export const record_off = () => {
  return { type: RECORD_OFF };
};
