import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff1b4',  // Replace with primary color from the site
    },
    secondary: {
      main: '#fb6c45',  // Replace with secondary color from the site
    },
    background: {
      default: '#f0f0f0', // Match the background color
    },
  },
  typography: {
    fontFamily: 's', // Use Google fonts or site fonts
    h1: { fontSize: '2rem', fontWeight: 'bold' }, // Customize headings based on site
    h2: { fontSize: '1.5rem', fontWeight: 'medium' },
    // Add additional typography customization based on site
  },
  spacing: 8, // Default or modify based on site spacing
});

export default theme;
