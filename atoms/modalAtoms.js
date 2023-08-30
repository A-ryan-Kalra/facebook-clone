import { atom } from "recoil";

export const sessionState = atom({
  key: "sessionState",
  default: [],
});

export const postState = atom({
  key: "postState",
  default: false,
});
export const postStateId = atom({
  key: "postStateId",
  default: "",
});
