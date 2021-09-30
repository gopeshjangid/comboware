import React ,{useEffect,useState} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {connect } from "react-redux";
import {sendMessage , getAllMessages , getLatestMessage } from  "../Modules/Support/redux/action";

function App({sendMessage = ()=>{} ,getAllMessages,getLatestMessage,latestMessage , messageList}) {
  const [chat , setChat] = useState(null);
  useEffect(() => {
    addResponseMessage('Welcome to comboware support!');
    // const interval = setInterval(()=>{
    //   //getLatestMessage(`?chatId=${chat?.chat_id}&userId=0`)
    // },2000);

    return ()=>{
      //clearInterval(interval);
    }
  }, []);

  useEffect(() =>{
    addResponseMessage(latestMessage||'');
    if(!chat){
      setChat({chat_id : latestMessage?.chat_id ,userId :0})
    }
  },[latestMessage])

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    sendMessage({...chat, message : newMessage})
    // Now send the message throught the backend API
   // addResponseMessage(response);
  };

  return (
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        //profileAvatar={logo}
          title="Welcome to comboware"
          subtitle="Ask your queries here"
          autofocus={true}
          sendButtonAlt={true}
          resizable={true}
          emojis={true}
      />
  );
}

export default connect((state) =>({...state?.support}), {getAllMessages, getLatestMessage , sendMessage})(App);