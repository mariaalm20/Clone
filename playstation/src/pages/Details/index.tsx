import React from 'react';

import {Text, View, ImageBackground, Image} from 'react-native';

import styles from './styles';

import rectangle from '../../assets/rectangle.png';
import play from '../../assets/play.png';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import shoppingCart from '../../assets/cart.png';
import favorite from '../../assets/favorite.png';

import {RectButton} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

import Mind from './components/Mind';
import ButtonLinear from '../../components/ButtonLinear';
import ButtonCircle from '../../components/ButtonCircle';
import Animated from '../../components/Animated';

import descriptions from '../../static/description.json';

const Details = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={rectangle}>
        <View style={styles.containerTop}>
          <View style={styles.top}>
            <RectButton onPress={handleNavigateToHome}>
              <Image source={left} style={styles.iconArrowLeft} />
            </RectButton>
            <ButtonCircle>
              <Image source={shoppingCart} style={styles.iconShopping} />
            </ButtonCircle>
          </View>

          <View style={styles.down}>
            <View>
              {descriptions.description.map((description) => {
                return (
                  <View style={styles.left}>
                    <Text style={styles.title}>{description.title}</Text>
                    <Text style={styles.subTitle}>{description.subtitle}</Text>
                  </View>
                );
              })}
            </View>

            <Animated>
              <Image style={styles.productImage} source={play} />
            </Animated>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.containerDown}>
        <View style={styles.favorite}>
          <ButtonCircle>
            <Image source={favorite} style={{width: 14, height: 20}} />
            {/*"#939188"*/}
          </ButtonCircle>
        </View>
        <Text style={styles.titleProduct}>Dual Sense</Text>
        <Text style={styles.descriptionProduct}>
          DualSense also adds built-in microphone array, which will enable
          players to easily chat width friend without a headset...{' '}
        </Text>

        <Mind />

        <View style={styles.containerBottom}>
          <View style={styles.row}>
            <Text style={styles.sifrao}>$ </Text>
            <Text style={styles.priceBottom}>50</Text>
          </View>

          <ButtonLinear>
            <View style={styles.row}>
              <Text style={styles.buttonText}>Preorder</Text>

              <View
                style={styles.contentIcon}>
                <Image source={right} style={styles.iconArrowRight} />
              </View>
            </View>
          </ButtonLinear>
        </View>
      </View>
    </View>
  );
};

export default Details;
