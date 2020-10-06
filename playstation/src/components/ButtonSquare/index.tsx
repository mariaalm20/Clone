import React from 'react';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

const ButtonSquare: React.FC = ({children}) => {
  return <RectButton style={styles.container}>{children}</RectButton>;
};

export default ButtonSquare;
