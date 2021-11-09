import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';


export default function DataWrapper(props) {
  const [state, setState] = React.useState(false);
  const {getData, isLazy}  = props;

  React.useEffect(()=>{
    if(!isLazy){
      getData();
    }
    
  },[]);

  React.useEffect(()=>{
    if(isLazy){
      getData();
    }
    
  },[isLazy]);

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
