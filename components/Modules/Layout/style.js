import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    header: {
        backgroundColor: "#477ad0",
        position: 'inherit'
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#5179FE",
        textAlign: "center",
        width: '25%',
        fontSize: 'xx-large',
    },
    linkButton: {
        marginRight: '20px', 
        color: '#fff', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        fontSize: '16px', 
        lineHeight: '16px',
        textDecoration : 'none'
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
        top: '52px'
    },
    buttonGroup : {
        display :'flex',
        justifyContent : 'flex-end'
    },
    selectedLink : {
        borderBottom: '3px solid',
        paddingBottom: '6px',
        marginRight: '20px', 
        color: '#fff', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        fontSize: '16px', 
        lineHeight: '16px'
    }
}));
