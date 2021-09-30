import React, { useState, useEffect, useRef } from "react";
import {  useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import UserSettings from "./user-settings";
import AdminSettings from "./admin-settings";

function Settings() {
  const reduxState = useSelector((state) => state);
  const [userType, setUserType] = useState("");
  const [settings, setSettings] = useState(null);
console.log("reduxState====" ,reduxState)
  useEffect(() => {
    setSettings(reduxState?.settings);
    return () => {};
  }, [reduxState?.settings]);

 

  useEffect(() => {
    setUserType(localStorage.getItem("userType"));
    return () => {};
  }, []);


  return (
    <div>
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
          {userType === "ADMIN" ? (
            <AdminSettings settings={settings} />
          ) : (
            <UserSettings settings={settings} />
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Settings;
