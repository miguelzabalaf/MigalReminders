import { StyleSheet } from 'react-native';

interface IColorOptionStyles {
  width: number;
  color: string;
}

export const colorOptionStyles = ({ width, color }: IColorOptionStyles) => {
  const calculateRadius = (25 * width) / 100;

  return StyleSheet.create({
    container: {
      width: width,
      height: width,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: calculateRadius,
      overflow: 'hidden',
    },
  });
};
