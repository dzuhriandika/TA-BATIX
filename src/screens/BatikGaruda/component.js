/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, View, Body} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import ArrowLeft from '../../Svg/arrowLeft';
import Header from '../../components/Header';
import Style from './styles';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Motif Batik Garuda',
      from: 'Asal 	: Yogyakarta',
      attribute:
        'Ciri-ciri 	: Motif ini terdiri dari dua sayap dan ditengahnya terdapat badan dan ekor. Motif ini dibuat berdasarkan atas kepercayaan masyarakat di masa lalu, dimana burung garuda merupakan simbol kehidupan dan kejantanan.',
      history:
        'Sejarah	: Batik Yogyakarta motif gurda atau garuda umumnya dipadu dengan motif batik lainya seperti motif batik sawat dan dikenal dengan nama sawat gurdo. Motif Gurda lebih mudah dimengerti karena disamping bentuknya yang sederhana juga gambarnya sangat jelas karena tidak terlalu banyak variasinya. Kata gurda berasal dari kata garuda, yaitu nama sejenis burung besar yang menurut pandangan hidup orang Jawa khususnya Yogyakarta mempunyai kedudukan yang sangat penting. Bentuk motif gurda ini terdiri dari dua buah sayap (lar) dan ditengah-tengahnya terdapat badan dan ekor. Menurut orang Yogyakarta burung ini dianggap sebagai binatang yang suci. Dalam cerita kenaikan Batara Wisnu ke Nirwana dengan mengendarai burung Garuda. Burung ini dianggap sebagai burung yang teguh timbul tanpa maguru, yang artinya sakti tanpa berguru kepada siapapun. Adapun cerita tentang asal mula Garuda menjadi kendaraan Sang Hyang Wisnu, menurut salah seorang informan berawal ketika terjadi peperangan antara Garuda dengan para dewa. Dalam peperangan tersebut para dewa dapat dikalahkan, sehingga mereka meminta bantuan pada Sang Hyang Wisnu, yang kemudian menemui burung Garuda. Pada pertemuan itu terjadi perdebatan di antara keduanya. Oleh karena para dewa telah mengalami kekalahan maka burung Garuda mengajukan usul agar para dewa mengajukan permohonan apa saja yang nantinya akan dikabulkan oleh Garuda. Akhirnya Sang Hyang Wisnu memohon.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Garuda - Yogyakarta"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.garuda} />
          </View>
          <Text>
            {this.state.from}
            {'\n'}
            {'\n'}
            {this.state.attribute}
            {'\n'}
            {'\n'}
            {this.state.history}{' '}
          </Text>
          <Text />
        </ScrollView>
      </Container>
    );
  }
}
