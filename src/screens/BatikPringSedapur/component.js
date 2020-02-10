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
      title: 'Motif Pring Sedapur',
      from: 'Asal  : Magetan',
      attribute:
        'Ciri-ciri 	: Memiliki ciri khas yang simple, motif yang dipakai adalah motif bambu maka dari itu sering disebut Batik Pring.',
      history:
        'Sejarah	: Sejarah Batik Pring Sedapur dimulai dari masa awal perkembangan Islam. Setelah pecah perang, banyak prajurit Mataram lari ke daerah timur Gunung Lawu untuk mencari tempat yang aman, di antaranya di Desa Sidomukti dan sekitarnya. Di tempat itu mereka mengenalkan budaya batik kepada masyarakat sekitar Desa Sidomukti. “Awalnya para perajin mayoritas berasal Dusun Papringan. Mereka mendapatkan keahlian membatik dari nenek moyangnya,”ujar Tikno, panggilan akrabnya. Di awal masa jabatannya sebagai kepala Desa Sidomukti pada tahun 1998, Tikno bersama Arif, salah satu penghobi batik asal Ngawi, belajar bagaimana membuat batik dan mengembangkannya di Magetan. Dengan mengambil motif gambar bambu yang terdapat di Dukuh Papringan jadilah motif batik pring sedapur Menurut Tikno, motif batik pring sedapur memiliki makna filosofi yang sangat tinggi. Tanaman bambu biasa hidup bergerombol, membentuk satu kekuatan. Bambu jika bersatu akan menjadi sebuah kekuatan, jika diurai menjadi sebuah tali yang sangat erat. Awal pengembangannya, Tikno menjalin kerjasama Kessos Kab. Magetan. Saat itu diadakan pelatihan bagi warga Desa Sidomukti yang ingin belajar membatik. Selain itu, juga diberikan peralatan batik kepada warga yang sudah mengikuti pelatihan. Akhirnya saat ini hasil tersebut bisa dirasakan manfaatnya. Bahkan batik Pring Sedapur dijadikan sebagai salah satu ikon Kabupaten Magetan. Belasan ribu pegawai negeri sipil di seluruh Magetan memakai seragam dengan corak Pring Sedapur setiap hari tertentu. Rata-rata dijual Rp 65 ribu hingga Rp300 ribu. Pemasaran masih untuk pasar lokal, namun ada juga dari Lamongan, Surabaya, dan Yogyakarta. “Dari kota-kota besar itulah batik Sidomukti pring sedapur diharapkan mulai mendunia,”kata Tikno. Namun Ketua Kelompok Perajin Batik Pring Sedapur, Mukti Rahayu, Umiyati mengungkapkan, masuknya batik Solo, Yogyakarta, dan Pekalongan di pasaran lokal membuat batik motif Pring Sedapur mulai kalah bersaing. Meski diakui sebagai batik khas Magetan, kata Umiyati, perhatian Pemkab Magetan sendiri masih kurang. Apalagi hingga kini batik Pring Sedapur belum memiliki hak paten. Meski tanpa hak cipta dan hak paten, kelompok perajin batik ini tetap berkarya. Bahkan kini, mereka banyak memodifikasi motif batik Pring Sedapur dengan motif tren selera pasar. Motif cendrawasih dan bermacam jenis bunga digabungkan dengan motif serumpun atau seonggok bambu. Ya, motif batik pring sedapur tetap lentur dengan perubahan zaman agar tidak luntur warnanya. Berjuang agar tetap eksis.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Batik Pring Sedapur - Magetan"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.pringSedapur} />
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
