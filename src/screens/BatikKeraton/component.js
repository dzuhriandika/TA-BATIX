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
      title: 'Motif Batik Keraton',
      from: 'Asal  : Yogyakarta',
      attribute:
        'Ciri-ciri 	: Motif bunga yang simetris atau saya burung yang dikenal sebagai motif sawat lar.',
      history:
        'Sejarah	: Batik Yogyakarta tentu saja tidak terlepas dari sejarah berdirinya Kerajaan Mataram Islam oleh Panembahan Senopati. Setelah memindahkan pusat Kerajaan dari Demak ke Mataram, beliau sering bertapa di sepanjang pesisir Pulau Jawa, antara lain Parangkusuma menuju Dlepih Parang Gupito, menelusuri tebing Pegunungan Seribu yang tampak seperti “pereng” atau tebing berbaris. Sebagai Raja Jawa tentu  menguasai seni, maka keadaan tempat tersebut mengilhaminya menciptakan pola batik lereng atau parang, yang merupakan ciri ageman (pakaian) Mataram berbeda dengan pola batik sebelumnya. penciptanya adalah raja pendiri kerajaan Mataram oleh keturunannya, pola-pola parang tersebut hanya boleh dikenakan oleh raja dan keturunannya di lingkungan istana saja. Motif larangan tersebut dicanangkan oleh Sultan Hamengku Buwono I pada tahun 1785. Pola batik yang termasuk larangan antara lain : Parang Rusak Barong, Parang Rusak Gendreh, Parang Klithik, Semen Gedhe Sawat Gurdha, Semen Gedhe Sawat lar, Udan liris, Rujak Senthe, serta motif parang-parangan yang ukurannya sama dengan parang rusak. Adanya perjanjian Giyanti tahun 1755 yang melahirkan Kasunanan Surakarta dan Kasultanan Yogyakarta, segala macam tata adibusana termasuk di dalamnya adalah batik, diserahkan sepenuhnya oleh Keraton Surakarta kepada Keraton Yogyakarta. Hal inilah yang kemudian menjadikan keraton Yogyakarta menjadi kiblat perkembangan budaya, termasuk pula khazanah batik. Kalaupun batik keraton Surakarta mengalami beragam inovasi, namun sebenarnya motif pakemnya tetap bersumber pada motif batik Keraton Yogyakarta. Batik Tradisional Kasultanan Yogyakarta mempunyai ciri khas dalam tampilan warna dasar putih yang mencolok bersih. Pola geometri Keraton Kasultanan Yogyakarta sangat khas, besar-besar dan sebagian diantaranya diperkaya dengan parang dan nitik. Sementara itu, batik di Puro Pakualaman merupakan perpaduan antara pola batik Keraton Kasultanan Yogyakarta dan warna batik Keraton Surakarta. Sejak adanya hubungan keluarga yang erat antara Puro Pakualaman dengan Keraton Surakarta ketika Sri Paku Alam VII mempersunting putri Sri Susuhunan Pakubuwono X. Putri Keraton Surakarta yang memberi warna dan nuansa Surakarta pada batik Pakualaman, hingga akhirnya terjadi perpaduan keduanya. Dua pola batik yang terkenal dari Puro Pakulaman yakni Pola Candi Baruna yang terkenal sejak sebelum tahun 1920 dan Peksi Manyuro yang merupakan ciptaan RM Notoadisuryo. Sedangkan pola batik Kasultanan yang terkenal antara lain Ceplok Blah Kedaton, Kawung, Tambal Nitik, Parang Barang Bintang Leider dan sebagainya.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Keraton - Yogyakarta"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.keraton} />
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
