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
      title: 'Motif Kawung',
      from: 'Asal 	: Jawa Tengah',
      attribute:
        'Ciri-ciri 	: Motif Kawung ini terinspirasi dari bentuk buah kolang kaling. Bentuk kolang kaling ini disusun empak sisi membentuk lingkaran.',
      history:
        'Sejarah 	: Sejarah batik kawung yang lain menyebutkan bahwa terdapat cerita rakyat dimana seorang pemuda dari desa yang berwibawa juga disegani oleh lingkungannya karena tutur kata yang santun dan bijak hingga menjadi perhatian oleh kalangan keraton Mataram. Pihak keraton mataram memiliki rasa penasaran yang tinggi atas kemasyuran pemuda tersebut, hingga diutuslah seorang telik sandi kepada pemuda tersebut untuk menghadap sang raja. Sang ibu mendengar dari masyarakat setempat bahwa sang putra diundang oleh raja mataram. Hal ini membuat sang ibunda menjadi terharu dan menggantungkan banyak harapan kepada pemuda tersebut. Untuk itulah sang ibunda tersebut membuatkan batik dengan motif kawung, dengan harapan putranya bisa menjaga diri dari hawa nafsu juga menjadi manusia yang berguna bagi masyarakat banyak. Singkat cerita pemuda tersebut naik pangkat menjadi adipati Wonobodro. Dalam prosesi pengangkatannya sebagai adipati, pemuda tersebut memakai model baju batik motif kawung pemberian ibundanya. Pada umumnya turunan motif batik kawung diberi nama berdasarkan ukuran bentuk bulat-lonjong yang ada pada suatu motif batik kawung tertentu. Misalnya : Motif batik kawung picis yang merupakan motif kawung yang tersusun oleh bentuk bulat-lonjong yang berukuran kecil menyerupai mata uang picis senilai dengan sepuluh senyang, Motif batik kawung bribil merupakan salah satu jenis motif kawung yang tersusun oleh bentuk bulat-lonjong yang ukurannya menyerupai mata uang bribil senilai setengah sen, Motif batik kawung sen merupakan salah satu jenis motif kawung dimana ukuran isen-isennya sebesar mata uang sen. Seringkali mata uang sen digunakan untuk ditebar sepanjang jalan sebagai pengiring jenazah hingga pada akhirnya kain batik kawung ini digunakan sebagai penutup orang mayat sebelum dikafani atau disemayamkan. Sumber lain mengatakan bahwa karena filosofi dari motif batik kawung sen yang memaknai kehidupan akan kembali ke alam sawung.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Kawung - Jawa Tengah"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.kawung} />
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
