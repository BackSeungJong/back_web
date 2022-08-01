import { Box } from "@mui/material";
import { Blind } from "components";

export function LeftMenu({ menuList }) {
  return (
    <Box
      component="aside"
      sx={{
        height: "100%",
        borderRight: ({ palette }) => `1px solid ${palette.border.main}`,
      }}
    >
      <Blind>사이드바영역</Blind>
    </Box>
  );
}
