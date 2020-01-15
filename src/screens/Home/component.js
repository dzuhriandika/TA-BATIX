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
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {ScrollView} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header style={Style.header}>
          <Left>
            <Thumbnail
              source={IMAGES.smallAppLogo}
              style={Style.smallAppLogo}
            />
          </Left>
          <Body>
            <Title style={Style.titleHead}>BATIX</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View padder style={Style.container}>
            <Thumbnail square source={IMAGES.thumnail} style={Style.thumnail} />
            <View style={Style.iconContainer}>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Definition')}
                  style={Style.iconBox}>
                  <Icon name="ios-search" style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Pengertian</Text>
              </View>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Type')}
                  style={Style.iconBox}>
                  <Icon name="ios-paper" style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Jenis Batik</Text>
              </View>
              <View style={Style.card}>
                <Button
                  onPress={() => this.props.navigation.navigate('Making')}
                  style={Style.iconBox}>
                  <Icon name="cog" style={Style.icon} />
                </Button>
                <Text style={Style.titleIcon}>Pembuatan</Text>
              </View>
            </View>
            <Card
              style={Style.cardMateri}
              onPress={() => this.props.navigation.navigate('Materi')}>
              <Thumbnail
                square
                source={IMAGES.batik}
                style={Style.thumnailMateri}
              />
              <Text style={Style.titleMateri}>Batik Sukeni - Lombok</Text>
            </Card>
            <Card
              style={Style.cardMateri}
              onPress={() => this.props.navigation.navigate('Materi')}>
              <Thumbnail
                square
                source={IMAGES.batik}
                style={Style.thumnailMateri}
              />
              <Text style={Style.titleMateri}>Batik Sukeni - Lombok</Text>
            </Card>
            <Card
              style={Style.cardMateri}
              onPress={() => this.props.navigation.navigate('Materi')}>
              <Thumbnail
                square
                source={IMAGES.batik}
                style={Style.thumnailMateri}
              />
              <Text style={Style.titleMateri}>Batik Sukeni - Lombok</Text>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}
