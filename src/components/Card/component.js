import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {View} from 'native-base';
import Style from './styles';

const Card = props => {
  return (
    <View style={Style.container}>
      <View style={Style.card}>
        {props.icon1}
        <View style={Style.wrapper}>
          <Text style={Style.text}>{props.title}</Text>
          <Text style={Style.divisi}>{props.divisi}</Text>
        </View>
        <View style={Style.arrow}>
          {props.icon2}
          <Text style={Style.ig}>{props.instagram}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
