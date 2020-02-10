/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, View, Body} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Style from './styles';
import ArrowLeft from '../../Svg/arrowLeft';
import Header from '../../components/Header';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Motif Batik Mega Mendung',
      from: 'Asal  : Cirebon',
      attribute: 'Ciri-ciri	: Motif mendung di langit mega yang berwarna cerah.',
      history:
        'Sejarah	: Sejarah motif batik mega mendung jika ditinjau berdasarkan sumber referensi buku juga literatur yang ada akan mengarah pada satu sejarah akan kedatangan bangsa China ke wilayah Cirebon yang pada akhirnya merujuk pada pernikahan Sunan Gunung Jati dengan ratu Ong Tien pada abad ke-16. Kemudian rakyat cirebon mengenal beberapa benda seni China seperti piring, keramik, dan kain yang memiliki motif bentuk awan. Awan di dalam Paham Taoisme melambangkan nirwana sebagai gambaran dunia yang luas, abadi, bebas dan bermakna transidental konsep ketuhanan. Awan juga direpresentasikan oleh kaum sufi sebagai ungkapan yang sama yaitu konsep luas dan bebas.Hal ini menjadi perhatian para seniman batik cirebon untuk dituangkan kedalam kain batik menjadi satu nama motif baru yaitu motif batik mega mendung. Satu hal yang membedakan antara motif batik china dengan batik mega mendung yaitu pada pola awan yang terbentuk dimana motif batik china memiliki garis awan berbentuk bulatan atau lingkaran, sedangkan batik mega mendung cirebon, berupa garis awan yang cenderung lancip, lonjong, dan segitiga. Sejarah lain mengatakan bahwa perkembangan batik cirebon juga terkait dengan sejarah perkembangan gerakan kaum tarekat yang mengabdi di keraton cirebon sebagai sumber penghasilan untuk mendanai kelompok tarekat tersebut. Kelompok tersebut tinggal di desa trusmi yang terletak 4 km dari keraton cirebon. Makna lain dari motif batik mega mendung warna biru dengan kombinasi warna merah yang menggambarkan sebuah maskulinitas, dinamisme, terbuka, lugas, dan egaliter. Juga menjadi lambang sebagai pembawa hujan yang dinantikan untuk membawa kesuburan.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Mega Mendung - Cirebon"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.megaMendung} />
          </View>
          <Text>
            {this.state.from}
            {'\n'}
            {'\n'}
            {this.state.attribute}
            {'\n'}
            {'\n'}
            {this.state.history}
          </Text>
          <Text> </Text>
        </ScrollView>
      </Container>
    );
  }
}
