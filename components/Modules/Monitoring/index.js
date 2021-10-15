import React, { useState, useEffect,  } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table";
import { getLogs } from "./redux/action";
import { connect, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
function Settings({getLogs}) {
  const reduxState = useSelector((state) => state);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reduxState?.monitoring?.logs);
    return () => {};
  }, [reduxState?.monitoring?.logs]);
console.log("reduxState" ,reduxState)
 const callBack = () =>{

 }

 const getData = () =>{
   return data?.map(log =>{
     return [log?.data]
   })
 }

  useEffect(() => {
    getLogs(callBack);
  }, []);


  return (
    <div>
      <GridContainer spacing={1}>
        <Typography>System Log information</Typography>
        <GridItem xs={12} sm={12} md={12}>
          <Table tableHead={["Details" ,"Date time"]} tableData={getData()}  />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  null,
  { getLogs,}
)(Settings);

