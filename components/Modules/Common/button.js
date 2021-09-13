import { Button, withStyles } from "@material-ui/core";

export const PrimaryButton = withStyles({
    root: {
        background: '#5179FE',
        border: 'none',
        marginRight: '10px',
        height: '35px',
         width: '210px'
    },
    label: {
        textTransform: 'capitalize',
        color: 'white',
        letterSpacing: '0.25em!important'
    },
    buttonGroup: {
        width: '25%'
    }
})(Button);

export const SecondaryButton = withStyles({
    root: {
        background: '#F1619B',
        border: 'none',
        marginRight: '10px',
        height: '35px',
         width: '210px'
    },
    label: {
        textTransform: 'capitalize',
        color: 'white',
        letterSpacing: '0.25em!important'
    },
    buttonGroup: {
        width: '25%'
    }
})(Button);

export const WhiteButton = withStyles((props)=>({
    root: {
        background: 'white',
        border: '1px solid #5179FE',
        marginRight: '10px',
        height: '35px',
         width: '210px'
    },
    label: {
        textTransform: 'capitalize',
        color: '#5179FE',
        letterSpacing: '0.25em!important'
    },
}))(Button);
