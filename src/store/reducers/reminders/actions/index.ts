import {
  REMINDERS_ADD_REMINDER,
  REMINDERS_EDIT_REMINDER_BY_ID,
  REMINDERS_DELETE_REMINDER_BY_ID,
} from './../constants/index';
import { useDispatch } from 'react-redux';
import { IReminderProp } from '../';

export type TAddReminderPayload = { data: IReminderProp };

export type TEditReminderPayload = {
  id: IReminderProp['id'];
  data: IReminderProp;
};

export type TDeleteReminderPayload = { id: IReminderProp['id'] };

export type ReminderActionProp =
  | {
      type: 'reminders/reminder/add';
      payload: TAddReminderPayload;
    }
  | {
      type: 'reminders/reminder/edit';
      payload: TEditReminderPayload;
    }
  | {
      type: 'reminders/reminder/delete';
      payload: TDeleteReminderPayload;
    };

export const useProfileActions = () => {
  const dispatch = useDispatch();

  const actAddReminder = (reminder: IReminderProp) => {
    dispatch({
      type: REMINDERS_ADD_REMINDER,
      payload: reminder,
    });
  };

  const actEditReminderById = ({
    id,
    data,
  }: {
    id: IReminderProp['id'];
    data: IReminderProp;
  }) => {
    dispatch({
      type: REMINDERS_EDIT_REMINDER_BY_ID,
      payload: { id, data },
    });
  };

  const actDeleteReminderById = (id: IReminderProp['id']) => {
    dispatch({
      type: REMINDERS_DELETE_REMINDER_BY_ID,
      payload: id,
    });
  };

  return {
    actAddReminder,
    actEditReminderById,
    actDeleteReminderById,
  };
};
