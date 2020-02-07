import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import IMAGES from '../../config/image';
import Header from '../../components/Header';
import {Container, Text, View} from 'native-base';
import Style from './styles';
import Edit from '../../Svg/Edit';
import Tentang from '../../Svg/Tentang';
import ArrowLeft from '../../Svg/arrowLeft';
import Amplop from '../../Svg/amplop';
import Telpon from '../../Svg/telpon';
import Bantuan from '../../Svg/Bantuan';
import Card from '../../components/CardProfile';

export default class Profile extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header
          title="Bantuan"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <View style={Style.container}>
          <View style={Style.content}>
            <View style={Style.icon}>
              <Amplop />
            </View>
            <Text style={Style.title}>Email kami</Text>
            <Text style={Style.email}>batix@gmail.com</Text>
          </View>
          <View style={Style.content}>
            <View style={Style.icon}>
              <Telpon />
            </View>
            <Text style={Style.title}>No Telpon kami</Text>
            <Text style={Style.email}>087821641816</Text>
          </View>
        </View>
      </View>
    );
  }
}
