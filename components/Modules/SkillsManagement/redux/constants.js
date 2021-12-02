export const START = 'START';
export const FAILED = 'FAILED';
export const SAVE_RESOURCE = 'SAVE_RESOURCE';
export const SKILL_LIST = 'SKILL_LIST';
export const LEVEL_LIST = 'LEVEL_LIST';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;
export const MESSAGE = {
  creatingAccount: 'Creating account...',
  accountSuccess: 'Created success.'
};

export const SKILLS = ['BEGINNER', 'INTERMEDIATE', 'EXPERT'];

export const API = {
  saveSkillLevels: API_BASE_URL + '/v1/user/saveSkillLevels',
  getSkillLevels: API_BASE_URL + '/v1/user/getSkillLevels',
  saveSkills: API_BASE_URL + '/v1/user/saveSkills',
  changeSkillLevelStatus: API_BASE_URL + '/v1/user/changeSkillLevelStatus',
  signUp: API_BASE_URL + '/v1/user/register'
};
