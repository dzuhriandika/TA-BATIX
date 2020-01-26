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
import {ScrollView, TouchableOpacity} from 'react-native';

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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Garuda</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gentongan')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Gentongan</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Jepara')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Jepara</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kawung')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Kawung</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Keraton')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Keraton</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MegaMendung')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Mega Mendung</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Parang')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Parang</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PringSedapur')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Pring Sedapur</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Priyangan')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Priyangan</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Simbut')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Simbut</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sogan')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Sogan</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TujuhRupa')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.batik}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Tujuh Rupa</Text>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
