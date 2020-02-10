/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Thumbnail,
  Left,
  Body,
  Title,
  Right,
  Container,
} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Style from './styles';
import ArrowLeft from '../../Svg/arrowLeft';
import Header from '../../components/Header';
import IMAGES from '../../config/image';
import Video from 'react-native-video';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Pembuatan Batik',
      title2: 'Pencucian Mori',
      title3: 'Nyorek/mola',
      title4: 'Nyanting',
      title5: 'Medel',
      title6: 'Ngerok dan Nggirah',
      title7: 'Mbironi',
      title8: 'Nyonga',
      title9: 'Nylorot',
      body:
        '       Tahap pertama adalah pencucian kain mori untuk menghilangkan kanji, dilanjutkan dengan pengloyoran (memasukkan kain ke minyak jarak/minyak kacang dalam abu merang/londo agar kain menjadi lemas), dan daya serap terhadap zat warna lebih tinggi. Agar susunan benang tetap baik, kain dikanji kemudian dijemur, selanjutnya dilakukan pengeplongan (kain mori dipalu untuk menghaluskan lapisan kain agar mudah dibatik).',
      body2:
        '       Membuat pola di atas kain dengan cara meniru pola yang sudah ada (ngeblat). Contoh pola biasanya dibuat di atas kertas dan kemudian dijiplak sesuai pola di atas kain. Proses ini bisa dilakukan dengan membuat pola di atas kain langsung dengan canthing maupun dengan menggunakan pensil. Agar proses pewarnaan bisa berhasil dengan bagus atau tidak pecah, perlu mengulang batikan di kain sebaliknya. Proses ini disebut gagangi.',
      body3:
        '       Menorehkan malam batik ke kain mori yang dimulai dengan nglowong (menggambar garis luar pola dan isen-isen). Di dalam proses isen-isen terdapat istilah nyecek yaitu membuat isian di dalam pola yang sudah dibuat, misalnya titik-titik. Ada pula istilah nruntum yang hampir sama dengan isen-isen namun lebih rumit. Lalu dilanjutkan dengan nembok (mengeblok bagian pola yang tidak akan diwarnai atau akan diwarnai dengan warna yang lain).',
      body4:
        '       Pencelupan kain yang sudah dibatik ke cairan warna secara berulang kali hingga mendapatkan warna yang dikehendaki.',
      body5:
        '       Malam pada kain mori dikerok dengan lempengan logam dan dibilas dengan air bersih, kemudian diangin-anginkan hingga kering.',
      body6:
        '        Menutup warna biru dengan isen pola berupa cecek atau titik dengan malam.',
      body7:
        '       pencelupan kain untuk memberi warna coklat pada bagian-bagian yang tidak ditutup malam.',
      body8:
        '       Melepaskan malam dengan memasukkan kain ke dalam air mendidih yang sudah dicampuri bahan untuk mempermudah lepasnya lilin. Kemudian dibilas dengan air bersih dan diangin-anginkan.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Cara Pembuatan"
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
            <Text>{this.state.body}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title3}</Text>
            <Text>{this.state.body2}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title4}</Text>
            <Text>{this.state.body3}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title5}</Text>
            <Text>{this.state.body4}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title6}</Text>
            <Text>{this.state.body5}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title7}</Text>
            <Text>{this.state.body6}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title8}</Text>
            <Text>{this.state.body7}</Text>
          </View>
          <View>
            <Text style={Style.title}>{this.state.title9}</Text>
            <Text>{this.state.body8}</Text>
            <Text />
          </View>
          <View>
            <Video
              source={{
                uri: 'https://youtu.be/Va_YSGEAmtE',
              }}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
