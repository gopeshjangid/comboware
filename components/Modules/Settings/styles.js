import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
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
  boxModal : {
    padding : 30,
    borderColor : '#e7e9f0',
    borderStyle: 'solid',
    paddingTop : 16,
},
}));