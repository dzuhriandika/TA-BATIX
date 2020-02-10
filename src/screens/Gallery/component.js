import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import IMAGES from '../../config/image';
import Header from '../../components/Header';
import {Container, Text, View} from 'native-base';
import Style from './styles';
import Edit from '../../Svg/Edit';
import Tentang from '../../Svg/Tentang';
import Arrow from '../../Svg/arrow';
import Keluar from '../../Svg/Keluar';
import Bantuan from '../../Svg/Bantuan';
import Card from '../../components/CardProfile';

export default class Profile extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header title="Gallery" />
      </View>
    );
  }
}
