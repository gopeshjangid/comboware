import { makeStyles } from '@material-ui/core/styles';
import { Delete, Edit } from '@material-ui/icons';
import { Chip, Typography } from 'components/Custom';
import Button from 'components/CustomButtons';
import FieldSet from 'components/Form/fieldset';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Loader from 'components/Loader';
import Snackbar from 'components/Snackbar';
import CustomTable from 'components/Table/CustomTable';
import Wrapper from 'components/Wrapper';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import TextField from '../../CustomInput/TextField';
import Select from '../../Select';
import { getAllTickets } from './redux/action';
import styles from './styles';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TicketCategoriesManagement = ({ getAllTickets, getProfile }) => {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState({ text: '', type: 'success' });
  const [loader, setLoader] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const userType = reduxState?.user?.profile?.user_type;
  const router = useRouter();
  const [fromData, setFromData] = useState({
    category: '',
    subCategory: '',
    point_price: '',
    status: false,
    subCategory: []
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryText, setSelectedCategoryText] = useState(null);
  const [categories, setCategories] = useState([]);

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    setLoader(reduxState?.ticket?.loading);
    return () => {
      setFromData({ category: '', subCategory: '', point_price: '' });
      setCategoryList([]);
      setSubCategoryList([]);
      setSelectedCategoryText(null);
    };
  }, [reduxState?.ticket?.loading]);

  useEffect(() => {
    const updateList = categoryList.map((item) => {
      return { label: item.name, value: item.id };
    });
    setCategories(updateList);
    return () => {};
  }, [categoryList]);

  const getCategoryColumns = () => {
    return [
      {
        field: 'id',
        header: '#',
        align: 'center',
        width: 80,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.id}
            </Typography>
          );
        }
      },
      {
        field: 'name',
        header: 'Name',
        width: 100,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.name}
            </Typography>
          );
        }
      },
      {
        field: 'point_price',
        header: 'Point Price',
        align: 'center',
        width: 80,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.point_price}
            </Typography>
          );
        }
      },
      {
        field: 'status',
        header: 'Status',
        renderCell: (row) => {
          return <Chip label={row?.status ? 'ACTIVE' : 'INACTIVE'} type={row?.status ? 'filled' : 'outlined'} />;
        }
      },
      {
        header: 'Action',
        width: 100,
        renderCell: (row) => {
          return (
            <React.Fragment>
              <Fab color='primary' aria-label='edit' size='small' className={classes.margin}>
                <Edit onClick={() => deleteItem(row, 'category')} />
              </Fab>
              <Fab color='secondary' aria-label='delete' size='small' className={classes.margin}>
                <Delete onClick={() => deleteItem(row, 'category')} />
              </Fab>
            </React.Fragment>
          );
        }
      }
    ];
  };

  const getSubCategoryColumns = () => {
    return [
      {
        field: 'id',
        header: '#',
        align: 'center',
        width: 80,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.id}
            </Typography>
          );
        }
      },
      {
        field: 'name',
        header: 'Name',
        width: 100,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.name}
            </Typography>
          );
        }
      },
      {
        field: 'name',
        header: 'Category',
        width: 100,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {selectedCategoryText}
            </Typography>
          );
        }
      },
      {
        field: 'status',
        header: 'Status',
        renderCell: (row) => {
          return <Chip label={row?.status ? 'ACTIVE' : 'INACTIVE'} type={row?.status ? 'filled' : 'outlined'} />;
        }
      },
      {
        header: 'Action',
        width: 100,
        renderCell: (row) => {
          return (
            <React.Fragment>
              <Fab color='primary' aria-label='edit' size='small' className={classes.margin}>
                <Edit onClick={() => deleteItem(row, 'category')} />
              </Fab>
              <Fab color='secondary' aria-label='delete' size='small' className={classes.margin}>
                <Delete onClick={() => deleteItem(row, 'category')} />
              </Fab>
            </React.Fragment>
          );
        }
      }
    ];
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setFromData({
      ...fromData,
      [name]: value
    });
  };

  const submitHandler = (e, type) => {
    if (type === 'category') {
      if (fromData[type]) {
        let updatedList = [...categoryList];
        const userExists = updatedList.some((item) => {
          return item.name === fromData[type];
        });
        if (!userExists) {
          updatedList.push({
            id: updatedList.length + 1,
            name: fromData[type],
            point_price: fromData.point_price,
            status: true
          });
        }
        setCategoryList(updatedList);
        setFromData({ ...fromData, category: '', point_price: '' });
      }
    } else {
      if (fromData[type]) {
        let updatedList = [...categoryList];
        updatedList = updatedList.map((item) => {
          if (item.id === selectedCategory) {
            if (item?.subCategory) {
              const userExists = item?.subCategory.some((item) => {
                return item.name === fromData[type];
              });
              if (!userExists) {
                item?.subCategory.push({ id: item?.subCategory.length + 1, name: fromData[type], status: true });
              }
            } else {
              item = {
                ...item,
                subCategory: [
                  {
                    id: 1,
                    name: fromData[type],
                    status: true
                  }
                ]
              };
            }
            setSubCategoryList(item.subCategory);
          }
          return item;
        });
        setCategoryList(updatedList);
        setFromData({ ...fromData, subCategory: '' });
      }
    }
  };

  const deleteItem = (row, type) => {
    if (type === 'skill') {
      let updatedList = [...categoryList];
      updatedList = updatedList.filter((item) => {
        return item.id !== row.id;
      });
      setSkillList(updatedList);
    } else {
      let updatedList = [...subCategoryList];
      updatedList = updatedList.filter((item) => {
        return item.id !== row.id;
      });
      setLevelList(updatedList);
    }
  };

  const changeHandler = (e) => {
    let value = e.target.value;
    let updatedList = [...categoryList];
    let updatedSubCategory = [];
    updatedList.map((item) => {
      if (item.id === value) {
        if (item?.subCategory) {
          updatedSubCategory = item.subCategory;
        }
      }
    });
    setSelectedCategoryText(e.currentTarget.textContent);
    setSelectedCategory(value);
    setSubCategoryList(updatedSubCategory);
  };

  return (
    <Wrapper>
      <Loader open={loader} />
      <Snackbar open={isSubmitted} type={message?.type || 'success'} message={message?.text} />
      <GridContainer spacing={2}>
        <GridItem xs={12} sm={6}>
          <FieldSet padding={30} title='TICKET CATEGORY'>
            <GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
              <GridItem container style={{ textAlign: 'center' }} className={classes.gridRow} xs={12}>
                <Typography>CATEGORY</Typography>
              </GridItem>
              <GridItem className={classes.gridRow} xs={6}>
                <TextField
                  name='category'
                  fullWidth
                  label='Name'
                  value={fromData.category}
                  onChange={inputChangeHandler}
                  type='text'
                  inputProps={{ min: 0 }}
                  size='small'
                />
              </GridItem>
              <GridItem className={classes.gridRow} xs={4}>
                <TextField
                  name='point_price'
                  fullWidth
                  label='Point Price'
                  value={fromData.point_price}
                  onChange={inputChangeHandler}
                  type='text'
                  inputProps={{ min: 0 }}
                  size='small'
                />
              </GridItem>
              <GridItem justify='flex-end' xs={1}>
                <Button variant='outlined' color='primary' size='large' onClick={(e) => submitHandler(e, 'category')}>
                  Save
                </Button>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <CustomTable columns={getCategoryColumns()} data={categoryList} />
            </GridContainer>
          </FieldSet>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <FieldSet padding={30} title='TICKET SUBCATEGORY'>
            <GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
              <GridItem container style={{ textAlign: 'center' }} className={classes.gridRow} xs={12}>
                <Typography>SUB-CATEGORY</Typography>
              </GridItem>
              <GridItem xs={5}>
                <Select
                  name='category'
                  options={categories}
                  label='Category'
                  onChange={changeHandler}
                  value={selectedCategory}
                  size='small'
                />
              </GridItem>
              <GridItem className={classes.gridRow} xs={5}>
                <TextField
                  name='subCategory'
                  fullWidth
                  label='Name'
                  value={fromData.subCategory}
                  onChange={inputChangeHandler}
                  type='text'
                  inputProps={{ min: 0 }}
                  size='small'
                />
              </GridItem>
              <GridItem justify='flex-end' xs={1}>
                <Button
                  variant='outlined'
                  color='primary'
                  size='large'
                  onClick={(e) => submitHandler(e, 'subCategory')}
                >
                  Save
                </Button>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <CustomTable columns={getSubCategoryColumns()} data={subCategoryList} />
            </GridContainer>
          </FieldSet>
        </GridItem>
      </GridContainer>
    </Wrapper>
  );
};

export default connect(
  (state) => {
    return { ...state };
  },
  { getAllTickets }
)(TicketCategoriesManagement);
