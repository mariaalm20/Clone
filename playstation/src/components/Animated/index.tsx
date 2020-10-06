import React from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';

const AnimatedComponent: React.FC = ({children}) => {
  const animation = new Animated.Value(0);

  function startAnimation() {
    Animated.timing(animation, {
      toValue: 80,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  const rotateInterPolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '1600deg'],
  });

  const animatedStyles = {
    transform: [{rotate: rotateInterPolate}],
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[animatedStyles]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedComponent;
