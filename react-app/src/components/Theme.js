import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff1b4", // Replace with primary color from the site
    },
    secondary: {
      main: "#fb6c45", // Replace with secondary color from the site
    },
    background: {
      default: "#f0f0f0", // Match the background color
    },
  },
  typography: {
    fontFamily: "s", // Use Google fonts or site fonts
    h1: { fontSize: "2rem", fontWeight: "bold" }, // Customize headings based on site
    h2: { fontSize: "1.5rem", fontWeight: "medium" },
    // Add additional typography customization based on site
  },
  spacing: 8, // Default or modify based on site spacing
});
const inputStyle = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                border: '1px solid #fb6c45',

              },
              '& focus': {
                border: '1px solid #000',
              },
              '& hover': {
                border: '1px solid #000',
              },
            },
          ],
        },
      },
    },
  },
});
export default theme;
