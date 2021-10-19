import React, { useState, useEffect, useRef } from "react";

import { connect, useSelector } from "react-redux";

import { Typography, IconButton, Box } from "@material-ui/core";

import Table from "components/Table/Table";

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Tasks from "components/Tasks/Tasks.js";
import {  website, server } from "variables/general.js";
import BugReport from "@material-ui/icons/Details";
import Code from "@material-ui/icons/SettingsApplications";
import Cloud from "@material-ui/icons/Cloud";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Loader from 'components/Loader/circular';
import { getAllHosts} from "./redux/action";

function hostsListBox({ getAllHosts   ,hostsList ,profile}) {
  const reduxState = useSelector((state) => state);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getHostsDetails = () =>{
    let filtered = hostsList?.map(host => {
      return [host?.hypervisor_hostname ,host?.status ,host?.running_vms]
    }) ;
    return filtered;
  }

  const getHostsMoreDetails = () =>{
    let filtered = hostsList?.map(host => {
      return [host?.hypervisor_hostname ,host?.free_disk_gb ,host?.memory_mb ,(host?.memory_mb-host?.memory_mb_used),host?.vcpus ,(host?.vcpus-host?.vcpus_used) ]
    }) ;
    return filtered;
  }

 

  const hideNotification = (status , message) => {
    setLoading(false);
    if(!status){
      setError(message);
    } else {
      setError('');
    }
  };
 

  useEffect(() => {
    if(hostsList?.length === 0){
      setLoading(true);
      getAllHosts(hideNotification);
    } else {
      setLoading(false);
    }
    
    return () => {
    }
  }, [])

 if(profile?.user_type !== 'ADMIN'){
  return null;
 }

  return (
    <div>
       <CustomTabs
            title="Hypervisors:"
            headerColor="dark"
            tabs={[
              {
                tabName: "Info",
                tabIcon: BugReport,
                tabContent: 
                isLoading ? <Loader /> :  (error ?  (<Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>) :  (<Table  tableData ={getHostsDetails()} tableHead={["Name" , "Status" , "No. of Vms"]} />
                ))
                
              },
              {
                tabName: "Details",
                tabIcon: Code,
                tabContent: (
                  <Table  tableData ={getHostsMoreDetails()} tableHead={["Hypervisor Name","Free Disk (GBi)" , "Memory (MB)" , "Available Memory (GBi)" , "Total Cpus" ,"Available Cpus"]} />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
       </div>
  );
}

export default connect(
  (state) => {
    return { ...state?.dashboard ,profile : state?.user?.profile };
  },
  { getAllHosts }
)(hostsListBox);
