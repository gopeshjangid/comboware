/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Loader from  "components/Loader/circular";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";
import {useSelector} from "react-redux";
export default function Sidebar(props) {
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
     return router.route.indexOf(routeName) > -1 ? true : false;
  }
  const [open, setOpen] = React.useState(true);
  const userInfo  = useSelector(state =>state?.user?.profile);
  const {user_type}  =  userInfo;
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  const { color, logo, image, logoText, routes } = props;

  var links = (
    <List className={classes.list}>
      {routes?.filter(route =>route?.accessors?.indexOf(user_type) > -1)?.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path),
          });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]:
            activeRoute(prop.layout + prop.path) ||
            prop.path === "/upgrade-to-pro",
        });
        let subItems = prop?.subItems;

        return (
          <Link href={!subItems ?  prop.layout + prop.path : "#"} key={key}>
            <a className={activePro + classes.item}>
              <ListItem button style={{background : activeRoute(prop.layout) &&'#ebf6f7'}}  className={classes.itemLink } onClick={(e)=> subItems  ? handleClick(e) : ''}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />
                )}
                <ListItemText
                  className={classNames(classes.itemText, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  disableTypography={true}
                >
                <div className={classes.collapseIcon}><span>{props.rtlActive ? prop.rtlName : prop.name}</span>
                &nbsp;&nbsp;
                {subItems?.length && (router.route.indexOf(prop.layout + prop.path) > -1 || open ? <ExpandLess  /> : <ExpandMore  />)}
                </div>
                {subItems?.length && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    {subItems?.map((item, index) => {
                      let Icon = item?.icon;
                      return (
                        <Link href={item?.path} key={key}>
                        <a className={activePro + classes.item}>
                        <List
                          component="div"
                          key={"listitem" + index}
                          disablePadding
                        >
                          <ListItem button className={classes.nested+listItemClasses}>
                            {item?.icon && (
                              <ListItemIcon style={{color : 'white'}}>{<Icon />}</ListItemIcon>
                            )}
                            <ListItemText primary={item?.name} />
                          </ListItem>
                        </List>
                        </a>
                      </Link>
                      );
                    })}
                  </Collapse>
                )}
                </ListItemText>
              </ListItem>
            </a>
          </Link>
        );
      })}
    </List>
  );
  
  return (
    <React.Fragment>
       <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={props?.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
         <div className={classes.sidebarWrapper}>{!user_type ? <Loader/> :  links}</div>
        
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={"left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          <div style={{margin: '0 auto'}}>{!user_type ? <Loader/> : ''}</div>
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
    "white",
    "purple",
    "blue",
    "green",
    "orange",
    "red",
  ]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
