import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import {View} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';

const GaleriGambar = props => {
  return (
    <View style={Style.container}>
      <View style={Style.imgWrapper}>
        {props.gambar}
        <Text style={Style.teks}>{props.title}</Text>
      </View>
    </View>
  );
};

export default GaleriGambar;
