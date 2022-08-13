import React from 'react';
import { View } from 'react-native';
import { LayoutContent } from '../../../common/components/layoutContent';
import { Hero } from '../../components/hero';
import { useHome } from '../../hooks/screens/useHero';
import { homeStyles } from '../../styles/screens/home';

export const HomeScreen: React.FC = () => {
  const { getDay, getDayName, getMonth, getYear } = useHome();
  const { container } = homeStyles;
  return (
    <View style={container}>
      <Hero
        actualDay={getDay()}
        actualDayName={getDayName()}
        actualMonth={getMonth()}
        actualYear={getYear()}
      />
      <LayoutContent></LayoutContent>
    </View>
  );
};
