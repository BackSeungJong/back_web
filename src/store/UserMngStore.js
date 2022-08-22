import { types, getParent, flow } from 'mobx-state-tree';
import { User } from './model';

export default types
  .model('UserMngStore', {
    list: types.optional(types.array(User), []),
  })
  .views((self) => ({
    get root() {
      return getParent(self);
    },
  }))
  .actions((self) => {
    const initList = () => {
      self.list.clear();
    };

    const onSearch = flow(function* onSearch(params) {
      try {
        const response = yield self.root.axios.get('/userMng/search', params);
        console.log('response', response);
      } catch (e) {
        console.log('axios err', e);
      }
    });

    return { onSearch, initList };
  });
