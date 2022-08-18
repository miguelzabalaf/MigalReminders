import { Platform } from 'react-native';
import { requestNotifications } from 'react-native-permissions';

export const checkPermissionsNotifications = async () => {
  if (Platform.OS === 'ios') {
    const { status } = await requestNotifications(['alert', 'sound']);
    return status === 'granted';
  } else {
    return true;
  }
};
