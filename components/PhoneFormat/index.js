import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';

export default function PhoneField(props) {
  const { value, defaultCountry, onChange } = props;

  return <MuiPhoneNumber autoFormat={true}  defaultCountry={defaultCountry || 'tw'} onChange={onChange} value={value}  {...props}  />
 
}
