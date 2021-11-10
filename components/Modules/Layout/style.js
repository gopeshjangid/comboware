import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    header: {
        backgroundColor: "#477ad0",
        position: 'inherit',
        [theme.breakpoints.down('sm')]: {
            height: '178px',
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#5179FE",
        textAlign: "center",
       
        fontSize: 'xx-large',
        [theme.breakpoints.down('sm')]: {
            marginTop: "75px",
            width: '100%',
          },
    },
    linkButton: {
        marginRight: '20px', 
        color: '#fff', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        fontSize: '16px', 
        lineHeight: '16px',
        textDecoration : 'none',
        '&:hover' : {
            background: 'white',
            color: '#477ad0',
            padding: '6px',
            'text-decoration': 'none',
            'border-radius': '5px'
        },
        [theme.breakpoints.down('sm')]: {
            whiteSpace: 'nowrap',
            
        },
    },
    linkButtonColor: {
        color: 'white', 
        marginRight: '20px', 
        fontStyle: 'normal',
        fontSize: '12px', 
        lineHeight: '16px'
    },
    ToolbarHeight: {
        height:'120px',
    },
    menuButton: {
        width: '50%',
        textAlign: 'left',
        top: '52px',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            overflow: 'auto',
            width: '100%',
            
        },
    },
    buttons : {
        background: 'white',
        border: '1px solid #5179FE',
        marginRight: '10px',
        height: '35px',
         '&:hover' : {
             background : 'white'
         },
         textTransform: 'capitalize',
        color: '#5179FE',
        letterSpacing: '0.25em!important',
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px",
            width : '154px !important'
        },
    },
    buttonGroup : {
        display :'flex',
        justifyContent : 'flex-end',
       
    },
    selectedLink : {
        borderBottom: '5px solid',
        paddingBottom: '6px',
        marginRight: '20px', 
        color: '#fff', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        fontSize: '16px', 
        lineHeight: '16px',
        marginTop :8
    },
    footer : {
      paddingTop: '20px',
      background: 'white',
      height: '600px',
      marginTop : 30
    }
}));
