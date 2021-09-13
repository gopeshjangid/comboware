import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Textfield(props) {
  const classes = useStyles();
  const { label, value, onChange, ...rest } = props;
  return (
    <div>
      <TextField
        id="outlined-input"
        value={value}
        onChange={onChange}
        { ...rest}
        label={label}
        variant="outlined"
      />
    </div>
  );
}
