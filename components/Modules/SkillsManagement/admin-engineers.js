import { Switch } from '@material-ui/core';
import { Typography } from 'components/Custom';
import Button from 'components/CustomButtons';
import FieldSet from 'components/Form/fieldset';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Loader from 'components/Loader';
import Snackbar from 'components/Snackbar';
import CustomTable from 'components/Table/CustomTable';
import Wrapper from 'components/Wrapper';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TextField from '../../CustomInput/TextField';
import { changeSkillLevelStatus, getSkillLevels, saveSkills } from './redux/action';
import useStyles from './styles';

const Engineers = ({ getSkillLevels, saveSkills, skillList, levelList, changeSkillLevelStatus }) => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [fromData, setFromData] = useState({ skill: '', level: '' });
  const [loader, setLoader] = useState(false);

  const callback = (status, message) => {
    setLoader(false);
    if (message) {
      setSubmitted(true);
      setMessage({ type: status ? 'success' : 'error', message: message });
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  useEffect(async () => {
    setLoader(true);
    await getSkillLevels('SKILL', callback);
    await getSkillLevels('LEVEL', callback);
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
        field: 'skills_name',
        header: 'Skill Set',
        width: 100,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.skills_name}
            </Typography>
          );
        }
      },
      {
        header: 'Action',
        width: 70,
        renderCell: (row) => {
          return (
            <Switch
              checked={row?.status}
              onChange={(event) => updateStatus(event, row.id)}
              color='primary'
              name='skill'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          );
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
        field: 'levels_name',
        header: 'Level',
        width: 100,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.skills_level}
            </Typography>
          );
        }
      },
      {
        header: 'Action',
        width: 70,
        renderCell: (row) => {
          return (
            <Switch
              checked={row?.status}
              onChange={(event) => updateStatus(event, row.id)}
              color='primary'
              name='level'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          );
        }
      }
    ];
  };

  const submitHandler = async (e, type) => {
    setLoader(true);
    await saveSkills({ type: type.toUpperCase(), name: fromData[type] }, callback);
    await getSkillLevels(type.toUpperCase(), callback);
    setFromData({ ...fromData, [type]: '' });
  };

  const updateStatus = async (event, id) => {
    const { name, checked } = event.target;
    setLoader(true);
    await changeSkillLevelStatus({ type: name.toUpperCase(), id, status: Number(checked) }, callback);
    await getSkillLevels(name.toUpperCase(), callback);
  };

  return (
    <React.Fragment>
      <Loader open={loader} />
      <Snackbar open={isSubmitted} type={message?.type || 'success'} message={message?.message} />
      <Wrapper>
        <GridContainer spacing={2}>
          <GridItem xs={12} sm={6}>
            <FieldSet padding={30} title='SKILLS'>
              <GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
                <GridItem className={classes.gridRow} xs={10}>
                  <TextField
                    name='skill'
                    fullWidth
                    label='New Skill'
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
            <FieldSet padding={30} title='LEVEL'>
              <GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
                <GridItem className={classes.gridRow} xs={10}>
                  <TextField
                    name='level'
                    fullWidth
                    label='New Skill Level'
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
    </React.Fragment>
  );
};

export default connect(
  (state) => {
    return {
      ...state?.skills_management,
      skillList: state?.skills_management.skills,
      levelList: state?.skills_management.levels
    };
  },
  { getSkillLevels, saveSkills, changeSkillLevelStatus }
)(Engineers);
