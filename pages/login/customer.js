import React , {useEffect} from "react";
import {useRouter} from "next/router";
import CustomerLogin from  "../../components/Modules/SignIn/Customer";

export default function Index() {
  let router = useRouter();
  useEffect(()=>{
      let userType =  localStorage.getItem('userType');
      let token = sessionStorage.getItem("token");
      if(token && userType && userType === 'USER'){
        router.push("/dashboard")
      } 
  },[])
  return <CustomerLogin />;
}
