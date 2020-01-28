/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Thumbnail,
  Header,
  Left,
  Body,
  Title,
  Right,
  Container,
} from 'native-base';
import {Image, ScrollView} from 'react-native';
import Style from './styles';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'PENGERTIAN SENI RUPA',
      body:
        'Ditinjau Dari Bentuknya Seni Rupa Dibagi menjadi Dua, Yaitu Seni Rupa 2 Dimensi dan Seni Rupa 3 Dimensi.',
      body1:
        'Seni rupa dua dimensi adalah sebuah karya seni yang memiliki dimensi panjang dan lebar saja. Atau juga bisa dikatakan sebuah karya seni yang hanya bisa dilihat dari satu sudut pandang saja. Contoh karya seni rupa dua dimensi adalah seni grafis, seni lukis, seni relief, dan lain-lain.',
      body2:
        'Sementara seni rupa dimensi tiga dimensi adalah sebuah karya seni yang memiliki dimensi lebar, panjang dan tinggi. Atau sebuah karya seni yang memiliki bentuk menyerupai bangun ruang yang memiliki volume. Contoh seni rupa tiga dimensi adalah seni kriya, seni arsitektur, seni patung, seni keramik dan lain sebagainnya.',
      body3:
        'Ditinjau dari Fungsinya Seni Rupa dibagi menjadi dua bagian, Yaitu Seni Rupa Murni dan Seni Rupa Terapan',
      body4:
        'Seni rupa murni ialah salah satu cabang seni rupa yang diciptakan tanpa mempertimbangkan fungsi dan kegunaannya. Tetapi hasil karya yang dihasilkan dari seni rupa murni lebih mengutamakan keindahan dan nilai seni. Biasanya hasil karya seni rupa murni hanya dijadikan sebagai pajangan atau hiasan suatu tempat.',
      body5:
        'Seni rupa terapan adalah sebuah karya seni yang dapat digunakan dalam menunjang kehidupan sehari-hari. Selain memiliki nilai seni, hasil karya seni rupa terapan juga memiliki nilai fungsi tertentu. Hal tersebut mengakibatkan, pembuatan karya seni ini lebih sulit dari seni murni. Seni rupa terapan (applied art) adalah karya seni rupa yang digunakan dalam kehidupan sehari-hari yang mana mengandung nilai fungsi tertentu di samping nilai seni yang dimilikinya.',
      title2: 'UNSUR-UNSUR SENI RUPA',
      body6:
        'Titik : Unsur seni rupa yang pertama adalah titik, dan inilah unsur yang paling dasar dalam karya seni ini, yang juga digunakan dalam seni rupa dimensi satu. Selain sebagai unsur yang paling dasar titik juga merupakan unsur yang paling kecil.',
      body7:
        'Garis : Unsur yang kedua adalah garis, garis terbentuk dari sebuah goresan atau lilmit dari suatu benda. Seperti bidang, ruang, tektur warna dan lain sebagainnya. Pada umumnya garis memiliki berbagai macam bentuk. Tetapi bentuk yang paling populer yang itu bentuk  horizontal dan vertical.',
      body8:
        'Bidang : Unsur bidang adalah salah satu unsur perkembangan dari penampilan unsur garis. Unsur bidang adalah perpaduan antara beberapa garis dalam keadaan tertentu. Bidang dalam seni rupa dapat diamati secara visual pada setiap karya seni berdasarkan bentuk karya seni tersebut.',
      body9:
        'Bentuk : Bentuk adalah unsur dalam seni rupa yang dapat disentuh dan dilihat secara langsung. Unsur bentuk dalam karya seni ini juga dapat disebut dengan nama shapes, yang terdiri dari benda polos yang muncul secara kebetulan. Seperti halnya ornamental, bulat, panjang, tidak teratur, persegi dan lain sebagainnya.',
      body10:
        'Tekstur : Unsur ini memiliki berbagai macam sifat yang dapat membentuk sebuah karya seni. Mulai yang bersifat halus, kasar, kusam, licin, mengkilap dan lain sebagainya. Unsur tekstur dibagi menjadi dua macam, yang pertama adalah tekstur dimana permukaannya menggambarkan suatu pesan yang sebenarnya. Atau biasa disebut atau dikenal dengan sebutan tekstur nyata.',
      body11:
        'Warna : Warna memiliki arti kesan yang ditangkap oleh indera penglihatan, berupa cahaya yang dipantulkan dari suatu benda. Dalam teori fisika juga menyebutkan bahwa warna dapat dilihat dari tujuh spektrum warna.',
      body12:
        'Gelap Terang : Unsur gelap terang dalam karya seni rupa 2 dimensi memiliki fungsi untuk menggambarkan benda agar terlihat seperti hasil karya seni 3 dimensi. Dan juga untuk memberikan kesan ruang atau kedalaman pada sebuah gambar. Teknik gelap terang dibagi menjadi dua bagian yaitu teknik gradasi dan silhouette.',
      body13:
        'Ruang : Unsur ruang juga salah satu unsur yang dapat dirasakan langsung oleh para penikmatnya. Dalam seni rupa 3 dimensi, unsur ini memiliki beberapa contoh yang ada dan sering kita gunakan dalam kehidupan sehari-hari. Seperti halnya ruangan dalam rumah, bangun ruang, ruang acara, ruang kamar dan lain-lain.',
      body14:
        'Fungsi karya seni rupa bisa dibedakan menjadi dua, yaitu fungsi estetis dan fungsi praktis.',
      body15:
        'Fungsi estetis adalah fungsi yang semata-mata ditujukan sebagai benda hias misalnya, karya batik atau tenun yang dibuat khusus untuk hiasan dinding, benda kerajinan, topeng, dan vas bunga. ',
      body16:
        'Fungsi praktis adalah karya seni yang tujuan pokok pembuatannya ditujukan sebagai benda pakai misalnya, perabotan rumah tangga, meja, kursi dan tekstil.',
      title3: 'Apa itu Batik?',
      body17:
        'Batik adalah kain bergambar yang pembuatannya secara khusus dengan menuliskan atau menerakan malam pada kain, kemudian pengolahannya diproses dengan cara tertentu yang memiliki kekhasan.',
      body18:
        'Batik Indonesia adalah salah satu sebagai budaya yang sudah ditetapkan dengan UNESCO sebagai salah satu warisan pada kemanusiaan hanya untuk budaya lisan maupun nonbendawi. Hal ini telah ditetapkan sejak 2 Oktober 2009, maka dari itu setiap tanggal 2 Oktober menjadi momen peringatan hari batik nasional di Indonesia.',
      title4: 'SEJARAH BATIK INDONESIA',
      body19:
        '   Sejarah Batik Indonesia awalnya berasal dari peninggalan nenek moyang masyarakat Jawa. Batik ini adalah warisan yang telah dinobatkan oleh UNESCO sebagai salah satu warisan kemanusiaan untuk budaya lisan dan Nonbendawi pada September 2009 lalu. Pengakuan ini dilaksanakan secara resmi pada sidang UNESCO di Abu Dhabi.',
      body20:
        '   Kini setiap tanggal 2 Oktober 2009 lalu, telah dikenal sebagai Hari Batik Nasional, yang mana bentuk sebuah ungkapan rasa syukur.',
      body21:
        '   Secara teknik batik Indonesia dinilai sarat simbol, dan budaya yang terkait erat dengan kehidupan masyarakat itu sendiri. Dengan begitu batik yang asli dari Indonesia ini tidak bisa diklaim oleh negara lain. Karena sebelumnya batik pernah diklaim sebagai warisan nenek moyang negara lain.',
      body22:
        '   Batik Indonesia sudah dikenal luas di seluruh penjuru Mancanegara. Bukan hanya terkenal oleh orang-orang Jawa, batik itu sendiri sudah menyebar di semua pulau yang ada di Indonesia.',
      body23:
        '   Baju yang bermotif batik pun bukan lagi hanya dipakai oleh orang Jawa. Sekarang kain batik sendiri telah dianggap pakaian resmi yang cocok untuk dipakai dalam acara apapun. Bahkan bukan hanya orang yang berkebangsawan, anak muda di seluruh Indonesia juga sering menggunakan baju bermotif batik.',
      title5: 'CIRI CIRI BATIK',
      body24:
        'Kain batik memiliki karakteristik yang unik dan tidak dimiliki oleh jenis kain lainnya. Berikut ini adalah ciri-ciri batik secara umum:',
      title6: '1. Batik Tradisional',
      body25: 'Memiliki corak dengan makna simbolik.',
      body26:
        'Corak batik terdapat variasi hias motif ular, pagoda, geometris, serta barong.',
      body27:
        'Warna batik cenderung gelap (coklat kehitaman, warna hitam) dan putih.',
      body28: 'Umumnya motif batik memiliki ciri khas daerah asalnya.',
      title7: '2. Batik Modern',
      body29: 'Corak pada batik tidak mengandung makna khusus.',
      body30:
        'Corak batik biasanya berbentuk tumbuhan, rangkaian bunga, dan lain-lain.',
      body31: 'Warna batik cenderung bebas (biru, merah, ungu, dan lain-lain).',
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
          <Text numberOfLines={5}>
            {this.state.body}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={50}>{this.state.body1}</Text>
            <Text numberOfLines={50}>{this.state.body2}</Text>
          </View>
          <Text numberOfLines={5}>
            {'\n'}
            {this.state.body3}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={50}>{this.state.body4}</Text>
            <Text numberOfLines={50}>
              {this.state.body5}
              {'\n'}
            </Text>
          </View>
          <Text>
            {this.state.title2}
            {'\n'}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={150}>
              {this.state.body6}
              {'\n'}
              {this.state.body7}
              {'\n'}
              {this.state.body8}
              {'\n'}
              {this.state.body9}
              {'\n'}
              {this.state.body10}
              {'\n'}
              {this.state.body11}
              {'\n'}
              {this.state.body12}
              {'\n'}
              {this.state.body13}
              {'\n'}
            </Text>
          </View>
          <Text numberOfLines={5}>
            {this.state.body14}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={50}>
              {this.state.body15}
              {'\n'}
              {this.state.body16}
            </Text>
          </View>
          <Text numberOfLines={5}>
            {'\n'}
            {this.state.title3}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={50}>
              {this.state.body17}
              {'\n'}
              {this.state.body18}
            </Text>
          </View>
          <Text numberOfLines={5}>
            {'\n'}
            {this.state.title4}
            {'\n'}
          </Text>
          <Text numberOfLines={150}>
            {this.state.body19}
            {'\n'}
            {this.state.body20}
            {'\n'}
            {this.state.body21}
            {'\n'}
            {this.state.body22}
            {'\n'}
            {this.state.body23}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>
            {'\n'}
            {this.state.title5}
            {'\n'}
          </Text>
          <Text numberOfLines={50}>{this.state.body24}</Text>
          <Text numberOfLines={5}>
            {'\n'}
            {this.state.title6}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={50}>
              {this.state.body25}
              {'\n'}
              {this.state.body26}
              {'\n'}
              {this.state.body27}
              {'\n'}
              {this.state.body28}
            </Text>
          </View>
          <Text numberOfLines={5}>
            {'\n'}
            {this.state.title7}
            {'\n'}
          </Text>
          <View style={Style.pd20}>
            <Text numberOfLines={100}>
              {this.state.body29}
              {'\n'}
              {this.state.body30}
              {'\n'}
              {this.state.body31}
            </Text>
          </View>
          <Text> </Text>
        </ScrollView>
      </Container>
    );
  }
}
