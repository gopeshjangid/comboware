import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core";
import ChatWIdget from "./chatWidget";
const useStyles =  makeStyles(() => ({
  date_time : {

  },
  accordion : {
    boxShadow : 'none !important',
    "&:hover" : {
      background : '#79a2c638'
    }
  }
}));

export default function SimpleAccordion({profile}) {
  let classes = useStyles();
  let chatData = [{
    sender_id :122,
    chat_user_id :233,
    message : "hi this new dkshdkahsda",
    date_time : "10/08/2021 12:12:22" 
  },{
    sender_id :122,
    chat_user_id :233,
    message : "hi this new dkshdkahsda",
    date_time : "10/08/2021 12:12:22" 
  }]

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      {chatData?.map((chat,index)=>
      <Accordion className={classes.accordion} expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)} key={"chat-"+index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display='flex' justifyContent='space-between' alignContent='center'>
             <Avatar Ic>H</Avatar><Typography style={{lineHight : 2.5 , marginLeft :20}}>{chat?.message}{"  "}</Typography><Typography className={classes.time}>{' '} &nbsp; {chat?.date_time}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Divider  />
          <ChatWIdget />
        </AccordionDetails>
        
      </Accordion>
      ) || 'No chat found'}
     </div>
  );
}
