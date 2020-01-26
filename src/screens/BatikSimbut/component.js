/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, View, Header, Body} from 'native-base';
import {Image, ScrollView} from 'react-native';
import Style from './styles';
import IMAGE from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Motif Batik Simbut',
      from: 'Asal  : Banten',
      attribute: 'Ciri-ciri	: Motif batik ini menyerupai daun talas.',
      history:
        'Sejarah	: Batik Banten beberapa tahun terakhir menjadi pembicaraan karena baru diketahui bahwa ternyata masyarakat Banten sudah mempunyai tradisi membatik sejak abad 17, dimana kala itu dikenal yang namanya selimut batik atau Simbut. Sejak masa kejayaan Banten berakhir, tradisi ini pun tidak lagi dilanjutkan. Batik Banten mulai dikembangkan lagi pada tahun 2002, ketika seorang arkeolog menemukan peninggalan Kerajaan Banten yang kemudian diteliti. Arkeolog tersebut ingin memperkenalkan ragam hias yang di dapat selama penelitian arkeologi di situs Banten Lama. Batik Banten memiliki tampilan warna yang sangat meriah, gabungan dari warna warna pastel yang berkesan ceria namun juga lembut. Sangat cocok dalam menggambarkan karakter orang Banten yang memiliki semangat tinggi, cita-cita tinggi, karakter yang ekspresif namun tetap rendah hati. Paduan warna tersebut dipengaruhi oleh air tanah, yang dalam proses pencelupan, mereduksi warna-warna terang menjadi warna pastel karena kandungan yang ada di dalamnya. Motif Batik Banten didominasi oleh bentuk daun yang menyerupai daun talas. Motif ini bisa dibilang motif yang paling sederhana, hanya menyusun dan merapikan satu jenis motif saja. Motif Simbut berasal dari suku badui pedalaman di sunda yang kental dengan peradaban lama. Namun seiring dengan berjalannya waktu, para penduduk badui yang menerima modernitas mengembangkan batik ini di daerah pesisir Banten. Sehingga Batik Motif Simbut dikenal juga dengan Batik Banten.',
    };
  }

  render() {
    return (
      <Container>
        <Header style={Style.header}>
          <Body>
            <Text style={Style.titleHeader}>{this.state.title}</Text>
          </Body>
        </Header>
        <ScrollView style={Style.container}>
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
