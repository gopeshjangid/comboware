import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button, withStyles, Box  ,Grid} from "@material-ui/core";
import useStyles from './style';
import { PrimaryButton, WhiteButton } from '../Common/button';
import {useRouter} from  "next/router";
import HomeLogo from  "../../../assets/img/comboware-home-logo.png";
const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Company",
        href: "/company",
    },
    {
        label: "Combostack",
        href: "/combostack",
    },
    {
        label: "EngineerO",
        href: "/#",
    },{
        label: "Program",
        href: "/#",
    },{
        label: "Service",
        href: "/#",
    },
    {
        label: "Contact Us",
        href: "/#",
    },
];

const contactInfo = [
    {
        label: "+886-2-8773-0263",
        href: "/#",
    },
    {
        label: "sales@comboware.com.tw",
        href: "/#",
    }
]

export const GetMenuButtons = ({flag, contackLink}) => {
    const {  linkButton, linkButtonColor ,selectedLink } = useStyles();
    const classNames = flag ? linkButtonColor : linkButton;
    const linkArray = contackLink ? contactInfo: headersData;
    const router = useRouter();
    const {pathname} = router;
    console.log("router" ,router)
    return linkArray.map(({ label, href }) => {
        return (
            <Link
                className={pathname === href ? selectedLink : classNames}
                component="button"
                key={label}
                variant="body2"
                onClick={() => {
                   router.push(href);
                }}
            >
                {label}
            </Link>
        );
    });
};

export default function Header() {

    const { header, logo, ToolbarHeight, menuButton, buttonGroup,buttons } = useStyles();

    const router = useRouter();

    

    return (
        <AppBar className={header}>
            <Toolbar className={ToolbarHeight}>
                <Grid container spacing={1} justify="space-between" alignContent="center" alignItems="center">
                  <Grid item xs={12} sm={6}>
                     <img className={logo} src={HomeLogo} width ="300" height="50" />
                 </Grid>
                 <Grid item xs={12} sm={6} style={{textAlign : 'right'}}>
                    <Box className={buttonGroup}>
                        <WhiteButton className={buttons} onClick={()=>router.push("/login/customer")} variant="outlined">
                        CUSTOMER LOGIN
                        </WhiteButton>
                        <WhiteButton className={buttons} onClick={()=>router.push("/login/engineer")} variant="outlined">
                        ENGINEER  LOGIN
                        </WhiteButton>
                    </Box>
                 </Grid>
                 <Grid item xs={12}>
                 <Box className={menuButton}>
                    <GetMenuButtons />
                </Box>
                 </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}