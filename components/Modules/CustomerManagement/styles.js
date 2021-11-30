import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  firstBox: {
      backgroundColor: '#1853F9',
  },
  firstLeftBox: {
      width: '65%',
      marginLeft: '20%'
  },
  firstLeftBoxHeading: {
      color: 'white',
      fontSize: '75px',
      fontWeight: 'bold'
  },
  gridRow : {
      display : 'flex',
      justifyContent : 'space-between'
  },
  fieldset : {
    padding : 30,
    borderColor : theme?.palette?.borderColor,
    borderStyle: 'solid',
    paddingTop : 16,
    borderWidth : 1
},
}));