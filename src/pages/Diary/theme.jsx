import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
});

theme = createTheme(theme, {
  summaryListMargin: {
    marginTop: '20px',
  },
  palette: {
    primary: {
      main: '#fc842d', //колір фокусу інпутів
      stroke: '#E0E0E0',
    },
    text: {
      primary: '#9B9FAA', // колір основного тексту, ліній, чекбоксів
      secondary: '#9B9FAA', //колір плейсхолдерів
    },
    button: {
      main: '#fc842d', //колір кнопки
      contrastText: '#ffffff', //колір тексту
    },
  },
  typography: {
    fontFamily: ['Verdana', 'sans-serif'].join(','), //основний шрифт
    fontWeightBold: 700,
    title1: {
      //кастомний стиль заголовка калькулятора
      fontSize: 18,
      lineHeight: 1.44,
      letterSpacing: 'normal',
      color: '#212121',
      [theme.breakpoints.up('mobile')]: {
        fontSize: 34,
        lineHeight: 1.2,
      },
    },
    title3: {
      //кастомний стиль підзаголовків калькулятора
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: '0.04em',
      color: '#212121',
    },
    body1: {
      fontSize: 14, //основний розмір текста
      lineHeight: 1.2,
      letterSpacing: '0.04em',
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.04em',
    },
  },
});
