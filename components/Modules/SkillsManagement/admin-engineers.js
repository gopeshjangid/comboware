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
import TextField from '../../CustomInput/TextField';
import useStyles from './styles';
import { useSelector, connect, useDispatch } from 'react-redux';
import { getSkillLevels, saveSkills } from './redux/action';

const Engineers = ({ getSkillLevels, saveSkills, skillList, levelList }) => {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [fromData, setFromData] = useState({ skill: '', level: '' });

  const hideNotification = (status, message) => {
    setLoading(false);
    if (!status) {
      setError(message);
    } else {
      setError('');
    }
  };

  useEffect(async () => {
    await getSkillLevels('SKILL');
    await getSkillLevels('LEVEL');
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
          return <Delete onClick={() => deleteSkillItem(row, 'level')} color='secondary' />;
        }
      }
    ];
  };

  const submitHandler = async (e, type) => {
    if (type === 'skill') {
      if (fromData[type]) {
        saveSkills({ type: 'SKILL', name: fromData[type] }, hideNotification);
        setFromData({ ...fromData, skill: '' });
        await getSkillLevels('SKILL');
      }
    } else {
      if (fromData[type]) {
        saveSkills({ type: 'LEVEL', name: fromData[type] }, hideNotification);
        setFromData({ ...fromData, level: '' });
        await getSkillLevels('LEVEL');
      }
    }
  };

  const deleteSkillItem = (row, type) => {
    if (type === 'skill') {
      let updatedSkillList = [...skillList];
      updatedSkillList = updatedSkillList.filter((item) => {
        return item.id !== row.id;
      });
    } else {
      let updatedSkillList = [...levelList];
      updatedSkillList = updatedSkillList.filter((item) => {
        return item.id !== row.id;
      });
    }
  };

  const handleClick = () => {};

  return (
    <React.Fragment>
      <Snackbar open={isSubmitted} type={reduxState?.workspace?.error ? 'error' : 'success'} message={message} />
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
  { getSkillLevels, saveSkills }
)(Engineers);
