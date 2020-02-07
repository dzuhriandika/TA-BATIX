import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import Style from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';
import IMAGES from '../../config/image';

export default class Lala extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header
          title="Tentang Kami"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={Style.container}>
            <View style={Style.card}>
              <Text style={Style.title}>Batix</Text>
              <Text style={Style.desc}>
                Batix adalah aplikasi pembelajaran seni budaya di bidang Batik
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/rz.dfrz/')
                }>
                <Card
                  icon1={
                    <Image
                      source={IMAGES.rz}
                      resizeMode="contain"
                      style={Style.nana}
                    />
                  }
                  title="Daffa Raihanz"
                  divisi="Front-End Developer"
                  instagram="@rz.dfrz"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/lenkb.io/')
                }>
                <Card
                  icon1={
                    <Image
                      source={IMAGES.zuh}
                      resizeMode="contain"
                      style={Style.nana}
                    />
                  }
                  title="Dzuhri Andika"
                  divisi="Front-End Developer"
                  instagram="@lenkb.io"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/divaaudri/')
                }>
                <Card
                  icon1={
                    <Image
                      source={IMAGES.div}
                      resizeMode="contain"
                      style={Style.nana}
                    />
                  }
                  title="Diva Audri"
                  divisi="Back-End Developer"
                  instagram="@divaaudri"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/ratmadsmi/')
                }>
                <Card
                  icon1={
                    <Image
                      source={IMAGES.rat}
                      resizeMode="contain"
                      style={Style.nana}
                    />
                  }
                  title="Dwi Ratnasari"
                  divisi="Content Writer"
                  instagram="@ratmadsmi"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/ratmadsmi/')
                }>
                <Card
                  icon1={
                    <Image
                      source={IMAGES.mar}
                      resizeMode="contain"
                      style={Style.nana}
                    />
                  }
                  title="Caesariyanti Maretha"
                  divisi="Content Writer"
                  instagram="@rz.dfrz"
                />
              </TouchableOpacity>
            </View>
            <Text style={Style.cp}>© 2020. Batix - All Right Reserved</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
