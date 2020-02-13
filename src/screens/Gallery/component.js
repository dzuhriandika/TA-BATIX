import React, {Component} from 'react';
import {TouchableOpacity, Image, View, ScrollView} from 'react-native';
import Style from './styles';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';
import IMAGES from '../../config/image';
import Galeri from '../../components/GaleriGambar';

export default class Profile extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header
          title="Gallery"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={Style.container}>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Batik Garuda"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri1} />}
              />
              <Galeri
                title="Batik Gentongan"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri2} />}
              />
              <Galeri
                title="Batik Jepara"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri3} />}
              />
            </View>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Batik Kawung"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri4} />}
              />
              <Galeri
                title="Batik Keraton"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri5} />}
              />
              <Galeri
                title="Batik Mega"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri6} />}
              />
            </View>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Batik Parang"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri7} />}
              />
              <Galeri
                title="Batik Priangan"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri12} />}
              />
              <Galeri
                title="Batik PringSedapur"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri8} />}
              />
            </View>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Batik Simbut"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri9} />}
              />
              <Galeri
                title="Batik Sogan"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri10} />}
              />
              <Galeri
                title="Batik TujuhRupa"
                gambar={<Image style={Style.gambar} source={IMAGES.galeri11} />}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
