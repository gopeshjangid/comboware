import React , {useEffect ,useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={20} variant="filled" {...props} />;
}
export default function PositionedSnackbar(prop) {
  const {message ,type ,open}  = prop;
  const [openPoup , setPopup]  =useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setPopup(false);
  };

  useEffect(() =>{
    setPopup(open);
  },[open])
  return (
      <Snackbar
        anchorOrigin={{ vertical : 'top', horizontal : 'right' }}
        open={openPoup}
        autoHideDuration={5000}
        key={"top" + "right"}
        onClose={handleClose}
      >
      <Alert onClose={handleClose} severity={type || "success"}>
          {message}
        </Alert>
      </Snackbar>
  );
}
