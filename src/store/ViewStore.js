import { getParent, types, flow, destroy } from 'mobx-state-tree';
import { when, reaction, values, toJS } from 'mobx';

import _ from 'lodash';

// 공통코드
// 좌측 메뉴
const LeftMenu = types
  .model('LeftMenu', {
    menuId: types.identifier,
    menuFg: types.string,
    menuNm: types.string,
    linkUri: types.string,
    parentId: types.string,
    jobFg: types.maybeNull(types.string),
    isActive: false,
  })
  .actions((self) => ({
    setChildren: (children) => {
      self.children = children;
    },
    onClickMenu: (callback) => {
      self.isActive = !self.isActive;
      if (self.menuFg === 'menu' && self.linkUri) callback(self.linkUri);
    },
  }));

const parseFunction = (value) => {
  // eslint-disable-next-line no-eval
  const fn = eval(`(${value})`);
  if (typeof fn !== 'function') throw new Error(`${value} is not a valid function`);
  return fn;
};

const functionType = types.custom({
  name: 'functionType',
  fromSnapshot(value) {
    return parseFunction(value);
  },
  toSnapshot(value) {
    return value.toString();
  },
  isTargetType(value) {
    return _.isFunction(value);
  },
  getValidationMessage(value) {
    try {
      parseFunction(value);
      return '';
    } catch (e) {
      return `value "${value}" is Not a valid function ${e}`;
    }
  },
});

// 모달 팝업
const Dialog = types.model('Dialog', {
  description: types.optional(types.union(types.string, types.frozen({})), ''),
  confirmationText: '',
  confirmationButtonProps: types.maybeNull(types.frozen({})),
  cancellationText: '',
  cancellationButtonProps: types.maybeNull(types.frozen({})),
  onConfirm: types.maybeNull(functionType),
  onCancel: types.maybeNull(functionType),
});

export default types
  .model({
    // 좌측메뉴
    menuList: types.map(LeftMenu),
    // 모달팝업
    dialog: types.maybeNull(Dialog),
  })
  .views((self) => ({
    get root() {
      return getParent(self);
    },
    get currentMenu() {
      return _.find(values(self.menuList), ({ menuFg, isActive }) => menuFg === 'menu' && isActive);
    },
    get menus() {
      const menuList = values(self.menuList);
      return _.chain(menuList)
        .reduce((treeMenu, menu) => {
          const { menuFg, menuId } = menu;

          if (menuFg === 'title') {
            const children = _.filter(menuList, ['parentId', menuId]);
            menu.setChildren(children);
            treeMenu.push(menu);
          }

          return treeMenu;
        }, [])
        .value();
    },
    // 현재 메뉴에 해당하는 자원 목록
    get currentMenuResourceList() {
      return _.chain(values(self.menuList))
        .filter(({ menuFg, parentId }) => menuFg !== 'title' && menuFg !== 'menu' && parentId === self.currentMenu?.menuId)
        .map(({ menuId }) => menuId)
        .value();
    },
    get dialogProps() {
      return toJS(self.dialog);
    },
  }))
  .actions((self) => {
    // 좌측 메뉴 선택
    const onClickMenu = (currentMenu) => {
      const { menuFg } = currentMenu;

      // 선택한 메뉴 외 비활성화
      _.filter(values(self.menuList), ['menuFg', menuFg]).forEach((menu) => {
        if (currentMenu === menu) {
          menu.isActive = !menu.isActive;
        } else {
          menu.isActive = false;
        }
      });
    };

    // 현재 메뉴 저장
    function setCurrentMenu(pathname) {
      const lastIndex = pathname.indexOf('/view') + 5;
      console.log('111', lastIndex);
      const currentLinkUri = pathname.substring(0, lastIndex === -1 ? pathname.length : lastIndex);
      console.log('222', currentLinkUri);
      const currentMenu = _.find(values(self.menuList), ['linkUri', currentLinkUri]);
      console.log('333', currentMenu);

      values(self.menuList).forEach((menu) => {
        const { menuFg, menuId } = menu;
        if (menuFg === 'title' || menuFg === 'menu') {
          menu.isActive = menuId === currentMenu?.menuId || menuId === currentMenu?.parentId;
        }
      });
    }

    /**
     * 초기화
     */
    function clear() {
      self.menuList.clear();
      self.codeList.clear();
    }

    /**
     * alert 팝업 호출
     * @param description
     * @param onConfirm
     */
    function alert(description, onConfirm) {
      self.dialog = {
        description,
        onConfirm,
      };
    }

    function clearDialogProps() {
      destroy(self.dialog);
    }

    const initLoad = () => {
      try {
        // if (_.isEmpty(values(self.codeList))) {
        //   // const { result, data } = yield self.root.axios.get('/common/codeList');
        //   const { result, data } = tmpMenuList;
        //   if (result === 'OK') {
        //     _.forEach(data, (code) => {
        //       self.codeList.put(code);
        //     });
        //   }
        // }

        // const { result, data } = yield self.root.axios.get('/common/menuList');
        const { result, data } = tmpMenuList;
        if (result === 'OK') {
          _.forEach(data, (menu) => {
            self.menuList.put(menu);
          });
        }

        // 메일 템플릿 로드
        // self.root.mailTemplateStore.getTemplate();
      } catch (error) {
        console.error(error);
        self.root.alert(error);
      }
    };

    return {
      afterAttach() {
        when(
          () => {
            self.initLoad();
          },
          () => {
            self.initLoad();
            reaction(() => {
              self.initLoad();
            });
          },
        );
      },
      initLoad,
      setCurrentMenu,
      onClickMenu,
      clear,
      alert,
      clearDialogProps,
    };
  });

const tmpMenuList = {
  result: 'OK',
  code: null,
  filters: null,
  data: [
    {
      pageSize: 10,
      firstPageNo: 0,
      prevPageNo: 0,
      startPageNo: 0,
      pageNo: 1,
      endPageNo: 0,
      nextPageNo: 0,
      finalPageNo: 0,
      totalCount: 0,
      searchInfo: null,
      adminSn: 0,
      adminId: null,
      superYn: null,
      adminSts: null,
      adminNm: null,
      adminDept: null,
      lastLoginDt: null,
      regId: 'SYSTEM',
      regDt: '2019-09-27 10:37:14',
      updId: null,
      updNm: null,
      updDt: null,
      uuid: null,
      adminUuid: null,
      loginFailCnt: 0,
      grpNm: null,
      grpNo: null,
      email: null,
      mailType: null,
      notiPartnerYn: null,
      notiProjectYn: null,
      notiApiYn: null,
      notiLaunchingDelayYn: null,
      loginUuid: null,
      accountType: null,
      menuId: '01000000',
      categoryFg: 'console',
      useYn: 'Y',
      menuFg: 'title',
      menuNm: '홈',
      menuDepth: 1,
      linkUri: 'main/view',
      parentId: '00000000',
      menuType: null,
      parentMenuNm: null,
      viewDesc: null,
      jobFg: '',
      pageBounds: {
        offset: 0,
        limit: 10,
        page: 1,
        orders: [],
        containsTotalCount: true,
        asyncTotalCount: null,
      },
    },
    {
      pageSize: 10,
      firstPageNo: 0,
      prevPageNo: 0,
      startPageNo: 0,
      pageNo: 1,
      endPageNo: 0,
      nextPageNo: 0,
      finalPageNo: 0,
      totalCount: 0,
      searchInfo: null,
      adminSn: 0,
      adminId: null,
      superYn: null,
      adminSts: null,
      adminNm: null,
      adminDept: null,
      lastLoginDt: null,
      regId: 'SYSTEM',
      regDt: '2019-09-27 10:37:14',
      updId: null,
      updNm: null,
      updDt: null,
      uuid: null,
      adminUuid: null,
      loginFailCnt: 0,
      grpNm: null,
      grpNo: null,
      email: null,
      mailType: null,
      notiPartnerYn: null,
      notiProjectYn: null,
      notiApiYn: null,
      notiLaunchingDelayYn: null,
      loginUuid: null,
      accountType: null,
      menuId: '02000000',
      categoryFg: 'console',
      useYn: 'Y',
      menuFg: 'title',
      menuNm: '회원 관리',
      menuDepth: 1,
      linkUri: 'userMng/view',
      parentId: '00000000',
      menuType: null,
      parentMenuNm: null,
      viewDesc: null,
      jobFg: '',
      pageBounds: {
        offset: 0,
        limit: 10,
        page: 1,
        orders: [],
        containsTotalCount: true,
        asyncTotalCount: null,
      },
    },
    {
      pageSize: 10,
      firstPageNo: 0,
      prevPageNo: 0,
      startPageNo: 0,
      pageNo: 1,
      endPageNo: 0,
      nextPageNo: 0,
      finalPageNo: 0,
      totalCount: 0,
      searchInfo: null,
      adminSn: 0,
      adminId: null,
      superYn: null,
      adminSts: null,
      adminNm: null,
      adminDept: null,
      lastLoginDt: null,
      regId: 'SYSTEM',
      regDt: '2019-09-27 10:37:14',
      updId: null,
      updNm: null,
      updDt: null,
      uuid: null,
      adminUuid: null,
      loginFailCnt: 0,
      grpNm: null,
      grpNo: null,
      email: null,
      mailType: null,
      notiPartnerYn: null,
      notiProjectYn: null,
      notiApiYn: null,
      notiLaunchingDelayYn: null,
      loginUuid: null,
      accountType: null,
      menuId: '03000000',
      categoryFg: 'console',
      useYn: 'Y',
      menuFg: 'title',
      menuNm: '관리자 관리',
      menuDepth: 1,
      linkUri: 'adminMng/view',
      parentId: '00000000',
      menuType: null,
      parentMenuNm: null,
      viewDesc: null,
      jobFg: '',
      pageBounds: {
        offset: 0,
        limit: 10,
        page: 1,
        orders: [],
        containsTotalCount: true,
        asyncTotalCount: null,
      },
    },
  ],
};
