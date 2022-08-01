import React from "react";

import { useStore } from "store";

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Blind } from "components";
import { Scrollbars } from "react-custom-scrollbars-2";

import _ from "lodash";

function LeftMenu() {
  const menuList = [
    {
      name: "회원관리",
      menuId: "0000",
      path: "userMng/view",
    },
    {
      name: "관리자관리",
      menuId: "0100",
      path: "adminMng/view",
    },
    {
      name: "메일관리",
      menuId: "0200",
      path: "mailMng/view",
    },
  ];

  return (
    <Box
      component="aside"
      sx={{
        height: "100%",
        // borderRight: ({ palette }) => `1px solid ${palette.border.main}`,
        // borderRight: "1px solid",
      }}
    >
      <Blind>사이드바영역</Blind>

      <List
        sx={{ width: 240, height: "100%" }}
        component="div"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="h4"
            id="nested-list-subheader"
            disableSticky
            sx={{
              height: 71,
              lineHeight: "71px",
              fontSize: "28px",
              color: "common.white",
              bgcolor: "primary.main",
              textAlign: "center",
              m: 0,
            }}
          >
            {"메인"}
          </ListSubheader>
        }
      >
        <Scrollbars autoHide style={{ height: "calc(100% - 71px" }}>
          {_.map(menuList, (menu) => {
            const { name, menuId, path } = menu;

            return (
              <React.Fragment key={`left-menu-${menuId}`}>
                <ListItemButton
                  sx={{
                    height: 54,
                    pl: "25px",
                    pr: "20px",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "action.hover",
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                  divider={false}
                  selected={true}
                >
                  <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                      variant: "h4",
                      color: "common.black",
                      sx: {
                        fontSize: 16,
                        overflowWrap: "break-word",
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

export default LeftMenu;
