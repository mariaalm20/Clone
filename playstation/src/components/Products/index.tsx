import React, {useState} from 'react';

import {View, Image, Text} from 'react-native';
import {ScrollView, RectButton} from 'react-native-gesture-handler';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import products from '../../static/products.json';
import getImage from '../../static/getImage';

interface Products {
  title: string;
  subtitle: string;
  image: string;
  id: number
}

const Products = () => {
  const navigation = useNavigation();

  function handleNavigateToDetails() {
    navigation.navigate('Details');
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 0}}>
      {products.products.map((product: Products) => {
        return (
          <View style={styles.containerProducts} key = {product.id} >
            
            <RectButton onPress={handleNavigateToDetails} style={styles.button}>
              <Image
                source={getImage(product.image)}
                style={{width: 260, height: 120}}
              />
              <View style={styles.contentTitle}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.subtitle}>{product.subtitle}</Text>
              </View>
            </RectButton>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Products;
