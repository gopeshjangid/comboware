import React ,{useState ,useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import {Box} from "@material-ui/core";
import "react-phone-input-2/lib/style.css";
import "./style.css";

export default function PhoneField(props) {
  const { value, defaultCountry, onChange } = props;
  const [phone, setPhone]  =useState(value);
   useEffect(()=>{
    setPhone(value);
   },[value])
  const PhoneHandler = (value, data, event, formattedValue) =>{
    setPhone(value);
    if(onChange){
      onChange(value)
    }
  }

  return (
    <Box className="phone-container">
      <div className="label-box">
        <label>Phone</label>
      </div>
     
    <PhoneInput
     {...props}
      specialLabel="phone"
      inputClass="phone-input"
      preferredCountries={['tw' ,'us' ,'in']}
      country={"tw"}
      onChange={PhoneHandler}
      value={phone}
      autoFormat={true}
      enableSearch
      placeholder="Phone number"
    />
    </Box>
  );
}
