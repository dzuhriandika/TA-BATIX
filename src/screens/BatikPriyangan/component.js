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
      title: 'Motif Batik Priyangan',
      from: 'Asal  : Tasikmalaya',
      attribute:
        'Ciri-ciri 	: Memiliki motif tumbuhan, dimana tumbuhan tersebut digambar dan tersusun rapi dan simetris. Batik ini memiliki warna terang namun tetap kalem dan tidak mencolok.',
      history:
        'Sejarah 	: Batik tasikmalaya memiliki tiga jenis motif batik yang populer yaitu Batik Sukapura, Batik Sawoan, dan Batik Tasik. Anda akan dapat membedakan secara sepintas bahwa Batik Sukapura memiliki kemiripan dengan batik madura yang memiliki kontras warna juga ukuran motifnya, sedangkan batik sawoan merupakan salah satu jenis batik yang didominasi warna coklat tua seperti pada buah sawo yang dikombinasikan warna indigo dengan ornamen dasar warna putih, sangat mirip dengan batik solo dan batik cirebon. Untuk batik tasikmalaya sendiri memiliki ciri khas penggunaan warna yang cerah karena pengaruh oleh batik pesisiran. Motif batik tasikmalaya mempunyai tiga motif batik populer yaitu motif batik burung, motif batik payung, dan motif batik kacang panjang yang sangat kental dengan nuansa kota parahyangan. Beberapa motif pengembangan dari batik tasikmalaya yang lain seperti batik bunga anggrek dengan isen-isen burung, motif batik merak ngibing, motif batik cala culu, motif batik pisang bali, motif batik sapu jagat, dan motif batik awi ngarambat juga ada beberapa motif turunannya yang bermotif seperti akar, balimbing, antanan, guci latar batu, lancah tasik, rereng daun peuteuy papangkah, sente, tsunami udey, merak, gunung kawi, lamban samping, kadaka, lancah sawat ungu, renfiel, rereng orlet, rereng sintung, manuk latar sisik, manuk rereng peutey selong, merak latar haremis, sidomukti payung, taleus sukaraja, sisit naga, dan turih-wajit-Limar. Batik tasikmalaya tidak seperti batik jawa pada umumnya yang memiliki filosofi luhur pada setiap motifnya, namun batik tasikmalaya hanya memberikan pesan bahwa kita harus bersinergi dengan alam untuk menjaga kelestariannya.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Priyangan - TasikMalaya"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.priyangan} />
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
