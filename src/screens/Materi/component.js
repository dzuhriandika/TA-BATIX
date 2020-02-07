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
import ArrowBack from '../../svg/ArrowBack';
import ArrowNext from '../../svg/ArrowNext';

export default class Materi extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={IMAGES.bImage} style={{width: 100 + '%'}}>
          <Header style={{backgroundColor: 'transparent'}}>
            <Left>
              <Button transparent>
                <Icon name="arrow-round-back" />
              </Button>
            </Left>
            <Body>
              <Title>Materi</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="more" />
              </Button>
            </Right>
          </Header>
        </ImageBackground>
        <View padder>
          <ScrollView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card padder style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Apa itu Batik ?</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card padder style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Garuda - Yogyakarta</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card padder style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Garuda - Yogyakarta</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card padder style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Garuda - Yogyakarta</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gentongan')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Gentongan - Madura</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Jepara')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Jepara - Jepara</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kawung')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>
                  Batik Kawung - Jawa Tengah
                </Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Keraton')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>
                  Batik Keraton - Yogyakarta
                </Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MegaMendung')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>
                  Batik Mega Mendung - Cirebon
                </Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Parang')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Parang - Pulau Jawa</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PringSedapur')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>
                  Batik Pring Sedapur - Magetan
                </Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Priyangan')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>
                  Batik Priyangan - Tasikmalaya
                </Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Simbut')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Simbut - Banten</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sogan')}>
              <Card style={Style.cardMateri}>
                <Text style={Style.titleMateri}>Batik Sogan - Solo</Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TujuhRupa')}>
              <Card style={[Style.cardMateri, Style.mb]}>
                <Text style={Style.titleMateri}>
                  Batik Tujuh Rupa - Pekalongan
                </Text>
                <Right>
                  <ArrowNext style={Style.icon} />
                </Right>
              </Card>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
