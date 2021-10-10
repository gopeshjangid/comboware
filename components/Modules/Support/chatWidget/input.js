import React ,{useState,useEffect ,useRef} from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "98%",
        margin: `0 auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {

        position: 'absolute',
        right: 9,
        bottom: 20,
        height: 50
        //margin: theme.spacing(1),
    },
  })
);


export const TextInput = ({sendMessage ,botQuestion}) => {
    const classes = useStyles();
    const [input , setInput] = useState("");
    const [error , setError] = useState("");
    let textInput = useRef(null);
    const onSubmit = (e) =>{
        e.preventDefault();
        if(botQuestion ===1 ){
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!reg.test(input)) {
                setError('Please enter valid email address.');
            }  else {
                sendMessage(input);
                setInput("");
                setError("");
            }
        } else if(input) {
            sendMessage(input);
            setInput("");
        }
       
    }

   

    useEffect(() => {
        textInput.current.focus();

        if (textInput && textInput.current) {
            textInput.current.addEventListener("click" ,function(e){
                onSubmit(e);
            });
          }
        setInput("");
        setError("");
    }, [])

    return (
        <>
         {error && <span style={{color :'red', fontSize :9}}>{error}</span>}
            <div   onClick={onSubmit} className={classes.wrapForm}><TextField
                id="standard-text"
                label="Write new message"
                className={classes.wrapText}
                onChange={(e) =>setInput(e.target.value)}
                value={input}
                error={!!error}
                focused={true}
                variant="outlined"
                onClick={onSubmit}
                inputRef={textInput}
                //margin="normal"
            />
            <Button onClick={onSubmit} variant="contained" color="primary" className={classes.button}>
                <SendIcon />
            </Button>
            </div>
        </>
    )
}



