import { types } from "mobx-state-tree";

import UserMngStore from "./UserMngStore";

export default types.model("Store", {
  userStore: types.optional(UserMngStore, {}),
});
