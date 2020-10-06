import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Rect} from 'react-native-safe-area-context';

import styles from './styles';

const ButtonCircle: React.FC = ({children}) => {
  return <RectButton style={styles.container}>{children}</RectButton>;
};

export default ButtonCircle;
