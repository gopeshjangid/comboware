import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { TextInput } from "./input";
import { MessageLeft, MessageRight } from "./Message";
import CloseIcon from "@material-ui/icons/Close";
import "./style.css";
import { sendMessage, getAllMessages, getLatestMessage } from "../redux/action";
import { connect } from "react-redux";
const useStyles = makeStyles(() =>
  createStyles({
    chatIcon: {
      cursor: "pointer",
      background: "#3f51b5",
      bottom: 32,
      borderRadius: "100%",
      boxShadow: "rgb(0 0 0 / 15%) 0px 12px 24px 0px",
      display: "flex",
      height: 56,
      justifyContent: "center",
      width: 53,
      alignItems: "center",
      transform: "scale(1)",
      transition: "transform 0.3s ease 0s",
    },
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "fixed",
      right: 10,
      bottom :5,
      zIndex : 99999,
      margin: "0 auto",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "50%",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      height: "calc( 100% - 80px )",
      maxHeight: 466,
      overflowY: "auto",
    },
    topbar: {
      display: "flex",
      justifyContent: "space-between",
      width: "95%",
      paddingRight: 16,
      paddingTop: 10,
      cursor: "pointer",
      background: "#3f51b5",
      alignItems: "center",
      paddingBottom: 10,
      paddingLeft: 10,
    },
    title: {
      color: "white",
      width  :'97%'
    },
  })
);

const questions = [
  { type: "name", text: "What is your name ?" },
  { type: "email", text: "What is your email ?" },
  { type: "help", text: "How may i help you ?" },
];

const ChatApp = React.memo(function App({
  sendMessage,
  getAllMessages,
  getLatestMessage,
  chat,
  profile,
  customerName,
  chatId,
  open,
  setOpen
}) {
  const classes = useStyles();
  const [messages, setMessages] = useState([
    { id: "start", text: "Welcome to comboware", userType: "admin" },
  ]);
  const [botQuestion, setBotQuestion] = useState(-1);
 
  const [questionUser, setCurrentQuestionUser] = useState("admin");

  const BodyRef = React.createRef();

  const [isTyping, setTyping] = useState(false);
  const scrollBox = () => {
    var div = document.getElementById("chatBox");
    if(div){
      div.scrollTop = div.scrollHeight - div.clientHeight;
    }


   let ele = BodyRef.current; 
   if(ele){
    ele.scrollTop = ele.scrollHeight - ele.clientHeight;
    BodyRef.current.scrollIntoView({ behavior: 'smooth' });
   }
    
  };
  const addMessage = (msg, isBot, interval) => {
    if (isBot) {
      setTyping(true);
    }

    setTimeout(() => {
      setTyping(false);
      let _msg = [...messages, msg];
      setMessages(_msg);
      scrollBox();
    }, interval);
  };

 
  const sendBotMessage = (question) => {
    let answer = "";
    if (question === 0) {
      answer = {
        message: "What is your name? ",
        chat_id: chatId,
        sender_id: 0,
        sender_name: profile?.first_name,
      };
    } else if (question === 1) {
      answer = {
        message: "What is your email? ",
        chat_id: chatId,
        sender_id: 0,
        sender_name: profile?.first_name,
      };
    } else if (question === 2) {
      answer = {
        message: "How may i help you ? ",
        chat_id: chatId,
        sender_id: 0,
        sender_name: profile?.first_name,
      };
    }
    scrollBox();
    sendMessage(answer);
  };

  useEffect(() => {
    if (questionUser === "user" && botQuestion < 2) {
      let index = botQuestion + 1;
      addMessage(
        { id: "start", text: questions[index]?.text, userType: "admin" },
        true,
        2000
      );
      setBotQuestion(index);
      setCurrentQuestionUser("admin");
      sendBotMessage(index);
      scrollBox();
    }
    //();
  }, [questionUser]);

  useEffect(() => {
  scrollBox();
  },[messages])


  useEffect(() => {
    if (chat?.messageList.length) {
      scrollBox();
      let list = chat?.messageList
        ?.map((msg) => {
          msg.userType =
            msg?.sender_id === Number(localStorage.getItem("userId"))
              ? "user"
              : "admin";
          msg.text = msg?.message;
          return msg;
        })
        .sort((a, b) => a.id - b.id);
      setMessages(list);
      scrollBox();
      setBotQuestion(list?.length - 1);
      scrollBox();
      
    }
  }, [chat?.messageList]);

  const sendNewMessage = (text) => {
    scrollBox();
    let _msg = [...messages, { id: "start", text: text, userType: "user" }];
    setMessages(_msg);
    //setCurrentQuestionUser("user");
    let answer = {
      message: text,
      chat_id: chatId,
      sender_id: localStorage.getItem("userId"),
      sender_name: profile?.first_name,
    };

    sendMessage(answer);
  };

  
  return (
    <div className={classes.container}>
      {open && (
        <Paper className={classes.paper} zDepth={2}>
            <div className={classes.topbar}>
             <Typography onClick={()=>setOpen(false)} className={classes.title}>Reply to {  sessionStorage.getItem("selectedUser")}</Typography> <CloseIcon onClick={()=>setOpen(false)} style={{color : 'white'}} />
          </div>
          <Paper ref={BodyRef} elevation={0} id="chatBox" className={classes.messagesBody}>
            {messages?.map((msg, index) => {
              return msg?.userType === "admin" ? (
                <MessageLeft
                  message={msg?.text}
                  timestamp={msg?.chat_date_time}
                  photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                  displayName={msg?.sender_name}
                  avatarDisp={true}
                  key={"msg" + index}
                />
              ) : (
                <MessageRight
                  message={msg?.text}
                  timestamp={msg?.chat_date_time}
                  photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                  displayName={
                    msg?.sender_id === profile?.id ? "You" : profile?.first_name
                  }
                  avatarDisp={true}
                />
              );
            })}
            {isTyping && (
              <div className="typing">
                <div className="typing__dot"></div>
                <div className="typing__dot"></div>
                <div className="typing__dot"></div>
              </div>
            )}
          </Paper>
          <TextInput botQuestion={botQuestion} sendMessage={sendNewMessage} />
        </Paper>
      )}
    </div>
  );
})

export default connect(
  (state) => {
    return { chat: state?.support, profile: state?.user?.profile };
  },
  { sendMessage, getAllMessages, getLatestMessage }
)(ChatApp);
