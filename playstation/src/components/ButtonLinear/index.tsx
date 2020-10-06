import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const ButtonLinear: React.FC = ({children}) => {
  return (
    <LinearGradient
      colors={['#5D9CD5', '#6805F2']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default ButtonLinear;
