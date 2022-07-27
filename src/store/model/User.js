import { types } from "mobx-state-tree";

export default types.model("User", {
  userSn: types.identifierNumber,
  userNm: types.string,
  userBirth: types.string,
  userAge: types.integer,
});
