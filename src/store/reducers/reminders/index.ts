import { PayloadAction } from '@reduxjs/toolkit';
import { COMMON_RESET_REDUX_STORE_DATA } from '../../../modules/common/constants';
import { createReducer } from '../../../modules/common/helpers/createReducer';
import {
  TAddReminderPayload,
  TDeleteReminderPayload,
  TEditReminderPayload,
} from './actions';
import {
  REMINDERS_ADD_REMINDER,
  REMINDERS_DELETE_REMINDER_BY_ID,
  REMINDERS_EDIT_REMINDER_BY_ID,
} from './constants';
import { onAddReminder, onDeleteReminder, onEditReminder } from './helpers';

export interface IReminderProp {
  id: string;
  createdAt: number;
  date: Date;
  showNotification: boolean;
  title: string;
}

export interface IRemindersState {
  list: IReminderProp[];
  eliminatedList: IReminderProp[];
}

const remindersInitialState: IRemindersState = {
  list: [],
  eliminatedList: [],
};

const remindersHandler = {
  [REMINDERS_ADD_REMINDER](
    state: IRemindersState,
    action: PayloadAction<TAddReminderPayload>,
  ) {
    const { newListWithReminder } = onAddReminder({
      listOfReminders: state.list,
      reminder: action.payload.data,
    });
    return {
      ...state,
      list: newListWithReminder,
    };
  },
  [REMINDERS_EDIT_REMINDER_BY_ID](
    state: IRemindersState,
    action: PayloadAction<TEditReminderPayload>,
  ) {
    const { id, data } = action.payload;
    const { listEdited } = onEditReminder({
      id,
      reminderEdited: data,
      listOfReminders: state.list,
    });
    return {
      ...state,
      list: listEdited,
    };
  },
  [REMINDERS_DELETE_REMINDER_BY_ID](
    state: IRemindersState,
    action: PayloadAction<TDeleteReminderPayload>,
  ) {
    const { id } = action.payload;
    const { listEdited, eliminatedListEdited } = onDeleteReminder({
      id,
      listOfReminders: state.list,
      eliminatedListOfReminders: state.eliminatedList,
    });
    return {
      ...state,
      list: listEdited,
      eliminatedList: eliminatedListEdited,
    };
  },
  // Reset
  [COMMON_RESET_REDUX_STORE_DATA]() {
    return remindersInitialState;
  },
};

export const remindersReducer = createReducer(
  remindersInitialState,
  remindersHandler,
);
