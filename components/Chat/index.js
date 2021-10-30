import React ,{useState ,useEffect} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper ,Typography } from "@material-ui/core";
import { TextInput } from "./input";
import { MessageLeft, MessageRight } from "./Message";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CloseIcon from '@material-ui/icons/Close';
import "./style.css";
import  {sendMessage , getAllMessages , getLatestMessage} from  "../Modules/Support/redux/action";
import  {connect} from  "react-redux";
const useStyles = makeStyles(() =>
  createStyles({
    chatIcon : {
      cursor: 'pointer',
      background: '#3f51b5',
      bottom: 32,
      borderRadius: '100%',
      boxShadow: 'rgb(0 0 0 / 15%) 0px 12px 24px 0px',
      display: 'flex',
      height: 56,
      justifyContent: 'center',
      width: 53,
      alignItems: 'center',
      transform: 'scale(1)',
      transition: 'transform 0.3s ease 0s'
    },
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      margin : '0 auto'
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      position: 'fixed',
      right: 5,
      bottom: 10,
      zIndex: 999,
      boxShadow: 'rgb(0 0 0 / 15%) 0px 12px 24px 0px',
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      height: "calc( 100% - 80px )",
      maxHeight : 466,
      overflowY : 'auto'
    },
    topbar : {
      display: 'flex',
      "justifyContent"  :'space-between',
      width: '97%',
      paddingRight: 16,
      paddingTop: 10,
      cursor: 'pointer',
      background: '#3f51b5',
      alignItems: 'center',
      paddingBottom: 10,
      paddingLeft : 10
    },
    title : {
      color : 'white'
    }
  })
);

const questions = [
  {type : "name" ,text : "What is your name ?"},
  {type : "email" ,text : "What is your email ?"},
  {type : "help", text : "How may i help you ?"}
];

function App({sendMessage , getAllMessages , getLatestMessage ,chat}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{id : "start" ,text : "Welcome to comboware" ,userType : 'admin'} ]);
  const [botQuestion, setBotQuestion] = useState(-1);
  const [questionUser, setCurrentQuestionUser] = useState("admin");
  const [isTyping, setTyping] = useState(false);

  const scrollBox = () =>{
    var div = document.getElementById("chatBox");
    if(div){
     div.scrollTop = div.scrollHeight - div.clientHeight;
    } 
  }
  const addMessage = (msg,isBot ,interval) =>{
    

    if(isBot){
      setTyping(true);
    }
    
    setTimeout(()=>{
      setTyping(false);
      scrollBox();
      let _msg = [...messages ,msg];
      setMessages(_msg);
     
    },interval)
  }
  useEffect(()=>{
    if((!localStorage.getItem("chatId") || !Number(localStorage.getItem("chatId"))) && chat?.chat_id){
      localStorage.setItem("chatId" ,chat?.chat_id)
    }
  },[chat?.chat_id]);

  const sendBotMessage = (question) =>{
    let answer = "";
    if(question===0){
      answer = {message : "What is your name? ",chat_id : chat?.chat_id, sender_id : 0 }
     } else if(question===1){
       answer = {message : "What is your email? ",chat_id : chat?.chat_id, sender_id : 0}
      } else if(question===2){
       answer = {message : "How may i help you ? ",chat_id : chat?.chat_id, sender_id : 0 }
      } 
      scrollBox();
      sendMessage(answer)
  }


  useEffect(()=>{
    if(open && chat?.messageList.length === 0){
      addMessage({id : "start" ,text : "What is your name ?" ,userType : 'admin'} ,true, 2000);
      setBotQuestion(0);
      setCurrentQuestionUser("admin");
      sendBotMessage(0);
    }
    if(!localStorage.getItem("customerId") || Number(localStorage.getItem("customerId")) <= 0){
      localStorage.setItem("customerId" ,Date.now())
    }

    if(localStorage.getItem("customerId") && Number(localStorage.getItem("chatId"))){
      getAllMessages("?chat_id="+localStorage.getItem("chatId"))
    }
    let interval = null;
    if(open){
      interval = setInterval(()=>{
        getAllMessages("?chat_id="+Number(localStorage.getItem("chatId"))+"&userId="+Number(localStorage.getItem("customerId")))
      },3000);
    }

    
      return ()=>{
        clearInterval(interval);
      }
  },[open])

  
  useEffect(()=>{
    
    if(questionUser === 'user' && botQuestion <2){
      let index = botQuestion+1;
      addMessage({id : "start" ,text : questions[index]?.text ,userType : 'admin'} ,true, 2000);
      setBotQuestion(index);
      setCurrentQuestionUser("admin");
      sendBotMessage(index);
    } 

   //();
  },[questionUser])

  useEffect(()=>{
    
  },[])

  useEffect(()=>{
    if(chat?.messageList.length){
      scrollBox();

      let list = chat?.messageList?.map(msg =>{
        msg.userType = msg?.sender_id === Number(localStorage.getItem("customerId")) ? "user" : "admin";
        msg.text = msg?.message ;
        return msg 
      }).sort((a,b) => a.id-b.id);
      setMessages(list)
      setBotQuestion(list?.length-1);
    }
  },[chat?.messageList]);


useEffect(() => {
  // if(messages.length){
  //   var div = document.getElementById("chatBox");
  //   div.scrollTop = div.scrollHeight - div.clientHeight;  
  // }
  // return () => {
    
  // }
}, [messages])
  const sendNewMessage = (text) =>{
   
    let _msg = [...messages ,{id : "start" ,text : text ,userType : 'user'}];
    setMessages(_msg);
    scrollBox();
    setCurrentQuestionUser("user");
    let answer = "";
    if(botQuestion===0){
     answer = {message : "My name is "+text,chat_id : chat?.chat_id, sender_id : localStorage.getItem("customerId") , sender_name : text }
     localStorage.setItem("name" ,text);
    } else if(botQuestion===1){
      answer = {message : "My email is "+text,chat_id : chat?.chat_id, sender_id : localStorage.getItem("customerId"),sender_name : localStorage.getItem("name") }
     } else {
      answer = {message : text,chat_id : chat?.chat_id, sender_id : localStorage.getItem("customerId"),sender_name : localStorage.getItem("name") }
     }
     scrollBox();
     sendMessage(answer)
  
  }

  return (
    <div className={classes.container}>
      {open ? <Paper className={classes.paper} zDepth={2}>
            <div className={classes.topbar}>
             <Typography onClick={()=>setOpen(false)} className={classes.title}>Welcome to comboware support</Typography> <CloseIcon onClick={()=>setOpen(false)} style={{color : 'white'}} />
          </div>
        <Paper elevation={0} id="chatBox" className={classes.messagesBody}>
          
          {messages?.map((msg , index)=>{

            

         return(msg?.userType==='admin'? <MessageLeft
            message={msg?.text}
            timestamp={msg?.chat_date_time}
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
            key={"msg"+index}
          />
         :
          <MessageRight
            message={msg?.text}
            timestamp={msg?.chat_date_time}
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />)
          }
          )}
          {isTyping &&(<div className="typing">
              <div className="typing__dot"></div>
              <div className="typing__dot"></div>
              <div className="typing__dot"></div>
            </div>)
            }
        </Paper>
        <TextInput botQuestion={botQuestion} sendMessage={sendNewMessage} />
      </Paper>
      : 
      <div onClick={()=>setOpen((open) => !open)} className={classes.chatIcon}><ChatBubbleOutlineIcon style={{color : 'white'}} /></div>
  }
    </div>
  );
}

export default connect((state)=>{
  return {chat:state?.support}
} ,{sendMessage , getAllMessages , getLatestMessage})(App)
