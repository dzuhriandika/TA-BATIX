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
      title: 'Motif Batik Jepara',
      from: 'Asal 	: Jepara',
      attribute:
        'Ciri-ciri 	: Motif batik yang lama mempunyai warna lung hitam dengan gajah berwarna coklat dan daun ulir berwarna hijau. Motif batik yang baru mempunyai lebih banyak variasi.',
      history:
        'Sejarah 	: Seni batik di Jepara telah ada sejak era Kartini. Sudah ada satu abad lebih era batik Jepara hilang dari peredaran. Batik pada zaman dahulu hingga sekarang masih dikerjakan oleh kalangan ibu-ibu. Maka dari itu tidak salah jika batik ini lebih dekat dengan seni ibu. Motif batik peninggalan eyangnya itu ada yang berupa bunga kantil, salah satu pohonnya ada di belakang pendopo Kabupaten Jepara. Motif lain adalah Parang Gondosuli, dan motif Srikaton. Motif terakhir ini bergaya Mataraman, namun berbeda dengan yang ada di Solo dan Yogyakarta yang lebih masyhur dengan istilah Srigunung. Kini Suyanti bersama paguyubannya sudah membikin setidaknya puluhan motif baru. Larasati Suliantoro mengatakan butuh keseriusan untuk tetap membumikan batik yang kini menjadi salah satu kekhasan Indonesia. Pihaknya yakin, batik akan tetap bisa diterima masyarakat. Yang patut diperhatikan saat ini adalah membina generasi penerus yang memiliki perhatian terhadap batik. Bupati Jepara Hendro Martojo mengungkapkan, advokasi dilakukan pemkab dengan mengupayakan pendaftaran hak cipta untuk karya batik khas Jepara. Selain itu juga memperluas pengenalan batik, terutama untuk kalangan pelajar di sekolah yang khusus memberikan perhatian pada seni membatik. Dalam buku karya Rouffoer yang sudah diterjemahkan, yakni Kesenian Batik di Hindia Belanda dan Sejarahnya. Dalam buku itu disebutkan, RA Kartini pernah mengirim cinderamata ke Belanda berupa kain batik khas Jepara.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Jepara - Jepara"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.jepara} />
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
