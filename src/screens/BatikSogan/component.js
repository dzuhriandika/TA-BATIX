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
      title: 'Motif Batik Sogan',
      from: 'Asal : Solo',
      attribute:
        'Ciri-ciri	: Didominasi dengan warna coklat muda dan memiliki motif khas seperti bunga dengan aksen titik-titik atau lengkungan garis.',
      history:
        'Sejarah	: Batik Sogan identik dengan keraton Jawa, yaitu Yogyakarta dan Solo. Motifnya biasanya mengikuti pakem motif-motif klasik keraton. Hanya saja keduanya dibedakan pada warnanya. Sogan Jogja dominan dengan warna coklat tua-kehitaman dan putih. Sementara sogan Solo berwarna coklat-oranye dan coklat. Tetapi keduanya disebut sebagai batik sogan klasik. Berbeda dengan batik pesisiran yang motif dan warnanya lebih dinamis, kontemporer dan eksotis. Corak warna batik Sogan adalah corak warna gelap, gradasi warna coklat tua kehitam-hitaman ke warna putih, kekuningan keemasan, namun bukanlah warna kuning sebenarnya pada batik. Nuansa warna dan aksen warnanya terlihat kelam. Warna-warna batik Sogan merupakan warna yang kalem, warna hangat, warna bumi, warna semburat sinar mentari di pagi hari, warna kuning keemasan. Motif yang paling populer antara lain truntum, parang, kawung, lintang trenggono, dan wahyu tumurun. Warna klasik batik Sogan sendiri sarat dengan makna. Ini dijelaskan dalam Serat Wirid Hidayat Jati, warna kekuningan keemasan merupakan bagian dari simbol keraton bangsa burung, bangsa makhluk penerbang, warna lokus dari perjalanan rohani setelah tersingkapnya alam Siriyah. Corak warna tersebut merupakan simbol-simbol yang telah dikenal sebelum hadirnya Islam di tanah Jawa, dan dalam perkembangannya kemudian diolah kembali oleh para Wali Songo. Di dalam pakem batik Sogan terdapat lima warna penting sebagai sebagai simbol nafsu manusia, menurut Serat Wirid Hidayat Jati. Kelima corak warna tersebut adalah hitam, merah, kuning, putih dan hijau. Disebutkan hitam sebagai simbol nafsu lawwamah atau keduniawian. Merah sebagai simbol nafsu amarah, kuning sebagai simbol nafsu sufiyah dan putih simbol nafsu muthmainah atau kebaikan. Sedangkan warna coklat sebagai warna penuh kekhidmatan dan kekhusukan tradisi Jawa yang banyak menitikberatkan pada aspek batiniah, baik sebagai bentuk ekspresi maupun impresi warna.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Sogan - Solo"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.sogan} />
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
