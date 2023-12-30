import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors, responsiveFontSizes } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: colors.blue[600],
      },
      secondary: {
        main: colors.purple[600],
      },
    },
  })
);

type ThemeType = {
  children: ReactNode;
};

const Theme = ({ children }: ThemeType) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
