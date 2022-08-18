import {
  LayoutAnimation,
  LayoutAnimationProperty,
  LayoutAnimationType,
} from 'react-native';

interface activateLayoutAnimationProps {
  duration: number;
  type?: LayoutAnimationType | undefined;
  creationProp?: LayoutAnimationProperty | undefined;
}

export const activateLayoutAnimation = ({
  duration,
  type,
  creationProp,
}: activateLayoutAnimationProps) => {
  LayoutAnimation.configureNext(
    LayoutAnimation.create(duration, type, creationProp),
  );
};

export const activateLayoutSpringAnimation = () => {
  LayoutAnimation.spring();
};
