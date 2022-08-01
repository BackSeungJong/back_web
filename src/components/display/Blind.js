import { Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

function Blind({ children }) {
  return <Box sx={visuallyHidden}>{children}</Box>;
}

export default Blind;
