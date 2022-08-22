import { createContext, useContext } from 'react';
import _ from 'lodash';
import RootStore from './RootStore';
import axios from 'lib/axios';

const StoreContext = createContext();

const store = RootStore.create({}, { axios });

export function StoreProvider({ children }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export const useStore = (namespace) => {
  const store = useContext(StoreContext);

  if (store === undefined) {
    throw Error('useStore must be used within StoreProvider.');
  }

  if (_.isString(namespace)) {
    return _.get(store, namespace);
  }

  if (_.isArray(namespace)) {
    return _.get(store, namespace);
  }

  return store;
};
