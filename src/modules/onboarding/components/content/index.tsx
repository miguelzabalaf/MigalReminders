import React from 'react';
import { View, Text } from 'react-native';
import { ImageHero } from '../../assets/images/hero';
import { contentStyles } from '../../styles/components/content';
import { colors } from '../../../common/utils/theme';
import { Button } from '../../../common/components/button';

interface ContentProps {
  title: string;
  subTitle: string;
}

export const Content: React.FC<ContentProps> = ({ title, subTitle }) => {
  return (
    <View style={contentStyles.container}>
      <View style={contentStyles.containerTop}>
        <ImageHero width={300} height={162} color={colors.primaryLight} />
        <Text style={contentStyles.title}>{title}</Text>
        <Text style={contentStyles.subTitle}>{subTitle}</Text>
      </View>
      <View style={contentStyles.containerBottom}>
        <Button>HI, MIGAL</Button>
      </View>
    </View>
  );
};
