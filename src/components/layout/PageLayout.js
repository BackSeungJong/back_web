import { Container, Box, ButtonGroup, ListItemButton } from "@mui/material";
import { values } from "mobx";
import { LeftMenu } from "components";
import { observer } from "mobx-react-lite";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// TODO : LeftMenu로 변경해야함
import React from "react";
import _ from "lodash";
import { Scrollbars } from "react-custom-scrollbars-2";

function PageLayout({ className }) {
  return (
    <Container
      id="back-to-top-anchor"
      maxWidth={false}
      className={className}
      sx={{ pt: "64px", height: "100%", minWidth: 1200, overflowY: "hidden" }}
    >
      <Box display="flex" sx={{ height: "100%" }}>
        {/* 좌측 메뉴 */}
        <LeftMenu />
        <Scrollbars>
          <Box
            component="main"
            sx={{
              minHeight: "calc(100% - 51px)",
              p: "10px 30px 100px",
              bgcolor: "background.paper",
            }}
          ></Box>
        </Scrollbars>
      </Box>
    </Container>
  );
}

export default observer(PageLayout);
