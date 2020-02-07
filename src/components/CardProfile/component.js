import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {View} from 'native-base';
import Style from './styles';

const CardProfile = props => {
  return (
    <View style={Style.container}>
      <View style={Style.card}>
        {props.icon1}
        <View style={Style.wrapper}>
          <Text style={Style.text}>{props.title}</Text>
        </View>
        <View style={Style.arrow}>{props.icon2}</View>
      </View>
    </View>
  );
};

export default CardProfile;
