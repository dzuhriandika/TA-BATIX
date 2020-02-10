/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Text,
  Icon,
  Header,
  Left,
  Body,
  Button,
  Title,
  View,
  Content,
  Image,
  Right,
  Thumbnail,
  Card,
  CardItem,
  Item,
  Input,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Materi from '../../svg/Materi';
import Tutorial from '../../svg/Tutorial';
import Test from '../../svg/Test';
import Quiz from '../../svg/Quiz';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={Style.container}>
        <ImageBackground
          source={IMAGES.bImage}
          style={{width: 100 + '%', height: 200}}>
          <View padder>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                marginTop: 22,
                fontFamily: 'Nunito-Bold',
              }}>
              Hello, Ganteng
            </Text>
            <Item
              rounded
              style={{
                marginTop: 22,
                height: 40,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }}>
              <Icon active name="search" style={{color: 'white'}} />
              <Input placeholder="search" style={{fontFamily: 'Nunito-Regular', color: 'white'}} />
            </Item>
            <Card transparent style={Style.iconContainer}>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Materi')}
                  style={Style.iconBox}>
                  <Materi style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Materi</Text>
              </View>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Materi')}
                  style={Style.iconBox}>
                  <Tutorial style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Tutorial</Text>
              </View>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Test')}
                  style={Style.iconBox}>
                  <Test style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Ujian</Text>
              </View>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Quiz')}
                  style={Style.iconBox}>
                  <Quiz style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Quiz</Text>
              </View>
            </Card>
          </View>
        </ImageBackground>
        <View padder style={{marginTop: 50}}>
          <Text style={{fontSize: 25, fontFamily: 'Nunito-Bold',}}>Berita Seni</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Garuda')}>
            <Card transparent style={Style.cardMateri}>
              <Thumbnail
                square
                source={IMAGES.berita1}
                style={Style.thumnailMateri}
              />
              <Text style={Style.titleMateri}>Patung Bunga Terjual Mahal</Text>
              <Text style={Style.titleThumnail}>
                Patung bunga dijual mahal karena dianggap patung aestetik buat
                kaum ...{' '}
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Gentongan')}>
            <Card transparent style={Style.cardMateri}>
              <Thumbnail
                square
                source={IMAGES.berita2}
                style={Style.thumnailMateri}
              />
              <Text style={Style.titleMateri}>
                Berhala yang Menyerupai Firaun
              </Text>
              <Text style={Style.titleThumnail}>
                Ditemukan berhala yang menyerupai boneka doraemon yang sangat
                lucu ...{' '}
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
