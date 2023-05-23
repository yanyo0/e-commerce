import { createTheme } from "@mui/material/styles";
import { lightGreen, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[400],
    },
    secondary: {
      light: grey[800],
      main: grey[900],
    },
  },
  typography: {
    nav: {
    fontSize: '40%',
    },
    subtitle2: {
      fontSize: 12,
    },
  },
});

export default theme;
