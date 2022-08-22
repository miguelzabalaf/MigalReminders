import { IReminderProp, IRemindersState } from '..';

export const onAddReminder = ({
  listOfReminders,
  reminder,
}: {
  listOfReminders: IRemindersState['list'];
  reminder: IReminderProp;
}) => {
  return {
    newListWithReminder: [...listOfReminders, reminder],
  };
};

export const onEditReminder = ({
  id,
  reminderEdited,
  listOfReminders,
}: {
  id: IReminderProp['id'];
  reminderEdited: IReminderProp;
  listOfReminders: IRemindersState['list'];
}) => {
  const listEdited = listOfReminders.map(reminder => {
    if (reminder.id === id) {
      return {
        ...reminderEdited,
        id: reminder.id,
        createdAt: reminder.createdAt,
      };
    } else {
      return reminder;
    }
  });

  return {
    listEdited,
  };
};

export const onDeleteReminder = ({
  id,
  listOfReminders,
  eliminatedListOfReminders,
}: {
  id: IReminderProp['id'];
  listOfReminders: IRemindersState['list'];
  eliminatedListOfReminders: IRemindersState['list'];
}) => {
  const listEdited = listOfReminders.map(reminder => reminder.id !== id);
  const eliminatedListEdited = [
    ...eliminatedListOfReminders,
    listOfReminders.find(reminder => reminder.id === id),
  ];
  return {
    listEdited,
    eliminatedListEdited,
  };
};
