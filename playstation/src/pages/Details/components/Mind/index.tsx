import React from 'react';

import {View, Image, Text} from 'react-native';

import Button from '../../../../components/ButtonSquare';

import playstation from '../../../../assets/playdetails.png';
import fast from '../../../../assets/fast.png';
import mic from '../../../../assets/mic.png';
import x from '../../../../assets/cruz.png';

import styles from './styles';

const Mind = () => {
  return (
    <View style={styles.mind}>
      <View style={styles.rowGroup}>
        <View style={styles.columnGroup}>
          <View style={styles.groupTop}>
            <Button>
              <View style={styles.border}>
                <Image source={playstation} style={styles.iconPlay} />
              </View>
            </Button>
            <View style={styles.contentText}>
              <Text style={styles.title}>Futuristic</Text>
              <Text style={styles.subTitle}>Design</Text>
            </View>
          </View>

          <View style={styles.group}>
            <Button>
              <View style={styles.border}>
                <Image source={x} style={styles.iconMic} />
              </View>
            </Button>
            <View style={styles.contentText}>
              <Text style={styles.title}>Haptic</Text>
              <Text style={styles.subTitle}>Feedback</Text>
            </View>
          </View>
        </View>

        <View style={styles.columnGroup}>
          <View style={styles.groupTop}>
            <Button>
              <View style={styles.border}>
                <Image source={mic} style={styles.iconMic} />
              </View>
            </Button>
            <View style={styles.contentText}>
              <Text style={styles.title}>Built-in</Text>
              <Text style={styles.subTitle}>Microphone</Text>
            </View>
          </View>

          <View style={styles.group}>
            <Button>
              <View style={styles.border}>
                <Image source={fast} style={styles.iconFast} />
              </View>
            </Button>
            <View style={styles.contentText}>
              <Text style={styles.title}>Fast Charge</Text>
              <Text style={styles.subTitle}>USB-C port</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Mind;
