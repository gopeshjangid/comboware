import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Button from "components/CustomButtons/Button.js";
import useWindowSize from "components/Hooks/useWindowSize.js";
import { useRouter } from "next/router";
import styles from "assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js";
import { logoutUser } from "../Modules/Profile/redux/action";
import { connect } from "react-redux";
import { IconButton } from "@mui/material";

function AdminNavbarLinks({
  logout,
  isMobile,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
}) {
  const size = useWindowSize();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const router = useRouter();
  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = (event) => {
    event.preventDefault();
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const openProfileDashboard = (e) => {
    e.preventDefault();
    router.push("/dashboard/profile");
  };

  const Logout = () => {
    let userType = localStorage.getItem("userType");

    logout("");
    if (userType === "ADMIN") {
      router.push("/admin-login");
    } else if (userType === "ER") {
      router.push("/login/engineer");
    } else {
      router.push("/login/customer");
    }

    localStorage.removeItem("userId");
  };

  const settingsClick = (e) => {
    e.preventDefault();
    router.push("/settings");
  };
  const getNotification = () => {
    return (
      <div className={classes.manager}>
        <IconButton
          onClick={handleClickNotification}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>5</span>
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </IconButton>
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      You{"'"}re now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    );
  };

  const getProfileLinks = () => {
    return (
      <div className={classes.manager}>
        <IconButton onClick={handleClickProfile} className={classes.buttonLink}>
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "left top" : "left  bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={openProfileDashboard}
                      className={classes.dropdownItem}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={settingsClick}
                      className={classes.dropdownItem}
                    >
                      Settings
                    </MenuItem>
                    <Divider light />
                    <MenuItem onClick={Logout} className={classes.dropdownItem}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    );
  };

  if (isMobile) {
    return (
      <>
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          {/* <MenuItem>{getNotification()}</MenuItem> */}
          <MenuItem>
            <IconButton
              onClick={handleClickProfile}
              className={classes.buttonLink}
            >
              <Person className={classes.icons} />
              <p className={classes.linkText}>Profile</p>
            </IconButton>

            <Menu
              open={Boolean(openProfile)}
              anchorEl={openProfile}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              id={mobileMenuId}
              keepMounted
              onClose={handleCloseProfile}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              role="menu"
            >
              <MenuItem
                onClick={openProfileDashboard}
                className={classes.dropdownItem}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={settingsClick}
                className={classes.dropdownItem}
              >
                Settings
              </MenuItem>
              <Divider light />
              <MenuItem onClick={Logout} className={classes.dropdownItem}>
                Logout
              </MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </>
    );
  }
  return (
    <div className={classes.LinksList}>
      {/* {getNotification()} */}
      {getProfileLinks()}
    </div>
  );
}

export default connect(null, { logout: logoutUser })(AdminNavbarLinks);
