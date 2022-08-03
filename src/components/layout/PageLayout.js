import { Container, Box, ButtonGroup, ListItemButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Header, LeftMenu } from 'components';
import { observer } from 'mobx-react-lite';

import React, { useEffect } from 'react';
import { useStore } from 'store';
import PropTypes from 'prop-types';

function PageLayout({ className }) {
  const { pathname, key } = useLocation();
  const { viewStore } = useStore();

  return (
    <Container id="back-to-top-anchor" maxWidth={false} className={className} sx={{ pt: '64px', height: '100%', minWidth: 1200, overflowY: 'hidden' }}>
      {/* 상단 메뉴 */}
      <Header />
      <Box display="flex" sx={{ height: '100%' }}>
        {/* 좌측 메뉴 */}
        <LeftMenu />
      </Box>
    </Container>
  );
}

PageLayout.propTyes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default observer(PageLayout);
