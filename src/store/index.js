import { createContext, useContext } from "react";
import _ from "lodash";

const StoreContext = createContext();

const useStore = (namespace) => {
  const store = useContext(StoreContext);

  if (namespace === undefined) {
    throw Error("No-defined Store");
  }

  if (_.isString(namespace)) {
    return _.get(store, namespace);
  }

  return store;
};
