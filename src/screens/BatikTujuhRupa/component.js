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
      title: 'Motif Batik Tujuh Rupa ',
      from: 'Asal  : Pekalongan',
      attribute:
        'Ciri-ciri	: Menampilkan bentuk motif yang bergambar hewan atau tumbuhan.',
      history:
        'Sejarah 	: Secara filosofi, para pengrajin Batik Pekalongan telah menempatkan hiasan keramik Tiongkok sebagai manifestasi ikatan kebudayaan leluhur yang dalam lukisannya memiliki kefasihan dan kelembutan. Pemilihan ragam hias jenis tumbuhan yang sebagian besar menjadi objek utama dan banyak terdapat pada lukisan keramik Tiongkok. Selain itu ragam hias batik Pekalongan yang berbentuk binatang seperti burung pipit, burung merak, ular naga dan kupu-kupu turut melengkapi ragam hias tumbuhan. Pola-pola batik untuk kepentingan peribadatan mengadaptasi ragam-ragam hias bentuk-bentuk manusia dewa dalam kerajaan langit sesuai kepercayaan agama leluhur yang disebut Tok-Wi (Jenis batik yang digunakan untuk alas altar persembahyangan) orang Tionghoa. Pengaruh batik Cirebon pada perkembangan Batik Pekalongan juga nampak pada penghargaan yang diberikan keraton Cirebon terhadap Batik Pekalongan khususnya oleh kalangan ningrat Tionghoa. Penghargaan keraton Cirebon terhadap Batik Pekalongan tampaknya bukan hanya disebabkan oleh ragam hias dari keramik dinasti Ming namun juga disebabkan oleh ciri khas Batik Pekalongan yaitu cara pembuatan yang berbeda dengan cara pembuatan batik di daerah lain khususnya pada masa itu. Motif Batik Tujuh Rupa sangat kental dengan nuansa alam. Sehingga umumnya batik Pekalongan menampilkan bentuk motif bergambar hewan atau tumbuhan. Motif-motif tersebut diambil dari berbagai campuran kebudayaan lokal dan etnis cina. Sebab dahulunya Pekalongan adalah tempat transit para pedagang dari berbagai negara. Sehingga akulturasi budaya itulah yang membuat Batik Pekalongan sangat khas, khususnya Motif Jlamprang, Motif Buketan, Motif Terang Bulan, Motif Semen, Motif Pisan Bali dan Motif Lung-Lungan.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Tujuh Rupa - Pekalongan"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.tujuhRupa} />
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
