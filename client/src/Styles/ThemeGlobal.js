import { createTheme } from '@mui/material/styles';

const globalFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e0e1dd',
      dark: '#CACBC8',
      light: '#FCFFF1',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fefffb',
      paper: '#989897',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D8D6D6',
    },
  },

  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#BBBBBB',
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontWeight: '800',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '&.designTitle': {
            backgroundColor: '#BBBBBB',
            borderRadius: '5px',
          },
        },
      },
    },
  },
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e0e1dd',
      dark: '#80817f',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0d1b2a',
    },
    text: {
      primary: '#f1f1ed',
      secondary: 'rgba(197,197,199,0.6)',
    },
  },
});

export const AppBarButtonsStyleLight = {
  backgroundColor: 'transparent',
  color: '#0D1B2A',
};

export const AppBarButtonsStyleDark = {
  backgroundColor: 'transparent',

  color: '#E0E1DD',
};