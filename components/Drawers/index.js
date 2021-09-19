import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';


export default function Drawers(props) {
  const [state, setState] = React.useState(false);
React.useEffect(()=>{
  setState(props?.open);
},[props?.open])

const onClose = () =>{
  if(props.onClose){
    props.onClose(false);
  }
  setState(false);
}

  return (
    
          <Drawer
            open={state}
            anchor={'right'}
            onClose={(e)=> onClose()}
          >
            {props.children}
          </Drawer>
     
  );
}
