import { Container, Box, ButtonGroup, ListItemButton, Typography } from '@mui/material';
import { useLocation, Outlet } from 'react-router-dom';
import { Header, LeftMenu } from 'components';
import { observer } from 'mobx-react-lite';

import React, { useEffect, useState } from 'react';
import { useStore } from 'store';
import PropTypes from 'prop-types';
import { values } from 'mobx';
import _ from 'lodash';

function PageLayout({ className }) {
  const { pathname, key } = useLocation();
  const { viewStore } = useStore();
  // const { setCurrentMenu, currentMenu, menuList } = viewStore;
  const { menuList } = viewStore;

  const [currentMenu, setCurrentMenu] = useState();

  useEffect(() => {
    _.filter(values(menuList), (menu) => {
      const { linkUri } = menu;
      const uri = linkUri.split('/');
      const path = pathname.split('/');

      if (uri[0] === path[1]) {
        setCurrentMenu(menu);
      }
    });
  }, [pathname, values(menuList)]);

  return (
    <Container id="back-to-top-anchor" maxWidth={false} className={className} sx={{ pt: '64px', height: '100vh', minWidth: 1200, overflowY: 'hidden' }}>
      {/* 상단 메뉴 */}
      <Header />
      <Box display="flex" sx={{ height: '100%' }}>
        {/* 좌측 메뉴 */}
        <LeftMenu />
        {/* 메인 컨텐츠 */}
        <Box
          component="main"
          sx={{
            minHeight: 'calc(100% -51px)',
            p: '10px 30px 100px',
            bgcolor: 'background.paper',
          }}
        >
          {/* 타이틀 */}
          <Typography varient="h2" color="common.black" sx={{ fontSize: 24, mb: '20px' }}>
            {`${currentMenu?.menuNm}`}
          </Typography>

          {/* 컨텐츠 */}
          <Outlet context={{}} />
        </Box>
      </Box>
    </Container>
  );
}

PageLayout.propTyes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default observer(PageLayout);
