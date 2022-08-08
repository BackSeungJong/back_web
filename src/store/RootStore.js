import { types, getEnv } from 'mobx-state-tree';

import ViewStore from './ViewStore';
import UserMngStore from './UserMngStore';

export default types
  .model('Store', {
    viewStore: types.optional(ViewStore, {}),
    userMngStore: types.optional(UserMngStore, {}),
  })
  .views((self) => ({
    get axios() {
      return getEnv(self).axios;
    },
  }));
