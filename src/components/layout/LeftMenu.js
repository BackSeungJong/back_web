import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { useStore } from 'store';
import { Blind } from 'components';

import _ from 'lodash';
import { Box, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars-2';

function LeftMenu() {
  const { menus, onClickMenu } = useStore('viewStore');
  const navigate = useNavigate();

  const handleClickMenu = (menu) => {
    const { linkUri } = menu;
    navigate(linkUri);
  };

  return (
    <Box
      component="aside"
      sx={{
        height: '100%',
        // borderRight: ({ palette }) => `1px solid ${palette.border.main}`,
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
            {'메뉴'}
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
