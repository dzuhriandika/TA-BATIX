import React, {Component} from 'react';
import {TextInput, View, Text, ScrollView} from 'react-native';
import {Button, Form, Item, Input, Container} from 'native-base';
import Style from './styles';
import Email from '../../Svg/Email';
import Sekolah from '../../Svg/sekolah';
import Password from '../../Svg/Password';
import EmailReg from '../../Svg/emailReg';
import TelponReg from '../../Svg/telponReg';

export default class Register extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <ScrollView>
        <View style={Style.mainScreen}>
          <View style={Style.container}>
            <View style={Style.form}>
              <View style={Style.titleWrapper}>
                <Text style={Style.title}>Daftar</Text>
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Nama Lengkap</Text>
              </View>
              <View style={Style.inputWrapper}>
                <Email />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Nama Lengkap"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Sekolah</Text>
              </View>
              <View style={Style.inputWrapper}>
                <Sekolah />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Sekolahh"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Email</Text>
              </View>
              <View style={Style.inputWrapper}>
                <EmailReg />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Email"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                  onChangeText={email => this.setState({email})}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Nomor Ponsel</Text>
              </View>
              <View style={Style.inputWrapper}>
                <TelponReg />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Nomor Ponsel"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Password</Text>
              </View>
              <View style={Style.inputWrapper}>
                <Password />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Password"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                  onChangeText={email => this.setState({email})}
                />
              </View>
            </View>
            <Button onPress={this.login} style={Style.btn}>
              <Text uppercase={false} style={Style.btnTeks}>
                Daftar
              </Text>
            </Button>
            <Text style={Style.registerTeks}>
              Sudah punya akun?
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={Style.registerTeksPress}>
                {' '}
                Masuk Sekarang
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
