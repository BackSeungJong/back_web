import { createContext, useContext } from 'react';
import _ from 'lodash';

const StoreContext = createContext();

// export function StoreProvider({ children }) {
//   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
// }

export const useStore = (namespace) => {
  const store = useContext(StoreContext);

  if (namespace === undefined) {
    throw Error('useStore must be used within StoreProvider.');
  }

  if (_.isString(namespace)) {
    return _.get(store, namespace);
  }

  return store;
};
