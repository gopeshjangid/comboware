import { Delete } from '@material-ui/icons';
import { Typography } from 'components/Custom';
import Button from 'components/CustomButtons';
import FieldSet from 'components/Form/fieldset';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Snackbar from 'components/Snackbar';
import CustomTable from 'components/Table/CustomTable';
import Wrapper from 'components/Wrapper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '../../CustomInput/TextField';
import useStyles from './styles';

const Engineers = () => {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [skillList, setSkillList] = useState([]);
  const [levelList, setLevelList] = useState([]);
  const [fromData, setFromData] = useState({ skill: '', level: '' });

  useEffect(() => {
    return () => {
      setFromData({ skill: '', level: '' });
      setSkillList([]);
      setLevelList([]);
    };
  }, []);

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setFromData({
      ...fromData,
      [name]: value
    });
  };

  const getColumns = () => {
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
        header: 'Skill Set',
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
        header: 'Action',
        width: 70,
        renderCell: (row) => {
          return <Delete onClick={() => deleteSkillItem(row, 'skill')} color='secondary' />;
        }
      }
    ];
  };

  const getSkillLevelColumns = () => {
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
        header: 'Level',
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
        header: 'Action',
        width: 70,
        renderCell: (row) => {
          return <Delete onClick={() => deleteSkillItem(row, 'level')} color='secondary' />;
        }
      }
    ];
  };

  const submitHandler = (e, type) => {
    if (type === 'skill') {
      if (fromData[type]) {
        let updatedSkillList = [...skillList];
        const userExists = updatedSkillList.some((item) => {
          return item.name === fromData[type];
        });
        if (!userExists) {
          updatedSkillList.push({ id: updatedSkillList.length + 1, name: fromData[type] });
        }
        setSkillList(updatedSkillList);
        setFromData({ ...fromData, skill: '' });
      }
    } else {
      if (fromData[type]) {
        let updatedSkillList = [...levelList];
        const userExists = updatedSkillList.some((item) => {
          return item.name === fromData[type];
        });
        if (!userExists) {
          updatedSkillList.push({ id: updatedSkillList.length + 1, name: fromData[type] });
        }
        setLevelList(updatedSkillList);
        setFromData({ ...fromData, level: '' });
      }
    }
  };

  const deleteSkillItem = (row, type) => {
    if (type === 'skill') {
      let updatedSkillList = [...skillList];
      updatedSkillList = updatedSkillList.filter((item) => {
        return item.id !== row.id;
      });
      setSkillList(updatedSkillList);
    } else {
      let updatedSkillList = [...levelList];
      updatedSkillList = updatedSkillList.filter((item) => {
        return item.id !== row.id;
      });
      setLevelList(updatedSkillList);
    }
  };

  const handleClick = () => {};

  console.log(fromData);

  return (
    <div>
      <Snackbar open={isSubmitted} type={reduxState?.workspace?.error ? 'error' : 'success'} message={message} />
      <Wrapper>
        <GridContainer spacing={2}>
          <GridItem xs={12} sm={6}>
            <FieldSet padding={30} title='ENGINEERS SKILLS'>
              <GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
                <GridItem container style={{ textAlign: 'center' }} className={classes.gridRow} xs={12}>
                  <Typography>SKILLS</Typography>
                </GridItem>
                <GridItem className={classes.gridRow} xs={10}>
                  <TextField
                    name='skill'
                    fullWidth
                    label='Skills'
                    value={fromData.skill}
                    onChange={inputChangeHandler}
                    type='text'
                    inputProps={{ min: 0 }}
                    size='small'
                  />
                </GridItem>
                <GridItem justify='flex-end' xs={2}>
                  <Button variant='outlined' color='primary' size='large' onClick={(e) => submitHandler(e, 'skill')}>
                    Save
                  </Button>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <CustomTable columns={getColumns()} data={skillList} />
              </GridContainer>
            </FieldSet>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <FieldSet padding={30} title='ENGINEERS SKILLS'>
              <GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
                <GridItem container style={{ textAlign: 'center' }} className={classes.gridRow} xs={12}>
                  <Typography>LEVEL</Typography>
                </GridItem>
                <GridItem className={classes.gridRow} xs={10}>
                  <TextField
                    name='level'
                    fullWidth
                    label='Skill Level'
                    value={fromData.level}
                    onChange={inputChangeHandler}
                    type='text'
                    inputProps={{ min: 0 }}
                    size='small'
                  />
                </GridItem>
                <GridItem justify='flex-end' xs={2}>
                  <Button variant='outlined' color='primary' size='large' onClick={(e) => submitHandler(e, 'level')}>
                    Save
                  </Button>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <CustomTable columns={getSkillLevelColumns()} data={levelList} />
              </GridContainer>
            </FieldSet>
          </GridItem>
        </GridContainer>
      </Wrapper>
    </div>
  );
};

export default Engineers;
