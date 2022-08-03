import React from 'react';

import { useStore } from 'store';
import { observer } from 'mobx-react-lite';
import { Box, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Blind } from 'components';
import { Scrollbars } from 'react-custom-scrollbars-2';

import _ from 'lodash';

function LeftMenu() {
  const { menus } = useStore('viewStore');

  const handleClickMenu = (menu) => {};

  return (
    <Box
      component="aside"
      sx={{
        height: '100%',
        // borderRight: ({ palette }) => `1px solid ${palette.border.main}`,
        borderRight: '1px solid',
      }}
    >
      <Blind>사이드바영역</Blind>

      <List
        sx={{ width: 240, height: '100%' }}
        component="div"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="h4"
            id="nested-list-subheader"
            disableSticky
            sx={{
              height: 71,
              lineHeight: '71px',
              fontSize: '28px',
              color: 'common.white',
              bgcolor: 'primary.main',
              textAlign: 'center',
              m: 0,
            }}
          >
            {'메인'}
          </ListSubheader>
        }
      >
        <Scrollbars autoHide style={{ height: 'calc(100% - 71px' }}>
          {_.map(menus, (parentMenu) => {
            const { menuNm, menuId, isActive, children } = parentMenu;
            const hasChildren = !_.isEmpty(children);

            return (
              <React.Fragment key={`left-menu-${menuId}`}>
                <ListItemButton
                  sx={{
                    height: 54,
                    pl: '25px',
                    pr: '20px',
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: 'action.hover',
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                      bgcolor: 'transparent',
                    },
                  }}
                  divider={!isActive}
                  selected={isActive}
                  //TODO : 이벤트 만들기
                  onClick={() => handleClickMenu(parentMenu)}
                >
                  <ListItemText
                    primary={menuNm}
                    primaryTypographyProps={{
                      variant: 'h4',
                      color: isActive ? 'action.selected' : 'common.black',
                      sx: {
                        fontSize: 16,
                        overflowWrap: 'break-word',
                      },
                    }}
                  />
                </ListItemButton>
              </React.Fragment>
            );
          })}
        </Scrollbars>
      </List>
    </Box>
  );
}

export default observer(LeftMenu);
