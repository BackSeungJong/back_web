import { types } from 'mobx-state-tree';

import ViewStore from './ViewStore';
import UserMngStore from './UserMngStore';

export default types.model('Store', {
  viewStore: types.optional(ViewStore, {}),
  userStore: types.optional(UserMngStore, {}),
});
