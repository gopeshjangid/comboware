import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary : {
     main : '#0A65F'
    },
    secondary : {
     main : '#3699FF'
    },
    danger : {
     main : '#F64E60'
    },
    text: {
      primary: '#0A65F',
      secondary: 'red'
    },
    borderColor : '#d0d0e9 !important'
  },
});

export default theme;