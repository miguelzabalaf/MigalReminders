import {
  COMMON_RESET_REDUX_STORE_DATA,
  IColorListItem,
} from '../../../modules/common/constants';
import {
  actionProps,
  createReducer,
} from '../../../modules/common/helpers/createReducer';
import {
  PROFILE_SET_NICKNAME,
  PROFILE_SET_COLOR_PREFERENCE,
} from './constants';

export interface IProfileState {
  nickname: string;
  colorPreference: IColorListItem | null;
}

const profileInitialState: IProfileState = {
  nickname: '',
  colorPreference: null,
};

const profileHandler = {
  [PROFILE_SET_NICKNAME](state: IProfileState, action: actionProps) {
    const nickname = action.payload;
    return {
      ...state,
      nickname,
    };
  },
  [PROFILE_SET_COLOR_PREFERENCE](state: IColorListItem, action: actionProps) {
    const colorPreference = action.payload;
    return {
      ...state,
      colorPreference,
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
