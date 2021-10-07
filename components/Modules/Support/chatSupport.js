import React , {useState ,useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  IconButton,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import ChatWIdget from "./chatWidget";
import { getAllChats ,getAllMessages } from "./redux/action";
import { connect } from "react-redux";
const useStyles = makeStyles(() => ({
  date_time: {},
  listitem: {
    width: "100%",
    boxShadow: "none !important",
    "&:hover": {
      background: "#79a2c638",
    },
    display: "flex",
    justifyContent: "space-between",
    cursor : 'pointer'
  },
  wrapper: {
    background: "#edf1ef1f",
    width: "100%",
    maxHeight: "80vh",
    overflow: "auto",
  },
  chatContainer: {
    width: "100%",
    height: "100vh",
    paddingBottom  :30,
    marginBottom  :30
  },
  itemText: {
    width: "80%",
  },
}));

function ChatSupport({ profile, getAllChats, chatList,getAllMessages, ...props }) {
  let classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = useState(false);

  

  useEffect(() => {
    let interval = null;
    if (Number(open)) {
      let chatId = open;
      getAllMessages("?chat_id=" + Number(chatId));
      interval = setInterval(() => {
        getAllMessages(
          "?chat_id=" +
            Number(chatId) +
            "&userId=" +
            Number(localStorage.getItem("userId"))
        );
      }, 3000);
    }


    return () => {
      clearInterval(interval);
    };
  }, [open]);

  React.useEffect(() => {
    getAllChats();
    return () => {};
  }, []);

  const openHandler = (value,e , recieverName) =>{
    if(e){
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    console.log("value" ,value)
    sessionStorage.setItem("selectedUser",recieverName);
    setOpen(value);
  
  }
  return (
    <div className={classes.chatContainer}>
      <List className={classes.wrapper}>
        {chatList?.map((chat, index) => (
          <ListItem
         
            className={classes.listitem}
            key={"key--s" + index}
          >
            <ListItemIcon  onClick={(e)=> openHandler(chat?.chat_id,e)}>
              <Avatar />
            </ListItemIcon>
            <ListItemText
               onClick={(e)=> openHandler(chat?.chat_id,e ,chat?.receiver_name)}
              primary={chat?.receiver_name}
              secondary={chat?.sender_id === Number(localStorage.getItem("userId")) ? "You : "+chat?.message:  chat?.sender_name+": "+chat?.message  }
              className={classes.itemText}
            />
            <ChatWIdget
              chatId={chat?.chat_id}
              customerName={chat?.receiver_name || 'Customer'}
              open={open}
              setOpen={openHandler}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state?.support };
  },
  { getAllChats,getAllMessages }
)(ChatSupport);
