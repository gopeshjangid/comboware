import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary : {
     main : '#0A65FF',
     contrastText : '#fff',
     bg : '#0A65FF',
     light : '#ffffff'
    },
    secondary : {
     main : '#464E5F',
     contrastText : '#fff',
    },
    danger : {
     main : '#F64E60'
    },
    text: {
      primary: '#464E5F',
    },
    typography : {
     
      fontFamily: 'Poppins',
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