import { PaletteMode, Theme } from '@mui/material';

export const getThemeOptions = (mode: PaletteMode) => {
  const lightColor = '58, 53, 65';
  const darkColor = '231, 227, 252';
  const mainColor = mode === 'light' ? lightColor : darkColor;

  return {
    palette: {
      mode,
      primary: {
        light: '#eef2f6',
        main: '#2196f3',
        dark: '#1e88e5',
      },
      secondary: {
        light: '#ede7f6',
        main: '#673ab7',
        dark: '#5e35b1',
      },
      success: {
        light: '#b9f6ca',
        main: '#00e676',
        dark: '#00c853',
      },
      error: {
        light: '#ef9a9a',
        main: '#f44336',
        dark: '#c62828',
      },
      warning: {
        light: '#fff8e1',
        main: '#ffe57f',
        dark: '#ffc107',
      },
      info: {
        light: '#32BAFF',
        main: '#16B1FF',
        dark: '#139CE0',
      },
      grey: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#D5D5D5',
        A200: '#AAAAAA',
        A400: '#616161',
        A700: '#303030',
      },
      text: {
        primary: `rgba(${mainColor}, 0.87)`,
        secondary: `rgba(${mainColor}, 0.68)`,
        disabled: `rgba(${mainColor}, 0.38)`,
      },
      divider: `rgba(${mainColor}, 0.12)`,
      background: {
        paper: mode === 'light' ? '#ffffff' : '#1a223f',
        default: mode === 'light' ? '#ffffff' : '#111936',
      },
      action: {
        active: `rgba(${mainColor}, 0.54)`,
        hover: `rgba(${mainColor}, 0.04)`,
        selected: `rgba(${mainColor}, 0.08)`,
        disabled: `rgba(${mainColor}, 0.3)`,
        disabledBackground: `rgba(${mainColor}, 0.18)`,
        focus: `rgba(${mainColor}, 0.12)`,
      },
    },
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
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
      ].join(','),
    },
    shape: {
      borderRadius: 8,
    },
  };
};

export const getTypography = (theme: Theme) => ({
  h1: {
    fontSize: 60,
    fontWeight: 600,
    lineHeight: 78 / 70,
    letterSpacing: -0.2,
    color: theme.palette.text.primary,
  },
  h2: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
  },
  h3: {
    fontSize: 42,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
  },
  h4: {
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 1.5,
    color: theme.palette.text.primary,
  },
  h5: {
    fontSize: 20,
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  h6: {
    fontSize: 18,
    color: theme.palette.text.primary,
  },
  subtitle1: {
    fontSize: 18,
    color: theme.palette.text.primary,
  },
  subtitle2: {
    fontSize: 16,
    color: theme.palette.text.secondary,
  },
  body1: {
    fontWeight: 400,
    fontSize: 15,
    color: theme.palette.text.primary,
  },
  body2: {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  caption: {
    fontWeight: 400,
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
});
