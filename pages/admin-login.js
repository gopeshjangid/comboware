import React , {useEffect} from "react";
import {useRouter} from "next/router";
import AdminLogin from  "../components/Modules/AdminLogin";

export default function Index() {

  let router = useRouter();

  useEffect(()=>{
      let userType = localStorage.getItem('userType');
      let token = sessionStorage.getItem("token");
      if(token && userType && userType === 'ADMIN'){
        router.push("/dashboard")
      }
  },[]);

  return <AdminLogin />;
}
