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
      title: 'Motif Parang',
      from: 'Asal  : Pulau Jawa',
      attribute:
        'Ciri-ciri	: Motif batik ini berbentuk seperti huruf S miring berombak panjang.',
      history:
        'Sejarah 	: Motif Batik Parang merupakan salah satu motif paling tua di Indonesia. Kata Parang berasal dari Pereng atau lereng atau tebing yang memiliki bentuk garis diagonal sebagaimana yang ada dalam motif batik ini. Dalam setiap motif batik Parang biasanya akan terdapat susunan motif yang membentuk seperti huruf S , saling terkait satu dengan lainnya, saling menjalin, dan ini melambangkan sebuah kesinambungan. Bentuk huruf S tersebut diadaptasi dari bentuk  ombak lautan, menggambarkan semangat yang tidak pernah padam. Motif batik Parang merupakan batik asli Indonesia yang sudah ada sejak zaman keraton Mataram Kartasura (Solo). Diciptakan oleh pendiri Keraton Mataram, sehingga motif ini menjadi pedoman utama dalam menentukan derajat kebangsawanan seseorang. Bahkan pada jaman dulu motif parang hanya boleh dikenakan oleh raja dan keturunannya. Hingga saat ini Motif parang telah mengalami banyak perkembangan dan modifikasi. Ratusan bahkan ribuan motif baru bermunculan sehingga dapat memperkaya perbendaharaan motif batik di Indonesia. Beberapa motif batik Parang yang paling populer diantaranya misalnya Parang Rusak Barong, Parang Kusuma, Parang Klithik, Lereng Sobrah dan lain-lain. Secara filosofis, motif batik Parang memang memiliki kandungan makna yang tinggi. Bahasa simbol yang terkandung didalamnya adalah sebuah pesan bahwa sebagai manusia hendaknya tidak pernah menyerah dalam mengarungi kehidupan, sebagaimana ombak di samudera yang tak pernah lelah untuk bergerak. Bentuk motif batik parang yang saling berkesinambungan, menggambarkan jalinan hidup yang tidak pernah putus, selalu konsisten dalam upaya untuk memperbaiki diri, memperjuangkan kesejahteraan, maupun dalam menjaga hubungan  antara manusia dengan alam, manusia dengan manusia dan manusia dengan Tuhannya. Garis diagonal yang terdapat dalam motif batik Parang, memberi gambaran bahwa manusia harus memiliki cita-cita yang luhur, kokoh dalam pendirian, serta setia pada nilai kebenaran. Dinamika dalam pola parang ini juga disebut ketangkasan, kewaspadaan, dan kontituinitas antara satu dengan yang lainnya.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Parang - Pulau Jawa"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.parang} />
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
