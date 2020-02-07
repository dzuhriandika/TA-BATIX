import React, {Component} from 'react';
import {Image} from 'react-native';
import IMAGES from '../../config/image';
import {Text, View} from 'native-base';
import Style from './styles';

const Header = props => {
  return (
    <View>
      <View style={Style.headerWrapper}>
        <View style={Style.iconLeft}>{props.iconLeft}</View>
        <Image
          source={IMAGES.headerBgImg}
          resizeMode="contain"
          style={Style.headerBg}
        />
        <Text style={Style.title}>{props.title}</Text>
        <Image
          source={IMAGES.setting}
          resizeMode="contain"
          style={Style.setting}
        />
      </View>
    </View>
  );
};

export default Header;
