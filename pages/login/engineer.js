import React , {useEffect} from "react";
import {useRouter} from "next/router";
import EngineerLogin from  "../../components/Modules/SignIn/Engineer";

export default function Index() {
  
  let router = useRouter();
  useEffect(()=>{
      let userType =  localStorage.getItem('userType');
      let token = sessionStorage.getItem("token");
      if(token && userType && userType === 'ER'){
        //router.push("/dashboard")
      }
  },[])

  return <EngineerLogin />;
}
