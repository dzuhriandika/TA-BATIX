/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Container} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Style from './styles';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jenis - Jenis Batik ',
      title2: 'Batik Tulis',
      title3: 'Batik Cap',
      title4: 'Batik Printing',
      body:
        '       Batik tulis adalah batik yang dibuat secara manual menggunakan tangan dengan alat bantu canting untuk menerakan malam pada corak batik. Cara pembuatan batik dengan melukiskan sebuah pola pada kain dengan menggunakan tangan, alat-alat yang diperlukan antara lain: Canting, Gawangan, Wajan, kauli, Anglo, Tipas/ Tepas. Pembuatan batik tulis membutuhkan kesabaran dan ketelatenan yang tinggi karena setiap titik dalam motif berpengaruh pada hasil akhirnya. Motif yang dihasilkan dengan cara ini tidak akan sama persis. Kerumitan ini yang menyebabkan harga batik tulis sangat mahal. Jenis batik ini dipakai raja, pembesar keraton, dan bangsawan sebagai simbol kemewahan.',
      body2:
        '       Batik cap adalah batik yang dibuat dengan menggunakan cap atau semacam stempel motif batik yang terbuat dari tembaga. Cap digunakan untuk menggantikan fungsi canting sehingga dapat mempersingkat waktu pembuatan. Batik cap dihasilkan dari proses pencelupan semacam alat yang dibuat dari tembaga yang sudah dibentuk sedemikian rupa pada kain. Motif batik cap dianggap kurang memiliki nilai seni karena semua motifnya sama persis. Harga batik cap cukup murah karena dapat dibuat secara masal.',
      body3:
        '       Batik printing disebut juga dengan batik sablon, karena proses pembatikan jenis batik ini sangat mirip dengan proses penyablonan. Motif batik telah di buat dan desain di print di atas alat offset/sablon, sehingga dapat sangat memudahkan pengerjaan batik khususnya pewarnaan dapat langsung dilakukan dengan alat ini.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Jenis Jenis Batik"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View>
            <Text style={Style.title}>{this.state.title2}</Text>
            <View style={Style.logoBox}>
              <Image style={Style.logo} source={IMAGES.tulis} />
            </View>
            <Text>{this.state.body}</Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              {this.state.title3}
            </Text>
            <View style={Style.logoBox}>
              <Image style={Style.logo} source={IMAGES.cap} />
            </View>
            <Text>{this.state.body2}</Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              {this.state.title4}
            </Text>
            <View style={Style.logoBox}>
              <Image style={Style.logo} source={IMAGES.print} />
            </View>
            <Text>
              {this.state.body3}
              {'\n'}
            </Text>
            <Text />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
