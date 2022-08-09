import { COMMON_RESET_REDUX_STORE_DATA } from '../../modules/common/constants';
import {
  actionProps,
  createReducer,
} from '../../modules/common/helpers/createReducer';
import { PROFILE_SET_NICKNAME } from './constants';

export interface IProfileState {
  nickname: string;
}

const profileInitialState: IProfileState = {
  nickname: '',
};

const profileHandler = {
  [PROFILE_SET_NICKNAME](state: IProfileState, action: actionProps) {
    const nickname = action.payload;
    return {
      ...state,
      nickname,
    };
  },
  // Reset
  [COMMON_RESET_REDUX_STORE_DATA]() {
    return profileInitialState;
  },
};

export const profileReducer = createReducer(
  profileInitialState,
  profileHandler,
);
