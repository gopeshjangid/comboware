import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@mui/material/Checkbox'
import classNames from 'classnames'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button, Box } from '@mui/material'
import { TablePagination, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  tableContainer: {
    width: '100%',
    background: 'white',
    overflow: 'auto'
  },
  headerContainer: {
    background: '#F3F6F9',
    borderRadius: 6,
    height: 43
  },
  tableHeadRow: {
    background: '#F3F6F9',
    borderRadius: 6,
    overflow: 'auto',
    overflowX: 'auto',
    'border-bottom': '3px solid #1976d2'
  },
  tableBodyRow: {
    overflow: 'auto',
    overflowX: 'auto'
  },
  tableHeadCell: {
    color: '#464E5F !important',
    padding: 1,
    border: 0,
    paddingLeft: 0
  },
  tableCell: {
    color: '#464E5F !important',
    border: 'none',
    paddingLeft: 1
  },
  root: {
    background: props => (props?.danger ? '#F64E60' : '#3699FF'),
    borderRadius: '6px',
    minWidth: 60,
    '&:hover': {
      background: props => (props?.danger ? '#e43447' : '#2885e4')
    }
  }
}))

export default function CustomTable (props) {
  const classes = useStyles(props)
  const { columns, data, footer_label, selectedRows, actions } = props
  const [selectAll, setSelectAll] = useState(false)
  const [selectedItems, setSelectedRows] = useState([])
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    let selectedItems = !selectAll ? [] : data
    setSelectedRows(selectedItems)
    if (selectedRows) selectedRows(selectedItems)
  }, [selectAll])

  const getSelectAllCheckBox = () => {
    return (
      <Checkbox
        onChange={e => setSelectAll(e?.target?.checked)}
        checked={selectAll}
      />
    )
  }

  const selectItem = (isChecked, clickedRow) => {
    let _selectedItems = [...selectedItems]

    if (isChecked) {
      _selectedItems.push(clickedRow)
    } else {
      _selectedItems = _selectedItems.filter(row => row?.id !== clickedRow?.id)
    }

    setSelectedRows(_selectedItems)
    if (selectedRows) selectedRows(_selectedItems)
  }

  const getActionButton = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {actions &&
          actions.map((action, key) => (
            <MenuItem
              onClick={() => action?.handleClick && action?.handleClick()}
              key={'action-' + key}
            >
              {action?.label}
            </MenuItem>
          ))}
      </Menu>
    )
  }

  const getCheckBox = row => {
    return (
      <Checkbox
        onChange={e => selectItem(e?.target?.checked, row)}
        checked={selectedItems?.some(item => item.id === row?.id)}
      />
    )
  }

  return (
    <div className={classes.tableContainer}>
      {getActionButton()}
      <Table rules='none' className={classes.table}>
        {columns !== undefined ? (
          <TableHead className={classes.headerContainer}>
            <TableRow className={classes.tableHeadRow}>
              {columns.map((prop, key) => {
                if (prop?.field === 'action') {
                  return (
                    <TableCell
                      style={{ width: prop?.width || 150 }}
                      align={prop?.align || 'center'}
                      className={classes.tableHeadCell}
                      key={key}
                    >
                      <Button onClick={handleClick}>
                        <MoreHorizIcon />
                      </Button>
                    </TableCell>
                  )
                }

                if (prop?.field === 'select') {
                  return (
                    <TableCell
                      width='10'
                      style={{ width: prop?.width || 50 }}
                      className={classes.tableHeadCell}
                      key={key}
                    >
                      {getSelectAllCheckBox()}
                    </TableCell>
                  )
                }
                return (
                  <TableCell
                    align={prop?.align || 'center'}
                    style={{ width: prop?.width || 150 }}
                    className={classes.tableHeadCell}
                    key={key}
                  >
                    {(prop?.renderHeader && prop?.renderHeader()) ||
                      prop?.header ||
                      ''}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {data.length ? (
            data?.map((row, key) => {
              return (
                <TableRow
                  hover
                  key={'table-row' + key}
                  className={classNames({
                    [classes.tableBodyRow]: true
                  })}
                >
                  {columns.map((col, key) => {
                    if (col?.select) {
                      return (
                        <TableCell
                          width='10'
                          key={'table-col-' + key}
                          variant='body'
                          style={{ width: col?.width || 50 }}
                          className={classNames({ [classes.tableCell]: true })}
                        >
                          {getCheckBox(row)}
                        </TableCell>
                      )
                    }
                    return (
                      <TableCell
                        key={'table-col-' + key}
                        variant='body'
                        style={{ width: col?.width || 150 }}
                        align={col?.align || 'center'}
                        className={classNames({ [classes.tableCell]: true })}
                      >
                        {(col?.renderCell &&
                          col?.renderCell({ ...row, ...col })) ||
                          (col?.field in row ? row[col?.field] : '')}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })
          ) : (
            <TableRow
              hover
              key={'table-row'}
              className={classNames({
                [classes.tableBodyRow]: true
              })}
            >
              <TableCell
                key={'table-col-'}
                variant='body'
                className={classNames({ [classes.tableCell]: true })}
              >
                No record found!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Box
        display='flex'
        justifyContent='space-between'
        alignContent='center'
        alignItems='center'
        style={{
          width: '100%',
          paddingLeft: 5,
          'border-top': '1.5px solid #1976d2'
        }}
      >
        <Typography variant='body2'>{footer_label || ''}</Typography>
        <TablePagination
          component='div'
          rowsPerPage='1'
          labelRowsPerPage='Rows per page'
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count} records`
          }
          count={data?.length}
          page={1}
          color={theme?.palette?.primary?.main}
          showFirstButton
          showLastButton
          //onChange={void}

          //onChangePage = {}
          rowsPerPageOptions={[5, 10, 25]}
          backIconButtonProps={{
            'aria-label': 'forrige side'
          }}
          nextIconButtonProps={{
            'aria-label': 'neste side'
          }}
        />
      </Box>
    </div>
  )
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray'
}

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}
