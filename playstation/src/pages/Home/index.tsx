import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Text, View, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

import rectangle from '../../assets/rectangle.png';
import playstation from '../../assets/playstation.png';
import shoppingCart from '../../assets/cart.png';
import menu from '../../assets/menu.png';
import mouse from '../../assets/mouse.png';
import settings from '../../assets/settings.png';
import gameConsole from '../../assets/game-console.png';
import home from '../../assets/home.png'

import ButtonLinear from '../../components/ButtonLinear';
import Products from '../../components/Products';
import ButtonCircle from '../../components/ButtonCircle';
import ButtonSquare from '../../components/ButtonSquare';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={rectangle} style={styles.imageBackground} />

        <View style={styles.content}>
          <View>
            <View style={styles.containerTop}>
              <ButtonCircle>
                <Image source={menu} style={styles.icon} />
              </ButtonCircle>
              <ButtonCircle>
                <Image source={shoppingCart} style={styles.iconShopping} />
              </ButtonCircle>
            </View>

            <View style={styles.containerText}>
              <Text style={styles.text}>Featured</Text>
              <Text style={styles.textBorder}>Products</Text>
            </View>

            <View style={styles.contentButton}>
              <ButtonSquare>
                <Image source={settings} style={styles.iconSettings} />
              </ButtonSquare>

              <LinearGradient
                colors={['#5D9CD5', '#6805F2']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.linearGradient}>
                <View>
                  <Image source={playstation} style={styles.iconPlay} />
                </View>
              </LinearGradient>

              <ButtonSquare>
                <Image source={gameConsole} style={styles.iconGame} />
              </ButtonSquare>

              <ButtonSquare>
                <Image source={mouse} style={styles.iconMouse} />
              </ButtonSquare>
            </View>

            <Products />
          </View>

          <View style={styles.containerBottom}>
            <ButtonLinear>
              <View style={styles.group}>
                <View style={styles.contentIcon}>
                  <Image source={home} style={styles.iconHome}/>
                </View>
                <Text style={styles.buttonTextBottom}>Home</Text>
              </View>
            </ButtonLinear>
            <FontAwesome name="user" size={24} color="#ccc" />
            <Fontisto name="player-settings" size={24} color="#ccc" />
            <Fontisto name="favorite" size={24} color="#ccc" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
