import { Container, Box } from "@mui/material";
import { values } from "mobx";

const menuList = [
  {
    name: "회원관리",
    path: "userMng/view",
  },
  {
    name: "관리자관리",
    path: "adminMng/view",
  },
  {
    name: "메일관리",
    path: "mailMng/view",
  },
];

export function PageLayout({ className }) {
  return (
    <Container
      id="back-to-top-anchor"
      maxWidth={false}
      className={className}
      sx={{ pt: "64px", height: "100%", minWidth: 1200, overflowY: "hidden" }}
    >
      <Box display="flex" sx={{ height: "100%" }}>
        {/* 좌측 메뉴 */}
        {values(menuList).length ? <LeftMenu menuList={menuList} /> : null}
      </Box>
    </Container>
  );
}
