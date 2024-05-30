import { green, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const MultiTabTheme = createTheme({
  palette: {
    primary: {
      main: orange[700]
    },
    secondary: {
      main: green[700]
    }
  }
});

export default MultiTabTheme;