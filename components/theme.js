import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary : {
     main : '#0A65FF',
     contrastText : '#fff',
     bg : '#0A65FF',
     light : '#ffffff',
     backgroundColor : '#F3F6F9',
     buttonBgColor : '#F3F6F9'
    },
    button : {
      main : '#F5F6F9',
      error : {
       default :  '#F64E60',
       hover : ''
      }  

    },
    secondary : {
     main : '#464E5F',
     contrastText : '#fff',
    },
    danger : {
     main : '#F64E60',
     light : '#ef5350'
    },
    success : {
      main : '#2e7d32',
      light : '#4caf50',
      contrastText : '#fff'
    },
    warning : {
     main  :'#ED6C02',
    },
    info : {
     main : '#03a9f4',
     contrastText : '#fff'
    },
    text: {
      primary: '#496064cf',
    },
    typography : {
     
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 600,
      label : {
       color : '#464E5F'
      },
      button : {
        color : '#FFFFFF',
        backgroundColor : '#464E5F',
        fontSize: '12px',
        lineHeight: '18px',
        textTransform : 'none',
      }
    },
    borderColor : '#d0d0e9 !important'
  },
});

export default theme;