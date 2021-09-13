import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ListItems(props) {
  const classes = useStyles();
  const {subItems, itemText , ItemIcon}  = props;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Nested List Items
      </ListSubheader>
    }
    className={classes.root}
  >
    <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {
            ItemIcon
          }
        </ListItemIcon>
        <ListItemText primary={itemText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      {
        subItems?.map((item, index) =>{
           return ( <List component="div" key={"listitem"+index} disablePadding>
           <ListItem button className={classes.nested}>
             {item?.icon && 
               <ListItemIcon>
               {item?.icon}
             </ListItemIcon>
              }
             <ListItemText primary="Starred" />
           </ListItem>
         </List>);
        })
      }
     
    </Collapse>
  </List>
  );
}
