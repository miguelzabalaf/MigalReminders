import { useNavigation } from '@react-navigation/native';
import { HELLO_SCREEN } from '../../../common/constants';

export const useOnboarding = () => {
  const navigation = useNavigation();

  const goToHelloScreen = () => navigation.navigate(HELLO_SCREEN as never);
  return {
    goToHelloScreen,
  };
};
