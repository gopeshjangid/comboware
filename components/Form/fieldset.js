import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Typography } from 'components/Custom'
import Loader from 'components/Loader/circular'
const useStyles = makeStyles(theme => ({
  box: {
    [theme.breakpoints.between('sm', 'md')]: {
      width: 900
    },
    [theme.breakpoints.up('lg')]: {
      width: 1180
    }
  },
  fieldset: {
    padding: 30,
    borderColor: theme?.palette?.borderColor,
    borderStyle: 'solid',
    paddingTop: 16,
    borderWidth: 1,
    background: 'white',
    padding: props => props?.padding || 20,
    [theme.breakpoints.down('sm')]: {
      margin: '0px !important',
      paddingTop: '16px !important',
      borderWidth: 0
    }
  },
  title: {
    textTransform: 'none',
    fontSize: '23px',
    color: '#496064 !important'
  },
  childBox: {
    marginTop: 20
  },
  loaderBox: {
    padding: '40px',
    'text-align': 'center',
    'justify-content': 'center',
    width: 'auto',
    margin: '0 auto'
  }
}))

export default function FieldSet (props) {
  const classes = useStyles(props)
  const { isLoading } = props
  return (
    <Box className={classes.fieldset} border={0.5}>
      <Typography variant='h6' fontSize={25}>
        {props?.title}
      </Typography>
      {isLoading ? (
        <Box className={classes.loaderBox}>
          <Loader />
          <Typography>Please wait...</Typography>
        </Box>
      ) : (
        <div className={classes.childBox}>{props?.children}</div>
      )}
    </Box>
  )
}
