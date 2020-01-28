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
                  source={IMAGES.garuda}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Garuda - Yogyakarta</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gentongan')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.gentongan}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Gentongan - Madura</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Jepara')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.jepara}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Jepara - Jepara</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kawung')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.kawung}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>
                  Batik Kawung - Jawa Tengah
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Keraton')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.keraton}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>
                  Batik Keraton - Yogyakarta
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MegaMendung')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.megaMendung}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>
                  Batik Mega Mendung - Cirebon
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Parang')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.parang}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Parang - Pulau Jawa</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PringSedapur')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.pringSedapur}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>
                  Batik Pring Sedapur - Magetan
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Priyangan')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.priyangan}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>
                  Batik Priyangan - Tasikmalaya
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Simbut')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.simbut}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Simbut - Banten</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sogan')}>
              <Card style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.sogan}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>Batik Sogan - Solo</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TujuhRupa')}>
              <Card style={[Style.cardMateri, Style.mb]}>
                <Thumbnail
                  square
                  source={IMAGES.tujuhRupa}
                  style={Style.thumnailMateri}
                />
                <Text style={Style.titleMateri}>
                  Batik Tujuh Rupa - Pekalongan
                </Text>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
