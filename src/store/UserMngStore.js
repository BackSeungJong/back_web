import { types, getParent } from 'mobx-state-tree';
import { User } from './model';

const testUser = {
  userSn: 1,
  userNm: '백승종',
  userBirth: '1995-05-23',
  userAge: 28,
};

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

    const onSearch = () => {
      const tmp = [];
      tmp.push(testUser);
      self.list = tmp;
    };
  });
