import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    header: {
        backgroundColor: "#FFFFFF",
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
        color: '#71747F', 
        fontStyle: 'normal', 
        fontWeight: '500', 
        fontSize: '16px', 
        lineHeight: '16px'
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
        textAlign: 'center',
        top: '52px'
    },
    buttonGroup : {
        display :'flex'
    }
}));
