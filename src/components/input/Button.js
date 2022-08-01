import MuiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useMemo } from "react";
import { PropTypes } from "@mui/material";

// 버튼 그룹
export function ButtonGroup({ children, direction, sx, ...rest }) {
  const justifyContent = useMemo(() => {
    switch (direction) {
      case "right":
        return "flex-end";
      case "center":
        return "center";
      default:
        return "flex-start;";
    }
  });

  return (
    <Stack
      direction="row"
      justifyContent={justifyContent}
      alignItems="flex-start"
      spacing={3}
      sx={{ flex: 1, ...sx }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
    </Stack>
  );
}
