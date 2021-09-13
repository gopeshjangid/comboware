import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button, withStyles, Box } from "@material-ui/core";
import useStyles from './style';
import { PrimaryButton, WhiteButton } from '../Common/button';
import {useRouter} from  "next/router";
const headersData = [
    {
        label: "Brand Introduction",
        href: "/#",
    },
    {
        label: "Branded Advantages",
        href: "/#",
    },
    {
        label: "Product Description",
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
    const {  linkButton, linkButtonColor } = useStyles();
    const classNames = flag ? linkButtonColor : linkButton;
    const linkArray = contackLink ? contactInfo: headersData;
    return linkArray.map(({ label, href }) => {
        return (
            <Link
                className={classNames}
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

    const { header, logo, ToolbarHeight, menuButton, buttonGroup } = useStyles();

    const router = useRouter();

    

    return (
        <AppBar className={header}>
            <Toolbar className={ToolbarHeight}>
                <Typography variant="h6" component="h1" className={logo}>
                    COMBOWARE
                </Typography>

                <Box className={menuButton}>
                    <GetMenuButtons />
                </Box>
                <Box className={buttonGroup}>
                    <WhiteButton onClick={()=>router.push("/login/customer")} variant="outlined">
                    CUSTOMER LOGIN
                    </WhiteButton>
                    <PrimaryButton onClick={()=>router.push("/login/engineer")} variant="contained">
                     ENGINEER  LOGIN
                    </PrimaryButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}